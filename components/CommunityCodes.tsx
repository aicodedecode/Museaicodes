import { SITE } from "@/lib/site";
import { COMMUNITY_CODES, submitCodeMailto } from "@/lib/community-codes";
import { CopyButton } from "./Toast";
import Reveal from "./Reveal";

/**
 * Community referral-code board for the referral guide.
 * The owner's codes stay featured and highlighted at the top;
 * reader-submitted codes (manually reviewed) appear below.
 */
export default function CommunityCodes() {
  return (
    <Reveal>
      <section
        aria-labelledby="community-codes-h"
        className="mt-14 overflow-hidden rounded-[26px] border border-line bg-surface"
      >
        <div className="border-b border-line p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Referral codes
          </p>
          <h2
            id="community-codes-h"
            className="font-display mt-3 text-[clamp(1.7rem,3.4vw,2.4rem)] font-extrabold tracking-tight"
          >
            Muse referral codes, from us and the community
          </h2>
          <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-muted">
            Our codes are featured first. Below them are codes shared by
            readers — every submission is reviewed by a human before it appears
            here, so the list stays clean. Reward amounts and eligibility vary;
            confirm the current terms in Muse&rsquo;s invite or redeem screen.
          </p>
        </div>

        {/* Owner's codes — featured and highlighted */}
        <div className="border-b border-line p-6 md:p-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white">
            <span aria-hidden="true">★</span> Featured · Our codes
          </p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {SITE.referralCodes.map((code) => (
              <div
                key={code}
                className="flex items-center justify-between gap-3 rounded-2xl border-2 border-accent bg-bg px-5 py-4 shadow-[var(--shadow)]"
              >
                <div>
                  <code className="font-mono text-[1.5rem] font-semibold tracking-[0.08em]">
                    {code}
                  </code>
                  <p className="mt-1 text-xs text-faint">museaicodes · verified</p>
                </div>
                <CopyButton text={code} label={`Copy our referral code ${code}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Community codes */}
        <div className="p-6 md:p-8">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
            Community codes · {COMMUNITY_CODES.length}
          </h3>
          {COMMUNITY_CODES.length > 0 ? (
            <ul className="mt-4 grid list-none gap-2.5 p-0 sm:grid-cols-2">
              {COMMUNITY_CODES.map((c) => (
                <li
                  key={c.code}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line bg-bg px-4 py-3"
                >
                  <div>
                    <code className="font-mono text-[1.2rem] font-medium tracking-[0.08em]">
                      {c.code}
                    </code>
                    <p className="mt-0.5 text-xs text-faint">
                      Shared by {c.name} · {c.added}
                    </p>
                  </div>
                  <CopyButton text={c.code} label={`Copy community referral code ${c.code}`} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-line bg-bg p-6 text-center">
              <p className="font-bold">No community codes yet — yours could be first.</p>
              <p className="mx-auto mt-2 max-w-[52ch] text-sm leading-relaxed text-muted">
                Have a Muse referral code? Send it to us and we&rsquo;ll review
                it and publish it here with your name.
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl bg-ink p-6 text-bg sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-[1.25rem] font-bold tracking-tight">
                Share your code with thousands of readers
              </p>
              <p className="mt-1 text-sm text-bg/70">
                Email us your code — we review every submission manually before
                publishing, usually within 48 hours.
              </p>
            </div>
            <a
              href={submitCodeMailto()}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Submit your code <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-faint">
            Disclosure: these are referral codes. If you sign up with one, both
            accounts may receive promotional credit subject to Muse&rsquo;s
            current terms — terms vary, confirm in the app. Community codes are
            published after manual review but we can&rsquo;t guarantee any
            individual code still works; the app shows the final terms.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
