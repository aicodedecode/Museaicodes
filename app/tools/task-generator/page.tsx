import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
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

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
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

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
