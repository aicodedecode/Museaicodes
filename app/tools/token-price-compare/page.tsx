import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import TokenPriceCompare from "@/components/TokenPriceCompare";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "AI Token Price Comparison: GPT vs Claude vs Gemini vs Grok (2026)",
  description:
    "Compare per-token API pricing across GPT-6, Claude, Gemini, Grok, DeepSeek, and Mistral: enter your monthly input and output tokens and see each provider's estimated monthly cost, ranked cheapest to priciest.",
  keywords:
    "ai token price comparison, llm api pricing comparison, gpt vs claude price per token, gemini api pricing, grok api pricing, cheapest ai api",
  alternates: { canonical: `${SITE.baseUrl}/tools/token-price-compare` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
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

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the AI Token Price Comparison tool do?",
      answer:
        "It compares per-token API pricing for seven models — GPT-6.1 Sol, Claude Sonnet 5.5, Grok 4.7, Gemini 3.8 Flash, DeepSeek V4 Pro, Mistral Large 3, and TypeSafe Jev — at your monthly input and output volumes. It ranks the models cheapest to priciest and shows each provider’s estimated bill, updating instantly as you move the sliders.",
    },
    {
      question: "Is the price comparison tool free?",
      answer:
        "Yes, it is free with no account, no sign-in, and no usage limits. The tool runs entirely in your browser and recalculates every row instantly as you change volumes, so you can test as many scenarios as you want without paying or handing over any details.",
    },
    {
      question: "Do I need an account or an API key to use it?",
      answer:
        "No. Nothing on this page requires a sign-in, an API key, or an email address. Your input and output volumes never leave your browser — the page stores nothing and sends nothing to a server, so you can compare prices without sharing your usage data.",
    },
    {
      question: "How accurate are the prices shown?",
      answer:
        "The per-token rates were last verified against each provider’s official pricing page on October 3, 2026, but API prices change often — always confirm the live rate before signing a budget to it. The tool is a planning estimate, not a quote: it ignores prompt-caching discounts, batch rates, tool-call charges, and regional premiums.",
    },
    {
      question: "Why is Muse listed but not ranked?",
      answer:
        "Muse is a consumer app, and Meta publishes no per-token API rate for it, so there is no number to rank against the API models. It appears as an unranked reference row at the bottom of the table so readers don’t mistake this for a full Muse comparison — it is context only.",
    },
    {
      question:
        "Why does the tool ask for input and output tokens separately?",
      answer:
        "Because output tokens cost more than input tokens on every model in the table — generation is priced higher than processing. A workload that mostly sends context costs notably less than one that generates long answers, so entering both volumes separately gives a far more honest estimate than a single blended number.",
    },
    {
      question: "Why is TypeSafe Jev so much cheaper than the rest?",
      answer:
        "Jev charges $0.042 per million input tokens and nothing for outputs, because its outputs are tiny typed decisions rather than generated text — there is no expensive token-by-token generation. That makes it dramatically cheaper for decision-shaped work like classification, scoring, and routing. The catch: it cannot write essays or code, so compare within your workload, not across model classes.",
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
              { label: "Token price comparison" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Which AI tokens are the{" "}
            <em className="font-medium italic text-accent">cheapest?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            This tool compares per-token API pricing for seven leading models —
            GPT-6.1 Sol, Claude Sonnet 5.5, Gemini 3.8 Flash, Grok 4.7, DeepSeek V4
            Pro, and Mistral Large 3 — plus a Muse reference row. Enter your
            monthly input and output tokens to see each provider&rsquo;s
            estimated monthly bill, ranked cheapest to priciest, with prices
            verified on October 3, 2026.
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
                  href="/tools/ai-cost-dashboard"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Interactive cost dashboard (charts) →
                </Link>{" "}
                ·{" "}
                <Link
                  href="/guides/what-is-jev"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  What is Jev? →
                </Link>
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

        <Reveal>
          <section
            aria-label="How this tool works"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Cheapest to priciest, at your exact volume
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                This tool answers a concrete buying question: at your actual
                monthly volume, which AI API costs the least? It compares
                per-token API pricing for seven models — GPT-6.1 Sol from OpenAI,
                Claude Sonnet 5.5 from Anthropic, Grok 4.7 from xAI, Gemini 3.8
                Flash from Google, DeepSeek V4 Pro, and Mistral Large 3 — plus
                a Muse reference row for context.
              </p>
              <p>
                Enter your monthly input tokens (prompts, documents, and
                context you send) and output tokens (answers, code, and drafts
                the model writes), or jump in with a Light, Medium, or Heavy
                volume preset. Every change recalculates instantly: the cost
                dashboard ranks the models cheapest to priciest with
                proportional bars, and the detail table shows each
                model&rsquo;s per-million-token rates, context window, and
                your cost at the chosen volume.
              </p>
              <p>
                The Monthly/Annual toggle switches the whole page between
                monthly bills and yearly projections (annual is simply monthly
                × 12), and a summary banner names the cheapest model and how
                much it saves versus the priciest option at your volume. Each
                model name links to its provider&rsquo;s official pricing
                page, since API rates move often and those pages are the only
                authoritative numbers.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Volume presets</strong> — Light
                (0.5M input / 0.1M output), Medium (2M / 0.5M, the default),
                and Heavy (10M / 3M) buttons that fill both volume fields at
                once.
              </li>
              <li>
                <strong className="text-ink">Input tokens per month</strong> —
                a number field paired with a slider (0–50M, in 0.5M steps) for
                tokens you send: prompts, documents, and context.
              </li>
              <li>
                <strong className="text-ink">Output tokens per month</strong> —
                a number field paired with a slider (0–20M, in 0.25M steps)
                for tokens the model writes: answers, code, and drafts.
              </li>
              <li>
                <strong className="text-ink">Monthly / Annual toggle</strong> —
                switches every figure on the page between monthly bills and
                annual projections; changing either volume clears the active
                preset.
              </li>
              <li>
                <strong className="text-ink">Cost dashboard</strong> — the
                ranked bar list from cheapest to priciest, with a
                “Cheapest” badge on the winner and each bar&rsquo;s width
                proportional to the priciest option.
              </li>
              <li>
                <strong className="text-ink">Prices-verified pill</strong> —
                states when the per-token rates were last checked against
                official pricing pages: October 3, 2026.
              </li>
              <li>
                <strong className="text-ink">Savings summary box</strong> —
                names the cheapest model and states how much it saves versus
                the priciest option at your exact volume, since only the model
                changes.
              </li>
              <li>
                <strong className="text-ink">Ranked table</strong> — full
                detail for each model: $/1M input, $/1M output, context window,
                and your cost; each row links to the provider&rsquo;s official
                pricing page.
              </li>
              <li>
                <strong className="text-ink">Muse reference row</strong> — an
                unranked row noting that Muse is a consumer app with no public
                per-token API rate, so it cannot be ranked; included for
                context only.
              </li>
              <li>
                <strong className="text-ink">Planning-estimate note</strong> —
                the disclaimer that this is a planning estimate, not a quote:
                it ignores prompt-caching discounts, batch rates, tool-call
                charges, and regional premiums.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section
            aria-label="Frequently asked questions"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Token price questions, answered
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
