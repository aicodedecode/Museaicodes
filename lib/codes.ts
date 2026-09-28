import { SITE } from "./site";

/**
 * Copy constants for the /codes directory page.
 * Data stays in lib/community-codes.ts (community codes) and lib/site.ts
 * (owner codes); this file holds page copy only.
 */

export const CODES_HERO = {
  kicker: "Invite & referral codes",
  lede:
    "A directory of Muse invite and referral codes: the site owner's featured codes, community-submitted codes, how codes work, and how to share your own. Everything on this page is free — no logins, no paywalls.",
  shortAnswer:
    "A Muse AI invite or referral code is a code shared by an existing user. If your account is eligible, enter it in the in-app invite or redeem screen within the window shown there. Perks vary by account, region, and date — the in-app screen is the source of truth.",
} as const;

export interface CodeStep {
  heading: string;
  body: string;
}

export const CODES_STEPS: CodeStep[] = [
  {
    heading: "Invite vs referral: the same thing in practice",
    body: "People use the terms interchangeably, and in the product they usually mean the same thing — a code from an existing user that a new account enters. The labels don't matter; the terms shown on the in-app screen do.",
  },
  {
    heading: "Redeem inside the app, within the window",
    body: "Enter the code in the invite or redeem area of your Muse account — never on a third-party page that asks for your login. Some offers expect redemption within a short window, so don't sit on a code once you have one.",
  },
  {
    heading: "Who can use them: 18+, US & Canada",
    body: "Muse availability and its invite program are currently US and Canada focused, and eligibility rules (including age 18+) can differ by account and region. If the option doesn't appear in your app, your account or region isn't eligible right now.",
  },
  {
    heading: "Perks vary — confirm in the app",
    body: "Promotional rewards are not fixed prices. Amounts, eligibility, timing, and availability change by account, region, and date. Treat any headline number as a starting point and confirm the live terms in Muse's invite or redeem screen before relying on it.",
  },
];

export const RELATED_CODE_GUIDES = [
  {
    href: "/guides/muse-ai-referral-code",
    title: "Muse AI Referral Code Guide",
    deck: "How referral codes work, the referrer checklist, and what to verify first.",
  },
  {
    href: "/guides/muse-ai-redeem-code",
    title: "Redeem Code: Step-by-Step",
    deck: "Where to enter a code in the app and how to confirm the reward applied.",
  },
  {
    href: "/guides/muse-ai-invite-code",
    title: "Invite Code: How Access Works",
    deck: "Using an invite safely, what to verify, and what to do if a code doesn't work.",
  },
  {
    href: "/guides/muse-ai-billion-tokens",
    title: "The 1 Billion Tokens Breakdown",
    deck: "What the headline token offer actually means — and its limits.",
  },
] as const;

export const COMMUNITY_STATUS_NOTE =
  "Community codes are user-submitted and reviewed by a human before publishing, but we can't continuously verify each one — the in-app redeem screen is the source of truth. Perks vary by account, region, and date; confirm in the app.";

/** The /codes page URL, used by JsonLd and share links. */
export const CODES_URL = `${SITE.baseUrl}/codes`;
