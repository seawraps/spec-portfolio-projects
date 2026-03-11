import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceOfferings } from "@/lib/data";

type ServicesGridSectionProps = {
  title?: string;
  description?: string;
};

export function ServicesGridSection({
  title = "Advisory shaped around private launches, measured acquisitions, and clear timing.",
  description = "The service mix is structured like a boutique brokerage, not a features grid. Every engagement is built around a specific move, a specific property, or a specific decision horizon.",
}: ServicesGridSectionProps) {
  return (
    <section className="section-spacing" aria-labelledby="services-heading">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <SectionHeading
              id="services-heading"
              eyebrow="Advisory Services"
              title={title}
              description={description}
              className="reveal-up"
            />

            <div className="image-frame image-reveal reveal-up delay-1 relative mt-8 min-h-[340px] sm:min-h-[420px]">
              <Image
                src="/images/story-advisory.jpg"
                alt="A refined interior scene that supports Crescent Vale's advisory and presentation-focused service approach."
                fill
                sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/76 via-transparent to-transparent" />
              <div className="overlay-panel absolute inset-x-4 bottom-4 rounded-[22px] p-4 text-white sm:inset-x-5 sm:bottom-5 sm:p-5">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/68">
                  Advisory lens
                </p>
                <p className="mt-3 font-display text-[2.1rem] leading-[0.92] text-white">
                  Fewer clients at a time means more deliberate preparation.
                </p>
              </div>
            </div>

            <p className="mt-5 border-l border-[var(--color-line-strong)] pl-6 text-sm leading-7 text-[var(--color-muted-strong)]">
              Scope, cadence, and communication are all designed to feel
              proportionate to the stakes. The process stays calm because the
              work is sequenced well.
            </p>
          </div>

          <div className="border-t border-[var(--color-line-strong)]">
            {serviceOfferings.map((service, index) => (
              <article
                key={service.title}
                className="reveal-up delay-2 grid gap-5 border-b border-[var(--color-line)] py-6 lg:grid-cols-[0.2fr_0.8fr] lg:gap-8"
              >
                <div className="flex items-center justify-between gap-4 lg:block">
                  <p className="font-display text-[2.3rem] leading-none text-[var(--color-ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)] lg:mt-3">
                    {service.emphasis}
                  </p>
                </div>

                <div className="grid gap-5 xl:grid-cols-[0.66fr_0.34fr] xl:items-start">
                  <div>
                    <h3 className="font-display text-[2.6rem] leading-[0.92] text-[var(--color-ink)] sm:text-[3rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {service.summary}
                    </p>
                  </div>

                  <ul className="grid gap-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="border-l border-[var(--color-line-strong)] pl-4 text-sm leading-7 text-[var(--color-muted-strong)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
