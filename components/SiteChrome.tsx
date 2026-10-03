"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScrollTop from "./ScrollTop";
import AdSenseScript from "./AdSenseScript";

/**
 * Site chrome wrapper: the marketing header/footer stay on public pages but
 * are hidden inside the admin app, which has its own shell.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
  if (isAdmin) return <>{children}</>;
  return (
    <>
      <AdSenseScript />
      <SiteHeader />
      {children}
      <SiteFooter />
      <ScrollTop />
    </>
  );
}
