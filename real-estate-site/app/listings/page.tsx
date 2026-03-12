import type { Metadata } from "next";

import { CtaGridSection } from "@/components/sections/CtaGridSection";
import { FeaturedListingsSection } from "@/components/sections/FeaturedListingsSection";
import { NeighborhoodsSection } from "@/components/sections/NeighborhoodsSection";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Listings",
  description:
    "Browse Crescent Vale Realty's featured collection of premium residences and request private details on illustrative listings across Harbor City.",
  path: "/listings",
});

export default function ListingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Listings"
        title="A private collection edited for presence, pacing, and how a home actually lives."
        description="The public collection stays intentionally selective. Each property is framed through architecture, light, livability, and buyer fit before the conversation turns to timing, terms, or private detail."
        imageSrc="/images/hero-estate.jpg"
        imageAlt="A modern estate presented as the lead listing in Crescent Vale's featured collection."
        imageCaption="A tighter public collection leaves more room for each listing to hold attention."
        primaryAction={{ href: "/contact", label: "Request Private Details" }}
        secondaryAction={{ href: "/services", label: "Review Services", variant: "secondary" }}
        highlights={[
          "Illustrative signature listings across Harbor City enclaves",
          "Private-detail requests handled directly by the advisory team",
          "Neighborhood context included alongside each property story",
        ]}
      />

      <FeaturedListingsSection />

      <NeighborhoodsSection
        title="Each listing is read against the neighborhood around it, not just the interior photography."
        description="For premium homes, the location story matters as much as the square footage. We frame every residence against pace, privacy, commute reality, and the habits buyers will actually live with."
      />

      <TestimonialsSection
        title="Private representation works best when the listing story and the client experience both feel composed."
        description="The goal is not volume. It is a tighter collection, better-qualified interest, and conversations that stay specific to the property instead of feeling generic."
      />

      <CtaGridSection />
    </>
  );
}
