import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/projectos/form", destination: "/projectos/compra-certa", permanent: true },
      { source: "/projectos/nexus", destination: "/projectos/meu-negocio", permanent: true },
      { source: "/projectos/cliniq", destination: "/projectos/marque-ja", permanent: true },
      { source: "/projectos/aura", destination: "/projectos/minha-marca", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
