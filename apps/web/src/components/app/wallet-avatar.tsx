// Avatar wallet: wallet on-chain tidak punya foto profil, jadi gambar dibuat dari alamatnya (identicon 5x5 simetris).
// Deterministik: alamat yang sama selalu menghasilkan gambar yang sama, tanpa permintaan jaringan.
// Warna dibatasi pada keluarga abu-biru palet Corvid (hanya terang dan jenuhnya yang bervariasi); pola yang membedakan.

/** FNV-1a 32-bit. */
function fnv(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** Generator acak kecil (mulberry32) berbenih dari alamat. */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Identicon = { cells: boolean[][]; fg: string; bg: string };

/** Pola dan warna dari alamat (huruf besar/kecil tidak berpengaruh). */
export function identicon(address: string): Identicon {
  const r = rng(fnv(address.toLowerCase()));
  const hue = 195 + Math.floor(r() * 25); // 195–219: abu-biru
  const fg = `hsl(${hue} ${18 + Math.floor(r() * 20)}% ${58 + Math.floor(r() * 16)}%)`;
  const bg = `hsl(${hue} ${10 + Math.floor(r() * 8)}% ${16 + Math.floor(r() * 8)}%)`;
  const cells: boolean[][] = [];
  for (let y = 0; y < 5; y++) {
    const row: boolean[] = [];
    for (let x = 0; x < 3; x++) row.push(r() > 0.5);
    cells.push([row[0], row[1], row[2], row[1], row[0]]); // cermin kiri-kanan
  }
  if (!cells.some((row) => row.some(Boolean))) cells[2][2] = true; // hindari gambar kosong
  return { cells, fg, bg };
}

export function WalletAvatar({ address, size = 32 }: { address: string; size?: number }) {
  const { cells, fg, bg } = identicon(address);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 5 5"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="shrink-0 rounded-full"
      style={{ width: size, height: size, background: bg, padding: size * 0.1, boxSizing: "border-box" }}
    >
      {cells.flatMap((row, y) => row.map((on, x) => (on ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fg} /> : null)))}
    </svg>
  );
}
