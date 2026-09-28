# 100-Article Roadmap — museaicodes.com

> **How to use this file.** This is the working content plan for the Muse AI guide hub.
> Each cluster (A–G) lists article candidates as:
> `- [slug-or-TBD] "Title" — 1-line angle — **P0/P1/P2** — links: internal link targets`
>
> **Rules for future sessions:**
> 1. **Diff before writing.** Check `lib/guides.ts` slugs (see "Already covered" below) and the `/for/*` intent pages before starting any article. Never duplicate an existing guide or intent page as an article.
> 2. **Priority order.** P0 = core SEO / high search demand — write first. P1 = solid evergreen value. P2 = long-tail, write when capacity allows.
> 3. **Each article must have** 4–6 sections, a `shortAnswer` (AEO), 2+ internal guide links, `modifiedTime`, image + imageAlt, and English only. No invented stats/dates/prices. US & Canada availability; no VPN content.
> 4. **Mark as you go.** Change `TODO` → `DONE (date)` when a slug ships, so parallel agents don't double-write.
> 5. **Internal links** listed per entry are suggestions — link to whatever exists at build time.
>
> **Priorities:** P0 = write first (core demand), P1 = evergreen filler, P2 = long-tail.
> **Internal-link conventions:** `/guides/<slug>` for guides, `/for/<intent>` for intent pages, `/compare` for comparisons.

## Already covered (do NOT duplicate) — as of 2026-09-28

**26 shipped guides (`lib/guides.ts`):** what-is-muse-ai, muse-ai-invite-code, muse-ai-referral-code,
muse-ai-redeem-code, how-to-get-muse-ai, muse-ai-tutorial, how-to-use-muse-ai,
muse-ai-vs-chatgpt-claude-meta-ai, muse-ai-vs-claude, muse-ai-download, muse-ai-billion-tokens,
muse-ai-review, muse-ai-use-cases, muse-ai-whatsapp, is-muse-ai-free, muse-ai-meta-connect-2026,
muse-ai-mac-computer-use, muse-ai-early-access-program, muse-ai-security-flaw, muse-ai-availability,
muse-ai-jolly-avatar, muse-ai-shopping, muse-ai-voice-mode, muse-ai-charm, muse-ai-privacy,
muse-ai-prompt-tips.

**5 built 2026-09-28 (this session):** muse-ai-50-things, muse-ai-connectors, muse-ai-cheat-sheet,
muse-ai-glossary, muse-ai-app-guide.

**20 `/for/*` intent pages (parallel track — never duplicate as articles):** students, developers,
real-estate, travel, email, instagram, research, build-website, find-jobs, manage-gmail, teachers,
marketers, small-business, interview-prep, trip-planning, shopping-deals, meal-planning, fitness,
content-creators, daily-planning.

**Standing editorial rules:** English only. No coaching-institute-style brand stuffing — here that means:
no naming third-party clone apps or unofficial download sources. Capabilities grounded in real Muse
features (artifacts, memory, goals, approval cards, voice mode, computer use, connectors, Jolly).
Availability: US & Canada as of Sept 2026. No VPN circumvention content.

---

## Cluster A — Core guides (13)

Getting started, setup, and the product's core systems.

