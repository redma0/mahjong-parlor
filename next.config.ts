import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // remove basePath or change it to match your setup
  output: 'export',
  images: {
    unoptimized: true
  }
};


export default nextConfig;
