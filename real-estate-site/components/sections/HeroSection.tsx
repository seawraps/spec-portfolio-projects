import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { featuredListings, heroStats } from "@/lib/data";

const coverListing = featuredListings[0];
const interiorListing = featuredListings[3];

export function HeroSection() {
  return (
    <section className="hero-spacing relative overflow-hidden">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] xl:items-start">
          <div className="reveal-up flex flex-col gap-8 lg:gap-10 xl:pr-6">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze)]">
                Harbor City private brokerage
              </p>
              <h1 className="mt-6 max-w-none font-display text-[clamp(3.15rem,7vw,6.7rem)] leading-[0.88] text-[var(--color-ink)]">
                Homes presented with magazine calm and brokerage discipline.
              </h1>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[var(--color-muted)]">
                Crescent Vale frames premium residences through a quieter lens:
                architecture first, light and material second, negotiation and
                launch strategy held with the same restraint.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Request A Consultation
              </ButtonLink>
              <ButtonLink href="/listings" variant="secondary" className="w-full sm:w-auto">
                View The Collection
              </ButtonLink>
            </div>

            <div className="border-y border-[var(--color-line-strong)] py-6">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`stat-tile reveal-up delay-${index + 1} border-b border-[var(--color-line)] pb-5 last:border-b-0 last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0 sm:last:pr-0`}
                  >
                    <p className="font-display text-[2.8rem] leading-none text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l border-[var(--color-line-strong)] pl-6">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                Launch note
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted-strong)]">
                We would rather build a narrower showcase with conviction than a
                louder one with more boxes. The first impression should feel
                composed, not over-produced.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(15rem,0.72fr)] lg:items-start">
            <article className="image-frame image-reveal reveal-up delay-1 relative min-h-[480px] self-start sm:min-h-[560px] lg:row-span-2 lg:min-h-[660px] xl:min-h-[700px]">
              <Image
                src={coverListing.imageSrc}
                alt={coverListing.imageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 58vw, 100vw"
                className={`object-cover ${coverListing.imagePosition ?? ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/82 via-[#111921]/18 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-navy)]">
                Cover property
              </div>
              <div className="overlay-panel absolute inset-x-4 bottom-4 rounded-[24px] p-5 text-white sm:inset-x-6 sm:bottom-6 sm:p-6">
                <div className="grid gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-soft)]">
                      {coverListing.neighborhood}
                    </p>
                    <h2 className="mt-3 font-display text-[clamp(2.7rem,4.5vw,4.25rem)] leading-[0.92] text-white">
                      {coverListing.name}
                    </h2>
                  </div>
                  <p className="font-display text-[clamp(2.35rem,3.5vw,3.2rem)] leading-none text-white">
                    {coverListing.price}
                  </p>
                </div>

                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-white/72">
                  {coverListing.address}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76">
                  {coverListing.feature}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {[coverListing.beds, coverListing.baths, coverListing.area].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <aside className="reveal-up delay-2 self-start border border-[var(--color-line)] bg-[rgba(255,255,255,0.48)] p-6 sm:p-7">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Editorial approach
              </p>
              <h2 className="mt-4 font-display text-[2.45rem] leading-[0.94] text-[var(--color-ink)] sm:text-[2.85rem]">
                Presentation stays quiet so the property can carry the atmosphere.
              </h2>
              <div className="mt-6 grid gap-4 border-t border-[var(--color-line)] pt-5">
                {[
                  "Large-format imagery is chosen to show massing, light, and material without heavy overlays.",
                  "Inquiry, touring, and follow-up are handled directly rather than through a generic lead funnel.",
                  "Launch timing is tuned to readiness, not just calendar volume.",
                ].map((item) => (
                  <p
                    key={item}
                    className="border-b border-[var(--color-line)] pb-4 text-sm leading-7 text-[var(--color-muted-strong)] last:border-b-0 last:pb-0"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </aside>

            <article className="image-frame image-reveal reveal-up delay-3 relative self-start min-h-[300px] sm:min-h-[360px]">
              <Image
                src={interiorListing.imageSrc}
                alt={interiorListing.imageAlt}
                fill
                sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 26vw, 100vw"
                className={`object-cover ${interiorListing.imagePosition ?? ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/76 via-transparent to-transparent" />
              <div className="overlay-panel absolute inset-x-4 bottom-4 rounded-[22px] p-4 text-white sm:inset-x-5 sm:bottom-5 sm:p-5">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/68">
                  Interior perspective
                </p>
                <p className="mt-3 font-display text-[2.1rem] leading-[0.92] text-white">
                  {interiorListing.name}
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
