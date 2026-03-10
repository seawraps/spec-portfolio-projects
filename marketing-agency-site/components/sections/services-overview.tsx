import Link from "next/link";
import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { services } from "@/lib/data";

const serviceLayouts = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function ServicesOverview() {
  return (
    <section className="section-spacing relative bg-paper text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-coal to-transparent opacity-12" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl space-y-8 px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(18rem,0.48fr)] lg:items-end">
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
          {services.map((service, index) => {
            const isDarkCard = index === 0 || index === 5;

            return (
              <article
                key={service.slug}
                className={`${serviceLayouts[index]} ${
                  isDarkCard ? "surface-panel text-white" : "paper-panel text-ink"
                } flex h-full flex-col gap-5 p-6 md:p-7`}
                data-tilt
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${isDarkCard ? "text-volt" : "text-signal"}`}>
                      {service.tagline}
                    </p>
                    <h3 className={`mt-3 font-display text-4xl uppercase leading-[0.92] sm:text-5xl ${isDarkCard ? "text-white" : "text-ink"}`}>
                      {service.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
                      isDarkCard
                        ? "border border-white/12 bg-white/5 text-white/56"
                        : "border border-ink/10 bg-white/72 text-ink/56"
                    }`}
                  >
                    {service.cadence}
                  </span>
                </div>

                <p className={`max-w-2xl text-sm leading-7 ${isDarkCard ? "text-white/74" : "text-ink/72"}`}>{service.short}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {service.outcomes.slice(0, 2).map((item) => (
                    <div
                      key={item}
                      className={`rounded-[1.2rem] px-4 py-4 text-sm leading-6 ${
                        isDarkCard ? "border border-white/10 bg-white/6 text-white/78" : "border border-ink/10 bg-white/64 text-ink/78"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className={`mt-auto border-t pt-4 ${isDarkCard ? "border-white/10" : "border-ink/10"}`}>
                  <p className={`text-[0.64rem] font-semibold uppercase tracking-[0.2em] ${isDarkCard ? "text-white/42" : "text-ink/46"}`}>
                    Typical deliverables
                  </p>
                  <p className={`mt-3 text-sm leading-7 ${isDarkCard ? "text-white/72" : "text-ink/76"}`}>
                    {service.deliverables.slice(0, 3).join(" / ")}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
