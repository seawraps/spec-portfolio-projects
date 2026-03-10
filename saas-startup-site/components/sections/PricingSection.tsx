import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

const includedItems = [
  "Guided rollout planning",
  "Secure data handling",
  "Biweekly product updates",
  "Customer success support",
];

export function PricingSection() {
  return (
    <section className="bg-[#f4f8fd] py-14 md:py-20 lg:py-24" id="pricing">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <div>
            <SectionHeading
              eyebrow="Pricing"
              title="Plans built for teams standardizing real operational work."
              description="Start with a focused deployment, then expand into broader orchestration once the platform is proving value in production."
            />
            <div className="surface-panel-muted mt-7 px-6 py-6">
              <p className="data-label text-slate-500">Procurement and rollout</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <li>Annual plans available for Business and Enterprise customers.</li>
                <li>Security review support and architecture guidance included for larger deals.</li>
                <li>We can scope around one workflow cluster first, then expand by function.</li>
              </ul>
              <ButtonLink href="/contact" variant="secondary" className="mt-5">
                Request pricing guidance
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "flex h-full flex-col rounded-[1.75rem] border px-6 py-6 shadow-[0_24px_58px_-40px_rgba(8,15,31,0.22)]",
                  plan.featured
                    ? "surface-panel-dark border-sky-400/25 text-white"
                    : "surface-panel text-slate-950",
                )}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                      {plan.name}
                    </h3>
                    {plan.featured ? (
                      <span className="rounded-full bg-sky-400/12 px-3 py-1 text-xs font-semibold text-sky-200">
                        Most popular
                      </span>
                    ) : null}
                  </div>
                  <p className={cn("mt-3 text-sm leading-6", plan.featured ? "text-slate-300" : "text-slate-600")}>
                    {plan.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="font-display text-5xl font-semibold tracking-[-0.06em]">
                    {plan.price}
                  </p>
                  <p className={cn("mt-2 text-sm", plan.featured ? "text-slate-300" : "text-slate-500")}>
                    {plan.price.startsWith("$")
                      ? "Per workspace / month"
                      : "Structured around deployment scope and governance requirements"}
                  </p>
                </div>

                <ul className="mt-7 space-y-3 text-sm leading-6">
                  {plan.featureList.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-semibold",
                          plan.featured ? "bg-sky-400/14 text-sky-200" : "bg-slate-950 text-white",
                        )}
                      >
                        +
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/contact"
                  variant={plan.featured ? "light" : "primary"}
                  className="mt-8 w-full"
                >
                  {plan.ctaLabel}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-panel mt-8 grid gap-4 px-6 py-5 md:grid-cols-4">
          {includedItems.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
