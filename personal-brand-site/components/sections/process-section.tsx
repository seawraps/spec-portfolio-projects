import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A simple engagement flow that keeps the work strategic and usable."
          description="Even the most polished personal brand work falls apart when the process is vague. This one is deliberately structured."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="surface-card h-full p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose">Step 0{index + 1}</p>
              <h2 className="mt-4 text-3xl text-ink">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/72">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
