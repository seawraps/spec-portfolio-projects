import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { socialProofLogos } from "@/lib/data";

const trustMetrics = [
  {
    value: 3.4,
    suffix: "M+",
    decimals: 1,
    label: "workflow actions orchestrated every month",
  },
  {
    value: 27,
    suffix: "%",
    label: "average drop in exceptions after rollout",
  },
  {
    value: 11,
    suffix: "",
    label: "countries covered in active customer environments",
  },
];

const trustSignals = [
  "Security review support",
  "Implementation architect included",
  "Audit trails across every release",
];

export function SocialProofSection() {
  return (
    <section className="relative border-b border-slate-200/70 bg-[#eef3f9] py-12 md:py-16 lg:py-20">
      <Container>
        <Reveal className="surface-panel-dark overflow-hidden px-6 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-center">
            <div>
              <p className="data-label text-sky-200">Why operators switch</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.06em] text-white sm:text-[2.8rem]">
                Enterprise teams buy OrbitOps when the workflow itself becomes a product surface.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Instead of layering more status meetings on top of brittle tooling, customers move
                execution, policy, and reporting into one controlled system that leadership can
                actually trust.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {trustSignals.map((signal) => (
                  <li
                    key={signal}
                    className="glass-chip rounded-full px-3 py-1.5 text-sm font-medium text-slate-200"
                  >
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-5"
                >
                  <p className="data-label text-slate-400">{metric.label}</p>
                  <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.08em] text-white">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                    />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="surface-panel mt-6 px-5 py-6 sm:px-6" delay={0.08}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="data-label text-slate-500">Selected operators building on OrbitOps</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Representative customer names are fictional, but the deployment shape is modeled on
                serious B2B workflow software evaluations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialProofLogos.map((company) => (
                <span
                  key={company}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-[0_16px_32px_-24px_rgba(8,15,31,0.18)]"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
