/**
 * Tools hub data: the interactive tools on this site plus an honest,
 * evidence-checked directory of the services Muse works with.
 *
 * Integration honesty rule: only entries verified against the guides in
 * lib/guides.ts (or Meta's official announcements quoted there) are listed.
 * Status meanings — "live": the guide confirms it works now;
 * "announced": Meta unveiled it (Connect 2026) with no firm ship date;
 * "reported": press-reported, availability varies.
 */

export interface ToolEntry {
  href: string;
  title: string;
  deck: string;
  tag: string;
  badge?: string;
}

export const INTERACTIVE_TOOLS: ToolEntry[] = [
  {
    href: "/token-calculator",
    title: "Token Calculator",
    deck: "Estimate illustrative monthly token usage",
    tag: "Estimator",
  },
  {
    href: "/quiz",
    title: "Muse Readiness Quiz",
    deck: "Find your best first Muse workflows",
    tag: "Quiz",
  },
  {
    href: "/tools/token-runway",
    title: "Token Runway Estimator",
    deck: "How long your token balance lasts at your pace",
    tag: "Estimator",
    badge: "New",
  },
  {
    href: "/tools/prompt-generator",
    title: "Prompt Generator",
    deck: "Guided form that composes a polished copy-paste prompt",
    tag: "Builder",
    badge: "New",
  },
  {
    href: "/tools/compare",
    title: "Assistant Cost & Time Comparator",
    deck: "Compare assistants on cost/time with your own numbers",
    tag: "Comparator",
    badge: "New",
  },
  {
    href: "/tools/share-card",
    title: "Referral Share-Card Generator",
    deck: "Make a shareable card with your own invite code",
    tag: "Sharing",
    badge: "New",
  },
  {
    href: "/tools/can-muse-do-this",
    title: "Can Muse Do This?",
    deck: "Search 64 real tasks for an honest yes, depends, or no",
    tag: "Checker",
    badge: "New",
  },
  {
    href: "/tools/task-generator",
    title: "Task Generator",
    deck: "Turn a goal into a ready-to-paste Muse instruction",
    tag: "Builder",
    badge: "New",
  },
  {
    href: "/tools/prompt-optimizer",
    title: "Prompt Optimizer",
    deck: "Score and restructure a draft prompt before you send it",
    tag: "Builder",
    badge: "New",
  },
  {
    href: "/tools/workflow-generator",
    title: "Workflow Generator",
    deck: "Turn a goal into a you/Muse step plan with checkpoints",
    tag: "Planner",
    badge: "New",
  },
  {
    href: "/tools/avatar-studio",
    title: "Avatar Studio",
    deck: "100 avatar names + 100 characters with a shuffle generator",
    tag: "Builder",
    badge: "New",
  },
  {
    href: "/tools/availability-checker",
    title: "Muse Availability Checker",
    deck: "Is Muse available in your country? Check instantly",
    tag: "Checker",
    badge: "New",
  },
  {
    href: "/tools/connector-wizard",
    title: "Connector Setup Wizard",
    deck: "Get Muse working with Gmail, Calendar, WhatsApp & more",
    tag: "Setup",
    badge: "New",
  },
  {
    href: "/tools/muse-challenge",
    title: "30 Things to Try with Muse",
    deck: "An interactive challenge with progress tracking",
    tag: "Challenge",
    badge: "New",
  },
  {
    href: "/tools/token-price-compare",
    title: "AI Token Price Comparison",
    deck: "Compare per-token API prices: GPT, Claude, Gemini, Grok & more",
    tag: "Comparator",
    badge: "New",
  },
];

export interface Integration {
  name: string;
  description: string;
  status: "live" | "announced" | "reported";
  guideSlug: string;
}

export const INTEGRATIONS: Integration[] = [
  {
    name: "Mac computer use",
    description:
      "Muse operates Mac apps with your permission — clicking, typing, and working through queued tasks. The one Connect announcement that's live now.",
    status: "live",
    guideSlug: "muse-ai-mac-computer-use",
  },
  {
    name: "Walmart",
    description:
      "Agent checkout: Muse navigates Walmart, builds the cart, applies discounts, and pays only after you approve the total.",
    status: "announced",
    guideSlug: "muse-ai-shopping",
  },
  {
    name: "Best Buy",
    description:
      "Launch partner for agent shopping, announced at Connect alongside the wider retail roster.",
    status: "announced",
    guideSlug: "muse-ai-shopping",
  },
  {
    name: "Sephora",
    description:
      "On the launch 'concierge' roster — agent purchases with the same approval-before-payment flow.",
    status: "announced",
    guideSlug: "muse-ai-shopping",
  },
  {
    name: "OpenTable",
    description:
      "Restaurant reservations through Muse — 'book me a table for two Friday at 7' instead of opening menus.",
    status: "announced",
    guideSlug: "muse-ai-shopping",
  },
  {
    name: "Expedia",
    description:
      "Travel ordering and flight-price checks run through Expedia, per the Connect partner list.",
    status: "announced",
    guideSlug: "muse-ai-shopping",
  },
  {
    name: "Instacart",
    description:
      "Grocery ordering through Instacart, announced with the retail partners at Connect.",
    status: "announced",
    guideSlug: "muse-ai-shopping",
  },
  {
    name: "Meta smart glasses",
    description:
      "Wake Muse by saying its name and ask about what you're seeing — arriving in the months ahead.",
    status: "announced",
    guideSlug: "muse-ai-meta-connect-2026",
  },
  {
    name: "Muse email address",
    description:
      "A dedicated inbox so Muse can send, receive, and act on email in the background — announced, no date yet.",
    status: "announced",
    guideSlug: "muse-ai-meta-connect-2026",
  },
  {
    name: "WhatsApp",
    description:
      "Muse over chat for short, focused threads — good for thinking and deciding; availability varies by account.",
    status: "reported",
    guideSlug: "muse-ai-whatsapp",
  },
];
