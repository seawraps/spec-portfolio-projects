import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { featuredListings, heroStats } from "@/lib/data";
import { cn } from "@/lib/utils";

const spotlightListing = featuredListings[0];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 lg:py-20">
      <div className="absolute left-1/2 top-6 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[rgba(204,179,145,0.18)] blur-3xl sm:top-12 sm:h-[560px] sm:w-[560px]" />
      <Container>
        <div className="section-shell overflow-hidden rounded-[40px] border border-[var(--color-line)] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-end lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] sm:tracking-[0.34em]">
                Boutique advisory • Harbor City metro
              </p>
              <h1 className="mt-5 max-w-4xl text-balance font-display text-[clamp(2.5rem,12vw,4.5rem)] leading-[0.94] text-[var(--color-ink)] sm:mt-6 sm:text-[clamp(3.4rem,7vw,6.7rem)]">
                Homes with presence. Representation with judgment.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-8">
                Crescent Vale Realty helps buyers and sellers navigate premium
                residential moves with calm strategy, polished presentation, and
                direct neighborhood expertise across Harbor City and its most
                sought-after enclaves.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Schedule A Consultation
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                  Explore Services
                </ButtonLink>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={cn(
                      "soft-card rounded-[24px] p-5 sm:p-6",
                      index === heroStats.length - 1 ? "col-span-2 sm:col-span-1" : "",
                    )}
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

            <div className="relative min-w-0">
              <div className="soft-card overflow-hidden rounded-[34px] p-3 sm:p-4">
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
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-forest)] sm:left-5 sm:top-5 sm:text-[0.68rem] sm:tracking-[0.22em]">
                    Featured Residence
                  </div>
                  <div className="absolute inset-x-4 bottom-4 rounded-[24px] border border-white/14 bg-black/16 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-6">
                    <p className="font-display text-4xl leading-none text-white sm:text-5xl">
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
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/82 sm:text-[0.7rem] sm:tracking-[0.18em]"
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="rounded-[24px] border border-[var(--color-line)] bg-white/74 p-5 sm:p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Private tour timing
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
                      Appointments can typically be arranged within 48 hours for
                      qualified buyers.
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-[var(--color-line)] bg-white/74 p-5 sm:p-6">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Market coverage
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
                      Northpoint, Lakemont, Old Harbor, and Cedar Heights.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 bottom-8 hidden max-w-[220px] rounded-[24px] border border-[var(--color-line)] bg-white/88 p-6 shadow-[0_22px_48px_-28px_rgba(25,35,30,0.45)] md:block">
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
