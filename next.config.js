/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    allowFutureImage: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["www.car.gov.co", "https://picsum.photos"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
