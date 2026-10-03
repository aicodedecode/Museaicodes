"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CopyButton } from "./Toast";
import Reveal from "./Reveal";

type AppKey = "muse" | "chatgpt" | "claude" | "metaai";

interface Option {
  label: string;
  hint?: string;
  scores: Partial<Record<AppKey, number>>;
  blocksMuse?: boolean;
}

interface Question {
  id: string;
  title: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "job",
    title: "What do you mainly want AI for?",
    options: [
      {
        label: "Get things done across apps and the web",
        hint: "Research, bookings, monitoring, follow-through",
        scores: { muse: 2 },
      },
      {
        label: "Write, think, and create with a collaborator",
        hint: "Drafts, analysis, ideas, documents",
        scores: { claude: 2, chatgpt: 1 },
      },
      {
        label: "Quick answers inside apps I already use",
        hint: "Fast help in WhatsApp, Instagram, Facebook",
        scores: { metaai: 2 },
      },
    ],
  },
  {
    id: "style",
    title: "How do you like to work?",
    options: [
      {
        label: "Do it for me in the background",
        hint: "Set a goal, get notified when it's done",
        scores: { muse: 2 },
      },
      {
        label: "Work with me step by step",
        hint: "Iterate together on the thinking",
        scores: { claude: 2, chatgpt: 1 },
      },
      {
        label: "Just answer fast",
        hint: "One question, one quick answer",
        scores: { metaai: 2, chatgpt: 1 },
      },
    ],
  },
  {
    id: "region",
    title: "Where are you located?",
    options: [
      {
        label: "United States or Canada",
        hint: "Muse's current rollout region",
        scores: {},
      },
      {
        label: "Somewhere else",
        hint: "Muse isn't officially available here yet",
        scores: {},
        blocksMuse: true,
      },
    ],
  },
  {
    id: "outputs",
    title: "What should the results look like?",
    options: [
      {
        label: "Finished artifacts",
        hint: "Documents, dashboards, trackers, web pages",
        scores: { muse: 2 },
      },
      {
        label: "Chat answers and drafts",
        hint: "Conversations I can copy from",
        scores: { chatgpt: 2, claude: 1 },
      },
      {
        label: "Images and creative fun",
        hint: "Visuals, playful generations",
        scores: { metaai: 2, chatgpt: 1 },
      },
    ],
  },
  {
    id: "ecosystem",
    title: "Which ecosystem fits your life?",
    options: [
      {
        label: "I live in Meta apps",
        hint: "WhatsApp, Instagram, Facebook daily",
        scores: { metaai: 2 },
      },
      {
        label: "I need serious coding help",
        hint: "Code review, debugging, building",
        scores: { claude: 2, chatgpt: 2 },
      },
      {
        label: "General everyday use",
        hint: "A bit of everything",
        scores: { chatgpt: 2, muse: 1 },
      },
    ],
  },
];

const RESULTS: Record<
  AppKey,
  { name: string; tagline: string; rationale: string[]; link: string; linkLabel: string }
> = {
  muse: {
    name: "Muse",
    tagline: "The personal agent that finishes work for you.",
    rationale: [
      "You want outcomes across apps and the web, not just chat replies — that's exactly what Muse is built around.",
      "Background work, goal tracking, and finished artifacts (documents, dashboards) match your working style.",
      "Heads-up: confirm Muse is available for your account and region, and check the current access terms in the app.",
    ],
    link: "/guides/muse-ai-tutorial",
    linkLabel: "Start with the Muse tutorial",
  },
  chatgpt: {
    name: "ChatGPT",
    tagline: "The versatile all-rounder with the biggest ecosystem.",
    rationale: [
      "For general everyday use and quick-to-deep chat, ChatGPT's maturity and broad integrations are hard to beat.",
      "Strong across writing, coding help, and creative tasks with a huge third-party ecosystem.",
      "If you later want an agent that acts across apps in the background, revisit Muse when it's available to you.",
    ],
    link: "/compare",
    linkLabel: "Compare all four assistants",
  },
  claude: {
    name: "Claude",
    tagline: "The thoughtful collaborator for writing and reasoning.",
    rationale: [
      "Your answers point to collaborative thinking, writing, and careful work — Claude's strengths.",
      "Particularly strong for long documents, nuanced reasoning, and coding workflows.",
      "For autonomous background tasks across apps, Muse is the alternative worth watching.",
    ],
    link: "/compare",
    linkLabel: "Compare all four assistants",
  },
  metaai: {
    name: "Meta AI",
    tagline: "Fast answers where you already spend your time.",
    rationale: [
      "You want quick help inside WhatsApp, Instagram, and Facebook — Meta AI lives there natively.",
      "Best when speed and convenience beat depth, and you're already in Meta's apps all day.",
      "If you later need multi-step work done across the web, look at Muse (US/Canada) or ChatGPT.",
    ],
    link: "/compare",
    linkLabel: "Compare all four assistants",
  },
};

