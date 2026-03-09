import type { Metadata } from "next";

import { company } from "@/lib/data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://contractor-demo.vercel.app";

const baseTitle = `${company.name} | Premium Home Remodeling in Nashville, TN`;
const baseDescription =
  "Blue Oak Remodeling Co. delivers premium kitchen, bathroom, and whole-home renovations across Nashville, Brentwood, and Franklin.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: company.name,
  title: {
    default: baseTitle,
    template: `%s | ${company.name}`,
  },
  description: baseDescription,
  keywords: [
    "Nashville remodeling contractor",
    "kitchen remodel Nashville",
    "bathroom renovation Brentwood",
    "home services contractor",
    "premium home remodeling",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: baseTitle,
    description: baseDescription,
    siteName: company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseTitle,
    description: baseDescription,
  },
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
