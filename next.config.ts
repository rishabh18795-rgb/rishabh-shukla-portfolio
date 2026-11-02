import type { NextConfig } from "next";

// Served from https://rishabh18795-rgb.github.io/rishabh-shukla-portfolio/
// Set PAGES_BASE_PATH="" to serve from a domain root (e.g. a custom domain).
const basePath = process.env.PAGES_BASE_PATH ?? "/rishabh-shukla-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
