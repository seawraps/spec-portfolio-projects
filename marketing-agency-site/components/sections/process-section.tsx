import { processSteps } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function ProcessSection() {
  return (
    <section className="section-spacing border-y border-white/10 bg-deep-2/70">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Process"
          title="A strategic operating rhythm your team can rely on"
          description="Our process keeps momentum high, decisions evidence-based, and priorities clear across every stage of growth."
        />

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.title} className="surface-panel p-6">
              <h3 className="text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
