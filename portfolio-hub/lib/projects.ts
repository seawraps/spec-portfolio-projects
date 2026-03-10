export type Project = {
  title: string;
  description: string;
  techStack: string[];
  category: string;
  highlight: string;
  focus: string;
  identity: string;
  previewPosition: string;
  theme: ProjectThemeKey;
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
};

export type ProjectThemeKey =
  | "contractor"
  | "restaurant"
  | "saas"
  | "realEstate"
  | "agency"
  | "personal";

export const projectThemes: Record<
  ProjectThemeKey,
  {
    accent: string;
    accentSoft: string;
    accentSurface: string;
    accentStrong: string;
    accentGlow: string;
    overlayMid: string;
    overlayEnd: string;
  }
> = {
  contractor: {
    accent: "rgba(211, 166, 96, 0.38)",
    accentSoft: "rgba(211, 166, 96, 0.2)",
    accentSurface: "rgba(211, 166, 96, 0.1)",
    accentStrong: "#f1cf98",
    accentGlow: "rgba(120, 77, 23, 0.58)",
    overlayMid: "rgba(18, 18, 25, 0.18)",
    overlayEnd: "rgba(18, 18, 25, 0.95)",
  },
  restaurant: {
    accent: "rgba(223, 182, 123, 0.4)",
    accentSoft: "rgba(223, 182, 123, 0.22)",
    accentSurface: "rgba(223, 182, 123, 0.1)",
    accentStrong: "#f4dfbf",
    accentGlow: "rgba(121, 81, 23, 0.54)",
    overlayMid: "rgba(28, 19, 11, 0.14)",
    overlayEnd: "rgba(16, 11, 7, 0.96)",
  },
  saas: {
    accent: "rgba(87, 214, 255, 0.38)",
    accentSoft: "rgba(87, 214, 255, 0.22)",
    accentSurface: "rgba(87, 214, 255, 0.09)",
    accentStrong: "#a9efff",
    accentGlow: "rgba(24, 102, 145, 0.58)",
    overlayMid: "rgba(3, 20, 38, 0.14)",
    overlayEnd: "rgba(2, 12, 24, 0.96)",
  },
  realEstate: {
    accent: "rgba(198, 221, 248, 0.34)",
    accentSoft: "rgba(198, 221, 248, 0.18)",
    accentSurface: "rgba(198, 221, 248, 0.08)",
    accentStrong: "#e5f2ff",
    accentGlow: "rgba(76, 110, 149, 0.54)",
    overlayMid: "rgba(8, 16, 27, 0.14)",
    overlayEnd: "rgba(6, 12, 20, 0.94)",
  },
  agency: {
    accent: "rgba(255, 109, 61, 0.38)",
    accentSoft: "rgba(255, 109, 61, 0.22)",
    accentSurface: "rgba(255, 109, 61, 0.1)",
    accentStrong: "#ffad8d",
    accentGlow: "rgba(163, 57, 24, 0.6)",
    overlayMid: "rgba(31, 12, 7, 0.14)",
    overlayEnd: "rgba(19, 10, 8, 0.95)",
  },
  personal: {
    accent: "rgba(191, 143, 122, 0.34)",
    accentSoft: "rgba(191, 143, 122, 0.18)",
    accentSurface: "rgba(191, 143, 122, 0.09)",
    accentStrong: "#e5c3b2",
    accentGlow: "rgba(109, 69, 52, 0.54)",
    overlayMid: "rgba(22, 14, 12, 0.12)",
    overlayEnd: "rgba(17, 12, 11, 0.94)",
  },
};

const sharedTechStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Vercel",
];

export const projects: Project[] = [
  {
    title: "Contractor Site",
    category: "Home Services",
    highlight: "Warm, trust-first residential positioning",
    description:
      "A residential remodeling site that balances calm editorial warmth, craftsmanship cues, and consultation-focused conversion.",
    focus: "Design-build credibility and consultation intent",
    identity: "Warm residential remodeler",
    previewPosition: "54% 0%",
    theme: "contractor",
    techStack: sharedTechStack,
    liveUrl: "https://contractor-site-eight.vercel.app",
    imageSrc: "/project-previews/contractor.png",
    imageAlt: "Homepage preview of the warm residential Contractor Site project.",
  },
  {
    title: "Restaurant Site",
    category: "Restaurant",
    highlight: "Cinematic hospitality framing",
    description:
      "A reservation-led coastal bistro concept built around atmosphere, pacing, and menu storytelling that feels evening-first.",
    focus: "Atmosphere, menu discovery, and reservation urgency",
    identity: "Mediterranean coastal bistro",
    previewPosition: "46% 0%",
    theme: "restaurant",
    techStack: sharedTechStack,
    liveUrl: "https://restaurant-site-virid-iota.vercel.app",
    imageSrc: "/project-previews/restaurant.png",
    imageAlt: "Homepage preview of the cinematic Restaurant Site project.",
  },
  {
    title: "SaaS Startup Site",
    category: "SaaS",
    highlight: "Futuristic product command surface",
    description:
      "A high-contrast SaaS launch site that sells operational clarity with live-product energy and a tighter evaluation path.",
    focus: "Product narrative and evaluation funnel",
    identity: "Automation control platform",
    previewPosition: "44% 0%",
    theme: "saas",
    techStack: sharedTechStack,
    liveUrl: "https://saas-startup-site.vercel.app",
    imageSrc: "/project-previews/saas.png",
    imageAlt: "Homepage preview of the futuristic SaaS Startup Site project.",
  },
  {
    title: "Real Estate Site",
    category: "Real Estate",
    highlight: "Luxury editorial property presentation",
    description:
      "A private real estate advisory concept designed to make listings, seller services, and neighborhood framing feel discreet and styled.",
    focus: "Editorial listing framing and inquiry flow",
    identity: "Private luxury real estate",
    previewPosition: "56% 0%",
    theme: "realEstate",
    techStack: sharedTechStack,
    liveUrl: "https://real-estate-site-ruby-phi.vercel.app",
    imageSrc: "/project-previews/realestate.png",
    imageAlt: "Homepage preview of the luxury editorial Real Estate Site project.",
  },
  {
    title: "Marketing Agency Site",
    category: "Agency",
    highlight: "Aggressive strategic growth framing",
    description:
      "A performance agency site with sharper contrast, stronger urgency, and service packaging built for decisive growth buyers.",
    focus: "Growth strategy positioning and sprint intake",
    identity: "Performance growth agency",
    previewPosition: "58% 0%",
    theme: "agency",
    techStack: sharedTechStack,
    liveUrl: "https://marketing-agency-site-three.vercel.app",
    imageSrc: "/project-previews/agency.png",
    imageAlt: "Homepage preview of the aggressive Marketing Agency Site project.",
  },
  {
    title: "Personal Brand Site",
    category: "Personal Brand",
    highlight: "Premium human authority-led positioning",
    description:
      "A personal brand site for keynote, advisory, and editorial positioning, built to make expertise feel authored and commercially clear.",
    focus: "Authority, bookings, and selective availability",
    identity: "Editorial advisor brand",
    previewPosition: "58% 0%",
    theme: "personal",
    techStack: sharedTechStack,
    liveUrl: "https://personal-brand-site-flame.vercel.app",
    imageSrc: "/project-previews/personalbrand.png",
    imageAlt: "Homepage preview of the premium Personal Brand Site project.",
  },
];
