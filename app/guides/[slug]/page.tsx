import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { GUIDES, getGuide, relatedGuides, guideCanonical } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleBody from "@/components/ArticleBody";
import ReferralCodes from "@/components/ReferralCodes";
import CommunityCodes from "@/components/CommunityCodes";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import AdSlot from "@/components/AdSlot";
import CopyLinkButton from "@/components/CopyLinkButton";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  const canonical = guideCanonical(guide.slug);
  const ogImage = `${SITE.baseUrl}${guide.image}`;
  const publishedTime = "2026-09-26T00:00:00+05:30";
  const modifiedTime = `${guide.modifiedTime}T00:00:00+05:30`;
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
      publishedTime,
      modifiedTime,
      images: [{ url: ogImage, width: 1200, height: 630, alt: guide.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [ogImage],
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
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: guide.title,
        description: guide.metaDescription,
        image: `${SITE.baseUrl}${guide.image}`,
        inLanguage: "en",
        datePublished: "2026-09-26",
        dateModified: guide.modifiedTime,
        mainEntityOfPage: canonical,
        author: { "@id": `${SITE.baseUrl}#organization` },
        publisher: { "@id": `${SITE.baseUrl}#organization` },
        keywords: guide.keywords,
      },
      {
        "@type": "Organization",
        "@id": `${SITE.baseUrl}#organization`,
        name: SITE.name,
        url: SITE.baseUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE.baseUrl}/guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: canonical },
        ],
      },
    ],
  };

  const videoJsonLd = guide.video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: guide.video.title,
        description: guide.metaDescription,
        thumbnailUrl: [`${SITE.baseUrl}${guide.video.poster}`],
        contentUrl: `${SITE.baseUrl}${guide.video.src}`,
        uploadDate: "2026-10-01",
        inLanguage: "en",
      }
    : null;

  return (
    <main id="main">
      <JsonLd data={articleJsonLd} />
      {videoJsonLd && <JsonLd data={videoJsonLd} />}

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
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
              By museaicodes editorial · Updated {SITE.updated} ·{" "}
              {Math.max(3, Math.round(guide.sections.length * 1.4))} min read
            </p>
            <CopyLinkButton />
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <ArticleBody guide={guide} />
            {guide.slug === "muse-ai-referral-code" && <CommunityCodes />}
            <AdSlot />

            <Reveal>
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
          </div>

          <aside aria-label="On this page and referral codes" className="lg:sticky lg:top-24 lg:pt-2">
            <nav aria-label="Table of contents" className="mb-8 hidden lg:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                On this page
              </p>
              <ol className="mt-3 space-y-2 border-l border-line pl-4">
                {guide.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i}`}
                      className="text-sm leading-snug text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <ReferralCodes />
            <div className="mt-6 rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                All {GUIDES.length} guides
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
