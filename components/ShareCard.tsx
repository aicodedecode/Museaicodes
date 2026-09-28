"use client";

import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

const W = 1080;
const H = 1350;
const PREVIEW_SCALE = 0.3;

interface CardTheme {
  id: string;
  name: string;
  bg: string;
  ink: string;
  sub: string;
  accent: string;
  accentInk: string;
}

const THEMES: CardTheme[] = [
  {
    id: "ember",
    name: "Ember",
    bg: "#141611",
    ink: "#f2efe4",
    sub: "#a6ab99",
    accent: "#ff6b47",
    accentInk: "#1b0c06",
  },
  {
    id: "moss",
    name: "Moss",
    bg: "#0c2117",
    ink: "#eef7f0",
    sub: "#9fb8a9",
    accent: "#9ed7b4",
    accentInk: "#0a2a1a",
  },
  {
    id: "paper",
    name: "Paper",
    bg: "#f4f1e6",
    ink: "#171510",
    sub: "#5f5b4c",
    accent: "#c23f14",
    accentInk: "#fff7ef",
  },
];

/** Draws the share card at 1080×1350. Same text as the live preview. */
function drawCard(ctx: CanvasRenderingContext2D, theme: CardTheme, code: string, name: string) {
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, W, H);
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  // Top brand mark
  try {
    (ctx as unknown as { letterSpacing: string }).letterSpacing = "18px";
  } catch { /* unsupported browsers fall back to normal spacing */ }
  ctx.fillStyle = theme.sub;
  ctx.font = "600 38px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("MUSE HUB", W / 2, 150);
  try {
    (ctx as unknown as { letterSpacing: string }).letterSpacing = "0px";
  } catch { /* noop */ }

  // Divider
  ctx.fillStyle = theme.accent;
  ctx.fillRect(W / 2 - 70, 200, 140, 6);

  // Headline
  ctx.fillStyle = theme.ink;
  ctx.font = "700 92px Georgia, 'Times New Roman', serif";
  ctx.fillText("Muse AI", W / 2, 360);
  ctx.fillText("invite code", W / 2, 470);

  // Code — big and readable
  ctx.font = "700 190px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText(code.toUpperCase(), W / 2, 760);

  // Optional sharer name
  let y = 880;
  if (name.trim()) {
    ctx.fillStyle = theme.sub;
    ctx.font = "500 52px system-ui, -apple-system, sans-serif";
    ctx.fillText(`Shared by ${name.trim()}`, W / 2, y);
    y += 80;
  }

  // Footer CTA
  ctx.fillStyle = theme.accent;
  ctx.font = "700 46px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("museaicodes.com", W / 2, H - 130);

  ctx.fillStyle = theme.sub;
  ctx.font = "500 36px ui-monospace, SFMono-Regular, Menlo, monospace";
  ctx.fillText("The unofficial Muse AI guide hub", W / 2, H - 70);
}

export default function ShareCard() {
  const [code, setCode] = useState<string>(SITE.referralCodes[0]);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState<CardTheme>(THEMES[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  const cleanCode = (code.toUpperCase().replace(/[^A-Z0-9]/g, "") || "CODE").slice(0, 12);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawCard(ctx, theme, cleanCode, name);
    setReady(true);
  }, [theme, cleanCode, name]);

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `muse-invite-card-${cleanCode.toLowerCase()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_400px]">
      <Reveal>
        <div className="space-y-5">
          <div>
            <label htmlFor="sc-code" className="font-bold">
              Your invite code
            </label>
            <input
              id="sc-code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={12}
              spellCheck={false}
              autoComplete="off"
              placeholder="Your code"
              className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 font-mono text-2xl font-bold uppercase tracking-[0.2em]"
            />
          </div>

          <div>
            <label htmlFor="sc-name" className="font-bold">
              Your name <span className="font-normal text-faint">(optional)</span>
            </label>
            <input
              id="sc-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={30}
              placeholder="How you want to be credited"
              className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3"
            />
          </div>

          <div>
            <p className="font-bold" id="sc-theme-label">
              Card theme
            </p>
            <div className="mt-2 flex gap-3" role="radiogroup" aria-labelledby="sc-theme-label">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={theme.id === t.id}
                  onClick={() => setTheme(t)}
                  className={`flex-1 rounded-xl border-2 p-1.5 transition-all duration-150 ${
                    theme.id === t.id ? "border-accent" : "border-line hover:border-faint"
                  }`}
                >
                  <span
                    className="block h-14 rounded-lg"
                    style={{ backgroundColor: t.bg }}
                    aria-hidden="true"
                  >
                    <span
                      className="mx-auto mt-5 block h-2 w-10 rounded-full"
                      style={{ backgroundColor: t.accent }}
                    />
                  </span>
                  <span className="mt-2 block pb-1 text-sm font-bold">{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={download}
            disabled={!ready}
            className="w-full rounded-lg bg-ink px-6 py-4 text-base font-bold text-bg transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
          >
            Download PNG (1080 × 1350)
          </button>
          <p className="text-sm leading-relaxed text-faint">
            Portrait 4:5 — sized for Instagram feed posts and Stories. The card
            is drawn locally in your browser; nothing is uploaded.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100} className="lg:sticky lg:top-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Live preview
          </p>
          <div
            className="mt-3 overflow-hidden rounded-xl border border-line shadow-[var(--shadow)]"
            style={{ width: W * PREVIEW_SCALE, height: H * PREVIEW_SCALE }}
            aria-label="Share card preview"
            role="img"
          >
            <canvas
              ref={canvasRef}
              width={W}
              height={H}
              style={{
                width: W,
                height: H,
                transform: `scale(${PREVIEW_SCALE})`,
                transformOrigin: "top left",
              }}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
