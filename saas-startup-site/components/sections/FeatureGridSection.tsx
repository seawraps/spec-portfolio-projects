import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFeatureCards } from "@/lib/data";

export function FeatureGridSection() {
  const leadFeatures = homeFeatureCards.slice(0, 3);
  const supportingFeatures = homeFeatureCards.slice(3);

  return (
    <section className="bg-[#f4f8fd] py-14 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Platform capabilities"
          title="Built for the operational work that actually creates risk."
          description="OrbitOps is designed for teams coordinating time-sensitive approvals, customer handoffs, escalations, and policy-driven work across multiple systems."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="surface-panel overflow-hidden">
            <div className="border-b border-slate-200/80 px-6 py-5 sm:px-8">
              <p className="data-label text-slate-500">Core product layers</p>
            </div>
            <div className="divide-y divide-slate-200/80">
              {leadFeatures.map((feature, index) => (
                <article key={feature.title} className="grid gap-4 px-6 py-6 sm:grid-cols-[auto_1fr] sm:px-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                    <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-slate-900">
                      {feature.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <article className="surface-panel-dark px-6 py-6 sm:px-7">
              <p className="data-label text-sky-300">What this changes</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                Replace scattered workflow ownership with one operational system of record.
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Instead of chasing queue status across docs, tickets, and chat threads, teams can
                operate from one shared view with explicit ownership and measurable outcomes.
              </p>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              {supportingFeatures.map((feature) => (
                <article key={feature.title} className="surface-panel px-5 py-5">
                  <p className="data-label text-slate-500">Module</p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                  <p className="mt-4 text-sm font-medium leading-6 text-slate-900">{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
