import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How museaicodes collects, uses, and protects your information — including cookies, Google advertising, and contact-form data.",
  alternates: { canonical: `${SITE.baseUrl}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      slug="privacy"
      kicker="Legal · Privacy"
      title="Privacy Policy"
      deck="What museaicodes collects, why it collects it, and the choices you have — including how advertising cookies work on this site."
    >
      <p>
        museaicodes (“we”, “this site”) is an independent guide to Muse AI, published at{" "}
        {SITE.domain}. This policy explains what information we collect when you visit, how we
        use it, and your options. If you have questions about this policy, email us at{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us directly</h3>
      <ul>
        <li>
          <strong>Contact form:</strong> when you write to us through the{" "}
          <a href="/contact">contact page</a>, we receive your name, email address, subject,
          and message. We use these details only to read and reply to your query.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Basic technical logs:</strong> our hosting provider may record standard
          request data such as IP address, browser type, pages visited, and timestamps, used
          for security and reliability.
        </li>
        <li>
          <strong>Preferences:</strong> your theme choice (dark or light mode) is stored in
          your own browser so the site remembers it. It is never sent to us.
        </li>
        <li>
          <strong>Cookies:</strong> small files stored by your browser, described in our{" "}
          <a href="/cookies">Cookie Policy</a>.
        </li>
      </ul>

      <h2>Cookies and advertising</h2>
      <p>
        We may display advertising served by Google AdSense. Google and its partners use
        cookies to serve ads based on your prior visits to this and other websites. Google’s
        use of advertising cookies enables it and its partners to serve personalized ads to
        you.
      </p>
      <ul>
        <li>
          You can opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </li>
        <li>
          You can also opt out of some third-party vendors’ cookies for personalized
          advertising at{" "}
          <a
            href="https://optout.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info/choices
          </a>
          .
        </li>
      </ul>
      <p>
        Third-party vendors, including Google, may use cookies to collect information about
        your visits for ad measurement and personalization. We do not control these
        third-party cookies; their use is governed by the vendors’ own privacy policies.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To operate and improve the site and its content.</li>
        <li>To respond to messages sent through the contact form.</li>
        <li>To keep the site secure and prevent abuse.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share contact-form details
        with advertisers or data brokers.
      </p>

      <h2>Data retention</h2>
      <p>
        Contact-form messages are kept only as long as needed to handle your query and for a
        reasonable period afterwards for reference. Technical logs are retained briefly by our
        hosting provider and then discarded.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to request access to, correction
        of, or deletion of your personal information. To make such a request, email{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> and we will respond
        within a reasonable time.
      </p>

      <h2>Children’s privacy</h2>
      <p>
        This site is not directed at children under 13, and we do not knowingly collect
        personal information from children. If you believe a child has sent us personal
        information, contact us and we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the site evolves — for example when advertising or
        analytics features are enabled. The “Updated” date at the top of this page will
        change, and significant changes will be noted here.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy question or request:{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
