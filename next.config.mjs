/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['maath'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

export default nextConfig;