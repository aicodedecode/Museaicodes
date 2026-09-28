export type UpdateTag = "Launch" | "Features" | "Traction" | "Security";

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
  "Security",
];

/**
 * Muse news & updates, newest first. Every entry is dated by its news date and
 * links to a source we fetched and verified — summaries stick to what the
 * source reports, and estimates are labeled as estimates.
 * Resource spotlights (Meta's FAQ, design notes) are dated by when they were
 * added to our tracked library — the summary says so explicitly.
 */
export const UPDATES: UpdateEntry[] = [
  {
    slug: "meta-enterprise-platform-cj-desai",
    date: "2026-09-28",
    title: "Meta launches Enterprise Platform, poaches MongoDB CEO CJ Desai",
    summary:
      "Mark Zuckerberg announced the Meta Enterprise Platform on September 28, calling it the 'next major pillar' of Meta's business. The platform packages Muse, the Meta Business Agent, the Muse API, and Muse Code for business buyers and developers. Former MongoDB CEO Chirantan 'CJ' Desai will lead it as Chief Enterprise Platform Officer, reporting directly to Zuckerberg. The announcement names no enterprise revenue figures, customer commitments, or timetable for a unified offering.",
    sourceName: "RuntimeWire",
    sourceUrl:
      "https://runtimewire.com/article/meta-enterprise-platform-muse-cj-desai",
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
  {
    slug: "marketwatch-muse-viral-hit",
    date: "2026-09-26",
    title: "MarketWatch: Muse is a viral hit, 'now comes the hard part'",
    summary:
      "MarketWatch reports Muse sat atop the U.S. App Store for the past week while Meta's stock rose 31% since the start of the month, and cites Sensor Tower's Thursday report of 3.4M+ downloads across the U.S. and Canada since the September 8 launch. The piece flags ~400 'musecases' Meta has identified (from auditing subscriptions to negotiating parking tickets), JPMorgan's framing of Muse as 'the centerpiece of Meta's AI vision,' and analyst cautions that Meta must turn buzz into everyday habit while earning trust for an agent that handles email, payments, and logins.",
    sourceName: "MarketWatch",
    sourceUrl:
      "https://www.marketwatch.com/story/meta-turned-muse-into-a-viral-hit-now-comes-the-hard-part-fb3177a8",
    tags: ["Traction"],
  },
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
    slug: "muse-early-access-program",
    date: "2026-09-25",
    title: "Meta opens early access program for upcoming Muse features",
    summary:
      "Following the Connect 2026 announcements, Meta opened requests on September 25 for an early access program: users can ask Muse 'Can you let the Muse team know I want to be part of the Muse early access program?' to get on the list. Instead of a closed beta or a randomized A/B group, Meta is recruiting AI enthusiasts to try new capabilities first. Upcoming features teased at Connect include video chat with the Muse avatar, more shopping partnerships and connectors, expanded Mac computer use, and Muse on AI glasses.",
    sourceName: "TechCrunch",
    sourceUrl:
      "https://techcrunch.com/2026/09/25/meta-opens-early-access-program-for-new-muse-features/",
    tags: ["Features"],
  },
  {
    slug: "muse-jolly-avatar-connect",
    date: "2026-09-24",
    title: "Meet Jolly: Muse's customizable avatar, front and center at Connect",
    summary:
      "Connect coverage spotlights Muse's customizable avatar: the default agent — cream-colored with beady black eyes — is named 'Jolly,' for its 'jolly and completely customizable character and personality.' Users can customize names and attire; Zuckerberg's own toga-and-wreath agent, Agrippa, was demoed planning a baking recipe and ordering ingredients. The piece also notes each Muse agent runs on its own private Muse Secure VM, with a Muse Confidential VM planned so that 'even Meta won't be able to see that information.'",
    sourceName: "newsline24",
    sourceUrl:
      "https://newsline24.online/meta-muse-ai-agent-response-animated-avatar-cute-rcna599736/",
    tags: ["Features"],
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
    slug: "muse-charm-keychain-device",
    date: "2026-09-23",
    title: "Meta unveils Muse Charm, a keychain-sized AI companion",
    summary:
      "In a 'one more thing' moment at Meta Connect on September 23, Zuckerberg unveiled the Muse Charm: a puck about the size of an Apple Watch with a tamagotchi-like interactive avatar for real-time voice chat with Muse. A fingerprint sensor in the corner starts a conversation without unlocking a phone or opening an app, and a built-in camera gives Muse visual context. Meta aims to have the Charm on sale by the holiday season; price and full specs haven't been announced yet.",
    sourceName: "MacRumors",
    sourceUrl:
      "https://www.macrumors.com/2026/09/24/meta-did-a-one-more-thing-and-its-an-ai-tamagotchi/",
    tags: ["Launch"],
  },
  {
    slug: "wardle-muse-mac-zero-day-hotfixed",
    date: "2026-09-22",
    title: "Meta hot-fixes Wardle's Muse Mac zero-day",
    summary:
      "Security researcher Patrick Wardle publicly disclosed a zero-day in the Muse Mac app on September 21 and confirmed Meta's hot-fix roughly 16 hours later on September 22. His 'not-a-mused' proof of concept showed an unprivileged local process could modify an undocumented dictation-endpoint setting to redirect dictation to an attacker-controlled server — capturing audio, injecting prompts the agent trusts, and stealing the Muse auth token. Meta's David Singleton described it as a local privilege escalation attack, not a remote exploit. Keep the app updated.",
    sourceName: "Unite.AI",
    sourceUrl:
      "https://www.unite.ai/meta-hot-fixes-muse-zero-day-that-let-attackers-hijack-the-ai-agent/",
    tags: ["Security"],
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
    slug: "muse-1-billion-token-invite-program",
    date: "2026-09-17",
    title: "Meta launches first Muse invite program: 1 billion tokens per user",
    summary:
      "Meta launched its first Muse invite program granting 1 billion tokens per invited user — an unusually large free-usage allowance aimed at driving sustained, heavy hands-on adoption rather than shallow trial sign-ups. Coverage at the time noted that invitation mechanics, token expiration, feature exclusions, and geographic availability weren't fully detailed in the announcement — confirm the live terms in-app before assuming a specific offer.",
    sourceName: "ExplainX",
    sourceUrl:
      "https://www.explainx.ai/blog/meta-muse-1-billion-tokens-per-user-invite-2026",
    tags: ["Launch"],
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
];

export function formatUpdateDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
