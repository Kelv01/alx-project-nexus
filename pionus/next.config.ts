import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1536],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false,
  },
};

export default nextConfig;
