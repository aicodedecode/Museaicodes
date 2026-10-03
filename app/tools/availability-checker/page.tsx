import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvailabilityChecker from "@/components/AvailabilityChecker";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Is Muse AI Available in Your Country? (2026)",
  description:
    "Check whether Muse AI is available in your country in 2026 — a searchable availability checker covering Muse's US and Canada launch and every other region.",
  keywords:
    "is muse ai available in my country, muse ai availability checker, muse ai region, muse ai country list, muse ai release date",
  alternates: { canonical: `${SITE.baseUrl}/tools/availability-checker` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Is Muse AI Available in Your Country?",
    description:
      "Search the country list to check whether Muse AI is available where you are.",
    url: `${SITE.baseUrl}/tools/availability-checker`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Is Muse AI Available in Your Country?",
    description:
      "Search the country list to check whether Muse AI is available where you are.",
  },
};

export default function AvailabilityCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Availability Checker",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/availability-checker`,
    description:
      "Interactive checker that tells you whether Muse AI is available in your country, with honest next steps for supported and unsupported regions.",
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
              { label: "Availability checker" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Can I use Muse in{" "}
            <em className="font-medium italic text-accent">my country?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Short answer: as of September 2026, Muse is available only in the
            United States and Canada. Pick your country below to check. If
            you&rsquo;re anywhere else, Meta has announced no launch dates —
            waiting for an official rollout is the only legitimate option, and
            this checker never suggests workarounds.
          </p>
        </Reveal>

        <div className="mt-10">
          <AvailabilityChecker />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Availability is{" "}
                <strong className="text-ink">US and Canada only</strong> as of
                September 2026. Meta&rsquo;s help centre says access is
                limited to countries where Muse operates, and publishes no
                expansion timeline.
              </li>
              <li>
                An <strong className="text-ink">invite code</strong> doesn&rsquo;t
                change country gating — it only affects whether your account
                gets in, not where.
              </li>
              <li>
                For the full picture, including why demand-heavy regions like
                India, the UK, and Pakistan are still waiting, read the{" "}
                <Link
                  href="/guides/muse-ai-availability"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  availability guide →
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
