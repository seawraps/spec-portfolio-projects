import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { heroStats, siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="relative">
          <span className="eyebrow">Creator Brand Studio</span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.26em] text-rose">
            {siteConfig.role}
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-[3rem] leading-[0.92] text-ink sm:text-[4.25rem] lg:text-[5.5rem]">
            Make your expertise feel impossible to ignore.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-ink/72 sm:text-lg sm:leading-8">
            I help founders, executives, and expert-led brands turn sharp ideas into authority-led content systems
            that book rooms, attract partnerships, and keep demand warm between launches.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="w-full sm:w-auto" arrow>
              Book a Strategy Call
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto" arrow>
              Explore Offerings
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {heroStats.map((stat) => (
              <article key={stat.label} className="surface-card p-5 sm:p-6">
                <p className="text-3xl leading-none text-ink">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-ink/68">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="sm:hidden">
            <div className="dark-panel grain relative overflow-hidden p-4">
              <div className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-white/70">
                <span>New keynote</span>
                <span>2026</span>
              </div>

              <div className="relative mt-4 aspect-[4/3.15] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/nadia-portrait.svg"
                  alt="Abstract editorial portrait illustration for Nadia Vale."
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                  Signature angle
                </p>
                <p className="mt-3 text-base leading-6 text-white">
                  Turn founder expertise into a media brand that sells trust before the sales call.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden sm:block">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-clay/30 blur-3xl sm:-left-8 sm:h-32 sm:w-32" />
            <div className="absolute right-0 bottom-12 h-28 w-28 rounded-full bg-sage/30 blur-3xl sm:-right-2 sm:bottom-16 sm:h-40 sm:w-40" />

            <div className="dark-panel grain relative overflow-hidden p-5 sm:p-8">
              <div className="flex flex-col gap-2 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/70 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between sm:text-xs sm:tracking-[0.24em]">
                <span>New keynote</span>
                <span>2026 speaking season</span>
              </div>

              <div className="relative mt-4 aspect-[4/4.2] overflow-hidden rounded-[1.65rem] sm:aspect-[4/4.9]">
                <Image
                  src="/images/nadia-portrait.svg"
                  alt="Abstract editorial portrait illustration for Nadia Vale."
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="grid gap-4 p-3 sm:grid-cols-[1.1fr_0.9fr] sm:gap-6 sm:p-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                    Positioning statement
                  </p>
                  <p className="mt-3 text-lg leading-7 text-white">
                    Turn founder expertise into a media brand that sells trust before the sales call.
                  </p>
                </div>
                <div className="hidden rounded-[1.4rem] border border-white/10 bg-white/6 p-5 sm:block sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                    Current focus
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    Advisory, keynote design, sponsorship positioning, and executive visibility systems.
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
