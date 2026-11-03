"use client";

import { useState, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { site } from "@/lib/site";

type Fields = { name: string; email: string; company: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string; mailto: string };

const TIMEOUT_MS = 25_000;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(f: Fields): Errors {
  const e: Errors = {};
  const name = f.name.trim();
  const message = f.message.trim();
  if (name.length < 2) e.name = "Please enter your name.";
  else if (name.length > 80) e.name = "Name is too long (80 characters max).";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.company.trim().length > 120) e.company = "Company is too long (120 characters max).";
  if (message.length < 20) e.message = "Please write at least 20 characters so I have some context.";
  else if (message.length > 3000) e.message = "Message is too long (3,000 characters max).";
  return e;
}

const empty: Fields = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const update = (k: keyof Fields) => (e: { target: { value: string } }) => {
    const next = { ...fields, [k]: e.target.value };
    setFields(next);
    if (touched) setErrors(validate(next));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    // Bots fill the hidden field; humans never see it.
    const honey = (e.currentTarget.elements.namedItem("_honey") as HTMLInputElement | null)?.value;
    if (honey) return;

    setStatus({ state: "sending" });
    // Pre-filled email so the visitor can still send if delivery fails.
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${fields.name.trim()}`,
    )}&body=${encodeURIComponent(
      `${fields.message.trim()}\n\n${fields.name.trim()}${fields.company.trim() ? ` · ${fields.company.trim()}` : ""}\n${fields.email.trim()}`,
    )}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          company: fields.company.trim() || "—",
          message: fields.message.trim(),
          _subject: `Portfolio enquiry from ${fields.name.trim()}`,
          _replyto: fields.email.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (res.ok && String(data.success) === "true") {
        setStatus({ state: "sent" });
        setFields(empty);
        setTouched(false);
      } else {
        // Relay messages (e.g. activation notices) are meant for the site owner, not visitors.
        throw new Error(res.ok ? "the form isn't accepting messages right now" : `request failed (${res.status})`);
      }
    } catch (err) {
      const timedOut = err instanceof DOMException && err.name === "AbortError";
      setStatus({
        state: "error",
        message: timedOut
          ? "the mail service didn't respond in time"
          : err instanceof Error
            ? err.message
            : "something went wrong",
        mailto,
      });
    } finally {
      clearTimeout(timer);
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center rounded-3xl border border-live/30 bg-live/[0.04] p-8">
        <CircleCheck className="size-8 text-live" aria-hidden />
        <h3 className="mt-5 text-2xl font-medium tracking-tight">Message sent.</h3>
        <p className="mt-2 text-muted">Thanks for reaching out. It&apos;s in my inbox and I&apos;ll reply by email.</p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 rounded-full border border-line-strong px-4 py-2 text-sm hover:border-fg"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field =
    "mt-2 w-full rounded-xl border bg-ink px-4 py-3 text-fg placeholder:text-dim outline-none transition focus:border-cyan focus:ring-2 focus:ring-cyan/20";
  const border = (k: keyof Fields) => (errors[k] ? "border-red-400/60" : "border-line-strong");

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-3xl border border-line bg-panel p-6 md:p-8" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm text-muted">Name <span className="text-cyan">*</span></label>
          <input id="cf-name" name="name" autoComplete="name" value={fields.name} onChange={update("name")}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined}
            className={`${field} ${border("name")}`} placeholder="Your name" />
          {errors.name && <p id="cf-name-err" className="mt-1.5 text-xs text-red-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm text-muted">Email <span className="text-cyan">*</span></label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={fields.email} onChange={update("email")}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined}
            className={`${field} ${border("email")}`} placeholder="you@company.com" />
          {errors.email && <p id="cf-email-err" className="mt-1.5 text-xs text-red-300">{errors.email}</p>}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="cf-company" className="text-sm text-muted">Company / role <span className="text-dim">(optional)</span></label>
        <input id="cf-company" name="company" autoComplete="organization" value={fields.company} onChange={update("company")}
          aria-invalid={!!errors.company} aria-describedby={errors.company ? "cf-company-err" : undefined}
          className={`${field} ${border("company")}`} placeholder="e.g. Founder's Office at a Series A startup" />
        {errors.company && <p id="cf-company-err" className="mt-1.5 text-xs text-red-300">{errors.company}</p>}
      </div>
      <div className="mt-5">
        <label htmlFor="cf-message" className="text-sm text-muted">Message <span className="text-cyan">*</span></label>
        <textarea id="cf-message" name="message" rows={5} value={fields.message} onChange={update("message")}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : "cf-message-hint"}
          className={`${field} ${border("message")} resize-y`} placeholder="What are you building, and where could I help?" />
        {errors.message ? (
          <p id="cf-message-err" className="mt-1.5 text-xs text-red-300">{errors.message}</p>
        ) : (
          <p id="cf-message-hint" className="mt-1.5 text-xs text-dim">{fields.message.trim().length}/3000</p>
        )}
      </div>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status.state === "error" && (
        <div role="alert" className="mt-5 flex gap-3 rounded-xl border border-red-400/30 bg-red-400/[0.06] p-4 text-sm">
          <CircleAlert className="mt-0.5 size-4 shrink-0 text-red-300" aria-hidden />
          <div className="text-fg/85">
            <p>
              Your message couldn&apos;t be sent ({status.message}). Your text is still in the form. You can send it
              from your own email app instead:
            </p>
            <a
              href={status.mailto}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan/50 px-4 py-2 text-cyan hover:bg-cyan/10"
            >
              Open in email app
            </a>
            <p className="mt-2 text-xs text-muted">Or write to {site.email}</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status.state === "sending" ? (
          <><LoaderCircle className="size-4 animate-spin" aria-hidden /> Sending…</>
        ) : (
          <><Send className="size-4" aria-hidden /> Send message</>
        )}
      </button>
    </form>
  );
}
