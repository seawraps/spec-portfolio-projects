import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { featuredListings, heroStats } from "@/lib/data";

const spotlightListing = featuredListings[0];
const insetListing = featuredListings[3];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8 lg:py-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr] xl:grid-cols-[0.7fr_1.3fr]">
          <div className="dark-panel reveal-up rounded-[38px] p-8 text-white sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-white/60">
              <span>Harbor City boutique brokerage</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Illustrative luxury concept</span>
            </div>
            <h1 className="mt-6 max-w-xl font-display text-[clamp(3.15rem,8vw,7rem)] leading-[0.86] text-white">
              Homes that read like a cover story and transact with quiet precision.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/74 sm:text-lg">
              Crescent Vale Realty pairs editorial listing launches, discreet
              buyer representation, and block-level neighborhood judgment for
              clients making consequential residential moves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Schedule A Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore Services
              </ButtonLink>
            </div>

            <div className="mt-10 rounded-[30px] border border-white/10 bg-white/6 p-6 sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                What the launch covers
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  "Editorial direction before photography, floor plans, and private preview outreach.",
                  "Senior-level pricing, negotiation, and showing strategy from the first brief onward.",
                  "A more measured client experience that favors clarity over volume or theater.",
                ].map((item) => (
                  <p
                    key={item}
                    className="border-t border-white/10 pt-4 text-sm leading-7 text-white/70 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`stat-tile rounded-[24px] border border-white/10 bg-white/6 p-5 reveal-up delay-${index + 1}`}
                >
                  <p className="font-display text-4xl leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/66">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.04fr_0.78fr] lg:grid-rows-[minmax(0,1fr)_minmax(0,0.78fr)]">
            <div className="image-frame image-reveal reveal-up delay-1 relative min-h-[480px] lg:row-span-2 lg:min-h-[760px]">
              <Image
                src={spotlightListing.imageSrc}
                alt={spotlightListing.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/82 via-[#10171d]/12 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-navy)]">
                Signature listing
              </div>
              <div className="absolute right-5 top-5 hidden max-w-[280px] rounded-[24px] border border-white/12 bg-black/28 p-5 text-white backdrop-blur-md xl:block">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Property marketing led
                </p>
                <p className="mt-3 font-display text-3xl leading-[0.94]">
                  The first impression is styled, framed, and paced before the first showing begins.
                </p>
              </div>
              <div className="absolute bottom-5 right-5 max-w-[420px] rounded-[30px] border border-white/12 bg-black/28 p-5 text-white backdrop-blur-md sm:p-6">
                <p className="font-display text-5xl leading-none text-white">
                  {spotlightListing.price}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/72">
                  {spotlightListing.address} • {spotlightListing.neighborhood}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  {spotlightListing.feature}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[spotlightListing.beds, spotlightListing.baths, spotlightListing.area].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/80"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="soft-card reveal-up delay-2 flex h-full flex-col justify-between rounded-[30px] p-6 sm:p-7">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                  Launch note
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.94] text-[var(--color-ink)]">
                  Presentation is handled with restraint, not noise.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  Every listing is treated like a small editorial production
                  with stronger sequencing, more considered imagery, and a
                  buyer story that feels composed from the first touchpoint.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Private preview outreach is paced around buyer readiness rather than volume.",
                  "Photography, floor plans, and launch notes are shaped to feel quiet and unmistakable.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] p-4 text-sm leading-7 text-[var(--color-muted-strong)]"
                  >
                    {item}
                  </div>
                ))}

                <div className="rounded-[24px] border border-[var(--color-line)] bg-white/82 p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                    Editorial standard
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                    Stronger image direction, clearer pacing, and a calmer tour
                    experience all work together before negotiations even begin.
                  </p>
                </div>
              </div>
            </div>

            <div className="image-frame image-reveal reveal-up delay-3 relative min-h-[320px] lg:min-h-full">
              <Image
                src={insetListing.imageSrc}
                alt={insetListing.imageAlt}
                fill
                sizes="(min-width: 1024px) 22vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/76 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/12 bg-black/24 p-4 text-white backdrop-blur-md">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                  Interior edit
                </p>
                <p className="mt-2 font-display text-3xl leading-none">
                  {insetListing.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
