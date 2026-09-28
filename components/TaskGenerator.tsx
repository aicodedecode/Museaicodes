"use client";

import { useMemo, useState } from "react";
import { useToast } from "./Toast";
import Reveal from "./Reveal";

/* ---------- types ---------- */

type TaskTypeId = "research" | "plan" | "shop" | "write" | "organize";
type DetailId = "concise" | "standard" | "thorough";

interface TaskType {
  id: TaskTypeId;
  label: string;
  blurb: string;
  objectiveVerb: string;
  contextQuestions: string[];
  constraints: string[];
  checkpoints: string[];
  outputFormat: string;
}

interface Preset {
  name: string;
  goal: string;
  type: TaskTypeId;
  detail: DetailId;
}

/* ---------- task-type playbooks ---------- */

const TYPES: TaskType[] = [
  {
    id: "research",
    label: "Research",
    blurb: "Investigate a topic, compare options, and report back with sources.",
    objectiveVerb: "Research this thoroughly and report back:",
    contextQuestions: [
      "What decision will this research feed into?",
      "What have you already found or tried?",
      "How recent must the information be?",
      "Any sources to prefer — or avoid?",
    ],
    constraints: [
      "Cite sources for every key claim.",
      "Say 'I couldn't verify this' instead of guessing.",
      "Prefer primary sources over aggregators.",
      "Flag where sources disagree instead of picking a winner silently.",
    ],
    checkpoints: [
      "Present the shortlist/outline before writing the full report.",
      "If the evidence points away from my assumption, say so plainly.",
    ],
    outputFormat:
      "A scannable report: key findings up top, a comparison table for options, sources listed at the end.",
  },
  {
    id: "plan",
    label: "Plan",
    blurb: "Turn a goal into an ordered, actionable step-by-step plan.",
    objectiveVerb: "Turn this into a realistic, actionable plan:",
    contextQuestions: [
      "What's the deadline or target date?",
      "What resources do you have — time, money, people?",
      "What does 'done' look like for you?",
      "What are the fixed constraints (dates, budget, location)?",
    ],
    constraints: [
      "Order steps by what unblocks the most.",
      "Every step must be actionable — no vague advice.",
      "Keep the plan realistic for the resources stated.",
      "Call out risks and what could go wrong.",
    ],
    checkpoints: [
      "Show me the plan outline before detailing any step.",
      "Flag any step that costs money or is hard to reverse.",
    ],
    outputFormat:
      "A phased plan with a timeline, a checkbox checklist, and risks listed separately.",
  },
  {
    id: "shop",
    label: "Shop",
    blurb: "Shortlist products within a budget with honest trade-offs.",
    objectiveVerb: "Help me buy the right thing — no upselling:",
    contextQuestions: [
      "What's your hard budget limit?",
      "What will you actually use it for, day to day?",
      "Any brands or models to prefer — or avoid?",
      "What are your deal-breakers?",
    ],
    constraints: [
      "Stay under the stated budget — no 'just a bit more' suggestions.",
      "Compare like-for-like specs, not marketing claims.",
      "Mention warranty and return policy for each pick.",
      "Be honest about trade-offs; don't hype anything.",
    ],
    checkpoints: [
      "If nothing good fits the budget, say so instead of upselling.",
      "Ask before recommending a category I didn't mention.",
    ],
    outputFormat:
      "Top 3 picks in a comparison table, then one clear verdict with the reason.",
  },
  {
    id: "write",
    label: "Write",
    blurb: "Draft emails, essays, posts, or messages in your voice.",
    objectiveVerb: "Write this for me — ready to use after light editing:",
    contextQuestions: [
      "Who is the reader, and what should they do or feel after reading?",
      "What points must be included?",
      "Any examples, stories, or sources to draw on?",
      "What tone fits — formal, warm, direct, playful?",
    ],
    constraints: [
      "Match the length I specify.",
      "No filler intros — get to the point.",
      "Don't invent quotes, statistics, or names.",
      "Write simply; cut anything that doesn't earn its place.",
    ],
    checkpoints: [
      "Show me a short outline before writing the full draft.",
      "Ask before inventing any facts, quotes, or figures.",
    ],
    outputFormat:
      "The draft itself, plus 3 headline/subject-line options underneath.",
  },
  {
    id: "organize",
    label: "Organize",
    blurb: "Design a simple system for files, notes, tasks, or routines.",
    objectiveVerb: "Design a simple, maintainable system for this:",
    contextQuestions: [
      "What's messy right now — describe the current state.",
      "How do you want to find things later?",
      "What tools or apps do you already use?",
      "What must stay exactly as it is?",
    ],
    constraints: [
      "Suggest systems — don't rename, move, or delete anything yet.",
      "Keep it simple enough that you'll actually maintain it.",
      "Prefer the tools I already use over new ones.",
      "Every rule needs a reason I can remember.",
    ],
    checkpoints: [
      "Confirm the proposed system with me before applying it.",
      "Ask before renaming, moving, or deleting anything.",
    ],
    outputFormat:
      "The proposed system (rules + structure), then the first 3 actions to get started.",
  },
];

