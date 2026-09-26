import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import AiQuiz from "@/components/AiQuiz";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Which AI Fits You? Muse vs ChatGPT vs Claude vs Meta AI Quiz (2026)",
  description:
    "Answer 5 quick questions and get an honest AI recommendation: Muse, ChatGPT, Claude, or Meta AI — matched to your tasks, style, and region.",
  keywords:
    "which ai should i use, muse vs chatgpt quiz, best ai assistant for me",
  alternates: { canonical: `${SITE.baseUrl}/quiz` },
  openGraph: {
    type: "website",
    title: "Which AI Fits You? 5-Question Quiz",
    description:
      "Muse, ChatGPT, Claude, or Meta AI? Answer 5 questions for an honest match.",
    url: `${SITE.baseUrl}/quiz`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Which AI Fits You? 5-Question Quiz",
    description:
      "Muse, ChatGPT, Claude, or Meta AI? Answer 5 questions for an honest match.",
  },
};

export default function QuizPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Which AI Fits You? Muse vs ChatGPT vs Claude vs Meta AI Quiz",
    description:
      "A 5-question quiz that recommends Muse, ChatGPT, Claude, or Meta AI based on tasks, working style, outputs, and region.",
    url: `${SITE.baseUrl}/quiz`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Quiz" }]} />
          <p className="kicker mt-10">Interactive quiz</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Which AI actually{" "}
            <em className="font-medium italic text-accent">fits you?</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Five quick questions about your tasks, working style, and region.
            No generic rankings — a match with an honest reason.
          </p>
        </Reveal>

        <div className="mt-10">
          <AiQuiz />
        </div>

        <div className="mt-14 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
