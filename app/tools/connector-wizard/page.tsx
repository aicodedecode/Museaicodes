import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConnectorWizard from "@/components/ConnectorWizard";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Muse Connector Setup Wizard: Connect Gmail, Calendar & More (2026)",
  description:
    "A guided Muse connector setup: pick your apps and goal, get an ordered setup checklist with the real connection steps and three copy-paste first prompts — all from our verified connector directory.",
  keywords:
    "muse ai connector setup, how to connect gmail to muse ai, muse ai connectors guide, muse ai setup wizard, connect apps to muse",
  alternates: { canonical: `${SITE.baseUrl}/tools/connector-wizard` },
  openGraph: {
    type: "website",
    title: "Muse Connector Setup Wizard: Connect Gmail, Calendar & More",
    description:
      "Pick your apps and goal — get a guided setup plan with real connection steps and copy-paste first prompts.",
    url: `${SITE.baseUrl}/tools/connector-wizard`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary",
    title: "Muse Connector Setup Wizard: Connect Gmail, Calendar & More",
    description:
      "Pick your apps and goal — get a guided setup plan with real connection steps and copy-paste first prompts.",
  },
};

export default function ConnectorWizardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Muse Connector Setup Wizard",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    url: `${SITE.baseUrl}/tools/connector-wizard`,
    description:
      "Interactive wizard that builds a personalized Muse connector setup plan — documented connection steps and copy-paste first prompts — from the site's verified connector directory.",
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
              { label: "Connector wizard" },
            ]}
          />
          <p className="kicker mt-10">Interactive tool</p>
          <h1 className="font-display mt-4 max-w-[900px] text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight">
            Set up Muse with{" "}
            <em className="font-medium italic text-accent">your apps.</em>
          </h1>
          <p className="mt-5 max-w-[670px] text-[1.1rem] leading-relaxed text-muted">
            Answer two quick questions — which apps you use and what you want
            Muse to do — and this wizard builds your personalized setup plan:
            the exact connection steps for each app plus three copy-paste
            prompts to try first. Every step and prompt comes from our verified
            connector directory, checked September 2026.
          </p>
        </Reveal>

        <div className="mt-10">
          <ConnectorWizard />
        </div>

        <Reveal>
          <div className="mt-12 max-w-[760px] rounded-[22px] border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[1.5rem] font-bold tracking-tight">
              Honest notes
            </h2>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed text-muted">
              <li>
                Every setup step and prompt in this wizard is copied verbatim
                from our{" "}
                <Link
                  href="/connectors"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  verified connector directory
                </Link>{" "}
                — nothing is invented. If Meta hasn&rsquo;t published steps for
                a connector, the entry says so.
              </li>
              <li>
                Connectors are currently available where Muse is available (US
                and Canada), and availability of individual connectors varies by
                account. For connectors you read with, start with read-only
                permissions and widen them only when you trust the setup.
              </li>
              <li>
                New to Muse entirely? Start with{" "}
                <Link
                  href="/guides/how-to-use-muse-ai"
                  className="font-bold text-accent underline-offset-4 hover:underline"
                >
                  how to use Muse AI →
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 max-w-[760px]">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}
