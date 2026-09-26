import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { GUIDES, getGuide, relatedGuides, guideCanonical } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleBody from "@/components/ArticleBody";
import ReferralCodes from "@/components/ReferralCodes";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import AdSlot from "@/components/AdSlot";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  const canonical = guideCanonical(guide.slug);
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: canonical,
      siteName: SITE.name,
      publishedTime: "2026-09-26T00:00:00+05:30",
      modifiedTime: "2026-09-26T00:00:00+05:30",
    },
    twitter: {
      card: "summary",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const related = relatedGuides(guide.slug, 3);
  const canonical = guideCanonical(guide.slug);
  const position = GUIDES.findIndex((g) => g.slug === guide.slug) + 1;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    inLanguage: "en",
    datePublished: "2026-09-26",
    dateModified: "2026-09-26",
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Muse Hub" },
    publisher: { "@type": "Organization", name: "Muse Hub" },
    keywords: guide.keywords,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.baseUrl}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: canonical },
    ],
  };

  return (
    <main id="main">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <article className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: guide.title },
            ]}
          />
          <p className="kicker mt-10">
            Guide {String(position).padStart(2, "0")} · {guide.category}
          </p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.4rem,5.5vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-[640px] text-[1.15rem] text-muted">{guide.deck}</p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Updated {SITE.updated} · {Math.max(3, Math.round(guide.sections.length * 1.4))} min read
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_360px]">
          <Reveal delay={80}>
            <ArticleBody guide={guide} />
            <AdSlot />

            <section aria-labelledby="related-h" className="mt-16">
              <h2 id="related-h" className="font-display text-[1.9rem] font-bold tracking-tight">
                Keep reading
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/guides/${r.slug}`}
                    className="group flex flex-col rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      {r.category}
                    </span>
                    <span className="mt-3 font-bold leading-snug group-hover:text-accent">
                      {r.title}
                    </span>
                    <span className="mt-auto pt-4 text-sm font-bold text-muted">
                      Read <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>

          <aside aria-label="Referral codes" className="lg:pt-2">
            <ReferralCodes />
            <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                All 15 guides
              </p>
              <Link
                href="/guides"
                className="mt-2 inline-block font-bold text-accent underline-offset-4 hover:underline"
              >
                Browse the full library →
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
