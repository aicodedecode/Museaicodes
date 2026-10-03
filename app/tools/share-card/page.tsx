import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareCard from "@/components/ShareCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Muse AI Referral Share Card Generator (2026)",
  description:
    "Make a shareable Muse AI invite-code card: type your code, add your name, pick a theme, and download a 1080×1350 PNG for Instagram and Stories.",
  keywords:
    "muse ai referral share card, muse ai invite code image, muse ai referral code card, share muse ai invite",
  alternates: { canonical: `${SITE.baseUrl}/tools/share-card` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Referral Share Card Generator",
    description:
      "Type your invite code, pick a theme, download a shareable 1080×1350 card.",
    url: `${SITE.baseUrl}/tools/share-card`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Referral Share Card Generator",
    description:
      "Type your invite code, pick a theme, download a shareable 1080×1350 card.",
  },
};

export default function ShareCardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Referral Share Card Generator",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/share-card`,
    description:
      "Generate a downloadable 1080×1350 share card for a Muse AI invite code.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the Share Card generator do?",
      answer:
        "It creates a downloadable 1080×1350-pixel PNG card for your Muse AI invite code. The card shows a “Muse AI invite code” headline, your code in large monospace type, an optional “Shared by” credit line, and a footer — far more readable in a post or story than a bare string of characters.",
    },
    {
      question: "Is the Share Card generator free?",
      answer:
        "Yes, it is free with no account, no sign-in, and no watermarks on the download. The card renders at full 1080×1350 resolution in your browser, and you can generate and download as many cards as you like. There is nothing to pay and no email required.",
    },
    {
      question: "Is my invite code uploaded or stored anywhere?",
      answer:
        "No. The card is drawn on an HTML canvas entirely in your browser and downloaded straight to your device — your invite code never leaves your computer, is never sent to a server, and is never stored by this site.",
    },
    {
      question: "Why does the code field start with a code I didn’t enter?",
      answer:
        "It is pre-filled with this site’s own invite code so you can see the card design working immediately. Replace it with your own code before downloading — anything downloaded while the demo code is in place will share the site’s code, not yours.",
    },
    {
      question: "What size and format is the downloaded card?",
      answer:
        "A 1080×1350-pixel PNG — a portrait 4:5 aspect ratio sized for Instagram feed posts and Stories. The on-page preview is the same canvas shown at 30% scale, so exactly what you see in the preview is what you get at full resolution.",
    },
    {
      question: "Where should I share my invite code?",
      answer:
        "Only where it’s welcome: your own social accounts, chats with friends, or communities that explicitly allow code sharing. Don’t spam codes into random comment sections or strangers’ DMs — it annoys people and can get you flagged or banned on the platforms you’re posting to.",
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
              { label: "Share card" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Turn your invite code into{" "}
            <em className="font-medium italic text-accent">a shareable card</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Type your Muse invite code, add your name, pick one of three
            themes, and download a 1080×1350 PNG sized for Instagram feed
            posts and Stories. Short answer: a readable code on a clean card
            gets shared more than a bare string of characters.
          </p>
        </Reveal>

        <div className="mt-10">
          <ShareCard />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                The card starts with{" "}
                <strong className="text-ink">our own invite code</strong> so
                you can see it working — replace it with yours before sharing.
              </li>
              <li>
                The PNG is rendered{" "}
                <strong className="text-ink">entirely in your browser</strong>.
                Your code is never uploaded or stored by this site.
              </li>
              <li>
                Share invite codes only where it&rsquo;s welcome — your own
                social accounts, chats with friends, or communities that allow
                it. Don&rsquo;t spam.
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-referral-code"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  How Muse AI invite and referral codes work →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section
            aria-label="How this tool works"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Your code, designed and downloadable in seconds
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                This generator turns your Muse invite code into a polished,
                shareable image. Type your code, optionally add your name,
                pick one of three themes, and download a 1080×1350-pixel PNG —
                a portrait 4:5 ratio sized for Instagram feed posts and
                Stories. A bare string of characters is easy to misread; a
                clean card gets shared more.
              </p>
              <p>
                The card is drawn live on an HTML canvas in your browser: a
                “MUSE HUB” brand mark up top, a “Muse AI invite code” headline,
                your code rendered huge in monospace, your optional “Shared
                by” credit line, and a museaicodes.com footer. The scaled-down
                live preview updates as you type, so what you see is exactly
                what downloads at full size.
              </p>
              <p>
                Everything happens locally — the PNG is rendered and
                downloaded in your browser, so your code is never uploaded,
                stored, or sent anywhere. Note that the code field opens
                pre-filled with this site&rsquo;s own invite code so you can
                see the design working; replace it with yours before
                downloading and sharing.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Your invite code</strong> — the
                text field for your Muse invite code; it uppercases input,
                strips anything that isn&rsquo;t a letter or digit, caps at 12
                characters, and falls back to “CODE” when empty. It opens
                pre-filled with the site&rsquo;s own code as a demo.
              </li>
              <li>
                <strong className="text-ink">Your name (optional)</strong> — a
                text field, up to 30 characters, that adds a “Shared by
                your-name” credit line to the card when filled in.
              </li>
              <li>
                <strong className="text-ink">Card theme</strong> — a radio
                group of three looks: Ember (dark charcoal with an orange
                accent), Moss (dark green with a light-green accent), and
                Paper (light paper background with a burnt-orange accent).
              </li>
              <li>
                <strong className="text-ink">
                  Download PNG (1080 × 1350)
                </strong>{" "}
                — the button that exports the full-size canvas as a PNG named
                muse-invite-card-yourcode.png and saves it to your device.
              </li>
              <li>
                <strong className="text-ink">Live preview</strong> — a
                30%-scale rendering of the actual canvas that updates in real
                time as you type, change your name, or switch themes.
              </li>
              <li>
                <strong className="text-ink">Local-rendering note</strong> —
                the page&rsquo;s privacy promise, shown under the download
                button: the card is drawn entirely in your browser and nothing
                is uploaded.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section
            aria-label="Frequently asked questions"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Share Card questions, answered
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
