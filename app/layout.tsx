import type { Metadata } from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import SessisonProvider from "@/components/SessisonProvider";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="ja" suppressHydrationWarning>
        <body className={cn("antialiased min-h-screen")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="max-w-7xl mx-auto lg:py-10 space-y-10">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
          <Toaster />
          <SessisonProvider />
        </body>
      </html>
    </>
  )}
