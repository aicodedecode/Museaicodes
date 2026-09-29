export interface Term {
  term: string;
  /** Crisp "X is..." definition, 1-2 sentences. */
  definition: string;
  /** 2-4 lines of plain-English explanation: why it matters, how it works in Muse. */
  context: string;
  /** Slugs of related guides, rendered as /guides/<slug> links. */
  guideSlugs: string[];
}

export const TERMS: Term[] = [
  {
    term: "Age requirement (18+)",
    definition:
      "Muse requires users to be 18 or older — you must be an adult to create and use a Muse account.",
    context:
      "The age floor shapes everything from sign-up to which actions Muse will handle: approvals assume an adult is in the loop, and purchases or account connections are built for adult owners. It was never designed as a kids' product, so don't hand it to one.",
    guideSlugs: ["how-to-get-muse-ai", "muse-ai-privacy"],
  },
  {
    term: "Always-on agent",
    definition:
      "An AI agent that keeps working after you close the app — holding ongoing responsibilities, checking connected apps on its own, and bringing finished work back for approval.",
    context:
      "The category went mainstream in September 2026 when OpenAI launched Dots (persistent ChatGPT agents with their own cloud computer) alongside Meta's Muse, Google's Gemini Spark, and xAI's Grok Bot. Muse participates with background goals and notifications rather than a fully autonomous always-on computer — see the comparison guide.",
    guideSlugs: ["openai-dots-vs-muse-always-on-agents", "what-is-muse-ai"],
  },
  {
    term: "Agents",
    definition:
      "An agent is AI that acts on your behalf, not just answers questions — the whole premise of Muse.",
    context:
      "You hand Muse an outcome — a booked table, a researched purchase, a price being watched — and it works through the steps itself instead of handing you instructions. Chatbots reply; agents follow through. Everything else in this glossary (approvals, connectors, computer use) exists to make delegation work.",
    guideSlugs: ["what-is-muse-ai", "muse-ai-tutorial", "muse-ai-use-cases"],
  },
  {
    term: "Approval cards",
    definition:
      "Structured prompts Muse shows before consequential actions, asking for your explicit go-ahead.",
    context:
      "Emails, purchases, and other hard-to-undo actions stop for your review; ordinary browsing and drafting continue by default. Treat approval cards as the control panel for delegation, not as interruptions — they're how you stay in charge while the agent does the legwork.",
    guideSlugs: ["muse-ai-tutorial", "how-to-use-muse-ai", "muse-ai-review"],
  },
  {
    term: "Artifacts",
    definition:
      "Saved, shareable outputs Muse builds for you: documents, summaries, research briefs, itineraries.",
    context:
      "Instead of living only in the chat transcript, an artifact persists as a finished piece you can open, edit, or send. They are where Muse's research work becomes something you can keep — the deliverable at the end of a delegated task.",
    guideSlugs: ["muse-ai-tutorial", "muse-ai-use-cases"],
  },
  {
    term: "Availability (regions)",
    definition:
      "The countries and platforms where Muse can currently be used — as of September 2026, limited to the US and Canada.",
    context:
      "Meta has not published a timetable for other regions, so treat every expansion date you see online as rumor until it appears in-app or on Meta's own pages. Circumvention tricks like VPNs are not a supported path and can violate terms — the availability guide tracks the official picture.",
    guideSlugs: ["muse-ai-availability", "how-to-get-muse-ai"],
  },
  {
    term: "Browser actions",
    definition:
      "Muse working the web on your behalf: opening pages, comparing options, filling in research.",
    context:
      "Standard browsing is allowed by default and doesn't stop for approval — Muse reads the internet freely so its answers can be current, not just trained. Hard-to-undo actions like purchases or emails are a different category and always stop for your review first.",
    guideSlugs: ["muse-ai-tutorial", "muse-ai-use-cases"],
  },
  {
    term: "Charm",
    definition:
      "Meta's announced AI keychain gadget: a Tamagotchi-style device with a small screen, a fingerprint sensor, and Jolly as its default avatar.",
    context:
      "Tap it, speak a task, and Jolly toddles off to handle it — no phone required. Announced at Meta Connect 2026 with shipping set for December 2026, so treat it as upcoming hardware, not something you can buy yet.",
    guideSlugs: ["muse-ai-charm"],
  },
  {
    term: "Computer use (Mac)",
    definition:
      "Muse operating applications on your Mac desktop with your permission — clicking, typing, and working through a queued task list.",
    context:
      "This is the feature Meta's chief AI officer framed as 'walk away from your computer' while Muse keeps working. It's available now via the Mac app, and because it hands an agent the keys to your desktop, it deserves the most careful permission review of any Muse capability.",
    guideSlugs: ["muse-ai-mac-computer-use"],
  },
  {
    term: "Connectors",
    definition:
      "Integrations that plug Muse into outside services and partners.",
    context:
      "Meta announced more connectors and partners at Meta Connect 2026; they're what turn a general agent into one that knows your calendar, shopping accounts, and routines. Review connected apps periodically, and keep approvals on for anything irreversible.",
    guideSlugs: ["muse-ai-use-cases", "muse-ai-meta-connect-2026"],
  },
  {
    term: "Data controls",
    definition:
      "The settings that govern what Muse remembers about you and what you can change or delete.",
    context:
      "Memory files are readable and editable by you, and permission controls can be tightened or loosened as you grow comfortable. Find these controls before you connect sensitive accounts — data hygiene is a setup step, not an afterthought.",
    guideSlugs: ["muse-ai-privacy", "muse-ai-security-flaw"],
  },
  {
    term: "Early access program",
    definition:
      "Meta's official waiting list for upcoming Muse features.",
    context:
      "Joining is how you raise your hand for things announced but not yet released, like the Realtime Avatar video chat. It's the supported alternative to hunting for leaked builds or unofficial downloads.",
    guideSlugs: ["muse-ai-early-access-program", "muse-ai-meta-connect-2026"],
  },
  {
    term: "Email address (Muse's own)",
    definition:
      "A dedicated Muse email address announced at Meta Connect 2026.",
    context:
      "The idea: forward a message or CC Muse and it reads, summarizes, and acts on it — email becomes another input channel for delegation. Announced but unshipped; treat any availability details as to-come until Meta confirms them.",
    guideSlugs: ["muse-ai-meta-connect-2026"],
  },
  {
    term: "Feed",
    definition:
      "A personal stream where your agent posts short briefs, recaps, and scheduled updates it writes for you.",
    context:
      "Think of it as Muse's outgoing channel: instead of you always asking, it publishes what it noticed — news on a tracked topic, a morning summary, a nudge on a goal. You can dial its proactive messages up, down, or off entirely.",
    guideSlugs: ["how-to-use-muse-ai", "muse-ai-use-cases"],
  },
  {
    term: "Goals",
    definition:
      "Long-running tasks Muse tracks for you in a dedicated Goals tab.",
    context:
      "Set a goal — watch a price, follow a story, remind you weekly — and Muse works it in the background, notifying you only when something is meaningfully new. Goals are delegation with a memory: the agent keeps the thread alive between your check-ins.",
    guideSlugs: ["how-to-use-muse-ai", "muse-ai-tutorial"],
  },
  {
    term: "Invite codes",
    definition:
      "Codes that grant access to Muse or admit new users during limited-availability phases.",
    context:
      "They sit alongside referral and redeem codes in Muse's access system, each with its own rules for who can share, who can enter, and what it unlocks. If a code doesn't work, check eligibility and expiry in-app rather than retrying blindly.",
    guideSlugs: ["muse-ai-invite-code", "how-to-get-muse-ai"],
  },
  {
    term: "Jolly",
    definition:
      "Muse's default avatar: a small animated character who gives your agent a face.",
    context:
      "Jolly is also the default avatar of the announced Charm keychain gadget — tap it, speak, and Jolly toddles off to handle the task. You can keep Jolly or design your own custom avatar; a name and a face turn an app into a companion, and companions get used.",
    guideSlugs: ["muse-ai-jolly-avatar", "muse-ai-charm"],
  },
  {
    term: "Memory",
    definition:
      "What Muse retains across conversations so you don't start over every chat.",
    context:
      "Memory persists between sessions and, per Meta's design notes, lives in memory files you can read and edit yourself. Treat it as a notebook Muse keeps about you: useful, auditable, and yours to curate.",
    guideSlugs: ["muse-ai-privacy", "how-to-use-muse-ai"],
  },
  {
    term: "Meta Connect",
    definition:
      "Meta's annual developer conference, where Muse's roadmap was laid out on September 23, 2026.",
    context:
      "The keynote covered the Realtime Avatar video chat, Mac computer use, a dedicated email address, more connectors, and smart-glasses integrations — with CEO Mark Zuckerberg calling Muse 'the centerpiece of our vision' for personal superintelligence.",
    guideSlugs: ["muse-ai-meta-connect-2026"],
  },
  {
    term: "muse.ai",
    definition:
      "Meta's official Muse presence on the web, including introducing.muse.ai and the FAQ at ai.meta.com/muse.",
    context:
      "When a claim about Muse matters — pricing, availability, new features — these pages are the sources to check; third-party roundups and social posts are not authoritative. This hub links to them wherever official confirmation exists.",
    guideSlugs: ["muse-ai-download", "how-to-get-muse-ai"],
  },
  {
    term: "Muse's own computer",
    definition:
      "The file system and terminal Muse works in when it acts on your behalf.",
    context:
      "Per Meta's own design notes, Muse isn't just a chat window: it has its own computer to hold files, run tasks, and keep state while it works through a job. This is the engine behind delegation — not just advice, but execution in a real workspace.",
    guideSlugs: ["what-is-muse-ai", "muse-ai-tutorial"],
  },
  {
    term: "Notifications",
    definition:
      "How Muse reaches you when background work produces something worth knowing.",
    context:
      "Goals, schedules, and monitored topics notify you only when something is meaningfully new — not on every routine check. You can dial proactive messages up, down, or off, so the agent's voice stays useful rather than noisy.",
    guideSlugs: ["how-to-use-muse-ai", "muse-ai-use-cases"],
  },
  {
    term: "Personalities (vibes)",
    definition:
      "The adjustable character of your Muse: how it talks, how formal or playful it is, how much initiative it takes.",
    context:
      "You can name Muse, choose or design its avatar, and tune its vibe. The personality layer is cosmetic in the best sense — the agent underneath stays the same, but the experience feels like yours.",
    guideSlugs: ["muse-ai-jolly-avatar", "how-to-use-muse-ai"],
  },
  {
    term: "Privacy",
    definition:
      "How Muse handles your data: what it stores, what you can see and delete, and which permissions each capability needs.",
    context:
      "The design is serious — readable memory files, explicit approval cards, adjustable permission controls — but the operational risks are real. Grant the least access that still does the job, and review connected apps monthly.",
    guideSlugs: ["muse-ai-privacy", "muse-ai-security-flaw"],
  },
  {
    term: "Prompt tips",
    definition:
      "Techniques that get better results from Muse: state the outcome, give context, name your checks.",
    context:
      "One real task beats ten test questions. Write the outcome you want before you open the chat, read the whole answer, then ask for one specific improvement and compare versions. Good prompting is delegation done well.",
    guideSlugs: ["muse-ai-prompt-tips", "how-to-use-muse-ai"],
  },
  {
    term: "Redeem codes",
    definition:
      "Codes you enter in the Muse app to claim something — typically token rewards or promotional credit.",
    context:
      "The in-app redeem screen is the only authoritative source for what a code is worth; headlines on social media are not. Always check eligibility, deadline, and amount before counting on the reward.",
    guideSlugs: ["muse-ai-redeem-code", "muse-ai-billion-tokens"],
  },
  {
    term: "Referral codes",
    definition:
      "Codes you share so friends get Muse access or token rewards — sometimes earning you credit too.",
    context:
      "Reported promotional offers have been generous, but every headline comes with eligibility rules, deadlines, and regional conditions. Verify the current terms in-app; the number on a screenshot is never the number that applies to you.",
    guideSlugs: ["muse-ai-referral-code", "muse-ai-billion-tokens"],
  },
  {
    term: "Reminders",
    definition:
      "Time-based nudges Muse sends you — one-off or recurring, set in plain language.",
    context:
      "Reminders are the simplest form of delegation: 'tell me Thursday.' They stack naturally with goals when the reminder is part of a longer pursuit, like a weekly check-in on something Muse is tracking.",
    guideSlugs: ["muse-ai-use-cases", "how-to-use-muse-ai"],
  },
  {
    term: "Security",
    definition:
      "The practical side of staying safe with an agent that can browse, remember, and act.",
    context:
      "Keep approvals on for anything irreversible, review connected apps monthly, and understand exactly which permissions Mac computer use grants before enabling it. A powerful agent deserves a skeptical operator — the reported Mac security flaw is the cautionary tale.",
    guideSlugs: ["muse-ai-security-flaw", "muse-ai-privacy", "muse-ai-mac-computer-use"],
  },
  {
    term: "Shopping",
    definition:
      "Muse researching products and completing purchases for you, with partners named in early coverage.",
    context:
      "Research and comparison run freely; checkout is a consequential action that stops for your approval. Agent checkout is the feature that makes approval cards matter — the moment delegation touches real money.",
    guideSlugs: ["muse-ai-shopping", "muse-ai-tutorial"],
  },
  {
    term: "Side chats",
    definition:
      "Separate conversation threads that run alongside your main chat.",
    context:
      "One long-running main chat stays interruptible — you can send several tasks at once — while side chats hold separate topics without polluting the main thread. Use them the way you'd use separate notebooks for separate projects.",
    guideSlugs: ["how-to-use-muse-ai", "muse-ai-tutorial"],
  },
  {
    term: "Smart glasses",
    definition:
      "Wearable integration announced at Meta Connect 2026: Muse coming to Meta's smart glasses.",
    context:
      "The vision is an agent you talk to hands-free, with the glasses as its eyes and ears. Announced for the months following the keynote, with no confirmed ship date as of September 2026 — treat it as upcoming, not available.",
    guideSlugs: ["muse-ai-meta-connect-2026"],
  },
  {
    term: "Subscription & usage limits",
    definition:
      "How Muse's costs and caps work: tokens, promotional grants, and whatever limits apply to your account.",
    context:
      "Meta doesn't publish per-action token costs, so the authoritative numbers are the balance and usage shown in your own app — not a headline figure from social media. Understand your limits before you delegate a heavy research job.",
    guideSlugs: ["is-muse-ai-free", "muse-ai-billion-tokens"],
  },
  {
    term: "Task delegation",
    definition:
      "The core Muse skill: handing the agent an outcome and letting it work the steps.",
    context:
      "'Book the cheapest direct flight Friday,' 'research three strollers under $300,' 'watch this price.' Delegation is what separates Muse from a chatbot — and approval cards are what keep delegation safe when the steps touch your money or inbox.",
    guideSlugs: ["muse-ai-use-cases", "muse-ai-tutorial"],
  },
  {
    term: "Token calculator",
    definition:
      "This hub's interactive estimator for how far Muse tokens go.",
    context:
      "Dial in your usage — research, images, documents, background monitoring — and get an illustrative monthly total. Because Meta doesn't publish per-action costs, treat it as intuition-building, not a budget; find it on this hub's token calculator page.",
    guideSlugs: ["muse-ai-billion-tokens", "is-muse-ai-free"],
  },
  {
    term: "Tokens",
    definition:
      "Muse's usage unit: the currency your activity spends.",
    context:
      "Promotional grants top up your balance; the in-app balance screen is the only authoritative number. Tokens are spent across chatting, browsing, research, and background work — a heavy research week drains far faster than casual chat.",
    guideSlugs: ["muse-ai-billion-tokens", "is-muse-ai-free"],
  },
  {
    term: "Unofficial hub",
    definition:
      "What this site is: an independent guide hub, not affiliated with Meta.",
    context:
      "Everything here is researched and rewritten in our own words; official claims should always be verified against Meta's own pages. The independence is the point — it lets us say plainly when a headline number is misleading.",
    guideSlugs: ["muse-ai-download", "what-is-muse-ai"],
  },
  {
    term: "Video chat",
    definition:
      "Talking face-to-face with your agent via the announced Realtime Avatar.",
    context:
      "A new model turns Muse's real-time voice into an interactive, expressive avatar you can video chat with — talk to a face, assign tasks, ask questions. Announced at Meta Connect 2026 with no public release date; the early access program is the official way to raise your hand.",
    guideSlugs: ["muse-ai-meta-connect-2026", "muse-ai-early-access-program"],
  },
  {
    term: "Voice mode",
    definition:
      "Talking to Muse instead of typing: speak naturally, and it replies in voice.",
    context:
      "It's the conversational layer for hands-busy moments — and the precursor to the announced video-chat avatar. Good for quick delegation; approval cards still apply to consequential actions, voice or not.",
    guideSlugs: ["muse-ai-voice-mode", "how-to-use-muse-ai"],
  },
  {
    term: "Web browsing",
    definition:
      "Muse reading the live web on your behalf during research.",
    context:
      "Standard browsing is allowed by default and needs no approval — it's how Muse grounds answers in current information instead of training data alone. Purchases, emails, and other consequential acts are a different category: they always stop for review.",
    guideSlugs: ["muse-ai-tutorial", "muse-ai-use-cases"],
  },
  {
    term: "WhatsApp",
    definition:
      "Using Muse through WhatsApp: chat with the agent inside the messaging app you already use daily.",
    context:
      "It brings delegation into a conversational habit — send a task like a message, get the result like a reply. Same agent, same approvals; just a different front door.",
    guideSlugs: ["muse-ai-whatsapp", "how-to-use-muse-ai"],
  },
];
