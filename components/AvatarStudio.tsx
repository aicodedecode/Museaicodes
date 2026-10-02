"use client";

import { useMemo, useState } from "react";
import {
  AVATAR_APPLY_GUIDES,
  AVATAR_CHARACTERS,
  AVATAR_NAMES,
  AVATAR_TONES,
  type AvatarTone,
} from "@/lib/avatar-studio";

type VibeFilter = AvatarTone | "All";

function pick<T>(arr: T[], except?: number): number {
  if (arr.length <= 1) return 0;
  let i = Math.floor(Math.random() * arr.length);
  if (except !== undefined) {
    while (i === except) i = Math.floor(Math.random() * arr.length);
  }
  return i;
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }
}

function CopyButton({
  label,
  text,
  copiedKey,
  onCopied,
  id,
}: {
  label: string;
  text: string;
  copiedKey: string | null;
  onCopied: (key: string) => void;
  id: string;
}) {
  const done = copiedKey === id;
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyText(text)) {
          onCopied(id);
          window.setTimeout(() => onCopied(""), 1600);
        }
      }}
      className="rounded-full border border-line px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
      aria-live="polite"
    >
      {done ? "Copied" : label}
    </button>
  );
}

export default function AvatarStudio() {
  const [vibe, setVibe] = useState<VibeFilter>("All");
  const [nameIdx, setNameIdx] = useState(() => pick(AVATAR_NAMES));
  const [charIdx, setCharIdx] = useState(() => pick(AVATAR_CHARACTERS));
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [nameQuery, setNameQuery] = useState("");
  const [nameTone, setNameTone] = useState<VibeFilter>("All");
  const [charVibe, setCharVibe] = useState<VibeFilter>("All");

  const poolNames = useMemo(
    () => (vibe === "All" ? AVATAR_NAMES : AVATAR_NAMES.filter((n) => n.tone === vibe)),
    [vibe]
  );
  const poolChars = useMemo(
    () =>
      vibe === "All"
        ? AVATAR_CHARACTERS
        : AVATAR_CHARACTERS.filter((c) => c.vibe === vibe),
    [vibe]
  );

  const name = AVATAR_NAMES[nameIdx];
  const character = AVATAR_CHARACTERS[charIdx];

  const comboText = useMemo(
    () =>
      `Avatar name: ${name.name}\nCharacter: ${character.title} (${character.vibe})\nPersonality: ${character.personality}\nLook: ${character.appearance}`,
    [name, character]
  );

  function shuffle() {
    const ni = pick(poolNames);
    const ci = pick(poolChars);
    setNameIdx(AVATAR_NAMES.indexOf(poolNames[ni]));
    setCharIdx(AVATAR_CHARACTERS.indexOf(poolChars[ci]));
  }

  const filteredNames = useMemo(() => {
    const q = nameQuery.trim().toLowerCase();
    return AVATAR_NAMES.filter(
      (n) =>
        (nameTone === "All" || n.tone === nameTone) &&
        (q === "" || n.name.toLowerCase().includes(q))
    );
  }, [nameQuery, nameTone]);

  const filteredChars = useMemo(
    () =>
      charVibe === "All"
        ? AVATAR_CHARACTERS
        : AVATAR_CHARACTERS.filter((c) => c.vibe === charVibe),
    [charVibe]
  );

  return (
    <div>
      {/* ——— Generator ——— */}
      <section aria-label="Avatar generator" className="mt-10 rounded-2xl border border-line p-6 md:p-10">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by vibe">
          {(["All", ...AVATAR_TONES] as VibeFilter[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setVibe(t)}
              aria-pressed={vibe === t}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                vibe === t
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center" aria-live="polite">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            Your avatar
          </p>
          <p className="font-display mt-3 text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-none tracking-tight">
            {name.name}
          </p>
          <p className="mt-4 text-lg font-bold text-accent">{character.title}</p>
          <p className="mx-auto mt-3 max-w-[62ch] text-muted">{character.personality}</p>
          <p className="mx-auto mt-2 max-w-[62ch] text-sm text-faint">
            <span className="font-bold uppercase tracking-[0.12em]">Look — </span>
            {character.appearance}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={shuffle}
            className="rounded-full bg-accent px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Shuffle
          </button>
          <CopyButton
            id="copy-name"
            label="Copy name"
            text={name.name}
            copiedKey={copiedKey}
            onCopied={setCopiedKey}
          />
          <CopyButton
            id="copy-char"
            label="Copy character"
            text={`${character.title} — ${character.personality} Look: ${character.appearance}`}
            copiedKey={copiedKey}
            onCopied={setCopiedKey}
          />
          <CopyButton
            id="copy-combo"
            label="Copy combo"
            text={comboText}
            copiedKey={copiedKey}
            onCopied={setCopiedKey}
          />
        </div>
        <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          {poolNames.length} names · {poolChars.length} characters
          {vibe !== "All" ? ` · ${vibe} only` : ""}
        </p>
      </section>

      {/* ——— Apply guides ——— */}
      <section aria-label="How to use it in your app" className="mt-16">
        <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight">
          Use it in your app
        </h2>
        <p className="mt-2 max-w-[68ch] text-muted">
          Copy a combo above, then apply it where your assistant lets you change
          its name and look. Steps reflect each app&apos;s actual settings.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {AVATAR_APPLY_GUIDES.map((g) => (
            <div key={g.app} className="rounded-2xl border border-line p-6">
              <h3 className="text-lg font-extrabold">{g.app}</h3>
              <p className="mt-1 text-sm text-muted">{g.blurb}</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted marker:font-bold marker:text-accent">
                {g.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Name browser ——— */}
      <section aria-label="Browse all avatar names" className="mt-16">
        <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight">
          All 100 names
        </h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            placeholder="Search names…"
            aria-label="Search avatar names"
            className="w-full rounded-full border border-line bg-transparent px-5 py-2.5 text-sm placeholder:text-faint focus:border-accent focus:outline-none sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter names by tone">
            {(["All", ...AVATAR_TONES] as VibeFilter[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setNameTone(t)}
                aria-pressed={nameTone === t}
                className={`rounded-full border px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-colors ${
                  nameTone === t
                    ? "border-accent bg-accent text-white"
                    : "border-line text-muted hover:border-accent hover:text-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        {filteredNames.length === 0 ? (
          <p className="mt-6 text-muted">
            No names match “{nameQuery}”. Try a shorter search.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredNames.map((n) => (
              <button
                key={n.name}
                type="button"
                onClick={async () => {
                  if (await copyText(n.name)) {
                    setCopiedKey(`name-${n.name}`);
                    window.setTimeout(() => setCopiedKey(""), 1200);
                  }
                }}
                title="Tap to copy"
                className="rounded-xl border border-line px-3 py-3 text-left transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span className="block font-bold">{n.name}</span>
                <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  {copiedKey === `name-${n.name}` ? "Copied" : n.tone}
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ——— Character browser ——— */}
      <section aria-label="Browse all avatar characters" className="mt-16">
        <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight">
          All 100 characters
        </h2>
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter characters by vibe">
          {(["All", ...AVATAR_TONES] as VibeFilter[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setCharVibe(t)}
              aria-pressed={charVibe === t}
              className={`rounded-full border px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] transition-colors ${
                charVibe === t
                  ? "border-accent bg-accent text-white"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredChars.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-extrabold">{c.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                    {c.vibe}
                  </p>
                </div>
                <CopyButton
                  id={`char-${c.title}`}
                  label="Copy"
                  text={`${c.title} — ${c.personality} Look: ${c.appearance}`}
                  copiedKey={copiedKey}
                  onCopied={setCopiedKey}
                />
              </div>
              <p className="mt-2 text-sm text-muted">{c.personality}</p>
              <p className="mt-1 text-sm text-faint">
                <span className="font-bold uppercase tracking-[0.1em]">Look — </span>
                {c.appearance}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
