import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

interface Surface {
  name: string;
  tagline: string;
  lede: string;
  where: string;
  steps: { title: string; body: string }[];
  tips: string[];
  limitations: string;
  guides: { label: string; href: string }[];
  keywords: string;
}

const SURFACES: Record<string, Surface> = {
  android: {
    name: "Android",
    tagline: "Muse on Android",
    lede: "The full Muse app from Google Play — chat, voice mode, Feed, Goals, and artifacts, synced with your account everywhere else.",
    where: "Google Play · US & Canada only",
    steps: [
      {
        title: "Install from Google Play",
        body: "Search for Muse by Meta Platforms, Inc. and install the official listing. If it doesn't appear in your store, your region isn't supported yet — don't sideload APKs from random sites.",
      },
      {
        title: "Sign in or join through an official route",
        body: "Muse is invite-gated in some waves and open in others. Use the official invitation or access route shown for your region, and verify your email when prompted.",
      },
      {
        title: "Confirm you're 18 or older",
        body: "Muse is an adults-only product, and the app may ask you to confirm your age during setup.",
      },
      {
        title: "Let your agent provision its workspace",
        body: "Your personal agent sets up its own workspace on first launch. The app tells you when it's ready to take its first task.",
      },
      {
        title: "Redeem any codes",
        body: "If you have an invite code or a promotional token grant, redeem it in the app's account or invite area. The only authoritative balance is the one shown in your own app.",
      },
    ],
    tips: [
      "Turn on notifications so the Feed can reach you when background work finishes.",
      "Voice mode is the fastest way to use Muse on the go — talk through errands and let it research while you drive.",
      "Long documents and trackers are easier to review on the web later; your account syncs across surfaces.",
    ],
    limitations:
      "US & Canada only as of September 2026. Some announced features roll out to mobile after the web version — check the changelog in News if a feature you read about isn't there yet.",
    guides: [
      { label: "Download guide", href: "/guides/muse-ai-download" },
      { label: "Availability by region", href: "/guides/muse-ai-availability" },
      { label: "How to get access", href: "/guides/how-to-get-muse-ai" },
    ],
    keywords: "muse ai android, muse app android, download muse ai android",
  },
  iphone: {
    name: "iPhone",
    tagline: "Muse on iPhone",
    lede: "The full Muse app from the App Store — the same agent, tuned for iOS with voice mode, notifications, and everything synced to your account.",
    where: "App Store · US & Canada only",
    steps: [
      {
        title: "Install from the App Store",
        body: "Search for Muse by Meta Platforms, Inc. and install the official listing. If it doesn't appear in your store, your region isn't supported yet.",
      },
      {
        title: "Sign in or join through an official route",
        body: "Use the official invitation or access route shown for your region, and verify your email when prompted.",
      },
      {
        title: "Confirm you're 18 or older",
        body: "Muse is an adults-only product, and the app may ask you to confirm your age during setup.",
      },
      {
        title: "Let your agent provision its workspace",
        body: "Your personal agent sets up its own workspace on first launch. The app tells you when it's ready to take its first task.",
      },
      {
        title: "Redeem any codes",
        body: "Redeem invite codes or promotional token grants in the app's account or invite area. The only authoritative balance is the one shown in your own app.",
      },
    ],
    tips: [
      "Enable notifications for the Feed and Goals tab — that's how Muse tells you background work finished.",
      "Voice mode makes Muse a genuinely useful driving companion: briefings, reminders, and research read aloud.",
      "Rename Muse and redesign its avatar (Jolly is the default) from settings to make it yours.",
    ],
    limitations:
      "US & Canada only as of September 2026. iOS and Android stay close to feature parity, but staggered rollouts happen — see News for what's newest.",
    guides: [
      { label: "Download guide", href: "/guides/muse-ai-download" },
      { label: "Availability by region", href: "/guides/muse-ai-availability" },
      { label: "Voice mode guide", href: "/guides/muse-ai-voice-mode" },
    ],
    keywords: "muse ai iphone, muse app ios, download muse ai iphone",
  },
  web: {
    name: "Web",
    tagline: "Muse on the web",
    lede: "Muse in a desktop browser at muse.ai — the same agent with a bigger canvas, best for artifacts, research sessions, and long documents.",
    where: "muse.ai in a modern browser",
    steps: [
      {
        title: "Open muse.ai",
        body: "Head to muse.ai in a modern desktop or mobile browser. There's nothing to install.",
      },
      {
        title: "Sign in or join through an official route",
        body: "Use the official invitation or access route shown for your region, and verify your email when prompted.",
      },
      {
        title: "Confirm you're 18 or older",
        body: "Muse is an adults-only product, and you may be asked to confirm your age.",
      },
      {
        title: "Pick up where the app left off",
        body: "Conversations, goals, and artifacts sync with your account — start a research session on your phone and finish the document on your laptop.",
      },
    ],
    tips: [
      "The web is the best surface for artifact work: documents, trackers, and pages are easier to review on a big screen.",
      "Side chats shine here — keep separate projects in separate threads without losing context.",
      "Bookmark muse.ai or pin the tab if Muse is part of your daily workflow.",
    ],
    limitations:
      "US & Canada only as of September 2026. Push-style notifications live in the mobile apps, not the browser — pair the web with a phone app for the full proactive experience.",
    guides: [
      { label: "How to use Muse AI", href: "/guides/how-to-use-muse-ai" },
      { label: "What is Muse AI", href: "/guides/what-is-muse-ai" },
      { label: "Availability by region", href: "/guides/muse-ai-availability" },
    ],
    keywords: "muse ai web, muse.ai, muse ai browser",
  },
  whatsapp: {
    name: "WhatsApp",
    tagline: "Muse on WhatsApp",
    lede: "Muse is live inside WhatsApp — no separate download. Chat with it like you'd message a person: quick asks, reminders, and short threads.",
    where: "Inside WhatsApp · sign in with a Meta account",
    steps: [
      {
        title: "Find the Muse chat in WhatsApp",
        body: "Open WhatsApp and look for the Muse chat — it appears as a contact you can message directly. It's been a launch surface since September 2026, confirmed by TechCrunch, CNET, and the Associated Press.",
      },
      {
        title: "Sign in with your Meta account",
        body: "Muse uses the same Meta login tied to your Facebook, Instagram, or WhatsApp identity. You can create a Meta account with an email address or phone number if you don't have one.",
      },
      {
        title: "Confirm you're 18 or older",
        body: "Muse is an adults-only product on every surface, and you may be asked to confirm your age.",
      },
      {
        title: "Use the full app for heavy work",
        body: "WhatsApp is best for quick asks, reminders, and on-the-go follow-ups. Research projects, artifacts, and goal tracking live in the full app.",
      },
    ],
    tips: [
      "Treat WhatsApp as the quick-ask surface: 'remind me', 'summarize this', 'find me a…'.",
      "Lead with the outcome in the first line and keep one thread per project.",
      "Don't confuse Muse with Meta AI — the assistant already inside WhatsApp. Muse is the personal agent.",
    ],
    limitations:
      "Availability rolls out in stages — if the chat isn't in your WhatsApp yet, it hasn't reached your account. Small screens make long documents and precise formatting painful; use WhatsApp for thinking and deciding, then move heavy production to the app.",
    guides: [
      { label: "Muse AI on WhatsApp — full guide", href: "/guides/muse-ai-whatsapp" },
      { label: "Connector directory", href: "/connectors" },
      { label: "App guide hub", href: "/apps" },
    ],
    keywords: "muse ai whatsapp, muse whatsapp chat, connect muse whatsapp",
  },
  mac: {
    name: "Mac",
    tagline: "Muse on Mac",
    lede: "Muse on your Mac means two things: the web app on a big screen, and computer use — where Muse can operate your Mac with your permission.",
    where: "Web app + computer use · US & Canada only",
    steps: [
      {
        title: "Use the web app in your browser",
        body: "Open muse.ai in Safari or Chrome on your Mac and sign in. Artifacts, research, and long documents are most comfortable here.",
      },
      {
        title: "Try computer use where available",
        body: "Muse's computer-use feature lets it see your screen and operate your Mac — clicking, typing, and using apps — always with your explicit permission per session.",
      },
      {
        title: "Approve every sensitive action",
        body: "Computer use asks before doing anything consequential. Review what's on screen before you approve, and keep sensitive windows closed during a session.",
      },
    ],
    tips: [
      "Pair computer use with the Goals tab: hand Muse a multi-step desktop chore and check progress instead of watching.",
      "Voice mode plus computer use is the closest thing to a personal assistant: talk, and it drives.",
      "Keep the tasks boring and verifiable — file organization, form filling, research compilation — not password entry or purchases without review.",
    ],
    limitations:
      "Computer use is the most permission-sensitive surface Muse offers. It only acts with your approval, and availability details are still evolving — see the full guide before handing it your desktop.",
    guides: [
      { label: "Computer use on Mac", href: "/guides/muse-ai-mac-computer-use" },
      { label: "How to use Muse AI", href: "/guides/how-to-use-muse-ai" },
      { label: "App guide hub", href: "/apps" },
    ],
    keywords: "muse ai mac, muse mac app, muse computer use mac",
  },
};

