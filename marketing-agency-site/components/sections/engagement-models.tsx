import { engagementModels } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function EngagementModels() {
  return (
    <section className="section-spacing bg-paper text-ink">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Engagement Models"
          title="Flexible structures, but always one sharp operating standard."
          description="You can bring us in for a single pressure point or a broader growth system. Either way, the model starts with clear KPIs, senior ownership, and a decision cadence your team can trust."
          tone="light"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <article
              key={model.name}
              className={`paper-panel flex h-full flex-col p-6 md:p-8 ${
                index === 1 ? "lg:-translate-y-5" : index === 2 ? "lg:translate-y-6" : ""
              }`}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">
                {index === 0 ? "Fastest way in" : index === 1 ? "Most common model" : "High-stakes rollout"}
              </p>
              <h3 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-ink">{model.name}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/72">{model.bestFor}</p>
              <p className="mt-6 font-display text-5xl font-semibold uppercase leading-none text-ink">{model.investment}</p>
              <ul className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm text-ink/78">
                {model.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
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
