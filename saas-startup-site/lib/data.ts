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
  impact: string;
  footprint: string;
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

export type ContactChannel = {
  title: string;
  detail: string;
  email: string;
  responseTime: string;
};

export const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export const heroMetrics: Metric[] = [
  { value: "42%", label: "faster handoff resolution after rollout" },
  { value: "99.97%", label: "automation reliability across production workflows" },
  { value: "18 hrs", label: "manager time reclaimed every week per team" },
];

export const socialProofLogos: string[] = [
  "Northstar Cloud",
  "Metricly",
  "Rally Commerce",
  "Arcwell Systems",
  "LayerFive Health",
  "Beacon Logistics",
];

export const homeFeatureCards: FeatureCard[] = [
  {
    title: "Operational control plane",
    description:
      "Run revenue, onboarding, finance, and support workflows from one live command surface.",
    detail:
      "Queue ownership, SLA risk, and exception routing stay visible across every handoff without stitching together status docs.",
  },
  {
    title: "Workflow design studio",
    description:
      "Model complex approvals, branch logic, and service-level windows with reusable workflow modules.",
    detail:
      "Product, ops, and systems teams can ship standard operating flows faster without creating brittle one-off automations.",
  },
  {
    title: "AI-guided optimization",
    description:
      "Turn operational history into recommendations your team can act on during the same planning cycle.",
    detail:
      "OrbitOps flags delay patterns, suggests owner and policy updates, and drafts change briefs backed by actual workflow data.",
  },
  {
    title: "Enterprise audit history",
    description:
      "Every trigger, override, approval, and policy exception is logged in one searchable timeline.",
    detail:
      "Security, compliance, and leadership teams get a clean record of who changed what and how workflows performed afterward.",
  },
  {
    title: "Cross-stack orchestration",
    description:
      "Sync data from CRM, ticketing, billing, and warehouse systems without waiting on custom internal tooling.",
    detail:
      "Use native connectors, APIs, and webhooks to keep workflows grounded in the systems teams already trust.",
  },
  {
    title: "Executive reporting layer",
    description:
      "Package throughput, escalation, and reliability metrics into dashboards leadership can review every week.",
    detail:
      "Move from anecdotal process reviews to clear operational scorecards with ownership, impact, and trend context.",
  },
];

export const integrationGroups: IntegrationGroup[] = [
  {
    category: "Revenue & billing",
    tools: ["Salesforce", "HubSpot", "Chargebee", "Stripe"],
  },
  {
    category: "Service delivery",
    tools: ["Zendesk", "Intercom", "Jira", "Linear"],
  },
  {
    category: "Collaboration",
    tools: ["Slack", "Microsoft Teams", "Notion", "Google Workspace"],
  },
  {
    category: "Data & governance",
    tools: ["Snowflake", "BigQuery", "dbt Cloud", "Looker"],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Team",
    price: "$79",
    description: "For operators replacing manual trackers and launching their first controlled workflows.",
    ctaLabel: "Start evaluation",
    featureList: [
      "Up to 12 makers and reviewers",
      "40 active workflows with templates",
      "Slack, HubSpot, and Stripe connectors",
      "Queue dashboards and SLA alerts",
      "Email support and guided setup",
    ],
  },
  {
    name: "Business",
    price: "$249",
    description: "For scaling B2B teams running cross-functional workflows with approvals and analytics.",
    ctaLabel: "Book business demo",
    featured: true,
    featureList: [
      "Unlimited workflows and environments",
      "Advanced routing, approvals, and policy rules",
      "Executive dashboards and workflow scorecards",
      "Priority onboarding with solution architect",
      "SSO, audit exports, and role-based controls",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For regional or compliance-heavy organizations standardizing operations across multiple teams.",
    ctaLabel: "Talk to enterprise sales",
    featureList: [
      "Unlimited seats with procurement support",
      "Custom data retention and governance controls",
      "Private networking and security review assistance",
      "Quarterly workflow architecture reviews",
      "Dedicated success lead and response SLAs",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "OrbitOps gave us a single operating layer for renewals, onboarding, and escalations. Leadership finally sees the same operational truth our managers do.",
    name: "Maya Chen",
    role: "VP of Revenue Operations",
    company: "Rally Commerce",
    impact: "Cut approval cycle time by 43% in the first quarter",
    footprint: "240-person SaaS business across AMER and EMEA",
  },
  {
    quote:
      "We replaced a tangle of Slack threads and weekly check-ins with exception queues that route automatically. The product feels designed for serious operators.",
    name: "Jordan Patel",
    role: "Chief Customer Officer",
    company: "Beacon Logistics",
    impact: "Reduced onboarding escalations by 37%",
    footprint: "Global implementation and support organization",
  },
  {
    quote:
      "The AI change briefs are unusually useful because they are grounded in actual workflow behavior, not generic advice. Our systems team ships process updates faster now.",
    name: "Alina Romero",
    role: "Head of Systems & Enablement",
    company: "Metricly",
    impact: "Recovered 18 manager hours per week",
    footprint: "Multi-product B2B company with 9 operational teams",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How long does a typical OrbitOps rollout take?",
    answer:
      "Most Business customers launch their first production workflow in seven to ten days. Teams with existing process maps can move faster, while Enterprise rollouts usually phase by business function.",
  },
  {
    question: "Can non-technical teams own workflow changes?",
    answer:
      "Yes. Operations leaders can design and update workflows through the visual studio, while platform and security teams keep approval and governance controls in place.",
  },
  {
    question: "What security and governance controls are available?",
    answer:
      "OrbitOps supports SSO, role-based access, audit exports, approval rules, and configurable retention policies. Enterprise plans include security review support during procurement.",
  },
  {
    question: "Do you support custom systems or internal tools?",
    answer:
      "Yes. In addition to native integrations, OrbitOps exposes APIs and webhooks so teams can ingest internal events or trigger downstream systems without rebuilding core workflows.",
  },
  {
    question: "Is pricing based on automation volume?",
    answer:
      "Team and Business plans are seat-based with generous workflow volume included. Enterprise plans can be structured around deployment footprint, governance requirements, and support needs.",
  },
  {
    question: "Which teams usually buy OrbitOps first?",
    answer:
      "Revenue operations, customer onboarding, support leadership, and finance systems teams are the most common first buyers. Most customers expand into adjacent functions after proving value in one workflow cluster.",
  },
];

export const aboutTimeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Started inside post-sales operations",
    description:
      "OrbitOps began as an internal orchestration layer used to stabilize onboarding, renewal, and escalation workflows across two fast-growing SaaS teams.",
  },
  {
    year: "2024",
    title: "Expanded into a full operations platform",
    description:
      "The team combined workflow execution, SLA tracking, and audit history into one product so leaders could manage operations with fewer spreadsheets and status meetings.",
  },
  {
    year: "2025",
    title: "Introduced AI-backed workflow improvement",
    description:
      "OrbitOps launched AI-generated change briefs and optimization recommendations grounded in real queue and throughput performance.",
  },
];

