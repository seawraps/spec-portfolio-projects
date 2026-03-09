import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Press & Guests"
          title="What guests and editors say"
          description="A few notes from recent coverage and regular diners."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
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
