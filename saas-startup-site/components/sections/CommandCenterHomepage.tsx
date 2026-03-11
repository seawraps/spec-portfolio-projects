"use client";

import { startTransition, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const heroSignals = [
  "Live policy graph",
  "Scenario sandbox",
  "Audit-ready releases",
  "Queue intelligence",
];

const heroMetrics = [
  {
    value: 327,
    suffix: "",
    label: "active playbooks",
    detail: "coordinating onboarding, support, renewals, and finance lanes",
  },
  {
    value: 99.98,
    suffix: "%",
    decimals: 2,
    label: "runtime fidelity",
    detail: "fresh policy, approval, and workflow state across every environment",
  },
  {
    value: 14,
    suffix: "m",
    label: "release decision cycle",
    detail: "from proposed workflow change to governed production clearance",
  },
];

const heroBars = [52, 68, 64, 78, 88, 84, 96, 104, 99, 112, 118, 110];

const heroQueues = [
  {
    lane: "Revenue approvals",
    health: "Recovered",
    volume: "23 live packets",
    value: "72ms orchestration",
    width: "78%",
  },
  {
    lane: "Customer onboarding",
    health: "Stable",
    volume: "61 active milestones",
    value: "4 launch blockers",
    width: "64%",
  },
  {
    lane: "Priority escalations",
    health: "Intercepted",
    volume: "12 routed automatically",
    value: "3 analyst touches",
    width: "51%",
  },
];

const heroActivity = [
  "Launch guardrail matched high-value contract change and inserted finance approval.",
  "EMEA onboarding lane rerouted before SLA breach after queue pressure crossed threshold.",
  "Rollback simulation cleared with no governance regressions in the current release packet.",
];

const architectureLayers = [
  {
    title: "Signal fabric",
    label: "Capture",
    description: "Streams contract, support, billing, and delivery events into a normalized operating graph.",
    stats: ["41 source contracts", "12 second freshness", "event replay enabled"],
  },
  {
    title: "Decision engine",
    label: "Reason",
    description: "Runs policy checks, approval routes, and AI confidence scoring before work changes state.",
    stats: ["280 policy nodes", "dynamic lane assignment", "human override tracking"],
  },
  {
    title: "Execution mesh",
    label: "Act",
    description: "Dispatches tasks, messages, and product-side actions with staged rollout controls.",
    stats: ["327 live playbooks", "multi-region dispatch", "rollback ready"],
  },
  {
    title: "Operator memory",
    label: "Explain",
    description: "Turns every decision, exception, and release into searchable audit context and executive briefs.",
    stats: ["one click exports", "decision lineage", "scenario history"],
  },
];

const architectureNodes = [
  { title: "CRM + billing", detail: "opportunity, contract, invoice deltas", tone: "cyan" },
  { title: "Support + delivery", detail: "tickets, milestones, escalations", tone: "emerald" },
  { title: "Policy runtime", detail: "approval graph, exception thresholds", tone: "blue" },
  { title: "AI briefings", detail: "impact narratives and forecast packets", tone: "cyan" },
];

const workflowViews = [
  {
    id: "launch",
    label: "Launch governance",
    lane: "Product + Revenue",
    title: "Orchestrate a risky workflow release like a software launch, not a slide deck handoff.",
    summary:
      "OrbitOps packages policy diffs, approval requirements, simulations, and rollback context into one release lane. Operators can clear a change without losing visibility into who approved what or why.",
    stats: [
      ["Approval stack", "4 sign-offs"],
      ["Risk delta", "-31%"],
      ["Projected load", "+18%"],
    ],
    stages: [
      {
        name: "Policy diff",
        status: "Verified",
        detail: "Threshold rules and owner assignments compared against production runtime.",
      },
      {
        name: "Simulation pass",
        status: "Running",
        detail: "Quarter-close pressure model predicts no breach against SLA or finance controls.",
      },
      {
        name: "Approval lane",
        status: "Synced",
        detail: "Revenue, finance, and systems sign-off route auto-built from change scope.",
      },
      {
        name: "Progressive rollout",
        status: "Ready",
        detail: "Release staged to one region with automatic rollback if queue risk rises.",
      },
    ],
    systemSignals: [
      "Control plane creates release packet automatically from workflow diff.",
      "Stakeholder approvals inherit by region, contract value, and customer tier.",
      "Rollback path remains attached after publish, not reconstructed afterward.",
    ],
  },
  {
    id: "queue",
    label: "Queue intelligence",
    lane: "Support + Success",
    title: "Move from backlog watching to active queue steering with operator-level precision.",
    summary:
      "Every lane is scored for pressure, policy conflict, and ownership drift. OrbitOps tells managers which workload should auto-route, which should wait, and which needs a human now.",
    stats: [
      ["Auto-routed", "89%"],
      ["Escalations prevented", "146"],
      ["Median intervention", "2.8m"],
    ],
    stages: [
      {
        name: "Pressure scan",
        status: "Healthy",
        detail: "Queue weights recalculated every refresh cycle using SLA and account-criticality signals.",
      },
      {
        name: "Priority routing",
        status: "Stable",
        detail: "Exceptions jump lanes only when policy and staffing windows both allow it.",
      },
      {
        name: "Manager assist",
        status: "Live",
        detail: "AI proposes redistribution with rationale instead of generic load balancing.",
      },
      {
        name: "Recovery brief",
        status: "Exported",
        detail: "A summary of why queues recovered is attached for next planning review.",
      },
    ],
    systemSignals: [
      "Command board highlights ownership drift before customers feel the delay.",
      "AI recommendations include queue-level rationale and confidence, not vague advice.",
      "Operator actions feed the next scenario model automatically.",
    ],
  },
  {
    id: "compliance",
    label: "Compliance trails",
    lane: "Finance + Security",
    title: "Keep every approval, override, and release legible enough for audit and fast enough for operators.",
    summary:
      "OrbitOps maintains an auditable sequence of decisions without freezing the team. Audit logic is embedded into workflow releases, exception reviews, and retrospective analysis.",
    stats: [
      ["Audit coverage", "100%"],
      ["Override windows", "6"],
      ["Evidence prep", "<5m"],
    ],
    stages: [
      {
        name: "Control mapping",
        status: "Bound",
        detail: "Each branch is linked to the control family it must satisfy before state changes.",
      },
      {
        name: "Approval evidence",
        status: "Attached",
        detail: "Screenshots, comments, and policy references travel with the decision object.",
      },
      {
        name: "Exception handling",
        status: "Tracked",
        detail: "Temporary overrides expire automatically and leave a clear decision trail.",
      },
      {
        name: "Export ready",
        status: "Pinned",
        detail: "Operators can pull a complete event package without reconstructing history by hand.",
      },
    ],
    systemSignals: [
      "Governance is part of the operating surface, not bolted on after launch.",
      "Temporary approvals can be granted safely with expiration logic and owner recall.",
      "Audit packets are generated from the same runtime graph that powers execution.",
    ],
  },
  {
    id: "expansion",
    label: "Rollout governance",
    lane: "Ops + Systems",
    title: "Expand automation across regions and teams without duplicating brittle process logic.",
    summary:
      "The platform treats workflow rollout like software distribution. Operators can phase regions, compare branch performance, and govern inheritance rules from one command surface.",
    stats: [
      ["Regions live", "11"],
      ["Variance controls", "23"],
      ["Config reuse", "74%"],
    ],
    stages: [
      {
        name: "Template branch",
        status: "Published",
        detail: "Base workflow module carries owners, guardrails, and handoff expectations forward.",
      },
      {
        name: "Regional overlay",
        status: "Active",
        detail: "Local policy and staffing windows apply without forking the core operating model.",
      },
      {
        name: "Readiness scan",
        status: "Scored",
        detail: "OrbitOps checks queue capacity, exception rates, and compliance fit pre-launch.",
      },
      {
        name: "Governed scale",
        status: "Monitoring",
        detail: "Operators compare performance across regions before broadening release scope.",
      },
    ],
    systemSignals: [
      "Template inheritance keeps teams aligned while preserving local operating reality.",
      "Rollout phases stay visible by region, owner, and customer segment.",
      "Performance deltas feed next launch decisions instead of disappearing into dashboards.",
    ],
  },
];

const scenarios = [
  {
    id: "renewal",
    label: "Quarter-close renewals",
    title: "Stress-test approvals before revenue risk starts piling up.",
    summary:
      "OrbitOps predicts queue pressure from contract value, reviewer availability, and deadline density. Managers can shift policy before the work becomes urgent.",
    metrics: [
      { label: "Queue pressure", value: 72, suffix: "%" },
      { label: "SLA confidence", value: 94, suffix: "%" },
      { label: "Approval layers", value: 3, suffix: "" },
      { label: "Escalation risk", value: 8, suffix: "%" },
    ],
    loads: [
      { lane: "Deal desk", current: 86, projected: 52, status: "Recovered" },
      { lane: "Finance review", current: 74, projected: 58, status: "Stable" },
      { lane: "Legal signoff", current: 49, projected: 43, status: "Contained" },
      { lane: "CS handoff", current: 61, projected: 48, status: "Recovered" },
    ],
    notes: [
      "Auto-approve low-risk renewals when account health and value thresholds both pass.",
      "Insert one floating finance reviewer only during peak close windows.",
      "Trigger a recovery brief if backlog returns above 60% after policy shift.",
    ],
  },
  {
    id: "launch",
    label: "Multi-region release",
    title: "Model rollout governance before a product launch turns into operational drag.",
    summary:
      "Simulate activation by region, support queue readiness, and approval variance before the workflow ships live. OrbitOps shows which market can go first and why.",
    metrics: [
      { label: "Readiness score", value: 89, suffix: "%" },
      { label: "Coverage delta", value: 17, suffix: "%" },
      { label: "Fallback paths", value: 4, suffix: "" },
      { label: "Rollback time", value: 6, suffix: "m" },
    ],
    loads: [
      { lane: "EMEA enablement", current: 58, projected: 44, status: "Ready" },
      { lane: "Support routing", current: 67, projected: 51, status: "Balanced" },
      { lane: "Billing controls", current: 71, projected: 55, status: "Protected" },
      { lane: "Ops command", current: 53, projected: 39, status: "Ready" },
    ],
    notes: [
      "Phase launch by readiness score instead of shipping every region at once.",
      "Enable fallback queue ownership only where staffing coverage clears threshold.",
      "Attach a rollback packet to the live release lane before the first publish.",
    ],
  },
  {
    id: "audit",
    label: "Audit freeze week",
    title: "Keep throughput moving during audit pressure without losing control evidence.",
    summary:
      "OrbitOps can reduce decision load during audit windows by activating temporary approval logic, exception expiry, and evidence capture rules tied to the same workflow graph.",
    metrics: [
      { label: "Evidence readiness", value: 98, suffix: "%" },
      { label: "Manual touches", value: 11, suffix: "" },
      { label: "Temporary overrides", value: 2, suffix: "" },
      { label: "Queue drift", value: 5, suffix: "%" },
    ],
    loads: [
      { lane: "Controller review", current: 64, projected: 46, status: "Documented" },
      { lane: "Security evidence", current: 55, projected: 41, status: "Synced" },
      { lane: "Override queue", current: 39, projected: 27, status: "Low" },
      { lane: "Operator requests", current: 47, projected: 35, status: "Contained" },
    ],
    notes: [
      "Temporary overrides inherit expiration and reviewer recall automatically.",
      "Evidence exports are generated from the live decision path, not assembled manually.",
      "Exception traffic can continue without opening untracked approval routes.",
    ],
  },
];

const policyModes = [
  {
    id: "value",
    label: "High-value contract",
    title: "Approval logic changes as financial impact changes.",
    summary:
      "The decision tree below shows how OrbitOps inserts or removes reviewers dynamically while keeping a full release and audit trail attached to the workflow change.",
    rules: [
      {
        trigger: "Contract value exceeds $250k",
        rule: "Add finance reviewer and freeze publish until margin policy passes.",
        outcome: "Release packet stays in controlled review lane.",
      },
      {
        trigger: "Account flagged for strategic expansion",
        rule: "Promote CS lead and regional GM into approval graph automatically.",
        outcome: "Escalation route remains visible inside the same workflow object.",
      },
      {
        trigger: "Rollback threshold crossed after go-live",
        rule: "Open revert lane and notify operator team with scenario context.",
        outcome: "Publish retracts with audit evidence intact.",
      },
    ],
    auditTrail: [
      "09:14 Policy diff generated from renewal workflow template.",
      "09:19 Finance control family mapped and evidence requirements attached.",
      "09:27 Regional GM approval inserted because contract exceeded threshold.",
      "09:31 Rollback packet generated with scenario snapshot and owner recall.",
    ],
    releasePacket: [
      "Approval graph versioned against live workflow branch",
      "Evidence export prebuilt for audit and procurement review",
      "Rollback motion pre-authorized for high-risk release windows",
    ],
  },
  {
    id: "sla",
    label: "SLA breach path",
    title: "Queue urgency can reroute ownership without creating invisible exceptions.",
    summary:
      "OrbitOps decides when to invoke a fast lane, when to keep work in its normal path, and when to require a human override. Operators see the logic, not just the outcome.",
    rules: [
      {
        trigger: "Priority queue nears breach within 45 minutes",
        rule: "Check staffing window, customer tier, and support control policy together.",
        outcome: "High-value work moves to intervention lane only when allowed.",
      },
      {
        trigger: "Analyst coverage drops below threshold",
        rule: "Redistribute load and block new automation from increasing risk.",
        outcome: "Queue recovers without opening uncontrolled routing branches.",
      },
      {
        trigger: "Manual override requested",
        rule: "Require owner reason, expiration window, and follow-up brief.",
        outcome: "Override remains visible in audit and weekly ops review.",
      },
    ],
    auditTrail: [
      "14:02 Pressure signal tripped after backlog rose 17% above baseline.",
      "14:04 Staffing check failed for APAC lane, so reroute remained blocked.",
      "14:09 Manual override approved with two-hour expiry and review owner.",
      "14:12 Recovery brief queued for next operating review automatically.",
    ],
    releasePacket: [
      "Exception expiry policy attached to every manual reroute",
      "Operator reasoning preserved beside the runtime action",
      "Queue recovery metrics linked to the same decision object",
    ],
  },
  {
    id: "region",
    label: "Regional rollout",
    title: "Govern rollout by readiness instead of cloning new process variants for every team.",
    summary:
      "A regional launch inherits the core workflow, applies local overlays, and keeps performance comparable. OrbitOps makes rollout governance a first-class product surface.",
    rules: [
      {
        trigger: "New region requests local approval overlay",
        rule: "Compare requested variance against base workflow and staffing policy.",
        outcome: "Only supported local differences are admitted into the release packet.",
      },
      {
        trigger: "Readiness score drops after simulation",
        rule: "Pause rollout and hold publish in staging until pressure recovers.",
        outcome: "Operators avoid shipping into an unstable queue state.",
      },
      {
        trigger: "First-wave region outperforms baseline",
        rule: "Promote template branch and copy winning parameters to next market.",
        outcome: "Scale improves through evidence rather than guesswork.",
      },
    ],
    auditTrail: [
      "07:48 EMEA overlay requested with two local control additions.",
      "07:54 Overlay accepted because base policy inheritance remained intact.",
      "08:02 Readiness scan passed and phase-one rollout scheduled.",
      "08:11 Template branch updated after first-wave success criteria cleared.",
    ],
    releasePacket: [
      "Regional overlays diffed against the base workflow branch",
      "Launch phases visible by market, owner, and readiness score",
      "Successful parameters fed back into the next rollout automatically",
    ],
  },
];

const closingStats = [
  ["11", "regions live"],
  ["280", "policy nodes"],
  ["146", "escalations prevented"],
];

export function CommandCenterHomepage() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(workflowViews[0].id);
  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const [activePolicyId, setActivePolicyId] = useState(policyModes[0].id);

  const activeWorkflow =
    workflowViews.find((workflow) => workflow.id === activeWorkflowId) ?? workflowViews[0];
  const activeScenario =
    scenarios.find((scenario) => scenario.id === activeScenarioId) ?? scenarios[0];
  const activePolicy =
    policyModes.find((policy) => policy.id === activePolicyId) ?? policyModes[0];

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden border-b border-white/8 bg-[#030815] pb-20 pt-10 sm:pb-24 sm:pt-14 lg:pb-28"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(36,186,255,0.22),transparent_22%),radial-gradient(circle_at_80%_0%,rgba(64,231,255,0.16),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(102,226,255,0.8),rgba(255,255,255,0))]"
          aria-hidden="true"
        />

        <Container className="relative">
          <Reveal className="max-w-max">
            <div className="command-chip">
              <span className="signal-dot" />
              Autonomous operations control plane
            </div>
          </Reveal>

          <div className="mt-8 grid gap-10 xl:grid-cols-[0.93fr_1.07fr] xl:items-start">
            <Reveal className="max-w-[39rem]" y={28}>
              <p className="data-label text-sky-200">OrbitOps / runtime narrative</p>
              <h1 className="mt-5 max-w-[10.5ch] font-display text-[clamp(3.25rem,7vw,6.4rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-white">
                Enter the operating system behind decisive teams.
              </h1>
              <p className="mt-6 max-w-[34rem] text-base leading-8 text-slate-300 sm:text-lg">
                OrbitOps turns workflow execution, approval logic, queue steering, and release
                governance into one live product surface. It feels like a command environment
                because it behaves like one.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Start a live simulation
                </ButtonLink>
                <ButtonLink href="/features" variant="inverse" className="w-full sm:w-auto">
                  Inspect the product stack
                </ButtonLink>
              </div>

              <p className="mt-4 max-w-[34rem] text-sm leading-6 text-slate-400">
                Bring one workflow cluster, one approval problem, or one rollout bottleneck. The
                first walkthrough models it directly inside the platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {heroSignals.map((signal) => (
                  <span key={signal} className="command-chip-subtle">
                    {signal}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric, index) => (
                  <Reveal key={metric.label} delay={index * 0.06} className="command-panel p-4">
                    <p className="data-label text-slate-500">{metric.label}</p>
                    <p className="mt-3 font-display text-[2.2rem] font-semibold tracking-[-0.08em] text-white">
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                      />
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{metric.detail}</p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12} y={34}>
              <div className="command-shell command-grid scanline-overlay p-4 sm:p-5 lg:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="data-label text-sky-200">Production workspace</p>
                    <h2 className="mt-2 font-display text-[1.8rem] font-semibold tracking-[-0.07em] text-white sm:text-[2.15rem]">
                      Command board / active runtime
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    {["327 playbooks live", "11 regions synced", "RBAC enforced"].map((item) => (
                      <span key={item} className="command-chip-subtle">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-[1.06fr_0.94fr]">
                  <div className="command-panel p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="data-label text-slate-500">Queue intelligence</p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Throughput, pressure, and intervention windows
                        </p>
                      </div>
                      <span className="status-pill status-pill-cyan">refresh / 12s</span>
                    </div>

                    <div className="mt-5 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
                      <div className="space-y-3">
                        {heroQueues.map((queue) => (
                          <div key={queue.lane} className="command-panel-soft p-3.5">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold text-white">{queue.lane}</p>
                                <p className="mt-1 text-xs text-slate-400">{queue.volume}</p>
                              </div>
                              <span className="status-pill">{queue.health}</span>
                            </div>
                            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/6">
                              <motion.div
                                className="h-2 rounded-full bg-[linear-gradient(90deg,#67e8f9,#0ea5e9)]"
                                initial={{ width: 0 }}
                                whileInView={{ width: queue.width }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                              />
                            </div>
                            <p className="mt-3 text-xs text-slate-500">{queue.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="command-panel-soft p-3.5">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="data-label text-slate-500">Autonomous throughput</p>
                            <p className="mt-2 font-display text-4xl font-semibold tracking-[-0.08em] text-white">
                              91%
                            </p>
                          </div>
                          <p className="text-xs text-slate-500">last 12 hours</p>
                        </div>
                        <div className="mt-5 flex h-48 items-end gap-2" aria-hidden="true">
                          {heroBars.map((height, index) => (
                            <motion.div
                              key={`${height}-${index}`}
                              className="flex-1 rounded-t-[0.9rem] bg-[linear-gradient(180deg,rgba(103,232,249,0.96),rgba(14,165,233,0.2))]"
                              initial={{ height: Math.max(height - 18, 26) }}
                              animate={{ height: [height - 10, height, height - 6] }}
                              transition={{
                                duration: 5.2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: index * 0.08,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="command-panel p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="data-label text-slate-500">Release packet</p>
                          <p className="mt-2 text-lg font-semibold text-white">
                            Policy scan is holding clean
                          </p>
                        </div>
                        <span className="status-pill status-pill-emerald">cleared</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          "Finance approvals attached only where contract value crosses threshold.",
                          "Rollback branch prepared for region one with variance controls in place.",
                          "Support capacity stays above launch floor after simulation rerun.",
                        ].map((item) => (
                          <div key={item} className="command-panel-soft px-3.5 py-3 text-sm leading-6 text-slate-300">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="command-panel p-4">
                      <p className="data-label text-slate-500">Operator feed</p>
                      <div className="mt-4 space-y-3">
                        {heroActivity.map((item, index) => (
                          <div key={item} className="flex gap-3 border-l border-white/10 pl-4">
                            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
                            <div>
                              <p className="text-xs text-slate-500">0{index + 1} / live update</p>
                              <p className="mt-1 text-sm leading-6 text-slate-300">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="architecture" className="border-b border-white/8 bg-[#050d1a] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product architecture"
              title="A believable product architecture for teams operating across live queues, policy, and release governance."
              description="OrbitOps is structured like a modern operational platform: ingest signals, reason over policy, execute safely, and preserve operator memory so every decision remains visible later."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
            <div className="space-y-4">
              {architectureLayers.map((layer, index) => (
                <Reveal key={layer.title} delay={index * 0.06}>
                  <article className="command-panel p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="data-label text-slate-500">{layer.label}</p>
                        <h3 className="mt-2 font-display text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
                          {layer.title}
                        </h3>
                      </div>
                      <span className="status-pill status-pill-cyan">module 0{index + 1}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{layer.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {layer.stats.map((stat) => (
                        <span key={stat} className="command-chip-subtle">
                          {stat}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <div className="command-shell relative overflow-hidden p-5 sm:p-6">
                <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
                  <span className="absolute left-[24%] top-1/2 h-px w-[18%] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(103,232,249,0.5))]" />
                  <span className="absolute right-[24%] top-1/2 h-px w-[18%] bg-[linear-gradient(90deg,rgba(103,232,249,0.5),rgba(255,255,255,0))]" />
                  <span className="absolute left-1/2 top-[20%] h-[19%] w-px bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(103,232,249,0.46))]" />
                  <span className="absolute left-1/2 bottom-[20%] h-[19%] w-px bg-[linear-gradient(180deg,rgba(103,232,249,0.46),rgba(255,255,255,0))]" />
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr_1fr] lg:grid-rows-[1fr_1fr]">
                  <div className="command-node lg:col-start-1 lg:row-start-1">
                    <p className="data-label text-sky-200">{architectureNodes[0].title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{architectureNodes[0].detail}</p>
                  </div>
                  <div className="command-node lg:col-start-3 lg:row-start-1">
                    <p className="data-label text-emerald-200">{architectureNodes[1].title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{architectureNodes[1].detail}</p>
                  </div>
                  <div className="command-node lg:col-start-1 lg:row-start-2">
                    <p className="data-label text-sky-200">{architectureNodes[2].title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{architectureNodes[2].detail}</p>
                  </div>
                  <div className="command-node lg:col-start-3 lg:row-start-2">
                    <p className="data-label text-sky-200">{architectureNodes[3].title}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{architectureNodes[3].detail}</p>
                  </div>

                  <div className="command-panel relative flex min-h-[15rem] flex-col justify-between p-5 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                    <div>
                      <p className="data-label text-slate-500">Core runtime</p>
                      <h3 className="mt-3 font-display text-[1.85rem] font-semibold tracking-[-0.06em] text-white">
                        OrbitOps orchestration fabric
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        Policy-aware routing, scenario simulation, governed release logic, and
                        operator memory all run from the same graph so decisions stay consistent.
                      </p>
                    </div>
                    <div className="mt-5 space-y-3">
                      {[
                        "policy graph + approvals",
                        "queue scoring + triage",
                        "release packet + rollback",
                      ].map((item) => (
                        <div key={item} className="command-chip-subtle w-full justify-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="workflows" className="border-b border-white/8 bg-[#06101d] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Workflow orchestration"
              title="A layered walkthrough of how operators govern change, watch queues, and keep approvals legible."
              description="Hover or tap a lane to shift the command board. This section is deliberately product-like: it shows workflow behavior, not marketing promises."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:items-start">
            <Reveal className="xl:sticky xl:top-28" delay={0.04}>
              <div className="command-shell p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {workflowViews.map((workflow) => {
                    const isActive = workflow.id === activeWorkflow.id;
                    return (
                      <button
                        key={workflow.id}
                        type="button"
                        onClick={() => startTransition(() => setActiveWorkflowId(workflow.id))}
                        className={cn(
                          "rounded-[0.9rem] px-3.5 py-2 text-xs font-semibold transition",
                          isActive
                            ? "bg-[linear-gradient(135deg,rgba(103,232,249,0.24),rgba(14,165,233,0.12))] text-white ring-1 ring-cyan-300/30"
                            : "bg-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-100",
                        )}
                        aria-pressed={isActive}
                      >
                        {workflow.label}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWorkflow.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="mt-6 data-label text-sky-200">{activeWorkflow.lane}</p>
                    <h3 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.06em] text-white">
                      {activeWorkflow.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{activeWorkflow.summary}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {activeWorkflow.stats.map(([label, value]) => (
                        <div key={label} className="command-panel-soft px-3.5 py-3">
                          <p className="data-label text-slate-500">{label}</p>
                          <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.06em] text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 command-panel p-4">
                      <p className="data-label text-slate-500">System map</p>
                      <div className="mt-4 space-y-3">
                        {activeWorkflow.stages.map((stage, index) => (
                          <div key={stage.name} className="flex gap-3">
                            <div className="flex w-8 flex-col items-center">
                              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                                0{index + 1}
                              </span>
                              {index < activeWorkflow.stages.length - 1 ? (
                                <span className="mt-2 h-full w-px bg-[linear-gradient(180deg,rgba(103,232,249,0.45),rgba(255,255,255,0))]" />
                              ) : null}
                            </div>
                            <div className="pb-4">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-semibold text-white">{stage.name}</p>
                                <span className="status-pill">{stage.status}</span>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-slate-400">{stage.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {workflowViews.map((workflow, index) => {
                const isActive = workflow.id === activeWorkflow.id;

                return (
                  <Reveal key={workflow.id} delay={index * 0.05}>
                    <button
                      type="button"
                      onClick={() => startTransition(() => setActiveWorkflowId(workflow.id))}
                      onMouseEnter={() => startTransition(() => setActiveWorkflowId(workflow.id))}
                      className={cn(
                        "command-panel w-full p-5 text-left transition",
                        isActive
                          ? "border-cyan-300/28 bg-[linear-gradient(135deg,rgba(14,25,45,0.98),rgba(8,16,30,0.98))] shadow-[0_34px_84px_-40px_rgba(18,184,255,0.44)]"
                          : "hover:border-white/18 hover:bg-[linear-gradient(135deg,rgba(12,22,40,0.98),rgba(7,14,28,0.98))]",
                      )}
                      aria-pressed={isActive}
                    >
                      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <div>
                          <p className="data-label text-slate-500">{workflow.lane}</p>
                          <h3 className="mt-3 font-display text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
                            {workflow.label}
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-slate-300">{workflow.summary}</p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {workflow.systemSignals.map((signal) => (
                            <div key={signal} className="command-panel-soft min-h-[7.25rem] px-3.5 py-3 text-sm leading-6 text-slate-300">
                              {signal}
                            </div>
                          ))}
                        </div>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="simulation" className="border-b border-white/8 bg-[#071220] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Scenario simulation"
              title="Forecast queue load, approval drag, and recovery logic before the operator team feels the impact."
              description="This is the most product-led interaction on the site. Switch scenarios and watch the board update as if you were inside a planning environment."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 command-shell p-5 sm:p-6">
            <div className="flex flex-wrap gap-2">
              {scenarios.map((scenario) => {
                const isActive = scenario.id === activeScenario.id;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => startTransition(() => setActiveScenarioId(scenario.id))}
                    className={cn(
                      "rounded-[0.9rem] px-3.5 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-cyan-300/12 text-white ring-1 ring-cyan-300/30"
                        : "bg-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-100",
                    )}
                    aria-pressed={isActive}
                  >
                    {scenario.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 grid gap-5 xl:grid-cols-[0.94fr_1.06fr]"
              >
                <div className="grid gap-5">
                  <div className="command-panel p-5">
                    <p className="data-label text-sky-200">Selected simulation</p>
                    <h3 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.06em] text-white">
                      {activeScenario.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{activeScenario.summary}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {activeScenario.metrics.map((metric) => (
                        <div key={metric.label} className="command-panel-soft px-3.5 py-3">
                          <p className="data-label text-slate-500">{metric.label}</p>
                          <p className="mt-2 font-display text-[1.95rem] font-semibold tracking-[-0.06em] text-white">
                            <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="command-panel p-5">
                    <p className="data-label text-slate-500">Recommended shifts</p>
                    <div className="mt-4 space-y-3">
                      {activeScenario.notes.map((note) => (
                        <div key={note} className="command-panel-soft px-3.5 py-3 text-sm leading-6 text-slate-300">
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="command-panel p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="data-label text-slate-500">Projected queue board</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Current load vs. policy-adjusted outcome
                      </p>
                    </div>
                    <span className="status-pill status-pill-cyan">sandbox / live model</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {activeScenario.loads.map((item) => (
                      <div key={item.lane} className="command-panel-soft p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold text-white">{item.lane}</p>
                            <p className="mt-1 text-xs text-slate-500">policy-adjusted forecast</p>
                          </div>
                          <span className="status-pill">{item.status}</span>
                        </div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <div>
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span>Current</span>
                              <span>{item.current}%</span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/6">
                              <motion.div
                                className="h-2 rounded-full bg-white/30"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.current}%` }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-xs text-slate-400">
                              <span>Projected</span>
                              <span>{item.projected}%</span>
                            </div>
                            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/6">
                              <motion.div
                                className="h-2 rounded-full bg-[linear-gradient(90deg,#67e8f9,#0ea5e9)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${item.projected}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>

      <section id="governance" className="bg-[#081523] py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Approval logic + audit memory"
              title="Decision trees, approval lanes, and audit trails live inside the product surface instead of floating outside it."
              description="This final module makes the product stance explicit: OrbitOps treats governance as part of execution, so the software remains fast without becoming opaque."
              tone="dark"
            />
          </Reveal>

          <div className="mt-12 grid gap-8 xl:grid-cols-[0.86fr_1.14fr] xl:items-start">
            <Reveal className="xl:sticky xl:top-28">
              <div className="command-shell p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {policyModes.map((policy) => {
                    const isActive = policy.id === activePolicy.id;
                    return (
                      <button
                        key={policy.id}
                        type="button"
                        onClick={() => startTransition(() => setActivePolicyId(policy.id))}
                        className={cn(
                          "rounded-[0.9rem] px-3.5 py-2 text-xs font-semibold transition",
                          isActive
                            ? "bg-cyan-300/12 text-white ring-1 ring-cyan-300/30"
                            : "bg-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-100",
                        )}
                        aria-pressed={isActive}
                      >
                        {policy.label}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePolicy.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="mt-6 data-label text-sky-200">Decision mode</p>
                    <h3 className="mt-3 font-display text-[1.95rem] font-semibold tracking-[-0.06em] text-white">
                      {activePolicy.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{activePolicy.summary}</p>

                    <div className="mt-6 command-panel p-4">
                      <p className="data-label text-slate-500">Release packet includes</p>
                      <div className="mt-4 space-y-3">
                        {activePolicy.releasePacket.map((item) => (
                          <div key={item} className="command-panel-soft px-3.5 py-3 text-sm leading-6 text-slate-300">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal>
                <div className="command-panel p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="data-label text-slate-500">Decision tree</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Policy triggers and outcomes
                      </p>
                    </div>
                    <span className="status-pill status-pill-emerald">governed path</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {activePolicy.rules.map((rule, index) => (
                      <div key={rule.trigger} className="grid gap-4 rounded-[1rem] border border-white/8 bg-white/[0.03] p-4 lg:grid-cols-[auto_1fr_auto_1fr] lg:items-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                          0{index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{rule.trigger}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">{rule.rule}</p>
                        </div>
                        <span className="hidden h-px w-10 bg-[linear-gradient(90deg,rgba(103,232,249,0.6),rgba(255,255,255,0))] lg:block" aria-hidden="true" />
                        <div className="command-panel-soft px-3.5 py-3 text-sm leading-6 text-slate-300">
                          {rule.outcome}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-4 lg:grid-cols-[0.96fr_1.04fr]">
                  <div className="command-panel p-5">
                    <p className="data-label text-slate-500">Audit trail</p>
                    <div className="mt-5 space-y-4">
                      {activePolicy.auditTrail.map((item, index) => (
                        <div key={item} className="flex gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.82)]" />
                          <div>
                            <p className="text-xs text-slate-500">entry 0{index + 1}</p>
                            <p className="mt-1 text-sm leading-6 text-slate-300">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="command-shell p-5">
                    <p className="data-label text-sky-200">Rollout close</p>
                    <h3 className="mt-3 font-display text-[1.85rem] font-semibold tracking-[-0.06em] text-white">
                      Product-led from the first screen to the last governed action.
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                      OrbitOps now reads like a premium operational intelligence platform instead of
                      a SaaS brochure. The homepage is built from command boards, workflow maps,
                      scenario models, and decision logic that all reinforce the same product story.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {closingStats.map(([value, label]) => (
                        <div key={label} className="command-panel-soft px-3.5 py-4">
                          <p className="font-display text-3xl font-semibold tracking-[-0.07em] text-white">
                            {value}
                          </p>
                          <p className="mt-2 text-sm text-slate-400">{label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <ButtonLink href="/contact">Book a product walkthrough</ButtonLink>
                      <ButtonLink href="/about" variant="inverse">
                        Review the operating model
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
