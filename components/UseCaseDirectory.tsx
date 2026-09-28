"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PERSONAS, USE_CASES, type Persona, type UseCase } from "@/lib/use-cases";
import { guideUrl } from "@/lib/guides";
import Reveal from "@/components/Reveal";

/** Human label for a /for/<slug> intent page link. */
function intentLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function CopyPrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(prompt);
        } catch {
          return;
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }}
      className="shrink-0 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
      aria-live="polite"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function UseCaseEntry({ useCase, index }: { useCase: UseCase; index: number }) {
  return (
    <Reveal as="article" delay={Math.min(index * 40, 160)}>
      <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)] md:p-7">
        <h3 className="font-display text-[1.35rem] font-bold leading-tight tracking-tight group-hover:text-accent">
          {useCase.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-muted">
          {useCase.description}
        </p>

        <div className="mt-5 rounded-xl border border-line bg-bg p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              Try it
            </span>
            <CopyPrompt prompt={useCase.tryPrompt} />
          </div>
          <p className="mt-2 text-[0.92rem] italic leading-relaxed text-ink">
            “{useCase.tryPrompt}”
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href={guideUrl(useCase.guideSlug)}
            className="text-sm font-bold text-accent underline-offset-4 hover:underline"
          >
            Read the guide <span aria-hidden="true">→</span>
          </Link>
          {useCase.intentSlug && (
            <Link
              href={`/for/${useCase.intentSlug}`}
              className="text-sm font-bold text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              Muse for {intentLabel(useCase.intentSlug)}{" "}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function UseCaseDirectory() {
  const [active, setActive] = useState<Persona | "All">("All");

  const groups = useMemo(() => {
    if (active === "All") {
      return PERSONAS.map((persona) => ({
        persona,
        cases: USE_CASES.filter((u) => u.persona === persona),
      }));
    }
    return [
      {
        persona: active,
        cases: USE_CASES.filter((u) => u.persona === active),
      },
    ];
  }, [active]);

  return (
    <div>
      {/* Filter pills */}
      <div
        role="group"
        aria-label="Filter use cases by persona"
        className="mt-10 flex flex-wrap gap-2"
      >
        {(["All", ...PERSONAS] as const).map((p) => {
          const isActive = p === active;
          return (
            <button
              key={p}
              type="button"
              onClick={() => setActive(p)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                isActive
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line bg-surface text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      {groups.map(({ persona, cases }) => (
        <section
          key={persona}
          aria-label={`${persona} use cases`}
          className="mt-14"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold tracking-tight">
              {persona}
            </h2>
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.12em] text-faint">
              {cases.length} use cases
            </span>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {cases.map((u, i) => (
              <UseCaseEntry key={u.title} useCase={u} index={i} />
            ))}
          </div>
        </section>
      ))}

      <p className="mt-14 max-w-[640px] text-sm leading-relaxed text-muted">
        Availability: Muse AI is currently available in the US and Canada.
        Features marked “announced” may still be rolling out — check the
        official Muse AI site for the latest status before planning around
        them.
      </p>
    </div>
  );
}
