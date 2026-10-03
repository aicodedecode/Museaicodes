import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShareCard from "@/components/ShareCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Referral Share Card Generator (2026)",
  description:
    "Make a shareable Muse AI invite-code card: type your code, add your name, pick a theme, and download a 1080×1350 PNG for Instagram and Stories.",
  keywords:
    "muse ai referral share card, muse ai invite code image, muse ai referral code card, share muse ai invite",
  alternates: { canonical: `${SITE.baseUrl}/tools/share-card` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
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

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
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

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
