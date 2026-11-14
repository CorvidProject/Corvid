import { explorerAddress, getChain } from "@corvid/shared/chains";

// Alamat kontrak $CRVD. Diisi lewat NEXT_PUBLIC_CRVD_CA setelah diberikan head dev; selama kosong/tidak valid,
// tidak menampilkan apa pun. Teks putih, biru saat hover, klik membuka halaman alamat di explorer Robinhood Chain mainnet.
const EVM_ADDR = /^0x[0-9a-fA-F]{40}$/;
const CA = (process.env.NEXT_PUBLIC_CRVD_CA ?? "").trim();

/** True jika CA $CRVD sudah diisi dan valid (artinya token sudah diluncurkan). */
export const hasContractAddress = EVM_ADDR.test(CA);

export function ContractAddress({ className = "" }: { className?: string }) {
  if (!EVM_ADDR.test(CA)) return null;
  return (
    <a
      className={`crv-ca ${className}`.trim()}
      href={explorerAddress(getChain("mainnet"), CA)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {CA}
    </a>
  );
}
