export type NavLink = {
  href: string;
  label: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Listing = {
  name: string;
  address: string;
  neighborhood: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  description: string;
  label: string;
  feature: string;
  imageSrc: string;
  imageAlt: string;
};

export type Neighborhood = {
  name: string;
  profile: string;
  commute: string;
  housing: string;
  summary: string;
  story: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Agent = {
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  metric: string;
  imageSrc: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ServiceOffering = {
  title: string;
  summary: string;
  emphasis: string;
  deliverables: string[];
};

export type ValuePoint = {
  title: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  { value: "$242M", label: "illustrative annual represented volume" },
  { value: "19 days", label: "typical launch-to-contract pace for well-prepared listings" },
  { value: "84%", label: "of business generated through repeat and referral clients" },
];

export const aboutStats: HeroStat[] = [
  { value: "15 years", label: "average senior-market experience across the core advisory team" },
  { value: "4 enclaves", label: "premium neighborhoods tracked with block-level attention" },
  { value: "1:1", label: "partner-level communication from first planning session to close" },
];

export const featuredListings: Listing[] = [
  {
    name: "Harbor Crest Estate",
    address: "14 Claremont View",
    neighborhood: "Cedar Heights",
    price: "$3,480,000",
    beds: "5 beds",
    baths: "5.5 baths",
    area: "5,420 sq ft",
    description:
      "A hillside residence with layered terraces, gallery-scale living spaces, and a hospitality-grade kitchen designed for evening entertaining.",
    label: "Signature listing",
    feature: "Sunset terraces and a resort-caliber primary suite above the tree line.",
    imageSrc: "/images/hero-estate.jpg",
    imageAlt:
      "A luxury hillside estate with expansive glass, layered terraces, and warm evening light.",
  },
  {
    name: "Willow Lane Residence",
    address: "88 Willow Lane",
    neighborhood: "Lakemont",
    price: "$2,290,000",
    beds: "4 beds",
    baths: "4 baths",
    area: "3,960 sq ft",
    description:
      "Wide-plank oak floors, soft natural light, and a tailored indoor-outdoor layout make this one of the strongest family listings in the district.",
    label: "Now showing",
    feature: "Garden-facing great room with flexible guest suite and pool-ready grounds.",
    imageSrc: "/images/listing-estate.jpg",
    imageAlt:
      "A refined luxury home with manicured grounds and a bright exterior facade.",
  },
  {
    name: "Marlowe House",
    address: "205 Northpoint Avenue",
    neighborhood: "Northpoint",
    price: "$1,975,000",
    beds: "4 beds",
    baths: "3.5 baths",
    area: "3,240 sq ft",
    description:
      "A double-height living room, tailored millwork, and warm natural textures give this residence the kind of serene, turnkey atmosphere buyers struggle to find intact.",
    label: "Private preview",
    feature: "A softly lit interior story with custom joinery, indoor-outdoor flow, and marina access within a few minutes on foot.",
    imageSrc: "/images/listing-residence.jpg",
    imageAlt:
      "A refined modern living room with double-height ceilings, warm wood accents, and soft daylight.",
  },
  {
    name: "The Avery Penthouse",
    address: "30 Harbor Exchange, Residence 11A",
    neighborhood: "Old Harbor",
    price: "$2,140,000",
    beds: "3 beds",
    baths: "3 baths",
    area: "2,410 sq ft",
    description:
      "A full-floor penthouse with a lounge-like living room, polished stone finishes, and skyline views that shift from soft mornings to dramatic city lights.",
    label: "Concierge tower",
    feature: "Full-service building with valet arrival, terrace seating, and sunset-facing entertaining space.",
    imageSrc: "/images/listing-penthouse.jpg",
    imageAlt:
      "A polished penthouse interior with dramatic windows, lounge seating, and warm lighting.",
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    name: "Northpoint",
    profile: "Waterfront village sophistication",
    commute: "12 minutes to downtown by express train or marina drive",
    housing: "Modern infill, harbor cottages, and design-led renovations",
    summary:
      "Northpoint is for buyers who want a calmer rhythm without giving up polish. It pairs marina mornings, intimate dining, and strong design sensibility with easy access to the city core.",
    story:
      "Where new waterfront residences meet established tree-lined blocks and a polished local scene.",
    highlights: ["Promenade access", "Chef-led cafés", "Private fitness clubs"],
    imageSrc: "/images/listing-penthouse.jpg",
    imageAlt:
      "A polished penthouse living room that reinforces Northpoint's waterfront sophistication and design-led housing mix.",
  },
  {
    name: "Lakemont",
    profile: "Residential, green, and quietly elevated",
    commute: "Direct commuter rail access plus a straightforward beltway route",
    housing: "Generous lots, newer family homes, and discreet custom builds",
    summary:
      "Lakemont consistently attracts executive households and growing families who want scale, strong schools, and a residential setting that still feels refined rather than remote.",
    story:
      "A leafy, family-forward enclave defined by scale, privacy, and room to host.",
    highlights: ["Top-ranked schools", "Club tennis", "Weekend market culture"],
    imageSrc: "/images/neighborhood-lakemont.jpg",
    imageAlt:
      "A quiet upscale suburban neighborhood with mature trees and elegant residential streets.",
  },
  {
    name: "Old Harbor",
    profile: "Historic blocks with contemporary energy",
    commute: "Walkable to downtown offices, ferry access, and gallery districts",
    housing: "Warehouse conversions, brick townhomes, and luxury full-service condos",
    summary:
      "Old Harbor is the choice for buyers drawn to architecture, culture, and a fully walkable lifestyle. It feels layered and established, with the strongest dining and design mix in the market.",
    story:
      "The district where historic facades, destination restaurants, and polished residences converge.",
    highlights: ["Boutique hotels", "Gallery corridor", "Chef-driven dining"],
    imageSrc: "/images/neighborhood-old-harbor.jpg",
    imageAlt:
      "A walkable upscale urban neighborhood with historic buildings, lively streets, and refined storefronts.",
  },
  {
    name: "Cedar Heights",
    profile: "Private, view-driven, and distinctly residential",
    commute: "20 minutes to downtown outside peak traffic conditions",
    housing: "Estate parcels, gated compounds, and architect-designed custom homes",
    summary:
      "Cedar Heights is where buyers go for privacy, sweeping outlooks, and homes built for entertaining on a larger scale. It is discreet, established, and consistently in demand.",
    story:
      "Ridgeline living with larger homesites, layered landscaping, and a club-like sense of privacy.",
    highlights: ["Country club access", "City-light views", "Estate renovation activity"],
    imageSrc: "/images/hero-estate.jpg",
    imageAlt:
      "A modern hillside estate that conveys Cedar Heights' view-driven residential character.",
  },
];

export const buyingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Briefing And Match Strategy",
    description:
      "We align on timing, financing posture, neighborhood fit, and the homes worth pursuing so the search starts with real clarity instead of noise.",
  },
  {
    step: "02",
    title: "Curated Touring And Review",
    description:
      "Every property is evaluated for lifestyle fit, renovation exposure, long-term resale appeal, and how it sits against active competition.",
  },
  {
    step: "03",
    title: "Offer Structuring",
    description:
      "We build a complete package around terms, timing, contingencies, and presentation so the offer reads as both competitive and credible.",
  },
  {
    step: "04",
    title: "Contract Management",
    description:
      "Inspection guidance, vendor coordination, and milestone tracking are handled with tight communication through closing day.",
  },
];

export const sellingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Positioning And Valuation",
    description:
      "We define pricing direction, buyer profile, and narrative strategy around what will make the property feel both desirable and well judged.",
  },
  {
    step: "02",
    title: "Prep, Styling, And Production",
    description:
      "From light improvements to staging and photography, every visible detail is aligned so the home enters the market with polish.",
  },
  {
    step: "03",
    title: "Launch And Private Outreach",
    description:
      "We combine public presentation with discreet agent-to-agent outreach to create traction early and keep the showing flow intentional.",
  },
  {
    step: "04",
    title: "Negotiation Through Close",
    description:
      "Offer review, inspection strategy, and close management stay disciplined so the chosen path supports both value and certainty.",
  },
];