- [DONE 2026-09-28] `muse-ai-app-guide` — "Muse AI App on iPhone & Android: Setup Guide" — OS-specific setup + in-app workflow; deliberately distinct from `muse-ai-download` (which covers safe download / anti-clone) — **P0** — links: /guides/muse-ai-download, /guides/muse-ai-voice-mode, /guides/muse-ai-tutorial
- [TODO] `muse-ai-desktop-apps` — "Muse AI on Mac & Windows: Desktop Setup Guide" — desktop app walkthrough, permissions, when desktop beats mobile — **P1** — links: /guides/muse-ai-mac-computer-use, /guides/muse-ai-app-guide
- [TODO] `muse-ai-whatsapp-power-user` — "Muse AI WhatsApp Power-User Guide" — advanced WhatsApp patterns (voice notes, attachments, daily check-ins, thread discipline); distinct from the basic `muse-ai-whatsapp` guide — **P1** — links: /guides/muse-ai-whatsapp, /guides/muse-ai-voice-mode
- [TODO] `muse-ai-account-setup` — "Muse AI Account & Profile Setup: Get It Right Once" — profile, preferences, notification defaults that compound — **P1** — links: /guides/how-to-get-muse-ai, /guides/muse-ai-prompt-tips
- [TODO] `muse-ai-notifications-reminders` — "Muse AI Notifications & Reminders, Mastered" — approval pings, scheduled nudges, standing instructions vs one-off reminders — **P1** — links: /guides/muse-ai-tutorial, /guides/muse-ai-cheat-sheet
- [TODO] `muse-ai-memory` — "How Muse AI's Memory Works (and How to Control It)" — what it remembers, memory files you can read/edit, when to tighten it — **P0** — links: /guides/muse-ai-privacy, /guides/what-is-muse-ai
- [TODO] `muse-ai-goals` — "Muse AI Goals: Turn Projects Into Background Work" — Goals tab, breaking outcomes into steps, human checkpoints — **P0** — links: /guides/how-to-use-muse-ai, /guides/muse-ai-tutorial
- [TODO] `muse-ai-artifacts` — "Muse AI Artifacts: Documents, Pages & Dashboards Explained" — what artifacts are, when to ask for one, sharing/exporting — **P0** — links: /guides/what-is-muse-ai, /guides/muse-ai-tutorial
- [TODO] `muse-ai-pricing-plans` — "Muse AI Pricing & Plans Explained" — what's free vs paid (no invented prices — verify at build time), how to check your plan — **P0** — links: /guides/is-muse-ai-free, /guides/muse-ai-billion-tokens
- [TODO] `muse-ai-for-teams` — "Using Muse AI With a Team: Shared Workflows" — sharing artifacts, consistent prompts, handoff patterns — **P1** — links: /guides/muse-ai-artifacts, /guides/muse-ai-prompt-tips
- [TODO] `muse-ai-troubleshooting` — "Muse AI Not Working? Fix the 12 Most Common Problems" — login, invite, connector, voice, and app issues with fixes — **P1** — links: /guides/muse-ai-download, /guides/muse-ai-availability
- [TODO] `muse-ai-accessibility` — "Muse AI Accessibility Features" — voice-first use, screen-reader behavior, text sizing and contrast options — **P2** — links: /guides/muse-ai-voice-mode, /guides/muse-ai-app-guide
- [TODO] `muse-ai-data-controls` — "Your Muse AI Data: Export, Review & Delete" — memory files, chat history, data controls walkthrough — **P1** — links: /guides/muse-ai-privacy, /guides/muse-ai-memory

## Cluster B — Prompts & templates (15)

The prompt library: patterns, packs, and reference material.

