import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import TokenRunway from "@/components/TokenRunway";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Muse AI Token Runway: How Long Will Your Tokens Last? (2026)",
  description:
    "Enter your Muse token balance and daily usage to estimate your runway in days — an interactive, honest estimator with illustrative token weights.",
  keywords:
    "muse ai token runway, how long do muse tokens last, muse ai token balance, muse ai usage estimate",
  alternates: { canonical: `${SITE.baseUrl}/tools/token-runway` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
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

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the Token Runway tool do?",
      answer:
        "It estimates how many days your Muse token balance will last at your daily usage pace. You type in your balance and set sliders for four activity types — light Q&A, research sessions, image generations, and background monitoring — and the tool divides the balance by the resulting estimated daily burn.",
    },
    {
      question: "Is the Token Runway tool free?",
      answer:
        "Yes, it is completely free with no account, no sign-in, and no usage limits. The tool runs entirely in your browser, so you can recalculate your runway as often as you like — for example, whenever your balance changes or your usage habits shift.",
    },
    {
      question: "Do I need a Muse account or sign in to use it?",
      answer:
        "No. The tool needs no account and does not connect to Meta or read your app data — you type your balance in yourself, every calculation happens locally in your browser, and nothing you enter is uploaded, stored, or shared with anyone.",
    },
    {
      question: "How accurate is the runway estimate?",
      answer:
        "It is an illustrative planning estimate, not a metered bill. The per-activity weights are rough midpoints (about 5K–20K tokens for light Q&A, up to 400K for a research session), and real usage is spiky rather than average. Only the balance and usage screens in your Muse app are authoritative, so use this to build intuition, not a budget.",
    },
    {
      question: "What do the verdict lines under the runway mean?",
      answer:
        "The verdict translates your runway into a plain-English read of your usage pace. Under a week means heavy, agent-style usage; a few weeks suits an intensive project sprint; one to two months is the sweet spot for a steady daily routine; and three months or more means your balance comfortably funds your pace.",
    },
    {
      question:
        "Can I use it for purchased tokens, not just promotional grants?",
      answer:
        "Yes. The balance field accepts any number — a promotional grant, tokens you bought, or whatever your Muse app actually shows. The one-billion default is only a starting point, so replace it with your real balance to get a runway that reflects what you truly have.",
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

        <Reveal>
          <section
            aria-label="How this tool works"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              From a raw balance to a number of days
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The Token Runway tool turns a raw token balance into something
                you can plan with: a number of days. It is for anyone holding
                a Muse token balance — a promotional grant, purchased tokens,
                whatever is actually in the app — who wants a feel for whether
                their pace of use means months of casual questions or a fast
                burn from heavy, agent-style sessions.
              </p>
              <p>
                Start by typing the balance shown in your Muse app (it opens
                at one billion tokens, a common starting point). Then set four
                sliders to match a typical day: light Q&amp;A exchanges,
                research or artifact sessions, image generations, and
                background monitoring. Background monitoring is weekly rather
                than daily — the tool divides your weekly count by seven —
                because it runs continuously rather than per interaction.
              </p>
              <p>
                The dark results panel updates live: your estimated daily burn
                in tokens, then your runway in days and weeks, plotted on a
                90-day scale with markers at 7 and 30 days. Under the bar, a
                one-line verdict interprets the number — under a week is heavy,
                a few weeks suits a project sprint, and a month or more is the
                sweet spot for a steady daily routine.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Current token balance</strong> —
                the number field where you type the balance from your Muse
                app; it opens at 1,000,000,000 and never drops below zero.
              </li>
              <li>
                <strong className="text-ink">Light Q&amp;A exchanges</strong> —
                slider (0–60 per day) for short back-and-forth questions; each
                counts ≈5K–20K tokens in the illustrative weights.
              </li>
              <li>
                <strong className="text-ink">
                  Research / artifact sessions
                </strong>{" "}
                — slider (0–6 per day) for deep multi-step research sessions
                or documents Muse builds; each counts ≈100K–400K tokens.
              </li>
              <li>
                <strong className="text-ink">Image generations</strong> —
                slider (0–20 per day) for AI-generated images including prompt
                refinement; each counts ≈30K–80K tokens.
              </li>
              <li>
                <strong className="text-ink">Background monitoring</strong> —
                slider (0–7 per week) for Muse watching a goal, prices, or an
                inbox while you do other things; the weekly count is divided by
                seven for the daily burn.
              </li>
              <li>
                <strong className="text-ink">Your estimated daily burn</strong>{" "}
                — the headline output showing the total tokens per day your
                slider settings imply.
              </li>
              <li>
                <strong className="text-ink">Estimated runway</strong> — the
                headline result in days, with the equivalent in weeks beneath
                it; if you set no usage at all it prompts you to enter some.
              </li>
              <li>
                <strong className="text-ink">90-day progress bar</strong> — a
                visual scale from 0 to 90+ days with markers at 7 and 30 days;
                the bar is green for a month-plus runway and shifts to accent
                as the runway shortens.
              </li>
              <li>
                <strong className="text-ink">Verdict line</strong> — a
                plain-English read of the number: under a week is heavy
                agent-style use, a few weeks suits a sprint, one to two months
                is the steady-routine sweet spot, three months or more is
                comfortable.
              </li>
              <li>
                <strong className="text-ink">Illustrative-weights note</strong>{" "}
                — the reminder box that per-activity weights are rough
                midpoints shared with the token calculator, not Meta&rsquo;s
                real metering.
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
              Token Runway questions, answered
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
