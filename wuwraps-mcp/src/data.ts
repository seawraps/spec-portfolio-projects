// Wu Wraps business data. Kept in sync with the marketing site's lib/data.ts.
// This is the single source the MCP tools read from.

export const business = {
  name: "Wu Wraps",
  owner: "Mark Wu",
  tagline:
    "Vinyl wrap studio in Renton, Washington. Color changes, chrome deletes, PPF and tint for the Pacific Northwest car community.",
  phoneDisplay: "(206) 707-6491",
  phoneRaw: "+12067076491",
  email: "wuwraps@gmail.com",
  instagram: "@wuwraps",
  instagramUrl: "https://www.instagram.com/wuwraps/",
  address: "Renton Highlands, Renton, WA 98059",
  foundedYear: "2008",
  appointmentNote: "Appointment only. No walk-ins, please reach out first.",
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
  includes: string[];
  turnaround: string;
};

export const services: Service[] = [
  {
    id: "color-change",
    name: "Full Color Change",
    shortDescription:
      "Bumper to bumper transformations in gloss, satin, matte and color shift, finished so clean they read as paint.",
    fullDescription:
      "The headline act. Panels come apart, every visible surface gets wrapped, and the edges tuck out of sight so the finish reads as factory. Your original paint stays preserved underneath for the day you sell or switch.",
    includes: [
      "Panel disassembly and full edge tucking",
      "Door jambs and hidden areas on request",
      "Premium cast films from 3M, Avery Dennison, KPMF and Inozetek",
      "Factory paint preserved for resale",
    ],
    turnaround: "Typical turnaround: 3 to 5 days",
  },
  {
    id: "interior-trim",
    name: "Interior & Trim",
    shortDescription:
      "Dash panels, consoles and trim wrapped in textures the factory never offered, without a single sprayed part.",
    fullDescription:
      "Interior work is where patience shows. Trim pieces come out, get wrapped edge to edge in carbon, brushed metal, gloss or satin, and go back in with zero rattles. A cabin refresh that is fully reversible.",
    includes: [
      "Dash, console and door trim",
      "Carbon fiber, brushed and textured films",
      "Careful removal and reinstall",
      "Fully reversible, no paint or dip",
    ],
    turnaround: "Typical turnaround: 1 to 3 days",
  },
  {
    id: "rims-body-kits",
    name: "Rims & Body Kits",
    shortDescription:
      "Wheels, aero and kit pieces wrapped to match or contrast the body, sharper than powder and easier to change.",
    fullDescription:
      "Splitters, spoilers, diffusers, mirror caps and full wheel faces. Wrapping kit pieces gets you a perfect color match or a deliberate contrast, and when you change direction the vinyl comes off clean.",
    includes: [
      "Wheel faces and center caps",
      "Splitters, spoilers and diffusers",
      "Perfect match to the body wrap",
      "Swap the look without repainting",
    ],
    turnaround: "Typical turnaround: 1 to 2 days",
  },
  {
    id: "chrome-delete",
    name: "Chrome Delete",
    shortDescription:
      "Window trim, badges, grilles and accents blacked out with the obsessive edge work Wu is known for.",
    fullDescription:
      "The detail job that separates installers from artists. Every strip of trim gets wrapped individually, corners wrapped around and tucked, so the blackout looks anodized rather than taped. Tesla and Mini owners around the Sound know this one well.",
    includes: [
      "Window surrounds, badges and grilles",
      "Gloss, satin or matte black",
      "Individual piece by piece wrapping",
      "The cleanest edges in the business",
    ],
    turnaround: "Typical turnaround: 1 to 2 days",
  },
  {
    id: "stripes-accents",
    name: "Racing Stripes & Accents",
    shortDescription:
      "Custom designed stripes, roofs, hoods and graphic accents, laid straight and symmetrical every time.",
    fullDescription:
      "From classic dual rally stripes to one-off accent packages, every stripe is designed for your car's proportions, then laid by hand and aligned down to the millimeter. A favorite with the classic car crowd.",
    includes: [
      "Custom stripe design and layout",
      "Roof, hood and mirror accents",
      "Two tone treatments",
      "Classic and modern styles",
    ],
    turnaround: "Typical turnaround: 1 to 2 days",
  },
  {
    id: "light-tinting",
    name: "Tail Light & Headlight Tinting",
    shortDescription:
      "Smoked tail lights and tinted headlight film, done to look factory and keep you road legal.",
    fullDescription:
      "Precut and hand finished light film that smokes out the rear and cleans up the front without the sprayed-on look. Subtle shades that keep light output usable and the look intentional.",
    includes: [
      "Tail light smoke in multiple shades",
      "Headlight and fog light film",
      "Protects lenses from rock chips",
      "Removable, no spray tint",
    ],
    turnaround: "Typical turnaround: Same day to 1 day",
  },
  {
    id: "ppf",
    name: "Paint Protection Film",
    shortDescription:
      "Self-healing clear armor for fronts, track packs or full bodies, now offered out of the larger facility.",
    fullDescription:
      "The new studio made room for full PPF service. Self-healing clear film takes the rock chips, road rash and bug etching so your paint or wrap does not have to. Pair a full body wrap with PPF on the nose for the best of both.",
    includes: [
      "Full front, track pack or full body",
      "Self-healing top coat",
      "Stacks with color change wraps",
      "Kept flawless for years",
    ],
    turnaround: "Typical turnaround: 2 to 4 days",
  },
  {
    id: "window-tint",
    name: "Window Tint",
    shortDescription:
      "Ceramic window film for heat, glare and privacy, installed with the same edge discipline as the vinyl.",
    fullDescription:
      "Another new service the bigger space unlocked. High grade ceramic film cuts heat and glare, protects the interior and finishes the look. Installed dust free, edge to edge, with no gaps and no purple fade.",
    includes: [
      "Ceramic film, multiple shades",
      "Heat and UV rejection",
      "Dust free installation",
      "Legal shades guidance for WA",
    ],
    turnaround: "Typical turnaround: Same day to 1 day",
  },
];

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "Do you take walk-ins?",
    answer:
      "No, the studio is appointment only. Call, email or send the form first and Mark will get you scheduled. It keeps every build getting his full attention.",
  },
  {
    question: "How long does a vinyl wrap last?",
    answer:
      "A quality cast vinyl wrap, installed right and cared for, typically lasts five to seven years. Wu Wraps only installs premium films from 3M, Avery Dennison, KPMF and Inozetek, so you get the full lifespan.",
  },
  {
    question: "Will a wrap damage my factory paint?",
    answer:
      "No. Done correctly, a wrap protects your paint. As long as the original finish is healthy, the vinyl comes off clean whenever you are ready for a change.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on the vehicle, the film and the coverage. Pricing is competitive, and you are getting the best work in town, so it tends to be one hell of a deal. Send your details for a straight quote.",
  },
  {
    question: "Do you offer PPF and window tint?",
    answer:
      "Yes. The new, larger studio added full paint protection film and ceramic window tint service alongside the vinyl work.",
  },
  {
    question: "Can you wrap things that are not cars?",
    answer:
      "If it can be wrapped, Mark can wrap it. Motorcycles, boats, appliances, furniture. Reach out with the project and find out.",
  },
];
