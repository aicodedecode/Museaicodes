import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
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

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
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

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
