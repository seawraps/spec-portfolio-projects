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

export function PricingSection() {
  return (
    <section className="section-shell-dark py-16 md:py-20 lg:py-24" id="pricing">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Structured for serious deployment, not just seat expansion."
              description="Start with one high-impact workflow cluster, prove the operating model, then expand the control plane across more teams and higher-governance use cases."
              tone="dark"
            />

            <div className="surface-panel-dark mt-7 px-6 py-6">
              <p className="data-label text-sky-200">Included with every evaluation</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {dealSupport.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/contact" variant="light" className="mt-6">
                Request rollout guidance
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.05}>
                <InteractiveCard
                  className={cn(
                    "h-full rounded-[2rem] border p-6",
                    plan.featured
                      ? "surface-panel-dark border-sky-400/20"
                      : "surface-panel border-white/60",
                  )}
                >
                  <div className="flex h-full flex-col">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3
                          className={cn(
                            "font-display text-2xl font-semibold tracking-[-0.05em]",
                            plan.featured ? "text-white" : "text-slate-950",
                          )}
                        >
                          {plan.name}
                        </h3>
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
                    </div>

                    <div
                      className={cn(
                        "mt-7 rounded-[1.4rem] border px-4 py-4",
                        plan.featured
                          ? "border-white/10 bg-white/5"
                          : "border-slate-200 bg-white",
                      )}
                    >
                      <p
                        className={cn(
                          "font-display text-5xl font-semibold tracking-[-0.08em]",
                          plan.featured ? "text-white" : "text-slate-950",
                        )}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={cn(
                          "mt-2 text-sm",
                          plan.featured ? "text-slate-300" : "text-slate-500",
                        )}
                      >
                        {plan.price.startsWith("$")
                          ? "Per workspace / month"
                          : "Scoped around security, deployment, and support requirements"}
                      </p>
                    </div>

                    <ul className="mt-7 space-y-3 text-sm leading-6">
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

                    <div className="mt-7 rounded-[1.2rem] border border-white/8 bg-white/5 px-4 py-4 text-sm leading-6 text-slate-300">
                      {plan.featured
                        ? "Best fit for teams replacing cross-functional process sprawl with a governed operational platform."
                        : plan.name === "Team"
                          ? "Designed for smaller teams proving value inside one operational lane."
                          : "Built for multi-region, compliance-heavy rollout and procurement involvement."}
                    </div>

                    <ButtonLink
                      href="/contact"
                      variant={plan.featured ? "light" : "primary"}
                      className="mt-8 w-full"
                    >
                      {plan.ctaLabel}
                    </ButtonLink>
                  </div>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="surface-panel mt-8 grid gap-4 px-6 py-6 md:grid-cols-4" delay={0.1}>
          {[
            "Annual procurement paths available",
            "Usage generous enough for real deployment",
            "Security review support included",
            "Expand from one workflow cluster to many",
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
