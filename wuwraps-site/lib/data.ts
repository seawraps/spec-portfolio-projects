export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  issue: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: string;
  includes: string[];
  highlights: string[];
  turnaround: string;
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

export type GalleryBuild = {
  title: string;
  vehicle: string;
  category: string;
  film: string;
  summary: string;
  scope: string[];
  accent: "red" | "blue" | "yellow";
  /** Path to a real install photo under /public. When omitted, a comic illustration is shown. */
  image?: string;
  imageAlt?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const company = {
  name: "Wu Wraps",
  owner: "Mark Wu",
  tagline:
    "Seattle's most trusted vinyl wrap shop. Eighteen years turning daily drivers, show cars, and work fleets into rolling artwork out of Renton, Washington.",
  phoneDisplay: "(206) 707-6491",
  phoneRaw: "+12067076491",
  email: "wuwraps@gmail.com",
  instagram: "@wuwraps",
  instagramUrl: "https://www.instagram.com/wuwraps/",
  addressLine: "Renton Highlands",
  cityStateZip: "Renton, WA 98059",
  hours: [
    "Monday–Friday: 9:00 AM – 6:00 PM",
    "Saturday: By appointment",
    "Sunday: Closed",
  ],
  badge: "18 Years Wrapping the Pacific Northwest",
  foundedYear: "2008",
  yearsInBusiness: "18",
  primaryServiceArea:
    "Renton, Seattle, Bellevue, Kent, Tukwila, Newcastle, Issaquah, and the greater Puget Sound",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const trustIndicators = [
  {
    title: "18 years, thousands of wraps",
    detail:
      "Mark Wu has been laying vinyl in the Renton and Seattle area since 2008. The reputation was earned one clean install at a time.",
  },
  {
    title: "Premium films only",
    detail:
      "We install certified, name-brand cast vinyl from 3M, Avery Dennison, and KPMF, backed by real manufacturer warranties.",
  },
  {
    title: "Brand-new, bigger shop",
    detail:
      "A larger climate-controlled bay means more lifts, faster turnaround, and room to take on full fleets without the wait.",
  },
  {
    title: "Trusted by thousands",
    detail:
      "Daily drivers, exotics, race cars, and commercial fleets across Puget Sound roll on a Wu Wraps install.",
  },
];

export const featuredStats = [
  { value: "18", label: "Years wrapping the Pacific Northwest" },
  { value: "5K+", label: "Vehicles transformed and counting" },
  { value: "100%", label: "Premium cast vinyl, every job" },
];

export const services: Service[] = [
  {
    id: "color-change-wraps",
    issue: "No. 01",
    name: "Full Color-Change Wraps",
    shortDescription:
      "Transform your ride bumper to bumper — gloss, satin, matte, chrome, or color-shift, all without touching the factory paint.",
    fullDescription:
      "A full color change is the headline act. We disassemble panels, wrap every visible surface, and tuck the edges so it reads like factory paint. Switch your daily into a head-turner and protect the original finish underneath for resale day.",
    idealFor:
      "Drivers who want a brand-new look, a rare color, or a finish the factory never offered — with the paint protected underneath.",
    includes: [
      "Full panel disassembly and edge tucking",
      "Door jambs and hidden areas wrapped on request",
      "Hundreds of gloss, satin, matte, and color-shift options",
      "Factory paint preserved for resale value",
    ],
    highlights: ["Color-shift & chrome", "Satin & matte", "Factory-grade edges"],
    turnaround: "Typical install: 3–5 days",
  },
  {
    id: "commercial-fleet",
    issue: "No. 02",
    name: "Commercial & Fleet Graphics",
    shortDescription:
      "Turn your vans, trucks, and trailers into 24/7 billboards with bold, on-brand printed graphics that get noticed.",
    fullDescription:
      "Your work vehicles are the cheapest advertising you'll ever buy. We design, print, and install logos, lettering, and full fleet wraps that keep your branding consistent across every truck on the road — and pulling in calls while parked.",
    idealFor:
      "Contractors, trades, food trucks, and any local business that wants its vehicles working as rolling advertisements.",
    includes: [
      "Custom design and print-ready artwork",
      "Logos, lettering, and partial or full coverage",
      "Consistent branding across the whole fleet",
      "DOT numbers and contact info layout",
    ],
    highlights: ["Fleet consistency", "Print + cut graphics", "Built to be seen"],
    turnaround: "Typical install: 1–4 days per vehicle",
  },
  {
    id: "partial-accents",
    issue: "No. 03",
    name: "Partial Wraps & Accents",
    shortDescription:
      "Roofs, hoods, mirror caps, chrome delete, and racing stripes — sharp accents that change the whole attitude of the car.",
    fullDescription:
      "Not every build needs a full wrap. A gloss-black roof, a blacked-out chrome trim package, a carbon-fiber hood, or a clean set of stripes can completely change the stance of a vehicle for a fraction of the cost.",
    idealFor:
      "Owners who want a custom touch — chrome delete, two-tone roofs, hoods, mirrors, or stripe kits — without a full color change.",
    includes: [
      "Chrome delete and trim blackout",
      "Roof, hood, and mirror-cap wraps",
      "Racing stripes and accent graphics",
      "Carbon-fiber and brushed-metal textures",
    ],
    highlights: ["Chrome delete", "Two-tone roofs", "Stripe kits"],
    turnaround: "Typical install: 1–2 days",
  },
  {
    id: "custom-prints",
    issue: "No. 04",
    name: "Custom Printed Wraps & Liveries",
    shortDescription:
      "One-off printed designs, race liveries, and wild custom graphics — if you can dream it up, we can lay it down.",
    fullDescription:
      "This is where it gets fun. Full-color printed wraps, track-day liveries, sponsor layouts, and one-of-one art cars. We handle the design, the print, the lamination, and the install so the finished piece looks like it drove off a comic-book splash page.",
    idealFor:
      "Show builds, race teams, promo vehicles, and anyone who wants a finish nobody else on the road has.",
    includes: [
      "Custom design and proofing",
      "Full-color printed and laminated vinyl",
      "Race liveries and sponsor layouts",
      "Color-matching to your brand or theme",
    ],
    highlights: ["Race liveries", "Full-color print", "One-of-one art"],
    turnaround: "Typical install: 4–7 days with design",
  },
  {
    id: "ppf-protection",
    issue: "No. 05",
    name: "Paint Protection Film (PPF)",
    shortDescription:
      "Clear, self-healing film that guards your paint from rock chips, road rash, and Pacific Northwest weather.",
    fullDescription:
      "Invisible armor for your finish. Self-healing clear film takes the rock chips, bug etching, and grime so your paint doesn't have to. Add it to high-impact zones or go full-front for the ones you plan to keep.",
    idealFor:
      "New cars, exotics, and anyone who wants the paint underneath to stay flawless for years.",
    includes: [
      "Full-front, track-pack, or full-body coverage",
      "Self-healing, high-gloss clear film",
      "Rock-chip and road-rash protection",
      "Pairs perfectly with a color-change wrap",
    ],
    highlights: ["Self-healing", "Invisible armor", "Resale protection"],
    turnaround: "Typical install: 2–4 days",
  },
  {
    id: "wrap-removal",
    issue: "No. 06",
    name: "Wrap Removal & Restoration",
    shortDescription:
      "Clean removal of old or failing vinyl, adhesive cleanup, and surface prep to get you back to factory or ready to re-wrap.",
    fullDescription:
      "Time for a change, or inherited someone else's bad install? We strip old vinyl the right way — low heat, careful peel, full adhesive cleanup — so your paint comes out clean and ready for whatever's next.",
    idealFor:
      "Trade-ins, lease returns, color swaps, and rescuing a wrap that someone else botched.",
    includes: [
      "Safe, low-heat vinyl removal",
      "Complete adhesive and residue cleanup",
      "Paint inspection and surface prep",
      "Re-wrap consultation if you're going again",
    ],
    highlights: ["Clean peel", "Adhesive cleanup", "Re-wrap ready"],
    turnaround: "Typical service: 1–2 days",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Origin Story — The Quote",
    description:
      "Tell us about the vehicle and the look you're chasing. Send photos or swing by the new shop and we'll talk film, finish, coverage, and a straight-up price.",
    deliverable: "A clear, honest quote with no surprise add-ons.",
  },
  {
    title: "Design & Film Pick",
    description:
      "Pick your color or finish from hundreds of premium options. For printed and commercial jobs, we mock up the artwork and proof it with you before anything hits the printer.",
    deliverable: "Locked-in film choice or approved design proof.",
  },
  {
    title: "Prep — The Real Work",
    description:
      "This is where installs are won or lost. We deep-clean, decontaminate, and disassemble the panels so the vinyl lays down flawless and the edges disappear.",
    deliverable: "A spotless, decontaminated surface ready for film.",
  },
  {
    title: "The Install",
    description:
      "Eighteen years of hands-on experience meet your vehicle. Precise, patient, bubble-free installation with edges tucked and wrapped like it came that way from the factory.",
    deliverable: "A clean, tight, factory-quality wrap.",
  },
  {
    title: "Reveal & Care Guide",
    description:
      "We walk the whole vehicle with you, check every edge in the light, and send you off with care instructions so the wrap stays sharp for years.",
    deliverable: "Final walkthrough, care guide, and warranty info.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mark wrapped my GT-R satin black and it looks better than paint. Edges are perfect, no lifting a year later. Nobody in Seattle touches his attention to detail.",
    customerName: "Derek T.",
    location: "Bellevue, WA",
    project: "Full color-change wrap",
  },
  {
    quote:
      "We wrapped all six of our service vans with Wu Wraps. Consistent, sharp, and the phone hasn't stopped ringing since. Best marketing money we've spent.",
    customerName: "Priya N.",
    location: "Kent, WA",
    project: "Fleet graphics",
  },
  {
    quote:
      "Been going to Mark for years. Chrome delete, roof wrap, now a full livery on the track car. The guy is an artist and treats every car like it's his own.",
    customerName: "Marcus R.",
    location: "Renton, WA",
    project: "Custom livery & accents",
  },
];

export const galleryBuilds: GalleryBuild[] = [
  {
    title: "2080 Gloss Green GT2",
    vehicle: "Porsche 911 GT2",
    category: "Full Color-Change",
    film: "3M 2080 gloss green",
    summary:
      "This clean GT2 came through the shop for a head-turning color change in 3M 2080 gloss green, set off by a satin-black hood for a real splash-page contrast.",
    scope: ["Full color change", "Satin black hood", "Edge tuck"],
    accent: "blue",
    image: "/images/gallery/porsche-gt2-green.jpg",
    imageAlt:
      "Porsche 911 GT2 wrapped in 3M 2080 gloss green with a satin black hood at the Wu Wraps shop in Renton",
  },
  {
    title: "Triple Crown Spyder",
    vehicle: "McLaren 750S Spyder",
    category: "Accents & Detail",
    film: "Gloss white + orange accents",
    summary:
      "One of just sixty Triple Crown 750S Spyders worldwide rolled into the bay for precision accent work — the kind of rare car you only trust to hands with eighteen years on them.",
    scope: ["Accent wrap", "Precision install", "Exotic care"],
    accent: "yellow",
    image: "/images/gallery/mclaren-750s-spyder.jpg",
    imageAlt:
      "Gloss white McLaren 750S Spyder with orange accents in the Wu Wraps install bay",
  },
  {
    title: "Speed Yellow Targa",
    vehicle: "Porsche 911 Targa GTS",
    category: "Partial & Accents",
    film: "Subtle black accent package",
    summary:
      "A fully-loaded Targa GTS in for a subtle accent package — blacked-out trim and clean side striping that sharpen the lines without touching the factory yellow.",
    scope: ["Accent wrap", "Trim blackout", "Side stripes"],
    accent: "red",
    image: "/images/gallery/porsche-targa-gts-yellow.jpg",
    imageAlt:
      "Yellow Porsche 911 Targa GTS with subtle black accent wrapping at Wu Wraps",
  },
  {
    title: "Lifted & Loaded Bronco",
    vehicle: "Ford Bronco Raptor",
    category: "Partial & Accents",
    film: "Blackout accents & accessories",
    summary:
      "Round four on a regular client's Bronco Raptor — another set of blacked-out accents and accessories layered on to keep this rig looking meaner every time it visits.",
    scope: ["Accent wrap", "Accessory install", "Repeat client"],
    accent: "yellow",
    image: "/images/gallery/ford-bronco-raptor.jpg",
    imageAlt:
      "White Ford Bronco Raptor with blacked-out accents and accessories at the Wu Wraps shop",
  },
  {
    title: "Roof-Wrapped WRX",
    vehicle: "Subaru WRX",
    category: "Partial & Accents",
    film: "Gloss black roof wrap",
    summary:
      "This souped-up Subie came in to replace a years-old DIY roof job with a proper gloss-black roof wrap — clean edges, no lifting, done the right way.",
    scope: ["Roof wrap", "Old vinyl removal", "Clean edges"],
    accent: "blue",
    image: "/images/gallery/subaru-wrx-blue.jpg",
    imageAlt:
      "Blue Subaru WRX with a fresh gloss black roof wrap in front of the Wu Wraps graffiti wall",
  },
  {
    title: "Rolling Billboard Fleet",
    vehicle: "Sprinter Van Fleet",
    category: "Commercial & Fleet",
    film: "Printed & laminated graphics",
    summary:
      "Matching service vans wrapped with bold brand colors, oversized logos, and contact info sized to read from three lanes over — advertising that works while it's parked.",
    scope: ["Fleet design", "Full print wrap", "DOT lettering"],
    accent: "red",
  },
];

export const aboutStats = [
  { label: "Wrapping since", value: company.foundedYear },
  { label: "Home base", value: "Renton Highlands, WA" },
  { label: "Specialty", value: "Color-change, fleet, and custom prints" },
];

export const serviceAreas = [
  "Renton",
  "Seattle",
  "Bellevue",
  "Kent",
  "Tukwila",
  "Newcastle",
  "Issaquah",
  "Tacoma",
  "Federal Way",
  "Kirkland",
  "Redmond",
  "Auburn",
];

export const differentiators = [
  "Eighteen years of hands-on installs — not a franchise, a craftsman",
  "Premium cast films from 3M, Avery Dennison, and KPMF only",
  "A brand-new, bigger shop built to take on full fleets",
  "Every car treated like it's his own, from daily driver to exotic",
];

export const aboutHighlights = [
  {
    title: "A Pacific Northwest staple",
    description:
      "Mark Wu didn't build his name on ads — he built it on clean installs and word of mouth. Eighteen years later, Wu Wraps is the name Seattle gearheads pass to a friend.",
  },
  {
    title: "Craftsmanship over volume",
    description:
      "Wrapping is part chemistry, part patience, part art. Every panel is prepped right, every edge is tucked, and nothing leaves the shop until it would pass as factory.",
  },
  {
    title: "Bigger shop, same hands",
    description:
      "The new, larger space means faster turnaround and room for fleets — but Mark is still the one laying the vinyl on every build that rolls out the door.",
  },
];

export const consultationChecklist = [
  "Year, make, and model of your vehicle",
  "The finish or look you're going for (or send inspo photos)",
  "Full wrap, partial, fleet, or PPF",
  "Your timeline and any event you're building toward",
];

export const contactPageFaq: FaqItem[] = [
  {
    question: "How long does a vinyl wrap last?",
    answer:
      "A quality cast-vinyl wrap, installed right and cared for, typically lasts five to seven years. We only use premium films from 3M, Avery Dennison, and KPMF so you get the full lifespan.",
  },
  {
    question: "Will a wrap damage my factory paint?",
    answer:
      "No — done correctly, a wrap actually protects your paint. As long as the original finish is in good shape, the vinyl comes off cleanly when you're ready for a change and the paint underneath stays preserved.",
  },
  {
    question: "Do you wrap commercial fleets and work trucks?",
    answer:
      "Absolutely. Fleet and commercial graphics are a big part of what we do. We keep your branding consistent across every vehicle and our new, larger shop lets us turn fleets around faster than ever.",
  },
  {
    question: "How much does a wrap cost?",
    answer:
      "It depends on the vehicle, the film, and the coverage. Partial accents start affordable, while full color-change and custom printed wraps cost more. Send us your vehicle details for a straight, honest quote.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in the Renton Highlands and serve the greater Seattle and Puget Sound area, including Bellevue, Kent, Tukwila, Newcastle, and Issaquah. Reach out and we'll get you scheduled.",
  },
];
