import type { MetadataRoute } from "next";

/**
 * AI answer-engine crawlers (OAI-SearchBot, ChatGPT-User, PerplexityBot,
 * ClaudeBot) must be able to reach the site — GEO guidance: never block them
 * unintentionally. Allow all.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.museaicodes.com/sitemap.xml",
  };
}
