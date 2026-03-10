import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ProductPreviewSection />
      <FeatureGridSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
