import Link from "next/link";
import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { services } from "@/lib/data";

const [featuredService, strategyService, ...remainingServices] = services;
const launchService = remainingServices[remainingServices.length - 1];
const middleServices = remainingServices.slice(0, -1);

export function ServicesOverview() {
  return (
    <section className="section-spacing relative bg-paper text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-coal to-transparent opacity-12" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(19rem,0.46fr)] lg:items-end">
          <SectionIntro
            eyebrow="Core Services"
            title="An integrated campaign stack built to move markets, not just channels."
            description="Signal & Stone works like a compact strike team. Strategy sharpens the direction, creative raises the pressure, and performance systems make the wins visible fast."
            tone="light"
          />

          <div className="grid gap-4 sm:grid-cols-[1fr_auto] lg:grid-cols-1">
            <div className="paper-panel p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">How the stack works</p>
              <p className="mt-3 text-sm leading-7 text-ink/72">
                One pod owns the commercial direction, the creative pressure, and the performance readout. No fake handoffs,
                no dead space between strategy and launch.
              </p>
            </div>
            <Link href="/services" className="button-primary justify-self-start">
              View Full Service Stack
            </Link>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <article
            className="surface-panel lg:col-span-7"
            data-tilt
            data-reveal="up"
            style={{ "--reveal-delay": "0ms" } as CSSProperties}
          >
            <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,0.92fr)_minmax(17rem,0.42fr)] md:p-7">
              <div className="space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-volt">{featuredService.tagline}</p>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-[0.92] text-white sm:text-5xl">
                      {featuredService.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/56">
                    {featuredService.cadence}
                  </span>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/74">{featuredService.short}</p>

                <div className="grid gap-3 sm:grid-cols-3">
                  {featuredService.outcomes.map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.45rem] border border-white/10 bg-coal/76 p-5">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-white/42">Typical deliverables</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/74">
                  {featuredService.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-volt" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article
            className="paper-panel flex flex-col gap-5 lg:col-span-5 lg:p-7"
            data-tilt
            data-reveal="up"
            style={{ "--reveal-delay": "70ms" } as CSSProperties}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 p-6 pb-0 lg:p-0">
              <div className="max-w-xl">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-signal">{strategyService.tagline}</p>
                <h3 className="mt-3 font-display text-4xl uppercase leading-[0.92] text-ink sm:text-[3.35rem]">
                  {strategyService.name}
                </h3>
              </div>
              <span className="rounded-full border border-ink/10 bg-white/72 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/56">
                {strategyService.cadence}
              </span>
            </div>

            <div className="grid gap-4 p-6 pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,0.48fr)] lg:p-0">
              <div className="space-y-4">
                <p className="text-sm leading-7 text-ink/72">{strategyService.short}</p>
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {strategyService.outcomes.map((item) => (
                    <div key={item} className="rounded-[1.15rem] border border-ink/10 bg-white/66 px-4 py-4 text-sm leading-6 text-ink/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.3rem] border border-ink/10 bg-ink px-4 py-5 text-paper">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-paper/48">Core deliverables</p>
                <p className="mt-4 text-sm leading-7 text-paper/80">{strategyService.deliverables.slice(0, 3).join(" / ")}</p>
              </div>
            </div>
          </article>

          {middleServices.map((service, index) => {
            const isDarkCard = service.slug === "cro";

            return (
              <article
                key={service.slug}
                className={`${isDarkCard ? "surface-panel text-white" : "paper-panel text-ink"} flex flex-col gap-5 lg:col-span-4`}
                data-tilt
                data-reveal="up"
                style={{ "--reveal-delay": `${140 + index * 70}ms` } as CSSProperties}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 p-6 pb-0">
                  <div className="max-w-xl">
                    <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${isDarkCard ? "text-volt" : "text-signal"}`}>
                      {service.tagline}
                    </p>
                    <h3 className={`mt-3 font-display text-[2.65rem] uppercase leading-[0.94] ${isDarkCard ? "text-white" : "text-ink"}`}>
                      {service.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${
                      isDarkCard
                        ? "border border-white/10 bg-white/5 text-white/54"
                        : "border border-ink/10 bg-white/70 text-ink/52"
                    }`}
                  >
                    {service.cadence}
                  </span>
                </div>

                <div className="grid gap-4 p-6 pt-0">
                  <p className={`text-sm leading-7 ${isDarkCard ? "text-white/74" : "text-ink/72"}`}>{service.short}</p>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {service.outcomes.slice(0, 2).map((item) => (
                      <div
                        key={item}
                        className={`rounded-[1.15rem] border px-4 py-4 text-sm leading-6 ${
                          isDarkCard ? "border-white/10 bg-white/6 text-white/78" : "border-ink/10 bg-white/66 text-ink/78"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${isDarkCard ? "text-white/42" : "text-ink/44"}`}>
                    {service.deliverables.slice(0, 2).join(" / ")}
                  </p>
                </div>
              </article>
            );
          })}

          <article
            className="surface-panel lg:col-span-12"
            data-tilt
            data-reveal="up"
            style={{ "--reveal-delay": "350ms" } as CSSProperties}
          >
            <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,0.72fr)_minmax(0,0.28fr)] md:p-7 xl:grid-cols-[minmax(0,0.78fr)_minmax(18rem,0.22fr)]">
              <div className="space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-volt">{launchService.tagline}</p>
                    <h3 className="mt-3 font-display text-4xl uppercase leading-[0.9] text-white sm:text-[3.4rem]">
                      {launchService.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/56">
                    {launchService.cadence}
                  </span>
                </div>

                <p className="max-w-3xl text-sm leading-7 text-white/74">{launchService.short}</p>

                <div className="grid gap-3 lg:grid-cols-3">
                  {launchService.outcomes.map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/78">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.45rem] border border-white/10 bg-coal/78 p-5">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/42">Launch package</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/74">
                  {launchService.deliverables.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-6 rounded-full bg-signal" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
