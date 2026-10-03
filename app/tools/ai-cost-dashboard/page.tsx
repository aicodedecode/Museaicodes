import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "AI Model Cost Dashboard: Interactive API Price Charts (2026)",
  description:
    "Interactive dashboard comparing AI API costs: per-token rate charts, a monthly bill explorer with sliders, cost-vs-volume curves, and a verified price table for GPT, Claude, Gemini, Grok, DeepSeek, Mistral, and TypeSafe Jev.",
  keywords:
    "ai model cost dashboard, llm pricing charts, ai api cost comparison, gpt vs claude cost chart, jev pricing chart",
  alternates: { canonical: `${SITE.baseUrl}/tools/ai-cost-dashboard` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "AI Model Cost Dashboard: Interactive API Price Charts",
    description:
      "Per-token rate charts, a monthly bill explorer, and cost-vs-volume curves for seven AI models — prices verified October 3, 2026.",
    url: `${SITE.baseUrl}/tools/ai-cost-dashboard`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "AI Model Cost Dashboard: Interactive API Price Charts",
    description:
      "Per-token rate charts, a monthly bill explorer, and cost-vs-volume curves for seven AI models.",
  },
};

export default function AiCostDashboardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Model Cost Dashboard",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/ai-cost-dashboard`,
    description:
      "Interactive dashboard comparing AI API costs across GPT-6.1 Sol, Claude Sonnet 5.5, Grok 4.7, Gemini 3.8 Flash, DeepSeek V4 Pro, Mistral Large 3, and TypeSafe Jev, with per-token rate charts, a monthly bill explorer, and cost-vs-volume curves.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the AI Model Cost Dashboard do?",
      answer:
        "It turns the verified per-token price table into interactive charts: per-million-token rate bars for seven models (GPT-6.1 Sol, Claude Sonnet 5.5, Grok 4.7, Gemini 3.8 Flash, DeepSeek V4 Pro, Mistral Large 3, and TypeSafe Jev), a monthly bill explorer with input/output sliders that re-sorts cheapest-first as you drag, cost-vs-volume curves showing how each bill grows with scale, and a source table linking every figure to its provider's official pricing page.",
    },
    {
      question: "How is this different from the Token Price Comparison tool?",
      answer:
        "The Token Price Comparison tool is a calculator: enter volumes, get a ranked table. This dashboard is visual: rate bars on a log scale so tiny prices like Jev's $0.042 stay visible next to $10 outputs, a bill explorer for playing with workload shapes, and growth curves that show which models stay cheap as you scale. Use the calculator for an exact number, the dashboard for intuition.",
    },
    {
      question: "Why is Jev's bar so small?",
      answer:
        "Because TypeSafe Jev charges $0.042 per million input tokens and nothing for outputs — its outputs are tiny typed decisions, not generated text. The honest caveat: Jev can't write essays or code, so 'cheapest' only applies to decision-shaped work like classification, scoring, and routing. Compare within your workload, not across model classes.",
    },
    {
      question: "How accurate are the prices shown?",
      answer:
        "Every rate was verified against the provider's official pricing page on October 3, 2026, and each table row links to its source. API prices move often, so confirm the live rate before signing a budget to it. These are planning estimates: they ignore prompt-caching discounts, batch rates, tool-call charges, and regional premiums.",
    },
    {
      question: "Do I need an account to use the dashboard?",
      answer:
        "No. The dashboard is free with no sign-in and no usage limits. The charts are generated from our verified price table and the sliders run entirely in your browser — nothing you enter is sent anywhere or stored.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "AI model cost dashboard" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            The AI price war,{" "}
            <em className="font-medium italic text-accent">in charts.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Seven models, one dashboard: per-token rate bars, a monthly bill
            explorer with sliders, and cost-vs-volume curves — built from our
            price table, verified against official pricing pages on October 3,
            2026. Drag, compare, and see exactly where each model wins.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[22px] border border-line bg-surface">
          <iframe
            src="/dashboards/ai-cost-dashboard.html"
            title="Interactive AI model cost dashboard"
            className="h-[1800px] w-full"
            loading="lazy"
          />
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
                rate. Test with your own workload, not just these charts.
              </li>
              <li>
                Charts ignore prompt-caching discounts, batch rates, and
                tool-call charges — all of which move the real invoice,
                especially for agentic workloads.
              </li>
              <li>
                API prices change often. We re-check the underlying table
                against official pricing pages; always confirm the live rate
                before signing a budget to it.
              </li>
              <li>
                <Link
                  href="/tools/token-price-compare"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Token price comparison calculator →
                </Link>{" "}
                ·{" "}
                <Link
                  href="/guides/what-is-jev"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  What is Jev? →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section
            aria-label="How this tool works"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Four views of the same verified price table
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                This dashboard answers the question the price table alone
                can&rsquo;t: what do these rates actually feel like? It reads
                the same verified snapshot that powers the token price
                comparison tool — seven models, checked against official
                pricing pages on October 3, 2026 — and renders it as charts you
                can play with.
              </p>
              <p>
                The rate chart puts input and output prices side by side on a
                log scale, which is the only way to see Jev&rsquo;s $0.042 and
                a $10 output rate in one view. The bill explorer lets you drag
                monthly input and output volumes (or jump in with a workload
                preset) and re-sorts every bar cheapest-first, naming the
                winner and its savings versus the priciest option. The volume
                curves plot each model&rsquo;s monthly bill as input tokens
                scale from 100K to 100M, so you can see which models stay cheap
                at scale and which pull away.
              </p>
              <p>
                Under the charts, the price table shows the raw numbers behind
                everything — per-million-token rates, context windows, pricing
                caveats, and a link to each provider&rsquo;s official pricing
                page, since those pages are the only authoritative numbers and
                API rates move often.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Rate bars (log scale)</strong> —
                grouped input/output $/MTok bars for all seven models; the log
                axis keeps sub-dollar prices visible next to double-digit ones.
              </li>
              <li>
                <strong className="text-ink">Bill explorer sliders</strong> —
                monthly input (0–50M) and output (0–20M) sliders; bars re-sort
                cheapest-first on every move, with a summary naming the
                cheapest model and its savings.
              </li>
              <li>
                <strong className="text-ink">Workload presets</strong> —
                one-tap mixes: chat-like 2:1, balanced 1:1, and output-heavy
                1:4 input-to-output ratios.
              </li>
              <li>
                <strong className="text-ink">Volume curves</strong> — log-log
                lines of monthly cost as input volume scales (output fixed at
                half of input), revealing which models stay cheap at scale.
              </li>
              <li>
                <strong className="text-ink">Price table</strong> — the raw
                verified figures, context windows, caveats, and official
                pricing links behind every chart.
              </li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQs</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Questions, answered
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