export const agents: Agent[] = [
  {
    name: "Lena Hart",
    role: "Founder & Principal Broker",
    bio: "Lena leads the firm with a calm, design-aware point of view and a reputation for guiding sellers through high-visibility launches with precision.",
    experience: "16 years advising sellers, relocating executives, and repeat referral clients.",
    specialties: ["Pricing strategy", "Luxury transitions", "Design-forward presentation"],
    metric: "16 years",
    imageSrc: "/images/agent-lena.jpg",
    imageAlt: "Portrait of a polished female real estate advisor in professional attire.",
  },
  {
    name: "Marcus Avery",
    role: "Senior Buyer Advisor",
    bio: "Marcus is known for focused buyer representation, practical counsel under pressure, and matching clients to neighborhoods with unusual efficiency.",
    experience: "11 years leading private buyer searches and competitive acquisitions.",
    specialties: ["Private search", "Negotiation", "Family relocations"],
    metric: "Buyer lead",
    imageSrc: "/images/agent-marcus.jpg",
    imageAlt: "Portrait of a professional male real estate advisor in a tailored blazer.",
  },
  {
    name: "Priya Desai",
    role: "Listing Strategist",
    bio: "Priya coordinates the details behind every launch, from staging and photography to vendor sequencing and presentation standards.",
    experience: "9 years directing pre-listing execution for premium residential properties.",
    specialties: ["Prep oversight", "Vendor management", "Launch planning"],
    metric: "Launch strategy",
    imageSrc: "/images/agent-priya.jpg",
    imageAlt: "Portrait of a composed female property marketing strategist in a studio setting.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They handled our listing like a brand launch, but the advice stayed practical the entire time. We always knew what mattered most and why.",
    name: "Erin & Michael S.",
    role: "Cedar Heights sellers",
  },
  {
    quote:
      "The search felt curated instead of overwhelming. We toured fewer homes, moved faster, and ended up in the right neighborhood with complete confidence.",
    name: "Naomi R.",
    role: "Northpoint buyer",
  },
  {
    quote:
      "Their valuation session was thoughtful, measured, and specific. It gave us a real roadmap instead of generic market commentary.",
    name: "Daniel & Priya K.",
    role: "Lakemont homeowners",
  },
];

