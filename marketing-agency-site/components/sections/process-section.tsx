import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
          <div className="grid gap-6">
            <SectionIntro
              eyebrow="Process"
              title="A weekly operating rhythm designed for pressure, speed, and commercial clarity."
              description="The process is intentionally direct: align on what matters, diagnose the friction, ship the highest-value moves, and turn every win into a repeatable playbook."
            />

            <div className="surface-panel p-6" data-tilt data-reveal="left">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Cadence</p>
              <p className="mt-4 font-display text-6xl uppercase leading-none text-white">Weekly</p>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Strategy, creative, and performance reviews stay in the same loop so the next move is obvious.
              </p>
            </div>
          </div>

          <ol className="relative grid gap-4">
            <div className="pointer-events-none absolute bottom-4 left-[1.55rem] top-4 hidden w-px bg-gradient-to-b from-white/24 via-white/10 to-transparent sm:block" aria-hidden="true" />
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="surface-panel grid gap-4 p-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:p-6"
                data-tilt
                data-reveal="right"
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-coal text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/54">
                  {`0${index + 1}`}
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl">{step.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                      Week {index + 1}
                    </span>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-white/72">{step.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
