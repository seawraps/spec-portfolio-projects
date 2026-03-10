"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

const commandModes = [
  {
    id: "audit",
    label: "Pressure Audit",
    phase: "Days 01-07",
    summary: "Diagnose the friction between spend, message, and conversion before more budget is exposed.",
    headlineValue: "+29%",
    headlineLabel: "faster route to a clear first move",
    confidence: 82,
    bars: [0.34, 0.52, 0.68, 0.78, 0.86],
    focus: ["Demand quality map", "Offer tension review", "Landing-page leak readout"],
  },
  {
    id: "build",
    label: "Campaign Build",
    phase: "Days 08-21",
    summary: "Turn the insight into launch-ready creative, sharper pages, and a reporting loop leadership can use.",
    headlineValue: "18",
    headlineLabel: "ad and page variants shipped in the opening sprint",
    confidence: 88,
    bars: [0.42, 0.63, 0.71, 0.85, 0.94],
    focus: ["Creative briefing system", "Performance page stack", "Executive readout structure"],
  },
  {
    id: "scale",
    label: "Revenue Scale",
    phase: "Day 22+",
    summary: "Move budget and creative pressure toward what is proving revenue traction without slowing velocity.",
    headlineValue: "3.4x",
    headlineLabel: "representative lift once the full loop is in motion",
    confidence: 91,
    bars: [0.48, 0.61, 0.79, 0.88, 0.98],
    focus: ["Budget reallocation logic", "Winner pattern playbook", "Weekly test cadence"],
  },
];

const chartLabels = ["Intent", "Offer", "Creative", "Page", "Revenue"];

export function HeroSignalBoard() {
  const [activeId, setActiveId] = useState(commandModes[0].id);
  const activeMode = commandModes.find((mode) => mode.id === activeId) ?? commandModes[0];

  return (
    <div className="surface-panel relative overflow-hidden p-6 sm:p-7" data-tilt data-reveal="right">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Signal Room / Sprint View</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Hover the operating mode to see how strategy pressure becomes measurable campaign movement.
            </p>
          </div>

          <div
            className="relative grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/6"
            style={
              {
                background: `conic-gradient(#d9ff46 0 ${activeMode.confidence}%, rgb(255 255 255 / 0.08) ${activeMode.confidence}% 100%)`,
              } as CSSProperties
            }
          >
            <div className="grid h-[4.65rem] w-[4.65rem] place-items-center rounded-full bg-coal">
              <div className="text-center">
                <p className="font-display text-4xl uppercase leading-none text-white">{activeMode.confidence}</p>
                <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/44">signal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3">
            {commandModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onMouseEnter={() => setActiveId(mode.id)}
                onFocus={() => setActiveId(mode.id)}
                onClick={() => setActiveId(mode.id)}
                className={`rounded-[1.35rem] border px-4 py-4 text-left ${
                  activeId === mode.id
                    ? "border-signal/40 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/24 hover:bg-white/7"
                }`}
                aria-pressed={activeId === mode.id}
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">{mode.phase}</p>
                <p className="mt-2 font-display text-3xl uppercase leading-none">{mode.label}</p>
                <p className="mt-2 text-sm leading-6">{mode.summary}</p>
              </button>
            ))}
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-coal/72 p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Current readout</p>
                  <p className="mt-3 font-display text-[clamp(3.2rem,8vw,5.25rem)] uppercase leading-none text-white">
                    {activeMode.headlineValue}
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">{activeMode.headlineLabel}</p>
                </div>
                <div className="rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/42">Win condition</p>
                  <p className="mt-2 text-sm font-medium text-white">Sharper decisions before more budget lands</p>
                </div>
              </div>

              <div className="mt-8 grid h-48 grid-cols-5 items-end gap-3">
                {activeMode.bars.map((value, index) => (
                  <div key={chartLabels[index]} className="flex h-full flex-col justify-end gap-3">
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
                    <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white/42">
                      {chartLabels[index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {activeMode.focus.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4"
                  style={{ "--reveal-delay": `${index * 60}ms` } as CSSProperties}
                >
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/38">{`0${index + 1}`}</p>
                  <p className="mt-3 text-sm leading-6 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
