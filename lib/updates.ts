import updatesData from "@/content/updates.json";

export type UpdateTag = "Launch" | "Features" | "Traction" | "Security" | "Policy";

export interface UpdateEntry {
  slug: string;
  /** ISO date, newest first. */
  date: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  tags: UpdateTag[];
}

export const UPDATE_TAGS: ("All" | UpdateTag)[] = [
  "All",
  "Launch",
  "Features",
  "Traction",
  "Security",
  "Policy",
];

/**
 * News & updates, newest first. Every entry is dated by its news date and
 * links to a source we fetched and verified — summaries stick to what the
 * source reports, and estimates are labeled as estimates.
 * Resource spotlights (Meta's FAQ, design notes) are dated by when they were
 * added to our tracked library — the summary says so explicitly.
 *
 * Content lives in content/updates.json so the admin dashboard can edit it;
 * this module keeps the types and helpers.
 */
export const UPDATES: UpdateEntry[] = updatesData as UpdateEntry[];

export function formatUpdateDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
