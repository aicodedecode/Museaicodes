#!/usr/bin/env python3
"""Build lib/token-prices.ts from data/token-prices.csv.

Source of truth for the /tools/token-price-compare dashboard is the CSV.
To update prices: edit data/token-prices.csv (one row per model per
verification date; the newest verified_date wins), then run:

    ~/workspace/.venvs/scrape/bin/python scripts/build-token-prices.py

The script validates with pandas and regenerates lib/token-prices.ts.
Never hand-edit the generated file.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import NoReturn

import pandas as pd

ROOT = Path(__file__).resolve().parent.parent
CSV_PATH = ROOT / "data" / "token-prices.csv"
OUT_PATH = ROOT / "lib" / "token-prices.ts"

REQUIRED = [
    "id",
    "provider",
    "model",
    "input_per_million",
    "output_per_million",
    "context_window",
    "pricing_url",
    "verified_date",
]


def fail(msg: str) -> NoReturn:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def ts_str(s: str) -> str:
    """Render a Python string as a double-quoted TS string literal (UTF-8 kept)."""
    return json.dumps(s, ensure_ascii=False)


def main() -> None:
    df = pd.read_csv(CSV_PATH, dtype=str).fillna("")
    missing = [c for c in REQUIRED if c not in df.columns]
    if missing:
        fail(f"missing columns: {missing}")

    # --- validation -----------------------------------------------------
    if df.empty:
        fail("CSV has no data rows")
    for col in ["id", "provider", "model", "pricing_url", "verified_date"]:
        blanks = df.index[df[col].str.strip() == ""].tolist()
        if blanks:
            fail(f"blank {col} on rows {blanks}")
    dupes = df["id"][df["id"].duplicated()].unique().tolist()
    if dupes:
        fail(f"duplicate ids: {dupes}")

    for num_col in ["input_per_million", "output_per_million"]:
        vals = pd.to_numeric(df[num_col], errors="coerce")
        bad = df.index[vals.isna() | (vals <= 0)].tolist()
        if bad:
            fail(f"non-positive {num_col} on rows {bad}")
        df[num_col] = vals

    weird_ratio = df.index[df["output_per_million"] < df["input_per_million"]].tolist()
    if weird_ratio:
        print(
            f"WARNING: output cheaper than input on rows {weird_ratio} "
            "(unusual — double-check the source)",
            file=sys.stderr,
        )

    bad_urls = df.index[~df["pricing_url"].str.match(r"^https://\S+$")].tolist()
    if bad_urls:
        fail(f"pricing_url not an https URL on rows {bad_urls}")

    dates = pd.to_datetime(df["verified_date"], errors="coerce")
    if dates.isna().any():
        fail(f"unparseable verified_date on rows {df.index[dates.isna()].tolist()}")

    # Newest verification date wins (keeps history appendable for trends later).
    latest = dates.max()
    df = df.loc[dates == latest].copy()
    verified_label = latest.strftime("%B %d, %Y")
    print(f"Using {len(df)} models verified {verified_label}")

    # --- codegen ----------------------------------------------------------
    rows: list[str] = []
    for _, r in df.iterrows():
        note = r["pricing_note"].strip() if "pricing_note" in df.columns else ""
        entry = (
            "  {\n"
            f"    id: {ts_str(r['id'])},\n"
            f"    provider: {ts_str(r['provider'])},\n"
            f"    model: {ts_str(r['model'])},\n"
            f"    inputPerMillion: {float(r['input_per_million'])},\n"
            f"    outputPerMillion: {float(r['output_per_million'])},\n"
            f"    contextWindow: {ts_str(r['context_window'])},\n"
            f"    pricingUrl: {ts_str(r['pricing_url'])},\n"
        )
        if note:
            # wrap long notes to match repo style (4-space continuation)
            line = f"    pricingNote: {ts_str(note)},"
            if len(line) > 80:
                entry += "    pricingNote:\n      " + ts_str(note) + ",\n"
            else:
                entry += line + "\n"
        entry += "  },"
        rows.append(entry)

    models_block = "\n".join(rows)

    out = f"""/**
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

export interface PricedModel {{
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
}}

export const PRICE_VERIFIED = "{verified_label}";

export const PRICED_MODELS: PricedModel[] = [
{models_block}
];

/** Volume presets (millions of tokens per month). */
export const PRESETS = [
  {{ id: "light", label: "Light", inputM: 0.5, outputM: 0.1 }},
  {{ id: "medium", label: "Medium", inputM: 2, outputM: 0.5 }},
  {{ id: "heavy", label: "Heavy", inputM: 10, outputM: 3 }},
] as const;

/** Monthly cost for one model at a given volume. */
export function monthlyCost(
  m: PricedModel,
  inputM: number,
  outputM: number
): number {{
  return inputM * m.inputPerMillion + outputM * m.outputPerMillion;
}}
"""
    OUT_PATH.write_text(out, encoding="utf-8")
    print(f"Wrote {OUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
