import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { restaurantName } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astera-coastal-bistro.vercel.app"),
  title: {
    default: `${restaurantName} | Coastal Mediterranean Restaurant`,
    template: `%s | ${restaurantName}`,
  },
  description:
    "Astera Coastal Bistro is a modern Mediterranean restaurant in Santa Monica featuring wood-fired seafood, seasonal menus, and elevated hospitality.",
  openGraph: {
    title: `${restaurantName} | Coastal Mediterranean Restaurant`,
    description:
      "Wood-fired Mediterranean dining in Santa Monica with seasonal ingredients and an elegant harbor-side atmosphere.",
    url: "https://astera-coastal-bistro.vercel.app",
    siteName: restaurantName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantName} | Coastal Mediterranean Restaurant`,
    description:
      "Experience fire-led Mediterranean cuisine, curated cocktails, and harbor-inspired dining at Astera Coastal Bistro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-stone-900 focus:px-3 focus:py-2 focus:text-sm focus:text-stone-50"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
