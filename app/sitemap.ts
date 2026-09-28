import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

/** All 35 URLs: homepage + guides/compare/updates/offer-status/quiz/videos/token-calculator + 20 guide articles + 7 info/legal pages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl;
  const infoPages: { slug: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
    { slug: "about", priority: 0.6, changeFrequency: "monthly" },
    { slug: "contact", priority: 0.6, changeFrequency: "monthly" },
    { slug: "privacy", priority: 0.4, changeFrequency: "yearly" },
    { slug: "cookies", priority: 0.4, changeFrequency: "yearly" },
    { slug: "affiliate-disclosure", priority: 0.4, changeFrequency: "yearly" },
    { slug: "disclaimer", priority: 0.4, changeFrequency: "yearly" },
    { slug: "terms", priority: 0.4, changeFrequency: "yearly" },
  ];
  return [
    {
      url: base,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/guides`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/compare`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/updates`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/offer-status`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/token-calculator`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/quiz`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/videos`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...GUIDES.map((g) => ({
      url: `${base}/guides/${g.slug}`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...infoPages.map((p) => ({
      url: `${base}/${p.slug}`,
      lastModified: new Date("2026-09-28"),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
  ];
}
