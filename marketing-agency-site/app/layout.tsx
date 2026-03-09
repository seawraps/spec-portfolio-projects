import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import "./globals.css";

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://signalandstone.agency"),
  title: "Signal & Stone | Growth Marketing Agency",
  description:
    "Signal & Stone is a bold, conversion-focused marketing agency delivering paid ads, branding, web strategy, CRO, content strategy, and creative campaigns.",
  keywords: [
    "marketing agency",
    "paid ads agency",
    "branding strategy",
    "web strategy",
    "CRO agency",
    "creative campaigns",
  ],
  applicationName: "Signal & Stone",
  openGraph: {
    title: "Signal & Stone | Growth Marketing Agency",
    description:
      "Strategic paid media, branding, and conversion systems built for teams that need measurable growth.",
    url: "https://signalandstone.agency",
    siteName: "Signal & Stone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal & Stone | Growth Marketing Agency",
    description:
      "Conversion-focused agency services spanning paid ads, branding, CRO, and creative campaigns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="site-root">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
