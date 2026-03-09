export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: string;
  includes: string[];
  timeline: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  customerName: string;
  location: string;
  project: string;
};

export type ProjectHighlight = {
  title: string;
  location: string;
  category: string;
  before: string;
  after: string;
  timeline: string;
  image: string;
  imageAlt: string;
};

export const company = {
  name: "Blue Oak Remodeling Co.",
  tagline: "Crafted renovations for Nashville homeowners who value quality.",
  phoneDisplay: "(615) 555-0192",
  phoneRaw: "+16155550192",
  email: "hello@blueoakremodeling.com",
  addressLine: "2451 Charlotte Ave, Suite 200",
  cityStateZip: "Nashville, TN 37203",
  hours: [
    "Mon–Fri: 8:00 AM–6:00 PM",
    "Saturday: 9:00 AM–2:00 PM",
    "Sunday: By appointment",
  ],
  license: "Licensed & Insured · TN Contractor License #BC-54219",
  foundedYear: "2012",
  primaryServiceArea: "Nashville, Brentwood, Franklin, and surrounding communities",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const trustIndicators = [
  {
    title: "Licensed and Fully Insured",
    detail:
      "Code-compliant project management from permit handling through final punch list.",
  },
  {
    title: "4.9-Star Client Satisfaction",
    detail:
      "Consistently top-rated by homeowners for communication, cleanliness, and craftsmanship.",
  },
  {
    title: "Dedicated In-House Team",
    detail:
      "Project leads and core trades are managed directly so your schedule stays on track.",
  },
  {
    title: "Warranty-Backed Work",
    detail:
      "Every project includes a workmanship warranty and documented closeout package.",
  },
];

export const featuredStats = [
  { value: "380+", label: "Projects completed" },
  { value: "14", label: "Years serving Middle Tennessee" },
  { value: "12", label: "Average days to project kickoff" },
];

export const services: Service[] = [
  {
    id: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    shortDescription:
      "Functional, design-forward kitchens with custom cabinetry, storage, and premium finishes.",
    fullDescription:
      "We redesign kitchen layouts around daily routines, then deliver expert cabinetry, durable countertops, lighting, and appliance integration for a space that works as beautifully as it looks.",
    idealFor:
      "Homeowners ready to modernize dated kitchens and improve flow for entertaining.",
    includes: [
      "Layout planning and 3D concept review",
      "Cabinetry, countertops, tile, and fixture installation",
      "Electrical and lighting upgrades",
      "Permit coordination and final quality walkthrough",
    ],
    timeline: "Typical timeline: 6–10 weeks",
  },
  {
    id: "bathroom-renovation",
    name: "Bathroom Renovation",
    shortDescription:
      "Spa-inspired bathrooms with better storage, improved ventilation, and timeless material choices.",
    fullDescription:
      "From compact hall baths to full primary suites, we deliver watertight construction, clean lines, and smart fixture placement that increases comfort and home value.",
    idealFor:
      "Families needing more durable, low-maintenance bathrooms with better usability.",
    includes: [
      "Shower and tub conversions",
      "Vanity and storage upgrades",
      "Tile waterproofing and ventilation improvements",
      "Plumbing and electrical updates",
    ],
    timeline: "Typical timeline: 4–7 weeks",
  },
  {
    id: "whole-home-refresh",
    name: "Whole-Home Refresh",
    shortDescription:
      "Coordinated updates that unify finishes, improve flow, and prepare homes for long-term living.",
    fullDescription:
      "Our team phases multi-room renovations so your home transformation is organized, efficient, and cohesive from flooring and trim to lighting and paint.",
    idealFor:
      "Owners of older homes seeking a consistent, move-in-ready look without a full gut renovation.",
    includes: [
      "Multi-room finish planning",
      "Flooring, trim, and hardware replacement",
      "Interior painting and drywall refinement",
      "Phased scheduling for minimal disruption",
    ],
    timeline: "Typical timeline: 8–14 weeks",
  },
  {
    id: "outdoor-living",
    name: "Outdoor Living Upgrades",
    shortDescription:
      "Deck, patio, and covered-porch builds that expand living space and boost curb appeal.",
    fullDescription:
      "We create weather-ready outdoor spaces with durable materials, integrated lighting, and clean architectural detailing tailored to your home.",
    idealFor:
      "Homeowners wanting entertainment-ready spaces for spring-through-fall gatherings.",
    includes: [
      "Custom deck and patio construction",
      "Pergolas and covered porch framing",
      "Outdoor lighting and electrical setup",
      "Railings, staining, and finish work",
    ],
    timeline: "Typical timeline: 3–6 weeks",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "On-Site Consultation",
    description:
      "We assess your space, priorities, and budget in person, then confirm project goals and next-step timeline.",
  },
  {
    title: "Design and Scope Planning",
    description:
      "You receive a clear scope of work, material direction, and a fixed project roadmap before construction starts.",
  },
  {
    title: "Build and Communicate",
    description:
      "Our crew executes with daily site standards and weekly progress updates so you always know what is happening.",
  },
  {
    title: "Final Walkthrough and Warranty",
    description:
      "We close with a detailed walkthrough, final adjustments, and documented warranty coverage.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Blue Oak made our kitchen remodel feel organized from day one. Communication was excellent and the craftsmanship is genuinely top-tier.",
    customerName: "Andrea M.",
    location: "Green Hills",
    project: "Kitchen Renovation",
  },
  {
    quote:
      "We interviewed four contractors and chose Blue Oak because their process was transparent. They finished on schedule and the result exceeded expectations.",
    customerName: "James and Felicia R.",
    location: "Brentwood",
    project: "Primary Bathroom Remodel",
  },
  {
    quote:
      "Their team treated our home with respect, kept the jobsite clean, and delivered exactly what they promised. I recommend them without hesitation.",
    customerName: "Tyler C.",
    location: "Franklin",
    project: "Whole-Home Interior Refresh",
  },
];

export const projectHighlights: ProjectHighlight[] = [
  {
    title: "Modern Family Kitchen",
    location: "12 South, Nashville",
    category: "Kitchen Remodel",
    before:
      "Closed layout with poor lighting and minimal prep space for everyday cooking.",
    after:
      "Opened floor plan, custom white oak cabinetry, quartz surfaces, and layered task lighting.",
    timeline: "9-week build",
    image: "/images/project-kitchen.svg",
    imageAlt:
      "Illustration of a bright renovated kitchen with island seating and pendant lighting.",
  },
  {
    title: "Primary Bath Upgrade",
    location: "Belle Meade",
    category: "Bathroom Renovation",
    before:
      "Narrow shower, outdated tile, and limited vanity storage for a growing family.",
    after:
      "Frameless walk-in shower, floating vanity, and warm stone-inspired finishes.",
    timeline: "6-week build",
    image: "/images/project-bath.svg",
    imageAlt:
      "Illustration of a spa-like bathroom renovation with walk-in shower and floating vanity.",
  },
  {
    title: "Covered Patio Extension",
    location: "Westhaven, Franklin",
    category: "Outdoor Living",
    before:
      "Unused backyard slab with little shade and no dedicated gathering zone.",
    after:
      "Custom covered patio with lighting, cedar accents, and integrated seating.",
    timeline: "4-week build",
    image: "/images/project-exterior.svg",
    imageAlt:
      "Illustration of a covered patio renovation with outdoor seating and warm evening lighting.",
  },
];

export const serviceAreas = [
  "Nashville",
  "Brentwood",
  "Franklin",
  "Belle Meade",
  "The Nations",
  "East Nashville",
  "Sylvan Park",
  "Germantown",
];

export const differentiators = [
  "Dedicated project manager from kickoff to closeout",
  "Detailed proposals with clear allowances and schedules",
  "Respectful crews with daily cleanup standards",
  "Trusted local trade partners and vendor relationships",
];

export const aboutHighlights = [
  {
    title: "Built for Long-Term Value",
    description:
      "We prioritize durable materials, quality installation, and design choices that age well in real homes.",
  },
  {
    title: "Process-Driven Execution",
    description:
      "Clear milestones, regular communication, and dependable scheduling keep projects moving smoothly.",
  },
  {
    title: "Local Expertise",
    description:
      "Our team understands Nashville permitting realities, neighborhood styles, and resale-driven renovation decisions.",
  },
];

export const contactPageFaq = [
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. Initial consultations are complimentary for homeowners in our primary service area.",
  },
  {
    question: "What project sizes do you take on?",
    answer:
      "Most projects range from focused room remodels to multi-room home refreshes.",
  },
  {
    question: "Can you help with design selections?",
    answer:
      "Absolutely. We guide materials, fixtures, and finish selections to match your goals and budget.",
  },
];
