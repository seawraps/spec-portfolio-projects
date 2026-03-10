import Link from "next/link";
import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { services } from "@/lib/data";

const serviceLayouts = [
  "md:col-span-6 xl:col-span-3 xl:row-span-2",
  "md:col-span-3 xl:col-span-3",
  "md:col-span-3 xl:col-span-2",
  "md:col-span-6 xl:col-span-4",
  "md:col-span-3 xl:col-span-2",
  "md:col-span-3 xl:col-span-4",
];

export function ServicesOverview() {
  return (
    <section className="section-spacing relative bg-paper text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-coal to-transparent opacity-12" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 xl:grid-cols-[0.34fr_0.66fr]">
        <div className="space-y-6 xl:sticky xl:top-28 xl:self-start" data-reveal="left">
          <SectionIntro
            eyebrow="Core Services"
            title="An integrated campaign stack built to move markets, not just channels."
            description="Signal & Stone works like a compact strike team. Strategy sharpens the direction, creative raises the pressure, and performance systems make the wins visible fast."
            tone="light"
          />
          <div className="paper-panel p-5" data-tilt>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-signal">How the stack works</p>
            <p className="mt-3 text-sm leading-7 text-ink/72">
              We do not hand strategy to one team, creative to another, and measurement to a third. The same pod owns the
              operating model from idea through launch pressure.
            </p>
          </div>
          <Link href="/services" className="button-primary">
            View Full Service Stack
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-6 xl:auto-rows-[minmax(13rem,auto)]">
          {services.map((service, index) => {
            const isDarkCard = index === 0 || index === services.length - 1;

            return (
              <article
                key={service.slug}
                className={`${serviceLayouts[index]} ${isDarkCard ? "surface-panel text-white" : "paper-panel text-ink"} flex h-full flex-col gap-5 p-6 md:p-7`}
                data-tilt
                data-reveal="right"
                style={{ "--reveal-delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${isDarkCard ? "text-volt" : "text-signal"}`}>
                      {service.tagline}
                    </p>
                    <h3 className={`mt-3 font-display text-4xl uppercase leading-none sm:text-5xl ${isDarkCard ? "text-white" : "text-ink"}`}>
                      {service.name}
                    </h3>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
                      isDarkCard
                        ? "border border-white/12 bg-white/5 text-white/56"
                        : "border border-ink/10 bg-white/60 text-ink/56"
                    }`}
                  >
                    {service.cadence}
                  </span>
                </div>

                <p className={`text-sm leading-7 ${isDarkCard ? "text-white/72" : "text-ink/70"}`}>{service.short}</p>

                <div className={`grid gap-3 ${index === 0 ? "sm:grid-cols-2" : ""}`}>
                  {service.outcomes.slice(0, index === 0 ? 3 : 2).map((item) => (
                    <div
                      key={item}
                      className={`rounded-[1.2rem] px-4 py-4 text-sm leading-6 ${
                        isDarkCard ? "border border-white/10 bg-white/6 text-white/76" : "border border-ink/10 bg-white/58 text-ink/76"
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
                  <p className={`mt-3 text-sm leading-7 ${isDarkCard ? "text-white/72" : "text-ink/74"}`}>
                    {service.deliverables.slice(0, isDarkCard ? 3 : 2).join(" / ")}
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
