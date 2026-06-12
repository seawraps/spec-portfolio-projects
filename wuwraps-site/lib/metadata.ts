import type { Metadata } from "next";

import { company } from "@/lib/data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wuwraps-site.vercel.app";

const baseTitle = `${company.name} | Vinyl Vehicle Wraps in Renton & Seattle, WA`;
const baseDescription =
  "Wu Wraps is Seattle's most trusted vinyl wrap shop. 18 years of color-change wraps, commercial fleet graphics, custom prints, and paint protection film in Renton, WA.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: company.name,
  title: {
    default: baseTitle,
    template: `%s | ${company.name}`,
  },
  description: baseDescription,
  keywords: [
    "vinyl wrap Renton",
    "car wrap Seattle",
    "vehicle wrap Seattle",
    "color change wrap Seattle",
    "commercial fleet wraps Renton WA",
    "fleet graphics Seattle",
    "paint protection film Seattle",
    "chrome delete Renton",
    "custom car wrap Bellevue",
    "Wu Wraps",
  ],
  authors: [{ name: company.owner }],
  creator: company.owner,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: baseTitle,
    description: baseDescription,
    siteName: company.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: baseDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "automotive",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const pageUrl = new URL(path, siteUrl).toString();
  const fullTitle = `${title} | ${company.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: fullTitle,
      description,
      siteName: company.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
