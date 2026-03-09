export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
};

export type CaseStudy = {
  client: string;
  sector: string;
  challenge: string;
  approach: string;
  outcomes: string[];
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ProcessStep = {
  title: string;
  summary: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type EngagementModel = {
  name: string;
  bestFor: string;
  investment: string;
  includes: string[];
};

export const agency = {
  name: "Signal & Stone",
  tagline: "Performance-led creative for growth-stage teams.",
  description:
    "Signal & Stone is a strategy and creative marketing agency helping ambitious teams turn demand into revenue.",
  location: "Austin, TX",
  email: "hello@signalandstone.agency",
  phone: "+1 (512) 555-0184",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    slug: "paid-ads",
    name: "Paid Ads",
    short: "Full-funnel media buying and creative testing across search, social, and video.",
    description:
      "We build paid acquisition systems that scale with discipline, not guesswork. Every campaign is paired with intentional messaging, weekly optimization cycles, and transparent reporting.",
    outcomes: [
      "Lower customer acquisition cost without volume loss",
      "Faster learning loops through creative and audience testing",
      "Clear visibility from first click to closed revenue",
    ],
    deliverables: [
      "Channel and budget strategy",
      "Campaign architecture and tracking plan",
      "Ad creative direction and testing matrix",
      "Weekly pacing, optimization, and insights",
    ],
  },
  {
    slug: "branding",
    name: "Branding",
    short: "Positioning, voice, and visual systems that make teams instantly recognizable.",
    description:
      "Your brand should remove friction from every sale. We sharpen positioning and translate it into visual and verbal systems your team can deploy across campaigns, decks, and product touchpoints.",
    outcomes: [
      "Clear market positioning against crowded competitors",
      "Consistent voice and art direction across channels",
      "Higher conversion from message-market alignment",
    ],
    deliverables: [
      "Category and competitor landscape",
      "Messaging framework and proof stack",
      "Visual direction, design toolkit, and usage rules",
      "Launch story for internal and external rollout",
    ],
  },
  {
    slug: "web-strategy",
    name: "Web Strategy",
    short: "Conversion-focused site strategy, UX architecture, and high-impact page planning.",
    description:
      "Websites are revenue systems, not digital brochures. We architect journeys around buyer intent, prioritize high-impact pages, and align site content with pipeline goals.",
    outcomes: [
      "Improved lead quality through tighter journey mapping",
      "Stronger demo and contact conversion rates",
      "Faster page iteration with measurable hypotheses",
    ],
    deliverables: [
      "Journey mapping by audience and intent",
      "Information architecture and page briefs",
      "Wireframes and copy priorities",
      "Measurement framework for optimization",
    ],
  },
  {
    slug: "cro",
    name: "CRO",
    short: "Structured conversion experiments to turn more sessions into qualified pipeline.",
    description:
      "We run CRO like product teams run feature delivery: by priority, evidence, and iteration speed. Every experiment is tied to a business KPI and documented for future learning.",
    outcomes: [
      "More qualified conversions from existing traffic",
      "Reduced friction in key on-site actions",
      "Documented experimentation backlog and wins",
    ],
    deliverables: [
      "Funnel diagnostics and drop-off analysis",
      "Experiment roadmap with impact scoring",
      "Copy, layout, and offer testing",
      "Monthly performance and learning review",
    ],
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    short: "Editorial and lifecycle content aligned to demand capture and sales enablement.",
    description:
      "We plan and produce content that supports each stage of the buyer journey, from discovery to decision. The result is a system that drives compounding organic and outbound performance.",
    outcomes: [
      "Content themes tied to revenue opportunities",
      "Better sales conversion through sharper enablement assets",
      "Cross-channel consistency from one strategic narrative",
    ],
    deliverables: [
      "Topic and intent map",
      "Editorial roadmap and content operations",
      "Landing page and lifecycle messaging",
      "Enablement content for sales conversations",
    ],
  },
  {
    slug: "creative-campaigns",
    name: "Creative Campaigns",
    short: "Big campaign ideas with execution systems built for speed and scale.",
    description:
      "When growth stalls, teams need a bold campaign that cuts through. We develop the concept, channel rollout, and production toolkit so your team can execute without chaos.",
    outcomes: [
      "Higher engagement and branded search lift",
      "Unified campaign execution across channels",
      "Faster production with reusable creative systems",
    ],
    deliverables: [
      "Campaign concept and narrative arc",
      "Channel rollout and launch timeline",
      "Creative direction and production briefs",
      "Post-launch analysis and iteration plan",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    client: "Northline Health",
    sector: "Digital Healthcare",
    challenge:
      "Lead costs were rising while qualified demo volume dropped quarter-over-quarter.",
    approach:
      "Rebuilt paid search structure, launched new value-led landing pages, and introduced a weekly CRO sprint.",
    outcomes: [
      "42% decrease in cost per qualified lead in 90 days",
      "2.1x increase in booked demos from paid traffic",
      "$1.3M in pipeline attributed within one quarter",
    ],
  },
  {
    client: "Beacon Freight",
    sector: "Logistics SaaS",
    challenge:
      "Strong product-market fit but weak category story limited enterprise sales velocity.",
    approach:
      "Refined positioning, rebuilt the website narrative, and launched an integrated LinkedIn and search campaign.",
    outcomes: [
      "67% growth in enterprise inbound opportunities",
      "31% lift in proposal win rate",
      "Sales cycle shortened by 18 days on average",
    ],
  },
  {
    client: "Luma Commerce",
    sector: "DTC Retail",
    challenge:
      "Acquisition was scaling, but retention and repeat purchase lagged behind targets.",
    approach:
      "Built a lifecycle content strategy, refreshed creative cadence, and tested post-purchase offer journeys.",
    outcomes: [
      "28% increase in repeat purchase rate",
      "39% lift in email-driven revenue",
      "3.6x blended ROAS during holiday campaign window",
    ],
  },
];

export const metrics: Metric[] = [
  {
    value: "3.4x",
    label: "Average ROAS lift",
    detail: "Across paid media engagements after initial optimization window.",
  },
  {
    value: "43%",
    label: "Median CAC reduction",
    detail: "Measured across B2B and DTC accounts in first 120 days.",
  },
  {
    value: "$4.8M",
    label: "Pipeline influenced",
    detail: "Attributed to campaign and web optimization work in the last 12 months.",
  },
  {
    value: "11 days",
    label: "Average test velocity",
    detail: "From experiment brief to decision-ready readout.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "01. Align",
    summary:
      "We map growth goals, funnel constraints, and team capacity into a practical 90-day focus plan.",
  },
  {
    title: "02. Diagnose",
    summary:
      "Analytics, audience, and creative audits surface where performance is leaking and where upside is highest.",
  },
  {
    title: "03. Build",
    summary:
      "We launch channel, messaging, and web improvements with clear owners and KPI definitions.",
  },
  {
    title: "04. Experiment",
    summary:
      "A rolling test backlog drives conversion and efficiency gains every sprint.",
  },
  {
    title: "05. Scale",
    summary:
      "Winning patterns are documented into repeatable playbooks your team can keep compounding.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Signal & Stone feels like an elite in-house growth team. They brought clarity to our message and discipline to our media performance.",
    name: "Maya Patel",
    role: "VP of Marketing",
    company: "Northline Health",
  },
  {
    quote:
      "We hired them for paid ads and ended up overhauling our go-to-market narrative. The impact showed up in pipeline fast.",
    name: "Chris Alden",
    role: "Chief Revenue Officer",
    company: "Beacon Freight",
  },
  {
    quote:
      "Their process is unusually sharp. Every recommendation had a rationale, a metric, and an owner.",
    name: "Sierra Robinson",
    role: "Head of Growth",
    company: "Luma Commerce",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    name: "Growth Sprint",
    bestFor: "Teams that need rapid wins in one channel or funnel stage.",
    investment: "$8k-$12k / month",
    includes: [
      "One strategic focus area",
      "Weekly optimization cadence",
      "Biweekly stakeholder readout",
    ],
  },
  {
    name: "Integrated Retainer",
    bestFor: "Companies ready to align paid, web, and creative under one growth plan.",
    investment: "$15k-$28k / month",
    includes: [
      "Cross-channel strategy and execution",
      "Dedicated pod: strategist, media lead, creative lead",
      "Monthly executive performance review",
    ],
  },
  {
    name: "Campaign Launch Partner",
    bestFor: "Product launches, rebrands, or seasonal campaigns with fixed timelines.",
    investment: "$25k+ per launch",
    includes: [
      "Campaign concept and rollout plan",
      "Creative production system",
      "Launch analytics and postmortem",
    ],
  },
];

export const aboutValues = [
  {
    title: "Strategy before channels",
    text: "We do not start with platform tactics. We start with business outcomes, buyer context, and a measurable plan.",
  },
  {
    title: "Creative with accountability",
    text: "Strong ideas should also perform. We pair creative decisions with explicit hypotheses and KPI targets.",
  },
  {
    title: "Senior-led execution",
    text: "Our client team includes experienced strategists and operators, not a rotating cast of juniors.",
  },
  {
    title: "Transparent partnership",
    text: "You will always know what is changing, why it matters, and what we are testing next.",
  },
];

export const faqs = [
  {
    question: "How quickly can we start?",
    answer:
      "Most engagements begin in 2-3 weeks, including onboarding, baseline audit, and first sprint planning.",
  },
  {
    question: "Do you work with in-house teams?",
    answer:
      "Yes. We often embed into existing marketing and design teams, then fill strategic and execution gaps.",
  },
  {
    question: "What does reporting look like?",
    answer:
      "You receive a live KPI dashboard, weekly performance notes, and a monthly executive summary with decisions and next bets.",
  },
];
