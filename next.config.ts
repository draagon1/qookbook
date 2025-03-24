// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable experimental features
  experimental: {
    turbo: {
      // You can add specific properties required by Turbo here
      // The definition of what these properties can be may vary, please check documentation.
    },
  },
};

export default nextConfig;