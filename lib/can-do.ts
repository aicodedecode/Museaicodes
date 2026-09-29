/**
 * "Can Muse Do This?" — the task-verdict dataset.
 *
 * Honesty rules (standing):
 * - "yes" = Muse can genuinely do this today (browsing, research, drafting,
 *   coding help, artifacts, reminders, voice, connectors — with approval
 *   cards stopping consequential actions).
 * - "depends" = possible with real setup (a connected account, your approval,
 *   your region) — the note must say exactly what.
 * - "no" = Muse genuinely cannot do this: physical-world actions, accounts
 *   you never connected, unsolicited outreach, or guaranteed outcomes.
 *   A wrong "yes" destroys trust, so when in doubt we say "depends" or "no".
 * - US & Canada scope. English only. No invented capabilities.
 */

export type Verdict = "yes" | "no" | "depends";

export interface TaskEntry {
  task: string;
  category:
    | "Travel"
    | "Shopping"
    | "Email"
    | "Productivity"
    | "Research"
    | "Coding"
    | "Social"
    | "Finance";
  verdict: Verdict;
  whatItCanDo: string;
  needsConnector?: string;
  examplePrompt: string;
  guideSlug: string;
  note?: string;
}

export const TASKS: TaskEntry[] = [
  // ---------------- Travel ----------------
  {
    task: "Find cheap flights",
    category: "Travel",
    verdict: "yes",
    whatItCanDo:
      "Muse searches live flight listings and compares prices, times, and airlines side by side.",
    examplePrompt:
      "Find the cheapest round-trip flights from New York to London in mid-November, nonstop preferred.",
    guideSlug: "how-to-use-muse-ai",
    note: "Prices move constantly — Muse shows what it finds right now, not a price lock.",
  },
  {
    task: "Book a flight for me",
    category: "Travel",
    verdict: "depends",
    whatItCanDo:
      "Muse can shortlist the exact flight and get every detail ready — but the booking itself needs your payment and your approval.",
    needsConnector: "your payment method",
    examplePrompt: "Book the 8:05 AM United flight to Chicago on October 14 for me.",
    guideSlug: "how-to-use-muse-ai",
    note: "Nothing is ever charged without your explicit approval — purchases always stop at a confirmation step.",
  },
  {
    task: "Plan a 5-day trip itinerary",
    category: "Travel",
    verdict: "yes",
    whatItCanDo:
      "Give Muse a destination, dates, and budget and it builds a day-by-day plan with sights, food, and transit.",
    examplePrompt:
      "Plan 5 days in Kyoto in April for two people, mid-range budget, we love food and temples.",
    guideSlug: "muse-ai-use-cases",
    note: "Double-check opening hours and seasonal closures before you go — Muse works from published info, not live venue feeds.",
  },
  {
    task: "Check me in for my flight",
    category: "Travel",
    verdict: "depends",
    whatItCanDo:
      "With your booking reference, Muse can start or walk through online check-in wherever the airline allows it.",
    needsConnector: "your airline booking reference",
    examplePrompt: "Check me in for flight AA 221 tomorrow.",
    guideSlug: "how-to-use-muse-ai",
    note: "Some airlines block third-party check-in entirely — then Muse hands you the direct link instead.",
  },
  {
    task: "Track a flight's live status",
    category: "Travel",
    verdict: "yes",
    whatItCanDo:
      "Muse looks up live departure, arrival, and delay information for any flight number.",
    examplePrompt: "Is Delta 1187 from Atlanta on time today?",
    guideSlug: "how-to-use-muse-ai",
  },
  {
    task: "Get me compensation for a delayed flight",
    category: "Travel",
    verdict: "no",
    whatItCanDo:
      "Muse can't make an airline pay out — no one can guarantee that. It can find the airline's policy and draft your claim.",
    examplePrompt:
      "Draft a compensation claim email to the airline for my 6-hour delay on flight BA 179.",
    guideSlug: "muse-ai-prompt-tips",
    note: "Know your rights first: EU261 covers EU departures, while US rules are weaker — Muse explains both.",
  },
  {
    task: "Translate a foreign menu or sign",
    category: "Travel",
    verdict: "yes",
    whatItCanDo:
      "Snap a photo or paste the text and Muse translates it, with cultural notes on the dishes.",
    examplePrompt:
      "Translate this Japanese menu and tell me which dishes are vegetarian.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Find a hotel with free cancellation",
    category: "Travel",
    verdict: "yes",
    whatItCanDo:
      "Muse compares hotels by price, location, reviews, and cancellation policy in one pass.",
    examplePrompt:
      "Find 4-star hotels near downtown Austin under $200 a night with free cancellation.",
    guideSlug: "muse-ai-shopping",
  },

  // ---------------- Shopping ----------------
  {
    task: "Compare prices across stores",
    category: "Shopping",
    verdict: "yes",
    whatItCanDo:
      "Muse pulls listings from multiple retailers so you can see who actually has the lowest price.",
    examplePrompt: "Compare the Sony WH-1000XM5 price at Amazon, Best Buy, and Walmart.",
    guideSlug: "muse-ai-shopping",
  },
  {
    task: "Find the best option under a budget",
    category: "Shopping",
    verdict: "yes",
    whatItCanDo:
      "Tell Muse your budget and must-haves and it narrows the field to the strongest picks.",
    examplePrompt: "Best noise-canceling headphones under $150 for office calls.",
    guideSlug: "muse-ai-shopping",
  },
  {
    task: "Buy something for me",
    category: "Shopping",
    verdict: "depends",
    whatItCanDo:
      "Muse can build the cart and get everything ready — but checkout always waits for your approval.",
    needsConnector: "a payment method on your account",
    examplePrompt: "Order the Anker 737 power bank from Amazon.",
    guideSlug: "muse-ai-shopping",
    note: "Approval cards stop every purchase before money moves — Muse never buys silently.",
  },
  {
    task: "Track my package",
    category: "Shopping",
    verdict: "depends",
    whatItCanDo:
      "Give Muse the tracking number and it checks the shipment status and expected delivery.",
    needsConnector: "the tracking number or a connected retailer account",
    examplePrompt: "Where is my package? Tracking number 1Z8845220398765432.",
    guideSlug: "how-to-use-muse-ai",
  },
  {
    task: "Guarantee a refund",
    category: "Shopping",
    verdict: "no",
    whatItCanDo:
      "Nobody can guarantee a refund in advance — not stores, not Muse. It can find the return policy and help you make the case.",
    examplePrompt: "Help me write a return request for these shoes that arrived damaged.",
    guideSlug: "muse-ai-prompt-tips",
    note: "Refund scams are common — anyone promising a guaranteed refund is lying.",
  },
  {
    task: "Watch a price and alert me",
    category: "Shopping",
    verdict: "depends",
    whatItCanDo:
      "Ask Muse to keep an eye on a specific item and check back on a schedule you set.",
    examplePrompt: "Watch the price of the iPad Air and tell me if it drops below $500.",
    guideSlug: "muse-ai-use-cases",
    note: "It's a check-in helper, not a millisecond price bot — for flash deals, set a store alert too.",
  },
  {
    task: "Turn a recipe into a grocery list",
    category: "Shopping",
    verdict: "yes",
    whatItCanDo:
      "Paste any recipe and Muse returns an organized shopping list, grouped by store section.",
    examplePrompt: "Turn this lasagna recipe into a grocery list for 6 servings.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Order groceries for delivery",
    category: "Shopping",
    verdict: "depends",
    whatItCanDo:
      "Muse can fill the cart from your list — but you approve the order and the total before it goes through.",
    needsConnector: "a grocery delivery integration and payment method",
    examplePrompt: "Order my usual weekly groceries from the list I sent.",
    guideSlug: "muse-ai-shopping",
    note: "Availability depends on delivery partners in your area — US and Canada coverage varies by city.",
  },

  // ---------------- Email ----------------
  {
    task: "Draft an email in my voice",
    category: "Email",
    verdict: "yes",
    whatItCanDo:
      "Muse drafts emails from a few bullet points — professional, casual, or firm, as you need.",
    examplePrompt: "Draft a polite email asking my manager for Friday off.",
    guideSlug: "muse-ai-prompt-tips",
  },
  {
    task: "Summarize my unread emails",
    category: "Email",
    verdict: "depends",
    whatItCanDo:
      "With your mailbox connected, Muse gives you a morning brief of what actually needs your attention.",
    needsConnector: "a connected mailbox",
    examplePrompt: "Summarize my unread emails from this morning.",
    guideSlug: "how-to-use-muse-ai",
  },
  {
    task: "Send an email for me",
    category: "Email",
    verdict: "depends",
    whatItCanDo:
      "Muse writes the email and shows it to you first — nothing sends until you approve it.",
    needsConnector: "a connected mailbox",
    examplePrompt: "Send Priya the meeting notes from today.",
    guideSlug: "how-to-use-muse-ai",
    note: "Every send stops at an approval card showing the exact recipients and text.",
  },
  {
    task: "Unsubscribe me from newsletters",
    category: "Email",
    verdict: "depends",
    whatItCanDo:
      "Muse identifies bulk senders in your connected inbox and walks through unsubscribing, one by one.",
    needsConnector: "a connected mailbox",
    examplePrompt: "Find all the newsletters cluttering my inbox and help me unsubscribe.",
    guideSlug: "how-to-use-muse-ai",
    note: "Unsubscribe links live with the senders, so this is guided cleanup — not one magic button.",
  },
  {
    task: "Read an inbox I never connected",
    category: "Email",
    verdict: "no",
    whatItCanDo:
      "Muse can only see accounts you explicitly connect. It can't — and won't — peek into accounts you haven't granted access to.",
    examplePrompt: "Check my old Yahoo inbox for that receipt.",
    guideSlug: "muse-ai-privacy",
    note: "This is a privacy guardrail, not a missing feature — it protects your accounts too.",
  },
  {
    task: "Write a firm follow-up for an unpaid invoice",
    category: "Email",
    verdict: "yes",
    whatItCanDo:
      "Muse drafts payment reminders that are professional but clear about deadlines.",
    examplePrompt: "Write a second follow-up for invoice #2041, 30 days overdue, firm but polite.",
    guideSlug: "muse-ai-prompt-tips",
  },
  {
    task: "Auto-reply while I'm on vacation",
    category: "Email",
    verdict: "depends",
    whatItCanDo:
      "Muse helps you set up an out-of-office reply on your connected mailbox — you approve the message and the dates.",
    needsConnector: "a connected mailbox",
    examplePrompt: "Set up an out-of-office reply for next week.",
    guideSlug: "how-to-use-muse-ai",
    note: "Muse configures the auto-reply; it doesn't impersonate you in live conversations.",
  },
  {
    task: "Delete my entire inbox",
    category: "Email",
    verdict: "depends",
    whatItCanDo:
      "Muse can help bulk-archive or delete with repeated confirmations — but it will push you toward archiving first.",
    needsConnector: "a connected mailbox",
    examplePrompt: "Delete all emails older than 5 years.",
    guideSlug: "how-to-use-muse-ai",
    note: "Destructive actions need explicit approval at every step — and there is no undo for bulk delete.",
  },

  // ---------------- Productivity ----------------
  {
    task: "Keep working on my tasks 24/7 in the background (like OpenAI Dots)",
    category: "Productivity",
    verdict: "depends",
    whatItCanDo:
      "Muse runs goals in the background after you close the app and notifies you when something is meaningfully new — but it doesn't get its own always-on cloud computer or run fully autonomously the way OpenAI Dots does.",
    examplePrompt: "Watch this product's price and ping me the moment it drops below $300.",
    guideSlug: "openai-dots-vs-muse-always-on-agents",
    note: "For true always-on agents with their own cloud computer, the current options are OpenAI Dots (ChatGPT Pro/Business), Google Gemini Spark, or xAI's Grok Bot.",
  },
  {
    task: "Set a reminder",
    category: "Productivity",
    verdict: "yes",
    whatItCanDo:
      "One sentence is enough — Muse sets reminders for times, places, and recurring routines.",
    examplePrompt: "Remind me to call the dentist tomorrow at 10am.",
    guideSlug: "how-to-use-muse-ai",
  },
  {
    task: "Schedule a meeting with my team",
    category: "Productivity",
    verdict: "depends",
    whatItCanDo:
      "Muse finds times that work and drafts the invite — you approve before anything lands on anyone's calendar.",
    needsConnector: "a connected calendar",
    examplePrompt: "Find a 30-minute slot with the design team next week.",
    guideSlug: "how-to-use-muse-ai",
  },
  {
    task: "Turn messy notes into a to-do list",
    category: "Productivity",
    verdict: "yes",
    whatItCanDo:
      "Paste a brain dump and Muse returns prioritized, actionable tasks.",
    examplePrompt: "Turn these meeting notes into a to-do list with owners.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Summarize a long PDF or document",
    category: "Productivity",
    verdict: "yes",
    whatItCanDo:
      "Upload a document and Muse extracts the key points, decisions, and action items.",
    examplePrompt: "Summarize this 40-page report into the five points that matter.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Take notes during my meeting",
    category: "Productivity",
    verdict: "depends",
    whatItCanDo:
      "With meeting audio you provide, Muse transcribes and summarizes — but it can't silently join calls you're not on.",
    needsConnector: "meeting audio you provide, or access you grant",
    examplePrompt: "Summarize the key decisions from this meeting recording.",
    guideSlug: "how-to-use-muse-ai",
    note: "Always tell other attendees when a meeting is being recorded or transcribed.",
  },
  {
    task: "Write my college essay",
    category: "Productivity",
    verdict: "depends",
    whatItCanDo:
      "Muse can outline, draft, and edit with you — but what you submit is governed by your school's AI policy.",
    examplePrompt: "Help me outline a personal statement about my volunteer work.",
    guideSlug: "muse-ai-prompt-tips",
    note: "Use Muse as a tutor, not a ghostwriter — many schools treat undisclosed AI submissions as academic misconduct.",
  },
  {
    task: "Remember my preferences",
    category: "Productivity",
    verdict: "depends",
    whatItCanDo:
      "Muse has an opt-in memory you can review and clear anytime — nothing is stored silently.",
    examplePrompt: "Remember that I prefer morning meetings.",
    guideSlug: "muse-ai-privacy",
    note: "Memory is off until you turn it on, and you can see and delete everything it holds.",
  },
  {
    task: "Unlock my front door",
    category: "Productivity",
    verdict: "no",
    whatItCanDo:
      "Muse doesn't control physical locks, cars, or appliances — the physical world stays in your hands.",
    examplePrompt: "Unlock my front door, I'm standing outside.",
    guideSlug: "what-is-muse-ai",
    note: "Smart-home integrations you explicitly connect are the only exception — and even those need your setup.",
  },

  // ---------------- Research ----------------
  {
    task: "Catch me up on a news topic",
    category: "Research",
    verdict: "yes",
    whatItCanDo:
      "Muse reads across outlets and gives you the story so far, with sources you can click.",
    examplePrompt: "Catch me up on the latest fusion energy breakthroughs.",
    guideSlug: "how-to-use-muse-ai",
    note: "For breaking news, check timestamps — Muse summarizes what's published, not what's happening this minute.",
  },
  {
    task: "Explain a complex topic simply",
    category: "Research",
    verdict: "yes",
    whatItCanDo:
      "From quantum computing to tax brackets, Muse adapts the explanation to your level.",
    examplePrompt: "Explain how mortgages work like I'm buying my first home.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Find sources for my paper",
    category: "Research",
    verdict: "yes",
    whatItCanDo:
      "Muse finds primary sources, studies, and data — and shows its work so you can verify.",
    examplePrompt: "Find primary sources on the economic impact of remote work.",
    guideSlug: "muse-ai-use-cases",
    note: "Always open and verify citations yourself — AI can misread or misattribute a source.",
  },
  {
    task: "Read a paywalled article for me",
    category: "Research",
    verdict: "no",
    whatItCanDo:
      "Muse respects paywalls and logins — it can't slip past access controls, and won't try.",
    examplePrompt: "Summarize this article that's behind a paywall.",
    guideSlug: "muse-ai-privacy",
    note: "It can often find a freely available version of the same information — ask for that instead.",
  },
  {
    task: "Diagnose my symptoms",
    category: "Research",
    verdict: "depends",
    whatItCanDo:
      "Muse can share general health information, but it can't diagnose you or replace a clinician.",
    examplePrompt: "What could be causing this headache I've had for three days?",
    guideSlug: "how-to-use-muse-ai",
    note: "For anything persistent or worrying, see a real doctor — Muse will tell you the same.",
  },
  {
    task: "Compare two products in depth",
    category: "Research",
    verdict: "yes",
    whatItCanDo:
      "Muse builds detailed comparisons from specs, reviews, and real-world trade-offs.",
    examplePrompt: "Compare the MacBook Air M4 vs a ThinkPad for a grad student.",
    guideSlug: "muse-ai-shopping",
  },
  {
    task: "Monitor a breaking story for updates",
    category: "Research",
    verdict: "depends",
    whatItCanDo:
      "Muse can re-check a developing story on a schedule you set — but it's not a live news wire.",
    examplePrompt: "Check twice a day for updates on the transit strike and brief me.",
    guideSlug: "muse-ai-use-cases",
    note: "For minute-by-minute developments, a news app's push alerts are the right tool.",
  },
  {
    task: "Fact-check a viral claim",
    category: "Research",
    verdict: "yes",
    whatItCanDo:
      "Paste the claim and Muse traces it to original sources, showing what's verified and what isn't.",
    examplePrompt: "Is it true that this city banned cars downtown?",
    guideSlug: "how-to-use-muse-ai",
    note: "Muse shows its sources — click through to them before you share.",
  },

  // ---------------- Coding ----------------
  {
    task: "Write code from a description",
    category: "Coding",
    verdict: "yes",
    whatItCanDo:
      "Describe what you want and Muse writes working code in your language of choice.",
    examplePrompt: "Write a Python script that renames all files in a folder by date.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Debug my error",
    category: "Coding",
    verdict: "yes",
    whatItCanDo:
      "Paste the error and the code — Muse explains the cause and suggests the fix.",
    examplePrompt: "Why does this JavaScript throw 'cannot read properties of undefined'?",
    guideSlug: "muse-ai-prompt-tips",
  },
  {
    task: "Explain unfamiliar code",
    category: "Coding",
    verdict: "yes",
    whatItCanDo:
      "Muse walks through what code does, line by line or at the architecture level.",
    examplePrompt: "Explain what this Rust function does.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Build a complete app for me",
    category: "Coding",
    verdict: "depends",
    whatItCanDo:
      "Muse can scaffold projects and write large portions — but you review, test, and ship. It's a pair programmer, not a replacement.",
    examplePrompt: "Scaffold a to-do app with React and local storage.",
    guideSlug: "muse-ai-use-cases",
    note: "AI-written code still needs your tests — never ship unreviewed code to users.",
  },
  {
    task: "Deploy my code to production",
    category: "Coding",
    verdict: "depends",
    whatItCanDo:
      "Muse can prepare the deploy steps — but production pushes need your repo access and explicit approval.",
    needsConnector: "your repo and hosting access",
    examplePrompt: "Deploy this site to my hosting account.",
    guideSlug: "how-to-use-muse-ai",
    note: "Deploys stop at an approval card — nothing ships to production silently.",
  },
  {
    task: "Access a private repo I never shared",
    category: "Coding",
    verdict: "no",
    whatItCanDo:
      "Muse only touches code you share or connect — it can't reach into private repos on its own.",
    examplePrompt: "Review the code in my company's private repo.",
    guideSlug: "muse-ai-privacy",
    note: "Same guardrail as email: no connection, no access — for everyone's code.",
  },
  {
    task: "Review my pull request",
    category: "Coding",
    verdict: "yes",
    whatItCanDo:
      "Share the diff and Muse reviews for bugs, security issues, and style.",
    examplePrompt: "Review this pull request for security issues.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Guarantee my code is bug-free",
    category: "Coding",
    verdict: "no",
    whatItCanDo:
      "No tool can guarantee bug-free code — Muse reduces errors, but tests and review catch them.",
    examplePrompt: "Certify this code has zero bugs.",
    guideSlug: "muse-ai-prompt-tips",
    note: "Anyone selling 'guaranteed bug-free' is selling something else. Write the tests.",
  },

  // ---------------- Social ----------------
  {
    task: "Draft a post for me",
    category: "Social",
    verdict: "yes",
    whatItCanDo:
      "Muse drafts posts in your voice for any platform — you edit and publish.",
    examplePrompt: "Draft a LinkedIn post about completing my first marathon.",
    guideSlug: "muse-ai-prompt-tips",
  },
  {
    task: "Post to my accounts automatically",
    category: "Social",
    verdict: "no",
    whatItCanDo:
      "Muse drafts the content, but publishing happens in your own apps — there is no auto-posting to your social accounts.",
    examplePrompt: "Post this photo to my Instagram with that caption.",
    guideSlug: "muse-ai-use-cases",
    note: "Auto-posting is a spam vector, so publishing stays a human action.",
  },
  {
    task: "Message people who never asked to hear from me",
    category: "Social",
    verdict: "no",
    whatItCanDo:
      "Muse won't cold-message, spam, or mass-DM anyone — unsolicited outreach is blocked.",
    examplePrompt: "DM 500 people about my new business.",
    guideSlug: "muse-ai-whatsapp",
    note: "This is a hard policy line, not a missing connector — it won't change with setup.",
  },
  {
    task: "Text someone I know that I'm running late",
    category: "Social",
    verdict: "depends",
    whatItCanDo:
      "From your own device, with your approval, Muse can help you message your own contacts.",
    needsConnector: "your contacts and messaging on your device",
    examplePrompt: "Text Mom that I'll be 20 minutes late.",
    guideSlug: "muse-ai-whatsapp",
    note: "Your contacts, your approval, your send button — never strangers, never unsolicited.",
  },
  {
    task: "Write a birthday message",
    category: "Social",
    verdict: "yes",
    whatItCanDo:
      "Muse writes warm, personal messages — give it one detail and it does the rest.",
    examplePrompt: "Write a funny birthday message for my brother who loves fishing.",
    guideSlug: "muse-ai-prompt-tips",
  },
  {
    task: "Get me more followers",
    category: "Social",
    verdict: "no",
    whatItCanDo:
      "No legitimate tool can promise followers — anyone selling that is selling bots. Muse helps with content ideas instead.",
    examplePrompt: "Get me 10,000 Instagram followers.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Reply to my DMs for me",
    category: "Social",
    verdict: "depends",
    whatItCanDo:
      "Muse drafts replies in your voice for you to send — full auto-pilot needs your explicit setup.",
    needsConnector: "your messaging accounts",
    examplePrompt: "Draft replies to these three customer DMs.",
    guideSlug: "muse-ai-whatsapp",
    note: "People deserve to know when they're talking to AI — Muse drafts, you decide.",
  },
  {
    task: "Find what's trending in my niche",
    category: "Social",
    verdict: "yes",
    whatItCanDo:
      "Muse scans what's being discussed in your field and surfaces the real trends.",
    examplePrompt: "What's trending in sustainable fashion this month?",
    guideSlug: "muse-ai-use-cases",
  },

  // ---------------- Finance ----------------
  {
    task: "Explain investing basics",
    category: "Finance",
    verdict: "yes",
    whatItCanDo:
      "Muse teaches the fundamentals — index funds, diversification, risk — in plain language.",
    examplePrompt: "Explain index funds vs picking stocks.",
    guideSlug: "muse-ai-use-cases",
    note: "Educational only — Muse isn't a licensed advisor and can't give personalized investment advice.",
  },
  {
    task: "Build me a monthly budget",
    category: "Finance",
    verdict: "yes",
    whatItCanDo:
      "Share your income and expenses and Muse builds a realistic budget with room to breathe.",
    examplePrompt: "Build a monthly budget on a $4,200 salary with $1,600 rent.",
    guideSlug: "muse-ai-use-cases",
  },
  {
    task: "Buy stocks for me",
    category: "Finance",
    verdict: "depends",
    whatItCanDo:
      "Muse can research companies and prepare orders — but every trade needs your brokerage and your explicit approval.",
    needsConnector: "your brokerage account",
    examplePrompt: "Buy 10 shares of VTI for me.",
    guideSlug: "how-to-use-muse-ai",
    note: "No tool can promise returns — anyone guaranteeing profits is running a scam.",
  },
  {
    task: "Guarantee I'll make money",
    category: "Finance",
    verdict: "no",
    whatItCanDo:
      "Nobody can guarantee market returns — not hedge funds, not Muse. It explains the risks instead.",
    examplePrompt: "Guarantee this trade will profit.",
    guideSlug: "muse-ai-prompt-tips",
  },
  {
    task: "Track my spending",
    category: "Finance",
    verdict: "depends",
    whatItCanDo:
      "With your accounts connected, Muse categorizes spending and spots the leaks.",
    needsConnector: "your bank or card accounts",
    examplePrompt: "Where did my money go last month?",
    guideSlug: "how-to-use-muse-ai",
    note: "Muse only sees accounts you connect — it can't pull data from banks you never linked.",
  },
  {
    task: "File my taxes",
    category: "Finance",
    verdict: "depends",
    whatItCanDo:
      "Muse organizes documents and explains the forms — but you review and sign. The liability stays yours.",
    examplePrompt: "Help me organize documents for this year's tax filing.",
    guideSlug: "muse-ai-use-cases",
    note: "Tax rules change yearly and vary by state — verify everything against IRS or CRA guidance.",
  },
  {
    task: "Explain my credit card statement",
    category: "Finance",
    verdict: "yes",
    whatItCanDo:
      "Upload or paste a statement and Muse explains every charge and fee in plain English.",
    examplePrompt: "Explain these fees on my credit card statement.",
    guideSlug: "how-to-use-muse-ai",
  },
  {
    task: "Move money between my accounts",
    category: "Finance",
    verdict: "depends",
    whatItCanDo:
      "Muse can prepare the transfer details — but moving money always stops at your approval.",
    needsConnector: "your bank accounts",
    examplePrompt: "Move $500 from checking to savings.",
    guideSlug: "how-to-use-muse-ai",
    note: "Money movement is the textbook consequential action — approval cards exist exactly for this.",
  },
];
