# Data pipelines

## Token prices (`token-prices.csv` → `lib/token-prices.ts`)

`token-prices.csv` is the source of truth for the /tools/token-price-compare
dashboard. One row per model per verification date; the newest `verified_date`
wins, so appending a freshly verified snapshot keeps history for future
price-trend charts.

To update prices:

1. Edit `token-prices.csv` (newest `verified_date` first-wins on ties is by row order).
2. Regenerate: `~/workspace/.venvs/scrape/bin/python scripts/build-token-prices.py`
3. The script validates with pandas (positive prices, unique ids, https
   pricing URLs, parseable dates) and rewrites `lib/token-prices.ts`.

Never hand-edit `lib/token-prices.ts` — it is generated.
