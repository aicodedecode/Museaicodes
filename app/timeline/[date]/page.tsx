import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import {
  TIMELINES,
  getTimeline,
  timelineUrl,
  formatTimelineDate,
  type TimelineEntry,
} from "@/lib/timelines";
import type { UpdateTag } from "@/lib/updates";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const TAG_STYLES: Record<UpdateTag, string> = {
  Launch: "bg-accent text-white",
  Features: "bg-ink text-bg",
  Traction: "bg-moss text-moss-ink",
  Security: "border border-accent bg-accent-ink text-accent",
  Policy: "border border-ink bg-bg text-ink",
};

export function generateStaticParams() {
  return TIMELINES.map((t) => ({ date: t.date }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}): Promise<Metadata> {
  const { date } = await params;
  const t = getTimeline(date);
  if (!t) return {};
  const url = `${SITE.baseUrl}${timelineUrl(date)}`;
  return {
    title: `${t.title} | ${SITE.name}`,
    description: t.deck,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: t.title,
      description: t.deck,
      url,
      siteName: SITE.name,
      publishedTime: `${date}T18:00:00+05:30`,
      images: [
        {
          url: "/images/brand/og-default.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t.title,
      description: t.deck,
    },
  };
}

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  return (
    <Reveal delay={Math.min(index, 4) * 60}>
      <li className="relative pl-12 md:pl-16">
        <span
          aria-hidden
          className="absolute left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg md:left-[11px]"
        />
        <article className="rounded-[22px] border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow)] md:p-7">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              {entry.time}
            </span>
            <span
              className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] ${TAG_STYLES[entry.tag]}`}
            >
              {entry.tag}
            </span>
          </div>
          <h2 className="font-display mt-4 text-[1.35rem] font-bold leading-snug tracking-tight md:text-[1.6rem]">
            {entry.headline}
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{entry.summary}</p>
          <a
            href={entry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mt-4 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-accent underline-offset-4 hover:underline"
          >
            Source: {entry.sourceName} <span aria-hidden>↗</span>
          </a>
        </article>
      </li>
    </Reveal>
  );
}

export default async function TimelinePage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const t = getTimeline(date);
  if (!t) notFound();

  const idx = TIMELINES.findIndex((x) => x.date === date);
  const newer = idx > 0 ? TIMELINES[idx - 1] : null;
  const older = idx < TIMELINES.length - 1 ? TIMELINES[idx + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.title,
    description: t.deck,
    url: `${SITE.baseUrl}${timelineUrl(date)}`,
    itemListElement: t.entries.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: e.sourceUrl,
      name: e.headline,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
              { label: formatTimelineDate(date) },
            ]}
          />
          <p className="kicker mt-10">Today in AI</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            The day in tech,{" "}
            <em className="font-medium italic text-accent">in order.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            {t.deck}
          </p>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.08em] text-faint">
            {formatTimelineDate(date)} · {t.entries.length} stories
          </p>
        </Reveal>

        <ol
          aria-label={`Timeline of tech news for ${formatTimelineDate(date)}`}
          className="relative mt-12 max-w-[820px] space-y-6 before:absolute before:bottom-4 before:left-[13px] before:top-4 before:w-px before:bg-line md:before:left-[17px]"
        >
          {t.entries.map((e, i) => (
            <TimelineCard key={i} entry={e} index={i} />
          ))}
        </ol>

        <nav
          aria-label="Other daily timelines"
          className="mt-16 flex max-w-[820px] flex-wrap items-center justify-between gap-4"
        >
          <div>
            {older && (
              <Link
                href={timelineUrl(older.date)}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                <span aria-hidden>←</span> {formatTimelineDate(older.date)}
              </Link>
            )}
          </div>
          <div>
            {newer && (
              <Link
                href={timelineUrl(newer.date)}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                {formatTimelineDate(newer.date)} <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </nav>

        <p className="mt-10 max-w-[670px] text-sm text-faint">
          Timelines are composed each morning from the previous day's verified
          news — every story links to the source it was checked against. See
          the full feed on the{" "}
          <Link href="/news" className="font-semibold text-accent underline-offset-4 hover:underline">
            news page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
