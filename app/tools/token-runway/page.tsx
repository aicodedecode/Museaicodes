import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import TokenRunway from "@/components/TokenRunway";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Token Runway: How Long Will Your Tokens Last? (2026)",
  description:
    "Enter your Muse token balance and daily usage to estimate your runway in days — an interactive, honest estimator with illustrative token weights.",
  keywords:
    "muse ai token runway, how long do muse tokens last, muse ai token balance, muse ai usage estimate",
  alternates: { canonical: `${SITE.baseUrl}/tools/token-runway` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Token Runway: How Long Will Your Tokens Last?",
    description:
      "Enter your balance and daily usage pattern for an illustrative runway estimate.",
    url: `${SITE.baseUrl}/tools/token-runway`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Token Runway: How Long Will Your Tokens Last?",
    description:
      "Enter your balance and daily usage pattern for an illustrative runway estimate.",
  },
};

export default function TokenRunwayPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Token Runway",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/token-runway`,
    description:
      "Interactive illustrative estimator of how long a Muse AI token balance lasts at a given daily usage pace.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Token runway" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            How long will your Muse{" "}
            <em className="font-medium italic text-accent">tokens last?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Enter the balance from your Muse app, dial in your daily usage
            pattern, and get an estimated runway in days. Short answer: a
            light daily habit stretches a promotional grant for months; heavy
            agent-style use burns it in days.
          </p>
        </Reveal>

        <div className="mt-10">
          <TokenRunway />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                The per-activity token weights are{" "}
                <strong className="text-ink">illustrative midpoints</strong>{" "}
                (the same ranges as our token calculator) — rough estimates,
                not Meta&rsquo;s real metering, which Meta doesn&rsquo;t
                publish.
              </li>
              <li>
                This shows an <strong className="text-ink">average</strong>{" "}
                daily burn. Real usage is spiky — a big research weekend burns
                far more than a quiet week of quick questions.
              </li>
              <li>
                Your Muse app&rsquo;s balance and usage screens are the only
                authoritative numbers. Treat this as intuition-building, not a
                budget.
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-billion-tokens"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  What the “1 billion tokens” offer means →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
