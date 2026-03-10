import { Container } from "@/components/layout/container";
import { trustIndicators } from "@/lib/data";

export function TrustIndicators() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator) => (
            <li
              key={indicator.title}
              className="surface-card rounded-2xl p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-base text-[var(--color-brand)]">
                ✓
              </span>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-brand)]">
                {indicator.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{indicator.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
