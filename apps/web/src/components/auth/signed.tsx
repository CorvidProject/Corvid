"use client";
import { useEffect, useState, type ReactNode } from "react";
import { loadSession } from "@/lib/auth";

// Status masuk di klien (sesi di localStorage). Nilai awal false agar SSR dan hidrasi konsisten.
export function useSigned() {
  const [signed, setSigned] = useState(false);
  useEffect(() => {
    const read = () => setSigned(!!loadSession());
    read();
    window.addEventListener("storage", read);
    window.addEventListener("corvid-auth", read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener("corvid-auth", read);
    };
  }, []);
  return signed;
}

export function SignedOut({ children }: { children: ReactNode }) {
  return useSigned() ? null : <>{children}</>;
}

// Overlay "Sign-in required" yang dipakai inbox, portfolio, dan settings.
export function SignInGate({ title, sub, cta = "Create account", top = "top-14" }: { title: string; sub: string; cta?: string; top?: string }) {
  return (
    <SignedOut>
      <div
        className={`fixed inset-x-0 bottom-0 ${top} z-20 flex items-center justify-center px-4`}
        style={{ background: "rgba(10,10,15, 0.35)", backdropFilter: "blur(14px) saturate(140%)" }}
      >
        <div
          className="relative flex flex-col items-center text-center w-full max-w-[440px]"
          style={{ background: "var(--v2-panel-grad)", border: "1px solid var(--v2-line-1)", borderRadius: "16px", boxShadow: "var(--v2-panel-inset)", padding: "48px 40px" }}
        >
          <div className="absolute top-0 left-8 right-8 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, var(--v2-accent) 50%, transparent)" }}></div>
          <span className="font-mono font-semibold text-[11px] tracking-[0.06em] uppercase mb-5" style={{ color: "var(--v2-accent-text)" }}>
            [ Sign-in required ]
          </span>
          <h3 className="text-[22px] font-bold leading-tight mb-3" style={{ color: "var(--v2-t-1)" }}>
            {title}
          </h3>
          <p className="text-[14px] leading-relaxed mb-8 max-w-[340px]" style={{ color: "var(--v2-t-3)" }}>
            {sub}
          </p>
          <button data-auth-open="signup" className="btn-v2 btn-v2-primary h-11 px-7 text-[14px] font-semibold">
            {cta}
          </button>
        </div>
      </div>
    </SignedOut>
  );
}
