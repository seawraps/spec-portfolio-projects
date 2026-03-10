import { engagementModels } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function EngagementModels() {
  return (
    <section className="section-spacing border-y border-white/10 bg-deep-2/70">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Engagement Models"
          title="Flexible ways to partner"
          description="Pick a model based on your stage, team capacity, and urgency. Every engagement starts with a strategic kickoff and shared success metrics."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <article key={model.name} className="surface-panel flex h-full flex-col p-6">
              <h3 className="text-xl font-semibold text-white">{model.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{model.bestFor}</p>
              <p className="mt-4 text-lg font-semibold text-mint">{model.investment}</p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-slate-200">
                {model.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
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
