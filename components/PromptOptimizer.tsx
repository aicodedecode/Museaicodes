"use client";

import { useMemo, useState } from "react";
import { useToast } from "./Toast";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/* Heuristic analysis — deterministic, no AI involved.                   */
/* ------------------------------------------------------------------ */

const VAGUE_WORDS = [
  "something",
  "anything",
  "stuff",
  "things",
  "thing",
  "good",
  "best",
  "nice",
  "cool",
  "awesome",
  "quickly",
  "asap",
  "a bit",
  "kind of",
  "sort of",
  "somehow",
  "maybe",
  "probably",
  "really",
  "very",
  "tell me about",
  "write about",
  "help me with",
  "give me some",
  "a few",
];

const FORMAT_WORDS = [
  "table",
  "bullet",
  "list",
  "steps",
  "step-by-step",
  "checklist",
  "paragraph",
  "essay",
  "email",
  "outline",
  "plan",
  "draft",
  "script",
  "summary",
  "comparison",
  "report",
];

const CONSTRAINT_WORDS = [
  "budget",
  "deadline",
  "limit",
  "under",
  "maximum",
  "minimum",
  "at least",
  "at most",
  "keep it",
  "avoid",
  "must",
  "don't",
  "do not",
  "never",
  "only",
  "exactly",
  "words",
  "minutes",
  "pages",
];

const AUDIENCE_WORDS = [
  "audience",
  "reader",
  "readers",
  "customer",
  "customers",
  "student",
  "students",
  "team",
  "users",
  "friend",
  "family",
  "colleagues",
  "client",
  "beginner",
  "expert",
  "kid",
  "kids",
];

const TONE_WORDS = [
  "formal",
  "casual",
  "friendly",
  "professional",
  "playful",
  "serious",
  "concise",
  "detailed",
  "warm",
  "direct",
  "persuasive",
  "neutral",
  "humorous",
  "polite",
];

const RISKY_VERBS = [
  "send",
  "post",
  "publish",
  "buy",
  "purchase",
  "pay",
  "delete",
  "remove",
  "submit",
  "share",
  "cancel",
  "book",
  "order",
  "sign up",
];

const PLACEHOLDER_STOPSET = new Set([
  "AI",
  "USA",
  "UK",
  "FAQ",
  "SEO",
  "PDF",
  "URL",
  "UPSC",
  "MBA",
  "CEO",
  "HR",
  "IT",
  "TV",
]);

function findWords(text: string, words: string[]): string[] {
  const lower = ` ${text.toLowerCase()} `;
  const found: string[] = [];
  for (const w of words) {
    const pattern = new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
    if (pattern.test(lower) && !found.includes(w)) found.push(w);
  }
  return found;
}

function findPlaceholders(text: string): string[] {
  const found: string[] = [];
  const bracketed = text.match(/(\[[^\[\]]{1,40}\])|(\{[^}{]{1,40}\})|(<[^<>]{1,40}>)/g);
  if (bracketed) {
    for (const b of bracketed) {
      const inner = b.slice(1, -1).trim();
      if (inner && !found.includes(b)) found.push(b);
    }
  }
  const caps = text.match(/\b[A-Z][A-Z0-9_]{2,14}\b/g);
  if (caps) {
    for (const c of caps) {
      if (!PLACEHOLDER_STOPSET.has(c) && !found.includes(c)) found.push(c);
    }
  }
  return found;
}

function firstSentence(text: string): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  const m = cleaned.match(/^(.+?[.!?\n])(\s|$)/);
  const raw = (m ? m[1] : cleaned.split("\n")[0] ?? "").trim();
  const noPlease = raw.replace(/^(please|kindly|can you|could you|would you)\s+/i, "");
  if (!noPlease) return cleaned.slice(0, 120);
  return noPlease.charAt(0).toUpperCase() + noPlease.slice(1);
}

interface Diagnosis {
  kind: "problem" | "ok";
  text: string;
}

interface Analysis {
  objective: string;
  vague: string[];
  placeholders: string[];
  hasFormat: boolean;
  formatHit: string | null;
  hasConstraints: boolean;
  hasNumbers: boolean;
  hasContext: boolean;
  hasAudience: boolean;
  hasTone: boolean;
  risky: string[];
  missing: { tag: string; why: string }[];
  diagnosis: Diagnosis[];
  restructured: string;
}

