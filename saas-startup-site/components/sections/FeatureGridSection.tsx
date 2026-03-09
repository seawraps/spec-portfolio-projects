import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFeatureCards } from "@/lib/data";

export function FeatureGridSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything needed to run high-stakes business operations"
          description="OrbitOps is designed for teams that need reliability, speed, and clear ownership across every operational workflow."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeFeatureCards.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
              <p className="mt-4 text-sm font-medium leading-6 text-slate-800">{feature.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
