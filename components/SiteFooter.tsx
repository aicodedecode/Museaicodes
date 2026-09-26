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
            Muse<span className="text-accent">·</span>Hub
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
                className={linkCls}
              >
                Skills catalog
              </a>
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
              <Link href="/updates" className={linkCls}>
                Updates
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
    </footer>
  );
}
