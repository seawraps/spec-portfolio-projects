import { testimonials } from "@/lib/data";
import { SectionIntro } from "@/components/ui/section-intro";

export function Testimonials() {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-7xl space-y-10 px-6">
        <SectionIntro
          eyebrow="Testimonials"
          title="Trusted by teams that are serious about growth"
          description="What client partners say after working with us on paid media, web strategy, and conversion optimization."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="surface-panel p-6">
              <blockquote className="text-base leading-8 text-slate-200">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-slate-300">
                  {testimonial.role}, {testimonial.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
