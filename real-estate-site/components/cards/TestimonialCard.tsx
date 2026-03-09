import type { Testimonial } from "@/lib/data";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="soft-card h-full rounded-[28px] p-6">
      <p
        className="font-display text-6xl leading-none text-[var(--color-gold)]"
        aria-hidden="true"
      >
        &ldquo;
      </p>
      <p className="mt-4 text-base leading-8 text-[var(--color-ink)]">
        {testimonial.quote}
      </p>
      <div className="mt-6 border-t border-[var(--color-line)] pt-5">
        <p className="font-semibold text-[var(--color-ink)]">{testimonial.name}</p>
        <p className="mt-1 text-sm text-[var(--color-muted)]">{testimonial.role}</p>
      </div>
    </article>
  );
}
