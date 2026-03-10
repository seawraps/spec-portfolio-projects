import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <Container>
        <div className="surface-card-inverse relative overflow-hidden px-6 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
          <div
            className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-cyan-400/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-blue-400/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              Ready to modernize operations?
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Launch your first production workflow in days, not quarters.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Meet with our team to map your current operating model, identify fast wins, and
              design a rollout plan tailored to your process complexity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light">
                Request a Strategy Call
              </ButtonLink>
              <ButtonLink href="/about" variant="inverse">
                Learn About OrbitOps
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
