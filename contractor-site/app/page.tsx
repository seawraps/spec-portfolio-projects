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
    "Warm, premium remodeling contractor in Nashville for kitchens, bathrooms, millwork, and whole-home interior renovations.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FeaturedServices />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CtaSection
        title="Plan your renovation with a team that understands materials, timelines, and lived-in homes"
        description="Tell us what you want to improve, how you use the space today, and what you want the house to feel like next. We will guide the right first step."
      />
    </>
  );
}
