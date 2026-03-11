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
  highlights: string[];
  timeline: string;
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  deliverable: string;
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
  summary: string;
  scope: string[];
};

export const company = {
  name: "Blue Oak Remodeling Co.",
  tagline:
    "Design-build remodeling for Nashville homes that need better proportion, quieter materials, and a process that holds together from first walkthrough to final handoff.",
  phoneDisplay: "(615) 555-0192",
  phoneRaw: "+16155550192",
  email: "hello@blueoakremodeling.com",
  addressLine: "2451 Charlotte Ave, Suite 200",
  cityStateZip: "Nashville, TN 37203",
  hours: [
    "Monday-Friday: 8:00 AM-6:00 PM",
    "Saturday: 9:00 AM-2:00 PM",
    "Sunday: Site visits by appointment",
  ],
  license: "Licensed and Insured | TN Contractor License #BC-54219",
  foundedYear: "2012",
  primaryServiceArea: "Nashville, Brentwood, Franklin, Belle Meade, and nearby neighborhoods",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/project-guide", label: "Project Guide" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const trustIndicators = [
  {
    title: "Licensed design-build guidance",
    detail:
      "Selections, scheduling, permits, and build execution are coordinated under one accountable local team.",
  },
  {
    title: "Protected, lived-in job sites",
    detail:
      "Dust control, daily cleanup, and clear homeowner communication are treated as part of the craft.",
  },
  {
    title: "Material-first recommendations",
    detail:
      "We steer clients toward finishes that feel timeless in real homes and wear well over time.",
  },
  {
    title: "Documented handoff and warranty",
    detail:
      "Every project closes with punch-list review, care guidance, and workmanship warranty support.",
  },
];

export const featuredStats = [
  { value: "380+", label: "Projects led from walkthrough to handoff" },
  { value: "14", label: "Years in Middle Tennessee homes" },
  { value: "4.9", label: "Average homeowner rating" },
];

