import Image from "next/image";
import Link from "next/link";

import { agency, metrics } from "@/lib/data";

const pressurePoints = [
  "Scattered spend with no clear revenue story",
  "Campaign ideas that stall in production",
  "Landing pages that explain but do not convert",
  "Reporting that does not help leadership decide",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-16 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-hero-grid opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow editorial-stripes" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-5 animate-rise">
            <p className="eyebrow-label">Independent Growth Agency</p>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/46">
              Paid media / CRO / landing pages / creative systems
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(3.4rem,8.8vw,7.1rem)] font-semibold uppercase leading-[0.88] text-white">
              Pipeline-first creative. Performance-led execution.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              {agency.name} combines performance strategy, campaign creative, and conversion systems for teams that need
              sharper growth pressure without operational chaos.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-rise-delay">
            <Link href="/contact" className="button-primary">
              Book Strategy Call
            </Link>
            <Link href="/services" className="button-secondary">
              Review Service Stack
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="surface-panel p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/48">What we usually fix</p>
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
              {metrics.slice(0, 3).map((metric) => (
                <article key={metric.label} className="surface-panel p-5">
                  <p className="font-display text-4xl font-semibold uppercase leading-none text-white">{metric.value}</p>
                  <h2 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">{metric.label}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/44">{metric.benchmark}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:pt-10">
          <div className="surface-panel animate-rise overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/42">Signal Room / Week 32</p>
                <p className="mt-2 text-sm font-medium text-white/76">Performance command center mockup</p>
              </div>
              <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/62">
                Demo-safe visual
              </span>
            </div>
            <Image
              src="/media/performance-dashboard.svg"
              alt="Campaign performance dashboard with creative testing, funnel, and pipeline metrics"
              width={920}
              height={680}
              className="w-full"
              priority
            />
          </div>

          <div className="absolute -bottom-10 left-0 z-10 hidden w-[52%] max-w-xs overflow-hidden rounded-[1.4rem] border border-white/16 bg-coal shadow-[0_24px_50px_-32px_rgba(0,0,0,0.85)] lg:block">
            <Image
              src="/media/strategy-session.jpg"
              alt="Agency team working through campaign strategy at a table"
              width={900}
              height={1200}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="border-t border-white/10 px-4 py-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">Creative review cadence</p>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Strategy sessions stay close to execution so campaign direction, page updates, and testing move in one loop.
              </p>
            </div>
          </div>

          <div className="absolute -right-4 top-0 hidden max-w-[16rem] rounded-[1.3rem] border border-white/12 bg-white/6 p-5 backdrop-blur xl:block">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/48">Campaign velocity</p>
            <p className="mt-3 font-display text-5xl font-semibold uppercase leading-none text-white">18</p>
            <p className="mt-2 text-sm font-medium text-white">Ad variants shipped</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/44">In the first 14 days of launch</p>
          </div>
        </div>
      </div>
    </section>
  );
}
