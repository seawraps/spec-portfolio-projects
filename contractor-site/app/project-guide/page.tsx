import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { consultationChecklist, processSteps, services } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Project Guide",
  description:
    "Plan a premium kitchen, bath, or whole-home renovation with practical guidance on fit, scope, timing, and what to prepare before the first walkthrough.",
  path: "/project-guide",
});

const planningPrinciples = [
  {
    title: "Define the room problems first",
    description:
      "Start with function, circulation, storage, and finish frustrations before talking about aesthetics. The most durable plans solve those issues together.",
  },
  {
    title: "Make selections early enough to protect schedule",
    description:
      "Cabinetry, tile, plumbing fixtures, and specialty lighting often determine sequencing. Good projects feel calmer because these decisions are not postponed.",
  },
  {
    title: "Plan around lived-in conditions",
    description:
      "Occupied homes need dust protection, realistic access plans, and decision timing that respects family routines as much as site logistics.",
  },
];

export default function ProjectGuidePage() {
  return (
    <>
      <section id="project-guide-overview" className="py-10 md:py-12 lg:py-14">
        <Container className="architectural-grid grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Project Guide"
              title="How to plan a premium renovation before the first walkthrough."
              description="This guide is for homeowners who want a stronger project start: better scope clarity, fewer midstream surprises, and a smoother conversation once the contractor is in the house."
              as="h1"
            />

            <div className="line-list mt-8 border-y border-[color:rgba(31,35,39,0.12)]">
              {consultationChecklist.map((item) => (
                <p
                  key={item}
                  className="py-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="image-frame relative min-h-[420px] overflow-hidden rounded-[1rem] sm:min-h-[560px]">
              <Image
                src="/images/kitchen-window.jpg"
                alt="A refined kitchen renovation with custom cabinetry, brass hardware, and natural light."
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.06),rgba(23,35,45,0.56))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-surface)] sm:p-8">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  Best projects start on paper
                </p>
                <p className="mt-3 max-w-md font-display text-[2.2rem] leading-[0.96] sm:text-[3rem]">
                  Scope, selections, and sequencing should be legible before demo begins.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="guide-roadmap" className="py-16 md:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Roadmap"
                title="What a disciplined contractor process should look like."
                description="The exact sequence varies by scope, but strong residential projects usually follow the same high-level order."
              />
            </div>
          </Reveal>

          <div className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 60}>
                <div className="grid gap-5 py-6 sm:grid-cols-[auto_1fr]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[0.75rem] border border-[color:rgba(31,35,39,0.12)] text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="text-[1.55rem] font-semibold leading-tight text-[var(--color-brand)] sm:text-[1.8rem]">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                      {step.description}
                    </p>
                    <p className="mt-4 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="guide-planning-principles" className="py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Planning Principles"
              title="Three habits that keep premium renovation work from becoming reactive."
              description="These are the patterns we see in better residential projects, regardless of room count or finish level."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {planningPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 60}>
                <article className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] p-5">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-display text-[2rem] leading-[0.96] text-[var(--color-brand)]">
                    {principle.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {principle.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="guide-service-fit" className="py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Scope Fit"
              title="Typical project types and the level of planning they usually require."
              description="Use this as a rough framing tool before a consultation, not as a substitute for a contractor walkthrough."
            />
          </Reveal>

          <div className="line-list mt-8 border-y border-[color:rgba(31,35,39,0.12)]">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 50}>
                <article className="grid gap-6 py-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
                  <div className={cn(index % 2 === 1 && "lg:order-2")}>
                    <div className="image-frame relative min-h-[240px] overflow-hidden rounded-[1rem]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      {service.timeline}
                    </p>
                    <h2 className="mt-4 font-display text-[2.2rem] leading-[0.96] text-[var(--color-brand)] sm:text-[2.8rem]">
                      {service.name}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {service.shortDescription}
                    </p>
                    <p className="mt-5 text-sm leading-7 text-[var(--color-brand)] sm:text-base">
                      <span className="font-semibold">Usually best for:</span> {service.idealFor}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Need help pressure-testing your scope before you commit to a renovation?"
        description="We can talk through the rooms involved, what feels unresolved today, and whether the right next move is a focused remodel or a broader phased plan."
      />
    </>
  );
}
