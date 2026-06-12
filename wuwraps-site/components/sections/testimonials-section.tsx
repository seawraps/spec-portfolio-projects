import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="halftone-red border-b-[4px] border-[var(--color-ink)] py-16 text-[var(--color-paper)] lg:py-24">
      <Container>
        <Reveal>
          <span className="comic-tag">Word on the Street</span>
          <h2 className="comic-display mt-5 max-w-4xl text-[2.7rem] leading-[0.92] text-[var(--color-paper)] sm:text-[3.8rem] lg:text-[4.4rem]">
            Trusted by thousands of drivers.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.customerName} delay={index * 80}>
              <figure className="comic-panel relative h-full bg-[var(--color-paper)] p-6 text-[var(--color-ink)]">
                <div
                  className="absolute -top-4 left-6 h-7 w-7 rotate-45 border-l-[3px] border-t-[3px] border-[var(--color-ink)] bg-[var(--color-paper)]"
                  aria-hidden="true"
                />
                <span className="comic-display text-5xl leading-none text-[var(--color-red)]">
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-[0.98rem] leading-7 text-[var(--color-ink)]">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="comic-heavy mt-5 border-t-[2px] border-dashed border-[var(--color-ink)] pt-4 text-[0.72rem] tracking-[0.06em] text-[var(--color-ink)]">
                  {testimonial.customerName}
                  <span className="block text-[0.62rem] tracking-[0.12em] text-[var(--color-blue)]">
                    {testimonial.location} · {testimonial.project}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
