import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection() {
  return (
    <section className="section-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Press & Guests"
          title="A room people describe before they describe the food"
          description="A few notes from recent coverage and repeat diners who return for both the menu and the mood."
          theme="dark"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-[2rem] border border-[rgba(255,233,204,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7"
            >
              <p className="font-display text-3xl leading-tight text-[#f8efe4]">
                “{testimonial.quote}”
              </p>
              <footer className="mt-8 border-t border-[rgba(255,233,204,0.12)] pt-5 text-sm uppercase tracking-[0.16em] text-[#cda672]">
                <p className="text-[#f1ddbf]">{testimonial.author}</p>
                <p className="mt-2 text-[#cdb8a3]">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
