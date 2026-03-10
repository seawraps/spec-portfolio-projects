import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsSection() {
  const [leadQuote, supportingQuote] = testimonials;

  return (
    <section className="section-dark py-18 md:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Press & Guests"
            title="A room people describe before they describe the food"
            description="The most memorable hospitality brands make the mood legible. These notes read like that kind of response."
            theme="dark"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={80}>
            <blockquote className="rounded-[2.4rem] border border-[rgba(255,233,204,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-8 lg:p-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#d8af79]">
                Lead Quote
              </p>
              <p className="mt-6 font-display text-[2.8rem] leading-[0.94] tracking-[-0.03em] text-[#f8efe4] lg:text-[4rem]">
                “{leadQuote.quote}”
              </p>
              <footer className="mt-10 border-t border-[rgba(255,233,204,0.12)] pt-5 text-sm uppercase tracking-[0.18em]">
                <p className="text-[#f1ddbf]">{leadQuote.author}</p>
                <p className="mt-2 text-[#cdb8a3]">{leadQuote.role}</p>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={170} className="grid gap-6">
            <blockquote className="rounded-[2rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-7">
              <p className="font-display text-[2.1rem] leading-[0.98] text-[#f8efe4]">
                “{supportingQuote.quote}”
              </p>
              <footer className="mt-8 border-t border-[rgba(255,233,204,0.12)] pt-5 text-sm uppercase tracking-[0.16em]">
                <p className="text-[#f1ddbf]">{supportingQuote.author}</p>
                <p className="mt-2 text-[#cdb8a3]">{supportingQuote.role}</p>
              </footer>
            </blockquote>

            <div className="rounded-[2rem] border border-[rgba(255,233,204,0.12)] bg-[rgba(255,255,255,0.03)] p-7">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d8af79]">
                Brand Read
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#d0bea8]">
                Astera stands apart because the interface is serving the feeling of the restaurant,
                not just presenting information about it. That difference is where hospitality
                identity starts to become memorable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
