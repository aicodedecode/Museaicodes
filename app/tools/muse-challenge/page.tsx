import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CHALLENGE_CATEGORIES } from "@/lib/challenge-items";
import Breadcrumbs from "@/components/Breadcrumbs";
import MuseChallenge from "@/components/MuseChallenge";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "30 Things to Try with Muse: The Interactive Challenge (2026)",
  description:
    "An interactive 30-item checklist of real things Muse AI can do — first steps, productivity, creative ideas, app connectors, and power moves. Your progress saves on your device.",
  keywords:
    "muse ai challenge, 30 things to try with muse, muse ai checklist, what can muse ai do, muse ai getting started",
  alternates: { canonical: `${SITE.baseUrl}/tools/muse-challenge` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
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

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the 30-item Muse challenge?",
    answer:
      "It is a self-paced interactive checklist of 30 real things Muse AI can do, grouped into five categories: first steps, everyday productivity, creative ideas, app connectors, and power moves. Tick items as you try them, from your first prompt to connectors, voice mode, and token strategy.",
  },
  {
    question: "Is the challenge free? Do I need an account?",
    answer:
      "Yes, it is free, and no account is needed. Your progress saves automatically in your browser's local storage under the key muse-challenge-progress, so you can leave and come back on the same device. Clearing your site data resets it completely.",
  },
  {
    question: "Are the 30 items real features?",
    answer:
      "Yes. Every item links to a real guide or tool on this site, so each thing you try is backed by documented instructions with no dead ends. Nothing in the checklist is invented or assumed \u2014 if a feature is not documented, it is not listed.",
  },
  {
    question: "Do I get a certificate for finishing?",
    answer:
      "No. Finishing unlocks a shareable completion card, but it is explicitly a personal milestone, not a certification. The card itself carries that disclaimer, and the page repeats it: completing the tour means you have explored what Muse can do, nothing more.",
  },
  {
    question: "Can I track my progress on another device?",
    answer:
      "No. Progress lives only in the browser where you ticked the items and never leaves your device, so phones, tablets, and laptops each keep their own count. If you want the challenge fresh on a new device, just open it there and start over.",
  },
  {
    question: "How current is the challenge?",
    answer:
      "The items reflect Muse's documented capabilities as the site's guides describe them. Because each checklist item links to a real guide, any capability change is picked up there first; if Muse changes a feature, the linked guide is the authority.",
  },
];

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

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              A 30-item tour, tracked as you go
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The challenge is an interactive checklist of 30 real things Muse
                AI can do, grouped into five categories: first steps,
                everyday productivity, creative ideas, app connectors, and
                power moves. Tick an item&rsquo;s checkbox as you try it, and a
                sticky progress panel tracks your count, percentage, and how
                many items are left.
              </p>
              <p>
                Progress saves automatically in your browser&rsquo;s local
                storage, so it survives closing the tab and never leaves your
                device. Each item carries a Guide button linking to the real
                guide or tool behind it. Tick all 30 and a completion card —
                a 1080&times;1350 image drawn locally in your browser — unlocks
                for download. It is a personal milestone, explicitly not a
                certification.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Category sections</strong> — the 30
                items grouped into five headings (First steps, Everyday
                productivity, Creative, With your apps, Power moves), each
                with a live &ldquo;N of M done&rdquo; counter.
              </li>
              <li>
                <strong className="text-ink">Checkboxes</strong> — tick an item
                as you try it. Checked items fade and strike through; ticking
                is saved on this device only.
              </li>
              <li>
                <strong className="text-ink">Guide buttons</strong> — every item
                links to the real guide or tool on this site, so nothing in
                the checklist is a dead end.
              </li>
              <li>
                <strong className="text-ink">Sticky progress panel</strong> —
                a dark card showing your big count out of 30, an animated
                progress bar, and a status message that changes as you go.
              </li>
              <li>
                <strong className="text-ink">Reset progress</strong> — clears
                your saved ticks after a confirmation dialog. Progress never
                leaves your device, so there is no account to log out of.
              </li>
              <li>
                <strong className="text-ink">Completion card</strong> — unlocks
                at 30/30: a preview of the 1080&times;1350 canvas card plus a
                Download button. It is drawn locally — nothing is uploaded —
                and says plainly that it is a milestone, not a certification.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Challenge questions, answered
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
