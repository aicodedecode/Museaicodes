import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { INTENT_PAGES_1, type IntentPage } from "@/lib/intent-pages-1";
import { INTENT_PAGES_2 } from "@/lib/intent-pages-2";
import { getGuide } from "@/lib/guides";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import GuideCard from "@/components/GuideCard";
import IntentPromptTiles from "@/components/IntentPromptTiles";
import JsonLd from "@/components/JsonLd";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";

const ALL_PAGES: IntentPage[] = [...INTENT_PAGES_1, ...INTENT_PAGES_2];

function getPage(slug: string): IntentPage | undefined {
  return ALL_PAGES.find((p) => p.slug === slug);
}

/** Audience noun used in the kicker ("Muse AI for …"). */
const AUDIENCE: Record<string, string> = {
  students: "students",
  developers: "developers",
  "real-estate": "real estate",
  travel: "travelers",
  email: "email",
  instagram: "Instagram creators",
  research: "researchers",
  "build-website": "building a website",
  "find-jobs": "job seekers",
  "manage-gmail": "managing Gmail",
};

export function generateStaticParams() {
  return ALL_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getPage(params.slug);
  if (!page) return {};
  const canonical = `${SITE.baseUrl}/for/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical },
    openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
      type: "article",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: SITE.name,
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-tight">
      {children}
    </h2>
  );
}

export default function IntentPageView({ params }: { params: { slug: string } }) {
  const page = getPage(params.slug);
  if (!page) notFound();

  const kicker = `Muse AI for ${AUDIENCE[page.slug] ?? page.slug.replace(/-/g, " ")}`;
  const canonical = `${SITE.baseUrl}/for/${page.slug}`;
  const related = page.relatedGuides
    .map((slug) => getGuide(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
      <JsonLd data={faqJsonLd} />

      <Reveal>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "For", href: "/use-cases" },
            { label: page.title },
          ]}
        />
      </Reveal>

      {/* Hero */}
      <header className="mt-8 max-w-[46rem]">
        <Reveal>
          <p className="kicker">{kicker}</p>
          <h1 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
            {page.title}
          </h1>
        </Reveal>
      </header>

      {/* AEO short-answer callout */}
      <Reveal>
        <div className="mt-8 max-w-[46rem] rounded-2xl border border-line bg-surface p-6 md:p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            The short answer
          </p>
          <p className="mt-3 text-[1.05rem] leading-relaxed">{page.shortAnswer}</p>
        </div>
      </Reveal>

      {/* Intro */}
      <div className="mt-10 max-w-[46rem] space-y-5">
        {page.intro.map((para, i) => (
          <Reveal key={i} delay={i * 60}>
            <p
              className={
                i === 0
                  ? "text-[1.15rem] leading-relaxed"
                  : "leading-relaxed text-muted"
              }
            >
              {para}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Capabilities */}
      <section className="mt-16 md:mt-20" aria-labelledby="how-muse-helps">
        <Reveal>
          <SectionHeading>
            <span id="how-muse-helps">How Muse helps</span>
          </SectionHeading>
          <p className="mt-3 max-w-[46rem] leading-relaxed text-muted">
            Real things Muse can do for you — grounded in its actual abilities:
            task delegation with approval cards, web browsing, research and
            document creation, reminders, voice mode, and Mac computer use.
          </p>
        </Reveal>
        <dl className="mt-8 max-w-[52rem]">
          {page.capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={Math.min(i, 4) * 50}>
              <div className="border-t border-line py-6 last:border-b md:py-7">
                <dt className="text-[1.15rem] font-bold tracking-tight">
                  {cap.title}
                </dt>
                <dd className="mt-2 max-w-[44rem] leading-relaxed text-muted">
                  {cap.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Prompts */}
      <section className="mt-16 md:mt-20" aria-labelledby="try-these-prompts">
        <Reveal>
          <SectionHeading>
            <span id="try-these-prompts">Try these prompts</span>
          </SectionHeading>
          <p className="mt-3 max-w-[46rem] leading-relaxed text-muted">
            Copy a prompt, replace the{" "}
            <span className="font-mono text-[0.9em]">[bracketed parts]</span>{" "}
            with your details, and paste it into Muse.
          </p>
        </Reveal>
        <div className="mt-8">
          <IntentPromptTiles prompts={page.prompts} />
        </div>
      </section>

      {/* Limitations */}
      <section className="mt-16 md:mt-20" aria-labelledby="honest-limitations">
        <Reveal>
          <SectionHeading>
            <span id="honest-limitations">Honest limitations</span>
          </SectionHeading>
          <p className="mt-3 max-w-[46rem] leading-relaxed text-muted">
            What Muse can&rsquo;t do — or where you should stay in the loop.
          </p>
        </Reveal>
        <Reveal>
          <ul className="mt-8 max-w-[46rem] space-y-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
            {page.limitations.map((limit) => (
              <li key={limit} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="mt-0.5 shrink-0 text-accent">
                  —
                </span>
                <span className="text-muted">{limit}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mt-16 md:mt-20" aria-labelledby="faq">
        <Reveal>
          <SectionHeading>
            <span id="faq">Frequently asked questions</span>
          </SectionHeading>
        </Reveal>
        <div className="mt-6">
          <FaqAccordion faqs={page.faqs} />
        </div>
      </section>

      {/* Related guides */}
      {related.length > 0 && (
        <section className="mt-16 md:mt-20" aria-labelledby="related-guides">
          <Reveal>
            <SectionHeading>
              <span id="related-guides">Related guides</span>
            </SectionHeading>
            <p className="mt-3 max-w-[46rem] leading-relaxed text-muted">
              Go deeper with the full guides on getting started and getting the
              most out of Muse.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((guide, i) => (
              <Reveal key={guide.slug} delay={Math.min(i, 3) * 60}>
                <GuideCard guide={guide} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <Reveal>
        <p className="mt-16 text-muted">
          <Link
            href="/use-cases"
            className="font-bold text-accent underline-offset-4 hover:underline"
          >
            ← Back to all Muse AI use cases
          </Link>
        </p>
      </Reveal>

      {/* Newsletter */}
      <div className="mt-12 max-w-[46rem]">
        <NewsletterSignup />
      </div>
    </main>
  );
}
