import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The rules for using Muse Hub: acceptable use, intellectual property, warranties, liability, and how terms may change.",
  alternates: { canonical: `${SITE.baseUrl}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage
      slug="terms"
      kicker="Legal · Terms"
      title="Terms of Use"
      deck="The ground rules for using this site. By browsing Muse Hub, you agree to these terms."
    >
      <h2>Acceptance</h2>
      <p>
        By accessing {SITE.domain} (“the site”), you agree to these Terms of Use and to our{" "}
        <a href="/privacy">Privacy Policy</a>. If you don’t agree, please don’t use the
        site.
      </p>

      <h2>What this site is</h2>
      <p>
        Muse Hub is a free, independent information resource about Muse AI. We may change,
        update, or remove content at any time without notice.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site for any unlawful purpose or in violation of these terms.</li>
        <li>
          Attempt to disrupt the site — including scraping it aggressively, probing for
          vulnerabilities, or submitting spam through the contact form.
        </li>
        <li>
          Misrepresent the site’s content, impersonate its authors, or copy substantial
          portions of it for republication without permission.
        </li>
        <li>Encourage others to click on advertisements displayed on the site.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The site’s original text, design, and code are owned by Muse Hub and protected by
        applicable intellectual-property laws. You may read, share links to, and quote
        brief excerpts with attribution. Product names, logos, and marks mentioned on the
        site belong to their respective owners.
      </p>

      <h2>No warranties</h2>
      <p>
        The site is provided “as is” and “as available,” without warranties of any kind —
        express or implied — including accuracy, completeness, reliability, or fitness for
        a particular purpose. AI products evolve rapidly; always verify critical
        information with official sources.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Muse Hub and its operators are not liable
        for any direct, indirect, incidental, or consequential damages arising from your
        use of (or inability to use) the site — including any loss related to referral
        codes, promotions, or third-party products mentioned here.
      </p>

      <h2>Third-party content and links</h2>
      <p>
        The site links to third-party websites and may display third-party advertising. We
        don’t endorse and aren’t responsible for third-party content, products, or
        practices. Your dealings with advertisers or linked sites are solely between you
        and them.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may revise these terms as the site grows. The “Updated” date at the top of this
        page will reflect the latest version, and continued use of the site after changes
        means you accept the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
