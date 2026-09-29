"use client";

function Magnifier({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.4 13.4 17 17" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Header trigger for site search. Two shapes:
 * - "pill": desktop command-bar look with a ⌘K hint
 * - "icon": compact button matching the other header icon buttons
 */
export default function SearchTrigger({
  variant,
  onOpen,
}: {
  variant: "pill" | "icon";
  onOpen: () => void;
}) {
  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onOpen}
        aria-label="Search the site"
        title="Search (Ctrl+K)"
        className="rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm font-bold text-muted transition-colors hover:text-ink"
      >
        <Magnifier className="h-[1.1rem] w-[1.1rem]" />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Search the site"
      className="flex w-44 items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-faint transition-colors hover:text-muted lg:w-52"
    >
      <Magnifier />
      <span className="flex-1 text-left">Search…</span>
      <kbd className="rounded border border-line bg-raised px-1.5 font-mono text-[11px] font-semibold text-muted">
        ⌘K
      </kbd>
    </button>
  );
}
