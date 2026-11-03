"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";
import type { NavGroup, NavSection } from "@/lib/nav-data";

// Dropdown navbar (port dari komponen asli): buka saat hover/fokus, tutup 140 ms setelah kursor keluar.
export function NavDropdown({ section, size = "md" }: { section: NavSection; size?: "sm" | "md" }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    timer.current = setTimeout(() => {
      setOpen(false);
      setHovered(null);
    }, 140);
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hide();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 ${
          size === "sm" ? "px-3 h-9 text-[14px]" : "px-3.5 py-2 text-[15px]"
        } ${open ? "text-white bg-white/[0.06]" : "text-white/60 hover:text-white"}`}
      >
        {section.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-flex">
          <CaretDown size={12} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.985 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full pt-3 z-50"
            style={{ transformOrigin: "top left" }}
          >
            <div
              className="grid rounded-2xl overflow-hidden"
              onMouseLeave={() => setHovered(null)}
              style={{
                gridTemplateColumns: `repeat(${section.columns.length}, 340px)`,
                background: "#181e23",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 30px 70px -20px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {section.columns.map((col, i) => (
                <div
                  key={i}
                  className="p-3"
                  style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.012)" } : undefined}
                >
                  {col.map((group) => (
                    <DropdownGroup
                      key={group.title}
                      group={group}
                      hovered={hovered}
                      setHovered={setHovered}
                      layoutKey={section.label}
                      onPick={() => setOpen(false)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownGroup({
  group,
  hovered,
  setHovered,
  layoutKey,
  onPick,
}: {
  group: NavGroup;
  hovered: string | null;
  setHovered: (href: string | null) => void;
  layoutKey: string;
  onPick: () => void;
}) {
  return (
    <div className="mb-2 last:mb-0">
      <div className="px-3 pt-1 pb-2 font-mono text-[11px] tracking-[0.16em] uppercase text-white/35">{group.title}</div>
      {group.items.map((item) => {
        const Icon = item.icon;
        const active = hovered === item.href && !item.soon;
        const inner = (
          <>
            {active && (
              <motion.span
                layoutId={`crv-nav-hl-${layoutKey}`}
                className="absolute inset-0 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", boxShadow: "inset 0 0 0 1px rgba(var(--v2-accent-rgb),0.18)" }}
                transition={{ type: "spring", stiffness: 520, damping: 40 }}
              />
            )}
            <span
              className="relative shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
              style={{
                color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
                background: active
                  ? "linear-gradient(180deg, #1a47e0 0%, var(--v2-accent) 100%)"
                  : "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%)",
                border: `1px solid ${active ? "rgba(124,155,255,0.6)" : "rgba(255,255,255,0.07)"}`,
                boxShadow: active
                  ? "0 6px 20px -6px rgba(var(--v2-accent-rgb),0.8), inset 0 1px 0 rgba(255,255,255,0.3)"
                  : "inset 0 1px 0 rgba(255,255,255,0.05)",
                transform: active ? "scale(1.06)" : "scale(1)",
              }}
            >
              <Icon size={20} weight={active ? "fill" : "duotone"} />
            </span>
            <span className="relative min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className={`text-[14px] font-medium ${active ? "text-white" : item.soon ? "text-white/45" : "text-white/85"}`}>
                  {item.label}
                </span>
                {item.soon && (
                  <span
                    className="font-mono text-[9.5px] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-md"
                    style={{
                      color: "var(--v2-accent-text)",
                      background: "rgba(var(--v2-accent-rgb),0.10)",
                      border: "1px solid rgba(var(--v2-accent-rgb),0.25)",
                    }}
                  >
                    Soon
                  </span>
                )}
                {item.beta && (
                  <span
                    className="font-mono text-[9.5px] uppercase tracking-[0.08em] px-1.5 py-0.5 rounded-md text-white/60"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
                  >
                    Beta
                  </span>
                )}
              </span>
              <span className="block text-[12px] text-white/45 truncate">{item.desc}</span>
            </span>
            {!item.soon && (
              <ArrowRight
                size={14}
                weight="bold"
                className={`relative shrink-0 text-[var(--v2-accent-text)] transition-all duration-200 ${
                  active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1.5"
                }`}
              />
            )}
          </>
        );
        return item.soon ? (
          <div key={item.href} className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-default">
            {inner}
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            onClick={onPick}
            onMouseEnter={() => setHovered(item.href)}
            onFocus={() => setHovered(item.href)}
            className="group relative flex items-center gap-3 px-3 py-2.5 rounded-xl outline-none"
          >
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
