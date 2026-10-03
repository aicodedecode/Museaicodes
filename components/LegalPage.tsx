import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import { SITE } from "@/lib/site";

interface LegalPageProps {
  /** e.g. "privacy" — used for canonical URL */
  slug: string;
  /** mono kicker above the title, e.g. "Legal · 01" */
  kicker: string;
  title: string;
  deck: string;
  children: React.ReactNode;
}

/** Shared shell for legal/info pages: breadcrumbs, kicker, display headline, deck, prose body. */
export default function LegalPage({ slug, kicker, title, deck, children }: LegalPageProps) {
  const canonical = `${SITE.baseUrl}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: deck,
    url: canonical,
    inLanguage: "en",
    dateModified: "2026-09-26",
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.baseUrl,
    },
    publisher: { "@type": "Organization", name: "museaicodes" },
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
          <p className="kicker mt-10">{kicker}</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.05] tracking-tight">
            {title}
          </h1>
          <p className="mt-5 max-w-[640px] text-[1.1rem] leading-relaxed text-muted">
            {deck}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Updated {SITE.updated}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="prose-muse mt-10">{children}</div>
        </Reveal>
      </div>
    </main>
  );
}
