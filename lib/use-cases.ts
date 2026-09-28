/**
 * Use-case directory data for /use-cases.
 *
 * Every entry must describe a real, verified Muse AI capability — delegation
 * with approvals, web browsing, shopping/bookings, research & artifacts,
 * reminders/goals, voice mode, Mac computer use, and account connectors.
 * Availability is US & Canada only; no VPN content; English only.
 * No invented stats or testimonials.
 */

export const PERSONAS = [
  "Students",
  "Shoppers",
  "Travelers",
  "Developers",
  "Creators",
  "Professionals",
  "Families",
] as const;

export type Persona = (typeof PERSONAS)[number];

export interface UseCase {
  title: string;
  persona: Persona;
  /** 2–3 concrete sentences grounded in real Muse abilities. */
  description: string;
  /** Short sample prompt the reader can try verbatim. */
  tryPrompt: string;
  /** Most relevant guide (linked as /guides/<slug>). */
  guideSlug: string;
  /** Matching /for/<slug> intent page when one genuinely applies. */
  intentSlug?: string;
}

export const USE_CASES: UseCase[] = [
  // ---------------------------------------------------------------- Students
  {
    title: "Turn dense chapters into study notes",
    persona: "Students",
    description:
      "Paste in a chapter or lecture transcript and Muse distills it into structured notes with headings, key terms, and a one-paragraph recap. Because it can browse, it can also check whether a fact in your notes is still current. Ask it to reformat the same notes as flashcards when you switch to revision mode.",
    tryPrompt:
      "Turn these biology notes into a one-page revision sheet with key terms bolded",
    guideSlug: "muse-ai-prompt-tips",
    intentSlug: "students",
  },
  {
    title: "Explain hard concepts in plain language",
    persona: "Students",
    description:
      "Ask Muse to unpack a concept you don't understand — it re-explains using analogies, worked examples, and step-by-step breakdowns at your level. You can keep asking follow-ups until it clicks, which makes it closer to a patient tutor than a search result. Use voice mode to quiz yourself out loud while walking between classes.",
    tryPrompt:
      "Explain marginal utility like I'm a first-year economics student, with two everyday examples",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "students",
  },
  {
    title: "Build self-tests from your own material",
    persona: "Students",
    description:
      "Feed Muse your study notes and have it generate practice questions with an answer key it keeps hidden until you answer. It can grade your responses and point out exactly which sections to revisit. Set a goal and Muse will remind you to run the drill each evening.",
    tryPrompt:
      "Make me a 10-question quiz from these history notes and grade my answers",
    guideSlug: "muse-ai-prompt-tips",
    intentSlug: "students",
  },
  {
    title: "Draft and tighten essays with feedback",
    persona: "Students",
    description:
      "Muse helps you outline an essay, argue through a thesis, and revise drafts for clarity — showing its reasoning so you can learn the structure, not just copy the output. It flags weak transitions and unsupported claims rather than rewriting everything for you. Keep your work honest: use it as an editor, not a ghostwriter.",
    tryPrompt:
      "Critique this essay outline — where is my argument weakest?",
    guideSlug: "muse-ai-use-cases",
  },
  {
    title: "Research papers with sources you can check",
    persona: "Students",
    description:
      "Muse can browse the web to research a paper topic and summarize findings with links you can verify in the library. Ask for counter-arguments to strengthen your thesis, and have it build a reading list ordered by relevance. You stay in control of every claim — nothing ships without your review.",
    tryPrompt:
      "Research the causes of the 2008 financial crisis and give me five sources with brief summaries",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "research",
  },

  // ---------------------------------------------------------------- Shoppers
  {
    title: "Compare products before you buy",
    persona: "Shoppers",
    description:
      "Give Muse two or three products and it compares specs, prices, and review sentiment side by side so the differences are obvious. It can browse current listings to check what's actually in stock right now. You make the final call — Muse just organizes the evidence.",
    tryPrompt:
      "Compare these three robot vacuums under $400 on battery life, noise, and pet-hair reviews",
    guideSlug: "muse-ai-shopping",
    intentSlug: "shopping-deals",
  },
  {
    title: "Hunt down deals and price drops",
    persona: "Shoppers",
    description:
      "Ask Muse to research the typical price range for something you're buying so you know whether a 'deal' is real. It can compare retailers and factor in shipping, taxes, and coupon stacking. Set a reminder and Muse will nudge you to re-check prices before a big sale weekend.",
    tryPrompt:
      "Is $649 a good price for this TV, and which retailer has the best total price with shipping?",
    guideSlug: "muse-ai-shopping",
    intentSlug: "shopping-deals",
  },
  {
    title: "Gift ideas matched to a person and budget",
    persona: "Shoppers",
    description:
      "Describe who you're buying for and what they like, and Muse suggests gift ideas across your budget with links you can verify. It can brainstorm themes — experience gifts, hobby starters, upgrades to things they already own. Approve anything it finds before it goes on a list you share.",
    tryPrompt:
      "Gift ideas under $50 for my dad who just started gardening",
    guideSlug: "muse-ai-shopping",
    intentSlug: "shopping-deals",
  },
  {
    title: "Draft refund and return requests",
    persona: "Shoppers",
    description:
      "Muse writes clear, polite return and refund requests that state the facts — order details, what went wrong, and what resolution you want. It can adapt the tone for a chatbot form, an email, or a phone-call script. You review every word before it goes anywhere.",
    tryPrompt:
      "Write a polite email asking for a refund on a jacket that arrived with a broken zipper",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "email",
  },
  {
    title: "Build a big-purchase checklist",
    persona: "Shoppers",
    description:
      "Buying a laptop, mattress, or appliance? Muse builds a checklist of the specs that actually matter for your use case, then scores each option against it. It surfaces the trade-offs — battery vs. performance, price vs. warranty — so you buy with intent, and you can share the comparison as an artifact for group decisions.",
    tryPrompt:
      "Help me choose a laptop for video editing under $1,200 — what specs should I prioritize?",
    guideSlug: "muse-ai-shopping",
  },

  // --------------------------------------------------------------- Travelers
  {
    title: "Plan a day-by-day trip itinerary",
    persona: "Travelers",
    description:
      "Tell Muse your destination, dates, budget, and pace, and it drafts a day-by-day itinerary with neighborhoods, sights, and food stops. It can browse for current opening hours and seasonal events so the plan reflects reality. Approve each day before it becomes your plan — it adjusts instantly when you change your mind.",
    tryPrompt:
      "Plan a 4-day food-focused trip to Chicago in October, mid-range budget, no car",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "trip-planning",
  },
  {
    title: "Research flights and stays side by side",
    persona: "Travelers",
    description:
      "Muse can browse travel listings to compare flight times, layovers, and hotel options against your priorities — location, price, reviews, cancellation policy. It lays out the trade-offs in a table so the decision takes minutes. You book through the real site; Muse just does the homework.",
    tryPrompt:
      "Find 3 well-reviewed hotels near downtown Austin under $200 a night for March 12–15",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "travel",
  },
  {
    title: "Packing lists that fit the trip",
    persona: "Travelers",
    description:
      "Muse builds a packing list from your itinerary, the season's weather, and your activities — business dinners, hiking, beach days — so nothing essential is forgotten and nothing useless gets packed. Ask it to trim the list to carry-on only and it will prioritize ruthlessly.",
    tryPrompt:
      "Packing list for a 5-day work trip to Seattle in November, carry-on only",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "trip-planning",
  },
  {
    title: "Navigate a city like a local",
    persona: "Travelers",
    description:
      "Ask Muse for neighborhood guides, restaurant picks by cuisine, and how to get around — with current info it browses for you. It can draft polite phrases for the local language and build a cheat sheet you keep on your phone. Use voice mode hands-free while you're walking between stops.",
    tryPrompt:
      "Best taco spots near the Mission in San Francisco and how to get there by transit",
    guideSlug: "muse-ai-voice-mode",
    intentSlug: "travel",
  },

  // -------------------------------------------------------------- Developers
  {
    title: "Debug errors with explanations, not just fixes",
    persona: "Developers",
    description:
      "Paste a stack trace and Muse explains what actually went wrong, then proposes a fix with the reasoning spelled out. It can walk through your code line by line when the bug is subtle. On a Mac, it can use computer use to reproduce steps in your tools — with your approval at each action.",
    tryPrompt:
      "This Python error keeps appearing — explain the cause and show the fix",
    guideSlug: "muse-ai-prompt-tips",
    intentSlug: "developers",
  },
  {
    title: "Scaffold a website from a description",
    persona: "Developers",
    description:
      "Describe the site you want and Muse generates working starter code — structure, styling, and interactivity — as an artifact you can iterate on in the chat. It explains the architecture as it builds so you understand what you're shipping. You review and approve every change before it lands in your repo.",
    tryPrompt:
      "Build a responsive landing page for a coffee shop with a menu section and contact form",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "build-website",
  },
  {
    title: "Review and refactor existing code",
    persona: "Developers",
    description:
      "Hand Muse a function or module and ask for a review: it flags bugs, security smells, and readability issues with concrete suggestions. It can refactor for clarity while preserving behavior, explaining each change. Treat its output like a sharp junior reviewer — verify, don't blindly merge.",
    tryPrompt:
      "Review this API route for bugs and suggest a cleaner structure",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "developers",
  },
  {
    title: "Learn a new API or framework fast",
    persona: "Developers",
    description:
      "Muse turns documentation into a guided tutorial: concepts first, then minimal working examples, then exercises. It can browse the latest docs so the code matches the current version, not a stale tutorial. Ask it to quiz you on each section before moving on.",
    tryPrompt:
      "Teach me the basics of this API with three small working examples",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "developers",
  },

  // ---------------------------------------------------------------- Creators
  {
    title: "Plan a week of content in one sitting",
    persona: "Creators",
    description:
      "Give Muse your niche and platforms, and it drafts a weekly content calendar with topics, hooks, and formats. Set it as a goal and Muse reminds you when it's time to film, write, or post. You approve every idea — it never publishes anything on its own.",
    tryPrompt:
      "Make a 7-day content plan for a home-cooking TikTok account, 3 posts a day",
    guideSlug: "muse-ai-prompt-tips",
    intentSlug: "content-creators",
  },
  {
    title: "Write Instagram captions and hooks",
    persona: "Creators",
    description:
      "Muse drafts captions, first-line hooks, and hashtag sets tuned to your voice — show it three of your best posts and it matches the tone. It brainstorms Reels ideas around trending formats without copying anyone. Keep the drafts human: rewrite the lines that don't sound like you.",
    tryPrompt:
      "Write 5 Instagram captions for a sunrise hike photo, adventurous tone",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "instagram",
  },
  {
    title: "Outline scripts before you record",
    persona: "Creators",
    description:
      "Muse turns a rough idea into a tight script outline — cold open, beats, and call to action — sized to your runtime. It can research facts and stats to back your points, with sources you can verify. Voice mode is handy for talking through a draft out loud and hearing what drags.",
    tryPrompt:
      "Outline a 6-minute video script: why meal prepping saves money",
    guideSlug: "muse-ai-voice-mode",
    intentSlug: "content-creators",
  },
  {
    title: "Repurpose one post into many formats",
    persona: "Creators",
    description:
      "Turn a single blog post or video into a thread, a newsletter section, short-form scripts, and carousel copy — each adapted to its format, not just chopped up. Muse keeps your core message consistent across all of them. You review each version before it goes live.",
    tryPrompt:
      "Turn this blog post into a 5-post X thread and a newsletter blurb",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "marketers",
  },

  // ------------------------------------------------------------ Professionals
  {
    title: "Triage your inbox and draft replies",
    persona: "Professionals",
    description:
      "Connect Gmail and Muse can summarize threads, draft replies in your voice, and flag the messages that actually need you. It can pull action items out of long chains so nothing slips. Every draft waits for your approval — nothing is sent without you.",
    tryPrompt:
      "Summarize my unread emails from today and draft replies for the urgent ones",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "manage-gmail",
  },
  {
    title: "Prep for meetings in minutes",
    persona: "Professionals",
    description:
      "Give Muse the agenda and it briefs you: background on the topic, likely questions, and talking points. Afterward, feed it your notes and it produces clean follow-ups with owners and deadlines. Set a reminder and it nudges you to send the recap before you forget.",
    tryPrompt:
      "Brief me for tomorrow's vendor negotiation — key points and likely objections",
    guideSlug: "muse-ai-use-cases",
  },
  {
    title: "Rehearse for interviews with feedback",
    persona: "Professionals",
    description:
      "Muse runs mock interviews for the role you're targeting — technical rounds, behavioral questions, and the tricky 'tell me about yourself.' It scores your answers and shows you stronger versions. Do it in voice mode for the full pressure simulation.",
    tryPrompt:
      "Mock-interview me for a product manager role and critique my answers",
    guideSlug: "muse-ai-prompt-tips",
    intentSlug: "interview-prep",
  },
  {
    title: "Research roles and tailor applications",
    persona: "Professionals",
    description:
      "Muse browses current job listings to map what employers actually ask for in your field, then helps you tailor your resume bullets and cover letters to each role. It can draft outreach messages to hiring managers that don't sound like templates. You approve every application it touches.",
    tryPrompt:
      "Find what skills data analyst postings ask for most and help me match my resume",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "find-jobs",
  },
  {
    title: "Run your day with plans and reminders",
    persona: "Professionals",
    description:
      "Start the morning with a prioritized plan built from your calendar and to-dos — Muse breaks big tasks into steps you can actually start. Set goals and it checks in, keeping the gentle pressure on. It works best when you're honest about what you keep postponing.",
    tryPrompt:
      "Plan my workday around these 4 tasks and remind me at 3pm about the report",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "daily-planning",
  },

  // ----------------------------------------------------------------- Families
  {
    title: "Plan a week of family meals",
    persona: "Families",
    description:
      "Tell Muse your household's tastes, dietary needs, and budget, and it builds a week of dinners with a consolidated grocery list. It can adapt recipes to picky eaters and scale portions to your family. Save the plan and iterate weekly — it remembers what everyone actually ate.",
    tryPrompt:
      "Plan 5 weeknight dinners for a family of 4, one vegetarian, under $80 total",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "meal-planning",
  },
  {
    title: "Build a realistic family fitness routine",
    persona: "Families",
    description:
      "Muse designs workout plans around your actual schedule and equipment — no gym required. It adjusts for beginners, injuries, and busy weeks, and explains the form cues that prevent injury. Set it as a goal and it checks in to keep the habit alive.",
    tryPrompt:
      "Make a 3-day-a-week home workout plan for two beginners with no equipment",
    guideSlug: "how-to-use-muse-ai",
    intentSlug: "fitness",
  },
  {
    title: "Homework help that teaches, not answers",
    persona: "Families",
    description:
      "Muse walks kids through homework step by step — asking guiding questions instead of handing over answers, so the learning sticks. It adapts explanations to the child's grade level and celebrates the small wins. Parents can review the session summary to see where the gaps are.",
    tryPrompt:
      "Help my 5th grader understand fractions using pizza slices, don't just give answers",
    guideSlug: "muse-ai-use-cases",
  },
  {
    title: "Plan the family vacation without the stress",
    persona: "Families",
    description:
      "Muse balances everyone's wishes — kid-friendly stops, rest time for grandparents, a budget that holds. It drafts the itinerary, compares lodging options, and builds the packing lists per person. Every decision comes back to you for approval, so the trip feels like yours.",
    tryPrompt:
      "Plan a 5-day family trip to San Diego for 2 adults and 3 kids, $3,000 budget",
    guideSlug: "muse-ai-use-cases",
    intentSlug: "trip-planning",
  },
];

/** Persona → use cases, preserving PERSONAS order. */
export function useCasesByPersona(): { persona: Persona; cases: UseCase[] }[] {
  return PERSONAS.map((persona) => ({
    persona,
    cases: USE_CASES.filter((u) => u.persona === persona),
  }));
}
