"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const storySteps = [
  {
    id: "control",
    label: "Live control",
    title: "See throughput, SLA pressure, and ownership drift in one view.",
    description:
      "Managers move from fragmented status updates to a shared execution layer that knows which handoffs are healthy, blocked, or about to miss target.",
    metrics: ["24 queues monitored", "91% auto-routed", "2.8 min median intervention"],
  },
  {
    id: "studio",
    label: "Workflow studio",
    title: "Ship process changes with the same rigor you apply to product releases.",
    description:
      "Design reusable paths, compare versions, and roll changes through approvals, policy checks, and staged activation instead of improvising in docs and chat.",
    metrics: ["Version diff view", "Policy-aware releases", "Approval layers preserved"],
  },
  {
    id: "briefs",
    label: "Executive briefings",
    title: "Translate operational behavior into decisions the leadership team can act on.",
    description:
      "OrbitOps turns queue history, retries, and staffing pressure into narrative-ready briefs with scenario forecasts and the business impact attached.",
    metrics: ["AI-synthesized recap", "Risk forecast model", "Board-ready exports"],
  },
];

const liveQueues = [
  { name: "Enterprise onboarding", score: "Healthy", volume: "32 in motion" },
  { name: "Deal desk approvals", score: "Watch", volume: "9 waiting on finance" },
  { name: "Priority escalations", score: "Optimized", volume: "6 rerouted automatically" },
];

const releaseNodes = [
  "Capture trigger",
  "Validate policy",
  "Assign owner",
  "Route approval",
  "Publish live",
];

const briefingItems = [
  "Approval chain cut by one step for EMEA enterprise deals",
  "Projected queue pressure down 17% next week",
  "Onboarding kickoff SLA returns to target in 4 days",
];

export function ProductPreviewSection() {
  const [activeStepId, setActiveStepId] = useState(storySteps[0].id);
  const activeStep = storySteps.find((step) => step.id === activeStepId) ?? storySteps[0];

  return (
    <section className="bg-[#edf2f8] py-16 md:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Product walkthrough"
            title="A product story built around live operations, controlled change, and executive clarity."
            description="This is not a generic dashboard. OrbitOps is designed to feel like a serious operating surface for teams running revenue, onboarding, support, and finance workflows at scale."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
          <Reveal className="xl:sticky xl:top-28">
            <div className="surface-panel-dark noise-mask relative overflow-hidden p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                {storySteps.map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStepId(step.id)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                      activeStep.id === step.id
                        ? "bg-[linear-gradient(135deg,rgba(101,226,255,0.18),rgba(22,184,255,0.12))] text-white ring-1 ring-white/12"
                        : "bg-white/4 text-slate-400 hover:bg-white/8 hover:text-slate-100",
                    )}
                  >
                    {step.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-[#07111d]/88 p-4 sm:p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="data-label text-sky-200">{activeStep.label}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                      {activeStep.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                      {activeStep.description}
                    </p>

                    {activeStep.id === "control" ? (
                      <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="space-y-3">
                          {liveQueues.map((queue) => (
                            <div
                              key={queue.name}
                              className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-3"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-sm font-semibold text-white">{queue.name}</p>
                                <span
                                  className={cn(
                                    "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold",
                                    queue.score === "Healthy"
                                      ? "bg-emerald-400/12 text-emerald-200"
                                      : queue.score === "Watch"
                                        ? "bg-amber-400/12 text-amber-100"
                                        : "bg-sky-400/12 text-sky-200",
                                  )}
                                >
                                  {queue.score}
                                </span>
                              </div>
                              <p className="mt-2 text-sm text-slate-300">{queue.volume}</p>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/5 p-4">
                          <p className="data-label text-slate-400">Workload mix</p>
                          <div className="mt-5 space-y-4">
                            {[
                              ["Autonomous", "68%"],
                              ["Needs approval", "21%"],
                              ["Escalated", "11%"],
                            ].map(([label, value]) => (
                              <div key={label}>
                                <div className="flex items-center justify-between text-sm text-slate-300">
                                  <span>{label}</span>
                                  <span>{value}</span>
                                </div>
                                <div className="mt-2 h-2 rounded-full bg-white/8">
                                  <motion.div
                                    className="h-2 rounded-full bg-[linear-gradient(90deg,#65e2ff,#16b8ff)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: value }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {activeStep.id === "studio" ? (
                      <div className="mt-6 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/5 p-4">
                          <p className="data-label text-slate-400">Release path</p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {releaseNodes.map((node, index) => (
                              <div
                                key={node}
                                className="rounded-[1.1rem] border border-white/10 bg-[#0b1524] px-3 py-2 text-sm text-slate-200"
                              >
                                {index + 1}. {node}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-[1.45rem] border border-sky-400/18 bg-sky-400/8 p-4">
                          <p className="data-label text-sky-200">Active release diff</p>
                          <div className="mt-4 space-y-3">
                            {[
                              "Route enterprise tickets to finance reviewer after quote threshold.",
                              "Auto-cancel duplicate kickoff tasks when owner already assigned.",
                              "Require director approval for onboarding deadlines under 48 hours.",
                            ].map((item) => (
                              <div
                                key={item}
                                className="rounded-[1.15rem] border border-white/8 bg-[#091321] px-3 py-3 text-sm leading-6 text-slate-200"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {activeStep.id === "briefs" ? (
                      <div className="mt-6 grid gap-4 lg:grid-cols-[0.94fr_1.06fr]">
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/5 p-4">
                          <p className="data-label text-slate-400">Weekly recommendation brief</p>
                          <div className="mt-4 space-y-3">
                            {briefingItems.map((item) => (
                              <div
                                key={item}
                                className="rounded-[1.15rem] border border-white/8 bg-[#0b1524] px-3 py-3 text-sm leading-6 text-slate-200"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="rounded-[1.45rem] border border-white/10 bg-white/5 p-4">
                          <p className="data-label text-slate-400">Impact forecast</p>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {[
                              ["Cycle time", "-12%"],
                              ["Manager load", "-8h"],
                              ["SLA recovery", "4 days"],
                              ["Escalation risk", "-17%"],
                            ].map(([label, value]) => (
                              <div
                                key={label}
                                className="rounded-[1.1rem] border border-white/8 bg-[#0b1524] px-3 py-3"
                              >
                                <p className="data-label text-slate-500">{label}</p>
                                <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                                  {value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {activeStep.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-[1.1rem] border border-white/8 bg-white/5 px-3 py-3 text-sm text-slate-200"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {storySteps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.06}>
                <InteractiveCard
                  className={cn(
                    "surface-panel p-6",
                    activeStep.id === step.id
                      ? "ring-1 ring-cyan-200 shadow-[0_36px_88px_-52px_rgba(9,18,33,0.44)]"
                      : "",
                  )}
                >
                  <button
                    type="button"
                    className="w-full text-left"
                    onMouseEnter={() => setActiveStepId(step.id)}
                    onFocus={() => setActiveStepId(step.id)}
                    onClick={() => setActiveStepId(step.id)}
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="data-label text-slate-500">Chapter 0{index + 1}</p>
                        <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "inline-flex rounded-full px-3 py-1.5 text-xs font-semibold",
                          activeStep.id === step.id
                            ? "bg-sky-100 text-sky-900"
                            : "bg-slate-100 text-slate-500",
                        )}
                      >
                        {step.label}
                      </span>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {step.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="rounded-[1.2rem] border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-700"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </button>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
