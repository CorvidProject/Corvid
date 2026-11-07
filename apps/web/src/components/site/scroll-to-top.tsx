"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";

// Tombol "TOP" melayang di kanan bawah; muncul setelah scroll lebih dari 400px (padanan referensi).
export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 flex items-center gap-2 h-11 px-5 rounded-full font-mono text-[12px] font-semibold tracking-[0.14em] uppercase"
          style={{
            zIndex: 50,
            color: "var(--v2-accent-text)",
            background: "rgba(10,10,15, 0.85)",
            border: "1px solid rgba(var(--v2-accent-rgb), 0.6)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.45)",
          }}
        >
          Top <ArrowUp size={14} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
