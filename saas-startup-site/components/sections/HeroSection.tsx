import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroMetrics } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white pb-14 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div
        className="pointer-events-none absolute -left-16 top-16 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 top-28 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="animate-enter">
            <p className="mb-4 inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">
              AI Operations Platform
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Run complex operations without the spreadsheet chaos.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {siteConfig.name} gives B2B teams one workspace to automate recurring workflows,
              manage exceptions, and improve process performance with live analytics.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Book a Live Demo</ButtonLink>
              <ButtonLink href="/features" variant="secondary">
                Explore Product Features
              </ButtonLink>
            </div>

            <dl className="mt-9 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="text-sm text-slate-500">{metric.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-enter-delay">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    Live Workflow Queue
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-slate-900">
                    Revenue Ops Control Room
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Healthy
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-900">Renewal Approval Workflow</p>
                  <p className="mt-1 text-xs text-slate-600">24 tasks active • 6 due in next 4 hours</p>
                </div>
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                  <p className="text-sm font-semibold text-amber-900">Implementation Escalation</p>
                  <p className="mt-1 text-xs text-amber-700">2 exceptions waiting owner response</p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-900">Billing Verification Sequence</p>
                  <p className="mt-1 text-xs text-slate-600">98.9% SLA adherence this week</p>
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-slate-900 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-300">AI Recommendation</p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  Reassign enterprise onboarding exceptions to the AMER queue to reduce average
                  resolution time by 19%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
