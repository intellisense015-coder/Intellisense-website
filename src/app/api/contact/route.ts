import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(100).regex(/^[^\r\n<>]+$/),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().default(""),
  help: z.enum([
    "Custom software",
    "AI automation",
    "RAG or knowledge systems",
    "Web or mobile product",
    "Business workflow improvement",
    "Existing system improvement",
    "Other",
  ]),
  message: z.string().trim().min(12).max(4000),
  website: z.string().max(0).optional().default(""),
  turnstileToken: z.string().trim().min(1).max(2048),
  formStartedAt: z.coerce.number().int().positive(),
});

const helpAreas = {
  "Custom software": "custom_software",
  "AI automation": "ai_automation",
  "RAG or knowledge systems": "rag_knowledge_systems",
  "Web or mobile product": "web_mobile_product",
  "Business workflow improvement": "business_workflow_improvement",
  "Existing system improvement": "existing_system_improvement",
  Other: "other",
} as const;

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const originUrl = new URL(origin);
    const siteOrigin = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://intellisense.cloud").origin;
    const allowed = new Set<string>([siteOrigin]);
    // The request URL is the authoritative host for this deployment. This
    // covers Vercel deployment aliases even when its runtime host variables
    // are unavailable or differ from the alias shown in the browser.
    allowed.add(new URL(request.url).origin);
    if (siteOrigin === "https://intellisense.cloud") allowed.add("https://www.intellisense.cloud");
    if (siteOrigin === "https://www.intellisense.cloud") allowed.add("https://intellisense.cloud");
    // Vercel Preview URLs are generated per deployment. NODE_ENV is still
    // "production" there, so use Vercel's trusted runtime host variables.
    for (const host of [process.env.VERCEL_URL, process.env.VERCEL_BRANCH_URL]) {
      if (host) allowed.add(`https://${host}`);
    }
    allowed.add("http://localhost:3000");
    allowed.add("http://127.0.0.1:3000");
    return allowed.has(originUrl.origin);
  } catch {
    return false;
  }
}

function errorResponse(error: string, status: number) {
  return NextResponse.json({ error }, { status, headers: { "cache-control": "no-store" } });
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return errorResponse("Request could not be verified.", 403);
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return errorResponse("Unsupported request format.", 415);
  }

  let raw: unknown;
  try {
    const text = await request.text();
    if (Buffer.byteLength(text, "utf8") > 16_000) return errorResponse("Message is too large.", 413);
    raw = JSON.parse(text);
  } catch {
    return errorResponse("Invalid request.", 400);
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) return errorResponse("Please check the form fields and try again.", 400);
  if (parsed.data.website) return NextResponse.json({ success: true });
  if (Date.now() - parsed.data.formStartedAt < 700) {
    return errorResponse("Please take a moment to review your message before sending.", 400);
  }

  const workerUrl = process.env.CONTACT_WORKER_URL;
  const workerSecret = process.env.WORKER_SHARED_SECRET;
  if (!workerUrl || !workerSecret) return errorResponse("Contact service is temporarily unavailable.", 503);

  let workerResponse: Response;
  try {
    // The browser origin is checked above. The Worker receives one stable
    // canonical origin so Preview deployment URLs never require a Worker
    // redeploy or a new Turnstile hostname.
    const workerOrigin = process.env.CONTACT_WORKER_ORIGIN || "https://intellisense.cloud";
    workerResponse = await fetch(`${workerUrl.replace(/\/$/, "")}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: workerOrigin,
        "x-intellisense-worker-secret": workerSecret,
      },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        helpArea: helpAreas[parsed.data.help],
        projectDescription: parsed.data.message,
        turnstileToken: parsed.data.turnstileToken,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    return errorResponse("Contact service is temporarily unavailable.", 503);
  }

  let workerResult: { success?: boolean; error?: string; requestId?: string } = {};
  try {
    workerResult = await workerResponse.json();
  } catch {
    // Keep malformed upstream responses generic.
  }
  if (!workerResponse.ok) {
    const message = typeof workerResult.error === "string" && workerResult.error.length <= 160
      ? workerResult.error
      : "We could not save your message. Please try again.";
    return errorResponse(message, workerResponse.status >= 500 ? 503 : workerResponse.status);
  }

  const requestId = workerResult.requestId || "unknown";
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "info@intellisense.cloud";
  if (!apiKey || !from) {
    console.error("contact_notification_not_configured", { requestId });
    return errorResponse("Your message was saved, but email notifications are not configured for this deployment.", 503);
  }

  const { name, email, company, help, message } = parsed.data;
  const plainMessage = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : "",
    `Interested in: ${help}`,
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
    if (!response.ok) {
      console.error("contact_notification_failed", { requestId, status: response.status });
      return errorResponse("Your message was saved, but the notification email could not be sent.", 503);
    }
  } catch {
    console.error("contact_notification_failed", { requestId });
    return errorResponse("Your message was saved, but the notification email could not be sent.", 503);
  }

  return NextResponse.json({ success: true });
}
