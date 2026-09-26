import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Muse Hub is an unofficial, independent guide — not affiliated with Meta. Content is informational; referral rewards vary and are never guaranteed.",
  alternates: { canonical: `${SITE.baseUrl}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      slug="disclaimer"
      kicker="Legal · Disclaimer"
      title="Disclaimer"
      deck="The honest fine print: who we are, what this content is (and isn't), and why you should always verify promotions in the official app."
    >
      <h2>Unofficial and independent</h2>
      <p>
        Muse Hub is an independent publication. It is <strong>not affiliated with, endorsed
        by, or sponsored by Meta</strong> or any of its products, including Muse. “Muse” and
        related marks belong to their respective owners, and references on this site are for
        identification only.
      </p>

      <h2>Informational content only</h2>
      <p>
        Everything on this site — guides, tutorials, comparisons, and reviews — is published
        for general information and learning. It is not professional, legal, financial, or
        technical advice. AI products change quickly: features, availability, pricing, and
        limits described here may be outdated. Verify important details against official
        sources before acting on them.
      </p>

      <h2>Referral codes and token rewards</h2>
      <p>
        Invite and referral codes mentioned on this site (including any codes we publish)
        are subject to the provider’s promotional terms, which can change without notice.
        Token rewards are <strong>promotional, variable, and never guaranteed</strong> —
        amounts, eligibility, and deadlines differ by account, region, and date. The
        in-app invite or redeem screen is the source of truth for your account.
      </p>

      <h2>Accuracy</h2>
      <p>
        We work to keep content accurate and current, but we make no warranties about
        completeness or correctness. If you spot an error, please tell us via the{" "}
        <a href="/contact">contact page</a> — corrections are welcome.
      </p>

      <h2>External links</h2>
      <p>
        Links to third-party sites (including official product pages and our skills
        catalog) are provided for convenience. We don’t control those sites and aren’t
        responsible for their content, policies, or practices.
      </p>

      <h2>Advertising</h2>
      <p>
        This site may display third-party advertising. Advertisers — not Muse Hub — are
        responsible for the claims in their ads. See our{" "}
        <a href="/affiliate-disclosure">Affiliate Disclosure</a> for how we may earn from
        codes and links.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer:{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
