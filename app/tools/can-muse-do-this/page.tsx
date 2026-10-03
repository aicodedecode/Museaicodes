import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { TASKS } from "@/lib/can-do";
import Breadcrumbs from "@/components/Breadcrumbs";
import CanDoThis from "@/components/CanDoThis";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Can Muse Do This? 64 Tasks, Honest Verdicts (2026)",
  description:
    "Type any task — booking flights, summarizing email, writing code — and get an honest verdict on whether Muse AI can do it, what it needs, and the exact prompt to try.",
  keywords:
    "can muse do this, what can muse ai do, muse ai capabilities, muse ai tasks, muse ai limitations",
  alternates: { canonical: `${SITE.baseUrl}/tools/can-muse-do-this` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Can Muse Do This? 64 Tasks, Honest Verdicts",
    description:
      "Search 64 real tasks across travel, shopping, email, productivity, research, coding, social, and finance — and see exactly what Muse AI can and can't do.",
    url: `${SITE.baseUrl}/tools/can-muse-do-this`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Can Muse Do This? 64 Tasks, Honest Verdicts",
    description:
      "Search 64 real tasks and get an honest verdict on what Muse AI can do — plus the exact prompt to try.",
  },
};

const PAGE_URL = `${SITE.baseUrl}/tools/can-muse-do-this`;

export default function CanMuseDoThisPage() {
  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Can Muse Do This?",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: PAGE_URL,
    description:
      "Interactive checker: search 64 real-world tasks and get an honest verdict on whether Muse AI can do them, what setup each needs, and a copy-paste prompt to try.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Can Muse Do This? — graded tasks",
    numberOfItems: TASKS.length,
    itemListElement: TASKS.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.task,
    })),
  };

  return (
    <main id="main">
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Can Muse Do This?" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Can Muse{" "}
            <em className="font-medium italic text-accent">do this?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Short answer: <strong className="text-ink">yes</strong> for research,
            writing, coding help, trip planning, and shopping comparisons;{" "}
            <strong className="text-ink">it depends</strong> whenever a connected
            account, your approval, or your region is involved; and{" "}
            <strong className="text-ink">no</strong> for physical-world actions,
            accounts you never connected, unsolicited outreach, or guaranteed
            outcomes. Search {TASKS.length} graded tasks below — every card shows
            the verdict, what&rsquo;s needed, an honest caveat, and a prompt you
            can copy and try right now.
          </p>
        </Reveal>

        <div className="mt-10">
          <CanDoThis />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              How we grade every verdict
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Yes</strong> means Muse can genuinely
                do it today — browsing, research, drafting, coding help,
                reminders, voice, and connected accounts — with approval cards
                stopping consequential actions.
              </li>
              <li>
                <strong className="text-ink">Depends</strong> means it&rsquo;s
                possible with real setup: a connected mailbox, calendar, or
                brokerage, your explicit approval, or availability in your
                region. The card tells you exactly what&rsquo;s needed.
              </li>
              <li>
                <strong className="text-ink">No</strong> means Muse genuinely
                can&rsquo;t — physical-world actions, accounts you never
                connected, spam or unsolicited messages, and guaranteed
                outcomes like refunds or profits. A wrong &ldquo;yes&rdquo;
                destroys trust, so we grade strictly.
              </li>
              <li>
                Verdicts are based on Muse&rsquo;s documented capabilities as of{" "}
                <strong className="text-ink">September 2026</strong>; features
                vary by account and region, and Muse is currently available in
                the US and Canada.
              </li>
              <li>
                This is an independent guide — we are not affiliated with Meta.
                When in doubt, the Muse app itself is the authority on what your
                account can do.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 max-w-[760px]">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Keep learning
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Link
                href="/guides/what-is-muse-ai"
                className="rounded-[18px] border border-line bg-surface p-5 transition-colors duration-150 hover:border-accent"
              >
                <p className="font-display text-[1.15rem] font-bold tracking-tight">
                  What is Muse AI?
                </p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                  The plain-English explainer: what Muse is, where it lives, and
                  what makes it different.
                </p>
              </Link>
              <Link
                href="/guides/how-to-use-muse-ai"
                className="rounded-[18px] border border-line bg-surface p-5 transition-colors duration-150 hover:border-accent"
              >
                <p className="font-display text-[1.15rem] font-bold tracking-tight">
                  How to use Muse AI
                </p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                  Your first week, step by step: setup, connectors, voice, and
                  the workflows worth trying first.
                </p>
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