export function generateStaticParams() {
  return Object.keys(SURFACES).map((surface) => ({ surface }));
}

export async function generateMetadata({
  params,
}: {
  params: { surface: string };
}): Promise<Metadata> {
  const s = SURFACES[params.surface];
  if (!s) return {};
  const title = `${s.tagline}: Setup, Tips & Limits (2026)`;
  const description = s.lede;
  return {
    title,
    description,
    keywords: s.keywords,
    alternates: { canonical: `${SITE.baseUrl}/apps/${params.surface}` },
    openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes \u2014 Muse AI guides, codes & tutorials" }],
      type: "website",
      title,
      description,
      url: `${SITE.baseUrl}/apps/${params.surface}`,
      siteName: SITE.name,
    },
    twitter: { card: "summary", title, description },
  };
}

export default function SurfacePage({ params }: { params: { surface: string } }) {
  const s = SURFACES[params.surface];
  if (!s) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I get Muse on ${s.name}?`,
        acceptedAnswer: { "@type": "Answer", text: s.steps[0].body },
      },
      {
        "@type": "Question",
        name: `What are the limitations of Muse on ${s.name}?`,
        acceptedAnswer: { "@type": "Answer", text: s.limitations },
      },
    ],
  };

  return (
    <main id="main">
      <JsonLd data={faqJsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "App guide", href: "/apps" },
              { label: s.name },
            ]}
          />
          <p className="kicker mt-10">App surface</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            {s.tagline.split(" on ")[0]}{" "}
            <em className="font-medium italic text-accent">on {s.name.toLowerCase()}</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            {s.lede}
          </p>
          <p className="font-mono mt-4 text-[11px] uppercase tracking-[0.12em] text-faint">
            {s.where}
          </p>
        </Reveal>

        <Reveal>
          <section aria-labelledby="setup-h" className="mt-16">
            <p className="kicker">Setup</p>
            <h2
              id="setup-h"
              className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight"
            >
              Getting set up
            </h2>
            <ol className="mt-8 max-w-[820px] divide-y divide-line rounded-[22px] border border-line bg-surface px-6 md:px-8">
              {s.steps.map((step, i) => (
                <li key={step.title} className="flex gap-5 py-5">
                  <span
                    aria-hidden="true"
                    className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-raised text-[0.95rem] font-bold text-accent"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="tips-h" className="mt-16">
            <p className="kicker">Tips</p>
            <h2
              id="tips-h"
              className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight"
            >
              Getting the most out of it
            </h2>
            <ul className="mt-8 grid max-w-[900px] gap-4 md:grid-cols-3">
              {s.tips.map((tip) => (
                <li
                  key={tip.slice(0, 24)}
                  className="rounded-[18px] border border-line bg-surface p-5 text-[0.95rem] leading-relaxed text-muted"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section aria-labelledby="limits-h" className="mt-16 max-w-[820px]">
            <p className="kicker">Honest limits</p>
            <h2
              id="limits-h"
              className="font-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight"
            >
              What to know first
            </h2>
            <div className="mt-8 rounded-[22px] border border-line bg-surface p-6 md:p-8">
              <p className="leading-relaxed text-muted">{s.limitations}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {s.guides.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="font-bold text-accent underline-offset-4 hover:underline"
                  >
                    {g.label} →
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-wrap gap-2" aria-label="Other surfaces">
            {Object.keys(SURFACES)
              .filter((k) => k !== params.surface)
              .map((k) => (
                <Link
                  key={k}
                  href={`/apps/${k}`}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-[0.82rem] font-semibold text-muted transition-colors hover:border-accent hover:text-ink"
                >
                  {SURFACES[k].name} guide →
                </Link>
              ))}
            <Link
              href="/apps"
              className="rounded-full border border-line bg-surface px-4 py-2 text-[0.82rem] font-semibold text-muted transition-colors hover:border-accent hover:text-ink"
            >
              ← All surfaces
            </Link>
          </div>
        </Reveal>

        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
