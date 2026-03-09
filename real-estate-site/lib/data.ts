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
  imageSrc: string;
  imageAlt: string;
};

export type Neighborhood = {
  name: string;
  profile: string;
  commute: string;
  housing: string;
  summary: string;
  highlights: string[];
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
  accent: string;
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
  { value: "$186M", label: "illustrative annual represented volume" },
  { value: "21 days", label: "median launch-to-contract timing" },
  { value: "92%", label: "of sellers closing at or above asking" },
];

export const aboutStats: HeroStat[] = [
  { value: "14 years", label: "average senior-level market experience" },
  { value: "4 enclaves", label: "core neighborhoods actively served" },
  { value: "1:1", label: "client-to-advisor communication model" },
];

export const featuredListings: Listing[] = [
  {
    name: "Alder Row Residence",
    address: "118 Alder Row",
    neighborhood: "Northpoint",
    price: "$1,875,000",
    beds: "4 beds",
    baths: "3.5 baths",
    area: "3,180 sq ft",
    description:
      "A cedar-clad contemporary with south-facing light, a sculpted kitchen, and a private garden terrace minutes from the waterfront greenway.",
    label: "New to market",
    imageSrc: "/listing-residence.svg",
    imageAlt:
      "Illustrated exterior of a contemporary cedar-clad home with expansive windows and warm evening light",
  },
  {
    name: "The Briarstone",
    address: "42 Briarstone Lane",
    neighborhood: "Cedar Heights",
    price: "$2,460,000",
    beds: "5 beds",
    baths: "4.5 baths",
    area: "4,260 sq ft",
    description:
      "Classic stone architecture, mature landscaping, and a tailored renovation that balances formal entertaining rooms with family-scale comfort.",
    label: "Private showing",
    imageSrc: "/listing-estate.svg",
    imageAlt:
      "Illustrated exterior of a stone estate home with landscaped grounds and arched windows",
  },
  {
    name: "Marlowe Penthouse",
    address: "900 Harbor Boulevard, PH-3",
    neighborhood: "Old Harbor",
    price: "$1,490,000",
    beds: "3 beds",
    baths: "3 baths",
    area: "2,180 sq ft",
    description:
      "A top-floor residence with skyline views, generous entertaining space, and concierge amenities in one of the district's most established full-service buildings.",
    label: "Featured listing",
    imageSrc: "/listing-penthouse.svg",
    imageAlt:
      "Illustrated exterior of a luxury penthouse tower with terrace lighting and a metropolitan skyline",
  },
];

export const neighborhoods: Neighborhood[] = [
  {
    name: "Northpoint",
    profile: "Waterfront village feel",
    commute: "15 minutes to downtown via express line",
    housing: "Updated colonials, townhomes, and architect-led infill",
    summary:
      "Northpoint draws buyers who want walkability, polished housing stock, and quick access to both the marina district and the urban core.",
    highlights: ["Waterfront promenade", "Independent cafés", "Top-rated elementary schools"],
  },
  {
    name: "Lakemont",
    profile: "Family-forward and green",
    commute: "Direct commuter rail access and easy beltway connection",
    housing: "Generous lots, newer construction, and quiet cul-de-sacs",
    summary:
      "Lakemont is consistently sought after for its school reputation, generous backyards, and homes that offer room to grow without sacrificing convenience.",
    highlights: ["Tennis and swim clubs", "Weekend farmers market", "Nature preserve trails"],
  },
  {
    name: "Old Harbor",
    profile: "Historic, energetic, and walkable",
    commute: "Moments from downtown offices and ferry access",
    housing: "Converted lofts, brick rowhouses, and full-service condos",
    summary:
      "Old Harbor appeals to buyers who want architecture, restaurant access, and a true neighborhood rhythm close to galleries, boutiques, and the waterfront.",
    highlights: ["Dining corridor", "Design showrooms", "Boutique fitness studios"],
  },
  {
    name: "Cedar Heights",
    profile: "Private and view-driven",
    commute: "20 minutes to downtown outside peak traffic",
    housing: "Custom homes, estates, and gated enclaves",
    summary:
      "Cedar Heights offers larger homesites, elevated views, and a more private setting while still keeping daily routines practical for executive households.",
    highlights: ["Country club access", "Ridgeline views", "High-spec renovations"],
  },
];

export const buyingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Strategy And Search Setup",
    description:
      "We clarify timing, financing, neighborhood priorities, and fit criteria so the search stays focused from day one.",
  },
  {
    step: "02",
    title: "Touring And Opportunity Review",
    description:
      "Homes are evaluated through a practical lens: resale strength, renovation scope, competitive pressure, and total acquisition cost.",
  },
  {
    step: "03",
    title: "Offer Planning And Negotiation",
    description:
      "We shape a competitive offer around price, contingencies, timing, and presentation so the full package works in your favor.",
  },
  {
    step: "04",
    title: "Contract To Close",
    description:
      "Inspections, vendor coordination, and milestone management are handled with clear communication all the way to closing day.",
  },
];

export const sellingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Valuation And Positioning",
    description:
      "We assess recent comparables, buyer demand, timing, and the property's strongest narrative before setting pricing direction.",
  },
  {
    step: "02",
    title: "Prep, Styling, And Production",
    description:
      "Our team coordinates staging guidance, light improvements, photography, floor plans, and launch materials with a single plan.",
  },
  {
    step: "03",
    title: "Launch And Buyer Outreach",
    description:
      "The listing goes live with polished presentation, targeted agent outreach, and a showing schedule designed to build momentum.",
  },
  {
    step: "04",
    title: "Offer Selection And Close",
    description:
      "We compare not just pricing, but terms, contingencies, timing, and certainty so the chosen offer truly supports your next move.",
  },
];

