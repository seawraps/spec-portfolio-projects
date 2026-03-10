import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <div className="grid gap-6 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
          <SectionIntro
            eyebrow="Process"
            title="A weekly operating rhythm designed for pressure, speed, and commercial clarity."
            description="The process is intentionally direct: align on what matters, diagnose the friction, ship the highest-value moves, and turn every win into a repeatable playbook."
          />
          <div className="surface-panel p-6" data-tilt data-reveal="right">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Cadence</p>
            <p className="mt-4 font-display text-6xl uppercase leading-none text-white">Weekly</p>
            <p className="mt-3 text-sm leading-7 text-white/72">
              Strategy, creative, and performance reviews stay in the same loop so the next move is obvious.
            </p>
          </div>
        </div>

        <ol className="grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={`surface-panel p-6 ${
                index === 1 ? "lg:translate-y-10" : index === 3 ? "lg:-translate-y-6" : index === 4 ? "lg:translate-y-4" : ""
              }`}
              data-tilt
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/38">0{index + 1}</p>
              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.9] text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{step.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
