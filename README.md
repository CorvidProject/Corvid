# Corvid

AI trading agents on [Robinhood Chain](https://robinhood.com/us/en/newsroom/introducing-robinhood-chain/). Corvid watches smart-money wallets, reads token risk, and lets you trade from your own wallet. Live at [corvidagent.com](https://corvidagent.com). Official X account: [@CorvidAgentX](https://x.com/CorvidAgentX).

## What it does

- **Terminal:** live token table with price, liquidity, holders, top-10 share, tax and risk score, plus a Trenches view for new pools.
- **Rugcheck:** paste a token address or ticker and get honeypot, tax, ownership, holder and liquidity checks.
- **Smart wallets:** a leaderboard of wallets ranked by realised profit on Robinhood Chain, with tiers.
- **Agent builder:** compose a pipeline (watch a wallet, filter trades, notify, optionally execute) and deploy it. Agents currently run as simulations and send alerts; they do not trade on their own.
- **Swap:** trade ETH against tokens through Uniswap v3 and v4 using your own wallet. Corvid never holds your keys. Real transactions are only sent when `NEXT_PUBLIC_TRADE_MODE=live`; the default is `dry` (quote and simulate only).
- **Chat:** ask questions about a token or wallet, answered from the same data.

## Repository layout

```
apps/web      Next.js 15 (App Router) front end
apps/api      Fastify + zod REST API (OpenAPI at /openapi.json)
apps/worker   Ingest jobs: market data, candles, trades, security checks, wallet ranking
packages/db   Drizzle schema and SQL migrations (Postgres)
packages/shared  Chain config, plans, zod schemas shared by web, api and worker
docs/         Plans, decisions, infrastructure notes
deploy/       Railway service configs
```

## Data sources

DexScreener, GeckoTerminal, GoPlus (token security), CoinGecko (ETH price), and the Robinhood Chain RPC. Swaps use the Uniswap contracts on chain 4663.

## Run it locally

Requirements: Node 22 or newer and pnpm.

```bash
pnpm install
cp .env.example .env        # then fill in the values you need
NEXT_PUBLIC_USE_FIXTURES=true pnpm --filter @corvid/web dev    # front end with sample data, no backend
```

To run the full stack you need a Postgres database (`DATABASE_URL`), then:

```bash
pnpm --filter @corvid/db migrate     # apply migrations
pnpm dev                              # web, api and worker via Turborepo
```

Useful scripts from the repository root: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`.

All environment variables are listed, without values, in [`.env.example`](.env.example) and described in [`docs/infrastructure.md`](docs/infrastructure.md).

## Safety notes

- Trades are `dry` by default. Switching to `live` is an explicit, per-deployment decision.
- Never commit keys. Private keys, API keys and database passwords belong in your own `.env` or hosting dashboard.
- Market data is informational and can be delayed or incomplete. Nothing here is financial advice.

## License

See [LICENSE](LICENSE).
