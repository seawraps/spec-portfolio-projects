import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams trust OrbitOps to run mission-critical workflows"
          description="Operators across revenue, success, and support teams rely on OrbitOps to maintain speed without sacrificing quality."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={`${testimonial.name}-${testimonial.company}`}
              className="surface-card-muted flex h-full flex-col p-6"
            >
              <blockquote className="text-sm leading-6 text-slate-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {getInitials(testimonial.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">{testimonial.name}</span>
                  <span className="block text-xs text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
