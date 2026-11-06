"use client";
import { useEffect, useState } from "react";
import profile from "@/data/profile.json";
import prefsFx from "@/data/trading-prefs.json";
import { useSigned } from "@/components/auth/signed";
import { loadSession, signOut, updateEmail } from "@/lib/auth";
import { connectWallet, shortAddress, switchToAppChain, useWallet } from "@/lib/wallet";
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
  const w = useWallet();
  // Mode API: jangan pakai data contoh (email/wallet palsu) untuk akun nyata.
  const [email, setEmail] = useState<string | null>(USE_API ? null : profile.email);
  const [acct, setAcct] = useState<{ plan: string; credits: number }>(USE_API ? { plan: "free", credits: 0 } : { plan: profile.plan, credits: profile.credits });
  const [err, setErr] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [mailBusy, setMailBusy] = useState(false);
  const [mailMsg, setMailMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [walletErr, setWalletErr] = useState<string | null>(null);

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
          setAcct({ plan: d.plan, credits: d.credits });
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
  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    setMailMsg(null);
    setMailBusy(true);
    const r = await updateEmail(draft);
    setMailBusy(false);
    if (r.error) return setMailMsg({ ok: false, text: r.error });
    setMailMsg({ ok: true, text: `Confirmation sent to ${draft.trim().toLowerCase()}. Open the link in that email to finish.` });
    setEditing(false);
    setDraft("");
  }
  async function copyAddr() {
    if (!w.address) return;
    try {
      await navigator.clipboard.writeText(w.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }
  async function connect() {
    setWalletErr(null);
    const first = w.wallets[0];
    if (!first) return setWalletErr("No browser wallet found. Install MetaMask or another EVM wallet.");
    const r = await connectWallet(first.id);
    if (r.error) setWalletErr(r.error);
  }
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
        <dl className="grid grid-cols-[110px_1fr] gap-y-4 text-[13px] items-start">
          <dt className="pt-1" style={{ color: "var(--v2-t-4)" }}>Email</dt>
          <dd className="m-0 min-w-0">
            {!editing && (
              <div className="flex flex-wrap items-center gap-3">
                <span style={{ color: email ? "var(--v2-t-1)" : "var(--v2-t-3)" }}>{email ?? "No email added"}</span>
                {USE_API && (
                  <button type="button" className="text-[12px] underline underline-offset-2" style={{ color: "var(--v2-accent-text)" }} onClick={() => { setEditing(true); setMailMsg(null); setDraft(""); }}>
                    {email ? "Change" : "Add email"}
                  </button>
                )}
              </div>
            )}
            {editing && (
              <form onSubmit={(e) => void submitEmail(e)} className="flex flex-wrap items-center gap-2">
                <input type="email" required autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="you@example.com" className="input-v2 w-full sm:w-[260px]" />
                <button type="submit" disabled={mailBusy} className="btn-v2 btn-v2-primary disabled:opacity-60">
                  {mailBusy ? "Sending…" : "Send confirmation"}
                </button>
                <button type="button" className="btn-v2 btn-v2-ghost" onClick={() => setEditing(false)}>
                  Cancel
                </button>
              </form>
            )}
            {!email && !editing && !mailMsg && USE_API && (
              <p className="text-[12px] mt-1.5 mb-0" style={{ color: "var(--v2-t-4)" }}>
                You signed in with a wallet. Add an email to get account notices and recover access.
              </p>
            )}
            {mailMsg && (
              <p role={mailMsg.ok ? "status" : "alert"} className="text-[12px] mt-1.5 mb-0" style={{ color: mailMsg.ok ? "var(--v2-pos)" : "var(--v2-neg)" }}>
                {mailMsg.text}
              </p>
            )}
          </dd>
          <dt className="pt-1" style={{ color: "var(--v2-t-4)" }}>Plan</dt>
          <dd style={{ color: "var(--v2-t-1)" }} className="capitalize m-0 pt-1">
            {acct.plan} · {acct.credits} credits
          </dd>
          <dt className="pt-1" style={{ color: "var(--v2-t-4)" }}>Wallet</dt>
          <dd className="m-0 min-w-0">
            {w.address ? (
              <div className="flex flex-wrap items-center gap-3">
                <span className="num break-all" style={{ color: "var(--v2-t-1)" }} title={w.address}>{shortAddress(w.address)}</span>
                <button type="button" className="text-[12px] underline underline-offset-2" style={{ color: "var(--v2-accent-text)" }} onClick={() => void copyAddr()}>
                  {copied ? "Copied" : "Copy"}
                </button>
                <span className="text-[12px]" style={{ color: w.wrongChain ? "var(--v2-neg)" : "var(--v2-t-4)" }}>
                  {w.wrongChain ? "Wrong network" : w.appChain.name}
                </span>
                {w.wrongChain && (
                  <button type="button" className="text-[12px] underline underline-offset-2" style={{ color: "var(--v2-accent-text)" }} onClick={() => void switchToAppChain()}>
                    Switch to {w.appChain.name}
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <span style={{ color: "var(--v2-t-3)" }}>Not connected</span>
                <button type="button" disabled={w.busy} className="text-[12px] underline underline-offset-2 disabled:opacity-60" style={{ color: "var(--v2-accent-text)" }} onClick={() => void connect()}>
                  Connect wallet
                </button>
              </div>
            )}
            <p className="text-[12px] mt-1.5 mb-0" style={{ color: "var(--v2-t-4)" }}>
              Corvid is non-custodial: this is your own browser wallet. We never hold your keys, so there is no Corvid wallet to create.
            </p>
            {walletErr && (
              <p role="alert" className="text-[12px] mt-1 mb-0" style={{ color: "var(--v2-neg)" }}>
                {walletErr}
              </p>
            )}
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
        <button
          className="btn-v2 btn-v2-ghost transition-colors hover:!border-[var(--v2-neg)] hover:!text-[var(--v2-neg)] hover:!bg-[color-mix(in_srgb,var(--v2-neg)_12%,transparent)] focus-visible:!border-[var(--v2-neg)] focus-visible:!text-[var(--v2-neg)]"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      </section>
    </div>
  );
}