- [DONE 2026-09-28] `muse-ai-cheat-sheet` — "Muse AI Cheat Sheet: Prompts, Features & Settings" — one-page reference with feature + settings tables — **P0** — links: /guides/muse-ai-prompt-tips, /guides/how-to-use-muse-ai
- [DONE 2026-09-28] `muse-ai-glossary` — "Muse AI Glossary: Every Term, Plainly Explained" — agent, artifact, connector, approval card, Jolly, tokens… — **P1** — links: /guides/what-is-muse-ai, /guides/muse-ai-cheat-sheet
- [TODO] `muse-ai-prompts-beginners` — "Your First 20 Muse Prompts: A Beginner's Pack" — copy-paste starters across everyday tasks — **P0** — links: /guides/muse-ai-tutorial, /guides/muse-ai-cheat-sheet
- [TODO] `muse-ai-prompt-anatomy` — "How to Write Prompts Muse Actually Understands" — outcome-first structure, context, constraints, checkpoints — **P0** — links: /guides/muse-ai-prompt-tips, /guides/how-to-use-muse-ai
- [TODO] `muse-ai-copy-paste-prompts` — "25 Copy-Paste Muse Prompts for Busy People" — ready-made prompts for email, planning, research, decisions — **P0** — links: /guides/muse-ai-prompt-tips, /guides/muse-ai-cheat-sheet
- [TODO] `muse-ai-prompt-templates` — "Muse Prompt Templates: The Fill-in-the-Blank Library" — reusable templates with bracketed slots — **P1** — links: /guides/muse-ai-copy-paste-prompts, /guides/muse-ai-prompt-anatomy
- [TODO] `muse-ai-brainstorming-prompts` — "12 Muse Prompts for Better Brainstorming" — ideation, SCAMPER-style, devil's-advocate patterns — **P1** — links: /guides/muse-ai-prompt-tips, /guides/muse-ai-copy-paste-prompts
- [TODO] `muse-ai-writing-prompts` — "Muse for Writing: Emails, Essays & Reports" — tone control, structure-first drafting, revision loops — **P1** — links: /guides/muse-ai-prompt-templates, /for/content-creators
- [TODO] `muse-ai-decision-prompts` — "Let Muse Pressure-Test Your Decisions" — pros/cons, premortems, comparison matrices — **P1** — links: /guides/muse-ai-prompt-tips, /guides/muse-ai-glossary
- [TODO] `muse-ai-teach-your-style` — "Teach Muse Your Style Once, Benefit Forever" — profile preferences, formatting defaults, standing instructions — **P1** — links: /guides/muse-ai-memory, /guides/muse-ai-account-setup
- [TODO] `muse-ai-multi-step-workflows` — "Muse Mega-Prompts: Chaining Multi-Step Workflows" — plan-then-act, checkpoint patterns for big jobs — **P1** — links: /guides/muse-ai-prompt-anatomy, /guides/muse-ai-goals
- [TODO] `muse-ai-prompt-mistakes` — "15 Prompt Mistakes That Confuse Your Muse Agent" — vagueness, missing constraints, approval-skipping — **P1** — links: /guides/muse-ai-prompt-tips, /guides/muse-ai-cheat-sheet
- [TODO] `muse-ai-fix-bad-answers` — "Follow-Up Prompts That Fix Bad Muse Answers" — recovery patterns: narrow, reframe, verify, restart — **P1** — links: /guides/muse-ai-prompt-mistakes, /guides/muse-ai-tutorial
- [TODO] `muse-ai-voice-prompts` — "What to Say Aloud: Voice Prompts That Work" — spoken-friendly prompt design for voice mode — **P2** — links: /guides/muse-ai-voice-mode, /guides/muse-ai-prompt-tips
- [TODO] `muse-ai-job-seeker-prompt-pack` — "Copy-Paste Muse Prompts for Job Seekers" — resume, cover letter, interview prep prompt pack; complements /for/find-jobs — **P2** — links: /for/find-jobs, /guides/muse-ai-copy-paste-prompts

## Cluster C — "Muse AI for…" professions (12)