export const serviceOfferings: ServiceOffering[] = [
  {
    title: "Seller Representation",
    summary:
      "A launch strategy built around pricing discipline, polished preparation, and listing materials that feel considered rather than formulaic.",
    emphasis: "For owners planning a market launch within the next year",
    deliverables: [
      "Comparative pricing and positioning direction",
      "Prep recommendations and vendor coordination",
      "Photography, floor plan, and editorial marketing assets",
    ],
  },
  {
    title: "Buyer Representation",
    summary:
      "A structured acquisition plan for clients who want strong judgment, discreet sourcing, and a competitive edge in selective inventory.",
    emphasis: "For local moves, relocations, and timing-sensitive acquisitions",
    deliverables: [
      "Neighborhood shortlist and search strategy",
      "Tour planning with candid property review",
      "Offer structuring and contract management",
    ],
  },
  {
    title: "Valuation Sessions",
    summary:
      "Private consultations for owners weighing timing, renovation scope, or whether a move truly makes sense before they commit to a launch.",
    emphasis: "For homeowners wanting a grounded opinion before making larger plans",
    deliverables: [
      "Illustrative pricing range and timing guidance",
      "Prep priorities with return-on-effort context",
      "A practical roadmap for the next three to six months",
    ],
  },
  {
    title: "Relocation Advisory",
    summary:
      "A clear framework for incoming households who need pace, local market orientation, and efficient decision support from a distance.",
    emphasis: "For executive moves and compressed relocation timelines",
    deliverables: [
      "Market orientation and area matching",
      "School, commute, and lifestyle filtering",
      "Virtual tours and remote offer coordination",
    ],
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: "Measured Advice",
    description:
      "Clients get direct recommendations grounded in market realities, timing, and the specifics of their move rather than generic optimism.",
  },
  {
    title: "Editorial Marketing",
    description:
      "Listings are presented with restraint, warmth, and visual quality so the property feels memorable before a buyer even walks in.",
  },
  {
    title: "Local Signal",
    description:
      "We follow micro-neighborhood shifts closely so strategy reflects actual buyer behavior, not just broad-market averages.",
  },
];

export const serviceStandards: ValuePoint[] = [
  {
    title: "A written launch plan",
    description:
      "Every engagement starts with a sequence of priorities, milestones, and decision points so timing never feels vague.",
  },
  {
    title: "Concise communication",
    description:
      "Expect direct updates, practical answers, and advice calibrated to what matters most rather than volume for its own sake.",
  },
  {
    title: "Trusted specialists",
    description:
      "Photographers, stagers, inspectors, and closing professionals are coordinated through one plan to keep the experience calm.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Phone",
    value: "(206) 555-0148",
    href: "tel:+12065550148",
    description: "Private tour requests, consultation scheduling, and time-sensitive questions.",
  },
  {
    label: "Email",
    value: "hello@crescentvalerealty.com",
    href: "mailto:hello@crescentvalerealty.com",
    description: "Best for valuation inquiries, introductions, and detailed planning notes.",
  },
  {
    label: "Office",
    value: "175 Mercer Lane, Suite 300",
    href: "https://maps.google.com/?q=175+Mercer+Lane+Suite+300+Harbor+City+WA+98109",
    description: "Private advisory meetings are available by appointment in Harbor City.",
  },
];

export const officeHours: string[] = [
  "Monday to Friday: 9:00 AM to 6:00 PM",
  "Saturday: By appointment for private tours and planning sessions",
  "Sunday: Reserved for active client launches and negotiated showings",
];
