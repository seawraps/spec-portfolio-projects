import { ListingCard } from "@/components/cards/ListingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredListings } from "@/lib/data";

export function FeaturedListingsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24" aria-labelledby="featured-listings-heading">
      <Container>
        <SectionHeading
          id="featured-listings-heading"
          align="center"
          eyebrow="Featured Listings"
          title="Polished properties with real market traction."
          description="Illustrative listings designed to feel current, premium, and commercially believable. Each one is positioned with architecture, lifestyle, and buyer fit in mind."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.name} listing={listing} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/contact" variant="secondary">
            Ask About Current Availability
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
