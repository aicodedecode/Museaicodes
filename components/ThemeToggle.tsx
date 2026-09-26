"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Dark/light toggle. next-themes persists the choice; defaults to dark. */
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? resolvedTheme : "dark") !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-150 hover:text-ink hover:border-faint"
    >
      {isDark ? (
        <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 1.5v2.4M10 16.1v2.4M1.5 10h2.4M16.1 10h2.4M4 4l1.7 1.7M14.3 14.3L16 16M16 4l-1.7 1.7M5.7 14.3L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M17.5 12.5A7.5 7.5 0 017.5 2.5a7.5 7.5 0 1010 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
