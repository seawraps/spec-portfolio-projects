import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceAreas } from "@/lib/data";

const bestFitProjects = [
  "Kitchen remodels and layout resets",
  "Primary and secondary bath renovations",
  "Whole-home interior refreshes with finish coordination",
  "Custom built-ins, mudrooms, and millwork packages",
];

const planningBlocks = [
  "Clear communication and one lead contact",
  "Occupied-home dust protection and cleanup standards",
  "Selection guidance aligned to budget and durability",
  "Scheduling built around realistic material lead times",
];

export function ServiceAreasSection() {
  return (
    <section id="service-area" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch">
        <Reveal>
          <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:min-h-[560px]">
            <Image
              src="/images/stair-detail.jpg"
              alt="Architectural stair detailing and warm millwork in a renovated home."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                Focused geographic footprint
              </p>
              <h2 className="mt-3 max-w-md font-display text-[2.3rem] leading-[0.96] sm:text-[3.1rem]">
                Local coverage lets site leadership stay close to the work.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[color:rgba(247,242,234,0.84)] sm:text-base">
                Blue Oak stays concentrated around Nashville, Brentwood, Franklin, Belle Meade, and
                nearby neighborhoods so walkthroughs, supervision, and closeout details remain
                consistent.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-card-strong h-full rounded-[1rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Service Area"
              title="Focused coverage and the right project fit."
              description="We take on a disciplined mix of projects so the site team can stay present, decisions can be made early, and finish quality does not get diluted by volume."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.7)] px-4 py-3 text-sm text-[var(--color-muted)] sm:text-base"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 border-t border-[color:rgba(31,35,39,0.12)] pt-6 md:grid-cols-2">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Best fit projects
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {bestFitProjects.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Planning standards
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {planningBlocks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact">Confirm Your Address</ButtonLink>
              <ButtonLink href="/project-guide" variant="secondary">
                Review the Planning Guide
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
