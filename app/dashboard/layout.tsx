import { ReactNode } from "react";
import type { Metadata } from "next";
import NavLinks from "./components/NavLinks";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}`),

  title: {
    template: "%s | Blog SaaS App",
    default: "Blog SaaS App",
  },
  authors: {
    name: "Kyohei Dan",
  },

  description:
    "このアプリは Next.js, Supabase, Stripe を使用したブログ SaaS アプリです。",
  openGraph: {
    title: "Blog SaaS App",
    description:
      "このアプリは Next.js, Supabase, Stripe を使用したブログ SaaS アプリです。",
    url: `${process.env.SITE_URL}`,
    siteName: "Blog SaaS App",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Blog SaaS App", "Blog", "ブログ"],
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavLinks />
      {children}
    </>
  );
}