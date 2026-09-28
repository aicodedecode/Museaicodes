/**
 * The 30 items of the "30 Things to Try with Muse" challenge.
 * Every href below was verified to exist in this site (grep-checked
 * against lib/guides.ts slugs, app/ directories, and lib/connectors.ts).
 */

export interface ChallengeItem {
  /** Stable id used as the localStorage key for this item. */
  id: string;
  /** One crisp line describing a real thing Muse can do. */
  label: string;
  /** Relative URL of the relevant guide, tool, or hub on this site. */
  href: string;
}

export interface ChallengeCategory {
  id: string;
  title: string;
  items: ChallengeItem[];
}

export const CHALLENGE_CATEGORIES: ChallengeCategory[] = [
  {
    id: "first-steps",
    title: "First steps",
    items: [
      {
        id: "what-is-muse",
        label: "Understand what Muse is and how it differs from a regular chatbot",
        href: "/guides/what-is-muse-ai",
      },
      {
        id: "get-muse",
        label: "Find the official access route and get started",
        href: "/guides/how-to-get-muse-ai",
      },
      {
        id: "tutorial",
        label: "Walk through your first 15 minutes with Muse",
        href: "/guides/muse-ai-tutorial",
      },
      {
        id: "review",
        label: "Read an honest review: strengths, limits, and best fit",
        href: "/guides/muse-ai-review",
      },
      {
        id: "privacy",
        label: "Get the privacy questions answered before you hand over data",
        href: "/guides/muse-ai-privacy",
      },
      {
        id: "quiz",
        label: "Take the quiz: which AI assistant actually fits you?",
        href: "/quiz",
      },
    ],
  },
  {
    id: "everyday-productivity",
    title: "Everyday productivity",
    items: [
      {
        id: "task-generator",
        label: "Turn any goal into a ready-to-paste instruction",
        href: "/tools/task-generator",
      },
      {
        id: "prompt-optimizer",
        label: "Run a weak prompt through the optimizer before sending it",
        href: "/tools/prompt-optimizer",
      },
      {
        id: "prompt-tips",
        label: "Steal 10 prompt patterns that get better results",
        href: "/guides/muse-ai-prompt-tips",
      },
      {
        id: "google-calendar",
        label: "Let Muse read — and manage — your Google Calendar",
        href: "/connectors/google-calendar",
      },
      {
        id: "gmail",
        label: "Let Muse triage your inbox and draft replies",
        href: "/connectors/gmail",
      },
      {
        id: "cheat-sheet",
        label: "Bookmark the cheat sheet: prompts, features, settings",
        href: "/guides/muse-ai-cheat-sheet",
      },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    items: [
      {
        id: "prompts",
        label: "Browse 40 copy-paste prompts across 8 categories",
        href: "/prompts",
      },
      {
        id: "templates",
        label: "Start from 10 ready-to-paste agent templates",
        href: "/templates",
      },
      {
        id: "prompt-generator",
        label: "Generate a sharp prompt for any task",
        href: "/tools/prompt-generator",
      },
      {
        id: "voice-mode",
        label: "Talk instead of type with voice mode",
        href: "/guides/muse-ai-voice-mode",
      },
      {
        id: "jolly",
        label: "Meet Jolly and personalize your avatar",
        href: "/guides/muse-ai-jolly-avatar",
      },
      {
        id: "50-things",
        label: "Browse the big list: 50 real things Muse can do",
        href: "/guides/muse-ai-50-things",
      },
    ],
  },
  {
    id: "with-your-apps",
    title: "With your apps",
    items: [
      {
        id: "connectors-guide",
        label: "Read the connectors beginner's guide",
        href: "/guides/muse-ai-connectors",
      },
      {
        id: "spotify",
        label: "Put your listening history to work with the Spotify connector",
        href: "/connectors/spotify",
      },
      {
        id: "whatsapp",
        label: "Chat with Muse inside WhatsApp for short, focused threads",
        href: "/connectors/whatsapp",
      },
      {
        id: "instagram",
        label: "Turn saved Reels into grocery lists with the Instagram connector",
        href: "/connectors/instagram",
      },
      {
        id: "mac-computer-use",
        label: "Let Muse see and act on your Mac screen",
        href: "/guides/muse-ai-mac-computer-use",
      },
      {
        id: "shopping",
        label: "Shop with Muse: Walmart, Sephora and agent checkout",
        href: "/guides/muse-ai-shopping",
      },
    ],
  },
  {
    id: "power-moves",
    title: "Power moves",
    items: [
      {
        id: "workflow-generator",
        label: "Build a repeatable workflow Muse can run",
        href: "/tools/workflow-generator",
      },
      {
        id: "can-muse-do-this",
        label: "Check 64 tasks with honest verdicts before you delegate",
        href: "/tools/can-muse-do-this",
      },
      {
        id: "token-runway",
        label: "Estimate how long your token balance will last",
        href: "/tools/token-runway",
      },
      {
        id: "token-calculator",
        label: "Calculate how far your tokens go for each activity",
        href: "/token-calculator",
      },
      {
        id: "billion-tokens",
        label: "Understand the 1 billion token offer",
        href: "/guides/muse-ai-billion-tokens",
      },
      {
        id: "early-access",
        label: "Join the early access program to try features first",
        href: "/guides/muse-ai-early-access-program",
      },
    ],
  },
];

export const CHALLENGE_ITEMS: ChallengeItem[] = CHALLENGE_CATEGORIES.flatMap(
  (c) => c.items
);

export const CHALLENGE_TOTAL = CHALLENGE_ITEMS.length; // 30

/** localStorage key for the checklist progress. */
export const CHALLENGE_STORAGE_KEY = "muse-challenge-progress";
