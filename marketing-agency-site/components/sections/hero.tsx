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
    <section className="relative overflow-hidden border-b border-white/10 pb-18 pt-12 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-grid opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow editorial-stripes" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div className="space-y-8">
            <div className="space-y-5" data-reveal="left">
              <p className="eyebrow-label">Independent Growth Agency</p>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/44">
                Paid media / CRO / landing pages / creative systems
              </p>
              <h1 className="max-w-5xl font-display text-[clamp(4.4rem,11vw,9rem)] uppercase leading-[0.82] text-white">
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

            <div className="grid gap-5 lg:grid-cols-[1.06fr_0.94fr]">
              <div className="surface-panel p-6" data-tilt data-reveal="left" style={{ "--reveal-delay": "160ms" } as CSSProperties}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Where momentum usually breaks</p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/74 sm:grid-cols-2">
                  {pressurePoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/42">{metric.benchmark}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[44rem] xl:min-h-[48rem]">
            <div className="absolute inset-x-4 bottom-0 top-16 hidden overflow-hidden rounded-[2rem] border border-white/10 xl:block">
              <Image
                src="/media/strategy-session.jpg"
                alt="Agency team reviewing campaign strategy together"
                fill
                className="object-cover grayscale-[0.18] saturate-[0.72]"
                sizes="(min-width: 1280px) 40vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/42 to-transparent" />
            </div>

            <div className="relative z-10 pt-8 xl:pl-10">
              <HeroSignalBoard />
            </div>

            <div
              className="absolute left-0 top-18 hidden max-w-[15rem] rounded-[1.4rem] border border-white/14 bg-coal/86 p-5 shadow-[0_20px_48px_-32px_rgba(0,0,0,0.9)] lg:block"
              data-reveal="right"
              style={{ "--reveal-delay": "220ms" } as CSSProperties}
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-volt">Creative review cadence</p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Strategy, assets, and landing-page moves stay in one weekly decision loop.
              </p>
            </div>

            <div
              className="absolute bottom-8 right-0 hidden max-w-[16rem] rounded-[1.4rem] border border-white/14 bg-white/8 p-5 backdrop-blur xl:block"
              data-reveal="right"
              style={{ "--reveal-delay": "300ms" } as CSSProperties}
            >
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/40">Launch velocity</p>
              <p className="mt-3 font-display text-6xl uppercase leading-none text-white">14D</p>
              <p className="mt-2 text-sm text-white/72">Average window to go from pressure audit to live campaign testing.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-full border border-white/10 bg-white/4 px-4 py-3" data-reveal="up" style={{ "--reveal-delay": "320ms" } as CSSProperties}>
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
