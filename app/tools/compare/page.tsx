import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompareTool from "@/components/CompareTool";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Muse vs Alternatives: Cost & Time Comparator (2026)",
  description:
    "Compare Muse with up to two alternatives using YOUR numbers: the monthly price you pay, hours saved per week, and what your time is worth.",
  keywords:
    "muse ai vs alternatives, muse ai cost comparison, is muse ai worth it, ai assistant value calculator",
  alternates: { canonical: `${SITE.baseUrl}/tools/compare` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse vs Alternatives: Cost & Time Comparator",
    description:
      "Is an AI assistant worth what you pay? Compare using your own numbers.",
    url: `${SITE.baseUrl}/tools/compare`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse vs Alternatives: Cost & Time Comparator",
    description:
      "Is an AI assistant worth what you pay? Compare using your own numbers.",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "What does this comparator actually calculate?",
    answer:
      "For each option it multiplies your weekly hours saved by \u22484.33 weeks and your hourly value, subtracts the monthly price, and ranks the options by net value. It is a strict arithmetic check on your own inputs, not a review of features, quality, or privacy trade-offs.",
  },
  {
    question: "Is the comparator free? Do I need an account?",
    answer:
      "Yes, it is completely free, and no account or sign-in is needed. Everything runs in your browser: nothing is uploaded, stored, or tracked, and your numbers exist only while the page is open. Close the tab and they are gone for good.",
  },
  {
    question: "Where do the prices come from?",
    answer:
      "From you. The page ships with zero prices baked in because plans, promotions, and regional pricing change constantly. Every price in the results table is one you typed, so the comparison only ever says what your own inputs say \u2014 nothing is skewed by stale or sponsored data.",
  },
  {
    question: "How should I estimate \u201chours saved\u201d honestly?",
    answer:
      "Be conservative: count only time you genuinely would not have spent another way, not the whole task duration. Track a week of real usage first, then enter that weekly average. Inflated hours are the main reason these comparisons lie, so underestimate rather than round up.",
  },
  {
    question: "Does the verdict capture quality, features, or privacy?",
    answer:
      "No \u2014 it compares money value only. It cannot weigh differences in answer quality, which features you actually use, or privacy trade-offs between options. Treat the verdict as one input to your decision, not the whole decision, and read the honest notes for what the math leaves out.",
  },
  {
    question: "Does this tool ever go out of date?",
    answer:
      "The math never goes stale because it runs on your numbers. The only thing that ages is the prices you entered: if a plan price changes, just retype the new price and the ranking recalculates instantly, with no data on our side to update.",
  },
];

export default function CompareToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse vs Alternatives Comparator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/compare`,
    description:
      "Interactive comparator: evaluate Muse against alternatives using user-entered prices, weekly hours saved, and hourly value.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Cost comparator" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Is Muse worth what{" "}
            <em className="font-medium italic text-accent">you pay?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Line up Muse against up to two alternatives with your own numbers —
            the price you actually pay, the hours you actually save, and what
            your time is worth. Short answer: an assistant is worth it when
            the time it gives back costs more than the subscription.
          </p>
        </Reveal>

        <div className="mt-10">
          <CompareTool />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Every price here is{" "}
                <strong className="text-ink">entered by you</strong> — this
                page ships with zero prices baked in, because plans and
                promotions change and vary by region.
              </li>
              <li>
                &ldquo;Hours saved&rdquo; is the hard number to get right. Be
                conservative: count only time you genuinely wouldn&rsquo;t have
                spent another way.
              </li>
              <li>
                This compares{" "}
                <strong className="text-ink">money value only</strong> — it
                doesn&rsquo;t capture quality differences, features you
                actually use, or privacy trade-offs.
              </li>
              <li>
                <Link
                  href="/compare"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Read our Muse vs ChatGPT vs Claude comparison →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Turn hours saved into a number you can compare
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The comparator gives you three side-by-side columns: Muse and up
                to two alternatives you name yourself. Fill each column with
                your own numbers — the price you actually pay, a realistic
                weekly hours-saved estimate, and what an hour of your time is
                worth — and it ranks the options by net monthly value.
              </p>
              <p>
                It is for anyone weighing an AI-assistant subscription against
                the clock it gives back. The tool keeps the math visible: each
                month&rsquo;s time value is your weekly hours saved times
                &asymp;4.33 weeks times your hourly value, minus the price. The
                first column comes pre-labeled &ldquo;Muse&rdquo;; every price
                still has to come from you, because plans change by region and
                over time.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Option name field</strong> —
                labels each column (the first is pre-filled with
                &ldquo;Muse&rdquo;). A column needs a name before it can appear
                in the ranking.
              </li>
              <li>
                <strong className="text-ink">Monthly price (your currency)</strong> —
                what you actually pay per month for that option. Leave it blank
                and the column stays unranked.
              </li>
              <li>
                <strong className="text-ink">Hours saved per week</strong> —
                your conservative estimate of weekly time the assistant gives
                back. This is the input that matters most, so keep it honest.
              </li>
              <li>
                <strong className="text-ink">Your hourly value (same currency)</strong> —
                what one hour of your time is worth to you, used to convert
                saved hours into money.
              </li>
              <li>
                <strong className="text-ink">Results table</strong> — shows
                Monthly cost, Monthly time value, and Net value per option,
                recalculated as you type.
              </li>
              <li>
                <strong className="text-ink">Verdict chips</strong> —
                &ldquo;Pays for itself&rdquo; for a positive net,
                &ldquo;Costs more than it saves&rdquo; for a negative net, and
                &ldquo;Breaks even&rdquo; for zero. The top-ranked option also
                gets a &ldquo;Best value&rdquo; tag.
              </li>
              <li>
                <strong className="text-ink">Bottom line panel</strong> — a
                plain-language summary: whether the best option pays for itself
                and by roughly how much, plus the formula it used.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Comparator questions, answered
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
