/**
 * Build-time search index generator for museaicodes.com.
 *
 * Reads the site's own data modules (guides, connectors, tools, prompts,
 * templates, encyclopedia, use-cases, can-do tasks) plus a hand-curated list
 * of static pages, and emits a lean JSON index to public/search-index.json.
 *
 * The TS sources are transpiled in-memory with the project's own TypeScript —
 * no extra dependencies. Run automatically via the `prebuild` npm script, so
 * Vercel and local builds always ship a fresh index.
 *
 * Index record shape (short keys keep the file small):
 *   { t: title, u: url, g: group, s: snippet, k: keywords }
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const require = createRequire(join(root, "package.json"));
const ts = require("typescript");

const LIBS = [
  "site",
  "guides",
  "connectors",
  "tools",
  "prompts",
  "templates",
  "encyclopedia",
  "use-cases",
  "can-do",
];

function loadLibs() {
  const outDir = join(tmpdir(), "museaicodes-search-idx");
  rmSync(outDir, { recursive: true, force: true });
  mkdirSync(outDir, { recursive: true });
  for (const name of LIBS) {
    const src = readFileSync(join(root, "lib", `${name}.ts`), "utf8");
    const { outputText, diagnostics } = ts.transpileModule(src, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
      reportDiagnostics: true,
    });
    const errors = (diagnostics || []).filter(
      (d) => d.category === ts.DiagnosticCategory.Error
    );
    if (errors.length) {
      throw new Error(
        `Failed to transpile lib/${name}.ts: ${errors
          .map((d) => ts.flattenDiagnosticMessageText(d.messageText, " "))
          .join("; ")}`
      );
    }
    writeFileSync(join(outDir, `${name}.js`), outputText);
  }
  const req = createRequire(join(outDir, "index.js"));
  const mods = {};
  for (const name of LIBS) mods[name] = req(`./${name}.js`);
  return mods;
}

const trunc = (s, n = 140) => {
  const clean = String(s || "").replace(/\s+/g, " ").trim();
  return clean.length > n ? clean.slice(0, n - 1).trimEnd() + "…" : clean;
};

function buildRecords(m) {
  const recs = [];
  const push = (t, u, g, s, k = "") => {
    if (t && u) recs.push({ t, u, g, s: trunc(s, 150), k });
  };

  for (const gd of m.guides.GUIDES)
    push(gd.title, `/guides/${gd.slug}`, "Guides", gd.deck, `${gd.category} ${gd.keywords}`);

  for (const c of m.connectors.CONNECTORS)
    push(c.name, `/connectors/${c.slug}`, "Connectors", c.tagline, `${c.category} ${c.status}`);

  for (const t of m.tools.INTERACTIVE_TOOLS)
    push(t.title, t.href, "Tools", t.deck, t.tag);

  for (const p of m.prompts.PROMPTS)
    push(p.title, "/prompts", "Prompts", `${p.category} — ${p.prompt}`, p.category);

  for (const t of m.templates.TEMPLATES)
    push(t.title, "/templates", "Templates", t.tagline, t.category);

  for (const term of m.encyclopedia.TERMS)
    push(term.term, "/encyclopedia", "Encyclopedia", term.definition);

  for (const uc of m["use-cases"].USE_CASES)
    push(uc.title, "/use-cases", "Use cases", uc.description, uc.persona);

  for (const task of m["can-do"].TASKS)
    push(
      task.task,
      "/tools/can-muse-do-this",
      "Can Muse do this",
      task.whatItCanDo,
      `${task.category} ${task.verdict}`
    );

  const pages = [
    ["/", "Muse Hub — unofficial Muse AI guides", "Pages", "Tutorials, referral guidance, and honest comparisons for Muse AI."],
    ["/guides", "All guides", "Pages", "Every Muse AI guide: setup, invite codes, features, comparisons."],
    ["/compare", "Compare Muse with other AI assistants", "Pages", "Side-by-side comparisons of Muse AI against ChatGPT, Claude, Gemini and more."],
    ["/redeem", "Redeem an invite or referral code", "Pages", "How to enter a Muse invite or referral code in the app."],
    ["/connectors", "Muse connectors directory", "Pages", "Every official Muse connector, verified against Meta's own channels."],
    ["/tools", "Interactive tools", "Pages", "Calculators, quizzes, wizards and checkers for Muse AI."],
    ["/token-calculator", "Token calculator", "Pages", "Estimate illustrative monthly token usage for Muse AI."],
    ["/tools/token-price-compare", "Token price comparison", "Pages", "Muse token prices next to ChatGPT, Claude, Gemini, Grok, DeepSeek and Mistral."],
    ["/quiz", "Muse AI quiz", "Pages", "Test what you know about Muse AI."],
    ["/offer-status", "Offer status", "Pages", "Check whether the current Muse promotional offer is still running."],
    ["/tools/availability-checker", "Availability checker", "Pages", "Where Muse AI is available right now, by country."],
    ["/tools/connector-wizard", "Connector setup wizard", "Pages", "Step-by-step setup for Muse connectors."],
    ["/tools/muse-challenge", "30-things challenge", "Pages", "Thirty things to try with Muse AI in thirty days."],
    ["/tools/can-muse-do-this", "Can Muse do this?", "Pages", "Honest yes / no / depends verdicts on real tasks people try with Muse."],
    ["/prompts", "Prompt library", "Pages", "Copy-ready prompts for building, writing, and automating with Muse."],
    ["/templates", "Agent templates", "Pages", "Ready-to-paste agent setups for common jobs."],
    ["/codes", "Invite and referral codes", "Pages", "How invite and referral codes work, plus the community code board."],
    ["/app-guide", "App guide", "Pages", "Setting up the Muse app, step by step."],
    ["/encyclopedia", "Encyclopedia", "Pages", "Plain-language definitions for Muse and AI terms."],
    ["/use-cases", "Use cases", "Pages", "What people actually use Muse AI for, by persona."],
    ["/news", "News", "Pages", "The latest Muse AI news, verified before publishing."],
    ["/updates", "Updates", "Pages", "Changelog of what's new with Muse AI and this site."],
    ["/videos", "Videos", "Pages", "Watch: Muse AI explained on video."],
    ["/about", "About Muse Hub", "Pages", "Who runs this independent guide site and why."],
    ["/contact", "Contact", "Pages", "Get in touch with the Muse Hub team."],
  ];
  for (const [u, t, g, s] of pages) push(t, u, g, s);

  // Dedupe on url+title, keep first occurrence.
  const seen = new Set();
  return recs.filter((r) => {
    const key = `${r.u}‖${r.t}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const mods = loadLibs();
const records = buildRecords(mods);
const out = join(root, "public", "search-index.json");
writeFileSync(
  out,
  JSON.stringify({ builtAt: new Date().toISOString(), count: records.length, records })
);
console.log(`search index: ${records.length} records → public/search-index.json`);
