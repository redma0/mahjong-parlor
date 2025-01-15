import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/mahjong-parlor', // Should match your repository name
  output: 'export', // Required for static site generation
  images: {
    unoptimized: true // Required for static export
  }
};

export default nextConfig;
