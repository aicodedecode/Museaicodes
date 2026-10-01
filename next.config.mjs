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
      // Legacy code-board routes (2026-10-02): the community board renders at
      // /codes only; catch old links and typed-in URLs with 301s.
      { source: "/referral-code", destination: "/codes", permanent: true },
      { source: "/invite-code", destination: "/codes", permanent: true },
      { source: "/community-codes", destination: "/codes", permanent: true },
      { source: "/share", destination: "/codes", permanent: true },
    ];
  },
};

export default nextConfig;
