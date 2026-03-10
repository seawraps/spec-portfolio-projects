import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { metrics } from "@/lib/data";

const operatingSignals = [
  {
    label: "Acquisition efficiency",
    value: "84%",
    scale: 0.84,
    note: "Spend is pushed toward intent and proof-backed creative, not vanity traffic.",
  },
  {
    label: "Creative winner rate",
    value: "63%",
    scale: 0.63,
    note: "Concepts are pressure-tested fast enough to keep campaigns from going stale.",
  },
  {
    label: "Page test adoption",
    value: "76%",
    scale: 0.76,
    note: "Landing pages are treated like live conversion surfaces, not launch-once assets.",
  },
];

const executiveSignals = [
  "Every performance metric is tied to a business decision and next move.",
  "Media, message, and page shifts are reviewed in the same operating cadence.",
  "Winning patterns are documented so the client team can keep compounding them.",
];

export function ResultsMetrics() {
  return (
    <section className="section-spacing bg-paper text-ink">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 xl:grid-cols-[0.44fr_0.56fr]">
        <div className="grid gap-6" data-reveal="left">
          <SectionIntro
            eyebrow="Results"
            title="Performance shown as a system, not a screenshot of good numbers."
            description="The point is not to impress with isolated metrics. The point is to show how campaign velocity, conversion pressure, and revenue accountability connect inside the same operating model."
            tone="light"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.slice(0, 2).map((metric, index) => (
              <article
                key={metric.label}
                className="paper-panel p-5 sm:p-6"
                data-tilt
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <p className="font-display text-6xl uppercase leading-none text-ink">{metric.value}</p>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{metric.detail}</p>
                <p className="mt-4 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-ink/42">{metric.benchmark}</p>
              </article>
            ))}
          </div>

          <article className="paper-panel p-6 sm:p-7" data-tilt>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">Executive cut</p>
            <h3 className="mt-4 font-display text-5xl uppercase leading-[0.9] text-ink">
              When the system is tighter, reporting gets sharper and faster to trust.
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/74">
              {executiveSignals.map((signal) => (
                <li key={signal} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="surface-panel p-6 text-paper sm:p-8" data-tilt data-reveal="right">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-paper/42">Operating dashboard</p>
              <h3 className="mt-3 font-display text-5xl uppercase text-white sm:text-6xl">Leadership-ready readout</h3>
            </div>
            <p className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-paper/42">
              Updated weekly
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.62fr_0.38fr]">
            <div className="rounded-[1.55rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-paper/44">System health</p>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-paper/34">Signal spread</p>
              </div>

              <div className="mt-8 grid h-56 grid-cols-3 items-end gap-4">
                {operatingSignals.map((signal, index) => (
                  <div key={signal.label} className="flex h-full flex-col justify-end gap-4">
                    <div className="signal-column h-full">
                      <div
                        className="signal-column-fill"
                        style={
                          {
                            "--signal-scale": String(signal.scale),
                            "--signal-index": String(index),
                            height: "100%",
                          } as CSSProperties
                        }
                      />
                    </div>
                    <div>
                      <p className="font-display text-4xl uppercase leading-none text-white">{signal.value}</p>
                      <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-paper/42">
                        {signal.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {metrics.slice(2).map((metric, index) => (
                <article key={metric.label} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-paper/38">{metric.benchmark}</p>
                  <p className="mt-3 font-display text-6xl uppercase leading-none text-white">{metric.value}</p>
                  <h4 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">{metric.label}</h4>
                  <p className="mt-2 text-sm leading-6 text-paper/72">{metric.detail}</p>
                  <div className="signal-meter mt-4 h-2.5">
                    <div
                      className="signal-meter-fill"
                      style={{ "--signal-scale": String(index === 0 ? 0.82 : 0.68) } as CSSProperties}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {operatingSignals.map((signal) => (
              <div key={signal.label} className="rounded-[1.2rem] border border-white/10 bg-coal/74 px-4 py-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-paper/36">{signal.label}</p>
                <p className="mt-3 text-sm leading-6 text-paper/74">{signal.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
