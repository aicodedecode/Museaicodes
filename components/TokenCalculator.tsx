"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

interface Activity {
  id: string;
  label: string;
  hint: string;
  /** Illustrative midpoint tokens per unit — rough estimates, not Meta's figures. */
  perUnit: number;
  /** Illustrative range shown to the user. */
  range: string;
  max: number;
}

const ACTIVITIES: Activity[] = [
  {
    id: "qa",
    label: "Quick Q&A exchange",
    hint: "A short back-and-forth: one question, one useful answer.",
    perUnit: 12000,
    range: "5K–20K",
    max: 40,
  },
  {
    id: "research",
    label: "Long research conversation",
    hint: "Deep multi-step research with web browsing and sources.",
    perUnit: 250000,
    range: "100K–400K",
    max: 10,
  },
  {
    id: "image",
    label: "Generate an image",
    hint: "One AI-generated image, including prompt refinement.",
    perUnit: 55000,
    range: "30K–80K",
    max: 20,
  },
  {
    id: "document",
    label: "Create a document or report",
    hint: "A researched brief, plan, or artifact Muse builds for you.",
    perUnit: 125000,
    range: "50K–200K",
    max: 10,
  },
  {
    id: "monitoring",
    label: "Background monitoring for a day",
    hint: "Muse watching a goal, prices, or inbox while you do other things.",
    perUnit: 190000,
    range: "80K–300K",
    max: 30,
  },
];

const GRANT = 1_000_000_000;

function fmt(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return `${Math.round(n)}`;
}

function Stepper({
  value,
  max,
  onChange,
  label,
}: {
  value: number;
  max: number;
  onChange: (v: number) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3" role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        disabled={value <= 0}
        aria-label={`Decrease ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-xl font-bold text-ink transition-all duration-150 hover:border-ink disabled:opacity-30"
      >
        −
      </button>
      <span
        aria-live="polite"
        className="w-10 text-center font-mono text-[1.25rem] font-bold tabular-nums"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Increase ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg text-xl font-bold text-ink transition-all duration-150 hover:border-ink disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
}

export default function TokenCalculator() {
  const [counts, setCounts] = useState<Record<string, number>>({
    qa: 10,
    research: 2,
    image: 3,
    document: 1,
    monitoring: 5,
  });

  const total = useMemo(
    () =>
      ACTIVITIES.reduce(
        (sum, a) => sum + (counts[a.id] ?? 0) * a.perUnit,
        0
      ),
    [counts]
  );

  const pct = Math.min(100, (total / GRANT) * 100);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        {ACTIVITIES.map((a, i) => (
          <Reveal key={a.id} delay={Math.min(i, 4) * 50}>
            <div className="flex flex-col gap-4 rounded-[22px] border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
              <div className="max-w-[46ch]">
                <p className="font-bold text-[1.05rem]">{a.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{a.hint}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  ≈ {a.range} tokens each
                </p>
              </div>
              <Stepper
                value={counts[a.id] ?? 0}
                max={a.max}
                onChange={(v) => setCounts((c) => ({ ...c, [a.id]: v }))}
                label={`${a.label} per month`}
              />
            </div>
          </Reveal>
        ))}
        <p className="text-sm text-faint">
          Counts are per month. Adjust each activity to match how you&rsquo;d
          actually use Muse.
        </p>
      </div>

      <Reveal delay={100} className="lg:sticky lg:top-24">
        <div className="rounded-[26px] border border-line bg-ink p-6 text-bg md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
            Your illustrative monthly usage
          </p>
          <p
            aria-live="polite"
            className="font-display mt-4 text-[clamp(2.6rem,5vw,3.8rem)] font-extrabold leading-none tracking-tight tabular-nums"
          >
            ≈ {fmt(total)}
          </p>
          <p className="mt-2 text-bg/70">tokens per month</p>

          <div className="mt-6">
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-bg/70">Share of a 1B-token grant</span>
              <span className="font-mono font-bold tabular-nums">
                {pct < 0.1 && total > 0 ? "<0.1" : pct.toFixed(1)}%
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={Math.round(pct * 10) / 10}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Share of a one-billion-token promotional grant"
              className="mt-2 h-3 overflow-hidden rounded-full bg-bg/20"
            >
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${Math.max(pct, total > 0 ? 1 : 0)}%` }}
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-bg/70">
              {pct >= 100
                ? "That pace would exceed a one-billion-token promotional grant in a month — heavy, agent-style usage."
                : pct >= 25
                  ? "A solid chunk of a promotional grant — typical for someone using Muse as a daily workhorse."
                  : "A light footprint — well within what a promotional grant covers."}
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-bg/20 bg-bg/10 p-4 text-[0.83rem] leading-relaxed text-bg/80">
            <strong className="text-bg">Estimates, not official figures.</strong>{" "}
            Token costs vary wildly with conversation length, context, and
            features used. Meta doesn&rsquo;t publish per-action costs — only
            your Muse app shows your real balance and usage.
          </div>
        </div>
      </Reveal>
    </div>
  );
}
