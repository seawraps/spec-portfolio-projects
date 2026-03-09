import type { Metadata } from "next";

export const siteUrl = "https://www.nadiavale.com";

export function buildMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: `${title} | Nadia Vale`,
      description,
      url: new URL(pathname, siteUrl).toString(),
      siteName: "Nadia Vale",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nadia Vale`,
      description,
    },
  };
}
