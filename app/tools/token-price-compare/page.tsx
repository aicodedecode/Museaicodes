import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import TokenPriceCompare from "@/components/TokenPriceCompare";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Token Price Comparison: GPT vs Claude vs Gemini vs Grok (2026)",
  description:
    "Compare per-token API pricing across GPT-6, Claude, Gemini, Grok, DeepSeek, and Mistral: enter your monthly input and output tokens and see each provider's estimated monthly cost, ranked cheapest to priciest.",
  keywords:
    "ai token price comparison, llm api pricing comparison, gpt vs claude price per token, gemini api pricing, grok api pricing, cheapest ai api",
  alternates: { canonical: `${SITE.baseUrl}/tools/token-price-compare` },
  openGraph: {
    type: "website",
    title: "AI Token Price Comparison: GPT vs Claude vs Gemini vs Grok",
    description:
      "Enter your monthly token volume and see per-token API pricing ranked cheapest to priciest.",
    url: `${SITE.baseUrl}/tools/token-price-compare`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "AI Token Price Comparison: GPT vs Claude vs Gemini vs Grok",
    description:
      "Enter your monthly token volume and see per-token API pricing ranked cheapest to priciest.",
  },
};

export default function TokenPriceComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Token Price Comparison",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/token-price-compare`,
    description:
      "Interactive comparison of per-token API pricing across GPT, Claude, Gemini, Grok, DeepSeek, and Mistral, ranked by estimated monthly cost at the user's volume.",
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
              { label: "Token price comparison" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Which AI tokens are the{" "}
            <em className="font-medium italic text-accent">cheapest?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            This tool compares per-token API pricing for six leading models —
            GPT-6 Sol, Claude Sonnet 5.5, Gemini 3.8 Flash, Grok 4.7, DeepSeek V4
            Pro, and Mistral Large 3 — plus a Muse reference row. Enter your
            monthly input and output tokens to see each provider&rsquo;s
            estimated monthly bill, ranked cheapest to priciest, with prices
            verified on September 29, 2026.
          </p>
        </Reveal>

        <div className="mt-10">
          <TokenPriceCompare />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Token price is not task price: a model that needs fewer tokens
                per answer can cost less overall even with a higher per-token
                rate. Test with your own workload, not just this table.
              </li>
              <li>
                This table ignores prompt-caching discounts, batch rates, and
                tool-call charges — all of which move the real invoice,
                especially for agentic workloads.
              </li>
              <li>
                API prices change often. We re-check this page against official
                pricing pages; always confirm the live rate before signing a
                budget to it.
              </li>
              <li>
                <Link
                  href="/compare"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Muse vs ChatGPT vs Claude comparison →
                </Link>
              </li>
              <li>
                <Link
                  href="/token-calculator"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Estimate your token usage →
                </Link>{" "}
                ·{" "}
                <Link
                  href="/tools/token-runway"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  How long will your Muse tokens last? →
                </Link>{" "}
                ·{" "}
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
