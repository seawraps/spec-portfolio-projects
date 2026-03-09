export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Offering = {
  title: string;
  summary: string;
  format: string;
  investment: string;
  result: string;
  deliverables: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type MediaHighlight = {
  title: string;
  outlet: string;
  format: string;
  audience: string;
  summary: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "Nadia Vale",
  role: "Content Strategist, Keynote Speaker, and Media Host",
  location: "Brooklyn, New York",
  email: "hello@nadiavale.com",
  tagline: "Turn expertise into a media brand people trust.",
  shortBio:
    "Nadia Vale helps founders, operators, and expert-led brands build authority-led content systems, keynote talks, and partnership narratives that compound demand.",
  newsletterName: "Signal to Story",
  newsletterBlurb:
    "A weekly note on authority, audience trust, and the systems behind personal brands that actually convert.",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nadiavale" },
    { label: "Instagram", href: "https://www.instagram.com/nadiavale" },
    { label: "YouTube", href: "https://www.youtube.com/@nadiavale" },
    { label: "Email", href: "mailto:hello@nadiavale.com" },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const heroStats: Stat[] = [
  { value: "8.4M", label: "audience impressions guided" },
  { value: "120+", label: "talks, workshops, and live interviews" },
  { value: "42", label: "founders and teams advised" },
  { value: "28K", label: "newsletter readers and community members" },
];

export const socialProofLogos = [
  "Atlas Loop",
  "Second Mile",
  "Northstar Ledger",
  "Beacon House",
  "Framehouse",
  "Morning Orbit",
];

export const positioningPillars = [
  {
    title: "Authority before activity",
    description:
      "Instead of flooding every channel, define a thesis, signature stories, and formats people can remember after a single touchpoint.",
  },
  {
    title: "Content with commercial intent",
    description:
      "Every content system should support demand generation, partnerships, recruiting, or premium offers instead of vanity output.",
  },
  {
    title: "A brand people can book",
    description:
      "Clarify the point of view, speaking topics, and partnership story that make your personal brand easy to introduce, sponsor, and share.",
  },
];

export const offerings: Offering[] = [
  {
    title: "Brand Narrative Intensive",
    summary:
      "A focused sprint for founders or experts repositioning how the market understands them.",
    format: "2-week sprint",
    investment: "From $4,800",
    result: "Best when your expertise is sharp but your story still feels scattered.",
    deliverables: [
      "Positioning memo and audience thesis",
      "Signature framework and message architecture",
      "Content pillars and flagship topic angles",
      "Launch brief for your next visibility push",
    ],
  },
  {
    title: "Authority Content Advisory",
    summary:
      "Quarterly advisory for leaders who need thought leadership tied to business outcomes.",
    format: "Monthly retainer",
    investment: "From $6,500 / month",
    result: "Ideal for founder-led companies building trust between launches, rounds, or hiring cycles.",
    deliverables: [
      "Monthly editorial direction and content planning",
      "Channel strategy with executive feedback loops",
      "Weekly async review and sharpness checks",
      "Performance-informed messaging adjustments",
    ],
  },
  {
    title: "Keynote and Workshop Design",
    summary:
      "Talk development and rehearsal support for conferences, leadership offsites, and community events.",
    format: "Custom speaking engagement",
    investment: "Custom scope",
    result: "Used when the room needs substance, not inspiration theater.",
    deliverables: [
      "Audience-specific narrative arc and talk structure",
      "Story shaping, transitions, and audience handoff",
      "Slide direction and stage rehearsal support",
      "Optional workshop workbook or follow-up asset",
    ],
  },
  {
    title: "Partnership Narrative Studio",
    summary:
      "A sponsorship and media positioning sprint for creators, hosts, and expert-led brands.",
    format: "Campaign sprint",
    investment: "From $3,200",
    result: "For packaging your audience into premium, trust-first partnerships.",
    deliverables: [
      "Partnership positioning and sponsor-facing narrative",
      "Brand deck copy and host-read messaging angles",
      "Campaign concept hooks and creative territory",
      "Partnership notes for outreach or inbound conversations",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nadia gave our founder a voice the market could actually repeat. Within a quarter, inbound podcast invites doubled and our sales team finally had language buyers responded to.",
    name: "Maya Chen",
    role: "Chief Marketing Officer",
    company: "Northstar Ledger",
  },
  {
    quote:
      "We hired her for a leadership offsite workshop and ended up rebuilding our entire content operating system. The work felt elegant, but it was deeply practical.",
    name: "Jordan Patel",
    role: "Co-founder",
    company: "Atlas Loop",
  },
  {
    quote:
      "The keynote felt sharp, warm, and commercially useful. It was the rare talk that sounded polished on stage and still held up in the hallway conversations after.",
    name: "Elise Romero",
    role: "Head of Community",
    company: "Beacon House",
  },
];

export const featuredContent: MediaHighlight[] = [
  {
    title: "How to turn a founder's point of view into a media asset",
    outlet: "Creator Growth Summit",
    format: "Summit keynote",
    audience: "1,100 live attendees",
    summary:
      "A closing talk on why authority compounds when leaders stop posting opinions and start teaching a framework.",
    image: "/images/speaking-stage.svg",
  },
  {
    title: "The newsletter that closed consulting clients before the sales call",
    outlet: "Operators Table Podcast",
    format: "Feature interview",
    audience: "Top 20 business show",
    summary:
      "A conversation on designing weekly content that pre-sells thinking instead of broadcasting busywork.",
    image: "/images/editorial-studio.svg",
  },
  {
    title: "Building sponsorships around trust, not vanity metrics",
    outlet: "Brand Partnerships Lab",
    format: "Workshop replay",
    audience: "24K replay views",
    summary:
      "A practical breakdown of how premium partnerships are pitched, scoped, and protected without diluting voice.",
    image: "/images/brand-session.svg",
  },
];

export const newsletterStats = [
  "28K subscribers",
  "49% average open rate",
  "Weekly every Tuesday",
];

export const aboutValues = [
  {
    title: "Clarity that travels",
    description:
      "The message has to work on a keynote stage, in a sales deck, and inside a one-line introduction from someone else.",
  },
  {
    title: "Warmth with rigor",
    description:
      "People trust brands that feel human, but warmth is strongest when it sits on top of real strategic discipline.",
  },
  {
    title: "Strategy built to sell",
    description:
      "Strong positioning should help a room believe you, a sponsor choose you, and a buyer understand why the offer matters.",
  },
];

export const careerTimeline = [
  {
    year: "2016",
    title: "Newsroom and live media production",
    description:
      "Built instincts for pacing, narrative structure, and what makes a message land under real attention pressure.",
  },
  {
    year: "2019",
    title: "Editorial lead for venture-backed brands",
    description:
      "Helped startup teams turn product insight, founder perspective, and customer stories into repeatable content systems.",
  },
  {
    year: "2022",
    title: "Launched Signal to Story",
    description:
      "Started a weekly newsletter exploring authority, content systems, and the creator-business overlap for modern experts.",
  },
  {
    year: "2024",
    title: "Expanded into speaking and advisory",
    description:
      "Began partnering more deeply with executive teams, conferences, and creator-led businesses on message and presence.",
  },
];

export const speakingTopics = [
  "How to make expertise legible before you scale content output",
  "The authority engine: turning a founder's perspective into a repeatable media system",
  "Partnerships that feel premium because the positioning is clear",
];

export const processSteps = [
  {
    title: "Diagnose the signal",
    description:
      "We identify what the market should remember, what is currently muddy, and where attention is leaking.",
  },
  {
    title: "Build the framework",
    description:
      "I shape your ideas into language, stories, and formats your team can actually use consistently.",
  },
  {
    title: "Pressure-test the message",
    description:
      "Together we stress-test it against audience context, commercial goals, and real-world delivery moments.",
  },
  {
    title: "Ship with polish",
    description:
      "You leave with assets, talking points, and a sharper public-facing narrative that can compound.",
  },
];

export const serviceFormats = [
  {
    label: "Founder Advisory",
    title: "For leaders becoming the face of their category",
    description:
      "Ideal when a founder is carrying narrative weight for the company and needs more strategic consistency across content, interviews, and investor-facing moments.",
  },
  {
    label: "Team Workshops",
    title: "For executive teams aligning voice and visibility",
    description:
      "Used for offsites, messaging resets, and thought-leadership systems where multiple people need to contribute without sounding generic.",
  },
  {
    label: "Creator Partnerships",
    title: "For hosts and educators packaging demand",
    description:
      "Helpful when your audience trust is already strong and you need cleaner packaging for sponsorships, collaborations, and premium offers.",
  },
];

export const serviceFaq: FAQItem[] = [
  {
    question: "How far in advance should speaking inquiries come in?",
    answer:
      "Four to eight weeks is ideal, especially if you want custom talk shaping, workshop materials, or rehearsal support. Faster timelines are possible when the brief is already sharp.",
  },
  {
    question: "Do you work directly with teams or only with individuals?",
    answer:
      "Both. Some engagements center on a founder or host, while others involve marketing, brand, or community teams that need the message translated across channels.",
  },
  {
    question: "Do you create the content for clients?",
    answer:
      "The core offer is strategy, direction, and refinement. I can shape briefs, outlines, and flagship assets, then collaborate with internal or freelance execution partners where needed.",
  },
  {
    question: "Can one project lead into a retainer?",
    answer:
      "Yes. Many clients start with a sprint to sharpen positioning and then continue into advisory once they are ready to operationalize the new message.",
  },
];

export const contactReasons = [
  {
    title: "Speaking and workshops",
    description:
      "Conference organizers, offsite leads, or community teams looking for a keynote, fireside host, or interactive workshop.",
    detail: "Include audience size, event date, and the shift you want the room to make.",
  },
  {
    title: "Advisory and strategy",
    description:
      "Founder-led brands, executives, or expert businesses who need sharper positioning and a more commercial content system.",
    detail: "Share what is changing in the business and where the current narrative feels weak.",
  },
  {
    title: "Partnerships and media",
    description:
      "Brands, podcasts, newsletters, and creator teams exploring sponsorships, interviews, or collaborative campaigns.",
    detail: "Helpful details include campaign goals, timing, and the audience you want to reach.",
  },
];

export const projectNote =
  "This website is a concept/demo portfolio project created to feel like a credible, production-ready personal brand site. It is intentionally fictional while modeled on real commercial positioning.";
