import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConnectorWizard from "@/components/ConnectorWizard";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Muse Connector Setup Wizard: Connect Gmail, Calendar & More (2026)",
  description:
    "A guided Muse connector setup: pick your apps and goal, get an ordered setup checklist with the real connection steps and three copy-paste first prompts — all from our verified connector directory.",
  keywords:
    "muse ai connector setup, how to connect gmail to muse ai, muse ai connectors guide, muse ai setup wizard, connect apps to muse",
  alternates: { canonical: `${SITE.baseUrl}/tools/connector-wizard` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse Connector Setup Wizard: Connect Gmail, Calendar & More",
    description:
      "Pick your apps and goal — get a guided setup plan with real connection steps and copy-paste first prompts.",
    url: `${SITE.baseUrl}/tools/connector-wizard`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse Connector Setup Wizard: Connect Gmail, Calendar & More",
    description:
      "Pick your apps and goal — get a guided setup plan with real connection steps and copy-paste first prompts.",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "What exactly does the wizard give me at the end?",
    answer:
      "An ordered setup checklist with the documented connection steps for each app you picked, plus three copy-paste starter prompts tailored to your goal. Each connector card also links to its full connector guide on this site if you want more detail.",
  },
  {
    question: "Is the wizard free? Do I need an account?",
    answer:
      "Yes, it is free, and no account or sign-in is needed. The wizard runs entirely in your browser: your app picks and goal are kept only while you use the tool, nothing is sent anywhere, and closing the page clears everything.",
  },
  {
    question: "Where do the setup steps and prompts come from?",
    answer:
      "They are copied verbatim from this site's verified connector directory, last checked September 2026. Nothing is invented, and if Meta has not published official connection steps for a connector, the directory entry says so instead of guessing or fabricating steps.",
  },
  {
    question: "How are the three starter prompts chosen?",
    answer:
      "Prompts are drawn only from each connector's documented example prompts. Connectors matching your goal contribute their prompts first, and a connector with no goal fit falls back to its own first documented prompt. You always get at most three, each with a one-click copy button.",
  },
  {
    question: "Do connectors work for everyone?",
    answer:
      "Connectors are currently available where Muse is available (the US and Canada), and individual connector availability varies by account. For safety, start with read-only permissions on any connector that reads your data, and widen them only once you trust the setup.",
  },
  {
    question: "Can I redo the wizard or change my answers?",
    answer:
      "Yes. The final screen offers \u201cStart over\u201d to reset everything or \u201cChange my goal\u201d to keep your app picks and re-pick a goal, which rebuilds your plan and starter prompts around the new goal. Since nothing is saved, every run starts fresh.",
  },
];

export default function ConnectorWizardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse Connector Setup Wizard",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/connector-wizard`,
    description:
      "Interactive wizard that builds a personalized Muse connector setup plan — documented connection steps and copy-paste first prompts — from the site's verified connector directory.",
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
              { label: "Connector wizard" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Set up Muse with{" "}
            <em className="font-medium italic text-accent">your apps.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Answer two quick questions — which apps you use and what you want
            Muse to do — and this wizard builds your personalized setup plan:
            the exact connection steps for each app plus three copy-paste
            prompts to try first. Every step and prompt comes from our verified
            connector directory, checked September 2026.
          </p>
        </Reveal>

        <div className="mt-10">
          <ConnectorWizard />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Every setup step and prompt in this wizard is copied verbatim
                from our{" "}
                <Link
                  href="/connectors"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  verified connector directory
                </Link>{" "}
                — nothing is invented. If Meta hasn&rsquo;t published steps for
                a connector, the entry says so.
              </li>
              <li>
                Connectors are currently available where Muse is available (US
                and Canada), and availability of individual connectors varies by
                account. For connectors you read with, start with read-only
                permissions and widen them only when you trust the setup.
              </li>
              <li>
                New to Muse entirely? Start with{" "}
                <Link
                  href="/guides/how-to-use-muse-ai"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  how to use Muse AI →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              A setup plan built from verified connector docs
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The wizard is a three-step guided flow: pick the apps you want
                Muse to connect to, pick what you want to do first, and get a
                personalized setup plan. Every app card comes from this
                site&rsquo;s verified connector directory, with its category
                badge and one-line tagline, so you are choosing from
                documented, real connectors — not guesses.
              </p>
              <p>
                Step two narrows your plan with one of four goals: tame my
                inbox, plan my week, create content, or stay on top of
                messages. The final screen then lists the documented
                connection steps for each app you picked, plus three
                copy-paste prompts matched to your goal. Every step and prompt
                is copied verbatim from the directory — if Meta hasn&rsquo;t
                published steps for something, the entry says so.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Progress indicator</strong> — shows
                &ldquo;Step X of 3&rdquo; with the three labels (Pick your
                apps, Pick your goal, Your setup plan) so you always know where
                you are.
              </li>
              <li>
                <strong className="text-ink">App checkboxes</strong> — one card
                per connector with its name, category badge, and tagline. A
                live counter shows how many you picked, and Continue stays
                disabled until you pick at least one.
              </li>
              <li>
                <strong className="text-ink">Goal cards</strong> — four
                radio-style goals with blurbs. Your choice steers which
                connectors&rsquo; documented prompts surface first — Gmail and
                Google Workspace for inbox work, Google Calendar for week
                planning, Instagram/Threads/Facebook for content, and
                Android SMS for messages.
              </li>
              <li>
                <strong className="text-ink">Setup checklist</strong> — a
                numbered ordered list of each chosen connector&rsquo;s
                documented connection steps, each card linking to its full
                connector guide on this site.
              </li>
              <li>
                <strong className="text-ink">First 3 things to try</strong> —
                prompt cards showing the connector name, a prompt title, and
                the quoted prompt, each with a copy button. They come only
                from documented example prompts — at most three.
              </li>
              <li>
                <strong className="text-ink">Start over / Change my goal</strong> —
                reset everything, or keep your app picks and re-pick a goal to
                rebuild the plan and prompts.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Connector wizard questions, answered
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
