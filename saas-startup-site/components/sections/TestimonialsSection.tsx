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
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Customer outcomes"
          title="Operators trust OrbitOps with workflows that leadership actually cares about."
          description="The strongest signal from customers is not just automation volume. It is the ability to move faster with clearer ownership and better reporting."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {testimonials.map((testimonial, index) => (
            <figure
              key={`${testimonial.name}-${testimonial.company}`}
              className={`surface-panel-muted flex h-full flex-col px-6 py-6 ${
                index === 0 ? "lg:col-span-6" : "lg:col-span-3"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                  {getInitials(testimonial.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-950">{testimonial.name}</span>
                  <span className="block text-xs text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </span>
                </span>
              </div>

              <blockquote className="mt-6 text-sm leading-7 text-slate-700">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 space-y-3 border-t border-slate-200 pt-5">
                <p className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900">
                  {testimonial.impact}
                </p>
                <p className="text-sm leading-6 text-slate-500">{testimonial.footprint}</p>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
