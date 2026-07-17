import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--fog-deep)] py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="eyebrow text-[var(--slate)]">Word travels</p>
          <h2 className="display mt-5 max-w-3xl text-[2.4rem] text-[var(--ink)] sm:text-[3.2rem]">
            Ask around. They will send you to Mark.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.customerName} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-2xl bg-[var(--bone)] p-7">
                <blockquote className="flex-1 text-[0.98rem] leading-8 text-[var(--ink)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--line-lighter)] pt-4">
                  <p className="label text-[0.7rem] text-[var(--ink)]">
                    {testimonial.customerName}
                  </p>
                  <p className="mt-1 text-sm text-[var(--slate)]">{testimonial.context}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
