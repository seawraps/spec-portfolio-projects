export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type PhotoAsset = {
  src: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
};

export type FeaturedDish = {
  name: string;
  description: string;
  price: string;
  course: string;
  image: PhotoAsset;
};

export type GalleryImage = PhotoAsset & {
  title: string;
  caption: string;
  layout: "wide" | "tall";
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type PressMention = {
  source: string;
  title: string;
  excerpt: string;
};

export type Hour = {
  day: string;
  hours: string;
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  courseLabel: string;
  description: string;
  ritual: string;
  pairing: string;
  image: PhotoAsset;
  items: MenuItem[];
};

export type ExperienceHighlight = {
  title: string;
  description: string;
};

export type HeroMoment = {
  label: string;
  value: string;
  note: string;
};

export type MenuHighlight = {
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
  image: PhotoAsset;
};

export const restaurantName = "Astera Coastal Bistro";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "https://www.opentable.com/", label: "Reservations", external: true },
  { href: "/contact", label: "Contact" },
];

export const siteImages = {
  heroTableWine: {
    src: "/images/hero-table-wine.jpg",
    alt: "A moody dining table lit by candlelight with polished wine glasses and warm reflections.",
    photographer: "D Z",
    sourceUrl:
      "https://unsplash.com/photos/a-table-topped-with-plates-and-glasses-of-wine-BiajbI99xTo",
  },
  heroFeast: {
    src: "/images/hero-feast.jpg",
    alt: "An editorial overhead of seafood, citrus, and wine spread across a richly layered dinner table.",
    photographer: "Andrej Lisakov",
    sourceUrl:
      "https://unsplash.com/photos/a-table-topped-with-plates-and-bowls-of-food-iS0SGSMUJNA",
  },
  heroOccasion: {
    src: "/images/hero-occasion.jpg",
    alt: "Guests gathered around a dramatic dinner table during evening service.",
    photographer: "Andrew Solok",
    sourceUrl:
      "https://unsplash.com/photos/people-gathered-around-a-table-with-food-and-candles-Woue_isymNU",
  },
  featuredMussels: {
    src: "/images/featured-mussels.jpg",
    alt: "Mediterranean mussels in a glossy broth finished with herbs and olive oil.",
    photographer: "Ivana Cajina",
    sourceUrl:
      "https://unsplash.com/photos/a-dish-of-food-with-mussels-and-sauce--dqJt_xZUcM",
  },
  featuredPasta: {
    src: "/images/featured-pasta.jpg",
    alt: "Seafood pasta plated with clams and shellfish in a bright white bowl.",
    photographer: "Sarda Bamberg",
    sourceUrl:
      "https://unsplash.com/photos/a-plate-of-pasta-with-clams-and-shrimp-igtFLRG0tQc",
  },
  featuredCalamari: {
    src: "/images/featured-calamari.jpg",
    alt: "Grilled calamari finished with herbs, olive oil, and citrus.",
    photographer: "blackieshoot",
    sourceUrl:
      "https://unsplash.com/photos/grilled-calamari-served-with-herbs-and-oil-by-the-sea-zgotbaQZvFo",
  },
  storyChef: {
    src: "/images/story-chef.jpg",
    alt: "A chef finishing a composed plate in a dark restaurant kitchen.",
    photographer: "Giulia Squillace",
    sourceUrl:
      "https://unsplash.com/photos/a-man-in-a-kitchen-preparing-food-on-a-plate-J1RKeY6Kv8c",
  },
  diningRoom: {
    src: "/images/dining-room.jpg",
    alt: "A low-lit dining room with dressed tables, amber light, and a polished bar atmosphere.",
    photographer: "Hakim Menikh",
    sourceUrl:
      "https://unsplash.com/photos/cozy-restaurant-dining-area-with-elegant-decor-PGbiUKbJpoM",
  },
  cocktailService: {
    src: "/images/cocktail-service.jpg",
    alt: "A bartender pouring a cocktail with focused, polished service.",
    photographer: "Louis Hansel",
    sourceUrl:
      "https://unsplash.com/photos/person-pouring-liquor-in-clear-drinking-glass-yLUvnCFI500",
  },
  patioOcean: {
    src: "/images/patio-ocean.jpg",
    alt: "An open-air terrace positioned above the coast for late afternoon and dusk dining.",
    photographer: "Roberta Sant'Anna",
    sourceUrl:
      "https://unsplash.com/photos/outdoor-cafe-seating-with-ocean-view-2rTG2fxKcZ8",
  },
  terraceNight: {
    src: "/images/terrace-night.jpg",
    alt: "A restaurant terrace glowing after dark and set for evening service.",
    photographer: "Nikita Kulikov",
    sourceUrl:
      "https://unsplash.com/photos/outdoor-restaurant-seating-area-at-night-with-string-lights-bQo3HO8HdgY",
  },
  wineToast: {
    src: "/images/wine-toast.jpg",
    alt: "A glass of red wine lifted over a warm candlelit table.",
    photographer: "Phakphoom Srinorajan",
    sourceUrl:
      "https://unsplash.com/photos/person-holding-wine-glass-with-red-wine-hPkUQ30hvRA",
  },
  menuPlated: {
    src: "/images/menu-plated.jpg",
    alt: "A composed Mediterranean plate styled with linens, tableware, and warm service light.",
    photographer: "Snappr",
    sourceUrl:
      "https://unsplash.com/photos/a-plate-of-food-on-a-table-with-utensils-nQfrAaPsQq8",
  },
} as const satisfies Record<string, PhotoAsset>;

