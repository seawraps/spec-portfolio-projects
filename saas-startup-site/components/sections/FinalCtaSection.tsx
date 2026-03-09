import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 sm:px-10 sm:py-12">
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
              <ButtonLink href="/contact" className="bg-white text-slate-900 hover:bg-slate-100">
                Request a Strategy Call
              </ButtonLink>
              <ButtonLink
                href="/about"
                variant="ghost"
                className="border border-slate-600 text-slate-100 hover:bg-slate-800"
              >
                Learn About OrbitOps
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
