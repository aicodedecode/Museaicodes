/**
 * Intent pages, part 1 — long-tail "Muse AI for <audience>" pages rendered by
 * app/for/[slug]/page.tsx. Part 2 (INTENT_PAGES_2, parallel file) uses the same
 * IntentPage interface.
 *
 * Content rule: capabilities reference only real Muse abilities (task
 * delegation with approval cards, web browsing, shopping/bookings, research &
 * artifact creation, reminders/goals, voice mode, Mac computer use, connectors).
 * No invented stats, prices, or features. English only.
 */
export interface IntentFaq {
  question: string;
  answer: string;
}

export interface IntentPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  shortAnswer: string;
  intro: string[];
  capabilities: { title: string; body: string }[];
  prompts: { title: string; prompt: string }[];
  limitations: string[];
  faqs: IntentFaq[];
  relatedGuides: string[];
}

export const INTENT_PAGES_1: IntentPage[] = [
  {
    slug: "students",
    title: "Muse AI for Students",
    metaTitle: "Muse AI for Students: Study Help, Exam Prep & Essay Planning",
    metaDescription:
      "How students use Muse AI: explain hard topics, build study plans, practice quizzes, and plan essays. Includes copy-paste prompts and honest limitations.",
    keywords:
      "Muse AI for students, Muse AI study help, Muse AI exam prep, Muse AI homework help, Muse AI essay help",
    shortAnswer:
      "Students use Muse AI as a study assistant: it explains difficult topics in plain language, builds revision plans, generates practice questions, and helps outline essays and projects. It works best as a tutor you direct — you approve what it does and should always verify facts against your course materials.",
    intro: [
      "Studying with Muse AI feels less like chatting with a bot and more like delegating to a capable assistant. You describe what you need — \"explain photosynthesis like I'm preparing for a test\" or \"quiz me on the causes of World War I\" — and Muse works through the task, showing its work along the way.",
      "What makes Muse different from a plain chatbot is that it can take multi-step study work off your plate: researching a topic across the web, turning its findings into a structured revision guide, or setting reminders so you actually stick to your study schedule. You stay in control — Muse presents its plan and waits for your go-ahead before doing anything significant.",
    ],
    capabilities: [
      {
        title: "Explain topics at your level",
        body: "Ask Muse to break down anything — from calculus to constitutional law — at exactly your level, with examples that match your syllabus. If an explanation doesn't land, say \"try again with a simpler analogy\" and it reframes on the spot.",
      },
      {
        title: "Build personalized study plans",
        body: "Tell Muse your exam date, subjects, and how many hours you can study per day, and it will draft a day-by-day revision plan. Pair it with Muse's reminders so you get nudged when each study session is due.",
      },
      {
        title: "Generate practice questions and quizzes",
        body: "Paste your notes or name a topic and ask Muse to create practice questions — multiple choice, short answer, or essay style. Have it grade your answers and explain where you went wrong, so revision becomes active practice instead of re-reading.",
      },
      {
        title: "Outline essays and structure projects",
        body: "Muse helps you plan essays with thesis statements, paragraph-by-paragraph outlines, and counterarguments to address. It can also turn research into structured documents you can keep — outlines, timelines, comparison tables, and bibliographies you verify yourself.",
      },
      {
        title: "Research papers and sources",
        body: "Muse can browse the web to find sources, summarize key arguments, and organize them into a research brief. It saves hours of tab-hopping when you're gathering material — just verify every citation yourself before it goes into your paper.",
      },
      {
        title: "Study on the go with voice mode",
        body: "On the move, use Muse's voice mode to talk through a topic hands-free — great for revising on a walk or testing yourself aloud before an exam.",
      },
    ],
    prompts: [
      {
        title: "Explain a hard topic simply",
        prompt:
          "Explain [topic] to me like I'm a [grade/year] student studying [subject]. Use one real-world analogy, then list the 5 key terms I must know for the exam, with a one-line definition of each.",
      },
      {
        title: "Make me a study plan",
        prompt:
          "Build me a [14]-day study plan for [subject/exam]. I can study [2] hours per day. Break it into daily topics, include one practice activity per day, and schedule 2 full revision days before the exam on [date].",
      },
      {
        title: "Quiz me with feedback",
        prompt:
          "Quiz me on [topic] with 5 questions, one at a time. Wait for my answer after each question, then tell me if I'm right and explain the correct answer briefly before asking the next one.",
      },
      {
        title: "Outline my essay",
        prompt:
          "Help me outline a [word count]-word essay on [essay question]. Suggest a thesis statement, 3-4 main arguments with one piece of evidence each, one counterargument to address, and a conclusion plan.",
      },
      {
        title: "Summarize my notes",
        prompt:
          "Here are my class notes:\n[ paste notes ]\n\nTurn them into a one-page revision sheet: key definitions in bold, a 5-bullet summary, and 3 likely exam questions with short model answers.",
      },
    ],
    limitations: [
      "Muse can get facts wrong — always verify dates, formulas, and citations against your textbook or course materials before an exam or submission.",
      "Muse is currently available in the US and Canada only, and usage limits apply, so plan heavy study sessions accordingly.",
      "Submitting Muse-written work as your own may violate your school's academic integrity policy — use it for learning and planning, not to write assignments for you.",
      "Muse can't see your school's internal portals or LMS; share material by pasting text or describing what you need.",
      "Voice mode and Mac computer use are newer capabilities that may behave differently across devices.",
    ],
    faqs: [
      {
        question: "Can Muse AI do my homework for me?",
        answer:
          "It can explain concepts, check your work, and help you plan assignments — but asking it to complete graded work may breach your school's academic integrity rules. Use it as a tutor that helps you understand, not a shortcut that does the work.",
      },
      {
        question: "Is Muse AI good for exam revision?",
        answer:
          "Yes — its strongest study uses are generating practice questions, building revision schedules, and explaining topics at your level. Set reminders through Muse so the plan turns into actual study sessions.",
      },
      {
        question: "Does Muse AI cite sources for research?",
        answer:
          "Muse can browse the web and reference what it finds, but you should verify every citation, quote, and statistic yourself before using it in academic work. AI-generated references are a starting point, not a finished bibliography.",
      },
      {
        question: "Can Muse help with math and science problems?",
        answer:
          "It can walk through problems step by step and explain the method, which is great for learning. Double-check the arithmetic and final answers yourself — it's a tutor, not a calculator.",
      },
      {
        question: "Is Muse AI free for students?",
        answer:
          "Availability and pricing can change, so check the current offer status and the is-Muse-AI-free guide on this site. There is no special student pricing announced.",
      },
    ],
    relatedGuides: [
      "muse-ai-tutorial",
      "how-to-use-muse-ai",
      "muse-ai-prompt-tips",
      "what-is-muse-ai",
    ],
  },
  {
    slug: "developers",
    title: "Muse AI for Developers",
    metaTitle: "Muse AI for Developers: Code Help, Debugging & Workflow Automation",
    metaDescription:
      "How developers use Muse AI: explain and debug code, draft documentation, automate research, and — on Mac — let it operate the computer. Prompts, limits, and FAQs.",
    keywords:
      "Muse AI for developers, Muse AI coding help, Muse AI debug code, Muse AI Mac computer use, Muse AI automation",
    shortAnswer:
      "Developers use Muse AI to explain unfamiliar code, debug errors, draft documentation and tests, research libraries and APIs, and automate repetitive workflow steps. On Mac, its computer-use feature can go further and operate apps on your machine — always under your approval.",
    intro: [
      "Muse isn't an IDE plugin — it's a general-purpose agent you delegate work to. Describe the outcome you want, and it breaks the job into steps: reading docs, searching the web for current API details, drafting code or documents, and showing you each step for approval before anything consequential happens.",
      "The biggest win for developers is context-switching work: the twenty minutes you'd spend reading migration guides, comparing libraries, or writing boilerplate docs. Muse absorbs that while you stay in flow — and on a Mac, its computer-use capability can drive applications directly, running the boring multi-app errands that eat a developer's day.",
    ],
    capabilities: [
      {
        title: "Explain and debug code",
        body: "Paste an error, a stack trace, or a confusing function and ask Muse to explain what's happening and suggest fixes. It browses current documentation and Stack Overflow-style sources, so its answers reflect today's APIs rather than stale training data.",
      },
      {
        title: "Draft docs, tests, and boilerplate",
        body: "Have Muse generate README sections, API documentation, test scaffolding, or config templates from your description. You review and refine — it does the tedious first draft.",
      },
      {
        title: "Research libraries and compare approaches",
        body: "Ask Muse to compare two libraries, summarize a migration guide, or find how others solved a specific problem. It returns a structured brief with sources you can verify, instead of twenty open tabs.",
      },
      {
        title: "Automate workflow errands",
        body: "Set up recurring work through Muse's reminders and goals: a Monday brief of dependency updates, a weekly digest of releases in your stack, or a nudge to review your backlog. Delegation compounds.",
      },
      {
        title: "Mac computer use",
        body: "On Mac, Muse's computer-use feature can operate applications on your machine — filling forms, organizing files, or running multi-step desktop tasks you describe. Every consequential action goes through an approval card, so nothing happens without your sign-off.",
      },
      {
        title: "Talk it through with voice mode",
        body: "Rubber-duck debugging out loud: describe the bug to Muse in voice mode and let it ask clarifying questions until the root cause surfaces.",
      },
    ],
    prompts: [
      {
        title: "Debug an error",
        prompt:
          "I'm getting this error in [language/framework]:\n[ paste error and relevant code ]\n\nExplain the most likely cause in plain language, then give me 2-3 possible fixes ordered from most to least likely, with corrected code for the top one.",
      },
      {
        title: "Compare two libraries",
        prompt:
          "Compare [library A] vs [library B] for [use case] in 2026. Cover: maturity, bundle size, TypeScript support, community activity, and one dealbreaker each. End with your recommendation and why.",
      },
      {
        title: "Draft documentation",
        prompt:
          "Write API documentation for this function:\n[ paste function ]\n\nInclude: purpose, parameters with types, return value, one usage example, and edge cases to watch for. Keep it concise.",
      },
      {
        title: "Summarize a migration guide",
        prompt:
          "Research the migration from [version A] to [version B] of [framework]. Give me a checklist of breaking changes that affect a typical app, ordered by how likely they are to bite me.",
      },
    ],
    limitations: [
      "Muse can suggest code that looks right but has subtle bugs or security issues — review everything before it ships, and never run untrusted commands blindly.",
      "Web research reflects what's published; for brand-new or private APIs, Muse's knowledge may lag — verify against official docs.",
      "Mac computer use is an early-access capability; expect rough edges, and keep approval cards on for anything that modifies files or accounts.",
      "Muse isn't a substitute for understanding your own codebase — lean on it for acceleration, not comprehension you skip.",
      "Availability is currently US and Canada only, and usage limits apply to heavy sessions.",
    ],
    faqs: [
      {
        question: "Can Muse AI write code for me?",
        answer:
          "Yes — it can draft functions, components, scripts, and boilerplate from your description, then iterate when you give feedback. Treat its output as a strong first draft: review, test, and own the result.",
      },
      {
        question: "How is Muse different from a coding chatbot?",
        answer:
          "Muse acts as an agent, not just a chatbox. It can browse the live web for current docs, produce structured artifacts like comparison briefs and checklists, set reminders for recurring work, and — on Mac — operate apps on your computer with your approval.",
      },
      {
        question: "What is Muse's Mac computer use?",
        answer:
          "It's an early-access feature where Muse can see and operate your Mac's screen to complete multi-step tasks — organizing files, filling forms, running app workflows. Each consequential action requires your approval on an approval card.",
      },
      {
        question: "Can Muse access my private repos or internal docs?",
        answer:
          "Muse works with what you share: paste code, describe architecture, or point it at public resources. It can't reach your company's private systems unless you bring the content to it.",
      },
      {
        question: "Does Muse know the latest frameworks?",
        answer:
          "Its web browsing helps it look up current documentation and release notes, which keeps answers fresher than a static model. Still, verify version-specific details against official docs before relying on them.",
      },
    ],
    relatedGuides: [
      "muse-ai-mac-computer-use",
      "muse-ai-tutorial",
      "muse-ai-prompt-tips",
      "muse-ai-review",
    ],
  },
  {
    slug: "real-estate",
    title: "Muse AI for Real Estate",
    metaTitle: "Muse AI for Real Estate: Listings, Market Research & Client Follow-Up",
    metaDescription:
      "How real-estate agents and buyers use Muse AI: research neighborhoods, compare listings, draft listing copy, and set follow-up reminders. Prompts and honest limits.",
    keywords:
      "Muse AI real estate, Muse AI for realtors, Muse AI listing description, Muse AI market research, Muse AI property search",
    shortAnswer:
      "Real-estate professionals use Muse AI to research neighborhoods and market trends, compare listings side by side, draft listing descriptions and client messages, and set follow-up reminders so no lead goes cold. Buyers can use it to organize their search criteria and stay on top of new listings.",
    intro: [
      "Real estate runs on research and follow-up — two things Muse is built for. Instead of juggling tabs across listing portals, market reports, and your CRM notes, you can delegate the legwork: \"research the market in this zip code,\" \"compare these three listings,\" or \"remind me to follow up with the seller's agent on Friday.\"",
      "Muse doesn't replace your judgment or your license — pricing strategy, negotiation, and showings stay human. But it clears the administrative fog around every deal: structured research briefs, polished drafts, and reminders that keep your pipeline moving while you're out showing homes.",
    ],
    capabilities: [
      {
        title: "Neighborhood and market research",
        body: "Ask Muse to browse the web and compile a brief on an area: price trends, school ratings, commute options, walkability, and recent news. You get a structured report to share with clients instead of a pile of bookmarks.",
      },
      {
        title: "Compare listings side by side",
        body: "Paste details from several listings and have Muse build a comparison table — price per square foot, taxes, HOA, commute, pros and cons of each. Decision-making gets dramatically faster for indecisive buyers.",
      },
      {
        title: "Draft listing descriptions",
        body: "Give Muse the property's features and it will draft a compelling listing description in your voice. You approve and edit — it handles the blank-page problem and the SEO-friendly phrasing.",
      },
      {
        title: "Client messages and follow-up",
        body: "Muse drafts professional follow-up emails, open-house invitations, and check-in messages from your bullet points. Set reminders so every lead, inspection deadline, and closing milestone gets a nudge at the right time.",
      },
      {
        title: "Buyer search organization",
        body: "Tell Muse your must-haves, nice-to-haves, and budget, and it will keep a running brief: your criteria, listings you've ruled out and why, and questions to ask at each showing.",
      },
      {
        title: "Open-house and showing prep",
        body: "Have Muse generate a showing checklist, a list of questions to ask the listing agent, or a one-page property brief you can review on the way there — even hands-free via voice mode.",
      },
    ],
    prompts: [
      {
        title: "Research a neighborhood",
        prompt:
          "Research the [neighborhood/zip code] real-estate market. Cover: median home price trend over the last 2 years, price per sq ft, average days on market, top 3 selling points for buyers, and 2 honest drawbacks. Present it as a client-ready brief.",
      },
      {
        title: "Compare listings",
        prompt:
          "Compare these listings for a buyer:\n[ paste listing 1 ]\n[ paste listing 2 ]\n[ paste listing 3 ]\n\nBuild a table: price, sq ft, $/sq ft, beds/baths, HOA/taxes, commute to [location], and standout pros/cons. End with which you'd tour first and why.",
      },
      {
        title: "Draft a listing description",
        prompt:
          "Write a [150]-word listing description for a [3-bed, 2-bath craftsman in Portland, OR] with [original hardwoods, updated kitchen, large fenced yard]. Tone: warm but professional. Highlight the lifestyle, not just the specs.",
      },
      {
        title: "Follow-up message draft",
        prompt:
          "Draft a friendly follow-up text to a buyer who toured [123 Main St] yesterday but hasn't responded. Reference [the kitchen renovation], ask if they have questions, and suggest [two showing times this weekend]. Keep it under 60 words.",
      },
    ],
    limitations: [
      "Muse can't pull live MLS data or access listing portals that require login — bring listing details to it by pasting or describing them.",
      "Market data goes stale fast; verify prices, rates, and availability against current sources before sharing with clients.",
      "Muse is an assistant, not a licensed agent — pricing advice, contracts, and negotiations remain your professional responsibility.",
      "Anything Muse sends or books on your behalf goes through an approval card — nothing is emailed or purchased without your sign-off.",
      "Currently available in the US and Canada only, with usage limits that may constrain very heavy research days.",
    ],
    faqs: [
      {
        question: "Can Muse AI find homes for sale?",
        answer:
          "Muse can browse public listing sites and summarize what it finds, but it can't access the MLS or agent-only portals. Use it to research and compare listings you bring to it, then verify details on the source sites.",
      },
      {
        question: "Can Muse write my listing descriptions?",
        answer:
          "Yes — give it the property details and your preferred tone, and it will draft polished copy you can approve and tweak. Many agents find it eliminates the blank-page problem entirely.",
      },
      {
        question: "How do agents use Muse for lead follow-up?",
        answer:
          "Muse drafts personalized follow-up messages from your notes and — more importantly — sets reminders tied to each lead, so inspection deadlines, check-ins, and closing milestones never slip.",
      },
      {
        question: "Can Muse estimate what my home is worth?",
        answer:
          "Muse can research comparable sales and market trends to inform your thinking, but it can't replace a professional CMA or appraisal. Treat its numbers as a starting point for your own analysis.",
      },
      {
        question: "Is Muse AI available outside the US?",
        answer:
          "Muse is currently available in the US and Canada only. Check the availability guide on this site for the latest status.",
      },
    ],
    relatedGuides: [
      "muse-ai-use-cases",
      "how-to-use-muse-ai",
      "muse-ai-prompt-tips",
      "muse-ai-review",
    ],
  },
  {
    slug: "travel",
    title: "Muse AI for Travel",
    metaTitle: "Muse AI for Travel: Trip Planning, Itineraries & Bookings",
    metaDescription:
      "Plan trips with Muse AI: build day-by-day itineraries, compare flights and hotels, get packing lists, and book with approval cards. Prompts and honest limits.",
    keywords:
      "Muse AI travel, Muse AI trip planning, Muse AI itinerary, Muse AI book flights, Muse AI travel assistant",
    shortAnswer:
      "Travelers use Muse AI as a trip planner: it researches destinations, builds day-by-day itineraries around your interests and budget, compares flights and hotels, and can help with bookings — every purchase goes through an approval card first. It's like a travel agent you text at any hour.",
    intro: [
      "Planning a trip used to mean forty open tabs. With Muse, you describe the trip you want — \"five days in Kyoto in October, mid-range budget, I love food and hate crowds\" — and it does the research, builds the itinerary, and presents everything for your approval before anything gets booked.",
      "What sets Muse apart from a search engine is follow-through: it can compare flight and hotel options, set reminders for booking windows and check-in times, and keep a running trip brief — reservations, confirmations, and daily plans in one place. You make the decisions; Muse does the legwork.",
    ],
    capabilities: [
      {
        title: "Day-by-day itineraries",
        body: "Give Muse your destination, dates, budget, and interests, and it will draft a realistic day-by-day plan — sights grouped by neighborhood, restaurant picks near your route, and downtime built in. Iterate until it fits your pace.",
      },
      {
        title: "Flight and hotel comparison",
        body: "Muse browses travel sites to compare flight times, layovers, and hotel options against your criteria, then presents a shortlist with trade-offs. You approve; it never books without your sign-off on an approval card.",
      },
      {
        title: "Restaurant and activity research",
        body: "Ask for the best ramen near your hotel, kid-friendly activities on a rainy day, or viewpoints worth the hike. Muse compiles options with hours, prices, and why each made the cut.",
      },
      {
        title: "Packing lists and prep checklists",
        body: "Muse generates packing lists tailored to your destination's weather, your activities, and trip length — plus pre-trip checklists covering visas, vaccinations, travel insurance, and document copies.",
      },
      {
        title: "Booking reminders and trip briefs",
        body: "Set reminders for fare-drop windows, hotel cancellation deadlines, and check-in times. Muse keeps a single trip brief with your itinerary, bookings, and confirmations so nothing lives in a buried email.",
      },
      {
        title: "On-the-trip help via voice",
        body: "Mid-trip, use voice mode hands-free: \"find a highly rated lunch spot within a ten-minute walk\" or \"how do I get to the museum from here by metro?\" Muse looks it up and answers on the spot.",
      },
    ],
    prompts: [
      {
        title: "Build my itinerary",
        prompt:
          "Plan a [5]-day trip to [Kyoto] in [October]. Budget: [mid-range, ~$200/day excluding flights]. I love [food and temples] and dislike [crowds and nightlife]. Build a day-by-day itinerary grouped by neighborhood, with 2-3 restaurant picks per day and one rest afternoon.",
      },
      {
        title: "Compare flight options",
        prompt:
          "Find flights from [SFO] to [Tokyo] for [Oct 10-17]. I prefer [one stop max, arriving before 6pm]. Compare the top 4 options by total travel time, price, and airline quality, and tell me which you'd pick.",
      },
      {
        title: "Packing list",
        prompt:
          "Make me a packing list for [10 days in Iceland in November]: hiking, hot springs, and city dinners. Organize by category, flag what I should buy vs. rent, and note anything first-timers forget.",
      },
      {
        title: "Restaurant research",
        prompt:
          "Find 5 highly rated dinner spots within a 15-minute walk of [hotel name/address in Rome]. Mix of price points, at least two with vegetarian options. Include cuisine, price range, and whether reservations are needed.",
      },
    ],
    limitations: [
      "Flight and hotel prices change constantly — always verify the final price on the booking site before approving a purchase.",
      "Every booking requires your explicit approval on an approval card; Muse will never charge you silently, so expect to review each step.",
      "Muse can't access airline or hotel loyalty accounts unless you share details — have confirmation numbers and account info ready.",
      "Travel advice is general, not professional: verify visa, health, and safety requirements with official government sources.",
      "Currently available in the US and Canada only, and usage limits apply during heavy planning sessions.",
    ],
    faqs: [
      {
        question: "Can Muse AI book flights and hotels?",
        answer:
          "Muse can research options and help with bookings, but every purchase requires your explicit approval on an approval card — it presents the choice, you confirm, then it proceeds. Nothing is ever booked without your sign-off.",
      },
      {
        question: "Is Muse better than Google for trip planning?",
        answer:
          "For different things: Google finds pages, Muse does the work — comparing options, building a coherent itinerary, and keeping your trip brief organized. Many travelers use both: Muse for planning, search for verification.",
      },
      {
        question: "Can Muse plan a trip on a tight budget?",
        answer:
          "Yes — give it a daily budget and it will prioritize free activities, affordable neighborhoods, and value stays. Be specific about what \"budget\" means to you so its picks actually fit.",
      },
      {
        question: "Does Muse know about travel restrictions and visas?",
        answer:
          "It can research current entry requirements, but rules change quickly. Always confirm visa, passport, and health requirements with official government sources before you travel.",
      },
      {
        question: "Can Muse help during the trip, not just before?",
        answer:
          "Yes — voice mode makes it useful on the go for finding restaurants, transit directions, and translating practical phrases. It needs connectivity, so download offline maps as backup.",
      },
    ],
    relatedGuides: [
      "muse-ai-use-cases",
      "muse-ai-shopping",
      "how-to-use-muse-ai",
      "muse-ai-voice-mode",
    ],
  },
  {
    slug: "email",
    title: "Muse AI for Email",
    metaTitle: "Muse AI for Email: Drafting, Follow-Ups & Inbox Triage",
    metaDescription:
      "Use Muse AI for email: draft replies from bullet points, write follow-ups, summarize threads you share, and set reminders so nothing slips. Honest limits included.",
    keywords:
      "Muse AI email, Muse AI draft email, Muse AI email assistant, Muse AI follow up email, Muse AI inbox",
    shortAnswer:
      "Muse AI helps with email by drafting replies from your bullet points, writing follow-up sequences, summarizing long threads you paste or forward in, and setting reminders so you never miss a reply. Anything it sends goes through an approval card — you review every word before it goes out.",
    intro: [
      "Email is where good intentions go to die: the draft you never finished, the follow-up you forgot, the thread too long to re-read. Muse acts as your email copilot — you stay the author, it handles the heavy lifting of drafting, summarizing, and remembering.",
      "The workflow is simple: tell Muse what you want to say, approve the draft on the approval card, and set a reminder if you're waiting on a reply. For threads, paste or forward the conversation in and ask for the key points and what needs your decision. Your inbox gets calmer without you surrendering control of a single send.",
    ],
    capabilities: [
      {
        title: "Draft replies from bullet points",
        body: "Give Muse three rough bullets and the tone you want — warm, firm, apologetic — and it returns a polished draft. You review it on the approval card before anything is sent. It writes like you on a good day.",
      },
      {
        title: "Summarize long threads",
        body: "Paste or forward a sprawling thread and ask: \"what's decided, what's pending, and what needs me?\" Muse returns the essentials so you can reply in minutes instead of re-reading forty messages.",
      },
      {
        title: "Follow-up sequences and reminders",
        body: "Muse drafts polite follow-ups and — the real win — sets reminders tied to each one: \"nudge me Thursday if Priya hasn't replied.\" No more mentally tracking who owes you what.",
      },
      {
        title: "Difficult emails, handled carefully",
        body: "Delicate situations — declining an offer, chasing a late payment, giving tough feedback — get easier with a draft to react to. Muse proposes phrasing; you decide what actually sounds like you.",
      },
      {
        title: "Templates for recurring mail",
        body: "Have Muse turn your best-performing emails into reusable templates: introductions, meeting requests, proposals, thank-yous. Your future self will thank you.",
      },
      {
        title: "Inbox triage plans",
        body: "Describe your inbox chaos and Muse will propose a triage system — labels, rules, and a daily routine — then remind you to run it until it becomes habit.",
      },
    ],
    prompts: [
      {
        title: "Draft a reply",
        prompt:
          "Draft a reply to this email:\n[ paste email ]\n\nMy points: [1. thanks for the proposal, 2. budget is 20% lower than quoted, 3. ask if they can meet us halfway by Friday]. Tone: professional but warm. Keep it under 150 words.",
      },
      {
        title: "Summarize a thread",
        prompt:
          "Summarize this email thread:\n[ paste thread ]\n\nGive me: decisions made, open questions, action items with owners, and the one thing that needs my reply today.",
      },
      {
        title: "Polite follow-up",
        prompt:
          "Write a polite follow-up to [name] about [the invoice sent on March 3]. It's been [10 days] with no reply. Firm but friendly, one clear call to action, under 80 words. Then remind me in 4 days if I haven't marked it done.",
      },
      {
        title: "Decline gracefully",
        prompt:
          "Help me decline [the speaking invitation] gracefully. I want to say no to this one but keep the door open for next year. Warm tone, 3-4 sentences, no over-explaining.",
      },
    ],
    limitations: [
      "Muse drafts — you send. Every email goes through an approval card, so review each draft; tone and facts are your responsibility.",
      "Muse can't reach into your mailbox on its own — share threads by pasting or forwarding them in, and don't share sensitive credentials.",
      "Automated or bulk emailing is not what Muse is for; keep outreach personal and within your provider's sending limits.",
      "Legal, HR, and contractual emails deserve a human expert's review — Muse's draft is a starting point, not advice.",
      "Available in the US and Canada only, with usage limits that may affect very high-volume drafting days.",
    ],
    faqs: [
      {
        question: "Can Muse AI read my Gmail?",
        answer:
          "Muse doesn't browse your inbox by itself — you share what you want help with by pasting or forwarding threads in. It then drafts, summarizes, and sets reminders around them. Never share passwords or sensitive credentials.",
      },
      {
        question: "Will Muse send emails without asking me?",
        answer:
          "No. Anything Muse sends or prepares for sending goes through an approval card — you review the exact text and confirm before it goes anywhere.",
      },
      {
        question: "Can Muse help me reach inbox zero?",
        answer:
          "It helps with the two hardest parts: clearing backlogs fast via summaries and drafts, and preventing new pile-ups with follow-up reminders. The triage system it designs only works if you run it daily.",
      },
      {
        question: "Does Muse write in my voice?",
        answer:
          "Give it a sample of your writing or describe your tone, and its drafts get noticeably closer to how you sound. You'll still want to edit — think of it as a strong first draft, not a ghostwriter.",
      },
      {
        question: "Can Muse write cold outreach emails?",
        answer:
          "It can draft personalized outreach from your notes, but keep it genuine and low-volume. Mass automated outreach risks spam filters and your sender reputation — Muse is built for thoughtful one-to-one email.",
      },
    ],
    relatedGuides: [
      "muse-ai-tutorial",
      "how-to-use-muse-ai",
      "muse-ai-prompt-tips",
      "is-muse-ai-free",
    ],
  },
  {
    slug: "instagram",
    title: "Muse AI for Instagram",
    metaTitle: "Muse AI for Instagram: Captions, Content Ideas & Hashtags",
    metaDescription:
      "Grow on Instagram with Muse AI: brainstorm content ideas, write captions and hooks, plan your content calendar, and set posting reminders. Prompts and limits.",
    keywords:
      "Muse AI Instagram, Muse AI captions, Muse AI content ideas, Muse AI hashtags, Muse AI social media",
    shortAnswer:
      "Creators use Muse AI to brainstorm content ideas, write captions and hooks, plan content calendars, and research trends — then set reminders to actually post consistently. It handles the strategy and writing; you handle the filming, photos, and authentic voice.",
    intro: [
      "Consistency beats virality on Instagram, and consistency is mostly planning: ideas banked, captions drafted, posts scheduled. Muse becomes your content strategist — brainstorming with you, drafting in your voice, and reminding you when it's time to post.",
      "The honest split: Muse is excellent at words and structure — hooks, captions, content pillars, hashtag research — and useless at the parts that make Instagram work, which are your photos, your videos, and your actual perspective. Use it to remove the blank-page problem, not to fake a personality.",
    ],
    capabilities: [
      {
        title: "Content ideas on demand",
        body: "Tell Muse your niche and audience, and it will brainstorm a month of ideas — reels concepts, carousel topics, story prompts — organized by content pillar. You'll never stare at a blank notes app again.",
      },
      {
        title: "Captions and hooks",
        body: "Muse drafts captions with strong opening hooks, line breaks that read well on mobile, and calls to action that fit your style. Give it your tone once and every draft lands closer to your voice.",
      },
      {
        title: "Hashtag and SEO research",
        body: "Muse browses the web to research relevant hashtags and keywords for your niche, then suggests mixes of broad and niche tags per post — no more copying the same 30 tags forever.",
      },
      {
        title: "Content calendars",
        body: "Have Muse build a weekly posting calendar around your capacity — what to post, when, and in which format — then set reminders so posting day never sneaks up on you.",
      },
      {
        title: "Repurpose across formats",
        body: "Turn one idea into five posts: Muse adapts a reel script into a carousel outline, a story sequence, and a caption. One filming session becomes a week of content.",
      },
      {
        title: "Engagement and DM drafts",
        body: "Muse drafts thoughtful comment replies, collaboration pitches, and brand outreach messages in your voice — you approve every word before it goes out.",
      },
    ],
    prompts: [
      {
        title: "30 days of content ideas",
        prompt:
          "I'm a [fitness coach for busy parents] on Instagram with [5k] followers. Give me 30 content ideas: 12 reels, 10 carousels, 8 stories. Organize by 3 content pillars, and mark each idea with the goal: reach, nurture, or convert.",
      },
      {
        title: "Write a caption",
        prompt:
          "Write an Instagram caption for [a reel showing my 5am morning routine]. Hook in the first line, short punchy lines, one question to drive comments, and a soft CTA to follow. Tone: [motivational but not cheesy].",
      },
      {
        title: "Hashtag set",
        prompt:
          "Suggest 15 hashtags for a post about [vegan meal prep for beginners]. Mix: 5 broad, 5 niche, 5 community tags. Briefly note why each tier matters.",
      },
      {
        title: "Repurpose one idea",
        prompt:
          "Take this idea: [why I stopped chasing follower count]. Turn it into: a 30-second reel script with hook, a 7-slide carousel outline, and 3 story frames with poll stickers.",
      },
    ],
    limitations: [
      "Muse can't post to Instagram for you or access your account — you publish everything yourself, which keeps your account safe.",
      "AI-sounding captions hurt more than they help; always edit drafts into your real voice before posting.",
      "Trend research goes stale quickly — verify trending audios and formats in the app itself before building content around them.",
      "Muse can't see your analytics unless you share them; paste your insights data in for genuinely useful strategy advice.",
      "Available in the US and Canada only, with usage limits on heavy brainstorming sessions.",
    ],
    faqs: [
      {
        question: "Can Muse AI post to Instagram automatically?",
        answer:
          "No — and that's good for your account's safety. Muse handles ideas, captions, calendars, and reminders; you do the posting. Automated posting tools risk violating Instagram's terms.",
      },
      {
        question: "Will captions written by Muse sound robotic?",
        answer:
          "They can, if you post them raw. Share examples of captions you like, describe your tone, and edit every draft — Muse gives you the structure, you supply the personality.",
      },
      {
        question: "Can Muse help me grow followers?",
        answer:
          "It helps with the inputs that drive growth: consistent ideas, strong hooks, good captions, and a posting rhythm enforced by reminders. But growth still comes from your content quality and genuine engagement.",
      },
      {
        question: "Does Muse know current Instagram trends?",
        answer:
          "It can research trends on the web, but Instagram moves fast — always cross-check trending formats and audios inside the app before committing a week of content to them.",
      },
      {
        question: "Can Muse write my bio and highlights?",
        answer:
          "Yes — give it what you do, who you serve, and your personality, and it will draft bio options and highlight titles. Your bio is high-stakes real estate, so pick the version that sounds most like you.",
      },
    ],
    relatedGuides: [
      "muse-ai-use-cases",
      "muse-ai-tutorial",
      "muse-ai-prompt-tips",
      "what-is-muse-ai",
    ],
  },
  {
    slug: "research",
    title: "Muse AI for Research",
    metaTitle: "Muse AI for Research: Web Research, Briefs & Source Digests",
    metaDescription:
      "Use Muse AI for research: delegate web research, get structured briefs with sources, compare options, and organize findings. Prompts, workflow tips, and limits.",
    keywords:
      "Muse AI research, Muse AI web research, Muse AI research assistant, Muse AI literature review, Muse AI market research",
    shortAnswer:
      "Muse AI works as a research assistant: you delegate a question, it browses the web, and returns a structured brief with sources you can verify. It's ideal for market research, competitive analysis, literature gathering, and any topic where you'd otherwise drown in tabs.",
    intro: [
      "Good research is 80% gathering and organizing, 20% insight — and Muse takes the 80%. You define the question and the shape of the answer you want; Muse searches the web, reads across sources, and hands back a structured brief with citations instead of a link dump.",
      "The key discipline is verification: Muse accelerates discovery, but every statistic, quote, and claim that matters should be checked against its source before you rely on it. Used that way — fast gathering, human judgment — it's the closest thing to having a junior analyst on call.",
    ],
    capabilities: [
      {
        title: "Structured research briefs",
        body: "Ask for a brief on any topic — market sizing, a technology explainer, a policy summary — with the sections you need. Muse browses current sources and organizes findings into something you can actually read and share.",
      },
      {
        title: "Competitive and market analysis",
        body: "Have Muse compare competitors, map pricing, or summarize industry trends from public sources. You get a comparison table with sources attached, ready for your own analysis on top.",
      },
      {
        title: "Literature and source gathering",
        body: "Muse finds papers, reports, and articles on your topic and summarizes each one's key argument. For academic work, it accelerates the discovery phase — you still read and cite the originals yourself.",
      },
      {
        title: "Fact-checking and verification passes",
        body: "Paste a draft and ask Muse to flag every claim that needs a source, then research each one. It's a rigorous second pair of eyes before you publish or present.",
      },
      {
        title: "Ongoing monitoring via reminders",
        body: "Set recurring research through reminders: a weekly brief on your industry, new papers in your field, or competitor announcements. Muse re-runs the research on schedule and summarizes what's new.",
      },
      {
        title: "Organize findings into artifacts",
        body: "Raw notes become structured documents: timelines, glossaries, annotated reading lists, decision memos. Muse turns a messy research pile into a reference you'll actually reuse.",
      },
    ],
    prompts: [
      {
        title: "Market research brief",
        prompt:
          "Research the [home EV charger] market in the US. Cover: market size and growth trend, top 5 players with market share estimates, typical price ranges, key buying criteria from reviews, and 3 emerging trends. Cite sources for every statistic.",
      },
      {
        title: "Competitor comparison",
        prompt:
          "Compare [Notion] vs [Obsidian] vs [Roam] for [academic note-taking]. Build a table: pricing, offline support, backlinks/graph features, mobile apps, and export options. End with who each tool is best for.",
      },
      {
        title: "Summarize sources",
        prompt:
          "Find 5 reputable sources on [the effects of a 4-day work week]. For each: one-paragraph summary of the key finding, the methodology in one line, and the source link. Then give me the 3 points of consensus across them.",
      },
      {
        title: "Verify my draft",
        prompt:
          "Read this draft and flag every factual claim that needs verification:\n[ paste draft ]\n\nFor each claim, say whether it's well-established, needs a source, or looks questionable — and research the questionable ones.",
      },
    ],
    limitations: [
      "Muse can misread sources or present uncertain claims confidently — verify every important fact against the original source before acting on it.",
      "It can't access paywalled journals, private databases, or subscription reports; bring excerpts to it or describe what you need.",
      "Research reflects what's published online, which carries bias and gaps — for novel or niche topics, sources may simply not exist yet.",
      "Very long research sessions may hit usage limits; break big projects into focused questions.",
      "Currently available in the US and Canada only.",
    ],
    faqs: [
      {
        question: "Can Muse AI replace Google Scholar or database research?",
        answer:
          "No — it complements them. Muse is fastest at the gathering and organizing phase across the open web, but for peer-reviewed literature you still need academic databases, and you should always read and cite originals yourself.",
      },
      {
        question: "How do I get reliable results from Muse research?",
        answer:
          "Be specific about what you want and demand sources: name the sections, ask for citations on every statistic, and request that uncertain claims be flagged. Then verify the important ones yourself.",
      },
      {
        question: "Can Muse monitor a topic over time?",
        answer:
          "Yes — set a reminder for a recurring research brief (weekly industry news, new papers, competitor moves). Muse re-runs the research on schedule and summarizes what's changed since last time.",
      },
      {
        question: "Does Muse cite its sources?",
        answer:
          "Ask it to, and it will reference the sources it browsed. Treat citations as leads to verify — open the source, confirm the claim, and cite the original in your own work.",
      },
      {
        question: "Can Muse analyze data I provide?",
        answer:
          "It can work with data you paste or describe — summarizing survey responses, spotting patterns in a table, or drafting charts' narratives. For heavy statistical analysis, use dedicated tools and let Muse help interpret results.",
      },
    ],
    relatedGuides: [
      "muse-ai-tutorial",
      "how-to-use-muse-ai",
      "muse-ai-vs-chatgpt-claude-meta-ai",
      "muse-ai-review",
    ],
  },
  {
    slug: "build-website",
    title: "Muse AI for Building a Website",
    metaTitle: "Muse AI for Building a Website: Planning, Copy & Launch Checklists",
    metaDescription:
      "Build a website with Muse AI: plan structure, draft copy, research platforms, compare builders, and manage the launch checklist. Prompts and honest limits.",
    keywords:
      "Muse AI website builder, Muse AI build website, Muse AI web design help, Muse AI site copy, Muse AI launch checklist",
    shortAnswer:
      "Muse AI helps you build a website by planning its structure, drafting all your page copy, researching and comparing platforms, and managing your launch checklist with reminders. On a Mac, its computer-use feature can even help operate design tools — always with your approval.",
    intro: [
      "A website project stalls in three places: deciding what goes on each page, writing the actual words, and remembering the hundred small launch tasks. Muse attacks all three. Describe your business or idea, and it drafts your site map, writes your copy, and keeps the launch checklist moving.",
      "Muse won't replace a designer or developer for complex builds — but for planning, copy, platform research, and project management, it's the cofounder who never sleeps. And when you need hands-on help in design tools on a Mac, computer use lets it operate apps directly under your supervision.",
    ],
    capabilities: [
      {
        title: "Site maps and page structure",
        body: "Describe your business and audience, and Muse drafts a full site map: pages, sections per page, and what each section must accomplish. You get a blueprint before anyone writes a word.",
      },
      {
        title: "Draft all your website copy",
        body: "Hero headlines, service descriptions, about pages, FAQs, calls to action — Muse drafts complete page copy in your brand voice. You approve and refine; the blank page is gone.",
      },
      {
        title: "Compare platforms and builders",
        body: "Ask Muse to research and compare WordPress, Webflow, Framer, Squarespace, or custom builds for your specific needs — cost, ease, SEO, scalability — with a recommendation and the trade-offs spelled out.",
      },
      {
        title: "SEO and content planning",
        body: "Muse researches keywords for your niche, drafts meta titles and descriptions, and plans a content calendar so your site can actually be found. Pair with reminders to keep publishing on schedule.",
      },
      {
        title: "Launch checklists and QA",
        body: "Have Muse build your go-live checklist — mobile testing, forms, analytics, legal pages, speed checks — and set reminders for each milestone so launch day isn't chaos.",
      },
      {
        title: "Mac computer use for design tools",
        body: "On a Mac, Muse's computer-use feature can help with hands-on tasks in design and admin tools — organizing assets, filling in CMS fields, or walking through multi-step setups — with every action approved by you.",
      },
    ],
    prompts: [
      {
        title: "Plan my site structure",
        prompt:
          "I'm building a website for [a boutique accounting firm targeting freelancers]. Draft a site map: pages needed, sections per page, the goal of each section, and the primary CTA. Keep it to what a 5-page site can actually support.",
      },
      {
        title: "Write my homepage copy",
        prompt:
          "Write homepage copy for [the accounting firm above]. Include: a hero headline + subheadline, 3 benefit sections with headlines, a how-it-works strip, 2 testimonial placeholders, and an FAQ of 5 questions. Tone: [trustworthy, jargon-free].",
      },
      {
        title: "Compare website platforms",
        prompt:
          "Compare [Webflow] vs [Framer] vs [WordPress] for [a 10-page marketing site I want to update myself, with a blog]. Cover: cost, learning curve, SEO control, and design flexibility. Recommend one and explain the trade-off.",
      },
      {
        title: "Launch checklist",
        prompt:
          "Build me a website launch checklist for [a small business site]: pre-launch QA, SEO basics, analytics setup, legal pages, and post-launch week tasks. Turn the dated items into reminders I can approve.",
      },
    ],
    limitations: [
      "Muse plans and writes — it doesn't deploy code or publish your site for you. The technical build still needs you, a builder platform, or a developer.",
      "Platform pricing and features change often; verify costs and capabilities on official sites before committing.",
      "AI-drafted copy needs your edit for voice and accuracy — never publish claims about your business you haven't verified.",
      "Mac computer use is early-access and best for guided assistance, not unsupervised work — keep approval cards on.",
      "Available in the US and Canada only, with usage limits on long working sessions.",
    ],
    faqs: [
      {
        question: "Can Muse AI actually build my website?",
        answer:
          "Muse handles the planning, copywriting, platform research, and launch management — the parts where most website projects stall. The actual building happens in a website builder or by a developer; Muse makes sure you arrive with everything ready.",
      },
      {
        question: "Which website platform should I choose?",
        answer:
          "Ask Muse to compare options against your specific needs — budget, technical comfort, and goals. There's no universal winner; the right choice depends on whether you value ease, control, or cost most.",
      },
      {
        question: "Can Muse write SEO content for my site?",
        answer:
          "Yes — it researches keywords, drafts meta titles and descriptions, and plans article topics. For competitive niches, pair its output with a proper SEO tool's data before you invest heavily.",
      },
      {
        question: "How long does a Muse-assisted website take?",
        answer:
          "Planning and copy — usually the slowest phases — can compress from weeks to days. The timeline then depends on your builder and how fast you approve drafts and complete the checklist.",
      },
      {
        question: "Can Muse redesign my existing site?",
        answer:
          "It can audit your current site's copy and structure, suggest improvements page by page, and draft the new versions. Share your URL or paste the current copy to start.",
      },
    ],
    relatedGuides: [
      "muse-ai-mac-computer-use",
      "muse-ai-tutorial",
      "muse-ai-prompt-tips",
      "how-to-use-muse-ai",
    ],
  },
  {
    slug: "find-jobs",
    title: "Muse AI for Finding Jobs",
    metaTitle: "Muse AI for Job Search: Resumes, Cover Letters & Interview Prep",
    metaDescription:
      "Find jobs with Muse AI: tailor resumes, draft cover letters, research companies, prep for interviews, and track applications with reminders. Prompts and limits.",
    keywords:
      "Muse AI job search, Muse AI resume, Muse AI cover letter, Muse AI interview prep, Muse AI find jobs",
    shortAnswer:
      "Job seekers use Muse AI to tailor resumes to each posting, draft cover letters, research companies before interviews, practice answering tough questions, and track every application with reminders. It keeps your search organized and your materials sharp — you bring the experience, it brings the polish.",
    intro: [
      "A job search is a project: dozens of applications, each needing a tailored resume, a custom cover letter, company research, and timely follow-ups. Muse manages the project with you — drafting materials from your experience, researching employers, and reminding you to follow up before opportunities cool.",
      "The rule that makes it work: Muse polishes and organizes, but the substance must be yours. Real achievements, real numbers, real stories from your career. Recruiters spot generic AI applications instantly; Muse's job is to make your genuine experience impossible to ignore.",
    ],
    capabilities: [
      {
        title: "Tailor your resume per posting",
        body: "Paste your resume and a job description, and Muse rewrites your bullets to mirror the posting's language — same achievements, sharper framing. Each application reads like it was written for that role, because it was.",
      },
      {
        title: "Draft cover letters that don't sound templated",
        body: "Give Muse the role, the company, and two genuine reasons you're excited, and it drafts a cover letter with a real point of view. You edit in your voice; the structure and polish come free.",
      },
      {
        title: "Research companies before interviews",
        body: "Muse browses the web to build a company brief: what they do, recent news, culture signals, interview formats others report, and smart questions to ask. You walk in prepared instead of winging it.",
      },
      {
        title: "Practice interviews out loud",
        body: "Have Muse role-play as the interviewer — behavioral questions, case prompts, or technical screens — and give you feedback on your answers. Voice mode makes it feel surprisingly real.",
      },
      {
        title: "Track applications with reminders",
        body: "Muse keeps your application tracker: where you applied, the stage, who you talked to — and sets follow-up reminders so no promising lead dies in silence.",
      },
      {
        title: "Negotiate offers",
        body: "Share the offer details and Muse researches market salary ranges, drafts a counter-proposal, and role-plays the negotiation conversation so you enter it calm and prepared.",
      },
    ],
    prompts: [
      {
        title: "Tailor my resume",
        prompt:
          "Here's my resume:\n[ paste resume ]\n\nAnd the job posting:\n[ paste posting ]\n\nRewrite my experience bullets to match the posting's keywords and priorities. Keep every achievement truthful — reframe, don't invent. Flag any requirements I'm clearly missing.",
      },
      {
        title: "Write a cover letter",
        prompt:
          "Write a cover letter for [Senior Product Designer at Figma]. My background: [5 years in fintech design, led a checkout redesign that lifted conversion 18%]. Two genuine reasons I'm excited: [their design systems work, the craft culture]. Under 300 words, confident tone.",
      },
      {
        title: "Company research brief",
        prompt:
          "Research [company name] for my interview for [role]. Cover: what the company does in one paragraph, 3 recent news items, culture signals from employee reviews, and 5 thoughtful questions I can ask the hiring manager.",
      },
      {
        title: "Mock interview",
        prompt:
          "Role-play as a hiring manager interviewing me for [Data Analyst at a startup]. Ask me one behavioral question at a time, wait for my answer, then give brief feedback and ask the next. Start with 'tell me about yourself.'",
      },
    ],
    limitations: [
      "Never let Muse invent experience, metrics, or credentials — fabricated resume claims can end your candidacy and your reputation. Reframe only what's true.",
      "Muse can't apply to jobs for you or access job boards requiring login; you submit every application yourself.",
      "Salary and company data go stale — verify compensation research against multiple current sources before negotiating.",
      "Interview advice is general, not a guarantee; every company's process differs, so treat prep as practice, not prediction.",
      "Available in the US and Canada only, with usage limits during intensive application sprints.",
    ],
    faqs: [
      {
        question: "Can Muse AI write my resume?",
        answer:
          "It can draft and tailor your resume from your real experience — restructuring bullets, matching keywords to postings, and tightening language. What it must never do is invent jobs, skills, or achievements you don't have.",
      },
      {
        question: "Do recruiters detect AI-written applications?",
        answer:
          "Generic, unedited AI text is easy to spot. The fix is editing every draft into your voice and grounding it in specific, true details from your career. Muse gives you the structure; authenticity is yours to add.",
      },
      {
        question: "Can Muse find job openings for me?",
        answer:
          "Muse can research which companies are hiring in your field and summarize postings it finds on the open web, but you'll still browse job boards yourself for the freshest listings. Its strength is what happens after you find the posting.",
      },
      {
        question: "How should I prep for interviews with Muse?",
        answer:
          "Use it in three passes: research the company, draft STAR stories from your experience, then mock-interview out loud with voice mode. Candidates who do all three walk in noticeably calmer.",
      },
      {
        question: "Can Muse help me negotiate salary?",
        answer:
          "Yes — it researches market ranges for your role and location, drafts counter-offer language, and role-plays the conversation. Verify salary data against multiple sources; ranges vary widely by market.",
      },
    ],
    relatedGuides: [
      "muse-ai-use-cases",
      "muse-ai-tutorial",
      "how-to-use-muse-ai",
      "muse-ai-prompt-tips",
    ],
  },
  {
    slug: "manage-gmail",
    title: "Muse AI for Managing Gmail",
    metaTitle: "Muse AI for Gmail: Triage, Drafts & Follow-Up Reminders",
    metaDescription:
      "Manage Gmail with Muse AI: summarize threads you share, draft replies for approval, build a triage system, and set follow-up reminders. Honest limits included.",
    keywords:
      "Muse AI Gmail, Muse AI manage Gmail, Muse AI inbox zero, Muse AI email triage, Muse AI Gmail assistant",
    shortAnswer:
      "Muse AI helps you manage Gmail by summarizing long threads you paste or forward in, drafting replies you approve before sending, designing an inbox triage system, and setting follow-up reminders. It never reads your inbox on its own or sends anything without your explicit approval.",
    intro: [
      "Gmail rewards the organized and punishes everyone else. Muse makes organization achievable: forward a thread for a summary, dictate bullet points for a reply draft, and let reminders handle the follow-ups you'd otherwise forget by Thursday.",
      "Be clear-eyed about the boundary: Muse is your drafting and organizing copilot, not an inbox autopilot. It can't log into your Gmail or act inside it — you bring threads to it, approve every draft on an approval card, and hit send yourself. That boundary is exactly what keeps your account and your reputation safe.",
    ],
    capabilities: [
      {
        title: "Thread summaries on demand",
        body: "Forward or paste a long Gmail thread and ask for the essentials: decisions, open items, and what needs your reply. Ten minutes of re-reading becomes thirty seconds of clarity.",
      },
      {
        title: "Reply drafts for approval",
        body: "Dictate your rough points and the tone you want; Muse returns a polished draft. You review it word-for-word on the approval card — nothing is ever sent without your explicit confirmation.",
      },
      {
        title: "A triage system that sticks",
        body: "Describe your inbox and Muse designs a Gmail-native system: labels, filters, and a daily triage routine. Then it reminds you to run the routine until inbox zero stops being aspirational.",
      },
      {
        title: "Follow-up reminders per thread",
        body: "Waiting on someone? Tell Muse the thread and the deadline: \"remind me Friday if the contractor hasn't confirmed.\" Each reminder is tied to the actual conversation, so nothing slips.",
      },
      {
        title: "Template your frequent replies",
        body: "Muse turns your best replies into Gmail-ready templates — meeting scheduling, introductions, status updates, polite declines. Save them as Gmail templates or canned snippets for one-click reuse.",
      },
      {
        title: "Unsubscribe and cleanup plans",
        body: "Ask Muse for a ruthless cleanup plan: which senders to unsubscribe, which to filter to a \"read later\" label, and a 20-minute weekly routine to keep the inbox lean.",
      },
    ],
    prompts: [
      {
        title: "Summarize a Gmail thread",
        prompt:
          "Summarize this Gmail thread:\n[ paste thread ]\n\nI need: the current status in 2 sentences, decisions made, who's waiting on whom, and the single most urgent thing I should do today.",
      },
      {
        title: "Draft a Gmail reply",
        prompt:
          "Draft a Gmail reply to:\n[ paste email ]\n\nMy points: [confirming Tuesday 2pm works, asking for the agenda in advance, offering to bring the Q3 numbers]. Tone: [friendly, concise]. Subject line included.",
      },
      {
        title: "Design my triage system",
        prompt:
          "I get ~[80] emails a day: [client work, newsletters, school emails, receipts]. Design a Gmail label + filter system and a 15-minute daily triage routine. Keep it to 5 labels max — simple enough that I'll actually use it.",
      },
      {
        title: "Follow-up with reminder",
        prompt:
          "Draft a nudge to [name] about [the contract I sent last Monday]. Polite, one clear question, under 60 words. Then set a reminder: if I haven't marked this done in 5 days, remind me again.",
      },
    ],
    limitations: [
      "Muse cannot log into your Gmail or read your inbox independently — you share threads by pasting or forwarding, and you send every email yourself.",
      "Every draft requires your review on an approval card; check tone, names, and facts before sending, especially for sensitive mail.",
      "Never share your Google password or 2FA codes with Muse or anyone else — legitimate tools never ask for them.",
      "Bulk or automated sending is out of scope; Muse is for thoughtful one-to-one email, not campaigns.",
      "Available in the US and Canada only, with usage limits on heavy drafting days.",
    ],
    faqs: [
      {
        question: "Does Muse AI connect directly to my Gmail account?",
        answer:
          "No. Muse doesn't log into your Gmail or browse your inbox. You paste or forward the threads you want help with, and Muse drafts, summarizes, and sets reminders around them. You remain the only one who can send.",
      },
      {
        question: "Can Muse achieve inbox zero for me?",
        answer:
          "It accelerates the two hardest parts — clearing backlogs with summaries and drafts, and preventing pile-ups with follow-up reminders. But the daily triage habit is still yours; Muse designs the system and nudges you to run it.",
      },
      {
        question: "Is it safe to paste emails into Muse?",
        answer:
          "Avoid pasting highly sensitive content like passwords, financial account numbers, or confidential legal matters. For everyday work email, summarize or redact the most sensitive lines first.",
      },
      {
        question: "Can Muse write emails in my style?",
        answer:
          "Share a sample of your writing or describe your tone, and drafts will land much closer to your voice. Edit every draft before sending — think strong first draft, not finished product.",
      },
      {
        question: "What's the difference between the email and Gmail pages?",
        answer:
          "They cover the same core skills — drafting, summarizing, follow-ups — but this page is Gmail-specific: labels, filters, templates, and triage routines built for how Gmail actually works.",
      },
    ],
    relatedGuides: [
      "muse-ai-tutorial",
      "how-to-use-muse-ai",
      "muse-ai-privacy",
      "muse-ai-prompt-tips",
    ],
  },
];
