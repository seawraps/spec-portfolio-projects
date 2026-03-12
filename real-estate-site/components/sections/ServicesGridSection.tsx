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
        <div className="section-shell rounded-[40px] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 border-b border-[var(--color-line-strong)] pb-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-start">
            <div>
              <SectionHeading
                id="services-heading"
                eyebrow="Advisory Services"
                title={title}
                description={description}
                className="reveal-up max-w-4xl"
              />

              <p className="mt-6 max-w-2xl border-l border-[var(--color-line-strong)] pl-6 text-sm leading-7 text-[var(--color-muted-strong)]">
                Scope, cadence, and communication are designed to feel
                proportionate to the stakes. The work stays calm because every
                engagement starts with its own frame instead of borrowing a
                prior section&apos;s column structure.
              </p>
            </div>

            <div className="image-frame image-reveal reveal-up delay-1 relative self-start min-h-[340px] sm:min-h-[420px]">
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
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceOfferings.map((service, index) => (
              <article
                key={service.title}
                className="soft-card reveal-up delay-2 flex h-full flex-col rounded-[30px] p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-6 border-b border-[var(--color-line)] pb-5">
                  <p className="max-w-[18rem] text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                    {service.emphasis}
                  </p>
                  <p className="font-display text-[2.6rem] leading-none text-[var(--color-ink)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                <h3 className="mt-6 font-display text-[2.5rem] leading-[0.92] text-[var(--color-ink)] sm:text-[2.9rem]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {service.summary}
                </p>

                <ul className="mt-6 grid flex-1 gap-3 border-t border-[var(--color-line)] pt-5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="border-l border-[var(--color-line-strong)] pl-4 text-sm leading-7 text-[var(--color-muted-strong)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
