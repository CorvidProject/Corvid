import { ago, getData } from "@/lib/data";
import { Page, Panel } from "@/components/ui";

export const metadata = { title: "Inbox | Corvid" };

export default async function Inbox() {
  const { items } = await getData("inbox");
  return (
    <Page title="Inbox" subtitle="Signals and system notices." width={800}>
      <div className="flex flex-col gap-3">
        {items.map((i) => (
          <Panel key={i.id}>
            <div className="flex justify-between text-[11px]" style={{ color: "var(--v2-t-4)" }}><span className="eyebrow">{i.kind}</span><span>{ago(i.at)}</span></div>
            <h2 className="text-[14px] font-semibold mt-1">{i.title}</h2>
            <p className="text-[13px] mt-1" style={{ color: "var(--v2-t-3)" }}>{i.body}</p>
          </Panel>
        ))}
      </div>
    </Page>
  );
}
