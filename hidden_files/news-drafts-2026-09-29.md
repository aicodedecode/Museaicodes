# News drafts — Sept 24–29, 2026 sweep (Muse AI / Meta AI)

> DRAFT ONLY. Not published, not added to lib/updates.ts, not committed.
> Existing coverage checked against lib/updates.ts (newest item: Sept 28,
> Enterprise Platform + Marketplace sale incident) and guide slugs in
> lib/guides.ts (26 existing guide slugs listed in sweep notes). All stories
> below are within the Sept 24–29 window and not covered in any form on the site.
> Labels: **Meta-confirmed** = announced or publicly confirmed by Meta;
> **press-reported** = reported by the named outlet, not yet confirmed by Meta.

---

## 1. Meta launches Muse for Small Business with 15 app connectors
- **Date:** 2026-09-29 · **Tags:** Launch, Features · **Label:** Meta-confirmed (Meta's announcement, reported by Reuters and others)
- **Summary:** Meta announced Muse for Small Business on September 29, extending the personal AI agent (launched September 8) to business owners with 15 third-party connectors — Asana, Box, Canva, Dropbox, Figma, Granola, HighLevel, Intuit QuickBooks, Klaviyo, Lovable, Notion, Shopify, Slack, Stripe and Zoom — plus connections to Instagram professional account analytics, Facebook Pages and Meta ad accounts. Owners can give Muse business goals like finding new customers or analyzing campaign performance, and Meta says nothing is published, sent or spent without the user's approval. The announcement comes one day after Zuckerberg's Meta Enterprise Platform reveal, and Meta says more connectors are coming.
- **Source:** https://www.reuters.com/business/media-telecom/meta-expands-muse-ai-agent-small-businesses-2026-09-29/ (Reuters)
- **Suggested guide slug:** `muse-ai-small-business` — Rationale: a distinct business-facing Muse track with its own connector set, use cases and approval model, separate from the consumer `muse-ai-connectors` guide.

---

## 2. Muse will export its entire VM filesystem — Meta says that's intended behavior
- **Date:** 2026-09-24 · **Tags:** Security · **Label:** Meta-confirmed (Meta spokesperson Daniel Roberts to The Verge; public posts by Meta Superintelligence Labs' Nat Friedman and David Singleton)
- **Summary:** The Verge reported on September 24 that developers Peter James and Jonny L. Saunders could coax Muse, with minimal prompting, into zipping up and sharing the full contents of its root filesystem — Ubuntu system files, app templates and internal docs. Meta says this is not a breach: spokesperson Daniel Roberts told The Verge that each user reaches only their own isolated VM, Nat Friedman called it "intended behavior," and David Singleton described the Secure VM as "your own computer in the cloud." The episode also drew attention to weak prompt-injection resistance, and Meta says the planned Muse Confidential VM will go further so that even Meta cannot read a user's VM.
- **Source:** https://www.explainx.ai/blog/meta-muse-vm-filesystem-export-intended-behavior-not-breach-2026 (ExplainX summary of The Verge's reporting)
- **Guide:** no new guide suggested — fits as a Security update entry.

---

## 3. The Information: Meta adding clearer safety warnings after bug-bounty VM flaw
- **Date:** 2026-09-25 · **Tags:** Security · **Label:** press-reported (The Information, via Reuters)
- **Summary:** The Information reported on September 25, citing an internal Meta incident report, that an outside researcher found a previously undisclosed vulnerability through Meta's bug bounty program that could have let an attacker access a user's dedicated cloud virtual machine — the per-user environment holding emails and files. Meta initially classified it SEV-2 (its third-highest severity on a five-point scale); later reporting says Meta downgraded it to SEV-3 after reassessment and built a more secure VM anyway. The flaw was reportedly exploitable when a user handed Muse a malicious link and clicked "Allow" on the security prompt — so Meta is making in-app warning messages more prominent for suspected malicious sites. Meta did not respond to Reuters' request for comment.
- **Source:** https://www.channelnewsasia.com/business/meta-bolsters-muse-safety-warning-after-security-vulnerability-found-information-reports-6411766 (CNA, carrying Reuters)
- **Guide:** no new guide suggested — Security update entry; distinct from the Sept 22 Wardle Mac zero-day entry already on the site.

---

## 4. Muse comes to Instagram: add your agent to your profile
- **Date:** 2026-09-27 · **Tags:** Features · **Label:** Meta-confirmed (announced by Meta chief AI officer Alexandr Wang on X)
- **Summary:** Meta chief AI officer Alexandr Wang announced on September 27 that users can now add their Muse to their Instagram profile: a "+ Add your Muse" option appears below the profile bio, and the agent then shows up under the bio so followers can interact with it. The rollout expands Muse beyond the Muse app and WhatsApp to Instagram. Wang's post frames it as showing off "your superintelligent sidekick" to friends.
- **Source:** https://www.digit.in/news/general/meta-muse-ai-agent-now-available-on-instagram-here-is-how-to-set-it-up.html (Digit, with setup steps)
- **Suggested guide slug:** `muse-ai-instagram` — Rationale: a distinct how-to/usage topic (profile setup + what the Instagram presence can do) not covered by the existing app/download/WhatsApp guides; could also fold into `muse-ai-availability`.

---

## 5. Muse bank linking goes live via Plaid
- **Date:** 2026-09-25 · **Tags:** Features · **Label:** press-reported (CryptoBriefing, ExplainX; Alexandr Wang had named Plaid as a launch connector on Sept 9)
- **Summary:** Muse's Plaid integration is now live as a working connector, letting users link bank accounts through Plaid's OAuth flow — covering roughly 12,000 financial institutions — for read-only access to balances, transactions and investment holdings. Coverage (CryptoBriefing, ExplainX, Credit Union Daily) describes budgeting, spending-pattern analysis and subscription monitoring as the headline uses, with explicit user approval required for every action. ExplainX cautions that nothing Meta or Plaid has described allows Muse to move money — it reads only. Alexandr Wang demonstrated related money-saving scenarios at Connect, including a #MuseMoneyChallenge pitch.
- **Source:** https://cryptobriefing.com/meta-plaid-muse-ai-financial-features/ (CryptoBriefing)
- **Guide:** no new guide suggested — extend the existing `muse-ai-connectors` / `muse-ai-shopping` guides with a financial-connectors section.

---

## 6. Marketplace incident follow-up: Meta says "no breach of privacy controls"; price-display bug fixed
- **Date:** 2026-09-29 · **Tags:** Security · **Label:** press-reported (Business Insider)
- **Summary:** Follow-up to the Sept 28 entry on tech YouTuber Matt Robb's Facebook Marketplace incident: Meta's David Singleton replied that Meta confirmed there was "no breach of privacy controls." Robb reported that Meta told him a separate display error had stripped the "7" from his $700 minimum price, making a $600 offer appear accepted ("Sounds good, 00 it is!") — Singleton says Meta fixed that price-display issue. Robb has also suggested Meta add a "Sent By Muse" label under agent-generated messages so buyers can tell AI messages from human ones.
- **Source:** https://cncbnews.com/article/2026/09/a-youtuber-says-this-muse-setting-led-to-the-ai-agent-sharing-his-address-be-careful (cncbnews, carrying Business Insider)
- **Guide:** no new guide suggested — follow-up update entry to the existing Sept 28 Marketplace item.

---

## Excluded (checked, not drafted)
- "Muse Image pulled after SAG-AFTRA backlash" — dated July 2026, outside the sweep window.
- Stock-price stories (META rally/retrace) — mostly rehashes of the already-covered Sept 28 Marketplace incident; no new Muse facts.
- OpenAI DevDay Sept 29 rumored rival agent — OpenAI news, not Muse news.
- Opinion/analysis pieces (LinkedIn product teardown, fintech commentary) — no new news facts.
- GitHub/computer-use connectors recap (dev.to) — restates Sept 23 Connect announcements already covered.
