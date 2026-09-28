import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { TERMS } from "@/lib/encyclopedia";
import Breadcrumbs from "@/components/Breadcrumbs";
import EncyclopediaIndex from "@/components/EncyclopediaIndex";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Encyclopedia: 40 Plain-English Definitions (2026)",
  description:
    "The Muse AI glossary: 40 plain-English definitions of tokens, agents, approval cards, Jolly, connectors, voice mode, Mac computer use, Charm, and more — each linked to the relevant in-depth guide.",
  keywords:
    "muse ai glossary, muse ai terms, muse ai tokens explained, muse ai dictionary, what is muse jolly",
  alternates: { canonical: `${SITE.baseUrl}/encyclopedia` },
  openGraph: {
    type: "website",
    title: "Muse AI Encyclopedia: 40 Plain-English Definitions",
    description:
      "Tokens, agents, approvals, Jolly, connectors, voice mode — every Muse term defined plainly, each with links to the full guide.",
    url: `${SITE.baseUrl}/encyclopedia`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Encyclopedia: 40 Plain-English Definitions",
    description:
      "Tokens, agents, approvals, Jolly, connectors, voice mode — every Muse term defined plainly, each with links to the full guide.",
  },
};

export default function EncyclopediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI Encyclopedia",
    description:
      "40 plain-English definitions of Muse AI terms: tokens, agents, approval cards, Jolly, connectors, voice mode, computer use, and more.",
    url: `${SITE.baseUrl}/encyclopedia`,
    itemListElement: TERMS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "DefinedTerm",
        name: t.term,
        description: t.definition,
      },
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Encyclopedia" }]}
          />
          <p className="kicker mt-10">Reference</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Every Muse term,{" "}
            <em className="font-medium italic text-accent">defined plainly.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Forty definitions with no jargon borrowed from press releases —
            what each thing is, why it matters, and where to read the full
            guide. Announced-but-unshipped features are labeled as such.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              The 30-second version
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Muse AI glossary: 40 plain-English definitions of tokens, agents,
              approval cards, Jolly, connectors, voice mode, Mac computer use,
              Charm, goals, side chats, and more. Each entry links to the
              relevant in-depth guide, and anything announced but not yet
              shipped — video chat, the Muse email address, smart glasses,
              the Charm keychain — is marked as upcoming.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              New to all of this? Start with{" "}
              <Link
                href="/guides/what-is-muse-ai"
                className="font-bold text-accent underline-offset-4 hover:underline"
              >
                What Is Muse AI?
              </Link>{" "}
              or the{" "}
              <Link
                href="/guides/muse-ai-tutorial"
                className="font-bold text-accent underline-offset-4 hover:underline"
              >
                15-minute tutorial
              </Link>
              .
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <EncyclopediaIndex />
        </div>

        <div className="mt-14 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
