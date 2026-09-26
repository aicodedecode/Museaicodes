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
  sections: GuideSection[];
  table?: GuideTable;
}

/**
 * Inline link syntax inside paragraph strings: [anchor text](https://url)
 * Rendered safely by <ArticleBody/> — no raw HTML allowed in content.
 */

export const GUIDES: Guide[] = [
  {
    slug: "what-is-muse-ai",
    title: "What Is Muse AI? A Clear Beginner's Guide",
    deck: "Understand what Muse is, what it can do, and where it fits among personal AI agents.",
    category: "Basics",
    keywords: "what is muse ai, muse ai explained, meta muse ai",
    metaTitle: "What Is Muse AI? A Clear Beginner's Guide (2026) | Muse Hub",
    metaDescription:
      "What is Muse AI? A plain-English beginner's guide to Meta's personal AI agent — what it does, what it's good at, and how access works.",
    shortAnswer:
      "Muse is Meta's personal AI agent: a conversational assistant designed to help move from a request to useful work such as research, plans, writing, visuals, and digital artifacts.",
    sections: [
      {
        heading: "Muse in one paragraph",
        paragraphs: [
          "Most chatbots answer questions and stop. Muse is built to carry work further: you describe an outcome, add context, and it helps produce something finished — a researched brief, a plan, a draft, a page, or a repeatable workflow. Think of it less as a search box and more as a capable collaborator that stays with a task from the first message to the final output.",
          "Like every AI product, what Muse can do depends on your account, your region, and the current version of the product. The capabilities below describe the general direction of the product, not a promise about any specific account.",
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
    ],
  },
  {
    slug: "muse-ai-invite-code",
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
          "For specialized workflows beyond general prompting, browse the [awesome-muse-skills catalog](https://aimuse-rho.vercel.app/) — 899 original skill guides across coding, design, research, and productivity that give Muse sharper starting instructions.",
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
    ],
  },
  {
    slug: "how-to-use-muse-ai",
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
        heading: "Keep humans at the checkpoints",
        paragraphs: [
          "Let Muse do the drafting, researching, and organizing. Keep approval with a human for anything consequential: money, hiring, legal language, medical decisions, or anything published under your name. Review important facts against primary sources.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-vs-chatgpt-claude-meta-ai",
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
        heading: "Who it's best for",
        paragraphs: [
          "Muse fits people who think in projects rather than questions: creators, researchers, planners, and builders who want a collaborator that carries work to completion. If you mostly need quick factual answers inside social apps, a lighter assistant may serve you better.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-use-cases",
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
        heading: "Go deeper with skills",
        paragraphs: [
          "General prompting covers a lot, but specialized starting instructions go further. Explore [899 original Muse skills](https://aimuse-rho.vercel.app/) across coding, design, research, productivity, and marketing — each one is a reusable playbook you can hand to Muse for sharper results.",
        ],
      },
    ],
  },
  {
    slug: "muse-ai-whatsapp",
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
    title: "Is Muse AI Free? Costs, Limits, and What to Check",
    deck: "Understand free access, promotional tokens, and account-specific limits.",
    category: "Cost",
    keywords: "is muse ai free, muse ai pricing, muse ai cost",
    metaTitle: "Is Muse AI Free? Pricing, Limits & Costs (2026) | Muse Hub",
    metaDescription:
      "Is Muse AI free? How to verify pricing, free access, usage limits, and promotional token terms for your specific account.",
    shortAnswer:
      "Muse may provide free access or promotional usage, but the plan, token balance, limits, and eligibility shown in your account are what apply to you.",
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
        heading: "Don't confuse offers with pricing",
        paragraphs: [
          "A referral headline is a promotion, not permanent pricing — and the cost of a plan is different from how many tokens a specific task consumes. Product offers can change, so verify the live terms in your account rather than relying on what you read online, including on this page.",
        ],
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
  return `https://museaicodes.com/guides/${slug}`;
}
