import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import PromptOptimizer from "@/components/PromptOptimizer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Prompt Optimizer: Restructure a Weak Prompt (Deterministic, 2026)",
  description:
    "Paste a prompt that isn't working and get a rule-based diagnosis plus a restructured version — objective, context gaps, constraints, approval rules, output format. No AI rewriting; everything runs in your browser.",
  keywords:
    "muse ai prompt optimizer, improve muse ai prompt, muse ai prompt structure, weak prompt fix muse",
  alternates: { canonical: `${SITE.baseUrl}/tools/prompt-optimizer` },
  openGraph: {
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "Muse Hub \u2014 Muse AI guides, codes & tutorials" }],
    type: "website",
    title: "Muse AI Prompt Optimizer",
    description:
      "A deterministic structuring helper: paste a weak prompt, see what's vague or missing, and get a restructured version with the gaps flagged.",
    url: `${SITE.baseUrl}/tools/prompt-optimizer`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Prompt Optimizer",
    description:
      "A deterministic structuring helper: paste a weak prompt, see what's vague or missing, and get a restructured version with the gaps flagged.",
  },
};

export default function PromptOptimizerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse AI Prompt Optimizer",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/prompt-optimizer`,
    description:
      "Deterministic prompt-structuring helper: diagnoses vague wording and missing elements in a prompt and restructures it into objective, context, constraints, approval rules, and output format — all in the browser, no AI involved.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What does the prompt optimizer do?",
      answer:
        "It diagnoses a weak prompt and restructures it. Paste a prompt that returned a mushy answer and the tool flags vague filler words, missing context, audience, tone, output format, and constraints, then rebuilds your prompt into labeled OBJECTIVE / CONTEXT / CONSTRAINTS / APPROVAL RULES / OUTPUT FORMAT sections with [BRACKET] slots for every gap you still need to fill.",
    },
    {
      question: "Does it use AI to rewrite my prompt?",
      answer:
        "No. The optimizer is fully deterministic — fixed word lists and pattern rules detect vague wording, missing formats, constraints, and risky verbs. It reorganizes what you wrote instead of inventing new phrasing, which means the meaning never drifts and you keep full control of what the prompt actually says.",
    },
    {
      question: "Is the prompt optimizer free? Do I need an account?",
      answer:
        "Yes, it's free, and no account is needed. All analysis runs in your browser with plain pattern matching — your prompt is never sent to a server, stored, or seen by anyone. Use it as often as you like; there is nothing to sign up for and nothing to pay for.",
    },
    {
      question: "What are the [BRACKET] placeholders in the restructured prompt?",
      answer:
        "They are the gaps the rules found — missing situation, audience, tone, specifics, or constraints. Each bracket is labeled with what goes there, like [OUTPUT FORMAT] or [YOUR SITUATION]. Fill every one in before pasting into Muse; a restructured prompt with unfilled gaps will still get you a generic answer.",
    },
    {
      question: "Where does my prompt go when I copy it?",
      answer:
        "The \u201CCopy restructured\u201D button copies the rebuilt prompt to your clipboard, and nothing else leaves the page. Paste it into Muse as your next message. A toast confirms the copy and reminds you to fill the brackets first; if your browser blocks clipboard access, the tool tells you to select and copy the text manually.",
    },
    {
      question: "What kind of problems can it catch?",
      answer:
        "Very short prompts with little to work with, vague filler words like \u201Csomething\u201D, \u201Cgood\u201D, or \u201Ca bit\u201D, missing output format or constraints, missing audience and tone, and risky action verbs like \u201Csend\u201D, \u201Cbuy\u201D, \u201Cpost\u201D, or \u201Cdelete\u201D — the last kind triggers an automatic approval rule so nothing irreversible happens without your say-so.",
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
              { label: "Prompt optimizer" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Fix a weak prompt,{" "}
            <em className="font-medium italic text-accent">rule by rule</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Paste a prompt that&rsquo;s giving you mushy answers and get a
            diagnosis plus a restructured version — objective, context gaps
            to fill, constraints, approval rules, output format. Short answer:
            this tool <strong className="text-ink">doesn&rsquo;t use AI to
            rewrite anything</strong>; it applies prompt-structure rules with
            pattern matching, so you keep full control of what your prompt
            actually says.
          </p>
        </Reveal>

        <div className="mt-10">
          <PromptOptimizer />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                This is a <strong className="text-ink">deterministic</strong>{" "}
                helper: fixed heuristics detect vague words, missing formats,
                constraints, and action verbs. It can&rsquo;t judge meaning,
                tone, or whether your objective is the right one — that
                judgment stays yours.
              </li>
              <li>
                The [BRACKET] placeholders are the whole point. A restructured
                prompt with unfilled gaps will still get you a generic answer —
                fill them in before pasting into Muse.
              </li>
              <li>
                Want to compose a prompt from scratch instead of fixing one?{" "}
                <Link
                  href="/tools/prompt-builder"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Try the prompt builder →
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/muse-ai-prompt-tips"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  Prompt tips: the rules this tool applies, explained →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <section aria-label="How this tool works" className="mt-16 max-w-[760px]">
            <p className="kicker">How it works</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              A repair bench for weak prompts
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              <p>
                The Prompt Optimizer is a repair bench for prompts that
                aren&rsquo;t working. Paste in a prompt that got you a mushy,
                generic, or off-target answer and it applies fixed
                prompt-structure rules — objective, context, constraints,
                approval rules, output format — to reorganize what you wrote
                and surface exactly what&rsquo;s missing. It&rsquo;s built for
                people who already have a draft prompt but know it could be
                sharper.
              </p>
              <p>
                Crucially, nothing here uses AI. The diagnosis is pure pattern
                matching in your browser: it flags vague filler words, detects
                whether you named an output format or any constraints, notices
                risky action verbs like &ldquo;send&rdquo; or
                &ldquo;buy&rdquo;, and spots [BRACKET] placeholders
                you&rsquo;ve left to fill. The restructured version keeps your
                words and adds bracketed slots for the gaps, so you stay in
                control of what the prompt actually says.
              </p>
              <p>
                To use it, paste your prompt (or load the sample weak prompt
                about climate change to see the tool in action), read the
                diagnosis dots — accent for problems, green for what&rsquo;s
                fine — then fill in every [BRACKET] in the restructured
                version, copy it with the{" "}
                <strong className="text-ink">Copy restructured</strong>{" "}
                button, and paste it into Muse. The tool never rewrites your
                meaning; unfilled brackets are the parts Muse would otherwise
                have to guess at.
              </p>
            </div>
            <h3 className="font-display mt-8 text-[1.25rem] font-bold tracking-tight text-ink">
              What each part does
            </h3>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-ink">Your prompt</strong> — the
                textarea where you paste the prompt that isn&rsquo;t working;
                the analysis begins the moment you type.
              </li>
              <li>
                <strong className="text-ink">Try a sample weak prompt</strong>{" "}
                — loads a deliberately vague sample (&ldquo;Write something
                good about climate change&hellip;&rdquo;) so you can see the
                diagnosis machinery in action before using your own text.
              </li>
              <li>
                <strong className="text-ink">
                  Diagnosis — what the rules found
                </strong>{" "}
                — the verdict list: accent dots flag problems (vague words,
                missing format or constraints, very short prompts, risky
                verbs) and green dots mark what&rsquo;s already fine.
              </li>
              <li>
                <strong className="text-ink">Before — your original</strong>{" "}
                — your pasted prompt shown as-is, beside the rewrite so you
                can compare the two side by side.
              </li>
              <li>
                <strong className="text-ink">After — restructured</strong> —
                the rebuilt prompt in OBJECTIVE / CONTEXT / CONSTRAINTS /
                APPROVAL RULES / OUTPUT FORMAT sections, with [BRACKET] slots
                marking every gap you must fill before pasting.
              </li>
              <li>
                <strong className="text-ink">Copy restructured</strong> —
                copies the rebuilt prompt to your clipboard; a toast reminds
                you to fill the brackets first, or tells you to copy manually
                if your browser blocks clipboard access.
              </li>
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Frequently asked questions" className="mt-16 max-w-[760px]">
            <p className="kicker">FAQ</p>
            <h2 className="font-display mt-3 text-[1.9rem] font-bold tracking-tight">
              Prompt optimizer questions, answered
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
