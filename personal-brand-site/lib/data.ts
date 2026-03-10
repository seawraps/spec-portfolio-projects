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
  bestFit: string;
  spotlight: string;
  inquiryType: "speaking" | "advisory" | "partnership";
  deliverables: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  outcome: string;
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

export type ExpertiseLane = {
  label: string;
  title: string;
  description: string;
  signatureMove: string;
  result: string;
};

export const siteConfig = {
  name: "Nadia Vale",
  role: "Editorial Advisor, Speaker, and Media Host",
  location: "Brooklyn, New York",
  email: "hello@nadiavale.com",
  tagline: "Build a personal brand that feels like a publication, not a posting schedule.",
  shortBio:
    "Nadia Vale helps founders, authors, and expert-led teams turn lived expertise into a public brand people want to book, quote, and introduce.",
  newsletterName: "Signal to Story",
  newsletterBlurb:
    "A weekly editorial note on authority, keynote storytelling, and making expertise feel magnetic before the first sales call.",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nadiavale" },
    { label: "Instagram", href: "https://www.instagram.com/nadiavale" },
    { label: "Substack", href: "https://www.nadiavale.com/newsletter" },
    { label: "Email", href: "mailto:hello@nadiavale.com" },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Offerings", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const heroStats: Stat[] = [
  { value: "9.1M", label: "reader, listener, and event impressions shaped" },
  { value: "150+", label: "keynotes, workshops, interviews, and live sessions" },
  { value: "46", label: "founders, operators, and expert brands advised" },
  { value: "31K", label: "newsletter readers following editorial frameworks" },
];

export const socialProofLogos = [
  "Northstar Ledger",
  "Founders Table Live",
  "Second Mile",
  "Operator House",
  "Morning Orbit",
  "Framehouse",
];

export const positioningPillars = [
  {
    title: "A point of view people can repeat",
    description:
      "The strongest personal brands do not sound busy. They sound authored. I help clients define the thesis, phrases, and signature ideas that make introductions easier.",
  },
  {
    title: "Visibility tied to business leverage",
    description:
      "Every interview, keynote, and content series should support demand, recruiting, partnerships, or category perception instead of becoming decorative output.",
  },
  {
    title: "Presence that feels human on stage",
    description:
      "Polish matters, but polish without warmth reads hollow. The work sharpens voice while protecting the nuance, cadence, and personality that make people trust it.",
  },
];

