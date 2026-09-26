import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

/** All 23 URLs: homepage + 15 guide articles + 7 info/legal pages. */
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
      lastModified: new Date("2026-09-26"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...GUIDES.map((g) => ({
      url: `${base}/guides/${g.slug}`,
      lastModified: new Date("2026-09-26"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...infoPages.map((p) => ({
      url: `${base}/${p.slug}`,
      lastModified: new Date("2026-09-26"),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
  ];
}
