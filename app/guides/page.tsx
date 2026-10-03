import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { GUIDES, guideCanonical } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideLibrary from "@/components/GuideLibrary";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "All 50 Muse AI Guides: Tutorials, Invite Codes & Comparisons",
  description:
    "Browse every Muse AI guide: invite & referral codes, tutorials, WhatsApp tips, token rewards, use cases, reviews, and comparisons with ChatGPT, Claude, and Meta AI.",
  keywords:
    "muse ai guides, muse ai tutorials, muse ai invite code, muse ai vs chatgpt, muse ai whatsapp",
  alternates: { canonical: `${SITE.baseUrl}/guides` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "All 50 Muse AI Guides: Tutorials, Invite Codes & Comparisons",
    description:
      "Every Muse AI guide in one place — access, prompting, WhatsApp, tokens, use cases, reviews, and honest comparisons.",
    url: `${SITE.baseUrl}/guides`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "All 50 Muse AI Guides: Tutorials, Invite Codes & Comparisons",
    description:
      "Every Muse AI guide in one place — access, prompting, WhatsApp, tokens, use cases, reviews, and honest comparisons.",
  },
};

export default function GuidesIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI guide library",
    description:
      "38 practical Muse AI guides covering access, prompting, WhatsApp, tokens, use cases, reviews, and comparisons.",
    numberOfItems: GUIDES.length,
    itemListElement: GUIDES.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Article",
        "@id": guideCanonical(g.slug),
        headline: g.title,
        description: g.metaDescription,
        inLanguage: "en",
        author: { "@type": "Organization", name: "museaicodes" },
      },
    })),
  };

  return (
    <main id="main">
      <JsonLd data={itemListJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Guides" }]}
          />
          <p className="kicker mt-10">Guide library</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Every Muse AI guide,{" "}
            <em className="font-medium italic text-accent">in one place.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            50 focused guides covering access and invite codes, prompting,
            WhatsApp, token rewards, real use cases, honest reviews, and
            head-to-head comparisons. Each one starts with a direct answer,
            then adds the steps that matter.
          </p>
        </Reveal>
        <div className="mt-12">
          <GuideLibrary />
        </div>
      </div>
    </main>
  );
}