export const services: Service[] = [
  {
    id: "kitchen-renovations",
    name: "Kitchen Renovations",
    shortDescription:
      "Opening cramped layouts, elevating cabinetry, and building kitchens that feel tailored to daily life.",
    fullDescription:
      "We rework kitchen flow around how your household actually cooks, gathers, and entertains, then deliver custom cabinetry, durable countertops, layered lighting, and appliance integration with a furniture-level finish.",
    idealFor:
      "Homeowners ready to replace dated cabinetry, improve circulation, and invest in a kitchen that carries the whole house.",
    includes: [
      "Layout planning and fixture coordination",
      "Custom or semi-custom cabinetry and hardware",
      "Countertops, tile, lighting, and appliance installation",
      "Permits, punch-list review, and closeout walkthrough",
    ],
    highlights: ["White oak cabinetry", "Hidden storage planning", "Island-centered layouts"],
    timeline: "Typical build window: 8-12 weeks",
    image: "/images/hero-kitchen.jpg",
    imageAlt: "A premium kitchen renovation with a large island, wood cabinetry, and warm lighting.",
  },
  {
    id: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    shortDescription:
      "Calm, highly functional baths with better storage, smart waterproofing, and more considered material palettes.",
    fullDescription:
      "From primary suites to secondary baths, we deliver watertight construction, ventilation upgrades, custom vanities, and finish selections that make the room feel restorative instead of purely utilitarian.",
    idealFor:
      "Clients who want a cleaner daily routine, better storage, and a bathroom that raises the quality of the whole home.",
    includes: [
      "Shower and tub conversions",
      "Vanity, lighting, and storage improvements",
      "Tile waterproofing and ventilation upgrades",
      "Plumbing and electrical coordination",
    ],
    highlights: ["Frameless shower glass", "Stone-look tile", "Layered vanity lighting"],
    timeline: "Typical build window: 5-8 weeks",
    image: "/images/bathroom-vanity.jpg",
    imageAlt: "A bright bathroom with a long vanity, brass details, and a walk-in shower.",
  },
  {
    id: "whole-home-renovation",
    name: "Whole-Home Renovation",
    shortDescription:
      "Multi-room planning that unifies finishes, flow, and architectural character throughout the house.",
    fullDescription:
      "For older homes and new-to-you properties, we phase renovations to keep the work organized while updating flooring, millwork, lighting, paint, and room-to-room continuity with a cohesive design language.",
    idealFor:
      "Homeowners who want the house to feel complete and consistent rather than updated one room at a time.",
    includes: [
      "Multi-room design and finish coordination",
      "Flooring, trim, stair, and paint updates",
      "Lighting, hardware, and architectural detail refinement",
      "Phased scheduling for occupied homes",
    ],
    highlights: ["Consistent trim profiles", "Room-to-room color continuity", "Architectural cleanup"],
    timeline: "Typical build window: 10-16 weeks",
    image: "/images/dining-room.jpg",
    imageAlt: "A warm dining room with natural light, wood detailing, and a premium residential feel.",
  },
  {
    id: "custom-millwork",
    name: "Custom Millwork and Built-Ins",
    shortDescription:
      "Cabinetry, mudroom storage, and finish carpentry that make renovated rooms feel settled and bespoke.",
    fullDescription:
      "We design and install built-ins, cabinetry details, trim packages, and storage moments that elevate both utility and perceived value, especially in kitchens, entries, family rooms, and primary suites.",
    idealFor:
      "Homes that already have a strong shell but need craftsmanship and storage details to feel finished.",
    includes: [
      "Built-in cabinetry and shelving",
      "Trim, casing, and stair detail upgrades",
      "Mudroom and entry storage solutions",
      "Finish carpentry and hardware installation",
    ],
    highlights: ["Integrated storage", "Custom trim packages", "Cabinet-ready details"],
    timeline: "Typical build window: 3-6 weeks",
    image: "/images/cabinet-detail.jpg",
    imageAlt: "A dark custom cabinet detail with refined woodwork and premium hardware.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Walkthrough and listening session",
    description:
      "We start in the home, talk through what feels off, and document priorities around layout, materials, budget, and timing.",
    deliverable: "You leave with a clear next-step recommendation and realistic scope direction.",
  },
  {
    title: "Scope, selections, and schedule",
    description:
      "Before demo begins, we align the work plan, material path, allowances, and sequence so decisions do not bottleneck the build.",
    deliverable: "Detailed proposal, timeline framing, and selection guidance.",
  },
  {
    title: "Construction with weekly visibility",
    description:
      "Our team manages trades, protects the home, and gives consistent updates so the project stays organized and legible.",
    deliverable: "Weekly progress communication and on-site quality control.",
  },
  {
    title: "Punch list, styling, and handoff",
    description:
      "We finish with a documented walkthrough, final touch-ups, and care notes so the home feels complete the day you move back in.",
    deliverable: "Closeout package, warranty support, and maintenance guidance.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Blue Oak turned a tired kitchen into the room everyone naturally gathers in. The work feels custom, but the bigger win was how calmly they ran the project.",
    customerName: "Andrea M.",
    location: "Green Hills",
    project: "Kitchen renovation",
  },
  {
    quote:
      "We chose them because their estimate felt practical and honest. The bathroom is beautiful, but the clean communication is what made us recommend them to neighbors.",
    customerName: "James and Felicia R.",
    location: "Brentwood",
    project: "Primary bath remodel",
  },
  {
    quote:
      "They helped us make dozens of decisions without making the process feel overwhelming. Every room now feels like it belongs to the same home.",
    customerName: "Tyler C.",
    location: "Franklin",
    project: "Whole-home renovation",
  },
];

