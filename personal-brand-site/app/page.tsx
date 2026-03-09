import type { Metadata } from "next";

import { FeaturedMediaSection } from "@/components/sections/featured-media-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { OfferingsSection } from "@/components/sections/offerings-section";
import { PartnershipCtaSection } from "@/components/sections/partnership-cta-section";
import { PositioningSection } from "@/components/sections/positioning-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Creator Strategist and Keynote Speaker",
  "Authority-led content strategy, speaking design, and partnership positioning for founders and expert-led brands.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <PositioningSection />
      <OfferingsSection />
      <FeaturedMediaSection />
      <TestimonialsSection />
      <NewsletterSection />
      <PartnershipCtaSection />
    </>
  );
}
