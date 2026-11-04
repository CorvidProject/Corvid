"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react";

const STORAGE_KEY = "corvid_cookies";

const CORNERS = [
  { pos: "tl", d: "M 12 2 L 2 2 L 2 12", cls: "top-0 left-0" },
  { pos: "tr", d: "M 2 2 L 12 2 L 12 12", cls: "top-0 right-0" },
  { pos: "bl", d: "M 2 2 L 2 12 L 12 12", cls: "bottom-0 left-0" },
  { pos: "br", d: "M 12 2 L 12 12 L 2 12", cls: "bottom-0 right-0" },
];

// Banner cookie (port dari komponen asli): muncul 1,6 dtk setelah load bila belum ada pilihan tersimpan.
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setShow(true), 1600);
        return () => clearTimeout(t);
      }
    } catch {
      /* penyimpanan tidak tersedia */
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* abaikan */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 z-50 max-w-xs w-[calc(100vw-3rem)]"
        >
          <div className="relative" style={{ background: "#0A0A0F", border: "1px solid rgba(255,255,255,0.09)" }}>
            {CORNERS.map(({ pos, d, cls }) => (
              <motion.svg
                key={pos}
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className={`absolute ${cls} pointer-events-none`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <path d={d} stroke="var(--v2-accent-text)" strokeWidth="1.5" strokeLinecap="square" />
              </motion.svg>
            ))}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                [ COOKIES ]
              </span>
              <button
                onClick={() => setShow(false)}
                className="flex h-6 w-6 items-center justify-center transition-colors hover:bg-white/5"
                style={{ color: "rgba(255,255,255,0.30)" }}
                aria-label="Close"
              >
                <X size={12} weight="bold" />
              </button>
            </div>
            <div className="px-4 py-4">
              <p className="font-mono text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                We use cookies to improve your experience and analyze site usage.{" "}
                <Link href="/privacy" className="transition-opacity hover:opacity-70" style={{ color: "var(--v2-accent-text)" }}>
                  Privacy Policy →
                </Link>
              </p>
            </div>
            <div className="flex items-center justify-between px-4 py-3 gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <button
                onClick={() => choose("declined")}
                className="font-mono text-[10px] tracking-[0.10em] uppercase transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                DECLINE
              </button>
              <button
                onClick={() => choose("accepted")}
                className="font-mono text-[10px] tracking-[0.10em] uppercase px-4 py-2 text-white transition-all hover:brightness-110"
                style={{ background: "var(--v2-accent)" }}
              >
                ACCEPT
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
