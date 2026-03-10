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
    <article className="soft-card rounded-[30px] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
        {eyebrow}
      </p>
      <h3 className="mt-4 font-display text-4xl leading-none text-[var(--color-ink)]">
        {title}
      </h3>
      <div className="mt-6 space-y-4">
        {steps.map((step) => (
          <div
            key={step.step}
            className="rounded-[24px] border border-[var(--color-line)] bg-white/76 p-6"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
              Step {step.step}
            </p>
            <h4 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
              {step.title}
            </h4>
            <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function ProcessSection({
  title = "A clear path for buying and selling.",
  description = "Clients should never have to guess what comes next. These frameworks keep the work organized, tailored, and easy to navigate from first meeting through closing.",
}: ProcessSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24" aria-labelledby="process-heading">
      <Container>
        <SectionHeading
          id="process-heading"
          align="center"
          eyebrow="Our Process"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ProcessColumn
            eyebrow="Buyer journey"
            title="Representation for buyers who want pace and clarity."
            steps={buyingProcess}
          />
          <ProcessColumn
            eyebrow="Seller launch plan"
            title="A listing strategy that builds confidence before day one."
            steps={sellingProcess}
          />
        </div>
      </Container>
    </section>
  );
}
