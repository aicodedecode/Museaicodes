/**
 * Verified API token prices for the /tools/token-price-compare tool.
 *
 * GENERATED FILE — do not hand-edit. Source of truth is
 * data/token-prices.csv; regenerate with:
 *   ~/workspace/.venvs/scrape/bin/python scripts/build-token-prices.py
 *
 * Every figure below was checked against the provider's official pricing
 * page on PRICE_VERIFIED. Prices move constantly — to update the table,
 * edit the CSV (newest verified_date wins) and re-run the script.
 *
 * IMPORTANT: never take a price from training memory or a third-party
 * roundup. Unverifiable rows must be excluded or marked "unverified".
 */

export interface PricedModel {
  /** stable key */
  id: string;
  provider: string;
  /** display model name */
  model: string;
  /** USD per 1M input tokens (standard / on-demand tier) */
  inputPerMillion: number;
  /** USD per 1M output tokens (standard / on-demand tier) */
  outputPerMillion: number;
  /** human label, e.g. "1M" */
  contextWindow: string;
  /** official pricing page URL */
  pricingUrl: string;
  /** caveat shown under the row (promo windows, peak rates, thresholds) */
  pricingNote?: string;
}

export const PRICE_VERIFIED = "October 03, 2026";

export const PRICED_MODELS: PricedModel[] = [
  {
    id: "openai-gpt6-sol",
    provider: "OpenAI",
    model: "GPT-6.1 Sol",
    inputPerMillion: 2.0,
    outputPerMillion: 10.0,
    contextWindow: "≈1M",
    pricingUrl: "https://developers.openai.com/api/docs/pricing",
    pricingNote:
      "Standard short-context rate; requests over 272K prompt tokens bill at 2× input / 1.5× output.",
  },
  {
    id: "anthropic-sonnet-5-5",
    provider: "Anthropic",
    model: "Claude Sonnet 5.5",
    inputPerMillion: 2.0,
    outputPerMillion: 10.0,
    contextWindow: "1M",
    pricingUrl: "https://platform.claude.com/docs/en/about-claude/pricing",
  },
  {
    id: "xai-grok-4-7",
    provider: "xAI",
    model: "Grok 4.7",
    inputPerMillion: 2.0,
    outputPerMillion: 6.0,
    contextWindow: "500K",
    pricingUrl: "https://docs.x.ai/developers/grok-4-7",
    pricingNote:
      "Standard rate below 200K prompt tokens; long-context requests bill at 2×.",
  },
  {
    id: "google-gemini-3-8-flash",
    provider: "Google",
    model: "Gemini 3.8 Flash",
    inputPerMillion: 0.75,
    outputPerMillion: 3.75,
    contextWindow: "1M",
    pricingUrl: "https://ai.google.dev/gemini-api/docs/pricing",
    pricingNote:
      "Introductory rate through Dec 31, 2026; $1.50 / $7.50 from Jan 1, 2027.",
  },
  {
    id: "deepseek-v4-pro",
    provider: "DeepSeek",
    model: "DeepSeek V4 Pro",
    inputPerMillion: 1.32,
    outputPerMillion: 3.96,
    contextWindow: "1M",
    pricingUrl: "https://api-docs.deepseek.com/quick_start/pricing",
    pricingNote: "Peak hours; off-peak (nights & weekends UTC) is half.",
  },
  {
    id: "mistral-large-3",
    provider: "Mistral",
    model: "Mistral Large 3",
    inputPerMillion: 0.5,
    outputPerMillion: 1.5,
    contextWindow: "256K",
    pricingUrl: "https://mistral.ai/pricing",
  },
  {
    id: "typesafe-jev",
    provider: "TypeSafe",
    model: "Jev",
    inputPerMillion: 0.042,
    outputPerMillion: 0.0,
    contextWindow: "—",
    pricingUrl: "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
    pricingNote:
      "Early-access pricing from the official launch post; output tokens are free (\"too cheap to meter\").",
  },
];

/** Volume presets (millions of tokens per month). */
export const PRESETS = [
  { id: "light", label: "Light", inputM: 0.5, outputM: 0.1 },
  { id: "medium", label: "Medium", inputM: 2, outputM: 0.5 },
  { id: "heavy", label: "Heavy", inputM: 10, outputM: 3 },
] as const;

/** Monthly cost for one model at a given volume. */
export function monthlyCost(
  m: PricedModel,
  inputM: number,
  outputM: number
): number {
  return inputM * m.inputPerMillion + outputM * m.outputPerMillion;
}
