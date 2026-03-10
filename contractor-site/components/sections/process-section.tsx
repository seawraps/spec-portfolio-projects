import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators, processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="rounded-[2.5rem] bg-[var(--color-brand)] px-6 py-8 text-[var(--color-surface)] shadow-[0_42px_100px_-58px_rgba(22,36,52,0.92)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionHeading
                eyebrow="Process"
                title="A premium result depends on a process that stays readable from start to finish"
                description="We are structured for occupied homes and detail-heavy interiors, which means thoughtful sequencing, homeowner updates, and tight closeout standards."
                className="[&_h2]:text-[var(--color-surface)] [&_p]:text-[color:rgba(255,250,243,0.76)]"
              />
              <ul className="mt-7 space-y-3">
                {differentiators.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.25rem] border border-[color:rgba(255,250,243,0.12)] bg-[color:rgba(255,250,243,0.05)] px-4 py-3 text-sm leading-7 text-[color:rgba(255,250,243,0.82)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ol className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[1.75rem] border border-[color:rgba(255,250,243,0.12)] bg-[color:rgba(255,250,243,0.06)] p-5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-[var(--color-brand-deep)]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--color-surface)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:rgba(255,250,243,0.78)]">
                    {step.description}
                  </p>
                  <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                    {step.deliverable}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
