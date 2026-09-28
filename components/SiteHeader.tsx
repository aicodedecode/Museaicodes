"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS, MORE_LINKS, REDEEM_HREF } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

/** True when the link's route matches the current page (exact for "/", prefix for the rest). */
function isActiveLink(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const desktopLinkCls = (active: boolean) =>
  `rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-150 ${
    active
      ? "bg-raised text-ink"
      : "text-muted hover:text-ink hover:bg-raised"
  }`;

const mobileLinkCls = (active: boolean) =>
  `block rounded-lg px-2 py-3 text-[1.05rem] font-semibold transition-colors duration-150 ${
    active ? "text-accent" : "text-ink"
  }`;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();
  const moreActive = MORE_LINKS.some((l) => isActiveLink(l.href, pathname));

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
          {NAV_LINKS.map((l) => {
            const active = isActiveLink(l.href, pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={desktopLinkCls(active)}
              >
                {l.label}
              </Link>
            );
          })}
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setMoreOpen(false);
              }}
              className={desktopLinkCls(moreActive)}
            >
              More <span aria-hidden="true">{moreOpen ? "▴" : "▾"}</span>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-line bg-surface p-2 shadow-xl">
                {MORE_LINKS.map((l) => {
                  const active = isActiveLink(l.href, pathname);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMoreOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        active
                          ? "bg-raised text-ink"
                          : "text-muted hover:bg-raised hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <Link
            href={REDEEM_HREF}
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
          {[...NAV_LINKS, ...MORE_LINKS, { href: REDEEM_HREF, label: "Get access →" }].map((l) => {
            const active = isActiveLink(l.href, pathname);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={mobileLinkCls(active)}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
