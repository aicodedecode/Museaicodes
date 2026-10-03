import type { UpdateTag } from "./updates";
import timelinesData from "@/content/timelines.json";

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
 *
 * Content lives in content/timelines.json so the admin dashboard can edit it;
 * this module keeps the types and helpers.
 */
export const TIMELINES: TimelineDay[] = timelinesData as TimelineDay[];

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
