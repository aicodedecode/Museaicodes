export interface GuideListItem {
  ordered: boolean;
  items: string[];
}

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  list?: GuideListItem;
}

export interface GuideTable {
  headers: string[];
  rows: string[][];
}

export interface Guide {
  slug: string;
  title: string;
  deck: string;
  category: string;
  keywords: string;
  metaTitle: string;
  metaDescription: string;
  shortAnswer: string;
  image: string;
  imageAlt: string;
  sections: GuideSection[];
  table?: GuideTable;
  modifiedTime: string;
}

import { SITE } from "./site";

/**
 * Inline link syntax inside paragraph strings: [anchor text](https://url)
 * Rendered safely by <ArticleBody/> — no raw HTML allowed in content.
 */

export const GUIDES: Guide[] = [
  {
    slug: "what-is-muse-ai",
    modifiedTime: "2026-09-28",
    image: "/images/guides/what-is-muse-ai.jpg",
    imageAlt: "Editorial illustration of Meta's Muse AI personal agent surrounded by task icons",
    title: "What Is Muse AI? A Clear Beginner's Guide",
    deck: "Understand what Muse is, what it can do, and where it fits among personal AI agents.",
    category: "Basics",
    keywords: "what is muse ai, muse ai explained, meta muse ai, muse ai kya hai",
    metaTitle: "What Is Muse AI? Meta's Personal AI Agent Explained (2026)",
    metaDescription:
      "Muse AI explained simply: what Meta's personal agent actually does, how to get access, what it costs, and how it compares to ChatGPT and Meta AI.",
    shortAnswer:
      "Muse is Meta's personal AI agent: a conversational assistant designed to carry work from a request to a finished output — research, plans, writing, visuals, and digital artifacts. As of September 2026, it is available in the US and Canada.",
    sections: [
      {
        heading: "Muse in one paragraph",
        paragraphs: [
          "Most chatbots answer questions and stop. Muse is built to carry work further: you describe an outcome, add context, and it helps produce something finished — a researched brief, a plan, a draft, a page, or a repeatable workflow. Think of it less as a search box and more as a capable collaborator that stays with a task from the first message to the final output.",
          "Like every AI product, what Muse can do depends on your account, your region, and the current version of the product. The capabilities below describe the general direction of the product, not a promise about any specific account.",
        ],
      },
      {
        heading: "Muse's fast start",
        paragraphs: [
          "Muse launched on September 8, 2026, and adoption has been unusually fast. Sensor Tower estimates put downloads above 3.4 million within weeks — other firms' estimates range from roughly 2.3 million to 4.3 million, and these are third-party estimates, not Meta's own numbers. On September 18 it reached #1 on the US App Store, followed by #1 on Google Play on September 19. For context, Sensor Tower reports Muse averaged 55% day-over-day download growth in its first two weeks, versus 24% for ChatGPT's launch — though download charts measure curiosity, not long-term retention.",
          "Availability is currently limited to the US and Canada, as of September 2026. At its Meta Connect conference, Meta announced upcoming features including video chat with the Muse avatar, computer use on Mac, a dedicated email address, more connectors and partners, and smart-glasses integrations.",
        ],
      },
      {
        heading: "How Meta designed it",
        paragraphs: [
          "Meta's design notes describe Muse as an agent that acts, not just answers. The first line of its system prompt reads: “Your purpose is to make your user's life better.” To act on that, Muse has its own computer — a file system and terminal for writing code and building tools — plus a full web browser for searching, filling forms, and completing bookings and purchases.",
          "Finished work arrives as Artifacts: documents, PDFs, web pages, spending trackers, study guides, or dashboards. Muse keeps working in the background on goals and schedules, notifying you only when something is meaningfully new. One long-running main chat stays interruptible (you can send several tasks at once), side chats hold separate topics, and memory persists across conversations.",
          "Control is explicit: structured approval cards for consequential actions, human-in-the-loop checks before emails or purchases (standard browsing is allowed by default; hard-to-undo actions stop for review), a Goals tab for long-running tasks, permission controls you can tighten or loosen, and memory files you can read and edit. You can also name Muse, design its avatar, and dial its proactive messages up, down, or off.",
        ],
      },
      {
        heading: "What makes Muse useful?",
        paragraphs: [
          "Muse is most valuable when the task has an outcome, not just a question. Three modes cover most of the value:",
        ],
        list: {
          ordered: false,
          items: [
            "Think: compare options, challenge assumptions, explain a difficult topic, or pressure-test a decision before you commit.",
            "Make: draft content, develop visuals, or build an interactive page or small tool from a description.",
            "Operate: break a goal into steps, keep context across a multi-step project, and handle repeatable work with human review at the checkpoints.",
          ],
        },
      },
      {
        heading: "What should beginners remember?",
        paragraphs: [
          "Describe the desired result first, then provide only the context that matters — audience, constraints, source material, tone, deadline. Review important claims instead of trusting polished output, and keep approval with a human for anything consequential.",
          "Access, channels, features, and usage limits can differ by region and account. If you are still waiting for access, the [invite code guide](/guides/muse-ai-invite-code) explains how invitations work. Once you're in, [meet Jolly](/guides/muse-ai-jolly-avatar) — Muse's customizable avatar — and browse [what people actually use Muse for](/guides/muse-ai-use-cases). [Shopping with Muse](/guides/muse-ai-shopping) is the standout example — an agent that buys, not just chats. For everyday workflow patterns, see [how to use Muse AI](/guides/how-to-use-muse-ai).",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[How We Designed Muse — Meta's official design notes](https://introducing.muse.ai/)",
            "[Muse FAQ — Meta](https://ai.meta.com/muse/)",
            "[Meta is putting its muscle behind Muse — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/)",
          ],
        },
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Muse encyclopedia](/encyclopedia) — 40 terms, plainly explained.",
            "[Muse news](/news) — launches, features, and traction, dated and sourced.",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-invite-code",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-invite-code.jpg",
    imageAlt: "Illustration of a vintage key unlocking a glowing doorway, symbolizing a Muse AI invite code",
    title: "Muse AI Invite Code: How Access Works",
    deck: "Use an invite safely and verify the terms attached to your account.",
    category: "Access",
    keywords: "muse ai invite code, muse invite code, muse ai access code",
    metaTitle: "Muse AI Invite Code: Get Access & Redeem Yours (2026)",
    metaDescription:
      "Muse AI invite code guide: how invite codes work, when to redeem one in the app, what to verify first — plus working codes 3C77QC and N8DCUB with tap-to-copy.",
    shortAnswer:
      "A Muse AI invite code is a code shared by an existing user. If your account is eligible, enter it in Muse's invite or redeem screen within the window displayed there.",
    sections: [
      {
        heading: "How to use an invite code",
        list: {
          ordered: true,
          items: [
            "Create or open your Muse account through the official route available to you.",
            "Open account settings and find the invite or redeem option.",
            "Enter 3C77QC or N8DCUB.",
            "Read the on-screen eligibility and reward terms, then confirm the result.",
          ],
        },
      },
      {
        heading: "What to verify before you redeem",
        paragraphs: [
          "Do not assume every code produces the same reward. Promotions can change by account, region, and date. Check three things on the redeem screen itself: who is eligible, the deadline for entering the code, and what the current reward actually is.",
          "Reward amounts are promotional and vary — the in-app screen is the source of truth for your account. Never enter invite codes on third-party pages that ask for your login; the code goes inside the official Muse product only. Our [referral code guide](/guides/muse-ai-referral-code) explains codes from existing users, and the [redeem guide](/guides/muse-ai-redeem-code) walks through entering one. [How to get Muse AI](/guides/how-to-get-muse-ai) covers the whole access journey end to end.",
        ],
      },
      {
        heading: "If a code doesn't work",
        paragraphs: [
          "Re-check the exact characters first — codes are easy to mistype from screenshots. Then confirm your account is eligible and the promotion window hasn't closed. If one code isn't accepted, try the second code before assuming the offer is over.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-referral-code",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-referral-code.jpg",
    imageAlt: "Illustration of two people exchanging a glowing gift, symbolizing a Muse AI referral code",
    title: "Muse AI Referral Code Guide",
    deck: "What referrers and new users should check before sharing a code.",
    category: "Access",
    keywords: "muse ai referral code, muse referral code, muse ai refer",
    metaTitle: "Muse AI Referral Code: How It Works & How to Redeem (2026)",
    metaDescription:
      "Muse AI referral code explained: how referral codes work, where to redeem (Settings → General), eligibility, and working codes 3C77QC and N8DCUB with tap-to-copy.",
    shortAnswer:
      "A Muse AI referral code connects a new eligible account with an existing user's invitation. Reward amounts are promotional, not universal guarantees.",
    sections: [
      {
        heading: "Invite code vs referral code",
        paragraphs: [
          "People use the terms interchangeably, and in practice they usually mean the same thing: a code from an existing user that a new account enters. The important distinction is the in-app rule — the screen should explain who qualifies, the deadline, and whether both parties receive a benefit.",
          "If you're the one sharing, you're the referrer; if you're entering it, you're the new user. Both sides should read the same terms screen. For the headline 1-billion-token offer specifically, see our [billion-tokens breakdown](/guides/muse-ai-billion-tokens); when you're ready to enter a code, use the [redeem guide](/guides/muse-ai-redeem-code).",
        ],
      },
      {
        heading: "Referral checklist",
        list: {
          ordered: false,
          items: [
            "Share the exact code as text, not a screenshot that may be misread.",
            "Tell the new user to verify the current offer inside Muse before relying on it.",
            "Avoid promising a fixed token amount — confirm the app's current terms instead.",
            "Keep a second code available in case the first is not accepted.",
            "Never ask for anyone's password or payment details in exchange for a code.",
          ],
        },
      },
      {
        heading: "Terms vary — confirm in the app",
        paragraphs: [
          "Referral rewards are promotional offers, not permanent pricing. Amounts, eligibility, timing, and availability can differ by account and region, and offers can change without notice. Treat any headline number as a starting point and confirm the live terms in Muse's invite or redeem screen.",
        ],
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Codes directory](/codes) — featured and community codes in one place, with the submit board.",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-redeem-code",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-redeem-code.jpg",
    imageAlt: "Illustration of a ticket being stamped with approval, symbolizing Muse AI code redemption",
    title: "Muse AI Redeem Code: Step-by-Step",
    deck: "Where to enter a code and how to confirm that it worked.",
    category: "Access",
    keywords: "muse ai redeem code, redeem muse code, muse code redemption",
    metaTitle: "Muse AI Redeem Code: Where to Enter It, Step by Step (2026)",
    metaDescription:
      "Where to enter your Muse AI redeem code: step-by-step redemption in the app, what to check before and after, and how to confirm the reward applied.",
    shortAnswer:
      "Open the invite or redeem area in your Muse account, enter an eligible code, and check the resulting confirmation or balance. The exact menu can change as the product evolves.",
    sections: [
      {
        heading: "Before you redeem",
        paragraphs: [
          "Check the deadline shown in your account first. If an invitation is time-limited, waiting can make an otherwise valid code ineligible — some offers expect redemption within a short window after joining, so don't sit on a code.",
          "Make sure you're signed into the right account. Once the code is accepted, our [tutorial](/guides/muse-ai-tutorial) picks up where the redeem screen leaves off; the [invite code guide](/guides/muse-ai-invite-code) covers getting codes in the first place. Rewards attach to the account that redeems the code, and there's usually no way to move them later.",
        ],
      },
      {
        heading: "After you redeem",
        paragraphs: [
          "Look for an on-screen confirmation and verify any reward in your account balance or usage screen. If nothing changes, re-check the code characters, your account's eligibility, and the current promotion terms rather than repeatedly submitting the code.",
          "One careful attempt beats five rushed ones — repeated failed submissions won't change the outcome and may trigger rate limits.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-muse-ai",
    modifiedTime: "2026-09-28",
    image: "/images/guides/how-to-get-muse-ai.jpg",
    imageAlt: "Illustration of stepping stones leading to a glowing doorway, symbolizing getting Muse AI access",
    title: "How to Get Muse AI",
    deck: "A simple access path without relying on unofficial downloads.",
    category: "Access",
    keywords: "how to get muse ai, get muse ai access, muse ai sign up",
    metaTitle: "How to Get Muse AI: Access Steps (2026)",
    metaDescription:
      "How to get Muse AI access: the official route, account setup, invite codes, and what to do if Muse isn't available in your region yet.",
    shortAnswer:
      "Use the official Muse access route offered for your account and region, create an account, and enter an invite code if the product asks for one.",
    sections: [
      {
        heading: "If Muse is available to you",
        list: {
          ordered: true,
          items: [
            "Follow the official invitation or product route for your region.",
            "Complete the account setup with accurate details.",
            "Review the current plan or usage terms shown in the app.",
            "Redeem a code if your account shows that option — see the [redeem guide](/guides/muse-ai-redeem-code).",
          ],
        },
      },
      {
        heading: "If Muse is not available yet",
        paragraphs: [
          "Availability can roll out unevenly across regions and accounts. While you wait, avoid unofficial APKs, cloned download pages, or anyone requesting your credentials — these are the most common ways people get scammed around a hyped launch.",
          "The safest move is patience: wait for an official route or an invitation tied to a real account. You can also [join the early access program](/guides/muse-ai-early-access-program) for upcoming features, and check [current availability](/guides/muse-ai-availability) for your region. In the meantime, the [tutorial](/guides/muse-ai-tutorial) will have you ready for your first fifteen minutes.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-tutorial",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-tutorial.jpg",
    imageAlt: "Illustration of a compass over a map with a start flag, symbolizing a Muse AI beginner tutorial",
    title: "Muse AI Tutorial: Your First 15 Minutes",
    deck: "Turn a vague idea into one useful result with a repeatable workflow.",
    category: "Tutorial",
    keywords: "muse ai tutorial, muse ai beginner tutorial, how to prompt muse ai",
    metaTitle: "Muse AI Tutorial: Your First 15 Minutes (2026)",
    metaDescription:
      "A beginner Muse AI tutorial: the four-part prompt formula (outcome, context, constraints, format) and how to refine results instead of restarting.",
    shortAnswer:
      "Start with one outcome, add the audience and constraints, ask for a concrete format, then review and refine instead of restarting.",
    sections: [
      {
        heading: "A four-part first prompt",
        paragraphs: [
          "Vague prompts get vague answers. Give Muse four things and the quality jumps immediately:",
        ],
        list: {
          ordered: true,
          items: [
            "Outcome: “Create a one-page launch plan.”",
            "Context: “The audience is first-time creators.”",
            "Constraints: “No paid ads; keep it under ₹10,000.”",
            "Format: “Use a weekly table with owner and success signal.”",
          ],
        },
      },
      {
        heading: "Refine, don't restart",
        paragraphs: [
          "The first draft is a starting point, not a verdict. Once it appears, ask Muse to flag its own assumptions, improve the weakest section, and show what changed. Two focused refinement rounds usually beat five fresh attempts.",
          "For specialized workflows beyond general prompting, browse the [awesome-muse-skills catalog](https://museai-eight.vercel.app/) — 2,365 skill guides (899 originals plus 1,466 curated imports) across coding, design, research, and productivity that give Muse sharper starting instructions.",
        ],
      },
      {
        heading: "Use what makes Muse different",
        paragraphs: [
          "Prompting skill transfers everywhere, but a few Muse-native habits are worth learning early. Give finished work a home as an Artifact — ask for a study guide, tracker, or page rather than a wall of text. Park ongoing work in the Goals tab so Muse keeps at it in the background and reports back only when something is new. Use side chats to keep separate projects from contaminating each other's context.",
          "And expect to be asked: Muse pauses for approval before consequential actions like sending an email or making a purchase. For sharper requests from day one, see [10 prompts that get better results](/guides/muse-ai-prompt-tips), and when you'd rather talk than type, read the [voice mode guide](/guides/muse-ai-voice-mode). For the day-to-day workflow patterns, see [how to use Muse AI](/guides/how-to-use-muse-ai). Treat those approval cards as part of the workflow, not an interruption — they're how you stay in charge while the agent does the legwork.",
        ],
      },
      {
        heading: "Your first-15-minutes checklist",
        list: {
          ordered: false,
          items: [
            "Pick one real task, not a test question.",
            "Write the four-part prompt before you open the chat.",
            "Read the whole answer before replying.",
            "Ask for one specific improvement, then compare versions.",
          ],
        },
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[How We Designed Muse — Meta's official design notes](https://introducing.muse.ai/)",
            "[Muse FAQ — Meta](https://ai.meta.com/muse/)",
            "[Meta is putting its muscle behind Muse — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/)",
          ],
        },
      },
    ],
  },
  {
    slug: "how-to-use-muse-ai",
    modifiedTime: "2026-09-28",
    image: "/images/guides/how-to-use-muse-ai.jpg",
    imageAlt: "Illustration of hands shaping clay into a document, symbolizing how to use Muse AI effectively",
    title: "How to Use Muse AI for Better Results",
    deck: "A practical method for clearer prompts and stronger review.",
    category: "Workflow",
    keywords: "how to use muse ai, muse ai tips, muse ai prompting guide",
    metaTitle: "How to Use Muse AI for Better Results (2026)",
    metaDescription:
      "The outcome–context–checks method for better Muse AI results: clearer prompts, stronger review, and the mistakes that waste your time.",
    shortAnswer:
      "Use Muse AI as a collaborator: set a goal, supply relevant evidence, define quality, request an output, and keep human judgment at consequential decisions.",
    sections: [
      {
        heading: "The outcome–context–checks method",
        list: {
          ordered: false,
          items: [
            "Outcome: name what should exist when the work is done — a memo, a plan, a page, a decision.",
            "Context: include the audience, source material, constraints, and tone that should shape it.",
            "Checks: ask Muse to identify uncertainty, cite sources when it matters, and test the result against your own criteria.",
          ],
        },
      },
      {
        heading: "What not to do",
        paragraphs: [
          "A one-line request can work for a simple question, but complex projects need boundaries. Don't bury the objective in a long story, don't ask five unrelated things in one message, and don't treat a polished answer as automatically correct.",
          "The most common failure mode isn't a bad model — it's a vague brief. If the answer misses, the fix is almost always more specific context, not a different tool.",
        ],
      },
      {
        heading: "Work the agent way",
        paragraphs: [
          "Muse keeps working after you close the app — ask it to monitor something (prices, dates, inboxes) and it follows up on a schedule or when events change, notifying you only when the result is worth your attention. Its memory persists across conversations, and you can read and edit those memory files directly if it ever remembers something wrong.",
          "Proactive messages are part of the design: Muse may message you without being asked when it spots something useful. New to agents? Our [hands-on tutorial](/guides/muse-ai-tutorial) covers the same ideas step by step, and [prompt tips](/guides/muse-ai-prompt-tips) will sharpen your requests. If that ever feels like noise, tell it to dial the proactivity down or turn it off — the default is tuned for most people, not everyone.",
        ],
      },
      {
        heading: "Keep humans at the checkpoints",
        paragraphs: [
          "Let Muse do the drafting, researching, and organizing. Keep approval with a human for anything consequential: money, hiring, legal language, medical decisions, or anything published under your name. Review important facts against primary sources.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[How We Designed Muse — Meta's official design notes](https://introducing.muse.ai/)",
            "[Muse FAQ — Meta](https://ai.meta.com/muse/)",
            "[Meta is putting its muscle behind Muse — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-vs-chatgpt-claude-meta-ai",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-vs-chatgpt-claude-meta-ai.jpg",
    imageAlt: "Illustration of four different pillars in a row, symbolizing Muse AI vs ChatGPT vs Claude vs Meta AI",
    title: "Muse AI vs ChatGPT vs Claude vs Meta AI",
    deck: "Compare positioning, workflow, access, and best-fit tasks — not just brand names.",
    category: "Comparison",
    keywords: "muse ai vs chatgpt, muse ai vs claude, muse ai vs meta ai, ai assistant comparison",
    metaTitle: "Muse vs ChatGPT vs Claude vs Meta AI: Which to Use? (2026)",
    metaDescription:
      "We compare 4 AI assistants side by side — features, pricing, availability, and best use cases — so you can pick the right one in 5 minutes. Honest, no hype.",
    shortAnswer:
      "Quick answer: choose Muse if you want an agent that completes tasks and delivers finished work; ChatGPT for the most mature all-round assistant and app ecosystem; Claude for careful long-form writing and coding; Meta AI for a free assistant already inside WhatsApp, Instagram, and Facebook. Trade-offs and details below.",
    sections: [
      {
        heading: "Side-by-side comparison",
        paragraphs: [
          "Positions shift as products evolve — verify current plan pages before making price- or feature-specific decisions.",
        ],
      },
      {
        heading: "How should you choose?",
        paragraphs: [
          "Choose by the task and interface you will actually use. For the deeper Muse-versus-Claude matchup specifically, see our [Muse vs Claude guide](/guides/muse-ai-vs-claude); for how Muse holds up in daily use, read the [Muse review](/guides/muse-ai-review). Test the same real brief in each available app and compare factual accuracy, useful depth, control, speed, and how much editing the result needs.",
          "The honest answer for most people: the best assistant is the one whose workflow you enjoy enough to use daily. Features matter less than fit.",
        ],
      },
    ],
    table: {
      headers: ["App", "Core position", "Best fit", "Typical access", "Watch for"],
      rows: [
        [
          "Muse AI",
          "Personal AI agent",
          "Research-to-output projects, artifacts, personal workflows",
          "Muse product surfaces and supported messaging channelsMuse product surfaces and supported messaging channels (including [WhatsApp](/guides/muse-ai-whatsapp))",
          "Availability, limits, and features can vary by account",
        ],
        [
          "ChatGPT",
          "General-purpose AI assistant",
          "Broad chat, coding, analysis, creation, tool-based workflows",
          "Web, mobile, and supported integrations",
          "Capabilities differ by plan, model, and enabled tools",
        ],
        [
          "Claude",
          "General-purpose AI assistant",
          "Long-form reasoning, document work, coding, structured collaboration",
          "Web, mobile, desktop, and supported integrations",
          "Usage and feature availability differ by plan",
        ],
        [
          "Meta AI",
          "Consumer assistant across Meta products",
          "Everyday questions and creation inside social or messaging apps",
          "Supported Meta apps and web experiences",
          "Regional and product-level differences",
        ],
      ],
    },
  },
  {
    slug: "muse-ai-vs-claude",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-vs-claude.jpg",
    imageAlt: "Illustration of two abstract forms in dialogue, symbolizing Muse AI vs Claude comparison",
    title: "Muse AI vs Claude: Which Fits Your Workflow?",
    deck: "Choose based on the work you repeat, not a generic ranking.",
    category: "Comparison",
    keywords: "muse ai vs claude, claude vs muse, which ai assistant",
    metaTitle: "Muse AI vs Claude: Which Fits Your Workflow? (2026)",
    metaDescription:
      "Muse AI vs Claude compared by workflow fit: a fair testing method, where each assistant shines, and how to decide without generic rankings.",
    shortAnswer:
      "Choose Muse when its personal-agent workflows and product surface fit the job; choose Claude when its document, reasoning, or coding workflow better matches your process. Comparing the full field instead? Our [four-way comparison](/guides/muse-ai-vs-chatgpt-claude-meta-ai) adds ChatGPT and Meta AI to the picture. Test both with the same brief.",
    sections: [
      {
        heading: "A fair test",
        list: {
          ordered: true,
          items: [
            "Use one representative task with the same source material.",
            "Define a rubric: accuracy, structure, completeness, edit time, and usefulness.",
            "Run one refinement round in each assistant.",
            "Compare the finished result, not the first paragraph.",
          ],
        },
      },
      {
        heading: "Where each tends to shine",
        paragraphs: [
          "Muse leans toward personal-agent work: carrying a request through to a finished artifact, keeping context across a project, and operating across chat and messaging surfaces. Claude leans toward deep document work, long-form reasoning, and structured collaboration with careful, well-organized output.",
          "These are tendencies, not verdicts. The better assistant is the one that reliably reduces your work while keeping you in control — and that answer is personal to your workflow.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-download",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-download.jpg",
    imageAlt: "Illustration of a download arrow landing in a safe box with a shield, symbolizing safe Muse AI download",
    title: "Muse AI Download: Find the Official Access Route",
    deck: "Avoid clones and verify the source before installing anything.",
    category: "Safety",
    keywords: "muse ai download, download muse ai app, muse ai apk",
    metaTitle: "Muse AI Download: Find the Official Access Route (2026)",
    metaDescription:
      "How to find the official Muse AI download and access route — and how to spot clone apps, fake APKs, and phishing pages.",
    shortAnswer:
      "Use only the official Muse route presented by Meta or the verified app listing available for your region. Do not install files from third-party download pages.",
    sections: [
      {
        heading: "What to verify",
        list: {
          ordered: false,
          items: [
            "The publisher identity matches the official product.",
            "The link came from an official product page, invitation, or verified store listing.",
            "The app does not request unrelated credentials or payment outside the expected flow.",
          ],
        },
      },
      {
        heading: "Red flags to avoid",
        paragraphs: [
          "Unofficial APK files, “modded” versions promising unlimited access, download pages covered in pop-up ads, and anyone asking for your login in exchange for access. Around any hyped AI launch, clones and credential-harvesting pages multiply fast.",
          "If the correct download or access option isn't visible, availability may simply not have reached your account yet. Waiting beats installing something you can't verify. Check [where Muse is available](/guides/muse-ai-availability) for the current rollout; Mac users should read the [computer-use guide](/guides/muse-ai-mac-computer-use) before granting the desktop app broad permissions.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-billion-tokens",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-billion-tokens.jpg",
    imageAlt: "Illustration of glowing tokens rising from an open hand, symbolizing Muse AI token rewards",
    title: "Muse AI 1 Billion Tokens: What the Offer Means",
    deck: "Separate the headline from the terms that actually apply.",
    category: "Tokens",
    keywords: "muse ai 1 billion tokens, muse ai tokens, muse token reward",
    metaTitle: "Muse AI 1 Billion Tokens: What the Offer Means (2026)",
    metaDescription:
      "What the Muse AI 1 billion tokens referral offer means: eligibility, deadlines, what to verify in-app, and why the headline isn't a guarantee.",
    shortAnswer:
      "The “Muse AI 1 billion tokens” phrase refers to a promotional referral reward reported for eligible accounts. It is not a guarantee for every person, region, or date.",
    sections: [
      {
        heading: "Check these four things",
        list: {
          ordered: false,
          items: [
            "Eligibility: whether your account can participate at all.",
            "Deadline: how long after joining a code can still be entered.",
            "Amount: the reward currently shown to you — not the headline you saw online.",
            "Usage: where tokens work and whether other limits still apply.",
          ],
        },
      },
      {
        heading: "Why the headline misleads",
        paragraphs: [
          "A big round number travels fast on social media and loses its context along the way: which accounts, which regions, which dates, and under what conditions. The in-app invite or redeem screen is the only source of truth for your account Background reading: how [referral codes](/guides/muse-ai-referral-code) work in general, and [whether Muse stays free](/guides/is-muse-ai-free) once the promotion ends. — confirm there before planning work around a specific balance.",
          "Terms vary, and offers change. Confirm the current terms in the app.",
        ],
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Token Runway Estimator](/tools/token-runway) — see how long a token balance lasts at your pace.",
            "[Codes directory](/codes) — invite and referral codes in one place.",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-review",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-review.jpg",
    imageAlt: "Illustration of a magnifying glass examining shapes, symbolizing an honest Muse AI review",
    title: "Muse AI Review: Strengths, Limits, and Best Fit",
    deck: "A balanced review framework for deciding if Muse belongs in your workflow.",
    category: "Review",
    keywords: "muse ai review, muse ai pros cons, is muse ai good",
    metaTitle: "Muse AI Review: Strengths, Limits, Best Fit (2026)",
    metaDescription:
      "An honest Muse AI review: strengths to test, limits to remember, and a framework for deciding whether Muse fits your workflow.",
    shortAnswer:
      "Muse is promising for people who want an agent to help research, create, and finish multi-step work. Its real value depends on access, reliability for your tasks, and how well you review outputs.",
    sections: [
      {
        heading: "Strengths to test",
        list: {
          ordered: false,
          items: [
            "Moving from conversation to a concrete artifact or deliverable.",
            "Keeping context through a multi-step project instead of starting over.",
            "Combining planning, research, writing, and creation in one workflow.",
            "Meeting you where you already chat, including messaging surfaces.",
          ],
        },
      },
      {
        heading: "Limits to remember",
        paragraphs: [
          "AI output can be wrong, incomplete, or overconfident — Muse is no exception. Current features and quotas can vary by account and region. Review important facts, protect sensitive data, and keep approval with a human for consequential actions.",
          "The fairest review is your own: run your real tasks through it for a week and judge the finished outputs, not the marketing.",
        ],
      },
      {
        heading: "Reception and momentum",
        paragraphs: [
          "Early reception has been strong. Within about two weeks of its September 8, 2026 launch, Muse reached #1 on the US App Store (September 18) and #1 on Google Play (September 19). Sensor Tower estimates more than 3.4 million downloads in that window — other firms estimate between roughly 2.3 and 4.3 million — with daily active users climbing 27% the day after Meta's Connect keynote, per Sensor Tower data reported by TechCrunch.",
          "At Meta Connect, Meta announced what's next: video chat with the Muse avatar, computer use on Mac, a dedicated email address for Muse, more connectors and partners, and smart-glasses integrations. Notably, TechCrunch reports only about 6% of early download impressions came from Meta's own ads — most growth so far has been organic.",
          "Treat all of this as a snapshot, not a verdict: launch charts measure curiosity, and the review that matters is whether the product earns a daily habit.",
        ],
      },
      {
        heading: "Who it's best for",
        paragraphs: [
          "Muse fits people who think in projects rather than questions: creators, researchers, planners, and builders who want a collaborator that carries work to completion. On cost and trust, see [is Muse AI free?](/guides/is-muse-ai-free), the [privacy questions answered honestly](/guides/muse-ai-privacy), and the [security-flaw timeline](/guides/muse-ai-security-flaw). See how it stacks up in our [four-way comparison](/guides/muse-ai-vs-chatgpt-claude-meta-ai) and the deeper [Muse vs Claude](/guides/muse-ai-vs-claude) matchup. If you mostly need quick factual answers inside social apps, a lighter assistant may serve you better.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[How We Designed Muse — Meta's official design notes](https://introducing.muse.ai/)",
            "[Muse FAQ — Meta](https://ai.meta.com/muse/)",
            "[Meta is putting its muscle behind Muse — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-use-cases",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-use-cases.jpg",
    imageAlt: "Illustration of a grid of nine idea panels, symbolizing practical Muse AI use cases",
    title: "Muse AI Use Cases: 12 Practical Ideas",
    deck: "Useful projects for work, study, creativity, and everyday planning.",
    category: "Ideas",
    keywords: "muse ai use cases, what can muse ai do, muse ai examples",
    metaTitle: "Muse AI Use Cases: 12 Practical Ideas (2026)",
    metaDescription:
      "12 practical Muse AI use cases across research, writing, planning, study, and building — each ending in a clear, usable output.",
    shortAnswer:
      "The strongest Muse AI use cases end in a clear output: a researched brief, working page, study plan, edited draft, decision memo, or repeatable workflow.",
    sections: [
      {
        heading: "12 ideas to try",
        list: {
          ordered: true,
          items: [
            "Compare sources for a decision brief.",
            "Turn rough notes into a structured article.",
            "Build a landing page or calculator.",
            "Create a study curriculum with practice checkpoints.",
            "Generate practice questions from your material.",
            "Plan and revise a presentation end to end.",
            "Audit a resume against a job description.",
            "Design a month-long content calendar.",
            "Analyze a spreadsheet or report and summarize the story.",
            "Map a product or event launch plan.",
            "Draft and critique a difficult message before sending.",
            "Create a recurring weekly review workflow.",
          ],
        },
      },
      {
        heading: "Agent-native ideas",
        list: {
          ordered: true,
          items: [
            "Set a goal — say, tracking a price or monitoring a topic — and let Muse work it in the background, checking the Goals tab for progress.",
            "Ask for an Artifact instead of an answer: a spending tracker, an interactive study guide, or a dashboard over your own data.",
            "Connect an app, then have Muse draft the email or booking while you keep the final approval.",
            "Name it, give it an avatar, and treat it like a long-running collaboration: one main chat, side chats per project. Concrete starting points: [shopping with Muse](/guides/muse-ai-shopping), [talking instead of typing](/guides/muse-ai-voice-mode), [using Muse in WhatsApp](/guides/muse-ai-whatsapp), and [prompts that get better results](/guides/muse-ai-prompt-tips).",
          ],
        },
      },
      {
        heading: "Go deeper with skills",
        paragraphs: [
          "General prompting covers a lot, but specialized starting instructions go further. Explore [2,365 Muse skills](https://museai-eight.vercel.app/) across coding, design, research, productivity, and marketing — each one is a reusable playbook you can hand to Muse for sharper results.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[How We Designed Muse — Meta's official design notes](https://introducing.muse.ai/)",
            "[Muse FAQ — Meta](https://ai.meta.com/muse/)",
            "[Meta is putting its muscle behind Muse — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/)",
          ],
        },
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Use-case directory](/use-cases) — 31 real workflows across 7 personas, with starter prompts.",
            "[Muse for students](/for/students) — one of 20 intent pages tuned to who you are.",
            "[Can Muse Do This?](/tools/can-muse-do-this) — honest yes / depends / no answers for 64 tasks.",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-whatsapp",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-whatsapp.jpg",
    imageAlt: "Illustration of flowing chat bubbles, symbolizing using Muse AI on WhatsApp",
    title: "Muse AI on WhatsApp: Connect, Setup & What Works",
    deck: "Muse is live inside WhatsApp — connect it once, then chat like you would with a person.",
    category: "WhatsApp",
    keywords: "muse ai whatsapp, muse whatsapp, use muse on whatsapp, connect muse whatsapp",
    metaTitle: "Muse AI on WhatsApp: How to Connect & Use It (2026)",
    metaDescription:
      "Muse AI is live on WhatsApp. How to connect it step by step, what works well in chat vs the app, limitations, and chat habits that get better results.",
    shortAnswer:
      "Muse is available as a chat inside WhatsApp — find the Muse contact, sign in with your Meta account, confirm you're 18+, and start messaging. It's best for quick asks, reminders, and short threads; heavy production work belongs in the app.",
    sections: [
      {
        heading: "How to connect Muse on WhatsApp",
        paragraphs: [
          "Muse has been a WhatsApp surface since its September 2026 launch — TechCrunch, CNET, SiliconANGLE, and the Associated Press all confirmed WhatsApp alongside the iOS app, Android app, and web at launch. You talk to it like messaging another person: no separate download required.",
        ],
        list: {
          ordered: true,
          items: [
            "Open WhatsApp on your phone and look for the Muse chat — it appears as a contact you can message directly.",
            "If prompted, sign in with your Meta account. Muse uses the same Meta login tied to your Facebook, Instagram, or WhatsApp identity — you can create one with an email address or phone number if you don't have one.",
            "Confirm you're 18 or older. Muse is an adults-only product across every surface.",
            "Send your first message. Start small — ask a question or give it a quick task — to confirm the connection is live on your account.",
            "The exact entry point can vary by account as Meta rolls features out in stages, so if the chat isn't visible yet, check back — and never install an unofficial 'Muse for WhatsApp' app or share login codes with strangers promising access.",
          ],
        },
      },
      {
        heading: "What works well on WhatsApp",
        list: {
          ordered: false,
          items: [
            "Quick asks: 'summarize this article,' 'remind me at 6pm,' 'what's a good gift under $50?'",
            "Thinking through a decision in a short back-and-forth thread.",
            "Drafting and iterating on a tricky message before sending it.",
            "Follow-ups on work you started in the app — 'how's that research going?'",
            "Planning something small: a weekend trip, a dinner, a shopping shortlist.",
          ],
        },
      },
      {
        heading: "What belongs in the app instead",
        paragraphs: [
          "WhatsApp is the quick-ask surface. Anything that produces a real deliverable — a researched brief, a tracker, a document, a multi-step goal — belongs in the Muse app or on the web, where artifacts, side chats, and the Goals tab live. Long threads also fragment: one focused thread per project keeps context clean.",
          "Computer use, voice mode, and background goal tracking are app and web features — don't expect them inside a WhatsApp chat. And while Muse asks for approval before sensitive actions everywhere, review anything consequential on a bigger screen before saying yes.",
        ],
      },
      {
        heading: "Limitations to know",
        list: {
          ordered: false,
          items: [
            "Availability rolls out in stages — the launch was US-only, and the site tracks the current picture on the [availability guide](/guides/muse-ai-availability). If the chat isn't in your WhatsApp yet, it hasn't reached your account.",
            "Small screen, small context: long documents, precise formatting, and multi-file projects are painful in a chat window. Use WhatsApp for thinking and deciding, then move heavy production to the app.",
            "Don't confuse Muse with Meta AI — the assistant already inside WhatsApp, Instagram, and Messenger. Muse is the personal agent; Meta AI answers questions.",
            "Never share sensitive credentials, payment details, or one-time codes in chat. Muse never needs your passwords to do its job.",
          ],
        },
      },
      {
        heading: "Good WhatsApp habits",
        list: {
          ordered: false,
          items: [
            "Lead with the outcome in the first line — don't bury it three messages deep.",
            "Attach only the files or images the task actually needs.",
            "Ask for numbered options when a decision is involved.",
            "Use a follow-up message to correct assumptions or tighten the result.",
            "Keep one thread per project so context doesn't fragment.",
          ],
        },
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Muse on WhatsApp — app surface guide](/apps/whatsapp) — setup, tips, and honest limits for the WhatsApp surface.",
            "[Connector directory](/connectors) — every verified Muse connector with setup steps.",
            "[Muse AI Voice Mode](/guides/muse-ai-voice-mode) — the fastest hands-free alternative in the app.",
          ],
        },
      },
    ],
  },
  {
    slug: "is-muse-ai-free",
    modifiedTime: "2026-09-28",
    image: "/images/guides/is-muse-ai-free.jpg",
    imageAlt: "Illustration of an open gift box with light streaming out, symbolizing free Muse AI access",
    title: "Is Muse AI Free? Costs, Limits, and What to Check",
    deck: "Understand free access, promotional tokens, and account-specific limits.",
    category: "Cost",
    keywords: "is muse ai free, muse ai pricing, muse ai cost",
    metaTitle: "Is Muse AI Free? Pricing, Limits & Costs (2026)",
    metaDescription:
      "Is Muse AI free? How to verify pricing, free access, usage limits, and promotional token terms for your specific account.",
    shortAnswer:
      "Meta says Muse is free with a usage limit: when you reach it, you can upgrade to a paid subscription or wait for the limit to refresh. As of September 2026, the exact allowance and plan details for your account are shown in the app itself.",
    sections: [
      {
        heading: "Where to check",
        list: {
          ordered: false,
          items: [
            "Your Muse account or subscription screen for the current plan.",
            "The invite or redeem screen for promotional terms and deadlines.",
            "Any usage indicator or limit notice shown before a task runs.",
          ],
        },
      },
      {
        heading: "What Meta officially says",
        paragraphs: [
          "Meta's own FAQ puts it plainly: Muse is available for free with a usage limit. If you reach your free limit and want more, you can upgrade to a paid subscription — or wait until your free usage limit refreshes. Meta does not publish the exact size of the free allowance on its public product page, so treat third-party numbers as unverified.",
          "This is also why referral headlines and pricing are different things: a promotion adds a one-time balance; the plan determines what happens when any balance runs out.",
        ],
      },
      {
        heading: "Don't confuse offers with pricing",
        paragraphs: [
          "A referral headline is a promotion, not permanent pricing — and the cost of a plan is different from how many tokens a specific task consumes. Product offers can change, so verify the live terms in your account rather than relying on what you read online, incl Related: the [billion-tokens offer](/guides/muse-ai-billion-tokens) explained, our [Muse review](/guides/muse-ai-review), and the [privacy questions](/guides/muse-ai-privacy) worth asking before you commit.uding on this page.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[How We Designed Muse — Meta's official design notes](https://introducing.muse.ai/)",
            "[Muse FAQ — Meta](https://ai.meta.com/muse/)",
            "[Meta is putting its muscle behind Muse — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-is-putting-its-muscle-behind-muse-as-the-ai-app-takes-off/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-meta-connect-2026",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-meta-connect-2026.jpg",
    imageAlt: "Editorial illustration of a tech keynote stage with a glowing AI avatar face on a giant screen",
    title: "Meta Connect 2026: Every Muse AI Announcement",
    deck: "Video avatars, Mac computer use, a dedicated email address, and smart glasses — what Meta announced and what's live now.",
    category: "News",
    keywords: "meta connect 2026 muse, muse ai new features, muse realtime avatar",
    metaTitle: "Meta Connect 2026: Every Muse AI Announcement",
    metaDescription:
      "Meta Connect 2026 brought big Muse AI news: video avatars, Mac computer use, a dedicated email address, and smart-glasses integration. What's live, what's next.",
    shortAnswer:
      "At Meta Connect 2026 on September 23, Meta announced Muse Realtime Avatar video chat, Mac computer use (available now), a dedicated Muse email address, and smart-glasses integration arriving in the coming months.",
    sections: [
      {
        heading: "The announcements, in 60 seconds",
        paragraphs: [
          "Two weeks after Muse launched, Meta used its Connect 2026 keynote on September 23 to sketch where the agent goes next. CEO Mark Zuckerberg called Muse 'the centerpiece of our vision for what we're building,' and framed the announcements as steps toward what he described as 'personal superintelligence' used by billions of people.",
        ],
        list: {
          ordered: false,
          items: [
            "Muse Realtime Avatar — video chat with a visible, animated avatar of your agent. Announced; no release date yet.",
            "Mac computer use — Muse operates apps on your Mac with permission. Available now.",
            "A dedicated email address for Muse — the agent sends and receives mail on your behalf. Announced; no date yet.",
            "Smart glasses integration — wake Muse by saying its name, with vision of what you're looking at. Coming in the months ahead.",
            "Voice mode and customizable voices — talk in real time while Muse keeps working in the background.",
            "Muse Charm — a small new gadget for voice-based AI interaction.Muse Charm — a small new gadget for voice-based AI interaction ([full Charm breakdown](/guides/muse-ai-charm)).",
            "More shopping partners and connectors — expanding what Muse can plug into.",
          ],
        },
      },
      {
        heading: "Muse Realtime Avatar: a face for your agent",
        paragraphs: [
          "The most striking demo was the Realtime Avatar: a new model that turns Muse's real-time voice into an interactive, expressive avatar you can video chat with. Instead of typing into a chat window, you talk to a face — assigning tasks and asking questions through voice, expression, and presence.",
          "This is the one to treat as a preview, not a product. The avatar has a name — [meet Jolly](/guides/muse-ai-jolly-avatar) and learn to personalize yours. Meta showed the technology but gave no public release date, and current reporting doesn't point to one either. If you're waiting for this specifically, the [early access program](/guides/muse-ai-early-access-program) is the official way to raise your hand for upcoming features.",
        ],
      },
      {
        heading: "Mac computer use: the announcement that's live now",
        paragraphs: [
          "The most immediately useful news is computer use on Mac. With your permission, Muse can operate applications on your desktop — clicking, typing, and working through a queued list of tasks even after you walk away from the computer. Meta's chief AI officer Alexandr Wang framed it plainly: users will be able to 'walk away from your computer' while Muse keeps working.",
          "This puts Muse in direct company with Anthropic's computer-use features and OpenAI's Operator. The Mac app itself shipped in mid-September; computer use is the expansion. Because this one hands an agent the keys to your desktop, it's worth reading our [Mac computer-use guide](/guides/muse-ai-mac-computer-use) on permissions and safety before turning it on.",
        ],
      },
      {
        heading: "A dedicated email address for Muse",
        paragraphs: [
          "Meta also announced that Muse will get its own email address. The idea: you can email Muse directly, add it to an email thread, or forward messages for it to act on — letting the agent work in the background without the app staying open.",
          "No date was given, and Meta hasn't said what the address will look like. Conceptually it's a big step: an agent with a persistent inbox becomes reachable asynchronously, not just when you're chatting with it. As with all agent email access, the permission model will matter more than the feature itself.",
        ],
      },
      {
        heading: "Smart glasses: Muse you can talk to hands-free",
        paragraphs: [
          "Muse is coming to Meta's smart-glasses line in the coming months — no firm date. You'll wake the agent by saying the name you gave it, and because the glasses see what you see, Muse can act on your surroundings without you describing them first: ask about a product on a shelf, a flyer on a wall, or a long list of school supplies.",
          "Meta's examples skew everyday-practical: guided workouts, meal logging, booking appointments, checking flight prices while driving or cooking. The agent works in the background and checks back when the job is done. This landed alongside new hardware — Ray-Ban Meta Audio glasses and a Meta VR glasses announcement — plus the small Muse Charm voice gadget.",
        ],
      },
      {
        heading: "What to do with this news",
        paragraphs: [
          "If you're in the US or Canada and already using Muse, computer use on Mac is the one to try today — carefully, with app-by-app permissions. Everything else is a roadmap: exciting, but not something to plan around until dates exist.",
          "If you're outside the supported regions, none of these announcements change [availability](/guides/muse-ai-availability) yet. And if you want to be first in line when the avatar, email, and glasses features roll out, join the [early access program](/guides/muse-ai-early-access-program).",
          "As always: this is an unofficial guide. Meta's own announcements are the source of truth, and dates slip — treat every 'coming months' as a direction, not a promise.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta opens early access program for new Muse features — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-opens-early-access-program-for-new-muse-features/)",
            "[Meta Muse update: new avatar, Mac control, shopping partners — TPS Report, September 24, 2026](https://tpsreport.news/news/meta-muse-ai-agent-new-features-connect-2026)",
            "[Meta gives its Muse AI agent video avatars, email addresses, and Mac control — gen-ai.news, September 24, 2026](https://gen-ai.news/stories/meta-gives-its-muse-ai-agent-video-avatars-email-addresses-and-mac-control-432e47)",
            "[Meta's Muse will answer to its own name on AI glasses, and it gets an email address — Mixed News, September 2026](https://mixed-news.com/en/meta-muse-agent-ai-glasses-connect-2026-email-address/)",
            "[Meta expands Muse with Mac computer use, agent email and planned glasses access — AI-Generative, September 2026](https://www.ai-generative.org/news/meta-expands-muse-with-mac-computer-use-agent-email-and-planned-glasses-access)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-mac-computer-use",
    modifiedTime: "2026-09-26",
    image: "/images/guides/muse-ai-mac-computer-use.jpg",
    imageAlt: "Editorial illustration of a laptop with a glowing cursor arranging floating app windows",
    title: "Muse AI on Mac: Computer Use Explained",
    deck: "What the Mac app's computer-use feature does, how to use it, and the permissions to understand first.",
    category: "Tutorial",
    keywords: "muse ai mac, muse mac computer use, muse mac app",
    metaTitle: "Muse AI on Mac: Computer Use Explained (2026)",
    metaDescription:
      "Muse's Mac app can now operate apps on your computer with permission. How computer use works, what it can do, and the safety prompts to know.",
    shortAnswer:
      "With your permission, Muse for Mac can operate apps on your desktop and keep working through queued tasks after you step away. Sensitive actions still stop for your approval.",
    sections: [
      {
        heading: "What 'computer use' actually means",
        paragraphs: [
          "Computer use means Muse stops being a chat window and starts operating your Mac's graphical interface the way you would: opening applications, clicking buttons, typing into fields, and moving between apps to complete a task. You describe the outcome — 'organize these downloads into folders by project' — and Muse drives the apps to do it.",
          "This is the same category as Anthropic's computer-use capability and OpenAI's Operator. What makes Muse's version notable is that it combines desktop control with everything else Muse already does: its own cloud computer, browser, connectors, and memory of your goals.",
        ],
      },
      {
        heading: "What it can do today",
        paragraphs: [
          "Reporting on the Mac app describes it interacting with files, messages, calendar, notes, and mail inside their native applications. The signature move, per Meta's chief AI officer Alexandr Wang: you queue up tasks, walk away from your desk, and Muse keeps working through the list.",
        ],
        list: {
          ordered: false,
          items: [
            "Work across native Mac apps — files, mail, messages, calendar, and notes.",
            "Chain multi-step tasks: research in the browser, draft in notes, attach in mail.",
            "Continue through a queued task list while you're away from the computer.",
            "Combine with connectors so desktop work and cloud work happen in one flow.",
          ],
        },
      },
      {
        heading: "How to use it",
        list: {
          ordered: true,
          items: [
            "Install the Muse Mac app from the official source — never a third-party download. (See our [download safety guide](/guides/muse-ai-download).)",
            "Grant access app by app. Computer use is opt-in: decide which applications Muse may operate, and start narrow.",
            "Describe the task in plain language, including the outcome you want and anything that must not happen.",
            "Queue follow-up tasks while the first runs — Muse works through the list in order.",
            "Review what it did when you return. Check the results in the apps themselves, not just Muse's summary.",
          ],
        },
      },
      {
        heading: "The permission model, and why it matters",
        paragraphs: [
          "Meta's approach is opt-in and app-by-app, with approval prompts gating sensitive actions. That design is doing real work: an agent that can click anything needs hard boundaries around payments, messages sent as you, file deletions, and account settings. The rule of thumb is least privilege — grant Muse access to the apps a task needs, not your whole machine, and widen access only when a task genuinely requires it.",
          "Sensitive actions should always stop for your approval. If you ever find Muse doing something consequential without asking, treat that as a bug to report, not a convenience.",
        ],
      },
      {
        heading: "What to watch out for",
        paragraphs: [
          "Desktop control is the highest-trust feature Muse offers, so it deserves the most caution. Shortly after the Mac app launched, security researcher Patrick Wardle disclosed a serious flaw that could let local malware hijack the agent — Meta patched it within a day, but the episode is a reminder that an agent with broad permissions is a high-value target. Read the [full timeline](/guides/muse-ai-security-flaw) before granting wide access.",
        ],
        list: {
          ordered: false,
          items: [
            "Keep the Mac app updated — security fixes ship as app updates.",
            "Never paste terminal commands from strangers; social-engineering tricks are the cheapest way in.",
            "Review connected apps and permissions periodically, and revoke what you no longer use.",
            "Don't grant control of apps holding your most sensitive data until you've tested with low-stakes tasks.",
          ],
        },
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta Muse adds video avatars, email, Mac control — Tech Insider, September 2026](https://tech-insider.org/meta-muse-video-avatars-mac-control-2026/)",
            "[Meta gives its Muse AI agent video avatars, email addresses, and Mac control — gen-ai.news, September 24, 2026](https://gen-ai.news/stories/meta-gives-its-muse-ai-agent-video-avatars-email-addresses-and-mac-control-432e47)",
            "[Meta expands Muse with Mac computer use, agent email and planned glasses access — AI-Generative, September 2026](https://www.ai-generative.org/news/meta-expands-muse-with-mac-computer-use-agent-email-and-planned-glasses-access)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-early-access-program",
    modifiedTime: "2026-09-26",
    image: "/images/guides/muse-ai-early-access-program.jpg",
    imageAlt: "Editorial illustration of a glowing golden ticket floating toward an open doorway of light",
    title: "Muse AI Early Access Program: How to Join",
    deck: "Meta is letting users request early access to upcoming Muse features. The exact prompt and what's included.",
    category: "News",
    keywords: "muse early access, muse ai early access program, muse ai beta features",
    metaTitle: "Muse AI Early Access: How to Join (2026)",
    metaDescription:
      "Meta opened an early access program for upcoming Muse features on September 25, 2026. How to request access with one prompt, and what's included.",
    shortAnswer:
      "Ask Muse: 'Can you let the Muse team know I want to be part of the Muse early access program?' Meta opened requests on September 25, 2026 for enthusiasts to try new features first.",
    sections: [
      {
        heading: "What the program is",
        paragraphs: [
          "On September 25, 2026 — two days after the Connect keynote — Meta opened requests for an early access program for Muse's upcoming features. Instead of a closed beta or a randomized test group, Meta is asking AI enthusiasts to put themselves forward to try new capabilities before anyone else.",
          "The logic is straightforward: the people most likely to stress-test an agent are the people already comparing AI apps side by side. If that's you, Meta wants you in the pool.",
        ],
      },
      {
        heading: "How to join: the exact prompt",
        list: {
          ordered: true,
          items: [
            "Open Muse (you'll need an active account in a supported region — see [availability](/guides/muse-ai-availability)).",
            "Send this exact message: 'Can you let the Muse team know I want to be part of the Muse early access program?'",
            "Muse will log your interest with the team. That's the whole signup — there's no separate form or waitlist page.",
            "Wait. Meta hasn't said how quickly invitations go out or how many people will be admitted.",
          ],
        },
      },
      {
        heading: "What early access may include",
        paragraphs: [
          "Meta hasn't published a definitive feature list for testers, but the Connect announcements are the obvious candidates:",
        ],
        list: {
          ordered: false,
          items: [
            "Muse Realtime Avatar — video chat with an animated avatar of your agent.",
            "Expanded Mac computer-use capabilities.",
            "New shopping partners and connectors.",
            "Smart-glasses integration as it approaches release.",
          ],
        },
      },
      {
        heading: "What to expect as a tester",
        paragraphs: [
          "Early features are early: expect rough edges, changing behavior, and the occasional dead end. That's the trade — you get the future first, and Meta gets feedback from people who actually push the product.",
          "A few honest caveats: requesting access doesn't guarantee admission; features may arrive in stages rather than all at once; and everything is still limited to regions where Muse operates. If you're outside the US and Canada, the program doesn't change that — check [availability](/guides/muse-ai-availability) for the current picture.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta opens early access program for new Muse features — TechCrunch, September 25, 2026](https://techcrunch.com/2026/09/25/meta-opens-early-access-program-for-new-muse-features/)",
            "[Meta opens early access for Muse AI app — Inshorts, September 2026](https://inshorts.com/en/amp_news/meta-opens-early-access-for-muse-ai-app-1790525054478)",
            "[Meta opens early access for upcoming Muse AI features — Digital Market Reports, September 2026](https://digitalmarketreports.com/news/92716/meta-opens-early-access-for-upcoming-muse-ai-features/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-security-flaw",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-security-flaw.jpg",
    imageAlt: "Editorial illustration of a magnifying glass over a laptop revealing a cracked padlock",
    title: "The Muse Mac Security Flaw: What Actually Happened",
    deck: "A researcher found a serious Mac app flaw; Meta patched it within a day. The full timeline and what it means for you.",
    category: "Safety",
    keywords: "muse ai security flaw, muse mac vulnerability, is muse ai safe",
    metaTitle: "Muse Mac Security Flaw Explained: Timeline & Fix",
    metaDescription:
      "Security researcher Patrick Wardle disclosed a Muse Mac zero-day on September 21, 2026; Meta hot-fixed it on September 22. What happened and what to do.",
    shortAnswer:
      "On September 21, 2026, researcher Patrick Wardle disclosed a zero-day in the Muse Mac app that could let local malware hijack the agent; Meta issued a hotfix on September 22. Keep the app updated.",
    sections: [
      {
        heading: "The timeline",
        paragraphs: [
          "September 21, 2026: macOS security researcher Patrick Wardle published an X thread warning users about serious flaws in the Muse Mac app, alongside a proof-of-concept repository he titled 'not-a-mused.' His opening line: 'Please don't install — it's trivial to turn Muse into the ultimate backdoor.'",
          "September 22, 2026: Wardle posted 'Hooray, hot-fixed!' confirming Meta had patched the vulnerability — roughly a day after disclosure. David Singleton of Meta Superintelligence Labs confirmed the hotfix on X, describing the issue as a local privilege escalation attack, not a remote exploit, and assessing the practical risk to users as 'quite low.'",
        ],
      },
      {
        heading: "What the flaw was",
        paragraphs: [
          "The vulnerability centered on an undocumented preference setting in the Mac app — endo_voyager_dictation_endpoint — which controlled where Muse sent voice dictation for processing. Any app or script running under the user's account could modify this setting without triggering macOS permission alerts, redirecting transcription from Meta's servers to an attacker's endpoint.",
          "That redirection exposed the user's account authentication token. With the token, an attacker gained full control of the agent — and because Muse holds broad system permissions by design, Wardle's proof of concept could take pictures and write malicious files to disk, often without alerting the user. As he told Ars Technica: 'We can manipulate the agent and leverage its privileges to do whatever we want. So instead of us having to write a very comprehensive Mac malware stealer, we can just leverage the AI assistant itself.'",
          "Several design choices enabled it: dictation processed in the cloud rather than on-device (unlike Apple's on-device transcription), and undocumented settings left writable by any local process.",
        ],
      },
      {
        heading: "How serious was it, really",
        paragraphs: [
          "Two things are true at once. The exploit required local code execution — malware already running on the machine, physical access, or a social-engineering trick like a ClickFix prompt getting the user to paste a terminal command. It was not remotely exploitable over the internet, which is why Meta assessed real-world risk as low.",
          "But the deeper point stands: an agent designed to act across your files, email, messages, and calendar with broad permissions becomes the single highest-value target on the machine. Compromise the agent and you inherit everything it can touch. That structural reality doesn't disappear with one hotfix — it's the permanent trade-off of [computer-use agents](/guides/muse-ai-mac-computer-use). Our [privacy guide](/guides/muse-ai-privacy) answers what Muse can see and what you can opt out of.",
        ],
      },
      {
        heading: "What to do as a user",
        list: {
          ordered: false,
          items: [
            "Update the Muse Mac app and keep it updated — this is how security fixes reach you.",
            "Never paste terminal commands from strangers, popups, or videos. ClickFix-style tricks are the cheapest attack path.",
            "Keep macOS itself updated; OS-level protections are part of the defense.",
            "Grant Muse the narrowest permissions each task needs, and revoke access you no longer use.",
            "Treat any agent with deep system access as high-trust software: powerful, useful, and worth a skeptical eye.",
          ],
        },
      },
      {
        heading: "The bigger picture",
        paragraphs: [
          "This episode landed in a week when platforms started pushing back on autonomous agents more broadly — Amazon began blocking Muse from placing automated orders, saying the agent violated its terms. The industry is negotiating, in real time, what agents are allowed to do and who is responsible when they do it.",
          "Our honest take: Muse's capabilities are real, and so are the risks that come with an agent holding your credentials and permissions. Use it, but grant least privilege, keep everything updated, and remember that the most powerful assistant on your machine is also the most attractive target on it.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta hot-fixes Muse zero-day that let attackers hijack the AI agent — Unite.AI, September 2026](https://www.unite.ai/meta-hot-fixes-muse-zero-day-that-let-attackers-hijack-the-ai-agent/)",
            "[Meta Muse hit by zero-day flaw: is your Mac safe? — Android Headlines, September 2026](https://www.androidheadlines.com/2026/09/meta-muse-ai-mac-zero-day-vulnerability.html)",
            "[Muse Mac app security flaw allows hackers to exploit the AI agent — iPhone in Canada, September 22, 2026](https://www.iphoneincanada.ca/2026/09/22/muse-mac-app-security-flaw-allows-hackers-to-exploit-the-ai-agent/)",
            "[Meta patches Muse exploit that let attackers control the AI agent — GNN, September 25, 2026](https://gnnhd.tv/news/56482/meta-patches-muse-exploit-that-let-attackers-control-the-ai-agent)",
            "[Muse's undocumented endpoint turns macOS agent into a local backdoor — Forkast, September 2026](https://forkast.news/muses-undocumented-endpoint-turns-macos-agent-into-a-local-backdoor/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-availability",
    modifiedTime: "2026-09-26",
    image: "/images/guides/muse-ai-availability.jpg",
    imageAlt: "Editorial illustration of a world globe with North America glowing and other regions as faint outlines",
    title: "Is Muse AI Available in My Country?",
    deck: "The US and Canada have it; India, Pakistan, the UK, and Europe don't yet. The full availability picture and why a VPN won't help.",
    category: "Access",
    keywords: "muse ai india, muse ai availability, muse ai uk release date, muse ai region, muse ai pakistan",
    metaTitle: "Muse AI Availability: Countries & Release Dates",
    metaDescription:
      "Muse AI is available in the US and Canada only, as of September 2026. No India, UK, or EU date yet — and VPNs violate the terms. What to use instead.",
    shortAnswer:
      "As of September 2026, Muse is available only in the US and Canada. Meta has announced no dates for India, the UK, or Europe, and using a VPN to bypass the restriction violates Meta's terms.",
    sections: [
      {
        heading: "Where Muse works today",
        paragraphs: [
          "Muse launched in the United States on September 8, 2026, and reached Canada on September 18. Those two countries are the complete list as of late September 2026. Access is limited to adults 18 and older, and the product runs on iOS, Android, the web, and a Mac app.",
          "Meta's help centre describes availability plainly: subscriptions are 'in limited testing and aren't available in all locations yet,' and you must be located in a country where Muse operates. Meta publishes no country list and no expansion timeline.",
          "A note on Mexico: a few press outlets (GSMArena, Gulf News) have reported that Muse also covers Mexico, and one Connect live blog claims Meta's event materials listed the US, Canada, and Mexico. We could not find any direct statement from Meta confirming Mexico, and major outlets as recent as September 25 still describe availability as US and Canada only — so we treat Mexico as reported but unconfirmed, and this page will be updated the moment Meta says otherwise.",
          "The demand outside those two countries is real: searches for Muse availability come heavily from India, Pakistan, the UK, South Korea, and South Africa — regions where the product doesn't exist yet. If you're searching from one of them, this page is for you: the short version is that waiting is currently the only legitimate option. Not sure where your country stands? [Check instantly with our availability checker](/tools/availability-checker)."
        ],
      },
      {
        heading: "India and Pakistan: not yet, no date",
        paragraphs: [
          "Muse is not available in India or Pakistan, and Meta has said nothing about when — or whether — that changes. This surprises people because Meta AI is already everywhere in both countries through WhatsApp, Instagram, and Facebook. But Muse is a different product: Meta AI answers questions inside Meta's apps, while Muse is a standalone agent with its own computer and browser that completes tasks across apps.",
          "The pricing often quoted alongside availability — a free tier, a $20/month Power plan, and a $100/month Maximum plan — only matters once the product reaches you. For now, those tiers describe the US and Canadian product.",
        ],
      },
      {
        heading: "UK and Europe: also waiting",
        paragraphs: [
          "The UK and EU are in the same position: no availability, no date. Regulatory complexity is the usual suspect — data residency and platform rules mean a European rollout needs its own trust architecture — but Meta hasn't confirmed any of that publicly. There is no business or enterprise tier and no published data-processing terms for Muse yet, which also keeps it out of workplaces that require them.",
        ],
      },
      {
        heading: "Why a VPN won't help",
        paragraphs: [
          "The workaround everyone suggests — a US-based VPN — doesn't work and isn't safe. Meta's terms require you to be physically located in a country where Muse operates; a VPN doesn't change your actual location, so using one breaks the rules. Reports note that attempting it risks suspension of the linked Meta account.",
          "It's also technically fragile: whether Muse appears in the App Store or Google Play depends on your account's region settings, and the app simply isn't listed on storefronts outside supported countries. A VPN can't fix any of that.",
        ],
      },
      {
        heading: "What to use while you wait",
        paragraphs: [
          "If you want the closest available experience today, Meta AI inside WhatsApp, Instagram, or Facebook is the practical option on Meta's own platforms — it's the assistant, not the agent, but it's there now.",
          "If you're technically inclined, the model behind Muse — Muse Spark 1.3 — is available through OpenRouter on a pay-per-token basis. That gives you the model, not the full Muse agent experience with tasks, browsing, and memory, so set expectations accordingly.",
          "And when Muse does arrive in your country, access will likely involve the invite system — our [invite code guide](/guides/muse-ai-invite-code) and [referral code guide](/guides/muse-ai-referral-code) explain how that works. Start with [how to get Muse AI](/guides/how-to-get-muse-ai) for the full access walkthrough, and read [how to download safely](/guides/muse-ai-download) once you're eligible.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta Muse stays off the table for Indian users, for now — Dailyhunt, September 2026](https://m.dailyhunt.in/news/india/english/analytics%20insight-epaper-anycinst/meta%20muse%20stays%20off%20the%20table%20for%20indian%20users%20for%20now-newsid-n728366895)",
            "[Where your AI data actually goes: UK residency in 2026 — SpotDev, September 2026](https://www.spotdev.co.uk/blog/ai-data-residency-uk-chatgpt-claude-gemini-grok-muse)",
            "[Meta Muse: inside the AI agent that actually does your tasks — Social Nation, September 2026](https://blog.socialnationnow.com/meta-muse-ai-agent-explained-features-pricing)",
            "[What is Muse? Mark Zuckerberg's new AI agent — The Statesman, September 2026](https://www.thestatesman.com/technology/what-is-muse-mark-zuckerbergs-new-ai-agent-that-could-end-up-knowing-your-life-better-than-you-do-1503636756.html)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-jolly-avatar",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-jolly-avatar.jpg",
    imageAlt: "Jolly, Muse's fluffy cream-colored default avatar, smiling on a warm watercolor background",
    title: "Meet Jolly: Muse's Avatar & How to Personalize Yours",
    deck: "Jolly is Muse's default avatar — cream-colored, beady-eyed, and fully customizable. How to rename, redesign, and tune your agent.",
    category: "Basics",
    keywords: "muse ai avatar, jolly muse, muse ai customize, change muse avatar",
    metaTitle: "Meet Jolly: Muse's Avatar & Personalization Guide",
    metaDescription:
      "Jolly is Muse's default avatar — a cute, fully customizable companion. Learn how to rename, redesign, and tune your Muse's personality.",
    shortAnswer:
      "Jolly is the cream-colored default avatar of Meta's Muse AI agent, named by Mark Zuckerberg at Connect 2026. You can rename your Muse, redesign its avatar and attire, and adjust how proactively it messages you.",
    sections: [
      {
        heading: "Who is Jolly?",
        paragraphs: [
          "Every Muse agent comes with a face — and that face has a name. At Meta Connect on September 23, 2026, Mark Zuckerberg introduced the default Muse avatar: a cream-colored, doll-like creature with beady black eyes and an upward smile, named Jolly for its \u201cjolly and completely customizable character and personality.\u201d",
          "The design is deliberate. Where rival AI assistants present as impersonal interfaces, Meta gave its agent something closer to a plush toy — a look commentators have compared to Labubu collectibles and Fall Guys beans. Meta's chief AI officer Alexandr Wang leaned into it hard, posting a flood of AI-generated Jolly memes that turned the little creature into a minor internet celebrity within days of the keynote.",
        ],
      },
      {
        heading: "What you can customize",
        paragraphs: [
          "Jolly is only the starting point. Meta built Muse's identity to be reshaped: users can change their agent's name, redesign its appearance, and even dress it — Zuckerberg's own agent, for example, is named Agrippa after the Roman general, and wears a toga with a laurel wreath.",
          "Personality is adjustable too. Muse can be proactive — checking in with reminders, suggestions, and updates — and you control the volume: keep its messages frequent, quiet them down, or switch proactive nudges off entirely. If you want the full walkthrough of what Muse can do day to day, start with our [beginner's guide](/guides/what-is-muse-ai).",
        ],
      },
      {
        heading: "How to personalize yours",
        list: {
          ordered: true,
          items: [
            "Open the Muse app and find your agent's profile or settings — look for avatar, appearance, or personalization options.",
            "Give your Muse a name. Pick something you'll naturally say out loud, since voice and the upcoming smart-glasses integration wake the agent by name.",
            "Redesign the look. Start from Jolly or build something entirely different — the avatar is meant to be yours, not Meta's.",
            "Set the personality. Decide how your Muse talks to you and how often it reaches out on its own; you can always tune this later.",
            "Revisit it monthly. As you learn what you actually use Muse for, the name, look, and chattiness that felt right on day one may deserve a refresh.",
          ],
        },
      },
      {
        heading: "The Realtime Avatar: video-chatting your agent",
        paragraphs: [
          "Personalization is about to get a lot more literal. At Connect, Meta announced the Muse Realtime Avatar — live video chat with an animated version of your agent, demonstrated publicly by Alexandr Wang on September 24. Speech and video generate from a shared stream, so the avatar's voice, lip movement, and expressions stay synchronized as you talk.",
          "Notably, the system can animate a reference image during a live conversation — a photographic portrait, an illustration, an animal, or even an everyday object. There is no public release date yet, so treat it as a preview rather than a product. Our [Connect 2026 roundup](/guides/muse-ai-meta-connect-2026) tracks every announcement and its status.",
        ],
      },
      {
        heading: "Jolly on your keychain",
        paragraphs: [
          "If you'd rather carry the little guy around, that's the idea behind the [Muse Charm](/guides/muse-ai-charm): a Tamagotchi-style keychain gadget with a small screen, a fingerprint sensor, and Jolly as its default avatar. Tap, speak, and Jolly toddles off to handle the task — no phone required. It ships in December 2026.",
          "Whether you keep Jolly, design your own Agrippa, or wait for the video-chat avatar, the principle is the same: Muse works best when it feels like yours. A name and a face turn an app into a companion — and companions get used.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[It\u2019s cute. It\u2019s cuddly. And it wants all your data \u2014 newsline24, September 2026](https://newsline24.online/meta-muse-ai-agent-response-animated-avatar-cute-rcna599736/)",
            "[Meta Launches Adults-Only Muse AI Agent with Kawaii Mascot Jolly \u2014 Memesita, September 2026](https://www.memesita.com/meta-launches-adults-only-muse-ai-agent-with-kawaii-mascot-jolly/)",
            "[The Identity Shift \u2014 Zoe Scaman, September 2026](https://zoescaman.substack.com/p/the-identity-shift)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-shopping",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-shopping.jpg",
    imageAlt: "Jolly, Muse's cream avatar, beside a watercolor shopfront with shopping bags and gift boxes",
    title: "Shopping with Muse: Walmart, Sephora & Agent Checkout",
    deck: "Muse can shop Walmart, Best Buy, and Sephora for you — with your approval. How agent shopping works, who partnered, and who said no.",
    category: "Workflow",
    keywords: "muse ai shopping, muse walmart, ai shopping agent, muse ai buy",
    metaTitle: "Shopping with Muse: How the AI Agent Buys for You",
    metaDescription:
      "Muse shops Walmart, Best Buy, Sephora and more with your approval. Partners, payments, the approval step \u2014 and why Amazon blocked it.",
    shortAnswer:
      "Muse can shop partner retailers like Walmart, Best Buy, Gap, and Sephora: it builds the cart, shows the total, and only pays after you approve. Amazon has refused to participate and blocked the agent.",
    sections: [
      {
        heading: "How agent shopping works",
        paragraphs: [
          "Shopping is the feature Meta talks about most, because it's the clearest demo of an agent versus a chatbot. You describe the outcome in plain language \u2014 the widely used example is \u201cI\u2019m hosting a Christmas dinner for 10 people on Friday. Order everything I need from Walmart.\u201d Muse then navigates to the retailer, checks inventory, builds the cart, applies discounts, and calculates local taxes.",
          "The purchase itself is deliberately careful. Muse generates a secure, one-time-use digital payment card via Stripe — your real card number is never revealed to the merchant — and then pings you for final confirmation: \u201cI\u2019ve set up your Christmas dinner order for $50. Tap to approve purchase.\u201d Nothing is charged until you say yes, and you can close the app entirely while it works.",
        ],
      },
      {
        heading: "Who partnered with Muse",
        paragraphs: [
          "At Connect on September 23, Meta unveiled a long roster of retail partners integrating directly with Muse: Walmart, Best Buy, Gap, Sephora, Wayfair, Dick\u2019s Sporting Goods, Ulta Beauty, Fanatics, Michael Kors, American Eagle Outfitters, and GameStop. Travel and grocery ordering run through Expedia and Instacart, with restaurant reservations via OpenTable.",
          "Underneath, the commerce plumbing is Stripe\u2019s Link and Shop Pay plus PayPal for payments, and Shopify\u2019s catalogue for product search. Meta also opened its connector framework to outside developers and received more than 1,500 applications for new integrations in under a week \u2014 so the partner list should keep growing.",
        ],
      },
      {
        heading: "The business model: no ads, a cut of transactions",
        paragraphs: [
          "Zuckerberg has been explicit that Meta does not plan to sell ads inside Muse. Instead, the company expects to profit \u201cby taking a small fee from transactions\u201d the agent completes \u2014 purchases, bookings, bill negotiations. That is also why Muse stays free for most usage: Meta bets the agent will earn its keep by saving and spending your money. For the bigger picture, see [Muse use cases](/guides/muse-ai-use-cases) and [whether Muse is free](/guides/is-muse-ai-free).",
          "The saving side is real. Meta's Alexandr Wang described Muse negotiating with a cable company through its online support chat and knocking $85 a month off the bill, plus hunting down car-insurance savings and refunds users didn't know they were owed. An agent that pays for itself is a much easier sell than a subscription.",
        ],
      },
      {
        heading: "Who said no: Amazon and the holdouts",
        paragraphs: [
          "The biggest name missing is Amazon \u2014 deliberately. Amazon blocked Muse from its store, saying it was given no notice or choice about participation, and citing concerns about how account credentials are handled and that the agent doesn't identify itself as AI during transactions. Resy, the restaurant-booking platform, likewise says it does not permit unapproved third-party agents.",
          "This is the industry's open fight, playing out in real time: retailers deciding whether AI agents are welcome shoppers or unwelcome bots. Expect the partner list \u2014 and the block list \u2014 to keep shifting through the rest of 2026.",
        ],
      },
      {
        heading: "Shopping safely with an agent",
        list: {
          ordered: false,
          items: [
            "Always review the total before approving. The approval ping is the safety net \u2014 actually read it.",
            "Start with low-stakes orders (groceries, household basics) before handing over big purchases.",
            "Set a mental spending cap per order and tell Muse explicitly: \u201ckeep it under $60.\u201d",
            "Prefer partner retailers with direct integrations over agents improvising checkout on unfamiliar sites.",
            "Remember the one-time payment cards: even if something goes wrong, your real card number was never exposed.",
            "Keep the app updated \u2014 commerce features and their safeguards are evolving fast.",
          ],
        },
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Walmart, Sephora, and Gap introduce \u2018concierge\u2019 service for shoppers \u2014 The Sun, September 2026](https://www.the-sun.com/money/17052697/walmart-sephora-gap-launch-muse-ai-concierge-service/)",
            "[Zuckerberg says Muse will stay free for many as major retailers join new AI shopping push \u2014 Dimsum Daily, September 2026](https://www.dimsumdaily.hk/zuckerberg-says-muse-will-stay-free-for-many-as-major-retailers-join-new-ai-shopping-push/)",
            "[Meta Muse AI agent will earn from transaction fees, not ads \u2014 MediaNama, September 2026](https://www.medianama.com/2026/09/223-signals-meta-connect-muse/)",
            "[AI agents promise to do everything for you. There may be a big wrinkle in that plan \u2014 CNN, September 2026](https://www.cnn.com/2026/09/28/tech/meta-muse-ai-agents-amazon?cid=external-feeds_iluminar_meta)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-voice-mode",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-voice-mode.jpg",
    imageAlt: "Jolly, Muse's cream avatar, with watercolor sound waves flowing across the scene",
    title: "Muse Voice Mode: Talking to Your Agent",
    deck: "Muse listens, talks back, and is gaining a face. How voice mode works today and what's coming next.",
    category: "Tutorial",
    keywords: "muse ai voice, muse voice chat, talk to muse ai",
    metaTitle: "Muse Voice Mode: Talk to Your AI Agent (2026)",
    metaDescription:
      "Muse's voice mode lets you talk instead of type \u2014 with live video chat and custom voices rolling out. How it works and how to use it well.",
    shortAnswer:
      "Muse supports voice conversations with real-time speech, plus newly added live video chat with customizable voices. Voice is becoming the primary way to direct your agent.",
    sections: [
      {
        heading: "What voice mode does today",
        paragraphs: [
          "The simplest way to use Muse may be to stop typing. Voice support, dictation, and voice notes are built into the app: hold to talk, and Muse transcribes, understands, and replies out loud while it keeps working on your task in the background. It's the difference between operating software and briefing a colleague.",
          "Voice shines for the fuzzy stuff \u2014 brainstorming, thinking through a decision, describing a complicated errand while your hands are busy. Save the keyboard for precision work like reviewing a contract or editing a draft line by line.",
        ],
      },
      {
        heading: "Live video chat and custom voices",
        paragraphs: [
          "Voice just leveled up. Around September 23, Meta added live video chat and real-time voice conversations with customizable voice options to Muse, demonstrated publicly by Alexandr Wang on September 24. Instead of a voice in a chat window, you talk to an animated presence \u2014 the [Realtime Avatar](/guides/muse-ai-meta-connect-2026) system.",
          "The technical trick is that speech and video generate from a shared stream, so the avatar's voice, lip movement, and expressions stay synchronized. Strikingly, the system can animate a reference image during a live conversation \u2014 a photographic portrait, an illustration, an animal, or even an everyday object. Pair that with [Jolly](/guides/muse-ai-jolly-avatar), and your agent is well on its way to having a face you chose.",
        ],
      },
      {
        heading: "The tech underneath: Muse Voice Transcribe",
        paragraphs: [
          "Meta's voice push rests on Muse Voice Transcribe, a real-time audio perception model its Superintelligence Labs launched on September 1, 2026. It evaluates streaming audio every 80 milliseconds and handles speech-to-text, speaker identification, and endpoint detection in a single model \u2014 following conversations across more than 20 speakers and 25 validated languages, including mid-sentence language switching.",
          "This is what powers dictation in the Muse apps today. The model was built for exactly the messy reality of talking to an agent: interruptions, accents, overlapping speech, hour-long sessions. When Muse seems to \u201cjust get\u201d what you said, this is usually why.",
        ],
      },
      {
        heading: "Custom voices: coming, not here yet",
        paragraphs: [
          "The most requested voice feature \u2014 generating your own custom voice for Muse, saved to a personal library \u2014 is reportedly in internal testing only, according to TestingCatalog's September 2026 reporting. It is disabled for public users and Meta has announced no release date.",
          "Treat this as a roadmap item, not a feature. The [early access program](/guides/muse-ai-early-access-program) is the official channel for raising your hand for upcoming capabilities like this one.",
        ],
      },
      {
        heading: "Getting the most out of voice",
        list: {
          ordered: false,
          items: [
            "Speak in outcomes, not menus: \u201cbook me a table for two Friday at 7 near downtown\u201d beats \u201copen OpenTable.\u201d",
            "Think out loud. Voice is ideal for rambling first drafts of a task \u2014 Muse is good at extracting the actual request.",
            "Confirm before consequences. If a voice request could spend money or send messages, ask Muse to read back the plan first.",
            "Use it hands-free moments: cooking, driving (parked or via car audio), walking \u2014 anywhere typing is awkward.",
            "Switch to text for anything you need quoted precisely: addresses, numbers, names with unusual spellings.",
          ],
        },
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta adds live video chat to Muse, giving its AI agent a face and voice \u2014 Runtime Wire, September 2026](https://runtimewire.com/article/meta-muse-live-video-chat-voice)",
            "[Meta Muse Custom Voices Leak: 80ms Model \u2014 Tech Insider, September 2026](https://tech-insider.org/meta-muse-custom-voices-leak-2026/)",
            "[Muse Voice Transcribe: Meta's Real-Time Speech Model \u2014 Dataconomy, September 2026](https://dataconomy.com/2026/09/02/meta-muse-voice-transcribe-real-time-audio-model-20-speakers/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-charm",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-charm.jpg",
    imageAlt: "Watercolor illustration of the Muse Charm keychain gadget with a tiny screen and fingerprint sensor",
    title: "Muse Charm: Meta's AI Keychain Gadget Explained",
    deck: "A Tamagotchi-style keychain with a screen, fingerprint sensor, and Jolly inside. What the Muse Charm is, when it ships, and what it costs.",
    category: "News",
    keywords: "muse charm, meta ai keychain, muse wearable, muse charm price",
    metaTitle: "Muse Charm: Meta's AI Keychain Gadget (2026)",
    metaDescription:
      "The Muse Charm is a Tamagotchi-like keychain for talking to Muse on the go. Release date, price, features \u2014 everything announced so far.",
    shortAnswer:
      "The Muse Charm is a small keychain gadget with a screen and fingerprint sensor for voice chats with Muse without your phone. It ships in December 2026; pricing is undisclosed.",
    sections: [
      {
        heading: "What the Muse Charm is",
        paragraphs: [
          "At Meta Connect on September 23, 2026, Mark Zuckerberg held up a keychain with a face on it: the Muse Charm, a Tamagotchi-style handheld device for interacting with Muse on the go. It has a little screen, a fingerprint sensor, and a Pixar-esque character \u2014 [Jolly](/guides/muse-ai-jolly-avatar), Muse's default avatar \u2014 living inside it.",
          "Press the button, have a chat, and Jolly gets to work: booking, emailing, buying the thing you mentioned in passing. The pitch is a companion you carry, not an app you open.",
        ],
      },
      {
        heading: "How you use it",
        paragraphs: [
          "The interaction is deliberately minimal: tap the fingerprint sensor and speak, \u201cwithout having to unlock a phone or open an app,\u201d as Zuckerberg put it. No screen-tapping through menus, no pulling out your phone on a run or in the kitchen \u2014 just a question, an answer, and the agent handling the rest in the background.",
          "It's the purest expression of Meta's bet that voice is the primary interface for agents. The phone stays in your pocket; the conversation doesn't.",
        ],
      },
      {
        heading: "Release date and price",
        paragraphs: [
          "The Charm ships in December 2026 \u2014 timing Meta surely chose with the holiday gift season in mind. Pricing, however, remains undisclosed; Meta hasn't said what the little keychain will cost.",
          "That leaves the value question open. If it's priced like an accessory, it's an impulse buy for Muse enthusiasts. If it's priced like hardware, it'll need to prove it's more than a novelty. Watch for pricing news closer to launch \u2014 we'll update this guide when it's announced.",
        ],
      },
      {
        heading: "Why a keychain at all?",
        paragraphs: [
          "The Charm only makes sense inside Meta's bigger hardware story. At the same Connect event, Meta unveiled $349 camera-free Ray-Ban Meta Audio glasses shipping October 13, premium VR glasses arriving in spring 2027, and \u2014 the thread connecting them \u2014 Muse coming to its smart glasses, where you wake the agent by saying its name.",
          "The strategy is ambient AI: the assistant follows you from phone to glasses to keychain, always a spoken sentence away. The Charm is the cheapest, most giftable entry point into that vision \u2014 a Tamagotchi for the agent age.",
        ],
      },
      {
        heading: "Should you wait for one?",
        paragraphs: [
          "If you love the idea of talking to Muse without touching your phone, the Charm is worth watching \u2014 but remember it's a first-generation gadget for a three-week-old product. Early hardware plus early software is a double gamble.",
          "The alternative is already here: [voice mode](/guides/muse-ai-voice-mode) in the Muse app does most of what the Charm promises, minus the keychain. If you're on the fence, try living with voice-first Muse for a month; by December you'll know whether you want it dangling from your bag. Want future hardware first? The [early access program](/guides/muse-ai-early-access-program) is the official way to raise your hand.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta Connect 2026: Meta unveils new AI glasses, VR glasses and Muse Charm \u2014 Financial Express, September 2026](https://www.financialexpress.com/life/technology-meta-connect-2026-meta-unveils-new-ai-glasses-vr-glasses-and-muse-charm-4346067/)",
            "[Meta Connect 2026: Muse AI, VR Glasses & Audio Frames \u2014 Tech Mansion, September 2026](https://techmansion.tech/meta-connect-2026-muse-ai-vr-glasses-audio-frames/)",
            "[What Is Meta Muse? Meta\u2019s Consumer AI Agent and What It Means for Businesses \u2014 ChatMaxima, September 2026](https://chatmaxima.com/blog/meta-muse-ai-agent-businesses-whatsapp-messenger/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-privacy",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-privacy.jpg",
    imageAlt: "Watercolor illustration of a shield with a padlock surrounded by sealed envelopes",
    title: "Is Muse AI Safe? The Privacy Questions, Answered Honestly",
    deck: "Human concierges, message-reading claims, and a zero-day. A clear-eyed look at every Muse privacy controversy \u2014 and Meta's answers.",
    category: "Safety",
    keywords: "is muse ai safe, muse ai privacy, muse reads messages",
    metaTitle: "Is Muse AI Safe? Privacy Concerns Explained (2026)",
    metaDescription:
      "Human concierges, message access claims, security flaws \u2014 we walk through every Muse privacy controversy and what Meta says in response.",
    shortAnswer:
      "Muse runs in an isolated Secure VM with approval gates, but real controversies \u2014 a human-concierge phone test, disputed message access, a Mac zero-day \u2014 show an agent with deep permissions deserves caution.",
    sections: [
      {
        heading: "Meta's privacy design",
        paragraphs: [
          "Start with what's supposed to protect you. Muse runs in what Meta calls a Secure VM \u2014 the agent's work happens in an isolated environment rather than loose on your device \u2014 and anything sensitive (payments, messages, account access) is gated behind explicit approval prompts you have to confirm.",
          "Connectors to outside apps like email or calendars are opt-in, and on desktop they can require system-level permissions like Full Disk Access. The architecture is genuinely more careful than a browser extension with the same powers. The controversies below are about what happens at the edges of that design.",
        ],
      },
      {
        heading: "The human-concierge phone test",
        paragraphs: [
          "The most damaging story broke around September 22, 2026, via Reuters: for at least some Muse phone calls \u2014 the agent can call US businesses on your behalf \u2014 Meta had quietly routed the conversations to human contractors instead of AI, without telling users. Employees internally raised privacy concerns about customers being recorded by people they didn't know were listening.",
          "A Meta vice president acknowledged the company had made a \u201cmiss\u201d and the feature was temporarily rolled back. Meta says the test was small and meant to improve the product \u2014 but the core complaint stands: a privacy-sensitive agent should never have humans secretly in the loop. If you use Muse's calling features, know this happened.",
        ],
      },
      {
        heading: "The message-reading claims",
        paragraphs: [
          "In late September, Inc. columnist Jason Aten reported that Muse had read more than 187,000 of his iMessage records \u2014 and argued he'd never given it permission. Meta's David Singleton responded that the Messages integration is strictly opt-in and requires macOS Full Disk Access, which Aten must have granted; Aten says he doesn't recall doing so. Elon Musk amplified the dispute on September 27\u201328, giving it a much larger audience.",
          "A related Marketplace report claimed a Muse web session accessed private messages there \u2014 Meta says the test was flawed because Muse was signed into a real account. Where this lands: connectors this deep will always be one misunderstood permission away from a scandal. Read every access prompt, and revoke anything you don't actively use.",
        ],
      },
      {
        heading: "The security flaws",
        paragraphs: [
          "Two technical incidents are on the record. Security researcher Patrick Wardle disclosed a Mac zero-day letting malware bypass the privacy prompt that protects files Muse can see \u2014 we covered it in detail in [Muse AI Security Flaw: The Wardle Zero-Day](/guides/muse-ai-security-flaw). Separately, The Information reported a bug-bounty researcher found a way to break into Muse's Secure VM itself; Meta fixed it and made safety warnings clearer.",
          "Neither flaw was exploited at scale as far as anyone has shown. But they confirm the stakes: an agent with your calendar, inbox, and payment cards is a high-value target, and its sandbox is exactly where attackers will poke.",
        ],
      },
      {
        heading: "Our honest take",
        paragraphs: [
          "Muse is neither a surveillance nightmare nor provably safe \u2014 it's a powerful, three-week-old product with deep permissions and a company still learning how to operate it. The privacy design is serious; the operational mistakes so far are real. Grant it the least access that still does the job, review connected apps monthly, keep approvals on for anything irreversible, and remember you must be 18+ to use it. Mac users: the [computer-use guide](/guides/muse-ai-mac-computer-use) explains exactly which permissions desktop control needs., and remember you must be 18+ to use it \u2014 it was never built for kids.",
          "The rule of thumb for any AI agent: it should know exactly what it needs, and nothing it doesn't. Hold Muse \u2014 and Meta \u2014 to that standard.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Meta testing a human concierge for its new personal AI agent Muse \u2014 Economic Times / Reuters, September 2026](https://hr.economictimes.indiatimes.com/news/industry/meta-testing-a-human-concierge-for-its-new-personal-ai-agent-muse/134442930)",
            "[Elon Musk amplifies privacy concerns over Meta's Muse \u2014 Benzinga via TradingView, September 2026](https://www.tradingview.com/news/benzinga:8fa19d276094b:0-elon-musk-amplifies-privacy-concerns-over-meta-s-muse-after-reports-emerge-ai-agent-accessed-private-messages/)",
            "[Meta's Muse accused of reading private iMessages without permission \u2014 Binance News via TradingView, September 2026](https://www.tradingview.com/news/binance_news:5e7ac3b9f094b:0-meta-s-muse-ai-assistant-accused-of-reading-private-imessages-without-permission/)",
            "[Meta Muse Safety Warning: AI Security Flaw \u2014 Shafaqna, September 2026](https://en.shafaqna.com/480095/meta-muse-safety-warning-ai-security-flaw/)",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-prompt-tips",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-prompt-tips.jpg",
    imageAlt: "Watercolor illustration of chat bubbles and sparkles rising from an open notebook with a pencil",
    title: "10 Muse Prompts That Get Better Results",
    deck: "Muse rewards clear outcomes, good context, and approval checkpoints. Ten prompt patterns that turn the agent from chatbot into coworker.",
    category: "Ideas",
    keywords: "muse ai prompts, muse ai tips, best muse prompts",
    metaTitle: "10 Muse Prompts That Get Better Results (2026)",
    metaDescription:
      "Better Muse results start with better prompts. 10 proven patterns \u2014 outcome-first requests, approval checkpoints, and voice tricks.",
    shortAnswer:
      "The best Muse prompts state the desired outcome first, give only relevant context, set approval checkpoints, and let the agent plan before acting.",
    sections: [
      {
        heading: "Why prompting matters more for agents",
        paragraphs: [
          "With a chatbot, a bad prompt gets you a bad paragraph. With an agent like Muse, a bad prompt gets you a bad afternoon \u2014 wrong flights booked, the wrong groceries ordered, hours of work in the wrong direction. Because Muse acts, the prompt is the instruction set, not just a question.",
          "The good news: agent prompting is a learnable skill, and it mostly comes down to saying what you want, what it needs to know, and where the guardrails are. These ten patterns cover nearly every situation you'll run into.",
        ],
      },
      {
        heading: "The 10 patterns",
        list: {
          ordered: true,
          items: [
            "Outcome first. Start with the end state: \u201cBook me a flight to Chicago next Friday morning, under $300, aisle seat.\u201d Muse plans backward from the goal far better than it assembles one from hints.",
            "The context sandwich. Give the three facts that actually matter \u2014 who it's for, the constraints, the deadline \u2014 and skip the rest. \u201cVegetarian dinner for 6, under $80, delivered by 7pm\u201d beats a paragraph of backstory.",
            "Plan before acting. For anything multi-step, ask Muse to show you the plan first: \u201cOutline how you'd research this before you start.\u201d You catch misunderstandings when they're free.",
            "Approval checkpoints. Tell Muse where to pause: \u201cFind three options, then stop and let me pick before booking.\u201d This is the single highest-leverage habit for agent work.",
            "Iterate on drafts. Muse's first pass is a starting point. \u201cMake it shorter,\u201d \u201cadd prices,\u201d \u201csort by rating\u201d \u2014 agents handle revision rounds gracefully.",
            "Voice for brainstorming, text for precision. Ramble out loud when you're exploring; switch to typing for addresses, numbers, and anything that must be quoted exactly.",
            "Connect first, ask second. A prompt that needs your calendar, inbox, or a store works ten times better after you've set up the [right connections](/guides/muse-ai-mac-computer-use). Check integrations before blaming the prompt.",
            "Schedule the boring stuff. Anything you check weekly \u2014 flight prices, restocks, bill reminders \u2014 should be a standing instruction, not a repeated conversation.",
            "Teach it your preferences once. Favorite airline, dietary restrictions, budget ranges, how you like summaries formatted \u2014 put them in your profile so every future prompt inherits them.",
            "Review, don't trust. Skim what Muse did before it finalizes anything \u2014 especially totals, dates, and recipients. Five seconds of review is the whole safety model.",
          ],
        },
      },
      {
        heading: "Three mistakes that waste your time",
        paragraphs: [
          "The most common failure is vagueness: \u201cplan my trip\u201d will get you a generic itinerary for a generic person. Add dates, budget, and who's going and the same prompt becomes useful. Second is skipping constraints \u2014 Muse can't respect a budget or dietary need you never mentioned. Third is approving without reading: the approval ping exists because agents are confident even when wrong.",
          "Notice the theme: every mistake is a missing sentence in the prompt. Agents don't read minds; they read instructions. Write the sentence.",
        ],
      },
      {
        heading: "Keep learning",
        paragraphs: [
          "Prompting well compounds: every preference you teach Muse and every standing instruction you set makes the next hundred prompts better. If you're just getting started, our [tutorial](/guides/muse-ai-tutorial) walks through your first real tasks, and the [voice mode guide](/guides/muse-ai-voice-mode) shows when to stop typing entirely.",
          "And remember the golden rule of the agent era: the human is the quality control. Muse does the work; you own the judgment.",
        ],
      },
      {
        heading: "Sources & further reading",
        list: {
          ordered: false,
          items: [
            "[Muse AI Tutorial: Your First Tasks, Step by Step](/guides/muse-ai-tutorial)",
            "[Muse Voice Mode: Talking to Your Agent](/guides/muse-ai-voice-mode)",
            "[What Is Muse AI? The Beginner's Guide](/guides/what-is-muse-ai)",
          ],
        },
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Prompt library](/prompts) — 40 copy-paste prompts across 8 categories.",
            "[Agent templates](/templates) — 10 specialist setups with copy-ready instructions.",
            "[Prompt Generator](/tools/prompt-generator) — compose a polished prompt from guided questions.",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-50-things",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-50-things.jpg",
    imageAlt: "Minimal navy title card reading 50 Things Muse AI Can Do",
    title: "50 Things Muse AI Can Do: The Big List",
    deck: "From morning briefings to full trip plans — 50 real jobs Muse can take off your plate, grouped so you can steal them.",
    category: "Ideas",
    keywords: "things muse ai can do, muse ai capabilities, what can muse ai do, muse ai ideas list",
    metaTitle: "50 Things Muse AI Can Do: The Big List (2026)",
    metaDescription:
      "50 real things Muse AI can do — everyday tasks, work, learning, money, shopping, and automation ideas to steal for your own agent.",
    shortAnswer:
      "Muse AI can research and plan trips, draft documents and emails, build interactive pages and trackers, shop and compare prices, set reminders and routines, summarize files, brainstorm ideas, and handle recurring tasks with your approval. Here are 50 concrete jobs to try.",
    sections: [
      {
        heading: "How to read this list",
        paragraphs: [
          "Muse is an agent, not a chatbot: it doesn't just answer, it does. Every item below is a job you can hand it in a single message — describe the outcome, add the relevant context, and let it work. The list is grouped so you can scan for your life, not someone else's.",
          "New to agents? Start with [what Muse actually is](/guides/what-is-muse-ai), browse [how people really use it](/guides/muse-ai-use-cases), then run your [first tasks step by step](/guides/muse-ai-tutorial). Three items from this list, tried today, will teach you more than any guide.",
        ],
      },
      {
        heading: "Everyday life (1–12)",
        list: {
          ordered: true,
          items: [
            "Give you a morning briefing: calendar, weather, and the day's priorities in one message.",
            "Plan a full trip — flights to compare, hotels, daily itinerary, and a packing list.",
            "Summarize a long article, PDF, or document into five bullet points.",
            "Draft a difficult email: the complaint, the apology, the follow-up you keep avoiding.",
            "Write a grocery list from a week of meal ideas, grouped by store section.",
            "Compare two products side by side with a verdict for your actual needs.",
            "Explain a confusing topic — taxes, insurance, a medical term — in plain English.",
            "Brainstorm birthday, anniversary, or holiday gift ideas within a budget.",
            "Turn a rambling voice note into a clean to-do list.",
            "Plan a dinner party: menu, shopping list, and a cooking timeline.",
            "Draft a polite-but-firm message to a landlord, contractor, or customer service.",
            "Create a packing checklist tailored to your destination, season, and trip length.",
          ],
        },
      },
      {
        heading: "Work & productivity (13–25)",
        list: {
          ordered: true,
          items: [
            "Turn messy meeting notes into action items with owners and deadlines.",
            "Draft a project plan with phases, milestones, and risks before you start.",
            "Write a job description, interview questions, and a scorecard for a hire.",
            "Summarize a long thread or document for your boss in three sentences.",
            "Build a competitive comparison table from your own research notes.",
            "Draft a proposal, quote, or statement of work for a client.",
            "Create a content calendar: a month of post ideas from one briefing.",
            "Write standard operating procedures from how you actually do the task.",
            "Prepare for a sales call with an account brief and likely objections.",
            "Draft meeting agendas that force decisions instead of discussions.",
            "Turn a spreadsheet of raw numbers into a plain-English summary.",
            "Write follow-up emails after meetings, interviews, or networking events.",
            "Build a personal dashboard page tracking your goals, habits, or KPIs.",
          ],
        },
      },
      {
        heading: "Learning & creating (26–37)",
        list: {
          ordered: true,
          items: [
            "Explain any concept at your level — fifth-grader, undergrad, or expert.",
            "Build a study plan for an exam, certification, or new skill with daily tasks.",
            "Generate practice quizzes and flashcards from your study material.",
            "Learn a language through conversation practice with gentle corrections.",
            "Outline an essay, report, or presentation before you write a word.",
            "Give honest feedback on your writing: what's unclear, what's missing.",
            "Brainstorm story, video, or business ideas with a devil's-advocate round.",
            "Create a reading list on any topic, ordered from beginner to advanced.",
            "Summarize a book chapter-by-chapter so you can decide if it's worth reading.",
            "Design a workout plan around your schedule, equipment, and goals.",
            "Write lyrics, poems, or toasts when you need words for an occasion.",
            "Make a simple browser game, quiz, or interactive page as a shareable artifact.",
          ],
        },
      },
      {
        heading: "Money, shopping & home (38–46)",
        list: {
          ordered: true,
          items: [
            "Compare prices and options before a big purchase, with the trade-offs spelled out.",
            "Build a monthly budget with categories, targets, and a spending review.",
            "Audit your subscriptions and flag what to cancel.",
            "Draft a negotiation script for a salary discussion, car purchase, or bill.",
            "Create a home maintenance schedule: what to check, and when.",
            "Plan a move: timeline, vendor comparisons, and an address-change checklist.",
            "Organize a cleaning schedule split fairly across the household.",
            "Research the real cost of a project — renovation, trip, or event — before committing.",
            "Write a polite payment reminder for a client who owes you money.",
          ],
        },
      },
      {
        heading: "Plans, reminders & automation (47–50)",
        list: {
          ordered: true,
          items: [
            "Set a standing weekly check-in: bills due, calendar conflicts, priorities.",
            "Track prices or restocks and ping you when something changes.",
            "Remind you of recurring tasks — with the context of why they matter.",
            "Run a Friday review: what got done, what's stuck, what's next week.",
          ],
        },
        paragraphs: [
          "The pattern across all fifty: outcome first, relevant context second, approval checkpoint third. Pick three items that match your actual week and try them today — then keep the ones that stick as standing instructions instead of repeated conversations. For the reusable patterns behind them, grab the [cheat sheet](/guides/muse-ai-cheat-sheet), and when you're ready to plug in your real tools, read the [connectors guide](/guides/muse-ai-connectors).",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-connectors",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-connectors.jpg",
    imageAlt: "Minimal navy title card reading Muse AI Connectors Guide",
    title: "Muse AI Connectors: The Beginner's Guide",
    deck: "Connect your calendar, inbox, and favorite apps — and know exactly what you're granting. A calm, complete walkthrough.",
    category: "Workflow",
    keywords: "muse ai connectors, muse connectors, connect apps to muse ai, muse ai integrations",
    metaTitle: "Muse AI Connectors: The Beginner's Guide (2026)",
    metaDescription:
      "What Muse AI connectors are, which connections to set up first, how permissions and approval checkpoints work, and how to stay safe.",
    shortAnswer:
      "Muse AI connectors link your agent to outside services — your calendar, email, or store accounts — so it can act on real information instead of guessing. Connect only what a task needs, keep approval checkpoints on, and review permissions regularly.",
    sections: [
      {
        heading: "What a connector actually is",
        paragraphs: [
          "A connector is a permissioned link between Muse and one of your other services. Without connectors, Muse works from what you tell it; with them, it can check your real calendar before scheduling, read the actual email thread before drafting a reply, or look at live store listings before comparing prices.",
          "Think of it this way: the chat is Muse's mouth, and connectors are its hands. You decide which hands it gets, one connection at a time — nothing is linked by default, and every link can be removed.",
          "Availability of specific connectors depends on your account and region, and the roster grows over time — Meta has said more connectors and partners are on the way. The principles below hold no matter which services appear in your list.",
        ],
      },
      {
        heading: "The connections worth setting up first",
        paragraphs: [
          "Don't connect everything on day one. Start with the two or three services where Muse having real data changes the quality of its work:",
        ],
        list: {
          ordered: false,
          items: [
            "Calendar — the highest-leverage connection. Scheduling, briefings, and conflict checks all get dramatically better when Muse sees your real calendar.",
            "Email — worth it once you trust the agent: triage summaries, draft replies, and follow-up detection. Keep approval checkpoints on for anything sent.",
            "Shopping and store accounts — price comparisons and purchase help stop being hypothetical when Muse can see real listings.",
            "Files and cloud storage — summarizing your own documents and drafting inside your files beats copy-pasting every time.",
            "Music and entertainment — lower stakes, great for learning how connectors feel: playlists, recommendations, and watchlists.",
          ],
        },
      },
      {
        heading: "How connecting works, step by step",
        list: {
          ordered: true,
          items: [
            "Open the integrations or connections area in your Muse app or settings.",
            "Pick the service you want to link and read what access it requests — scopes matter more than the brand name.",
            "Sign in to that service through its official login page (never type credentials into a chat message).",
            "Confirm exactly what Muse may do: read-only is the safe default for anything you don't fully trust yet.",
            "Test with something small and reversible — 'summarize my inbox from today' — before handing it real responsibility.",
            "Tell Muse your preference once ('always ask before sending email') so it becomes a standing rule.",
          ],
        },
      },
      {
        heading: "Permissions, approvals & staying safe",
        paragraphs: [
          "Connectors are powerful precisely because they touch your real accounts, so treat them with the same seriousness. The single most important habit: keep human approval on for anything hard to undo — sending messages, making purchases, deleting files, or changing settings. Muse's approval cards exist for exactly this; don't train yourself to tap 'approve' without reading.",
          "Prefer read access where you can, grant write access only to services where Muse genuinely needs to act, and audit your connections every few months the way you'd audit app permissions on your phone. If a task is finished — the trip is booked, the project is done — disconnect what you no longer need. Our [privacy guide](/guides/muse-ai-privacy) covers the data side in more depth.",
          "Never share passwords, one-time codes, or payment credentials inside a chat, even if asked. Legitimate connections happen through official sign-in screens, not conversation.",
        ],
      },
      {
        heading: "Connectors vs. channels vs. computer use",
        paragraphs: [
          "Muse reaches the outside world three ways, and it helps to keep them straight. Connectors are persistent, permissioned links to your accounts — set up once, used for months. Channels are where you talk to Muse: the app, WhatsApp, or voice mode. Computer use is the heavy machinery: Muse operating a real browser or desktop to complete bookings, forms, and purchases step by step, usually with you watching the approval checkpoints.",
          "A good rule of thumb: connect for information (calendar, inbox, files), use channels for conversation, and reserve computer use for transactions. If you're curious about the heaviest of the three, the [Mac computer-use guide](/guides/muse-ai-mac-computer-use) explains what granting desktop access really means.",
        ],
      },
      {
        heading: "Stuck? Troubleshoot, then keep exploring",
        paragraphs: [
          "Most connector problems are boring: an expired login, a revoked permission, or a service that changed its own API. Reconnect from the integrations screen, check the service's own 'connected apps' page, and try the smallest possible test before assuming something is broken. If a connector you expected isn't listed at all, it may simply not have reached your account or region yet.",
          "Once your first two connections are working, the real unlock is combining them: 'find a free hour this week, draft the invite, and stop for my approval before sending.' That sentence uses a connector, a channel, and an approval card together — which is the whole agent idea in one line. For the patterns that make it sing, see [how to use Muse AI](/guides/how-to-use-muse-ai) and the [prompt cheat sheet](/guides/muse-ai-cheat-sheet).",
        ],
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[Connector directory](/connectors) — every verified connector with setup steps and example prompts.",
          ],
        },
      },
    ],
  },
  {
    slug: "muse-ai-cheat-sheet",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-cheat-sheet.jpg",
    imageAlt: "Minimal navy title card reading Muse AI Cheat Sheet",
    title: "Muse AI Cheat Sheet: Prompts, Features & Settings",
    deck: "One page to bookmark: the five prompt formulas, every major feature, and the settings worth changing today.",
    category: "Tutorial",
    keywords: "muse ai cheat sheet, muse ai shortcuts, muse ai features list, muse ai settings guide",
    metaTitle: "Muse AI Cheat Sheet: Prompts, Features & Settings (2026)",
    metaDescription:
      "The one-page Muse AI cheat sheet: 5 prompt formulas, every major feature at a glance, settings to change, and what Muse can't do.",
    shortAnswer:
      "The Muse AI cheat sheet in one line: state the outcome first, give only relevant context, set approval checkpoints, connect your apps, and review before anything becomes final.",
    sections: [
      {
        heading: "The 5 prompt formulas",
        list: {
          ordered: true,
          items: [
            "Outcome first: “Book me a flight to Chicago next Friday morning, under $300, aisle seat.” Muse plans backward from a clear goal.",
            "Context sandwich: who it's for + constraints + deadline. “Vegetarian dinner for 6, under $80, delivered by 7pm.”",
            "Plan before acting: “Outline how you'd research this before you start.” Catches misunderstandings when they're free.",
            "Approval checkpoint: “Find three options, then stop and let me pick before booking.” The highest-leverage habit in agent work.",
            "Iterate, don't restart: “Make it shorter,” “add prices,” “sort by rating.” Agents handle revision rounds gracefully.",
          ],
        },
      },
      {
        heading: "Features at a glance",
        paragraphs: [
          "Every major Muse feature, what it does, and when to reach for it:",
        ],
      },
      {
        heading: "Settings worth changing today",
        list: {
          ordered: false,
          items: [
            "Approvals: keep human review ON for sending messages, purchases, and file changes — the whole safety model is five seconds of your attention.",
            "Notifications: allow approval pings so Muse can reach you when it's waiting on a decision; mute everything else.",
            "Profile preferences: favorite airline, dietary needs, budget ranges, how you like summaries formatted — teach once, benefit forever.",
            "Memory controls: review what Muse remembers about you; tighten or loosen to taste.",
            "Voice: enable voice mode for brainstorming and hands-free moments; keep text for anything that must be quoted exactly.",
          ],
        },
      },
      {
        heading: "What Muse can't do",
        paragraphs: [
          "Honest limits, so you don't learn them the embarrassing way:",
        ],
        list: {
          ordered: false,
          items: [
            "Read your mind — every missing constraint (budget, date, audience) is a guess it has to make.",
            "Guarantee facts — verify prices, dates, and recipients before acting; polished output isn't proof.",
            "Reach services you never connected — no connector, no real data, just general knowledge.",
            "Undo the irreversible — sent emails and completed purchases are why approval checkpoints exist.",
            "Work outside its availability — features, limits, and access vary by region and account.",
          ],
        },
      },
      {
        heading: "Quick answers",
        paragraphs: [
          "Do I need to learn prompt engineering? No — the five formulas above cover nearly everything. Agent prompting is mostly saying what you want, what it needs to know, and where to pause.",
          "What's the one habit that matters most? Approval checkpoints. Tell Muse where to stop and wait for you, especially before money moves or messages send.",
          "When should I use voice vs. typing? Voice for exploring and brainstorming; typing for addresses, numbers, and anything quoted exactly. Details: [voice mode guide](/guides/muse-ai-voice-mode).",
          "Where do I go deeper? The [prompt patterns guide](/guides/muse-ai-prompt-tips) expands these formulas into ten full patterns, and the [tutorial](/guides/muse-ai-tutorial) walks through your first real tasks.",
        ],
      },
      {
        heading: "Keep this bookmarked",
        paragraphs: [
          "Print it, screenshot it, or just remember the one-liner: outcome first, context second, checkpoint third. When you're ready for the full vocabulary behind these features, the [glossary](/guides/muse-ai-glossary) defines every term plainly — and the [50-things list](/guides/muse-ai-50-things) gives you fifty jobs to try this week.",
        ],
      },
    ],
    table: {
      headers: ["Feature", "What it does", "Reach for it when"],
      rows: [
        ["Artifacts", "Finished documents, pages, and dashboards Muse builds for you", "You want something to keep, share, or print"],
        ["Voice mode", "Talk instead of typing, hands-free", "Brainstorming, driving, cooking, walking"],
        ["Memory", "Remembers your preferences across conversations", "You repeat the same context every time"],
        ["Goals", "Long-running projects Muse advances in the background", "Multi-week outcomes with checkpoints"],
        ["Connectors", "Links to your calendar, inbox, and apps", "Muse needs your real data, not guesses"],
        ["Computer use", "Operates a browser or desktop to finish bookings and forms", "Multi-step transactions with your approval"],
        ["Approval cards", "Pause points where you review before Muse continues", "Anything hard to undo"],
        ["Side chats", "Separate conversations with their own context", "A new topic that shouldn't pollute the main thread"],
        ["Jolly", "Your customizable Muse avatar", "You want a face on the agent"],
      ],
    },
  },
  {
    slug: "muse-ai-glossary",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-glossary.jpg",
    imageAlt: "Minimal navy title card reading Muse AI Glossary",
    title: "Muse AI Glossary: Every Term, Plainly Explained",
    deck: "Agent, artifact, connector, approval card, Jolly, tokens — the whole Muse vocabulary in plain English.",
    category: "Basics",
    keywords: "muse ai glossary, muse ai terms explained, muse ai definitions, what is artifact muse ai",
    metaTitle: "Muse AI Glossary: Every Term, Plainly Explained (2026)",
    metaDescription:
      "Every Muse AI term explained in plain English — agent, artifact, connector, approval card, memory, Jolly, tokens, and more.",
    shortAnswer:
      "Muse AI's core vocabulary: an agent acts on your behalf, artifacts are the finished documents and pages it makes, connectors link your apps, approval cards are your review checkpoints, and Jolly is your customizable avatar.",
    sections: [
      {
        heading: "Agent basics",
        list: {
          ordered: false,
          items: [
            "AI agent — software that carries a task from request to finished output, not just an answer. Muse is one: you describe an outcome, it plans and acts.",
            "Artifact — a finished piece Muse produces: a document, web page, tracker, or dashboard you can keep, share, or revisit.",
            "Approval card — a structured pause where Muse shows you what it's about to do and waits for your go-ahead. Your checkpoint before anything consequential.",
            "Memory — what Muse remembers about you across conversations: preferences, facts, and standing instructions. You can review and edit it.",
            "Goals — long-running projects Muse advances in the background, checking in at milestones instead of needing constant prompting.",
            "Side chat — a separate conversation with its own context, so a new topic doesn't pollute your main thread.",
            "Proactive message — Muse reaching out on its own about something meaningfully new. You can dial these up, down, or off.",
            "Reasoning — the agent's internal plan for your request. You see the result; the plan is how it got there.",
          ],
        },
      },
      {
        heading: "Access & account terms",
        list: {
          ordered: false,
          items: [
            "Invite code — a code from an existing user or Meta that grants access during limited rollouts.",
            "Referral code — a code you share so others can join; ours is on the community board if you need one.",
            "Redeem — entering a code to activate the access or credit attached to it.",
            "Early access — trying features before general release, usually with rougher edges.",
            "Availability — where and for whom Muse currently works. As of September 2026: the US and Canada.",
            "Waitlist — signing up to be notified when access reaches you.",
          ],
        },
        paragraphs: [
          "Access mechanics change as the product rolls out — the [invite code guide](/guides/muse-ai-invite-code) and [availability guide](/guides/muse-ai-availability) stay current on the details.",
        ],
      },
      {
        heading: "Ways to reach Muse",
        list: {
          ordered: false,
          items: [
            "App — the main home: iPhone and Android apps plus desktop. See the [app setup guide](/guides/muse-ai-app-guide).",
            "WhatsApp — Muse inside your messaging app, best for quick thinking and deciding. See the [WhatsApp guide](/guides/muse-ai-whatsapp).",
            "Voice mode — talking instead of typing; fastest for brainstorming and hands-free moments.",
            "Computer use — Muse operating a real browser or Mac desktop to finish multi-step bookings and forms, with your approval at checkpoints.",
            "Connectors — permissioned links to your calendar, inbox, and other services so Muse works from real data.",
            "Channels — the general word for wherever a conversation happens: app, messaging, or voice.",
          ],
        },
      },
      {
        heading: "Cost & limits",
        list: {
          ordered: false,
          items: [
            "Tokens — the units of text (and work) AI models process; heavy usage is measured in them.",
            "Usage limits — caps on how much you can do in a period; they vary by plan and account.",
            "Free tier — what you can do without paying. The specifics change, so check the [cost guide](/guides/is-muse-ai-free) for the current picture.",
          ],
        },
      },
      {
        heading: "Still confused? Start here",
        paragraphs: [
          "Read the [beginner's guide](/guides/what-is-muse-ai) for the full picture, keep the [cheat sheet](/guides/muse-ai-cheat-sheet) bookmarked for daily use, and try the [50-things list](/guides/muse-ai-50-things) when you want ideas. Vocabulary learned fastest is vocabulary used.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-app-guide",
    modifiedTime: "2026-09-28",
    image: "/images/guides/muse-ai-app-guide.jpg",
    imageAlt: "Minimal navy title card reading Muse AI App iPhone and Android Guide",
    title: "Muse AI App on iPhone & Android: The Setup Guide",
    deck: "Get the official app, set it up right, and learn the mobile-only tricks — voice, sharing, and the notifications that matter.",
    category: "Tutorial",
    keywords: "muse ai app, muse ai iphone, muse ai android, muse ai mobile app setup",
    metaTitle: "Muse AI App on iPhone & Android: Setup Guide (2026)",
    metaDescription:
      "Set up the Muse AI app on iPhone and Android: the official download, first-run setup, notifications, voice, sharing, and mobile tips.",
    shortAnswer:
      "Get the Muse AI app only from the official app listing for your region, sign in with your account, enable notifications for approval checkpoints, and try voice mode for hands-free tasks.",
    sections: [
      {
        heading: "Get the real app first",
        paragraphs: [
          "Muse hit #1 on the US App Store and Google Play within days of launch — and wherever there's a chart-topping app, clones follow. Install only from the official listing linked by Meta or your invite; never from third-party download pages, forwarded APK files, or 'modded' versions promising unlimited access. The full clone-spotting checklist lives in our [download safety guide](/guides/muse-ai-download) — read it before you tap install anywhere unfamiliar.",
          "If the official app doesn't appear in your store, availability likely hasn't reached your account or region yet (currently the US and Canada). Waiting beats installing something you can't verify — check [where Muse is available](/guides/muse-ai-availability) for the current rollout.",
        ],
      },
      {
        heading: "First-run setup that pays off",
        list: {
          ordered: true,
          items: [
            "Sign in with the account your invite or access is tied to — mixing accounts is the #1 cause of 'where did my chats go.'",
            "Complete the profile basics: name, how you like to be addressed, and your timezone so reminders land correctly.",
            "Allow notifications, but plan to prune them next (see below) — approval pings are the ones that matter.",
            "Connect your calendar before anything else; it's the single connection that upgrades every scheduling task.",
            "Try one voice message and one photo upload so you know both inputs work before you need them.",
            "Tell Muse three preferences (format you like, budget style, topics to avoid) — this is the seed of its memory of you.",
          ],
        },
      },
      {
        heading: "Notifications: the one setting that matters",
        paragraphs: [
          "Muse's whole safety model rests on approval cards — pauses where it waits for your go-ahead before anything consequential. Those pauses arrive as notifications, which makes notification permission the most important toggle in the app. Allow approval pings; mute marketing, tips, and anything else that isn't a decision waiting on you.",
          "If Muse ever seems stuck 'waiting,' it's usually a silenced approval notification. Check notification settings before assuming the app is broken — this fixes more 'bugs' than any reinstall.",
        ],
      },
      {
        heading: "Mobile-only superpowers",
        paragraphs: [
          "The phone in your pocket gives Muse inputs a desktop can't. Voice mode turns dead time — commuting, cooking, walking — into productive conversation; ramble when exploring, then switch to typing for anything that must be quoted exactly. The system share sheet lets you send articles, photos, and files straight into a Muse chat instead of copy-pasting. And the camera turns Muse into a 'what is this / what should I do with this' tool for documents, labels, menus, and whiteboards.",
          "Keep one thread per project so context doesn't fragment across a dozen chats, and remember the WhatsApp option when you want Muse inside your messaging app instead — the [WhatsApp guide](/guides/muse-ai-whatsapp) covers that channel's habits and limits.",
        ],
      },
      {
        heading: "iPhone tips & Android tips",
        paragraphs: [
          "On iPhone: add Muse to your home screen for one-tap access, enable voice input in the keyboard for quick dictation anywhere, and use Focus modes to make sure approval pings break through when Muse is waiting on you. If you use Siri Shortcuts, a simple 'ask Muse' shortcut can route quick questions without opening the app.",
          "On Android: long-press the app icon for quick actions into a new chat or voice mode, pin the widget if one is offered for glanceable access, and check battery-optimization settings if notifications arrive late — aggressive power saving is the usual culprit behind delayed approval pings.",
        ],
      },
      {
        heading: "Troubleshooting & keep going",
        paragraphs: [
          "App won't sign in? Confirm you're using the account tied to your invite, and that your region currently has access. Chats missing? Same fix — you're likely in a different account. Features absent that a friend has? Rollouts are staggered; availability varies by account and region, not just by app version.",
          "Once setup is solid, the [tutorial](/guides/muse-ai-tutorial) walks through your first real tasks, [voice mode](/guides/muse-ai-voice-mode) is worth a dedicated read, and the [cheat sheet](/guides/muse-ai-cheat-sheet) compresses everything into one bookmarkable page.",
        ],
      },
      {
        heading: "Keep exploring",
        list: {
          ordered: false,
          items: [
            "[App guide hub](/apps) — the full tour, plus per-surface guides for iPhone, Android, web, WhatsApp, and Mac.",
          ],
        },
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function relatedGuides(slug: string, count = 3): Guide[] {
  const current = getGuide(slug);
  if (!current) return [];
  const sameCategory = GUIDES.filter(
    (g) => g.slug !== slug && g.category === current.category
  );
  const others = GUIDES.filter(
    (g) => g.slug !== slug && g.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function guideUrl(slug: string): string {
  return `/guides/${slug}`;
}

export function guideCanonical(slug: string): string {
  return `${SITE.baseUrl}/guides/${slug}`;
}
