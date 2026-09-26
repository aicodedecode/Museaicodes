"use client";

import { useState } from "react";
import { PROMPTS, type PromptCard } from "@/lib/prompts";
import { useToast } from "./Toast";
import Reveal from "./Reveal";

const FILTERS = ["All", "Build", "Research", "Create", "Decide"] as const;

async function copyPrompt(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch { /* legacy fallback */ }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { ok = false; }
  document.body.removeChild(ta);
  return ok;
}

function PromptTile({ card, index }: { card: PromptCard; index: number }) {
  const { notify } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyPrompt(card.prompt);
    if (ok) {
      setCopied(true);
      notify("Prompt copied");
      setTimeout(() => setCopied(false), 1400);
    } else {
      notify("Copy failed — select the text manually");
    }
  };

  return (
    <Reveal delay={Math.min(index, 5) * 60}>
      <article className="flex h-full min-h-[250px] flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
          {card.category}
        </span>
        <h3 className="mt-4 text-[1.25rem] font-bold leading-snug">{card.title}</h3>
        <p className="mb-6 mt-2 text-[0.95rem] text-muted">{card.prompt}</p>
        <button
          type="button"
          onClick={handleCopy}
          className={`mt-auto self-start rounded-lg px-3.5 py-2.5 text-sm font-bold transition-colors duration-150 ${
            copied ? "bg-moss text-moss-ink" : "bg-raised text-ink hover:bg-line"
          }`}
        >
          {copied ? "Copied ✓" : "Copy prompt"}
        </button>
      </article>
    </Reveal>
  );
}

export default function PromptLibrary() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = PROMPTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter prompts by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors duration-150 ${
              filter === f
                ? "border-ink bg-ink text-bg"
                : "border-line text-muted hover:text-ink hover:border-faint"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((card, i) => (
          <PromptTile key={card.title} card={card} index={i} />
        ))}
      </div>
    </div>
  );
}
