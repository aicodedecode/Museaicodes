export interface PromptCard {
  category: "Build" | "Research" | "Create" | "Decide";
  title: string;
  prompt: string;
}

export const PROMPTS: PromptCard[] = [
  {
    category: "Build",
    title: "Scope a web product",
    prompt:
      "Turn [idea] into a build brief. Define the user, core job, must-have flows, content, edge cases, launch version, and what to leave out.",
  },
  {
    category: "Research",
    title: "Map a new market",
    prompt:
      "Research [market] for [audience]. Separate verified facts from assumptions, find current signals, and finish with opportunities and risks.",
  },
  {
    category: "Create",
    title: "Build a content system",
    prompt:
      "Create a 30-day content system for [topic]. Give me recurring formats, hooks, a weekly rhythm, production steps, and success measures.",
  },
  {
    category: "Decide",
    title: "Pressure-test a choice",
    prompt:
      "Help me decide between [A] and [B]. Ask for missing constraints, compare trade-offs, name hidden costs, and recommend a reversible next step.",
  },
  {
    category: "Research",
    title: "Turn sources into insight",
    prompt:
      "Read these materials and produce a decision brief: key claims, strongest evidence, contradictions, unknowns, and five questions worth pursuing.",
  },
  {
    category: "Build",
    title: "Automate a recurring task",
    prompt:
      "Design a safe workflow for [task]. Define the trigger, inputs, steps, checks, failure handling, approval points, and useful output.",
  },
];

export const HERO_PROMPTS: string[] = [
  "Turn my rough idea into a one-page launch plan with audience, offer, proof, channels, and the next three actions.",
  "Research this topic from credible sources, separate fact from assumption, and show me what would change the conclusion.",
  "Act as a critical editor. Find the weak logic, unclear language, missing evidence, and the single highest-impact revision.",
  "Design a repeatable weekly system for this goal, including inputs, checkpoints, output, and a short review ritual.",
  "Build a small working tool for this problem. Ask only the questions that materially change what should be made.",
];
