"use client";
import { useState, type ReactNode } from "react";
import { Check, Lightning, ShieldStar } from "@phosphor-icons/react";
import { PLAN_LIMITS, PRODUCTS, type Product, type ProductId } from "@corvid/shared";
import { useAuthModal } from "@/components/auth/auth-modal";
import { useSigned } from "@/components/auth/signed";
import { USE_API } from "@/lib/api";
import { createOrder, payError, sendToken, waitForPayment, type Order, type Plan } from "@/lib/pay";
import { refreshPlan, usePlan } from "@/lib/plan-store";
import { connectWallet, errMsg, switchToAppChain, useWallet } from "@/lib/wallet";

// Plan & Usage: kuota bulanan, saldo kredit, paket kredit ($1, $5) dan Pro (1/3/12 bulan), dibayar USDG dari wallet
// pengguna sendiri. Mode fixture (tanpa API) menampilkan paket Free dan tombol beli nonaktif.
const FIXTURE_PLAN: Plan = { plan: "free", proUntil: null, limits: PLAN_LIMITS.free, used: { chat: 0, deep: 0 }, resetsAt: "", credits: 0, paymentsEnabled: false };

const FILL = { background: "var(--v2-accent)", color: "var(--v2-btn-text, var(--v2-bg-1))" } as const;
const TINT = { background: "rgba(var(--v2-accent-rgb), 0.12)", color: "var(--v2-accent-text)", border: "1px solid rgba(var(--v2-accent-rgb), 0.35)" } as const;
const usd = (n: number) => `$${n}`;
const fmtDate = (iso: string) => (iso ? new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }) : "");
const months = (p: Extract<Product, { type: "pro" }>) => Math.round(p.days / 30);
const perMonth = (p: Extract<Product, { type: "pro" }>) => {
  const v = p.usd / months(p);
  return `${usd(Number.isInteger(v) ? v : Number(v.toFixed(2)))} / month`;
};
const monthly = PRODUCTS.pro_1m as Extract<Product, { type: "pro" }>;
/** Hemat dibanding membayar bulanan, dalam persen bulat (0 = tidak ada diskon). */
const savePct = (p: Extract<Product, { type: "pro" }>) => Math.max(0, Math.round((1 - p.usd / (monthly.usd * months(p))) * 100));

type Phase = { kind: "idle" } | { kind: "busy"; msg: string } | { kind: "done"; order: Order } | { kind: "error"; msg: string; retry?: { order: Order; tx: string } };

