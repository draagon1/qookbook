import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turbopack should be enabled properly
  experimental: {
    turbo: true, // Fixed the key here to avoid the invalid config error
  },
};

export default nextConfig;
