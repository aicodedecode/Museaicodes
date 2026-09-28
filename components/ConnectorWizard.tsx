"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CONNECTORS, type Connector } from "@/lib/connectors";
import CopyPromptButton from "./CopyPromptButton";
import Reveal from "./Reveal";

type GoalId = "inbox" | "plan-week" | "create-content" | "stay-on-messages";

const GOALS: { id: GoalId; title: string; blurb: string }[] = [
  {
    id: "inbox",
    title: "Tame my inbox",
    blurb:
      "Prioritize, triage, and draft replies across your email connectors.",
  },
  {
    id: "plan-week",
    title: "Plan my week",
    blurb:
      "Day briefings, conflict checks, and scheduling help from your calendar connectors.",
  },
  {
    id: "create-content",
    title: "Create content",
    blurb:
      "Turn saved posts, Reels, and feed finds into lists and summaries you can use.",
  },
  {
    id: "stay-on-messages",
    title: "Stay on top of messages",
    blurb:
      "Catch-up summaries and quick drafts for your chat and messaging connectors.",
  },
];

/**
 * Goal → connector priority. Prompts shown in step 3 are drawn ONLY from the
 * documented examplePrompts in lib/connectors.ts. A chosen connector with no
 * goal fit falls back to its own first documented prompt — nothing is invented.
 */
const GOAL_CONNECTORS: Record<GoalId, string[]> = {
  inbox: ["gmail", "outlook"],
  "plan-week": ["google-calendar", "outlook"],
  "create-content": ["instagram", "threads", "facebook"],
  "stay-on-messages": ["whatsapp", "messenger", "instagram", "facebook"],
};

interface TryPrompt {
  connectorName: string;
  connectorSlug: string;
  title: string;
  prompt: string;
}

function firstPromptsForGoal(goal: GoalId, chosen: Connector[]): TryPrompt[] {
  const goalSlugs = GOAL_CONNECTORS[goal];
  const out: TryPrompt[] = [];
  const covered = new Set<string>();
  // Pass 1: goal-matched connectors, in goal priority order.
  for (const slug of goalSlugs) {
    const c = chosen.find((x) => x.slug === slug);
    if (!c) continue;
    covered.add(slug);
    for (const p of c.examplePrompts.slice(0, 2)) {
      out.push({
        connectorName: c.name,
        connectorSlug: c.slug,
        title: p.title,
        prompt: p.prompt,
      });
    }
  }
  // Pass 2: connectors with no goal fit fall back to their own documented
  // prompts (plus any remaining prompts of already-covered connectors).
  for (const c of chosen) {
    if (covered.has(c.slug)) {
      for (const p of c.examplePrompts.slice(2)) {
        out.push({
          connectorName: c.name,
          connectorSlug: c.slug,
          title: p.title,
          prompt: p.prompt,
        });
      }
    } else if (c.examplePrompts.length > 0) {
      const p = c.examplePrompts[0];
      out.push({
        connectorName: c.name,
        connectorSlug: c.slug,
        title: p.title,
        prompt: p.prompt,
      });
    }
  }
  return out.slice(0, 3);
}

const STEP_LABELS = ["Pick your apps", "Pick your goal", "Your setup plan"];

