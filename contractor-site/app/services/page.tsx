import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { company, services } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

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
      <section id="services-overview" className="pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <Reveal>
            <div className="surface-card-strong rounded-[2.4rem] p-7 sm:p-9">
            <SectionHeading
              eyebrow="Services"
              title="Focused renovation work for kitchens, baths, interiors, and the details that tie them together"
              description="We keep the service mix disciplined so the work stays residential, premium, and craftsmanship-heavy. That allows us to deliver better guidance and better results."
              as="h1"
            />
            <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Most of our projects happen in lived-in homes across Nashville, Brentwood, Franklin,
              and Belle Meade. We help clients scope the right level of transformation, whether
              that means a single high-impact room or a phased interior renovation.
            </p>
            <div className="mt-8 rounded-[1.6rem] bg-[var(--color-surface-strong)] p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Best fit for Blue Oak
              </p>
              <p className="mt-3 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                Homeowners who value design guidance, durable materials, realistic scheduling, and
                crews that understand how to work respectfully inside occupied homes.
              </p>
              <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Serving {company.primaryServiceArea}
              </p>
            </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="image-frame relative min-h-[520px] rounded-[2.4rem]">
            <Image
              src="/images/hero-kitchen.jpg"
              alt="A premium kitchen remodel with warm cabinetry and a large island."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.1),rgba(22,36,52,0.48))]" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="service-list" className="py-16 md:py-20 lg:py-24">
        <Container className="space-y-6">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center"
            >
              <div id={service.id} className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="image-frame relative min-h-[420px] rounded-[2.2rem]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,36,52,0.04),rgba(22,36,52,0.28))]" />
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="surface-card-strong rounded-[2.2rem] p-6 sm:p-8">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {service.timeline}
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-brand)] sm:text-[3.1rem]">
                    {service.name}
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                    {service.fullDescription}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-brand)] sm:text-base">
                    <span className="font-semibold">Ideal for:</span> {service.idealFor}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-[var(--color-surface-strong)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="editorial-rule mt-6" />

                  <ul className="mt-6 space-y-3">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="rounded-[1.1rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.72)] px-4 py-3 text-sm leading-7 text-[var(--color-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section id="planning-standards" className="py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="surface-card rounded-[2.4rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Planning Standards"
              title="The way we scope work matters just as much as the work itself"
              description="Premium residential renovation succeeds when layout, material decisions, and sequencing are handled with discipline before the first day on site."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {planningNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-5"
                >
                  <h2 className="font-display text-3xl leading-tight text-[var(--color-brand)]">
                    {note.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {note.description}
                  </p>
                </article>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title="Need help deciding what scope makes sense for your house?"
        description="We can walk through what is worth changing now, what can be phased later, and where design-build guidance will create the most value."
      />
    </>
  );
}
