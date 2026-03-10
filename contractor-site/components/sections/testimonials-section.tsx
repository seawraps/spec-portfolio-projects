import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Client Reviews"
            title="Homeowners remember the communication as much as the finish work"
            description="That is intentional. These projects are personal, often disruptive, and almost always tied to how a family wants to live for years."
          />
          <div className="surface-card mt-8 rounded-[1.8rem] p-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Average homeowner sentiment
            </p>
            <p className="mt-3 font-display text-5xl leading-none text-[var(--color-brand)]">4.9 / 5</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Most reviews mention clear scheduling, respectful crews, and the way the finished
              rooms feel tailored instead of over-designed.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.customerName}
              className={`surface-card rounded-[2rem] p-6 ${
                index === testimonials.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <p className="text-[0.74rem] tracking-[0.22em] text-[var(--color-accent)]">★★★★★</p>
              <p className="mt-4 font-display text-3xl leading-snug text-[var(--color-brand)]">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 border-t border-[var(--color-border)] pt-4 text-sm leading-7 text-[var(--color-muted)]">
                <p className="font-semibold text-[var(--color-brand)]">{testimonial.customerName}</p>
                <p>
                  {testimonial.location} | {testimonial.project}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
