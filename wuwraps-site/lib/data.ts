export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  name: string;
  tag?: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  turnaround: string;
};

export type GalleryBuild = {
  title: string;
  vehicle: string;
  category: string;
  film: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

export type Testimonial = {
  quote: string;
  customerName: string;
  context: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const company = {
  name: "Wu Wraps",
  owner: "Mark Wu",
  tagline:
    "Vinyl wrap studio in Renton, Washington. Color changes, chrome deletes, PPF and tint for the Pacific Northwest car community.",
  phoneDisplay: "(206) 707-6491",
  phoneRaw: "+12067076491",
  email: "wuwraps@gmail.com",
  instagram: "@wuwraps",
  instagramUrl: "https://www.instagram.com/wuwraps/",
  addressLine: "Renton Highlands",
  cityStateZip: "Renton, WA 98059",
  hours: [
    "Monday to Friday: 9:00 AM to 6:00 PM",
    "Saturday: By appointment",
    "Sunday: Closed",
  ],
  appointmentNote: "Appointment only. No walk-ins, please reach out first.",
  foundedYear: "2008",
  primaryServiceArea:
    "Renton, Seattle, Bellevue, Kent, Tukwila, Newcastle, Issaquah, and the greater Puget Sound",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** The communities and shops that already know the name. */
export const trustedBy = [
  "As seen on Avants",
  "PNW Tesla community",
  "Mini Cooper clubs",
  "Classic car groups",
  "Imperial Tint",
  "Accutint",
];

export const heroStats = [
  { value: "Since 2008", label: "Wrapping the Pacific Northwest" },
  { value: "Thousands", label: "Of panels laid by the same two hands" },
  { value: "By appointment", label: "One build in the studio at a time" },
];

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
    turnaround: "3 to 5 days",
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
    turnaround: "1 to 3 days",
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
    turnaround: "1 to 2 days",
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
    turnaround: "1 to 2 days",
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
    turnaround: "1 to 2 days",
  },
  {
    id: "light-tinting",
    name: "Tail Light & Headlight Tinting",
    shortDescription:
      "Smoked tail lights and tinted headlight film, done to look factory and keep you road legal.",
    fullDescription:
      "Precut and hand finished light film that smokes out the rear and cleans up the front without the sprayed-on look. Subtle percentages that keep output usable and looks intentional.",
    includes: [
      "Tail light smoke in multiple shades",
      "Headlight and fog light film",
      "Protects lenses from rock chips",
      "Removable, no spray tint",
    ],
    turnaround: "Same day to 1 day",
  },
  {
    id: "ppf",
    name: "Paint Protection Film",
    tag: "New at the studio",
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
    turnaround: "2 to 4 days",
  },
  {
    id: "window-tint",
    name: "Window Tint",
    tag: "New at the studio",
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
    turnaround: "Same day to 1 day",
  },
];

export const galleryBuilds: GalleryBuild[] = [
  {
    title: "2080 Gloss Green",
    vehicle: "Porsche 911 GT2",
    category: "Full Color Change",
    film: "3M 2080 gloss green, satin black hood",
    summary:
      "A clean GT2 taken to gloss green with a satin black hood. The kind of color you cannot order from Stuttgart.",
    image: "/images/gallery/porsche-gt2-green.jpg",
    imageAlt:
      "Porsche 911 GT2 wrapped in 3M 2080 gloss green with a satin black hood at the Wu Wraps studio in Renton",
  },
  {
    title: "Triple Crown",
    vehicle: "McLaren 750S Spyder",
    category: "Accent Work",
    film: "Factory white with orange accents",
    summary:
      "One of sixty Triple Crown Spyders worldwide. Precision accent work on a car you do not hand to just anyone.",
    image: "/images/gallery/mclaren-750s-spyder.jpg",
    imageAlt:
      "White McLaren 750S Spyder Triple Crown with orange accents inside the Wu Wraps studio",
  },
  {
    title: "Speed Yellow",
    vehicle: "Porsche 911 Targa GTS",
    category: "Accents & Blackout",
    film: "Subtle black accent package",
    summary:
      "A loaded Targa GTS with blacked out trim and clean side striping that sharpens the factory yellow.",
    image: "/images/gallery/porsche-targa-gts-yellow.jpg",
    imageAlt:
      "Yellow Porsche 911 Targa GTS with black accent wrapping at Wu Wraps",
  },
  {
    title: "Round Four",
    vehicle: "Ford Bronco Raptor",
    category: "Accents & Accessories",
    film: "Blackout accents and accessories",
    summary:
      "A repeat client's Bronco Raptor back for its fourth round of blackout work. They keep coming back for a reason.",
    image: "/images/gallery/ford-bronco-raptor.jpg",
    imageAlt:
      "White Ford Bronco Raptor with blacked out accents at the Wu Wraps studio",
  },
  {
    title: "Roof Redone",
    vehicle: "Subaru WRX",
    category: "Roof Wrap",
    film: "Gloss black roof",
    summary:
      "A years-old DIY roof job stripped and redone properly. Clean edges, no lifting, done once and done right.",
    image: "/images/gallery/subaru-wrx-blue.jpg",
    imageAlt:
      "Blue Subaru WRX with a fresh gloss black roof wrap in front of the Wu Wraps mural",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I found Mark through Avants and now I will not let anyone else touch my cars. The chrome delete on my Model S looks anodized, not wrapped. You have to see his edges in person.",
    customerName: "Derek T.",
    context: "Avants member, Bellevue",
  },
  {
    quote:
      "Half the Mini club has been through Mark's studio at this point. Stripes, roofs, mirror caps, all of it laid straight and symmetrical. Nobody else gets the details this right.",
    customerName: "Priya N.",
    context: "PNW Mini Cooper community",
  },
  {
    quote:
      "I trusted him with a fifty year old car and he treated it like his own. The stripe layout took longer than the install because he refused to eyeball it. That is the difference.",
    customerName: "Marcus R.",
    context: "Classic car owner, Renton",
  },
];

export const artistPoints = [
  {
    title: "An artist, not an installer",
    description:
      "Mark grew up on comics and graffiti and it shows in the studio walls. The craft is the same one he brings to a panel of vinyl: steady hands, obsessive lines, no shortcuts.",
  },
  {
    title: "The installer the installers call",
    description:
      "When shops like Imperial Tint and Accutint need vinyl laid, the work comes to Mark. If you have admired a wrap around Seattle, there is a good chance his hands were on it.",
  },
  {
    title: "A bigger studio, the same standard",
    description:
      "The new facility added room for PPF and window tint, but nothing else changed. One build at a time, by appointment, finished when it is right.",
  },
];

export const processSteps = [
  {
    title: "Reach out",
    description:
      "The studio is appointment only, so start with a call, an email or the form. Tell Mark the car and the look you are chasing. Photos help.",
  },
  {
    title: "Talk it through",
    description:
      "You will get a straight answer on film, finish, timeline and price. Competitive rates for the best work in town means the quote tends to make sense fast.",
  },
  {
    title: "Book the build",
    description:
      "Your car gets the studio to itself. Prep, disassembly, install and a final walkthrough of every edge before it rolls out.",
  },
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

export const aboutStats = [
  { label: "Wrapping since", value: company.foundedYear },
  { label: "Home base", value: "Renton, WA" },
  { label: "Booking", value: "Appointment only" },
];

export const consultationChecklist = [
  "Year, make and model",
  "The look you are going for, inspiration photos welcome",
  "Which services: wrap, chrome delete, stripes, PPF, tint",
  "Your timeline or any event you are building toward",
];

export const contactPageFaq: FaqItem[] = [
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
