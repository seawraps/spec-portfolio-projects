import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { ComicCar } from "@/components/ui/comic-car";
import { Reveal } from "@/components/motion/reveal";
import { company, featuredStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-[4px] border-[var(--color-ink)]">
      <div className="speed-lines absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <Container className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
        <div>
          <Reveal>
            <span className="comic-tag">{company.badge}</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="comic-display mt-5 text-[3.6rem] leading-[0.85] sm:text-[5.2rem] lg:text-[6rem]">
              <span className="ink-stroke block">Your Ride,</span>
              <span className="ink-stroke-red block">Wrapped Right.</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="caption-box mt-7 max-w-xl p-5">
              <p className="text-[1.05rem] leading-8 text-[var(--color-ink)]">
                {company.tagline}
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" variant="red">
                Get a Free Quote →
              </ButtonLink>
              <ButtonLink href="/gallery" variant="blue">
                See the Builds
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          {/* Hero comic panel */}
          <div className="comic-panel comic-panel-hover relative overflow-hidden">
            <div className="aspect-[5/4] w-full">
              <ComicCar accent="red" />
            </div>
            <div className="absolute left-3 top-3 border-[2.5px] border-[var(--color-ink)] bg-[var(--color-yellow)] px-3 py-1">
              <span className="comic-heavy text-[0.62rem] tracking-[0.14em] text-[var(--color-ink)]">
                Wu Wraps · Renton, WA
              </span>
            </div>
          </div>
          {/* Burst badge */}
          <div className="burst absolute -right-3 -top-6 hidden sm:flex" style={{ "--burst-size": "7.5rem" } as React.CSSProperties}>
            <span className="comic-display text-center text-[1.1rem] leading-none text-[var(--color-ink)]">
              {company.yearsInBusiness}
              <br />
              YEARS!
            </span>
          </div>
        </Reveal>
      </Container>

      {/* Stat strip */}
      <div className="border-t-[4px] border-[var(--color-ink)] halftone-yellow">
        <Container className="grid divide-y-[3px] divide-[var(--color-ink)] sm:grid-cols-3 sm:divide-x-[3px] sm:divide-y-0">
          {featuredStats.map((stat) => (
            <div key={stat.label} className="px-2 py-6 text-center">
              <p className="comic-display text-[3rem] leading-none text-[var(--color-ink)] sm:text-[3.6rem]">
                {stat.value}
              </p>
              <p className="comic-heavy mt-2 text-[0.66rem] tracking-[0.12em] text-[var(--color-ink)]">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
