import { testimonials } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function Testimonials() {
  return (
    <section className="section-spacing border-y border-white/10">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.4fr_0.6fr]">
        <SectionIntro
          eyebrow="Client Signal"
          title="Trusted by teams that need an agency to think like operators."
          description="The common thread in these quotes is not aesthetics. It is clarity, commercial judgment, and execution that stays attached to the business problem."
        />

        <div className="grid gap-5">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className={`surface-panel p-6 sm:p-8 ${index === 1 ? "lg:ml-12" : index === 2 ? "lg:mr-12" : ""}`}
            >
              <blockquote className="font-display text-3xl font-semibold uppercase leading-[0.96] text-white sm:text-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/64">
                <span className="font-semibold uppercase tracking-[0.1em] text-white">{testimonial.name}</span>
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
