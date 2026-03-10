import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroMetrics } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const launchSignals = [
  "SOC 2-ready controls",
  "SSO and audit exports",
  "Launch in 7-10 days",
];

const workflowRows = [
  {
    name: "Enterprise renewal approvals",
    status: "Healthy",
    detail: "14 requests in flight across AMER and EMEA",
  },
  {
    name: "New logo onboarding handoff",
    status: "Attention",
    detail: "3 owner conflicts detected before kickoff",
  },
  {
    name: "Support escalation governance",
    status: "Stable",
    detail: "99.2% SLA adherence across priority queues",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_30%),linear-gradient(180deg,#f7fbff_0%,#eef4f9_48%,#f8fbff_100%)] py-12 sm:py-14 md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[linear-gradient(to_bottom,rgba(8,15,31,0.04),transparent)]"
        aria-hidden="true"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="animate-fade-up">
            <p className="eyebrow-label">Operations orchestration platform</p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[4.3rem] lg:leading-[0.96]">
              The control plane for revenue, onboarding, and support operations.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {siteConfig.name} gives operators a single environment to run live workflows,
              manage exceptions, and ship process improvements with the governance enterprise teams
              expect.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a live walkthrough
              </ButtonLink>
              <ButtonLink href="/features" variant="secondary" className="w-full sm:w-auto">
                Explore the platform
              </ButtonLink>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {launchSignals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-full border border-slate-200 bg-white/88 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-[0_16px_32px_-28px_rgba(15,23,42,0.2)]"
                >
                  {signal}
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="surface-panel px-5 py-5">
                  <dt className="data-label text-slate-500">{metric.label}</dt>
                  <dd className="mt-3 font-display text-[2.15rem] font-semibold tracking-[-0.05em] text-slate-950">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-up-delay lg:pl-4">
            <div className="surface-panel-dark surface-grid relative overflow-hidden p-4 sm:p-6">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="data-label text-sky-300">Live control room</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    Revenue and service operations
                  </h2>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                  All core workflows healthy
                </div>
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
                <div className="rounded-[1.55rem] border border-white/10 bg-white/4 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="data-label text-slate-400">Command board</p>
                      <p className="mt-2 text-lg font-semibold text-white">Daily workflow queue</p>
                    </div>
                    <span className="rounded-full bg-sky-400/12 px-3 py-1 text-sm font-medium text-sky-200">
                      128 runs today
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {workflowRows.map((row) => (
                      <div
                        key={row.name}
                        className="rounded-2xl border border-white/8 bg-[#091221] px-4 py-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white">{row.name}</p>
                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                              row.status === "Healthy"
                                ? "bg-emerald-400/12 text-emerald-200"
                                : row.status === "Attention"
                                  ? "bg-amber-400/12 text-amber-200"
                                  : "bg-slate-400/12 text-slate-200"
                            }`}
                          >
                            {row.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-300">{row.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.55rem] border border-white/10 bg-white/4 p-4">
                    <p className="data-label text-slate-400">Reliability</p>
                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>SLA adherence</span>
                          <span>99.4%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[82%] rounded-full bg-sky-300" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>Auto-routed exceptions</span>
                          <span>91%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[74%] rounded-full bg-emerald-300" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>Workflow coverage</span>
                          <span>68%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/8">
                          <div className="h-2 w-[60%] rounded-full bg-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.55rem] border border-sky-400/20 bg-sky-400/10 p-4">
                    <p className="data-label text-sky-200">AI recommendation</p>
                    <p className="mt-3 text-sm leading-6 text-slate-100">
                      Merge billing validation into onboarding kickoff for enterprise accounts to
                      remove one handoff and recover an estimated 12 hours each week.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <p className="data-label text-slate-400">Queues monitored</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">23</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <p className="data-label text-slate-400">Escalations prevented</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">146</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                  <p className="data-label text-slate-400">Weekly change briefs</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