export default function ConnectorWizard() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [goal, setGoal] = useState<GoalId | null>(null);

  const chosen = useMemo(
    () => CONNECTORS.filter((c) => selected.includes(c.slug)),
    [selected]
  );

  const tryPrompts = useMemo(
    () => (goal && chosen.length > 0 ? firstPromptsForGoal(goal, chosen) : []),
    [goal, chosen]
  );

  const toggle = (slug: string) =>
    setSelected((s) =>
      s.includes(slug) ? s.filter((x) => x !== slug) : [...s, slug]
    );

  const startOver = () => {
    setSelected([]);
    setGoal(null);
    setStep(1);
  };

  return (
    <div>
      {/* Progress indicator */}
      <div aria-label="Wizard progress" className="mb-8">
        <p
          aria-live="polite"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint"
        >
          Step {step} of 3 — {STEP_LABELS[step - 1]}
        </p>
        <div className="mt-3 flex gap-2" role="presentation">
          {STEP_LABELS.map((label, i) => (
            <div
              key={label}
              className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                i + 1 <= step ? "bg-accent" : "bg-line"
              }`}
            />
          ))}
        </div>
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <Reveal key="step-1">
          <fieldset>
            <legend className="font-display text-[1.6rem] font-bold tracking-tight">
              Which apps do you want Muse to connect to?
            </legend>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">
              Pick at least one. These are the 10 connectors in our verified
              directory — every setup step later comes from the same documented
              entries.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CONNECTORS.map((c) => {
                const on = selected.includes(c.slug);
                return (
                  <label
                    key={c.slug}
                    className={`group flex cursor-pointer items-start gap-4 rounded-[22px] border p-5 transition-all duration-150 ${
                      on
                        ? "border-accent bg-surface"
                        : "border-line bg-surface hover:border-ink/30"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggle(c.slug)}
                      className="sr-only"
                      aria-label={c.name}
                    />
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        on ? "border-accent bg-accent" : "border-line"
                      }`}
                    >
                      {on && (
                        <svg
                          viewBox="0 0 12 10"
                          className="h-3 w-3 text-bg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 5l3.5 3.5L11 1.5" />
                        </svg>
                      )}
                    </span>
                    <span>
                      <span className="flex items-center gap-2 font-bold text-[1.05rem]">
                        {c.name}
                        <span className="rounded-full bg-raised px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-muted">
                          {c.category}
                        </span>
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {c.tagline}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-sm text-faint tabular-nums" aria-live="polite">
              {selected.length} selected
            </p>
            <button
              type="button"
              disabled={selected.length === 0}
              onClick={() => setStep(2)}
              className="rounded-xl bg-ink px-6 py-3 font-bold text-bg transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue →
            </button>
          </div>
        </Reveal>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <Reveal key="step-2">
          <fieldset>
            <legend className="font-display text-[1.6rem] font-bold tracking-tight">
              What do you want Muse to do first?
            </legend>
            <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">
              Pick the goal closest to yours. We&rsquo;ll tailor your first
              prompts to it.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {GOALS.map((g) => {
                const on = goal === g.id;
                return (
                  <label
                    key={g.id}
                    className={`cursor-pointer rounded-[22px] border p-5 transition-all duration-150 md:p-6 ${
                      on
                        ? "border-accent bg-surface"
                        : "border-line bg-surface hover:border-ink/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="wizard-goal"
                      checked={on}
                      onChange={() => setGoal(g.id)}
                      className="sr-only"
                    />
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                          on ? "border-accent" : "border-line"
                        }`}
                      >
                        {on && (
                          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                        )}
                      </span>
                      <span className="font-display text-[1.25rem] font-bold tracking-tight">
                        {g.title}
                      </span>
                    </span>
                    <span className="mt-2 block pl-8 text-sm leading-relaxed text-muted">
                      {g.blurb}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-xl border border-line bg-surface px-6 py-3 font-bold text-ink hover:bg-raised"
            >
              ← Back
            </button>
            <button
              type="button"
              disabled={!goal}
              onClick={() => setStep(3)}
              className="rounded-xl bg-ink px-6 py-3 font-bold text-bg transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              Build my plan →
            </button>
          </div>
        </Reveal>
      )}

      {/* STEP 3 */}
      {step === 3 && goal && (
        <Reveal key="step-3">
          <h2 className="font-display text-[1.6rem] font-bold tracking-tight">
            Your setup plan
          </h2>
          <p className="mt-2 max-w-[64ch] leading-relaxed text-muted">
            Work through the checklist below — the steps are the documented
            connection steps for each connector you picked. Then paste your
            first prompts into the Muse app.
          </p>

          <ol className="mt-6 space-y-4">
            {chosen.map((c, i) => (
              <li
                key={c.slug}
                className="rounded-[22px] border border-line bg-surface p-5 md:p-6"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[1.05rem] font-extrabold text-bg tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[1.25rem] font-bold tracking-tight">
                      Connect {c.name}
                    </h3>
                    <Link
                      href={`/connectors/${c.slug}`}
                      className="mt-0.5 inline-block text-sm font-bold text-accent underline-offset-4 hover:underline"
                    >
                      Full {c.name} connector guide →
                    </Link>
                    <ul className="mt-4 space-y-2.5">
                      {c.howToConnect.map((s, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[0.95rem] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <h2 className="font-display text-[1.6rem] font-bold tracking-tight">
              First 3 things to try
            </h2>
            <p className="mt-2 max-w-[64ch] leading-relaxed text-muted">
              Copy-paste prompts for{" "}
              <strong className="text-ink">
                {GOALS.find((g) => g.id === goal)?.title.toLowerCase()}
              </strong>
              , drawn from each connector&rsquo;s documented examples.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
              {tryPrompts.map((p, i) => (
                <div
                  key={`${p.connectorSlug}-${i}`}
                  className="flex flex-col rounded-[22px] border border-line bg-surface p-5"
                >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-faint">
                    {i + 1} ·{" "}
                    <Link
                      href={`/connectors/${p.connectorSlug}`}
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {p.connectorName}
                    </Link>
                  </p>
                  <p className="font-display mt-2 text-[1.1rem] font-bold tracking-tight">
                    {p.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    &ldquo;{p.prompt}&rdquo;
                  </p>
                  <div className="mt-4">
                    <CopyPromptButton text={p.prompt} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={startOver}
              className="rounded-xl border border-line bg-surface px-6 py-3 font-bold text-ink hover:bg-raised"
            >
              ↺ Start over
            </button>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link
                href="/connectors"
                className="font-bold text-accent underline-offset-4 hover:underline"
              >
                Browse all 10 connectors →
              </Link>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-bold text-accent underline-offset-4 hover:underline"
              >
                ← Change my goal
              </button>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}
