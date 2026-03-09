import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { FeaturedServices } from "@/components/sections/featured-services";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description:
    "Premium remodeling contractor in Nashville for kitchen, bathroom, and whole-home renovations with a quality-first process.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedServices />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CtaSection
        title="Plan your renovation with a team that respects your home and timeline"
        description="Tell us what you want to improve, and we will provide a clear first-step consultation with practical recommendations and transparent scope guidance."
      />
    </>
  );
}
