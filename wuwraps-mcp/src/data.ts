// Wu Wraps business data. Kept in sync with the marketing site's lib/data.ts.
// This is the single source the MCP tools read from.

export const business = {
  name: "Wu Wraps",
  owner: "Mark Wu",
  tagline:
    "Seattle's most trusted vinyl wrap shop. Eighteen years turning daily drivers, show cars, and work fleets into rolling artwork out of Renton, Washington.",
  phoneDisplay: "(206) 707-6491",
  phoneRaw: "+12067076491",
  email: "wuwraps@gmail.com",
  instagram: "@wuwraps",
  instagramUrl: "https://www.instagram.com/wuwraps/",
  address: "Renton Highlands, Renton, WA 98059",
  foundedYear: "2008",
  hours: [
    "Monday to Friday: 9:00 AM to 6:00 PM",
    "Saturday: By appointment",
    "Sunday: Closed",
  ],
} as const;

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
] as const;

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  idealFor: string;
  includes: string[];
  turnaround: string;
};

export const services: Service[] = [
  {
    id: "color-change-wraps",
    name: "Full Color-Change Wraps",
    shortDescription:
      "Transform your ride bumper to bumper. Gloss, satin, matte, chrome, or color-shift, all without touching the factory paint.",
    fullDescription:
      "A full color change is the headline act. We disassemble panels, wrap every visible surface, and tuck the edges so it reads like factory paint. Switch your daily into a head-turner and protect the original finish underneath for resale day.",
    idealFor:
      "Drivers who want a brand-new look, a rare color, or a finish the factory never offered, with the paint protected underneath.",
    includes: [
      "Full panel disassembly and edge tucking",
      "Door jambs and hidden areas wrapped on request",
      "Hundreds of gloss, satin, matte, and color-shift options",
      "Factory paint preserved for resale value",
    ],
    turnaround: "Typical install: 3 to 5 days",
  },
  {
    id: "commercial-fleet",
    name: "Commercial & Fleet Graphics",
    shortDescription:
      "Turn your vans, trucks, and trailers into 24/7 billboards with bold, on-brand printed graphics that get noticed.",
    fullDescription:
      "Your work vehicles are the cheapest advertising you'll ever buy. We design, print, and install logos, lettering, and full fleet wraps that keep your branding consistent across every truck on the road, and pulling in calls while parked.",
    idealFor:
      "Contractors, trades, food trucks, and any local business that wants its vehicles working as rolling advertisements.",
    includes: [
      "Custom design and print-ready artwork",
      "Logos, lettering, and partial or full coverage",
      "Consistent branding across the whole fleet",
      "DOT numbers and contact info layout",
    ],
    turnaround: "Typical install: 1 to 4 days per vehicle",
  },
  {
    id: "partial-accents",
    name: "Partial Wraps & Accents",
    shortDescription:
      "Roofs, hoods, mirror caps, chrome delete, and racing stripes. Sharp accents that change the whole attitude of the car.",
    fullDescription:
      "Not every build needs a full wrap. A gloss-black roof, a blacked-out chrome trim package, a carbon-fiber hood, or a clean set of stripes can completely change the stance of a vehicle for a fraction of the cost.",
    idealFor:
      "Owners who want a custom touch: chrome delete, two-tone roofs, hoods, mirrors, or stripe kits, without a full color change.",
    includes: [
      "Chrome delete and trim blackout",
      "Roof, hood, and mirror-cap wraps",
      "Racing stripes and accent graphics",
      "Carbon-fiber and brushed-metal textures",
    ],
    turnaround: "Typical install: 1 to 2 days",
  },
  {
    id: "custom-prints",
    name: "Custom Printed Wraps & Liveries",
    shortDescription:
      "One-off printed designs, race liveries, and wild custom graphics. If you can dream it up, we can lay it down.",
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
    turnaround: "Typical install: 4 to 7 days with design",
  },
  {
    id: "ppf-protection",
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
    turnaround: "Typical install: 2 to 4 days",
  },
  {
    id: "wrap-removal",
    name: "Wrap Removal & Restoration",
    shortDescription:
      "Clean removal of old or failing vinyl, adhesive cleanup, and surface prep to get you back to factory or ready to re-wrap.",
    fullDescription:
      "Time for a change, or inherited someone else's bad install? We strip old vinyl the right way: low heat, careful peel, full adhesive cleanup, so your paint comes out clean and ready for whatever's next.",
    idealFor:
      "Trade-ins, lease returns, color swaps, and rescuing a wrap that someone else botched.",
    includes: [
      "Safe, low-heat vinyl removal",
      "Complete adhesive and residue cleanup",
      "Paint inspection and surface prep",
      "Re-wrap consultation if you're going again",
    ],
    turnaround: "Typical service: 1 to 2 days",
  },
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "How long does a vinyl wrap last?",
    answer:
      "A quality cast-vinyl wrap, installed right and cared for, typically lasts five to seven years. We only use premium films from 3M, Avery Dennison, and KPMF so you get the full lifespan.",
  },
  {
    question: "Will a wrap damage my factory paint?",
    answer:
      "No. Done correctly, a wrap actually protects your paint. As long as the original finish is in good shape, the vinyl comes off cleanly when you're ready for a change and the paint underneath stays preserved.",
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
