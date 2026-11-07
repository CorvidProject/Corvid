"use client";
import { signInWithEmail, signUpWithEmail } from "@/lib/auth";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Eye, EyeSlash, SpinnerGap } from "@phosphor-icons/react";
import { site } from "@/lib/site";

type Mode = "signin" | "signup";

const INPUT =
  "w-full h-11 px-4 rounded-xl bg-white border border-[rgba(10,10,15,0.12)] text-sm text-[#0A0A0F] placeholder:text-[rgba(10,10,15,0.30)] focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]/20 transition-all";
const LABEL =
  "block font-mono text-[10px] font-medium tracking-[0.08em] uppercase text-[rgba(10,10,15,0.50)] mb-1.5";

// Penyamaran huruf Cyrillic/serupa menjadi Latin agar email tidak ambigu (sama seperti build asli).
const LOOKALIKE: Record<string, string> = {
  а: "a",
  е: "e",
  о: "o",
  р: "p",
  с: "c",
  у: "y",
  х: "x",
  Ь: "b",
  ь: "b",
  А: "A",
  Е: "E",
  О: "O",
  Р: "P",
  С: "C",
  У: "Y",
  Х: "X",
  і: "i",
  І: "I",
  ї: "i",
  ё: "e",
  Ё: "E",
  в: "B",
  Н: "H",
  К: "K",
  М: "M",
  Т: "T",
};
const normalizeEmail = (v: string) =>
  v
    .replace(/[​-‍﻿\s]/g, "")
    .split("")
    .map((c) => LOOKALIKE[c] ?? c)
    .join("")
    .toLowerCase();

const STATS = [
  { k: "0%", v: "TRADING FEES" },
  { k: "24/7", v: "AGENT UPTIME" },
  { k: "< 3s", v: "RISK SCAN" },
];

// Halaman masuk/daftar (port dari komponen asli). Autentikasi nyata memakai Supabase Auth (Tahap 2).
export function SigninView() {
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const r =
        mode === "signin"
          ? await signInWithEmail(email, password)
          : await signUpWithEmail(email, password, name || email.split("@")[0] || "Trader");
      if (r.code === "confirm_email") setError("Check your inbox: we sent a confirmation link. Click it, then log in.");
      else if (r.error) setError(r.error);
      else window.location.href = "/application";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex bg-[#E8E8EB]">
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-10"
        style={{ background: "#0A0A0F" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--v2-accent-text) 1px, transparent 1px), linear-gradient(to bottom, var(--v2-accent-text) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 30% 50%, #000 0%, transparent 80%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 28% 42%, rgba(var(--v2-accent-rgb),0.22) 0%, transparent 55%)",
          }}
        />
        <div
          className="relative z-10 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <span>
            <span style={{ color: "var(--v2-accent-text)" }}>●</span> SYS ·
            ONLINE
          </span>
          <span>AUTH · GATEWAY</span>
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="font-heading font-black text-white text-5xl xl:text-6xl tracking-[-0.04em] leading-[0.95]">
            Read the
            <br />
            <span style={{ color: "var(--v2-accent-text)" }}>token</span>
            <br />
            Trade the
            <br />
            <span style={{ color: "var(--v2-accent-text)" }}>signal</span>
          </h2>
          <p
            className="mt-6 text-sm max-w-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            AI-powered trading intelligence: autonomous agents, real-time
            signals, on-chain execution
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-md">
            {STATS.map((s) => (
              <div
                key={s.v}
                className="p-3 border border-white/[0.08] text-center"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="font-heading font-black text-xl tracking-[-0.03em] text-white">
                  {s.k}
                </div>
                <div
                  className="font-mono text-[8px] tracking-[0.12em] uppercase mt-0.5"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative z-10 flex items-end justify-between font-mono text-[9px] tracking-[0.12em] uppercase"
          style={{ color: "rgba(255,255,255,0.30)" }}
        >
          <div className="flex flex-col gap-1">
            <span>{site.name.toUpperCase()} · AI TRADING ADVISOR</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>
              NON-CUSTODIAL · SELF-SOVEREIGN
            </span>
          </div>
          <span>EST. 2026</span>
        </div>
        <span className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[#FF6B00]" />
        <span className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[#FF6B00]" />
        <span className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[#FF6B00]" />
        <span className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[#FF6B00]" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12 lg:px-16 bg-white relative">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h2 className="font-heading font-extrabold text-2xl tracking-[-0.03em] text-[#0A0A0F] mb-1.5">
              {mode === "signin" ? "Welcome back" : "Create account"}
            </h2>
            <p className="font-mono text-[11px] tracking-[0.06em] text-[rgba(10,10,15,0.40)]">
              {mode === "signin"
                ? `Sign in to your ${site.name} account`
                : "Enter your details to get started"}
            </p>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className={LABEL}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="eg. John Francisco"
                  className={INPUT}
                />
              </div>
            )}
            <div>
              <label className={LABEL}>Your email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(normalizeEmail(e.target.value))}
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                placeholder="eg. you@gmail.com"
                required
                className={INPUT}
              />
            </div>
            <div>
              <label className={LABEL}>
                {mode === "signup" ? "Create password" : "Password"}
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={
                    mode === "signup"
                      ? "Min. 6 characters"
                      : "Enter your password"
                  }
                  required
                  minLength={mode === "signup" ? 6 : undefined}
                  className={`${INPUT} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[rgba(10,10,15,0.30)] hover:text-[rgba(10,10,15,0.60)] transition-colors"
                >
                  {show ? (
                    <EyeSlash className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-xs text-red-600">
                {error}
              </div>
            )}
            {mode === "signup" && (
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-[rgba(10,10,15,0.20)] bg-white text-[#FF6B00] focus:ring-[#FF6B00]/30 focus:ring-offset-0 cursor-pointer accent-[#FF6B00]"
                />
                <span className="text-xs text-[rgba(10,10,15,0.45)] leading-relaxed group-hover:text-[rgba(10,10,15,0.60)] transition-colors">
                  I understand that all trading activities on {site.name} are at
                  my own risk. The platform and its AI agents are tools, not
                  financial advice.
                </span>
              </label>
            )}
            <button
              type="submit"
              disabled={loading || (mode === "signup" && !accepted)}
              className="w-full h-12 rounded-xl bg-[#0A0A0F] text-white font-mono text-sm font-semibold uppercase tracking-[0.06em] hover:bg-[#1a1a24] transition-all disabled:opacity-40 flex items-center justify-center gap-2 mt-2"
            >
              {loading && <SpinnerGap className="h-4 w-4 animate-spin" />}
              {mode === "signin" ? "Sign In" : "Create account"}
            </button>
          </form>
          <p className="text-center text-sm text-[rgba(10,10,15,0.40)] mt-8">
            {mode === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError(null);
              }}
              className="text-[#FF6B00] hover:text-[#CC5500] font-semibold transition-colors"
            >
              {mode === "signin" ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-end gap-4">
          <Link
            href="/terms"
            className="font-mono text-[9px] tracking-[0.14em] uppercase text-[rgba(10,10,15,0.20)] hover:text-[rgba(10,10,15,0.50)] transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="font-mono text-[9px] tracking-[0.14em] uppercase text-[rgba(10,10,15,0.20)] hover:text-[rgba(10,10,15,0.50)] transition-colors"
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
