import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse AI Video Guides (2026)",
  description:
    "Video walkthroughs for Muse AI: referral codes, first steps, and token explainers. New videos are added here first — subscribe for notifications.",
  keywords: "muse ai video, muse ai tutorial video, muse ai walkthrough",
  alternates: { canonical: `${SITE.baseUrl}/videos` },
  openGraph: {
    type: "website",
    title: "Muse AI Video Guides",
    description:
      "Video walkthroughs for Muse AI — referral codes, first steps, token explainers.",
    url: `${SITE.baseUrl}/videos`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse AI Video Guides",
    description:
      "Video walkthroughs for Muse AI — referral codes, first steps, token explainers.",
  },
};

const UPCOMING = [
  {
    title: "Muse referral code walkthrough",
    desc: "Where to find the redeem screen, how to enter a code, and how to confirm it applied — recorded step by step.",
  },
  {
    title: "Your first 15 minutes with Muse",
    desc: "From account setup to your first finished artifact: the beginner path in one sitting.",
  },
  {
    title: "Muse tokens, explained simply",
    desc: "What tokens are, what the promotional grant means, and how to think about usage — without the jargon.",
  },
];

export default function VideosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Muse AI Video Guides",
    description:
      "Video walkthroughs for Muse AI: referral codes, first steps, and token explainers.",
    url: `${SITE.baseUrl}/videos`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
  };

  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Videos" }]} />
          <p className="kicker mt-10">Video guides</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Watch Muse,{" "}
            <em className="font-medium italic text-accent">don&rsquo;t just read.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Short, honest walkthroughs — recorded on real screens, no hype.
            The first batch is in production now.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {UPCOMING.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <article className="flex h-full flex-col rounded-[22px] border border-line bg-surface p-6">
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-line bg-bg">
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                    Coming soon
                  </p>
                </div>
                <h2 className="font-display mt-5 text-[1.35rem] font-bold tracking-tight">
                  {v.title}
                </h2>
                <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {v.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
