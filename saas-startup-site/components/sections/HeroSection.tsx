import { cn } from "@/lib/utils";

import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroMetrics } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-12 sm:py-14 md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl sm:-left-16 sm:top-16 sm:h-52 sm:w-52"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-6 top-24 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl sm:-right-8 sm:top-28 sm:h-64 sm:w-64"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="animate-enter">
            <p className="mb-4 inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800">
              AI Operations Platform
            </p>
            <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Run complex operations without the spreadsheet chaos.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-6 text-slate-600 sm:text-lg sm:leading-7">
              {siteConfig.name} gives B2B teams one workspace to automate recurring workflows,
              manage exceptions, and improve process performance with live analytics.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a Live Demo
              </ButtonLink>
              <ButtonLink href="/features" variant="secondary" className="w-full sm:w-auto">
                Explore Product Features
              </ButtonLink>
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {heroMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={cn(
                    "rounded-xl border border-slate-200 bg-white p-4 sm:p-6",
                    index === heroMetrics.length - 1 ? "col-span-2 sm:col-span-1" : "",
                  )}
                >
                  <dt className="text-sm text-slate-500">{metric.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold tracking-tight text-slate-900">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-enter-delay">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:p-8">
              <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
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
                <div className="hidden rounded-lg border border-slate-200 bg-slate-50 p-3 sm:block">
                  <p className="text-sm font-semibold text-slate-900">Billing Verification Sequence</p>
                  <p className="mt-1 text-xs text-slate-600">98.9% SLA adherence this week</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-slate-900 p-4 text-white sm:mt-5">
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
