import { ListingCard } from "@/components/cards/ListingCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredListings } from "@/lib/data";

const [leadListing, firstGalleryListing, secondGalleryListing, thirdGalleryListing] =
  featuredListings;

export function FeaturedListingsSection() {
  return (
    <section
      className="py-12 md:py-16 lg:py-20"
      aria-labelledby="featured-listings-heading"
    >
      <Container>
        <div className="section-shell rounded-[40px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-[0.94fr_0.62fr] xl:items-end">
            <SectionHeading
              id="featured-listings-heading"
              eyebrow="Featured Listings"
              title="A tighter edit of homes with presence, polish, and a story worth walking into."
              description="Each illustrative listing is framed like a boutique launch: architecture first, interior mood close behind, and every detail chosen to make the home feel memorable before the tour begins."
              className="reveal-up"
            />
            <div className="grid gap-4 reveal-up delay-1 sm:grid-cols-2 xl:grid-cols-1">
              <div className="soft-card rounded-[28px] p-6 sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                  Editorial edit
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  We would rather show fewer homes and present each one better:
                  stronger photography, clearer positioning, and buyer cues
                  that feel quiet but unmistakable.
                </p>
              </div>
              <div className="dark-panel rounded-[28px] p-6 text-white sm:p-7">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                  Launch posture
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                  {[
                    ["4", "illustrative listings in the current edit"],
                    ["1:1", "guided showing cadence and private follow-up"],
                    ["Low volume", "presentation chosen over listing quantity"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="stat-tile rounded-[22px] border border-white/10 bg-white/6 p-4"
                    >
                      <p className="font-display text-3xl leading-none text-white">
                        {value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/68">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.16fr_0.84fr]">
            <ListingCard listing={leadListing} featured />
            <div className="grid gap-6">
              <ListingCard listing={firstGalleryListing} layout="compact" />
              <ListingCard listing={secondGalleryListing} layout="compact" />
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="soft-card reveal-up delay-2 rounded-[30px] p-6 sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                Availability note
              </p>
              <h3 className="mt-4 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
                Fewer listings. More considered launches.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Our strongest work happens when photography, pricing, private
                preview timing, and buyer follow-up all feel aligned. That is
                why the edit stays narrow and the presentation stays precise.
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
            <ListingCard listing={thirdGalleryListing} />
          </div>
        </div>
      </Container>
    </section>
  );
}
