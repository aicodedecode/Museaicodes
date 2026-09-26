import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Muse Hub may earn benefits from referral codes and links on this site. Read how that works and what it means for you.",
  alternates: { canonical: `${SITE.baseUrl}/affiliate-disclosure` },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      slug="affiliate-disclosure"
      kicker="Legal · Transparency"
      title="Affiliate Disclosure"
      deck="Short version: this site may earn benefits when you use the referral codes or links we publish. Our recommendations are genuine — and the details matter."
    >
      <h2>How we may earn</h2>
      <p>
        Muse Hub publishes referral and invite codes (for example, Muse AI invite codes) and
        may link to products, apps, or services. If you use one of our codes or links, we
        may receive a benefit — such as referral tokens, credits, a commission, or another
        promotional reward from the provider.
      </p>
      <p>
        This does not cost you anything extra. In the case of invite codes, the provider’s
        program may also reward <em>you</em> — but reward amounts, eligibility, and
        deadlines vary by account, region, and date. Always confirm the current terms inside
        the official app before relying on them.
      </p>

      <h2>What this means for our content</h2>
      <ul>
        <li>
          <strong>Recommendations are genuine.</strong> We write about tools and offers we
          believe are useful. A potential benefit does not buy a positive review.
        </li>
        <li>
          <strong>Disclosures are visible.</strong> Short disclosure notes appear next to
          referral code panels and monetized links throughout the site — not buried here.
        </li>
        <li>
          <strong>Verify independently.</strong> Promotions change. Treat our pages as a
          starting point and check the provider’s current terms yourself.
        </li>
      </ul>

      <h2>Why this page exists</h2>
      <p>
        Advertising and consumer-protection rules (such as the FTC’s endorsement guidelines)
        require clear, conspicuous disclosure of material connections between a publisher
        and the products it mentions. This page is that disclosure, kept in plain language.
      </p>

      <h2>Questions</h2>
      <p>
        If you’d like to know whether a specific link or code on this site earns us a
        benefit, ask: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> or
        use the <a href="/contact">contact form</a>.
      </p>
    </LegalPage>
  );
}
