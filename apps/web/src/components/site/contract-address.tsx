"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import { explorerAddress, getChain } from "@corvid/shared/chains";

// Alamat kontrak $CRVD. Diisi lewat NEXT_PUBLIC_CRVD_CA; selama kosong/tidak valid, tidak menampilkan apa pun.
// Kotak bersorot: label CA, alamat (klik membuka explorer Robinhood Chain mainnet), tombol salin.
const EVM_ADDR = /^0x[0-9a-fA-F]{40}$/;
const CA = (process.env.NEXT_PUBLIC_CRVD_CA ?? "").trim();

/** True jika CA $CRVD sudah diisi dan valid (artinya token sudah diluncurkan). */
export const hasContractAddress = EVM_ADDR.test(CA);

export function ContractAddress({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  if (!EVM_ADDR.test(CA)) return null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(CA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard diblokir: abaikan */
    }
  }

  return (
    <div className={`crv-ca ${className}`.trim()}>
      <span className="crv-ca-label">CA</span>
      <a
        className="crv-ca-addr"
        href={explorerAddress(getChain("mainnet"), CA)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {CA}
      </a>
      <button type="button" className="crv-ca-copy" onClick={copy} aria-label={copied ? "Copied" : "Copy contract address"} title={copied ? "Copied" : "Copy"}>
        {copied ? <Check size={16} weight="bold" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
