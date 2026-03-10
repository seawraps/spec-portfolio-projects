import type { Metadata } from "next";
import { Bodoni_Moda, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { restaurantName, siteImages } from "@/lib/data";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astera-coastal-bistro.vercel.app"),
  title: {
    default: `${restaurantName} | Coastal Mediterranean Restaurant`,
    template: `%s | ${restaurantName}`,
  },
  description:
    "Astera Coastal Bistro is a cinematic Mediterranean restaurant concept in Santa Monica with fire-led seafood, a cellar-driven bar program, and a moody coastal dining room.",
  openGraph: {
    title: `${restaurantName} | Coastal Mediterranean Restaurant`,
    description:
      "Discover fire-led Mediterranean dining, candlelit hospitality, and an ocean-facing terrace at Astera Coastal Bistro.",
    url: "https://astera-coastal-bistro.vercel.app",
    siteName: restaurantName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteImages.heroTableWine.src,
        alt: siteImages.heroTableWine.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurantName} | Coastal Mediterranean Restaurant`,
    description:
      "Candlelit Mediterranean dining with seafood, cocktails, and polished hospitality by the Santa Monica harbor.",
    images: [siteImages.heroTableWine.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${bodoni.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#f1ddbf] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#1a120e]"
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
