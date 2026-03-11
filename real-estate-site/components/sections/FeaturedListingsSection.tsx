import { ListingCard } from "@/components/cards/ListingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredListings } from "@/lib/data";

const [leadListing, firstGalleryListing, secondGalleryListing, thirdGalleryListing] =
  featuredListings;

const collectionNotes = [
  "Launches are paced like private presentations, with inquiry routed through advisors rather than automated lead flows.",
  "Only a small edit is shown publicly, which keeps the composition tighter and the market story more believable.",
  "Every listing balances architecture, interior mood, and practical buyer fit before negotiation even begins.",
];

export function FeaturedListingsSection() {
  return (
    <section
      className="section-spacing"
      id="featured-listings"
      aria-labelledby="featured-listings-heading"
    >
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.74fr_1.26fr] xl:items-start">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              id="featured-listings-heading"
              eyebrow="Featured Homes"
              title="A quieter edit of homes chosen for presence, light, and how they read the moment you arrive."
              description="Rather than stretching one awkward slab of content across the page, the collection is composed like a private listing book: one lead residence, then a set of supporting homes with their own distinct pacing."
              className="reveal-up"
            />

            <div className="mt-8 border-t border-[var(--color-line-strong)] pt-6">
              <div className="grid gap-5">
                {collectionNotes.map((note, index) => (
                  <p
                    key={note}
                    className={`reveal-up delay-${index + 1} border-b border-[var(--color-line)] pb-5 text-sm leading-7 text-[var(--color-muted-strong)] last:border-b-0 last:pb-0`}
                  >
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-10">
            <ListingCard listing={leadListing} featured />

            <div className="grid gap-8 lg:grid-cols-[0.98fr_0.82fr]">
              <div className="grid gap-8">
                <ListingCard listing={firstGalleryListing} layout="compact" />
                <ListingCard listing={secondGalleryListing} layout="compact" />
              </div>

              <div className="grid gap-8 content-start">
                <ListingCard listing={thirdGalleryListing} layout="portrait" />

                <article className="reveal-up delay-3 border-t border-[var(--color-line-strong)] pt-6">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                    Availability
                  </p>
                  <h3 className="mt-4 font-display text-[2.8rem] leading-[0.92] text-[var(--color-ink)] sm:text-[3.2rem]">
                    A narrower collection reads with more conviction.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    The site shows a refined public edit, while private detail
                    requests, off-market inquiries, and launch timing
                    conversations happen one-to-one.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <ButtonLink href="/contact" variant="secondary">
                      Request Availability
                    </ButtonLink>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Illustrative collection
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
