/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-south-1.graphassets.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "blog.amitdeka.work" }], // Check for the blog subdomain
        destination: "/blog/:path*", // Route to the /blog folder
      },
    ];
  },
};

export default nextConfig;
