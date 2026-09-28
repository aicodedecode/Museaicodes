"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { TASKS, type TaskEntry, type Verdict } from "@/lib/can-do";

const CATEGORIES = [
  "All",
  "Travel",
  "Shopping",
  "Email",
  "Productivity",
  "Research",
  "Coding",
  "Social",
  "Finance",
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

const POPULAR_TASKS = [
  "Book a flight for me",
  "Summarize my unread emails",
  "Write code from a description",
  "Find cheap flights",
  "Draft a post for me",
  "Build me a monthly budget",
];

const VERDICT_LABEL: Record<Verdict, string> = {
  yes: "Yes",
  depends: "Depends",
  no: "No",
};

const VERDICT_SR: Record<Verdict, string> = {
  yes: "Verdict: yes — Muse can do this",
  depends: "Verdict: depends — possible with setup",
  no: "Verdict: no — not something Muse does",
};

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    return true;
  } catch {
    return false;
  }
}

function highlightMatch(text: string, query: string): React.ReactNode {
  const q = query.trim();
  if (!q) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded-sm bg-accent/25 px-0.5 text-inherit">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return (
    <span className={`verdict-badge verdict-${verdict}`} role="img" aria-label={VERDICT_SR[verdict]}>
      <span className="verdict-dot" aria-hidden="true" />
      {VERDICT_LABEL[verdict]}
    </span>
  );
}

function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

function ShuffleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 3h5v5" />
      <path d="M4 20 21 3" />
      <path d="M21 16v5h-5" />
      <path d="m15 15 6 6" />
      <path d="M4 4l5 5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 7V3M15 7V3" />
      <path d="M7 7h10v4a5 5 0 0 1-10 0V7Z" />
      <path d="M12 16v5" />
    </svg>
  );
}

