"use client";

import { useMemo, useState } from "react";
import { UPDATES, UPDATE_TAGS, formatUpdateDate, type UpdateTag } from "@/lib/updates";
import Reveal from "./Reveal";

const TAG_STYLES: Record<UpdateTag, string> = {
  Launch: "bg-accent text-white",
  Features: "bg-ink text-bg",
  Traction: "bg-moss text-moss-ink",
  Security: "border border-accent bg-accent-ink text-accent",
};

/**
 * Muse news & updates feed with tag filter chips. Newest first.
 */
export default function UpdatesFeed() {
  const [active, setActive] = useState<(typeof UPDATE_TAGS)[number]>("All");

  const entries = useMemo(
    () =>
      active === "All"
        ? UPDATES
        : UPDATES.filter((u) => u.tags.includes(active as UpdateTag)),
    [active]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter updates by topic"
        className="flex flex-wrap gap-2"
      >
        {UPDATE_TAGS.map((tag) => {
          const selected = active === tag;
          const count =
            tag === "All"
              ? UPDATES.length
              : UPDATES.filter((u) => u.tags.includes(tag as UpdateTag)).length;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-all duration-150 ${
                selected
                  ? "border-ink bg-ink text-bg"
                  : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {tag} · {count}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-faint">
        {entries.length} {entries.length === 1 ? "update" : "updates"}
        {active !== "All" && ` in ${active}`}
      </p>

      <div className="mt-6 space-y-5">
        {entries.map((u, i) => (
          <Reveal key={u.slug} delay={Math.min(i, 4) * 50}>
            <article className="rounded-[22px] border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow)] md:p-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <time
                  dateTime={u.date}
                  className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
                >
                  {formatUpdateDate(u.date)}
                </time>
                {u.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] ${TAG_STYLES[t]}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="font-display mt-4 text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight tracking-tight">
                {u.title}
              </h2>
              <p className="mt-3 max-w-[68ch] leading-relaxed text-muted">
                {u.summary}
              </p>
              <p className="mt-4 text-sm">
                <span className="text-faint">Source: </span>
                <a
                  href={u.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  {u.sourceName} <span aria-hidden="true">↗</span>
                </a>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
