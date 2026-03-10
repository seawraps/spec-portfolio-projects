"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { caseStudies } from "@/lib/data";

const caseStudySignals = {
  "Northline Health": {
    window: "90-day reset",
    framing: "Intent-first patient acquisition",
    scoreboard: [
      { label: "Qualified lead rate", before: "11%", after: "24%", scale: 0.78 },
      { label: "Demo conversion", before: "6.2%", after: "13.1%", scale: 0.71 },
      { label: "Sales confidence", before: "Low", after: "High", scale: 0.82 },
    ],
    bars: [0.22, 0.34, 0.49, 0.61, 0.78],
    moves: ["Rebuilt paid search around higher-intent service demand", "Introduced proof-led landing pages by service line", "Closed the feedback loop with weekly sales quality reviews"],
  },
  "Beacon Freight": {
    window: "12-week repositioning push",
    framing: "Enterprise demand with a sharper market story",
    scoreboard: [
      { label: "Enterprise inbound", before: "Baseline", after: "+67%", scale: 0.67 },
      { label: "Proposal win rate", before: "18%", after: "24%", scale: 0.62 },
      { label: "Sales cycle length", before: "74 days", after: "56 days", scale: 0.7 },
    ],
    bars: [0.18, 0.29, 0.44, 0.56, 0.67],
    moves: ["Reframed the narrative around operational proof, not feature lists", "Rebuilt core site pages to support enterprise objections", "Deployed LinkedIn and search under one enterprise demand model"],
  },
  "Luma Commerce": {
    window: "Holiday revenue sprint",
    framing: "Retention pressure layered into acquisition",
    scoreboard: [
      { label: "Repeat purchase rate", before: "14%", after: "18%", scale: 0.58 },
      { label: "Email revenue contribution", before: "11%", after: "15%", scale: 0.64 },
      { label: "Blended ROAS", before: "2.4x", after: "3.6x", scale: 0.88 },
    ],
    bars: [0.26, 0.41, 0.55, 0.72, 0.88],
    moves: ["Reset creative cadence around promotional and retention moments", "Rewired lifecycle offers to carry the same campaign narrative", "Built a content system that kept holiday launches fast and coherent"],
  },
} satisfies Record<string, { window: string; framing: string; scoreboard: Array<{ label: string; before: string; after: string; scale: number }>; bars: number[]; moves: string[] }>;

const barLabels = ["Week 1", "Week 2", "Week 4", "Week 8", "Week 12"];

export function CaseStudies() {
  const [activeClient, setActiveClient] = useState(caseStudies[0].client);
  const activeStudy = caseStudies.find((study) => study.client === activeClient) ?? caseStudies[0];
  const signal = caseStudySignals[activeStudy.client as keyof typeof caseStudySignals];

  return (
    <section className="section-spacing relative border-y border-white/10">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
          <SectionIntro
            eyebrow="Selected Work"
            title="Proof shown like campaign intelligence, not a polite gallery."
            description="Each engagement here is framed around the commercial pressure, the operating shift, and the measurable outcome. That keeps the site grounded in decisions, not decoration."
          />

          <div className="surface-panel p-6 sm:p-7" data-tilt data-reveal="right">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Case study filter</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
              Hover the client selector to shift the operating readout. This is the pattern Signal & Stone is built around:
              reframe the problem, speed up execution, and make the business result easier to defend.
            </p>
          </div>
        </div>

        <div className="surface-panel grid gap-6 p-6 sm:p-8 xl:grid-cols-[0.34fr_0.66fr]" data-tilt data-reveal="up">
          <div className="grid gap-4">
            {caseStudies.map((study) => {
              const isSelected = study.client === activeClient;

              return (
                <button
                  key={study.client}
                  type="button"
                  onMouseEnter={() => setActiveClient(study.client)}
                  onFocus={() => setActiveClient(study.client)}
                  onClick={() => setActiveClient(study.client)}
                  className={`rounded-[1.45rem] border p-5 text-left ${
                    isSelected
                      ? "border-signal/42 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/66 hover:border-white/24 hover:bg-white/7"
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">{study.sector}</p>
                      <h3 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">{study.client}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/46">
                      {caseStudySignals[study.client as keyof typeof caseStudySignals].window}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7">{study.challenge}</p>
                </button>
              );
            })}
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 xl:grid-cols-[0.52fr_0.48fr]">
              <div className="rounded-[1.65rem] border border-white/10 bg-coal/78 p-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">{signal.framing}</p>
                <div className="mt-4 flex flex-wrap items-end gap-4">
                  <p className="font-display text-[clamp(4.4rem,10vw,7rem)] uppercase leading-none text-white">
                    {activeStudy.headlineMetric}
                  </p>
                  <p className="max-w-xs pb-2 text-sm leading-6 text-white/70">{activeStudy.headlineLabel}</p>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-7 text-white/74">
                  <p>
                    <span className="font-semibold uppercase tracking-[0.14em] text-white">Challenge</span>
                    <br />
                    {activeStudy.challenge}
                  </p>
                  <p>
                    <span className="font-semibold uppercase tracking-[0.14em] text-white">Approach</span>
                    <br />
                    {activeStudy.approach}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.65rem] border border-white/10 bg-white/6 p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Performance slope</p>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/34">{signal.window}</p>
                </div>
                <div className="mt-6 grid h-52 grid-cols-5 items-end gap-3">
                  {signal.bars.map((value, index) => (
                    <div key={barLabels[index]} className="flex h-full flex-col justify-end gap-3">
                      <div className="signal-column h-full">
                        <div
                          className="signal-column-fill"
                          style={
                            {
                              "--signal-scale": String(value),
                              "--signal-index": String(index),
                              height: "100%",
                            } as CSSProperties
                          }
                        />
                      </div>
                      <p className="text-[0.56rem] font-semibold uppercase tracking-[0.14em] text-white/34">{barLabels[index]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-[0.54fr_0.46fr]">
              <div className="grid gap-3">
                {signal.scoreboard.map((item, index) => (
                  <div key={item.label} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">
                        {item.before} to {item.after}
                      </p>
                    </div>
                    <div className="signal-meter mt-4 h-2.5">
                      <div
                        className="signal-meter-fill"
                        style={
                          {
                            "--signal-scale": String(item.scale),
                            "--signal-index": String(index),
                          } as CSSProperties
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">What changed in the operating model</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/74">
                  {signal.moves.map((move) => (
                    <li key={move} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>{move}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeStudy.channelMix.map((channel) => (
                    <span
                      key={channel}
                      className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/56"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ul className="grid gap-3 border-t border-white/10 pt-5 text-sm text-white/78 md:grid-cols-3">
              {activeStudy.outcomes.map((item) => (
                <li key={item} className="rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
