export type NavLink = {
  href: string;
  label: string;
};

export type FeaturedDish = {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
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

export const restaurantName = "Astera Coastal Bistro";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export const featuredDishes: FeaturedDish[] = [
  {
    name: "Charred Octopus",
    description:
      "Crisp potato confit, smoked paprika aioli, lemon herb salad, and caper chimichurri.",
    price: "$24",
    image: "/images/dish-octopus.svg",
    alt: "Plated charred octopus with potatoes and green herbs",
  },
  {
    name: "Saffron Seafood Risotto",
    description:
      "Carnaroli rice with mussels, prawns, squid, preserved lemon, and fennel pollen.",
    price: "$36",
    image: "/images/dish-risotto.svg",
    alt: "Golden saffron seafood risotto with shellfish garnish",
  },
  {
    name: "Pistachio Lamb Chops",
    description:
      "Colorado lamb, pistachio crust, roasted carrots, and pomegranate-mint jus.",
    price: "$42",
    image: "/images/dish-lamb.svg",
    alt: "Lamb chops served with roasted vegetables and sauce",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-dining.svg",
    alt: "Warmly lit dining room with textured plaster walls and linen tables",
  },
  {
    src: "/images/gallery-bar.svg",
    alt: "Marble cocktail bar with hanging glassware and brass lighting",
  },
  {
    src: "/images/gallery-fire.svg",
    alt: "Open wood-fire kitchen station during evening service",
  },
  {
    src: "/images/gallery-patio.svg",
    alt: "Coastal patio seating with plants and sunset tones",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Astera feels transportive without losing its California soul. Every plate arrives balanced, bright, and deeply satisfying.",
    author: "Marina Howell",
    role: "Editor, West Coast Table",
  },
  {
    quote:
      "A neighborhood restaurant with destination-level polish. The wood-fired branzino and citrus tart are worth the trip alone.",
    author: "Darren Liu",
    role: "Food Writer, Harbor Journal",
  },
];

export const pressMentions: PressMention[] = [
  {
    source: "Los Angeles Dining Guide",
    title: "Best New Coastal Dining Rooms",
    excerpt:
      "Astera pairs elegant Mediterranean technique with relaxed oceanfront hospitality.",
  },
  {
    source: "Pacific Plate",
    title: "Where to Book Dinner This Season",
    excerpt:
      "Expect confident flavors, precise service, and one of the most thoughtful wine lists on the Westside.",
  },
  {
    source: "City Weekend",
    title: "Top Date-Night Restaurants",
    excerpt:
      "The low-lit interiors and open-fire kitchen create a memorable, intimate energy.",
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
    title: "Mezze & Small Plates",
    description:
      "Ideal for sharing across the table. Bright herbs, citrus, and seasonal produce.",
    items: [
      {
        name: "Whipped Feta",
        description: "Urfa chili honey, olive oil, and grilled sourdough.",
        price: "$14",
      },
      {
        name: "Crispy Halloumi",
        description: "Blood orange glaze, mint, and toasted sesame.",
        price: "$16",
      },
      {
        name: "Harissa Shrimp",
        description: "Cast-iron prawns, tomato confit, and charred lemon.",
        price: "$19",
      },
      {
        name: "Roasted Beet Carpaccio",
        description: "Pistachio dukkah, yogurt labneh, and dill.",
        price: "$15",
      },
      {
        name: "Fried Chickpea Fritters",
        description: "Herb tahini, cucumber, and pickled shallot.",
        price: "$13",
      },
    ],
  },
  {
    id: "sea",
    title: "From The Sea",
    description:
      "Line-caught seafood and shellfish, prepared over live fire or slow braise.",
    items: [
      {
        name: "Wood-Fired Branzino",
        description: "Salsa verde, fennel slaw, and caper-lemon butter.",
        price: "$38",
      },
      {
        name: "Saffron Seafood Risotto",
        description: "Prawns, mussels, squid, and preserved lemon.",
        price: "$36",
      },
      {
        name: "Seared Scallops",
        description: "Cauliflower puree, currants, and brown butter hazelnuts.",
        price: "$39",
      },
      {
        name: "Black Garlic Tuna",
        description: "Crushed olive tapenade, confit tomatoes, and arugula.",
        price: "$41",
      },
      {
        name: "Mussels In White Wine",
        description: "Garlic, chili threads, parsley, and toasted country bread.",
        price: "$28",
      },
    ],
  },
  {
    id: "fire",
    title: "Wood-Fired Mains",
    description:
      "Signature hearth dishes inspired by Mediterranean coasts and inland markets.",
    items: [
      {
        name: "Pistachio Lamb Chops",
        description: "Pomegranate-mint jus and roasted rainbow carrots.",
        price: "$42",
      },
      {
        name: "Citrus Chicken Tagine",
        description: "Green olives, saffron couscous, and preserved lemon.",
        price: "$33",
      },
      {
        name: "Aged Ribeye",
        description: "14 oz prime cut, rosemary potatoes, and peppercorn jus.",
        price: "$52",
      },
      {
        name: "Wild Mushroom Mafalda",
        description: "Truffle cream, pecorino, and crispy shallots.",
        price: "$29",
      },
      {
        name: "Charred Cauliflower Steak",
        description: "Tahini emulsion, lentil ragout, and toasted almonds.",
        price: "$27",
      },
    ],
  },
  {
    id: "dessert",
    title: "Desserts",
    description: "Housemade pastries and plated sweets, balanced and not overly sweet.",
    items: [
      {
        name: "Orange Blossom Basque Cheesecake",
        description: "Candied citrus and pistachio praline.",
        price: "$12",
      },
      {
        name: "Dark Chocolate Olive Oil Cake",
        description: "Espresso creme fraiche and sea salt caramel.",
        price: "$13",
      },
      {
        name: "Lemon Semolina Tart",
        description: "Meringue shards and thyme syrup.",
        price: "$11",
      },
      {
        name: "Cardamom Affogato",
        description: "Vanilla gelato with single-origin espresso.",
        price: "$10",
      },
    ],
  },
  {
    id: "bar",
    title: "Cocktails & Zero-Proof",
    description: "Seasonal cocktails and thoughtful spirit-free serves.",
    items: [
      {
        name: "Saffron Spritz",
        description: "Aperitivo, citrus cordial, cava.",
        price: "$16",
      },
      {
        name: "Harbor Negroni",
        description: "Gin, vermouth blend, Mediterranean bitter.",
        price: "$17",
      },
      {
        name: "Fig Leaf Old Fashioned",
        description: "Bourbon, fig reduction, orange oils.",
        price: "$18",
      },
      {
        name: "Salted Grapefruit Fizz",
        description: "Grapefruit, rosemary, soda, sea salt.",
        price: "$12",
      },
      {
        name: "Cucumber Mint Tonic",
        description: "Cold-pressed cucumber, lime, mint, tonic.",
        price: "$11",
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
