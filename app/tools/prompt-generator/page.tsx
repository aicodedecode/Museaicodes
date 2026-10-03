import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
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
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
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

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the prompt generator do?",
      answer:
        "It turns five inputs — your goal, context, constraints, output format, and tone — into a complete, structured prompt for Muse. Every composed prompt opens with your goal, adds background and limits only if you fill them in, names the output format and tone, and ends with two rules: ask clarifying questions when information is missing, and never invent facts.",
    },
    {
      question: "Is the prompt generator free?",
      answer:
        "Yes — completely free, with no account, sign-up, or usage limits. Everything is assembled by JavaScript in your browser the moment you type, so there are no servers to pay for and nothing is tracked. Type, copy your prompt, and use it as many times as you like.",
    },
    {
      question: "Do I need an account to use it?",
      answer:
        "No account is needed. The tool is a client-side form on a public page — your inputs never leave your browser and are never sent to any server, so there is nothing to log into and nothing stored about you. Your prompts stay private by design.",
    },
    {
      question: "How do I use the prompt it creates?",
      answer:
        "Click \u201CCopy prompt\u201D above the composed prompt, then paste it into Muse as your first message. The copied text is a complete, ready-to-send instruction — you don't need to add anything. If you want a different result, tweak the fields and copy again; the preview updates live.",
    },
    {
      question: "What do the example buttons do?",
      answer:
        "The three example pills — \u201CWeekly study plan\u201D, \u201CProduct comparison\u201D, and \u201CDeadline extension email\u201D — fill the whole form with realistic sample values so you can see how a finished prompt looks. They're starting points: edit any field to match your real situation before copying and pasting into Muse.",
    },
    {
      question: "Why does every prompt include a clarifying-question rule?",
      answer:
        "Because the most common failure mode is Muse guessing at missing details. The rule tells it to ask one round of clarifying questions when key information is absent, and the companion rule tells it to flag assumptions instead of inventing facts. Together they turn vague prompts into a short back-and-forth that converges on what you actually want.",
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

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              From a blank box to a structured prompt
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The Prompt Generator is a guided form that assembles a complete,
                copy-ready prompt for Muse from five building blocks: your
                goal, background context, constraints, the output format you
                want, and the tone of the answer. It is built for anyone who
                gets vague answers from AI and suspects the problem is the
                prompt, not the model — specific prompts get specific answers,
                and this tool forces that specificity into the structure.
              </p>
              <p>
                Type into the fields (or start from one of the three example
                presets), and the panel on the right composes the finished
                prompt live as you type. When it reads the way you want, hit{" "}
                <strong className="text-ink">Copy prompt</strong> and paste it
                into Muse as your first message. Fields you leave blank simply
                drop out of the composed prompt, so only say what matters.
              </p>
              <p>
                Every composed prompt ends with the same two rules: if key
                information is missing, Muse must ask one round of clarifying
                questions before answering; and it must not invent facts,
                instead flagging any assumptions it makes. These two lines are
                the cheapest insurance in prompt design — they turn silent
                guessing into a visible back-and-forth.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Start from an example</strong> —
                three preset pills (Weekly study plan, Product comparison,
                Deadline extension email) that fill all five fields with
                realistic sample values; editing any field clears the active
                preset highlight.
              </li>
              <li>
                <strong className="text-ink">Your goal</strong> — the one
                required field: a single-line input describing what you want
                Muse to do, placed at the top of the composed prompt.
              </li>
              <li>
                <strong className="text-ink">Context</strong> — an optional
                textarea for background Muse should know: your situation,
                what&rsquo;s already been tried, who the answer is for.
              </li>
              <li>
                <strong className="text-ink">Constraints</strong> — an optional
                textarea for limits: length, budget, things to avoid,
                must-haves.
              </li>
              <li>
                <strong className="text-ink">Output format</strong> — a
                dropdown of five shapes (Concise brief, Step-by-step plan,
                Checklist, Polished draft, Comparison table), each mapped to an
                exact instruction line in the composed prompt.
              </li>
              <li>
                <strong className="text-ink">Tone</strong> — a dropdown of four
                tones: Concise and direct, Neutral and factual, Warm and
                encouraging, or Playful and creative.
              </li>
              <li>
                <strong className="text-ink">Your composed prompt</strong> —
                the live preview panel; the text rewrites itself with every
                keystroke so you can watch the structure take shape.
              </li>
              <li>
                <strong className="text-ink">Copy prompt</strong> — copies the
                full prompt to your clipboard (with a fallback for browsers
                without clipboard access); the button flips to &ldquo;Copied
                &check;&rdquo; and a toast confirms, or tells you to select the
                text manually if copying fails.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Prompt generator questions, answered
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
