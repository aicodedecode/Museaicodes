import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { COMMUNITY_CODES, submitCodeMailto } from "@/lib/community-codes";
import {
  CODES_HERO,
  CODES_STEPS,
  RELATED_CODE_GUIDES,
  COMMUNITY_STATUS_NOTE,
  CODES_URL,
} from "@/lib/codes";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { CopyButton } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Muse AI Invite & Referral Codes: Directory (2026)",
  description:
    "Muse AI invite and referral codes in one place: featured owner codes with tap-to-copy, community-submitted codes, how codes work, and how to submit yours.",
  keywords:
    "muse ai invite code, muse ai referral code, muse ai redeem code, muse ai code directory, muse ai promo code",
  alternates: { canonical: CODES_URL },
  openGraph: {
    type: "website",
    title: "Muse AI Invite & Referral Codes: Directory (2026)",
    description:
      "Featured and community Muse AI invite and referral codes, how they work, and how to share yours — with tap-to-copy.",
    url: CODES_URL,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Invite & Referral Codes: Directory (2026)",
    description:
      "Featured and community Muse AI invite and referral codes, how they work, and how to share yours.",
  },
};

const allCodes = [
  ...SITE.referralCodes.map((code) => ({
    code,
    anchor: "featured-codes",
  })),
  ...COMMUNITY_CODES.map((c) => ({ code: c.code, anchor: "community-codes" })),
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Muse AI Invite & Referral Codes: Directory (2026)",
      description:
        "A directory of Muse invite and referral codes: featured owner codes, community-submitted codes, how codes work, and how to submit yours.",
      url: CODES_URL,
      inLanguage: "en",
      dateModified: SITE.updated,
      isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
    },
    {
      "@type": "ItemList",
      name: "Muse AI invite and referral codes",
      url: CODES_URL,
      numberOfItems: allCodes.length,
      itemListElement: allCodes.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Muse AI referral code ${c.code}`,
        url: `${CODES_URL}#${c.anchor}`,
      })),
    },
  ],
};

