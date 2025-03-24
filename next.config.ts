// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable experimental features
  experimental: {
    turbo: true, // This enables the Turbopack feature
  },
};

export default nextConfig;