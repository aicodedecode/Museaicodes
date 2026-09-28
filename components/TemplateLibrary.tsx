"use client";

import { useState } from "react";
import Link from "next/link";
import { TEMPLATES, TEMPLATE_CATEGORIES, type AgentTemplate } from "@/lib/templates";
import { getGuide, guideUrl } from "@/lib/guides";
import { useToast } from "./Toast";
import Reveal from "./Reveal";

const FILTERS: readonly string[] = ["All", ...TEMPLATE_CATEGORIES];

async function copyInstructions(text: string): Promise<boolean> {
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

function TemplateCard({ template, index }: { template: AgentTemplate; index: number }) {
  const { notify } = useToast();
  const [copied, setCopied] = useState(false);
  const guide = getGuide(template.guideSlug);

  const handleCopy = async () => {
    const ok = await copyInstructions(template.instructions);
    if (ok) {
      setCopied(true);
      notify("Template copied");
      setTimeout(() => setCopied(false), 1400);
    } else {
      notify("Copy failed — select the text manually");
    }
  };

  return (
    <Reveal delay={Math.min(index, 3) * 60}>
      <article
        id={template.slug}
        className="scroll-mt-24 rounded-2xl border border-line bg-surface p-6 transition-shadow duration-200 hover:shadow-[var(--shadow)] md:p-8"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
          {template.category}
        </span>
        <h2 className="mt-3 text-[1.6rem] font-bold leading-tight tracking-tight">
          {template.title}
        </h2>
        <p className="mt-2 max-w-[640px] text-[1.02rem] leading-relaxed text-muted">
          {template.tagline}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
              When to use
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
              {template.whenToUse}
            </p>

            <h3 className="mt-7 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
              Tips
            </h3>
            <ul className="mt-3 space-y-2.5">
              {template.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-3 text-[0.95rem] leading-relaxed text-muted"
                >
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            {guide && (
              <Link
                href={guideUrl(guide.slug)}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-muted transition-colors hover:text-accent"
              >
                Related guide: {guide.title} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-line bg-raised">
              <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  Paste-ready instructions
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`rounded-lg px-3.5 py-2 text-sm font-bold transition-colors duration-150 ${
                    copied
                      ? "bg-moss text-moss-ink"
                      : "bg-surface text-ink hover:bg-line"
                  }`}
                >
                  {copied ? "Copied ✓" : "Copy instructions"}
                </button>
              </div>
              <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap p-5 font-mono text-[0.82rem] leading-[1.7] text-ink">
                {template.instructions}
              </pre>
            </div>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">
              Paste this as the first message in a new Muse chat, fill in every
              [bracket], then answer its questions.
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function TemplateLibrary() {
  const [filter, setFilter] = useState<string>("All");
  const visible = TEMPLATES.filter(
    (t) => filter === "All" || t.category === filter,
  );

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter templates by category"
      >
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
      <div className="flex flex-col gap-6">
        {visible.map((t, i) => (
          <TemplateCard key={t.slug} template={t} index={i} />
        ))}
      </div>
    </div>
  );
}
