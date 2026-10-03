import type { UpdateTag } from "./updates";

export interface TimelineEntry {
  /** Display label for when it happened, e.g. "Morning", "14:30 IST". */
  time: string;
  headline: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  tag: UpdateTag;
}

export interface TimelineDay {
  /** ISO date, newest first. */
  date: string;
  title: string;
  deck: string;
  entries: TimelineEntry[];
}

/**
 * "Today in AI" — one chronological timeline article per day, composed from
 * that day's verified news items. Trial format: only published on days with
 * enough genuine news (3+ items); quiet days get no timeline.
 */
export const TIMELINES: TimelineDay[] = [
  {
    date: "2026-10-03",
    title: "Today in AI — October 3, 2026",
    deck: "The day's verified tech news in chronological order: humanoid robots, the 2% who pay for AI, and Apple tightening the screws on agentic snooping.",
    entries: [
      {
        time: "Morning",
        headline: "China unveils first humanoid robot on fully domestic electronic architecture",
        summary:
          "LimX Dynamics and Kyland Technology showed what Chinese media describe as the country's first humanoid robot running on indigenous operating systems, networking protocols, developer software and AI compute chips — framed as a step toward bypassing Western tech controls on robotics hardware.",
        sourceName: "ChinaTechNews",
        sourceUrl:
          "https://www.chinatechnews.com/2026/10/03/130239-china-deploys-first-humanoid-robot-built-on-fully-domestic-electronic-architecture-to-bypass-western-tech-controls",
        tag: "Launch",
      },
      {
        time: "Afternoon",
        headline: "Only 2.2% of US households pay for AI, a16z's State of Markets finds",
        summary:
          "Andreessen Horowitz's September 2026 State of Markets report, drawing on PNC Research payment data, finds just 2.2% of US households paid for an AI service as of April 2026 — about $31 a month — against ~41% of workers using generative AI for work. Adoption is spreading far faster than spending.",
        sourceName: "Tech Startups",
        sourceUrl:
          "https://techstartups.com/2026/10/02/only-2-of-u-s-households-pay-for-ai-even-as-ai-adoption-reaches-41-of-u-s-workers/",
        tag: "Traction",
      },
      {
        time: "Evening",
        headline: "Apple tightens Mac disk-access rules after Muse Messages privacy row",
        summary:
          "Apple will require apps to re-request Full Disk Access through “explicit user action,” warning that agentic risks “will grow substantially.” It didn't name Meta — but the move lands days after the report that Muse synced ~187,000 rows of a journalist's Messages database, a claim Meta disputes.",
        sourceName: "Startup Fortune",
        sourceUrl:
          "https://startupfortune.com/apple-tightens-mac-disk-access-rules-after-an-ai-agent-read-private-messages/",
        tag: "Policy",
      },
    ],
  },
];

export function getTimeline(date: string): TimelineDay | undefined {
  return TIMELINES.find((t) => t.date === date);
}

export function latestTimeline(): TimelineDay | undefined {
  return TIMELINES[0];
}

export function timelineUrl(date: string): string {
  return `/timeline/${date}`;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatTimelineDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
