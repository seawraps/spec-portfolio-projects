import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function CtaGridSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="soft-card rounded-[34px] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Home Valuation CTA
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none text-[var(--color-ink)]">
              Curious what your home could command?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              Request a private valuation session to review timing, pricing
              range, and the practical improvements that may strengthen your
              launch.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact">Request A Valuation</ButtonLink>
            </div>
          </article>

          <article className="soft-card rounded-[34px] bg-[var(--color-forest)] p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Consultation CTA
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none text-white">
              Planning a move within the next year?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/74">
              Schedule a consultation to talk through neighborhoods, timing,
              valuation questions, or the kind of representation that would
              actually support your goals.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" variant="light">
                Book A Consultation
              </ButtonLink>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
