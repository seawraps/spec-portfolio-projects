import { metrics } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

const operatingSignals = [
  { label: "Acquisition efficiency", value: "84", suffix: "%", width: "w-[84%]" },
  { label: "Creative winner rate", value: "63", suffix: "%", width: "w-[63%]" },
  { label: "Page test adoption", value: "76", suffix: "%", width: "w-[76%]" },
];

export function ResultsMetrics() {
  return (
    <section className="section-spacing bg-paper text-ink">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="paper-panel p-6 sm:p-8 lg:p-10">
          <SectionIntro
            eyebrow="Results"
            title="Numbers leadership can defend because the system behind them is visible."
            description="We show performance as a connected operating model: demand quality, creative velocity, conversion lift, and revenue impact. That keeps reporting useful instead of decorative."
            tone="light"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {metrics.slice(0, 2).map((metric) => (
              <article key={metric.label} className="rounded-[1.35rem] border border-ink/10 bg-white/60 p-5">
                <p className="font-display text-6xl font-semibold uppercase leading-none text-ink">{metric.value}</p>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink">{metric.label}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/68">{metric.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-ink/10 bg-ink px-5 py-6 text-paper sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-paper/54">Operating readout</p>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-paper/38">Updated weekly</p>
            </div>

            <div className="mt-6 space-y-5">
              {operatingSignals.map((signal) => (
                <div key={signal.label} className="space-y-2">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-paper/74">{signal.label}</span>
                    <span className="font-semibold text-paper">
                      {signal.value}
                      {signal.suffix}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className={`h-2 rounded-full bg-gradient-to-r from-signal to-volt ${signal.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {metrics.slice(2).map((metric) => (
            <article key={metric.label} className="surface-panel p-6 sm:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/44">{metric.benchmark}</p>
              <p className="mt-4 font-display text-6xl font-semibold uppercase leading-none text-white">{metric.value}</p>
              <h3 className="mt-4 text-base font-semibold uppercase tracking-[0.12em] text-white">{metric.label}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{metric.detail}</p>
            </article>
          ))}

          <article className="surface-panel p-6 sm:p-8">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Executive view</p>
            <h3 className="mt-4 font-display text-4xl font-semibold uppercase leading-[0.9] text-white">
              We optimize for efficiency, message clarity, and pace at the same time.
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/72">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Every metric is tied to a decision, not just a dashboard tile.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Creative testing and conversion work are reported alongside spend efficiency.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                <span>Wins are documented so client teams can keep compounding them after launch.</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
