import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/data";
import { siteUrl } from "@/lib/metadata";

import "./globals.css";

const bodyFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nadia Vale | Editorial Advisor and Speaker",
    template: "%s | Nadia Vale",
  },
  description:
    "Nadia Vale helps founders, authors, and expert-led teams turn lived expertise into a public brand people want to book, quote, and introduce.",
  keywords: [
    "personal brand strategist",
    "editorial advisor",
    "keynote speaker",
    "executive visibility strategy",
    "thought leadership advisor",
    "creator partnerships",
    "brand partnerships",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: "Nadia Vale | Editorial Advisor and Speaker",
    description:
      "Editorial strategy, keynote development, and partnership positioning for founders and expert-led brands.",
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadia Vale | Editorial Advisor and Speaker",
    description:
      "Editorial strategy, speaking design, and partnership positioning for people building trust in public.",
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.shortBio,
  url: siteUrl,
  email: siteConfig.email,
  sameAs: siteConfig.socialLinks.map((link) => link.href),
  worksFor: {
    "@type": "Organization",
    name: "Nadia Vale Studio",
  },
  knowsAbout: [
    "content strategy",
    "keynote speaking",
    "thought leadership",
    "brand partnerships",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="font-sans text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="site-shell">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
