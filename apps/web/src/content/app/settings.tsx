"use client";
import { useEffect, useState } from "react";
import profile from "@/data/profile.json";
import prefsFx from "@/data/trading-prefs.json";
import { useSigned } from "@/components/auth/signed";
import { loadSession, signOut } from "@/lib/auth";
import { apiGet, apiSend, ApiError, USE_API } from "@/lib/api";

// Settings: profil dan preferensi trading. Mode fixture: localStorage. Mode API: GET/PUT /api/profile dan
// /api/user/trading-prefs (butuh login Supabase).
// Mode "live" tidak bisa dipilih sebelum diizinkan pemilik (TRADE_MODE=dry).
const KEY = "corvid.trading-prefs.v1";
type Prefs = { slippageBps: number; priorityFeeLamports: number };

export function ApplicationSettingsContent() {
  const signed = useSigned();
  const [p, setP] = useState<Prefs>({ slippageBps: prefsFx.slippageBps, priorityFeeLamports: prefsFx.priorityFeeLamports });
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState(profile.email);
  const [acct, setAcct] = useState<{ plan: string; credits: number; wallet: string | null }>({ plan: profile.plan, credits: profile.credits, wallet: profile.wallet });
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setP({ ...p, ...(JSON.parse(raw) as Prefs) });
    } catch {}
    const u = loadSession()?.user?.email;
    if (u) setEmail(u);
    if (USE_API && signed) {
      apiGet<{ email: string | null; plan: string; credits: number; wallet: string | null }>("/api/profile")
        .then((d) => {
          if (d.email) setEmail(d.email);
          setAcct({ plan: d.plan, credits: d.credits, wallet: d.wallet });
        })
        .catch(() => setErr("Could not load your profile."));
      apiGet<Prefs>("/api/user/trading-prefs")
        .then((d) => setP({ slippageBps: d.slippageBps, priorityFeeLamports: d.priorityFeeLamports }))
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signed]);

  if (!signed) {
    return (
      <div className="flex items-center justify-center py-20 px-4">
        <div
          className="relative flex flex-col items-center text-center w-full max-w-[440px]"
          style={{ background: "var(--v2-panel-grad)", border: "1px solid var(--v2-line-1)", borderRadius: "16px", boxShadow: "var(--v2-panel-inset)", padding: "48px 40px" }}
        >
          <div className="absolute top-0 left-8 right-8 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)" }}></div>
          <span className="font-mono font-semibold text-[11px] tracking-[0.06em] uppercase mb-5" style={{ color: "var(--v2-accent-text)" }}>
            [ Sign-in required ]
          </span>
          <h3 className="text-[22px] font-bold leading-tight mb-3" style={{ color: "var(--v2-t-1)" }}>
            Unlock this feature
          </h3>
          <p className="text-[14px] leading-relaxed mb-8 max-w-[340px]" style={{ color: "var(--v2-t-3)" }}>
            Free account — 25 credits included
          </p>
          <button data-auth-open="signup" className="btn-v2 btn-v2-primary h-11 px-7 text-[14px] font-semibold">
            Create account
          </button>
        </div>
      </div>
    );
  }

  const set = (k: keyof Prefs, v: string) => {
    setSaved(false);
    const n = Math.max(0, Math.floor(Number(v) || 0));
    setP((o) => ({ ...o, [k]: n }));
  };
  const save = () => {
    setErr(null);
    if (USE_API) {
      apiSend("PUT", "/api/user/trading-prefs", { slippageBps: p.slippageBps, priorityFeeLamports: p.priorityFeeLamports })
        .then(() => setSaved(true))
        .catch((e: unknown) => setErr(e instanceof ApiError && e.status === 400 ? "Slippage must be 1 to 5000 bps." : "Could not save. Try again."));
      return;
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch {}
    setSaved(true);
  };
  const card = { background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" } as const;

  return (
    <div className="max-w-[720px] mx-auto">
      <h1 className="text-[22px] font-semibold leading-tight mb-1" style={{ color: "var(--v2-t-1)" }}>
        Settings
      </h1>
      <p className="text-[13px] mb-5" style={{ color: "var(--v2-t-3)" }}>
        Account and trading preferences
      </p>

      <section className="rounded-2xl p-5 mb-4" style={card}>
        <div className="eyebrow mb-3">Account</div>
        <dl className="grid grid-cols-[110px_1fr] gap-y-2 text-[13px]">
          <dt style={{ color: "var(--v2-t-4)" }}>Email</dt>
          <dd style={{ color: "var(--v2-t-1)" }}>{email}</dd>
          <dt style={{ color: "var(--v2-t-4)" }}>Plan</dt>
          <dd style={{ color: "var(--v2-t-1)" }} className="capitalize">
            {acct.plan} · {acct.credits} credits
          </dd>
          <dt style={{ color: "var(--v2-t-4)" }}>Wallet</dt>
          <dd className="num break-all" style={{ color: "var(--v2-t-2)" }}>
            {acct.wallet ?? "No wallet yet"}
          </dd>
        </dl>
      </section>

      <section className="rounded-2xl p-5 mb-4" style={card}>
        <div className="eyebrow mb-3">Trading</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="block text-[12px]" style={{ color: "var(--v2-t-3)" }}>
            Slippage (bps)
            <input type="number" min={1} max={5000} value={p.slippageBps} onChange={(e) => set("slippageBps", e.target.value)} className="input-v2 mt-1 w-full" />
            <span className="block mt-1" style={{ color: "var(--v2-t-4)" }}>
              {(p.slippageBps / 100).toFixed(2)}%
            </span>
          </label>
          <label className="block text-[12px]" style={{ color: "var(--v2-t-3)" }}>
            Priority fee (gwei)
            <input type="number" min={0} value={p.priorityFeeLamports} onChange={(e) => set("priorityFeeLamports", e.target.value)} className="input-v2 mt-1 w-full" />
            <span className="block mt-1" style={{ color: "var(--v2-t-4)" }}>
              {(p.priorityFeeLamports / 1e9).toFixed(6)} ETH
            </span>
          </label>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-sm px-3 py-2.5 text-[12px]" style={{ border: "1px solid var(--v2-line-1)", color: "var(--v2-t-3)" }}>
          <span>Trade mode</span>
          <span className="font-mono uppercase tracking-wider" style={{ color: "var(--v2-t-1)" }}>
            dry (simulation) · live locked
          </span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button className="btn-v2 btn-v2-primary" onClick={save}>
            Save changes
          </button>
          {err && (
            <span className="text-[12px]" style={{ color: "var(--v2-neg)" }} role="alert">
              {err}
            </span>
          )}
          {saved && (
            <span className="text-[12px]" style={{ color: "var(--v2-pos)" }} role="status">
              {USE_API ? "Saved" : "Saved on this device"}
            </span>
          )}
        </div>
      </section>

      <section className="rounded-2xl p-5" style={card}>
        <div className="eyebrow mb-3">Session</div>
        <button className="btn-v2 btn-v2-ghost" onClick={() => void signOut()}>
          Sign out
        </button>
      </section>
    </div>
  );
}
