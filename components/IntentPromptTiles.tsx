"use client";

import { useState } from "react";
import Reveal from "./Reveal";

/** Copy helper mirrored from PromptLibrary: clipboard API with legacy fallback. */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* legacy fallback */
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

export interface IntentPrompt {
  title: string;
  prompt: string;
}

function PromptTile({ item, index }: { item: IntentPrompt; index: number }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyText(item.prompt);
    setCopied(ok);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Reveal delay={Math.min(index, 5) * 60}>
      <article className="flex h-full min-h-[240px] flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
        <h3 className="text-[1.2rem] font-bold leading-snug tracking-tight">
          {item.title}
        </h3>
        <p className="mb-6 mt-3 whitespace-pre-line text-[0.95rem] leading-relaxed text-muted">
          {item.prompt}
        </p>
        <button
          type="button"
          onClick={handleCopy}
          aria-live="polite"
          className={`mt-auto self-start rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors duration-150 ${
            copied
              ? "bg-moss text-moss-ink"
              : "bg-raised text-ink hover:bg-line"
          }`}
        >
          {copied ? "Copied ✓" : "Copy prompt"}
        </button>
      </article>
    </Reveal>
  );
}

/** Copy-paste prompt tiles for intent pages. Client component: copy buttons. */
export default function IntentPromptTiles({
  prompts,
}: {
  prompts: IntentPrompt[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {prompts.map((p, i) => (
        <PromptTile key={p.title} item={p} index={i} />
      ))}
    </div>
  );
}
