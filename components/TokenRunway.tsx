"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

/**
 * Illustrative per-unit token weights — midpoints DUPLICATED from
 * components/TokenCalculator.tsx (its ACTIVITIES array is not exported).
 * These are rough estimates for illustration only — NOT Meta's real metering.
 */
const WEIGHTS = [
  {
    id: "qa",
    label: "Light Q&A exchanges",
    hint: "Short back-and-forth questions and answers.",
    perUnit: 12000,
    range: "5K–20K",
    max: 60,
    initial: 8,
    cadence: "per day" as const,
  },
  {
    id: "research",
    label: "Research / artifact sessions",
    hint: "A deep multi-step research session or a document Muse builds.",
    perUnit: 250000,
    range: "100K–400K",
    max: 6,
    initial: 1,
    cadence: "per day" as const,
  },
  {
    id: "image",
    label: "Image generations",
    hint: "AI-generated images, including prompt refinement.",
    perUnit: 55000,
    range: "30K–80K",
    max: 20,
    initial: 1,
    cadence: "per day" as const,
  },
  {
    id: "monitoring",
    label: "Background monitoring",
    hint: "Muse watching a goal, prices, or an inbox while you do other things.",
    perUnit: 190000,
    range: "80K–300K",
    max: 7,
    initial: 2,
    cadence: "per week" as const,
  },
];

const SCALE_DAYS = 90;

function fmt(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return `${Math.round(n)}`;
}

function fmtInt(n: number): string {
  return Math.floor(n).toLocaleString("en-US");
}

export default function TokenRunway() {
  const [balance, setBalance] = useState(1_000_000_000);
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(WEIGHTS.map((w) => [w.id, w.initial]))
  );

  const dailyBurn = useMemo(
    () =>
      WEIGHTS.reduce(
        (sum, w) =>
          sum +
          (counts[w.id] ?? 0) * w.perUnit * (w.cadence === "per week" ? 1 / 7 : 1),
        0
      ),
    [counts]
  );

  const runwayDays = dailyBurn > 0 ? balance / dailyBurn : Infinity;
  const runwayWeeks = runwayDays / 7;
  const barPct = Math.min(100, (runwayDays / SCALE_DAYS) * 100);

  const verdict =
    dailyBurn <= 0
      ? "Set some daily usage on the left to see how long your balance lasts."
      : runwayDays < 7
        ? "Less than a week at this pace — this is heavy, agent-style usage. Dial activities down or watch the burn."
        : runwayDays < 30
          ? "A few weeks of runway. Good for an intensive project sprint, not a casual habit."
          : runwayDays < SCALE_DAYS
            ? "About a month or two of steady use — the sweet spot for a daily Muse routine."
            : "Comfortable: this balance funds your pace for three months or more.";

  const barTone =
    !isFinite(runwayDays) || runwayDays >= 30
      ? "bg-moss"
      : runwayDays >= 7
        ? "bg-accent"
        : "bg-accent";

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        <Reveal>
          <div className="rounded-[22px] border border-line bg-surface p-5 md:p-6">
            <label
              htmlFor="balance"
              className="font-bold text-[1.05rem]"
            >
              Current token balance
            </label>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              The balance shown in your Muse app — a promotional grant, a
              purchase, whatever you actually have.
            </p>
            <input
              id="balance"
              type="number"
              inputMode="numeric"
              min={0}
              value={balance}
              onChange={(e) =>
                setBalance(Math.max(0, Math.floor(Number(e.target.value) || 0)))
              }
              className="mt-4 w-full rounded-lg border border-line bg-bg px-4 py-3 font-mono text-lg tabular-nums"
            />
          </div>
        </Reveal>

        {WEIGHTS.map((w, i) => {
          const v = counts[w.id] ?? 0;
          return (
            <Reveal key={w.id} delay={Math.min(i, 4) * 50}>
              <div className="rounded-[22px] border border-line bg-surface p-5 md:p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="max-w-[46ch]">
                    <p className="font-bold text-[1.05rem]">{w.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {w.hint}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                      ≈ {w.range} tokens each
                    </p>
                  </div>
                  <span
                    aria-live="polite"
                    className="shrink-0 font-mono text-[1.25rem] font-bold tabular-nums"
                  >
                    {v}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={w.max}
                  step={1}
                  value={v}
                  aria-label={`${w.label} ${w.cadence}`}
                  onChange={(e) =>
                    setCounts((c) => ({ ...c, [w.id]: Number(e.target.value) }))
                  }
                  className="mt-4 h-10 w-full cursor-pointer accent-accent"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  {v} {w.cadence}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={100} className="lg:sticky lg:top-24">
        <div className="rounded-[26px] border border-line bg-ink p-6 text-bg md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
            Your estimated daily burn
          </p>
          <p
            aria-live="polite"
            className="font-display mt-4 text-[clamp(2.6rem,5vw,3.8rem)] font-extrabold leading-none tracking-tight tabular-nums"
          >
            ≈ {fmt(dailyBurn)}
          </p>
          <p className="mt-2 text-bg/70">tokens per day</p>

          <div className="mt-6 border-t border-bg/15 pt-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
              Estimated runway
            </p>
            <p className="font-display mt-3 text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold leading-none tracking-tight tabular-nums">
              {dailyBurn > 0 ? (
                <>
                  {fmtInt(runwayDays)}{" "}
                  <span className="text-[0.55em] font-bold text-bg/70">days</span>
                </>
              ) : (
                "—"
              )}
            </p>
            <p className="mt-2 text-bg/70 tabular-nums">
              {dailyBurn > 0
                ? `≈ ${runwayWeeks < 10 ? runwayWeeks.toFixed(1) : Math.round(runwayWeeks)} weeks`
                : "Enter usage to calculate"}
            </p>

            <div className="relative mt-6">
              <div
                role="progressbar"
                aria-valuenow={Math.min(SCALE_DAYS, Math.round(runwayDays))}
                aria-valuemin={0}
                aria-valuemax={SCALE_DAYS}
                aria-label="Runway on a 90-day scale"
                className="h-3 overflow-hidden rounded-full bg-bg/20"
              >
                <div
                  className={`h-full rounded-full ${barTone} transition-all duration-500`}
                  style={{
                    width: `${Math.max(barPct, dailyBurn > 0 ? 1.5 : 0)}%`,
                  }}
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-3">
                {[7, 30].map((d) => (
                  <span
                    key={d}
                    className="absolute top-0 h-3 w-px bg-bg/60"
                    style={{ left: `${(d / SCALE_DAYS) * 100}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.1em] text-bg/60">
                <span>7d</span>
                <span>30d</span>
                <span>90d+</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-bg/80">{verdict}</p>
          </div>

          <div className="mt-6 rounded-xl border border-bg/20 bg-bg/10 p-4 text-[0.83rem] leading-relaxed text-bg/80">
            <strong className="text-bg">
              Illustrative weights, not Meta&rsquo;s metering.
            </strong>{" "}
            Per-activity token costs are rough midpoints (same ranges as our
            token calculator) — real usage varies with conversation length and
            features. Only your Muse app shows your true balance and burn.
          </div>
        </div>
      </Reveal>
    </div>
  );
}