export const offerings: Offering[] = [
  {
    title: "Editorial Positioning Intensive",
    summary:
      "A high-touch sprint for leaders who have strong experience but need the public story to feel sharper, more human, and easier to carry.",
    format: "2-week strategy sprint",
    investment: "From $6,000",
    result: "Best when the work is credible, but the market still remembers you as a collection of topics instead of a clear body of thought.",
    bestFit: "Founders, authors, and operators whose reputation is becoming a growth lever.",
    spotlight: "Frequently booked before launches, fundraising narratives, book campaigns, or major brand refreshes.",
    inquiryType: "advisory",
    deliverables: [
      "Positioning memo and audience thesis",
      "Signature framework, phrases, and story architecture",
      "Homepage and media bio direction",
      "Editorial topics for content, interviews, and stage moments",
    ],
  },
  {
    title: "Executive Visibility Advisory",
    summary:
      "An ongoing partnership for founders, authors, and operators building a public presence that has to work across content, press, leadership, and demand.",
    format: "Monthly advisory retainer",
    investment: "From $7,500 / month",
    result: "Ideal when visibility is becoming part of the business model and the voice needs to stay consistent across launches, hiring, and market education.",
    bestFit: "Leadership teams that need steady editorial judgment, not just occasional copy clean-up.",
    spotlight: "Best for public-facing executives managing interviews, hiring signal, market education, and revenue pressure at once.",
    inquiryType: "advisory",
    deliverables: [
      "Monthly editorial direction and visibility priorities",
      "Interview prep, keynote notes, and story shaping",
      "Content review with executive feedback loops",
      "Messaging adjustments based on audience and pipeline signals",
    ],
  },
  {
    title: "Signature Talk Development",
    summary:
      "Talk development for conference stages, leadership events, and private rooms that need substance, rhythm, and a point of view worth quoting after.",
    format: "Custom speaking engagement",
    investment: "From $8,500",
    result: "For clients who want more than motivational polish and need a keynote that translates into hallway conversation, social clips, and follow-up demand.",
    bestFit: "Conference teams, offsites, private communities, and founders building signature talks.",
    spotlight: "Often paired with fireside moderation, workshop design, and post-event message packaging.",
    inquiryType: "speaking",
    deliverables: [
      "Narrative arc, opening, and closing sequence",
      "Story shaping, transitions, and anchor lines",
      "Slide direction and stage rehearsal support",
      "Optional workshop workbook or moderator notes",
    ],
  },
  {
    title: "Partnership Narrative Studio",
    summary:
      "A packaging sprint for creators, hosts, and expert-led brands translating audience trust into sponsor-ready materials without flattening the voice.",
    format: "Campaign and partner sprint",
    investment: "From $4,200",
    result: "Used when the audience is there, the trust is there, and the gap is the story buyers, sponsors, and collaborators need in order to say yes.",
    bestFit: "Creators, newsletter operators, hosts, and media-adjacent brands preparing for better partnership conversations.",
    spotlight: "Useful when you need sponsor decks, partner narratives, or campaign hooks that still sound like your own brand.",
    inquiryType: "partnership",
    deliverables: [
      "Partnership positioning and sponsor narrative",
      "Media kit copy and host-read messaging angles",
      "Campaign hooks and creative territory",
      "Outreach notes for inbound or outbound conversations",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nadia gave our founder a vocabulary the market could actually repeat. The shift was immediate. Podcast invites picked up, sales calls started warmer, and the brand finally sounded authored.",
    name: "Maya Chen",
    role: "Chief Marketing Officer",
    company: "Northstar Ledger",
    outcome: "Warmer sales calls and repeatable language",
  },
  {
    quote:
      "She brought editorial taste and commercial clarity in the same room. The keynote felt intimate, not performative, and our attendees kept quoting it during the networking hour after.",
    name: "Elise Romero",
    role: "Head of Community",
    company: "Beacon House",
    outcome: "Quoted keynote moments after the room",
  },
  {
    quote:
      "We hired her for a workshop and ended up reshaping our entire executive visibility strategy. The work felt elegant on the outside and deeply operational underneath.",
    name: "Jordan Patel",
    role: "Co-founder",
    company: "Atlas Loop",
    outcome: "Visibility strategy reset with executive buy-in",
  },
];

export const featuredContent: MediaHighlight[] = [
  {
    title: "The room remembers the sentence before it remembers the slide",
    outlet: "Editorial Leadership Forum",
    format: "Opening keynote",
    audience: "1,200 leaders in-room",
    summary:
      "A talk on why public authority compounds when experts build a repeatable argument instead of rotating through disconnected opinions.",
    image: "/images/nadia-workshop.jpg",
  },
  {
    title: "Designing a founder brand that still sounds like a human",
    outlet: "Signal & Scale Podcast",
    format: "Podcast feature",
    audience: "Top 50 marketing show",
    summary:
      "A conversation about packaging lived expertise without sanding off voice, humor, or the specificity that makes trust possible.",
    image: "/images/nadia-desk-portrait.jpg",
  },
  {
    title: "From insight to sponsor deck: how premium partnerships actually land",
    outlet: "Modern Creator Brief",
    format: "Editorial workshop",
    audience: "18K replay views",
    summary:
      "A practical breakdown of what sponsors need to understand quickly and how to make creator trust feel legible without turning the brand generic.",
    image: "/images/nadia-whiteboard-portrait.jpg",
  },
];

export const newsletterStats = [
  "31K weekly readers",
  "52% average open rate",
  "Tuesdays at 7:30 a.m.",
];

export const bookingSignals = [
  "Selective keynote and workshop calendar each quarter",
  "Advisory retained at a small roster for senior attention",
  "Speaking topics, availability notes, and media angles shared on request",
];

export const expertiseLanes: ExpertiseLane[] = [
  {
    label: "Speaking",
    title: "Rooms that need a sentence worth repeating on the way home",
    description:
      "Talks, workshops, and moderated conversations designed to feel intelligent, warm, and quotable instead of polished-but-forgettable.",
    signatureMove: "Narrative shaping, anchor lines, transitions, and audience-aware rehearsal.",
    result: "The room remembers the idea, not just the energy level.",
  },
  {
    label: "Advisory",
    title: "A public thesis the market can carry without diluting it",
    description:
      "Positioning work for founders and experts whose name now influences trust, demand, hiring, and category perception.",
    signatureMove: "Homepage voice, media bios, signature frameworks, editorial direction, and executive message review.",
    result: "The brand sounds authored across interviews, launches, and leadership moments.",
  },
  {
    label: "Partnerships",
    title: "Commercial packaging that still sounds like a person",
    description:
      "Narrative packaging for creators, hosts, and expert-led brands translating audience trust into sponsor-ready materials and sharper offers.",
    signatureMove: "Partner decks, media kits, campaign hooks, host-read messaging, and sponsor story architecture.",
    result: "Buyers understand the value quickly without flattening the brand into generic creator language.",
  },
];

export const aboutValues = [
  {
    title: "Editorial taste",
    description:
      "I care about pace, visual rhythm, and whether a message feels quotable enough to live beyond the moment it is delivered.",
  },
  {
    title: "Commercial empathy",
    description:
      "The work has to support an actual business. Visibility is only useful when it helps a team sell, recruit, partner, or lead more clearly.",
  },
  {
    title: "Stage-tested clarity",
    description:
      "If an idea cannot survive a live room, a moderator question, or a skeptical audience member, it is not ready for the public version yet.",
  },
];

export const careerTimeline = [
  {
    year: "2015",
    title: "Learned story discipline in live editorial rooms",
    description:
      "Started in production environments where pacing, narrative tension, and sharp language mattered because attention disappeared fast.",
  },
  {
    year: "2018",
    title: "Moved into founder and executive storytelling",
    description:
      "Began helping venture-backed teams translate product insight and operator instinct into language customers, investors, and talent could understand.",
  },
  {
    year: "2021",
    title: "Built a visibility practice around authority",
    description:
      "Shifted from one-off content support into deeper positioning work for leaders whose names were becoming part of the company narrative.",
  },
  {
    year: "2024",
    title: "Expanded into speaking, media, and partnerships",
    description:
      "Focused the studio on public presence: keynote development, partnership narratives, and editorial systems that feel premium and believable.",
  },
];

export const speakingTopics = [
  "How to sound like an industry reference, not another commentator",
  "The authority engine: making expertise legible before you scale content output",
  "Building sponsor-ready trust without flattening your personality",
];

export const processSteps = [
  {
    title: "Find the live wire",
    description:
      "We isolate the idea, story, or tension that makes the brand worth paying attention to in the first place.",
  },
  {
    title: "Shape the story architecture",
    description:
      "I turn that signal into language, frameworks, and narrative beats your team can actually use across channels.",
  },
  {
    title: "Translate it into formats",
    description:
      "The message gets adapted for keynote rooms, bios, interviews, homepage copy, newsletters, or partner decks without losing its center.",
  },
  {
    title: "Rehearse the public version",
    description:
      "We pressure-test tone, sequence, and delivery so the final version feels polished, human, and strong under real attention.",
  },
];

export const serviceFormats = [
  {
    label: "Founder-led brands",
    title: "When the founder is carrying narrative weight for the business",
    description:
      "Best for leaders who are increasingly public and need the company story, thought leadership, interviews, and keynote presence to feel aligned.",
  },
  {
    label: "Executive teams",
    title: "When multiple voices need one coherent editorial center",
    description:
      "Useful for messaging resets, offsites, and visibility systems where strategy, marketing, and leadership all need to sound like the same organization.",
  },
  {
    label: "Creators and hosts",
    title: "When trust already exists and the packaging needs to catch up",
    description:
      "Designed for newsletters, podcasts, and education brands turning strong audience relationships into premium partnerships and sharper offers.",
  },
];

export const serviceFaq: FAQItem[] = [
  {
    question: "How early should we reach out for a keynote or workshop?",
    answer:
      "Four to eight weeks gives the best runway for audience research, narrative shaping, and rehearsal. If the brief is already sharp, tighter turnarounds are possible.",
  },
  {
    question: "Do you work only with individuals?",
    answer:
      "No. Some engagements are centered on one founder or expert, while others include marketing, brand, community, or executive teams that need the message translated across the business.",
  },
  {
    question: "Will you create content for us directly?",
    answer:
      "The core offer is strategy, framing, review, and refinement. I often shape briefs, outlines, and flagship assets, then collaborate with an internal team or trusted execution partners.",
  },
  {
    question: "Can a sprint become a longer advisory engagement?",
    answer:
      "Yes. Many clients start with positioning or talk development and continue into advisory once the new message needs to be carried consistently across more touchpoints.",
  },
];

export const contactReasons = [
  {
    title: "Speaking and live rooms",
    description:
      "For conferences, offsites, memberships, and private communities booking a keynote, fireside conversation, or workshop with real narrative shape.",
    detail: "Include audience profile, room size, date, and the shift you want the room to leave with.",
  },
  {
    title: "Advisory and editorial strategy",
    description:
      "For founders, authors, and expert-led teams who need their public presence to feel sharper, warmer, and more commercially useful.",
    detail: "Share what is changing in the business and where the current story feels thin, scattered, or overly generic.",
  },
  {
    title: "Media and partnerships",
    description:
      "For interviews, brand collaborations, sponsorship packaging, and campaigns where voice, trust, and positioning all need to hold together.",
    detail: "Helpful context includes timeline, campaign goals, audience, and whether you need narrative support or delivery support.",
  },
];

export const projectNote =
  "This website is a fictional concept created for portfolio presentation. The positioning, structure, and visual treatment are designed to feel media-ready and commercially believable without representing a real client.";
