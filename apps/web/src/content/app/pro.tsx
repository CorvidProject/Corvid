"use client";
import { useCallback, useEffect, useState } from "react";
import { PLAN_LIMITS, PRODUCTS, type Product, type ProductId } from "@corvid/shared";
import { useAuthModal } from "@/components/auth/auth-modal";
import { useSigned } from "@/components/auth/signed";
import { USE_API } from "@/lib/api";
import { createOrder, getPlan, payError, sendToken, waitForPayment, type Order, type Plan } from "@/lib/pay";
import { connectWallet, errMsg, switchToAppChain, useWallet } from "@/lib/wallet";

// Plan & Usage: kuota bulanan, saldo kredit, paket kredit ($1, $5) dan Pro (1/3/12 bulan), dibayar USDG dari wallet
// pengguna sendiri. Mode fixture (tanpa API) menampilkan paket Free dan tombol beli nonaktif.
const FIXTURE_PLAN: Plan = { plan: "free", proUntil: null, limits: PLAN_LIMITS.free, used: { chat: 0, deep: 0 }, resetsAt: "", credits: 0, paymentsEnabled: false };

const BTN = { background: "var(--v2-accent)", color: "var(--v2-btn-text, var(--v2-bg-1))" } as const;
const usd = (n: number) => `$${n}`;
const perMonth = (p: Extract<Product, { type: "pro" }>) => {
  const m = Math.round(p.days / 30);
  const v = p.usd / m;
  return `${usd(Number.isInteger(v) ? v : Number(v.toFixed(2)))} / month`;
};
const fmtDate = (iso: string) => (iso ? new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }) : "");

type Phase = { kind: "idle" } | { kind: "busy"; msg: string } | { kind: "done"; order: Order } | { kind: "error"; msg: string; retry?: { order: Order; tx: string } };

