import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompareTool from "@/components/CompareTool";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse vs Alternatives: Cost & Time Comparator (2026)",
  description:
    "Compare Muse with up to two alternatives using YOUR numbers: the monthly price you pay, hours saved per week, and what your time is worth.",
  keywords:
    "muse ai vs alternatives, muse ai cost comparison, is muse ai worth it, ai assistant value calculator",
  alternates: { canonical: `${SITE.baseUrl}/tools/compare` },
  openGraph: {
    type: "website",
    title: "Muse vs Alternatives: Cost & Time Comparator",
    description:
      "Is an AI assistant worth what you pay? Compare using your own numbers.",
    url: `${SITE.baseUrl}/tools/compare`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse vs Alternatives: Cost & Time Comparator",
    description:
      "Is an AI assistant worth what you pay? Compare using your own numbers.",
  },
};

export default function CompareToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse vs Alternatives Comparator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/compare`,
    description:
      "Interactive comparator: evaluate Muse against alternatives using user-entered prices, weekly hours saved, and hourly value.",
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
              { label: "Cost comparator" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Is Muse worth what{" "}
            <em className="font-medium italic text-accent">you pay?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Line up Muse against up to two alternatives with your own numbers —
            the price you actually pay, the hours you actually save, and what
            your time is worth. Short answer: an assistant is worth it when
            the time it gives back costs more than the subscription.
          </p>
        </Reveal>

        <div className="mt-10">
          <CompareTool />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Every price here is{" "}
                <strong className="text-ink">entered by you</strong> — this
                page ships with zero prices baked in, because plans and
                promotions change and vary by region.
              </li>
              <li>
                &ldquo;Hours saved&rdquo; is the hard number to get right. Be
                conservative: count only time you genuinely wouldn&rsquo;t have
                spent another way.
              </li>
              <li>
                This compares{" "}
                <strong className="text-ink">money value only</strong> — it
                doesn&rsquo;t capture quality differences, features you
                actually use, or privacy trade-offs.
              </li>
              <li>
                <Link
                  href="/compare"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Read our Muse vs ChatGPT vs Claude comparison →
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
