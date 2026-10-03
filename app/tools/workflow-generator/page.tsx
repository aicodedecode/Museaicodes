import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import WorkflowGenerator from "@/components/WorkflowGenerator";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Workflow Generator: Get a Who-Does-What Step Plan (2026)",
  description:
    "Enter any goal and get a numbered step plan where each step is tagged [You], [Muse], or [Together] — with approval checkpoints flagged. Optional recurring toggle adds a weekly review ritual. Copy it as a checklist.",
  keywords:
    "muse ai workflow generator, muse ai step plan, who does what muse ai, muse ai approval checkpoints",
  alternates: { canonical: `${SITE.baseUrl}/tools/workflow-generator` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Workflow Generator",
    description:
      "Turn a goal into a numbered step plan tagged [You] / [Muse] / [Together], with approval checkpoints flagged — copy it as a checklist.",
    url: `${SITE.baseUrl}/tools/workflow-generator`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Workflow Generator",
    description:
      "Turn a goal into a numbered step plan tagged [You] / [Muse] / [Together], with approval checkpoints flagged — copy it as a checklist.",
  },
};

export default function WorkflowGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Workflow Generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/workflow-generator`,
    description:
      "Interactive generator that turns a goal into a numbered step plan with each step tagged [You], [Muse], or [Together], approval checkpoints flagged, an optional recurring review ritual, and one-click copy as a checklist.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the workflow generator do?",
      answer:
        "It turns a goal into a numbered step plan where every step is tagged [You], [Muse], or [Together] so ownership is explicit. Plans start by defining success and constraints, end with a verify-and-adjust step, flag approval checkpoints where your say-so is needed, and can be copied as a Markdown checklist.",
    },
    {
      question: "Is it free? Do I need an account?",
      answer:
        "Yes, it's free, and no account is needed. The entire plan is assembled from pattern rules in your browser — your goal is never sent to a server, no AI is involved, and nothing leaves the page. Generate as many workflows as you want.",
    },
    {
      question: "What do the [You], [Muse], and [Together] tags mean?",
      answer:
        "[You] marks steps that need your judgment — approvals, decisions, real numbers, execution. [Muse] marks steps where Muse does the legwork: research, drafting, building options. [Together] marks joint steps like agreeing an outline or reviewing results. They're a guide, not a contract — adjust any step to fit how you actually work.",
    },
    {
      question: "What does the Recurring toggle do?",
      answer:
        "It adds a \u201CWeekly review ritual\u201D as the final step: ten minutes at the same time each week reviewing what's working, what's stuck, and one change for next week, with Muse keeping a running log of decisions. Use it for ongoing goals like study plans, fitness routines, or budgets — anything you revisit regularly.",
    },
    {
      question: "How does it decide which steps to include?",
      answer:
        "It matches keywords in your goal against eight pattern categories — research, writing, planning, shopping, building, money, study, and fitness — and inserts up to two matching step templates. Risky verbs like \u201Cpay\u201D or \u201Csend\u201D add an automatic final approval gate, and any deadline you mention is picked up and shown in the plan header.",
    },
    {
      question: "Does the tool use AI to plan my goal?",
      answer:
        "No — it uses fixed keyword pattern rules, not AI, and it doesn't understand your goal the way Muse would. Treat the output as a solid first draft: read the steps, adjust what doesn't fit, and let Muse do the deep thinking once you bring the plan into a real conversation.",
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
              { label: "Workflow generator" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            A step plan that says{" "}
            <em className="font-medium italic text-accent">who does what</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Enter a goal and get a numbered plan where every step is tagged{" "}
            <strong className="text-ink">[You]</strong>,{" "}
            <strong className="text-ink">[Muse]</strong>, or{" "}
            <strong className="text-ink">[Together]</strong> — with approval
            checkpoints flagged so nothing important happens without your
            say-so. Short answer: plans fail when it&rsquo;s unclear who owns
            each step; this makes ownership explicit.
          </p>
        </Reveal>

        <div className="mt-10">
          <WorkflowGenerator />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                The plan is assembled from{" "}
                <strong className="text-ink">pattern rules</strong> in your
                browser — it matches keywords like &ldquo;research&rdquo;,
                &ldquo;buy&rdquo;, or &ldquo;study&rdquo; to step templates. It
                doesn&rsquo;t understand your goal the way Muse would; treat
                the output as a solid first draft to adjust.
              </li>
              <li>
                Approval checkpoints are reminders, not locks. For anything
                irreversible — payments, posts, deletions — the final check
                is always you, reading before you confirm.
              </li>
              <li>
                <Link
                  href="/guides/how-to-use-muse-ai"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  How to use Muse AI, from first open to daily habit →
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-prompt-tips"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Prompt tips: give each step a sharp instruction →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              A step plan that names who does what
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The Workflow Generator turns any goal into a numbered step plan
                where every step is tagged <strong className="text-ink">[You]</strong>,{" "}
                <strong className="text-ink">[Muse]</strong>, or{" "}
                <strong className="text-ink">[Together]</strong> — making
                ownership explicit, which is where most plans silently fail.
                Each plan starts with defining success and constraints, ends
                with a verify-and-adjust step, and flags approval checkpoints
                on any step where something important needs your say-so first.
              </p>
              <p>
                The steps are chosen by keyword pattern rules in your browser,
                not by AI. The tool recognizes eight kinds of goals — research,
                writing, planning, shopping, building, money, study, and
                fitness — and slots in purpose-built step templates for the
                matches (up to two categories). If nothing matches, it falls
                back to a generic gather-options-then-approve sequence. Risky
                verbs like &ldquo;pay&rdquo;, &ldquo;send&rdquo;, or
                &ldquo;delete&rdquo; automatically add a final approval gate,
                and any deadline you mention is detected and shown in the plan
                header.
              </p>
              <p>
                To use it, type your goal, flip the{" "}
                <strong className="text-ink">Recurring</strong> switch if this
                is an ongoing goal, and hit{" "}
                <strong className="text-ink">Generate workflow</strong>. Read
                through the numbered plan, adjust any step — the tags are a
                guide, not a contract — then use{" "}
                <strong className="text-ink">Copy as checklist</strong> to copy
                a Markdown checklist into your notes app or paste it into Muse
                as a starting plan. For anything irreversible, the final check
                is always you, reading before you confirm.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">
                  What do you want to accomplish?
                </strong>{" "}
                — a textarea for your goal in plain words; the tool scans it
                for keywords to pick the step templates.
              </li>
              <li>
                <strong className="text-ink">Recurring?</strong> — a toggle
                switch for ongoing goals; turning it on appends a
                &ldquo;Weekly review ritual&rdquo; step — ten minutes at the
                same time each week, with Muse keeping a running log of
                decisions.
              </li>
              <li>
                <strong className="text-ink">Generate workflow</strong> — the
                button that builds the plan; it stays disabled until
                you&rsquo;ve typed a goal.
              </li>
              <li>
                <strong className="text-ink">Role legend</strong> — three pills
                explaining the tags: You (your judgment calls and approvals),
                Muse (Muse does the legwork), Together (you work it out
                jointly).
              </li>
              <li>
                <strong className="text-ink">Step plan</strong> — the numbered
                list (capped at ten steps); each card shows the role tag,
                title, detail, and an &ldquo;Approval checkpoint&rdquo; badge
                wherever one applies.
              </li>
              <li>
                <strong className="text-ink">Copy as checklist</strong> — copies
                the whole plan as Markdown checkboxes to your clipboard, for
                your notes app or for pasting into Muse.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Workflow generator questions, answered
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
