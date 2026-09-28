import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import {
  setupSteps,
  homeTour,
  settingsTour,
  comingSoon,
  statusLabel,
  appFaqs,
} from "@/lib/app-guide";

export const metadata: Metadata = {
  title: "The Muse App: Download, Setup & Tour Guide (2026)",
  description:
    "A tour of the Muse AI app: where to download it (iOS, Android, web), first-run setup steps, a home screen and settings walkthrough, voice mode, Jolly avatars, and what's coming next.",
  keywords:
    "muse ai app, muse app tour, download muse ai, muse ai setup, muse app guide, muse ai home screen",
  alternates: { canonical: `${SITE.baseUrl}/apps` },
  openGraph: {
    type: "website",
    title: "The Muse App: Download, Setup & Tour Guide",
    description:
      "Where to get the Muse app, how to set it up, and a tour of the home screen, settings, voice mode, and what's next.",
    url: `${SITE.baseUrl}/apps`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "The Muse App: Download, Setup & Tour Guide",
    description:
      "Where to get the Muse app, how to set it up, and a tour of the home screen, settings, voice mode, and what's next.",
  },
};

const AEO_ANSWER =
  "Get the Muse AI app from the App Store (iOS), Google Play (Android), or the web at muse.ai — availability is limited to the US and Canada as of September 2026. Set up with an official invite route, verify your email, confirm you're 18+, and redeem any token codes. Inside, the main chat is your primary conversation, side chats hold separate topics, the Feed carries proactive updates, the Goals tab tracks background work, and Artifacts are the finished documents, pages, and trackers Muse produces. Voice mode lets you talk instead of type, and you can rename Muse and redesign its avatar (Jolly is the default).";

function SectionHead({
  kicker,
  title,
  lede,
  id,
}: {
  kicker: string;
  title: string;
  lede?: string;
  id: string;
}) {
  return (
    <div className="max-w-[760px]">
      <p className="kicker">{kicker}</p>
      <h2
        id={id}
        className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight"
      >
        {title}
      </h2>
      {lede && <p className="mt-4 text-muted">{lede}</p>}
    </div>
  );
}

function GuideLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="font-bold text-accent underline-offset-4 hover:underline"
    >
      {children} →
    </Link>
  );
}

function PlatformIcon({ kind }: { kind: "phone" | "play" | "globe" }) {
  const common =
    "h-6 w-6 stroke-current";
  if (kind === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" className={common} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
      </svg>
    );
  }
  if (kind === "play") {
    return (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2.5" />
        <path d="M10.5 9.8v4.4L14 12l-3.5-2.2z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" className={common} aria-hidden="true">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </svg>
  );
}

