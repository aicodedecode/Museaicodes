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
}

import { SITE } from "./site";

/**
 * Inline link syntax inside paragraph strings: [anchor text](https://url)
 * Rendered safely by <ArticleBody/> — no raw HTML allowed in content.
 */

export const GUIDES: Guide[] = [
  {
    slug: "what-is-muse-ai",
    image: "/images/guides/what-is-muse-ai.jpg",
    imageAlt: "Editorial illustration of Meta's Muse AI personal agent surrounded by task icons",
    title: "What Is Muse AI? A Clear Beginner's Guide",
    deck: "Understand what Muse is, what it can do, and where it fits among personal AI agents.",
    category: "Basics",
    keywords: "what is muse ai, muse ai explained, meta muse ai",
    metaTitle: "What Is Muse AI? A Clear Beginner's Guide (2026) | Muse Hub",
    metaDescription:
      "What is Muse AI? A plain-English beginner's guide to Meta's personal AI agent — what it does, what it's good at, and how access works.",
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
          "Access, channels, features, and usage limits can differ by region and account. If you are still waiting for access, the [invite code guide](/guides/muse-ai-invite-code) explains how invitations work.",
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
    slug: "muse-ai-invite-code",
    image: "/images/guides/muse-ai-invite-code.jpg",
    imageAlt: "Illustration of a vintage key unlocking a glowing doorway, symbolizing a Muse AI invite code",
    title: "Muse AI Invite Code: How Access Works",
    deck: "Use an invite safely and verify the terms attached to your account.",
    category: "Access",
    keywords: "muse ai invite code, muse invite code, muse ai access code",
    metaTitle: "Muse AI Invite Code: Get Access & Redeem Yours (2026) | Muse Hub",
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
          "Reward amounts are promotional and vary — the in-app screen is the source of truth for your account. Never enter invite codes on third-party pages that ask for your login; the code goes inside the official Muse product only.",
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
    image: "/images/guides/muse-ai-referral-code.jpg",
    imageAlt: "Illustration of two people exchanging a glowing gift, symbolizing a Muse AI referral code",
    title: "Muse AI Referral Code Guide",
    deck: "What referrers and new users should check before sharing a code.",
    category: "Access",
    keywords: "muse ai referral code, muse referral code, muse ai refer",
    metaTitle: "Muse AI Referral Code: How It Works & How to Redeem (2026) | Muse Hub",
    metaDescription:
      "Muse AI referral code explained: how referral codes work, where to redeem (Settings → General), eligibility, and working codes 3C77QC and N8DCUB with tap-to-copy.",
    shortAnswer:
      "A Muse AI referral code connects a new eligible account with an existing user's invitation. Reward amounts are promotional, not universal guarantees.",
    sections: [
      {
        heading: "Invite code vs referral code",
        paragraphs: [
          "People use the terms interchangeably, and in practice they usually mean the same thing: a code from an existing user that a new account enters. The important distinction is the in-app rule — the screen should explain who qualifies, the deadline, and whether both parties receive a benefit.",
          "If you're the one sharing, you're the referrer; if you're entering it, you're the new user. Both sides should read the same terms screen.",
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
    ],
  },
  {
    slug: "muse-ai-redeem-code",
    image: "/images/guides/muse-ai-redeem-code.jpg",
    imageAlt: "Illustration of a ticket being stamped with approval, symbolizing Muse AI code redemption",
    title: "Muse AI Redeem Code: Step-by-Step",
    deck: "Where to enter a code and how to confirm that it worked.",
    category: "Access",
    keywords: "muse ai redeem code, redeem muse code, muse code redemption",
    metaTitle: "Muse AI Redeem Code: Where to Enter It, Step by Step (2026) | Muse Hub",
    metaDescription:
      "Where to enter your Muse AI redeem code: step-by-step redemption in the app, what to check before and after, and how to confirm the reward applied.",
    shortAnswer:
      "Open the invite or redeem area in your Muse account, enter an eligible code, and check the resulting confirmation or balance. The exact menu can change as the product evolves.",
    sections: [
      {
        heading: "Before you redeem",
        paragraphs: [
          "Check the deadline shown in your account first. If an invitation is time-limited, waiting can make an otherwise valid code ineligible — some offers expect redemption within a short window after joining, so don't sit on a code.",
          "Make sure you're signed into the right account. Rewards attach to the account that redeems the code, and there's usually no way to move them later.",
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
    image: "/images/guides/how-to-get-muse-ai.jpg",
    imageAlt: "Illustration of stepping stones leading to a glowing doorway, symbolizing getting Muse AI access",
    title: "How to Get Muse AI",
    deck: "A simple access path without relying on unofficial downloads.",
    category: "Access",
    keywords: "how to get muse ai, get muse ai access, muse ai sign up",
    metaTitle: "How to Get Muse AI: Access Steps (2026) | Muse Hub",
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
          "The safest move is patience: wait for an official route or an invitation tied to a real account. In the meantime, the [tutorial](/guides/muse-ai-tutorial) will have you ready for your first fifteen minutes.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-tutorial",
    image: "/images/guides/muse-ai-tutorial.jpg",
    imageAlt: "Illustration of a compass over a map with a start flag, symbolizing a Muse AI beginner tutorial",
    title: "Muse AI Tutorial: Your First 15 Minutes",
    deck: "Turn a vague idea into one useful result with a repeatable workflow.",
    category: "Tutorial",
    keywords: "muse ai tutorial, muse ai beginner tutorial, how to prompt muse ai",
    metaTitle: "Muse AI Tutorial: Your First 15 Minutes (2026) | Muse Hub",
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
          "And expect to be asked: Muse pauses for approval before consequential actions like sending an email or making a purchase. Treat those approval cards as part of the workflow, not an interruption — they're how you stay in charge while the agent does the legwork.",
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
    image: "/images/guides/how-to-use-muse-ai.jpg",
    imageAlt: "Illustration of hands shaping clay into a document, symbolizing how to use Muse AI effectively",
    title: "How to Use Muse AI for Better Results",
    deck: "A practical method for clearer prompts and stronger review.",
    category: "Workflow",
    keywords: "how to use muse ai, muse ai tips, muse ai prompting guide",
    metaTitle: "How to Use Muse AI for Better Results (2026) | Muse Hub",
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
          "Proactive messages are part of the design: Muse may message you without being asked when it spots something useful. If that ever feels like noise, tell it to dial the proactivity down or turn it off — the default is tuned for most people, not everyone.",
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
    image: "/images/guides/muse-ai-vs-chatgpt-claude-meta-ai.jpg",
    imageAlt: "Illustration of four different pillars in a row, symbolizing Muse AI vs ChatGPT vs Claude vs Meta AI",
    title: "Muse AI vs ChatGPT vs Claude vs Meta AI",
    deck: "Compare positioning, workflow, access, and best-fit tasks — not just brand names.",
    category: "Comparison",
    keywords: "muse ai vs chatgpt, muse ai vs claude, muse ai vs meta ai, ai assistant comparison",
    metaTitle: "Muse AI vs ChatGPT vs Claude vs Meta AI: Honest Comparison (2026) | Muse Hub",
    metaDescription:
      "Muse AI vs ChatGPT vs Claude vs Meta AI: an honest side-by-side comparison of positioning, workflows, access, and which assistant fits which task.",
    shortAnswer:
      "Muse is positioned around personal-agent work and finished outputs; ChatGPT and Claude are broad assistants with mature work ecosystems; Meta AI emphasizes quick assistance inside Meta's consumer products. There is no universal winner.",
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
          "Choose by the task and interface you will actually use. Test the same real brief in each available app and compare factual accuracy, useful depth, control, speed, and how much editing the result needs.",
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
          "Muse product surfaces and supported messaging channels",
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
    image: "/images/guides/muse-ai-vs-claude.jpg",
    imageAlt: "Illustration of two abstract forms in dialogue, symbolizing Muse AI vs Claude comparison",
    title: "Muse AI vs Claude: Which Fits Your Workflow?",
    deck: "Choose based on the work you repeat, not a generic ranking.",
    category: "Comparison",
    keywords: "muse ai vs claude, claude vs muse, which ai assistant",
    metaTitle: "Muse AI vs Claude: Which Fits Your Workflow? (2026) | Muse Hub",
    metaDescription:
      "Muse AI vs Claude compared by workflow fit: a fair testing method, where each assistant shines, and how to decide without generic rankings.",
    shortAnswer:
      "Choose Muse when its personal-agent workflows and product surface fit the job; choose Claude when its document, reasoning, or coding workflow better matches your process. Test both with the same brief.",
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
    image: "/images/guides/muse-ai-download.jpg",
    imageAlt: "Illustration of a download arrow landing in a safe box with a shield, symbolizing safe Muse AI download",
    title: "Muse AI Download: Find the Official Access Route",
    deck: "Avoid clones and verify the source before installing anything.",
    category: "Safety",
    keywords: "muse ai download, download muse ai app, muse ai apk",
    metaTitle: "Muse AI Download: Find the Official Access Route (2026) | Muse Hub",
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
          "If the correct download or access option isn't visible, availability may simply not have reached your account yet. Waiting beats installing something you can't verify.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-billion-tokens",
    image: "/images/guides/muse-ai-billion-tokens.jpg",
    imageAlt: "Illustration of glowing tokens rising from an open hand, symbolizing Muse AI token rewards",
    title: "Muse AI 1 Billion Tokens: What the Offer Means",
    deck: "Separate the headline from the terms that actually apply.",
    category: "Tokens",
    keywords: "muse ai 1 billion tokens, muse ai tokens, muse token reward",
    metaTitle: "Muse AI 1 Billion Tokens: What the Offer Means (2026) | Muse Hub",
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
          "A big round number travels fast on social media and loses its context along the way: which accounts, which regions, which dates, and under what conditions. The in-app invite or redeem screen is the only source of truth for your account — confirm there before planning work around a specific balance.",
          "Terms vary, and offers change. Confirm the current terms in the app.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-review",
    image: "/images/guides/muse-ai-review.jpg",
    imageAlt: "Illustration of a magnifying glass examining shapes, symbolizing an honest Muse AI review",
    title: "Muse AI Review: Strengths, Limits, and Best Fit",
    deck: "A balanced review framework for deciding if Muse belongs in your workflow.",
    category: "Review",
    keywords: "muse ai review, muse ai pros cons, is muse ai good",
    metaTitle: "Muse AI Review: Strengths, Limits, Best Fit (2026) | Muse Hub",
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
          "Muse fits people who think in projects rather than questions: creators, researchers, planners, and builders who want a collaborator that carries work to completion. If you mostly need quick factual answers inside social apps, a lighter assistant may serve you better.",
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
    image: "/images/guides/muse-ai-use-cases.jpg",
    imageAlt: "Illustration of a grid of nine idea panels, symbolizing practical Muse AI use cases",
    title: "Muse AI Use Cases: 12 Practical Ideas",
    deck: "Useful projects for work, study, creativity, and everyday planning.",
    category: "Ideas",
    keywords: "muse ai use cases, what can muse ai do, muse ai examples",
    metaTitle: "Muse AI Use Cases: 12 Practical Ideas (2026) | Muse Hub",
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
            "Name it, give it an avatar, and treat it like a long-running collaboration: one main chat, side chats per project.",
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
    ],
  },
  {
    slug: "muse-ai-whatsapp",
    image: "/images/guides/muse-ai-whatsapp.jpg",
    imageAlt: "Illustration of flowing chat bubbles, symbolizing using Muse AI on WhatsApp",
    title: "Muse AI WhatsApp Guide",
    deck: "Make short messages produce useful, structured work.",
    category: "WhatsApp",
    keywords: "muse ai whatsapp, muse whatsapp, use muse on whatsapp",
    metaTitle: "Muse AI on WhatsApp: Setup & Chat Tips (2026) | Muse Hub",
    metaDescription:
      "How to use Muse AI on WhatsApp: setup, message habits that produce structured work, and the channel limits to know about.",
    shortAnswer:
      "If Muse is available in your WhatsApp experience, use it like a project conversation: send the goal, relevant context, desired format, and feedback in a focused thread.",
    sections: [
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
        heading: "Know the channel limits",
        paragraphs: [
          "Messaging is brilliant for speed and terrible for sprawling context. Long documents, precise formatting, and multi-file projects are easier on a bigger surface — use WhatsApp for thinking and deciding, then move heavy production where it belongs.",
          "Messaging availability and capabilities can vary. Use the official Muse contact or entry point connected to your account, and never share sensitive credentials in chat.",
        ],
      },
    ],
  },
  {
    slug: "is-muse-ai-free",
    image: "/images/guides/is-muse-ai-free.jpg",
    imageAlt: "Illustration of an open gift box with light streaming out, symbolizing free Muse AI access",
    title: "Is Muse AI Free? Costs, Limits, and What to Check",
    deck: "Understand free access, promotional tokens, and account-specific limits.",
    category: "Cost",
    keywords: "is muse ai free, muse ai pricing, muse ai cost",
    metaTitle: "Is Muse AI Free? Pricing, Limits & Costs (2026) | Muse Hub",
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
          "A referral headline is a promotion, not permanent pricing — and the cost of a plan is different from how many tokens a specific task consumes. Product offers can change, so verify the live terms in your account rather than relying on what you read online, including on this page.",
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
