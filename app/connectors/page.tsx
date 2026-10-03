import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { CONNECTORS, type ConnectorStatus } from "@/lib/connectors";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConnectorIcon from "@/components/ConnectorIcon";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Connectors: The Official Directory (2026) — 30 Verified",
  description:
    "The official-only Muse connector directory, verified against Meta's own channels: Facebook, Instagram, Threads, Gmail, Google Calendar, Spotify, Plaid, OpenTable, the full Shopify catalogue, Walmart, Best Buy, Sephora, and 17 more.",
  keywords:
    "muse ai connectors, does muse connect to gmail, muse ai google calendar, muse ai instagram integration, muse ai spotify, muse ai shopify, muse ai github, muse ai notion",
  alternates: { canonical: `${SITE.baseUrl}/connectors` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Connectors: The Official Directory",
    description:
      "30 connectors verified against Meta's own announcements — stamped and dated.",
    url: `${SITE.baseUrl}/connectors`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Connectors: The Official Directory",
    description:
      "30 connectors verified against Meta's own announcements — stamped and dated.",
  },
};

const STATUS_META: Record<
  ConnectorStatus,
  { label: string; className: string; blurb: string }
> = {
  live: {
    label: "Live",
    className: "border-moss text-moss",
    blurb: "Ships now — you can connect it today.",
  },
  announced: {
    label: "Announced",
    className: "border-accent text-accent",
    blurb: "Meta unveiled it, but there's no firm ship date yet.",
  },
  reported: {
    label: "Reported",
    className: "border-line text-muted",
    blurb: "Press-reported — availability varies by account.",
  },
};

function StatusPill({ status }: { status: ConnectorStatus }) {
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

export default function ConnectorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Muse AI Connector Directory",
    description:
      "A verified directory of the services the Muse personal AI agent connects to.",
    url: `${SITE.baseUrl}/connectors`,
    itemListElement: CONNECTORS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.baseUrl}/connectors/${c.slug}`,
      name: `${c.name} × Muse`,
      description: c.tagline,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Connectors" }]}
          />
          <p className="kicker mt-10">Connector directory</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Every service Muse{" "}
            <em className="font-medium italic text-accent">actually plugs into.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Readers ask us constantly: does Muse connect to Gmail? Spotify?
            Instagram? This directory answers it honestly — and only from
            Meta's own channels (the Help Center, the Meta Connect 2026
            recap, and announcements quoting Meta's AI leadership). Every
            entry is stamped with a verification date and marked live or
            announced. Anything Meta hasn't named officially doesn't make
            this page.
          </p>
        </Reveal>

        <Reveal>
          <aside
            aria-label="Short answer"
            className="mt-10 max-w-[720px] rounded-2xl border border-line bg-surface p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              Short answer
            </p>
            <p className="mt-3 leading-relaxed">
              As of September 29, 2026, Muse ships with live connectors for
              Facebook, Instagram, and Threads (linked via Accounts Center),
              Gmail, Google Calendar, OpenTable, Plaid, Spotify, Apple
              Health, Android SMS, and the entire Shopify catalogue — plus 18
              announced at Meta Connect 2026 rolling out now: Walmart, Best
              Buy, American Eagle, DICK'S Sporting Goods, Fanatics, Gap,
              Michael Kors, Sephora, Ulta, Wayfair, Shop Pay, PayPal,
              Instacart, Notion, Granola, GitHub, Box, and Expedia (coming
              soon). Everything is US and Canada only. Connect them in the
              Muse app under Settings → Connectors.
            </p>
          </aside>
        </Reveal>

        <Reveal>
          <section aria-labelledby="status-legend" className="mt-12">
            <h2 id="status-legend" className="sr-only">
              Status legend
            </h2>
            <ul className="flex flex-wrap gap-3">
              {(Object.keys(STATUS_META) as ConnectorStatus[]).map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-full border border-line bg-surface py-2 pl-2.5 pr-4"
                >
                  <StatusPill status={s} />
                  <span className="text-sm text-muted">{STATUS_META[s].blurb}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <section aria-labelledby="all-connectors" className="mt-14">
          <Reveal>
            <h2
              id="all-connectors"
              className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight"
            >
              All connectors
            </h2>
            <p className="mt-3 max-w-[640px] leading-relaxed text-muted">
              {CONNECTORS.length} verified entries. Tap any card for what it
              does, how to connect, example prompts, and its limitations.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONNECTORS.map((c, i) => (
              <Reveal key={c.slug} delay={Math.min(i, 5) * 60}>
                <div className="group flex h-full min-h-[230px] flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      {c.category}
                    </span>
                    <StatusPill status={c.status} />
                  </span>
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 flex items-center gap-3"
                  >
                    <ConnectorIcon website={c.website} name={c.name} />
                    <span className="font-display text-[1.35rem] font-bold leading-tight tracking-tight group-hover:text-accent">
                      {c.name}
                    </span>
                  </a>
                  <span className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                    {c.tagline}
                  </span>
                  <span className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                      Last verified {c.lastVerified}
                    </span>
                    <Link
                      href={`/connectors/${c.slug}`}
                      className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent underline-offset-4 hover:underline"
                    >
                      Guide →
                    </Link>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section
            aria-labelledby="missing-note"
            className="mt-16 max-w-[720px] rounded-2xl border border-line bg-surface p-6"
          >
            <h2
              id="missing-note"
              className="font-display text-[1.35rem] font-bold tracking-tight"
            >
              A note on what's missing
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              This directory only lists connectors Meta has named in its own
              channels — so Outlook and Messenger are out (press-sourced, not
              Meta-confirmed), and WhatsApp isn't a connector at all: Meta's
              own Connect 2026 recap calls it a Muse <em>surface</em> (the
              app, WhatsApp, web, and Mac are where you reach Muse), not
              something you connect. Where no built-in connector exists, Muse
              can wire up a custom one from a public API with credentials you
              provide — or drive the site in its own browser.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
