import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { FAQS } from "@/lib/faqs";
import { GUIDES, getGuide } from "@/lib/guides";
import Reveal from "@/components/Reveal";
import HeroConsole from "@/components/HeroConsole";
import PromptLibrary from "@/components/PromptLibrary";
import FaqAccordion from "@/components/FaqAccordion";
import ReferralCodes from "@/components/ReferralCodes";
import GuideCard from "@/components/GuideCard";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import { CopyButton } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Muse Hub: Muse AI Guides, Invite Codes & Tutorials (2026)",
  description:
    "Muse Hub — the ultimate unofficial Muse AI guide hub: invite & referral codes, 15 focused tutorials, WhatsApp tips, use cases, and honest comparisons with ChatGPT, Claude, and Meta AI.",
  alternates: { canonical: SITE.baseUrl },
  openGraph: {
    title: "Muse Hub: Muse AI Guides, Invite Codes & Tutorials (2026)",
    description:
      "15 practical Muse AI guides covering access, prompts, WhatsApp, tokens, use cases, and AI app comparisons.",
    url: SITE.baseUrl,
  },
};

function SectionHead({
  index,
  label,
  title,
  copy,
}: {
  index: string;
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal>
      <div className="mb-8 grid gap-6 md:grid-cols-[170px_1fr]">
        <p className="kicker md:pt-3">
          {index} / {label}
        </p>
        <div>
          <h2 className="font-display max-w-[850px] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] tracking-tight">
            {title}
          </h2>
          {copy && (
            <p className="mt-4 max-w-[670px] text-[1.05rem] text-muted">{copy}</p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Name the outcome",
    body: "Say what “done” looks like: a plan, a page, a decision, a draft, or a recurring workflow.",
    link: "/#prompts",
    linkLabel: "See prompt patterns",
  },
  {
    n: "02",
    title: "Add useful context",
    body: "Share the audience, constraints, source material, tone, and deadline that should shape the answer.",
    link: "/guides/muse-ai-use-cases",
    linkLabel: "Explore use cases",
  },
  {
    n: "03",
    title: "Review, then refine",
    body: "Inspect the result, give concrete feedback, and ask Muse to test assumptions or improve weak spots.",
    link: "/#faq",
    linkLabel: "Read the essentials",
  },
];

const USE_CASES = [
  { n: "01", title: "Research & synthesis", body: "Compare sources, surface disagreement, extract evidence, and turn a sprawling topic into a useful brief." },
  { n: "02", title: "Websites & tools", body: "Move from requirements to a working site, calculator, dashboard, interactive explainer, or prototype." },
  { n: "03", title: "Writing & publishing", body: "Develop the structure, voice, drafts, edits, and repurposed formats for a serious body of work." },
  { n: "04", title: "Planning & operations", body: "Break complex goals into milestones, recurring reviews, checklists, decision logs, and clear next actions." },
  { n: "05", title: "Visual creation", body: "Develop art direction and create visual assets, images, motion concepts, and presentation-ready materials." },
  { n: "06", title: "Learning & explanation", body: "Build a curriculum, ask for rigorous explanations, practice retrieval, and test understanding from several angles." },
];

const REDEEM_STEPS = [
  { title: "Join Muse", body: "Use the official Muse access route available for your account and region." },
  { title: "Open the invite or redeem screen", body: "Look in your account settings for the current invite-code option and its eligibility terms." },
  { title: "Enter a code in time", body: "Paste either code within the window Muse shows you — some offers expect redemption within 48 hours of joining." },
  { title: "Confirm the result", body: "Check the in-app balance or confirmation message, then start with one clear outcome and useful context." },
];

const TICKER_ITEMS = ["Research deeper", "Build faster", "Write clearer", "Automate the repeatable", "Turn ideas into artifacts"];

const FEATURED_SLUGS = [
  "what-is-muse-ai",
  "muse-ai-invite-code",
  "muse-ai-tutorial",
  "muse-ai-billion-tokens",
  "muse-ai-vs-chatgpt-claude-meta-ai",
  "muse-ai-whatsapp",
];

export default function HomePage() {
  const featured = FEATURED_SLUGS.map((s) => getGuide(s)!).filter(Boolean);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.baseUrl,
    description: SITE.description,
    inLanguage: "en",
  };

  return (
    <main id="main">
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* ---------- HERO ---------- */}
      <section aria-labelledby="hero-title" className="mx-auto grid max-w-shell items-center gap-12 px-5 pb-12 pt-14 md:grid-cols-[1.05fr_0.75fr] md:px-6 md:pt-20">
        <Reveal>
          <p className="flex justify-between gap-4 border-b border-line pb-3 font-mono text-xs uppercase tracking-[0.1em] text-faint">
            <span>Muse field notes / 01</span>
            <span className="hidden sm:inline">Learn · Prompt · Build</span>
          </p>
          <h1
            id="hero-title"
            className="font-display mt-7 text-[clamp(3.2rem,7.5vw,6.8rem)] font-extrabold leading-[0.92] tracking-tight"
          >
            Make more with <em className="font-medium italic text-accent">Muse AI.</em>
          </h1>
          <p className="mt-7 max-w-[610px] text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed text-muted">
            A practical, independent Muse AI guide with clear access steps,
            useful prompts, 15 focused tutorials, and honest comparisons.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#redeem"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3.5 font-bold text-accent-ink transition-transform duration-150 hover:-translate-y-0.5"
            >
              Get an invite code <span aria-hidden="true">↘</span>
            </Link>
            <Link
              href="#prompts"
              className="inline-flex items-center rounded-xl border border-line bg-surface px-5 py-3.5 font-bold transition-transform duration-150 hover:-translate-y-0.5"
            >
              Browse prompts
            </Link>
          </div>
          <ul aria-label="Highlights" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.83rem] text-muted">
            {["No jargon", "Copy-ready prompts", "Built for real projects"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full bg-moss text-[11px] font-black text-moss-ink">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <HeroConsole />
        </Reveal>
      </section>

      {/* ---------- TICKER ---------- */}
      <div aria-hidden="true" className="overflow-hidden border-y border-line bg-surface">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i} className="whitespace-nowrap px-8 py-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {t} <span className="ml-14 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- 01 START HERE ---------- */}
      <section id="start" aria-labelledby="start-h" className="mx-auto max-w-shell px-5 py-16 md:px-6 md:py-20">
        <SectionHead
          index="01"
          label="Start here"
          title="From first message to finished work."
          copy="The best results begin with context, a clear outcome, and permission to ask questions when something is missing."
        />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className="h-full">
              <article className="flex h-full min-h-[280px] flex-col bg-bg p-8">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">Step {s.n}</span>
                <h3 className="mb-3 mt-14 text-[1.5rem] font-bold leading-tight">{s.title}</h3>
                <p className="text-muted">{s.body}</p>
                <Link href={s.link} className="mt-auto pt-6 font-bold underline-offset-4 hover:underline">
                  {s.linkLabel}
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- REFERRAL STRIP ---------- */}
      <aside aria-label="Referral invitation" className="bg-moss text-moss-ink">
        <div className="mx-auto grid max-w-shell items-center gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.1rem)] font-bold leading-tight tracking-tight">
              Explore the Muse token offer.
            </h2>
            <p className="mt-3 max-w-[650px] opacity-90">
              Try either referral code within the window shown in your account.
              Reward amounts and eligibility vary — confirm the current offer in
              Muse&rsquo;s invite or redeem screen.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2.5">
              {SITE.referralCodes.map((code) => (
                <CopyButton
                  key={code}
                  text={code}
                  label={`Copy referral code ${code}`}
                  className="!bg-moss-ink !text-moss font-mono text-base tracking-[0.08em]"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </aside>

      {/* ---------- 02 PROMPT LIBRARY ---------- */}
      <section id="prompts" aria-labelledby="prompts-h" className="mx-auto max-w-shell px-5 py-16 md:px-6 md:py-20">
        <SectionHead
          index="02"
          label="Prompt library"
          title="Better starting points, ready to adapt."
          copy="Choose a lane, copy a prompt, then replace the bracketed details with your own context."
        />
        <PromptLibrary />
      </section>

      {/* ---------- 03 USE CASES (inverted) ---------- */}
      <section aria-labelledby="use-h" className="bg-ink text-bg">
        <div className="mx-auto max-w-shell px-5 py-16 md:px-6 md:py-20">
          <Reveal>
            <div className="mb-8 grid gap-6 md:grid-cols-[170px_1fr]">
              <p className="kicker !text-bg/60 md:pt-3">03 / Use cases</p>
              <div>
                <h2 id="use-h" className="font-display max-w-[850px] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] tracking-tight">
                  One agent. Many kinds of work.
                </h2>
                <p className="mt-4 max-w-[670px] text-[1.05rem] text-bg/70">
                  Use Muse as a thinking partner, maker, researcher, and
                  operator — then keep human judgment at the important checkpoints.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-x-8 md:grid-cols-2">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.n} delay={Math.min(i, 3) * 60}>
                <article className="grid grid-cols-[52px_1fr] gap-4 border-t border-bg/25 py-7">
                  <span className="font-mono text-sm text-accent">{u.n}</span>
                  <div>
                    <h3 className="mb-2 text-[1.3rem] font-bold">{u.title}</h3>
                    <p className="text-bg/70">{u.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 04 FEATURED GUIDES ---------- */}
      <section aria-labelledby="featured-h" className="mx-auto max-w-shell px-5 py-16 md:px-6 md:py-20">
        <SectionHead
          index="04"
          label="Featured guides"
          title="Start with the guides that matter most."
          copy="A shortlist of the essentials. The full library — all 15 guides with category tabs and search — lives on its own page."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((g, i) => (
            <Reveal key={g.slug} delay={Math.min(i, 5) * 60} className="h-full">
              <GuideCard guide={g} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-4 font-bold text-bg transition-transform duration-150 hover:-translate-y-0.5"
            >
              Browse all {GUIDES.length} guides <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <AdSlot />

      {/* ---------- SKILLS BANNER ---------- */}
      <section aria-labelledby="skills-h" className="mx-auto max-w-shell px-5 pb-16 md:px-6 md:pb-20">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[30px] bg-ink p-8 text-bg md:p-14 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-moss">
                899 original skills · Open catalog
              </span>
              <h2 id="skills-h" className="font-display mt-4 max-w-[740px] text-[clamp(2.1rem,5vw,3.9rem)] font-bold leading-[1.05] tracking-tight">
                Supercharge Muse with a skill built for the job.
              </h2>
              <p className="mt-4 max-w-[670px] text-bg/70">
                Awesome Muse Skills is an independent catalog of 899 original,
                reusable skill guides across coding, design, research,
                productivity, marketing, and more. Browse by category and copy
                the ones that fit your workflow.
              </p>
            </div>
            <a
              href={SITE.skillsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-moss px-6 py-4 font-bold text-moss-ink transition-transform duration-150 hover:-translate-y-0.5 lg:justify-self-end"
            >
              Explore awesome-muse-skills <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </section>

      {/* ---------- 05 REDEEM ---------- */}
      <section id="redeem" aria-labelledby="redeem-h" className="mx-auto max-w-shell px-5 pb-16 md:px-6 md:pb-20">
        <SectionHead
          index="05"
          label="Get access"
          title="Join, redeem, and start building."
          copy="Choose either referral code. Redeem it within the eligibility window displayed in your Muse account."
        />
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <ReferralCodes />
          <Reveal delay={100}>
            <ol className="m-0 list-none p-0">
              {REDEEM_STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="relative mb-0 ml-6 border-l border-line pb-10 pl-14 last:border-l-transparent last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-6 top-0 grid h-12 w-12 place-items-center rounded-full bg-ink font-mono text-sm text-bg"
                  >
                    {i + 1}
                  </span>
                  <h3 className="mb-2 text-[1.5rem] font-bold">{s.title}</h3>
                  <p className="text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ---------- 06 FAQ ---------- */}
      <section id="faq" aria-labelledby="faq-h" className="mx-auto max-w-shell px-5 pb-16 md:px-6 md:pb-20">
        <SectionHead index="06" label="FAQ" title="The useful questions, answered plainly." />
        <Reveal>
          <FaqAccordion faqs={FAQS} />
        </Reveal>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section aria-labelledby="final-h" className="mx-auto max-w-shell px-5 pb-16 md:px-6 md:pb-24">
        <Reveal>
          <div className="grid items-end gap-8 rounded-[30px] bg-accent p-8 text-accent-ink md:p-14 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 id="final-h" className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-tight">
                Your next idea needs a first move.
              </h2>
              <p className="mt-5 max-w-[600px] text-[1.05rem] opacity-90">
                Explore the guides, confirm your account&rsquo;s current access
                terms, and begin with a prompt that describes the work you
                actually want finished.
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-accent-ink px-6 py-4 font-bold text-accent transition-transform duration-150 hover:-translate-y-0.5 lg:justify-self-end"
            >
              Choose a guide <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
