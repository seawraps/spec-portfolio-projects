import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { featuredListings, heroStats } from "@/lib/data";

const spotlightListing = featuredListings[0];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      <div className="absolute left-1/2 top-12 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[rgba(204,179,145,0.18)] blur-3xl" />
      <Container>
        <div className="section-shell overflow-hidden rounded-[40px] border border-[var(--color-line)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-muted)]">
                Boutique advisory • Harbor City metro
              </p>
              <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.4rem,7vw,6.7rem)] leading-[0.92] text-[var(--color-ink)]">
                Homes with presence. Representation with judgment.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Crescent Vale Realty helps buyers and sellers navigate premium
                residential moves with calm strategy, polished presentation, and
                direct neighborhood expertise across Harbor City and its most
                sought-after enclaves.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Schedule A Consultation</ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  Explore Services
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="soft-card rounded-[24px] px-5 py-5"
                  >
                    <p className="font-display text-4xl leading-none text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="soft-card overflow-hidden rounded-[34px] p-4">
                <div className="relative aspect-[5/6] overflow-hidden rounded-[28px]">
                  <Image
                    src={spotlightListing.imageSrc}
                    alt={spotlightListing.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#19231e]/72 via-transparent to-[#19231e]/12" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)]">
                    Featured Residence
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/14 bg-black/16 p-5 backdrop-blur-md">
                    <p className="font-display text-5xl leading-none text-white">
                      {spotlightListing.price}
                    </p>
                    <p className="mt-2 text-sm text-white/75">
                      {spotlightListing.address} • {spotlightListing.neighborhood}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[spotlightListing.beds, spotlightListing.baths, spotlightListing.area].map(
                        (item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/82"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-[var(--color-line)] bg-white/74 p-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Private tour timing
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
                      Appointments can typically be arranged within 48 hours for
                      qualified buyers.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-[var(--color-line)] bg-white/74 p-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Market coverage
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
                      Northpoint, Lakemont, Old Harbor, and Cedar Heights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 bottom-8 hidden max-w-[220px] rounded-[24px] border border-[var(--color-line)] bg-white/88 p-4 shadow-[0_22px_48px_-28px_rgba(25,35,30,0.45)] md:block">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Quiet advantage
                </p>
                <p className="mt-2 font-display text-3xl text-[var(--color-ink)]">
                  Boutique service.
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  A selective client roster means faster answers, tighter
                  coordination, and more direct counsel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
