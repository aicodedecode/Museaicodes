import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { UPDATES } from "@/lib/updates";
import Breadcrumbs from "@/components/Breadcrumbs";
import UpdatesFeed from "@/components/UpdatesFeed";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI News (2026)",
  description:
    "The latest Muse AI news: launches, security fixes, hardware, download traction, and official resources — each entry dated and linked to its source.",
  keywords:
    "muse ai news, muse ai updates, muse ai download numbers, meta connect muse, muse charm",
  alternates: { canonical: `${SITE.baseUrl}/news` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI News (2026)",
    description:
      "Muse AI launches, feature announcements, security fixes, and traction — verified, dated, and sourced.",
    url: `${SITE.baseUrl}/news`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI News (2026)",
    description:
      "Muse AI launches, feature announcements, security fixes, and traction — verified, dated, and sourced.",
  },
};

export default function NewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI News",
    description:
      "Dated, sourced news on Muse AI: launches, features, traction, security.",
    url: `${SITE.baseUrl}/news`,
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
            items={[{ label: "Home", href: "/" }, { label: "News" }]}
          />
          <p className="kicker mt-10">News feed</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Tech news,{" "}
            <em className="font-medium italic text-accent">verified.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Launches, feature announcements, security incidents, and market
            moves across the tech industry — every entry dated and linked to
            the source we verified. No rumors presented as fact, and estimates
            are labeled as estimates.
          </p>
        </Reveal>

        <div className="mt-10">
          <UpdatesFeed />
        </div>

        <Reveal>
          <section aria-labelledby="changelog-h" className="mt-20">
            <p className="kicker">Changelog</p>
            <h2
              id="changelog-h"
              className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight"
            >
              Every change, one line each
            </h2>
            <p className="mt-4 max-w-[670px] text-muted">
              The same feed, compressed — every dated entry above as a single
              changelog line. Newest first.
            </p>
            <ol className="mt-8 max-w-[820px] divide-y divide-line rounded-[22px] border border-line bg-surface px-6 md:px-8">
              {UPDATES.map((u) => (
                <li
                  key={u.slug}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3.5"
                >
                  <time
                    dateTime={u.date}
                    className="font-mono w-[110px] shrink-0 text-[12px] uppercase tracking-[0.08em] text-faint"
                  >
                    {u.date}
                  </time>
                  <span className="min-w-0 flex-1 text-[0.95rem] font-semibold">
                    {u.title}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                    {u.tags.join(" · ")}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <div className="mt-14 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
