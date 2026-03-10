import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

type TestimonialsSectionProps = {
  title?: string;
  description?: string;
};

export function TestimonialsSection({
  title = "Clients remember how the process felt, not just the final number.",
  description = "These illustrative testimonials reflect the kind of feedback a trust-based boutique practice aims to earn: calm execution, honest advice, and fewer unnecessary surprises.",
}: TestimonialsSectionProps) {
  return (
    <section className="py-14 md:py-18 lg:py-24" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client Perspective"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3 reveal-up delay-1">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
