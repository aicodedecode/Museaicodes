export const SITE = {
  name: "museaicodes",
  domain: "museaicodes.com",
  baseUrl: "https://www.museaicodes.com",
  tagline: "The ultimate unofficial Muse AI guide hub",
  description:
    "Independent Muse AI guides: invite and referral codes, tutorials, WhatsApp tips, use cases, reviews, and honest comparisons with ChatGPT, Claude, and Meta AI.",
  referralCodes: ["3C77QC", "N8DCUB"] as const,
  skillsUrl: "https://museai-eight.vercel.app/",
  skillsRepoUrl: "https://github.com/aicodedecode/awesome-muse-skills",
  contactEmail: "aiprofit.in@gmail.com",
  updated: "October 3, 2026",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/compare", label: "Compare" },
  { href: "/news", label: "News" },
  { href: "/tools", label: "Tools" },
  { href: "/prompts", label: "Prompts" },
  { href: "/about", label: "About" },
] as const;

/** Secondary hubs, shown in the desktop "More" dropdown and the mobile menu. */
export const MORE_LINKS = [
  { href: "/encyclopedia", label: "Encyclopedia" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/connectors", label: "Connectors" },
  { href: "/templates", label: "Templates" },
  { href: "/codes", label: "Codes" },
  { href: "/deals", label: "Deals" },
  { href: "/apps", label: "App Guide" },
] as const;

export const REDEEM_HREF = "/#redeem" as const;
