import Link from "next/link";
import { SITE } from "@/lib/site";

const linkCls =
  "text-muted underline-offset-4 hover:text-ink hover:underline";

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="kicker mb-3">{title}</p>
      <ul className="flex flex-col gap-2.5 text-sm font-semibold">{children}</ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-shell flex-col gap-10 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="max-w-md">
          <p className="font-display text-xl font-bold">
            museai<span className="text-accent">·</span>codes
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em]">
            <span className="text-accent">museai</span>
            <span className="text-moss">codes</span>
            <span className="text-faint">.com</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Unofficial guide. Not affiliated with Meta. An independent learning
            resource for Muse AI — tutorials, referral guidance, and honest
            comparisons.
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Updated {SITE.updated}
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-12 gap-y-8"
        >
          <FooterGroup title="Site">
            <li>
              <Link href="/guides" className={linkCls}>
                Guides
              </Link>
            </li>
            <li>
              <Link href="/compare" className={linkCls}>
                Compare
              </Link>
            </li>
            <li>
              <Link href="/#redeem" className={linkCls}>
                Redeem
              </Link>
            </li>
            <li>
              <a
                href={SITE.skillsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skills catalog (opens in a new tab)"
                className={linkCls}
              >
                Skills catalog{" "}
                <span aria-hidden="true" className="text-xs">
                  ↗
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE.skillsRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skills repo on GitHub (opens in a new tab)"
                className={linkCls}
              >
                Skills repo on GitHub{" "}
                <span aria-hidden="true" className="text-xs">
                  ↗
                </span>
              </a>
            </li>
          </FooterGroup>
          <FooterGroup title="Explore">
            <li>
              <Link href="/encyclopedia" className={linkCls}>
                Encyclopedia
              </Link>
            </li>
            <li>
              <Link href="/use-cases" className={linkCls}>
                Use Cases
              </Link>
            </li>
            <li>
              <Link href="/prompts" className={linkCls}>
                Prompts
              </Link>
            </li>
            <li>
              <Link href="/connectors" className={linkCls}>
                Connectors
              </Link>
            </li>
            <li>
              <Link href="/templates" className={linkCls}>
                Templates
              </Link>
            </li>
            <li>
              <Link href="/codes" className={linkCls}>
                Codes
              </Link>
            </li>
            <li>
              <Link href="/apps" className={linkCls}>
                App Guide
              </Link>
            </li>
          </FooterGroup>
          <FooterGroup title="Company">
            <li>
              <Link href="/about" className={linkCls}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkCls}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram channel (opens in a new tab)"
                className={linkCls}
              >
                Telegram{" "}
                <span aria-hidden="true" className="text-xs">
                  ↗
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile (opens in a new tab)"
                className={linkCls}
              >
                Instagram{" "}
                <span aria-hidden="true" className="text-xs">
                  ↗
                </span>
              </a>
            </li>
          </FooterGroup>
          <FooterGroup title="Tools">
            <li>
              <Link href="/token-calculator" className={linkCls}>
                Token Calculator
              </Link>
            </li>
            <li>
              <Link href="/quiz" className={linkCls}>
                AI Quiz
              </Link>
            </li>
            <li>
              <Link href="/offer-status" className={linkCls}>
                Offer Status
              </Link>
            </li>
            <li>
              <Link href="/videos" className={linkCls}>
                Videos
              </Link>
            </li>
            <li>
              <Link href="/news" className={linkCls}>
                News
              </Link>
            </li>
          </FooterGroup>
          <FooterGroup title="Legal">
            <li>
              <Link href="/privacy" className={linkCls}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className={linkCls}>
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure" className={linkCls}>
                Affiliate Disclosure
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className={linkCls}>
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkCls}>
                Terms of Use
              </Link>
            </li>
          </FooterGroup>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-shell flex-col gap-1 px-5 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© 2026 museaicodes.com. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.12em] text-faint">
            Unofficial guide — not affiliated with Meta
          </p>
        </div>
      </div>
    </footer>
  );
}
