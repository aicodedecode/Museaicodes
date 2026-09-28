"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";

/** Weeks per month used to scale weekly savings — shown to the user, not hidden. */
const WEEKS_PER_MONTH = 52 / 12;

interface OptionInput {
  name: string;
  price: string;
  hoursSaved: string;
  hourlyValue: string;
}

const EMPTY: OptionInput = { name: "", price: "", hoursSaved: "", hourlyValue: "" };

function parseNum(s: string): number | null {
  const n = parseFloat(s);
  return s.trim() === "" || isNaN(n) || n < 0 ? null : n;
}

function fmtMoney(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

interface OptionResult extends OptionInput {
  monthlyCost: number | null;
  monthlyTimeValue: number | null;
  net: number | null;
  complete: boolean;
}

export default function CompareTool() {
  const [options, setOptions] = useState<OptionInput[]>([
    { ...EMPTY, name: "Muse" },
    { ...EMPTY },
    { ...EMPTY },
  ]);

  const update = (i: number, key: keyof OptionInput, value: string) => {
    setOptions((opts) => opts.map((o, j) => (j === i ? { ...o, [key]: value } : o)));
  };

  const results: OptionResult[] = useMemo(
    () =>
      options.map((o) => {
        const price = parseNum(o.price);
        const hours = parseNum(o.hoursSaved);
        const hourly = parseNum(o.hourlyValue);
        const complete = price !== null && hours !== null && hourly !== null;
        return {
          ...o,
          monthlyCost: price,
          monthlyTimeValue: hours !== null && hourly !== null ? hours * WEEKS_PER_MONTH * hourly : null,
          net:
            complete
              ? (hours as number) * WEEKS_PER_MONTH * (hourly as number) - (price as number)
              : null,
          complete,
        };
      }),
    [options]
  );

  const ranked = useMemo(
    () =>
      results
        .map((r, i) => ({ ...r, index: i }))
        .filter((r) => r.complete && r.name.trim() !== "")
        .sort((a, b) => (b.net ?? 0) - (a.net ?? 0)),
    [results]
  );

  const best = ranked[0];
  const verdict = !best
    ? "Enter your numbers above — name each option and fill in price, hours saved, and hourly value."
    : best.net! > 0
      ? `${best.name} gives the best net monthly value: it pays for itself and returns about ${fmtMoney(best.net!)} of time value beyond its cost.`
      : `${best.name} comes out on top, but at these numbers no option pays for itself — the time saved is worth less than the price.`;

  const inputCls =
    "mt-1.5 w-full rounded-lg border border-line bg-surface px-4 py-3 tabular-nums placeholder:text-faint";

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        {options.map((o, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="h-full rounded-[22px] border border-line bg-surface p-5 md:p-6">
              <label
                htmlFor={`cmp-name-${i}`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint"
              >
                Option {i + 1}
              </label>
              <input
                id={`cmp-name-${i}`}
                type="text"
                value={o.name}
                onChange={(e) => update(i, "name", e.target.value)}
                placeholder={i === 0 ? "Muse" : "Name this option"}
                aria-label={`Option ${i + 1} name`}
                className="mt-2 w-full rounded-lg border border-line bg-bg px-4 py-3 text-lg font-bold"
              />

              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor={`cmp-price-${i}`} className="text-sm font-bold">
                    Monthly price <span className="font-normal text-faint">(your currency)</span>
                  </label>
                  <input
                    id={`cmp-price-${i}`}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    value={o.price}
                    onChange={(e) => update(i, "price", e.target.value)}
                    placeholder="What you actually pay"
                    aria-label={`Monthly price for option ${i + 1}`}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor={`cmp-hours-${i}`} className="text-sm font-bold">
                    Hours saved per week
                  </label>
                  <input
                    id={`cmp-hours-${i}`}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    value={o.hoursSaved}
                    onChange={(e) => update(i, "hoursSaved", e.target.value)}
                    placeholder="Your estimate"
                    aria-label={`Hours saved per week with option ${i + 1}`}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor={`cmp-hourly-${i}`} className="text-sm font-bold">
                    Your hourly value <span className="font-normal text-faint">(same currency)</span>
                  </label>
                  <input
                    id={`cmp-hourly-${i}`}
                    type="number"
                    inputMode="decimal"
                    min={0}
                    value={o.hourlyValue}
                    onChange={(e) => update(i, "hourlyValue", e.target.value)}
                    placeholder="What an hour of your time is worth"
                    aria-label={`Hourly value for option ${i + 1}`}
                    className={inputCls}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 overflow-x-auto rounded-[22px] border border-line bg-surface">
          <table className="w-full min-w-[640px] text-left text-[0.95rem]">
            <thead>
              <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                <th scope="col" className="px-5 py-4 font-medium md:px-6">Option</th>
                <th scope="col" className="px-5 py-4 font-medium">Monthly cost</th>
                <th scope="col" className="px-5 py-4 font-medium">Monthly time value</th>
                <th scope="col" className="px-5 py-4 font-medium">Net value</th>
                <th scope="col" className="px-5 py-4 font-medium md:pr-6">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => {
                const name = r.name.trim() || `Option ${i + 1}`;
                const chip =
                  !r.complete ? null : r.net! > 0 ? (
                    <span className="inline-block rounded-full bg-moss px-3 py-1 text-xs font-bold text-moss-ink">
                      Pays for itself
                    </span>
                  ) : r.net! < 0 ? (
                    <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-ink">
                      Costs more than it saves
                    </span>
                  ) : (
                    <span className="inline-block rounded-full border border-line px-3 py-1 text-xs font-bold text-muted">
                      Breaks even
                    </span>
                  );
                return (
                  <tr key={i} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 font-bold md:px-6">
                      {name}
                      {ranked[0]?.index === i && (
                        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                          Best value
                        </span>
                      )}
                    </th>
                    <td className="px-5 py-4 tabular-nums text-muted">
                      {r.monthlyCost !== null ? fmtMoney(r.monthlyCost) : "—"}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-muted">
                      {r.monthlyTimeValue !== null ? fmtMoney(r.monthlyTimeValue) : "—"}
                    </td>
                    <td className="px-5 py-4 font-bold tabular-nums">
                      {r.net !== null ? (
                        <span className={r.net < 0 ? "text-accent" : r.net > 0 ? "text-ink" : ""}>
                          {r.net > 0 ? "+" : ""}
                          {fmtMoney(r.net)}
                        </span>
                      ) : (
                        <span className="font-normal text-faint">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4 md:pr-6">{chip}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-6 rounded-[22px] border border-line bg-ink p-6 text-bg md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
            Bottom line
          </p>
          <p aria-live="polite" className="mt-3 max-w-[70ch] text-[1.1rem] leading-relaxed">
            {verdict}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-bg/60">
            Monthly time value = your hours saved per week × ≈4.33 weeks × your
            hourly value. Every number above is yours — this page ships with no
            prices, so the comparison only says what your own inputs say.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
