import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wrap Gallery",
  description:
    "See color-change wraps, commercial fleet graphics, carbon accents, and custom race liveries wrapped by Wu Wraps in the Renton and Seattle area.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Build Gallery"
        title="Rolling artwork from the Renton shop."
        description="Color changes, fleets, carbon accents, and one-off liveries. Every build below started as a daily driver and left as a head-turner."
        variant="red"
      />
      <GallerySection
        showCta={false}
        heading="Featured builds."
        intro="A rotating look at the work coming out of the shop. Want to see more? Mark posts fresh installs on Instagram daily."
      />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
