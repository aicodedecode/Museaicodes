import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvatarStudio from "@/components/AvatarStudio";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI Avatar Name Generator: 100 Names + 100 Characters (2026)",
  description:
    "Can't think of a name for your AI assistant? Shuffle through 100 original avatar names and 100 character presets for Muse AI, Grok Bot, and ChatGPT Dots — then copy your combo.",
  keywords:
    "ai avatar names, ai assistant names, cute ai names, cool robot names, muse ai avatar, grok bot avatar, chatgpt dots avatar, avatar character ideas",
  alternates: { canonical: `${SITE.baseUrl}/tools/avatar-studio` },
  openGraph: {
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

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
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
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
