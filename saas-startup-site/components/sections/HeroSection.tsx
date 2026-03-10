"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const enterpriseSignals = [
  "Policy-aware automation",
  "Executive-ready reporting",
  "Launch in 7 days",
];

const heroMetrics = [
  {
    value: 42,
    suffix: "%",
    label: "faster approval and exception turnaround",
  },
  {
    value: 99.97,
    suffix: "%",
    decimals: 2,
    label: "workflow reliability across production queues",
  },
  {
    value: 18,
    suffix: "h",
    label: "manager time recovered every week per team",
  },
];

const commandBars = [64, 88, 96, 74, 110, 124, 102, 132, 120, 138, 114, 148];

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
    title: "AI scenario engine",
    description: "Simulate throughput before you ship a policy change.",
    metrics: ["17% less queue pressure", "2 approval layers removed"],
  },
  {
    title: "Enterprise guardrails",
    description: "Approvals, audit trails, and policy scans travel with every release.",
    metrics: ["SSO enforced", "SOC 2 workflow mapped"],
  },
];

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
        <div className="grid gap-14 xl:grid-cols-[0.84fr_1.16fr] xl:items-center">
          <Reveal className="relative z-[1]">
            <p className="data-label text-sky-200">Autonomous operations control plane</p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-[5.25rem] lg:leading-[0.92]">
              Turn operational complexity into a live, governed product surface.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {siteConfig.name} gives revenue, onboarding, support, and finance leaders one
              command layer for workflow execution, AI-guided optimization, and enterprise
              governance. It feels like software, not process overhead.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a control-plane demo
              </ButtonLink>
              <ButtonLink href="/features" variant="inverse" className="w-full sm:w-auto">
                Explore the product system
              </ButtonLink>
            </div>

            <ul className="mt-7 flex flex-wrap gap-3">
              {enterpriseSignals.map((signal) => (
                <li
                  key={signal}
                  className="glass-chip rounded-full px-3.5 py-2 text-sm font-medium text-slate-200"
                >
                  {signal}
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md"
                >
                  <dt className="data-label text-slate-400">{metric.label}</dt>
                  <dd className="mt-4 font-display text-[2.25rem] font-semibold tracking-[-0.07em] text-white">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                    />
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="data-label text-slate-500">Trusted by teams running:</span>
              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-slate-200">
                renewals
              </span>
              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-slate-200">
                onboarding
              </span>
              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-slate-200">
                escalation response
              </span>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-[44rem]" delay={0.12}>
            <motion.div
              className="absolute -left-6 top-12 hidden rounded-[1.4rem] border border-white/10 bg-[#091322]/88 px-4 py-4 shadow-[0_28px_64px_-28px_rgba(3,11,26,0.82)] backdrop-blur-xl md:block"
              animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <p className="data-label text-sky-200">Policy scan</p>
              <p className="mt-3 text-sm font-medium text-white">No governance regressions</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                4 releases checked against finance and customer-tier rules.
              </p>
            </motion.div>

            <motion.div
              className="absolute -right-6 bottom-8 hidden rounded-[1.4rem] border border-white/10 bg-[#0d1828]/88 px-4 py-4 shadow-[0_28px_64px_-28px_rgba(3,11,26,0.82)] backdrop-blur-xl lg:block"
              animate={{ y: [0, 10, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <p className="data-label text-emerald-200">Forecast delta</p>
              <p className="mt-3 text-sm font-medium text-white">12 hours / week recovered</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Auto-routing caught three handoff collisions before leadership review.
              </p>
            </motion.div>

            <div className="surface-panel-dark animated-grid noise-mask scanline-overlay relative overflow-hidden p-4 sm:p-6">
              <div className="glow-divider" aria-hidden="true" />
              <div className="relative z-[1] mt-5 flex flex-col gap-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="data-label text-sky-200">Production workspace</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.06em] text-white">
                      {siteConfig.name} command fabric
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-slate-200">
                      327 active automations
                    </span>
                    <span className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium text-emerald-200">
                      11 regions in sync
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
                  <div className="rounded-[1.7rem] border border-white/10 bg-[#081120]/92 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="data-label text-slate-400">Live execution board</p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Queue health, throughput, and intervention risk
                        </p>
                      </div>
                      <span className="rounded-full bg-white/6 px-3 py-1.5 text-xs font-medium text-slate-200">
                        Syncing every 12 seconds
                      </span>
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-[1.16fr_0.84fr]">
                      <div className="rounded-[1.45rem] border border-white/8 bg-white/4 p-4">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>Autonomous completion rate</span>
                          <span>Last 12 hours</span>
                        </div>
                        <div className="mt-5 flex h-40 items-end gap-2 sm:h-44" aria-hidden="true">
                          {commandBars.map((height, index) => (
                            <motion.div
                              key={`${height}-${index}`}
                              className="flex-1 rounded-t-[1rem] bg-[linear-gradient(180deg,rgba(101,226,255,0.95),rgba(21,84,133,0.32))]"
                              initial={{ height: Math.max(height - 16, 32) }}
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
                            className="rounded-[1.35rem] border border-white/8 bg-[#0c1728] px-4 py-3"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-semibold text-white">{row.lane}</p>
                              <span
                                className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold ${
                                  row.state === "Stable"
                                    ? "bg-emerald-400/12 text-emerald-200"
                                    : row.state === "Watch"
                                      ? "bg-amber-400/12 text-amber-100"
                                      : "bg-sky-400/12 text-sky-200"
                                }`}
                              >
                                {row.state}
                              </span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-300">{row.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {sidePanels.map((panel) => (
                      <article
                        key={panel.title}
                        className="rounded-[1.55rem] border border-white/10 bg-white/5 p-4"
                      >
                        <p className="data-label text-slate-400">{panel.title}</p>
                        <p className="mt-3 text-base font-semibold text-white">{panel.description}</p>
                        <div className="mt-4 space-y-2">
                          {panel.metrics.map((metric) => (
                            <div
                              key={metric}
                              className="rounded-2xl border border-white/8 bg-[#0a1525] px-3 py-2 text-sm text-slate-300"
                            >
                              {metric}
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/4 px-4 py-4">
                    <p className="data-label text-slate-400">Workflows covered</p>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.07em] text-white">
                      23
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/4 px-4 py-4">
                    <p className="data-label text-slate-400">Prevented escalations</p>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.07em] text-white">
                      146
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/4 px-4 py-4">
                    <p className="data-label text-slate-400">AI briefs generated</p>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.07em] text-white">
                      12
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
