import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

type TestimonialsSectionProps = {
  title?: string;
  description?: string;
};

export function TestimonialsSection({
  title = "Client Testimonials",
  description = "The strongest referral businesses are built on repeat trust. These illustrative testimonials reflect the tone of feedback the agency aims to earn.",
}: TestimonialsSectionProps) {
  return (
    <section className="py-12 md:py-16 lg:py-24" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          id="testimonials-heading"
          align="center"
          eyebrow="Testimonials"
          title={title}
          description={description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
