"use client";

import { FormEvent, useState } from "react";

type FormState = { kind: "idle" | "success" | "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setState({ kind: "idle", message: "" });
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please email us instead.");
      form.reset();
      setState({ kind: "success", message: "Thanks — your message has been sent. Our team will be in touch." });
    } catch (error) {
      setState({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong. Please email us instead." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" required maxLength={100} /></label><label>Work email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
      <div className="form-row"><label>Company <span>(optional)</span><input name="company" autoComplete="organization" maxLength={120} /></label><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select an area</option><option>AI software</option><option>Custom software</option><option>ERP / OS systems</option><option>App engineering</option><option>AI automations</option><option>Web apps</option><option>AI & data systems</option><option>Cloud & infrastructure</option><option>Something else</option></select></label></div>
      <label>Tell us a little about the project<textarea name="message" rows={4} required minLength={12} maxLength={4000} /></label>
      <label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-actions"><button className="button button-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send project details"}<span aria-hidden="true">↗</span></button><p>We’ll use these details to respond to your enquiry.</p></div>
      <p className={`form-feedback ${state.kind}`} role="status" aria-live="polite">{state.message}</p>
    </form>
  );
}
