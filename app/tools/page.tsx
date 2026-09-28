import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import {
  INTERACTIVE_TOOLS,
  INTEGRATIONS,
  type Integration,
} from "@/lib/tools";
import { guideUrl } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Tools: Estimators, Quiz, Prompt Generator & Integrations (2026)",
  description:
    "Interactive Muse AI tools — token calculator, runway estimator, readiness quiz, prompt builder — plus an honest directory of the services Muse works with: Walmart, Best Buy, Sephora, OpenTable, Expedia, Mac computer use, and more.",
  keywords:
    "muse ai tools, muse ai token calculator, muse ai prompt builder, muse ai integrations, muse ai shopping walmart, muse ai opentable",
  alternates: { canonical: `${SITE.baseUrl}/tools` },
  openGraph: {
    type: "website",
    title: "Muse AI Tools: Estimators, Quiz, Prompt Generator & Integrations",
    description:
      "Interactive tools for planning and prompting Muse, plus an honest, evidence-checked directory of the services it works with.",
    url: `${SITE.baseUrl}/tools`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Tools: Estimators, Quiz, Prompt Generator & Integrations",
    description:
      "Interactive tools for planning and prompting Muse, plus an honest directory of the services it works with.",
  },
};

const STATUS_META: Record<Integration["status"], { label: string; className: string }> = {
  live: { label: "Live", className: "border-moss text-moss" },
  announced: { label: "Announced", className: "border-accent text-accent" },
  reported: { label: "Reported", className: "border-line text-muted" },
};

function StatusPill({ status }: { status: Integration["status"] }) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.1em] ${meta.className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {meta.label}
    </span>
  );
}

const GUIDE_LINKS = [
  { slug: "how-to-use-muse-ai", label: "How to use Muse AI" },
  { slug: "muse-ai-shopping", label: "Shopping with Muse: Walmart, Best Buy & agent checkout" },
  { slug: "muse-ai-prompt-tips", label: "Muse prompt tips that actually work" },
];

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI Tools & Integrations",
    description:
      "Interactive Muse AI tools and an honest directory of the services Muse works with.",
    url: `${SITE.baseUrl}/tools`,
    itemListElement: [
      ...INTERACTIVE_TOOLS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE.baseUrl}${t.href}`,
        name: t.title,
        description: t.deck,
      })),
      ...INTEGRATIONS.map((g, i) => ({
        "@type": "ListItem",
        position: INTERACTIVE_TOOLS.length + i + 1,
        url: `${SITE.baseUrl}${guideUrl(g.guideSlug)}`,
        name: g.name,
        description: g.description,
      })),
    ],
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools" }]} />
          <p className="kicker mt-10">Tool hub</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Tools that put Muse{" "}
            <em className="font-medium italic text-accent">to work.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Muse shops partner retailers, books tables through OpenTable, and
            operates your Mac — and this hub gathers the interactive tools
            that help you plan, compare, and prompt it well: token
            estimators, a readiness quiz, a prompt builder, and a share-card
            generator, alongside an honest directory of the services Muse
            works with.
          </p>
        </Reveal>

        <Reveal>
          <section aria-labelledby="interactive-tools" className="mt-16">
            <h2
              id="interactive-tools"
              className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight"
            >
              Interactive tools
            </h2>
            <p className="mt-3 max-w-[640px] leading-relaxed text-muted">
              Free, run entirely in your browser, no account needed.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {INTERACTIVE_TOOLS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      {t.tag}
                    </span>
                    {t.badge && (
                      <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-bg">
                        {t.badge}
                      </span>
                    )}
                  </span>
                  <span className="font-display mt-3 text-[1.35rem] font-bold leading-tight tracking-tight group-hover:text-accent">
                    {t.title}
                  </span>
                  <span className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {t.deck}
                  </span>
                  <span className="mt-auto pt-5 text-sm font-bold text-muted">
                    Open tool <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="works-with" className="mt-16">
            <h2
              id="works-with"
              className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight"
            >
              Works with Muse
            </h2>
            <p className="mt-3 max-w-[640px] leading-relaxed text-muted">
              Only what we can verify — every entry links to the guide that
              documents it. <strong className="text-ink">Live</strong> means
              confirmed working now; <strong className="text-ink">Announced</strong>{" "}
              means Meta unveiled it and dates may slip;{" "}
              <strong className="text-ink">Reported</strong> means
              press-reported, availability varies. All reflect US &amp; Canada
              availability.
            </p>
            <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
              {INTEGRATIONS.map((g) => (
                <li key={g.name}>
                  <Link
                    href={guideUrl(g.guideSlug)}
                    className="group flex flex-col gap-2 p-5 transition-colors hover:bg-raised sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:p-6"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-bold leading-snug">
                          {g.name}
                        </span>
                        <StatusPill status={g.status} />
                      </div>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
                        {g.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-muted group-hover:text-accent">
                      Guide <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-16 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Keep learning
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Tools work best with technique. These guides cover the
              workflows, shopping flows, and prompting habits behind the
              tools above.
            </p>
            <ul className="mt-5 space-y-3">
              {GUIDE_LINKS.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={guideUrl(g.slug)}
                    className="font-bold text-accent underline-offset-4 hover:underline"
                  >
                    {g.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
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
