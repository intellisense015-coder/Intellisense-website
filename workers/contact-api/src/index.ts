const MAX_BODY_BYTES = 16_000;
const MAX_TURNSTILE_TOKEN_LENGTH = 2_048;
const DEFAULT_ALLOWED_ORIGIN = "https://intellisense.cloud";

const HELP_AREAS = new Set([
  "custom_software",
  "ai_automation",
  "rag_knowledge_systems",
  "web_mobile_product",
  "business_workflow_improvement",
  "existing_system_improvement",
  "other",
]);

type D1RunResult = { success: boolean; meta?: Record<string, unknown> };

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>;
  run(): Promise<D1RunResult>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface RateLimiter {
  limit(input: { key: string }): Promise<{ success: boolean }>;
}

interface Env {
  DB: D1Database;
  RATE_LIMITER: RateLimiter;
  ALLOWED_ORIGIN?: string;
  TURNSTILE_SECRET_KEY?: string;
  WORKER_SHARED_SECRET?: string;
}

type ContactPayload = {
  name: string;
  email: string;
  company: string | null;
  helpArea: string;
  projectDescription: string;
  turnstileToken: string;
};

function json(data: Record<string, unknown>, status: number, origin?: string, allowedOrigin = DEFAULT_ALLOWED_ORIGIN) {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    "referrer-policy": "no-referrer",
  });
  if (origin === allowedOrigin) {
    headers.set("access-control-allow-origin", allowedOrigin);
    headers.set("vary", "Origin");
  }
  return new Response(JSON.stringify(data), { status, headers });
}

function normalizeText(value: unknown, maxLength: number, required: boolean) {
  if (typeof value !== "string") return null;
  const normalized = value.normalize("NFKC").replace(/\r\n?/g, "\n").trim();
  if (normalized.length > maxLength) return null;
  if (required && normalized.length === 0) return null;
  if (/\u0000/.test(normalized)) return null;
  return normalized;
}

function normalizeEmail(value: unknown) {
  const email = normalizeText(value, 254, true)?.toLowerCase();
  if (!email || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) return null;
  return email;
}

function parsePayload(input: unknown): ContactPayload | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const data = input as Record<string, unknown>;
  const name = normalizeText(data.name, 100, true);
  const email = normalizeEmail(data.email);
  const company = normalizeText(data.company, 120, false);
  const helpArea = normalizeText(data.helpArea, 64, true);
  const projectDescription = normalizeText(data.projectDescription, 4_000, true);
  const turnstileToken = normalizeText(data.turnstileToken, MAX_TURNSTILE_TOKEN_LENGTH, true);

  if (!name || name.length < 2 || /[<>]/.test(name)) return null;
  if (!email || !helpArea || !HELP_AREAS.has(helpArea)) return null;
  if (!projectDescription || projectDescription.length < 12) return null;
  if (!turnstileToken) return null;

  return { name, email, company: company || null, helpArea, projectDescription, turnstileToken };
}

async function readJson(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) return null;
  const body = await request.arrayBuffer();
  if (body.byteLength > MAX_BODY_BYTES) return null;
  try {
    return JSON.parse(new TextDecoder().decode(body)) as unknown;
  } catch {
    return null;
  }
}

async function verifyTurnstile(token: string, secret: string) {
  const form = new FormData();
  form.set("secret", secret);
  form.set("response", token);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form,
  });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

async function rateLimit(email: string, limiter: RateLimiter) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`contact:${email}`));
  const key = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  const result = await limiter.limit({ key });
  return result.success;
}

const worker = {
  async fetch(request: Request, env: Env) {
    const origin = request.headers.get("origin") || undefined;
    const expectedOrigin = env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;
    const respond = (data: Record<string, unknown>, status: number) => json(data, status, origin, expectedOrigin);

    if (new URL(request.url).pathname !== "/contact") return respond({ error: "Not found." }, 404);
    if (request.method !== "POST") return respond({ error: "Method not allowed." }, 405);
    // This endpoint is server-to-server. The shared secret is the trust
    // boundary; requiring a browser Origin here breaks Vercel deployment
    // aliases and provides no additional protection for a server request.
    if (!env.WORKER_SHARED_SECRET || request.headers.get("x-intellisense-worker-secret") !== env.WORKER_SHARED_SECRET) {
      return respond({ error: "Request could not be verified." }, 403);
    }
    if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return respond({ error: "Unsupported request format." }, 415);
    }

    const parsed = parsePayload(await readJson(request));
    if (!parsed) return respond({ error: "Please check the form fields and try again." }, 400);
    if (!env.TURNSTILE_SECRET_KEY) return respond({ error: "Contact service is temporarily unavailable." }, 503);

    try {
      if (!(await verifyTurnstile(parsed.turnstileToken, env.TURNSTILE_SECRET_KEY))) {
        return respond({ error: "Please verify the anti-spam check and try again." }, 400);
      }
      if (!(await rateLimit(parsed.email, env.RATE_LIMITER))) {
        return respond({ error: "Too many requests. Please try again later." }, 429);
      }

      const now = new Date().toISOString();
      const duplicateSince = new Date(Date.now() - 10 * 60 * 1000).toISOString();
      const duplicate = await env.DB.prepare(
        "SELECT id FROM contact_submissions WHERE email = ? AND project_description = ? AND created_at >= ? LIMIT 1",
      ).bind(parsed.email, parsed.projectDescription, duplicateSince).all<{ id: string }>();
      if (duplicate.results.length > 0) return respond({ success: true }, 200);

      const requestId = crypto.randomUUID();
      const id = crypto.randomUUID();
      await env.DB.prepare(
        `INSERT INTO contact_submissions
          (id, name, email, company, help_area, project_description, status, source, request_id, turnstile_verified, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, 'new', 'website_contact_form', ?, 1, ?, ?)`,
      ).bind(
        id,
        parsed.name,
        parsed.email,
        parsed.company,
        parsed.helpArea,
        parsed.projectDescription,
        requestId,
        now,
        now,
      ).run();

      return respond({ success: true, requestId }, 200);
    } catch {
      return respond({ error: "Contact service is temporarily unavailable." }, 503);
    }
  },
};

export default worker;
