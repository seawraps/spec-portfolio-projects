import { caseStudies } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function CaseStudies() {
  return (
    <section className="section-spacing border-y border-white/10 bg-deep-2/70">
      <div className="mx-auto w-full max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Case Study Highlights"
          title="Work that looks sharp and performs under pressure"
          description="Representative examples of how we combine strategy, execution, and experimentation to drive measurable business outcomes."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.client} className="surface-panel flex h-full flex-col gap-5 p-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{study.sector}</p>
                <h3 className="text-xl font-semibold text-white">{study.client}</h3>
              </div>

              <div className="space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  <span className="font-semibold text-white">Challenge:</span> {study.challenge}
                </p>
                <p>
                  <span className="font-semibold text-white">Approach:</span> {study.approach}
                </p>
              </div>

              <ul className="mt-auto space-y-2 border-t border-white/10 pt-4 text-sm text-slate-200">
                {study.outcomes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
