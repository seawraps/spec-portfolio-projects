import { CtaGridSection } from "@/components/sections/CtaGridSection";
import { FeaturedListingsSection } from "@/components/sections/FeaturedListingsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NeighborhoodsSection } from "@/components/sections/NeighborhoodsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedListingsSection />
      <NeighborhoodsSection />
      <TeamSection />
      <ServicesGridSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaGridSection />
    </>
  );
}