export function ApplicationProContent() {
  const signed = useSigned();
  const { openAuthModal } = useAuthModal();
  const w = useWallet();
  const [plan, setPlan] = useState<Plan>(FIXTURE_PLAN);
  const [loadErr, setLoadErr] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>({ kind: "idle" });
  const [active, setActive] = useState<ProductId | null>(null);

  const reload = useCallback(async () => {
    if (!USE_API || !signed) return;
    try {
      setPlan(await getPlan());
      setLoadErr(null);
    } catch {
      setLoadErr("Could not load your plan.");
    }
  }, [signed]);
  useEffect(() => {
    void reload();
  }, [reload]);

  const canBuy = USE_API && plan.paymentsEnabled;
  const provider = w.wallets.find((x) => x.id === w.walletId)?.provider ?? null;
  const busy = phase.kind === "busy";

  async function finish(order: Order, tx: string) {
    try {
      const paid = await waitForPayment(order, tx, { onTick: (msg) => setPhase({ kind: "busy", msg }) });
      setPhase({ kind: "done", order: paid });
      await reload();
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
  const isPro = plan.plan === "pro";

  const statusLine = () => {
    if (phase.kind === "idle") return null;
    const tone = phase.kind === "error" ? "var(--v2-neg)" : phase.kind === "done" ? "var(--v2-pos)" : "var(--v2-t-2)";
    const text = phase.kind === "done" ? `Payment confirmed: ${phase.order.label}.` : phase.msg;
    return (
      <div role="status" className="mt-4 px-4 py-3 rounded-sm text-[13px] flex flex-wrap items-center gap-3" style={{ border: `1px solid ${tone}`, color: tone }}>
        <span>{text}</span>
        {phase.kind === "error" && phase.retry && (
          <button className="underline" onClick={() => void (setPhase({ kind: "busy", msg: "Checking…" }), finish(phase.retry!.order, phase.retry!.tx))}>
            Check again
          </button>
        )}
        {phase.kind === "done" && phase.order.txHash && (
          <a className="underline" href={`${w.appChain.explorerUrl.replace(/\/$/, "")}/tx/${phase.order.txHash}`} target="_blank" rel="noreferrer">
            View transaction
          </a>
        )}
      </div>
    );
  };

  const buyLabel = (id: ProductId) => (busy && active === id ? "Working…" : !signed ? "Sign in" : !w.address ? "Connect wallet" : w.wrongChain ? "Switch network" : "Pay with USDG");

  return (
    <div className="mx-auto px-6 lg:px-12 pt-24 pb-16" style={{ maxWidth: "1200px" }}>
      <div className="mb-10">
        <h1 className="font-heading font-semibold text-[24px] tracking-[-0.02em] m-0 mb-3" style={{ color: "var(--v2-t-0)" }}>
          Plan &amp; Usage
        </h1>
        <p className="text-[15px] m-0" style={{ color: "var(--v2-t-3)" }}>
          Subscription, credits balance, and AI quota for the current period in one place
        </p>
      </div>

      <div className="py-5 px-1 flex flex-wrap items-center gap-x-6 gap-y-2">
        <div className="font-mono text-[11px] tracking-[0.06em] uppercase" style={{ color: "var(--v2-t-3)" }}>
          {isPro ? "Pro" : "Free tier"}
        </div>
        <Stat value={`${plan.used.deep} / ${L.deep}`} label="Analyses this month" />
        <Stat value={`${plan.used.chat} / ${L.chat}`} label="Chat this month" />
        {plan.resetsAt && <Stat value={fmtDate(plan.resetsAt)} label="Quota resets (UTC)" />}
        {isPro && plan.proUntil && <Stat value={fmtDate(plan.proUntil)} label="Pro active until" />}
      </div>
      {loadErr && (
        <p className="text-[13px] px-1" style={{ color: "var(--v2-neg)" }}>
          {loadErr}
        </p>
      )}
      {USE_API && !signed && (
        <p className="text-[13px] px-1" style={{ color: "var(--v2-t-3)" }}>
          Sign in to see your usage and buy credits.
        </p>
      )}

      <div id="credit-packs" className="py-5 px-1 flex items-center justify-between flex-wrap gap-4" style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-1" style={{ color: "var(--v2-t-4)" }}>
            Credits balance
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-bold text-[28px] num tabular-nums" style={{ color: "var(--v2-t-0)" }}>
              {plan.credits}
            </span>
            <span className="text-[13px]" style={{ color: "var(--v2-t-3)" }}>
              cr
            </span>
          </div>
          <div className="text-[12px] mt-1" style={{ color: "var(--v2-t-4)" }}>
            Used when your monthly quota runs out. 1 credit per AI answer.
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {packs.map((p) => (
            <button
              key={p.id}
              disabled={busy || (USE_API && signed && !canBuy)}
              onClick={() => void buy(p.id)}
              className="px-4 py-2 rounded-sm font-mono text-[12px] tracking-[0.1em] uppercase font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110"
              style={BTN}
              title={!canBuy && USE_API ? "Payments are not enabled yet" : undefined}
            >
              {usd(p.usd)} · {p.credits} credits
            </button>
          ))}
        </div>
      </div>
      {USE_API && signed && !canBuy && (
        <p className="text-[12px] px-1 pt-3" style={{ color: "var(--v2-t-4)" }}>
          Payments are not enabled yet.
        </p>
      )}
      {statusLine()}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
        {proProducts.map((p) => {
          const def = p.id === "pro_3m";
          return (
            <div
              key={p.id}
              className="relative p-6 flex flex-col rounded-lg"
              style={{ background: def ? "var(--v2-bg-2)" : "var(--v2-bg-1)", border: `1px solid ${def ? "var(--v2-accent)" : "var(--v2-line-1)"}` }}
            >
              {def && (
                <span className="absolute -top-2.5 left-6 font-mono text-[10px] uppercase tracking-[0.06em] px-2 py-0.5 rounded-sm" style={BTN}>
                  Default
                </span>
              )}
              <div className="font-mono text-[12px] tracking-[0.06em] uppercase mb-2" style={{ color: "var(--v2-t-3)" }}>
                {Math.round(p.days / 30)} {p.days <= 30 ? "month" : "months"}
              </div>
              <div className="font-heading font-black text-[36px] tracking-tight mb-1" style={{ color: "var(--v2-t-0)" }}>
                {usd(p.usd)}
              </div>
              <div className="text-[14px] mb-5" style={{ color: "var(--v2-t-2)" }}>
                {perMonth(p)}
                <span className="ml-2" style={{ color: "var(--v2-t-3)" }}>
                  · {p.days <= 30 ? "Try it" : p.days <= 90 ? "One payment per quarter" : "One payment per year"}
                </span>
              </div>
              <button
                disabled={busy || (USE_API && signed && !canBuy) || !USE_API}
                onClick={() => void buy(p.id)}
                className="w-full py-3 px-4 font-mono text-[12px] tracking-[0.1em] uppercase font-semibold rounded-sm hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                style={BTN}
              >
                {USE_API ? buyLabel(p.id) : "Activate"}
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-[12px] -mt-8 mb-10 px-1" style={{ color: "var(--v2-t-4)" }}>
        Paid in USDG from your own wallet on {w.appChain.name}. One payment per period, no auto-renewal. You need a little ETH for network fees.
        {w.appChain.env === "testnet" ? " This is a test network: payments use test tokens with no real value." : ""}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--v2-line-1)" }}>
        <Tier title="Free" items={[`25 starter analyses (one-time)`, `${PLAN_LIMITS.free.deep} deep analyses / month`, `${PLAN_LIMITS.free.chat} chat messages / month`, "Standard agent execution", "New-token signals, 15 min delayed"]} />
        <Tier title="Pro" accent items={[`${PLAN_LIMITS.pro.deep} deep analyses / month`, `${PLAN_LIMITS.pro.chat.toLocaleString("en-US")} chat messages / month`, "Priority agent execution", "Premium signals access"]} />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="num text-[15px] font-semibold" style={{ color: "var(--v2-t-1)" }}>
        {value}
      </span>
      <span className="text-[12px]" style={{ color: "var(--v2-t-3)" }}>
        {label}
      </span>
    </div>
  );
}

function Tier({ title, items, accent }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className="p-6" style={{ background: "var(--v2-bg-1)", borderLeft: accent ? "2px solid var(--v2-accent)" : undefined }}>
      <div className="font-mono text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: accent ? "var(--v2-accent-text)" : "var(--v2-t-3)" }}>
        {title}
      </div>
      <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
        {items.map((t) => (
          <li key={t} className="text-[14px]" style={{ color: "var(--v2-t-2)" }}>
            ✓ {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
