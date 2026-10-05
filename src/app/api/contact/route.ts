import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[^\r\n<>]+$/),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().default(""),
  service: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(12).max(4000),
  website: z.string().max(0).optional().default(""),
});

const localRequests = new Map<string, { count: number; reset: number }>();
let redisLimiter: Ratelimit | null = null;

function getLimiter() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  if (!redisLimiter) {
    redisLimiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      analytics: false,
      prefix: "intellisense:contact",
    });
  }
  return redisLimiter;
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const originUrl = new URL(origin);
    const allowed = new Set<string>([
      new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://intellisense.cloud").origin,
    ]);
    if (process.env.NODE_ENV !== "production") {
      allowed.add("http://localhost:3000");
      allowed.add("http://127.0.0.1:3000");
    }
    return allowed.has(originUrl.origin);
  } catch {
    return false;
  }
}

async function checkRateLimit(request: NextRequest) {
  const ip = request.headers.get("x-vercel-forwarded-for")
    || request.headers.get("x-real-ip")
    || request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim()
    || "unknown";
  const limiter = getLimiter();
  if (limiter) {
    const result = await limiter.limit(ip);
    return result.success;
  }
  if (process.env.NODE_ENV === "production") throw new Error("Production rate limiting is not configured.");
  const now = Date.now();
  const current = localRequests.get(ip);
  if (!current || current.reset < now) {
    localRequests.set(ip, { count: 1, reset: now + 60 * 60 * 1000 });
    return true;
  }
  current.count += 1;
  return current.count <= 5;
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Request could not be verified." }, { status: 403 });
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return NextResponse.json({ error: "Unsupported request format." }, { status: 415 });
  }
  let raw: unknown;
  try {
    const text = await request.text();
    if (Buffer.byteLength(text, "utf8") > 16_000) return NextResponse.json({ error: "Message is too large." }, { status: 413 });
    raw = JSON.parse(text);
  } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const parsed = schema.safeParse(raw);
  if (!parsed.success) return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ success: true });

  try {
    if (!(await checkRateLimit(request))) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
  } catch {
    return NextResponse.json({ error: "Contact service is temporarily unavailable." }, { status: 503 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "info@intellisense.cloud";
  if (!apiKey || !from) return NextResponse.json({ error: "Contact service is not configured yet. Please email info@intellisense.cloud." }, { status: 503 });

  const { name, email, company, service, message } = parsed.data;
  const plainMessage = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    service ? `Interested in: ${service}` : "",
    "",
    "Project details:",
    message,
  ].filter(Boolean).join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website enquiry from ${name}`, text: plainMessage }),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) return NextResponse.json({ error: "We could not send your message. Please email info@intellisense.cloud." }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Contact service is temporarily unavailable. Please email info@intellisense.cloud." }, { status: 502 });
  }
}
