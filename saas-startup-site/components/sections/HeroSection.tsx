"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const enterpriseSignals = [
  "Policy-aware automation",
  "Executive-ready reporting",
  "Launch in 7 days",
];

const heroMetrics = [
  {
    value: 42,
    suffix: "%",
    title: "Approval velocity",
    detail: "faster resolution after replacing exception inbox sprawl",
  },
  {
    value: 99.97,
    suffix: "%",
    decimals: 2,
    title: "Runtime reliability",
    detail: "across live revenue, onboarding, and support workflows",
  },
  {
    value: 18,
    suffix: "h",
    title: "Manager capacity",
    detail: "returned every week for a typical operating team",
  },
];

const commandBars = [72, 94, 104, 88, 116, 132, 124, 146, 138, 154, 142, 162];

const automationRows = [
  {
    lane: "Enterprise renewals",
    state: "Stable",
    detail: "128 tasks routed with no owner conflicts",
  },
  {
    lane: "Customer onboarding",
    state: "Watch",
    detail: "3 milestone handoffs flagged before SLA risk",
  },
  {
    lane: "Support escalations",
    state: "Optimized",
    detail: "AI policy shifted 16 tickets away from critical queue",
  },
];

const sidePanels = [
  {
    title: "Scenario engine",
    description: "Model next-week queue pressure before you change policy or staffing.",
    metrics: ["17% less queue pressure", "2 approval layers removed"],
  },
  {
    title: "Release packet",
    description: "Every workflow update ships with approvals, audit trail, and rollback context.",
    metrics: ["SSO enforced", "Finance policy mapped"],
  },
];

const commandStats = [
  ["Workflows covered", "23"],
  ["Prevented escalations", "146"],
  ["AI briefs generated", "12"],
];

