/**
 * Connectors directory data: the services Muse actually connects to.
 *
 * Verification discipline: every entry below was checked on
 * September 28, 2026 against Meta launch reporting and the connector
 * lists Meta's AI leadership named publicly (Alexandr Wang's launch-week
 * X post, quoted in launch coverage). Status meanings —
 * "live": the connector ships and works now;
 * "announced": Meta unveiled it with no firm ship date;
 * "reported": press-reported, availability varies.
 * If a connector can't be verified, it doesn't belong here.
 */

export type ConnectorStatus = "live" | "announced" | "reported";

export interface Connector {
  slug: string;
  name: string;
  category: string;
  status: ConnectorStatus;
  lastVerified: string; // e.g. "September 28, 2026"
  tagline: string; // one line
  whatItDoes: string[]; // 3–5 bullets
  howToConnect: string[]; // steps; honest when Meta hasn't published steps
  exampleTasks: string[];
  examplePrompts: { title: string; prompt: string }[]; // 2–3
  limitations: string[];
  sourceName: string;
  sourceUrl: string; // where it was verified
  guideSlug?: string;
}

export const CONNECTORS: Connector[] = [
  {
    slug: "gmail",
    name: "Gmail",
    category: "Productivity",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Give Muse read — or send — access to your inbox.",
    whatItDoes: [
      "Searches your mail so Muse can find invoices, confirmations, and receipts on demand.",
      "Drafts replies for you to review, and sends them once you approve.",
      "Triages the inbox down to what matters — newsletters, promos, and noise stay out of the way.",
      "You choose the permission level: read-only, or read plus send.",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings → Connectors.",
      "Choose Gmail, then sign in with your Google account and grant the permissions you want.",
      "Prefer read-only first; you can widen access to sending later.",
      "Approvals are on by default for sending, so nothing goes out without you.",
    ],
    exampleTasks: [
      "Triage my inbox down to only what matters today.",
      "Draft replies to this morning's unread emails.",
      "Find every invoice due this week and list the amounts and due dates.",
      "Watch for flight confirmations and build a trip summary from them.",
    ],
    examplePrompts: [
      {
        title: "Inbox triage",
        prompt:
          "Go through my unread Gmail and give me a prioritized list of the 10 messages that actually need my attention, with a one-line summary of each.",
      },
      {
        title: "Bill watch",
        prompt:
          "Search my Gmail for bills and invoices due in the next 7 days and tell me the vendor, amount, and due date for each.",
      },
      {
        title: "Draft replies",
        prompt:
          "Draft a reply to the three most urgent unread emails in my Gmail. Keep each under 80 words and don't send anything — I'll review first.",
      },
    ],
    limitations: [
      "Sending email requires your approval each time by default — there is no fully-autonomous send.",
      "One-time codes, password-reset links, and login links are stripped from mail before Muse sees them, so it can't complete those flows for you.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "The AI Corner — Meta Muse Operating Manual",
    sourceUrl:
      "https://www.the-ai-corner.com/p/meta-muse-operating-manual-prompts-money-recovery-connector-play-2026",
  },
  {
    slug: "google-calendar",
    name: "Google Calendar",
    category: "Productivity",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Muse can read your schedule — and change it.",
    whatItDoes: [
      "Reads your calendar so Muse can answer questions about your day, week, or availability.",
      "Adds, moves, and cancels events on request.",
      "Pairs with the Gmail connector: Muse can turn flight confirmations and invitations into calendar events.",
      "Works with queued background tasks — it can watch for schedule conflicts while you do other things.",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings → Connectors.",
      "Choose Google Calendar, then sign in with your Google account and grant access.",
      "Review what Muse adds or moves the first few times — it learns your phrasing.",
    ],
    exampleTasks: [
      "What's my schedule look like tomorrow?",
      "Move my 3pm to Thursday and tell the attendees.",
      "Find a free 90-minute block this week for deep work.",
      "Add the dates from these school emails to the family calendar.",
    ],
    examplePrompts: [
      {
        title: "Day briefing",
        prompt:
          "Look at my Google Calendar and give me a briefing on today: what's first, where I need to be, and any gaps I could use.",
      },
      {
        title: "Conflict check",
        prompt:
          "Before I confirm dinner on Friday, check my Google Calendar for conflicts and tell me when I'm free that evening.",
      },
    ],
    limitations: [
      "Available only where Muse is available (US and Canada).",
      "Events Muse creates or moves are attributed to you — review anything with attendees before relying on it.",
      "Granular per-calendar permissions depend on the Google sign-in you complete; start conservative.",
    ],
    sourceName: "The AI Corner — Meta Muse Operating Manual",
    sourceUrl:
      "https://www.the-ai-corner.com/p/meta-muse-operating-manual-prompts-money-recovery-connector-play-2026",
  },
  {
    slug: "outlook",
    name: "Outlook",
    category: "Productivity",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "The Microsoft-flavored inbox and calendar for Muse.",
    whatItDoes: [
      "Named by Meta's AI chief Alexandr Wang in the launch-week connector list alongside Gmail and Google Calendar.",
      "Gives Muse access to Outlook email and calendar, so the same inbox-triage and scheduling tasks work for Microsoft accounts.",
      "Least-privilege by design: you decide which connectors are enabled and whether the agent can read or modify information, and you can disconnect at any time.",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings → Connectors.",
      "Choose Outlook, then sign in with your Microsoft account and grant the permissions you want.",
      "Meta hasn't published Outlook-specific scope details — expect the email/calendar pattern to mirror the Gmail and Google Calendar connectors.",
    ],
    exampleTasks: [
      "Summarize my unread Outlook mail into what's urgent and what can wait.",
      "Add next week's meetings from my Outlook calendar to a briefing.",
      "Draft replies to flagged Outlook messages for my review.",
    ],
    examplePrompts: [
      {
        title: "Flag triage",
        prompt:
          "Check my Outlook flagged emails and summarize the ones that need action this week.",
      },
      {
        title: "Meeting prep",
        prompt:
          "Look at my Outlook calendar for tomorrow and draft a one-paragraph brief for each meeting.",
      },
    ],
    limitations: [
      "Meta hasn't documented the Outlook connector's exact scopes separately — availability of read vs. send may differ from Gmail.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Launch coverage of Alexandr Wang's connector list (Newsable)",
    sourceUrl:
      "https://newsable.asianetnews.com/amp/markets/meta-muse-ai-launch-shopify-y-combinator-ceos-praise-new-tool-as-alexandr-wang-touts-major-app-integrations-articleshow-gzlm0lm",
  },
  {
    slug: "facebook",
    name: "Facebook",
    category: "Social",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Muse can read your saved posts, messages, and feed.",
    whatItDoes: [
      "Connects automatically through Accounts Center if your Facebook is already linked there.",
      "Lets Muse read your saved posts, messages, and feed to act on them.",
      "Turns saved content into action — e.g., saved recipe posts become a grocery list.",
      "Marketplace is also listed among the Meta services Muse can access.",
    ],
    howToConnect: [
      "Facebook links through Accounts Center: if your Facebook is already connected there, Muse picks it up automatically.",
      "If not, open the Muse app, go to Settings → Connectors, choose Facebook, and link it via Accounts Center.",
      "Ask Muse what it can see, and tighten or disconnect the link any time.",
    ],
    exampleTasks: [
      "Turn my saved recipe posts into a grocery list.",
      "Summarize the unread messages I'm actually behind on.",
      "What's happening in my feed that I should care about today?",
    ],
    examplePrompts: [
      {
        title: "Saved to shopping list",
        prompt:
          "Look at the recipe posts I've saved on Facebook and turn them into one grocery list, grouped by aisle.",
      },
      {
        title: "Catch-up summary",
        prompt:
          "Summarize the most important unread Facebook messages from the last 48 hours in one paragraph.",
      },
    ],
    limitations: [
      "This is one of your personal Meta accounts — treat anything you connect as visible to the agent.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Muse connector guides (Parallel Web, via GitHub)",
    sourceUrl:
      "https://github.com/parallel-web/parallel-llms-txt/blob/HEAD/public/articles/best-mcp-servers-for-meta-muse.md",
  },
  {
    slug: "instagram",
    name: "Instagram",
    category: "Social",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Saved Reels in, grocery lists out.",
    whatItDoes: [
      "Connects automatically through Accounts Center if your Instagram is already linked there.",
      "Lets Muse read your saved posts, messages, and feed.",
      "The classic demo: saved Instagram recipe Reels become a grocery list without you transcribing anything.",
      "Can also be used as the sign-in identity when you create a Muse account.",
    ],
    howToConnect: [
      "Instagram links through Accounts Center: already-linked accounts connect automatically.",
      "Otherwise, in the Muse app go to Settings → Connectors, choose Instagram, and link it via Accounts Center.",
      "You can sign in to Muse itself with Instagram or Facebook, then age-verify with a card or the linked account.",
    ],
    exampleTasks: [
      "Turn my saved recipe Reels into a grocery list.",
      "What did I save this week that I haven't looked at again?",
      "Summarize my Instagram DMs I haven't replied to.",
    ],
    examplePrompts: [
      {
        title: "Reels to grocery list",
        prompt:
          "Look at the recipe Reels I've saved on Instagram this week and turn them into one grocery list, merged and deduplicated.",
      },
      {
        title: "DM catch-up",
        prompt:
          "Summarize the Instagram DMs I haven't replied to in the last three days.",
      },
    ],
    limitations: [
      "This is one of your personal Meta accounts — treat anything you connect as visible to the agent.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Muse connector guides (Parallel Web, via GitHub)",
    sourceUrl:
      "https://github.com/parallel-web/parallel-llms-txt/blob/HEAD/public/articles/best-mcp-servers-for-meta-muse.md",
  },
  {
    slug: "threads",
    name: "Threads",
    category: "Social",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Your Threads account, linked through Accounts Center.",
    whatItDoes: [
      "Connects automatically through Accounts Center if your Threads is already linked there.",
      "Lets Muse read your saved posts, messages, and feed.",
      "Keeps your cross-Meta context in one place — what you save on Threads, Muse can use anywhere else it helps.",
    ],
    howToConnect: [
      "Threads links through Accounts Center: already-linked accounts connect automatically.",
      "Otherwise, in the Muse app go to Settings → Connectors and choose Threads.",
      "Meta hasn't published Threads-specific connector scopes beyond the Accounts Center linking.",
    ],
    exampleTasks: [
      "What did I save on Threads this week?",
      "Summarize the threads I haven't caught up on.",
    ],
    examplePrompts: [
      {
        title: "Weekly saves",
        prompt:
          "List the posts I saved on Threads this week with a one-line summary of each.",
      },
    ],
    limitations: [
      "Meta hasn't published Threads-specific connector scopes beyond the Accounts Center linking — expect read-style access to saved posts and feed.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Muse connector guides (Parallel Web, via GitHub)",
    sourceUrl:
      "https://github.com/parallel-web/parallel-llms-txt/blob/HEAD/public/articles/best-mcp-servers-for-meta-muse.md",
  },
  {
    slug: "messenger",
    name: "Messenger",
    category: "Social",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Meta's chat app, accessible to your Muse agent.",
    whatItDoes: [
      "Named by Meta's AI chief Alexandr Wang in the launch-week connector list among the Meta-specific services Muse can access.",
      "Sits alongside Instagram, Facebook, Threads, and Marketplace as a native Meta surface Muse reaches.",
      "Muse can also be reached inside Meta's messaging apps, so conversations can start where your chats already are.",
    ],
    howToConnect: [
      "Meta hasn't published Messenger-specific connection steps — check Settings → Connectors in the Muse app for the current entry.",
      "Expect it to follow the Meta-family pattern: link via Accounts Center or the in-app connector flow.",
    ],
    exampleTasks: [
      "Summarize the Messenger threads I'm behind on.",
      "Draft a reply to the last message in my unread Messenger chats.",
    ],
    examplePrompts: [
      {
        title: "Catch-up",
        prompt:
          "Summarize my unread Messenger conversations from the last 48 hours and flag anything that needs a reply.",
      },
    ],
    limitations: [
      "Meta hasn't published the full scope list for the Messenger connector — what's readable vs. sendable isn't documented.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Launch coverage of Alexandr Wang's connector list (Newsable)",
    sourceUrl:
      "https://newsable.asianetnews.com/amp/markets/meta-muse-ai-launch-shopify-y-combinator-ceos-praise-new-tool-as-alexandr-wang-touts-major-app-integrations-articleshow-gzlm0lm",
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    category: "Chat",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Muse inside WhatsApp — for short, focused threads.",
    whatItDoes: [
      "Muse ships as a chat you can reach inside WhatsApp — no separate app needed for quick asks.",
      "Suited to short, focused threads: thinking through a decision, drafting a message, planning something small.",
      "Distinct from Meta AI, the assistant already inside WhatsApp — Muse is the personal agent.",
    ],
    howToConnect: [
      "Open WhatsApp and look for the Muse chat — it appears as a contact you can message directly.",
      "Sign in with your Meta account if prompted, and confirm you're 18 or older.",
      "Start chatting. If the chat isn't visible, it hasn't rolled out to your account yet.",
    ],
    exampleTasks: [
      "Think through a decision in a short chat thread.",
      "Draft a tricky message and iterate on the tone.",
      "Plan a weekend trip in quick back-and-forth messages.",
    ],
    examplePrompts: [
      {
        title: "Decision thread",
        prompt:
          "Help me decide between the two dinner options for Friday. Ask me one question at a time until we land on a choice.",
      },
      {
        title: "Message draft",
        prompt:
          "Draft a polite message to my landlord asking for the leak repair timeline, firm but friendly.",
      },
    ],
    limitations: [
      "Live since the September 2026 launch, but rolling out in stages — availability varies by account and region.",
      "WhatsApp is best for short threads; heavy multi-app tasks belong in the full Muse app.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "TechCrunch — Muse launch coverage (September 2026)",
    sourceUrl: "https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/",
    guideSlug: "muse-ai-whatsapp",
  },
  {
    slug: "spotify",
    name: "Spotify",
    category: "Music",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Your listening history, working for your routines.",
    whatItDoes: [
      "The first major music-streaming platform announced for the Muse connector ecosystem.",
      "Reads your listening history so music can respond to your schedules and activities.",
      "Builds playlists on request — a read-only mode is available if you don't want it changing anything.",
      "Named in Alexandr Wang's launch-week connector list.",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings → Connectors.",
      "Choose Spotify, then sign in with your Spotify account.",
      "Prefer read-only mode until you trust what it builds for you.",
    ],
    exampleTasks: [
      "Build a playlist for my morning run from what I've been playing.",
      "Make a focus playlist for deep work, no lyrics.",
      "What have I been overplaying this month?",
    ],
    examplePrompts: [
      {
        title: "Workout playlist",
        prompt:
          "Look at my recent Spotify listening history and build me a 45-minute workout playlist that matches my taste.",
      },
      {
        title: "Focus mix",
        prompt:
          "Create a 2-hour instrumental focus playlist on Spotify based on what I listen to while working.",
      },
    ],
    limitations: [
      "Music taste is personal — review what it builds before it lands in your library.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "La Porte Pilot — Spotify Integrates With Meta Muse",
    sourceUrl:
      "https://www.lportepilot.ca/spotify-integrates-with-meta-muse-to-bring-ai-powered-automation-to-music-and-podcasts/",
  },
  {
    slug: "plaid",
    name: "Plaid",
    category: "Finance",
    status: "live",
    lastVerified: "September 28, 2026",
    tagline: "Read-only bank and card data for budgeting tasks.",
    whatItDoes: [
      "Reads connected bank and card accounts through Plaid.",
      "Gives Muse the numbers behind budgeting and spending questions — read-only financial data.",
      "Named in Alexandr Wang's launch-week connector list.",
      "Muse runs on a least-privilege principle: you choose what it can read, and you can disconnect any time.",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings → Connectors.",
      "Choose Plaid, then link your bank or card accounts through Plaid's flow.",
      "Grant read-only access — Muse's budgeting tasks don't need anything more.",
    ],
    exampleTasks: [
      "How much did I spend on dining out this month?",
      "Build a monthly spending breakdown by category.",
      "Flag subscriptions I haven't used in 90 days.",
    ],
    examplePrompts: [
      {
        title: "Spending breakdown",
        prompt:
          "Using my connected accounts, give me a breakdown of this month's spending by category.",
      },
      {
        title: "Subscription audit",
        prompt:
          "Find my recurring subscriptions in my bank data and flag any I haven't been charged usefully for — don't cancel anything, just list them.",
      },
    ],
    limitations: [
      "Read-only by design — Muse can't move money through Plaid.",
      "Giving an AI access to bank accounts is a real trust decision; review what you connect and why.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "The AI Corner — Meta Muse Operating Manual",
    sourceUrl:
      "https://www.the-ai-corner.com/p/meta-muse-operating-manual-prompts-money-recovery-connector-play-2026",
  },
];

export function connectorBySlug(slug: string): Connector | undefined {
  return CONNECTORS.find((c) => c.slug === slug);
}

export const CONNECTOR_CATEGORIES: string[] = Array.from(
  new Set(CONNECTORS.map((c) => c.category))
);
