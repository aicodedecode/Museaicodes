"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex min-h-[68px] max-w-shell items-center justify-between gap-4 px-5 md:px-6">
        <Link href="/" className="flex items-baseline gap-2.5" aria-label="Muse Hub home">
          <span className="font-display text-[1.45rem] font-bold tracking-tight">
            Muse<span className="text-accent">·</span>Hub
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-faint sm:inline">
            Field notes
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted transition-colors duration-150 hover:text-ink hover:bg-raised"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#redeem"
            className="ml-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-bold text-bg transition-transform duration-150 hover:-translate-y-0.5"
          >
            Get access
          </Link>
          <span className="ml-2">
            <ThemeToggle />
          </span>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm font-bold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line px-5 py-3 md:hidden">
          {[...NAV_LINKS, { href: "/#redeem", label: "Get access →" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-[1.05rem] font-semibold text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