export const agents: Agent[] = [
  {
    name: "Lena Hart",
    role: "Founder & Principal Broker",
    bio: "Lena leads the firm with a measured, design-aware approach shaped by years of advising sellers, relocating executives, and repeat referral clients across the premium market.",
    experience: "16 years in residential brokerage",
    specialties: ["Listing strategy", "Luxury transitions", "Design-forward homes"],
    accent: "linear-gradient(135deg, rgba(35,53,46,0.95), rgba(177,138,88,0.9))",
  },
  {
    name: "Marcus Avery",
    role: "Senior Buyer Advisor",
    bio: "Marcus is known for calm buyer representation, strong neighborhood knowledge, and sourcing opportunities that align with both lifestyle goals and long-term value.",
    experience: "11 years in buyer advisory",
    specialties: ["Private buyer searches", "Negotiation", "School-focused moves"],
    accent: "linear-gradient(135deg, rgba(28,45,59,0.95), rgba(204,179,145,0.92))",
  },
  {
    name: "Priya Desai",
    role: "Listing Strategist",
    bio: "Priya manages pre-listing execution, vendor coordination, and launch planning so every seller enters the market with stronger presentation and fewer surprises.",
    experience: "9 years in listing operations",
    specialties: ["Prep and staging", "Vendor oversight", "Launch planning"],
    accent: "linear-gradient(135deg, rgba(85,59,43,0.95), rgba(177,138,88,0.82))",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They brought clarity to every decision and never made the process feel noisy. Our home launched beautifully and the negotiation was handled with real judgment.",
    name: "Erin & Michael S.",
    role: "Cedar Heights sellers",
  },
  {
    quote:
      "We were relocating on a tight timeline and needed direct advice, not endless tours. Crescent Vale narrowed the field fast and helped us win the right home without overreaching.",
    name: "Naomi R.",
    role: "Northpoint buyer",
  },
  {
    quote:
      "The valuation meeting alone was worth it. We walked away with a realistic plan, a prep list we could actually execute, and a timeline that made sense for our family.",
    name: "Daniel & Priya K.",
    role: "Lakemont homeowners",
  },
];

export const serviceOfferings: ServiceOffering[] = [
  {
    title: "Seller Representation",
    summary:
      "Pricing, preparation, and launch strategy designed to present a property with confidence and restraint.",
    emphasis: "Best for homeowners planning to launch within the next 12 months.",
    deliverables: [
      "Comparative pricing and positioning strategy",
      "Prep recommendations and vendor coordination",
      "Photography, floor plan, and editorial marketing assets",
    ],
  },
  {
    title: "Buyer Representation",
    summary:
      "A focused acquisition strategy for clients who want strong counsel in competitive or low-inventory conditions.",
    emphasis: "Ideal for local moves, relocations, and timing-sensitive searches.",
    deliverables: [
      "Search strategy and neighborhood shortlist",
      "Tour planning and opportunity review",
      "Offer structuring and contract management",
    ],
  },
  {
    title: "Valuation Sessions",
    summary:
      "Private consultations for owners weighing timing, renovation scope, or whether a move makes sense at all.",
    emphasis: "Useful when you want a grounded opinion before making larger plans.",
    deliverables: [
      "Illustrative pricing range and timing guidance",
      "Prep priorities with return-on-effort context",
      "A tailored roadmap for the next three to six months",
    ],
  },
  {
    title: "Relocation Advisory",
    summary:
      "A structured plan for clients moving into the market who need pace, local insight, and efficient decision support.",
    emphasis: "Designed for executive moves and households with compressed timelines.",
    deliverables: [
      "Market orientation and area matching",
      "School, commute, and lifestyle-based filtering",
      "Virtual tours and remote offer coordination",
    ],
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: "Measured Advice",
    description:
      "We prefer clear guidance over pressure. Clients get honest recommendations grounded in market realities and personal priorities.",
  },
  {
    title: "Polished Presentation",
    description:
      "Listings are treated like brand moments, with thoughtful prep, strong visuals, and copy that actually reflects the home.",
  },
  {
    title: "Local Intelligence",
    description:
      "We track micro-neighborhood patterns, buyer behavior, and timing shifts closely so strategy does not rely on generic averages.",
  },
];

export const serviceStandards: ValuePoint[] = [
  {
    title: "A written game plan",
    description:
      "Every client engagement starts with a clear sequence of priorities, milestones, and responsibilities so timing is never vague.",
  },
  {
    title: "Proactive communication",
    description:
      "Expect regular updates, concise advice, and direct answers when conditions change or decisions need to be made quickly.",
  },
  {
    title: "Trusted partner network",
    description:
      "We coordinate photographers, stagers, inspectors, contractors, and closing professionals to keep the experience organized.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Phone",
    value: "(206) 555-0148",
    href: "tel:+12065550148",
    description: "For immediate questions, private tour requests, or consultation scheduling.",
  },
  {
    label: "Email",
    value: "hello@crescentvalerealty.com",
    href: "mailto:hello@crescentvalerealty.com",
    description: "Ideal for valuation inquiries, introductions, and longer planning notes.",
  },
  {
    label: "Office",
    value: "175 Mercer Lane, Suite 300",
    href: "https://maps.google.com/?q=175+Mercer+Lane+Suite+300+Harbor+City+WA+98109",
    description: "Private meetings are available by appointment in Harbor City.",
  },
];

export const officeHours: string[] = [
  "Monday to Friday: 9:00 AM to 6:00 PM",
  "Saturday: By appointment for tours and consultations",
  "Sunday: Reserved for active client needs and listing launches",
];
