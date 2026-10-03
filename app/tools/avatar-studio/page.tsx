import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvatarStudio from "@/components/AvatarStudio";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "AI Avatar Name Generator: 100 Names + 100 Characters (2026)",
  description:
    "Can't think of a name for your AI assistant? Shuffle through 100 original avatar names and 100 character presets for Muse AI, Grok Bot, and ChatGPT Dots — then copy your combo.",
  keywords:
    "ai avatar names, ai assistant names, cute ai names, cool robot names, muse ai avatar, grok bot avatar, chatgpt dots avatar, avatar character ideas",
  alternates: { canonical: `${SITE.baseUrl}/tools/avatar-studio` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Avatar Studio: 100 AI Avatar Names + 100 Characters",
    description:
      "Shuffle a name and character for your AI assistant, then copy the combo into Muse AI, Grok Bot, or ChatGPT Dots.",
    url: `${SITE.baseUrl}/tools/avatar-studio`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Avatar Studio: 100 AI Avatar Names + 100 Characters",
    description:
      "Shuffle a name and character for your AI assistant, then copy the combo into Muse AI, Grok Bot, or ChatGPT Dots.",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is Avatar Studio?",
    answer:
      "It is a name-and-character generator for personalizing your AI assistant: 100 original avatar names and 100 character presets, each with a personality and a look. Shuffle for random combos, filter by vibe, and copy your favorite into Muse AI, Grok Bot, or ChatGPT Dots.",
  },
  {
    question: "Is Avatar Studio free? Do I need an account?",
    answer:
      "Yes, it is free, and no account or sign-in is needed. Shuffling, filtering, and browsing all run entirely in your browser, and copied text goes straight to your clipboard \u2014 nothing is stored, tracked, or sent anywhere by this tool.",
  },
  {
    question: "Where do I actually apply a name I picked?",
    answer:
      "Copy a combo above, then apply it where your assistant app lets you change its name and look. The \u201cUse it in your app\u201d section has step-by-step guides for Muse AI, ChatGPT Dots, and Grok Bot, with steps reflecting each app's actual settings.",
  },
  {
    question: "What are the vibe filters?",
    answer:
      "Names and characters are tagged with one of six tones \u2014 Cosmic, Cozy, Bold, Playful, Techy, or Elegant. Filtering narrows both the Shuffle pool and the browsers, and the counter shows how many names and characters match your current filter.",
  },
  {
    question: "Does renaming my assistant change what it can do?",
    answer:
      "No. A name and character are purely cosmetic and personal: they change how the assistant addresses itself and how it feels to talk to, not its capabilities, data access, or settings. Think of it as a costume \u2014 the person underneath is unchanged.",
  },
  {
    question: "How current are the apply guides?",
    answer:
      "The guides describe each app's actual settings as documented in this site's avatar guide. App settings do change over time, so if a menu looks different, check the app's own settings screen and treat the guide's steps as a starting point rather than gospel.",
  },
];

export default function AvatarStudioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Avatar Studio — AI Avatar Name & Character Generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/avatar-studio`,
    description:
      "Interactive generator with 100 original avatar names and 100 character presets for personalizing Muse AI, Grok Bot, and ChatGPT Dots.",
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
              { label: "Avatar studio" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Name your AI something{" "}
            <span className="text-accent">worth talking to.</span>
          </h1>
          <p className="mt-5 max-w-[68ch] text-lg text-muted">
            Stuck on what to call your assistant? Shuffle through{" "}
            <strong className="text-ink">100 original avatar names</strong> and{" "}
            <strong className="text-ink">100 character presets</strong> — each
            with a personality and a look — then copy your favorite combo into
            Muse AI, Grok&nbsp;Bot, or ChatGPT&nbsp;Dots.
          </p>
        </Reveal>

        <Reveal>
          <AvatarStudio />
        </Reveal>

        <Reveal>
          <section className="mt-16 rounded-2xl border border-line p-6 md:p-8">
            <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-extrabold tracking-tight">
              Start from the default
            </h2>
            <p className="mt-2 max-w-[68ch] text-muted">
              Muse ships with <strong className="text-ink">Jolly</strong>, its
              cheerful default avatar — but you don&apos;t have to keep it.
              Learn how Jolly works and how deep Muse&apos;s personalization
              goes before you pick a replacement.
            </p>
            <Link
              href="/guides/muse-ai-jolly-avatar"
              className="mt-4 inline-block rounded-full bg-accent px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
            >
              Meet Jolly — the avatar guide
            </Link>
          </section>
        </Reveal>

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Shuffle a name and character worth talking to
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                Avatar Studio is a generator for personalizing your AI
                assistant: 100 original avatar names and 100 character
                presets, each character with a title, personality, look
                description, and portrait. The generator shows one combo at a
                time — press Shuffle for a new random pair, or filter by vibe
                (Cosmic, Cozy, Bold, Playful, Techy, Elegant) to narrow the
                pool.
              </p>
              <p>
                Once you have a combo you like, copy the name, the character,
                or the full combo to your clipboard and paste it into your
                app&rsquo;s settings. The &ldquo;Use it in your app&rdquo;
                section walks you through applying it in Muse AI, ChatGPT
                Dots, or Grok Bot, and the two browsers below let you scroll
                all 100 names (searchable) and all 100 characters (filterable)
                at your own pace.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Vibe filter pills</strong> —
                filter names by tone and characters by vibe; the pool
                counter updates to show how many match.
              </li>
              <li>
                <strong className="text-ink">Portrait + name display</strong> —
                the current combo: the character&rsquo;s portrait, the
                avatar name in large type, the character title, its
                personality, and its look description.
              </li>
              <li>
                <strong className="text-ink">Shuffle button</strong> — picks a
                new random name and character from the currently filtered
                pool.
              </li>
              <li>
                <strong className="text-ink">Copy buttons</strong> — Copy name
                copies just the name; Copy character copies the title,
                personality, and look; Copy combo copies the whole card in
                one pasteable block.
              </li>
              <li>
                <strong className="text-ink">Pool counter</strong> — reads
                &ldquo;N names · M characters&rdquo;, confirming what the
                current filter is drawing from.
              </li>
              <li>
                <strong className="text-ink">Use it in your app</strong> —
                three cards (Muse AI, ChatGPT Dots, Grok Bot) with numbered
                steps reflecting each app&rsquo;s actual name and look
                settings.
              </li>
              <li>
                <strong className="text-ink">All 100 names browser</strong> —
                a searchable, tone-filtered grid; tapping any name copies it
                to your clipboard.
              </li>
              <li>
                <strong className="text-ink">All 100 characters browser</strong> —
                vibe-filtered cards with portrait, personality, look, and a
                per-card copy button.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Avatar Studio questions, answered
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>
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
