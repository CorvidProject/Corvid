import { desc, eq, ilike, inArray, isNotNull, sql } from "drizzle-orm";
import { tokenSecurityChecks, tokenSecurityGroups, tokenSecurityReports, tokens, walletActivity, wallets } from "@corvid/db";
import type { Db } from "./app";
import { num } from "./mappers";

// Konteks chat: hanya data yang benar-benar ada di database Corvid. Model diminta tidak mengarang angka di luar blok ini.
const ADDR = /0x[0-9a-fA-F]{40}/g;
const SYMBOL = /\$([A-Za-z0-9]{2,12})\b/g;
const SMART = /smart[\s-]*(money|wallet)|whale|alpha/i;
const MAX_TOKENS = 3;

export const SYSTEM_PROMPT = [
  "You are Corvid, an assistant that explains token risk and on-chain activity on Robinhood Chain.",
  "Answer ONLY from the DATA block below. If something is not in DATA, say you do not have it. Never invent prices, holders, wallets, or scores.",
  "Corvid's risk score (0-100, higher = riskier) and smart-wallet tiers are Corvid's own estimates from indexed data, not official figures. Smart-wallet stats cover a short indexed window, not full history.",
  "Be concise (under 180 words), plain text, no markdown tables. Reply in the user's language.",
  "You cannot trade or move funds. Never give financial advice; end token assessments with a one-line reminder that this is not financial advice.",
].join("\n");

const usd = (n: number | null) => (n === null ? "unknown" : n >= 1 ? `$${n.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : `$${n.toPrecision(3)}`);
const pct = (n: number | null) => (n === null ? "unknown" : `${n.toFixed(1)}%`);
const short = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;

export function extractRefs(text: string): { addresses: string[]; symbols: string[] } {
  const addresses = [...new Set((text.match(ADDR) ?? []).map((a) => a.toLowerCase()))];
  const symbols = [...new Set([...text.matchAll(SYMBOL)].map((m) => m[1].toUpperCase()))];
  return { addresses, symbols };
}

type TokenRow = typeof tokens.$inferSelect;

async function tokenBlock(db: Db, t: TokenRow): Promise<string> {
  const lines = [
    `TOKEN ${t.symbol ?? "?"} (${t.name ?? "unnamed"}) ${t.mint}`,
    `price ${usd(num(t.priceUsd))}, market cap ${usd(num(t.marketCapUsd))}, liquidity ${usd(num(t.liquidityUsd))}, 24h volume ${usd(num(t.volumeUsd))}`,
    `change 1h ${pct(num(t.change1hPct))}, 24h ${pct(num(t.change24hPct))}; holders ${t.holders ?? "unknown"}, top-10 ${pct(num(t.top10Pct))}, dev ${pct(num(t.devPct))}, LP locked/burned ${pct(num(t.lpBurnPct))}`,
    `Corvid risk score ${t.riskScore ?? "not scored (no security data)"}${t.rugged ? ", marked rugged/honeypot" : ""}`,
  ];
  const [report] = await db.select().from(tokenSecurityReports).where(eq(tokenSecurityReports.tokenId, t.id)).orderBy(desc(tokenSecurityReports.checkedAt)).limit(1);
  if (report) {
    const groups = await db.select().from(tokenSecurityGroups).where(eq(tokenSecurityGroups.reportId, report.id));
    const checks = groups.length ? await db.select().from(tokenSecurityChecks).where(inArray(tokenSecurityChecks.groupId, groups.map((g) => g.id))) : [];
    const notOk = checks.filter((c) => c.state !== "pass").slice(0, 8).map((c) => `${c.label}: ${c.state}${c.value ? ` (${c.value})` : ""}`);
    lines.push(`security checks passed ${report.passed}/${report.total}${notOk.length ? `; not passing: ${notOk.join("; ")}` : ""}`);
  } else lines.push("no security report indexed");
  return lines.join("\n");
}

async function walletBlock(db: Db, address: string): Promise<string> {
  const [w] = await db.select().from(wallets).where(eq(wallets.address, address)).limit(1);
  if (!w) return `ADDRESS ${address}: not a token and no wallet data indexed by Corvid.`;
  return `WALLET ${address}: tier ${w.curatedTier ?? "none"}, estimated PnL ${num(w.totalPnlEth)?.toFixed(2) ?? "unknown"} ETH over the indexed window, win rate ${pct(num(w.winRate30dPct))}, closed tokens ${w.closedTokens30d ?? 0}, trades ${w.txCount30d ?? 0}`;
}

async function smartBlock(db: Db): Promise<string> {
  const top = await db.select().from(wallets).where(isNotNull(wallets.curatedTier)).orderBy(sql`${wallets.totalPnlEth} desc nulls last`).limit(5);
  if (top.length === 0) return "SMART MONEY: no scored wallets yet.";
  const act = await db
    .select({ wallet: wallets.address, side: walletActivity.side, symbol: tokens.symbol, mint: walletActivity.mint, eth: walletActivity.amountEth, at: walletActivity.at })
    .from(walletActivity)
    .innerJoin(wallets, eq(wallets.id, walletActivity.walletId))
    .leftJoin(tokens, eq(tokens.id, walletActivity.tokenId))
    .where(isNotNull(wallets.curatedTier))
    .orderBy(desc(walletActivity.at))
    .limit(8);
  return [
    "SMART MONEY (Corvid-scored wallets, estimates):",
    ...top.map((w) => `- ${short(w.address)} tier ${w.curatedTier}, PnL ${num(w.totalPnlEth)?.toFixed(2)} ETH, win ${pct(num(w.winRate30dPct))}`),
    "Recent trades:",
    ...act.map((a) => `- ${short(a.wallet)} ${a.side} ${a.symbol ?? short(a.mint)} ${num(a.eth) === null ? "" : `${num(a.eth)!.toFixed(3)} ETH`} at ${a.at.toISOString()}`),
  ].join("\n");
}

/** Blok DATA untuk satu pesan. `chatMint` = token yang dikaitkan dengan percakapan (diikutkan bila pesan tidak menyebut alamat). */
export async function buildContext(db: Db, text: string, chatMint: string | null): Promise<{ data: string; mint: string | null }> {
  const { addresses, symbols } = extractRefs(text);
  const blocks: string[] = [];
  let primary: string | null = null;
  const seen = new Set<string>();
  const addrs = addresses.length ? addresses : chatMint ? [chatMint] : [];
  for (const a of addrs.slice(0, MAX_TOKENS)) {
    const [t] = await db.select().from(tokens).where(eq(tokens.mint, a)).limit(1);
    if (t) {
      blocks.push(await tokenBlock(db, t));
      seen.add(t.mint);
      primary ??= t.mint;
    } else blocks.push(await walletBlock(db, a));
  }
  for (const s of symbols.slice(0, MAX_TOKENS)) {
    if (seen.size >= MAX_TOKENS) break;
    const [t] = await db.select().from(tokens).where(ilike(tokens.symbol, s)).orderBy(sql`${tokens.liquidityUsd} desc nulls last`).limit(1);
    if (!t) blocks.push(`SYMBOL $${s}: no token with this symbol is indexed.`);
    else if (!seen.has(t.mint)) {
      blocks.push(await tokenBlock(db, t));
      seen.add(t.mint);
      primary ??= t.mint;
    }
  }
  if (SMART.test(text)) blocks.push(await smartBlock(db));
  return { data: blocks.length ? blocks.join("\n\n") : "No token, wallet or smart-money data matched this message.", mint: primary };
}
