"use client";
import { useState, type ReactNode } from "react";
import { Star } from "@phosphor-icons/react";
import { AlphaLive, AlphaMyLists } from "@/components/app/alpha-views";

const TIERS = ["all", "S", "A", "B", "C"] as const;
const WINS = [0, 40, 50, 60, 70];
const MINTR = [0, 10, 50, 100];
const SORT_ON = { background: "var(--v2-bg-2)", color: "var(--v2-t-1)", border: "1px solid var(--v2-line-3)" } as const;
const SORT_OFF = { background: "transparent", color: "var(--v2-t-4)", border: "1px solid var(--v2-line-1)" } as const;

function Chip({ on, onClick, big, children }: { on: boolean; onClick: () => void; big?: boolean; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={on}
      className={`num rounded-sm transition-colors font-medium ${big ? "text-[13px] px-3 py-1.5" : "text-[12px] px-2.5 py-1.5"}`}
      style={{
        background: on ? "var(--v2-bg-2)" : "transparent",
        color: on ? "var(--v2-t-1)" : "var(--v2-t-4)",
        border: on ? "1px solid var(--v2-accent)" : "1px solid var(--v2-line-1)",
      }}
    >
      {children}
    </button>
  );
}

type Row = { tier: string; pnl: number; win: number | null; trades: number; ago: number; el: ReactNode };
const ROWS: Row[] = [
  { tier: "A", pnl: 16000.0, win: 80, trades: 11, ago: 17, el: (
                        <tr
 key="crv-user-0139"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/VFB7KktqFhR6mfea8ogbRt7dhcgeHr7rToDfLfkiGLjb?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(34, 197, 94, 0.12)",
                                        color: "var(--v2-pos)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-0139
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +7.50 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              80%
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$16.0k
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            11
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            17d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=VFB7KktqFhR6mfea8ogbRt7dhcgeHr7rToDfLfkiGLjb&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
  { tier: "A", pnl: 14000.0, win: null, trades: 214, ago: 19, el: (
                        <tr
 key="crv-user-3334"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/EpMooWca3h6mB1gL2YC8SKkLB19H14JcVWxHuXAn7VSy?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(34, 197, 94, 0.12)",
                                        color: "var(--v2-pos)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-3334
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +13.97 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-t-1)" }}
                            >
                              8 trades
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$14.0k
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            214
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            13
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            16d
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            19d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=EpMooWca3h6mB1gL2YC8SKkLB19H14JcVWxHuXAn7VSy&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
  { tier: "A", pnl: 419.0, win: 69, trades: 17, ago: 17, el: (
                        <tr
 key="crv-user-9301"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/kMcZYuarYRbVMCpTpEAfFk3zbMoYa1uZPYRUDGujwtas?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(34, 197, 94, 0.12)",
                                        color: "var(--v2-pos)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-9301
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +5.67 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              69%
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$419
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            17
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            17d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=kMcZYuarYRbVMCpTpEAfFk3zbMoYa1uZPYRUDGujwtas&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
  { tier: "A", pnl: 28.0, win: null, trades: 0, ago: 4, el: (
                        <tr
 key="crv-user-1811"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/Ey5XBPrVTj6aixNGSDcd5DcAemGj4Yy1Apr2CHwMhsKR?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(34, 197, 94, 0.12)",
                                        color: "var(--v2-pos)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-1811
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +10.79 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              5 trades
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$28
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            0
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            4d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=Ey5XBPrVTj6aixNGSDcd5DcAemGj4Yy1Apr2CHwMhsKR&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
  { tier: "A", pnl: 0.0, win: 66, trades: 0, ago: 40, el: (
                        <tr
 key="crv-user-6797"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/phEMQYe2FR1ixbeugm5WRy2VxkBxcXnGvvuw8rKmKE8r?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(34, 197, 94, 0.12)",
                                        color: "var(--v2-pos)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      A
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-6797
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +5.72 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              66%
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$0
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            0
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            40d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=phEMQYe2FR1ixbeugm5WRy2VxkBxcXnGvvuw8rKmKE8r&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
  { tier: "B", pnl: 105.0, win: null, trades: 443, ago: 19, el: (
                        <tr
 key="crv-user-8970"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/r1apWbFcLqjrUh37Z7NU9pzoby1wrHgQ5B6vmyQLhTGq?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(59, 130, 246, 0.12)",
                                        color: "rgb(96, 165, 250)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      B
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-8970
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +1.77 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-t-1)" }}
                            >
                              52%
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$105
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            443
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            123
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            4d
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            19d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=r1apWbFcLqjrUh37Z7NU9pzoby1wrHgQ5B6vmyQLhTGq&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
  { tier: "B", pnl: 0.0, win: null, trades: 49, ago: 3, el: (
                        <tr
 key="crv-user-3730"
                          className="transition-colors group"
                          style={{ cursor: "pointer" }}
                        >
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <button
                              className="inline-flex items-center justify-center h-9 w-9 -m-2 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)]"
                              title="Add to watchlist"
                              style={{ color: "var(--v2-t-4)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                              >
                                <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
                              </svg>
                            </button>
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "left" }}
                          >
                            <a
                              className="hover:underline decoration-dotted underline-offset-4"
                              href="/application/alpha/wallet/JCuvKvqT5kz2KDPDtHmwWPpDdF11MMyMt2DD7DNHVAfi?chain=solana"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <img
                                  alt=""
                                  width="48"
                                  height="48"
                                  loading="lazy"
                                  decoding="async"
                                  className="rounded-sm object-cover border border-[var(--v2-line-2)] shrink-0"
                                  src="/avatars/wallets/placeholder.svg"
                                />
                                <div className="min-w-0 flex flex-col">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span
                                      className="eyebrow num shrink-0 flex items-center justify-center font-bold rounded-sm w-7 h-7"
                                      style={{
                                        background: "rgba(59, 130, 246, 0.12)",
                                        color: "rgb(96, 165, 250)",
                                        fontSize: "14px",
                                        lineHeight: "1",
                                      }}
                                    >
                                      B
                                    </span>
                                    <span
                                      className="truncate text-[15px] font-medium"
                                      style={{ color: "var(--v2-t-1)" }}
                                    >
                                      crv-user-3730
                                    </span>
                                  </div>
                                  <span
                                    className="text-[12px] truncate mt-0.5"
                                    style={{ color: "var(--v2-t-4)" }}
                                  >
                                    Discovered · +17.72 SOL / 30d
                                  </span>
                                </div>
                              </div>
                            </a>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-t-1)" }}
                            >
                              49%
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums"
                            style={{ textAlign: "right" }}
                          >
                            <span
                              className="font-semibold"
                              style={{ color: "var(--v2-pos)" }}
                            >
                              +$0
                            </span>
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden md:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            49
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-2)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden lg:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-3)",
                            }}
                          >
                            —
                          </td>
                          <td
                            className="canvas-td num tabular-nums hidden sm:table-cell"
                            style={{
                              textAlign: "right",
                              color: "var(--v2-t-4)",
                            }}
                          >
                            3d
                          </td>
                          <td
                            className="canvas-td"
                            style={{ textAlign: "right" }}
                          >
                            <div className="flex gap-1.5 justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                              <a
                                className="px-2.5 py-1 rounded-sm inline-flex items-center gap-1 whitespace-nowrap text-[12px] font-semibold uppercase tracking-wide"
                                href="/application/agents/new?type=copy_trader&wallet=JCuvKvqT5kz2KDPDtHmwWPpDdF11MMyMt2DD7DNHVAfi&chain=solana"
                                style={{
                                  border: "1px solid var(--v2-accent)",
                                  background: "transparent",
                                  color: "var(--v2-accent-text)",
                                  opacity: "1",
                                  transition: "background 140ms, color 140ms",
                                }}
                              >
                                Copy
                              </a>
                            </div>
                          </td>
                        </tr>
  ) },
];

export function ApplicationAlphaContent() {
  const [tab, setTab] = useState<"wallets" | "live" | "my">("wallets");
  const [tier, setTier] = useState<(typeof TIERS)[number]>("all");
  const [minWin, setMinWin] = useState(0);
  const [minTr, setMinTr] = useState(0);
  const [sort, setSort] = useState<"top" | "trending">("top");
  const [compact, setCompact] = useState(false);
  const shown = ROWS.filter(
    (r) =>
      (tier === "all" || r.tier === tier) &&
      (minWin === 0 || (r.win !== null && r.win > minWin)) &&
      r.trades >= minTr,
  ).sort((a, b) => (sort === "top" ? b.pnl - a.pnl : a.ago - b.ago));
  return (
    <>
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col h-[calc(100vh-56px)] overflow-hidden">
          <div className="shrink-0">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div className="py-3">
                <h2
                  className="font-heading font-semibold text-[24px] tracking-[-0.02em]"
                  style={{ color: "var(--v2-t-1)" }}
                >
                  Smart Wallets
                </h2>
                <p
                  className="text-[13px] mt-0.5"
                  style={{ color: "var(--v2-t-4)" }}
                >
                  Curated top performers, live trades, cluster plays
                </p>
              </div>
            </div>
            <div
              className="flex items-center gap-5 mb-6 overflow-x-auto"
              style={{ borderBottom: "1px solid var(--v2-line-1)" }}
            >
              {(
                [
                  ["wallets", "Wallets"],
                  ["live", "Live feed"],
                  ["my", "My lists"],
                ] as const
              ).map(([k, label]) => {
                const on = tab === k;
                return (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    aria-pressed={on}
                    className="relative py-3 text-[15px] transition-colors whitespace-nowrap"
                    style={{ color: on ? "var(--v2-t-1)" : "var(--v2-t-4)", fontWeight: on ? "500" : "400" }}
                  >
                    <span className="flex items-center gap-2">
                      {k === "my" && <Star size={14} weight={on ? "fill" : "regular"} />}
                      {label}
                    </span>
                    {on && (
                      <span
                        className="absolute left-0 right-0"
                        style={{ bottom: "-1px", height: "2px", background: "var(--v2-accent)" }}
                      ></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          {tab === "wallets" ? (
          <div className="flex-1 min-h-0 lg:flex lg:gap-3">
            <div
              className="hidden lg:block shrink-0 overflow-y-auto sidebar-no-scrollbar"
              style={{ width: "260px" }}
            >
              <aside
                className="hidden lg:block"
                style={{ background: "var(--v2-bg-0)" }}
              >
                <div className="flex items-center justify-between px-4 h-[44px]">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{ color: "var(--v2-t-3)" }}
                    >
                      <path d="M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-91,79.89A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.25-8.2L49.23,60H206.77Z"></path>
                    </svg>
                    <span
                      className="text-[13px] font-semibold"
                      style={{ color: "var(--v2-t-2)" }}
                    >
                      Filters
                    </span>
                  </div>
                  <button
                    className="text-[11px] font-medium transition-colors hover:text-[var(--v2-t-1)]"
                    style={{ color: "var(--v2-t-4)" }}
                    title="Collapse filters"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{ transform: "rotate(90deg)" }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Tier
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(0)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {TIERS.map((k) => (
                        <Chip key={k} on={tier === k} onClick={() => setTier(k)}>
                          {k === "all" ? "All" : k}<span className="ml-1 opacity-60">{k === "all" ? ROWS.length : ROWS.filter((r) => r.tier === k).length}</span>
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Win rate
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(0)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {WINS.map((n) => (
                        <Chip key={n} on={minWin === n} onClick={() => setMinWin(n)}>
                          {n === 0 ? "Any" : ">" + n + "%"}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Min trades (30d)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(0)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {MINTR.map((n) => (
                        <Chip key={n} on={minTr === n} onClick={() => setMinTr(n)}>
                          {n === 0 ? "Any" : n + "+"}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: "1px solid var(--v2-line-1)" }}>
                  <button
                    className="flex items-center justify-between w-full px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-[var(--v2-bg-1)]"
                    style={{ color: "var(--v2-t-2)" }}
                  >
                    Last active
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        color: "var(--v2-t-4)",
                        transform: "rotate(-90deg)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                </div>
              </aside>
            </div>
            <div className="flex-1 min-w-0 flex flex-col px-3 lg:px-0">
              <div className="lg:hidden flex items-center gap-4 mb-4 overflow-x-auto pb-1 flex-nowrap">
                <div className="flex gap-1.5 shrink-0">
                  {TIERS.map((k) => (
                    <Chip key={k} on={tier === k} onClick={() => setTier(k)} big>
                      {k === "all" ? "All" : k}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-2 h-[44px] overflow-x-auto">
                  <button
                    className="hidden lg:flex items-center justify-center shrink-0 w-8 h-8 rounded-sm transition-colors hover:bg-[var(--v2-bg-2)] mr-2"
                    style={{
                      color: "var(--v2-t-3)",
                      border: "1px solid var(--v2-line-1)",
                    }}
                    title="Collapse filters"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      style={{
                        transform: "rotate(90deg)",
                        transition: "transform 150ms",
                      }}
                    >
                      <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                    </svg>
                  </button>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setSort("top")}
                      aria-pressed={sort === "top"}
                      className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-sm transition-colors whitespace-nowrap"
                      style={sort === "top" ? SORT_ON : SORT_OFF}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                      </svg>{" "}
                      Top
                    </button>
                    <button
                      onClick={() => setSort("trending")}
                      aria-pressed={sort === "trending"}
                      className="flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-sm transition-colors whitespace-nowrap"
                      style={sort === "trending" ? SORT_ON : SORT_OFF}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M244,56v64a12,12,0,0,1-24,0V85l-75.51,75.52a12,12,0,0,1-17,0L96,129,32.49,192.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0L136,135l67-67H168a12,12,0,0,1,0-24h64A12,12,0,0,1,244,56Z"></path>
                      </svg>{" "}
                      Trending
                    </button>
                  </div>
                  <div className="flex-1"></div>
                  <div className="flex items-center shrink-0 ml-1 gap-0.5">
                    <button
                      onClick={() => setCompact(false)}
                      aria-pressed={!compact}
                      className="p-1.5 rounded-sm transition-colors"
                      style={{
                        color: !compact ? "var(--v2-t-1)" : "var(--v2-t-4)",
                        background: !compact ? "var(--v2-bg-2)" : "transparent",
                      }}
                      title="Default view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M208,136H48a20,20,0,0,0-20,20v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V156A20,20,0,0,0,208,136Zm-4,52H52V160H204Zm4-144H48A20,20,0,0,0,28,64v36a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V64A20,20,0,0,0,208,44Zm-4,52H52V68H204Z"></path>
                      </svg>
                    </button>
                    <button
                      onClick={() => setCompact(true)}
                      aria-pressed={compact}
                      className="p-1.5 rounded-sm transition-colors"
                      style={{
                        color: compact ? "var(--v2-t-1)" : "var(--v2-t-4)",
                        background: compact ? "var(--v2-bg-2)" : "transparent",
                      }}
                      title="Compact view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M76,64A12,12,0,0,1,88,52H216a12,12,0,0,1,0,24H88A12,12,0,0,1,76,64Zm140,52H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM44,112a16,16,0,1,0,16,16A16,16,0,0,0,44,112Zm0-64A16,16,0,1,0,60,64,16,16,0,0,0,44,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,44,176Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="-mx-3 sm:mx-0">
                  <div className="overflow-x-auto">
                    <table className={`w-full text-[14px] canvas-hover-rows ${compact ? "cv-compact" : ""}`}>
                      <thead
                        className="sticky top-0 z-10"
                        style={{
                          background: "var(--v2-bg-0)",
                          boxShadow: "0 1px 0 var(--v2-line-1)",
                        }}
                      >
                        <tr
                          className="text-left"
                          style={{ color: "var(--v2-t-4)" }}
                        >
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th w-8"
                            style={{ textAlign: "left" }}
                          >
                            {" "}
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "left" }}
                          >
                            Wallet
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Win rate
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              PnL
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden md:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Trades
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden lg:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Tokens
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden lg:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Avg hold
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th hidden sm:table-cell"
                            style={{ textAlign: "right" }}
                          >
                            <button
                              className="transition-colors hover:text-[var(--v2-t-1)] cursor-pointer select-none"
                              style={{ color: "inherit" }}
                            >
                              Last active
                            </button>
                          </th>
                          <th
                            className="font-normal text-[12px] uppercase tracking-[0.08em] canvas-th"
                            style={{ textAlign: "right" }}
                          >
                            {" "}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {shown.map((r) => r.el)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : tab === "live" ? (
            <AlphaLive />
          ) : (
            <AlphaMyLists />
          )}
        </div>
      </div>
    </>
  );
}
