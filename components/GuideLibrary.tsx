"use client";

import { useMemo, useRef, useState } from "react";
import { GUIDES } from "@/lib/guides";
import GuideCard from "./GuideCard";
import Reveal from "./Reveal";

const CATEGORIES: string[] = [
  "All",
  ...Array.from(new Set(GUIDES.map((g) => g.category))),
];

function categoryCount(cat: string): number {
  return cat === "All" ? GUIDES.length : GUIDES.filter((g) => g.category === cat).length;
}

/**
 * Full guide library: category tabs (keyboard-navigable tablist) + live search.
 * Tabs use proper tablist semantics; arrow keys move between tabs, the active
 * tab gets an animated underline indicator.
 */
export default function GuideLibrary() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const inCategory =
      active === "All" ? GUIDES : GUIDES.filter((g) => g.category === active);
    if (!q) return inCategory;
    return inCategory.filter((g) =>
      `${g.title} ${g.deck} ${g.category} ${g.keywords}`.toLowerCase().includes(q)
    );
  }, [active, query]);

  const selectTab = (cat: string, focus = false) => {
    setActive(cat);
    if (focus) {
      const i = CATEGORIES.indexOf(cat);
      tabRefs.current[i]?.focus();
    }
  };

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    const i = CATEGORIES.indexOf(active);
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (i + 1) % CATEGORIES.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + CATEGORIES.length) % CATEGORIES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = CATEGORIES.length - 1;
    if (next !== null) {
      e.preventDefault();
      selectTab(CATEGORIES[next], true);
    }
  };

  return (
    <div>
      {/* Tabs + search */}
      <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div
          role="tablist"
          aria-label="Filter guides by category"
          onKeyDown={onTabKeyDown}
          className="flex flex-wrap gap-1.5"
        >
          {CATEGORIES.map((cat, i) => {
            const selected = active === cat;
            return (
              <button
                key={cat}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(cat)}
                className={`relative rounded-full px-4 py-2.5 text-sm font-bold transition-colors duration-150 ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {cat}
                <span className="ml-1.5 font-mono text-[11px] text-faint">
                  {categoryCount(cat)}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-[2.5px] origin-left rounded-full bg-accent transition-transform duration-200 ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>
        <label className="flex w-full max-w-[460px] items-center gap-3 rounded-xl border border-line bg-surface px-4 lg:w-auto lg:flex-1">
          <span aria-hidden="true" className="text-muted">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, comparisons, or access"
            aria-label="Search the Muse AI guides"
            className="min-h-[52px] w-full bg-transparent text-ink outline-none placeholder:text-faint"
          />
        </label>
      </div>

      <p className="mb-6 font-mono text-xs uppercase tracking-[0.1em] text-faint" aria-live="polite">
        {results.length} {results.length === 1 ? "guide" : "guides"}
        {active !== "All" && ` in ${active}`}
        {query.trim() && ` matching “${query.trim()}”`}
      </p>

      {results.length === 0 ? (
        <p className="rounded-xl border border-line bg-surface p-8 text-center text-muted">
          No guides match. Try “invite”, “WhatsApp”, or “compare”.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2" role="tabpanel" aria-label={`${active} guides`}>
          {results.map((g, i) => (
            <Reveal key={g.slug} delay={Math.min(i, 5) * 60} className="h-full">
              <GuideCard guide={g} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
