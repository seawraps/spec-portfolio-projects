import Image from "next/image";
import type { CSSProperties } from "react";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Circled } from "@/components/ui/circled";
import { FormlineBand } from "@/components/ui/formline-band";
import { TiltPanel } from "@/components/motion/tilt-panel";
import { company, heroStats } from "@/lib/data";

const delay = (seconds: number) => ({ "--ad": `${seconds}s` }) as CSSProperties;

/**
 * The cover. Choreographed on load: eyebrow and copy fade up, the headline
 * rises out of masked slots, the paint-pen circle draws itself, the caption
 * stamps on, the burst pops, and a gloss sheen sweeps the photo like shop
 * light over fresh vinyl. All CSS-driven and reduced-motion safe.
 */
export function HeroSection() {
  return (
    <section className="on-dark relative overflow-hidden">
      {/* Ben-Day dots bleeding in from the cover corner */}
      <div className="halftone-corner" aria-hidden="true" />
      {/* Spray paint drifting in from the studio wall */}
      <div
        className="a-fade pointer-events-none absolute -left-[8%] top-[-6%] hidden h-[110%] w-[62%] lg:block"
        style={{ ...delay(0.7), opacity: undefined }}
        aria-hidden="true"
      >
        <Image
          src="/images/art/spray-hero.png"
          alt=""
          fill
          sizes="62vw"
          className="object-contain object-left-top opacity-40"
        />
      </div>

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
        <div>
          <p className="a-fade eyebrow text-[var(--mist)]" style={delay(0.05)}>
            Renton, Washington · Since {company.foundedYear}
          </p>
          <h1 className="display print-offset mt-6 text-[3.4rem] text-[var(--bone)] sm:text-[4.6rem] lg:text-[5.4rem]">
            <span className="mask-line">
              <span className="rise-line" style={delay(0.15)}>
                Vinyl,
              </span>
            </span>
            <span className="mask-line">
              <span className="rise-line" style={delay(0.28)}>
                <Circled animate>mastered.</Circled>
              </span>
            </span>
          </h1>
          <p className="a-fade mt-7 max-w-md text-[1.05rem] leading-8 text-[var(--mist)]" style={delay(0.5)}>
            Wu Wraps is Mark Wu: the Pacific Northwest&apos;s most trusted hands for color
            change wraps, chrome deletes, stripes, PPF and tint. If it can be wrapped,
            he is the one to call.
          </p>
          <div className="a-fade mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(0.65)}>
            <ButtonLink href="/contact" variant="cedar">
              Book a Consult
            </ButtonLink>
            <ButtonLink href="/gallery" variant="ghost-dark">
              See the Work
            </ButtonLink>
          </div>
          <p
            className="a-fade label mt-6 text-[0.62rem] text-[rgba(246,245,241,0.62)]"
            style={delay(0.8)}
          >
            {company.appointmentNote}
          </p>
        </div>

        <div className="a-fade relative pr-3 pt-3 sm:pr-5 sm:pt-5" style={delay(0.4)}>
          <TiltPanel>
            <figure className="comic-frame">
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
                <span className="gloss" aria-hidden="true" />
              </div>
              <figcaption className="caption-tag stamp-in absolute -bottom-3 left-4">
                Porsche 911 GT2 · 3M 2080 Gloss Green
              </figcaption>
            </figure>
          </TiltPanel>
          {/* Cover-corner starburst */}
          <div
            className="burst pop-in absolute -right-1 -top-2 flex"
            style={{ "--burst-size": "7rem" } as CSSProperties}
          >
            <span className="pow text-[1.3rem] leading-[0.85] text-[var(--ink-deep)]">
              Est.
              <br />
              2008!
            </span>
          </div>
        </div>
      </Container>

      {/* Formline border between the cover and the stat strip, slowly flowing */}
      <FormlineBand className="relative opacity-90" bg="var(--ink)" flow />

      <div className="relative border-t border-[var(--line-darker)]">
        <Container className="grid gap-8 py-10 sm:grid-cols-3">
          {heroStats.map((stat, index) => (
            <div key={stat.label} className="a-fade" style={delay(0.9 + index * 0.12)}>
              <p className="display text-[1.5rem] text-[var(--bone)]">{stat.value}</p>
              <p className="mt-1.5 text-sm leading-6 text-[var(--mist)]">{stat.label}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
