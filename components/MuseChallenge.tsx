"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";
import {
  CHALLENGE_CATEGORIES,
  CHALLENGE_STORAGE_KEY,
  CHALLENGE_TOTAL,
} from "@/lib/challenge-items";

const CARD_W = 1080;
const CARD_H = 1350;
const PREVIEW_SCALE = 0.32;

function loadProgress(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CHALLENGE_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

function todayLabel(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Draws the 1080×1350 completion card. Same text as the live preview.
 * The card is a personal milestone — deliberately NOT a certification.
 */
function drawCard(
  ctx: CanvasRenderingContext2D,
  jolly: HTMLImageElement | null,
  finishedOn: string
) {
  const BG = "#141611";
  const INK = "#f2efe4";
  const SUB = "#a6ab99";
  const ACCENT = "#ff6b47";

  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, CARD_W, CARD_H);
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  // Top brand mark
  try {
    (ctx as unknown as { letterSpacing: string }).letterSpacing = "18px";
  } catch {
    /* unsupported browsers fall back to normal spacing */
  }
  ctx.fillStyle = SUB;
  ctx.font = "600 38px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("MUSE HUB", CARD_W / 2, 150);
  try {
    (ctx as unknown as { letterSpacing: string }).letterSpacing = "0px";
  } catch {
    /* noop */
  }

  // Divider
  ctx.fillStyle = ACCENT;
  ctx.fillRect(CARD_W / 2 - 70, 200, 140, 6);

  // Jolly, clipped into a circle
  if (jolly) {
    const r = 150;
    ctx.save();
    ctx.beginPath();
    ctx.arc(CARD_W / 2, 470, r, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(jolly, CARD_W / 2 - r, 470 - r, r * 2, r * 2);
    ctx.restore();
  }

  // Headline
  ctx.fillStyle = INK;
  ctx.font = "700 88px Georgia, 'Times New Roman', serif";
  ctx.fillText("I completed the", CARD_W / 2, 770);
  ctx.fillText("30-Day Muse Challenge", CARD_W / 2, 880);

  // Subcopy
  ctx.fillStyle = SUB;
  ctx.font = "500 46px system-ui, -apple-system, sans-serif";
  ctx.fillText("A self-paced tour of", CARD_W / 2, 980);
  ctx.fillText("what Muse AI can really do.", CARD_W / 2, 1040);

  // Date
  ctx.font = "600 40px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText(`Finished ${finishedOn}`, CARD_W / 2, 1130);

  // Modesty line
  ctx.font = "500 30px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("A personal milestone, not a certification.", CARD_W / 2, 1190);

  // Footer
  ctx.fillStyle = ACCENT;
  ctx.font = "700 46px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("museaicodes.com", CARD_W / 2, CARD_H - 130);

  ctx.fillStyle = SUB;
  ctx.font = "500 36px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("The unofficial Muse AI guide hub", CARD_W / 2, CARD_H - 70);
}

export default function MuseChallenge() {
  const [checked, setChecked] = useState<string[]>(loadProgress);
  const [jolly, setJolly] = useState<HTMLImageElement | null>(null);
  const [cardReady, setCardReady] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Persist progress on-device.
  useEffect(() => {
    try {
      window.localStorage.setItem(CHALLENGE_STORAGE_KEY, JSON.stringify(checked));
    } catch {
      /* storage unavailable (private mode) — progress still works in-session */
    }
  }, [checked]);

  // Load the brand image for the completion card.
  useEffect(() => {
    const img = new Image();
    img.src = "/images/brand/jolly-logo.png";
    img.onload = () => setJolly(img);
    img.onerror = () => setJolly(null); // draw text-only fallback
  }, []);

  const checkedSet = useMemo(() => new Set(checked), [checked]);
  const done = checked.length;
  const complete = done >= CHALLENGE_TOTAL;
  const pct = Math.round((done / CHALLENGE_TOTAL) * 100);

  const toggle = useCallback((id: string) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const reset = useCallback(() => {
    if (
      window.confirm(
        "Reset the challenge? All 30 items will be unchecked and your saved progress cleared."
      )
    ) {
      setChecked([]);
    }
  }, []);

  // Draw the card whenever the completion state or brand image changes.
  useEffect(() => {
    if (!complete) {
      setCardReady(false);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawCard(ctx, jolly, todayLabel());
    setCardReady(true);
  }, [complete, jolly]);

  const download = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "muse-30-challenge-complete.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px]">
      {/* Checklist */}
      <div className="space-y-10">
        {CHALLENGE_CATEGORIES.map((cat, ci) => (
          <section key={cat.id} aria-labelledby={`challenge-${cat.id}`}>
            <Reveal delay={Math.min(ci, 4) * 40}>
              <h2
                id={`challenge-${cat.id}`}
                className="font-display text-[1.6rem] font-bold tracking-tight"
              >
                {cat.title}
              </h2>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                {cat.items.filter((i) => checkedSet.has(i.id)).length} of{" "}
                {cat.items.length} done
              </p>
            </Reveal>
            <ul className="mt-4 space-y-3">
              {cat.items.map((item, ii) => {
                const isChecked = checkedSet.has(item.id);
                return (
                  <Reveal
                    as="li"
                    key={item.id}
                    delay={Math.min(ii, 5) * 30}
                    className={`flex items-center gap-3 rounded-[18px] border p-3 transition-colors duration-200 md:gap-4 md:p-4 ${
                      isChecked
                        ? "border-accent/40 bg-surface"
                        : "border-line bg-surface"
                    }`}
                  >
                    <label
                      htmlFor={`challenge-${item.id}`}
                      className="flex min-h-[48px] flex-1 cursor-pointer items-center gap-3 md:gap-4"
                    >
                        <input
                          id={`challenge-${item.id}`}
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(item.id)}
                          aria-label={`${item.label} — ${cat.title}`}
                          className="h-8 w-8 shrink-0 cursor-pointer rounded-md accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        />
                        <span
                          className={`leading-snug ${
                            isChecked ? "text-faint line-through" : "text-ink"
                          }`}
                        >
                          {item.label}
                        </span>
                      </label>
                      <a
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open the guide for: ${item.label}`}
                        className="flex min-h-[48px] shrink-0 items-center gap-1.5 rounded-full border border-line px-4 text-sm font-bold text-accent transition-colors hover:border-accent hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        Guide
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                  </Reveal>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {/* Sticky progress */}
      <Reveal delay={100} className="lg:sticky lg:top-24">
        <div className="rounded-[26px] border border-line bg-ink p-6 text-bg md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
            Your progress
          </p>
          <p
            aria-live="polite"
            className="font-display mt-4 text-[clamp(2.6rem,5vw,3.8rem)] font-extrabold leading-none tracking-tight tabular-nums"
          >
            {done}
            <span className="text-[0.5em] font-bold text-bg/60">
              {" "}
              / {CHALLENGE_TOTAL}
            </span>
          </p>

          <div className="mt-6">
            <div
              role="progressbar"
              aria-valuenow={done}
              aria-valuemin={0}
              aria-valuemax={CHALLENGE_TOTAL}
              aria-label={`${done} of ${CHALLENGE_TOTAL} challenge items complete`}
              className="h-3 overflow-hidden rounded-full bg-bg/20"
            >
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-bg/70">
              {complete
                ? "All 30 done — nice. Your completion card is ready below."
                : done === 0
                  ? "Start anywhere — tick an item as you try it, and it saves on this device."
                  : `${CHALLENGE_TOTAL - done} to go. Progress saves on this device, so you can leave and come back.`}
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-6 w-full rounded-lg border border-bg/25 px-6 py-3 text-sm font-bold text-bg/80 transition-colors hover:border-bg/60 hover:text-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Reset progress
          </button>
          <p className="mt-3 text-[0.8rem] leading-relaxed text-bg/50">
            Progress is stored only in this browser&rsquo;s local storage. It
            never leaves your device.
          </p>
        </div>

        {complete && (
          <div className="mt-6 overflow-hidden rounded-[26px] border border-line bg-surface">
            <div
              className="mx-auto mt-6 overflow-hidden rounded-xl border border-line"
              style={{
                width: CARD_W * PREVIEW_SCALE,
                height: CARD_H * PREVIEW_SCALE,
              }}
              role="img"
              aria-label="Completion card preview: I completed the 30-Day Muse Challenge"
            >
              <canvas
                ref={canvasRef}
                width={CARD_W}
                height={CARD_H}
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  transform: `scale(${PREVIEW_SCALE})`,
                  transformOrigin: "top left",
                }}
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                Challenge complete
              </p>
              <h2 className="font-display mt-2 text-[1.75rem] font-bold tracking-tight">
                You did all 30.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                You&rsquo;ve toured what Muse can actually do — from first
                prompts to connectors and token strategy. This is a personal
                milestone, not a certification.
              </p>
              <button
                type="button"
                onClick={download}
                disabled={!cardReady}
                className="mt-5 w-full rounded-lg bg-ink px-6 py-4 text-base font-bold text-bg transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
              >
                Download completion card (PNG 1080 × 1350)
              </button>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-faint">
                The card is drawn locally in your browser — nothing is uploaded.
              </p>
            </div>
          </div>
        )}
      </Reveal>
    </div>
  );
}
