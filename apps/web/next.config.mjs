// Proxy API: bila API_PROXY_TARGET diisi (alamat backend Railway, tanpa slash akhir), semua /api/* diteruskan dari server Vercel.
// Browser hanya menjangkau domain situs ini, jadi tetap jalan di jaringan yang memblokir alamat Railway.
// Rewrite `beforeFiles` mengalahkan rute fixture lokal di src/app/api. Pasangannya: NEXT_PUBLIC_API_PROXY=true (lihat src/lib/api.ts).
const target = (process.env.API_PROXY_TARGET ?? "").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  // Paket workspace berisi sumber TypeScript.
  transpilePackages: ["@corvid/shared"],
  // Gambar lokal lewat /_next/image; gambar token memakai URL absolut langsung.
  images: { dangerouslyAllowSVG: true },
  async rewrites() {
    if (!target) return [];
    return { beforeFiles: [{ source: "/api/:path*", destination: `${target}/api/:path*` }], afterFiles: [], fallback: [] };
  },
};
