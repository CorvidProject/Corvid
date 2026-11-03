"use client";
import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AccordionItem {
  label: string;
  badge?: ReactNode;
  content: ReactNode;
}

type Variant = "faq" | "roadmap" | "token";

const CORNERS = [
  { pos: "tl", d: "M 12 2 L 2 2 L 2 12", cls: "top-0 left-0" },
  { pos: "tr", d: "M 2 2 L 12 2 L 12 12", cls: "top-0 right-0" },
  { pos: "bl", d: "M 2 2 L 2 12 L 12 12", cls: "bottom-0 left-0" },
  { pos: "br", d: "M 12 2 L 12 12 L 2 12", cls: "bottom-0 right-0" },
];

// Warna per varian: FAQ/Roadmap berada di section terang (variabel --v2-section-*), Token di latar gelap.
const FG = "var(--v2-section-fg-rgb, 19,23,27)";
const THEME = {
  light: {
    accent: "var(--v2-section-accent, var(--v2-accent))",
    border: `1px solid rgba(${FG}, 0.08)`,
    text: (open: boolean, hover: boolean) =>
      open ? `rgb(${FG})` : hover ? `rgba(${FG}, 0.92)` : `rgba(${FG}, 0.78)`,
    index: (on: boolean) =>
      on ? "var(--v2-section-accent, var(--v2-accent))" : `rgba(${FG}, 0.45)`,
    hoverBg: `rgba(${FG}, 0.03)`,
  },
  dark: {
    accent: "var(--v2-accent)",
    border: "1px solid rgba(255,255,255,0.08)",
    text: (open: boolean, hover: boolean) =>
      open
        ? "rgb(255,255,255)"
        : hover
          ? "rgba(255,255,255,0.92)"
          : "rgba(255,255,255,0.78)",
    index: (on: boolean) =>
      on ? "var(--v2-accent-text)" : "rgba(255,255,255,0.45)",
    hoverBg: "rgba(255,255,255,0.03)",
  },
} as const;

function Row({
  item,
  i,
  open,
  setOpen,
  variant,
}: {
  item: AccordionItem;
  i: number;
  open: number | null;
  setOpen: (n: number | null) => void;
  variant: Variant;
}) {
  const [hover, setHover] = useState(false);
  const isOpen = open === i;
  const dark = variant === "token";
  const th = dark ? THEME.dark : THEME.light;
  const active = hover || isOpen;
  const num = String(i + 1).padStart(2, "0");

  const initialY = variant === "faq" ? 20 : variant === "roadmap" ? 8 : 16;
  const delay = variant === "roadmap" ? 0.05 * i : 0.06 * i;

  const header =
    variant === "faq" ? (
      <>
        <span
          className="font-mono text-[11px] tracking-[0.10em] shrink-0 mt-0.5 transition-colors duration-200"
          style={{ color: th.index(active), minWidth: 32 }}
        >
          [{num}]
        </span>
        <span
          className="flex-1 font-sans font-semibold leading-snug transition-colors duration-200"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
            color: th.text(isOpen, hover),
          }}
        >
          {item.label}
        </span>
        <motion.span
          className="shrink-0 font-mono text-xl leading-none mt-0.5"
          animate={{
            color: active ? th.accent : `rgba(${FG}, 0.45)`,
            rotate: isOpen ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </>
    ) : variant === "roadmap" ? (
      <>
        <span
          className="font-mono text-[11px] tracking-[0.10em] shrink-0 mt-0.5 transition-colors duration-200"
          style={{ color: th.index(active), minWidth: 32 }}
        >
          [{num}]
        </span>
        <div className="flex-1 flex items-center gap-3 flex-wrap">
          <span
            className="font-sans font-semibold leading-snug transition-colors duration-200"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              color: th.text(isOpen, hover),
            }}
          >
            {item.label}
          </span>
          {item.badge}
        </div>
        <motion.span
          className="shrink-0 font-mono text-xl leading-none mt-0.5"
          animate={{
            color: active ? th.accent : `rgba(${FG}, 0.45)`,
            rotate: isOpen ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </>
    ) : (
      <>
        <span
          className="font-mono text-[11px] tracking-[0.10em] shrink-0 transition-colors duration-200"
          style={{ color: th.index(active), minWidth: 28 }}
        >
          [{num}]
        </span>
        <span
          className="flex-1 font-heading font-bold leading-snug transition-colors duration-200 flex items-center gap-3"
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
            color: th.text(isOpen, hover),
            letterSpacing: "-0.02em",
          }}
        >
          {item.label}
          {item.badge}
        </span>
        <motion.span
          className="shrink-0 font-mono text-xl leading-none"
          animate={{
            color: active ? "var(--v2-accent-text)" : "rgba(255,255,255,0.45)",
            rotate: isOpen ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </>
    );

  const buttonClass =
    variant === "token"
      ? "w-full flex items-center gap-4 lg:gap-6 px-6 lg:px-12 py-6 text-left transition-colors duration-200"
      : "w-full flex items-start justify-between gap-4 px-6 lg:px-10 py-6 text-left transition-colors duration-200";

  const panelPad =
    variant === "faq"
      ? { className: "px-6 lg:px-10 pb-7 pl-[calc(1.5rem+32px+1rem)]" }
      : variant === "roadmap"
        ? {
            className: "px-6 lg:px-10 pb-7",
            style: { paddingLeft: "calc(32px + 2.5rem)" },
          }
        : {
            className: "px-6 lg:px-12 pb-7",
            style: { paddingLeft: "calc(28px + 3rem)" },
          };

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: th.border }}
    >
      <div
        className="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {CORNERS.map(({ pos, d, cls }) => (
          <motion.svg
            key={pos}
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            className={`absolute ${cls} pointer-events-none z-10`}
            animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.5 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <path
              d={d}
              stroke={th.accent}
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </motion.svg>
        ))}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
          style={{ background: th.accent }}
          animate={{ opacity: active ? 1 : 0, scaleY: active ? 1 : 0.3 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <button
          className={buttonClass}
          style={{
            background:
              isOpen && dark
                ? "rgba(var(--v2-accent-rgb),0.05)"
                : hover && !isOpen
                  ? th.hoverBg
                  : "transparent",
          }}
          onClick={() => setOpen(isOpen ? null : i)}
        >
          {header}
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.38, delay: 0.12 },
              }}
              style={{ overflow: "hidden" }}
            >
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 6 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.08,
                }}
              >
                <div {...panelPad}>
                  {variant === "faq" ? (
                    <div
                      className="pl-4"
                      style={{ borderLeft: `2px solid ${th.accent}` }}
                    >
                      {item.content}
                    </div>
                  ) : (
                    item.content
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Daftar akordeon (FAQ, Roadmap, Token): satu baris terbuka pada satu waktu.
export function AccordionList({
  items,
  variant,
  initialOpen = 0,
}: {
  items: AccordionItem[];
  variant: Variant;
  initialOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(initialOpen);
  return (
    <>
      {items.map((item, i) => (
        <Row
          key={item.label}
          item={item}
          i={i}
          open={open}
          setOpen={setOpen}
          variant={variant}
        />
      ))}
    </>
  );
}
