import { Container } from "@/components/layout/container";
import { trustIndicators } from "@/lib/data";

export function TrustIndicators() {
  return (
    <section className="pb-12 md:pb-16 lg:pb-20">
      <Container>
        <div className="surface-card rounded-[2rem] p-6 sm:p-8 lg:rounded-[2.4rem]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Built on Trust
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-[var(--color-brand)] sm:text-[3.25rem]">
                The kind of renovation experience homeowners actually talk about.
              </h2>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {trustIndicators.map((indicator, index) => (
                <li
                  key={indicator.title}
                  className="rounded-[1.6rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.72)] p-5"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-brand)]">
                    {indicator.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {indicator.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
