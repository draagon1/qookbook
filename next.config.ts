// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable experimental features
  experimental: {
    turbo: true, // Enable turbo mode without additional properties
  },
};

export default nextConfig;