function analyze(raw: string): Analysis | null {
  const text = raw.trim();
  if (!text) return null;

  const vague = findWords(text, VAGUE_WORDS);
  const placeholders = findPlaceholders(text);
  const formatHits = findWords(text, FORMAT_WORDS);
  const constraintHits = findWords(text, CONSTRAINT_WORDS);
  const audienceHits = findWords(text, AUDIENCE_WORDS);
  const toneHits = findWords(text, TONE_WORDS);
  const risky = RISKY_VERBS.filter((v) =>
    new RegExp(`\\b${v.replace(/ /g, "\\s+")}\\b`, "i").test(text)
  );
  const hasNumbers = /\d/.test(text);
  const hasContext = /\b(I|me|my|mine|we|our|us)\b/i.test(text);

  const hasFormat = formatHits.length > 0;
  const hasConstraints = constraintHits.length > 0 || hasNumbers;
  const hasAudience = audienceHits.length > 0;
  const hasTone = toneHits.length > 0;

  const missing: { tag: string; why: string }[] = [];
  if (!hasContext)
    missing.push({
      tag: "YOUR SITUATION",
      why: "who you are, where you stand, what you've already tried",
    });
  if (!hasAudience)
    missing.push({ tag: "AUDIENCE", why: "who the answer or output is for" });
  if (!hasFormat)
    missing.push({ tag: "OUTPUT FORMAT", why: "table, steps, draft, bullets…" });
  if (!hasConstraints)
    missing.push({
      tag: "CONSTRAINTS",
      why: "budget, length, deadline, things to avoid",
    });
  if (!hasTone)
    missing.push({ tag: "TONE", why: "formal, friendly, direct, playful…" });
  if (!hasNumbers && missing.length > 0)
    missing.push({
      tag: "SPECIFICS",
      why: "dates, amounts, quantities — numbers make answers concrete",
    });

  const diagnosis: Diagnosis[] = [];
  if (text.length < 40) {
    diagnosis.push({
      kind: "problem",
      text: "Very short prompt — there's not much to restructure yet. Describe what you want Muse to actually do.",
    });
  }
  if (vague.length > 0) {
    diagnosis.push({
      kind: "problem",
      text: `Vague wording detected: ${vague
        .map((w) => `“${w}”`)
        .join(", ")}. Replace each with something specific — a number, a name, a criterion.`,
    });
  } else if (text.length >= 40) {
    diagnosis.push({ kind: "ok", text: "No filler words detected — the wording is reasonably specific." });
  }
  if (!hasFormat)
    diagnosis.push({
      kind: "problem",
      text: "No output format specified — Muse will guess. Name the shape you want: table, steps, draft, checklist.",
    });
  if (!hasConstraints)
    diagnosis.push({
      kind: "problem",
      text: "No constraints found — add a budget, length limit, deadline, or things to avoid.",
    });
  if (risky.length > 0)
    diagnosis.push({
      kind: "problem",
      text: `This implies real-world actions (${risky
        .map((v) => `“${v}”`)
        .join(", ")}). The restructured version adds an approval rule so nothing irreversible happens without your say-so.`,
    });
  if (placeholders.length > 0)
    diagnosis.push({
      kind: "ok",
      text: `Placeholders found (${placeholders.join(
        ", "
      )}) — good instinct. Fill them in before pasting.`,
    });
  if (missing.length === 0 && vague.length === 0)
    diagnosis.push({
      kind: "ok",
      text: "This prompt is already well-structured — the restructure below mostly just tidies the layout.",
    });

  /* ----- build the restructured prompt ----- */
  const objective = firstSentence(text);
  const L: string[] = [];
  L.push("OBJECTIVE", objective, "");

  L.push("CONTEXT — fill in the brackets, keep the rest as is:");
  const contextLines: string[] = [];
  if (hasContext) {
    contextLines.push("- Your situation: described above — add any missing detail (role, what's been tried, what's at stake).");
  }
  for (const m of missing) {
    if (["YOUR SITUATION", "AUDIENCE", "TONE", "SPECIFICS"].includes(m.tag)) {
      contextLines.push(`- [${m.tag}]: ${m.why}.`);
    }
  }
  if (contextLines.length === 0)
    contextLines.push("- (Context looks covered — add anything Muse couldn't know about you.)");
  L.push(...contextLines, "");

  L.push("CONSTRAINTS:");
  const constraintLines: string[] = [];
  if (hasConstraints) {
    constraintLines.push(
      `- Respect the limits already stated (${constraintHits.slice(0, 4).join(", ") || "numbers/limits in the prompt"}).`
    );
  }
  for (const m of missing) {
    if (m.tag === "CONSTRAINTS") constraintLines.push("- [CONSTRAINTS]: budget, length, deadline, things to avoid.");
  }
  L.push(...constraintLines, "");

  L.push("APPROVAL RULES — ask me before you:");
  L.push("- Act on anything irreversible (sending, posting, paying, booking, deleting).");
  if (risky.length > 0) L.push(`- In particular: anything involving ${risky.map((v) => `“${v}”`).join(", ")}.`);
  L.push("- Guess at a missing detail — ask one focused question instead.", "");

  L.push("OUTPUT FORMAT:");
  L.push(
    hasFormat
      ? `As requested: ${formatHits.map((f) => `“${f}”`).join(", ")}.`
      : "[OUTPUT FORMAT]: pick one — a table, numbered steps, a draft, or a checklist."
  );
  L.push("", "Also: don't invent facts, figures, quotes, or names. If you're unsure, say so.");

  return {
    objective,
    vague,
    placeholders,
    hasFormat,
    formatHit: formatHits[0] ?? null,
    hasConstraints,
    hasNumbers,
    hasContext,
    hasAudience,
    hasTone,
    risky,
    missing,
    diagnosis,
    restructured: L.join("\n"),
  };
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

const SAMPLE =
  "Write something good about climate change for my class, make it quick and tell me about the best solutions";

export default function PromptOptimizer() {
  const { notify } = useToast();
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const analysis = useMemo(() => analyze(input), [input]);

  const loadSample = () => {
    setInput(SAMPLE);
    notify("Loaded a sample weak prompt");
  };

  const handleCopy = async () => {
    if (!analysis) return;
    const ok = await copyText(analysis.restructured);
    if (ok) {
      setCopied(true);
      notify("Restructured prompt copied — fill the brackets, then paste into Muse");
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
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-[560px]">
            <p className="font-bold">Paste a prompt that isn't working</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              This tool applies proven prompt-structure rules — objective,
              context, constraints, approval rules, output format — using
              pattern matching only.{" "}
              <strong className="text-ink">
                No AI rewrites anything here:
              </strong>{" "}
              it reorganizes what you wrote and flags exactly what's missing,
              so <em>you</em> stay in control of the meaning.
            </p>
          </div>
          <button
            type="button"
            onClick={loadSample}
            className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-bold text-muted transition-colors duration-150 hover:border-faint hover:text-ink"
          >
            Try a sample weak prompt
          </button>
        </div>
        <label htmlFor="po-input" className="mt-5 block font-bold">
          Your prompt
        </label>
        <textarea
          id="po-input"
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. Write something good about climate change for my class, make it quick"
          className={inputCls}
          aria-describedby="po-hint"
        />
        <p id="po-hint" className="mt-2 text-sm text-faint">
          Everything runs in your browser — your prompt never leaves this page.
        </p>
      </div>

      {!analysis ? (
        <div className="mt-8 rounded-[22px] border border-dashed border-line p-8 text-center md:p-12">
          <p className="font-display text-[1.25rem] font-bold">
            Nothing to analyze yet
          </p>
          <p className="mx-auto mt-2 max-w-[420px] text-sm leading-relaxed text-muted">
            Paste a prompt above — or load the sample — and the diagnosis plus
            a restructured version will appear here.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          <Reveal>
            <div className="rounded-[22px] border border-line bg-surface p-5 md:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                Diagnosis — what the rules found
              </p>
              <ul className="mt-4 space-y-3">
                {analysis.diagnosis.map((d, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full ${
                        d.kind === "problem" ? "bg-accent" : "bg-moss"
                      }`}
                    />
                    <span className={d.kind === "problem" ? "text-ink" : "text-muted"}>
                      {d.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[22px] border border-line bg-raised/40">
                <p className="border-b border-line px-5 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-faint md:px-6">
                  Before — your original
                </p>
                <pre className="max-h-[440px] overflow-auto whitespace-pre-wrap px-5 py-5 text-[0.95rem] leading-relaxed text-muted md:px-6">
                  {input.trim()}
                </pre>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-[22px] border border-line bg-surface lg:sticky lg:top-24">
                <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                    After — restructured
                  </p>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-bold transition-colors duration-150 ${
                      copied ? "bg-moss text-moss-ink" : "bg-ink text-bg"
                    }`}
                  >
                    {copied ? "Copied" : "Copy restructured"}
                  </button>
                </div>
                <pre className="max-h-[440px] overflow-auto whitespace-pre-wrap px-5 py-5 text-[0.95rem] leading-relaxed text-ink md:px-6">
                  {analysis.restructured}
                </pre>
              </div>
            </Reveal>
          </div>

          <p className="text-sm leading-relaxed text-faint">
            Fill in every [BRACKET] before pasting — those are the gaps Muse
            would otherwise have to guess at. Want to build a prompt from
            scratch instead? Try the{" "}
            <a href="/tools/prompt-generator" className="font-bold text-accent underline-offset-4 hover:underline">
              prompt builder
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}
