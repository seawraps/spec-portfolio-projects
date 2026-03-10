import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Press & Guests"
          title="What guests and editors say"
          description="A few notes from recent coverage and regular diners."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="surface-card rounded-3xl p-6"
            >
              <p className="text-lg leading-relaxed text-stone-800">“{testimonial.quote}”</p>
              <footer className="mt-6 border-t border-stone-100 pt-4 text-sm text-stone-600">
                <p className="font-semibold text-stone-800">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
