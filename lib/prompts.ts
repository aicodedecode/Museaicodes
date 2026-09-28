export interface PromptCard {
  category:
    | "Build"
    | "Research"
    | "Create"
    | "Decide"
    | "Shop"
    | "Plan"
    | "Learn"
    | "Automate";
  title: string;
  prompt: string;
}

export const PROMPTS: PromptCard[] = [
  // ---------- Build ----------
  {
    category: "Build",
    title: "Scope a web product",
    prompt:
      "Turn [idea] into a build brief. Define the user, core job, must-have flows, content, edge cases, launch version, and what to leave out.",
  },
  {
    category: "Build",
    title: "Automate a recurring task",
    prompt:
      "Design a safe workflow for [task]. Define the trigger, inputs, steps, checks, failure handling, approval points, and useful output.",
  },
  {
    category: "Build",
    title: "Design a landing page",
    prompt:
      "Plan the copy and layout for a landing page for [product]. Write the hero headline, three proof points, an FAQ, and one clear call to action.",
  },
  {
    category: "Build",
    title: "Ship a small web tool",
    prompt:
      "Plan a single-purpose web tool that [does X] for [audience]. Define the inputs, outputs, edge cases, and the minimum viable version worth shipping.",
  },
  {
    category: "Build",
    title: "Write a technical brief",
    prompt:
      "Turn [technical concept] into a plain-language brief for [audience]: what it is, why it matters, how it works, and what to watch out for.",
  },

  // ---------- Research ----------
  {
    category: "Research",
    title: "Map a new market",
    prompt:
      "Research [market] for [audience]. Separate verified facts from assumptions, find current signals, and finish with opportunities and risks.",
  },
  {
    category: "Research",
    title: "Turn sources into insight",
    prompt:
      "Read [the pasted materials] and produce a decision brief: key claims, strongest evidence, contradictions, unknowns, and five questions worth pursuing.",
  },
  {
    category: "Research",
    title: "Verify a claim",
    prompt:
      "Investigate the claim that [claim]. Find primary sources, note what is confirmed vs unconfirmed, and give me a confidence verdict with reasons.",
  },
  {
    category: "Research",
    title: "Brief me on a topic",
    prompt:
      "Give me a briefing on [topic]: the current state, the key players, the strongest recent evidence, and where the debate is heading.",
  },
  {
    category: "Research",
    title: "Compare competitors",
    prompt:
      "Compare [competitors] for [use case]. Score them on [criteria], cite where each fact comes from, and name the single biggest open question.",
  },

  // ---------- Create ----------
  {
    category: "Create",
    title: "Build a content system",
    prompt:
      "Create a 30-day content system for [topic]. Give me recurring formats, hooks, a weekly rhythm, production steps, and success measures.",
  },
  {
    category: "Create",
    title: "Write a professional email",
    prompt:
      "Write a [tone] email about [subject] to [recipient]. Keep it under [length], make the ask unmistakable, and end with the exact next step.",
  },
  {
    category: "Create",
    title: "Draft social posts",
    prompt:
      "Write [number] social posts about [topic] in a [voice] voice. Each needs a hook in the first line and a clear reason to engage.",
  },
  {
    category: "Create",
    title: "Turn an experience into a story",
    prompt:
      "Turn [event or experience] into a [length] story for [audience]: a cold open, the tension, what changed, and the lesson worth keeping.",
  },
  {
    category: "Create",
    title: "Write a plain-language explainer",
    prompt:
      "Explain [complex topic] to [audience] in plain language: a one-line summary, the three ideas that matter, and one common misconception to avoid.",
  },

  // ---------- Decide ----------
  {
    category: "Decide",
    title: "Pressure-test a choice",
    prompt:
      "Help me decide between [A] and [B]. Ask for missing constraints, compare trade-offs, name hidden costs, and recommend a reversible next step.",
  },
  {
    category: "Decide",
    title: "Pick the right tool",
    prompt:
      "Help me choose between [A], [B], and [C] for [goal]. Compare them against my constraints ([constraints]) and recommend one with a reason I could defend.",
  },
  {
    category: "Decide",
    title: "Weigh the honest pros and cons",
    prompt:
      "Give me the honest pros and cons of [decision]. Include the costs people usually forget and what a skeptical outsider would ask.",
  },
  {
    category: "Decide",
    title: "Decide by testing first",
    prompt:
      "For [decision], tell me what is reversible and what is not, the cheapest test I can run this week, and a clear decision deadline.",
  },
  {
    category: "Decide",
    title: "Review a purchase decision",
    prompt:
      "I am considering buying [item] at [price]. Tell me when it is worth it, when it isn't, the cheaper alternatives, and the questions to ask before paying.",
  },

  // ---------- Shop ----------
  {
    category: "Shop",
    title: "Find the best deal",
    prompt:
      "Help me buy [product] with these requirements: [requirements], budget up to [budget]. Compare [number] real options with price, the catch, and who each suits best.",
  },
  {
    category: "Shop",
    title: "Plan the grocery run",
    prompt:
      "Build a one-week meal plan for [number] people with [dietary constraints], then turn it into a grocery list grouped by store section.",
  },
  {
    category: "Shop",
    title: "Compare subscription plans",
    prompt:
      "Compare the [service] subscription tiers for my usage: [usage]. Tell me the cheapest tier that covers it and what I'd lose by downgrading.",
  },
  {
    category: "Shop",
    title: "Research a big purchase",
    prompt:
      "I'm about to buy [item] for [purpose]. Research real reviews, list the models worth shortlisting, the red flags to watch for, and the fair price range.",
  },
  {
    category: "Shop",
    title: "Find local options",
    prompt:
      "Find [type of place] near [location] that [requirement]. Summarize ratings, prices, and what each does best.",
  },

  // ---------- Plan ----------
  {
    category: "Plan",
    title: "Plan a trip",
    prompt:
      "Plan a [length] trip to [destination] with a [budget] budget. Suggest an itinerary, the order to book things, and what to decide before paying anything.",
  },
  {
    category: "Plan",
    title: "Design my week",
    prompt:
      "Design my week around [priorities]. Block deep work, [commitments], and rest — and tell me what I should say no to.",
  },
  {
    category: "Plan",
    title: "Plan an event",
    prompt:
      "Help me plan [event] for [guests] on [date]. Cover venue, food, a budget breakdown, and a day-of timeline.",
  },
  {
    category: "Plan",
    title: "Set a 90-day goal",
    prompt:
      "Turn [goal] into a 90-day plan: the weekly milestones, the daily habit that drives it, and how I'll know it's off track.",
  },
  {
    category: "Plan",
    title: "Plan a move",
    prompt:
      "Build a moving plan for [move details]: a timeline, the order to book things, a packing checklist, and the costs people commonly forget.",
  },

  // ---------- Learn ----------
  {
    category: "Learn",
    title: "Teach me a topic",
    prompt:
      "Teach me [topic] from zero. Start with the five core ideas, then quiz me before moving on to anything deeper.",
  },
  {
    category: "Learn",
    title: "Explain it in two minutes",
    prompt:
      "Explain [topic] in under 200 words: what it is, why it matters now, and the one thing most people get wrong about it.",
  },
  {
    category: "Learn",
    title: "Build a study plan",
    prompt:
      "Build a study plan for [exam] in [timeframe]: the topics to master, a daily routine, and practice questions I can work through with you.",
  },
  {
    category: "Learn",
    title: "Learn a skill in four weeks",
    prompt:
      "Teach me [skill] as a 4-week plan. Give me one hands-on exercise per week and tell me how to judge whether I'm ready to advance.",
  },
  {
    category: "Learn",
    title: "Summarize a long read",
    prompt:
      "Read [article, book, or document] and summarize it: the main argument, the best evidence for it, and the one paragraph worth remembering.",
  },

  // ---------- Automate ----------
  {
    category: "Automate",
    title: "Set reminders",
    prompt:
      "Remind me to [task] at [time]. If I haven't done it, nudge me again [frequency] until I confirm it's done.",
  },
  {
    category: "Automate",
    title: "Track a changing topic",
    prompt:
      "Track [topic] over time. Each time I check in, tell me what's new since last time and how it changes the picture.",
  },
  {
    category: "Automate",
    title: "Send a recurring briefing",
    prompt:
      "Every [morning or week], brief me on [topics]: the headlines, what changed since last time, and anything that needs my attention.",
  },
  {
    category: "Automate",
    title: "Turn a process into a checklist",
    prompt:
      "Turn [recurring process] into a reusable checklist: the steps, who does what, and the verification at each step before moving on.",
  },
  {
    category: "Automate",
    title: "Summarize my day",
    prompt:
      "At [time] each day, summarize my [calendar, tasks, or notes]: what happened, what's due tomorrow, and what slipped.",
  },
];

export const HERO_PROMPTS: string[] = [
  "Turn my rough idea into a one-page launch plan with audience, offer, proof, channels, and the next three actions.",
  "Research this topic from credible sources, separate fact from assumption, and show me what would change the conclusion.",
  "Act as a critical editor. Find the weak logic, unclear language, missing evidence, and the single highest-impact revision.",
  "Design a repeatable weekly system for this goal, including inputs, checkpoints, output, and a short review ritual.",
  "Build a small working tool for this problem. Ask only the questions that materially change what should be made.",
];
