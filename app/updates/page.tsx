import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { UPDATES } from "@/lib/updates";
import Breadcrumbs from "@/components/Breadcrumbs";
import UpdatesFeed from "@/components/UpdatesFeed";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI News & Updates (2026)",
  description:
    "The latest Muse AI news: launch traction, download numbers, Meta Connect feature announcements, and official resources — verified and sourced.",
  keywords:
    "muse ai news, muse ai updates, muse ai download numbers, meta connect muse",
  alternates: { canonical: `${SITE.baseUrl}/updates` },
  openGraph: {
    type: "website",
    title: "Muse AI News & Updates (2026)",
    description:
      "Muse AI traction, feature announcements, and official resources — verified, dated, and sourced.",
    url: `${SITE.baseUrl}/updates`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI News & Updates (2026)",
    description:
      "Muse AI traction, feature announcements, and official resources — verified, dated, and sourced.",
  },
};

export default function UpdatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI News & Updates",
    description: "Dated, sourced updates on Muse AI: launch, features, traction.",
    url: `${SITE.baseUrl}/updates`,
    itemListElement: UPDATES.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: u.sourceUrl,
      name: u.title,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Updates" }]}
          />
          <p className="kicker mt-10">News feed</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Muse AI news,{" "}
            <em className="font-medium italic text-accent">verified.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Traction, feature announcements, and official resources — each
            entry dated and linked to its source. No rumors presented as fact.
          </p>
        </Reveal>

        <div className="mt-10">
          <UpdatesFeed />
        </div>

        <div className="mt-14 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
