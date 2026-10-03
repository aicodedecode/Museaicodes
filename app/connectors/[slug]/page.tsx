import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { CONNECTORS, connectorBySlug, type ConnectorStatus } from "@/lib/connectors";
import { guideUrl } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConnectorIcon from "@/components/ConnectorIcon";
import NewsletterSignup from "@/components/NewsletterSignup";
import CopyPromptButton from "@/components/CopyPromptButton";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

const STATUS_META: Record<ConnectorStatus, { label: string; className: string }> = {
  live: { label: "Live", className: "border-moss text-moss" },
  announced: { label: "Announced", className: "border-accent text-accent" },
  reported: { label: "Reported", className: "border-line text-muted" },
};

export function generateStaticParams() {
  return CONNECTORS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const c = connectorBySlug(params.slug);
  if (!c) return {};
  const title = `Does Muse Connect to ${c.name}? Verified Guide (2026)`;
  const description = `${c.tagline} Verified ${c.lastVerified}: what the ${c.name} connector does, how to connect it, example prompts, and limitations.`;
  return {
    title,
    description,
    keywords: `muse ai ${c.name.toLowerCase()}, does muse connect to ${c.name.toLowerCase()}, muse ai connectors, muse ai integration`,
    alternates: { canonical: `${SITE.baseUrl}/connectors/${c.slug}` },
    openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
      type: "article",
      title,
      description,
      url: `${SITE.baseUrl}/connectors/${c.slug}`,
      siteName: SITE.name,
    },
    twitter: { card: "summary", title, description },
  };
}

function SectionHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight">
      {children}
    </h2>
  );
}

export default function ConnectorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = connectorBySlug(params.slug);
  if (!c) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `Does Muse Connect to ${c.name}?`,
    description: c.tagline,
    url: `${SITE.baseUrl}/connectors/${c.slug}`,
    dateModified: "2026-09-29",
    author: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.baseUrl}/connectors/${c.slug}`,
    articleSection: "Muse AI connectors",
  };

  const related = CONNECTORS.filter((x) => x.slug !== c.slug && x.category === c.category).slice(0, 3);

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Connectors", href: "/connectors" },
              { label: c.name },
            ]}
          />
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <p className="kicker">{c.category} connector</p>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] ${STATUS_META[c.status].className}`}
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
              {STATUS_META[c.status].label}
            </span>
          </div>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Does Muse connect to{" "}
            <em className="font-medium italic text-accent">{c.name}?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            {c.tagline}
          </p>
          <a
            href={c.website}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex items-center gap-2.5"
          >
            <ConnectorIcon website={c.website} name={c.name} size={32} />
            <span className="text-sm font-semibold text-accent underline-offset-4 hover:underline">
              {c.name} official site ↗
            </span>
          </a>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-14">
            <Reveal>
              <section aria-labelledby="what-it-does">
                <SectionHeading id="what-it-does">What it does</SectionHeading>
                <ul className="mt-6 space-y-4">
                  {c.whatItDoes.map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className="mt-1 text-accent">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="how-to-connect">
                <SectionHeading id="how-to-connect">How to connect</SectionHeading>
                <ol className="mt-6 space-y-4">
                  {c.howToConnect.map((step, i) => (
                    <li key={i} className="flex gap-4 leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-raised font-mono text-sm font-bold"
                      >
                        {i + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="example-tasks">
                <SectionHeading id="example-tasks">Example tasks</SectionHeading>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {c.exampleTasks.map((task, i) => (
                    <li
                      key={i}
                      className="rounded-2xl border border-line bg-surface p-5 leading-relaxed"
                    >
                      <span aria-hidden="true" className="mr-2 text-accent">→</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="example-prompts">
                <SectionHeading id="example-prompts">Example prompts</SectionHeading>
                <p className="mt-3 leading-relaxed text-muted">
                  Copy one into Muse and adapt it to your situation.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {c.examplePrompts.map((p, i) => (
                    <article
                      key={i}
                      className="flex min-h-[220px] flex-col rounded-2xl border border-line bg-surface p-6"
                    >
                      <h3 className="text-[1.1rem] font-bold leading-snug">
                        {p.title}
                      </h3>
                      <p className="mb-6 mt-2 text-[0.95rem] text-muted">
                        {p.prompt}
                      </p>
                      <CopyPromptButton text={p.prompt} />
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="limitations">
                <SectionHeading id="limitations">Limitations</SectionHeading>
                <ul className="mt-6 space-y-4">
                  {c.limitations.map((item, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-1 text-faint">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <p className="rounded-2xl border border-line bg-surface p-6 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
                Last verified {c.lastVerified} · Source:{" "}
                <a
                  href={c.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4"
                >
                  {c.sourceName}
                </a>
              </p>
            </Reveal>
          </div>

          <aside className="space-y-8 lg:pt-2">
            <Reveal>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  On this page
                </h2>
                <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                  {["What it does", "How to connect", "Example tasks", "Example prompts", "Limitations"].map(
                    (s) => (
                      <li key={s}>
                        <a
                          href={`#${s.toLowerCase().replace(/ /g, "-")}`}
                          className="text-muted hover:text-ink hover:underline underline-offset-4"
                        >
                          {s}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </Reveal>

            {c.guideSlug && (
              <Reveal>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    Related guide
                  </h2>
                  <Link
                    href={guideUrl(c.guideSlug)}
                    className="mt-3 block font-bold leading-snug hover:text-accent"
                  >
                    Read our full Muse on WhatsApp guide →
                  </Link>
                </div>
              </Reveal>
            )}

            {related.length > 0 && (
              <Reveal>
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                    More {c.category.toLowerCase()} connectors
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/connectors/${r.slug}`}
                          className="font-bold leading-snug hover:text-accent"
                        >
                          {r.name} →
                        </Link>
                        <p className="mt-1 text-sm text-muted">{r.tagline}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal>
              <Link
                href="/connectors"
                className="block rounded-2xl border border-line bg-surface p-6 font-bold hover:text-accent"
              >
                ← Back to all connectors
              </Link>
            </Reveal>
          </aside>
        </div>

        <Reveal>
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
