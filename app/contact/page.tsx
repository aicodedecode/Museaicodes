import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { CopyButton } from "@/components/Toast";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with museaicodes — questions about Muse AI, corrections, or partnership ideas. We read every message.",
  alternates: { canonical: `${SITE.baseUrl}/contact` },
};

/** Primary contact method when no form backend is configured: a clean tap-to-email card. */
function EmailDirect() {
  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
    "Question for museaicodes"
  )}`;
  return (
    <div className="mt-8 rounded-3xl border border-line bg-surface p-8 md:p-10">
      <p className="kicker">Direct email</p>
      <h2 className="font-display mt-3 max-w-[520px] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight">
        Write to us — we read everything.
      </h2>
      <p className="mt-4 max-w-[560px] text-muted">
        Questions about Muse AI, a correction for a guide, or a partnership idea? Tap
        below and your email app opens with a message addressed to us.
      </p>
      <p className="mt-6 font-mono text-lg font-medium tracking-wide text-ink md:text-xl">
        {SITE.contactEmail}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={mailto}
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-bold text-accent-ink transition-all duration-150 hover:-translate-y-0.5"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 5.5l5 3.5 5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Compose email
        </a>
        <CopyButton text={SITE.contactEmail} label="Copy email address" />
      </div>
      <p className="mt-6 text-sm text-faint">
        We usually reply within a couple of days. Your details are only used to answer
        your query — see our{" "}
        <a
          href="/privacy"
          className="font-semibold text-muted underline-offset-4 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export default function ContactPage() {
  const accessKey = (process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "").trim();
  const formEnabled = accessKey.length > 0;

  return (
    <LegalPage
      slug="contact"
      kicker="Contact"
      title="Get in touch"
      deck="Questions about Muse AI, a broken link, a correction — or a partnership idea. Choose whichever way suits you."
    >
      {formEnabled ? (
        <Reveal delay={40}>
          <ContactForm accessKey={accessKey} />
          <p className="mt-8 border-t border-line pt-6 text-sm text-faint">
            Prefer email? Write directly to{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-bold text-accent underline-offset-4 hover:underline"
            >
              {SITE.contactEmail}
            </a>
            .
          </p>
        </Reveal>
      ) : (
        <Reveal delay={40}>
          <EmailDirect />
        </Reveal>
      )}
      <Reveal delay={80}>
        <div className="mt-8 rounded-3xl border border-line bg-surface p-8 md:p-10">
          <p className="kicker">Telegram</p>
          <h2 className="font-display mt-3 max-w-[520px] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight">
            Follow along on Telegram.
          </h2>
          <p className="mt-4 max-w-[560px] text-muted">
            Quick updates, new guides, and AI news as it happens — join the
            channel and never miss a post.
          </p>
          <div className="mt-6">
            <a
              href={SITE.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-bold text-accent-ink transition-all duration-150 hover:-translate-y-0.5"
            >
              Join @museaicode{" "}
              <span aria-hidden="true" className="text-sm">
                ↗
              </span>
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-8 rounded-3xl border border-line bg-surface p-8 md:p-10">
          <p className="kicker">Instagram</p>
          <h2 className="font-display mt-3 max-w-[520px] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight">
            Daily reels & visual guides.
          </h2>
          <p className="mt-4 max-w-[560px] text-muted">
            Muse tips, AI news in 30 seconds, and prompt demos — follow
            @museaicodes for the visual side of the site.
          </p>
          <div className="mt-6">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-accent px-8 py-3.5 font-bold text-accent-ink transition-all duration-150 hover:-translate-y-0.5"
            >
              Follow @museaicodes{" "}
              <span aria-hidden="true" className="text-sm">
                ↗
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </LegalPage>
  );
}
