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
  tagline: string;
  cadence: string;
};

export type CaseStudy = {
  client: string;
  sector: string;
  challenge: string;
  approach: string;
  outcomes: string[];
  headlineMetric: string;
  headlineLabel: string;
  channelMix: string[];
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
  benchmark: string;
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
  tagline: "Performance-led creative for teams that need faster revenue movement.",
  description:
    "Signal & Stone is a senior-led growth agency pairing paid media, campaign creative, and conversion systems to turn demand into measurable revenue.",
  location: "Austin, TX + remote client teams",
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
    name: "Paid Media",
    short: "Acquisition systems with tighter targeting, harder creative testing, and clearer revenue accountability.",
    description:
      "We build channel structures around pipeline and margin targets, not vanity metrics. Every sprint pairs media optimization with landing-page and creative decisions so performance compounds instead of plateauing.",
    outcomes: [
      "Lower CAC without stalling qualified volume",
      "Faster read on audience and creative winners",
      "Weekly visibility from spend to closed revenue",
    ],
    deliverables: [
      "Media strategy and forecast model",
      "Channel architecture and tracking spec",
      "Creative testing matrix and briefing system",
      "Weekly optimization notes with decision log",
    ],
    tagline: "Acquisition Systems",
    cadence: "Weekly optimization",
  },
  {
    slug: "branding",
    name: "Brand Strategy",
    short: "Sharper positioning, proof, and art direction for teams that need to look and sound category-defining.",
    description:
      "We tighten the market story before scaling traffic. Positioning, proof hierarchy, and visual direction are translated into campaign-ready systems your team can deploy across ads, decks, site pages, and launch moments.",
    outcomes: [
      "Clearer differentiation in crowded categories",
      "Stronger conversion from sharper message-market fit",
      "A brand system that travels across channels cleanly",
    ],
    deliverables: [
      "Category audit and competitive tension map",
      "Narrative framework and proof stack",
      "Visual direction boards and art direction rules",
      "Messaging toolkit for campaign and site teams",
    ],
    tagline: "Category Pressure",
    cadence: "Narrative + art direction",
  },
  {
    slug: "web-strategy",
    name: "Web Strategy",
    short: "Revenue-oriented site architecture for teams that need pages to sell, not just explain.",
    description:
      "We treat the site like a performance surface. Journey mapping, page prioritization, and copy structure are all built around where demand enters, where trust breaks, and where the business needs movement most.",
    outcomes: [
      "Better lead quality from tighter journeys",
      "Stronger demo and contact conversion rates",
      "Cleaner measurement for future iteration",
    ],
    deliverables: [
      "Journey map by audience and buying intent",
      "Page stack and information architecture",
      "Wireframes, messaging hierarchy, and proof plan",
      "Measurement model for page and funnel changes",
    ],
    tagline: "Revenue UX",
    cadence: "Page architecture sprints",
  },
  {
    slug: "cro",
    name: "CRO",
    short: "An experiment engine designed to unlock more pipeline from the traffic you already paid for.",
    description:
      "We run CRO like operators, not guessers. Funnel diagnostics feed a prioritized backlog, experiments ship with a clear hypothesis, and each readout closes the loop between behavior, offer, and performance.",
    outcomes: [
      "Higher conversion from existing paid and organic traffic",
      "Less friction in the core user journey",
      "A documented testing backlog your team can keep using",
    ],
    deliverables: [
      "Funnel analysis and leak diagnosis",
      "Experiment roadmap with impact scoring",
      "Offer, copy, layout, and UX testing support",
      "Monthly learning report with next-bet recommendations",
    ],
    tagline: "Experiment Engine",
    cadence: "Rolling test cadence",
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    short: "Editorial systems that support demand capture, nurture, sales enablement, and retention.",
    description:
      "We connect content to the buying journey instead of publishing into the void. Topic strategy, lifecycle messaging, and channel distribution are aligned so content drives revenue conversations, not just traffic charts.",
    outcomes: [
      "Content themes tied directly to revenue opportunities",
      "Better enablement for sales and lifecycle teams",
      "One strategic narrative carried across every touchpoint",
    ],
    deliverables: [
      "Topic map by intent, proof, and audience stage",
      "Editorial calendar and production operations",
      "Lifecycle messaging for nurture and retention",
      "Enablement assets for sales conversations",
    ],
    tagline: "Editorial Demand",
    cadence: "Content operations",
  },
  {
    slug: "creative-campaigns",
    name: "Creative Campaigns",
    short: "Launchable campaign systems built for speed, consistency, and measurable downstream impact.",
    description:
      "When teams need a sharper market moment, we build the concept, rollout logic, and production system together. That means stronger campaign cut-through without the chaos that usually follows ambitious creative.",
    outcomes: [
      "More memorable campaigns with tighter rollout discipline",
      "Reusable creative systems for channel teams",
      "Higher engagement and branded demand around key launches",
    ],
    deliverables: [
      "Campaign concept and narrative arc",
      "Rollout plan across media, site, and lifecycle",
      "Creative production briefs and review system",
      "Post-launch analysis with iteration roadmap",
    ],
    tagline: "Launch Pressure",
    cadence: "Concept to rollout",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    client: "Northline Health",
    sector: "Digital Healthcare",
    challenge:
      "Lead costs kept climbing while the sales team reported a drop in qualified demo conversations.",
    approach:
      "We rebuilt paid search around higher-intent demand, launched new landing pages for the top service lines, and ran a weekly CRO sprint tied to sales feedback.",
    outcomes: [
      "42% decrease in cost per qualified lead in 90 days",
      "2.1x increase in booked demos from paid traffic",
      "$1.3M in influenced pipeline within one quarter",
    ],
    headlineMetric: "42%",
    headlineLabel: "lower cost per qualified lead",
    channelMix: ["Paid search", "Landing pages", "CRO sprint"],
  },
  {
    client: "Beacon Freight",
    sector: "Logistics SaaS",
    challenge:
      "The product was strong, but the market story was weak and enterprise opportunities were stalling.",
    approach:
      "We reframed the positioning, rebuilt the website around operational proof, and launched a LinkedIn plus search program for enterprise demand capture.",
    outcomes: [
      "67% growth in enterprise inbound opportunities",
      "31% lift in proposal win rate",
      "Average sales cycle shortened by 18 days",
    ],
    headlineMetric: "67%",
    headlineLabel: "more enterprise inbound",
    channelMix: ["Positioning", "Website narrative", "Paid social + search"],
  },
  {
    client: "Luma Commerce",
    sector: "DTC Retail",
    challenge:
      "Acquisition spend was working, but repeat purchase and lifecycle contribution were under target.",
    approach:
      "We refreshed the creative cadence, rewired the lifecycle offer flow, and built a content system for promotional and retention moments.",
    outcomes: [
      "28% increase in repeat purchase rate",
      "39% lift in email-driven revenue",
      "3.6x blended ROAS during the holiday campaign window",
    ],
    headlineMetric: "3.6x",
    headlineLabel: "holiday blended ROAS",
    channelMix: ["Lifecycle content", "Creative refresh", "Offer testing"],
  },
];

