import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { CopyButton } from "@/components/Toast";

const DEALS_URL = `${SITE.baseUrl}/deals`;

export const metadata: Metadata = {
  title: "Deals: Manus AI Invite & Hostinger Referral Links (2026)",
  description:
    "The site owner's referral deals in one place: a Manus AI invitation (code 43HHJ) and Hostinger referral links for VPS, web hosting, cloud hosting, and AI agents.",
  keywords:
    "manus ai invite code, manus ai referral, hostinger referral code, hostinger discount link, vps deal",
  alternates: { canonical: DEALS_URL },
  openGraph: {
    type: "website",
    title: "Deals: Manus AI Invite & Hostinger Referral Links",
    description:
      "Our referral deals in one place — Manus AI invitation and Hostinger hosting links, with tap-to-copy codes.",
    url: DEALS_URL,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Deals: Manus AI Invite & Hostinger Referral Links",
    description:
      "Our referral deals in one place — Manus AI invitation and Hostinger hosting links.",
  },
};

const MANUS_INVITE_URL =
  "https://manus.im/invitation/17LLQ88KPFRY?utm_source=invitation&utm_medium=social&utm_campaign=system_share";
const MANUS_CODE = "43HHJ";

const HOSTINGER_CODE = "Museai";
const HOSTINGER_DEALS = [
  {
    name: "Hostinger referral landing",
    blurb:
      "Start here — our referral code applied, then pick any plan. The general front door for the referral.",
    href: "https://www.hostinger.com/in?REFERRALCODE=Museai",
  },
  {
    name: "VPS KVM 1 · 12 months",
    blurb:
      "Entry-level VPS plan with the 12-month cart prefilled and our referral code attached.",
    href: "https://www.hostinger.com/in/cart?product=vps%3Avps_kvm_1&period=12&referral_type=cart_link&REFERRALCODE=Museai&referral_id=01a0f2a3-857c-70bd-81f5-5772ad1413af",
  },
  {
    name: "Unlimited web hosting · 12 months",
    blurb:
      "Shared hosting (Unlimited tier) with the 12-month cart prefilled and our referral code attached.",
    href: "https://www.hostinger.com/in/cart?product=hosting%3Aunlimited&period=12&referral_type=cart_link&REFERRALCODE=Museai&referral_id=01a0f2a4-1b07-7293-a46b-3c70d41e2d6e",
  },
  {
    name: "hAgents Starter · 12 months",
    blurb:
      "Hostinger's AI-agents plan with the 12-month cart prefilled and our referral code attached.",
    href: "https://www.hostinger.com/in/cart?product=hagents%3Astarter&period=12&referral_type=cart_link&REFERRALCODE=Museai&referral_id=01a0f2a4-7ffa-72b5-96c3-80cf01bf1859",
  },
  {
    name: "Cloud Professional hosting · 12 months",
    blurb:
      "Cloud hosting (Professional tier) with the 12-month cart prefilled and our referral code attached.",
    href: "https://www.hostinger.com/in/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=Museai&referral_id=01a0f2a5-193f-73c3-aabd-88d1b4aea50f",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Deals: Manus AI Invite & Hostinger Referral Links (2026)",
      description:
        "The site owner's referral deals: a Manus AI invitation and Hostinger referral links for hosting and VPS plans.",
      url: DEALS_URL,
      inLanguage: "en",
      dateModified: SITE.updated,
      isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.baseUrl },
    },
  ],
};

function DealCard({
  name,
  blurb,
  href,
  cta,
}: {
  name: string;
  blurb: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-line bg-surface p-5 md:p-6">
      <div>
        <h3 className="font-display text-[1.25rem] font-bold tracking-tight">{name}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{blurb}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-accent mt-1 self-start"
      >
        {cta} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function DealsPage() {
  return (
    <main id="main">
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-shell px-5 pb-24 pt-10 md:px-6 md:pt-14">
        {/* Hero */}
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Deals" }]} />
          <p className="kicker mt-10">Deals</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            Referral deals,{" "}
            <em className="font-medium italic text-accent">in one place.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            The referral links we share ourselves — a Manus AI invitation and
            Hostinger hosting deals. Using them costs you nothing extra and
            supports the site.
          </p>
          <div className="mt-6 max-w-[720px] rounded-2xl border border-line bg-surface p-5 md:p-6">
            <p className="text-[1.02rem] leading-relaxed text-muted">
              <strong className="text-ink">Disclosure:</strong> these are
              referral links and codes. If you sign up through them, we may
              receive a benefit — a commission, credit, or promotional reward —
              at no extra cost to you. Read our{" "}
              <a href="/affiliate-disclosure" className="font-bold text-accent underline-offset-4 hover:underline">
                affiliate disclosure
              </a>{" "}
              for the full picture.
            </p>
          </div>
        </Reveal>

        {/* Manus */}
        <Reveal>
          <section id="manus" aria-labelledby="manus-h" className="mt-14 scroll-mt-24">
            <p className="kicker">AI agent · Invite</p>
            <h2
              id="manus-h"
              className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight"
            >
              Manus AI invitation
            </h2>
            <p className="mt-3 max-w-[670px] text-[1.05rem] leading-relaxed text-muted">
              Manus is another general AI agent — it browses the web and works
              through multi-step tasks for you. Access is invite-gated: use our
              invitation link, or enter the invite code wherever Manus asks for
              one.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-surface p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                    Invite code
                  </p>
                  <code className="font-mono mt-1 block text-[1.6rem] font-medium tracking-[0.08em]">
                    {MANUS_CODE}
                  </code>
                </div>
                <div className="flex flex-wrap gap-3">
                  <CopyButton text={MANUS_CODE} label="Copy Manus invite code" />
                  <a
                    href={MANUS_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    Open invitation link <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-faint">
                The invitation link carries our referral. Availability, waitlist
                timing, and any invite rewards are set by Manus — confirm the
                current terms on their page.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Hostinger */}
        <Reveal>
          <section id="hostinger" aria-labelledby="hostinger-h" className="mt-14 scroll-mt-24">
            <p className="kicker">Hosting · Referral</p>
            <h2
              id="hostinger-h"
              className="font-display mt-4 text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight"
            >
              Hostinger deals
            </h2>
            <p className="mt-3 max-w-[670px] text-[1.05rem] leading-relaxed text-muted">
              Web hosting, cloud hosting, VPS, and AI-agent plans with our
              referral code (<code className="font-mono font-medium text-ink">{HOSTINGER_CODE}</code>) already
              applied. The cart links below prefill a 12-month term.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <CopyButton text={HOSTINGER_CODE} label="Copy Hostinger referral code" />
              <span className="text-sm text-faint">
                Referral code: <code className="font-mono font-medium text-ink">{HOSTINGER_CODE}</code>
              </span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {HOSTINGER_DEALS.map((d) => (
                <DealCard key={d.name} {...d} cta="Get this deal" />
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-faint">
              Prices, discounts, and plan details are set by Hostinger and can
              change — the cart page shows the final terms before you pay.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <div className="mt-14">
            <NewsletterSignup />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
