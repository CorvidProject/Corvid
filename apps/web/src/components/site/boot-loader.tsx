"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "corvid:loaded";
// Rute yang melewati layar boot (sama seperti build asli).
const SKIP = new Set(["/social"]);

// Layar boot persentase 0-100% sekali per sesi (port dari komponen asli).
export function BootLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if ((pathname && SKIP.has(pathname)) || sessionStorage.getItem(SESSION_KEY)) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = Math.min(now - start, 1800);
      const r = elapsed / 1800;
      setPercent(Math.floor(100 * (r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2)));
      if (elapsed < 1800) raf = requestAnimationFrame(tick);
      else setPercent(100);
    };
    raf = requestAnimationFrame(tick);
    const done = setTimeout(() => setVisible(false), 2200);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(done);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="crv-loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "#13171B" }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="text-center">
            <span
              className="font-heading font-extrabold tracking-[-0.06em] leading-none tabular-nums"
              style={{ fontSize: "clamp(5rem, 20vw, 14rem)", color: "var(--v2-accent-text)" }}
            >
              {percent}
            </span>
            <span
              className="font-heading font-extrabold tracking-[-0.04em] leading-none"
              style={{ fontSize: "clamp(2rem, 8vw, 5rem)", color: "rgba(var(--v2-accent-rgb),0.50)" }}
            >
              %
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
