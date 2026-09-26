"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "done" | "error" | "not_configured";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Newsletter signup card. Posts to /api/newsletter, which forwards to
 * Buttondown when BUTTONDOWN_API_KEY is configured. No key is ever exposed
 * to the client; the API returns not_configured and we show a graceful note.
 */
export default function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("done");
      } else if (data.reason === "not_configured") {
        setStatus("not_configured");
      } else {
        setStatus("error");
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "done") {
    return (
      <Reveal>
        <div
          role="status"
          className={`rounded-[26px] border border-line bg-surface p-6 md:p-8 ${compact ? "" : ""}`}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Newsletter
          </p>
          <p className="font-display mt-3 text-[1.6rem] font-bold tracking-tight">
            You&rsquo;re on the list.
          </p>
          <p className="mt-2 text-muted">
            Watch your inbox — Muse updates, new guides, and code drops, once a
            week at most. No spam, unsubscribe anytime.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <div className="rounded-[26px] border border-line bg-surface p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          Newsletter
        </p>
        <p className="font-display mt-3 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight">
          Muse updates, in your inbox.
        </p>
        <p className="mt-2 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted">
          New features, offer changes, fresh guides, and community codes. Once
          a week at most — unsubscribe anytime.
        </p>
        {status === "not_configured" ? (
          <p className="mt-5 rounded-xl border border-line bg-bg p-4 text-sm text-muted">
            We&rsquo;re setting up the newsletter — check back soon.
          </p>
        ) : (
          <form onSubmit={submit} className="mt-5" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending"}
                className="w-full flex-1 rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-faint focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white transition-transform duration-150 hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "sending" ? "Joining…" : "Subscribe"}
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-sm font-semibold text-accent">
                {error}
              </p>
            )}
            <p className="mt-3 text-xs text-faint">
              We only use your email for the newsletter. No selling, no spam.
            </p>
          </form>
        )}
      </div>
    </Reveal>
  );
}
