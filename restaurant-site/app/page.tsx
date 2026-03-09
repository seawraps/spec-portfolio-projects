import type { Metadata } from "next";
import { FeaturedDishes } from "@/components/sections/featured-dishes";
import { GallerySection } from "@/components/sections/gallery-section";
import { HomeHero } from "@/components/sections/home-hero";
import { HoursLocationSection } from "@/components/sections/hours-location-section";
import { ReservationCta } from "@/components/sections/reservation-cta";
import { StorySection } from "@/components/sections/story-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { restaurantName } from "@/lib/data";

export const metadata: Metadata = {
  title: `${restaurantName} Home`,
  description:
    "Discover Astera Coastal Bistro in Santa Monica: wood-fired Mediterranean cuisine, signature seafood dishes, and elegant harbor-side dining.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedDishes />
      <StorySection />
      <GallerySection />
      <TestimonialsSection />
      <HoursLocationSection />
      <ReservationCta />
    </>
  );
}
