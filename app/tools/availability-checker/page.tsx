import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvailabilityChecker from "@/components/AvailabilityChecker";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Is Muse AI Available in Your Country? (2026)",
  description:
    "Check whether Muse AI is available in your country in 2026 — a searchable availability checker covering Muse's US and Canada launch and every other region.",
  keywords:
    "is muse ai available in my country, muse ai availability checker, muse ai region, muse ai country list, muse ai release date",
  alternates: { canonical: `${SITE.baseUrl}/tools/availability-checker` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Is Muse AI Available in Your Country?",
    description:
      "Search the country list to check whether Muse AI is available where you are.",
    url: `${SITE.baseUrl}/tools/availability-checker`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Is Muse AI Available in Your Country?",
    description:
      "Search the country list to check whether Muse AI is available where you are.",
  },
};

export default function AvailabilityCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Availability Checker",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/availability-checker`,
    description:
      "Interactive checker that tells you whether Muse AI is available in your country, with honest next steps for supported and unsupported regions.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the Availability Checker do?",
      answer:
        "It tells you whether Muse AI is available in your country. You search the built-in country list and pick yours, and the checker returns a plain verdict: “Available” for the United States and Canada, “Not yet” everywhere else — each with honest next steps for that result.",
    },
    {
      question: "Is the Availability Checker free?",
      answer:
        "Yes, it is completely free — no payment, no sign-in, and no limit on how many countries you can check. The full country list is bundled with the page itself, so results appear instantly with no waiting and no external lookups.",
    },
    {
      question: "Do I need an account or sign in?",
      answer:
        "No. The checker needs no account, no email, and no personal information — you just search and pick a country. Even the “Watch this launch” button only stores your pick in your browser’s local storage; nothing is ever sent to a server.",
    },
    {
      question: "How accurate is the availability information?",
      answer:
        "The checker reflects Meta’s own statements: as of September 2026, Muse operates only in the US and Canada, and Meta has announced no expansion dates. It uses a static country list maintained with the site’s availability guide rather than a live feed, so always treat Meta’s own channels as the final word.",
    },
    {
      question: "I’m outside the US and Canada — what should I do?",
      answer:
        "Wait for the official rollout. Meta publishes no expansion timeline, so follow the /news page for launch announcements and read the availability guide to be ready on day one. Do not use VPNs or other workarounds — bypassing region checks violates Meta’s terms and can get your account banned.",
    },
    {
      question:
        "Why does Mexico show “Not yet” when some press says it’s available?",
      answer:
        "A few press outlets report Muse is available in Mexico, but the site couldn’t find any direct confirmation from Meta, so the checker lists it as unconfirmed for now. This page updates the moment Meta says otherwise — press reports alone aren’t enough to flip a region to “Available”.",
    },
  ];

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
              { label: "Availability checker" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Can I use Muse in{" "}
            <em className="font-medium italic text-accent">my country?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Short answer: as of September 2026, Muse is available only in the
            United States and Canada. Pick your country below to check. If
            you&rsquo;re anywhere else, Meta has announced no launch dates —
            waiting for an official rollout is the only legitimate option, and
            this checker never suggests workarounds.
          </p>
        </Reveal>

        <div className="mt-10">
          <AvailabilityChecker />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Availability is{" "}
                <strong className="text-ink">US and Canada only</strong> as of
                September 2026. Meta&rsquo;s help centre says access is
                limited to countries where Muse operates, and publishes no
                expansion timeline.
              </li>
              <li>
                An <strong className="text-ink">invite code</strong> doesn&rsquo;t
                change country gating — it only affects whether your account
                gets in, not where.
              </li>
              <li>
                For the full picture, including why demand-heavy regions like
                India, the UK, and Pakistan are still waiting, read the{" "}
                <Link
                  href="/guides/muse-ai-availability"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  availability guide →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section
            aria-label="How this tool works"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Search a country, get a plain verdict
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                This checker answers one question: is Muse AI available in
                your country? Type into the search box and pick your country
                from the full list of countries and territories. The list is
                bundled with the page itself — no API calls, no waiting — so
                results appear the moment you select.
              </p>
              <p>
                The verdict card gives a plain answer with honest next steps.
                If you are in the United States or Canada — the only two
                regions where Muse operates as of September 2026 — you get an
                “Available” card with links to the official apps, the
                invite-code board, and the Muse tutorial. Anywhere else gets a
                “Not yet” card: Meta has announced no launch dates, and the
                card warns that VPNs and other workarounds violate
                Meta&rsquo;s terms and can get an account banned.
              </p>
              <p>
                On a “Not yet” result, the “Watch this launch” button saves
                your country in your browser&rsquo;s local storage —
                device-only, no email, no account, no spam — and a banner
                reminds you what you&rsquo;re watching until you stop it.
                Mexico is called out explicitly: some press outlets report
                availability there, but Meta has not confirmed it, so the
                checker lists it as unconfirmed.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Country search</strong> — a
                combobox over the full static country list; typing filters it,
                arrow keys move through results, Enter selects, Escape closes,
                and clicking outside dismisses the dropdown.
              </li>
              <li>
                <strong className="text-ink">Verdict card</strong> — the result
                panel: a green “Available” badge for the US and Canada, an
                amber “Not yet” badge everywhere else, with a headline
                stating the verdict for the selected country.
              </li>
              <li>
                <strong className="text-ink">Available-state links</strong> —
                on an “Available” result: direct links to the official
                Android, iPhone, and web apps, the invite-code board, and the
                Muse tutorial.
              </li>
              <li>
                <strong className="text-ink">Not-yet-state links</strong> — on
                a “Not yet” result: links to /news for rollout announcements,
                the full availability guide, and the Muse tutorial — plus the
                no-VPN warning.
              </li>
              <li>
                <strong className="text-ink">Mexico note</strong> — a callout
                on Mexico&rsquo;s result explaining that press reports of
                availability are unconfirmed by Meta, so the checker treats it
                as not yet available until Meta says otherwise.
              </li>
              <li>
                <strong className="text-ink">Watch this launch</strong> — the
                button on “Not yet” results that saves the selected country to
                your browser&rsquo;s local storage; it is disabled while
                you&rsquo;re already watching that country.
              </li>
              <li>
                <strong className="text-ink">Watching banner</strong> — the
                pinned reminder of the country you&rsquo;re watching, with a
                “Stop watching” button to remove it; saved on this device
                only, with no email and no account.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section
            aria-label="Frequently asked questions"
            className="mt-16 max-w-[760px]"
          >
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Availability questions, answered
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
