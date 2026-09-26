/**
 * AdSense placeholder — DISABLED by default.
 *
 * To enable:
 *  1. Set NEXT_PUBLIC_ADSENSE_ENABLED=true in your Vercel environment variables.
 *  2. Set NEXT_PUBLIC_ADSENSE_CLIENT to your publisher ID (ca-pub-XXXXXXXXXXXXXXXX).
 *  3. Replace AD_SLOT_ID below with your ad unit's data-ad-slot value.
 *  4. Add the AdSense script tag to app/layout.tsx <head>.
 *
 * Until then this component renders nothing — no layout shift, no requests.
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
