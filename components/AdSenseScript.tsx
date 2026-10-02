/**
 * AdSense loader.
 *
 * VERIFICATION IS LIVE (2026-10-02): the account verification script is in
 * <head> on every page so Google can review the site. Loading adsbygoogle.js
 * alone renders no ads — ad units stay off until the account is approved.
 *
 * AFTER APPROVAL (user confirms in the AdSense dashboard):
 *  1. Enable the AdSlot units: set NEXT_PUBLIC_ADSENSE_ENABLED=true in Vercel
 *     env vars (or ask me and I'll flip it in code) — then redeploy.
 *  2. Create ad units in AdSense and put their IDs in AdSlot's AD_SLOT_ID
 *     (or use Auto Ads, which needs no slot IDs).
 *  3. In AdSense go to Privacy & messaging and enable the European
 *     regulations message (Google-certified CMP) — required for UK/EEA
 *     traffic, which this site gets.
 *
 * Publisher ID: override with NEXT_PUBLIC_ADSENSE_CLIENT if it ever changes.
 *
 * CONSENT (required by Google since Jan 2024, still in force 2026):
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

// Publisher IDs are public by design (they ship in page source and ads.txt).
const CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1661535262455084";

export default function AdSenseScript() {
  if (!CLIENT) return null;

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
