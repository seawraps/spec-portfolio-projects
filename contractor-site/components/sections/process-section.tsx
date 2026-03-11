import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators, processSteps } from "@/lib/data";

const workflowNotes = [
  "Scope and material questions surface early, before they can stall the build.",
  "Homeowners get weekly visibility on progress, schedule movement, and outstanding decisions.",
  "Closeout includes care guidance and documented punch-list review.",
  "Crews work with occupied-home protections as a baseline, not an upgrade.",
];

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Process"
              title="A contractor workflow homeowners can actually follow."
              description="Premium residential work feels calmer when the sequence is legible. We make the next decision, the next milestone, and the next handoff clear before they become stressful."
            />

            <div className="image-frame relative mt-8 min-h-[300px] overflow-hidden rounded-[1rem]">
              <Image
                src="/images/stair-detail.jpg"
                alt="Architectural stair detailing in a renovated Nashville residence."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.4))]" />
            </div>

            <div className="line-list mt-6 border-y border-[color:rgba(31,35,39,0.12)]">
              {[...workflowNotes, ...differentiators].map((note) => (
                <p
                  key={note}
                  className="py-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base"
                >
                  {note}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <details open={index === 0} className="group py-5">
                <summary className="list-none cursor-pointer">
                  <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[0.75rem] border border-[color:rgba(31,35,39,0.12)] text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="max-w-[18ch] text-[1.55rem] font-semibold leading-tight text-[var(--color-brand)] sm:text-[1.8rem]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                        {step.deliverable}
                      </p>
                    </div>
                    <span className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Expand
                    </span>
                  </div>
                </summary>

                <div className="mt-5 grid gap-5 border-l border-[color:rgba(31,35,39,0.12)] pl-5 sm:grid-cols-[1.2fr_0.8fr]">
                  <p className="text-sm leading-8 text-[var(--color-muted)] sm:text-base">
                    {step.description}
                  </p>
                  <div className="surface-card rounded-[0.9rem] p-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      Deliverable
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