const DETAILS: { id: DetailId; label: string; instruction: string }[] = [
  {
    id: "concise",
    label: "Concise",
    instruction:
      "Keep this tight — one focused response, no fluff. If something can be a bullet, make it a bullet.",
  },
  {
    id: "standard",
    label: "Standard",
    instruction:
      "Be thorough but scannable: headers, bullets, a short summary up top.",
  },
  {
    id: "thorough",
    label: "Thorough",
    instruction:
      "Work in phases and confirm each phase with me before continuing. Go deep on trade-offs, edge cases, and alternatives.",
  },
];

const PRESETS: Preset[] = [
  {
    name: "Noise-cancelling headphones",
    goal: "Find noise-cancelling headphones under ₹8,000 for my daily train commute in Mumbai",
    type: "shop",
    detail: "standard",
  },
  {
    name: "Jaipur family trip",
    goal: "Plan a 4-day family trip to Jaipur in December for 2 adults and 2 kids, mid-range budget",
    type: "plan",
    detail: "thorough",
  },
];

/* ---------- instruction builder ---------- */

function buildInstruction(goal: string, type: TaskType, detailId: DetailId): string {
  const detail = DETAILS.find((d) => d.id === detailId) ?? DETAILS[1];
  const g = goal.trim() || "(describe what you want to achieve)";
  const lines: string[] = [
    type.objectiveVerb,
    "",
    g,
    "",
    `Detail level: ${detail.label} — ${detail.instruction}`,
    "",
    "CONTEXT — if anything on this list isn't already clear from our chat, ask me about it before starting:",
  ];
  type.contextQuestions.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  lines.push("", "CONSTRAINTS:");
  type.constraints.forEach((c) => lines.push(`- ${c}`));
  lines.push("", "APPROVAL RULES — ask me before you:");
  type.checkpoints.forEach((c) => lines.push(`- ${c}`));
  lines.push(
    "",
    "OUTPUT FORMAT:",
    type.outputFormat,
    "",
    "Also: if a detail is genuinely ambiguous, ask one focused question instead of guessing. Don't invent facts, prices, dates, or names."
  );
  return lines.join("\n");
}

/** Plain-text copy of a string (same fallback pattern as PromptLibrary). */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* legacy fallback */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/* ---------- component ---------- */

export default function TaskGenerator() {
  const { notify } = useToast();
  const [goal, setGoal] = useState("");
  const [typeId, setTypeId] = useState<TaskTypeId>("research");
  const [detailId, setDetailId] = useState<DetailId>("standard");
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const type = TYPES.find((t) => t.id === typeId) ?? TYPES[0];
  const instruction = useMemo(
    () => buildInstruction(goal, type, detailId),
    [goal, type, detailId]
  );

  const clearPreset = () => setActivePreset(null);

  const applyPreset = (p: Preset) => {
    setGoal(p.goal);
    setTypeId(p.type);
    setDetailId(p.detail);
    setActivePreset(p.name);
    notify(`Loaded “${p.name}” example`);
  };

  const handleCopy = async () => {
    const ok = await copyText(instruction);
    if (ok) {
      setCopied(true);
      notify("Instruction copied — paste it into Muse");
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
        <div className="space-y-6 rounded-[22px] border border-line bg-raised/40 p-5 md:p-7">
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
            <label htmlFor="tg-goal" className="font-bold">
              What do you want to get done?
            </label>
            <textarea
              id="tg-goal"
              rows={4}
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                clearPreset();
              }}
              placeholder="e.g. Plan a 4-day family trip to Jaipur in December for 2 adults and 2 kids"
              className={inputCls}
            />
          </div>

          <div>
            <span id="tg-type-label" className="font-bold">
              Task type
            </span>
            <div
              role="radiogroup"
              aria-labelledby="tg-type-label"
              className="mt-2 grid gap-2 sm:grid-cols-2"
            >
              {TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={typeId === t.id}
                  onClick={() => {
                    setTypeId(t.id);
                    clearPreset();
                  }}
                  className={`rounded-lg border px-4 py-3 text-left transition-colors duration-150 ${
                    typeId === t.id
                      ? "border-ink bg-ink text-bg"
                      : "border-line bg-surface text-ink hover:border-faint"
                  }`}
                >
                  <span className="block font-bold">{t.label}</span>
                  <span
                    className={`mt-1 block text-[0.83rem] leading-snug ${
                      typeId === t.id ? "text-bg/80" : "text-muted"
                    }`}
                  >
                    {t.blurb}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span id="tg-detail-label" className="font-bold">
              Detail level
            </span>
            <div
              role="radiogroup"
              aria-labelledby="tg-detail-label"
              className="mt-2 inline-flex rounded-lg border border-line bg-surface p-1"
            >
              {DETAILS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  role="radio"
                  aria-checked={detailId === d.id}
                  onClick={() => {
                    setDetailId(d.id);
                    clearPreset();
                  }}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition-colors duration-150 ${
                    detailId === d.id
                      ? "bg-ink text-bg"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[22px] border border-line bg-surface">
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                Your Muse instruction
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors duration-150 ${
                  copied ? "bg-moss text-moss-ink" : "bg-ink text-bg"
                }`}
              >
                {copied ? "Copied" : "Copy instruction"}
              </button>
            </div>
            <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap px-5 py-5 text-[0.95rem] leading-relaxed text-ink md:px-6">
              {instruction}
            </pre>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-faint">
            Generated locally in your browser — your goal never leaves this
            page. Paste the instruction into Muse as your first message.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
