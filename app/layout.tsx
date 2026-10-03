import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SITE } from "@/lib/site";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdSenseScript from "@/components/AdSenseScript";
import JsonLd from "@/components/JsonLd";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

/*
 * Type pairing (web-typography skill):
 *  Fraunces — "type for a moment": display serif with optical sizing,
 *             confident editorial voice for headlines.
 *  Inter     — "type to live with": neutral workhorse for body/UI.
 *  JetBrains Mono — codes, labels, kickers.
 * next/font: preloaded, display=swap, zero render-blocking requests.
 */
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1e6" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0a" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "Muse AI Guide: Invite Codes, Tutorials & Comparisons | museaicodes",
    template: "%s | museaicodes",
  },
  description: SITE.description,
  // Brand icons: app/favicon.ico, app/icon.png and app/apple-icon.png are
  // served automatically by Next.js file conventions; manifest linked here.
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Muse AI Guide: Invite Codes, Tutorials & Comparisons",
    description: SITE.description,
    url: SITE.baseUrl,
    images: [{ url: "/images/brand/og-default.jpg", width: 1200, height: 630, alt: "museaicodes — Muse AI guides, codes & tutorials" }],
  },
  twitter: {
    card: "summary",
    title: "Muse AI Guide: Invite Codes, Tutorials & Comparisons",
    description: SITE.description,
  },
  alternates: { canonical: SITE.baseUrl },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.baseUrl}#organization`,
      name: "museaicodes",
      url: SITE.baseUrl,
      description:
        "museaicodes is an independent, unofficial guide hub for Meta's Muse AI — practical guides, invite and referral codes, tools, and honest comparisons.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.baseUrl}/images/brand/jolly-logo.png`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.baseUrl}#website`,
      name: "museaicodes",
      url: SITE.baseUrl,
      publisher: { "@id": `${SITE.baseUrl}#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body">
        <AdSenseScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ToastProvider>
            <JsonLd data={ORG_JSON_LD} />
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <SiteHeader />
            {children}
            <SiteFooter />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
