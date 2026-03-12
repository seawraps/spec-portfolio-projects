import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buyingProcess, sellingProcess, type ProcessStep } from "@/lib/data";

type ProcessSectionProps = {
  title?: string;
  description?: string;
};

type ProcessTrackProps = {
  eyebrow: string;
  title: string;
};

type ProcessRowProps = {
  sellerStep: ProcessStep;
  buyerStep: ProcessStep;
};

function ProcessTrack({ eyebrow, title }: ProcessTrackProps) {
  return (
    <article className="reveal-up border-t border-white/12 pt-5">
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
        {eyebrow}
      </p>
      <h3 className="mt-4 font-display text-[2.7rem] leading-[0.92] text-white sm:text-[3rem]">
        {title}
      </h3>
    </article>
  );
}

function ProcessRow({ sellerStep, buyerStep }: ProcessRowProps) {
  const steps = [sellerStep, buyerStep];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
      {steps.map((step) => (
        <article
          key={step.step + step.title}
          className="flex h-full flex-col border-b border-white/10 pb-5"
        >
          <div className="flex items-baseline gap-4">
            <span className="font-display text-[2rem] leading-none text-[var(--color-bronze-soft)]">
              {step.step}
            </span>
            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
          </div>
          <p className="mt-3 pl-12 text-sm leading-7 text-white/70">
            {step.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSection({
  title = "Guidance for both sides of the move, paced like private representation.",
  description = "Buyers and sellers should understand where they stand at every stage. The framework stays deliberate, with the next decision always visible before the next deadline arrives.",
}: ProcessSectionProps) {
  return (
    <section className="section-spacing" aria-labelledby="process-heading">
      <Container>
        <div className="dark-panel rounded-[30px] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-12 xl:grid-cols-[0.76fr_1.24fr] xl:items-start">
            <div>
              <SectionHeading
                id="process-heading"
                eyebrow="Buyer And Seller Guidance"
                title={title}
                description={description}
                inverse
              />

              <div className="image-frame image-reveal reveal-up delay-1 relative mt-8 min-h-[320px] sm:min-h-[420px]">
                <Image
                  src="/images/services-interior.jpg"
                  alt="A refined interior staged for a premium listing, reinforcing Crescent Vale's launch and advisory process."
                  fill
                  sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111921]/78 via-transparent to-transparent" />
                <div className="overlay-panel absolute inset-x-4 bottom-4 rounded-[22px] p-4 text-white sm:inset-x-5 sm:bottom-5 sm:p-5">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/68">
                    Launch discipline
                  </p>
                  <p className="mt-3 font-display text-[2rem] leading-[0.92] text-white">
                    Preparation, styling, and timing only work when the story is coherent.
                  </p>
                </div>
              </div>

              <p className="mt-5 border-l border-white/14 pl-6 text-sm leading-7 text-white/72">
                The process is meant to protect calm decision-making. That
                means cleaner sequencing, fewer surprises, and direct counsel
                when timing becomes sensitive.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-8">
                <ProcessTrack
                  eyebrow="Seller guide"
                  title="Homes launch best when the positioning feels inevitable."
                />
                <ProcessTrack
                  eyebrow="Buyer guide"
                  title="Searches stay disciplined when the brief is sharper than the noise."
                />
              </div>

              <div className="grid gap-5">
                {sellingProcess.map((sellerStep, index) => (
                  <ProcessRow
                    key={sellerStep.step}
                    sellerStep={sellerStep}
                    buyerStep={buyingProcess[index]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
