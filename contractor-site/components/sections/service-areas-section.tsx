import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceAreas } from "@/lib/data";

export function ServiceAreasSection() {
  return (
    <section id="service-area" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-stretch">
        <Reveal>
          <div className="image-frame relative min-h-[420px] rounded-[2.6rem] sm:min-h-[520px]">
            <Image
              src="/images/stair-detail.jpg"
              alt="Warm wooden stair detailing in a refined residential interior."
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.04),rgba(22,36,52,0.54))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                Local coverage
              </p>
              <h2 className="mt-3 max-w-sm font-display text-[2.25rem] leading-[1.02] sm:text-[3rem]">
                Based in Nashville and intentionally focused on nearby homes we can serve well.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
                We stay concentrated across Middle Tennessee neighborhoods where site visits,
                supervision, and finish coordination can remain consistent from week to week.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-card-strong rounded-[2.6rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Service Area"
              title="Fast response across our core remodeling neighborhoods"
              description="Most of our work happens in central Nashville, Belle Meade, Brentwood, Franklin, and nearby residential pockets where homeowners want a renovation partner they can actually reach."
            />

            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-3 sm:text-base">
              {serviceAreas.map((area, index) => (
                <li key={area}>
                  <Reveal delay={index * 50}>
                    <div className="rounded-[1.1rem] bg-[var(--color-surface-strong)] px-4 py-3 text-center">
                      {area}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact">Confirm Your Address</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                Learn How We Work
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
