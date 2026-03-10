import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
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
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Customer outcomes"
            title="The strongest signal is not automation volume. It is operational confidence."
            description="These teams use OrbitOps to tighten ownership, reduce queue chaos, and give leadership a much cleaner picture of what is actually happening across mission-critical workflows."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.name}-${testimonial.company}`}
              className={`${
                index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3"
              }`}
              delay={index * 0.06}
            >
              <figure className="surface-panel-dark flex h-full flex-col px-6 py-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-sm font-semibold text-white">
                    {getInitials(testimonial.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{testimonial.name}</span>
                    <span className="block text-xs text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </div>

                <blockquote className="mt-6 text-sm leading-7 text-slate-200">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  <p className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white">
                    {testimonial.impact}
                  </p>
                  <p className="text-sm leading-6 text-slate-400">{testimonial.footprint}</p>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
