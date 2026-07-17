import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { company, services } from "@/lib/data";
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

const archivoBlack = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [{ path: "./fonts/archivo-black-400.ttf", weight: "400", style: "normal" }],
});

const bangers = localFont({
  variable: "--font-bangers",
  display: "swap",
  src: [{ path: "./fonts/bangers-400.ttf", weight: "400", style: "normal" }],
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  // Matches the dark studio header
  themeColor: "#141519",
  colorScheme: "light",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: company.name,
  alternateName: "Wu Wraps Vinyl",
  description:
    "Vinyl wrap studio specializing in color change wraps, interior and trim wraps, chrome deletes, racing stripes, light tinting, paint protection film and window tint in the Renton and Seattle area. Appointment only.",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vinyl wrap, PPF and tint services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.shortDescription,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${archivoBlack.variable} ${bangers.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main-content"
          className="label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--cedar)] focus:px-5 focus:py-2.5 focus:text-[var(--bone)]"
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
