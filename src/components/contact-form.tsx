"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type FormState = { kind: "idle" | "success" | "error"; message: string };
type FieldName = "name" | "email" | "company" | "help" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const helpOptions = [
  "Custom software",
  "AI automation",
  "RAG or knowledge systems",
  "Web or mobile product",
  "Business workflow improvement",
  "Existing system improvement",
  "Other",
];

const previewTurnstileSiteKey = "1x00000000000000000000AA";
const turnstileSiteKey = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
  ? previewTurnstileSiteKey
  : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

function validate(values: Record<string, FormDataEntryValue>): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(values.name ?? "").trim();
  const email = String(values.email ?? "").trim();
  const help = String(values.help ?? "").trim();
  const message = String(values.message ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid work email.";
  if (!helpOptions.includes(help)) errors.help = "Please choose an area we can help with.";
  if (message.length < 12) errors.message = "Please share a little more about the project.";
  return errors;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [busy, setBusy] = useState(false);
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setState({ kind: "idle", message: "" });
    if (Object.keys(nextErrors).length > 0) return;
    if (!String(values["cf-turnstile-response"] ?? "").trim()) {
      setState({ kind: "error", message: "Please complete the anti-spam check and try again." });
      return;
    }

    setBusy(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken: values["cf-turnstile-response"], formStartedAt: startedAt }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please email us instead.");
      form.reset();
      window.turnstile?.reset();
      setErrors({});
      setState({ kind: "success", message: "Thanks — your message is on its way. We’ll be in touch soon." });
    } catch (error) {
      setState({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong. Please email us instead." });
    } finally {
      setBusy(false);
    }
  }

  function clearError(name: FieldName) {
    if (!errors[name]) return;
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  if (state.kind === "success") {
    return (
      <div className="contact-success" role="status" aria-live="polite">
        <span className="contact-success-mark" aria-hidden="true">✓</span>
        <h3>Thanks — we’ve got it.</h3>
        <p>{state.message} We usually reply within one business day.</p>
        <a href="mailto:info@intellisense.cloud">Email us directly</a>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="contact-name">Your name <span className="required-mark">Required</span>
          <input id="contact-name" name="name" autoComplete="name" required maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} onChange={() => clearError("name")} />
          {errors.name && <small id="contact-name-error" className="field-error" role="alert">{errors.name}</small>}
        </label>
        <label htmlFor="contact-email">Work email <span className="required-mark">Required</span>
          <input id="contact-email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} onChange={() => clearError("email")} />
          {errors.email && <small id="contact-email-error" className="field-error" role="alert">{errors.email}</small>}
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="contact-company">Company <span>(Optional)</span>
          <input id="contact-company" name="company" autoComplete="organization" maxLength={120} />
        </label>
        <label htmlFor="contact-help">How can we help? <span className="required-mark">Required</span>
          <select id="contact-help" name="help" defaultValue="" required aria-invalid={Boolean(errors.help)} aria-describedby={errors.help ? "contact-help-error" : undefined} onChange={() => clearError("help")}>
            <option value="" disabled>Select an area</option>
            {helpOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.help && <small id="contact-help-error" className="field-error" role="alert">{errors.help}</small>}
        </label>
      </div>
      <label htmlFor="contact-message">Tell us about the project <span className="required-mark">Required</span>
        <textarea id="contact-message" name="message" rows={5} required minLength={12} maxLength={4000} placeholder="What are you trying to build, improve, or automate?" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} onChange={() => clearError("message")} />
        {errors.message && <small id="contact-message-error" className="field-error" role="alert">{errors.message}</small>}
      </label>
      {turnstileSiteKey && <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />}
      <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-actions"><button className="button button-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Start the conversation"}</button><p>We usually reply within one business day. No pressure—just a clear next step.</p></div>
      {state.kind === "error" && <p className="form-feedback error" role="alert">{state.message}</p>}
    </form>
  );
}
