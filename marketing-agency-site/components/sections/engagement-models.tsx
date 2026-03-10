import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { engagementModels } from "@/lib/data";

export function EngagementModels() {
  return (
    <section className="section-spacing bg-paper text-ink">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Engagement Models"
          title="Different scopes, one sharp operating standard."
          description="You can bring us in for one pressure point or hand over the full campaign stack. Either way, the engagement starts with clear KPIs, senior ownership, and a rhythm that keeps momentum visible."
          tone="light"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model, index) => (
            <article
              key={model.name}
              className={`${
                index === 1 ? "surface-panel text-white" : "paper-panel text-ink"
              } flex h-full flex-col p-6 md:p-8 ${index === 2 ? "lg:translate-y-6" : index === 0 ? "lg:-translate-y-2" : ""}`}
              data-tilt
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${index === 1 ? "text-volt" : "text-signal"}`}>
                {index === 0 ? "Fastest way in" : index === 1 ? "Most common model" : "High-stakes rollout"}
              </p>
              <h3 className={`mt-4 font-display text-5xl uppercase leading-[0.9] ${index === 1 ? "text-white" : "text-ink"}`}>
                {model.name}
              </h3>
              <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/72" : "text-ink/72"}`}>{model.bestFor}</p>
              <p className={`mt-6 font-display text-6xl uppercase leading-none ${index === 1 ? "text-white" : "text-ink"}`}>
                {model.investment}
              </p>
              <ul className={`mt-6 space-y-3 border-t pt-5 text-sm ${index === 1 ? "border-white/10 text-white/78" : "border-ink/10 text-ink/78"}`}>
                {model.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-6 rounded-full ${index === 1 ? "bg-volt" : "bg-signal"}`} aria-hidden="true" />
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
