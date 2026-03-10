import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

const rolloutSteps = [
  "Map the one workflow cluster creating the most operational drag.",
  "Design the production rollout with approvals, ownership, and reporting attached.",
  "Launch fast, then expand the control plane into adjacent teams.",
];

export function FinalCtaSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="surface-panel-dark animated-grid relative overflow-hidden px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
            <div
              className="pointer-events-none absolute -right-10 top-0 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-14 bottom-0 h-56 w-56 rounded-full bg-emerald-300/14 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
              <div>
                <p className="data-label text-sky-200">Ready to modernize operations?</p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.07em] text-white sm:text-4xl lg:text-[3.35rem] lg:leading-[0.94]">
                  Put one production workflow under control, then scale from a stronger system.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                  We work backward from the highest-friction operating lane, design the rollout
                  path, and make sure governance, reporting, and change ownership are built in from
                  day one.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="light">
                    Request a strategy session
                  </ButtonLink>
                  <ButtonLink href="/features" variant="inverse">
                    Review core capabilities
                  </ButtonLink>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {rolloutSteps.map((step, index) => (
                  <article
                    key={step}
                    className="rounded-[1.55rem] border border-white/10 bg-white/5 px-5 py-5"
                  >
                    <p className="data-label text-slate-400">Step 0{index + 1}</p>
                    <p className="mt-4 text-sm leading-6 text-slate-200">{step}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