export const projectHighlights: ProjectHighlight[] = [
  {
    title: "Belle Meade kitchen opening",
    location: "Belle Meade",
    category: "Kitchen renovation",
    before:
      "A segmented kitchen with upper cabinets cutting off sight lines and little room for family traffic.",
    after:
      "An island-centered plan with warmer wood tones, better prep storage, and layered lighting that carries into adjacent living spaces.",
    timeline: "11-week build",
    image: "/images/kitchen-window.jpg",
    imageAlt: "A refined kitchen with a sink beneath a window, brass hardware, and light cabinetry.",
    summary:
      "This project focused on making the kitchen brighter, calmer, and easier to use every day without losing a residential, collected feel.",
    scope: ["Cabinetry redesign", "Quartz surfaces", "Appliance wall rework"],
  },
  {
    title: "Spa bath in Brentwood",
    location: "Brentwood",
    category: "Bathroom remodel",
    before:
      "A heavy, builder-grade bath with poor vanity lighting, dated tile, and very little practical storage.",
    after:
      "A lighter palette, custom vanity planning, brass fixtures, and a walk-in shower that feels more open and restorative.",
    timeline: "7-week build",
    image: "/images/bathroom-shower.jpg",
    imageAlt: "A warm modern bathroom with a vanity, walk-in shower, and premium materials.",
    summary:
      "The goal was not just luxury, but a bathroom that performs better at the beginning and end of every day.",
    scope: ["Custom vanity", "Full tile reset", "Ventilation and lighting upgrades"],
  },
  {
    title: "Room-to-room refresh in Franklin",
    location: "Franklin",
    category: "Whole-home renovation",
    before:
      "Multiple rooms had been updated piecemeal over time, leaving the house disconnected in tone and detailing.",
    after:
      "A coordinated finish palette, refined trim details, and warmer social spaces that finally make the home feel cohesive.",
    timeline: "13-week phased build",
    image: "/images/dining-room.jpg",
    imageAlt: "A warm residential dining room with layered textures and natural light.",
    summary:
      "This scope tied together circulation spaces, dining, and family areas so the home reads as one considered environment.",
    scope: ["Paint and trim package", "Lighting replacement", "Dining and entry refinements"],
  },
];

export const aboutStats = [
  { label: "Founded", value: company.foundedYear },
  { label: "Primary market", value: "High-end residential remodels" },
  { label: "Most common projects", value: "Kitchens, baths, and millwork-heavy interiors" },
];

export const serviceAreas = [
  "Nashville",
  "Belle Meade",
  "Brentwood",
  "Franklin",
  "Green Hills",
  "12 South",
  "Sylvan Park",
  "The Nations",
];

export const differentiators = [
  "One lead contact from first meeting through closeout",
  "Selection help rooted in budget and durability, not trend-chasing",
  "Respectful occupied-home protocols with daily cleanup expectations",
  "Vendor and trade relationships that support premium residential work",
];

export const aboutHighlights = [
  {
    title: "Designed around real household routines",
    description:
      "We ask how mornings work, where clutter gathers, what storage fails, and how rooms connect before proposing any layout changes.",
  },
  {
    title: "Quiet craftsmanship over visual noise",
    description:
      "Good renovation work should feel settled and effortless, with joinery, trim, and material transitions that do not call attention to themselves.",
  },
  {
    title: "Practical luxury that lasts",
    description:
      "We are interested in comfort, durability, and long-term value first, then layering in materials that make the home feel elevated.",
  },
];

export const consultationChecklist = [
  "Which rooms are involved and what is not working",
  "Preferred timing and whether the home will be occupied",
  "Material direction, inspiration, or references you already have",
  "Budget comfort range so we can guide scope responsibly",
];

export const contactPageFaq = [
  {
    question: "Do you offer complimentary first consultations?",
    answer:
      "Yes. For homeowners in our primary service area, the initial discovery visit is complimentary.",
  },
  {
    question: "Can you help with selections and finish direction?",
    answer:
      "Yes. We regularly guide cabinetry, tile, fixture, hardware, paint, and lighting decisions as part of the planning process.",
  },
  {
    question: "Do you work on occupied homes?",
    answer:
      "Often. Many of our projects are phased for lived-in homes, with dust protection, daily cleanup, and schedule transparency built in.",
  },
];
