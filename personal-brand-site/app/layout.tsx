import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/data";
import { siteUrl } from "@/lib/metadata";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nadia Vale | Creator Strategist and Keynote Speaker",
    template: "%s | Nadia Vale",
  },
  description:
    "Nadia Vale helps founders, executives, and expert-led brands turn sharp ideas into authority-led content systems that earn trust and compound demand.",
  keywords: [
    "personal brand strategist",
    "content strategist",
    "keynote speaker",
    "thought leadership advisor",
    "creator educator",
    "brand partnerships",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: "Nadia Vale | Creator Strategist and Keynote Speaker",
    description:
      "Authority-building strategy, speaking, and partnership positioning for founders and expert-led brands.",
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadia Vale | Creator Strategist and Keynote Speaker",
    description:
      "Content strategy, speaking design, and partnership positioning for people building trust at scale.",
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
