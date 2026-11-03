import { Page, Panel } from "@/components/ui";

export const metadata = { title: "Pro | Corvid" };

export default function Pro() {
  return (
    <Page title="Pro" subtitle="Paid features are disabled (PAID_FEATURES_ENABLED=false)." width={760}>
      <Panel>
        <h2 className="text-[18px] font-semibold">Corvid Pro</h2>
        <ul className="list-disc pl-5 mt-3 text-[13px] flex flex-col gap-1" style={{ color: "var(--v2-t-3)" }}>
          <li>Deeper analysis and priority data</li>
          <li>More agents and higher run limits</li>
        </ul>
        <button disabled className="btn-v2 btn-v2-primary mt-4">Coming soon</button>
      </Panel>
    </Page>
  );
}
