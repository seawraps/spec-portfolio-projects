import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="border-b-[4px] border-[var(--color-ink)] py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From quote to reveal, panel by panel."
            description="Wrapping is part chemistry, part patience, part art. Here is exactly how your build comes together."
          />
        </Reveal>

        <ol className="mt-12 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 70}>
              <li className="comic-panel comic-panel-hover flex h-full flex-col p-5">
                <span className="comic-display flex h-12 w-12 items-center justify-center border-[3px] border-[var(--color-ink)] bg-[var(--color-red)] text-2xl text-[var(--color-paper)] shadow-[3px_3px_0_0_var(--color-ink)]">
                  {index + 1}
                </span>
                <h3 className="comic-heavy mt-4 text-[0.92rem] leading-tight tracking-[0.03em] text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {step.description}
                </p>
                <p className="mt-3 border-t-[2px] border-dashed border-[var(--color-ink)] pt-3 text-[0.78rem] font-semibold leading-6 text-[var(--color-blue-deep)]">
                  {step.deliverable}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
