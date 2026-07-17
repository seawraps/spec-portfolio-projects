import Image from "next/image";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Formline } from "@/components/ui/formline";
import { FormlineBand } from "@/components/ui/formline-band";
import { Reveal } from "@/components/motion/reveal";
import { company, heroStats } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="on-dark relative overflow-hidden">
      {/* Ben-Day dots bleeding in from the cover corner */}
      <div className="halftone-corner" aria-hidden="true" />
      {/* Spray paint drifting in from the studio wall */}
      <div
        className="pointer-events-none absolute -left-[8%] top-[-6%] hidden h-[110%] w-[62%] opacity-40 lg:block"
        aria-hidden="true"
      >
        <Image
          src="/images/art/spray-hero.png"
          alt=""
          fill
          sizes="62vw"
          className="object-contain object-left-top"
        />
      </div>

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <p className="eyebrow text-[var(--mist)]">
              Renton, Washington · Since {company.foundedYear}
            </p>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="display print-offset mt-6 text-[3.4rem] text-[var(--bone)] sm:text-[4.6rem] lg:text-[5.4rem]">
              Vinyl,
              <br />
              mastered.
            </h1>
            <Formline className="mt-5 h-4 w-48 sm:w-64" />
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-md text-[1.05rem] leading-8 text-[var(--mist)]">
              Wu Wraps is Mark Wu: the Pacific Northwest&apos;s most trusted hands for color
              change wraps, chrome deletes, stripes, PPF and tint. If it can be wrapped,
              he is the one to call.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="cedar">
                Book a Consult
              </ButtonLink>
              <ButtonLink href="/gallery" variant="ghost-dark">
                See the Work
              </ButtonLink>
            </div>
            <p className="label mt-6 text-[0.62rem] text-[rgba(246,245,241,0.62)]">
              {company.appointmentNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="relative pr-3 pt-3 sm:pr-5 sm:pt-5">
            <figure className="comic-frame comic-frame-hover">
              <div className="comic-frame-media relative aspect-[4/3] w-full">
                <Image
                  src="/images/gallery/porsche-gt2-green.jpg"
                  alt="Porsche 911 GT2 wrapped in 3M 2080 gloss green by Wu Wraps in Renton, WA"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <span className="photo-tone" aria-hidden="true" />
              </div>
              <figcaption className="caption-tag absolute -bottom-3 left-4">
                Porsche 911 GT2 · 3M 2080 Gloss Green
              </figcaption>
            </figure>
            {/* Cover-corner starburst */}
            <div
              className="burst absolute -right-1 -top-2 hidden rotate-6 sm:flex"
              style={{ "--burst-size": "7rem" } as React.CSSProperties}
            >
              <span className="pow text-[1.3rem] leading-[0.85] text-[var(--ink-deep)]">
                Est.
                <br />
                2008!
              </span>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Formline border between the cover and the stat strip */}
      <FormlineBand className="relative opacity-90" bg="var(--ink)" />

      <div className="relative border-t border-[var(--line-darker)]">
        <Container className="grid gap-8 py-10 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="display text-[1.5rem] text-[var(--bone)]">{stat.value}</p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--mist)]">{stat.label}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
