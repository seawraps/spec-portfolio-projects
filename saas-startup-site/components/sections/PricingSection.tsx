"use client";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

const dealSupport = [
  "Guided rollout planning and architecture review",
  "Security and procurement response support",
  "Customer success involvement from evaluation onward",
  "Quarterly optimization guidance on larger plans",
];

const commercialFacts = [
  "Annual procurement paths available",
  "Security review support included",
];

const planMeta: Record<string, { eyebrow: string; note: string }> = {
  Team: {
    eyebrow: "Launch lane",
    note: "Best for teams proving value inside one operational lane.",
  },
  Business: {
    eyebrow: "Scale lane",
    note: "Best fit for cross-functional teams replacing process sprawl with a governed system.",
  },
  Enterprise: {
    eyebrow: "Global lane",
    note: "Built for compliance-heavy rollout, procurement review, and regional governance.",
  },
};

export function PricingSection() {
  return (
    <section className="section-shell-dark py-16 md:py-20 lg:py-24" id="pricing">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr] xl:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Structured for serious deployment, not just seat expansion."
              description="Start with one high-impact workflow cluster, prove the operating model, then expand the control plane across more teams and higher-governance use cases."
              tone="dark"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="surface-panel-dark px-6 py-6">
                <p className="data-label text-sky-200">Included with every evaluation</p>
                <ul className="mt-4 grid grid-cols-2 gap-3">
                  {dealSupport.map((item) => (
                    <li
                      key={item}
                      className="rounded-[1.15rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-200"
                    >
                      <span className="flex items-start gap-3">
                        <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="surface-panel px-6 py-6">
                <p className="data-label text-slate-500">Commercial posture</p>
                <div className="mt-4 space-y-3">
                  {commercialFacts.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.15rem] border border-slate-200 bg-white px-4 py-4 text-sm font-medium leading-6 text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <ButtonLink href="/contact" variant="secondary" className="mt-6 w-full">
                  Request rollout guidance
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <InteractiveCard
                className={cn(
                  "h-full rounded-[2rem] border p-6",
                  plan.featured
                    ? "surface-panel-dark border-sky-400/24 shadow-[0_36px_88px_-52px_rgba(4,14,28,0.72)]"
                    : "surface-panel border-white/70",
                )}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={cn(
                          "data-label",
                          plan.featured ? "text-sky-200" : "text-slate-500",
                        )}
                      >
                        {planMeta[plan.name].eyebrow}
                      </p>
                      <h3
                        className={cn(
                          "mt-3 font-display text-3xl font-semibold tracking-[-0.05em]",
                          plan.featured ? "text-white" : "text-slate-950",
                        )}
                      >
                        {plan.name}
                      </h3>
                    </div>

                    {plan.featured ? (
                      <span className="rounded-full bg-[linear-gradient(135deg,rgba(101,226,255,0.18),rgba(22,184,255,0.12))] px-3 py-1 text-xs font-semibold text-sky-100 ring-1 ring-white/10">
                        Recommended
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={cn(
                      "mt-4 text-sm leading-6",
                      plan.featured ? "text-slate-300" : "text-slate-600",
                    )}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-end gap-3">
                    <p
                      className={cn(
                        "font-display text-[3.8rem] font-semibold leading-none tracking-[-0.08em]",
                        plan.featured ? "text-white" : "text-slate-950",
                      )}
                    >
                      {plan.price}
                    </p>
                    <p
                      className={cn(
                        "pb-2 text-sm leading-5",
                        plan.featured ? "text-slate-300" : "text-slate-500",
                      )}
                    >
                      {plan.price.startsWith("$")
                        ? "per workspace / month"
                        : "scoped around security, deployment, and support requirements"}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "mt-6 rounded-[1.45rem] border px-4 py-4",
                      plan.featured
                        ? "border-white/10 bg-white/5"
                        : "border-slate-200 bg-white",
                    )}
                  >
                    <p
                      className={cn(
                        "data-label",
                        plan.featured ? "text-sky-200" : "text-slate-500",
                      )}
                    >
                      What you unlock
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6">
                      {plan.featureList.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-semibold",
                              plan.featured
                                ? "bg-sky-400/14 text-sky-100"
                                : "bg-slate-950 text-white",
                            )}
                          >
                            +
                          </span>
                          <span className={plan.featured ? "text-slate-200" : "text-slate-700"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={cn(
                      "mt-5 rounded-[1.2rem] border px-4 py-4 text-sm leading-6",
                      plan.featured
                        ? "border-white/10 bg-white/5 text-slate-200"
                        : "border-slate-200 bg-white text-slate-700",
                    )}
                  >
                    {planMeta[plan.name].note}
                  </div>

                  <ButtonLink
                    href="/contact"
                    variant={plan.featured ? "light" : "primary"}
                    className="mt-6 w-full"
                  >
                    {plan.ctaLabel}
                  </ButtonLink>
                </div>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="surface-panel mt-8 grid gap-4 px-6 py-6 md:grid-cols-4" delay={0.1}>
          {[
            "Expand from one workflow cluster to many",
            "Use evaluation volume that reflects real deployment",
            "Bring procurement and security in early without slowing momentum",
            "Keep launch support attached as the operating surface grows",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
