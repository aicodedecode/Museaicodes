export const SITE = {
  name: "Muse Hub",
  domain: "museaicodes.com",
  baseUrl: "https://www.museaicodes.com",
  tagline: "The ultimate unofficial Muse AI guide hub",
  description:
    "Independent Muse AI guides: invite and referral codes, tutorials, WhatsApp tips, use cases, reviews, and honest comparisons with ChatGPT, Claude, and Meta AI.",
  referralCodes: ["3C77QC", "N8DCUB"] as const,
  skillsUrl: "https://museai-eight.vercel.app/",
  contactEmail: "aiprofit.in@gmail.com",
  updated: "September 26, 2026",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/compare", label: "Compare" },
  { href: "/updates", label: "Updates" },
  { href: "/about", label: "About" },
] as const;

export const REDEEM_HREF = "/#redeem" as const;
