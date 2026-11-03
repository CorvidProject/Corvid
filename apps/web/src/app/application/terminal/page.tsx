import { getData, pct, short, usd, compact } from "@/lib/data";
import { Page, Panel, Stat, Tone } from "@/components/ui";
import { TokenTable } from "@/components/token-table";

export const metadata = { title: "Terminal | Corvid" };

export default async function Terminal() {
  const [{ tokens }, { token }, trades, stats] = await Promise.all([getData("tokens-trending"), getData("token-detail"), getData("token-trades"), getData("stats")]);
  return (
    <Page title="Terminal" subtitle="Trending tokens on Solana, with risk and flow in one view.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <Stat label="Smart wallets" value={stats.smartWallets} />
        <Stat label="Published agents" value={stats.publishedAgents} />
        <Stat label="Active agents" value={stats.activeAgents} />
        <Stat label="Swaps executed" value={stats.swapsExecuted} />
      </div>
      <div className="grid lg:grid-cols-[1fr_340px] gap-4">
        <TokenTable tokens={tokens} />
        <div className="flex flex-col gap-4">
          <Panel>
            <p className="eyebrow">Selected token</p>
            <h2 className="text-[18px] font-semibold mt-1">{token.symbol} <span className="text-[12px]" style={{ color: "var(--v2-t-4)" }}>{short(token.mint)}</span></h2>
            <p className="text-[22px] tabular-nums mt-2">{usd(token.price)}</p>
            <p className="text-[12px] mt-1">MCap {compact(token.marketCap)} · Liq {usd(token.liquidity, 0)} · Vol {usd(token.volume, 0)}</p>
            <p className="text-[12px] mt-1">1h <Tone v={token.change1h}>{pct(token.change1h)}</Tone> · 24h <Tone v={token.change24h}>{pct(token.change24h)}</Tone></p>
          </Panel>
          <Panel>
            <p className="eyebrow mb-2">Live trades</p>
            <ul className="text-[12px] flex flex-col gap-1.5">
              {trades.trades.slice(0, 8).map((t) => (
                <li key={t.txHash} className="flex justify-between">
                  <span style={{ color: t.type === "buy" ? "var(--v2-pos)" : "var(--v2-neg)" }}>{t.type}</span>
                  <span className="tabular-nums">{t.solAmount.toFixed(3)} SOL</span>
                  <span style={{ color: "var(--v2-t-4)" }}>{short(t.wallet)}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Page>
  );
}
