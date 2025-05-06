import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bcdn-2738.sayido.app',
      },
    ],
  },
};

export default nextConfig;
