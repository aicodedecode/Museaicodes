import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { TASKS } from "@/lib/can-do";
import Breadcrumbs from "@/components/Breadcrumbs";
import CanDoThis from "@/components/CanDoThis";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

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

const faqs: { question: string; answer: string }[] = [
  {
    question: "What does a verdict on a task card tell me?",
    answer:
      "It tells you whether Muse AI can genuinely do the task today. \u201cYes\u201d means it can with features like browsing, research, or connected accounts. \u201cDepends\u201d means it needs real setup \u2014 a connected account, your approval, or availability in your region. \u201cNo\u201d means it genuinely cannot.",
  },
  {
    question: "Is this checker free? Do I need an account?",
    answer:
      "Yes, it is free, and no account or sign-in is needed. All 64 tasks live in the page's data, filtering happens in your browser, and nothing you type is stored, tracked, or sent anywhere \u2014 close the page and it is all gone.",
  },
  {
    question: "How are the verdicts decided?",
    answer:
      "Each task is graded against Muse's documented capabilities as of September 2026, and graded strictly: a wrong \u201cyes\u201d destroys trust, so borderline cases land on \u201cdepends\u201d or \u201cno\u201d. This is an independent guide, not affiliated with Meta, and the Muse app itself is the authority on what your account can do.",
  },
  {
    question: "What is on each task card?",
    answer:
      "Every card shows the verdict badge and category, what Muse can do for that task, what is needed (for example a connected mailbox), an honest caveat, and an example prompt with a one-click copy button. A \u201cLearn more\u201d link takes you to the related guide.",
  },
  {
    question: "How current are the verdicts?",
    answer:
      "They reflect Muse's documented capabilities as of September 2026. Features vary by account and region, and Muse is currently available in the US and Canada, so if a capability changes after that date, the linked guide is the most up-to-date source.",
  },
  {
    question: "My task is not in the list. What now?",
    answer:
      "Try a shorter search word \u2014 \u201cflight\u201d, \u201cemail\u201d, \u201cbudget\u201d \u2014 or browse one of the eight category filters. A missing task just means it has not been graded yet; the list covers 64 tasks today and grows as new verdicts are written.",
  },
];

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
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={faqJsonLd} />
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

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Search 64 tasks, get an honest verdict
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                Type any task — booking flights, summarizing email, writing
                code — into the search box and the checker filters 64 graded
                tasks in real time. Each card shows one of three verdicts:
                yes, depends, or no, graded strictly against Muse&rsquo;s
                documented capabilities as of September 2026. The results line
                also keeps a live tally, like &ldquo;41 yes · 15 depends ·
                8 no.&rdquo;
              </p>
              <p>
                The verdict is the start, not the end: every card adds what
                the task needs (for example a connected mailbox or your
                approval), an honest caveat, and a copy-ready example prompt
                you can paste into Muse right now. Category pills, six
                popular quick picks, and a &ldquo;Surprise me&rdquo; shuffle
                help you browse when you don&rsquo;t know what to search for.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Search box</strong> — filters
                tasks across the task text, descriptions, example prompts,
                and notes; a clear button wipes the query instantly.
              </li>
              <li>
                <strong className="text-ink">Category pills</strong> — All,
                Travel, Shopping, Email, Productivity, Research, Coding,
                Social, and Finance, each showing its task count.
              </li>
              <li>
                <strong className="text-ink">Popular quick picks</strong> —
                six preset searches (like &ldquo;Book a flight for
                me&rdquo;) that jump straight to a graded task.
              </li>
              <li>
                <strong className="text-ink">Surprise me</strong> — picks a
                random task, scrolls to it, and pulses its card so you can
                spot it.
              </li>
              <li>
                <strong className="text-ink">Verdict badges</strong> — Yes
                (genuinely doable today), Depends (needs setup: a connected
                account, your approval, or your region), or No (physical-world
                actions, unconnected accounts, spam, guaranteed outcomes).
              </li>
              <li>
                <strong className="text-ink">Task cards</strong> — verdict,
                category, what Muse can do, a &ldquo;Needs&rdquo; line with a
                plug icon, an example prompt with a copy button, an honest
                note, and a Learn more link to the related guide.
              </li>
              <li>
                <strong className="text-ink">Verdict tally</strong> — the
                results line shows how many of the currently filtered tasks
                are yes, depends, or no.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Verdict checker questions, answered
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
