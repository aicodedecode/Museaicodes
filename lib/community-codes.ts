import { SITE } from "./site";

export interface CommunityCode {
  /** The referral code, uppercase alphanumeric. */
  code: string;
  /** Display name or handle of the contributor. */
  name: string;
  /** Month/year the code was published, e.g. "September 2026". */
  added: string;
}

/**
 * Community-submitted Muse referral codes, published after manual review.
 *
 * Workflow: a reader emails their code to SITE.contactEmail → the site owner
 * verifies it looks valid → the code is added here and the site is rebuilt.
 * Nothing is published automatically, which keeps fake/expired codes out.
 *
 * The owner's own codes (SITE.referralCodes) are NOT listed here — they are
 * always featured and highlighted separately at the top of the section.
 */
export const COMMUNITY_CODES: CommunityCode[] = [
  { code: "RTI0UK", name: "Cloud", added: "September 2026" },
  { code: "KJXX15", name: "angular", added: "September 2026" },
  { code: "ZB1CJM", name: "A010", added: "September 2026" },
  { code: "9DO3IE", name: "Sagar Khengat", added: "September 2026" },
];

/** Prefilled email for submitting a code for review. */
export function submitCodeMailto(): string {
  const subject = encodeURIComponent("My Muse AI referral code for Muse Hub");
  const body = encodeURIComponent(
    `Hi,\n\nPlease consider publishing my Muse referral code:\n\nMy code: \nName to display: \n\nI confirm this is my own referral code from my Muse account.\n\nThanks!`
  );
  return `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
}
