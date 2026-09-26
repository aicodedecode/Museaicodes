import Link from "next/link";
import { SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-shell flex-col gap-6 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-6">
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
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
          <Link href="/#guides" className="text-muted underline-offset-4 hover:text-ink hover:underline">
            15 guides
          </Link>
          <Link href="/#compare" className="text-muted underline-offset-4 hover:text-ink hover:underline">
            Compare
          </Link>
          <Link href="/#redeem" className="text-muted underline-offset-4 hover:text-ink hover:underline">
            Redeem
          </Link>
          <a
            href={SITE.skillsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Skills catalog
          </a>
        </nav>
      </div>
    </footer>
  );
}
