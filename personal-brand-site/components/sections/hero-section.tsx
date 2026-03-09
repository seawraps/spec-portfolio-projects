import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { heroStats, siteConfig } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="section-shell overflow-hidden pt-12 sm:pt-16">
      <Container className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="relative">
          <span className="eyebrow">Creator Brand Studio</span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.26em] text-rose">
            {siteConfig.role}
          </p>
          <h1 className="mt-5 max-w-3xl text-[3.5rem] leading-[0.92] text-ink sm:text-[4.5rem] lg:text-[5.5rem]">
            Make your expertise feel impossible to ignore.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            I help founders, executives, and expert-led brands turn sharp ideas into authority-led content systems
            that book rooms, attract partnerships, and keep demand warm between launches.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" arrow>
              Book a Strategy Call
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" arrow>
              Explore Offerings
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <article key={stat.label} className="surface-card p-5">
                <p className="text-3xl leading-none text-ink">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-ink/68">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-clay/30 blur-3xl" />
          <div className="absolute -right-2 bottom-16 h-40 w-40 rounded-full bg-sage/30 blur-3xl" />

          <div className="dark-panel grain relative overflow-hidden p-4 sm:p-5">
            <div className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-3 text-xs uppercase tracking-[0.24em] text-white/70">
              <span>New keynote</span>
              <span>2026 speaking season</span>
            </div>

            <div className="mt-4 overflow-hidden rounded-[1.65rem]">
              <Image
                src="/images/nadia-portrait.svg"
                alt="Abstract editorial portrait illustration for Nadia Vale."
                width={1200}
                height={1400}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="grid gap-4 p-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
                  Positioning statement
                </p>
                <p className="mt-3 text-lg leading-7 text-white">
                  Turn founder expertise into a media brand that sells trust before the sales call.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5">
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
      </Container>
    </section>
  );
}
