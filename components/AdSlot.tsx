/**
 * AdSense ad unit — DISABLED by default (renders nothing until enabled).
 *
 * Enable via NEXT_PUBLIC_ADSENSE_ENABLED=true + NEXT_PUBLIC_ADSENSE_CLIENT in
 * Vercel env. The adsbygoogle.js script is loaded by components/AdSenseScript.tsx
 * (same flags). See that file for the consent/CMP requirement and policy rules.
 */
const ENABLED = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
const CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
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
