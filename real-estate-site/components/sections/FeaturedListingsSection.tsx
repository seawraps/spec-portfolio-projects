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
        <div className="section-shell rounded-[38px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_0.5fr] lg:items-end">
            <SectionHeading
              id="featured-listings-heading"
              eyebrow="Featured Listings"
              title="A tighter edit of homes with presence, polish, and a story worth walking into."
              description="Each illustrative listing is framed like a boutique launch: architecture first, interior mood close behind, and every detail chosen to make the home feel memorable before the tour begins."
              className="reveal-up"
            />
            <div className="soft-card reveal-up delay-1 rounded-[28px] p-6 sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Editorial edit
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                We would rather show fewer homes and present each one better:
                stronger photography, clearer positioning, and buyer cues that
                feel quiet but unmistakable.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ButtonLink href="/contact" variant="secondary">
                  Request Availability
                </ButtonLink>
                <span className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Illustrative showcase
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <ListingCard listing={leadListing} featured />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {secondaryListings.map((listing) => (
              <ListingCard key={listing.name} listing={listing} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
