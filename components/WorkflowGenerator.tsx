"use client";

import { useMemo, useState } from "react";
import { useToast } from "./Toast";
import Reveal from "./Reveal";

/* ---------- types ---------- */

type Role = "You" | "Muse" | "Together";

interface Step {
  title: string;
  detail: string;
  role: Role;
  checkpoint?: string;
}

/* ---------- category engine ---------- */

interface Category {
  id: string;
  test: RegExp;
  steps: Step[];
}

const CATEGORIES: Category[] = [
  {
    id: "research",
    test: /research|find out|investigat|learn about|compare|which is the best|top \d|review|pros and cons/,
    steps: [
      {
        title: "Muse gathers the facts",
        detail:
          "Ask Muse to research the topic and return a shortlist with sources — key facts only, no wall of text.",
        role: "Muse",
      },
      {
        title: "Compare options side by side",
        detail:
          "Have Muse lay the options out in a comparison table on the criteria that matter to you.",
        role: "Muse",
      },
      {
        title: "You approve the shortlist",
        detail:
          "Pick your top 2–3 before any decision is made. Nothing moves forward on Muse's recommendation alone.",
        role: "You",
        checkpoint: "Approval checkpoint: shortlist approved by you",
      },
    ],
  },
  {
    id: "write",
    test: /write|draft|essay|email|blog|content|letter|script|article|caption|speech|resume|cover letter/,
    steps: [
      {
        title: "Agree the outline first",
        detail:
          "Settle the structure, key points, and tone together — fixing an outline is cheap, rewriting a draft is not.",
        role: "Together",
        checkpoint: "Approval checkpoint: you sign off the outline before drafting",
      },
      {
        title: "Muse writes the draft",
        detail:
          "Muse produces the full draft against the approved outline. Ask for 2–3 headline options too.",
        role: "Muse",
      },
      {
        title: "You revise in your voice",
        detail:
          "Edit for your voice and facts only you know. Ask Muse to tighten specific paragraphs, never to 'make it better' vaguely.",
        role: "You",
      },
    ],
  },
  {
    id: "plan",
    test: /plan|trip|travel|itinerar|event|wedding|party|moving|move house|launch|project/,
    steps: [
      {
        title: "Lock the non-negotiables",
        detail:
          "Dates, budget ceiling, must-haves, and deal-breakers. Write these down — everything else flexes around them.",
        role: "Together",
      },
      {
        title: "Muse builds the plan",
        detail:
          "Muse turns the constraints into a phased plan with a timeline, bookings needed, and a cost breakdown.",
        role: "Muse",
      },
      {
        title: "You approve before anything is booked",
        detail:
          "Review the plan, adjust the trade-offs, and approve it — then book or commit one item at a time.",
        role: "You",
        checkpoint: "Approval checkpoint: plan approved before any booking or payment",
      },
    ],
  },
  {
    id: "shop",
    test: /buy|shop|purchase|order|deal|discount|headphones|laptop|phone|gift/,
    steps: [
      {
        title: "Muse shortlists within budget",
        detail:
          "Muse compares 3–5 options on the specs that matter for your use case, with honest trade-offs and warranty notes.",
        role: "Muse",
      },
      {
        title: "You decide — no money moves without you",
        detail:
          "Pick the winner yourself. If nothing fits the budget, say so rather than stretching it.",
        role: "You",
        checkpoint: "Approval checkpoint: purchase approved by you",
      },
    ],
  },
  {
    id: "build",
    test: /build|code|app|website|site|automate|tool|bot|make a|create a/,
    steps: [
      {
        title: "Scope the smallest working version",
        detail:
          "Define what 'version one' does and — just as important — what it deliberately doesn't do yet.",
        role: "Together",
      },
      {
        title: "Muse drafts or builds it",
        detail:
          "Muse produces the first working version: code, copy, or structure, depending on what you're making.",
        role: "Muse",
      },
      {
        title: "You test and approve",
        detail:
          "Try the real thing end to end. List what to fix, approve the fixes, repeat until it works.",
        role: "You",
        checkpoint: "Approval checkpoint: you test the working version before launch",
      },
    ],
  },
  {
    id: "money",
    test: /budget|money|save|saving|invest|finance|debt|expense|spending/,
    steps: [
      {
        title: "Muse sets up the tracker",
        detail:
          "Ask Muse to design a simple budget or tracker template around your categories — simple enough to maintain.",
        role: "Muse",
      },
      {
        title: "You fill in real numbers",
        detail:
          "Only real figures from your accounts — estimates make the whole exercise fiction.",
        role: "You",
      },
      {
        title: "Review the picture together",
        detail:
          "Ask Muse to spot the leaks and suggest 2–3 concrete changes. You pick which to adopt.",
        role: "Together",
        checkpoint: "Approval checkpoint: you choose which changes to adopt",
      },
    ],
  },
  {
    id: "study",
    test: /study|exam|learn|prepare|practice|course|syllabus|upsc|interview prep/,
    steps: [
      {
        title: "Map what to learn",
        detail:
          "List the topics and your current level in each. Be honest about the weak spots — the plan depends on it.",
        role: "Together",
      },
      {
        title: "Muse makes the study plan",
        detail:
          "Muse builds a week-by-week plan weighted toward your weak areas, with practice questions and mock tests.",
        role: "Muse",
      },
      {
        title: "You do focused sessions",
        detail:
          "The plan only works if you work it. Log what you complete; tell Muse what's slipping so it can re-plan.",
        role: "You",
      },
      {
        title: "Muse quizzes you",
        detail:
          "End each week with Muse testing you on the weak areas — retrieval beats re-reading.",
        role: "Together",
      },
    ],
  },
  {
    id: "health",
    test: /fitness|workout|diet|health|weight|exercise|running|gym|sleep/,
    steps: [
      {
        title: "State your starting point",
        detail:
          "Current routine, constraints (injuries, time, equipment), and the actual goal — specific beats vague.",
        role: "You",
      },
      {
        title: "Muse drafts the routine",
        detail:
          "Muse builds a realistic weekly routine around your constraints. For anything medical, verify with a professional.",
        role: "Muse",
      },
      {
        title: "You execute and log",
        detail:
          "Do the sessions, log them simply. Report back weekly so the routine can adapt to reality.",
        role: "You",
      },
    ],
  },
];

