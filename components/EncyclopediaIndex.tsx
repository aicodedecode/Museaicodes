"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TERMS, type Term } from "@/lib/encyclopedia";
import { GUIDES } from "@/lib/guides";
import Reveal from "@/components/Reveal";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const guideTitles = new Map(GUIDES.map((g) => [g.slug, g.title]));

function guideTitle(slug: string): string {
  return guideTitles.get(slug) ?? slug;
}

interface LetterGroup {
  letter: string;
  terms: Term[];
}

export default function EncyclopediaIndex() {
  const [query, setQuery] = useState("");

  const groups: LetterGroup[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? TERMS.filter(
          (t) =>
            t.term.toLowerCase().includes(q) ||
            t.definition.toLowerCase().includes(q) ||
            t.context.toLowerCase().includes(q)
        )
      : TERMS;
    const byLetter = new Map<string, Term[]>();
    filtered.forEach((t) => {
      const letter = t.term.charAt(0).toUpperCase();
      const arr = byLetter.get(letter) ?? [];
      arr.push(t);
      byLetter.set(letter, arr);
    });
    return Array.from(byLetter.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([letter, terms]) => ({ letter, terms }));
  }, [query]);

  const activeLetters = useMemo(() => new Set(groups.map((g) => g.letter)), [groups]);
  const matchCount = groups.reduce((n, g) => n + g.terms.length, 0);

  return (
    <div>
      {/* Sticky A–Z nav + search */}
      <div className="sticky top-0 z-10 -mx-5 border-b border-line bg-bg px-5 py-3 md:-mx-6 md:px-6">
        <nav aria-label="Jump to letter" className="overflow-x-auto">
          <ol className="flex min-w-max items-center gap-1 font-mono text-[13px]">
            {LETTERS.map((l) => {
              const active = activeLetters.has(l);
              return (
                <li key={l}>
                  {active ? (
                    <a
                      href={`#letter-${l.toLowerCase()}`}
                      className="block rounded-md px-2 py-1.5 text-ink underline-offset-4 hover:bg-surface hover:text-accent hover:underline"
                    >
                      {l}
                    </a>
                  ) : (
                    <span aria-hidden="true" className="block px-2 py-1.5 text-line">
                      {l}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="mt-2">
          <label htmlFor="encyclopedia-search" className="sr-only">
            Search definitions
          </label>
          <div className="flex items-center gap-3 border-b border-line pb-2 focus-within:border-accent">
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-faint"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
            <input
              id="encyclopedia-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 40 definitions — try “tokens”, “Jolly”, “approvals”…"
              className="w-full bg-transparent text-[1rem] text-ink placeholder:text-faint focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-faint underline-offset-4 hover:text-accent hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          {query && (
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
              {matchCount} {matchCount === 1 ? "match" : "matches"}
            </p>
          )}
        </div>
      </div>

      {/* Letter groups */}
      {groups.length > 0 ? (
        <div className="mt-6">
          {groups.map((group, gi) => (
            <Reveal key={group.letter} delay={Math.min(gi * 40, 160)}>
              <section
                id={`letter-${group.letter.toLowerCase()}`}
                aria-label={`Terms starting with ${group.letter}`}
                className="scroll-mt-36 border-t border-line pt-8 md:pt-10"
                style={gi > 0 ? { marginTop: "3rem" } : undefined}
              >
                <div className="flex items-baseline gap-4">
                  <h2 className="font-display text-[clamp(2.75rem,6vw,4.25rem)] font-extrabold leading-none tracking-tight text-ink">
                    {group.letter}
                  </h2>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    {group.terms.length} {group.terms.length === 1 ? "term" : "terms"}
                  </p>
                </div>

                <dl className="mt-6">
                  {group.terms.map((t) => (
                    <div
                      key={t.term}
                      className="border-t border-line py-6 first:mt-2 md:py-7"
                    >
                      <dt className="font-display text-[1.35rem] font-bold tracking-tight text-ink md:text-[1.5rem]">
                        {t.term}
                      </dt>
                      <dd className="mt-3 max-w-[70ch]">
                        <p className="text-[1.05rem] font-medium leading-relaxed text-ink">
                          {t.definition}
                        </p>
                        <p className="mt-3 leading-relaxed text-muted">{t.context}</p>
                        <p className="mt-4">
                          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                            Related guides
                          </span>{" "}
                          <span className="ml-1 inline-flex flex-wrap gap-x-4 gap-y-1">
                            {t.guideSlugs.map((slug) => (
                              <Link
                                key={slug}
                                href={`/guides/${slug}`}
                                className="font-bold text-accent underline-offset-4 hover:underline"
                              >
                                {guideTitle(slug)} <span aria-hidden="true">→</span>
                              </Link>
                            ))}
                          </span>
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-[22px] border border-line bg-surface p-8 text-center md:p-12">
          <p className="font-display text-[1.5rem] font-bold tracking-tight">
            No terms match “{query.trim()}”.
          </p>
          <p className="mx-auto mt-3 max-w-[52ch] leading-relaxed text-muted">
            Try a shorter word — “token”, “avatar”, “email” — or browse the A–Z
            list above.
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-6 rounded-full bg-accent px-6 py-2.5 font-bold text-accent-ink transition-opacity hover:opacity-90"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
