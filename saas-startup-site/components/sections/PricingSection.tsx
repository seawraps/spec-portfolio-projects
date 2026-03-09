import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" id="pricing">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that fit your operations maturity"
          description="Start fast, scale confidently, and upgrade when your workflow complexity grows."
          centered
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex h-full flex-col rounded-2xl border p-6 shadow-sm",
                plan.featured
                  ? "border-cyan-300 bg-slate-900 text-white shadow-xl shadow-slate-900/20"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            >
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">{plan.name}</h3>
                <p className={cn("mt-2 text-sm", plan.featured ? "text-slate-200" : "text-slate-600")}>
                  {plan.description}
                </p>
              </div>

              <p className="mt-6 font-display text-4xl font-semibold tracking-tight">
                {plan.price}
                {plan.price.startsWith("$") ? (
                  <span className={cn("ml-1 text-base font-medium", plan.featured ? "text-slate-300" : "text-slate-500")}>
                    /month
                  </span>
                ) : null}
              </p>

              <ul className="mt-6 space-y-2 text-sm leading-6">
                {plan.featureList.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        plan.featured ? "bg-cyan-400/20 text-cyan-200" : "bg-cyan-100 text-cyan-800",
                      )}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="/contact"
                variant={plan.featured ? "secondary" : "primary"}
                className={cn("mt-8 w-full", plan.featured ? "bg-white text-slate-900 hover:bg-slate-100" : "")}
              >
                {plan.ctaLabel}
              </ButtonLink>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          All plans include secure data handling, guided onboarding, and biweekly product updates.
        </p>
      </Container>
    </section>
  );
}
