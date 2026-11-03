import { getData, pct, usd } from "@/lib/data";
import { Page, Stat, Table, Tone } from "@/components/ui";

export const metadata = { title: "Portfolio | Corvid" };

export default async function Portfolio() {
  const p = await getData("portfolio");
  return (
    <Page title="Portfolio" subtitle="Holdings and running PnL across your wallet.">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <Stat label="Total value" value={usd(p.totalUsd)} />
        <Stat label="PnL" value={usd(p.pnlUsd)} tone={p.pnlUsd >= 0 ? "pos" : "neg"} />
        <Stat label="PnL %" value={pct(p.pnlPct)} tone={p.pnlPct >= 0 ? "pos" : "neg"} />
      </div>
      <Table head={["Token", "Amount", "Value", "PnL", "PnL %"]} right={[1, 2, 3, 4]}>
        {p.positions.map((x) => (
          <tr key={x.mint}>
            <td className="font-medium">{x.symbol}</td>
            <td className="text-right tabular-nums">{x.amount.toLocaleString()}</td>
            <td className="text-right tabular-nums">{usd(x.valueUsd)}</td>
            <td className="text-right"><Tone v={x.pnlUsd}>{usd(x.pnlUsd)}</Tone></td>
            <td className="text-right"><Tone v={x.pnlPct}>{pct(x.pnlPct)}</Tone></td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
