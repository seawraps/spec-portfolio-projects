export type NavLink = {
  href: string;
  label: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type FeatureCard = {
  title: string;
  description: string;
  detail: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  featured?: boolean;
  featureList: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TimelineItem = {
  title: string;
  description: string;
  year: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
};

export type FeaturePillar = {
  title: string;
  summary: string;
  bulletPoints: string[];
};

export type TeamUseCase = {
  team: string;
  outcomes: string[];
};

export type IntegrationGroup = {
  category: string;
  tools: string[];
};

export const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export const heroMetrics: Metric[] = [
  { value: "38%", label: "faster operational cycle time" },
  { value: "99.95%", label: "workflow uptime across automations" },
  { value: "14 hrs", label: "average weekly time saved per team" },
];

export const socialProofLogos: string[] = [
  "Northstar Logistics",
  "Metricly",
  "Acorn Health",
  "Summit Commerce",
  "Fleetline",
  "Arcwell Energy",
];

export const homeFeatureCards: FeatureCard[] = [
  {
    title: "Visual Workflow Builder",
    description:
      "Design recurring processes with smart conditions, approvals, and SLA guardrails.",
    detail:
      "Drag-and-drop logic, branching paths, and reusable templates for onboarding, renewals, and incident playbooks.",
  },
  {
    title: "AI Ops Assistant",
    description:
      "Generate automations, summarize blockers, and suggest process optimizations in plain language.",
    detail:
      "Teams can ask OrbitOps to draft workflows, detect handoff risks, and auto-document process changes.",
  },
  {
    title: "Live Performance Analytics",
    description:
      "Track throughput, cycle time, and SLA risk in a single operations dashboard.",
    detail:
      "Break down workflow performance by owner, region, or account segment with export-ready reports.",
  },
  {
    title: "Exception Management",
    description:
      "Automatically route exceptions with priority scoring and escalation paths.",
    detail:
      "Stop missed handoffs by pushing alert bundles to Slack, email, and ticketing tools in real time.",
  },
  {
    title: "Cross-Team Collaboration",
    description:
      "Coordinate sales ops, support, finance, and implementation from one command layer.",
    detail:
      "Shared runbooks, accountability views, and owner-level action feeds keep distributed teams aligned.",
  },
  {
    title: "Enterprise Security Controls",
    description:
      "Protect operations with role-based access, audit trails, and policy enforcement.",
    detail:
      "SOC 2-ready controls, SSO/SAML support, and secure data retention policies for compliance-heavy teams.",
  },
];

export const integrationGroups: IntegrationGroup[] = [
  {
    category: "CRM & Revenue",
    tools: ["Salesforce", "HubSpot", "Pipedrive", "Stripe"],
  },
  {
    category: "Work Management",
    tools: ["Notion", "Jira", "Asana", "ClickUp"],
  },
  {
    category: "Communication",
    tools: ["Slack", "Microsoft Teams", "Gmail", "Zendesk"],
  },
  {
    category: "Data & BI",
    tools: ["Snowflake", "BigQuery", "Looker", "Google Sheets"],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$59",
    description: "For early-stage teams building repeatable internal operations.",
    ctaLabel: "Start free trial",
    featureList: [
      "Up to 8 team members",
      "25 active workflows",
      "Prebuilt workflow templates",
      "Slack and HubSpot integrations",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$179",
    description: "For scaling teams that need automation, analytics, and stronger controls.",
    ctaLabel: "Book growth demo",
    featured: true,
    featureList: [
      "Up to 35 team members",
      "Unlimited workflows",
      "Advanced workflow logic and approvals",
      "Custom dashboards and SLA reporting",
      "Priority support + onboarding specialist",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For large organizations running multi-region or compliance-heavy operations.",
    ctaLabel: "Talk to sales",
    featureList: [
      "Unlimited seats",
      "Dedicated success architect",
      "SSO/SAML and audit exports",
      "Custom security and retention policies",
      "99.9% SLA and quarterly process reviews",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "OrbitOps replaced five disconnected tools for our revenue operations team. Our renewal process now moves in hours instead of days.",
    name: "Maya Chen",
    role: "Director of Revenue Operations",
    company: "Summit Commerce",
  },
  {
    quote:
      "We used to run weekly incident handoff calls just to stay aligned. OrbitOps turned those into automated exception queues with clear ownership.",
    name: "Jordan Patel",
    role: "VP of Customer Success",
    company: "Northstar Logistics",
  },
  {
    quote:
      "The workflow analytics helped us identify exactly where onboarding stalled. We cut cycle time by 41% in one quarter.",
    name: "Alina Romero",
    role: "Head of Implementation",
    company: "Metricly",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How long does OrbitOps take to implement?",
    answer:
      "Most teams launch their first two workflows in less than one week. Growth and Scale plans include guided implementation to speed rollout.",
  },
  {
    question: "Can non-technical teams create workflows?",
    answer:
      "Yes. OrbitOps is built for operations leaders and managers. The builder uses a visual interface, and AI can draft workflows from plain-language prompts.",
  },
  {
    question: "Does OrbitOps support role-based permissions?",
    answer:
      "Yes. You can define role-based access by team, workflow, and data source. Every workflow action is logged for governance and audit visibility.",
  },
  {
    question: "What integrations are available out of the box?",
    answer:
      "OrbitOps ships with core integrations across CRM, support, communication, and data tools. You can also connect custom systems through webhooks and API endpoints.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Starter includes a 14-day free trial with no credit card required. You can build workflows, invite teammates, and test live automation before committing.",
  },
  {
    question: "Can OrbitOps work across multiple departments?",
    answer:
      "Absolutely. Many customers run cross-functional workflows between sales ops, customer success, finance, and support in one shared workspace.",
  },
];

export const aboutTimeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Built with operators in the loop",
    description:
      "OrbitOps started as an internal toolkit for scaling post-sales operations at two high-growth SaaS companies.",
  },
  {
    year: "2024",
    title: "Expanded into a unified operations platform",
    description:
      "We combined workflow automation, exception handling, and analytics so teams could run every critical process in one place.",
  },
  {
    year: "2025",
    title: "Launched AI-guided process optimization",
    description:
      "OrbitOps introduced an AI assistant that identifies bottlenecks and proposes workflow improvements grounded in actual performance data.",
  },
];

export const companyValues: ValueItem[] = [
  {
    title: "Design for real operators",
    description:
      "Every feature should make frontline operational work clearer, faster, and less stressful.",
  },
  {
    title: "Ship measurable outcomes",
    description:
      "We prioritize improvements that customers can verify in cycle time, reliability, and team bandwidth.",
  },
  {
    title: "Automate with accountability",
    description:
      "Automation should increase trust, with explicit owners, transparent logic, and complete auditability.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Sara Donovan",
    role: "Co-founder & CEO",
    bio: "Former VP Ops at two Series B SaaS teams. Led global customer and revenue operations transformations.",
  },
  {
    name: "Ethan Blake",
    role: "Co-founder & CTO",
    bio: "Ex-staff engineer in workflow orchestration and systems reliability. Built distributed automation tooling at scale.",
  },
  {
    name: "Priya Nanda",
    role: "Head of Product",
    bio: "Previously led B2B platform UX teams focused on enterprise onboarding, support operations, and analytics.",
  },
];

export const featurePillars: FeaturePillar[] = [
  {
    title: "Workflow design that scales with complexity",
    summary:
      "Map simple recurring tasks or multi-stage operational programs with approvals, dependencies, and dynamic routing.",
    bulletPoints: [
      "Template library for onboarding, renewals, escalations, and quality checks",
      "Conditional logic, SLA windows, and owner assignment rules",
      "Reusable modules to standardize shared process steps",
    ],
  },
  {
    title: "Execution visibility in real time",
    summary:
      "Track every workflow from kickoff to completion with live progress, risk scoring, and owner-level accountability.",
    bulletPoints: [
      "Operational command board with queue health indicators",
      "Exception feed with severity prioritization and auto-escalation",
      "Time-to-resolution analytics segmented by workflow and team",
    ],
  },
  {
    title: "Optimization guided by data and AI",
    summary:
      "Turn operational history into recommendations your team can execute immediately.",
    bulletPoints: [
      "AI suggestions for bottleneck removal and handoff simplification",
      "Root-cause views for delays, retries, and policy breaches",
      "Scenario modeling to test workflow changes before deployment",
    ],
  },
];

export const teamUseCases: TeamUseCase[] = [
  {
    team: "Revenue Operations",
    outcomes: [
      "Automate quote approvals and renewal prep sequences",
      "Reduce deal desk back-and-forth with rule-based assignment",
      "Monitor pipeline hygiene workflows in one dashboard",
    ],
  },
  {
    team: "Customer Success",
    outcomes: [
      "Run standardized onboarding playbooks with milestone alerts",
      "Trigger risk interventions from product usage signals",
      "Coordinate escalations between CSM, support, and product",
    ],
  },
  {
    team: "Finance & Support",
    outcomes: [
      "Automate invoicing exception workflows and approvals",
      "Route support tickets by urgency, account tier, and SLA",
      "Create audit-ready logs for compliance and policy checks",
    ],
  },
];

export const contactChannels = [
  {
    title: "Sales",
    detail: "Talk pricing, rollout planning, and procurement timelines.",
    email: "sales@orbitops.io",
  },
  {
    title: "Support",
    detail: "Get help with product usage, onboarding, and integrations.",
    email: "support@orbitops.io",
  },
  {
    title: "Partnerships",
    detail: "Explore channel, integration, and ecosystem opportunities.",
    email: "partners@orbitops.io",
  },
];
