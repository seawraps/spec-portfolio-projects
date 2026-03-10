import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buyingProcess, sellingProcess, type ProcessStep } from "@/lib/data";

type ProcessSectionProps = {
  title?: string;
  description?: string;
};

type ProcessColumnProps = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

function ProcessColumn({ eyebrow, title, steps }: ProcessColumnProps) {
  return (
    <article className="reveal-up rounded-[30px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm sm:p-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze-soft)]">
        {eyebrow}
      </p>
      <h3 className="mt-4 font-display text-4xl leading-[0.94] text-white">
        {title}
      </h3>
      <div className="mt-6 space-y-4">
        {steps.map((step) => (
          <div
            key={step.step}
            className="rounded-[24px] border border-white/10 bg-black/12 p-5"
          >
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-soft)]">
              Step {step.step}
            </p>
            <h4 className="mt-2 text-lg font-semibold text-white">
              {step.title}
            </h4>
            <p className="mt-2 text-sm leading-7 text-white/68">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ProcessSection({
  title = "A buying and selling process designed to feel composed.",
  description = "Clients should never be left guessing what happens next. We use clear frameworks, direct counsel, and thoughtful pacing so decisions stay grounded from first conversation to close.",
}: ProcessSectionProps) {
  return (
    <section className="py-14 md:py-18 lg:py-24" aria-labelledby="process-heading">
      <Container>
        <div className="dark-panel rounded-[36px] p-8 sm:p-10 lg:p-12">
          <SectionHeading
            id="process-heading"
            eyebrow="Our Process"
            title={title}
            description={description}
            inverse
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.92fr_0.76fr_0.92fr]">
            <ProcessColumn
              eyebrow="Buyer journey"
              title="Private representation with clear advice and real pace."
              steps={buyingProcess}
            />

            <div className="image-frame image-reveal reveal-up delay-1 relative min-h-[340px] xl:min-h-full">
              <Image
                src="/images/services-interior.jpg"
                alt="A refined luxury interior staged for a premium residential listing."
                fill
                sizes="(min-width: 1280px) 24vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10171d]/74 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/12 bg-black/26 p-5 text-white backdrop-blur-md">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                  Presentation matters
                </p>
                <p className="mt-3 font-display text-4xl leading-[0.94] text-white">
                  Prep, styling, and the right launch tempo change outcomes.
                </p>
              </div>
            </div>

            <ProcessColumn
              eyebrow="Seller launch"
              title="A listing strategy that feels tailored before day one."
              steps={sellingProcess}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
