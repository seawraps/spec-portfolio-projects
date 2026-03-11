import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, services } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore kitchen, bathroom, whole-home, and custom millwork renovation services from Blue Oak Remodeling Co. in Nashville.",
  path: "/services",
});

const planningNotes = [
  {
    title: "Clear scope before demo",
    description:
      "We do the planning and selection work up front so materials, allowances, and sequencing are not being guessed at mid-project.",
  },
  {
    title: "High-touch homeowner communication",
    description:
      "Occupied homes need rhythm and visibility. We keep updates predictable so you know what is happening in the house each week.",
  },
  {
    title: "Material guidance with restraint",
    description:
      "We help clients avoid expensive mistakes by focusing on durability, warmth, and finishes that feel timeless in local homes.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section id="services-overview" className="py-10 md:py-12 lg:py-14">
        <Container className="architectural-grid grid gap-8 py-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Focused renovation work for kitchens, baths, interiors, and the details that tie them together."
              description="We keep the service mix disciplined so the work stays residential, premium, and craftsmanship-heavy. That focus allows us to deliver better guidance and better results."
              as="h1"
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Most of our projects happen in lived-in homes across Nashville, Brentwood, Franklin,
              and Belle Meade. We help clients scope the right level of transformation, whether
              that means a single high-impact room or a phased interior renovation.
            </p>

            <div className="mt-8 border-l border-[color:rgba(31,35,39,0.12)] pl-5">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Best fit for Blue Oak
              </p>
              <p className="mt-3 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                Homeowners who value design guidance, durable materials, realistic scheduling, and
                crews that understand how to work respectfully inside occupied homes.
              </p>
              <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                Serving {company.primaryServiceArea}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:min-h-[560px]">
              <Image
                src="/images/hero-kitchen.jpg"
                alt="A premium kitchen remodel with warm cabinetry and a large island."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.3))]" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="service-list" className="py-16 md:py-20 lg:py-24">
        <Container className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 50} className="py-10 lg:py-12">
              <article className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
                <div className={cn(index % 2 === 1 && "lg:order-2")}>
                  <div id={service.id} className="image-frame relative min-h-[320px] overflow-hidden rounded-[1rem] sm:min-h-[460px]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 44vw"
                    />
                  </div>
                </div>

                <div className={cn(index % 2 === 1 && "lg:order-1")}>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {service.timeline}
                  </p>
                  <h2 className="mt-4 max-w-[15ch] font-display text-[2.5rem] leading-[0.94] text-[var(--color-brand)] sm:text-[3.2rem]">
                    {service.name}
                  </h2>
                  <p className="mt-5 max-w-3xl text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                    {service.fullDescription}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-brand)] sm:text-base">
                    <span className="font-semibold">Ideal for:</span> {service.idealFor}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-[0.7rem] border border-[color:rgba(31,35,39,0.12)] px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="border-l border-[color:rgba(31,35,39,0.12)] pl-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section id="planning-standards" className="py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Planning Standards"
              title="The way we scope work matters just as much as the work itself."
              description="Premium residential renovation succeeds when layout, material decisions, and sequencing are handled with discipline before the first day on site."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {planningNotes.map((note, index) => (
              <Reveal key={note.title} delay={index * 60}>
                <article className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-display text-[2rem] leading-[0.96] text-[var(--color-brand)]">
                    {note.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {note.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Need help deciding what scope makes sense for your house?"
        description="We can walk through what is worth changing now, what can be phased later, and where design-build guidance will create the most value."
      />
    </>
  );
}