export const serviceMoments: HeroMoment[] = [
  {
    label: "Arrival",
    value: "Aperitivo at the marble bar",
    note: "Cold martinis, oysters, and a first pour before the table is ready.",
  },
  {
    label: "Dining Room",
    value: "Low light and linen textures",
    note: "Tables are paced for conversation, not turnover.",
  },
  {
    label: "From The Pass",
    value: "Seafood, charcoal, and restraint",
    note: "Fire-led cooking finished with brightness instead of excess.",
  },
  {
    label: "Late Evening",
    value: "Dessert, cellar reds, and one last round",
    note: "The room is designed to get more magnetic after dark.",
  },
];

export const featuredDishes: FeaturedDish[] = [
  {
    name: "Linguine Vongole",
    description:
      "Little neck clams, preserved lemon, bottarga, and a glossy shellfish emulsion finished to order.",
    price: "$36",
    course: "Seafood Pasta",
    image: siteImages.featuredPasta,
  },
  {
    name: "Saffron Mussels",
    description:
      "White wine broth, Calabrian chili, grilled country bread, and fennel pollen butter for the table.",
    price: "$24",
    course: "Raw & Warm Starters",
    image: siteImages.menuPlated,
  },
  {
    name: "Coal-Kissed Calamari",
    description:
      "Tender calamari, olive oil, soft herbs, and citrus served with a market tomato relish.",
    price: "$32",
    course: "Harbor Grill",
    image: siteImages.featuredCalamari,
  },
];

export const storyHighlights: ExperienceHighlight[] = [
  {
    title: "Coastal sourcing",
    description: "Line-caught seafood, market greens, and peak-season citrus shape the menu nightly.",
  },
  {
    title: "Open-fire cooking",
    description: "The kitchen is built around charcoal heat, clean reductions, and plated restraint.",
  },
  {
    title: "Graceful service",
    description: "Tables move at a dinner pace, with polished but intuitive hospitality throughout.",
  },
  {
    title: "Long-evening atmosphere",
    description: "Low light, linen textures, and a cellar-first drinks program set the tone.",
  },
];

export const menuHighlights: MenuHighlight[] = [
  {
    eyebrow: "Tonight's Ritual",
    title: "Five-course chef's tasting",
    description:
      "A market-driven progression built around seafood, live-fire mains, and citrus-led desserts.",
    detail: "$98 per guest, nightly from 6 PM",
    image: siteImages.heroTableWine,
  },
  {
    eyebrow: "Bar Program",
    title: "Aperitivo hour at the marble counter",
    description:
      "Salted citrus spritzes, martinis, oysters, and small plates designed for a slow first round.",
    detail: "Daily from 5 PM to 6 PM",
    image: siteImages.cocktailService,
  },
  {
    eyebrow: "Preferred Seating",
    title: "Late terrace tables",
    description:
      "Open-air seating, candlelight, and the full dinner menu served outside when the evening stays calm.",
    detail: "Request terrace seating when reserving",
    image: siteImages.terraceNight,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    ...siteImages.diningRoom,
    title: "The room after dusk",
    caption: "Amber light, dressed tables, and the kind of depth that rewards a second bottle.",
    layout: "wide",
  },
  {
    ...siteImages.cocktailService,
    title: "Bar choreography",
    caption: "A polished bar program driven by citrus, bitter aperitivi, and confident hands.",
    layout: "tall",
  },
  {
    ...siteImages.heroOccasion,
    title: "Dinner service",
    caption: "The room fills with candlelight, plates, and a social charge that never becomes loud.",
    layout: "tall",
  },
  {
    ...siteImages.terraceNight,
    title: "After dark",
    caption: "The terrace holds a different energy once the room gives way to the night.",
    layout: "wide",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Astera feels cinematic without becoming theatrical. Every detail supports the appetite, the room, and the pace of the night.",
    author: "Marina Howell",
    role: "Editor, West Coast Table",
  },
  {
    quote:
      "The best hospitality sites sell a feeling before they sell a reservation. Astera manages to do both.",
    author: "Darren Liu",
    role: "Dining Writer, Harbor Journal",
  },
];

