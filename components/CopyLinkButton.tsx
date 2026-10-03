"use client";

import { useState } from "react";

/**
 * Small "copy link" button for guide pages. Copies the current page URL to
 * the clipboard and flips to a "Copied" state for a moment.
 */
export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handle = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handle}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-ink hover:text-ink"
    >
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 5.5v-2a1.5 1.5 0 00-1.5-1.5H4.5A1.5 1.5 0 003 3.5v4.5a1.5 1.5 0 001.5 1.5h1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      {copied ? "Copied" : "Copy link"}
    </button>
  );
}
