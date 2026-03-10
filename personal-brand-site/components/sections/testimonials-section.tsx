import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Believable praise from the kind of clients this brand is designed to attract."
          description="The copy is fictionalized, but the structure, tone, and outcomes are modeled on real advisory and speaking feedback."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="dark-panel h-full p-8">
              <p className="text-4xl leading-none text-clay">&quot;</p>
              <p className="mt-5 text-base leading-8 text-white/82">{testimonial.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-lg text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/62">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
