import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CHALLENGE_CATEGORIES } from "@/lib/challenge-items";
import Breadcrumbs from "@/components/Breadcrumbs";
import MuseChallenge from "@/components/MuseChallenge";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "30 Things to Try with Muse: The Interactive Challenge (2026)",
  description:
    "An interactive 30-item checklist of real things Muse AI can do — first steps, productivity, creative ideas, app connectors, and power moves. Your progress saves on your device.",
  keywords:
    "muse ai challenge, 30 things to try with muse, muse ai checklist, what can muse ai do, muse ai getting started",
  alternates: { canonical: `${SITE.baseUrl}/tools/muse-challenge` },
  openGraph: {
    type: "website",
    title: "30 Things to Try with Muse: The Interactive Challenge",
    description:
      "Tick off 30 real things Muse AI can do. Progress saves on your device.",
    url: `${SITE.baseUrl}/tools/muse-challenge`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "30 Things to Try with Muse: The Interactive Challenge",
    description:
      "Tick off 30 real things Muse AI can do. Progress saves on your device.",
  },
};

export default function MuseChallengePage() {
  const itemListElement = CHALLENGE_CATEGORIES.flatMap((cat) =>
    cat.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      url: `${SITE.baseUrl}${item.href}`,
    }))
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "30 Things to Try with Muse: The Interactive Challenge",
    description:
      "An interactive 30-item checklist of real things Muse AI can do — first steps, everyday productivity, creative ideas, app connectors, and power moves. Progress saves on the visitor's device.",
    url: `${SITE.baseUrl}/tools/muse-challenge`,
    numberOfItems: itemListElement.length,
    itemListElement,
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
              { label: "30-item challenge" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            30 things to try with{" "}
            <em className="font-medium italic text-accent">Muse</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            This interactive checklist walks you through 30 real things Muse AI
            can do — from your first prompt to connectors, voice mode, and
            token strategy. Tick items as you try them; your progress saves on
            your device, so you can leave and come back. Finish all 30 and
            download a shareable completion card.
          </p>
        </Reveal>

        <div className="mt-10">
          <MuseChallenge />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Every item links to a{" "}
                <strong className="text-ink">real guide or tool</strong> on
                this site — no invented features, no dead ends.
              </li>
              <li>
                Progress lives in your browser&rsquo;s local storage (
                <code className="rounded bg-bg px-1.5 py-0.5 font-mono text-[0.85em]">
                  muse-challenge-progress
                </code>
                ) — it stays on this device, and clearing site data resets it.
              </li>
              <li>
                This is a <strong className="text-ink">self-paced tour</strong>,
                not a certification. Finishing it means you&rsquo;ve explored
                what Muse can do — nothing more, nothing less.
              </li>
              <li>
                Looking for inspiration first?{" "}
                <Link
                  href="/guides/muse-ai-50-things"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  50 things Muse AI can do →
                </Link>{" "}
                or browse <Link
                  href="/use-cases"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  use cases by persona
                </Link>
                .
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
