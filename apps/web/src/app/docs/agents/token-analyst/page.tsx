import { permanentRedirect } from "next/navigation";

// Tipe agent lama digantikan oleh tiga pipeline Corvid.
export default function DocsAgentsTokenAnalystPage() {
  permanentRedirect("/docs/risk-scoring");
}
