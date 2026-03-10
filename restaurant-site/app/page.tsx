import type { Metadata } from "next";
import { FeaturedDishes } from "@/components/sections/featured-dishes";
import { GallerySection } from "@/components/sections/gallery-section";
import { HomeHero } from "@/components/sections/home-hero";
import { HoursLocationSection } from "@/components/sections/hours-location-section";
import { MenuHighlightsSection } from "@/components/sections/menu-highlights-section";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { StorySection } from "@/components/sections/story-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { restaurantName } from "@/lib/data";

export const metadata: Metadata = {
  title: `${restaurantName} Home`,
  description:
    "Experience Astera Coastal Bistro through candlelit seafood dinners, an ocean-facing terrace, and a Mediterranean menu built for long evenings.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedDishes />
      <StorySection />
      <MenuHighlightsSection />
      <GallerySection />
      <TestimonialsSection />
      <HoursLocationSection />
      <ReservationCta />
    </>
  );
}
