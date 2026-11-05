"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, CheckCircle, Eye, EyeSlash, SpinnerGap, Wallet, X } from "@phosphor-icons/react";
import { resetPassword, signInWithEmail, signUpWithEmail } from "@/lib/auth";
import { connectWallet, signInWithWallet, switchToAppChain, useWallet } from "@/lib/wallet";

// Modal masuk/daftar (port dari referensi). Dibuka dari elemen bertanda data-auth-open
// ("signin" | "signup") atau lewat useAuthModal().openAuthModal().
type Mode = "signin" | "signup" | "forgot";
type Ctx = { open: boolean; openAuthModal: (mode?: "signin" | "signup") => void; closeAuthModal: () => void };
const AuthCtx = createContext<Ctx>({ open: false, openAuthModal: () => {}, closeAuthModal: () => {} });
export const useAuthModal = () => useContext(AuthCtx);

export function AuthModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [initial, setInitial] = useState<"signin" | "signup">("signin");
  const openAuthModal = useCallback((m: "signin" | "signup" = "signin") => {
    setInitial(m);
    setOpen(true);
  }, []);
  const closeAuthModal = useCallback(() => setOpen(false), []);

  // Delegasi klik: elemen server component cukup memakai atribut data-auth-open.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-auth-open]");
      if (el) {
        e.preventDefault();
        openAuthModal(el.dataset.authOpen === "signup" ? "signup" : "signin");
        return;
      }
      // Tombol "Deploy an agent on $X" di tabel token: masuk dulu, lalu buka builder dengan token itu.
      const deploy = target?.closest<HTMLElement>('button[title^="Deploy an agent"]');
      if (!deploy) return;
      e.preventDefault();
      e.stopPropagation();
      let signedIn = false;
      try {
        signedIn = !!localStorage.getItem("corvid.auth.session");
      } catch {
        /* abaikan */
      }
      if (!signedIn) return openAuthModal("signin");
      let node: HTMLElement | null = deploy;
      let mint = "";
      for (let i = 0; i < 10 && node && !mint; i++, node = node.parentElement) {
        const a = node.querySelector<HTMLAnchorElement>('a[href*="/application/tokens/"]');
        const m = a?.getAttribute("href")?.match(/\/application\/tokens\/([^/?#]+)/);
        if (m) mint = m[1];
      }
      const sym = /\$(.+)$/.exec(deploy.getAttribute("title") ?? "")?.[1] ?? "";
      const q = new URLSearchParams({ template: "token_trading", start: "1", chain: "solana" });
      if (mint) q.set("token_mint", mint);
      if (sym) q.set("symbol", sym);
      window.location.href = `/application/agents/new?${q.toString()}`;
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [openAuthModal]);

  const value = useMemo(() => ({ open, openAuthModal, closeAuthModal }), [open, openAuthModal, closeAuthModal]);
  return (
    <AuthCtx.Provider value={value}>
      {children}
      {open && <AuthModal initial={initial} onClose={closeAuthModal} />}
    </AuthCtx.Provider>
  );
}

function Alert({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-sm px-3 py-2 text-[12px]" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "var(--v2-neg)" }}>
      {children}
    </div>
  );
}
function Notice({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-6 rounded-sm p-4 flex items-start gap-3" style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)" }}>
      <CheckCircle size={18} style={{ color: "var(--v2-pos)", marginTop: 2 }} />
      <div>
        <p className="text-[13px] font-medium" style={{ color: "var(--v2-t-1)" }}>{title}</p>
        <p className="text-[12px] mt-1" style={{ color: "var(--v2-t-3)" }}>{children}</p>
      </div>
    </div>
  );
}
// Login dengan wallet EVM: pilih wallet terdeteksi → sambungkan → tanda tangani pesan (tanpa gas).
function WalletSection({ onDone }: { onDone: () => void }) {
  const w = useWallet();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<string | null>(null);

  const go = async (id: string) => {
    setError(null);
    setPending(id);
    let r = w.address && w.walletId === id ? { error: null } : await connectWallet(id);
    if (!r.error && w.appChain) r = await switchToAppChain();
    if (!r.error) r = await signInWithWallet();
    setPending(null);
    if (r.error) setError(r.error);
    else onDone();
  };

  return (
    <div className="mt-5">
      <div className="space-y-2">
        {w.wallets.map((x) => (
          <button
            key={x.id}
            type="button"
            onClick={() => go(x.id)}
            disabled={w.busy}
            className="w-full h-11 px-3 flex items-center gap-3 rounded-sm text-[13px] font-medium transition-colors hover:bg-[var(--v2-bg-2)] disabled:opacity-50"
            style={{ color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)", background: "var(--v2-bg-0)" }}
          >
            {x.icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={x.icon} alt="" width={20} height={20} style={{ borderRadius: 4 }} />
            ) : (
              <Wallet size={18} />
            )}
            <span className="flex-1 text-left">Continue with {x.name}</span>
            {pending === x.id && <SpinnerGap size={14} className="animate-spin" />}
          </button>
        ))}
        {w.wallets.length === 0 && (
          <p className="text-[12px] rounded-sm px-3 py-2.5" style={{ color: "var(--v2-t-3)", border: "1px dashed var(--v2-line-2)" }}>
            No wallet detected in this browser. Install an EVM wallet such as MetaMask, then reload. You can still log in with email.
          </p>
        )}
      </div>
      {error && (
        <div className="mt-2">
          <Alert>{error}</Alert>
        </div>
      )}
    </div>
  );
}

