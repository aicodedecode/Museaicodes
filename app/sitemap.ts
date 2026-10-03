import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { GUIDES } from "@/lib/guides";
import { CONNECTORS } from "@/lib/connectors";
import { INTENT_PAGES_1 } from "@/lib/intent-pages-1";
import { INTENT_PAGES_2 } from "@/lib/intent-pages-2";

/**
 * Full sitemap: homepage + hubs (guides/compare/news/tools/prompts/use-cases/
 * apps/connectors/codes/templates/encyclopedia) + tool pages + app surfaces +
 * connector detail pages + /for/ intent pages + 31 guide articles + info/legal.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl;
  const today = new Date("2026-09-28");

  const hubs: { slug: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { slug: "guides", priority: 0.9, changeFrequency: "weekly" },
    { slug: "compare", priority: 0.9, changeFrequency: "monthly" },
    { slug: "news", priority: 0.9, changeFrequency: "weekly" },
    { slug: "tools", priority: 0.9, changeFrequency: "weekly" },
    { slug: "prompts", priority: 0.9, changeFrequency: "weekly" },
    { slug: "codes", priority: 0.9, changeFrequency: "weekly" },
    { slug: "deals", priority: 0.9, changeFrequency: "weekly" },
    { slug: "templates", priority: 0.9, changeFrequency: "weekly" },
    { slug: "encyclopedia", priority: 0.9, changeFrequency: "weekly" },
    { slug: "offer-status", priority: 0.9, changeFrequency: "weekly" },
    { slug: "use-cases", priority: 0.9, changeFrequency: "weekly" },
    { slug: "apps", priority: 0.9, changeFrequency: "weekly" },
    { slug: "connectors", priority: 0.9, changeFrequency: "weekly" },
    { slug: "token-calculator", priority: 0.8, changeFrequency: "monthly" },
    { slug: "quiz", priority: 0.8, changeFrequency: "monthly" },
    { slug: "videos", priority: 0.7, changeFrequency: "monthly" },
  ];

  const toolPages = [
    "token-runway",
    "prompt-generator",
    "compare",
    "share-card",
    "can-muse-do-this",
    "task-generator",
    "prompt-optimizer",
    "workflow-generator",
    "availability-checker",
    "connector-wizard",
    "muse-challenge",
    "token-price-compare",
    "avatar-studio",
  ];

  const appSurfaces = ["android", "iphone", "web", "whatsapp", "mac"];

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
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...hubs.map((h) => ({
      url: `${base}/${h.slug}`,
      lastModified: today,
      changeFrequency: h.changeFrequency,
      priority: h.priority,
    })),
    ...toolPages.map((t) => ({
      url: `${base}/tools/${t}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...appSurfaces.map((s) => ({
      url: `${base}/apps/${s}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CONNECTORS.map((c) => ({
      url: `${base}/connectors/${c.slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...[...INTENT_PAGES_1, ...INTENT_PAGES_2].map((p) => ({
      url: `${base}/for/${p.slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...GUIDES.map((g) => ({
      url: `${base}/guides/${g.slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...infoPages.map((p) => ({
      url: `${base}/${p.slug}`,
      lastModified: today,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
  ];
}
