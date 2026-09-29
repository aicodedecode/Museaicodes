"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface IndexEntry {
  t: string; // title
  u: string; // url
  g: string; // group
  s: string; // snippet
  k: string; // keywords
}

interface IndexFile {
  records: IndexEntry[];
}

let cachedIndex: IndexEntry[] | null = null;
let inflight: Promise<IndexEntry[]> | null = null;

function loadIndex(): Promise<IndexEntry[]> {
  if (cachedIndex) return Promise.resolve(cachedIndex);
  if (inflight) return inflight;
  inflight = fetch("/search-index.json")
    .then((r) => {
      if (!r.ok) throw new Error(`index ${r.status}`);
      return r.json() as Promise<IndexFile>;
    })
    .then((d) => {
      cachedIndex = d.records;
      return cachedIndex;
    })
    .catch((e) => {
      inflight = null;
      throw e;
    });
  return inflight;
}

/** AND-semantics scoring: every query word must match somewhere. */
function scoreEntry(e: IndexEntry, words: string[]): number {
  const T = e.t.toLowerCase();
  const K = e.k.toLowerCase();
  const S = e.s.toLowerCase();
  let total = 0;
  for (const w of words) {
    if (T.startsWith(w)) total += 3;
    else if (T.includes(w)) total += 2;
    else if (K.includes(w)) total += 1.5;
    else if (S.includes(w)) total += 1;
    else return -1;
  }
  // Shorter titles win ties — they are usually the more specific page.
  return total + Math.max(0, 1 - e.t.length / 120);
}

const QUICK_LINKS: IndexEntry[] = [
  { t: "Token calculator", u: "/token-calculator", g: "Popular", s: "Estimate illustrative monthly token usage.", k: "" },
  { t: "Can Muse do this?", u: "/tools/can-muse-do-this", g: "Popular", s: "Honest verdicts on real tasks people try with Muse.", k: "" },
  { t: "Connectors directory", u: "/connectors", g: "Popular", s: "Every official Muse connector, verified.", k: "" },
  { t: "Invite & referral codes", u: "/codes", g: "Popular", s: "How codes work, plus the community board.", k: "" },
  { t: "What is Muse AI?", u: "/guides/what-is-muse-ai", g: "Popular", s: "The clear beginner's guide.", k: "" },
  { t: "Token price comparison", u: "/tools/token-price-compare", g: "Popular", s: "Muse prices next to ChatGPT, Claude, Gemini and more.", k: "" },
];

function Magnifier({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.4 13.4 17 17" strokeLinecap="round" />
    </svg>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-line bg-raised px-1.5 py-0.5 font-mono text-[11px] font-semibold text-muted">
      {children}
    </kbd>
  );
}

