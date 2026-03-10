import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { HeroSignalBoard } from "@/components/sections/hero-signal-board";
import { agency, metrics } from "@/lib/data";

const pressurePoints = [
  "Paid spend is working harder than the page experience",
  "Creative production cannot keep up with campaign ambition",
  "Leadership sees dashboards, but not the decision logic behind them",
  "The story sounds polished yet still fails to sharpen conversion pressure",
];

const tickerItems = [
  "Paid Media Resets",
  "Campaign Launch Systems",
  "Landing Pages That Sell",
  "Creative Reviews With Teeth",
  "Reporting Leadership Can Defend",
  "Conversion Pressure Testing",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-24 sm:pt-16 md:pb-22 md:pt-16 lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-grid opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow editorial-stripes" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] xl:items-start">
          <div className="space-y-8">
            <div className="space-y-5" data-reveal="left">
              <p className="eyebrow-label">Independent Growth Agency</p>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/44">
                Paid media / CRO / landing pages / creative systems
              </p>
              <h1 className="max-w-5xl font-display text-[clamp(4rem,9vw,8.35rem)] uppercase leading-[0.84] text-white">
                Campaign pressure.
                <span className="block text-signal">Creative conviction.</span>
                <span className="block text-white">Revenue movement.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                {agency.name} builds sharper market stories, harder-working campaigns, and conversion systems for teams that
                need bold execution with measurable follow-through.
              </p>
            </div>

            <div className="flex flex-wrap gap-3" data-reveal="left" style={{ "--reveal-delay": "90ms" } as CSSProperties}>
              <Link href="/contact" className="button-primary">
                Book Strategy Call
              </Link>
              <Link href="/services" className="button-secondary">
                Review Service Stack
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
              <article className="surface-panel p-6 sm:p-7" data-tilt data-reveal="left" style={{ "--reveal-delay": "160ms" } as CSSProperties}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Where momentum usually breaks</p>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/46">
                    High-friction signals
                  </span>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/76 sm:grid-cols-2">
                  {pressurePoints.map((point) => (
                    <li key={point} className="flex gap-3 rounded-[1.1rem] border border-white/10 bg-white/5 px-4 py-4">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {metrics.slice(0, 3).map((metric, index) => (
                  <article
                    key={metric.label}
                    className="surface-panel p-5"
                    data-tilt
                    data-reveal="left"
                    style={{ "--reveal-delay": `${220 + index * 70}ms` } as CSSProperties}
                  >
                    <p className="font-display text-5xl uppercase leading-none text-white">{metric.value}</p>
                    <h2 className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">{metric.label}</h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/42">{metric.benchmark}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:pt-4">
            <HeroSignalBoard />

            <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="surface-panel overflow-hidden" data-tilt data-reveal="right" style={{ "--reveal-delay": "260ms" } as CSSProperties}>
                <div className="relative aspect-[1.42]">
                  <Image
                    src="/media/strategy-session.jpg"
                    alt="Agency team reviewing campaign strategy together"
                    fill
                    className="object-cover grayscale-[0.08] saturate-[0.8]"
                    sizes="(min-width: 1280px) 28vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/40 to-transparent" />
                </div>
                <div className="border-t border-white/10 px-5 py-5 sm:px-6">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-volt">Creative review cadence</p>
                  <p className="mt-3 text-sm leading-7 text-white/74">
                    Strategy, assets, and landing-page moves stay inside one weekly decision loop instead of drifting into separate workstreams.
                  </p>
                </div>
              </article>

              <div className="grid gap-4">
                <article className="surface-panel p-5 sm:p-6" data-tilt data-reveal="right" style={{ "--reveal-delay": "320ms" } as CSSProperties}>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white/42">Launch velocity</p>
                  <p className="mt-4 font-display text-6xl uppercase leading-none text-white">14D</p>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Average window to go from pressure audit to live campaign testing.
                  </p>
                </article>

                <article className="paper-panel p-5 sm:p-6" data-tilt data-reveal="right" style={{ "--reveal-delay": "380ms" } as CSSProperties}>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-signal">Signal room</p>
                  <p className="mt-3 font-display text-4xl uppercase leading-[0.9] text-ink">Weekly decision architecture.</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/74">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>Performance, page, and creative moves reviewed together.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>Clear readout before budget or launch pressure increases.</span>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/4 px-4 py-3"
          data-reveal="up"
          style={{ "--reveal-delay": "420ms" } as CSSProperties}
        >
          <div className="campaign-ticker">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="campaign-ticker-item text-white/64">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
