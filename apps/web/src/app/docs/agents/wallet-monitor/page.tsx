import { permanentRedirect } from "next/navigation";

// Tipe agent lama digantikan oleh tiga pipeline Corvid.
export default function DocsAgentsWalletMonitorPage() {
  permanentRedirect("/docs/agents/follow-wallet");
}
