import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { OFFER_STATUS } from "@/lib/offer-status";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReferralCodes from "@/components/ReferralCodes";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Referral Offer: Current Status (2026)",
  description:
    "What the Muse AI referral and invite offer looks like right now: reported in-app promotional terms, eligibility, deadlines, and what to verify — updated September 2026.",
  keywords:
    "muse ai referral offer, muse ai invite offer, muse ai promo, muse ai referral terms",
  alternates: { canonical: `${SITE.baseUrl}/offer-status` },
  openGraph: {
    type: "website",
    title: "Muse AI Referral Offer: Current Status (2026)",
    description:
      "The current state of Muse's referral and invite offer — reported terms, eligibility, and what to check in the app. Updated September 2026.",
    url: `${SITE.baseUrl}/offer-status`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Referral Offer: Current Status (2026)",
    description:
      "The current state of Muse's referral and invite offer — reported terms, eligibility, and what to check in the app.",
  },
};

export default function OfferStatusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Muse AI Referral Offer: Current Status (2026)",
    description:
      "The current state of Muse's invite and referral offer: reported in-app promotional terms, eligibility, deadlines, and history.",
    url: `${SITE.baseUrl}/offer-status`,
    inLanguage: "en",
    dateModified: "2026-09-26",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Offer status" }]}
          />
          <p className="kicker mt-10">Referral offer</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            The Muse referral offer,{" "}
            <em className="font-medium italic text-accent">as of now.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            <strong className="text-ink">Short answer:</strong> {OFFER_STATUS.summary}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-accent" />
            Last checked: {OFFER_STATUS.asOf}
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight">
                What we know
              </h2>
              <ul className="mt-6 space-y-4">
                {OFFER_STATUS.details.map((d, i) => (
                  <li
                    key={i}
                    className="rounded-2xl border border-line bg-surface p-5 text-[1.02rem] leading-relaxed text-muted"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display mt-14 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight">
                Offer timeline
              </h2>
              <ol className="mt-6 space-y-0 border-l-2 border-line pl-6">
                {OFFER_STATUS.history.map((h, i) => (
                  <li key={i} className="relative pb-6 last:pb-0">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
                    />
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                      {h.date}
                    </p>
                    <p className="mt-1 text-[1.02rem] leading-relaxed text-muted">
                      {h.note}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <div className="mt-14">
                <NewsletterSignup />
              </div>
            </Reveal>
          </div>

          <aside aria-label="Referral codes" className="lg:pt-2">
            <ReferralCodes />
            <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                Full walkthrough
              </p>
              <Link
                href="/guides/muse-ai-referral-code"
                className="mt-2 inline-block font-bold text-accent underline-offset-4 hover:underline"
              >
                Read the referral code guide →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
