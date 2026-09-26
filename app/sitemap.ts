import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

/** All 16 URLs: homepage + 15 guide articles. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl;
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
  ];
}
