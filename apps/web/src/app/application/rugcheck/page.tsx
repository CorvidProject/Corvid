import { getData } from "@/lib/data";
import { Page, Panel } from "@/components/ui";

export const metadata = { title: "Rugcheck | Corvid" };

const tone = { pass: "var(--v2-pos)", warn: "var(--v2-warn)", fail: "var(--v2-neg)", unknown: "var(--v2-t-4)" } as Record<string, string>;

export default async function Rugcheck() {
  const sec = await getData("token-security");
  return (
    <Page title="Rugcheck" subtitle="Paste a Solana token address for a risk report." width={900}>
      <form className="flex gap-2 mb-4"><input className="input-v2 flex-1" placeholder="Token mint address" /><button type="button" disabled className="btn-v2 btn-v2-primary">Check</button></form>
      <div className="grid md:grid-cols-2 gap-4">
        {sec.groups.map((g) => (
          <Panel key={g.title}>
            <p className="eyebrow mb-2">{g.title}</p>
            <ul className="flex flex-col gap-2 text-[13px]">
              {g.checks.map((c) => (
                <li key={c.label} className="flex justify-between gap-3" title={c.hint}>
                  <span>{c.label}</span>
                  <span style={{ color: tone[c.state] }}>{c.state}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
