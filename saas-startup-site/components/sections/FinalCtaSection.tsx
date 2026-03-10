import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

const rolloutSteps = [
  "Map the workflows creating the most operational drag",
  "Design a phased rollout around one production queue",
  "Launch with reporting, ownership, and governance in place",
];

export function FinalCtaSection() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <Container>
        <div className="surface-panel-dark surface-grid relative overflow-hidden px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div
            className="pointer-events-none absolute -right-10 top-0 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-14 bottom-0 h-56 w-56 rounded-full bg-emerald-300/14 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid gap-10 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
            <div>
              <p className="data-label text-sky-300">Ready to modernize operations?</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.2rem]">
                Launch a production workflow in days, then expand from a stronger foundation.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                We work with operators to identify the highest-impact workflow cluster, design the
                rollout path, and build an implementation plan leadership can support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="light">
                  Request a strategy session
                </ButtonLink>
                <ButtonLink href="/about" variant="inverse">
                  Learn about OrbitOps
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {rolloutSteps.map((step, index) => (
                <article key={step} className="rounded-[1.55rem] border border-white/10 bg-white/4 px-5 py-5">
                  <p className="data-label text-slate-400">Step 0{index + 1}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-200">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
