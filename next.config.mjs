/**
 * Static export targeting GitHub Pages at
 *   https://kirans0615.github.io/EARLY-CHILDHOOD-CTR-KENYA/
 *
 * basePath must match the repo name exactly (including case).
 * All external avif URLs already use raw.githubusercontent.com — they
 * don't need the basePath prefix.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  basePath: "/EARLY-CHILDHOOD-CTR-KENYA",
  assetPrefix: "/EARLY-CHILDHOOD-CTR-KENYA/",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/EARLY-CHILDHOOD-CTR-KENYA",
  },
};

export default nextConfig;
