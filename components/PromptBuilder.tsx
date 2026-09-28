"use client";

import { useMemo, useState } from "react";
import { useToast } from "./Toast";
import Reveal from "./Reveal";

/** Copy helper — same pattern as components/PromptLibrary.tsx. */
async function copyPrompt(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch { /* legacy fallback */ }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch { ok = false; }
  document.body.removeChild(ta);
  return ok;
}

const FORMATS = [
  { id: "brief", label: "Concise brief", instruction: "Answer as a concise brief (under 200 words)." },
  { id: "plan", label: "Step-by-step plan", instruction: "Respond with a clear step-by-step plan, ordered by priority." },
  { id: "checklist", label: "Checklist", instruction: "Respond with a practical checklist I can tick off one by one." },
  { id: "draft", label: "Polished draft", instruction: "Write a polished draft I can edit and use directly." },
  { id: "table", label: "Comparison table", instruction: "Answer as a Markdown table with clear columns and a short summary underneath." },
] as const;

const TONES = [
  "Concise and direct",
  "Neutral and factual",
  "Warm and encouraging",
  "Playful and creative",
] as const;

interface Preset {
  name: string;
  goal: string;
  context: string;
  constraints: string;
  format: (typeof FORMATS)[number]["id"];
  tone: (typeof TONES)[number];
}

const PRESETS: Preset[] = [
  {
    name: "Weekly study plan",
    goal: "Create a 7-day study plan for my UPSC prelims revision",
    context: "I can study 3 hours a day and my weakest area is modern Indian history.",
    constraints: "Keep each day under 3 hours. Include one mock test and one full revision day.",
    format: "plan",
    tone: "Warm and encouraging",
  },
  {
    name: "Product comparison",
    goal: "Help me choose between two budget phones",
    context: "I mainly use my phone for photos and video calls with family.",
    constraints: "My budget is fixed. Focus on battery life and camera quality, and be honest about trade-offs.",
    format: "table",
    tone: "Neutral and factual",
  },
  {
    name: "Deadline extension email",
    goal: "Draft a polite email asking for a project deadline extension",
    context: "My manager is waiting on the Q3 report, which is delayed by a week.",
    constraints: "Keep it under 150 words. Propose a new delivery date and take responsibility.",
    format: "draft",
    tone: "Concise and direct",
  },
];

function buildPrompt(
  goal: string,
  context: string,
  constraints: string,
  formatId: string,
  tone: string
): string {
  const format = FORMATS.find((f) => f.id === formatId);
  const lines: string[] = [
    "Act as a knowledgeable, helpful assistant.",
    "",
    "My goal:",
    goal.trim() || "(describe what you want)",
  ];
  if (context.trim()) {
    lines.push("", "Background and context:", context.trim());
  }
  if (constraints.trim()) {
    lines.push("", "Constraints to respect:", constraints.trim());
  }
  lines.push(
    "",
    "Output:",
    format?.instruction ?? "Answer clearly and completely.",
    "",
    `Tone: ${tone}.`,
    "",
    "Rules:",
    "- If key information is missing, ask one round of clarifying questions before answering.",
    "- Do not invent facts; flag any assumptions you make."
  );
  return lines.join("\n");
}

export default function PromptBuilder() {
  const { notify } = useToast();
  const [goal, setGoal] = useState("");
  const [context, setContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const [formatId, setFormatId] = useState<string>("plan");
  const [tone, setTone] = useState<string>(TONES[1]);
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const prompt = useMemo(
    () => buildPrompt(goal, context, constraints, formatId, tone),
    [goal, context, constraints, formatId, tone]
  );

  const applyPreset = (p: Preset) => {
    setGoal(p.goal);
    setContext(p.context);
    setConstraints(p.constraints);
    setFormatId(p.format);
    setTone(p.tone);
    setActivePreset(p.name);
    notify(`Loaded “${p.name}” example`);
  };

  const handleCopy = async () => {
    const ok = await copyPrompt(prompt);
    if (ok) {
      setCopied(true);
      notify("Prompt copied");
      setTimeout(() => setCopied(false), 1400);
    } else {
      notify("Copy failed — select the text manually");
    }
  };

  const inputCls =
    "mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 leading-relaxed placeholder:text-faint";

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
      <Reveal>
        <div className="space-y-5 rounded-[22px] border border-line bg-raised/40 p-5 md:p-7">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              Start from an example
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => applyPreset(p)}
                  aria-pressed={activePreset === p.name}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors duration-150 ${
                    activePreset === p.name
                      ? "border-ink bg-ink text-bg"
                      : "border-line text-muted hover:border-faint hover:text-ink"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="pb-goal" className="font-bold">
              Your goal
            </label>
            <input
              id="pb-goal"
              type="text"
              value={goal}
              onChange={(e) => { setGoal(e.target.value); setActivePreset(null); }}
              placeholder="What do you want Muse to do?"
              className={inputCls}
            />
          </div>

          <div>
            <label htmlFor="pb-context" className="font-bold">
              Context
            </label>
            <textarea
              id="pb-context"
              rows={3}
              value={context}
              onChange={(e) => { setContext(e.target.value); setActivePreset(null); }}
              placeholder="Background Muse should know — your situation, what's already tried, who this is for…"
              className={inputCls}
            />
          </div>

          <div>
            <label htmlFor="pb-constraints" className="font-bold">
              Constraints
            </label>
            <textarea
              id="pb-constraints"
              rows={3}
              value={constraints}
              onChange={(e) => { setConstraints(e.target.value); setActivePreset(null); }}
              placeholder="Limits — length, budget, things to avoid, must-haves…"
              className={inputCls}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="pb-format" className="font-bold">
                Output format
              </label>
              <select
                id="pb-format"
                value={formatId}
                onChange={(e) => setFormatId(e.target.value)}
                className={`${inputCls} cursor-pointer`}
              >
                {FORMATS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pb-tone" className="font-bold">
                Tone
              </label>
              <select
                id="pb-tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className={`${inputCls} cursor-pointer`}
              >
                {TONES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[22px] border border-line bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                Your composed prompt
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors duration-150 ${
                  copied ? "bg-moss text-moss-ink" : "bg-ink text-bg"
                }`}
              >
                {copied ? "Copied ✓" : "Copy prompt"}
              </button>
            </div>
            <pre className="max-h-[480px] overflow-auto whitespace-pre-wrap px-5 py-5 text-[0.95rem] leading-relaxed text-ink md:px-6">
              {prompt}
            </pre>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            Specific prompts get specific answers. The clarifying-question rule
            keeps Muse from guessing when your context has gaps.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
