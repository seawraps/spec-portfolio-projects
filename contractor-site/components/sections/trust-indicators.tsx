import { Container } from "@/components/layout/container";
import { trustIndicators } from "@/lib/data";

export function TrustIndicators() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator) => (
            <li
              key={indicator.title}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-lg text-[var(--color-brand)]">
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
