"use client";

import { useState } from "react";
import { PROMPTS } from "@/lib/prompts";

/** Deterministic prompt-of-the-day: rotates once per UTC day. */
export default function PromptOfDay() {
  const [copied, setCopied] = useState(false);
  if (PROMPTS.length === 0) return null;
  const dayIndex = Math.floor(Date.now() / 86_400_000);
  const p = PROMPTS[dayIndex % PROMPTS.length];

  async function copy() {
    try {
      await navigator.clipboard.writeText(p.prompt);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = p.prompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section
      aria-labelledby="potd-h"
      className="rounded-[22px] border border-line bg-surface p-6 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="kicker">Prompt of the day</p>
          <h2
            id="potd-h"
            className="font-display mt-2 text-[1.6rem] font-extrabold tracking-tight"
          >
            {p.title}
          </h2>
          <p className="font-mono mt-1 text-[11px] uppercase tracking-[0.12em] text-faint">
            {p.category}
          </p>
        </div>
        <button
          type="button"
          onClick={copy}
          className="rounded-full bg-ink px-5 py-2.5 text-[0.85rem] font-bold text-bg transition-opacity hover:opacity-85"
        >
          {copied ? "Copied ✓" : "Copy prompt"}
        </button>
      </div>
      <p className="mt-4 max-w-[760px] whitespace-pre-wrap text-[0.98rem] leading-relaxed text-muted">
        {p.prompt}
      </p>
      <p className="mt-4 text-[0.8rem] text-faint">
        A new pick every day — the full library of {PROMPTS.length} prompts is
        below.
      </p>
    </section>
  );
}