export function ApplicationProContent() {
  const signed = useSigned();
  const { openAuthModal } = useAuthModal();
  const w = useWallet();
  const { plan: livePlan, error: loadFailed } = usePlan(signed);
  const plan = livePlan ?? FIXTURE_PLAN;
  const [phase, setPhase] = useState<Phase>({ kind: "idle" });
  const [active, setActive] = useState<ProductId | null>(null);

  const canBuy = USE_API && plan.paymentsEnabled;
  const provider = w.wallets.find((x) => x.id === w.walletId)?.provider ?? null;
  const busy = phase.kind === "busy";
  const isPro = plan.plan === "pro";

  async function finish(order: Order, tx: string) {
    try {
      const paid = await waitForPayment(order, tx, { onTick: (msg) => setPhase({ kind: "busy", msg }) });
      setPhase({ kind: "done", order: paid });
      await refreshPlan();
    } catch (e) {
      const timeout = (e as { status?: number }).status === 408;
      setPhase({
        kind: "error",
        msg: timeout ? "Still waiting for the payment to confirm. If you already sent it, check again in a minute." : payError(e),
        retry: timeout ? { order, tx } : undefined,
      });
    }
  }

  async function buy(id: ProductId) {
    if (!signed) return openAuthModal("signin");
    setActive(id);
    if (!provider || !w.address) {
      const first = w.wallets[0];
      if (!first) return setPhase({ kind: "error", msg: "No browser wallet found. Install MetaMask or another EVM wallet." });
      setPhase({ kind: "busy", msg: "Connecting your wallet…" });
      const r = await connectWallet(first.id);
      if (r.error) return setPhase({ kind: "error", msg: r.error });
      return setPhase({ kind: "idle" }); // pengguna menekan tombol lagi setelah terhubung
    }
    try {
      if (w.wrongChain) {
        setPhase({ kind: "busy", msg: `Switch to ${w.appChain.name} in your wallet…` });
        const r = await switchToAppChain();
        if (r.error) return setPhase({ kind: "error", msg: r.error });
      }
      setPhase({ kind: "busy", msg: "Creating your order…" });
      const order = await createOrder(id);
      setPhase({ kind: "busy", msg: `Confirm sending ${order.amount} in your wallet…` });
      const tx = await sendToken(provider, w.address, order.token, order.recipient, BigInt(order.amountUnits));
      setPhase({ kind: "busy", msg: "Waiting for the transaction to be mined…" });
      await finish(order, tx);
    } catch (e) {
      setPhase({ kind: "error", msg: errMsg(e, payError(e)) });
    }
  }

  const proProducts = (["pro_1m", "pro_3m", "pro_12m"] as const).map((k) => PRODUCTS[k] as Extract<Product, { type: "pro" }>);
  const packs = (["credits_50", "credits_300"] as const).map((k) => PRODUCTS[k] as Extract<Product, { type: "credits" }>);
  const L = plan.limits;
  const disabled = busy || !USE_API || (signed && !canBuy);

  const buyLabel = (id: ProductId) => {
    if (busy && active === id) return "Working…";
    if (!USE_API) return "Unavailable";
    if (!signed) return "Sign in to continue";
    if (!w.address) return "Connect wallet";
    if (w.wrongChain) return "Switch network";
    return isPro ? "Extend with USDG" : "Pay with USDG";
  };

  return (
    <div className="mx-auto px-6 lg:px-12 pt-24 pb-24" style={{ maxWidth: "1080px" }}>
      {/* Judul */}
      <header className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase mb-3" style={{ color: "var(--v2-t-4)" }}>
            Account
          </div>
          <h1 className="font-heading font-semibold text-[30px] tracking-[-0.02em] m-0" style={{ color: "var(--v2-t-0)" }}>
            Plan &amp; Usage
          </h1>
          <p className="text-[15px] mt-2 mb-0" style={{ color: "var(--v2-t-3)", maxWidth: 560 }}>
            Your plan, monthly AI quota and credits in one place.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full font-mono text-[11px] font-semibold tracking-[0.1em] uppercase"
            style={isPro ? TINT : { background: "var(--v2-bg-1)", color: "var(--v2-t-2)", border: "1px solid var(--v2-line-1)" }}
          >
            {isPro && <ShieldStar size={14} weight="fill" />}
            {isPro ? "Pro" : "Free plan"}
          </span>
          {isPro && plan.proUntil && (
            <span className="text-[12px]" style={{ color: "var(--v2-t-3)" }}>
              Active until <span style={{ color: "var(--v2-t-1)" }}>{fmtDate(plan.proUntil)}</span>
            </span>
          )}
        </div>
      </header>

      {USE_API && !signed && (
        <p className="text-[13px] mb-6" style={{ color: "var(--v2-t-3)" }}>
          Sign in to see your usage and buy credits.
        </p>
      )}
      {loadFailed && (
        <p className="text-[13px] mb-6" style={{ color: "var(--v2-neg)" }}>
          Could not load your plan. Refresh the page to try again.
        </p>
      )}

      {/* Pemakaian + kredit */}
      <section aria-label="Usage" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Meter label="Analyses" sub="this month" used={plan.used.deep} limit={L.deep} />
        <Meter label="Chat messages" sub="this month" used={plan.used.chat} limit={L.chat} />
        <div className="rounded-[14px] p-5 flex flex-col" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase mb-3" style={{ color: "var(--v2-t-4)" }}>
            <Lightning size={14} weight="fill" style={{ color: "var(--v2-accent-text)" }} />
            Credits
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-[34px] leading-none num tabular-nums" style={{ color: "var(--v2-t-0)" }}>
              {plan.credits}
            </span>
            <span className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              credits
            </span>
          </div>
          <p className="text-[12px] leading-relaxed mt-2 mb-4" style={{ color: "var(--v2-t-4)" }}>
            Used after your monthly quota runs out. 1 credit per AI answer.
          </p>
          <div className="mt-auto grid grid-cols-2 gap-2">
            {packs.map((p) => (
              <button
                key={p.id}
                type="button"
                disabled={disabled}
                onClick={() => void buy(p.id)}
                title={!canBuy && USE_API && signed ? "Payments are not enabled yet" : undefined}
                className="crv-pack px-2 py-2.5 text-center leading-tight"
                style={{ color: "var(--v2-t-1)" }}
              >
                <span className="block font-heading font-bold text-[16px]">{usd(p.usd)}</span>
                <span className="block text-[11px]" style={{ color: "var(--v2-t-3)" }}>
                  {p.credits} credits
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <p className="text-[12px] mt-3 mb-0" style={{ color: "var(--v2-t-4)" }}>
        {plan.resetsAt ? `Monthly quota resets ${fmtDate(plan.resetsAt)} (UTC).` : "Monthly quota resets on the 1st (UTC)."}
        {USE_API && signed && !canBuy ? " Payments are not enabled yet." : ""}
      </p>

      <Status phase={phase} explorer={w.appChain.explorerUrl} onRetry={(r) => { setPhase({ kind: "busy", msg: "Checking…" }); void finish(r.order, r.tx); }} />

      {/* Paket Pro */}
      <section aria-label="Pro plans" className="mt-14">
        <div className="mb-6">
          <h2 className="font-heading font-semibold text-[20px] tracking-[-0.01em] m-0" style={{ color: "var(--v2-t-0)" }}>
            Go Pro
          </h2>
          <p className="text-[14px] mt-1.5 mb-0" style={{ color: "var(--v2-t-3)" }}>
            More analyses and chat, real-time signals including smart money. One payment per period, no auto-renewal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {proProducts.map((p) => {
            const save = savePct(p);
            return (
              <div
                key={p.id}
                className="crv-plan-card flex flex-col p-6"
              >
                <div className="flex items-center justify-between mb-4" style={{ minHeight: 24 }}>
                  <span className="font-mono text-[11px] tracking-[0.16em] uppercase" style={{ color: "var(--v2-t-3)" }}>
                    {months(p)} {months(p) === 1 ? "month" : "months"}
                  </span>
                  {save > 0 && (
                    <span className="rounded-full px-2 h-[22px] inline-flex items-center font-mono text-[10px] font-semibold tracking-[0.06em] uppercase" style={TINT}>
                      Save {save}%
                    </span>
                  )}
                </div>
                <div className="font-heading font-bold text-[44px] leading-none tracking-tight" style={{ color: "var(--v2-t-0)" }}>
                  {usd(p.usd)}
                </div>
                <div className="text-[14px] mt-2 mb-6" style={{ color: "var(--v2-t-3)" }}>
                  {perMonth(p)}
                </div>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => void buy(p.id)}
                  className="crv-buy mt-auto w-full h-11 font-mono text-[12px] tracking-[0.1em] uppercase font-semibold"
                  style={FILL}
                >
                  {buyLabel(p.id)}
                </button>
              </div>
            );
          })}
        </div>
        <p className="text-[12px] leading-relaxed mt-4 mb-0" style={{ color: "var(--v2-t-4)" }}>
          Paid in USDG from your own wallet on {w.appChain.name}. You need a little ETH for network fees.
          {w.appChain.env === "testnet" ? " This is a test network: payments use test tokens with no real value." : ""}
        </p>
      </section>

      {/* Perbandingan */}
      <section aria-label="Free vs Pro" className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Tier
          title="Free"
          current={!isPro}
          items={["25 starter analyses (one-time)", `${PLAN_LIMITS.free.deep} deep analyses / month`, `${PLAN_LIMITS.free.chat} chat messages / month`, "Standard agent execution", "New-token signals, 15 min delayed"]}
        />
        <Tier
          title="Pro"
          accent
          current={isPro}
          items={[`${PLAN_LIMITS.pro.deep} deep analyses / month`, `${PLAN_LIMITS.pro.chat.toLocaleString("en-US")} chat messages / month`, "Priority agent execution", "Real-time signals", "Smart money signals (tier S and A)"]}
        />
      </section>
    </div>
  );
}

function Meter({ label, sub, used, limit }: { label: string; sub: string; used: number; limit: number }) {
  const pct = limit > 0 ? Math.min(100, Math.round((used / limit) * 100)) : 0;
  const hot = pct >= 90;
  return (
    <div className="rounded-[14px] p-5" style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-1)" }}>
      <div className="font-mono text-[11px] tracking-[0.16em] uppercase mb-3" style={{ color: "var(--v2-t-4)" }}>
        {label}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-heading font-bold text-[34px] leading-none num tabular-nums" style={{ color: "var(--v2-t-0)" }}>
          {used.toLocaleString("en-US")}
        </span>
        <span className="text-[14px] num tabular-nums" style={{ color: "var(--v2-t-3)" }}>
          / {limit.toLocaleString("en-US")}
        </span>
      </div>
      <div className="text-[12px] mt-1" style={{ color: "var(--v2-t-4)" }}>
        {sub}
      </div>
      <div
        role="progressbar"
        aria-label={`${label} used`}
        aria-valuemin={0}
        aria-valuemax={limit}
        aria-valuenow={Math.min(used, limit)}
        className="mt-4 h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--v2-bg-3)" }}
      >
        <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${pct}%`, background: hot ? "var(--v2-neg)" : "var(--v2-accent)" }} />
      </div>
    </div>
  );
}

function Tier({ title, items, accent, current }: { title: string; items: string[]; accent?: boolean; current?: boolean }) {
  return (
    <div
      className="rounded-[14px] p-6"
      style={{
        background: accent ? "linear-gradient(180deg, rgba(var(--v2-accent-rgb), 0.07), var(--v2-bg-1) 60%)" : "var(--v2-bg-1)",
        border: `1px solid ${accent ? "rgba(var(--v2-accent-rgb), 0.4)" : "var(--v2-line-1)"}`,
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: accent ? "var(--v2-accent-text)" : "var(--v2-t-3)" }}>
          {title}
        </span>
        {current && (
          <span className="font-mono text-[10px] tracking-[0.08em] uppercase rounded-full px-2 h-[20px] inline-flex items-center" style={{ border: "1px solid var(--v2-line-2, var(--v2-line-1))", color: "var(--v2-t-2)" }}>
            Current plan
          </span>
        )}
      </div>
      <ul className="m-0 p-0 list-none flex flex-col gap-3">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-[14px]" style={{ color: "var(--v2-t-2)" }}>
            <Check size={16} weight="bold" className="mt-0.5 shrink-0" style={{ color: accent ? "var(--v2-accent-text)" : "var(--v2-t-3)" }} />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Status({ phase, explorer, onRetry }: { phase: Phase; explorer: string; onRetry: (r: { order: Order; tx: string }) => void }): ReactNode {
  if (phase.kind === "idle") return null;
  const tone = phase.kind === "error" ? "var(--v2-neg)" : phase.kind === "done" ? "var(--v2-pos)" : "var(--v2-t-2)";
  const text = phase.kind === "done" ? `Payment confirmed: ${phase.order.label}.` : phase.msg;
  return (
    <div role="status" className="mt-5 px-4 py-3 text-[13px] flex flex-wrap items-center gap-x-4 gap-y-1" style={{ border: `1px solid ${tone}`, color: tone, background: "var(--v2-bg-1)", borderRadius: 10 }}>
      <span>{text}</span>
      {phase.kind === "error" && phase.retry && (
        <button type="button" className="underline" onClick={() => onRetry(phase.retry!)}>
          Check again
        </button>
      )}
      {phase.kind === "done" && phase.order.txHash && (
        <a className="underline" href={`${explorer.replace(/\/$/, "")}/tx/${phase.order.txHash}`} target="_blank" rel="noreferrer">
          View transaction
        </a>
      )}
    </div>
  );
}