export default function SearchPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [entries, setEntries] = useState<IndexEntry[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocusRef = useRef<Element | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Global shortcut: Cmd/Ctrl+K toggles, Escape closes.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(true);
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onOpenChange]);

  // Open/close side effects: fetch index, lock scroll, manage focus.
  useEffect(() => {
    if (!open) return;
    restoreFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    setQ("");
    setActive(0);
    setFailed(false);
    loadIndex()
      .then(setEntries)
      .catch(() => setFailed(true));
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      if (restoreFocusRef.current instanceof HTMLElement) {
        restoreFocusRef.current.focus();
      }
    };
  }, [open ]);

  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length === 0 || !entries) return [];
    return entries
      .map((e) => ({ e, score: scoreEntry(e, words) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 9)
      .map((r) => r.e);
  }, [q, entries]);

  const shown: IndexEntry[] = q.trim() === "" ? QUICK_LINKS : results;

  // Consolidate groups: same section appears under one header, in first-seen order.
  const grouped = useMemo(() => {
    const groups: { name: string; items: IndexEntry[] }[] = [];
    for (const e of results) {
      const g = groups.find((x) => x.name === e.g);
      if (g) g.items.push(e);
      else groups.push({ name: e.g, items: [e] });
    }
    return groups;
  }, [results]);

  useEffect(() => setActive(0), [q]);

  const go = (e: IndexEntry) => {
    onOpenChange(false);
    router.push(e.u);
  };

  const onInputKey = (ev: React.KeyboardEvent) => {
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      setActive((a) => (a + 1) % Math.max(shown.length, 1));
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      setActive((a) => (a - 1 + shown.length) % Math.max(shown.length, 1));
    } else if (ev.key === "Enter" && shown[active]) {
      ev.preventDefault();
      go(shown[active]);
    }
  };

  // Keep the highlighted row visible while arrowing.
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  let flatIdx = -1;

  return (
    <div
      className="fixed inset-0 z-[70] bg-ink/45 p-4 pt-[10vh]"
      onClick={() => onOpenChange(false)}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-4 focus-within:ring-[3px] focus-within:ring-inset focus-within:ring-[var(--focus)]">
          <span className="text-muted">
            <Magnifier className="h-5 w-5" />
          </span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onInputKey}
            type="search"
            role="combobox"
            aria-expanded="true"
            aria-controls="site-search-results"
            aria-autocomplete="list"
            aria-label="Search guides, connectors, and tools"
            placeholder="Search guides, connectors, tools…"
            autoComplete="off"
            spellCheck={false}
            aria-activedescendant={shown.length > 0 ? `site-search-option-${active}` : undefined}
            className="h-14 w-full bg-transparent text-[1.05rem] text-ink outline-none placeholder:text-faint focus-visible:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          <Kbd>esc</Kbd>
        </div>

        <div ref={listRef} id="site-search-results" role="listbox" aria-label="Search results" className="max-h-[55vh] overflow-y-auto py-2">
          {failed ? (
            <div className="px-5 py-8 text-center">
              <p className="font-semibold text-ink">Search isn&rsquo;t available right now.</p>
              <p className="mt-1 text-sm text-muted">
                <button
                  type="button"
                  className="font-semibold text-accent underline underline-offset-2"
                  onClick={() => {
                    onOpenChange(false);
                    router.push("/guides");
                  }}
                >
                  Browse all guides instead →
                </button>
              </p>
            </div>
          ) : q.trim() === "" ? (
            <>
              <p className="px-5 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
                Popular right now
              </p>
              {QUICK_LINKS.map((e, i) => (
                <ResultRow key={e.u + e.t} e={e} idx={i} active={active === i} onGo={go} onHover={() => setActive(i)} />
              ))}
            </>
          ) : results.length === 0 ? (
            <div className="px-5 py-8 text-center">
              <p className="font-semibold text-ink">No results for &ldquo;{q.trim()}&rdquo;.</p>
              <p className="mt-1 text-sm text-muted">
                Try &ldquo;tokens&rdquo;, &ldquo;invite&rdquo;, or &ldquo;calendar&rdquo; — or{" "}
                <button
                  type="button"
                  className="font-semibold text-accent underline underline-offset-2"
                  onClick={() => {
                    onOpenChange(false);
                    router.push("/guides");
                  }}
                >
                  browse all guides →
                </button>
              </p>
            </div>
          ) : (
            grouped.map((g) => (
              <span key={g.name} className="block">
                <p className="px-5 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-faint">
                  {g.name}
                </p>
                {g.items.map((e) => {
                  flatIdx += 1;
                  const idx = flatIdx;
                  return (
                    <ResultRow key={e.u + e.t} e={e} idx={idx} active={active === idx} onGo={go} onHover={() => setActive(idx)} />
                  );
                })}
              </span>
            ))
          )}
        </div>

        <div className="flex items-center gap-4 border-t border-line px-5 py-3 text-xs text-faint">
          <span className="flex items-center gap-1.5"><Kbd>↑↓</Kbd> navigate</span>
          <span className="flex items-center gap-1.5"><Kbd>↵</Kbd> open</span>
          <span className="ml-auto hidden sm:block">{entries ? `${entries.length} pages indexed` : "Loading index…"}</span>
        </div>
      </div>
    </div>
  );
}

function ResultRow({
  e,
  idx,
  active,
  onGo,
  onHover,
}: {
  e: IndexEntry;
  idx: number;
  active: boolean;
  onGo: (e: IndexEntry) => void;
  onHover: () => void;
}) {
  return (
    <button
      type="button"
      role="option"
      id={`site-search-option-${idx}`}
      aria-selected={active}
      data-idx={idx}
      onClick={() => onGo(e)}
      onMouseMove={onHover}
      className={`block w-full px-5 py-2.5 text-left transition-colors ${active ? "bg-raised" : ""}`}
    >
      <span className="block truncate text-[0.95rem] font-semibold text-ink">{e.t}</span>
      <span className="mt-0.5 flex items-baseline justify-between gap-3">
        <span className="truncate text-sm text-muted">{e.s}</span>
        <span className="shrink-0 font-mono text-[11px] text-faint">{e.u}</span>
      </span>
    </button>
  );
}
