import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import TaskGenerator from "@/components/TaskGenerator";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Task Generator: Turn Any Goal Into a Ready-to-Paste Instruction (2026)",
  description:
    "Describe your goal, pick a task type (research, plan, shop, write, organize) and a detail level — get a structured Muse instruction with context checklist, constraints, approval checkpoints, and output format.",
  keywords:
    "muse ai task generator, muse ai instruction generator, how to ask muse ai, muse ai task prompt",
  alternates: { canonical: `${SITE.baseUrl}/tools/task-generator` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Task Generator",
    description:
      "Turn any goal into a structured, ready-to-paste Muse instruction — with context checklist, constraints, and approval checkpoints.",
    url: `${SITE.baseUrl}/tools/task-generator`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Task Generator",
    description:
      "Turn any goal into a structured, ready-to-paste Muse instruction — with context checklist, constraints, and approval checkpoints.",
  },
};

export default function TaskGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Task Generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/task-generator`,
    description:
      "Interactive generator that turns a goal into a structured, ready-to-paste Muse instruction with context checklist, constraints, approval checkpoints, and output format.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the task generator do?",
      answer:
        "It converts a goal written in plain English into a structured instruction for Muse. You describe what you want to get done, choose a task type — Research, Plan, Shop, Write, or Organize — and a detail level, and the tool composes a ready-to-paste brief with the objective, context questions, constraints, approval checkpoints, and output format.",
    },
    {
      question: "Is the task generator free?",
      answer:
        "Yes — free, with no account needed and no usage limits. The instruction is assembled from fixed templates entirely in your browser, so your goal never leaves the page and nothing is sent to a server. Generate and copy as many instructions as you like.",
    },
    {
      question: "Where does the generated instruction go?",
      answer:
        "The \u201CCopy instruction\u201D button copies the full text to your clipboard. Paste it into Muse as your first message to kick off the conversation with all the structure built in. If copying fails in your browser, a toast tells you to select the text manually instead.",
    },
    {
      question: "What are the five task types?",
      answer:
        "Research investigates a topic and reports back with cited sources. Plan turns a goal into an ordered, actionable step-by-step plan. Shop shortlists products within a hard budget with honest trade-offs. Write drafts emails, essays, or posts in your voice. Organize designs a simple, maintainable system for files, notes, tasks, or routines.",
    },
    {
      question: "What's the difference between Concise, Standard, and Thorough?",
      answer:
        "Concise asks Muse for one tight response with no fluff — bullets where possible. Standard asks for thorough but scannable output: headers, bullets, and a summary up top. Thorough asks Muse to work in phases, confirm each phase with you, and go deep on trade-offs, edge cases, and alternatives.",
    },
    {
      question: "Does it write the strategy for me, or just the instructions?",
      answer:
        "Just the instructions. The tool assembles fixed templates around your goal — it structures the ask, it doesn't invent the strategy. You still need to judge whether Muse's response makes sense, and the approval checkpoints (\u201Cask me before\u2026\u201D) are reminders you should treat as guidance, not enforcement.",
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
              { label: "Task generator" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Turn any goal into a{" "}
            <em className="font-medium italic text-accent">Muse-ready</em>{" "}
            instruction
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Describe what you want to get done, pick a task type and a detail
            level, and get a structured instruction — objective, context
            checklist, constraints, approval checkpoints, and output format —
            ready to paste into Muse. Short answer: the more structure you
            give Muse up front, the fewer vague answers you get back.
          </p>
        </Reveal>

        <div className="mt-10">
          <TaskGenerator />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                The instruction is assembled from{" "}
                <strong className="text-ink">fixed templates</strong> in your
                browser — it structures your goal, it doesn&rsquo;t invent
                strategy. You still need to judge whether the output makes
                sense.
              </li>
              <li>
                Approval checkpoints (&ldquo;ask me before&hellip;&rdquo;) are
                reminders, not enforcement. Muse follows instructions well,
                but for anything irreversible — sending, paying, deleting —
                read before you confirm.
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-prompt-tips"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Prompt tips: how to write instructions Muse follows →
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/how-to-use-muse-ai"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  How to use Muse AI, from first open to daily habit →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Any goal, turned into a Muse-ready instruction
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The Task Generator turns a plain-English goal into a structured
                instruction you can paste into Muse as your first message. Pick
                one of five task types — Research, Plan, Shop, Write, or
                Organize — choose how much detail you want, and the tool
                assembles a complete brief: the objective, a context checklist
                of questions Muse should ask about, constraints it must
                respect, approval checkpoints where it must pause, and the
                output format to deliver.
              </p>
              <p>
                Each task type carries its own playbook. Research demands cited
                sources and a flag where sources disagree; Shop enforces a hard
                budget ceiling and honest trade-offs with no upselling; Write
                requires an outline first and forbids inventing quotes or
                statistics; Organize insists on confirming the system before
                touching anything; Plan orders steps by what unblocks the most.
                These are fixed templates — the tool structures your goal, it
                doesn&rsquo;t invent strategy, so you still judge whether the
                output makes sense.
              </p>
              <p>
                To use it, describe what you want to get done (or load one of
                the two example presets), pick the task type and detail level,
                and copy the instruction with the{" "}
                <strong className="text-ink">Copy instruction</strong> button.
                Paste it into Muse to kick off the conversation. Approval
                checkpoints are written as &ldquo;ask me before&hellip;&rdquo;
                reminders — they work well as guidance, but for anything
                irreversible like sending, paying, or deleting, always read
                before you confirm.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Start from an example</strong> —
                two preset pills (a noise-cancelling-headphones shopping goal
                and a Jaipur family trip plan) that fill the goal, task type,
                and detail level in one click.
              </li>
              <li>
                <strong className="text-ink">
                  What do you want to get done?
                </strong>{" "}
                — a textarea for your goal in plain words; it becomes the
                instruction&rsquo;s opening line.
              </li>
              <li>
                <strong className="text-ink">Task type</strong> — a five-card
                radio group (Research, Plan, Shop, Write, Organize), each with
                a one-line blurb describing what it&rsquo;s for and its own
                built-in playbook.
              </li>
              <li>
                <strong className="text-ink">Detail level</strong> — a
                three-option radio group: Concise (one tight response),
                Standard (thorough but scannable), or Thorough (work in
                confirmed phases, go deep on trade-offs).
              </li>
              <li>
                <strong className="text-ink">Your Muse instruction</strong> —
                the live preview panel assembling the objective, detail-level
                instruction, context checklist, constraints, approval rules,
                and output format from the task-type playbook.
              </li>
              <li>
                <strong className="text-ink">Copy instruction</strong> — copies
                the full instruction to your clipboard; a toast confirms and
                reminds you to paste it into Muse as your first message.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Task generator questions, answered
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