Deeper profession guides NOT covered by the /for/* intent pages. If an intent page exists, do not duplicate — link to it instead.

- [TODO] `muse-ai-for-lawyers` — "Muse AI for Lawyers: Research, Drafts & Client Prep" — document review workflows, privilege/caution framing — **P1** — links: /guides/muse-ai-privacy, /guides/muse-ai-artifacts
- [TODO] `muse-ai-for-freelancers` — "Muse AI for Freelancers: Proposals, Invoices & Client Work" — pipeline management for solo operators — **P1** — links: /guides/muse-ai-artifacts, /for/small-business
- [TODO] `muse-ai-for-accountants` — "Muse AI for Accountants & Bookkeepers" — reconciliation checklists, client comms, deadline tracking — **P2** — links: /guides/muse-ai-connectors, /guides/muse-ai-goals
- [TODO] `muse-ai-for-landlords` — "Muse AI for Landlords & Property Managers" — tenant comms, maintenance logs, lease reminders — **P2** — links: /guides/muse-ai-notifications-reminders, /for/real-estate
- [TODO] `muse-ai-for-parents` — "Muse AI for Parents: Family Logistics, Simplified" — school comms, activity schedules, meal + calendar coordination — **P1** — links: /for/meal-planning, /guides/muse-ai-goals
- [TODO] `muse-ai-for-retirees` — "Muse AI for Retirees: Everyday Help, Zero Learning Curve" — voice-first setup, health, travel, grandkids' homework — **P2** — links: /guides/muse-ai-voice-mode, /guides/muse-ai-app-guide
- [TODO] `muse-ai-for-nurses` — "Muse AI for Nurses & Healthcare Staff" — shift planning, study help, documentation drafts (with privacy guardrails) — **P2** — links: /guides/muse-ai-privacy, /for/fitness
- [TODO] `muse-ai-for-sales` — "Muse AI for Sales Professionals" — call prep, follow-up drafting, pipeline summaries — **P1** — links: /guides/muse-ai-connectors, /for/email
- [TODO] `muse-ai-for-hr` — "Muse AI for HR Teams" — job posts, onboarding checklists, policy drafts — **P2** — links: /guides/muse-ai-artifacts, /for/interview-prep
- [TODO] `muse-ai-for-support-teams` — "Muse AI for Customer Support Teams" — reply drafts, macro libraries, ticket summaries — **P1** — links: /guides/muse-ai-prompt-templates, /for/small-business
- [TODO] `muse-ai-for-nonprofits` — "Muse AI for Nonprofits & Volunteers" — grant drafts, donor comms, event planning on zero budget — **P2** — links: /guides/muse-ai-artifacts, /for/marketers
- [TODO] `muse-ai-for-event-planners` — "Muse AI for Event Planners" — timelines, vendor comparisons, guest logistics — **P2** — links: /guides/muse-ai-goals, /for/trip-planning

## Cluster D — "What can Muse build" (16)

Capability explorations: each answers "can Muse do X?" with a real attempt and verdict.

- [DONE 2026-09-28] `muse-ai-50-things` — "50 Things Muse AI Can Do: The Big List" — grouped listicle across everyday life, work, learning, money, automation — **P0** — links: /guides/what-is-muse-ai, /guides/muse-ai-use-cases
- [TODO] `can-muse-ai-build-app` — "Can Muse AI Build a Mobile App?" — what "build" means here, realistic scope, how to prompt it — **P1** — links: /for/developers, /guides/muse-ai-artifacts
- [TODO] `can-muse-ai-make-game` — "Can Muse AI Make a Game?" — simple browser games as artifacts, limits of the approach — **P1** — links: /guides/muse-ai-artifacts, /guides/muse-ai-50-things
- [TODO] `can-muse-ai-build-dashboard` — "Can Muse AI Build a Dashboard?" — trackers, habit dashboards, budget views as interactive pages — **P1** — links: /guides/muse-ai-artifacts, /guides/muse-ai-connectors
- [TODO] `can-muse-ai-build-portfolio` — "Can Muse AI Build a Portfolio Site? (No Code Needed)" — for non-developers: photographers, designers, writers — **P1** — links: /for/build-website, /guides/muse-ai-artifacts
- [TODO] `can-muse-ai-build-landing-page` — "Can Muse AI Build a Landing Page?" — small-business launch pages, copy + layout workflow — **P2** — links: /for/small-business, /for/marketers
- [TODO] `can-muse-ai-make-presentation` — "Can Muse AI Make a Presentation?" — outline-to-slides workflow, what still needs a human — **P1** — links: /guides/muse-ai-artifacts, /for/teachers
- [TODO] `can-muse-ai-create-pdf` — "Can Muse AI Create PDFs & Documents?" — reports, worksheets, printables as artifacts — **P1** — links: /guides/muse-ai-artifacts, /guides/muse-ai-tutorial
- [TODO] `can-muse-ai-build-resume` — "Can Muse AI Build a Resume?" — resume drafting + tailoring workflow; complements /for/find-jobs — **P1** — links: /for/find-jobs, /guides/muse-ai-job-seeker-prompt-pack
- [TODO] `can-muse-ai-make-quiz` — "Can Muse AI Make Quizzes & Flashcards?" — study sets, self-tests, spaced-repetition sheets — **P1** — links: /for/students, /for/teachers
- [TODO] `can-muse-ai-build-spreadsheet` — "Can Muse AI Build a Spreadsheet or Tracker?" — budget, habit, inventory trackers you can actually use — **P1** — links: /guides/muse-ai-artifacts, /guides/muse-ai-50-things
- [TODO] `can-muse-ai-make-infographic` — "Can Muse AI Make an Infographic?" — visual explainers from a paragraph of input — **P2** — links: /for/content-creators, /guides/muse-ai-artifacts
- [TODO] `can-muse-ai-build-newsletter` — "Can Muse AI Build a Newsletter?" — drafting, formatting, and scheduling workflows — **P2** — links: /for/marketers, /for/email
- [TODO] `can-muse-ai-make-budget-planner` — "Can Muse AI Make a Budget Planner?" — interactive budget pages with categories and targets — **P2** — links: /guides/muse-ai-artifacts, /for/shopping-deals
- [TODO] `can-muse-ai-build-study-guide` — "Can Muse AI Build a Study Guide?" — exam-prep guides from a syllabus; complements /for/students — **P2** — links: /for/students, /guides/can-muse-ai-make-quiz
- [TODO] `can-muse-ai-write-code` — "Can Muse AI Write Code for Non-Programmers?" — scripts, automations, and small tools from plain English — **P1** — links: /for/developers, /guides/muse-ai-artifacts

## Cluster E — Business use cases (16)

How companies and solo operators use Muse as leverage.

- [TODO] `muse-ai-meeting-notes` — "Muse AI for Meeting Notes & Summaries" — from raw notes to action items, owners, and follow-ups — **P0** — links: /for/small-business, /guides/muse-ai-artifacts
- [TODO] `muse-ai-market-research` — "Muse AI for Market Research" — competitor scans, customer language, sizing questions — **P0** — links: /for/small-business, /guides/muse-ai-prompt-anatomy
- [TODO] `muse-ai-customer-support` — "Muse AI for Customer Support: Draft Replies in Your Voice" — macros, tone matching, escalation drafts — **P1** — links: /guides/muse-ai-for-support-teams, /for/email
- [TODO] `muse-ai-lead-research` — "Muse AI for Lead Research & Outreach" — prospect research, personalized first lines, follow-up sequences — **P1** — links: /guides/muse-ai-for-sales, /for/marketers
- [TODO] `muse-ai-invoicing` — "Muse AI for Invoicing & Bookkeeping Basics" — invoice drafts, expense categorization, payment reminders — **P1** — links: /for/small-business, /guides/muse-ai-artifacts
- [TODO] `muse-ai-content-calendar` — "Muse AI for Social Media Content Calendars" — a month of posts from one briefing; complements /for/content-creators — **P1** — links: /for/content-creators, /for/instagram
- [TODO] `muse-ai-proposals` — "Muse AI for Proposals & Quotes" — scoping docs, pricing tables, follow-up timelines — **P1** — links: /guides/muse-ai-for-freelancers, /guides/muse-ai-artifacts
- [TODO] `muse-ai-hiring` — "Muse AI for Hiring: Job Posts to Onboarding" — role descriptions, interview kits, offer letters — **P1** — links: /guides/muse-ai-for-hr, /for/interview-prep
- [TODO] `muse-ai-sales-prep` — "Muse AI for Sales Call Prep" — account briefs, objection handling, post-call summaries — **P1** — links: /guides/muse-ai-for-sales, /guides/muse-ai-lead-research
- [TODO] `muse-ai-business-plan` — "Muse AI for Business Plans" — section-by-section drafting with honest critique — **P1** — links: /for/small-business, /guides/muse-ai-market-research
- [TODO] `muse-ai-competitor-analysis` — "Muse AI for Competitor Analysis" — structured comparisons, positioning gaps, battle cards — **P1** — links: /guides/muse-ai-market-research, /guides/muse-ai-artifacts
- [TODO] `muse-ai-sops` — "Muse AI for SOPs & Process Docs" — turning tribal knowledge into checklists — **P1** — links: /guides/muse-ai-artifacts, /for/small-business
- [TODO] `muse-ai-inventory` — "Muse AI for Inventory & Supplier Tracking" — reorder reminders, supplier comparisons — **P2** — links: /for/small-business, /guides/muse-ai-notifications-reminders
- [TODO] `muse-ai-for-restaurants` — "Muse AI for Restaurants & Cafes" — menus, specials copy, shift notes, review replies — **P2** — links: /for/small-business, /for/marketers
- [TODO] `muse-ai-agency-reporting` — "Muse AI for Agencies: Client Reporting" — monthly reports from raw metrics, status updates — **P2** — links: /for/marketers, /guides/muse-ai-artifacts
- [TODO] `muse-ai-business-roi` — "Is Muse AI Worth It for Business? An Honest ROI Look" — where agents save hours vs where they add risk — **P2** — links: /guides/is-muse-ai-free, /guides/muse-ai-pricing-plans

## Cluster F — Personal automation (15)

Muse as a life operating system: reminders, routines, and background help.

- [TODO] `muse-ai-personal-assistant` — "Setting Up Muse AI as Your Personal Assistant" — the one-time setup that makes everything else work — **P0** — links: /guides/muse-ai-account-setup, /guides/muse-ai-teach-your-style
- [TODO] `muse-ai-morning-briefing` — "Your Muse AI Morning Briefing: News, Calendar & Weather" — one standing instruction, one daily digest — **P1** — links: /guides/muse-ai-notifications-reminders, /guides/muse-ai-connectors
- [TODO] `muse-ai-bill-reminders` — "Never Miss a Bill: Muse AI Reminders & Subscription Audit" — due-date tracking + finding subscriptions to cancel — **P1** — links: /guides/muse-ai-notifications-reminders, /guides/muse-ai-personal-assistant
- [TODO] `muse-ai-budgeting` — "Muse AI for Budgeting & Expense Tracking" — spending reviews, category breakdowns, savings targets — **P1** — links: /guides/muse-ai-artifacts, /for/shopping-deals
- [TODO] `muse-ai-habit-tracking` — "Muse AI for Habits & Health Tracking" — check-ins, streaks, gentle accountability; complements /for/fitness — **P1** — links: /for/fitness, /for/daily-planning
- [TODO] `muse-ai-learning-new-skill` — "Learn Anything Faster With Muse AI" — study plans, explanations at your level, practice drills — **P1** — links: /for/students, /guides/muse-ai-voice-prompts
- [TODO] `muse-ai-home-organization` — "Muse AI for Home Organization & Cleaning Schedules" — room-by-room plans, maintenance reminders — **P2** — links: /guides/muse-ai-goals, /for/daily-planning
- [TODO] `muse-ai-gift-ideas` — "Muse AI for Gifts & Occasions" — idea lists, price tracking, reminder setup — **P2** — links: /for/shopping-deals, /guides/muse-ai-notifications-reminders
- [TODO] `muse-ai-language-practice` — "Practice a New Language With Muse AI" — conversation practice, corrections, vocab drills — **P2** — links: /guides/muse-ai-voice-mode, /guides/muse-ai-learning-new-skill
- [TODO] `muse-ai-journaling` — "Muse AI for Journaling & Reflection" — prompts, weekly reviews, pattern spotting — **P2** — links: /guides/muse-ai-brainstorming-prompts, /guides/muse-ai-privacy
- [TODO] `muse-ai-family-calendar` — "Muse AI for Family Calendars & Coordination" — multi-person scheduling, school + activity Tetris — **P2** — links: /guides/muse-ai-for-parents, /guides/muse-ai-connectors
- [TODO] `muse-ai-reading-list` — "Muse AI for Reading Lists & Book Summaries" — prioritized lists, chapter recaps, discussion questions — **P2** — links: /for/research, /guides/muse-ai-artifacts
- [TODO] `muse-ai-moving-checklist` — "Moving House? Muse AI's Ultimate Checklist" — timeline, vendor comparisons, address-change list — **P2** — links: /guides/muse-ai-goals, /for/travel
- [TODO] `muse-ai-car-buying` — "Muse AI for Car Buying & Maintenance" — model comparisons, negotiation prep, service schedules — **P2** — links: /for/shopping-deals, /guides/muse-ai-decision-prompts
- [TODO] `muse-ai-digital-declutter` — "Muse AI for Digital Declutter" — inbox, photos, files, and password-manager cleanup plans — **P2** — links: /for/manage-gmail, /guides/muse-ai-goals

## Cluster G — Muse + other apps / integrations (13)

Connectors, channels, and ecosystem workflows.

- [DONE 2026-09-28] `muse-ai-connectors` — "Muse AI Connectors: The Beginner's Guide" — what connectors are, what to connect first, permissions & safety — **P0** — links: /guides/how-to-use-muse-ai, /guides/muse-ai-privacy
- [TODO] `muse-ai-google-calendar` — "Muse AI + Google Calendar: Setup & Workflows" — scheduling, briefings, conflict checks — **P0** — links: /guides/muse-ai-connectors, /for/daily-planning
- [TODO] `muse-ai-gmail-workflows` — "5 Gmail Workflows Worth Connecting to Muse" — triage, drafting, follow-up detection; complements /for/manage-gmail — **P1** — links: /for/manage-gmail, /guides/muse-ai-connectors
- [TODO] `muse-ai-google-drive` — "Muse AI + Google Drive & Docs" — summarizing docs, drafting in your files, research from your own library — **P1** — links: /guides/muse-ai-connectors, /for/research
- [TODO] `muse-ai-outlook` — "Muse AI + Outlook & Microsoft 365" — the Microsoft-side setup for work accounts — **P1** — links: /guides/muse-ai-connectors, /for/email
- [TODO] `muse-ai-slack-teams` — "Muse AI + Slack & Microsoft Teams" — meeting recaps, thread summaries, standup drafts — **P1** — links: /guides/muse-ai-connectors, /guides/muse-ai-meeting-notes
- [TODO] `muse-ai-notion` — "Muse AI + Notion" — notes, wikis, and project pages as agent fuel — **P1** — links: /guides/muse-ai-connectors, /for/research
- [TODO] `muse-ai-zapier-automation` — "Muse AI + Automation Bridges: Hands-Off Workflows" — connecting Muse to multi-app automations with approval checkpoints — **P1** — links: /guides/muse-ai-connectors, /guides/muse-ai-goals
- [TODO] `muse-ai-apple-ecosystem` — "Muse AI + Apple: Siri, Shortcuts & iCloud Tips" — iPhone/iPad/Mac handoffs; companion to the app guide — **P1** — links: /guides/muse-ai-app-guide, /guides/muse-ai-mac-computer-use
- [TODO] `muse-ai-spotify` — "Muse AI + Music Apps: Playlists & Discovery" — mood playlists, workout mixes, music research — **P2** — links: /guides/muse-ai-connectors, /for/fitness
- [TODO] `muse-ai-smart-home` — "Muse AI + Smart Home Devices" — routines, reminders tied to devices, hands-free control — **P2** — links: /guides/muse-ai-voice-mode, /guides/muse-ai-notifications-reminders
- [TODO] `muse-ai-finance-apps` — "Muse AI + Banking & Finance Apps" — spending reviews and bill tracking with strict read-only caution — **P2** — links: /guides/muse-ai-privacy, /guides/muse-ai-budgeting
- [TODO] `muse-ai-wearables` — "Muse AI + Wearables: Health Data Conversations" — asking about your own trends; complements /for/fitness — **P2** — links: /for/fitness, /guides/muse-ai-habit-tracking

---

## Build log

| Date | Slug | Cluster | Notes |
|---|---|---|---|
| 2026-09-28 | muse-ai-50-things | D | Built in roadmap session |
| 2026-09-28 | muse-ai-connectors | G | Built in roadmap session |
| 2026-09-28 | muse-ai-cheat-sheet | B | Built in roadmap session |
| 2026-09-28 | muse-ai-glossary | B | Built in roadmap session |
| 2026-09-28 | muse-ai-app-guide | A | Built in roadmap session |

## Count check

A:13 + B:15 + C:12 + D:16 + E:16 + F:15 + G:13 = **100**
