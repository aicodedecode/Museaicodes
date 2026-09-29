"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** stagger delay in ms (40–90ms per element per motion tokens) */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

/**
 * Scroll-reveal: fade + rise, triggered once at ~15% visibility.
 * Under prefers-reduced-motion the content renders instantly (no FOUC risk:
 * CSS keeps .reveal visible when JS or the observer is unavailable is
 * handled by the hook adding .is-in immediately).
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion or no observer: show immediately, no animation.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      // Guard: for elements taller than the viewport, a ratio threshold can
      // never be satisfied (e.g. 14% of a 6000px article > a phone viewport),
      // leaving the content stuck at opacity: 0. Reveal those on first entry.
      el.getBoundingClientRect().height > window.innerHeight * 0.85
        ? { threshold: 0 }
        : { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
