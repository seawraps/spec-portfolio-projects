import type { CSSProperties } from "react";

import { SectionIntro } from "@/components/ui/section-intro";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="section-spacing border-y border-white/10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.38fr_0.62fr]">
        <SectionIntro
          eyebrow="Client Signal"
          title="Trusted by teams that need the agency to think like operators, not vendors."
          description="The common thread across these quotes is not style alone. It is commercial judgment, clear calls, and execution that stays tied to the real business problem."
        />

        <div className="grid gap-5">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`surface-panel p-6 sm:p-8 ${
                index === 1 ? "lg:ml-12" : index === 2 ? "lg:mr-12" : ""
              }`}
              data-tilt
              data-reveal="right"
              style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            >
              <blockquote className="font-display text-[clamp(2.8rem,5vw,4.5rem)] uppercase leading-[0.9] text-white">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/64">
                <span className="font-semibold uppercase tracking-[0.12em] text-white">{testimonial.name}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/28" />
                <span>
                  {testimonial.role}, {testimonial.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
