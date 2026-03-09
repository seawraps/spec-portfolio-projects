import Image from "next/image";
import Link from "next/link";

import { agency, metrics } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-grid opacity-75" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-radial-glow" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8">
        <div className="space-y-8">
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
            Independent Growth Agency
          </p>

          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We build demand systems that turn bold ideas into predictable revenue.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300">
              {agency.name} combines paid ads, brand strategy, CRO, and campaign creative to help modern teams scale
              without wasting spend.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="button-primary">
              Start a Growth Engagement
            </Link>
            <Link href="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.slice(0, 4).map((metric) => (
              <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <dt className="text-2xl font-bold text-white">{metric.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-slate-300">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="surface-panel overflow-hidden">
            <div className="border-b border-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Live Performance Snapshot</p>
              <p className="mt-2 text-sm text-slate-300">Cross-channel growth dashboard mockup for portfolio concept.</p>
            </div>
            <Image
              src="/media/performance-dashboard.svg"
              alt="Abstract marketing analytics dashboard with trend lines and campaign metrics"
              width={920}
              height={680}
              className="w-full"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -left-3 hidden max-w-xs rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur lg:block">
            <p className="text-xs uppercase tracking-[0.2em] text-mint">Creative velocity</p>
            <p className="mt-1 text-sm text-slate-100">18 ad variants tested in 14 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
