import { processSteps } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function ProcessSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Process"
          title="A weekly operating rhythm designed for pressure, not presentation."
          description="The process is intentionally simple: align on revenue pressure, find the leaks, ship the highest-value fixes, and document what earns the right to scale."
        />

        <ol className="grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={`surface-panel p-6 ${
                index % 2 === 1 ? "lg:translate-y-10" : index === processSteps.length - 1 ? "lg:-translate-y-4" : ""
              }`}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/42">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold uppercase leading-none text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