export default function CodesPage() {
  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        {/* Hero */}
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Codes" }]} />
          <p className="kicker mt-10">{CODES_HERO.kicker}</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Muse AI codes,{" "}
            <em className="font-medium italic text-accent">in one place.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            {CODES_HERO.lede}
          </p>
          <div className="mt-6 max-w-[720px] rounded-2xl border border-line bg-surface p-5 md:p-6">
            <p className="text-[1.02rem] leading-relaxed text-muted">
              <strong className="text-ink">Short answer:</strong> {CODES_HERO.shortAnswer}
            </p>
          </div>
        </Reveal>

        {/* Featured codes — the site owner's */}
        <Reveal>
          <section id="featured-codes" aria-labelledby="featured-codes-h" className="mt-14 scroll-mt-24">
            <p className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white">
              <span aria-hidden="true">★</span> Featured · Our codes
            </p>
            <h2
              id="featured-codes-h"
              className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight"
            >
              The site owner&rsquo;s codes
            </h2>
            <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
              These are our referral codes — the ones we use ourselves. Tap to
              copy, then enter one in the invite or redeem area of your Muse
              account.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {SITE.referralCodes.map((code) => (
                <div
                  key={code}
                  className="flex items-center justify-between gap-3 rounded-2xl border-2 border-accent bg-surface px-5 py-4 shadow-[var(--shadow)]"
                >
                  <div>
                    <code className="font-mono text-[1.75rem] font-semibold tracking-[0.08em]">
                      {code}
                    </code>
                    <p className="mt-1 text-xs text-faint">Muse Hub · featured</p>
                  </div>
                  <CopyButton text={code} label={`Copy our referral code ${code}`} />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-faint">
              Disclosure: these are referral codes. Perks vary by account,
              region, and date — confirm the current terms in the app.
            </p>
          </section>
        </Reveal>

        {/* Community codes table */}
        <Reveal>
          <section id="community-codes" aria-labelledby="community-codes-h" className="mt-14 scroll-mt-24">
            <p className="kicker">From readers</p>
            <h2
              id="community-codes-h"
              className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight"
            >
              Community codes
            </h2>
            <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
              Codes shared by readers. Every submission is reviewed by a human
              before it appears here — but we can&rsquo;t continuously verify
              each one, so treat the in-app redeem screen as the source of
              truth.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-surface">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                      Code
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                      Shared by
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                      Added
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-faint">
                      Status
                    </th>
                    <th scope="col" className="px-5 py-3.5">
                      <span className="sr-only">Copy</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMMUNITY_CODES.length > 0 ? (
                    COMMUNITY_CODES.map((c) => (
                      <tr key={c.code} className="border-b border-line last:border-b-0">
                        <td className="px-5 py-4">
                          <code className="font-mono text-[1.2rem] font-medium tracking-[0.08em]">
                            {c.code}
                          </code>
                        </td>
                        <td className="px-5 py-4 text-[0.95rem] text-muted">{c.name}</td>
                        <td className="px-5 py-4 text-[0.95rem] text-muted">{c.added}</td>
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-faint" />
                            Unverified
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <CopyButton
                            text={c.code}
                            label={`Copy community referral code ${c.code}`}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-5 py-8 text-center text-[0.95rem] text-muted">
                        No community codes yet — yours could be the first. See
                        the submit section below.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-faint">
              {COMMUNITY_STATUS_NOTE}
            </p>
          </section>
        </Reveal>

        {/* How codes work */}
        <section aria-labelledby="how-codes-work-h" className="mt-16">
          <p className="kicker">The explainer</p>
          <h2
            id="how-codes-work-h"
            className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight"
          >
            How Muse codes work
          </h2>
          <ol className="mt-6 list-none p-0">
            {CODES_STEPS.map((step, i) => (
              <li
                key={step.heading}
                className="flex gap-5 border-t border-line py-6 last:border-b"
              >
                <span
                  aria-hidden="true"
                  className="font-display shrink-0 text-[1.75rem] font-extrabold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-[64ch]">
                  <p className="font-display text-[1.15rem] font-bold tracking-tight text-ink">
                    {step.heading}
                  </p>
                  <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Submit your code */}
        <section aria-labelledby="submit-code-h" className="mt-16">
          <div className="overflow-hidden rounded-[26px] border border-line bg-ink text-bg">
            <div className="p-6 md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bg/60">
                Share yours
              </p>
              <h2
                id="submit-code-h"
                className="font-display mt-4 max-w-[22ch] text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.05] tracking-tight"
              >
                Have a code? Put it in front of thousands of readers.
              </h2>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-bg/70">
                Email us your code and the name you&rsquo;d like displayed.
                Every submission is reviewed by a human before it&rsquo;s
                published — usually within 48 hours — which keeps fake or
                expired codes off this page. By sending a code you confirm
                it&rsquo;s your own, from your Muse account.
              </p>
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={submitCodeMailto()}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Submit your code <span aria-hidden="true">→</span>
                </a>
                <p className="text-sm text-bg/60">
                  Opens your email app with the subject line prefilled.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section aria-labelledby="related-guides-h" className="mt-16">
          <p className="kicker">Go deeper</p>
          <h2
            id="related-guides-h"
            className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight"
          >
            Related guides
          </h2>
          <ul className="mt-6 list-none p-0">
            {RELATED_CODE_GUIDES.map((g) => (
              <li key={g.href} className="border-t border-line last:border-b">
                <Link
                  href={g.href}
                  className="group flex items-baseline justify-between gap-4 py-5"
                >
                  <span>
                    <span className="font-display block text-[1.15rem] font-bold tracking-tight text-ink group-hover:underline group-hover:underline-offset-4">
                      {g.title}
                    </span>
                    <span className="mt-1 block text-[0.95rem] text-muted">
                      {g.deck}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-bold text-accent transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Newsletter */}
        <Reveal>
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
