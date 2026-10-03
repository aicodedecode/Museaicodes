import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { getGuide, guideUrl, relatedGuides } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompareTable from "@/components/CompareTable";
import ReferralCodes from "@/components/ReferralCodes";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI vs ChatGPT vs Claude vs Meta AI: Honest Comparison",
  description:
    "Muse AI vs ChatGPT vs Claude vs Meta AI compared side by side: positioning, workflows, access, best-fit tasks — and how to choose without a generic ranking.",
  keywords:
    "muse ai vs chatgpt, muse ai vs claude, muse ai vs meta ai, ai assistant comparison",
  alternates: { canonical: `${SITE.baseUrl}/compare` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI vs ChatGPT vs Claude vs Meta AI: Honest Comparison",
    description:
      "Side-by-side comparison of four AI assistants by positioning, workflow, access, and best-fit tasks — not just brand names.",
    url: `${SITE.baseUrl}/compare`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI vs ChatGPT vs Claude vs Meta AI: Honest Comparison",
    description:
      "Side-by-side comparison of four AI assistants by positioning, workflow, access, and best-fit tasks — not just brand names.",
  },
};

const compareGuide = getGuide("muse-ai-vs-chatgpt-claude-meta-ai")!;
const related = relatedGuides(compareGuide.slug, 2);

export default function ComparePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Muse AI vs ChatGPT vs Claude vs Meta AI: Honest Comparison",
    description:
      "Side-by-side comparison of Muse AI, ChatGPT, Claude, and Meta AI by positioning, workflow, access, and best-fit tasks.",
    url: `${SITE.baseUrl}/compare`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  };

  return (
    <main id="main">
      <JsonLd data={webPageJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Compare" }]}
          />
          <p className="kicker mt-10">Comparison</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Muse AI vs ChatGPT vs{" "}
            <em className="font-medium italic text-accent">Claude vs Meta AI.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            <strong className="text-ink">Short answer:</strong>{" "}
            {compareGuide.shortAnswer}
          </p>
          <p className="mt-4 max-w-[670px] text-muted">
            Positions shift as products evolve — verify current plan pages
            before making price- or feature-specific decisions. There is no
            universal winner; there is only the right fit for your work.{" "}
            Comparing API costs instead of consumer plans? See the{" "}
            <Link
              href="/tools/token-price-compare"
              className="font-bold text-accent underline-offset-4 hover:underline"
            >
              AI token price comparison
            </Link>
            .
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 rounded-2xl border border-line bg-surface p-5 md:p-8">
            {compareGuide.table && <CompareTable table={compareGuide.table} />}
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight">
              How should you choose?
            </h2>
            <div className="mt-5 max-w-[640px] space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>
                Choose by the task and interface you will actually use. Test
                the same real brief in each available app and compare factual
                accuracy, useful depth, control, speed, and how much editing
                the result needs.
              </p>
              <p>
                The honest answer for most people: the best assistant is the
                one whose workflow you enjoy enough to use daily. Features
                matter less than fit.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={guideUrl(r.slug)}
                  className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    {r.category}
                  </span>
                  <span className="mt-3 font-bold leading-snug group-hover:text-accent">
                    {r.title}
                  </span>
                  <span className="mt-auto pt-4 text-sm font-bold text-muted">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
          <aside aria-label="Referral codes" className="lg:pt-2">
            <ReferralCodes />
          </aside>
        </div>
      </div>
    </main>
  );
}
