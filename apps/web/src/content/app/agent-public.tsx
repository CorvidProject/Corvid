"use client";
import { useEffect, useState } from "react";
import { useAuthModal } from "@/components/auth/auth-modal";
import { useSigned } from "@/components/auth/signed";
import { USE_API, apiGet, apiSend, useApi } from "@/lib/api";

// Detail publik agent marketplace: GET /api/marketplace/agents/:id. Hanya ringkasan publik; konfigurasi, batas, dan alamat tidak dibuka.
type Detail = {
  agent: {
    id: number;
    name: string;
    type: string;
    description: string | null;
    creator: { display_name: string | null };
    published_at: string;
    last_run_at: string | null;
    trades_count: number;
    runs_count: number;
    signals_count: number;
    subscriber_count: number;
    config: { _pipeline: string | null; _mode: string };
  };
  pipeline: string | null;
  mode: string;
  floor: number | null;
  conviction: number | null;
  tokenSymbol: string | null;
};

const PIPELINES: Record<string, string> = {
  follow_wallet: "Follows one wallet and reacts to its trades.",
  new_tokens: "Scans newly launched tokens and checks liquidity and safety.",
  token_trading: "Watches one token and reacts to its market conditions.",
};
const card = { background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)", borderRadius: 16 } as const;
const fmt = (iso: string | null) => (iso ? new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" }) : "No runs yet");

export function AgentPublicContent({ id }: { id: string }) {
  const { data, loading, error } = useApi<Detail>(`/api/marketplace/agents/${id}`);
  const signed = useSigned();
  const { openAuthModal } = useAuthModal();
  const [following, setFollowing] = useState(false);
  const [subs, setSubs] = useState<number | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!USE_API || !signed) return;
    apiGet<{ ids: number[] }>("/api/marketplace/following")
      .then((r) => setFollowing(r.ids.includes(Number(id))))
      .catch(() => {});
  }, [signed, id]);

  if (loading) return <p style={{ color: "var(--v2-t-4)", fontSize: 13 }}>Loading agent…</p>;
  if (error || !data) {
    return (
      <div style={{ ...card, maxWidth: 560, margin: "40px auto", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ color: "var(--v2-t-1)", fontSize: 16, fontWeight: 500, margin: 0 }}>Agent not found</p>
        <p style={{ color: "var(--v2-t-3)", fontSize: 13, margin: "6px 0 16px" }}>It may have been unpublished or removed.</p>
        <a className="btn-v2 btn-v2-ghost" href="/application/marketplace">
          Back to marketplace
        </a>
      </div>
    );
  }

  const a = data.agent;
  const trading = data.mode === "trading";
  const toggleFollow = async () => {
    if (!signed) return openAuthModal("signin");
    setMsg(null);
    try {
      await apiSend(following ? "DELETE" : "POST", `/api/marketplace/agents/${id}/follow`);
      setFollowing(!following);
      setSubs((subs ?? a.subscriber_count) + (following ? -1 : 1));
    } catch {
      setMsg("Could not update. Try again.");
    }
  };
  const stat = (label: string, value: string | number) => (
    <div style={{ borderLeft: "2px solid var(--v2-line-2)", paddingLeft: 10, minWidth: 90 }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--v2-t-4)" }}>{label}</div>
      <div className="num" style={{ fontSize: 20, color: "var(--v2-t-1)" }}>
        {value}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <a href="/application/marketplace" style={{ fontSize: 12, color: "var(--v2-t-4)" }}>
        ← Marketplace
      </a>
      <div style={{ ...card, padding: 24, marginTop: 12 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
          <div style={{ minWidth: 0 }}>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 600, color: "var(--v2-t-1)" }}>{a.name}</h1>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--v2-t-4)" }}>
              by {a.creator.display_name || "anon"} · published {fmt(a.published_at)}
            </p>
          </div>
          <span
            style={{
              marginLeft: "auto",
              fontSize: 11,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 4,
              textTransform: "uppercase",
              color: trading ? "var(--v2-accent-text)" : "var(--v2-t-3)",
              border: `1px solid ${trading ? "rgba(var(--v2-accent-rgb),0.45)" : "var(--v2-line-2)"}`,
            }}
          >
            {trading ? "Trade (simulated)" : "Signal"}
          </span>
        </div>
        {a.description && <p style={{ margin: "16px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--v2-t-2)" }}>{a.description}</p>}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
          {stat("Followers", subs ?? a.subscriber_count)}
          {stat("Checks", a.runs_count)}
          {stat("Signals", a.signals_count)}
          {stat("Sim. trades", a.trades_count)}
        </div>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <button className={`btn-v2 ${following ? "btn-v2-ghost" : "btn-v2-primary"}`} onClick={() => void toggleFollow()}>
            {following ? "Unfollow" : "Follow"}
          </button>
          <span style={{ fontSize: 12, color: "var(--v2-t-4)" }}>Followers get this agent's signals in their Inbox.</span>
          {msg && (
            <span role="alert" style={{ fontSize: 12, color: "var(--v2-neg)" }}>
              {msg}
            </span>
          )}
        </div>
      </div>

      <div style={{ ...card, padding: 24, marginTop: 16 }}>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--v2-t-4)", marginBottom: 8 }}>How it works</div>
        <p style={{ margin: 0, fontSize: 14, color: "var(--v2-t-2)" }}>{(data.pipeline && PIPELINES[data.pipeline]) || "Custom pipeline."}</p>
        <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", fontSize: 13, color: "var(--v2-t-3)", display: "grid", gap: 4 }}>
          {data.tokenSymbol && <li>Token: ${data.tokenSymbol}</li>}
          {data.floor !== null && <li>Decision floor: {data.floor}</li>}
          {data.conviction !== null && <li>Conviction: {data.conviction}</li>}
          <li>Last run: {fmt(a.last_run_at)}</li>
        </ul>
        <p style={{ margin: "14px 0 0", fontSize: 12, color: "var(--v2-t-4)" }}>
          Trading agents run in simulation only (dry mode). No funds move and no transactions are sent. Results are not financial advice.
        </p>
      </div>
    </div>
  );
}
