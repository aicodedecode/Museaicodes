"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { GUIDES, guideUrl } from "@/lib/guides";
import Reveal from "./Reveal";

/** Client-side search/filter over the 15 guides (the "logic" on the homepage). */
export default function GuideSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GUIDES;
    return GUIDES.filter((g) =>
      `${g.title} ${g.deck} ${g.category} ${g.keywords}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex w-full max-w-[460px] items-center gap-3 rounded-xl border border-line bg-surface px-4">
          <span aria-hidden="true" className="text-muted">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, comparisons, or access"
            aria-label="Search the 15 Muse AI guides"
            className="min-h-[52px] w-full bg-transparent text-ink outline-none placeholder:text-faint"
          />
        </label>
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-faint" aria-live="polite">
          {results.length} {results.length === 1 ? "guide" : "guides"}
        </span>
      </div>

      {results.length === 0 ? (
        <p className="rounded-xl border border-line bg-surface p-8 text-center text-muted">
          No guides match “{query}”. Try “invite”, “WhatsApp”, or “compare”.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {results.map((g, i) => (
            <Reveal key={g.slug} delay={Math.min(i, 5) * 60}>
              <Link
                href={guideUrl(g.slug)}
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  {String(GUIDES.indexOf(g) + 1).padStart(2, "0")} · {g.category}
                </span>
                <span className="mt-4 font-display text-[1.45rem] font-semibold leading-snug tracking-tight group-hover:text-accent">
                  {g.title}
                </span>
                <span className="mt-2 text-[0.95rem] text-muted">{g.deck}</span>
                <span className="mt-auto pt-5 text-sm font-bold text-ink">
                  Read guide <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
