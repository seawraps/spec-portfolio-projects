import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--color-brand)] py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Reviews"
          title="Trusted by homeowners across Nashville"
          description="Our clients value clear communication, on-time delivery, and craftsmanship that raises the standard of their home."
          className="[&_h2]:text-white [&_p]:text-[color:rgba(255,255,255,0.8)]"
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.customerName}
              className="rounded-2xl border border-[color:rgba(255,255,255,0.18)] bg-[color:rgba(255,255,255,0.05)] p-6"
            >
              <p className="text-sm tracking-[0.2em] text-[var(--color-accent-soft)]">★★★★★</p>
              <p className="mt-4 text-sm leading-7 text-[color:rgba(255,255,255,0.9)] sm:text-base">
                “{testimonial.quote}”
              </p>
              <footer className="mt-5 border-t border-[color:rgba(255,255,255,0.16)] pt-4 text-sm text-[color:rgba(255,255,255,0.8)]">
                <p className="font-semibold text-white">{testimonial.customerName}</p>
                <p>
                  {testimonial.location} · {testimonial.project}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
