import { getData } from "@/lib/data";
import { Page, Table, Tone } from "@/components/ui";

export const metadata = { title: "Leaderboard | Corvid" };

export default async function Leaderboard() {
  const { rows } = await getData("leaderboard");
  return (
    <Page title="Leaderboard" subtitle="Top agents by win rate. Fixture data." width={1000}>
      <Table head={["#", "Agent", "Win rate", "PnL", "Runs"]} right={[2, 3, 4]}>
        {rows.map((r) => (
          <tr key={r.agentId}>
            <td>{r.rank}</td><td className="font-medium">{r.name}</td>
            <td className="text-right tabular-nums">{r.winRate}%</td>
            <td className="text-right"><Tone v={r.pnlPct}>{r.pnlPct}%</Tone></td>
            <td className="text-right tabular-nums">{r.runs}</td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