const INPUT = "w-full h-11 px-3 rounded-sm bg-transparent outline-none text-[14px]";
const inputStyle = { color: "var(--v2-t-1)", border: "1px solid var(--v2-line-2)", background: "var(--v2-bg-0)" } as const;

function AuthModal({ initial, onClose }: { initial: "signin" | "signup"; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>(initial);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const switchMode = (m: Mode) => {
    setMode(m);
    setError(null);
    setConfirm(false);
    setSent(false);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (mode === "signin") {
      const r = await signInWithEmail(email, password);
      if (r.error) setError(r.error);
      else onClose();
    } else {
      const r = await signUpWithEmail(email, password, email.split("@")[0] || "Trader");
      if (r.code === "confirm_email") setConfirm(true);
      else if (r.error) {
        setError(r.error);
        if (r.code === "user_exists") {
          setMode("signin");
          setPassword("");
        }
      } else onClose();
    }
    setLoading(false);
  };

  const reset = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const r = await resetPassword(email);
    if (r.error) setError(r.error);
    else setSent(true);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center p-4" style={{ zIndex: 100 }}>
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.8)" }} onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={mode === "signup" ? "Sign Up" : mode === "forgot" ? "Reset Password" : "Log In"}
        className="relative w-full max-w-sm overflow-hidden"
        style={{ background: "var(--v2-bg-1)", border: "1px solid var(--v2-line-2)", borderRadius: "var(--v2-r-2, 12px)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--v2-accent)" }} />
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]" style={{ color: "var(--v2-t-3)" }}>
          <X size={16} />
        </button>
        <div className="p-6 pt-7">
          {mode === "forgot" ? (
            <>
              <button onClick={() => switchMode("signin")} className="flex items-center gap-1.5 text-[11px] mb-3 transition-colors" style={{ color: "var(--v2-t-3)" }}>
                <ArrowLeft size={12} /> Back to Log In
              </button>
              <h2 className="text-[22px] font-bold tracking-tight" style={{ color: "var(--v2-t-1)" }}>Reset Password</h2>
              <p className="text-[12px] mt-1.5" style={{ color: "var(--v2-t-3)" }}>Enter your email and we&apos;ll send you a link to set a new password</p>
              {sent ? (
                <Notice title="Check your inbox">
                  We sent a reset link to <span style={{ color: "var(--v2-t-1)" }}>{email}</span>. Click it to set a new password
                </Notice>
              ) : (
                <form onSubmit={reset} className="mt-6 space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium mb-1.5" style={{ color: "var(--v2-t-2)" }}>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required autoFocus className={INPUT} style={inputStyle} />
                  </div>
                  {error && <Alert>{error}</Alert>}
                  <button type="submit" disabled={loading} className="btn-v2 btn-v2-primary w-full h-11 text-[14px] font-semibold disabled:opacity-50 mt-2">
                    {loading && <SpinnerGap size={14} className="animate-spin" />}Send Reset Link
                  </button>
                </form>
              )}
            </>
          ) : (
            <>
              <h2 className="text-[22px] font-bold tracking-tight" style={{ color: "var(--v2-t-1)" }}>{mode === "signin" ? "Log In" : "Sign Up"}</h2>
              <p className="text-[12px] mt-1.5" style={{ color: "var(--v2-t-3)" }}>
                {mode === "signin" ? "Don't have an account yet? " : "Already have an account? "}
                <button onClick={() => switchMode(mode === "signin" ? "signup" : "signin")} className="font-medium transition-colors" style={{ color: "var(--v2-accent-text)" }}>
                  {mode === "signin" ? "Sign Up" : "Log In"}
                </button>
              </p>
              {confirm && (
                <Notice title="Check your inbox">
                  We sent a confirmation link to <span style={{ color: "var(--v2-t-1)" }}>{email}</span>. Click it, then log in here.
                </Notice>
              )}
              <WalletSection onDone={onClose} />
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px" style={{ background: "var(--v2-line-1)" }} />
                <span className="text-[11px]" style={{ color: "var(--v2-t-4)" }}>
                  OR {mode === "signup" ? "sign up" : "continue"} with email
                </span>
                <div className="flex-1 h-px" style={{ background: "var(--v2-line-1)" }} />
              </div>
              <form onSubmit={submit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium mb-1.5" style={{ color: "var(--v2-t-2)" }}>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required autoFocus className={INPUT} style={inputStyle} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-medium" style={{ color: "var(--v2-t-2)" }}>Password</label>
                    {mode === "signin" && (
                      <button type="button" onClick={() => switchMode("forgot")} className="text-[11px] transition-colors" style={{ color: "var(--v2-t-3)" }}>
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required minLength={6} className={`${INPUT} pr-10`} style={inputStyle} />
                    <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors hover:text-[var(--v2-t-1)]" style={{ color: "var(--v2-t-4)" }}>
                      {show ? <EyeSlash size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>
                {error && <Alert>{error}</Alert>}
                <button type="submit" disabled={loading} className="btn-v2 btn-v2-primary w-full h-11 text-[14px] font-semibold disabled:opacity-50 mt-2">
                  {loading && <SpinnerGap size={14} className="animate-spin" />}
                  {mode === "signin" ? "Log In" : "Sign Up"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
