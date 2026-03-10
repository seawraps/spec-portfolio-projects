import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="A structured engagement flow, so the work feels sharp on the outside and usable underneath."
          description="Message work gets vague fast. This process keeps the thinking visible, collaborative, and strong enough to survive real-world delivery."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <article key={step.title} className="paper-panel p-7 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-paper-deep/55 text-sm font-semibold uppercase tracking-[0.2em] text-plum">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-3xl text-ink">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-mocha/88">{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
