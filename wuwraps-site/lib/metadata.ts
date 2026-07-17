import type { Metadata } from "next";

import { company } from "@/lib/data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wuwraps-site.vercel.app";

const baseTitle = `${company.name} | Vinyl Wraps, PPF & Tint in Renton & Seattle, WA`;
const baseDescription =
  "Wu Wraps is the Pacific Northwest's most trusted vinyl wrap studio. Color change wraps, chrome deletes, racing stripes, PPF and window tint by Mark Wu in Renton, WA. Appointment only.";

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
    "color change wrap Seattle",
    "chrome delete Tesla Seattle",
    "racing stripes Seattle",
    "headlight tint Renton",
    "paint protection film Renton",
    "window tint Renton WA",
    "interior trim wrap Seattle",
    "Wu Wraps",
    "Mark Wu",
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
