import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";

const materialPalette = [
  {
    name: "Rift Oak",
    note: "Cabinetry and built-ins that read warm without feeling heavy.",
    color: "linear-gradient(180deg, #c7ae89 0%, #9f7b4f 100%)",
  },
  {
    name: "Honed Stone",
    note: "Quiet counters and shower surfaces with softer light bounce.",
    color: "linear-gradient(180deg, #d9d3c7 0%, #b7afa1 100%)",
  },
  {
    name: "Plaster White",
    note: "Walls and trim tones that keep renovated rooms calm.",
    color: "linear-gradient(180deg, #f0e7dc 0%, #d8cfc1 100%)",
  },
  {
    name: "Muted Brass",
    note: "Hardware and fixtures used as accents, not decoration.",
    color: "linear-gradient(180deg, #b89762 0%, #85643e 100%)",
  },
];

export function FeaturedServices() {
  return (
    <section id="services-preview" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Project Types"
              title="We work where proportion, storage, and finish detail have to carry the result."
              description="Blue Oak stays disciplined about scope so the work remains residential, materially focused, and supervised closely from planning through handoff."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {materialPalette.map((material) => (
                <div key={material.name} className="grid grid-cols-[4.5rem_1fr] gap-4 border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-4">
                  <div
                    className="material-swatch aspect-[4/5]"
                    style={{ background: material.color }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {material.name}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {material.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="image-frame relative mt-8 min-h-[300px] overflow-hidden rounded-[1rem]">
              <Image
                src="/images/cabinet-detail.jpg"
                alt="Refined millwork detail in warm oak."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 32vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.36))]" />
            </div>

            <ButtonLink href="/services" variant="secondary" className="mt-6">
              View Full Service Details
            </ButtonLink>
          </div>
        </Reveal>

        <div className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 60}>
              <Link
                href={`/services#${service.id}`}
                className="group grid gap-5 py-6 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[0.75rem] border border-[color:rgba(31,35,39,0.12)] text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  0{index + 1}
                </span>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="max-w-[16ch] font-display text-[2.15rem] leading-[0.96] text-[var(--color-brand)] sm:text-[2.7rem]">
                      {service.name}
                    </h3>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {service.timeline}
                    </p>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-[0.7rem] border border-[color:rgba(31,35,39,0.12)] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                  See scope
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
