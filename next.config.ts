import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/referenzen/baumpflege-projekt-landshut",
        destination: "/referenzen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
