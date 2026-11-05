// Seed Solana-only dari data contoh di apps/api/seed. Alamat/DEX non-Solana dilewati.
// Pakai: DATABASE_URL=... pnpm --filter @corvid/api seed
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sql } from "drizzle-orm";
import {
  createDb,
  memescopeCoins,
  platformStats,
  tokenSecurityChecks,
  tokenSecurityGroups,
  tokenSecurityMetrics,
  tokenSecurityReports,
  tokenTrades,
  tokenTrending,
  tokens,
} from "@corvid/db";
import { solanaAddress } from "@corvid/shared"; // seed lama = Solana saja
import type { Db } from "./app";

const seedDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../seed");
const load = <T = any>(f: string): T => JSON.parse(fs.readFileSync(path.join(seedDir, f), "utf8"));

const EVM_DEX = new Set(["uniswap", "sushiswap", "pancakeswap", "aerodrome", "baseswap"]);
const isSol = (m: unknown): m is string => typeof m === "string" && solanaAddress.safeParse(m).success;
const dexOf = (d: string | null | undefined) => (d && !EVM_DEX.has(d.toLowerCase()) ? d : null);
const str = (v: unknown) => (v === null || v === undefined ? null : String(v));
const date = (secs: unknown) => (typeof secs === "number" ? new Date(secs * 1000) : null);

export async function seedAll(db: Db) {
  // --- stats
  const stats = load("stats.json");
  await db
    .insert(platformStats)
    .values({ id: 1, ...stats })
    .onConflictDoUpdate({ target: platformStats.id, set: { ...stats, updatedAt: new Date() } });

  // --- tokens + trending
  const upsertToken = async (t: any) => {
    const values = {
      mint: t.mint,
      name: t.name?.trim() ?? null,
      symbol: t.symbol?.trim() ?? null,
      imageUrl: t.image ?? null,
      dex: dexOf(t.dex),
      priceUsd: str(t.price),
      marketCapUsd: str(t.marketCap),
      liquidityUsd: str(t.liquidity),
      lpBurnPct: str(t.lpBurn),
      volumeUsd: str(t.volume),
      volume1hUsd: str(t.volume1h),
      buys: t.buys ?? null,
      sells: t.sells ?? null,
      txns: t.txns ?? null,
      makers: t.makers ?? null,
      change5mPct: str(t.change5m),
      change1hPct: str(t.change1h),
      change6hPct: str(t.change6h),
      change24hPct: str(t.change24h),
      riskScore: t.riskScore ?? null,
      rugged: !!t.rugged,
      top10Pct: str(t.top10),
      devPct: str(t.devPct),
      holders: t.holders ?? null,
      twitterUrl: t.twitter ?? null,
      telegramUrl: t.telegram ?? null,
      websiteUrl: t.website ?? null,
      createdAtChain: date(t.createdAt),
    };
    const [row] = await db
      .insert(tokens)
      .values(values)
      .onConflictDoUpdate({ target: tokens.mint, set: { ...values, updatedAt: new Date(), lastSeenAt: new Date() } })
      .returning({ id: tokens.id });
    return row.id;
  };

  const snapshotAt = new Date();
  for (const [tab, file] of [
    ["trending", "trending-solana-trending.json"],
    ["new", "trending-solana-new.json"],
  ] as const) {
    const list = load(file).tokens.filter((t: any) => isSol(t.mint));
    let rank = 1;
    for (const t of list) {
      const id = await upsertToken(t);
      await db.insert(tokenTrending).values({ tab, rank: rank++, tokenId: id, snapshotAt });
    }
  }

  // --- detail sample (token, metrics, trades, security)
  const sample = load("token-sample.json").token;
  if (isSol(sample.mint)) {
    const id = await upsertToken({
      ...sample,
      riskScore: sample.risk?.score,
      top10: sample.topHoldersPercent,
      devPct: sample.devHoldingsPercent,
      holders: sample.holdersCount,
      dex: sample.market,
    });
    await db
      .update(tokens)
      .set({
        description: sample.description || null,
        decimals: sample.decimals,
        poolId: sample.poolId ?? null,
        totalSupply: str(sample.totalSupply),
        change1mPct: str(sample.change1m),
        freezeAuthority: sample.security?.freezeAuthority ?? null,
        mintAuthority: sample.security?.mintAuthority ?? null,
      })
      .where(sql`${tokens.id} = ${id}`);
    await db.insert(tokenSecurityMetrics).values({ tokenId: id }).onConflictDoNothing();

    for (const t of load("token-trades-sample.json").trades) {
      await db
        .insert(tokenTrades)
        .values({
          tokenId: id,
          txHash: t.txHash,
          walletAddress: t.wallet,
          side: t.type,
          tokenAmount: String(t.tokenAmount),
          solAmount: str(t.solAmount),
          priceUsd: str(t.priceUsd),
          marketCapUsd: str(t.marketCapUsd),
          tradedAt: new Date(t.timestamp),
        })
        .onConflictDoNothing();
    }

    const sec = load("token-security-sample.json");
    const [report] = await db
      .insert(tokenSecurityReports)
      .values({ tokenId: id, checked: sec.checked, passed: sec.passed, total: sec.total })
      .returning({ id: tokenSecurityReports.id });
    let gi = 0;
    for (const g of sec.groups) {
      const [grp] = await db
        .insert(tokenSecurityGroups)
        .values({ reportId: report.id, title: g.title, sortOrder: gi++ })
        .returning({ id: tokenSecurityGroups.id });
      let ci = 0;
      for (const c of g.checks) {
        await db.insert(tokenSecurityChecks).values({
          groupId: grp.id,
          label: c.label,
          state: c.state,
          value: c.value ?? null,
          hint: c.hint ?? null,
          sortOrder: ci++,
        });
      }
    }
  }

  // --- memescope
  for (const [stage, file] of [
    ["new", "memescope-new.json"],
    ["stretch", "memescope-stretch.json"],
    ["migrated", "memescope-migrated.json"],
  ] as const) {
    for (const c of load(file).coins.filter((c: any) => isSol(c.mint))) {
      const values = {
        mint: c.mint,
        stage,
        name: c.name ?? null,
        symbol: c.symbol ?? null,
        imageUrl: c.image ?? null,
        progressPct: str(c.progress) ?? "0",
        marketCapUsd: str(c.marketCapUsd) ?? "0",
        athMarketCapUsd: str(c.athMarketCapUsd),
        replies: c.replies ?? 0,
        complete: !!c.complete,
        live: !!c.live,
        creator: c.creator || null,
        dex: dexOf(c.dex),
        createdAtChain: date(c.createdAt),
        lastTradeAt: date(c.lastTradeAt),
      };
      await db.insert(memescopeCoins).values(values).onConflictDoUpdate({ target: memescopeCoins.mint, set: values });
    }
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL belum diisi");
  const { db, pool } = createDb(url);
  await seedAll(db);
  await pool.end();
  console.log("seed selesai");
}
