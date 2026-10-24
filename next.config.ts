import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com', protocol: 'https' }],
  },
};

export default nextConfig;
