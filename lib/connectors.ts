/**
 * Connectors directory data: the services Muse actually connects to.
 *
 * Official-only verification discipline (September 29, 2026): every entry
 * below is named in one of Meta's own channels — the Meta Help Center
 * article "How Muse works with Connectors", the Meta Connect 2026
 * recap, or the Spotify Newsroom announcement quoting Meta's Alexandr
 * Wang's launch-week connector list. Status meanings —
 * "live": named at launch (Sept 8, 2026) and working now;
 * "announced": Meta unveiled it at Connect 2026 (Sept 23–24) with the
 * rollout landing — not yet confirmed live on all accounts;
 * "reported": press-reported, availability varies (currently unused).
 * If a connector can't be verified in Meta's own channels, it doesn't
 * belong here.
 *
 * Dropped from the old list on 2026-09-29: Outlook and Messenger were
 * never named in Meta's official connector lists (press-sourced only).
 * WhatsApp was removed as a connector because Meta's own Connect 2026
 * recap classifies WhatsApp as a Muse *surface* (app / WhatsApp / web /
 * Mac), not a connector.
 */

export type ConnectorStatus = "live" | "announced" | "reported";

export interface Connector {
  slug: string;
  name: string;
  category: string;
  status: ConnectorStatus;
  lastVerified: string; // e.g. "September 29, 2026"
  website: string; // official homepage of the connected service
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
    slug: "facebook",
    name: "Facebook",
    category: "Meta's own",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.facebook.com",
    tagline: "Your Facebook life, reachable through conversation with Muse.",
    whatItDoes: [
      "Connects your Facebook account to Muse through Meta's Accounts Center",
      "Lets Muse use your Facebook account context in conversations",
      "Works alongside your Instagram and Threads connections from the same Accounts Center link",
    ],
    howToConnect: [
      "Open the Muse app \u2192 Settings \u2192 Connectors",
      "Find Facebook in the list and tap Connect",
      "Read the info about what Muse can access, then tap Continue",
      "Authorize the connection to link your account",
      "If your Facebook account is already linked in Accounts Center, Muse picks it up automatically \u2014 otherwise, link it through Accounts Center first",
      "Approvals are on by default for consequential actions (sends, purchases, bookings)",
      "Available only where Muse is available (US and Canada)",
    ],
    exampleTasks: [
      "Ask Muse to surface recent posts from friends or family",
      "Look up information from your Facebook events and groups",
      "Recall details you've shared in past Facebook conversations",
    ],
    examplePrompts: [
      {
        prompt: "What have my closest friends been posting on Facebook this week?",
        title: "Catch up on your feed"
      },
      {
        prompt: "What Facebook events am I invited to this month?",
        title: "Find event details"
      },
      {
        prompt: "Summarize the discussion in my local community group about the farmers' market.",
        title: "Recall a group discussion"
      },
    ],
    limitations: [
      "Only available where Muse is available (US and Canada)",
      "Requires an Accounts Center link between your Facebook and Meta accounts",
      "Only the data permissions Meta publishes for this connector apply",
    ],
    sourceName: "Meta Help Center \u2014 How Muse works with Connectors",
    sourceUrl: "https://www.meta.com/help/1687253048996149",
  },
  {
    slug: "instagram",
    name: "Instagram",
    category: "Meta's own",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.instagram.com",
    tagline: "Bring your Instagram into the Muse conversation.",
    whatItDoes: [
      "Connects your Instagram account to Muse through Meta's Accounts Center",
      "Lets Muse reference your Instagram context while chatting with you",
      "Works alongside your Facebook and Threads connections from the same Accounts Center link",
    ],
    howToConnect: [
      "Open the Muse app \u2192 Settings \u2192 Connectors",
      "Find Instagram in the list and tap Connect",
      "Read the info about what Muse can access, then tap Continue",
      "Authorize the connection to link your account",
      "If your Instagram account is already linked in Accounts Center, Muse picks it up automatically \u2014 otherwise, link it through Accounts Center first",
      "Approvals are on by default for consequential actions (sends, purchases, bookings)",
      "Available only where Muse is available (US and Canada)",
    ],
    exampleTasks: [
      "Ask Muse to recall posts from creators you follow",
      "Look up details from your Instagram DMs",
      "Reference your own posts and reels in conversation",
    ],
    examplePrompts: [
      {
        prompt: "What did my favorite travel photographers post on Instagram recently?",
        title: "Track creators you follow"
      },
      {
        prompt: "Find the DM where my friend sent me that restaurant recommendation.",
        title: "Search your DMs"
      },
      {
        prompt: "Which of my Instagram posts got the most comments last month?",
        title: "Revisit your posts"
      },
    ],
    limitations: [
      "Only available where Muse is available (US and Canada)",
      "Requires an Accounts Center link between your Instagram and Meta accounts",
      "Only the data permissions Meta publishes for this connector apply",
    ],
    sourceName: "Meta Help Center \u2014 How Muse works with Connectors",
    sourceUrl: "https://www.meta.com/help/1687253048996149",
  },
  {
    slug: "threads",
    name: "Threads",
    category: "Meta's own",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.threads.com",
    tagline: "Your Threads conversations, connected to Muse.",
    whatItDoes: [
      "Connects your Threads account to Muse through Meta's Accounts Center",
      "Lets Muse reference your Threads context while chatting with you",
      "Works alongside your Facebook and Instagram connections from the same Accounts Center link",
    ],
    howToConnect: [
      "Open the Muse app \u2192 Settings \u2192 Connectors",
      "Find Threads in the list and tap Connect",
      "Read the info about what Muse can access, then tap Continue",
      "Authorize the connection to link your account",
      "If your Threads account is already linked in Accounts Center, Muse picks it up automatically \u2014 otherwise, link it through Accounts Center first",
      "Approvals are on by default for consequential actions (sends, purchases, bookings)",
      "Available only where Muse is available (US and Canada)",
    ],
    exampleTasks: [
      "Ask Muse to recap threads you've posted or engaged with",
      "Look up discussions from accounts you follow on Threads",
      "Reference your Threads activity in conversation",
    ],
    examplePrompts: [
      {
        prompt: "What did I post on Threads this week?",
        title: "Recap your threads"
      },
      {
        prompt: "Summarize the conversation happening on Threads about the new phone launch.",
        title: "Follow a discussion"
      },
    ],
    limitations: [
      "Only available where Muse is available (US and Canada)",
      "Requires an Accounts Center link between your Threads and Meta accounts",
      "Only the data permissions Meta publishes for this connector apply",
    ],
    sourceName: "Meta Help Center \u2014 How Muse works with Connectors",
    sourceUrl: "https://www.meta.com/help/1687253048996149",
  },
  {
    slug: "gmail",
    name: "Gmail",
    category: "Email & Calendar",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://mail.google.com",
    tagline: "Your inbox, ready for Muse to search, sort, and draft.",
    whatItDoes: [
      "Lets Muse search your Gmail inbox from a conversation",
      "Helps triage and summarize incoming email",
      "Drafts replies and new emails for you to review and send",
    ],
    howToConnect: [
      "Open the Muse app \u2192 Settings \u2192 Connectors",
      "Find Gmail in the list and tap Connect",
      "Read the info about what Muse can access, then tap Continue",
      "Authorize the connection with your Google account",
      "Approvals are on by default for consequential actions (sends, purchases, bookings)",
      "Available only where Muse is available (US and Canada)",
    ],
    exampleTasks: [
      "Search your inbox for a specific email or thread",
      "Summarize unread emails from the morning",
      "Draft a reply to a colleague and review it before sending",
    ],
    examplePrompts: [
      {
        prompt: "Find the email from my landlord about the rent increase.",
        title: "Find an email"
      },
      {
        prompt: "Summarize my unread emails from this morning and flag anything urgent.",
        title: "Morning inbox digest"
      },
      {
        prompt: "Draft a polite reply to Sarah's email asking for the project timeline.",
        title: "Draft a reply"
      },
    ],
    limitations: [
      "One-time codes and login links are stripped before Muse sees them",
      "Only available where Muse is available (US and Canada)",
      "Consequential actions like sending email require your approval",
    ],
    sourceName: "Spotify Newsroom \u2014 Meta Muse agent announcement",
    sourceUrl: "https://newsroom.spotify.com/2026-09-23/spotify-meta-muse-agent/",
  },
  {
    slug: "google-calendar",
    name: "Google Calendar",
    category: "Email & Calendar",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://calendar.google.com",
    tagline: "Your schedule, managed through Muse.",
    whatItDoes: [
      "Lets Muse read your Google Calendar schedule",
      "Helps you find open time and check what's coming up",
      "Manages events on your calendar at your request",
    ],
    howToConnect: [
      "Open the Muse app \u2192 Settings \u2192 Connectors",
      "Find Google Calendar in the list and tap Connect",
      "Read the info about what Muse can access, then tap Continue",
      "Authorize the connection with your Google account",
      "Approvals are on by default for consequential actions (sends, purchases, bookings)",
      "Available only where Muse is available (US and Canada)",
    ],
    exampleTasks: [
      "Check what your day looks like tomorrow",
      "Find a free slot for a meeting this week",
      "Create or reschedule a calendar event",
    ],
    examplePrompts: [
      {
        prompt: "What do I have on my calendar tomorrow?",
        title: "Check your day"
      },
      {
        prompt: "When am I free for a one-hour meeting this Thursday?",
        title: "Find free time"
      },
      {
        prompt: "Add a dentist appointment to my calendar next Tuesday at 3 PM.",
        title: "Add an event"
      },
    ],
    limitations: [
      "Only available where Muse is available (US and Canada)",
      "Creating or changing events may require your approval",
      "Only the data permissions Meta publishes for this connector apply",
    ],
    sourceName: "Spotify Newsroom \u2014 Meta Muse agent announcement",
    sourceUrl: "https://newsroom.spotify.com/2026-09-23/spotify-meta-muse-agent/",
  },
  {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Email & Calendar",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://workspace.google.com",
    tagline: "Muse can work with your Workspace data via Google's APIs.",
    whatItDoes: [
      "Lets Muse work with your Google Workspace data through Google's APIs",
      "Connects your Workspace apps to Muse in one place",
      "Keeps the connection managed through Google's own authorization flow",
    ],
    howToConnect: [
      "Open the Muse app \u2192 Settings \u2192 Connectors",
      "Find Google Workspace in the list and tap Connect",
      "Read the info about what Muse can access, then tap Continue",
      "Authorize the connection with your Google account",
      "Approvals are on by default for consequential actions (sends, purchases, bookings)",
      "Available only where Muse is available (US and Canada)",
    ],
    exampleTasks: [
      "Work across your connected Workspace apps from a single Muse chat",
      "Pull information from your Workspace data into a conversation",
      "Let Muse coordinate tasks that span your Workspace apps",
    ],
    examplePrompts: [
      {
        prompt: "Pull together my meetings and documents for the quarterly review.",
        title: "Pull Workspace info"
      },
      {
        prompt: "Summarize what's happening across my Workspace apps this week.",
        title: "Coordinate across apps"
      },
    ],
    limitations: [
      "Only available where Muse is available (US and Canada)",
      "Covers the Workspace APIs Meta lists \u2014 individual Google apps like Gmail or Google Calendar are separate connectors",
      "Consequential actions require your approval",
    ],
    sourceName: "Meta Help Center \u2014 How Muse works with Connectors",
    sourceUrl: "https://www.meta.com/help/1687253048996149",
  },
  {
    slug: "opentable",
    name: "OpenTable",
    category: "Food & Finance",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.opentable.com",
    tagline: "Restaurant reservations through a conversation \u2014 no tab-hopping.",
    whatItDoes: [
      "Finds restaurants by cuisine, location, price, or occasion when you describe what you're in the mood for",
      "Checks real availability from OpenTable's live reservation inventory",
      "Books a table on your behalf once you approve the details",
      "Works in the same chat as your other plans, so Muse can coordinate around calendars and travel",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings, then Connectors",
      "Find OpenTable in the connector list and tap Connect",
      "Read the info screen about what Muse will be able to do",
      "Tap Continue, then authorize with your OpenTable account",
      "Ask Muse to find a restaurant \u2014 approve the booking before anything is finalized",
    ],
    exampleTasks: [
      "Book a table for two at an Italian restaurant in Chicago this Friday at 7pm",
      "Find a kid-friendly restaurant near my meeting venue in Austin",
      "Compare reservation times across three sushi spots downtown",
    ],
    examplePrompts: [
      {
        prompt: "Find me a romantic restaurant near the theater district with availability this Saturday around 7:30, and book a table for two if it looks good.",
        title: "Date night booking"
      },
      {
        prompt: "I need a quiet lunch spot for four near my office on Wednesday. Nothing over $40 a plate. Book the earliest availability after noon.",
        title: "Business lunch"
      },
    ],
    limitations: [
      "Approvals are on by default for consequential actions \u2014 Muse asks before confirming a reservation",
      "Only covers restaurants listed on OpenTable, not every restaurant in a city",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Spotify Newsroom \u2014 Meta Muse agent announcement",
    sourceUrl: "https://newsroom.spotify.com/2026-09-23/spotify-meta-muse-agent/",
  },
  {
    slug: "plaid",
    name: "Plaid",
    category: "Food & Finance",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://plaid.com",
    tagline: "Connect your bank and cards so Muse can reason over your real finances.",
    whatItDoes: [
      "Links your bank accounts and cards through Plaid's secure connection",
      "Lets Muse see your balances, transactions, and spending patterns when you ask",
      "Helps with budgeting, spending reviews, and money questions grounded in your actual data",
      "Muse cannot move money \u2014 connections are read-only, so it can analyze but never transfer",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings, then Connectors",
      "Find Plaid in the connector list and tap Connect",
      "Read the info screen about what data Muse will be able to see",
      "Tap Continue, then select your bank or card provider and sign in through Plaid's secure flow",
      "Ask a money question \u2014 approvals stay on by default for anything consequential",
    ],
    exampleTasks: [
      "Summarize where my money went this month by category",
      "Am I on track with my dining budget this month?",
      "How much did I spend on subscriptions in the last 90 days?",
    ],
    examplePrompts: [
      {
        prompt: "Go through my transactions from the last month and tell me my top three spending categories and whether anything looks off.",
        title: "Monthly spending review"
      },
      {
        prompt: "I'm trying to keep food spending under $600 this month. How am I doing so far?",
        title: "Budget check"
      },
    ],
    limitations: [
      "Read-only access: Muse can analyze your financial data but cannot move money or make payments",
      "Only financial institutions supported by Plaid can be connected",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Spotify Newsroom \u2014 Meta Muse agent announcement",
    sourceUrl: "https://newsroom.spotify.com/2026-09-23/spotify-meta-muse-agent/",
  },
  {
    slug: "spotify",
    name: "Spotify",
    category: "Music",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.spotify.com",
    tagline: "Your listening history becomes context \u2014 music that matches the moment.",
    whatItDoes: [
      "Gives Muse access to your Spotify listening history and library as context",
      "Recommends music tuned to your actual taste instead of generic picks",
      "Builds playlists for your mood, activity, or occasion \u2014 with your approval before anything is saved",
      "You control what Muse can do with your Spotify account from the connector settings",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings, then Connectors",
      "Find Spotify in the connector list and tap Connect",
      "Read the info screen about what Muse will be able to do",
      "Tap Continue, then authorize with your Spotify account",
      "Tell Muse what you're in the mood for and approve any playlist it makes",
    ],
    exampleTasks: [
      "Make me a playlist for a long Saturday morning run",
      "What did I have on repeat last month? Build a mix around it",
      "Find me some new artists similar to the ones I listen to at work",
    ],
    examplePrompts: [
      {
        prompt: "Put together a high-energy playlist for my 45-minute run, based on what I actually listen to. Show it to me before saving.",
        title: "Workout playlist"
      },
      {
        prompt: "I keep listening to the same stuff. Recommend five artists I haven't tried that fit my taste.",
        title: "Discovery mix"
      },
    ],
    limitations: [
      "You control what Muse can do with your Spotify account \u2014 review and adjust in connector settings",
      "Muse only knows what Spotify shares: listening history and library, not offline habits",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Spotify Newsroom \u2014 Spotify and Meta Muse agent",
    sourceUrl: "https://newsroom.spotify.com/2026-09-23/spotify-meta-muse-agent/",
  },
  {
    slug: "apple-health",
    name: "Apple Health",
    category: "Health & Device",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.apple.com",
    tagline: "Device health context so Muse understands your routine, not just your questions.",
    whatItDoes: [
      "Gives Muse health and fitness context from your Apple device",
      "Lets Muse factor your activity, sleep, and routine into planning and advice",
      "Works at the device level \u2014 managed in your device settings rather than through a brand login",
      "Helps Muse act on your behalf with context it can only get from your own device",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings, then Connectors",
      "Find Apple Health in the connector list and tap Connect",
      "Read the info screen about what device-level data Muse will be able to see",
      "Tap Continue, then grant health permissions in your device settings",
      "Review what's shared anytime \u2014 it stays under device management, not an account link",
    ],
    exampleTasks: [
      "Plan this week's workouts around my recent activity levels",
      "I've been sleeping badly \u2014 help me adjust my schedule",
      "Remind me to get moving if I've been sitting all day",
    ],
    examplePrompts: [
      {
        prompt: "Look at my activity from the last two weeks and suggest a realistic workout plan for the next one.",
        title: "Training plan"
      },
      {
        prompt: "My sleep has been short this week. Help me plan tomorrow so I'm not overloaded.",
        title: "Sleep-aware scheduling"
      },
    ],
    limitations: [
      "Managed at the device level \u2014 share controls live in device settings, not a brand account flow",
      "Muse sees health data as context only; it is not a medical device and gives no diagnoses",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Help Center \u2014 How Muse works with Connectors",
    sourceUrl: "https://www.meta.com/help/1687253048996149",
  },
  {
    slug: "android-sms",
    name: "Android SMS",
    category: "Health & Device",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://messages.google.com",
    tagline: "Your messages become context Muse can act on \u2014 with your approval.",
    whatItDoes: [
      "Lets Muse see device-level context like your text messages so it can act on your behalf",
      "Helps Muse connect loose ends \u2014 plans, confirmations, and details mentioned in messages",
      "Works at the device level \u2014 managed in your device settings rather than through a brand login",
      "Muse uses message context only when you ask it to do something that needs it",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings, then Connectors",
      "Find Android SMS in the connector list and tap Connect",
      "Read the info screen about what device-level data Muse will be able to see",
      "Tap Continue, then grant message permissions in your device settings",
      "Review what's shared anytime \u2014 it stays under device management, not an account link",
    ],
    exampleTasks: [
      "Remind me about anything in my texts that needs a reply",
      "Pull the delivery details from my recent messages",
      "Summarize plans people have mentioned to me this week",
    ],
    examplePrompts: [
      {
        prompt: "Check my recent messages and tell me if there's anything I owe someone a reply on.",
        title: "Follow-up scan"
      },
      {
        prompt: "Someone mentioned dinner plans in my texts. Find them and add the details to my calendar.",
        title: "Plan extraction"
      },
    ],
    limitations: [
      "Managed at the device level \u2014 share controls live in device settings, not a brand account flow",
      "Muse uses message context only for what you ask; it does not monitor messages on its own",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Help Center \u2014 How Muse works with Connectors",
    sourceUrl: "https://www.meta.com/help/1687253048996149",
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "Shopping",
    status: "live",
    lastVerified: "September 29, 2026",
    website: "https://www.shopify.com",
    tagline: "Shop the entire Shopify catalogue without leaving the chat.",
    whatItDoes: [
      "Gives Muse access to the entire Shopify catalogue, not a single store",
      "Lets you search for products across Shopify merchants in one conversation",
      "Compares options, prices, and details so you can decide in the chat",
      "Checkout is approval-gated \u2014 Muse never buys anything without your explicit go-ahead",
    ],
    howToConnect: [
      "Open the Muse app and go to Settings, then Connectors",
      "Find Shopify in the connector list and tap Connect",
      "Read the info screen about what Muse will be able to do",
      "Tap Continue, then authorize to enable catalogue access",
      "Describe what you want to buy \u2014 approve the checkout before anything is ordered",
    ],
    exampleTasks: [
      "Find me a waterproof backpack under $80 across Shopify stores",
      "Compare these running shoes on price and reviews",
      "Track down the skincare set my friend mentioned",
    ],
    examplePrompts: [
      {
        prompt: "I need a birthday gift for my dad, around $50, something for someone who loves coffee. Show me options before ordering.",
        title: "Gift hunt"
      },
      {
        prompt: "Find three highly rated ceramic pour-over coffee makers on Shopify and compare the prices.",
        title: "Price comparison"
      },
    ],
    limitations: [
      "Approvals are on by default for consequential actions \u2014 Muse asks before any purchase",
      "Covers Shopify's catalogue only, not every online store",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "walmart",
    name: "Walmart",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.walmart.com",
    tagline: "Everyday essentials, groceries, and household goods \u2014 shoppable through Muse.",
    whatItDoes: [
      "Lets Muse shop Walmart's catalogue with your approval at checkout",
      "Compares prices and options across Walmart's everyday-essentials range",
      "Tracks your Walmart orders where your account supports it",
      "Builds watchlists and surfaces deals on items you restock regularly",
    ],
    howToConnect: [
      "Meta unveiled this connector at Connect 2026 (Sept 23\u201324) and the rollout is landing",
      "When it's live on your account, open the Muse app",
      "Go to Settings \u2192 Connectors",
      "Tap Connect next to Walmart, read the info screen, then tap Continue",
      "Authorize with your Walmart account to finish",
    ],
    exampleTasks: [
      "Restock my weekly groceries and household basics from Walmart",
      "Find the cheapest bulk paper towels and cleaning supplies",
      "Check whether my last Walmart order has shipped",
    ],
    examplePrompts: [
      {
        prompt: "Muse, put together my weekly essentials order from Walmart \u2014 milk, eggs, bread, dish soap, and paper towels. Show me the cart before you check out.",
        title: "Weekly restock"
      },
      {
        prompt: "Which bulk laundry detergent is the best value per load at Walmart right now?",
        title: "Best bulk deal"
      },
      {
        prompt: "Has my Walmart order from earlier this week shipped yet?",
        title: "Order check"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts",
      "Purchases require your approval; approvals are on by default for consequential actions",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "best-buy",
    name: "Best Buy",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.bestbuy.com",
    tagline: "Compare electronics, read the specs, and buy the right gear with Muse's help.",
    whatItDoes: [
      "Lets Muse shop Best Buy's electronics catalogue with your approval at checkout",
      "Compares models, specs, and prices across Best Buy's tech range",
      "Tracks your Best Buy orders where your account supports it",
      "Builds watchlists and surfaces deals on electronics you're watching",
    ],
    howToConnect: [
      "Meta unveiled this connector at Connect 2026 (Sept 23\u201324) and the rollout is landing",
      "When it's live on your account, open the Muse app",
      "Go to Settings \u2192 Connectors",
      "Tap Connect next to Best Buy, read the info screen, then tap Continue",
      "Authorize with your Best Buy account to finish",
    ],
    exampleTasks: [
      "Compare two laptops side by side on price, specs, and reviews",
      "Find a 4K TV under $600 with the best ratings",
      "Check the delivery status of my recent Best Buy order",
    ],
    examplePrompts: [
      {
        prompt: "Compare these two laptops on Best Buy \u2014 which one is the better buy for video editing under $1,000?",
        title: "Laptop showdown"
      },
      {
        prompt: "Find me the highest-rated 55-inch 4K TV on Best Buy under $600.",
        title: "TV hunt"
      },
      {
        prompt: "Has my Best Buy order arrived yet?",
        title: "Delivery status"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts",
      "Purchases require your approval; approvals are on by default for consequential actions",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "american-eagle",
    name: "American Eagle",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.ae.com",
    tagline: "Jeans, tees, and casual staples \u2014 styled and shopped through Muse.",
    whatItDoes: [
      "Lets Muse shop American Eagle's catalogue with your approval at checkout",
      "Compares styles, sizes, and prices across American Eagle's clothing range",
      "Tracks your American Eagle orders where your account supports it",
      "Builds watchlists and surfaces deals on items and sizes you watch",
    ],
    howToConnect: [
      "Meta unveiled this connector at Connect 2026 (Sept 23\u201324) and the rollout is landing",
      "When it's live on your account, open the Muse app",
      "Go to Settings \u2192 Connectors",
      "Tap Connect next to American Eagle, read the info screen, then tap Continue",
      "Authorize with your American Eagle account to finish",
    ],
    exampleTasks: [
      "Find high-rise jeans in my size that are currently on sale",
      "Put together a fall outfit under $150",
      "Check whether my American Eagle order has shipped",
    ],
    examplePrompts: [
      {
        prompt: "Find me women's high-rise jeans in size 6 on sale at American Eagle.",
        title: "Jeans on sale"
      },
      {
        prompt: "Build a casual fall outfit from American Eagle for under $150 \u2014 jeans, a sweater, and sneakers.",
        title: "Outfit on a budget"
      },
      {
        prompt: "Has my American Eagle order shipped yet?",
        title: "Order tracking"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts",
      "Purchases require your approval; approvals are on by default for consequential actions",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "dicks-sporting-goods",
    name: "DICK'S Sporting Goods",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.dickssportinggoods.com",
    tagline: "Gear up for every sport \u2014 Muse helps you find the right equipment.",
    whatItDoes: [
      "Lets Muse shop DICK'S Sporting Goods' catalogue with your approval at checkout",
      "Compares sports equipment and prices across the DICK'S range",
      "Tracks your DICK'S orders where your account supports it",
      "Builds watchlists and surfaces deals on gear you're watching",
    ],
    howToConnect: [
      "Meta unveiled this connector at Connect 2026 (Sept 23\u201324) and the rollout is landing",
      "When it's live on your account, open the Muse app",
      "Go to Settings \u2192 Connectors",
      "Tap Connect next to DICK'S Sporting Goods, read the info screen, then tap Continue",
      "Authorize with your DICK'S account to finish",
    ],
    exampleTasks: [
      "Find a beginner's running shoe with good cushioning under $120",
      "Compare camping tents for a family of four",
      "Check whether my DICK'S order has shipped",
    ],
    examplePrompts: [
      {
        prompt: "I'm starting to run \u2014 find me a well-cushioned beginner running shoe under $120 at DICK'S.",
        title: "Running shoes"
      },
      {
        prompt: "Compare the top-rated 4-person camping tents at DICK'S under $250.",
        title: "Camping tent"
      },
      {
        prompt: "Has my DICK'S Sporting Goods order shipped yet?",
        title: "Order check"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts",
      "Purchases require your approval; approvals are on by default for consequential actions",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "fanatics",
    name: "Fanatics",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.fanatics.com",
    tagline: "Team merch, jerseys, and fan gear \u2014 shoppable through Muse.",
    whatItDoes: [
      "Lets Muse shop Fanatics' catalogue with your approval at checkout",
      "Compares team merch, jerseys, and fan gear options and prices",
      "Tracks your Fanatics orders where your account supports it",
      "Builds watchlists and surfaces deals on your teams' gear",
    ],
    howToConnect: [
      "Meta unveiled this connector at Connect 2026 (Sept 23\u201324) and the rollout is landing",
      "When it's live on your account, open the Muse app",
      "Go to Settings \u2192 Connectors",
      "Tap Connect next to Fanatics, read the info screen, then tap Continue",
      "Authorize with your Fanatics account to finish",
    ],
    exampleTasks: [
      "Find the current season's home jersey for my team in my size",
      "Compare prices on a fitted cap across Fanatics' range",
      "Check whether my Fanatics order has shipped",
    ],
    examplePrompts: [
      {
        prompt: "Find the current home jersey for my team in size large on Fanatics \u2014 and flag any sales.",
        title: "New jersey"
      },
      {
        prompt: "My dad's a huge Yankees fan. Suggest three Fanatics gift ideas under $75.",
        title: "Gift idea"
      },
      {
        prompt: "Has my Fanatics order shipped yet?",
        title: "Order tracking"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts",
      "Purchases require your approval; approvals are on by default for consequential actions",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "gap",
    name: "Gap",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.gap.com",
    tagline: "Classic casualwear for the whole family \u2014 shopped through Muse.",
    whatItDoes: [
      "Lets Muse shop Gap's catalogue with your approval at checkout",
      "Compares styles, sizes, and prices across Gap's clothing range",
      "Tracks your Gap orders where your account supports it",
      "Builds watchlists and surfaces deals on items and sizes you watch",
    ],
    howToConnect: [
      "Meta unveiled this connector at Connect 2026 (Sept 23\u201324) and the rollout is landing",
      "When it's live on your account, open the Muse app",
      "Go to Settings \u2192 Connectors",
      "Tap Connect next to Gap, read the info screen, then tap Continue",
      "Authorize with your Gap account to finish",
    ],
    exampleTasks: [
      "Find kids' back-to-school outfits on sale",
      "Compare Gap's denim fits to find the right one for me",
      "Check whether my Gap order has shipped",
    ],
    examplePrompts: [
      {
        prompt: "Put together three back-to-school outfits for a 10-year-old from Gap, all on sale if possible.",
        title: "Back to school"
      },
      {
        prompt: "Which Gap denim fit would work best for a relaxed straight-leg look? Show me options in my size.",
        title: "Denim fit"
      },
      {
        prompt: "Has my Gap order shipped yet?",
        title: "Order check"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts",
      "Purchases require your approval; approvals are on by default for consequential actions",
      "Available only where Muse is available (US and Canada)",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "michael-kors",
    name: "Michael Kors",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.michaelkors.com",
    tagline: "Luxury fashion and accessories shopping, guided by Muse.",
    whatItDoes: [
      "Lets Muse browse the Michael Kors catalogue and suggest handbags, watches, shoes, and apparel that match your style and budget.",
      "Compares options across the catalogue \u2014 price, materials, sizes, and colours \u2014 so you can pick with confidence.",
      "Checkout stays in your hands: Muse prepares the order and you approve it before anything is purchased.",
      "Helps track your orders and look up order details after purchase.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: open the Muse app \u2192 Settings \u2192 Connectors.",
      "Find Michael Kors and tap Connect.",
      "Read the info screen, tap Continue, then authorize to finish.",
    ],
    exampleTasks: [
      "Find a leather tote under $350 that fits a 14-inch laptop.",
      "Compare the Jet Set and Hamilton collections \u2014 which crossbody is better for everyday use?",
      "What's the current price of the gold-tone Parker watch, and is it in stock?",
    ],
    examplePrompts: [
      {
        prompt: "Find me a Michael Kors weekend bag in saffiano leather under $400 and show me the two best options side by side.",
        title: "Weekend bag hunt"
      },
      {
        prompt: "My sister's birthday is next month. Find Michael Kors accessories under $150 that would make a good gift, and tell me what's on sale.",
        title: "Gift shortlist"
      },
      {
        prompt: "Compare the Michael Kors Lexington and Runway watches \u2014 differences in size, movement, and price \u2014 and recommend one for a dressy look.",
        title: "Watch comparison"
      },
    ],
    limitations: [
      "Announced at Meta Connect 2026; not yet confirmed live on all accounts while the rollout lands.",
      "Purchases require your approval every time \u2014 Muse never buys without you confirming.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "sephora",
    name: "Sephora",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.sephora.com",
    tagline: "Your beauty cabinet, searchable by Muse.",
    whatItDoes: [
      "Lets Muse shop Sephora's beauty catalogue with your approval at checkout.",
      "Helps narrow down products by concern, shade, finish, and budget \u2014 including shade-matching questions.",
      "Compares formulas, sizes, and prices across similar products.",
      "Helps track your Sephora orders and look up order details after purchase.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: open the Muse app \u2192 Settings \u2192 Connectors.",
      "Find Sephora and tap Connect.",
      "Read the info screen, tap Continue, then authorize to finish.",
    ],
    exampleTasks: [
      "Find a medium-coverage foundation for oily skin in a warm undertone shade.",
      "Compare three vitamin C serums under $50 \u2014 which has the best value per ounce?",
      "What's a good cruelty-free alternative to my discontinued lipstick shade?",
    ],
    examplePrompts: [
      {
        prompt: "I wear MAC NC30. Find me a Sephora foundation in a matching shade under $45 that works for combination skin.",
        title: "Shade match"
      },
      {
        prompt: "Build me a simple 3-step skincare routine from Sephora products under $100 total for dry, sensitive skin.",
        title: "Routine refresh"
      },
      {
        prompt: "Find a Sephora dupe for a high-end setting spray that costs under $30, and compare the ingredient highlights.",
        title: "Dupe finder"
      },
    ],
    limitations: [
      "Announced at Meta Connect 2026; not yet confirmed live on all accounts while the rollout lands.",
      "Purchases require your approval every time \u2014 Muse never buys without you confirming.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "ulta",
    name: "Ulta",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.ulta.com",
    tagline: "Beauty and drugstore finds, minus the aisle wandering.",
    whatItDoes: [
      "Lets Muse shop Ulta's catalogue \u2014 from prestige brands to drugstore staples \u2014 with your approval at checkout.",
      "Helps answer shade and formula questions, like finding your match or a budget-friendly swap.",
      "Compares prices and sizes across products, including Ulta's own brand options.",
      "Helps track your Ulta orders and look up order details after purchase.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: open the Muse app \u2192 Settings \u2192 Connectors.",
      "Find Ulta and tap Connect.",
      "Read the info screen, tap Continue, then authorize to finish.",
    ],
    exampleTasks: [
      "Find a drugstore mascara that matches the performance of high-end tubing mascaras.",
      "What are Ulta's current best-rated moisturizers for acne-prone skin under $25?",
      "Find my shade in the Ulta Beauty collection concealer range.",
    ],
    examplePrompts: [
      {
        prompt: "Find me the best drugstore primers at Ulta for large pores under $15, with ratings to back them up.",
        title: "Drugstore glow-up"
      },
      {
        prompt: "I'm a light-neutral skin tone. What shade should I get in the Ulta Beauty Stay Fabulous foundation, and is there a sample or travel size to try first?",
        title: "Shade finder"
      },
      {
        prompt: "My hair is fine and gets oily fast. Find me an Ulta dry shampoo and a lightweight conditioner that reviewers with the same hair type love.",
        title: "Hair rescue"
      },
    ],
    limitations: [
      "Announced at Meta Connect 2026; not yet confirmed live on all accounts while the rollout lands.",
      "Purchases require your approval every time \u2014 Muse never buys without you confirming.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "wayfair",
    name: "Wayfair",
    category: "Shopping",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.wayfair.com",
    tagline: "Furniture shopping that actually fits your room.",
    whatItDoes: [
      "Lets Muse shop Wayfair's furniture and home catalogue with your approval at checkout.",
      "Helps check whether a piece will fit \u2014 dimensions, room size, and clearance questions answered before you commit.",
      "Compares styles, materials, and prices across similar furniture and decor.",
      "Helps track your Wayfair orders and look up order details after purchase.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: open the Muse app \u2192 Settings \u2192 Connectors.",
      "Find Wayfair and tap Connect.",
      "Read the info screen, tap Continue, then authorize to finish.",
    ],
    exampleTasks: [
      "Find a queen bed frame under $500 that fits a 10x12 foot bedroom with two nightstands.",
      "Compare three mid-century modern sofas under $1,000 \u2014 which has the best reviews for comfort?",
      "What size rug should I get for a dining table that seats six?",
    ],
    examplePrompts: [
      {
        prompt: "My living room is 12x14 feet with a TV on the short wall. Find a Wayfair sectional under $1,200 that won't overwhelm the room.",
        title: "Sofa sizing"
      },
      {
        prompt: "I need a small standing desk and an ergonomic chair from Wayfair for under $600 total. Show me combinations that fit a 4-foot-wide corner.",
        title: "Home office build"
      },
      {
        prompt: "Find Wayfair coffee tables in a Scandinavian style under $300, and tell me which ones have solid wood tops.",
        title: "Style match"
      },
    ],
    limitations: [
      "Announced at Meta Connect 2026; not yet confirmed live on all accounts while the rollout lands.",
      "Purchases require your approval every time \u2014 Muse never buys without you confirming.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "shop-pay",
    name: "Shop Pay",
    category: "Payments",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://shop.app",
    tagline: "One-tap checkout speed, wherever you shop with Muse.",
    whatItDoes: [
      "Lets Muse check you out faster using your Shop Pay account, with your approval at every payment.",
      "Speeds up checkout across the stores that accept Shop Pay \u2014 Muse fills in your saved details so you just confirm.",
      "Muse prepares the order and payment summary first; nothing is charged until you approve it.",
      "Works with your Shop Pay saved addresses and payment methods.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: open the Muse app \u2192 Settings \u2192 Connectors.",
      "Find Shop Pay and tap Connect.",
      "Read the info screen, tap Continue, then authorize your Shop Pay account to finish.",
    ],
    exampleTasks: [
      "Buy the shoes I just picked out using my Shop Pay saved card.",
      "Reorder my last skincare purchase and check out with Shop Pay.",
      "Split this cart into Shop Pay installments if the store offers it.",
    ],
    examplePrompts: [
      {
        prompt: "Reorder the same running socks I bought last month and check out with Shop Pay.",
        title: "Fast reorder"
      },
      {
        prompt: "I've picked out a jacket. Walk me through checkout with Shop Pay and confirm the total before you charge anything.",
        title: "Checkout assist"
      },
    ],
    limitations: [
      "Announced at Meta Connect 2026; not yet confirmed live on all accounts while the rollout lands.",
      "Payments require your approval every time (approvals on by default) \u2014 Muse never spends without you confirming; always review amounts before confirming.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "paypal",
    name: "PayPal",
    category: "Payments",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.paypal.com",
    tagline: "Pay with your PayPal balance \u2014 Muse handles the cart.",
    whatItDoes: [
      "Lets Muse pay on your behalf using your PayPal account \u2014 your PayPal balance or linked payment methods.",
      "Muse builds the order and presents the payment summary; you approve every payment before it's sent.",
      "Works for checkout at stores where Muse shops for you.",
      "Muse never initiates a payment without your explicit approval.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: open the Muse app \u2192 Settings \u2192 Connectors.",
      "Find PayPal and tap Connect.",
      "Read the info screen, tap Continue, then authorize your PayPal account to finish.",
    ],
    exampleTasks: [
      "Pay for this order with my PayPal balance.",
      "Use PayPal to check out the groceries I just added to the cart.",
      "Show me the payment breakdown before sending it through PayPal.",
    ],
    examplePrompts: [
      {
        prompt: "Check out my cart using my PayPal balance and show me the final total before you confirm the payment.",
        title: "Balance checkout"
      },
      {
        prompt: "I want to pay for this order with PayPal. Show me the itemized total first, then I'll approve.",
        title: "Payment review"
      },
    ],
    limitations: [
      "Announced at Meta Connect 2026; not yet confirmed live on all accounts while the rollout lands.",
      "Payments require your approval every time (approvals on by default) \u2014 Muse never spends without you confirming; always review amounts before confirming.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "expedia",
    name: "Expedia",
    category: "Travel & Groceries",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.expedia.com",
    tagline: "Trips planned by Muse, booked with your approval \u2014 coming soon.",
    whatItDoes: [
      "Expected to let Muse search flights and hotels and present options inside a chat.",
      "Planned to support booking with your explicit approval before anything is confirmed.",
      "Likely to work with your travel preferences and dates in natural language.",
      "Intended to be a travel planning companion across flights, hotels, and more.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "Meta says Expedia is coming soon \u2014 it may not appear in your Connectors list yet.",
      "When it's live on your account: Muse app \u2192 Settings \u2192 Connectors \u2192 tap Connect.",
      "Read the info on the card, tap Continue, and authorize in the Expedia flow.",
    ],
    exampleTasks: [
      "Find round-trip flights for a weekend trip and compare the options.",
      "Plan a short trip with hotel picks near the event venue.",
      "Build a trip itinerary and check flight prices against the budget.",
    ],
    examplePrompts: [
      {
        prompt: "Find me a weekend trip from New York to Chicago next month \u2014 flights and a hotel near downtown.",
        title: "Plan a weekend trip"
      },
      {
        prompt: "Show me the cheapest and fastest flight options to Los Angeles on Friday and back Sunday.",
        title: "Compare flight options"
      },
    ],
    limitations: [
      "Announced at Connect 2026 but described as coming soon \u2014 not yet confirmed live on all accounts.",
      "Any booking would require your explicit approval before it is confirmed.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "instacart",
    name: "Instacart",
    category: "Travel & Groceries",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.instacart.com",
    tagline: "Grocery lists become grocery deliveries \u2014 you approve at checkout.",
    whatItDoes: [
      "Expected to let Muse build grocery lists and place orders through Instacart's stores.",
      "Planned to support ordering from local stores with your approval at checkout.",
      "Likely to help with meal planning by matching recipes to ingredients you can order.",
      "Intended to bring shopping into the chat so lists don't live in a separate app.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: Muse app \u2192 Settings \u2192 Connectors \u2192 tap Connect.",
      "Read the info on the card, tap Continue, and authorize in the Instacart flow.",
      "Review what's shared before your first order.",
    ],
    exampleTasks: [
      "Turn a weekly meal plan into a single Instacart order.",
      "Restock household basics and confirm the cart before checkout.",
      "Compare prices across local stores for a grocery run.",
    ],
    examplePrompts: [
      {
        prompt: "Build me a grocery list for 5 dinners this week and start an Instacart order from my usual store.",
        title: "Stock the weekly groceries"
      },
      {
        prompt: "Order milk, eggs, bread, coffee, and spinach from Instacart \u2014 show me the cart before you check out.",
        title: "Restock essentials"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts.",
      "Orders and payments would require your approval at checkout.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "notion",
    name: "Notion",
    category: "Work",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.notion.so",
    tagline: "Your Notion docs become answers Muse can actually find.",
    whatItDoes: [
      "Expected to let Muse read and search across your Notion workspace from chat.",
      "Likely to answer questions grounded in your docs, notes, and project pages.",
      "Planned to support drafting new pages and summarizing existing ones.",
      "Intended to turn your second brain into a conversational knowledge base.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: Muse app \u2192 Settings \u2192 Connectors \u2192 tap Connect.",
      "Read the info on the card, tap Continue, and authorize access to your Notion workspace.",
      "Choose which pages or databases Muse can see.",
    ],
    exampleTasks: [
      "Summarize a long Notion project doc into a quick briefing.",
      "Find every mention of a topic across your notes.",
      "Draft a meeting agenda as a new Notion page.",
    ],
    examplePrompts: [
      {
        prompt: "Summarize my Q4 planning doc in Notion into a five-bullet briefing.",
        title: "Brief me on a project"
      },
      {
        prompt: "Search my Notion workspace for everything about the product launch and pull out the key dates.",
        title: "Find it across my notes"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts.",
      "Any drafting or edits in your workspace should be reviewed before they're finalized.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "granola",
    name: "Granola",
    category: "Work",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.granola.ai",
    tagline: "Your meeting notes, ready when Muse needs them.",
    whatItDoes: [
      "Expected to let Muse pull in context from your Granola meeting notes.",
      "Likely to summarize decisions and action items from recent meetings.",
      "Planned to help draft follow-ups and prep based on what was discussed.",
      "Intended to make past conversations searchable right from chat.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: Muse app \u2192 Settings \u2192 Connectors \u2192 tap Connect.",
      "Read the info on the card, tap Continue, and authorize access to your Granola notes.",
      "Review what is shared before connecting.",
    ],
    exampleTasks: [
      "Catch up on a meeting you missed from its Granola notes.",
      "Pull action items from the last few team meetings into one list.",
      "Prep for a call by summarizing the previous conversation.",
    ],
    examplePrompts: [
      {
        prompt: "What were the key decisions in yesterday's standup? Use my Granola notes.",
        title: "Catch up on a meeting"
      },
      {
        prompt: "Pull every open action item from my Granola notes this week into one list.",
        title: "Gather action items"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts.",
      "Meeting-note access is sensitive \u2014 review what's shared before connecting.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "github",
    name: "GitHub",
    category: "Work",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://github.com",
    tagline: "Your repos in the loop \u2014 code context without the tab-hopping.",
    whatItDoes: [
      "Expected to let Muse work with your GitHub repositories and code.",
      "Likely to summarize pull requests and explain changes in plain language.",
      "Planned to help with issue triage and finding relevant code faster.",
      "Intended to bring repo context directly into your conversations with Muse.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: Muse app \u2192 Settings \u2192 Connectors \u2192 tap Connect.",
      "Read the info on the card, tap Continue, and authorize with your GitHub account.",
      "Choose which repositories Muse can access.",
    ],
    exampleTasks: [
      "Summarize an open pull request and flag anything worth a closer look.",
      "Find the code responsible for a reported bug.",
      "Draft issue triage notes across a sprint's worth of tickets.",
    ],
    examplePrompts: [
      {
        prompt: "Summarize PR #142 in our repo and tell me what could break.",
        title: "Summarize a PR"
      },
      {
        prompt: "In our repo, where is the payment validation handled? Explain what the code does.",
        title: "Find the failing code"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts.",
      "Any code changes or merges would need your review before going through.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
  {
    slug: "box",
    name: "Box",
    category: "Work",
    status: "announced",
    lastVerified: "September 29, 2026",
    website: "https://www.box.com",
    tagline: "Find the file, read the file \u2014 straight from Box.",
    whatItDoes: [
      "Expected to let Muse search across your Box storage and documents.",
      "Likely to pull up file contents to answer questions in chat.",
      "Planned to help summarize reports, decks, and docs stored in Box.",
      "Intended to turn your cloud files into a searchable knowledge layer.",
    ],
    howToConnect: [
      "Meta unveiled this at Connect 2026 and the rollout is landing.",
      "When it's live on your account: Muse app \u2192 Settings \u2192 Connectors \u2192 tap Connect.",
      "Read the info on the card, tap Continue, and authorize access to your Box account.",
      "Choose which folders Muse can see.",
    ],
    exampleTasks: [
      "Find a document in Box by describing what it contains.",
      "Summarize a long report stored in Box.",
      "Pull key figures from a deck for a presentation.",
    ],
    examplePrompts: [
      {
        prompt: "Find the Q3 sales report in my Box and summarize the headline numbers.",
        title: "Find a file"
      },
      {
        prompt: "Summarize the partnership proposal stored in my Box.",
        title: "Summarize a doc"
      },
    ],
    limitations: [
      "Announced at Connect 2026 \u2014 not yet confirmed live on all accounts.",
      "File access is sensitive \u2014 review which folders are shared before connecting.",
      "Available only where Muse is available (US and Canada).",
    ],
    sourceName: "Meta Connect 2026 recap",
    sourceUrl: "https://www.meta.com/en-gb/blog/meta-connect-2026-everything-we-announced/",
  },
];

export function connectorBySlug(slug: string): Connector | undefined {
  return CONNECTORS.find((c) => c.slug === slug);
}

export const CONNECTOR_CATEGORIES: string[] = Array.from(
  new Set(CONNECTORS.map((c) => c.category))
);
