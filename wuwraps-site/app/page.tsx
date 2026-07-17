import { HeroSection } from "@/components/sections/hero-section";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { FeaturedServices } from "@/components/sections/featured-services";
import { GallerySection } from "@/components/sections/gallery-section";
import { ArtistSection } from "@/components/sections/artist-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedServices />
      <GallerySection limit={3} />
      <ArtistSection />
      <TestimonialsSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
