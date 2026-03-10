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
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="dark-panel rounded-[34px] p-8 text-white sm:p-10 lg:p-12">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze-soft)]">
              Harbor City boutique brokerage
            </p>
            <h1 className="mt-5 max-w-xl font-display text-[clamp(3rem,8vw,6.8rem)] leading-[0.88] text-white">
              Exceptional homes, presented with calm authority.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/74 sm:text-lg">
              Crescent Vale Realty pairs editorial-quality marketing, discreet
              buyer representation, and neighborhood intelligence for clients
              navigating premium residential moves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Schedule A Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore Services
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/10 bg-white/6 p-5"
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

          <div className="relative min-h-[540px] lg:min-h-[640px]">
            <div className="image-frame relative h-full min-h-[540px]">
              <Image
                src={spotlightListing.imageSrc}
                alt={spotlightListing.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/80 via-[#10171d]/14 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-navy)]">
                Signature Listing
              </div>
              <div className="absolute right-5 top-5 hidden max-w-[250px] rounded-[24px] border border-white/12 bg-black/28 p-5 text-white backdrop-blur-md md:block">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Tailored launch plans
                </p>
                <p className="mt-3 font-display text-3xl leading-none text-white">
                  Presentation that feels private, polished, and rare.
                </p>
              </div>
              <div className="absolute bottom-5 right-5 max-w-[380px] rounded-[28px] border border-white/12 bg-black/28 p-5 text-white backdrop-blur-md sm:p-6">
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

            <div className="absolute bottom-5 left-5 hidden w-[40%] max-w-[280px] md:block">
              <div className="image-frame relative aspect-[4/5]">
                <Image
                  src={insetListing.imageSrc}
                  alt={insetListing.imageAlt}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f151b]/72 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 text-white">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                    Concierge tower
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none">
                    {insetListing.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