const operatingLanes = ["Renewals", "Onboarding", "Escalations", "Finance approvals"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#04101b] pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(22,184,255,0.22),transparent_22%),radial-gradient(circle_at_100%_0%,rgba(99,241,213,0.16),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%)]"
        aria-hidden="true"
      />
      <div className="orbital-ring left-[8%] top-16 h-44 w-44" aria-hidden="true" />
      <div className="orbital-ring right-[10%] top-24 h-60 w-60" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <Reveal className="relative z-[1] max-w-[42rem]" y={30}>
            <div className="inline-flex max-w-max items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(101,226,255,0.9)]" />
              <span className="data-label text-sky-200">Autonomous operations control plane</span>
            </div>

            <h1 className="mt-6 max-w-[11ch] font-display text-[clamp(3.15rem,6.9vw,5.9rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
              Turn operational complexity into a live, governed product surface.
            </h1>

            <p className="mt-6 max-w-[36rem] text-base leading-8 text-slate-300 sm:text-lg">
              OrbitOps gives revenue, onboarding, support, and finance leaders one command layer
              for workflow execution, AI-guided optimization, and enterprise governance. It looks
              and behaves like a premium product system, not process overhead.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a control-plane demo
              </ButtonLink>
              <ButtonLink href="/features" variant="inverse" className="w-full sm:w-auto">
                Explore the product system
              </ButtonLink>
            </div>

            <p className="mt-4 max-w-[34rem] text-sm leading-6 text-slate-400">
              See your own workflow modeled live in the first session, with rollout risk, approval
              drag, and queue pressure already mapped.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {enterpriseSignals.map((signal) => (
                <li
                  key={signal}
                  className="glass-chip flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300/80" />
                  {signal}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-[44rem]" delay={0.12} y={34}>
            <motion.div
              className="absolute -right-4 top-8 hidden rounded-[1.4rem] border border-white/10 bg-[#0a1626]/88 px-4 py-4 shadow-[0_28px_64px_-28px_rgba(3,11,26,0.82)] backdrop-blur-xl md:block"
              animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <p className="data-label text-sky-200">Policy scan</p>
              <p className="mt-3 text-sm font-medium text-white">No governance regressions</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                4 releases checked against finance and customer-tier rules.
              </p>
            </motion.div>

            <div className="surface-panel-dark animated-grid noise-mask scanline-overlay relative overflow-hidden p-5 sm:p-6">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(101,226,255,0.8),rgba(255,255,255,0))]"
                aria-hidden="true"
              />

              <div className="relative z-[1]">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="data-label text-sky-200">Production workspace</p>
                    <h2 className="mt-2 font-display text-[2.1rem] font-semibold tracking-[-0.06em] text-white">
                      OrbitOps command fabric
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                      Live execution, policy confidence, and AI-directed optimization in one
                      governed command surface.
                    </p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {["327 active automations", "11 regions in sync"].map((item) => (
                      <span
                        key={item}
                        className="glass-chip rounded-full px-3 py-1.5 text-center text-xs font-medium text-slate-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 xl:grid-cols-[1.16fr_0.84fr]">
                  <div className="rounded-[1.75rem] border border-white/10 bg-[#081120]/92 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="data-label text-slate-400">Live execution board</p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          Queue health, throughput, and intervention risk
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100">
                        Syncing every 12 seconds
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                      <div className="rounded-[1.55rem] border border-white/8 bg-white/4 p-4">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="data-label text-slate-400">Autonomous completion</p>
                            <p className="mt-2 font-display text-4xl font-semibold tracking-[-0.07em] text-white">
                              91%
                            </p>
                          </div>
                          <p className="text-xs text-slate-400">Last 12 hours</p>
                        </div>

                        <div className="mt-5 flex h-44 items-end gap-2" aria-hidden="true">
                          {commandBars.map((height, index) => (
                            <motion.div
                              key={`${height}-${index}`}
                              className="flex-1 rounded-t-[1rem] bg-[linear-gradient(180deg,rgba(101,226,255,0.95),rgba(21,84,133,0.32))]"
                              initial={{ height: Math.max(height - 18, 34) }}
                              animate={{ height: [height - 14, height, height - 6] }}
                              transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.1,
                              }}
                            />
                          ))}
                        </div>

                        <div className="mt-3 flex justify-between text-[0.72rem] uppercase tracking-[0.18em] text-slate-500">
                          <span>06</span>
                          <span>09</span>
                          <span>12</span>
                          <span>15</span>
                          <span>18</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {automationRows.map((row) => (
                          <div
                            key={row.lane}
                            className="rounded-[1.35rem] border border-white/8 bg-[#0c1728] px-4 py-3.5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-white">{row.lane}</p>
                              <span
                                className={cn(
                                  "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold",
                                  row.state === "Stable"
                                    ? "bg-emerald-400/12 text-emerald-200"
                                    : row.state === "Watch"
                                      ? "bg-amber-400/12 text-amber-100"
                                      : "bg-sky-400/12 text-sky-200",
                                )}
                              >
                                {row.state}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{row.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {commandStats.map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-[1.25rem] border border-white/10 bg-white/4 px-4 py-4"
                        >
                          <p className="data-label text-slate-400">{label}</p>
                          <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.07em] text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {sidePanels.map((panel, index) => (
                      <article
                        key={panel.title}
                        className={cn(
                          "rounded-[1.55rem] border p-5",
                          index === 0 ? "border-sky-400/18 bg-sky-400/8" : "border-white/10 bg-white/5",
                        )}
                      >
                        <p className="data-label text-slate-400">{panel.title}</p>
                        <p className="mt-3 text-base font-semibold text-white">{panel.description}</p>
                        <div className="mt-4 space-y-2">
                          {panel.metrics.map((metric) => (
                            <div
                              key={metric}
                              className="rounded-[1rem] border border-white/8 bg-[#0a1525] px-3 py-3 text-sm text-slate-200"
                            >
                              {metric}
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4" delay={0.16}>
          {heroMetrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-[1.7rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md"
            >
              <p className="data-label text-slate-400">{metric.title}</p>
              <p className="mt-4 font-display text-[2.45rem] font-semibold tracking-[-0.07em] text-white">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                />
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{metric.detail}</p>
            </div>
          ))}

          <div className="rounded-[1.7rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md">
            <p className="data-label text-slate-400">Operating lanes</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {operatingLanes.map((lane) => (
                <span
                  key={lane}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-100"
                >
                  {lane}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Teams share one command layer instead of stitching visibility together across docs,
              chat, and operational side systems.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
