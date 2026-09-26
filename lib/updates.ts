export type UpdateTag = "Launch" | "Features" | "Traction";

export interface UpdateEntry {
  slug: string;
  /** ISO date, newest first. */
  date: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  tags: UpdateTag[];
}

export const UPDATE_TAGS: ("All" | UpdateTag)[] = [
  "All",
  "Launch",
  "Features",
  "Traction",
];

/**
 * Muse news & updates, newest first. Facts verified from the linked sources.
 * Resource spotlights (Meta's FAQ, design notes) are dated by when they were
 * added to our tracked library — the summary says so explicitly.
 */
export const UPDATES: UpdateEntry[] = [
  {
    slug: "muse-traction-surge-september-2026",
    date: "2026-09-25",
    title: "Muse passes 3.4M downloads and holds #1 on both app stores",
    summary:
      "TechCrunch reports Sensor Tower estimates of 3.4M+ Muse downloads since the September 8 launch (Apptopia puts it at 4.3M, Appfigures at 2.3M). Muse hit #1 on the U.S. App Store on September 18 and Google Play on September 19. First-two-weeks download growth averaged 55% day-over-day, versus 24% for ChatGPT's launch. Daily active users climbed 27% after Meta Connect. The app remains U.S. and Canada only, and Meta's own ads account for just 6% of impressions — most growth is organic.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/",
    tags: ["Traction"],
  },
  {
    slug: "meta-connect-muse-announcements",
    date: "2026-09-23",
    title: "Meta Connect: video chat, Mac computer use, email, and glasses coming to Muse",
    summary:
      "At its Meta Connect developer conference (week of September 21), Meta announced a wave of upcoming Muse features: video chat with the Muse avatar, computer use on the Mac, a dedicated Muse email address, more partners and connectors, and smart-glasses integrations. Availability timelines for each feature haven't been detailed yet.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/",
    tags: ["Features"],
  },
  {
    slug: "muse-tops-us-app-store",
    date: "2026-09-18",
    title: "Muse reaches #1 on the U.S. App Store",
    summary:
      "Ten days after launch, Muse climbed to the top of the U.S. App Store on September 18 and reached #1 on Google Play the next day, retaining both rankings since, according to Sensor Tower data reported by TechCrunch. Meta began cross-promoting Muse to Facebook and Instagram users on September 9, a day after launch.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/",
    tags: ["Traction"],
  },
  {
    slug: "muse-launches-september-2026",
    date: "2026-09-08",
    title: "Meta launches Muse, its personal AI agent",
    summary:
      "Meta launches Muse on September 8, 2026 — a personal AI agent that goes beyond chat: it browses the web, completes multi-step tasks, creates documents and images, connects to apps, and keeps working in the background. Early invite and referral codes begin circulating the same week.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/",
    tags: ["Launch"],
  },
  {
    slug: "meta-official-faq-tracked",
    date: "2026-09-26",
    title: "Added to our library: Meta's official Muse FAQ",
    summary:
      "We've added Meta's official FAQ (ai.meta.com/muse) to our tracked sources. Key confirmations: Muse is free with a usage limit (upgrade to a paid subscription or wait for the refresh when it's exhausted), it asks permission before sending messages, making purchases, or sharing information (allow once, always, or deny), and it keeps working in the background after you close the app.",
    sourceName: "Meta",
    sourceUrl: "https://ai.meta.com/muse/",
    tags: ["Features"],
  },
  {
    slug: "meta-design-notes-tracked",
    date: "2026-09-26",
    title: "Added to our library: Meta's 'How We Designed Muse' notes",
    summary:
      "We've added the Muse design team's notes (introducing.muse.ai) to our tracked sources. Notable details: the product's system prompt opens with 'Your purpose is to make your user's life better'; Muse runs its own computer with a file system and terminal plus a full web browser; it produces Artifacts (documents, PDFs, web pages, dashboards); and it ships a Goals tab, approval cards for irreversible actions, and an adjustable proactivity model.",
    sourceName: "Meta",
    sourceUrl: "https://introducing.muse.ai/",
    tags: ["Features"],
  },
];

export function formatUpdateDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
