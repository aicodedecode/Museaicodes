"use client";

import { useRef, useState } from "react";
import { HERO_PROMPTS } from "@/lib/prompts";

/** Interactive hero console: cycles prompt inspiration with a subtle fade. */
export default function HeroConsole() {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  const shuffle = () => {
    const next = (index + 1) % HERO_PROMPTS.length;
    const el = textRef.current;
    if (el && el.animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.animate(
        [
          { opacity: 0.15, transform: "translateY(6px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 280, easing: "ease-out" }
      );
    }
    setIndex(next);
  };

  return (
    <aside
      aria-label="Interactive prompt inspiration"
      className="relative overflow-hidden rounded-[30px] bg-[#111511] p-5 text-[#f2f6ef] shadow-[var(--shadow)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full border-[42px] border-moss opacity-[0.13]"
      />
      <div className="flex items-center justify-between border-b border-[#343c35] px-1 pb-4 font-mono text-[11px] text-[#a9b4aa]">
        <span>MUSE / IDEA ENGINE</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-accent" />
          <i className="h-2 w-2 rounded-full bg-[#485149]" />
          <i className="h-2 w-2 rounded-full bg-[#485149]" />
        </span>
      </div>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.1em] text-[#8e9a8f]">Try asking</p>
      <p ref={textRef} className="mt-2 min-h-[140px] text-[1.2rem] leading-snug">
        <span aria-hidden="true" className="font-display text-[2.6rem] leading-none text-accent">“</span>
        {HERO_PROMPTS[index]}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-[#343c35] pt-4">
        <span className="font-mono text-[11px] text-[#9ca69d]" aria-live="polite">
          PROMPT {String(index + 1).padStart(2, "0")} / {String(HERO_PROMPTS.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={shuffle}
          className="rounded-lg bg-moss px-3.5 py-2.5 text-sm font-extrabold text-moss-ink transition-transform duration-150 hover:-translate-y-0.5"
        >
          New idea ↻
        </button>
      </div>
    </aside>
  );
}
