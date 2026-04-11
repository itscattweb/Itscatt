/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oslaetrftplmlabmxfff.supabase.co",
      },
    ],
  },
};

export default nextConfig;