function TaskCard({
  entry,
  query,
  spotlight,
  copied,
  onCopy,
}: {
  entry: TaskEntry;
  query: string;
  spotlight: boolean;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <article
      className={`rounded-[18px] border bg-surface p-6 transition-colors duration-200 md:p-7 ${
        spotlight ? "border-accent shadow-[0_0_0_3px_var(--accent)]" : "border-line"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <VerdictBadge verdict={entry.verdict} />
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          {entry.category}
        </span>
      </div>

      <h3 className="font-display mt-4 text-[1.55rem] font-bold leading-tight tracking-tight">
        {highlightMatch(entry.task, query)}
      </h3>

      <p className="mt-2 leading-relaxed text-muted">{entry.whatItCanDo}</p>

      {entry.needsConnector && (
        <p className="mt-3 flex items-start gap-2 text-[0.95rem] text-ink">
          <span className="mt-1 shrink-0 text-accent" aria-hidden="true">
            <PlugIcon />
          </span>
          <span>
            <strong className="font-semibold">Needs:</strong> {entry.needsConnector}
          </span>
        </p>
      )}

      <div className="mt-4 rounded-xl border border-line bg-raised p-4">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-[0.92rem] leading-relaxed text-ink">
            <span className="sr-only">Example prompt: </span>
            &ldquo;{entry.examplePrompt}&rdquo;
          </p>
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? "Copied to clipboard" : `Copy prompt: ${entry.examplePrompt}`}
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-[0.82rem] font-semibold text-muted transition-colors duration-150 hover:border-accent hover:text-ink"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {entry.note && (
        <p className="mt-4 rounded-xl border border-line bg-raised p-4 text-[0.95rem] leading-relaxed text-muted">
          <strong className="font-semibold text-ink">Honest note: </strong>
          {entry.note}
        </p>
      )}

      <Link
        href={`/guides/${entry.guideSlug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-[0.95rem] font-bold text-accent underline-offset-4 hover:underline"
      >
        Learn more
        <ArrowIcon />
      </Link>
    </article>
  );
}

export default function CanDoThis() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [copiedTask, setCopiedTask] = useState<string | null>(null);
  const [spotlight, setSpotlight] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const counts = useMemo(() => {
    const map = new Map<CategoryFilter, number>();
    map.set("All", TASKS.length);
    for (const c of CATEGORIES.slice(1) as CategoryFilter[]) {
      map.set(c, TASKS.filter((t) => t.category === c).length);
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TASKS.filter((t) => {
      if (category !== "All" && t.category !== category) return false;
      if (!q) return true;
      const haystack = [t.task, t.whatItCanDo, t.examplePrompt, t.needsConnector ?? "", t.note ?? "", t.category]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  const verdictTally = useMemo(() => {
    const tally = { yes: 0, depends: 0, no: 0 };
    for (const t of filtered) tally[t.verdict] += 1;
    return tally;
  }, [filtered]);

  function pickPopular(taskName: string) {
    setCategory("All");
    setQuery(taskName);
    setSpotlight(taskName);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setSpotlight(null), 1800);
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function shuffle() {
    const pick = TASKS[Math.floor(Math.random() * TASKS.length)];
    pickPopular(pick.task);
  }

  function clearAll() {
    setQuery("");
    setCategory("All");
  }

  async function handleCopy(entry: TaskEntry) {
    const ok = await copyText(entry.examplePrompt);
    if (ok) {
      setCopiedTask(entry.task);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopiedTask(null), 1500);
    }
  }

  return (
    <div>
      <style>{`
        .verdict-badge {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-size: 0.76rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 0.34rem 0.8rem; border-radius: 999px; border: 1px solid;
        }
        .verdict-dot { width: 0.5rem; height: 0.5rem; border-radius: 999px; background: currentColor; flex: none; }
        .verdict-yes {
          color: var(--moss);
          border-color: color-mix(in srgb, var(--moss) 42%, transparent);
          background: color-mix(in srgb, var(--moss) 12%, transparent);
        }
        .verdict-depends {
          color: #f0b429;
          border-color: color-mix(in srgb, #f0b429 42%, transparent);
          background: color-mix(in srgb, #f0b429 12%, transparent);
        }
        .light .verdict-depends { color: #a16207; }
        .verdict-no {
          color: #f4837f;
          border-color: color-mix(in srgb, #f4837f 42%, transparent);
          background: color-mix(in srgb, #f4837f 12%, transparent);
        }
        .light .verdict-no { color: #c2412d; }
        @keyframes spotlight-pulse {
          0%, 100% { box-shadow: 0 0 0 3px var(--accent); }
          50% { box-shadow: 0 0 0 7px color-mix(in srgb, var(--accent) 35%, transparent); }
        }
        .spotlight-card { animation: spotlight-pulse 1.8s ease-in-out; }
        @media (prefers-reduced-motion: reduce) {
          .spotlight-card { animation: none; box-shadow: 0 0 0 3px var(--accent); }
        }
      `}</style>

      {/* Search */}
      <div className="relative">
        <label htmlFor="can-do-search" className="sr-only">
          Search tasks — for example, &ldquo;book a flight&rdquo; or &ldquo;refund&rdquo;
        </label>
        <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-faint" aria-hidden="true">
          <SearchIcon />
        </span>
        <input
          id="can-do-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try “book a flight”, “summarize email”, “write code”…"
          autoComplete="off"
          className="w-full rounded-xl border border-line bg-surface py-4 pl-14 pr-12 text-lg text-ink placeholder:text-faint focus:border-accent focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-faint transition-colors hover:text-ink"
          >
            <ClearIcon />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {CATEGORIES.map((c) => {
          const active = category === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-[0.9rem] font-semibold transition-colors duration-150 ${
                active
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line bg-surface text-muted hover:border-accent hover:text-ink"
              }`}
            >
              {c}
              <span className={`ml-1.5 font-mono text-[0.75rem] ${active ? "opacity-80" : "text-faint"}`}>
                {counts.get(c)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Popular quick picks + shuffle */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          Popular:
        </span>
        {POPULAR_TASKS.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => pickPopular(name)}
            className="rounded-full border border-dashed border-line bg-transparent px-3.5 py-1.5 text-[0.88rem] text-muted transition-colors duration-150 hover:border-accent hover:text-ink"
          >
            {name}
          </button>
        ))}
        <button
          type="button"
          onClick={shuffle}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-raised px-3.5 py-1.5 text-[0.88rem] font-semibold text-ink transition-colors duration-150 hover:border-accent"
        >
          <ShuffleIcon />
          Surprise me
        </button>
      </div>

      {/* Results */}
      <div ref={resultsRef} className="scroll-mt-24">
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-faint" aria-live="polite">
          {filtered.length === TASKS.length && !query && category === "All"
            ? `All ${TASKS.length} tasks`
            : `${filtered.length} of ${TASKS.length} tasks`}
          {filtered.length > 0 && (
            <>
              {" "}· {verdictTally.yes} yes · {verdictTally.depends} depends · {verdictTally.no} no
            </>
          )}
        </p>

        {filtered.length > 0 ? (
          <div className="mt-4 space-y-5">
            {filtered.map((entry) => (
              <div key={entry.task} className={spotlight === entry.task ? "spotlight-card rounded-[18px]" : undefined}>
                <TaskCard
                  entry={entry}
                  query={query}
                  spotlight={spotlight === entry.task}
                  copied={copiedTask === entry.task}
                  onCopy={() => handleCopy(entry)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-[18px] border border-dashed border-line bg-surface p-10 text-center md:p-14">
            <p className="font-display text-[1.6rem] font-bold tracking-tight">
              Nothing matches &ldquo;{query.trim()}&rdquo;
              {category !== "All" ? ` in ${category}` : ""}.
            </p>
            <p className="mx-auto mt-3 max-w-[52ch] leading-relaxed text-muted">
              Try a shorter word — &ldquo;flight&rdquo;, &ldquo;email&rdquo;, &ldquo;budget&rdquo; —
              or browse a category above. Every verdict on this page is graded honestly,
              so a missing task just means we haven&rsquo;t graded it yet.
            </p>
            <button
              type="button"
              onClick={clearAll}
              className="mt-6 rounded-full border border-accent bg-accent px-6 py-2.5 font-semibold text-accent-ink transition-transform duration-150 hover:scale-[1.03]"
            >
              Show all {TASKS.length} tasks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
