export type EditorialStat = {
  value: string;
  label: string;
};

export type FeaturedIdea = {
  label: string;
  title: string;
  venue: string;
  format: string;
  audience: string;
  summary: string;
  takeaway: string;
  image: string;
  alt: string;
  ctaLabel: string;
  ctaHref: string;
};

export type EngagementMode = {
  id: "speaking" | "advisory" | "media";
  label: string;
  title: string;
  summary: string;
  detail: string;
  includes: string[];
  fit: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Framework = {
  index: string;
  title: string;
  description: string;
  signal: string;
};

export type MediaAppearance = {
  outlet: string;
  format: string;
  title: string;
  note: string;
};

export type EssayPreview = {
  label: string;
  title: string;
  summary: string;
};

export const editorialStats: EditorialStat[] = [
  { value: "150+", label: "rooms, workshops, and live conversations shaped" },
  { value: "46", label: "founders and expert-led teams advised closely" },
  { value: "31K", label: "weekly readers following Nadia's editorial notes" },
];

export const trustedBy = [
  "Northstar Ledger",
  "Founders Table Live",
  "Operator House",
  "Beacon House",
  "Second Mile",
  "Morning Orbit",
];

export const featuredIdeas: FeaturedIdea[] = [
  {
    label: "Keynote",
    title: "The sentence the room repeats on the way home matters more than the slide they photograph.",
    venue: "Editorial Leadership Forum",
    format: "Opening keynote",
    audience: "1,200 leaders in room",
    summary:
      "A keynote on why authority compounds when a founder or expert builds one durable argument instead of rotating through disconnected opinions.",
    takeaway:
      "Strong stages do not just inspire. They hand the audience language that keeps traveling after the applause.",
    image: "/images/nadia-workshop.jpg",
    alt: "Nadia Vale leading a workshop in a conference room with attendees seated around a long table.",
    ctaLabel: "Book a keynote or workshop",
    ctaHref: "/contact?type=speaking",
  },
  {
    label: "Podcast",
    title: "Designing a public voice that sounds seasoned without sounding rehearsed.",
    venue: "Signal & Scale",
    format: "Guest conversation",
    audience: "Top 50 marketing show",
    summary:
      "A discussion about keeping warmth, specificity, and humor in the message while still making the business case legible to buyers and bookers.",
    takeaway:
      "The goal is not more polish. The goal is a voice with enough structure to be remembered and enough humanity to be trusted.",
    image: "/images/nadia-desk-portrait.jpg",
    alt: "Nadia Vale seated at a desk beside a laptop in a bright editorial workspace.",
    ctaLabel: "Ask about podcast prep",
    ctaHref: "/contact?type=advisory",
  },
  {
    label: "Workshop",
    title: "Turning expertise into a sponsor-ready story without flattening the person behind it.",
    venue: "Modern Creator Brief",
    format: "Editorial session",
    audience: "18K replay views",
    summary:
      "A workshop for creators, hosts, and expert-led brands on making premium partnerships feel commercially clear without falling into generic creator language.",
    takeaway:
      "The market should understand the offer quickly, but it should still feel like it could only come from you.",
    image: "/images/nadia-whiteboard-portrait.jpg",
    alt: "Nadia Vale standing in front of a whiteboard in an editorial studio.",
    ctaLabel: "Shape a partner narrative",
    ctaHref: "/contact?type=partnership",
  },
];

export const engagementModes: EngagementMode[] = [
  {
    id: "speaking",
    label: "Speaking",
    title: "Keynotes, moderated conversations, and workshops with real editorial shape.",
    summary:
      "Built for conference teams, founder offsites, and private communities that need substance in the room and a clearer conversation after it.",
    detail:
      "Nadia develops the spine of the talk, the quotable lines, the transitions, and the delivery rhythm so the room leaves with a point of view instead of a motivational blur.",
    includes: [
      "Narrative arc, opening, and closing sequence",
      "Anchor lines people can repeat after the event",
      "Optional moderator brief or workshop facilitation notes",
    ],
    fit: "Best when the room needs both intellectual credibility and emotional clarity.",
    ctaLabel: "Request speaking availability",
    ctaHref: "/contact?type=speaking",
  },
  {
    id: "advisory",
    label: "Advisory",
    title: "Editorial direction for founders and leaders whose name now shapes trust.",
    summary:
      "A close advisory lane for people whose homepage, interviews, launches, and leadership presence need to sound like the same mind.",
    detail:
      "This is where Nadia sharpens the public thesis, signature phrases, homepage language, interview framing, and content direction so visibility starts compounding instead of scattering.",
    includes: [
      "Positioning memo and audience thesis",
      "Homepage voice, media bio, and message review",
      "Editorial themes for essays, interviews, and launches",
    ],
    fit: "Best when the business is growing and the public-facing story is now part of the leverage.",
    ctaLabel: "Start an advisory inquiry",
    ctaHref: "/contact?type=advisory",
  },
  {
    id: "media",
    label: "Media",
    title: "Premium partnership and interview shaping for people with an audience and a point of view.",
    summary:
      "Support for hosts, newsletter operators, and expert brands translating trust into interviews, sponsor decks, and sharper media-ready materials.",
    detail:
      "The work keeps the voice intact while clarifying what partners, producers, and premium buyers need to understand quickly in order to say yes.",
    includes: [
      "Partnership narrative and media kit direction",
      "Interview talking points and guest prep",
      "Campaign hooks that feel authored, not bolted on",
    ],
    fit: "Best when the audience is there and the packaging now needs to match the quality of the trust.",
    ctaLabel: "Ask about media support",
    ctaHref: "/contact?type=partnership",
  },
];

export const signatureFrameworks: Framework[] = [
  {
    index: "01",
    title: "Point of view before output",
    description:
      "Nadia starts by clarifying the argument a founder or expert should be known for, so the work stops sounding like a rotating list of topics.",
    signal: "The audience can describe the idea in one sentence after a first encounter.",
  },
  {
    index: "02",
    title: "Room rhythm before polish",
    description:
      "Delivery gets shaped around cadence, tension, and transitions, because the room remembers how the idea moved, not just how neat the slides looked.",
    signal: "The strongest line lands clearly in person, in a clip, and in the follow-up conversation.",
  },
  {
    index: "03",
    title: "Commercial clarity without flattening",
    description:
      "The public story should help buyers, hosts, and partners understand the value quickly while still protecting tone, texture, and personality.",
    signal: "The brand reads as premium and specific, not generic and over-optimized.",
  },
];

export const mediaAppearances: MediaAppearance[] = [
  {
    outlet: "Morning Orbit",
    format: "Essay",
    title: "Why a serious personal brand should feel more like a publication than a content calendar",
    note: "A note on cadence, editorial standards, and the dangers of sounding permanently in launch mode.",
  },
  {
    outlet: "Operator House",
    format: "Fireside",
    title: "What changes when the founder becomes part of the trust architecture",
    note: "A closed-door conversation for leadership teams navigating public visibility and category perception.",
  },
  {
    outlet: "Northstar Ledger",
    format: "Interview",
    title: "The difference between visibility that performs and visibility that compounds",
    note: "A media conversation on why thoughtful repetition beats reactive content output.",
  },
  {
    outlet: "Second Mile",
    format: "Workshop",
    title: "Turning expertise into signature frameworks teams can actually use",
    note: "An operating session for experts and executives translating lived experience into sharper public language.",
  },
];

export const essayPreviews: EssayPreview[] = [
  {
    label: "From Signal to Story",
    title: "The homepage should sound like the person clients hope to meet.",
    summary:
      "A short essay on why the strongest personal brand sites feel composed, voiced, and paced like edited work instead of stacked proof blocks.",
  },
  {
    label: "Studio Note",
    title: "Authority is often a rhythm problem before it is a messaging problem.",
    summary:
      "A note on cadence, sentence length, pause, and why a public voice needs breathing room if it is going to sound senior.",
  },
];
