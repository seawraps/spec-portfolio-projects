"use client";

import { Container } from "@/components/layout/Container";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { homeFeatureCards } from "@/lib/data";
import { cn } from "@/lib/utils";

const orchestrationFlow = [
  "Detect demand from CRM, billing, support, and product signals",
  "Apply owner logic, policy rules, and approval windows automatically",
  "Route work to the next best human or autonomous path",
  "Package outcomes back to systems and leadership reports",
];

const architectureSignals = [
  "Live queue telemetry",
  "Versioned workflow releases",
  "Audit coverage by default",
];

export function FeatureGridSection() {
  return (
    <section className="section-shell-dark py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:items-end">
          <div>
            <p className="data-label text-sky-200">Platform capabilities</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.06em] text-white sm:text-[3rem]">
              Every product layer is designed to make serious operational work look deliberate.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              OrbitOps combines workflow logic, queue intelligence, governance, and executive
              reporting into a single product fabric. The result is less operational guesswork and
              a much stronger story for leadership, security, and systems teams.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {["Adaptive routing", "AI recommendations", "Approval controls", "Audit timelines"].map(
              (item) => (
                <div
                  key={item}
                  className="glass-chip rounded-[1.2rem] px-4 py-4 text-sm font-medium text-slate-100"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="surface-panel-dark animated-grid relative h-full overflow-hidden p-6">
              <div className="relative z-[1]">
                <p className="data-label text-sky-200">Orchestration architecture</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                  One system that translates raw workflow demand into governed execution.
                </h3>
                <div className="mt-6 space-y-4">
                  {orchestrationFlow.map((item, index) => (
                    <div key={item} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-sm font-semibold text-white">
                          0{index + 1}
                        </span>
                        {index < orchestrationFlow.length - 1 ? (
                          <span className="mt-2 h-10 w-px bg-[linear-gradient(180deg,rgba(101,226,255,0.45),rgba(255,255,255,0))]" />
                        ) : null}
                      </div>
                      <div className="rounded-[1.3rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-300">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {architectureSignals.map((signal) => (
                    <div
                      key={signal}
                      className="rounded-[1.15rem] border border-white/8 bg-white/5 px-3 py-3 text-sm text-slate-200"
                    >
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {homeFeatureCards.slice(0, 4).map((feature, index) => (
              <Reveal
                key={feature.title}
                delay={index * 0.05}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <InteractiveCard
                  className={cn(
                    "h-full p-6",
                    index === 0
                      ? "surface-panel-dark border border-sky-400/18"
                      : "surface-panel",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "inline-flex h-12 w-12 items-center justify-center rounded-[1.2rem] text-sm font-semibold shadow-[0_20px_38px_-28px_rgba(8,15,31,0.45)]",
                        index === 0 ? "bg-white/10 text-white" : "bg-slate-950 text-white",
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span
                      className={cn(
                        "data-label",
                        index === 0 ? "text-sky-200" : "text-slate-400",
                      )}
                    >
                      Product module
                    </span>
                  </div>

                  <h3
                    className={cn(
                      "mt-5 font-display text-2xl font-semibold tracking-[-0.05em]",
                      index === 0 ? "text-white" : "text-slate-950",
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-7",
                      index === 0 ? "max-w-3xl text-slate-300" : "text-slate-600",
                    )}
                  >
                    {feature.description}
                  </p>
                  <div
                    className={cn(
                      "mt-5 rounded-[1.2rem] border px-4 py-4 text-sm font-medium leading-6",
                      index === 0
                        ? "border-white/10 bg-white/5 text-slate-200"
                        : "border-slate-200 bg-white text-slate-800",
                    )}
                  >
                    {feature.detail}
                  </div>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
