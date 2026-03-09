import type { Metadata } from "next";

export const siteConfig = {
  name: "Crescent Vale Realty",
  shortName: "Crescent Vale",
  title: "Crescent Vale Realty | Boutique Real Estate Advisory",
  description:
    "Crescent Vale Realty is a boutique real estate advisory serving the Harbor City metro and surrounding residential enclaves with refined marketing, buyer representation, and thoughtful local counsel.",
  defaultUrl: "https://crescent-vale-realty.vercel.app",
  keywords: [
    "real estate agency",
    "boutique real estate",
    "luxury homes",
    "buyer representation",
    "seller marketing",
    "home valuation",
    "Harbor City real estate",
  ],
  phone: "(206) 555-0148",
  phoneHref: "tel:+12065550148",
  email: "hello@crescentvalerealty.com",
  emailHref: "mailto:hello@crescentvalerealty.com",
  address: "175 Mercer Lane, Suite 300, Harbor City, WA 98109",
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.defaultUrl;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const pageUrl = `${siteUrl}${path}`;
  const pageTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: "Illustrated preview for Crescent Vale Realty",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/og-image.svg"],
    },
  };
}
