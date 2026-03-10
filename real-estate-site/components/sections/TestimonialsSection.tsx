import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

const [leadTestimonial, ...supportingTestimonials] = testimonials;

type TestimonialsSectionProps = {
  title?: string;
  description?: string;
};

export function TestimonialsSection({
  title = "Clients remember how the process felt, not just the final number.",
  description = "These illustrative testimonials reflect the kind of feedback a trust-based boutique practice aims to earn: calm execution, honest advice, and fewer unnecessary surprises.",
}: TestimonialsSectionProps) {
  return (
    <section
      className="py-12 md:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="dark-panel rounded-[40px] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-[0.94fr_0.66fr] xl:items-end">
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Client Perspective"
              title={title}
              description={description}
              inverse
              className="reveal-up"
            />
            <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 reveal-up delay-1 sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-soft)]">
                What clients are really reacting to
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                The strongest feedback is usually about tone: fewer surprises,
                clearer reasoning, and a process that felt calm even when the
                stakes were not.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.12fr_0.88fr_0.88fr]">
            <TestimonialCard testimonial={leadTestimonial} featured />
            {supportingTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
