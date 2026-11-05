/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  // Paket workspace berisi sumber TypeScript.
  transpilePackages: ["@corvid/shared"],
  // Gambar lokal lewat /_next/image; gambar token memakai URL absolut langsung.
  images: { dangerouslyAllowSVG: true },
};
