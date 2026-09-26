import { SITE } from "@/lib/site";
import { CopyButton } from "./Toast";
import Reveal from "./Reveal";

/**
 * Referral code panel. Codes are the owner's — prominent, tap-to-copy.
 * Reward wording stays soft per policy: "terms vary, confirm in the app".
 */
export default function ReferralCodes({ compact = false }: { compact?: boolean }) {
  return (
    <Reveal>
      <div
        className={`rounded-[26px] border border-line bg-surface p-6 md:p-8 ${
          compact ? "" : "md:sticky md:top-24"
        }`}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
          Promotional offer
        </p>
        <p className="mt-6 font-display text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-[0.95] tracking-tight">
          1 billion <em className="font-medium italic text-accent">tokens?</em>
        </p>
        <p className="mt-4 text-[0.95rem] text-muted">
          Some eligible accounts may receive a promotional token reward.
          Amounts, eligibility, timing, and availability vary — confirm the
          current terms in Muse&rsquo;s invite or redeem screen before relying
          on an offer.
        </p>
        <div className="mt-6 grid gap-2.5">
          {SITE.referralCodes.map((code) => (
            <div
              key={code}
              className="flex items-center justify-between gap-3 rounded-xl border border-line bg-bg px-4 py-3"
            >
              <code className="font-mono text-[1.25rem] font-medium tracking-[0.08em]">
                {code}
              </code>
              <CopyButton text={code} label={`Copy referral code ${code}`} />
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-faint">
          Disclosure: these are referral codes. If you sign up with one, both
          accounts may receive promotional credit subject to Muse&rsquo;s
          current terms — terms vary, confirm in the app.
        </p>
        <a
          href="/guides/muse-ai-referral-code#community-codes-h"
          className="mt-4 inline-block text-sm font-bold text-accent underline-offset-4 hover:underline"
        >
          Have your own code? Share it with readers →
        </a>
      </div>
    </Reveal>
  );
}
