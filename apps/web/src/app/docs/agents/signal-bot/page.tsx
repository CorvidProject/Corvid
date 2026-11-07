import { permanentRedirect } from "next/navigation";

// Tipe agent lama digantikan oleh tiga pipeline Corvid.
export default function DocsAgentsSignalBotPage() {
  permanentRedirect("/docs/agents/token-trading");
}