export const companyValues: ValueItem[] = [
  {
    title: "Operational clarity over automation theater",
    description:
      "We build systems that make ownership, workflow state, and business impact easier to understand, not harder.",
  },
  {
    title: "Governance should travel with speed",
    description:
      "Fast-moving teams still need secure approvals, clean audit history, and policy visibility. We design for both.",
  },
  {
    title: "Every workflow needs a measurable outcome",
    description:
      "Cycle time, reliability, and exception reduction are baseline metrics for every launch we support.",
  },
];

export const leadershipTeam: LeadershipMember[] = [
  {
    name: "Sara Donovan",
    role: "Co-founder & CEO",
    bio: "Former VP of Operations at two Series B SaaS companies. Led revenue, onboarding, and support transformation programs across global teams.",
  },
  {
    name: "Ethan Blake",
    role: "Co-founder & CTO",
    bio: "Ex-staff engineer focused on workflow orchestration, systems reliability, and secure automation infrastructure for enterprise software.",
  },
  {
    name: "Priya Nanda",
    role: "Head of Product",
    bio: "Previously led B2B platform UX for onboarding, service operations, and analytics products used by multi-team operators.",
  },
];

export const featurePillars: FeaturePillar[] = [
  {
    title: "Design workflows that hold up under real complexity",
    summary:
      "Build recurring processes with approvals, branching, dependencies, and region-specific routing without creating brittle workflow sprawl.",
    bulletPoints: [
      "Reusable workflow modules for onboarding, renewals, billing reviews, and incident response",
      "Conditional logic, owner rules, service windows, and policy checkpoints",
      "Versioning support so teams can improve production flows safely over time",
    ],
  },
  {
    title: "Run a live command layer for day-to-day execution",
    summary:
      "Give leaders and managers one place to monitor queue health, workload distribution, and time-sensitive exceptions.",
    bulletPoints: [
      "Shared command board with urgency, SLA, and owner health indicators",
      "Exception routing with escalation policies and acknowledgment tracking",
      "Cross-tool activity history that preserves context for every workflow run",
    ],
  },
  {
    title: "Improve process architecture with evidence",
    summary:
      "Use AI and analytics to decide which handoffs, policies, and staffing patterns need to change next.",
    bulletPoints: [
      "Root-cause analysis for delays, retries, and ownership gaps",
      "AI-generated change briefs tied to actual workflow behavior",
      "Scenario analysis to compare throughput and queue outcomes before rollout",
    ],
  },
];

export const teamUseCases: TeamUseCase[] = [
  {
    team: "Revenue operations",
    outcomes: [
      "Automate quote approvals, deal desk routing, and renewal prep with visible ownership",
      "Track policy exceptions before they slow active pipeline movement",
      "Package leadership scorecards around cycle time, approval load, and risk",
    ],
  },
  {
    team: "Customer onboarding and success",
    outcomes: [
      "Run milestone-based onboarding with health signals, escalations, and stakeholder handoffs",
      "Coordinate interventions between CSM, support, product, and services without status chasing",
      "Measure launch risk, time-to-value, and issue response from one system of record",
    ],
  },
  {
    team: "Finance, support, and systems",
    outcomes: [
      "Automate invoicing exceptions, approval chains, and policy checks with audit-ready logs",
      "Route high-priority tickets using account tier, SLA status, and service context",
      "Connect operational workflows to internal systems without rebuilding core orchestration logic",
    ],
  },
];

export const contactChannels: ContactChannel[] = [
  {
    title: "Sales & evaluation",
    detail: "Talk rollout sequencing, security review, pricing, and procurement timing.",
    email: "sales@orbitops.io",
    responseTime: "Same business day",
  },
  {
    title: "Customer success",
    detail: "Get help with onboarding, workflow adoption, or integration planning.",
    email: "support@orbitops.io",
    responseTime: "Within 4 business hours",
  },
  {
    title: "Technology partnerships",
    detail: "Discuss ecosystem integrations, partner plays, and shared customer deployments.",
    email: "partners@orbitops.io",
    responseTime: "Within 1 business day",
  },
];
