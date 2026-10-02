/**
 * AdSense ad unit — DISABLED until the account is approved (renders nothing).
 *
 * Verification script is already live site-wide (components/AdSenseScript.tsx).
 * After the user confirms AdSense approval: set NEXT_PUBLIC_ADSENSE_ENABLED=true
 * in Vercel env vars (or flip it in code) and redeploy, then replace
 * AD_SLOT_ID with a real ad-unit ID from the AdSense dashboard (or use Auto
 * Ads, which needs no slot IDs). See AdSenseScript.tsx for the consent/CMP
 * requirement and policy rules.
 */
const ENABLED = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
// Publisher IDs are public by design (they ship in page source and ads.txt).
const CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-1661535262455084";
const AD_SLOT_ID = "REPLACE_WITH_AD_SLOT_ID";

export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  if (!ENABLED || !CLIENT) return null;

  return (
    <div className="my-10" role="complementary" aria-label={label}>
      <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        {label}
      </p>
      <ins
        className="adsbygoogle block min-h-[120px] text-center"
        style={{ display: "block" }}
        data-ad-client={CLIENT}
        data-ad-slot={AD_SLOT_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
