import { metrics } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function ResultsMetrics() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Results"
          title="Metrics that executive teams can trust"
          description="We focus on outcomes that matter: acquisition efficiency, pipeline quality, conversion lift, and sustainable campaign velocity."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article key={metric.label} className="surface-panel p-6">
              <p className="text-4xl font-bold tracking-tight text-white">{metric.value}</p>
              <h3 className="mt-3 text-base font-semibold text-white">{metric.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