export const pressMentions: PressMention[] = [
  {
    source: "Pacific Plate",
    title: "One of the Westside's most atmospheric dining rooms",
    excerpt:
      "Astera balances Mediterranean brightness with a low-lit, celebratory sense of occasion.",
  },
  {
    source: "City Weekend",
    title: "Where to book when dinner should feel like a destination",
    excerpt:
      "Expect polished seafood, elegant pacing, and a cocktail hour that eases naturally into dinner.",
  },
  {
    source: "Los Angeles Dining Guide",
    title: "A coastal bistro that understands appetite and restraint",
    excerpt:
      "The kitchen's best work arrives when fire, acidity, and excellent seafood are allowed to speak plainly.",
  },
];

export const hours: Hour[] = [
  { day: "Monday", hours: "5:00 PM - 10:00 PM" },
  { day: "Tuesday", hours: "5:00 PM - 10:00 PM" },
  { day: "Wednesday", hours: "5:00 PM - 10:00 PM" },
  { day: "Thursday", hours: "5:00 PM - 10:30 PM" },
  { day: "Friday", hours: "5:00 PM - 11:00 PM" },
  { day: "Saturday", hours: "4:30 PM - 11:00 PM" },
  { day: "Sunday", hours: "4:30 PM - 9:30 PM" },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "mezze",
    title: "Opening Plates",
    courseLabel: "Course One",
    description:
      "The first pass is bright, chilled, and shareable, built around salt, citrus, spice, and warm bread.",
    ritual:
      "Best ordered as a layered first round: two bright starters, one shellfish dish, and something to tear into with the table.",
    pairing: "Pair with an Assyrtiko pour or the Harbor Martini.",
    image: siteImages.menuPlated,
    items: [
      {
        name: "Whipped Feta",
        description: "Urfa chili honey, toasted sesame, and grilled sourdough.",
        price: "$14",
      },
      {
        name: "Yellowtail Crudo",
        description: "Compressed melon, green olive oil, basil, and pink peppercorn.",
        price: "$22",
      },
      {
        name: "Saffron Mussels",
        description: "White wine broth, grilled bread, and fennel pollen butter.",
        price: "$24",
      },
      {
        name: "Crispy Halloumi",
        description: "Blood orange glaze, mint, and toasted sesame.",
        price: "$16",
      },
      {
        name: "Heirloom Tomato Salad",
        description: "Stracciatella, basil stem oil, and grilled lemon.",
        price: "$18",
      },
    ],
  },
  {
    id: "sea",
    title: "From The Harbor",
    courseLabel: "Course Two",
    description:
      "Seafood is treated with very little interference and finished with smoke, acid, or olive oil rather than heavy garnish.",
    ritual:
      "This is where the room slows down. A pasta and a fish course together make the strongest center of the meal.",
    pairing: "Built for saline whites, cold rose, or a second martini.",
    image: siteImages.featuredPasta,
    items: [
      {
        name: "Linguine Vongole",
        description: "Little neck clams, preserved lemon, bottarga, and parsley.",
        price: "$36",
      },
      {
        name: "Wood-Fired Branzino",
        description: "Salsa verde, shaved fennel, and caper butter.",
        price: "$39",
      },
      {
        name: "Seared Scallops",
        description: "Cauliflower puree, brown butter, currants, and toasted hazelnuts.",
        price: "$41",
      },
      {
        name: "Coal-Kissed Calamari",
        description: "Soft herbs, citrus oil, and market tomato relish.",
        price: "$32",
      },
      {
        name: "Charred Prawn Skewers",
        description: "Ajo blanco, basil, and lemon ash.",
        price: "$34",
      },
    ],
  },
  {
    id: "fire",
    title: "From The Hearth",
    courseLabel: "Course Three",
    description:
      "The live-fire mains are warmer, deeper, and built for tables that want smoke, jus, and a little generosity.",
    ritual:
      "Order a hearth main once the table is settled. It is the most indulgent chapter of the dinner and the one that lingers.",
    pairing: "Best with cellar reds or a fig leaf old fashioned.",
    image: siteImages.diningRoom,
    items: [
      {
        name: "Pistachio Lamb Chops",
        description: "Pomegranate-mint jus and roasted rainbow carrots.",
        price: "$44",
      },
      {
        name: "Citrus Chicken",
        description: "Green olives, saffron couscous, and preserved lemon pan jus.",
        price: "$34",
      },
      {
        name: "Prime Ribeye",
        description: "14 oz cut, rosemary potatoes, and green peppercorn jus.",
        price: "$56",
      },
      {
        name: "Wild Mushroom Mafalda",
        description: "Truffle cream, pecorino, and crispy shallots.",
        price: "$29",
      },
      {
        name: "Charred Cauliflower",
        description: "Tahini emulsion, lentil ragout, toasted almonds, and dill.",
        price: "$27",
      },
    ],
  },
  {
    id: "dessert",
    title: "Desserts",
    courseLabel: "Finale",
    description:
      "Desserts stay precise and clean, leaning into citrus, olive oil, nuts, and enough bitterness to close dinner well.",
    ritual:
      "The last course is meant to reset the palate, extend the conversation, and invite one more drink without weight.",
    pairing: "Order with espresso, amaro, or a final glass of Bandol rose.",
    image: siteImages.wineToast,
    items: [
      {
        name: "Orange Blossom Basque Cheesecake",
        description: "Candied citrus and pistachio praline.",
        price: "$13",
      },
      {
        name: "Dark Chocolate Olive Oil Cake",
        description: "Espresso creme fraiche and sea salt caramel.",
        price: "$14",
      },
      {
        name: "Lemon Semolina Tart",
        description: "Meringue shards and thyme syrup.",
        price: "$12",
      },
      {
        name: "Cardamom Affogato",
        description: "Vanilla gelato with single-origin espresso.",
        price: "$11",
      },
    ],
  },
  {
    id: "bar",
    title: "Cocktails & Cellar",
    courseLabel: "Last Call",
    description:
      "Mediterranean aperitivi, savory martinis, coastal whites, and a short list of cellar reds anchor the drinks program.",
    ritual:
      "The bar is part of the meal from the first round onward. Drinks are designed to shift from bright to structured as the room deepens.",
    pairing: "Start with the saffron spritz, finish with the fig leaf old fashioned.",
    image: siteImages.cocktailService,
    items: [
      {
        name: "Saffron Spritz",
        description: "Aperitivo blend, citrus cordial, cava, and sea salt mist.",
        price: "$17",
      },
      {
        name: "Harbor Martini",
        description: "Gin, fino sherry, dry vermouth, and green olive oil.",
        price: "$19",
      },
      {
        name: "Fig Leaf Old Fashioned",
        description: "Bourbon, fig reduction, orange oils, and smoked spice.",
        price: "$18",
      },
      {
        name: "Santorini Assyrtiko",
        description: "Mineral, saline, and built for shellfish.",
        price: "$19 / $72",
      },
      {
        name: "Bandol Rose",
        description: "Structured, dry, and cold enough for a late-afternoon table.",
        price: "$18 / $68",
      },
    ],
  },
];

export const contactDetails = {
  phone: "(310) 555-0148",
  email: "hello@asteracoastal.com",
  reservationEmail: "reservations@asteracoastal.com",
  addressLine1: "128 Harbor Line Avenue",
  addressLine2: "Santa Monica, CA 90401",
  mapUrl: "https://maps.google.com/?q=128+Harbor+Line+Avenue+Santa+Monica+CA+90401",
  reservationsUrl: "https://www.opentable.com/",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Yelp", href: "https://www.yelp.com" },
];

export const imageSources = Object.values(siteImages);
