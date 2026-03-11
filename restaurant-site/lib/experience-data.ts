import { contactDetails, siteImages, type PhotoAsset } from "@/lib/data";

export type EveningMoment = {
  label: string;
  title: string;
  description: string;
};

export type SignatureSpotlight = {
  id: string;
  course: string;
  name: string;
  price: string;
  description: string;
  pairing: string;
  note: string;
  image: PhotoAsset;
};

export type SeasonalNote = {
  season: string;
  title: string;
  description: string;
  pairing: string;
};

export type VisitMoment = {
  id: string;
  label: string;
  title: string;
  description: string;
  detail: string;
  hours: string;
  image: PhotoAsset;
  ctaLabel: string;
  ctaHref: string;
};

export type HousePrinciple = {
  title: string;
  description: string;
};

export const eveningMoments: EveningMoment[] = [
  {
    label: "Arrival",
    title: "A brass rail, a lowered voice, and the first look into the room.",
    description:
      "The welcome is calm and direct, with the host stand handling terrace requests, celebrations, and first pours without breaking the mood.",
  },
  {
    label: "Bar",
    title: "Cold martinis, mineral whites, and oysters while the room settles.",
    description:
      "Aperitivo hour is not a separate program here. It is the first movement of dinner, and it shapes the appetite before the table even begins.",
  },
  {
    label: "Dining Room",
    title: "Fire-led plates arrive with enough time around them.",
    description:
      "The menu is paced for conversation and repetition. Shared starters, a pasta, a hearth course, and a last glass all belong in the same evening.",
  },
  {
    label: "Late",
    title: "The terrace darkens, candles deepen, and the room gets quieter.",
    description:
      "Astera is designed to feel strongest after sunset, when the light drops, the service slows, and the last seating begins to glow.",
  },
];

export const signatureSpotlights: SignatureSpotlight[] = [
  {
    id: "vongole",
    course: "Signature Pasta",
    name: "Linguine Vongole",
    price: "$36",
    description:
      "Little neck clams, preserved lemon, bottarga, and a shellfish emulsion calibrated for brightness rather than weight.",
    pairing: "Pair with Santorini Assyrtiko and grilled sourdough at the center of the table.",
    note: "The plate guests remember as the room changes from aperitivo to dinner.",
    image: siteImages.featuredPasta,
  },
  {
    id: "mussels",
    course: "Opening Plate",
    name: "Saffron Mussels",
    price: "$24",
    description:
      "White wine broth, grilled country bread, Calabrian chili, and fennel pollen butter built for sharing immediately.",
    pairing: "Best with a cold spritz, two spoons, and a table that has just sat down.",
    note: "An opening act that feels generous without flattening the appetite.",
    image: siteImages.featuredMussels,
  },
  {
    id: "calamari",
    course: "Harbor Grill",
    name: "Coal-Kissed Calamari",
    price: "$32",
    description:
      "Tender calamari brushed with olive oil, softened over charcoal, and finished with citrus and a market tomato relish.",
    pairing: "Order alongside the Harbor Martini when the bar round becomes dinner.",
    note: "Smoke, acid, and restraint instead of the usual fried shorthand.",
    image: siteImages.featuredCalamari,
  },
  {
    id: "occasion",
    course: "For The Table",
    name: "Harbor Supper Format",
    price: "$98",
    description:
      "A five-course tasting shaped around market seafood, one charcoal main, and a citrus-led finish that stays light.",
    pairing: "Designed for the longest table, a shared bottle, and the final reservation of the night.",
    note: "More ritual than tasting menu, with the room still leading the experience.",
    image: siteImages.heroOccasion,
  },
];

export const seasonalNotes: SeasonalNote[] = [
  {
    season: "March Coast",
    title: "Early spring opens with shellfish, fennel, green olive oil, and citrus skin.",
    description:
      "This point in the year is about cleaner salinity, brighter herbs, and enough acid to keep the meal feeling lifted through the final course.",
    pairing: "Cellar note: Santorini Assyrtiko or a dry Bandol rose.",
  },
  {
    season: "Chef Note",
    title: "Fire is used for contour, not spectacle.",
    description:
      "Charcoal defines the edges of the plate and deepens texture, but the finish is always controlled so the seafood still reads first.",
    pairing: "Ask for the hearth chapter if the table wants a warmer second half.",
  },
  {
    season: "Private Dining",
    title: "Smaller celebrations are shaped like elegant dinner parties, not banquet service.",
    description:
      "The private room is tuned for 14 to 24 guests, with plated pacing, cellar pours, and enough flexibility for speeches or a slower dessert finish.",
    pairing: "Available with tasting formats, oyster starts, and a dedicated final round.",
  },
];

export const visitMoments: VisitMoment[] = [
  {
    id: "host-stand",
    label: "Host Stand",
    title: "Check in through the brass rail and let the room take over from there.",
    description:
      "The entrance sequence is intentionally quiet. Guests arrive, the host stand handles pacing and seating, and the transition into the dining room stays smooth.",
    detail: "Terrace requests and celebration notes are best added at booking and reconfirmed on arrival.",
    hours: "Valet and check-in begin nightly at 5 PM.",
    image: siteImages.heroTableWine,
    ctaLabel: "Reserve A Table",
    ctaHref: contactDetails.reservationsUrl,
  },
  {
    id: "bar",
    label: "Bar Program",
    title: "Start at the marble bar when the appetite needs a colder, brighter first movement.",
    description:
      "The bar is meant to be lived in for a round or two, not rushed through. Expect martinis, aperitivi, oysters, and a first reading of the room.",
    detail: "Walk-ins are welcomed for bar seating whenever space allows.",
    hours: "Aperitivo energy is strongest from 5 PM to 6 PM.",
    image: siteImages.cocktailService,
    ctaLabel: "Call The Host Stand",
    ctaHref: `tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    id: "room",
    label: "Dining Room",
    title: "The linen tables are for dinners that keep one more course in them.",
    description:
      "Inside, the sound drops, the light warms, and service expands to match the table rather than forcing a faster rhythm onto it.",
    detail: "Best for anniversaries, long client dinners, or nights when dessert should not end the conversation.",
    hours: "Last dining room reservations release nightly at 10:30 PM.",
    image: siteImages.diningRoom,
    ctaLabel: "Plan A Private Evening",
    ctaHref: `mailto:${contactDetails.reservationEmail}`,
  },
  {
    id: "terrace",
    label: "Terrace",
    title: "Request the terrace when the marine layer is part of the reservation.",
    description:
      "The terrace stays lighter at first and more cinematic after dark, especially once the room inside begins to dim around the final seatings.",
    detail: "Weather and pacing determine the final terrace map each evening, but the team will try to honor every request.",
    hours: "Terrace seating is released nightly as conditions allow.",
    image: siteImages.terraceNight,
    ctaLabel: "Open In Maps",
    ctaHref: contactDetails.mapUrl,
  },
];

export const housePrinciples: HousePrinciple[] = [
  {
    title: "Mood before interface",
    description:
      "The site behaves like a restaurant brand book, letting image, type, darkness, and pacing set the appetite before information arrives.",
  },
  {
    title: "Hospitality before promotion",
    description:
      "Reservations, private dining, and visit details are treated like service touchpoints rather than generic conversion modules.",
  },
  {
    title: "Restraint before ornament",
    description:
      "The palette stays within candlelight, brass, tobacco, and muted cream so the photography and typography can do the work.",
  },
];
