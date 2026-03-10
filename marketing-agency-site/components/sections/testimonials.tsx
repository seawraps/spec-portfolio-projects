import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [featured, ...supporting] = testimonials;

  return (
    <section className="section-spacing border-y border-white/10">
      <div className="mx-auto w-full max-w-7xl space-y-8 px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(18rem,0.48fr)] lg:items-end">
          <SectionIntro
            eyebrow="Client Signal"
            title="Trusted by teams that need the agency to think like operators, not vendors."
            description="The common thread across these quotes is commercial judgment, clear calls, and execution that stays tied to the real business problem."
          />

          <div className="surface-panel p-5 sm:p-6" data-tilt data-reveal="right">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-volt">What clients keep calling out</p>
            <p className="mt-3 text-sm leading-7 text-white/72">
              Strategic sharpness, faster decision cycles, and reporting that makes the next budget move easier to defend.
            </p>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <figure className="surface-panel p-6 sm:p-8 lg:p-10" data-tilt data-reveal="left">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-volt">Featured signal</p>
            <blockquote className="mt-5 max-w-4xl font-display text-[clamp(3.2rem,6vw,5.6rem)] uppercase leading-[0.88] text-white">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/66">
              <span className="font-semibold uppercase tracking-[0.12em] text-white">{featured.name}</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/28" />
              <span>
                {featured.role}, {featured.company}
              </span>
            </figcaption>
          </figure>

          <div className="grid gap-5">
            {supporting.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={`${index === 0 ? "paper-panel text-ink" : "surface-panel text-white"} p-6 sm:p-7`}
                data-tilt
                data-reveal="right"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <blockquote
                  className={`font-display text-[clamp(2.4rem,4.2vw,3.8rem)] uppercase leading-[0.9] ${
                    index === 0 ? "text-ink" : "text-white"
                  }`}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption
                  className={`mt-6 flex flex-wrap items-center gap-3 border-t pt-5 text-sm ${
                    index === 0 ? "border-ink/10 text-ink/64" : "border-white/10 text-white/64"
                  }`}
                >
                  <span className={`font-semibold uppercase tracking-[0.12em] ${index === 0 ? "text-ink" : "text-white"}`}>
                    {testimonial.name}
                  </span>
                  <span aria-hidden="true" className={`h-1 w-1 rounded-full ${index === 0 ? "bg-ink/24" : "bg-white/28"}`} />
                  <span>
                    {testimonial.role}, {testimonial.company}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
