/**
 * The current state of Muse's invite/referral offer, maintained by hand.
 * Honest by design: amounts are described as reported in-app promotional
 * terms, never as guarantees. Eligibility varies by account, region, and date
 * — only the Muse app shows the terms that apply to you.
 */
export const OFFER_STATUS = {
  asOf: "September 26, 2026",
  headline: "Muse referral offer: current status",
  summary:
    "Muse accounts can receive promotional token rewards through invite and referral codes, redeemed in the app. The amounts, eligibility, and deadlines shown vary by account, region, and date — what you see in your own Muse invite or redeem screen is the only version that applies to you.",
  details: [
    "Invite and referral codes are redeemed inside the Muse app, in the invite or redeem area (reported under Settings → General). The menu can change as the product evolves.",
    "Community reports describe promotional token grants for eligible new and referring accounts when a code is redeemed within the eligibility window shown in-app. These are reported promotional terms, not guarantees.",
    "Eligibility is account- and region-specific. Muse is currently rolling out in the U.S. and Canada; availability elsewhere varies.",
    "Muse offers free access with a usage limit. When the free allowance is exhausted, you can wait for it to refresh or upgrade to a paid subscription, per Meta's official FAQ.",
    "Never pay for an invite code, and never share passwords or payment details to 'unlock' access. Official access routes don't ask for those.",
    "Reward terms can change or end without notice. If a code doesn't work, the in-app message is the final word — there is no workaround.",
  ],
  history: [
    {
      date: "September 8, 2026",
      note: "Muse launches. Invite and referral codes begin circulating as early users invite others.",
    },
    {
      date: "September 18, 2026",
      note: "Muse reaches #1 on the U.S. App Store, per Sensor Tower estimates.",
    },
    {
      date: "September 19, 2026",
      note: "Muse reaches #1 on the Google Play Store, per Sensor Tower estimates.",
    },
    {
      date: "September 25, 2026",
      note: "At Meta Connect, Meta announces upcoming Muse features: video chat with the Muse avatar, computer use on Mac, a dedicated email address, more partners and connectors, and smart-glasses integrations.",
    },
  ],
} as const;
