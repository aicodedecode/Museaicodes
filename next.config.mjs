/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Removed connectors (Sept 2026 rebuild — never Meta-confirmed as connectors;
      // WhatsApp is a surface, not a connector). Keep old URLs landing somewhere useful.
      { source: "/connectors/outlook", destination: "/connectors", permanent: true },
      { source: "/connectors/messenger", destination: "/connectors", permanent: true },
      { source: "/connectors/whatsapp", destination: "/connectors", permanent: true },
    ];
  },
};

export default nextConfig;
