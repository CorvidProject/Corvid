/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  // Gambar lokal lewat /_next/image (sama seperti build asli); gambar token memakai URL absolut langsung.
  images: { dangerouslyAllowSVG: true },
  async rewrites() {
    // Halaman disajikan dari HTML hasil rebrand di public/c (dibangun oleh legacy/tools/rebrand-build.py).
    return {
      fallback: [
        { source: "/", destination: "/c/index.html" },
        { source: "/:path*", destination: "/c/:path*/index.html" },
      ],
    };
  },
};
