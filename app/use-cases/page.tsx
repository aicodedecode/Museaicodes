import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { USE_CASES, PERSONAS } from "@/lib/use-cases";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import UseCaseDirectory from "@/components/UseCaseDirectory";

export const metadata: Metadata = {
  title: "30+ Muse AI Use Cases by Persona: What You Can Actually Do With It",
  description:
    "A practical directory of 30+ Muse AI use cases for students, shoppers, travelers, developers, creators, professionals, and families — each with a prompt to try and links to the full guides.",
  keywords:
    "muse ai use cases, what can muse ai do, muse ai examples, muse ai for students, muse ai for developers, muse ai prompts",
  alternates: { canonical: `${SITE.baseUrl}/use-cases` },
  openGraph: {
    type: "website",
    title: "30+ Muse AI Use Cases by Persona",
    description:
      "What you can actually do with Muse AI — 30+ concrete use cases with sample prompts, organized by who you are.",
    url: `${SITE.baseUrl}/use-cases`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "30+ Muse AI Use Cases by Persona",
    description:
      "What you can actually do with Muse AI — 30+ concrete use cases with sample prompts, organized by who you are.",
  },
};

export default function UseCasesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI use-case directory",
    description:
      "Practical Muse AI use cases organized by persona, each with a sample prompt and links to full guides.",
    url: `${SITE.baseUrl}/use-cases`,
    inLanguage: "en",
    numberOfItems: USE_CASES.length,
    itemListElement: USE_CASES.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: u.title,
      description: u.description,
      url: `${SITE.baseUrl}/use-cases#${u.persona.toLowerCase()}`,
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "30+ Muse AI Use Cases by Persona: What You Can Actually Do With It",
    description:
      "A practical directory of Muse AI use cases for students, shoppers, travelers, developers, creators, professionals, and families.",
    url: `${SITE.baseUrl}/use-cases`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  };

  return (
    <main id="main">
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Use cases" }]}
          />
          <p className="kicker mt-10">Use-case directory</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            What can you{" "}
            <em className="font-medium italic text-accent">
              actually do
            </em>{" "}
            with Muse AI?
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            <strong className="text-ink">Short answer:</strong> Muse AI is a
            personal agent that acts with your approval — it browses the web,
            compares shopping options, drafts and revises documents, builds
            study plans, helps with code, and reminds you of your goals. Below
            are {USE_CASES.length} concrete use cases across {PERSONAS.length}{" "}
            personas, each with a prompt you can try verbatim.
          </p>
        </Reveal>

        <UseCaseDirectory />

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
