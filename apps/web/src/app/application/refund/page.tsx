import { DryBanner, Empty, Page, Panel } from "@/components/ui";

export const metadata = { title: "Refund | Corvid" };

export default function Refund() {
  return (
    <Page title="Refund" subtitle="Close empty token accounts and reclaim the SOL rent." width={760}>
      <DryBanner />
      <Panel>
        <label className="flex flex-col gap-1 text-[13px]">Wallet address<input className="input-v2" placeholder="Solana address" /></label>
        <Empty>Connect a wallet to scan for reclaimable accounts.</Empty>
        <button disabled className="btn-v2 btn-v2-primary">Reclaim (needs backend)</button>
      </Panel>
    </Page>
  );
}