const RISKY_VERBS = /send|post|publish|pay|delete|remove|submit|cancel|share|sign|transfer/;

function detectDeadline(text: string): string | null {
  const m = text.match(
    /\bby\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|next week|the end of \w+|\w+ \d{1,2}(st|nd|rd|th)?)\b/i
  );
  if (m) return m[1];
  const m2 = text.match(/\bin\s+(\d+\s+(days?|weeks?|months?))\b/i);
  if (m2) return `in ${m2[1]}`;
  return null;
}

function buildWorkflow(goal: string, recurring: boolean): { steps: Step[]; matched: string[]; deadline: string | null } {
  const lower = goal.toLowerCase();
  const matched = CATEGORIES.filter((c) => c.test.test(lower));

  const steps: Step[] = [
    {
      title: "Define success and constraints",
      detail:
        "State what 'done' looks like, the deadline, the budget, and what's off-limits. Two minutes here saves hours later.",
      role: "Together",
    },
  ];

  if (matched.length === 0) {
    steps.push(
      {
        title: "Muse gathers the background",
        detail: "Ask Muse to research or summarize whatever context the task needs.",
        role: "Muse",
      },
      {
        title: "Muse proposes 2–3 approaches",
        detail: "Get options with trade-offs before committing to one path.",
        role: "Muse",
      },
      {
        title: "You approve the direction",
        detail: "Pick the approach. Everything after this follows your call.",
        role: "You",
        checkpoint: "Approval checkpoint: you approve the approach",
      },
      {
        title: "Execute together, in order",
        detail: "Work the plan step by step. Report blockers to Muse so it can adjust.",
        role: "Together",
      }
    );
  } else {
    for (const c of matched.slice(0, 2)) steps.push(...c.steps);
  }

  if (RISKY_VERBS.test(lower)) {
    steps.push({
      title: "Final approval gate",
      detail:
        "Before anything irreversible happens — sending, paying, posting, deleting — you review and explicitly approve it.",
      role: "You",
      checkpoint: "Approval checkpoint: nothing irreversible without your explicit OK",
    });
  }

  steps.push({
    title: "Verify and adjust",
    detail: "Check the result against your definition of 'done'. Note what worked and what to change next time.",
    role: "You",
  });

  if (recurring) {
    steps.push({
      title: "Weekly review ritual",
      detail:
        "Ten minutes, same time each week: what's working, what's stuck, one change for next week. Ask Muse to keep a running log of decisions.",
      role: "Together",
    });
  }

  return { steps: steps.slice(0, 10), matched: matched.map((c) => c.id), deadline: detectDeadline(goal) };
}

function checklistMarkdown(goal: string, steps: Step[], deadline: string | null, recurring: boolean): string {
  const L: string[] = [`# Workflow: ${goal.trim() || "(your goal)"}`];
  if (deadline) L.push(`Deadline: ${deadline}`);
  if (recurring) L.push("Cadence: recurring — includes a weekly review ritual");
  L.push("");
  steps.forEach((s, i) => {
    L.push(`- [ ] ${i + 1}. [${s.role}] ${s.title} — ${s.detail}`);
    if (s.checkpoint) L.push(`      [CHECKPOINT] ${s.checkpoint}`);
  });
  return L.join("\n");
}

/* ------------------------------------------------------------------ */

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

const rolePill: Record<Role, string> = {
  You: "bg-ink text-bg",
  Muse: "bg-accent text-accent-ink",
  Together: "border border-line text-muted",
};

