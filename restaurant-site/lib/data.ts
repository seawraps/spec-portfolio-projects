export type NavLink = {
  href: string;
  label: string;
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
  description: string;
  items: MenuItem[];
};

export type ExperienceHighlight = {
  title: string;
  description: string;
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
  { href: "/contact", label: "Contact" },
];

export const siteImages = {
  heroTableWine: {
    src: "/images/hero-table-wine.jpg",
    alt: "A candlelit dinner table layered with plates, wine glasses, and warm evening light.",
    photographer: "D Z",
    sourceUrl:
      "https://unsplash.com/photos/a-table-topped-with-plates-and-glasses-of-wine-BiajbI99xTo",
  },
  heroFeast: {
    src: "/images/hero-feast.jpg",
    alt: "An editorial overhead of shared dishes, wine, and candlelight across a restaurant table.",
    photographer: "Andrej Lisakov",
    sourceUrl:
      "https://unsplash.com/photos/a-table-topped-with-plates-and-bowls-of-food-iS0SGSMUJNA",
  },
  heroOccasion: {
    src: "/images/hero-occasion.jpg",
    alt: "Guests gathered around a candlelit dinner table during service.",
    photographer: "Andrew Solok",
    sourceUrl:
      "https://unsplash.com/photos/people-gathered-around-a-table-with-food-and-candles-Woue_isymNU",
  },
  featuredMussels: {
    src: "/images/featured-mussels.jpg",
    alt: "A shallow bowl of Mediterranean mussels with sauce and herbs.",
    photographer: "Ivana Cajina",
    sourceUrl:
      "https://unsplash.com/photos/a-dish-of-food-with-mussels-and-sauce--dqJt_xZUcM",
  },
  featuredPasta: {
    src: "/images/featured-pasta.jpg",
    alt: "Seafood pasta with clams and shrimp plated in a white bowl.",
    photographer: "Sarda Bamberg",
    sourceUrl:
      "https://unsplash.com/photos/a-plate-of-pasta-with-clams-and-shrimp-igtFLRG0tQc",
  },
  featuredCalamari: {
    src: "/images/featured-calamari.jpg",
    alt: "Grilled calamari finished with herbs and olive oil beside the coast.",
    photographer: "blackieshoot",
    sourceUrl:
      "https://unsplash.com/photos/grilled-calamari-served-with-herbs-and-oil-by-the-sea-zgotbaQZvFo",
  },
  storyChef: {
    src: "/images/story-chef.jpg",
    alt: "A chef plating a finished dish in a restaurant kitchen.",
    photographer: "Giulia Squillace",
    sourceUrl:
      "https://unsplash.com/photos/a-man-in-a-kitchen-preparing-food-on-a-plate-J1RKeY6Kv8c",
  },
  diningRoom: {
    src: "/images/dining-room.jpg",
    alt: "A warm fine-dining room with moody lighting and dressed tables.",
    photographer: "Hakim Menikh",
    sourceUrl:
      "https://unsplash.com/photos/cozy-restaurant-dining-area-with-elegant-decor-PGbiUKbJpoM",
  },
  cocktailService: {
    src: "/images/cocktail-service.jpg",
    alt: "A bartender pouring a cocktail into a glass at the bar.",
    photographer: "Louis Hansel",
    sourceUrl:
      "https://unsplash.com/photos/person-pouring-liquor-in-clear-drinking-glass-yLUvnCFI500",
  },
  patioOcean: {
    src: "/images/patio-ocean.jpg",
    alt: "An open-air restaurant terrace overlooking the ocean.",
    photographer: "Roberta Sant'Anna",
    sourceUrl:
      "https://unsplash.com/photos/outdoor-cafe-seating-with-ocean-view-2rTG2fxKcZ8",
  },
  terraceNight: {
    src: "/images/terrace-night.jpg",
    alt: "A string-lit restaurant terrace at night prepared for dinner service.",
    photographer: "Nikita Kulikov",
    sourceUrl:
      "https://unsplash.com/photos/outdoor-restaurant-seating-area-at-night-with-string-lights-bQo3HO8HdgY",
  },
  wineToast: {
    src: "/images/wine-toast.jpg",
    alt: "A guest holding a glass of red wine over a candlelit dinner table.",
    photographer: "Phakphoom Srinorajan",
    sourceUrl:
      "https://unsplash.com/photos/person-holding-wine-glass-with-red-wine-hPkUQ30hvRA",
  },
  menuPlated: {
    src: "/images/menu-plated.jpg",
    alt: "A Mediterranean appetizer plate with cheese, bread, and vegetables.",
    photographer: "Snappr",
    sourceUrl:
      "https://unsplash.com/photos/a-plate-of-food-on-a-table-with-utensils-nQfrAaPsQq8",
  },
} as const satisfies Record<string, PhotoAsset>;

export const featuredDishes: FeaturedDish[] = [
  {
    name: "Saffron Mussels",
    description:
      "White wine broth, Calabrian chili, grilled country bread, and charred fennel pollen butter.",
    price: "$24",
    course: "Raw & Warm Starters",
    image: siteImages.featuredMussels,
  },
  {
    name: "Linguine Vongole",
    description:
      "Little neck clams, preserved lemon, bottarga, and a glossy shellfish emulsion finished to order.",
    price: "$36",
    course: "Seafood Pasta",
    image: siteImages.featuredPasta,
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
      "A market-driven progression built around seafood, live-fire mains, and composed desserts.",
    detail: "$98 per guest, nightly from 6 PM",
    image: siteImages.menuPlated,
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
    title: "Sunset terrace tables",
    description:
      "Ocean air, candlelight, and the full dinner menu served outside when the evening stays calm.",
    detail: "Request terrace seating when reserving",
    image: siteImages.patioOcean,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    ...siteImages.diningRoom,
    title: "The dining room",
    caption: "A low-lit room tuned for second bottles and unhurried conversation.",
    layout: "wide",
  },
  {
    ...siteImages.cocktailService,
    title: "Bar service",
    caption: "A cocktail list driven by citrus, herbs, bitter aperitivi, and polished technique.",
    layout: "tall",
  },
  {
    ...siteImages.patioOcean,
    title: "Ocean terrace",
    caption: "Open-air seating with coastal light in the late afternoon and dusk service.",
    layout: "tall",
  },
  {
    ...siteImages.terraceNight,
    title: "After dark",
    caption: "String-lit tables hold the energy once the room gives way to night.",
    layout: "wide",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Astera lands exactly where a modern restaurant should: polished enough for an occasion, relaxed enough for a second reservation that same week.",
    author: "Marina Howell",
    role: "Editor, West Coast Table",
  },
  {
    quote:
      "The room feels cinematic, the service feels precise, and the menu knows when to be generous and when to stay restrained.",
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
    description:
      "A first round built for the table: citrus, spice, chilled seafood, and warm bread.",
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
    description:
      "Seafood is treated with as little interference as possible and finished with heat or brightness.",
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
    description:
      "Live-fire mains designed for dinner tables that want depth, smoke, and generous sides.",
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
    description:
      "Plated sweets with citrus, nuts, olive oil, and enough bitterness to close dinner cleanly.",
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
    description:
      "Mediterranean aperitivi, savory martinis, coastal whites, and a short list of cellar reds.",
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
