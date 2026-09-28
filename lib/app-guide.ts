import type { Faq } from "@/lib/faqs";

/**
 * Data for the /app App Guide hub.
 * All claims are grounded in the site's guides — links point to the
 * full guide rather than duplicating its content.
 */

export interface SetupStep {
  title: string;
  body: string;
}

export const setupSteps: SetupStep[] = [
  {
    title: "Join through an official route",
    body: "Muse is invite-gated in some waves and open in others. Use the official invitation or access route shown for your region — never an unofficial APK or cloned download page. If your account asks for one, enter an invite code during setup.",
  },
  {
    title: "Create your account and verify your email",
    body: "Sign up with accurate details and confirm your email if the app prompts you to. This is what ties your agent, your memory, and any promotional tokens to you.",
  },
  {
    title: "Confirm you're 18 or older",
    body: "Muse is an adults-only product — access is limited to users 18 and older, and the app may ask you to confirm that during setup.",
  },
  {
    title: "Let your agent get set up",
    body: "Your personal agent provisions its own workspace when you first arrive. Give it a moment — the app will let you know when it's ready to take its first task.",
  },
  {
    title: "Redeem any codes or token grants",
    body: "If you have an invite code or a promotional token grant (like the 1-billion-tokens offer), redeem it in the app's account or invite area. The only authoritative balance is the one shown in your own app.",
  },
];

export interface TourItem {
  name: string;
  body: string;
}

export const homeTour: TourItem[] = [
  {
    name: "Main chat",
    body: "Your primary, long-running conversation with Muse. It stays interruptible — you can send several tasks at once and it keeps them straight. This is where finished work begins.",
  },
  {
    name: "Side chats",
    body: "Separate threads for separate topics. When a project shouldn't contaminate the context of everything else, give it a side chat instead of piling it into the main one.",
  },
  {
    name: "Feed",
    body: "A running feed of proactive updates — briefings, reminders, and things your agent finished while you were away. This is where Muse's 'notify me only when something is meaningfully new' habit lives.",
  },
  {
    name: "Goals tab",
    body: "Long-running tasks live here: price tracking, topic monitoring, anything Muse works on in the background. Check the tab for progress instead of babysitting the chat.",
  },
  {
    name: "Artifacts",
    body: "Finished work arrives as artifacts — documents, PDFs, web pages, trackers, dashboards. Ask for a study guide or a spending tracker rather than a wall of text.",
  },
];

export const settingsTour: TourItem[] = [
  {
    name: "Approvals & permissions",
    body: "Check what Muse may do without asking (standard browsing is allowed by default) and what always stops for your review — emails, purchases, and other hard-to-undo actions. Tighten or loosen as you like.",
  },
  {
    name: "Data controls & memory",
    body: "Look for the memory and data controls to see what Muse remembers about you across conversations. Memory files are readable and editable — delete anything you'd rather it forgot.",
  },
  {
    name: "Redeem tokens",
    body: "Look for the redeem or invite area in Settings or your account page to enter codes and check your token balance.",
  },
  {
    name: "Notifications & proactivity",
    body: "Decide how often Muse reaches out on its own. Proactive messages can be dialed up, down, or off entirely — the feed stays useful either way.",
  },
  {
    name: "Account",
    body: "Review the plan or usage terms currently applied to you, your region, and your sign-in details. This is also where eligibility windows for offers appear.",
  },
];

export interface ComingItem {
  name: string;
  status: "announced" | "dec-2026" | "live-rollout";
  body: string;
  href: string;
}

export const statusLabel: Record<ComingItem["status"], string> = {
  announced: "Announced",
  "dec-2026": "Dec 2026",
  "live-rollout": "Live rollout",
};

export const comingSoon: ComingItem[] = [
  {
    name: "Muse Charm",
    status: "dec-2026",
    body: "A small Tamagotchi-style keychain gadget with a screen and fingerprint sensor, Jolly as its default avatar. Tap, speak, and Jolly toddles off to handle the task — no phone required. Ships December 2026.",
    href: "/guides/muse-ai-charm",
  },
  {
    name: "Realtime Avatar video chat",
    status: "announced",
    body: "Live video chat with an animated, expressive avatar of your agent — speech and video generate from a shared stream so voice, lip movement, and expressions stay synchronized. Meta has announced it but given no release date.",
    href: "/guides/muse-ai-meta-connect-2026",
  },
  {
    name: "Mac computer use",
    status: "live-rollout",
    body: "Muse can operate your Mac — announced at Meta Connect 2026 and rolling out. Check the guide for what's live right now and what it can actually do.",
    href: "/guides/muse-ai-mac-computer-use",
  },
  {
    name: "A dedicated Muse email address",
    status: "announced",
    body: "Your agent gets its own email address so it can send and receive on your behalf (with human-in-the-loop approval before anything consequential goes out). Announced at Connect 2026.",
    href: "/guides/muse-ai-meta-connect-2026",
  },
];

export const appFaqs: Faq[] = [
  {
    question: "Where can I download the Muse app?",
    answer:
      "Get Muse from the Apple App Store (iOS), Google Play (Android), or the web at muse.ai. There's also a Mac app. As of September 2026, availability is limited to the US and Canada — if you don't see it in your store, your region isn't supported yet.",
  },
  {
    question: "Do I need an invite code to use Muse?",
    answer:
      "It depends on the current access wave. Some users can sign up directly; others are asked for an invite code. Follow the official access route shown for your account and region, complete setup with accurate details, and enter a code only if the app asks for one.",
  },
  {
    question: "What's the difference between the main chat and side chats?",
    answer:
      "The main chat is your long-running primary conversation — it stays interruptible, so you can run several tasks at once. Side chats are separate threads that keep a project or topic from contaminating the main chat's context.",
  },
  {
    question: "What are Artifacts in Muse?",
    answer:
      "Artifacts are finished work Muse produces for you: documents, PDFs, web pages, spending trackers, study guides, dashboards. When you want something concrete rather than a chat answer, ask for an artifact.",
  },
  {
    question: "How do I control what Muse is allowed to do on its own?",
    answer:
      "In Settings, look for approvals and permission controls. Standard browsing is allowed by default, but consequential actions — sending emails, making purchases — stop for your explicit review via approval cards. You can tighten or loosen permissions, and dial proactive messages up, down, or off.",
  },
  {
    question: "Is this an official Meta website?",
    answer:
      "No. This App Guide is published by Muse Hub, an independent learning resource. It is not affiliated with or endorsed by Meta — for authoritative details, check the Muse app itself or Meta's official pages.",
  },
];
