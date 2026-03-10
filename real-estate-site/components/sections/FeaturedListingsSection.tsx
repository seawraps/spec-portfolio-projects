import { ListingCard } from "@/components/cards/ListingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredListings } from "@/lib/data";

const [leadListing, ...secondaryListings] = featuredListings;

export function FeaturedListingsSection() {
  return (
    <section className="py-14 md:py-18 lg:py-24" aria-labelledby="featured-listings-heading">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="featured-listings-heading"
            eyebrow="Featured Listings"
            title="A current edit of homes with presence, polish, and buyer momentum."
            description="Each illustrative listing is styled like a boutique launch: architecture first, neighborhood context close behind, and every detail chosen to strengthen the story."
          />
          <ButtonLink href="/contact" variant="secondary">
            Request Availability
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <ListingCard listing={leadListing} featured />
          <div className="grid gap-6">
            {secondaryListings.map((listing) => (
              <ListingCard key={listing.name} listing={listing} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
