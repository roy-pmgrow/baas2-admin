/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/web/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/web/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
