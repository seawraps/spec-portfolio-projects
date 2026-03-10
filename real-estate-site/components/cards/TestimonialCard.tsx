import type { Testimonial } from "@/lib/data";

type TestimonialCardProps = {
  testimonial: Testimonial;
  featured?: boolean;
};

export function TestimonialCard({
  testimonial,
  featured = false,
}: TestimonialCardProps) {
  if (featured) {
    return (
      <article className="reveal-up delay-2 h-full rounded-[30px] border border-white/10 bg-white/8 p-7 text-white shadow-[0_30px_72px_-44px_rgba(12,17,24,0.82)] sm:p-8">
        <p
          className="font-display text-6xl leading-none text-[var(--color-bronze-soft)]"
          aria-hidden="true"
        >
          &ldquo;
        </p>
        <p className="mt-4 text-base leading-8 text-white">
          {testimonial.quote}
        </p>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="mt-1 text-sm text-white/66">{testimonial.role}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="soft-card reveal-up delay-2 h-full rounded-[30px] p-7 sm:p-8">
      <p className="font-display text-6xl leading-none text-[var(--color-bronze)]" aria-hidden="true">
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
