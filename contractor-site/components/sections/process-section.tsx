import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A clear plan from first meeting to final walkthrough"
          description="High-end results come from disciplined execution. We keep each phase predictable so your renovation moves forward without unnecessary surprises."
        />

        <ol className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-brand-soft)] p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-brand)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
