"use client";
import { DotBackdrop } from "@/components/app/dot-backdrop";

// Refund (menutup token account kosong untuk mengambil kembali rent) adalah fitur khusus Solana.
// Di chain EVM (Robinhood Chain) tidak ada akun token per wallet, jadi tidak ada yang bisa diambil kembali.
export function ApplicationRefundContent() {
  return (
    <>
      <DotBackdrop variant="rings" />
      <div className="relative z-10 mx-auto w-full max-w-[520px]">
        <h1
          className="font-heading font-extrabold tracking-[-0.04em] leading-none text-center"
          style={{ color: "#ffffff", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          Refund
        </h1>
        <p className="text-center mt-3 mb-6 text-[15px]" style={{ color: "var(--v2-t-3)" }}>
          Nothing to reclaim on Robinhood Chain.
        </p>
        <div
          className="rounded-2xl p-5 text-[14px]"
          style={{
            background: "rgba(26,32,37,0.92)",
            border: "1px solid var(--v2-line-1)",
            backdropFilter: "blur(10px)",
            color: "var(--v2-t-3)",
          }}
        >
          Token balances on EVM chains live inside the token contract, so selling a token does not leave an empty
          account behind. This tool existed for chains where each token needs its own account with a rent deposit.
        </div>
      </div>
    </>
  );
}
