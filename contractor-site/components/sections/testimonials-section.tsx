import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [leadTestimonial, ...supportingTestimonials] = testimonials;

  return (
    <section id="reviews" className="py-16 md:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Client Perspective"
            title="The most repeated compliment is that the process felt calm."
            description="That matters because these are lived-in homes, not staged photo sets. The goal is a strong result with cleaner communication, fewer surprises, and finishes that continue to feel right after the reveal day."
          />

          <div className="image-frame relative mt-8 min-h-[320px] overflow-hidden rounded-[1rem]">
            <Image
              src="/images/bathroom-vanity.jpg"
              alt="A refined bathroom vanity with warm stone, oak tones, and brass fixtures."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 34vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,35,45,0.04),rgba(23,35,45,0.36))]" />
          </div>
        </Reveal>

        <div className="architectural-grid py-6 lg:py-8">
          <Reveal>
            <blockquote className="border-l border-[color:rgba(31,35,39,0.14)] pl-5 sm:pl-6">
              <p className="text-[0.72rem] tracking-[0.28em] text-[var(--color-accent)]">★★★★★</p>
              <p className="mt-4 max-w-4xl font-display text-[2.5rem] leading-[0.96] text-[var(--color-brand)] sm:text-[3.4rem]">
                “{leadTestimonial.quote}”
              </p>
              <footer className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                <p className="font-semibold text-[var(--color-brand)]">{leadTestimonial.customerName}</p>
                <p>
                  {leadTestimonial.location} | {leadTestimonial.project}
                </p>
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_18rem]">
            <div className="line-list border-y border-[color:rgba(31,35,39,0.12)]">
              {supportingTestimonials.map((testimonial, index) => (
                <Reveal key={testimonial.customerName} delay={index * 60}>
                  <blockquote className="py-5">
                    <p className="text-[0.72rem] tracking-[0.28em] text-[var(--color-accent)]">★★★★★</p>
                    <p className="mt-3 max-w-3xl font-display text-[1.9rem] leading-[0.98] text-[var(--color-brand)] sm:text-[2.35rem]">
                      “{testimonial.quote}”
                    </p>
                    <footer className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      <p className="font-semibold text-[var(--color-brand)]">{testimonial.customerName}</p>
                      <p>
                        {testimonial.location} | {testimonial.project}
                      </p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="h-full bg-[var(--color-brand-deep)] p-5 text-[var(--color-surface)] sm:p-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                  Average rating
                </p>
                <p className="mt-4 font-display text-[3.4rem] leading-none">4.9 / 5</p>
                <p className="mt-4 text-sm leading-7 text-[color:rgba(247,242,234,0.82)] sm:text-base">
                  Reviews consistently mention respectful crews, dependable updates, and a finish
                  level that feels settled into the architecture of the home.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
