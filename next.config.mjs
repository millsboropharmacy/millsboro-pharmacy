/** @type {import('next').NextConfig} */
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  // Static export is only used for preview builds (Netlify). Vercel uses the normal build.
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
  poweredByHeader: false,
  images: isExport
    ? { unoptimized: true }
    : { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }], formats: ["image/avif", "image/webp"] },
  async redirects() {
    if (isExport) return [];
    return [
      // Old URL used in the previous footer
      { source: "/contact", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