export default function AiQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const result = useMemo<null | { key: AppKey; blockedNote: boolean }>(() => {
    if (!done) return null;
    const totals: Record<AppKey, number> = { muse: 0, chatgpt: 0, claude: 0, metaai: 0 };
    let blockedMuse = false;
    QUESTIONS.forEach((q) => {
      const idx = answers[q.id];
      if (idx === undefined) return;
      const opt = q.options[idx];
      (Object.keys(opt.scores) as AppKey[]).forEach(
        (k) => (totals[k] += opt.scores[k] ?? 0)
      );
      if (opt.blocksMuse) blockedMuse = true;
    });
    const order: AppKey[] = ["muse", "chatgpt", "claude", "metaai"];
    let best: AppKey = "chatgpt";
    let bestScore = -1;
    order.forEach((k) => {
      if (k === "muse" && blockedMuse) return;
      if (totals[k] > bestScore) {
        bestScore = totals[k];
        best = k;
      }
    });
    return { key: best, blockedNote: blockedMuse };
  }, [done, answers]);

  const pick = (qIndex: number, oIndex: number) => {
    const q = QUESTIONS[qIndex];
    setAnswers((a) => ({ ...a, [q.id]: oIndex }));
    if (qIndex + 1 < QUESTIONS.length) {
      setStep(qIndex + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  if (done && result) {
    const r = RESULTS[result.key];
    const shareText = `My AI match: ${r.name} — ${r.tagline} (via museaicodes quiz)`;
    return (
      <Reveal>
        <div className="mx-auto max-w-[720px] rounded-[26px] border border-line bg-surface p-6 md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Your match
          </p>
          <h2 className="font-display mt-3 text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold tracking-tight">
            {r.name}
          </h2>
          <p className="mt-2 text-[1.1rem] font-semibold text-accent">{r.tagline}</p>
          <ul className="mt-6 space-y-3">
            {r.rationale.map((line, i) => (
              <li
                key={i}
                className="rounded-xl border border-line bg-bg p-4 leading-relaxed text-muted"
              >
                {line}
              </li>
            ))}
          </ul>
          {result.blockedNote && (
            <p className="mt-4 rounded-xl border border-line bg-bg p-4 text-sm leading-relaxed text-muted">
              Note: you&rsquo;re outside Muse&rsquo;s current rollout region
              (U.S. and Canada), so it wasn&rsquo;t eligible for this
              recommendation. Availability changes — check the official access
              route for your account.
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={r.link}
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-bold text-bg transition-transform duration-150 hover:-translate-y-0.5"
            >
              {r.linkLabel} <span aria-hidden="true">→</span>
            </Link>
            <CopyButton text={shareText} label="Copy your quiz result" />
            <button
              type="button"
              onClick={restart}
              className="rounded-xl border border-line px-6 py-3.5 font-bold text-muted transition-colors hover:border-ink hover:text-ink"
            >
              Retake
            </button>
          </div>
        </div>
      </Reveal>
    );
  }

  const q = QUESTIONS[step];
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <div className="mx-auto max-w-[720px]">
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-faint">
          <span className="font-mono uppercase tracking-[0.1em]">
            Question {step + 1} of {QUESTIONS.length}
          </span>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="font-bold text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              ← Back
            </button>
          )}
        </div>
        <div
          role="progressbar"
          aria-valuenow={step + 1}
          aria-valuemin={1}
          aria-valuemax={QUESTIONS.length}
          aria-label="Quiz progress"
          className="mt-2 h-2 overflow-hidden rounded-full bg-line"
        >
          <div
            className="h-full rounded-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <Reveal key={step}>
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
          {q.title}
        </h2>
        <div className="mt-6 space-y-3" role="group" aria-label={q.title}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => pick(step, i)}
              className="block w-full rounded-2xl border border-line bg-surface p-5 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-ink hover:shadow-[var(--shadow)]"
            >
              <span className="font-bold text-[1.05rem]">{opt.label}</span>
              {opt.hint && (
                <span className="mt-1 block text-sm text-muted">{opt.hint}</span>
              )}
            </button>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
