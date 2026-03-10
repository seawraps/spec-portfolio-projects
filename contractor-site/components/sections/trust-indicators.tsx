import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { trustIndicators } from "@/lib/data";

export function TrustIndicators() {
  return (
    <section id="trust" className="pb-16 md:pb-20 lg:pb-24">
      <Container>
        <Reveal className="surface-card rounded-[2.6rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.76fr_1.24fr] xl:items-start">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Built on trust
              </p>
              <h2 className="mt-4 max-w-xl font-display text-[2.7rem] leading-[1.02] text-[var(--color-brand)] sm:text-[3.5rem]">
                The kind of renovation experience homeowners reference years later.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[var(--color-muted)]">
                Premium results do not feel premium if the process is chaotic. We keep the work
                calm, documented, and respectful so the finished rooms can actually be enjoyed.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {trustIndicators.map((indicator, index) => (
                <li key={indicator.title}>
                  <Reveal delay={index * 70} className="surface-card rounded-[1.7rem] p-5">
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-[var(--color-brand)]">
                      {indicator.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {indicator.detail}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
