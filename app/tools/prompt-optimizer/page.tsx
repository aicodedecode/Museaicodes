import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import PromptOptimizer from "@/components/PromptOptimizer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Prompt Optimizer: Restructure a Weak Prompt (Deterministic, 2026)",
  description:
    "Paste a prompt that isn't working and get a rule-based diagnosis plus a restructured version — objective, context gaps, constraints, approval rules, output format. No AI rewriting; everything runs in your browser.",
  keywords:
    "muse ai prompt optimizer, improve muse ai prompt, muse ai prompt structure, weak prompt fix muse",
  alternates: { canonical: `${SITE.baseUrl}/tools/prompt-optimizer` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Prompt Optimizer",
    description:
      "A deterministic structuring helper: paste a weak prompt, see what's vague or missing, and get a restructured version with the gaps flagged.",
    url: `${SITE.baseUrl}/tools/prompt-optimizer`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Prompt Optimizer",
    description:
      "A deterministic structuring helper: paste a weak prompt, see what's vague or missing, and get a restructured version with the gaps flagged.",
  },
};

export default function PromptOptimizerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Prompt Optimizer",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/prompt-optimizer`,
    description:
      "Deterministic prompt-structuring helper: diagnoses vague wording and missing elements in a prompt and restructures it into objective, context, constraints, approval rules, and output format — all in the browser, no AI involved.",
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
              { label: "Prompt optimizer" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Fix a weak prompt,{" "}
            <em className="font-medium italic text-accent">rule by rule</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Paste a prompt that&rsquo;s giving you mushy answers and get a
            diagnosis plus a restructured version — objective, context gaps
            to fill, constraints, approval rules, output format. Short answer:
            this tool <strong className="text-ink">doesn&rsquo;t use AI to
            rewrite anything</strong>; it applies prompt-structure rules with
            pattern matching, so you keep full control of what your prompt
            actually says.
          </p>
        </Reveal>

        <div className="mt-10">
          <PromptOptimizer />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                This is a <strong className="text-ink">deterministic</strong>{" "}
                helper: fixed heuristics detect vague words, missing formats,
                constraints, and action verbs. It can&rsquo;t judge meaning,
                tone, or whether your objective is the right one — that
                judgment stays yours.
              </li>
              <li>
                The [BRACKET] placeholders are the whole point. A restructured
                prompt with unfilled gaps will still get you a generic answer —
                fill them in before pasting into Muse.
              </li>
              <li>
                Want to compose a prompt from scratch instead of fixing one?{" "}
                <Link
                  href="/tools/prompt-builder"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Try the prompt builder →
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-prompt-tips"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Prompt tips: the rules this tool applies, explained →
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
