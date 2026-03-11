import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/layout/container";
import { company, trustIndicators } from "@/lib/data";

const planningFacts = [
  "Scheduling clarity from discovery through handoff",
  "Licensed and insured local design-build oversight",
  "Protected occupied-home workflow with daily cleanup",
  "Project types centered on kitchens, baths, interiors, and millwork",
];

export function TrustIndicators() {
  return (
    <section id="trust" className="pb-16 md:pb-20 lg:pb-24">
      <Container>
        <Reveal>
          <div className="architectural-grid grid gap-8 py-8 lg:grid-cols-[0.74fr_1.26fr] lg:gap-10 lg:py-10">
            <div className="lg:pr-8">
              <p className="architectural-eyebrow">Jobsite Standards</p>
              <h2 className="mt-5 max-w-lg font-display text-[2.6rem] leading-[0.96] text-[var(--color-brand)] sm:text-[3.5rem]">
                Calm build management is part of the finished product.
              </h2>
              <p className="mt-5 max-w-lg text-[0.98rem] leading-8 text-[var(--color-muted)]">
                Homeowners do not separate craftsmanship from communication. We do not either.
                Schedule, material approvals, protection plans, and final documentation are treated
                as part of the renovation itself.
              </p>

              <div className="mt-8 border-l border-[color:rgba(31,35,39,0.14)] pl-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                  Blue Oak baseline
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                  {company.license}. Serving {company.primaryServiceArea}.
                </p>
              </div>
            </div>

            <div className="grid gap-0 border-y border-[color:rgba(31,35,39,0.12)] md:grid-cols-2 md:border-y-0">
              {trustIndicators.map((indicator, index) => (
                <Reveal
                  key={indicator.title}
                  delay={index * 70}
                  className="border-b border-[color:rgba(31,35,39,0.12)] py-5 pr-0 md:px-5 md:py-6 md:[&:nth-child(odd)]:pl-0 md:[&:nth-child(even)]:pr-0 md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0"
                >
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-[1.4rem] font-semibold leading-tight text-[var(--color-brand)]">
                    {indicator.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {indicator.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {planningFacts.map((fact, index) => (
            <Reveal key={fact} delay={index * 50}>
              <div className="border border-[color:rgba(31,35,39,0.12)] bg-[color:rgba(247,242,234,0.72)] px-5 py-4">
                <p className="text-sm leading-7 text-[var(--color-muted)]">{fact}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
