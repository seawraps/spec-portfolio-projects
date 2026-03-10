import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { engagementModels } from "@/lib/data";

export function EngagementModels() {
  return (
    <section className="section-spacing bg-paper text-ink">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(18rem,0.44fr)] lg:items-end">
          <SectionIntro
            eyebrow="Engagement Models"
            title="Different scopes, one sharp operating standard."
            description="Bring us in for one pressure point or hand over the full campaign stack. Either way, the engagement starts with clear KPIs, senior ownership, and a rhythm that keeps momentum visible."
            tone="light"
          />

          <div className="paper-panel p-5 sm:p-6">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">Buying posture</p>
            <p className="mt-3 text-sm leading-7 text-ink/72">
              Best fit for teams that want sharper execution now, but still expect the operating logic behind every move.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.02fr_1fr_0.98fr]">
          {engagementModels.map((model, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={model.name}
                className={`${
                  isFeatured ? "surface-panel text-white" : "paper-panel text-ink"
                } flex h-full flex-col gap-5 p-6 md:p-7`}
                data-tilt
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${isFeatured ? "text-volt" : "text-signal"}`}>
                    {index === 0 ? "Fastest way in" : index === 1 ? "Most common model" : "High-stakes rollout"}
                  </p>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
                      isFeatured
                        ? "border border-white/10 bg-white/5 text-white/54"
                        : "border border-ink/10 bg-white/70 text-ink/52"
                    }`}
                  >
                    Senior-owned
                  </span>
                </div>

                <div>
                  <h3 className={`font-display text-5xl uppercase leading-[0.9] ${isFeatured ? "text-white" : "text-ink"}`}>
                    {model.name}
                  </h3>
                  <p className={`mt-4 text-sm leading-7 ${isFeatured ? "text-white/74" : "text-ink/72"}`}>{model.bestFor}</p>
                </div>

                <div className={`rounded-[1.35rem] border px-4 py-5 ${isFeatured ? "border-white/10 bg-white/6" : "border-ink/10 bg-white/68"}`}>
                  <p className={`text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${isFeatured ? "text-white/42" : "text-ink/46"}`}>
                    Typical investment
                  </p>
                  <p className={`mt-3 font-display text-5xl uppercase leading-none ${isFeatured ? "text-white" : "text-ink"}`}>{model.investment}</p>
                </div>

                <ul className={`space-y-3 border-t pt-5 text-sm ${isFeatured ? "border-white/10 text-white/78" : "border-ink/10 text-ink/78"}`}>
                  {model.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className={`mt-2 h-1.5 w-6 rounded-full ${isFeatured ? "bg-volt" : "bg-signal"}`} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
