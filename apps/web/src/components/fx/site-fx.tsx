"use client";
import { useEffect, useState } from "react";
import { NavMenus } from "./nav-menus";

const PROMPTS = [
  "Paste a token mint address",
  "Paste a whale wallet address",
  "Find wallets that bought $BONK in the last 10 minutes",
  "Build a sniper agent for new Pump.fun launches",
];

function useTypewriter() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".text-type__content");
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = PROMPTS[0];
      return;
    }
    let i = 0;
    let n = 0;
    let dir = 1;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = PROMPTS[i];
      n += dir;
      el.textContent = full.slice(0, n);
      let d = dir === 1 ? 45 : 22;
      if (dir === 1 && n >= full.length) {
        dir = -1;
        d = 1600;
      } else if (dir === -1 && n <= 0) {
        dir = 1;
        i = (i + 1) % PROMPTS.length;
        d = 350;
      }
      t = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(t);
  }, []);
}

// Animasi muncul saat di-scroll untuk elemen bertanda data-reveal (pengganti whileInView lama).
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const CORNER_PATH: Record<string, string> = { tl: "M 10 2 L 2 2 L 2 10", tr: "M 2 2 L 10 2 L 10 10", bl: "M 2 2 L 2 10 L 10 10", br: "M 10 2 L 10 10 L 2 10" };
const CORNER_POS: Record<string, string> = { tl: "top-0 left-0", tr: "top-0 right-0", bl: "bottom-0 left-0", br: "bottom-0 right-0" };

function Corner({ pos }: { pos: string }) {
  return (
    <svg className={`absolute ${CORNER_POS[pos]} w-3 h-3 pointer-events-none`} viewBox="0 0 12 12" fill="none">
      <path d={CORNER_PATH[pos]} stroke="var(--v2-accent)" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem("corvid-cookies")) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  const close = (v: string) => {
    try {
      localStorage.setItem("corvid-cookies", v);
    } catch {}
    setShow(false);
  };
  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed bottom-6 left-6 z-[60] w-[320px] max-w-[calc(100vw-48px)]"
      style={{ background: "var(--v2-bg-0)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 20px 50px -12px rgba(0,0,0,0.8)" }}
    >
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
          [ COOKIES ]
        </span>
        <button className="flex h-6 w-6 items-center justify-center hover:bg-white/5" aria-label="Close" style={{ color: "rgba(255,255,255,0.3)" }} onClick={() => close("dismissed")}>
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
            <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" />
          </svg>
        </button>
      </div>
      <p className="px-4 py-3 font-mono text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
        We use cookies to improve your experience and analyze site usage.{" "}
        <a href="/privacy" style={{ color: "var(--v2-accent)" }}>
          Privacy Policy →
        </a>
      </p>
      <div className="flex items-center justify-between px-4 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <button className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }} onClick={() => close("declined")}>
          Decline
        </button>
        <button className="font-mono text-[10px] tracking-[0.18em] uppercase px-4 py-2 font-semibold" style={{ background: "var(--v2-accent)", color: "var(--v2-btn-text)" }} onClick={() => close("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button className="fixed bottom-6 right-6 z-50 group" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <div
        className="flex items-center gap-2 px-5 py-3 transition-all duration-300 group-hover:px-6"
        style={{
          background: "linear-gradient(135deg, rgba(var(--v2-accent-rgb),0.18), rgba(var(--v2-accent-rgb),0.08))",
          backdropFilter: "blur(18px) saturate(180%)",
          border: "1px solid rgba(var(--v2-accent-rgb),0.45)",
          boxShadow: "0 8px 32px -4px rgba(var(--v2-accent-rgb),0.35)",
          borderRadius: 999,
        }}
      >
        <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ color: "rgba(var(--v2-accent-rgb),0.95)" }}>
          TOP
        </span>
        <svg width="11" height="11" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:-translate-y-0.5">
          <line x1="5" y1="9" x2="5" y2="1" stroke="var(--v2-accent)" strokeWidth="1.4" strokeLinecap="round" />
          <polyline points="2,4 5,1 8,4" stroke="var(--v2-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    </button>
  );
}

export function SiteFx() {
  useTypewriter();
  useReveal();
  return (
    <>
      <NavMenus />
      <CookieBanner />
      <ScrollTop />
    </>
  );
}
