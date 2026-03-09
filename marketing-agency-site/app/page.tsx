import type { Metadata } from "next";

import { CaseStudies } from "@/components/sections/case-studies";
import { CtaSection } from "@/components/sections/cta-section";
import { EngagementModels } from "@/components/sections/engagement-models";
import { Hero } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process-section";
import { ResultsMetrics } from "@/components/sections/results-metrics";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Signal & Stone | Growth Marketing Agency",
  description:
    "Signal & Stone is a conversion-focused marketing agency delivering paid media, branding, web strategy, CRO, and creative campaigns.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CaseStudies />
      <ResultsMetrics />
      <ProcessSection />
      <Testimonials />
      <EngagementModels />
      <CtaSection
        title="Need sharper strategy and measurable growth in the next quarter?"
        description="Book a working session and we will map your highest-impact opportunities across paid channels, messaging, and conversion flow."
        primaryLabel="Book a Strategy Call"
        primaryHref="/contact"
        secondaryLabel="Learn About Our Team"
        secondaryHref="/about"
      />
    </>
  );
}
