/**
 * AdSense loader — DISABLED by default.
 *
 * To enable (after your AdSense account is approved):
 *  1. Set NEXT_PUBLIC_ADSENSE_ENABLED=true in Vercel environment variables.
 *  2. Set NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX (your publisher ID).
 *  3. Fill public/ads.txt with the google.com seller line from your AdSense account.
 *
 * CONSENT (required by Google since Jan 2024, still in force 2026):
 * Before flipping the switch, in your AdSense account go to Privacy & messaging
 * and enable the European regulations message (a Google-certified CMP).
 * Personalized ads to visitors in the EEA, UK, and Switzerland require a
 * Google-certified CMP integrated with IAB TCF v2.3 — this site gets real UK
 * traffic, so this step is not optional. Without it, those visitors only get
 * limited/non-personalized ads (lower revenue) and the account risks a policy
 * flag. Google's own CMP needs no code changes — it's configured in the
 * AdSense dashboard and works with the script loaded here.
 *
 * HARD RULES (AdSense Program policies, updated Aug 2026):
 *  - Never click your own ads, never ask anyone to click them.
 *  - No ads near buttons/menus where accidental clicks happen (30% viewport
 *    ad-density ceiling is the working standard — keep ads sparse).
 *  - No interstitial/pop-up ad formats. Auto Ads only if placements stay sane.
 */
import Script from "next/script";

const ENABLED = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

export default function AdSenseScript() {
  if (!ENABLED || !CLIENT) return null;

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT}`}
      crossOrigin="anonymous"
    />
  );
}
