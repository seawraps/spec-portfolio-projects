import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [lead, ...rest] = testimonials;

  return (
    <section className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Client Notes"
          title="Testimonials that feel closer to a recommendation than a sales page quote wall."
          description="The names and brands are fictionalized for the demo, but the tone, detail, and outcomes are modeled on real speaking and advisory feedback."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="ink-panel p-8 sm:p-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">{lead.outcome}</p>
            <p className="text-6xl leading-none text-gold">&quot;</p>
            <p className="mt-6 max-w-3xl text-2xl leading-9 text-white/88 sm:text-[2rem] sm:leading-10">
              {lead.quote}
            </p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-xl text-white">{lead.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/62">
                {lead.role}, {lead.company}
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            {rest.map((testimonial) => (
              <article key={testimonial.name} className="paper-panel sequence-card p-7 sm:p-8">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-plum">
                  {testimonial.outcome}
                </p>
                <p className="text-5xl leading-none text-plum">&quot;</p>
                <p className="mt-5 text-base leading-8 text-mocha/92">{testimonial.quote}</p>
                <div className="mt-6 border-t border-ink/8 pt-4">
                  <p className="text-lg text-ink">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-mocha/78">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
