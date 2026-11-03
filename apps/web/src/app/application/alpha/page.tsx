import { getData, ago, short } from "@/lib/data";
import { Page, Panel, Table, Tone } from "@/components/ui";

export const metadata = { title: "Smart Wallets | Corvid" };

export default async function Alpha() {
  const [{ wallets }, { activity }] = await Promise.all([getData("alpha-curated"), getData("alpha-activity")]);
  return (
    <Page title="Smart Wallets" subtitle="Curated wallets ranked by 30-day performance. Fixture data.">
      <div className="grid lg:grid-cols-[1fr_320px] gap-4">
        <Table head={["Wallet", "Tier", "Win rate", "PnL (SOL)", "Tx 30d", "Avg hold"]} right={[2, 3, 4, 5]}>
          {wallets.map((w) => (
            <tr key={w.address}>
              <td><span className="font-medium">{w.curated_label}</span> <span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>{short(w.address)}</span></td>
              <td>{w.curated_tier}</td>
              <td className="text-right tabular-nums">{w.win_rate_30d.toFixed(1)}%</td>
              <td className="text-right"><Tone v={w.pnl_sol}>{w.pnl_sol.toFixed(2)}</Tone></td>
              <td className="text-right tabular-nums">{w.tx_count_30d}</td>
              <td className="text-right tabular-nums">{w.avg_hold_hours}h</td>
            </tr>
          ))}
        </Table>
        <Panel>
          <p className="eyebrow mb-3">Recent activity</p>
          <ul className="flex flex-col gap-2 text-[13px]">
            {activity.map((a, i) => (
              <li key={i} className="flex justify-between">
                <span><span style={{ color: a.side === "buy" ? "var(--v2-pos)" : "var(--v2-neg)" }}>{a.side}</span> {a.symbol}</span>
                <span className="tabular-nums" style={{ color: "var(--v2-t-4)" }}>{a.sol} SOL · {ago(a.at)}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </Page>
  );
}
