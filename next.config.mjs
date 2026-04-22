/**
 * Next.js config
 * ----------------------------------------------------------------
 * This site can deploy as a static export (GitHub Pages, S3, etc.)
 * or as a normal Node server. Toggle via the STATIC_EXPORT env var,
 * which our GitHub Actions workflow sets.
 *
 * For GitHub Pages *project* sites (username.github.io/jakes-lax)
 * also set NEXT_PUBLIC_BASE_PATH=/jakes-lax. The workflow does this
 * automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isStatic = process.env.STATIC_EXPORT === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isStatic
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        images: {
          remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "cdn.shopify.com" },
            { protocol: "https", hostname: "picsum.photos" },
          ],
        },
      }),
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
