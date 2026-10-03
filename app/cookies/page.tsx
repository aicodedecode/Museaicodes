import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Which cookies and browser storage museaicodes uses — essential, preference, and advertising cookies — and how to manage them.",
  alternates: { canonical: `${SITE.baseUrl}/cookies` },
};

export default function CookiesPage() {
  return (
    <LegalPage
      slug="cookies"
      kicker="Legal · Cookies"
      title="Cookie Policy"
      deck="Plain-language explanation of the cookies and browser storage this site uses, and how you can control them."
    >
      <h2>What cookies are</h2>
      <p>
        Cookies are small text files that a website asks your browser to store. They help
        sites remember preferences, keep things working smoothly, and — when advertising is
        enabled — measure and personalize ads. You can block or delete cookies at any time
        through your browser settings, though some site features may work less conveniently
        without them.
      </p>

      <h2>What this site uses</h2>
      <h3>Strictly necessary</h3>
      <ul>
        <li>
          <strong>Theme preference:</strong> your dark/light mode choice is saved in your
          browser’s local storage so the site looks the way you left it. This never leaves
          your device.
        </li>
        <li>
          <strong>Security and load balancing:</strong> our hosting provider may set
          technical cookies to keep the site fast and secure.
        </li>
      </ul>
      <h3>Preferences and functionality</h3>
      <ul>
        <li>
          <strong>Consent memory:</strong> if we show a cookie-consent banner, your choice is
          remembered so we don’t ask again on every visit.
        </li>
      </ul>
      <h3>Advertising and analytics (when enabled)</h3>
      <ul>
        <li>
          <strong>Google advertising cookies</strong> (including DoubleClick): used by Google
          AdSense to serve and measure ads, including personalized ads based on your visits
          to this and other sites. See the <a href="/privacy">Privacy Policy</a> for
          opt-out links.
        </li>
        <li>
          <strong>Analytics cookies:</strong> if we enable privacy-respecting analytics in
          the future, they will be listed here.
        </li>
      </ul>

      <h2>How to manage cookies</h2>
      <ul>
        <li>
          <strong>Browser settings:</strong> every major browser lets you block, allow, or
          delete cookies — look under Settings → Privacy. Blocking all cookies may affect
          how this and other sites behave.
        </li>
        <li>
          <strong>Ad personalization:</strong> opt out of Google’s personalized ads at{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </li>
      </ul>

      <h2>More detail</h2>
      <p>
        For the full picture of what data we collect and your rights, read our{" "}
        <a href="/privacy">Privacy Policy</a>. Questions? Email{" "}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
