import { caseStudies } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function CaseStudies() {
  return (
    <section className="section-spacing border-y border-white/10">
      <div className="mx-auto space-y-10 px-6">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <SectionIntro
            eyebrow="Selected Work"
            title="Representative campaigns where the system got sharper, faster, and more profitable."
            description="These case-study previews are intentionally compact, but each shows the pattern we care about most: strategy changes the frame, creative sharpens the message, and performance improves where it counts."
          />
          <div className="surface-panel p-6 sm:p-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/46">How we show work</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
              Each preview ties one commercial problem to a measurable shift. That keeps the site grounded in agency outcomes
              rather than generic portfolio language.
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <article
              key={study.client}
              className={`surface-panel grid gap-6 p-6 md:p-8 ${
                index === 0 ? "lg:col-span-2 lg:grid-cols-[0.7fr_1fr]" : ""
              }`}
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-volt">{study.sector}</p>
                  <h3 className="font-display text-4xl font-semibold uppercase leading-none text-white sm:text-5xl">
                    {study.client}
                  </h3>
                </div>

                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Headline result</p>
                  <p className="mt-3 font-display text-6xl font-semibold uppercase leading-none text-white">
                    {study.headlineMetric}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/72">{study.headlineLabel}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.channelMix.map((channel) => (
                    <span
                      key={channel}
                      className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/62"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="space-y-4 text-sm leading-7 text-white/72">
                  <p>
                    <span className="font-semibold uppercase tracking-[0.12em] text-white">Challenge</span>
                    <br />
                    {study.challenge}
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-[0.12em] text-white">Approach</span>
                    <br />
                    {study.approach}
                  </p>
                </div>

                <ul className="grid gap-3 border-t border-white/10 pt-5 text-sm text-white/78">
                  {study.outcomes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