export const metrics: Metric[] = [
  {
    value: "3.4x",
    label: "Average ROAS lift",
    detail: "Across paid media programs once new creative and landing-page testing are in motion.",
    benchmark: "First 90 days",
  },
  {
    value: "43%",
    label: "Median CAC reduction",
    detail: "Measured across B2B and DTC accounts after restructuring spend, messaging, and conversion flow.",
    benchmark: "First 120 days",
  },
  {
    value: "$4.8M",
    label: "Pipeline influenced",
    detail: "Attributed to campaign, web, and CRO work across the last twelve months of representative client engagements.",
    benchmark: "Trailing 12 months",
  },
  {
    value: "11 days",
    label: "Average test velocity",
    detail: "From experiment brief to decision-ready readout, including build, QA, and reporting.",
    benchmark: "Current operating average",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Align around revenue",
    summary:
      "We translate company goals, funnel pressure, and team constraints into one focused 90-day operating plan.",
  },
  {
    title: "Diagnose the leaks",
    summary:
      "Analytics, audience, creative, and page audits reveal what is blocking efficient growth and where upside is concentrated.",
  },
  {
    title: "Build the new system",
    summary:
      "Campaigns, offers, creative, and site changes launch with clear owners, measurement rules, and review points.",
  },
  {
    title: "Pressure-test weekly",
    summary:
      "We run structured experiments, review signals fast, and reallocate effort toward the bets proving traction.",
  },
  {
    title: "Document what scales",
    summary:
      "Winning patterns are translated into playbooks so your team keeps the gains instead of depending on memory.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Signal & Stone felt less like an agency vendor and more like a growth pod with actual commercial judgment.",
    name: "Maya Patel",
    role: "VP of Marketing",
    company: "Northline Health",
  },
  {
    quote:
      "They sharpened our story, tightened our conversion path, and made paid media easier to defend at the executive level.",
    name: "Chris Alden",
    role: "Chief Revenue Officer",
    company: "Beacon Freight",
  },
  {
    quote:
      "The difference was the operating rhythm. Every week we knew the decision, the metric, and the next test.",
    name: "Sierra Robinson",
    role: "Head of Growth",
    company: "Luma Commerce",
  },
];

export const engagementModels: EngagementModel[] = [
  {
    name: "Growth Sprint",
    bestFor: "Teams that need fast movement in one critical channel, page, or conversion stage.",
    investment: "$8k-$12k / month",
    includes: [
      "Single strategic focus area",
      "Weekly optimization and reporting cadence",
      "Lean senior team with direct decision access",
    ],
  },
  {
    name: "Integrated Retainer",
    bestFor: "Companies aligning paid media, site performance, and campaign creative under one growth plan.",
    investment: "$15k-$28k / month",
    includes: [
      "Cross-channel strategy and execution pod",
      "Shared KPI dashboard and decision log",
      "Monthly executive review with budget guidance",
    ],
  },
  {
    name: "Launch Partner",
    bestFor: "High-stakes rebrands, launches, or seasonal pushes that need a controlled campaign system.",
    investment: "$25k+ per launch",
    includes: [
      "Campaign concept and launch architecture",
      "Creative production structure and reviews",
      "Post-launch analysis and next-phase recommendations",
    ],
  },
];

export const aboutValues = [
  {
    title: "Strategy before channels",
    text: "We start with commercial pressure, buyer context, and offer strength before we touch platform tactics.",
  },
  {
    title: "Creative with accountability",
    text: "Art direction should change behavior. We pair creative decisions with explicit hypotheses and performance targets.",
  },
  {
    title: "Senior-led execution",
    text: "The people framing the strategy stay close to the work. There is no bait-and-switch operating model here.",
  },
  {
    title: "Transparent partnership",
    text: "You see the score, the rationale, and the next move. Sharp work should be explainable work.",
  },
];

export const faqs = [
  {
    question: "How quickly can an engagement start?",
    answer:
      "Most projects start within two to three weeks. That includes onboarding, baseline diagnostics, and the first sprint plan.",
  },
  {
    question: "Do you work alongside in-house teams?",
    answer:
      "Yes. We often plug into existing growth, brand, and product marketing teams and fill the strategic or execution gaps slowing momentum.",
  },
  {
    question: "What does reporting actually include?",
    answer:
      "A shared KPI dashboard, weekly performance notes, and a monthly executive readout covering what changed, what was learned, and what ships next.",
  },
];
