import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      {
        source: "/referenzen/gartenbau-projekt-landshut",
        destination: "/referenzen",
        permanent: true,
      },
      {
        source: "/referenzen/baumpflege-projekt-landshut",
        destination: "/referenzen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