export default function AppGuidePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: appFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main id="main">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        {/* ---------- Hero ---------- */}
        <Reveal>
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "App guide" }]}
          />
          <p className="kicker mt-10">App walkthrough</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            The Muse app,{" "}
            <em className="font-medium italic text-accent">tour by tour</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Everything about using the Muse app in one place — where to get it,
            how the first five minutes go, and what each part of the interface
            is actually for. Every section links to the full guide when you
            want the deep version.
          </p>
          <div className="mt-6 max-w-[760px] rounded-[22px] border border-line bg-surface p-5 md:p-6">
            <p className="kicker mb-2">Short answer</p>
            <p className="text-[0.98rem] leading-relaxed text-muted">
              {AEO_ANSWER}
            </p>
          </div>
          <nav
            aria-label="On this page"
            className="mt-8 flex max-w-[820px] flex-wrap gap-2"
          >
            {[
              ["#get-the-app", "Get the app"],
              ["#setup", "First-run setup"],
              ["#home-tour", "Home screen tour"],
              ["#settings-tour", "Settings tour"],
              ["#voice", "Voice mode"],
              ["#avatar", "Avatar & Jolly"],
              ["#coming", "What's coming"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-line bg-surface px-4 py-2 text-[0.82rem] font-semibold text-muted transition-colors hover:border-accent hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>
        </Reveal>

        {/* ---------- Get the app ---------- */}
        <Reveal>
          <section id="get-the-app" aria-labelledby="get-the-app-h" className="mt-20 scroll-mt-24">
            <SectionHead
              id="get-the-app-h"
              kicker="01 · Get the app"
              title="Three ways in"
              lede="Muse runs on iOS, Android, and the web — plus WhatsApp and Mac surfaces. As of September 2026, all of them are US & Canada only."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  kind: "phone" as const,
                  name: "iOS",
                  store: "App Store",
                  body: "Download Muse from the Apple App Store on your iPhone or iPad. The app reached #1 on the US App Store on September 18, 2026.",
                },
                {
                  kind: "play" as const,
                  name: "Android",
                  store: "Google Play",
                  body: "Grab it from Google Play on Android phones and tablets. It hit #1 on the US Play Store on September 19, 2026.",
                },
                {
                  kind: "globe" as const,
                  name: "Web",
                  store: "muse.ai",
                  body: "Prefer a browser? Muse runs on the web too, on any device with a modern browser. Same agent, bigger screen for artifact work.",
                },
              ].map((p, i) => (
                <Reveal key={p.name} as="div" delay={i * 70}>
                  <div className="flex h-full flex-col rounded-[22px] border border-line bg-surface p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-raised text-accent">
                      <PlatformIcon kind={p.kind} />
                    </span>
                    <h3 className="font-display mt-4 text-[1.35rem] font-bold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="font-mono mt-1 text-[11px] uppercase tracking-[0.12em] text-faint">
                      {p.store} · US & Canada only
                    </p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 max-w-[760px] text-muted">
              Outside those two countries, the app simply isn&apos;t in your
              store yet — don&apos;t trust unofficial APKs or cloned download
              pages.{" "}
              <GuideLink href="/guides/muse-ai-download">
                Download guide
              </GuideLink>{" "}
              ·{" "}
              <GuideLink href="/guides/muse-ai-availability">
                Availability by region
              </GuideLink>
            </p>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Per-surface guides">
              {[
                ["Android", "/apps/android"],
                ["iPhone", "/apps/iphone"],
                ["Web", "/apps/web"],
                ["WhatsApp", "/apps/whatsapp"],
                ["Mac", "/apps/mac"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-[0.82rem] font-semibold text-muted transition-colors hover:border-accent hover:text-ink"
                >
                  {label} guide →
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ---------- First-run setup ---------- */}
        <Reveal>
          <section id="setup" aria-labelledby="setup-h" className="mt-20 scroll-mt-24">
            <SectionHead
              id="setup-h"
              kicker="02 · First-run setup"
              title="Your first five minutes"
              lede="Setup is short. The five steps below are everything standing between you and your first real task."
            />
            <ol className="mt-10 max-w-[820px] space-y-2">
              {setupSteps.map((step, i) => (
                <Reveal key={step.title} as="li" delay={Math.min(i, 4) * 60}>
                  <div className="flex gap-5 rounded-[18px] border border-transparent p-4 transition-colors hover:border-line hover:bg-surface md:p-5">
                    <span
                      aria-hidden="true"
                      className="font-display shrink-0 text-[2rem] font-extrabold leading-none text-accent md:text-[2.4rem]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[1.05rem] font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
            <p className="mt-6 max-w-[760px] text-muted">
              Walked through the long way, with screenshots-level detail:{" "}
              <GuideLink href="/guides/how-to-get-muse-ai">
                How to get Muse AI
              </GuideLink>{" "}
              ·{" "}
              <GuideLink href="/guides/muse-ai-redeem-code">
                Redeeming a code
              </GuideLink>{" "}
              ·{" "}
              <GuideLink href="/guides/muse-ai-billion-tokens">
                The 1-billion-tokens offer
              </GuideLink>
            </p>
          </section>
        </Reveal>
        <AppTourSections />
        <AppComingFaq />
      </div>
    </main>
  );
}

/** Home screen + settings tours, voice, avatar — extracted so the
 *  top-level page stays readable. */
function AppTourSections() {
  return (
    <>
      {/* ---------- Home screen tour ---------- */}
      <Reveal>
        <section id="home-tour" aria-labelledby="home-tour-h" className="mt-20 scroll-mt-24">
          <SectionHead
            id="home-tour-h"
            kicker="03 · Home screen tour"
            title="What each part is for"
            lede="The app has a small number of surfaces, and each one has a job. Learn the five and you'll stop fighting the interface."
          />
          <dl className="mt-8 grid gap-4 md:grid-cols-2">
            {homeTour.map((item, i) => (
              <Reveal key={item.name} delay={(i % 2) * 70}>
                <div className="h-full rounded-[22px] border border-line bg-surface p-6 md:p-7">
                  <dt className="kicker !text-accent">{item.name}</dt>
                  <dd className="mt-2 text-[0.97rem] leading-relaxed text-muted">
                    {item.body}
                  </dd>
                </div>
              </Reveal>
            ))}
            <Reveal delay={70}>
              <div className="flex h-full flex-col justify-between rounded-[22px] border border-line bg-raised p-6 md:p-7">
                <p className="text-[0.97rem] leading-relaxed text-muted">
                  That&rsquo;s the whole map. For the full fifteen-minute
                  onboarding — prompts to try, habits that pay off — read the
                  tutorial.
                </p>
                <p className="mt-4">
                  <GuideLink href="/guides/muse-ai-tutorial">
                    Muse AI tutorial
                  </GuideLink>
                </p>
              </div>
            </Reveal>
          </dl>
          <p className="mt-6 max-w-[760px] text-muted">
            New to the whole concept? Start here first:{" "}
            <GuideLink href="/guides/what-is-muse-ai">
              What is Muse AI?
            </GuideLink>
          </p>
        </section>
      </Reveal>

      {/* ---------- Settings tour ---------- */}
      <Reveal>
        <section id="settings-tour" aria-labelledby="settings-tour-h" className="mt-20 scroll-mt-24">
          <SectionHead
            id="settings-tour-h"
            kicker="04 · Settings tour"
            title="Five things worth checking first"
            lede="Muse asks for permission before consequential actions — but it's worth knowing where the controls live before it needs to ask. Labels vary by version; look for these ideas in Settings."
          />
          <div className="mt-8 max-w-[820px] divide-y divide-line rounded-[22px] border border-line bg-surface px-6 md:px-8">
            {settingsTour.map((item, i) => (
              <Reveal key={item.name}>
                <div className="flex gap-5 py-5 md:py-6">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line font-mono text-[11px] font-bold text-accent"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-bold tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-[760px] text-muted">
            The privacy deep-dive:{" "}
            <GuideLink href="/guides/muse-ai-privacy">
              Muse AI privacy & data controls
            </GuideLink>{" "}
            · Everyday workflow patterns:{" "}
            <GuideLink href="/guides/how-to-use-muse-ai">
              How to use Muse AI
            </GuideLink>
          </p>
        </section>
      </Reveal>

      {/* ---------- Voice mode ---------- */}
      <Reveal>
        <section id="voice" aria-labelledby="voice-h" className="mt-20 scroll-mt-24">
          <SectionHead id="voice-h" kicker="05 · Voice mode" title="Talk instead of type" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[22px] border border-line bg-surface p-6 md:p-8">
              <h3 className="font-display text-[1.25rem] font-bold tracking-tight">
                What it does
              </h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">
                Hold to talk and Muse transcribes, understands, and replies out
                loud — while it keeps working on your task in the background.
                Dictation and voice notes are built into the app, and Meta&rsquo;s
                real-time audio model handles interruptions, accents, and long
                sessions.
              </p>
            </div>
            <div className="rounded-[22px] border border-line bg-surface p-6 md:p-8">
              <h3 className="font-display text-[1.25rem] font-bold tracking-tight">
                When to use it
              </h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">
                Voice shines for the fuzzy stuff — brainstorming, thinking
                through a decision, describing a complicated errand while your
                hands are busy. Save the keyboard for precision work like
                reviewing a contract or editing a draft line by line.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-[760px] text-muted">
            Full guide, including live video chat and custom voices:{" "}
            <GuideLink href="/guides/muse-ai-voice-mode">
              Muse voice mode
            </GuideLink>
          </p>
        </section>
      </Reveal>

      {/* ---------- Avatar & Jolly ---------- */}
      <Reveal>
        <section id="avatar" aria-labelledby="avatar-h" className="mt-20 scroll-mt-24">
          <SectionHead
            id="avatar-h"
            kicker="06 · Avatar & Jolly"
            title="Give your agent a face"
            lede="Every Muse agent comes with an avatar — and by default, that avatar is Jolly."
          />
          <div className="mt-8 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-raised"
              >
                <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                  <ellipse cx="24" cy="26" rx="16" ry="15" fill="#f3e3c2" />
                  <ellipse cx="16.5" cy="12.5" rx="4.5" ry="5.5" fill="#f3e3c2" />
                  <ellipse cx="31.5" cy="12.5" rx="4.5" ry="5.5" fill="#f3e3c2" />
                  <circle cx="18.5" cy="24" r="2.6" fill="#171510" />
                  <circle cx="29.5" cy="24" r="2.6" fill="#171510" />
                  <path
                    d="M18 30.5c2 2.4 4.2 3.4 6 3.4s4-1 6-3.4"
                    stroke="#171510"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-display text-[1.35rem] font-bold tracking-tight">
                  Meet Jolly
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  Default avatar · introduced Sept 23, 2026
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-[0.97rem] leading-relaxed text-muted">
              <p>
                Jolly is a cream-colored, doll-like creature with beady black
                eyes — named by Mark Zuckerberg at Meta Connect for its{" "}
                <em>&ldquo;jolly and completely customizable character and
                personality.&rdquo;</em> It&rsquo;s only a starting point:
                you can rename your Muse, redesign its appearance, dress it,
                and tune how proactively it messages you.
              </p>
              <p>
                Look for the avatar, appearance, or personalization options in
                your agent&rsquo;s profile or settings. A name and a face turn
                an app into a companion — and companions get used.
              </p>
            </div>
            <p className="mt-5">
              <GuideLink href="/guides/muse-ai-jolly-avatar">
                Personalize Jolly & your agent
              </GuideLink>
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
}

/** What's coming + FAQ + newsletter — closing beats of the page. */
function AppComingFaq() {
  return (
    <>
      {/* ---------- What's coming ---------- */}
      <Reveal>
        <section id="coming" aria-labelledby="coming-h" className="mt-20 scroll-mt-24">
          <SectionHead
            id="coming-h"
            kicker="07 · What's coming"
            title="On the roadmap"
            lede="Everything below is announced, not shipped — except where the status chip says otherwise. Availability and dates can change; the guides track the latest."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {comingSoon.map((item, i) => (
              <Reveal key={item.name} delay={(i % 2) * 70}>
                <article className="flex h-full flex-col rounded-[22px] border border-line bg-surface p-6 md:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-[1.25rem] font-bold tracking-tight">
                      {item.name}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${
                        item.status === "dec-2026"
                          ? "border-accent bg-raised text-accent"
                          : item.status === "live-rollout"
                            ? "border-moss bg-raised text-moss"
                            : "border-line bg-raised text-faint"
                      }`}
                    >
                      {statusLabel[item.status]}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <p className="mt-4">
                    <GuideLink href={item.href}>Full guide</GuideLink>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ---------- FAQ ---------- */}
      <Reveal>
        <section id="faq" aria-labelledby="faq-h" className="mt-20 scroll-mt-24">
          <SectionHead
            id="faq-h"
            kicker="08 · FAQ"
            title="App questions, answered"
          />
          <div className="mt-8">
            <FaqAccordion faqs={appFaqs} />
          </div>
        </section>
      </Reveal>

      {/* ---------- Newsletter ---------- */}
      <div className="mt-16 max-w-[760px]">
        <NewsletterSignup />
      </div>
    </>
  );
}
