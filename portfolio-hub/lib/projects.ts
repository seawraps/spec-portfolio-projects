export type Project = {
  title: string;
  description: string;
  techStack: string[];
  category: string;
  highlight: string;
  focus: string;
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
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
    highlight: "Trust-first service positioning",
    description:
      "A polished contractor marketing site built to communicate trust, showcase services, and convert renovation inquiries.",
    focus: "Lead-generation service funnel",
    techStack: sharedTechStack,
    liveUrl: "https://contractor-site-eight.vercel.app",
    imageSrc: "/project-previews/contractor.png",
    imageAlt: "Homepage preview of the Contractor Site project.",
  },
  {
    title: "Restaurant Site",
    category: "Restaurant",
    highlight: "Atmosphere-led reservation path",
    description:
      "A modern restaurant experience focused on atmosphere, menu discovery, and strong calls to action for reservations.",
    focus: "Menu storytelling and booking flow",
    techStack: sharedTechStack,
    liveUrl: "https://restaurant-site-virid-iota.vercel.app",
    imageSrc: "/project-previews/restaurant.png",
    imageAlt: "Homepage preview of the Restaurant Site project.",
  },
  {
    title: "SaaS Startup Site",
    category: "SaaS",
    highlight: "Launch-ready product narrative",
    description:
      "A startup landing site designed to explain product value quickly, support conversions, and feel launch-ready.",
    focus: "Value communication and signup hierarchy",
    techStack: sharedTechStack,
    liveUrl: "https://saas-startup-site.vercel.app",
    imageSrc: "/project-previews/saas.png",
    imageAlt: "Homepage preview of the SaaS Startup Site project.",
  },
  {
    title: "Real Estate Site",
    category: "Real Estate",
    highlight: "Premium listing presentation",
    description:
      "A responsive real estate showcase built for premium presentation of listings, neighborhoods, and lead generation.",
    focus: "Neighborhood storytelling and inquiry flow",
    techStack: sharedTechStack,
    liveUrl: "https://real-estate-site-ruby-phi.vercel.app",
    imageSrc: "/project-previews/realestate.png",
    imageAlt: "Homepage preview of the Real Estate Site project.",
  },
  {
    title: "Marketing Agency Site",
    category: "Agency",
    highlight: "Credibility-driven agency framing",
    description:
      "A clean agency website concept that highlights services, credibility, and conversion-focused digital positioning.",
    focus: "Service packaging and conversion structure",
    techStack: sharedTechStack,
    liveUrl: "https://marketing-agency-site-three.vercel.app",
    imageSrc: "/project-previews/agency.png",
    imageAlt: "Homepage preview of the Marketing Agency Site project.",
  },
  {
    title: "Personal Brand Site",
    category: "Personal Brand",
    highlight: "Expert-led personal positioning",
    description:
      "A brand-forward personal site built to present expertise, sharpen positioning, and support audience trust.",
    focus: "Authority building and audience trust",
    techStack: sharedTechStack,
    liveUrl: "https://personal-brand-site-flame.vercel.app",
    imageSrc: "/project-previews/personalbrand.png",
    imageAlt: "Homepage preview of the Personal Brand Site project.",
  },
];
