import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for Vercel deployment
  compress: true,
  poweredByHeader: false,
  // Enable static optimization
  output: 'standalone',
};

export default nextConfig;
