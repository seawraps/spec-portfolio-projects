import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { company } from "@/lib/data";
import { siteMetadata, siteUrl } from "@/lib/metadata";
import "./globals.css";

const barlow = localFont({
  variable: "--font-barlow",
  display: "swap",
  src: [
    { path: "./fonts/barlow-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/barlow-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/barlow-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/barlow-700.ttf", weight: "700", style: "normal" },
  ],
});

const bangers = localFont({
  variable: "--font-bangers",
  display: "swap",
  src: [{ path: "./fonts/bangers-400.ttf", weight: "400", style: "normal" }],
});

const archivoBlack = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [{ path: "./fonts/archivo-black-400.ttf", weight: "400", style: "normal" }],
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  // Matches the dark ticker bar at the very top of every page
  themeColor: "#0e0d13",
  colorScheme: "light",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: company.name,
  alternateName: "Wu Wraps Vinyl",
  description:
    "Vinyl vehicle wrap shop specializing in full color-change wraps, commercial fleet graphics, custom printed wraps, and paint protection film in the Renton and Seattle area.",
  url: siteUrl,
  telephone: company.phoneRaw,
  email: company.email,
  founder: { "@type": "Person", name: company.owner },
  foundingDate: company.foundedYear,
  priceRange: "$$",
  image: `${siteUrl}/icon.svg`,
  sameAs: [company.instagramUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Renton",
    addressRegion: "WA",
    postalCode: "98059",
    addressCountry: "US",
  },
  areaServed: [
    "Renton, WA",
    "Seattle, WA",
    "Bellevue, WA",
    "Kent, WA",
    "Tukwila, WA",
    "Newcastle, WA",
    "Issaquah, WA",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${bangers.variable} ${archivoBlack.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main-content"
          className="comic-heavy sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-[3px] focus:border-[var(--color-ink)] focus:bg-[var(--color-yellow)] focus:px-4 focus:py-2 focus:text-[var(--color-ink)]"
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
