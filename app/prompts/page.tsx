import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { PROMPTS } from "@/lib/prompts";
import { getGuide, guideUrl } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import PromptLibrary from "@/components/PromptLibrary";
import PromptOfDay from "@/components/PromptOfDay";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "40 Copy-Paste Muse AI Prompts Across 8 Categories",
  description:
    "A free library of 40 copy-paste prompts for Muse AI: build, research, create, decide, shop, plan, learn, and automate. Fill in the [brackets] and send.",
  keywords:
    "muse ai prompts, muse ai prompt library, best muse ai prompts, copy paste prompts for muse ai",
  alternates: { canonical: `${SITE.baseUrl}/prompts` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "40 Copy-Paste Muse AI Prompts Across 8 Categories",
    description:
      "A free library of 40 copy-paste prompts for Muse AI: build, research, create, decide, shop, plan, learn, and automate.",
    url: `${SITE.baseUrl}/prompts`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "40 Copy-Paste Muse AI Prompts Across 8 Categories",
    description:
      "A free library of 40 copy-paste prompts for Muse AI across 8 categories — fill in the [brackets] and send.",
  },
};

const steps = [
  {
    title: "Pick a prompt",
    body: "Filter by the kind of work you need — shopping, planning, research — and find the card that fits.",
  },
  {
    title: "Fill in the [brackets]",
    body: "Every prompt has [bracketed] placeholders for your details. The more specific you are, the better the answer.",
  },
  {
    title: "Copy and send",
    body: "Hit \"Copy prompt\", paste it into Muse, and refine the answer with follow-ups instead of starting over.",
  },
];

const deeperGuides = [
  getGuide("muse-ai-prompt-tips"),
  getGuide("how-to-use-muse-ai"),
].filter((g): g is NonNullable<typeof g> => Boolean(g));

export default function PromptsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "40 Copy-Paste Muse AI Prompts",
    description:
      "40 copy-paste prompts for Muse AI across 8 categories: Build, Research, Create, Decide, Shop, Plan, Learn, and Automate.",
    url: `${SITE.baseUrl}/prompts`,
    inLanguage: "en",
    numberOfItems: PROMPTS.length,
    itemListElement: PROMPTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${p.title} — ${p.prompt}`,
      additionalType: p.category,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Prompts" }]} />
          <p className="kicker mt-10">Prompt library</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            40 prompts that put{" "}
            <em className="font-medium italic text-accent">Muse to work.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            <strong className="text-ink">Short answer:</strong> 40 copy-paste
            Muse AI prompts across 8 categories — build, research, create,
            decide, shop, plan, learn, and automate — each with{" "}
            <span className="text-ink">[bracketed]</span> placeholders you
            customize before sending.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12">
            <PromptOfDay />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12">
            <PromptLibrary />
          </div>
        </Reveal>

        <Reveal>
          <section aria-labelledby="how-h" className="mt-20">
            <h2
              id="how-h"
              className="font-display text-[1.9rem] font-bold tracking-tight"
            >
              How to use these
            </h2>
            <ol className="mt-8 flex flex-col gap-6 sm:flex-row sm:gap-10">
              {steps.map((s, i) => (
                <li key={s.title} className="flex-1">
                  <p className="font-mono text-sm font-bold text-accent">
                    {i + 1}
                  </p>
                  <h3 className="mt-2 text-[1.1rem] font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="deeper-h" className="mt-20">
            <h2
              id="deeper-h"
              className="font-display text-[1.9rem] font-bold tracking-tight"
            >
              Go deeper
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {deeperGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={guideUrl(g.slug)}
                  className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    Guide
                  </span>
                  <span className="mt-3 font-bold leading-snug group-hover:text-accent">
                    {g.title}
                  </span>
                  <span className="mt-auto pt-4 text-sm font-bold text-muted">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="mt-20">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
