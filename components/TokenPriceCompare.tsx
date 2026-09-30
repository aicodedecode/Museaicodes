"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import {
  PRICED_MODELS,
  PRESETS,
  PRICE_VERIFIED,
  monthlyCost,
} from "@/lib/token-prices";

const MAX_INPUT_M = 50;
const MAX_OUTPUT_M = 20;

function fmtM(m: number): string {
  return m >= 1 ? `${m.toFixed(m % 1 === 0 ? 0 : 1)}M` : `${Math.round(m * 1000)}K`;
}

function fmtMoney(n: number): string {
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function clampNum(raw: string, max: number): number {
  const n = Number(raw);
  if (!isFinite(n) || n < 0) return 0;
  return Math.min(max, Math.round(n * 4) / 4);
}

export default function TokenPriceCompare() {
  const [inputM, setInputM] = useState(2);
  const [outputM, setOutputM] = useState(0.5);
  const [presetId, setPresetId] = useState<string | null>("medium");
  const [period, setPeriod] = useState<"month" | "year">("month");
  const factor = period === "year" ? 12 : 1;

  const applyPreset = (id: string) => {
    const p = PRESETS.find((x) => x.id === id);
    if (!p) return;
    setInputM(p.inputM);
    setOutputM(p.outputM);
    setPresetId(id);
  };

  const rows = useMemo(
    () =>
      PRICED_MODELS.map((m) => ({
        ...m,
        cost: monthlyCost(m, inputM, outputM) * factor,
      })).sort((a, b) => a.cost - b.cost),
    [inputM, outputM, factor]
  );

  const cheapest = rows[0];
  const priciest = rows[rows.length - 1];
  const savings = priciest && cheapest ? priciest.cost - cheapest.cost : 0;
  const maxCost = priciest?.cost ?? 0;

  return (
    <div className="space-y-6">
      {/* ---- usage controls ---- */}
      <Reveal>
        <div className="rounded-[22px] border border-line bg-surface p-5 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-[1.35rem] font-bold tracking-tight">
              Your monthly usage
            </h2>
            <div className="flex gap-2" role="group" aria-label="Volume presets">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => applyPreset(p.id)}
                  aria-pressed={presetId === p.id}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    presetId === p.id
                      ? "bg-ink text-bg"
                      : "border border-line bg-bg text-ink hover:border-ink"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-8">
            {(
              [
                {
                  id: "input-tokens",
                  label: "Input tokens per month",
                  hint: "Prompts, documents, and context you send.",
                  value: inputM,
                  max: MAX_INPUT_M,
                  set: setInputM,
                  step: 0.5,
                },
                {
                  id: "output-tokens",
                  label: "Output tokens per month",
                  hint: "Answers, code, and drafts the model writes.",
                  value: outputM,
                  max: MAX_OUTPUT_M,
                  set: setOutputM,
                  step: 0.25,
                },
              ] as const
            ).map((field) => (
              <div key={field.id}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="max-w-[46ch]">
                    <label
                      htmlFor={field.id}
                      className="font-bold text-[1.05rem]"
                    >
                      {field.label}
                    </label>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {field.hint}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      id={`${field.id}-num`}
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={field.max}
                      step={field.step}
                      value={field.value}
                      aria-label={`${field.label} (millions)`}
                      onChange={(e) => {
                        field.set(clampNum(e.target.value, field.max));
                        setPresetId(null);
                      }}
                      className="w-28 rounded-lg border border-line bg-bg px-3 py-2 font-mono text-lg font-bold tabular-nums"
                    />
                    <span className="font-mono text-sm text-faint">M</span>
                  </div>
                </div>
                <input
                  id={field.id}
                  type="range"
                  min={0}
                  max={field.max}
                  step={field.step}
                  value={field.value}
                  aria-label={field.label}
                  onChange={(e) => {
                    field.set(Number(e.target.value));
                    setPresetId(null);
                  }}
                  className="mt-4 h-10 w-full cursor-pointer accent-accent"
                />
                <p
                  aria-live="polite"
                  className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint"
                >
                  {fmtM(field.value)} tokens / month
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ---- visual dashboard ---- */}
      <Reveal delay={40}>
        <div className="rounded-[22px] border border-line bg-surface p-5 md:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-[1.35rem] font-bold tracking-tight">
              Cost dashboard
            </h2>
            <div className="flex gap-2" role="group" aria-label="Billing period">
              {(
                [
                  { id: "month", label: "Monthly" },
                  { id: "year", label: "Annual" },
                ] as const
              ).map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPeriod(p.id)}
                  aria-pressed={period === p.id}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    period === p.id
                      ? "bg-ink text-bg"
                      : "border border-line bg-bg text-ink hover:border-ink"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Estimated {period === "month" ? "monthly" : "annual"} spend at{" "}
            {fmtM(inputM)} input / {fmtM(outputM)} output tokens — move the
            sliders above and watch the bars move.
          </p>
          <ul className="mt-6 space-y-5">
            {rows.map((r, i) => {
              const pct = Math.max(
                maxCost > 0 ? (r.cost / maxCost) * 100 : 0,
                r.cost > 0 ? 1.5 : 0
              );
              return (
                <li key={r.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="font-bold">
                      {r.model}{" "}
                      <span className="text-sm font-medium text-muted">
                        {r.provider}
                      </span>
                      {i === 0 && (
                        <span className="ml-2 rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-bg">
                          Cheapest
                        </span>
                      )}
                    </p>
                    <p
                      aria-live="polite"
                      className="font-mono text-[1.1rem] font-bold tabular-nums"
                    >
                      {fmtMoney(r.cost)}
                      <span className="text-sm font-medium text-faint">
                        {period === "month" ? "/mo" : "/yr"}
                      </span>
                    </p>
                  </div>
                  <div
                    role="img"
                    aria-label={`${r.model}: ${fmtMoney(r.cost)} per ${
                      period === "month" ? "month" : "year"
                    }, ${Math.round(
                      maxCost > 0 ? (r.cost / maxCost) * 100 : 0
                    )}% of the priciest option`}
                    className="mt-2 h-3.5 overflow-hidden rounded-full bg-line"
                  >
                    <div
                      className={`h-full rounded-full transition-[width] duration-500 ease-out ${
                        i === 0 ? "bg-accent" : "bg-muted"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>

      {/* ---- ranked table ---- */}
      <Reveal delay={80}>
        <div className="rounded-[22px] border border-line bg-surface p-5 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h2 className="font-display text-[1.35rem] font-bold tracking-tight">
              Ranked cheapest → priciest
            </h2>
            <p className="rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              Prices verified {PRICE_VERIFIED}
            </p>
          </div>

          {savings > 0 && cheapest && priciest && (
            <div className="mt-5 rounded-[16px] border border-line bg-ink p-5 text-bg md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
                At this volume
              </p>
              <p className="font-display mt-2 text-[1.6rem] font-extrabold leading-tight tracking-tight">
                <span className="text-accent">{cheapest.model}</span> saves you{" "}
                {fmtMoney(savings)}
                {period === "month" ? "/mo" : "/yr"}{" "}
                <span className="font-medium text-bg/70">vs {priciest.model}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-bg/70">
                Same {fmtM(inputM)} in / {fmtM(outputM)} out — the price of the
                model is the only thing changing.
              </p>
            </div>
          )}

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                  <th scope="col" className="py-3 pr-4 font-medium">
                    Model
                  </th>
                  <th scope="col" className="py-3 pr-4 text-right font-medium">
                    $ / 1M in
                  </th>
                  <th scope="col" className="py-3 pr-4 text-right font-medium">
                    $ / 1M out
                  </th>
                  <th scope="col" className="py-3 pr-4 text-right font-medium">
                    Context
                  </th>
                  <th scope="col" className="py-3 pl-2 text-right font-medium">
                    Your {period === "month" ? "monthly" : "annual"} cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => {
                  const isCheapest = i === 0;
                  return (
                    <tr
                      key={r.id}
                      className={`border-b border-line align-top transition-colors ${
                        isCheapest ? "bg-accent/[0.07]" : ""
                      }`}
                    >
                      <td className="py-4 pr-4">
                        <a
                          href={r.pricingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-ink underline-offset-4 hover:text-accent hover:underline"
                        >
                          {r.model}
                        </a>
                        <p className="mt-0.5 text-sm text-muted">
                          {r.provider} ·{" "}
                          <span className="underline-offset-4 hover:underline">
                            official pricing →
                          </span>
                        </p>
                        {r.pricingNote && (
                          <p className="mt-1 text-[0.8rem] leading-snug text-faint">
                            {r.pricingNote}
                          </p>
                        )}
                      </td>
                      <td className="py-4 pr-4 text-right font-mono font-bold tabular-nums">
                        ${r.inputPerMillion.toFixed(2)}
                      </td>
                      <td className="py-4 pr-4 text-right font-mono font-bold tabular-nums">
                        ${r.outputPerMillion.toFixed(2)}
                      </td>
                      <td className="py-4 pr-4 text-right font-mono tabular-nums text-muted">
                        {r.contextWindow}
                      </td>
                      <td className="py-4 pl-2 text-right">
                        <div className="flex items-center justify-end gap-3">
                          {isCheapest && (
                            <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-bg">
                              Cheapest
                            </span>
                          )}
                          <span
                            aria-live="polite"
                            className="font-mono text-[1.15rem] font-bold tabular-nums"
                          >
                            {fmtMoney(r.cost)}
                          </span>
                        </div>
                        <div
                          role="img"
                          aria-label={`${r.model} cost is ${Math.round((r.cost / maxCost) * 100)}% of the priciest option`}
                          className="ml-auto mt-2 h-1.5 w-40 overflow-hidden rounded-full bg-line"
                        >
                          <div
                            className={`h-full rounded-full ${
                              isCheapest ? "bg-accent" : "bg-muted"
                            }`}
                            style={{
                              width: `${Math.max(
                                maxCost > 0 ? (r.cost / maxCost) * 100 : 0,
                                r.cost > 0 ? 2 : 0
                              )}%`,
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="py-4 pr-4" colSpan={4}>
                    <p className="font-bold text-ink">
                      Muse{" "}
                      <span className="font-medium text-muted">
                        — consumer app, no public per-token API pricing
                      </span>
                    </p>
                    <p className="mt-1 text-[0.8rem] leading-snug text-faint">
                      Muse bills in tokens inside the app, but Meta publishes no
                      per-token API rate for it — so it can&rsquo;t be ranked
                      here. Included for context only.
                    </p>
                  </td>
                  <td className="py-4 pl-2 text-right">
                    <span className="font-mono text-[1.15rem] font-bold text-faint">
                      —
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-line bg-bg p-4 text-[0.83rem] leading-relaxed text-muted">
            <strong className="text-ink">
              Planning estimate, not a quote.
            </strong>{" "}
            API prices change frequently — each row links to its provider&rsquo;s
            official pricing page, which is the only authoritative number. This
            table ignores caching discounts, batch rates, tool-call charges, and
            regional premiums, and output tokens cost more than input on every
            model.
          </div>
        </div>
      </Reveal>
    </div>
  );
}
