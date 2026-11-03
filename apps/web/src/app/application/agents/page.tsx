import Link from "next/link";
import { getData } from "@/lib/data";
import { Page, Table } from "@/components/ui";

export const metadata = { title: "Agents | Corvid" };

export default async function Agents() {
  const { agents } = await getData("agents");
  return (
    <Page title="Agents" subtitle="Your agents. Trading runs in dry mode until live is enabled." actions={<Link href="/application/agents/new" className="btn-v2 btn-v2-primary btn-v2-sm">New agent</Link>}>
      <Table head={["Name", "Type", "Status", "Win rate", "Runs"]} right={[3, 4]}>
        {agents.map((a) => (
          <tr key={a.id}>
            <td className="font-medium">{a.name}</td>
            <td>{a.type}</td>
            <td><span className="badge-status">{a.running ? "running" : "stopped"}</span></td>
            <td className="text-right tabular-nums">{a.winRate != null ? a.winRate + "%" : "—"}</td>
            <td className="text-right tabular-nums">{a.runs}</td>
          </tr>
        ))}
      </Table>
    </Page>
  );
}
