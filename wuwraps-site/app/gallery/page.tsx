import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Work Gallery",
  description:
    "Color change wraps, chrome deletes, accent work and roof wraps by Wu Wraps in Renton, WA. Porsche, McLaren, Bronco Raptor and more, all wrapped by Mark Wu.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The work"
        title="Proof, in vinyl."
        description="A few recent builds out of the Renton studio. For the running feed, Mark posts fresh installs on Instagram."
      />
      <GallerySection
        showCta={false}
        eagerFirstRow
        heading="Selected builds."
        intro="Exotics, daily drivers and everything between. Every panel here was laid by the same two hands."
      />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
