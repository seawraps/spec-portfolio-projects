import { HeroSection } from "@/components/sections/hero-section";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { FeaturedServices } from "@/components/sections/featured-services";
import { ProcessSection } from "@/components/sections/process-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedServices />
      <ProcessSection />
      <GallerySection limit={3} />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CtaSection />
    </>
  );
}
