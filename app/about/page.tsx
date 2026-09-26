import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Muse Hub",
  description:
    "Muse Hub is an independent, unofficial guide to Muse AI — 15 practical guides on access, prompts, WhatsApp, tokens, and honest comparisons.",
  alternates: { canonical: `${SITE.baseUrl}/about` },
};

export default function AboutPage() {
  return (
    <LegalPage
      slug="about"
      kicker="About"
      title="About Muse Hub"
      deck="An independent field guide to Muse AI — built to help you go from your first message to finished work."
    >
      <h2>What this is</h2>
      <p>
        Muse Hub is a practical, independent guide to Muse AI — Meta’s personal AI agent.
        We publish clear, jargon-free explainers on getting access, writing better prompts,
        using Muse on channels like WhatsApp, understanding token rewards, and choosing
        between Muse, ChatGPT, Claude, and Meta AI.
      </p>

      <h2>Why it exists</h2>
      <p>
        New AI products launch with more hype than guidance. Official docs tell you{" "}
        <em>what</em> a product does; they rarely tell you <em>how</em> to get good results
        from it, what the catches are, or how it compares to the alternatives you already
        use. Muse Hub fills that gap: hands-on, honest, and written for real projects.
      </p>

      <h2>What you’ll find here</h2>
      <ul>
        <li>
          <strong>15 focused guides</strong> — from “What is Muse AI?” to invite codes,
          tutorials, reviews, and use cases. <a href="/#guides">Browse the library</a>.
        </li>
        <li>
          <strong>A copy-ready prompt library</strong> — starting points you can adapt to
          your own work.
        </li>
        <li>
          <strong>An honest comparison</strong> of Muse AI vs ChatGPT vs Claude vs Meta AI
          — task-based, no universal winner declared.
        </li>
        <li>
          <strong>Referral guidance</strong> — how invite codes actually work, with
          realistic expectations about rewards. See our{" "}
          <a href="/affiliate-disclosure">Affiliate Disclosure</a>.
        </li>
      </ul>

      <h2>Independent and unofficial</h2>
      <p>
        Muse Hub is not affiliated with, endorsed by, or sponsored by Meta. It’s run by an
        independent creator who uses AI tools daily and writes about what actually works.
        That independence is the point: we can say what official pages can’t.
      </p>

      <h2>Beyond guides: the skills catalog</h2>
      <p>
        We also maintain <a href={SITE.skillsUrl} target="_blank" rel="noopener noreferrer">
        awesome-muse-skills</a> — a catalog of hundreds of reusable skill definitions that
        extend what Muse can do, from content creation to research workflows. The guides
        teach you the mindset; the catalog gives you the tools.
      </p>

      <h2>Get in touch</h2>
      <p>
        Spotted an error, want a guide on a topic we haven’t covered, or interested in
        working together? <a href="/contact">Contact us</a> — we read everything.
      </p>
    </LegalPage>
  );
}
