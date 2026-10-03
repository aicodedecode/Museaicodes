import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import PromptBuilder from "@/components/PromptBuilder";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Prompt Generator: Write Better Prompts (2026)",
  description:
    "Build a well-structured Muse AI prompt step by step: goal, context, constraints, format, and tone — with a live-composed prompt you can copy and reuse.",
  keywords:
    "muse ai prompt builder, how to write muse ai prompts, better ai prompts, muse ai prompt tips",
  alternates: { canonical: `${SITE.baseUrl}/tools/prompt-generator` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Prompt Generator: Write Better Prompts",
    description:
      "Guided form that composes a polished, copy-ready prompt as you type.",
    url: `${SITE.baseUrl}/tools/prompt-generator`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Prompt Generator: Write Better Prompts",
    description:
      "Guided form that composes a polished, copy-ready prompt as you type.",
  },
};

export default function PromptBuilderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Prompt Generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/prompt-generator`,
    description:
      "Guided form that composes a polished, copy-ready Muse AI prompt from goal, context, constraints, format, and tone.",
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
              { label: "Prompt generator" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Build a prompt that gets{" "}
            <em className="font-medium italic text-accent">better answers</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Answer five guided questions and watch a polished, copy-ready
            prompt compose itself live. Short answer: specific prompts get
            specific answers — context, constraints, and a clear output format
            are most of the craft.
          </p>
        </Reveal>

        <div className="mt-10">
          <PromptBuilder />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Structure helps, but it&rsquo;s not magic — a well-written
                prompt still fails if the task is underspecified. The
                clarifying-question rule in every composed prompt is there for
                that reason.
              </li>
              <li>
                The preset examples are{" "}
                <strong className="text-ink">starting points</strong>, not
                one-click solutions. Edit them to fit your real situation before
                pasting into Muse.
              </li>
              <li>
                Don&rsquo;t paste sensitive personal data into prompts — keep
                account numbers, addresses, and IDs out.
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-prompt-tips"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Prompt tips for getting more from Muse AI →
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
