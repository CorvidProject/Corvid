// Bangun fixture API dari data seed lama (hanya Solana). Jalankan di packages/api-client: node scripts/make-fixtures.mjs
import { readFileSync, writeFileSync, mkdirSync, cpSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../../..");
const L = (f) => JSON.parse(readFileSync(resolve(root, "legacy/be/data", f), "utf8"));
const out = resolve(here, "../fixtures");
mkdirSync(out, { recursive: true });
const W = (name, data) => writeFileSync(resolve(out, name + ".json"), JSON.stringify(data, null, 2) + "\n");
const isSol = (m) => typeof m === "string" && !m.startsWith("0x") && m.length >= 32;
const now = 1793600000; // tetap: fixture deterministik (UTC epoch detik)

const trending = L("trending-solana-trending.json").tokens.filter((t) => isSol(t.mint)).slice(0, 25).map((t) => {
  const { buyTax, sellTax, dex, ...rest } = t;
  return { ...rest, dex: dex === "uniswap" ? "raydium" : dex, transferFeeBps: 0 };
});
W("stats", L("stats.json"));
W("tokens-trending", { tokens: trending });
W("tokens-new", { tokens: L("trending-solana-new.json").tokens.filter((t) => isSol(t.mint)).slice(0, 25) });
const detail = L("token-sample.json");
W("token-detail", detail);
W("token-security", L("token-security-sample.json"));
W("token-trades", L("token-trades-sample.json"));
W("memescope", { new: L("memescope-new.json").coins, stretch: L("memescope-stretch.json").coins, migrated: L("memescope-migrated.json").coins });

const wallets = [...new Set(L("token-trades-sample.json").trades.map((t) => t.wallet))].slice(0, 8);
W("alpha-curated", {
  fixture: true,
  wallets: wallets.map((address, i) => ({
    address, category: ["whale", "sniper", "kol", "unknown"][i % 4], curated_tier: ["S", "A", "A", "B"][i % 4],
    curated_label: `Fixture wallet ${i + 1}`, win_rate_30d: 38 + i * 4.5, pnl_eth: +(12.4 - i * 1.3).toFixed(2),
    tx_count_30d: 120 + i * 17, tokens_traded: 9 + i, avg_hold_hours: 6 + i * 3, last_active: new Date((now - i * 3600) * 1000).toISOString(),
  })),
});
W("alpha-activity", { activity: wallets.slice(0, 5).map((w, i) => ({ wallet: w, side: i % 2 ? "sell" : "buy", symbol: trending[i]?.symbol ?? "TOKEN", mint: trending[i]?.mint, sol: +(1.2 + i * 0.8).toFixed(2), at: now - i * 420 })) });
W("alpha-watchlists", { watchlists: [{ id: 1, name: "Default", wallets: wallets.slice(0, 3) }] });

const la = L("live-agent.json");
W("live-agent", la);
W("agents", { agents: [{ id: 59, name: "Token Trading - Balanced", type: "auto_trader", chain: "solana", running: false, tokenSymbol: la.agent?.tokenSymbol ?? null, winRate: 54.2, runs: 1541, createdAt: "2026-10-01T00:00:00Z" }, { id: 60, name: "Wallet Monitor - Whales", type: "wallet_monitor", chain: "solana", running: true, tokenSymbol: null, winRate: null, runs: 312, createdAt: "2026-10-05T00:00:00Z" }] });
W("marketplace-feed", { agents: [{ id: 59, name: "Token Trading - Balanced", creator: "corvid", type: "auto_trader", winRate: 54.2, subscribers: 41, priceCredits: 0 }, { id: 61, name: "New Token Sniper", creator: "fixture", type: "signal_bot", winRate: 47.8, subscribers: 17, priceCredits: 0 }] });
W("portfolio", { totalUsd: 1842.55, pnlUsd: 212.4, pnlPct: 13.03, positions: trending.slice(0, 4).map((t, i) => ({ mint: t.mint, symbol: t.symbol, amount: 1000 * (i + 1), valueUsd: 300 + i * 120, pnlUsd: (i % 2 ? -1 : 1) * (18 + i * 9), pnlPct: (i % 2 ? -1 : 1) * (4 + i) })), agents: [] });
W("inbox", { items: [{ id: 1, kind: "signal", title: "Smart wallet bought " + (trending[0]?.symbol ?? "TOKEN"), body: "Fixture notification.", at: now - 600, read: false }, { id: 2, kind: "system", title: "Welcome to Corvid", body: "25 free AI analyses on your account.", at: now - 86400, read: true }] });
W("chats", { chats: [{ id: 1, title: "Risk check", updatedAt: now - 1200, messages: [{ role: "user", content: "Is this token safe?" }, { role: "assistant", content: "Fixture reply: mint and freeze authority are revoked; top-10 holders hold a high share." }] }] });
W("signals", { signals: trending.slice(0, 6).map((t, i) => ({ id: i + 1, type: ["wallet_buy", "new_token", "risk_flag"][i % 3], symbol: t.symbol, mint: t.mint, score: t.riskScore, at: now - i * 900 })) });
W("leaderboard", { rows: Array.from({ length: 10 }, (_, i) => ({ rank: i + 1, agentId: 100 + i, name: `Agent ${i + 1}`, winRate: +(62 - i * 2.1).toFixed(1), pnlPct: +(48 - i * 4.2).toFixed(1), runs: 400 - i * 25 })) });
W("tokenomics", { token: "CRVD", status: "not_launched", totalSupply: null, burned: "0", burnEvents: [] });
W("profile", { id: "fixture-user", email: "user@example.com", displayName: "Fixture User", credits: 25, wallet: wallets[0] ?? null, plan: "free" });
W("trading-prefs", { slippageBps: 100, priorityFeeLamports: 100000, mode: "dry" });
W("sol-price", { usd: 148.2 });

mkdirSync(resolve(root, "docs/api/fixtures"), { recursive: true });
cpSync(out, resolve(root, "docs/api/fixtures"), { recursive: true });
console.log("fixtures ok");
