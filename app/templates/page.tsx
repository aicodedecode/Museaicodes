import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { TEMPLATES } from "@/lib/templates";
import Breadcrumbs from "@/components/Breadcrumbs";
import TemplateLibrary from "@/components/TemplateLibrary";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "10 Ready-to-Paste Muse AI Agent Templates",
  description:
    "Turn Muse into a specialist: 10 copy-paste agent templates — personal assistant, research agent, travel planner, shopping advisor, tutor, and more. Fill in the [brackets] and send.",
  keywords:
    "muse ai agent templates, muse ai templates, muse ai system prompts, copy paste muse ai templates, muse ai custom instructions",
  alternates: { canonical: `${SITE.baseUrl}/templates` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "10 Ready-to-Paste Muse AI Agent Templates",
    description:
      "Turn Muse into a specialist: 10 copy-paste agent templates with built-in approval rules — Muse drafts, plans, and compares, but always asks before sending messages or making purchases.",
    url: `${SITE.baseUrl}/templates`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "10 Ready-to-Paste Muse AI Agent Templates",
    description:
      "10 copy-paste agent templates that set Muse up as a specialist — personal assistant, research agent, travel planner, shopping advisor, tutor, and more.",
  },
};

const steps = [
  {
    title: "Pick a template",
    body: "Filter by category — productivity, research, lifestyle — and find the specialist that matches the job.",
  },
  {
    title: "Fill in the [brackets]",
    body: "Every template has [bracketed] placeholders for your details. Specific inputs get specific, useful outputs.",
  },
  {
    title: "Paste as your first message",
    body: "Start a fresh Muse chat, paste the instructions, and answer its questions. It will ask before taking any consequential action.",
  },
];

export default function TemplatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "10 Ready-to-Paste Muse AI Agent Templates",
    description:
      "10 copy-paste instruction blocks that set Muse AI up as a specialized agent across 5 categories: Productivity, Research, Business, Lifestyle, and Learning.",
    url: `${SITE.baseUrl}/templates`,
    inLanguage: "en",
    numberOfItems: TEMPLATES.length,
    itemListElement: TEMPLATES.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${t.title} — ${t.tagline}`,
      additionalType: t.category,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Templates" }]} />
          <p className="kicker mt-10">Agent templates</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            10 templates that turn Muse into a{" "}
            <em className="font-medium italic text-accent">specialist.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            <strong className="text-ink">Short answer:</strong> 10 ready-to-paste
            instruction blocks that set Muse up as a specialized agent — a
            personal assistant, research analyst, travel planner, shopping
            advisor, tutor, and more — each with{" "}
            <span className="text-ink">[bracketed]</span> placeholders you
            customize before sending.
          </p>
          <p className="mt-4 max-w-[670px] text-[1.02rem] leading-relaxed text-muted">
            Every template includes built-in approval rules grounded in how Muse
            actually behaves: it drafts, plans, and compares — but always asks
            before sending messages, contacting anyone, or making purchases.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12">
            <TemplateLibrary />
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

        <div className="mt-20">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