const roleHint: Record<Role, string> = {
  You: "your judgment calls and approvals",
  Muse: "Muse does the legwork",
  Together: "you work it out jointly",
};

export default function WorkflowGenerator() {
  const { notify } = useToast();
  const [goal, setGoal] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const workflow = useMemo(
    () => buildWorkflow(goal, recurring),
    [goal, recurring]
  );

  const handleCopy = async () => {
    const md = checklistMarkdown(goal, workflow.steps, workflow.deadline, recurring);
    const ok = await copyText(md);
    if (ok) {
      setCopied(true);
      notify("Checklist copied");
      setTimeout(() => setCopied(false), 1400);
    } else {
      notify("Copy failed — select the text manually");
    }
  };

  const inputCls =
    "mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 leading-relaxed placeholder:text-faint";

  return (
    <div>
      <div className="rounded-[22px] border border-line bg-raised/40 p-5 md:p-7">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <label htmlFor="wg-goal" className="font-bold">
              What do you want to accomplish?
            </label>
            <textarea
              id="wg-goal"
              rows={3}
              value={goal}
              onChange={(e) => {
                setGoal(e.target.value);
                setGenerated(false);
              }}
              placeholder="e.g. Research and buy a laptop for college, budget ₹50,000, needed by next month"
              className={inputCls}
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="inline-flex cursor-pointer items-center gap-3">
              <span className="text-sm font-bold">Recurring?</span>
              <button
                type="button"
                role="switch"
                aria-checked={recurring}
                aria-label="Recurring goal — add a weekly review ritual step"
                onClick={() => setRecurring((r) => !r)}
                className={`relative h-7 w-12 shrink-0 rounded-full transition-colors duration-150 ${
                  recurring ? "bg-ink" : "bg-line"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-1 h-5 w-5 rounded-full bg-bg transition-all duration-150 ${
                    recurring ? "left-6" : "left-1"
                  }`}
                />
              </button>
            </label>
            <button
              type="button"
              onClick={() => {
                setGenerated(true);
                notify("Workflow generated");
              }}
              disabled={!goal.trim()}
              className="rounded-lg bg-ink px-6 py-3 text-sm font-bold text-bg transition-transform duration-150 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Generate workflow
            </button>
          </div>
        </div>
        <p className="mt-3 text-sm text-faint">
          Runs entirely in your browser from pattern rules — no AI, nothing
          leaves this page. The plan adapts to what your goal mentions:
          research, writing, planning, shopping, building, money, study, or
          fitness.
        </p>
      </div>

      {!generated || !goal.trim() ? (
        <div className="mt-8 rounded-[22px] border border-dashed border-line p-8 text-center md:p-12">
          <p className="font-display text-[1.25rem] font-bold">
            Your step plan appears here
          </p>
          <p className="mx-auto mt-2 max-w-[440px] text-sm leading-relaxed text-muted">
            Describe your goal and hit “Generate workflow”. Every step is
            tagged with who does it — you, Muse, or both — and approval
            checkpoints are flagged so nothing important happens without your
            say-so.
          </p>
        </div>
      ) : (
        <Reveal>
          <div className="mt-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  {workflow.steps.length}-step plan
                  {workflow.deadline ? ` · deadline: ${workflow.deadline}` : ""}
                  {recurring ? " · recurring" : ""}
                </p>
                <div className="mt-3 flex flex-wrap gap-2" aria-label="Role legend">
                  {(Object.keys(rolePill) as Role[]).map((r) => (
                    <span
                      key={r}
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${rolePill[r]}`}
                    >
                      {r}
                      <span className="font-normal opacity-80">{roleHint[r]}</span>
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors duration-150 ${
                  copied ? "bg-moss text-moss-ink" : "bg-ink text-bg"
                }`}
              >
                {copied ? "Copied" : "Copy as checklist"}
              </button>
            </div>

            <ol className="mt-6 space-y-4">
              {workflow.steps.map((s, i) => (
                <li
                  key={i}
                  className={`rounded-[18px] border bg-surface p-5 md:p-6 ${
                    s.checkpoint ? "border-accent" : "border-line"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-[1.4rem] font-extrabold text-faint"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${rolePill[s.role]}`}
                    >
                      {s.role}
                    </span>
                    {s.checkpoint && (
                      <span className="rounded-full bg-moss px-3 py-1 text-xs font-bold text-moss-ink">
                        Approval checkpoint
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-display text-[1.15rem] font-bold tracking-tight">
                    {s.title}
                  </p>
                  <p className="mt-1.5 leading-relaxed text-muted">{s.detail}</p>
                  {s.checkpoint && (
                    <p className="mt-3 border-t border-line pt-3 text-sm font-bold text-accent">
                      {s.checkpoint}
                    </p>
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm leading-relaxed text-faint">
              Copy the checklist into your notes app or paste it into Muse as
              a starting plan. Adjust any step — the tags are a guide, not a
              contract.
            </p>
          </div>
        </Reveal>
      )}
    </div>
  );
}
