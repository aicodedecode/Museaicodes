"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

interface Values {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-faint transition-colors duration-150 focus:border-accent";
const labelCls =
  "mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-muted";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-accent">
          {error}
        </p>
      )}
    </div>
  );
}

/** Contact form posting to Web3Forms. Rendered only when an access key is configured. */
export default function ContactForm({ accessKey }: { accessKey: string }) {
  const [values, setValues] = useState<Values>({ name: "", email: "", subject: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: keyof Values, v: string) {
    setValues((prev) => ({ ...prev, [field]: v }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(v: Values): FieldErrors {
    const e: FieldErrors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (v.subject.trim().length < 3) e.subject = "Please add a subject (3+ characters).";
    if (v.message.trim().length < 10)
      e.message = "Please write a message of at least 10 characters.";
    else if (v.message.trim().length > 5000)
      e.message = "Please keep your message under 5,000 characters.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    // Honeypot: bots fill it — quietly "succeed" so they move on.
    if (honeypot.trim() !== "") {
      setStatus("success");
      return;
    }
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          from_name: values.name.trim(),
          reply_to: values.email.trim(),
          botcheck: "",
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;
      if (res.ok && data?.success) {
        setStatus("success");
      } else {
        throw new Error(data?.message || "Something went wrong sending your message.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  function reset() {
    setValues({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setStatus("idle");
    setErrorMsg("");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center">
        <p
          aria-hidden="true"
          className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-moss text-moss-ink"
        >
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8.5l3.2 3.2L13 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight">
          Message sent
        </h2>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Thanks for writing — we read every message and usually reply within a couple of
          days.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-lg border border-line px-5 py-2.5 text-sm font-bold transition-transform duration-150 hover:-translate-y-0.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8">
      {/* Honeypot anti-spam: invisible to humans, irresistible to bots. */}
      <div
        aria-hidden="true"
        className="absolute h-px w-px overflow-hidden"
        style={{ left: "-9999px", top: "auto" }}
      >
        <label>
          Website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="cf-name" label="Name" error={errors.name}>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={inputCls}
          />
        </Field>
        <Field id="cf-email" label="Email" error={errors.email}>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="cf-subject" label="Subject" error={errors.subject}>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={values.subject}
            onChange={(e) => set("subject", e.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "cf-subject-error" : undefined}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="cf-message" label="Message" error={errors.message}>
          <textarea
            id="cf-message"
            name="message"
            rows={6}
            placeholder="Write your message…"
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "cf-message-error" : undefined}
            className={`${inputCls} resize-y`}
          />
        </Field>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm"
        >
          <p className="font-bold">Couldn’t send your message</p>
          <p className="mt-1 text-muted">{errorMsg}</p>
          <p className="mt-2 text-muted">
            You can also email us directly at{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-bold text-accent underline-offset-4 hover:underline"
            >
              {SITE.contactEmail}
            </a>
            .
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-accent px-8 py-3.5 font-bold text-accent-ink transition-all duration-150 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="mt-4 text-sm text-faint">
        Your details are only used to reply to your query — see our{" "}
        <a href="/privacy" className="font-semibold text-muted underline-offset-4 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
