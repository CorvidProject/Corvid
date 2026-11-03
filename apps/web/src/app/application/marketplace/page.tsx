import { getData } from "@/lib/data";
import { Page, Panel } from "@/components/ui";

export const metadata = { title: "Marketplace | Corvid" };

export default async function Marketplace() {
  const { agents } = await getData("marketplace-feed");
  return (
    <Page title="Marketplace" subtitle="Browse and follow agents.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((a) => (
          <Panel key={a.id}>
            <p className="eyebrow">{a.type}</p>
            <h2 className="text-[16px] font-semibold mt-1">{a.name}</h2>
            <p className="text-[12px] mt-1" style={{ color: "var(--v2-t-4)" }}>by {a.creator}</p>
            <div className="flex justify-between text-[13px] mt-4">
              <span>Win rate <b className="tabular-nums">{a.winRate}%</b></span>
              <span>{a.subscribers} followers</span>
            </div>
            <button disabled className="btn-v2 btn-v2-ghost btn-v2-sm mt-4">Follow</button>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
