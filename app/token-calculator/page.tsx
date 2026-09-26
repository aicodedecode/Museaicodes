import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import TokenCalculator from "@/components/TokenCalculator";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Token Calculator: How Far Do Tokens Go? (2026)",
  description:
    "Estimate your Muse AI token usage with an interactive calculator: research, images, documents, background monitoring — and see how it compares to a promotional grant.",
  keywords:
    "muse ai tokens how far, muse ai token calculator, muse ai token usage estimate",
  alternates: { canonical: `${SITE.baseUrl}/token-calculator` },
  openGraph: {
    type: "website",
    title: "Muse AI Token Calculator: How Far Do Tokens Go?",
    description:
      "Interactive estimator: dial in your Muse usage and see an illustrative monthly token total.",
    url: `${SITE.baseUrl}/token-calculator`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Token Calculator: How Far Do Tokens Go?",
    description:
      "Interactive estimator: dial in your Muse usage and see an illustrative monthly token total.",
  },
};

export default function TokenCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Token Calculator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/token-calculator`,
    description:
      "Interactive illustrative estimator of Muse AI token usage across common activities.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Token calculator" }]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            How far do Muse{" "}
            <em className="font-medium italic text-accent">tokens go?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Dial in how you&rsquo;d use Muse and get an illustrative monthly
            total — then see what share of a promotional token grant that
            pace represents.
          </p>
        </Reveal>

        <div className="mt-10">
          <TokenCalculator />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Why this is only an estimate
            </h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted">
              <p>
                Token usage depends on conversation length, how much context
                Muse holds, whether it browses the web or generates images, and
                how features evolve. Meta doesn&rsquo;t publish per-action
                token costs, so any calculator — including this one — is
                working from illustrative ranges.
              </p>
              <p>
                Treat the total as a way to build intuition, not a budget. The
                only authoritative numbers are the balance and usage shown in
                your own Muse app.
              </p>
              <p>
                <Link
                  href="/guides/muse-ai-billion-tokens"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  What the “1 billion tokens” offer means →
                </Link>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
