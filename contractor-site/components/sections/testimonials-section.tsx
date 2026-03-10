import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [leadTestimonial, ...supportingTestimonials] = testimonials;

  return (
    <section id="reviews" className="py-18 md:py-22 lg:py-26">
      <Container className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
        <Reveal>
          <div className="surface-card-strong rounded-[2.6rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Client Reviews"
              title="Homeowners remember the communication as much as the craftsmanship"
              description="That balance is intentional. These are personal, lived-in projects, so our standard is to make the process feel considered as well as the finished work."
            />

            <blockquote className="mt-8 rounded-[2rem] bg-[var(--color-surface-strong)] p-6 sm:p-7">
              <p className="text-[0.74rem] tracking-[0.24em] text-[var(--color-accent)]">★★★★★</p>
              <p className="mt-4 font-display text-[2rem] leading-[1.12] text-[var(--color-brand)] sm:text-[2.75rem]">
                “{leadTestimonial.quote}”
              </p>
              <footer className="mt-6 border-t border-[var(--color-border)] pt-4 text-sm leading-7 text-[var(--color-muted)]">
                <p className="font-semibold text-[var(--color-brand)]">
                  {leadTestimonial.customerName}
                </p>
                <p>
                  {leadTestimonial.location} | {leadTestimonial.project}
                </p>
              </footer>
            </blockquote>

            <div className="mt-6 rounded-[1.8rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.72)] p-5">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Average homeowner sentiment
              </p>
              <p className="mt-3 font-display text-5xl leading-none text-[var(--color-brand)]">
                4.9 / 5
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                The reviews consistently mention clear updates, respectful crews, and rooms that
                feel warmer and more intentional when the work is finished.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {supportingTestimonials.map((testimonial, index) => (
            <Reveal key={testimonial.customerName} delay={index * 80}>
              <blockquote className="surface-card rounded-[2.1rem] p-5 sm:p-6">
                <p className="text-[0.74rem] tracking-[0.24em] text-[var(--color-accent)]">
                  ★★★★★
                </p>
                <p className="mt-4 font-display text-[1.75rem] leading-[1.14] text-[var(--color-brand)] sm:text-[2.25rem]">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-6 border-t border-[var(--color-border)] pt-4 text-sm leading-7 text-[var(--color-muted)]">
                  <p className="font-semibold text-[var(--color-brand)]">
                    {testimonial.customerName}
                  </p>
                  <p>
                    {testimonial.location} | {testimonial.project}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}

          <Reveal delay={160}>
            <div className="rounded-[2.1rem] bg-[linear-gradient(160deg,var(--color-brand-deep),var(--color-brand))] p-6 text-[var(--color-surface)] shadow-[0_34px_90px_-54px_rgba(18,29,40,0.88)] sm:p-7">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-soft)]">
                Why referrals happen
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:rgba(255,250,243,0.82)] sm:text-base">
                Families keep sending neighbors because the work feels elevated without the process
                becoming theatrical. That is the standard.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
