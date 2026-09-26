# museaicodes.com — Muse Hub

The ultimate unofficial **Muse AI guide hub**: 15 SEO guides, comparisons,
tutorials, and referral codes. Deployed via **Vercel** on the custom domain
**museaicodes.com**.

> Unofficial guide. Not affiliated with Meta.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS v3
- `next-themes` — dark mode default, light mode toggle
- `next/font` — Fraunces (display) + Inter (body) + JetBrains Mono (code/labels)

## Routes

| Route | Page |
|---|---|
| `/` | Homepage: hero, prompt library, 15-guide index with search, comparison table, FAQ, referral CTA |
| `/guides/[slug]` | 15 article pages — answer-first content, breadcrumbs, related articles, Article + BreadcrumbList JSON-LD |
| `/sitemap.xml` | All 16 URLs |
| `/robots.txt` | Allows all crawlers, including AI answer-engine bots |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # must pass with zero errors
```

## Monetization

- **Referral codes** live in `lib/site.ts` (`referralCodes`). Displayed via
  `components/ReferralCodes.tsx` with tap-to-copy buttons.
- **AdSense**: `components/AdSlot.tsx` is disabled by default. To enable, set
  `NEXT_PUBLIC_ADSENSE_ENABLED=true` and `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-…`
  in Vercel env vars and add your ad slot ID in the component.
- Affiliate/referral disclosure lines sit next to monetized sections.

## Content

All article content lives in `lib/guides.ts` (typed, no raw HTML — inline links
use `[text](url)` syntax rendered safely by `components/ArticleBody.tsx`).
FAQs in `lib/faqs.ts`, prompts in `lib/prompts.ts`.
