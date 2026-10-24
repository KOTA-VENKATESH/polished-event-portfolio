/**
 * Central configuration for business details, luxury branding,
 * service offerings, portfolio projects, and category gallery items.
 */
import hero from "@/assets/hero.jpg";
import heroStage from "@/assets/hero-stage.jpg";
import portrait from "@/assets/aarav-portrait.jpg";
import mandap from "@/assets/mandap.jpg";
import haldi from "@/assets/haldi.jpg";
import birthday from "@/assets/birthday.jpg";
import babyshower from "@/assets/babyshower.jpg";
import anniversary from "@/assets/anniversary.jpg";
import entrance from "@/assets/entrance.jpg";
import corporate from "@/assets/corporate.jpg";
import outdoorNight from "@/assets/gallery/outdoor-night.jpg";
import tableCenterpiece from "@/assets/gallery/table-centerpiece.jpg";
import neonBetterTogether from "@/assets/gallery/neon-better-together.jpg";
import poolEvening from "@/assets/gallery/pool-evening.jpg";
import corporateStage from "@/assets/gallery/corporate-stage.jpg";
import tableTwelve from "@/assets/gallery/table-twelve.jpg";

export const images = {
  hero: heroStage,
  heroOriginal: hero,
  heroStage,
  portrait,
  mandap,
  haldi,
  birthday,
  babyshower,
  anniversary,
  entrance,
  corporate,
  outdoorNight,
  tableCenterpiece,
  neonBetterTogether,
  poolEvening,
  corporateStage,
  tableTwelve,
};

export const business = {
  name: "Aura Events & Co.",
  tagline: "Bespoke Event Planning & Luxury Decor",
  description:
    "Thoughtfully curated weddings, private celebrations, and bespoke floral experiences crafted with timeless elegance, understated luxury, and meticulous attention to detail.",
  serviceArea: "Serving destination venues, private estates & premier city ballrooms",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "concierge@auraevents.com",
  address: "Studio 12, Heritage Boulevard, High-Street Quarter",
  hours: "Mon – Sat: 10:00 AM – 7:30 PM (By Appointment)",
  serviceLocations: ["Mumbai", "Delhi NCR", "Udaipur", "Goa", "Bengaluru", "Global Destinations"],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
    youtube: "",
  },
};

export const manager = {
  name: "Aarav Kulkarni",
  monogram: "AK",
  role: "EVENT MANAGER",
  eyebrow: "EVENT MANAGER & PLANNER",
  headline: "Hi, I'm Aarav Kulkarni",
  supportingStatement: "Turning your special moments into unforgettable experiences.",
  shortIntro:
    "I plan and manage meaningful celebrations with creativity, thoughtful detail, and a personal touch—from intimate gatherings to beautifully designed weddings and special events.",
  about: {
    eyebrow: "ABOUT ME",
    heading: "Turning Ideas into Unforgettable Experiences",
    paragraph1:
      "I'm Aarav Kulkarni, an event manager with a passion for creating beautiful and meaningful celebrations. I believe every event has a unique story, and my goal is to bring that story to life with thoughtful planning, creative design and seamless execution.",
    paragraph2:
      "With a keen eye for detail and a love for aesthetics, I focus on crafting experiences that feel personal, elegant and memorable — whether it's a wedding, engagement, birthday or a corporate event.",
    signature: "Aarav K",
  },
  primaryButton: {
    label: "Explore My Work",
    href: "/#work",
  },
  secondaryButton: {
    label: "Let's Plan Your Event",
    href: "/#contact",
  },
};

export const pillars = [
  {
    id: "creative-planning",
    title: "Creative Planning",
    description: "Unique concepts tailored to your vision.",
    icon: "lightbulb",
  },
  {
    id: "detail-oriented",
    title: "Detail Oriented",
    description: "Because little things make a big difference.",
    icon: "lotus",
  },
  {
    id: "seamless-execution",
    title: "Seamless Execution",
    description: "From planning to on-ground support.",
    icon: "sparkle",
  },
  {
    id: "personal-touch",
    title: "Personal Touch",
    description: "Your story, my priority.",
    icon: "heart",
  },
];

export const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Process", href: "/#process", id: "process" },
  { label: "Testimonials", href: "/#testimonials", id: "testimonials" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export const nav = navItems;

export interface EventPaletteColor {
  name: string;
  hex: string;
}

export interface EventGalleryPhoto {
  src: string;
  caption: string;
  alt: string;
  aspectRatio?: string;
}

export interface EventDetailStory {
  headline?: string;
  creativeDirection: string;
  palette: EventPaletteColor[];
  floralAndLighting: string;
  venueAndExperience: string;
  galleryImages: EventGalleryPhoto[];
}

export interface WorkProject {
  id: string;
  title: string;
  subtitle?: string;
  season?: string;
  highlights?: string[];
  category: "Weddings" | "Engagements" | "Corporate Events" | "Birthdays" | "Others";
  categoryLabel: string;
  image: string;
  location: string;
  date: string;
  eventType: string;
  description: string;
  story: EventDetailStory;
}

export const workCategories = [
  "All",
  "Weddings",
  "Engagements",
  "Corporate Events",
  "Birthdays",
  "Others",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export const featuredProjects: WorkProject[] = [
  {
    id: "the-regal-jasmine",
    title: "The Regal Jasmine",
    subtitle: "A celebration of timeless elegance, delicate florals and unforgettable moments.",
    category: "Weddings",
    categoryLabel: "WEDDING",
    image: heroStage,
    location: "Bengaluru",
    date: "12 Jan 2024",
    season: "Winter",
    eventType: "Wedding",
    description:
      "The Regal Jasmine was a beautifully curated wedding that blended classic traditions with modern luxury. The vision was to create a warm, inviting atmosphere with elegant décor, soft lighting and meaningful details that reflected the couple's unique story.",
    highlights: [
      "Floral mandap with fresh jasmine & roses",
      "Warm ambient lighting",
      "Elegant seating and dining arrangements",
      "Classic ivory and gold palette",
    ],
    story: {
      headline: "A Celebration of Timeless Elegance",
      creativeDirection:
        "The Regal Jasmine was a beautifully curated wedding that blended classic traditions with modern luxury. The vision was to create a warm, inviting atmosphere with elegant décor, soft lighting and meaningful details that reflected the couple's unique story.",
      palette: [
        { name: "Ivory Cream", hex: "#F5EEE8" },
        { name: "Champagne Gold", hex: "#C9A66B" },
        { name: "Royal Burgundy", hex: "#2B0B10" },
        { name: "Rose Quartz", hex: "#D3C2C2" },
      ],
      floralAndLighting:
        "From the floral arrangements to the seating layout, every element was thoughtfully planned to create a seamless and memorable experience for the couple and their guests.",
      venueAndExperience:
        "Set within a premier ballroom in Bengaluru, the layout balanced grand scale with intimate warmth. Guests were guided through an aromatic entryway before arriving at the banquet hall, where personalized place settings and understated gold cutlery mirrored the regal motif of the stage.",
      galleryImages: [
        {
          src: tableTwelve,
          caption: "Curated Candlelit Banquet Setting",
          alt: "Grand dining table setup with candelabras and florals",
        },
        {
          src: tableCenterpiece,
          caption: "Artisanal Blush Rose & Eucalyptus Centerpiece",
          alt: "Close-up of white and blush garden rose centerpiece on elegant dinner table",
        },
        {
          src: anniversary,
          caption: "Artisanal Table Setting & Menu Details",
          alt: "Intimate place setting with custom menu card and warm candle",
        },
        {
          src: heroStage,
          caption: "Grand Floral Reception Dais & Archway",
          alt: "Grand wedding reception stage with white floral arch and crystal chandelier",
        },
        {
          src: tableTwelve,
          caption: "Bespoke Table Marker & Atmospheric Glow",
          alt: "Intimate wedding dining table with framed gold marker and candlelight",
        },
        {
          src: outdoorNight,
          caption: "Illuminated Garden Pathway & Lanterns",
          alt: "Nighttime garden tree walkway with fairy lights and lanterns",
        },
      ],
    },
  },
  {
    id: "a-sunlit-celebration",
    title: "A Sunlit Celebration",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    image: haldi,
    location: "Bengaluru",
    date: "28 Nov 2023",
    eventType: "Pre-Wedding & Haldi Celebration",
    description:
      "A joyful outdoor courtyard celebration bathed in morning sunshine, filled with vibrant marigolds, handcrafted brass decor, and an energetic atmosphere for family and friends.",
    story: {
      creativeDirection:
        "Designed to celebrate heritage customs with breezy contemporary flair, this pre-wedding celebration transformed a private garden villa into an immersive sanctuary of sunshine tones. A circular lounge setting fostered closeness, singing, and shared laughter.",
      palette: [
        { name: "Saffron Marigold", hex: "#E5A93B" },
        { name: "Antique Brass", hex: "#C9A66B" },
        { name: "Raw Terracotta", hex: "#A85838" },
        { name: "Sandstone Cream", hex: "#F3E0C5" },
      ],
      floralAndLighting:
        "Fresh marigold garlands in deep orange and bright yellow were paired with fresh mango leaves and fragrant tuberose strings. Natural morning sunlight served as the primary illuminator, enhanced by brass lanterns with warm votives as twilight settled.",
      venueAndExperience:
        "An open courtyard paved with stone allowed natural flow between traditional rituals and lively celebrations, complete with customized welcome refreshments and festive acoustic folk music.",
      galleryImages: [
        {
          src: haldi,
          caption: "Sunlit Courtyard Marigold Lounge",
          alt: "Courtyard pre-wedding setup in marigold yellow with brass vessels",
        },
        {
          src: neonBetterTogether,
          caption: "Evening Neon Photo Backdrop with Fresh Roses",
          alt: "Circular floral arch with glowing neon sign for couple photos",
        },
        {
          src: entrance,
          caption: "Lantern-Lined Floral Walkway",
          alt: "Pathway adorned with hanging lanterns and fresh floral arrangements",
        },
        {
          src: babyshower,
          caption: "Botanical Garden Welcome Pavilion",
          alt: "Garden pavilion with draped ivory curtains and blush florals",
        },
      ],
    },
  },
  {
    id: "elegant-and-professional",
    title: "Elegant & Professional",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    image: corporate,
    location: "Mumbai",
    date: "15 Oct 2023",
    eventType: "Executive Leadership Gala & Dinner",
    description:
      "A sophisticated corporate gala and awards evening engineered with state-of-the-art stage technology, pristine table styling, and an elevated culinary ambiance.",
    story: {
      creativeDirection:
        "Balancing brand authority with warm hospitality, the design established an immersive executive ballroom atmosphere. Precision lighting, crisp acoustics, and golden downlights created an environment of prestige and accomplishment.",
      palette: [
        { name: "Midnight Royal", hex: "#0F1E36" },
        { name: "Executive Gold", hex: "#C9A66B" },
        { name: "Pure Ivory", hex: "#F5EEE8" },
        { name: "Platinum Slate", hex: "#4A5568" },
      ],
      floralAndLighting:
        "Architectural tall glass trumpet centerpieces with white hydrangeas and snapdragons elevated sightlines across the room. Programmable LED wash lighting transitioned seamlessly from presentation mode into an intimate gala dining glow.",
      venueAndExperience:
        "Four hundred executive guests enjoyed seamless transitions from cocktail foyer to the plenary hall, with curated seated banquet dining and commemorative photo areas.",
      galleryImages: [
        {
          src: corporate,
          caption: "Executive Gala Ballroom with Crystal Chandeliers",
          alt: "Corporate ballroom banquet tables with tall white floral centerpieces",
        },
        {
          src: corporateStage,
          caption: "Keynote Plenary Stage with Curved LED Display",
          alt: "Corporate conference hall with royal blue lighting and Better Together keynote",
        },
        {
          src: tableTwelve,
          caption: "VIP Dining Place Setting with Gold Accents",
          alt: "VIP dining tables with gold markers and crystal glassware",
        },
        {
          src: tableCenterpiece,
          caption: "Executive Table Centerpiece in Cut Crystal",
          alt: "Floral centerpiece on executive dining table with votives",
        },
      ],
    },
  },
  {
    id: "little-moments-big-smiles",
    title: "Little Moments, Big Smiles",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    image: birthday,
    location: "Pune",
    date: "08 Sep 2023",
    eventType: "First Birthday Milestone Celebration",
    description:
      "A delightful first birthday celebration styled with organic pastel balloon arches, delicate floral accents, custom dessert pedestals, and whimsical charm.",
    story: {
      creativeDirection:
        "A fairytale celebration envisioned around soft dreamy pastels and whimsical geometry. Organic balloon clouds cascaded around fluted roman pedestals to showcase a handcrafted three-tier confection.",
      palette: [
        { name: "Pastel Blush", hex: "#E8C4C4" },
        { name: "Soft Lavender", hex: "#C8B8DB" },
        { name: "Warm Champagne", hex: "#C9A66B" },
        { name: "Buttercream", hex: "#FFF5E6" },
      ],
      floralAndLighting:
        "Blush peonies, spray roses, and baby's breath were woven through organic balloon clusters. Warm backlighting illuminated the custom arch typography, creating a soft, photogenic glow.",
      venueAndExperience:
        "Designed with both young children and adult guests in mind, the space offered comfortable lounge seating, an interactive play area, and an artisanal dessert station.",
      galleryImages: [
        {
          src: birthday,
          caption: "Pastel Balloon Arch & Fluted Pedestals",
          alt: "First birthday pastel balloon arch with cake pedestal and flower decor",
        },
        {
          src: babyshower,
          caption: "Botanical Garden Photo Corner",
          alt: "Pastel blossom garden photo corner with white drapes",
        },
        {
          src: tableCenterpiece,
          caption: "Sweet Celebration Floral Setting",
          alt: "Sweet celebration table floral centerpiece with candles",
        },
        {
          src: outdoorNight,
          caption: "Twilight Garden Reception Lighting",
          alt: "Garden dining setup with warm hanging fairy lights",
        },
      ],
    },
  },
  {
    id: "an-evening-to-remember",
    title: "An Evening to Remember",
    category: "Others",
    categoryLabel: "OTHERS",
    image: outdoorNight,
    location: "Goa",
    date: "22 Jul 2023",
    eventType: "Private Al Fresco Coastal Soirée",
    description:
      "An enchanting evening private celebration nestled under heritage trees, illuminated by a canopy of starlight fairy bulbs and warm candlelit long tables.",
    story: {
      creativeDirection:
        "An intimate open-air gathering designed to celebrate friendship and milestone moments under the Goan night sky. Long communal tables encouraged conversation, framed by natural greenery.",
      palette: [
        { name: "Twilight Olive", hex: "#3B4B38" },
        { name: "Starlight Amber", hex: "#E5A93B" },
        { name: "Natural Linen", hex: "#F3E0C5" },
        { name: "Vintage Gold", hex: "#C9A66B" },
      ],
      floralAndLighting:
        "Over 800 meters of warm micro-fairy lights were hand-strung through mature trees. Tables featured low arrangements of garden herbs, olive branches, and trailing ivy with glowing taper candles.",
      venueAndExperience:
        "Set within a secluded coastal estate, acoustic live melodies and handcrafted cocktails accompanied a multi-course farm-to-table dinner served under the illuminated night canopy.",
      galleryImages: [
        {
          src: outdoorNight,
          caption: "Long Banquet Tables Beneath Fairy Light Canopy",
          alt: "Al fresco evening banquet with warm fairy lights strung across trees",
        },
        {
          src: poolEvening,
          caption: "Twilight Reflection Pool with Floating Lanterns",
          alt: "Reflection pool at night with floating candle lanterns and draped cabana",
        },
        {
          src: entrance,
          caption: "Candlelit Stone Pathway & Floral Arches",
          alt: "Garden pathway lined with lantern lights and floral arches",
        },
        {
          src: anniversary,
          caption: "Intimate Dining with Rose Bouquet & Wine",
          alt: "Romantic candlelit dining table with wine glasses and red roses",
        },
      ],
    },
  },
  {
    id: "love-in-every-detail",
    title: "Love in Every Detail",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    image: neonBetterTogether,
    location: "Chennai",
    date: "17 Jun 2023",
    eventType: "Botanical Garden Engagement",
    description:
      "A romantic engagement celebration highlighted by a lush circular floral arch, custom warm neon script, and bespoke garden lounge seating.",
    story: {
      creativeDirection:
        "Celebrating modern romance through natural botanical textures and understated luxury. A bespoke circular love arch served as the emotional centerpiece for the ring exchange and couple portraits.",
      palette: [
        { name: "Dusty Rose", hex: "#D3A5A5" },
        { name: "Sage Foliage", hex: "#7D8B74" },
        { name: "Soft Ivory", hex: "#F5EEE8" },
        { name: "Warm Gold", hex: "#C9A66B" },
      ],
      floralAndLighting:
        "Over twelve varieties of garden roses, ranunculus, and Italian ruscus formed the circular sculpture. Warm neon lettering reading 'Better Together' cast a golden glow across the tufted velvet loveseat.",
      venueAndExperience:
        "An ocean-breeze garden lawn transformed into a cozy retreat with vintage rugs, brass hurricanes, and an interactive floral guestbook station.",
      galleryImages: [
        {
          src: neonBetterTogether,
          caption: "Circular Love Arch with Better Together Neon Sign",
          alt: "Lush circular rose installation with Better Together neon sign and loveseat",
        },
        {
          src: babyshower,
          caption: "Garden Pavilion with Draped Sheer Curtains",
          alt: "Botanical garden engagement setup with arching blush roses",
        },
        {
          src: haldi,
          caption: "Pre-Ceremony Lounge Setup",
          alt: "Courtyard pre-wedding setup in marigold tones with lounge seating",
        },
        {
          src: anniversary,
          caption: "Candlelit Evening Dinner Table",
          alt: "Candlelit dinner table with wine glasses and romantic florals",
        },
      ],
    },
  },
  {
    id: "timeless-elegance",
    title: "Timeless Elegance",
    category: "Weddings",
    categoryLabel: "WEDDING",
    image: anniversary,
    location: "Mysuru",
    date: "04 May 2023",
    eventType: "Heritage Wedding Banquet",
    description:
      "A majestic candlelit wedding banquet celebrating classic royal heritage with deep crimson blooms, cut crystal stemware, and antique candelabras.",
    story: {
      creativeDirection:
        "Rooted in the royal charm of Mysuru, this evening celebration celebrated old-world grandeur. Intimate banquet seating beneath warm glowing fairy canopies fostered a timeless romantic mood.",
      palette: [
        { name: "Velvet Crimson", hex: "#4A0E17" },
        { name: "Antique Gold", hex: "#C9A66B" },
        { name: "Candlelit Amber", hex: "#E29D42" },
        { name: "Crisp Ivory", hex: "#F5EEE8" },
      ],
      floralAndLighting:
        "Arrangements of deep red Baccara roses, burgundy peonies, and trailing greenery crowned each table. Tiered crystal candelabras with ivory taper candles brought warmth and vertical elegance.",
      venueAndExperience:
        "Set against the backdrop of historic stone arches, the reception offered bespoke culinary pairings and classical chamber music under the stars.",
      galleryImages: [
        {
          src: anniversary,
          caption: "Romantic Table Setting with Red Roses & Candles",
          alt: "Candlelit dinner tablescape with red roses and warm fairy light canopy",
        },
        {
          src: tableTwelve,
          caption: "Table 12 Setting with Framed Gold Marker",
          alt: "Heritage dining table setting with golden framed table marker 12",
        },
        {
          src: heroStage,
          caption: "Grand Reception Stage with Chandeliers",
          alt: "Grand wedding reception stage with white floral arch and crystal chandelier",
        },
        {
          src: entrance,
          caption: "Lantern-Lined Floral Walkway",
          alt: "Floral walkway lined with candles leading to the banquet",
        },
      ],
    },
  },
  {
    id: "a-vision-in-gold",
    title: "A Vision in Gold",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    image: mandap,
    location: "Bengaluru",
    date: "18 Mar 2023",
    eventType: "Royal Ceremonial Gala",
    description:
      "A ceremonial awards gala layered with intricate jasmine canopies, handcrafted heritage chandeliers, and golden architectural symmetry.",
    story: {
      creativeDirection:
        "Inspired by classical South Indian temple architecture reimagined for contemporary celebrations. Gilded pillars, brass urulis with floating blossoms, and structured floral ceilings created an awe-inspiring stage.",
      palette: [
        { name: "Temple Gold", hex: "#C9A66B" },
        { name: "Jasmine White", hex: "#FBF9F5" },
        { name: "Deep Burgundy", hex: "#2B0B10" },
        { name: "Sandalwood", hex: "#B38B6D" },
      ],
      floralAndLighting:
        "Thousands of fresh jasmine garlands and tuberose tassels hung in architectural symmetry. Concealed amber spotlights and floating brass diya lamps created a warm, sacred ambiance.",
      venueAndExperience:
        "The ceremonial pavilion accommodated distinguished honorees and international delegates, offering authentic traditional hospitality in a luxurious setting.",
      galleryImages: [
        {
          src: mandap,
          caption: "Gilded Ceremonial Mandap with Jasmine Canopies",
          alt: "Royal ceremonial gala stage layered with intricate jasmine canopies",
        },
        {
          src: heroStage,
          caption: "Grand Archway Dais with Chandeliers",
          alt: "Floral archway and crystal chandelier stage setup",
        },
        {
          src: corporateStage,
          caption: "Keynote Auditorium & Conference Lighting",
          alt: "Conference hall with blue LED stage lighting",
        },
        {
          src: tableCenterpiece,
          caption: "Botanical Centerpiece with Crystal Glasses",
          alt: "Luxury table floral centerpiece with crystal wine glasses",
        },
      ],
    },
  },
];

export const curatedGalleryCategories = [
  "All",
  "Weddings",
  "Engagements",
  "Corporate Events",
  "Birthdays",
  "Others",
] as const;

export type CuratedGalleryCategory = (typeof curatedGalleryCategories)[number];

export interface CuratedGalleryItem {
  id: string;
  title: string;
  category: "Weddings" | "Engagements" | "Corporate Events" | "Birthdays" | "Others";
  categoryLabel: string;
  src: string;
  location?: string;
  date?: string;
  caption: string;
  alt: string;
  aspectRatio?: "landscape" | "wide" | "square" | "tall";
  relatedProjectId?: string;
}

export const curatedGalleryItems: CuratedGalleryItem[] = [
  // --- PRIMARY 8 EDITORIAL COMPOSITION ITEMS (Matches Desktop Layout in Reference) ---
  {
    id: "gal-1",
    title: "The Regal Jasmine Wedding Stage",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: heroStage,
    location: "Hyderabad",
    date: "12 Jan 2024",
    caption: "Opulent white floral archway and crystal chandelier reception dais.",
    alt: "Opulent white floral archway and crystal chandelier wedding reception stage",
    aspectRatio: "tall",
    relatedProjectId: "the-regal-jasmine",
  },
  {
    id: "gal-2",
    title: "Al Fresco Celebration Under Fairy Lights",
    category: "Others",
    categoryLabel: "OTHERS",
    src: outdoorNight,
    location: "Goa",
    date: "22 Jul 2023",
    caption: "Al fresco evening banquet with warm fairy lights strung across mature trees.",
    alt: "Al fresco evening banquet with warm fairy lights strung across trees",
    aspectRatio: "wide",
    relatedProjectId: "an-evening-to-remember",
  },
  {
    id: "gal-3",
    title: "Blush Garden Rose & Eucalyptus Centerpiece",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: tableCenterpiece,
    location: "Mumbai",
    date: "14 Feb 2024",
    caption: "Artisanal floral centerpiece of garden roses and eucalyptus with crystal stemware.",
    alt: "Close-up of white and blush garden rose centerpiece on elegant dinner table",
    aspectRatio: "landscape",
  },
  {
    id: "gal-4",
    title: "Little Moments, Big Smiles",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    src: birthday,
    location: "Pune",
    date: "08 Sep 2023",
    caption: "Whimsical pastel balloon arch with custom neon backdrop and pedestal cake table.",
    alt: "Pastel balloon arch with Happy Birthday sign and dessert table",
    aspectRatio: "landscape",
    relatedProjectId: "little-moments-big-smiles",
  },
  {
    id: "gal-5",
    title: "Better Together Leadership Summit",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: corporateStage,
    location: "Mumbai",
    date: "15 Oct 2023",
    caption: "Corporate gala ballroom stage with royal blue LED screen displaying Better Together.",
    alt: "Corporate gala ballroom stage with royal blue LED screen displaying Better Together",
    aspectRatio: "landscape",
    relatedProjectId: "elegant-and-professional",
  },
  {
    id: "gal-6",
    title: "Intimate Candlelit Table 12",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: tableTwelve,
    location: "Mysuru",
    date: "04 May 2023",
    caption:
      "Heritage dining table setting with golden framed table marker and warm votive candles.",
    alt: "Intimate wedding table with framed gold table number 12 and peach roses",
    aspectRatio: "landscape",
    relatedProjectId: "timeless-elegance",
  },
  {
    id: "gal-7",
    title: "Love in Every Detail - Neon Floral Arch",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: neonBetterTogether,
    location: "Chennai",
    date: "17 Jun 2023",
    caption: "Circular floral arch with glowing Better Together neon sign and tufted loveseat.",
    alt: "Circular floral arch with glowing Better Together neon sign and tufted loveseat",
    aspectRatio: "landscape",
    relatedProjectId: "love-in-every-detail",
  },
  {
    id: "gal-8",
    title: "Starlight Pool Reflection & Draped Pavilion",
    category: "Others",
    categoryLabel: "OTHERS",
    src: poolEvening,
    location: "Udaipur",
    date: "24 Feb 2024",
    caption:
      "Luxury resort reflection pool at night with floating candle lanterns and illuminated draped pavilion.",
    alt: "Luxury resort reflection pool at night with floating candle lanterns and illuminated draped pavilion",
    aspectRatio: "landscape",
  },

  // --- ADDITIONAL CURATED ITEMS TO COMPLETE THE CATEGORY DISTRIBUTION ---
  // (Weddings: 15 more = 18 total)
  {
    id: "gal-w4",
    title: "White Jasmine & Mogra Wedding Mandap",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: mandap,
    location: "Bengaluru",
    date: "18 Mar 2023",
    caption: "Royal ceremonial mandap adorned with fragrant jasmine and mogra garlands.",
    alt: "Traditional wedding mandap with white florals and gold pillars",
  },
  {
    id: "gal-w5",
    title: "Candlelit Garden Silver Reception",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: anniversary,
    location: "Udaipur",
    date: "05 Nov 2023",
    caption: "Romantic evening garden wedding reception table with crystal candelabras.",
    alt: "Candlelit garden wedding reception table",
  },
  {
    id: "gal-w6",
    title: "Candlelit Floral Entrance Walkway",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: entrance,
    location: "Jaipur",
    date: "21 Dec 2023",
    caption: "Dramatic floral archway and candlelit lanterns leading to the ceremony.",
    alt: "Floral wedding entrance walkway lined with candles",
  },
  {
    id: "gal-w7",
    title: "Grand Ballroom Chandelier Stage",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: hero,
    location: "Delhi",
    date: "14 Jan 2024",
    caption: "Majestic indoor ballroom wedding setup with crystal chandeliers and floral arches.",
    alt: "Grand ballroom wedding stage with chandeliers",
  },
  {
    id: "gal-w8",
    title: "Ivory Garden Rose & Crystal Tablescape",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: tableCenterpiece,
    location: "Mumbai",
    date: "02 Feb 2024",
    caption: "Lush botanical floral arrangement with gold rimmed porcelain.",
    alt: "Ivory rose centerpiece on wedding dining table",
  },
  {
    id: "gal-w9",
    title: "Candlelit Banquet Place Setting",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: tableTwelve,
    location: "Hyderabad",
    date: "19 Nov 2023",
    caption: "Refined tablescape styling with custom place cards and vintage glassware.",
    alt: "Refined wedding tablescape with candlelight",
  },
  {
    id: "gal-w10",
    title: "Regal Floral Canopy Stage",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: heroStage,
    location: "Chennai",
    date: "08 Dec 2023",
    caption: "Grand floral archway with cascading wisteria and glowing dais reflections.",
    alt: "Floral canopy wedding stage",
  },
  {
    id: "gal-w11",
    title: "Lotus Heritage Wedding Mandap",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: mandap,
    location: "Kochi",
    date: "27 Jan 2024",
    caption: "Carved wooden pillars draped with marigold and tuberose garlands.",
    alt: "Lotus heritage wedding mandap",
  },
  {
    id: "gal-w12",
    title: "Tuscan Courtyard Reception Dinner",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: anniversary,
    location: "Goa",
    date: "11 Feb 2024",
    caption: "Courtyard dining under twinkling fairy lights and olive branch centerpieces.",
    alt: "Tuscan courtyard wedding dinner",
  },
  {
    id: "gal-w13",
    title: "Marigold & Tuberose Aisle Walkway",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: entrance,
    location: "Kolkata",
    date: "16 Nov 2023",
    caption: "Fragrant floral aisle with brass oil lamps and soft candle lanterns.",
    alt: "Marigold and tuberose wedding aisle",
  },
  {
    id: "gal-w14",
    title: "Gilded Botanical Dining Centerpiece",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: tableCenterpiece,
    location: "Pune",
    date: "03 Dec 2023",
    caption: "Artisan floral bouquet paired with cut crystal goblets and candlelight.",
    alt: "Gilded botanical dining centerpiece",
  },
  {
    id: "gal-w15",
    title: "Evening Palace Floral Pavilion",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: heroStage,
    location: "Jaipur",
    date: "20 Jan 2024",
    caption: "Royal palace wedding reception with floral archways and candlelit steps.",
    alt: "Palace wedding floral pavilion",
  },
  {
    id: "gal-w16",
    title: "Heritage Carved Jasmine Mandap",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: mandap,
    location: "Ahmedabad",
    date: "09 Feb 2024",
    caption: "Authentic Gujarati carved mandap surrounded by brass urulis with floating blossoms.",
    alt: "Heritage carved jasmine mandap",
  },
  {
    id: "gal-w17",
    title: "Midnight Rose Terrace Dinner",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: anniversary,
    location: "Bengaluru",
    date: "14 Feb 2024",
    caption: "Terrace banquet with rich velvet linens and glowing floral candelabras.",
    alt: "Midnight rose terrace dinner",
  },
  {
    id: "gal-w18",
    title: "Fairytale Fairy Light Tunnel",
    category: "Weddings",
    categoryLabel: "WEDDING",
    src: entrance,
    location: "Mumbai",
    date: "28 Feb 2024",
    caption: "Illuminated floral pergola creating an enchanting guest welcome.",
    alt: "Fairytale fairy light tunnel",
  },

  // (Engagements: 9 more = 10 total)
  {
    id: "gal-e2",
    title: "Sunlit Marigold Courtyard",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: haldi,
    location: "Bengaluru",
    date: "28 Nov 2023",
    caption: "Radiant yellow marigold setup for a sunlit pre-wedding celebration.",
    alt: "Sunlit marigold courtyard pre-wedding setup",
  },
  {
    id: "gal-e3",
    title: "Pastel Blossom Garden Setup",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: babyshower,
    location: "Chennai",
    date: "17 Jun 2023",
    caption: "Blush florals, flowing fabrics, and vintage garden seating.",
    alt: "Pastel blossom garden engagement setup",
  },
  {
    id: "gal-e4",
    title: "Bespoke Neon Photo Lounge",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: neonBetterTogether,
    location: "Mumbai",
    date: "12 Oct 2023",
    caption: "Interactive couple photo lounge with custom warm neon script and garden roses.",
    alt: "Bespoke neon photo lounge",
  },
  {
    id: "gal-e5",
    title: "Turmeric & Brass Ritual Setup",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: haldi,
    location: "Jaipur",
    date: "04 Dec 2023",
    caption: "Traditional brass vessels, marigold garlands, and cushioned floor seating.",
    alt: "Turmeric and brass pre-wedding ritual setup",
  },
  {
    id: "gal-e6",
    title: "Sangeet Lantern Pathway",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: entrance,
    location: "Goa",
    date: "18 Nov 2023",
    caption: "Atmospheric lantern pathway welcoming guests to an evening Sangeet.",
    alt: "Sangeet lantern pathway",
  },
  {
    id: "gal-e7",
    title: "Ring Ceremony Candlelit Lounge",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: anniversary,
    location: "Delhi",
    date: "22 Jan 2024",
    caption: "Sophisticated ring exchange lounge with romantic ambient illumination.",
    alt: "Ring ceremony candlelit lounge",
  },
  {
    id: "gal-e8",
    title: "Rose Gold Engagement Arch",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: babyshower,
    location: "Hyderabad",
    date: "07 Jan 2024",
    caption: "Delicate botanical archway styled with champagne and rose gold accents.",
    alt: "Rose gold engagement arch",
  },
  {
    id: "gal-e9",
    title: "Courtyard Marigold Canopy",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: haldi,
    location: "Pune",
    date: "15 Jan 2024",
    caption: "Festive floral ceiling with hanging marigold tassels and brass bells.",
    alt: "Courtyard marigold canopy",
  },
  {
    id: "gal-e10",
    title: "Twilight Floral Photo Studio",
    category: "Engagements",
    categoryLabel: "ENGAGEMENT",
    src: neonBetterTogether,
    location: "Bengaluru",
    date: "26 Feb 2024",
    caption: "Lush circular photo frame with glowing neon for unforgettable guest portraits.",
    alt: "Twilight floral photo studio",
  },

  // (Corporate Events: 7 more = 8 total)
  {
    id: "gal-c2",
    title: "Annual Executive Gala Dinner",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: corporate,
    location: "Mumbai",
    date: "15 Oct 2023",
    caption: "Executive banquet styling with tall floral centerpieces and crystal chandeliers.",
    alt: "Executive gala banquet hall setup",
  },
  {
    id: "gal-c3",
    title: "Tech Innovation Summit Keynote",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: corporateStage,
    location: "Bengaluru",
    date: "10 Nov 2023",
    caption: "High-tech curved LED screen with bespoke stage lighting and speaker podiums.",
    alt: "Tech innovation summit keynote stage",
  },
  {
    id: "gal-c4",
    title: "International Leadership Ballroom",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: hero,
    location: "Delhi",
    date: "05 Dec 2023",
    caption: "Grand ballroom setup for a global leadership conclave and awards evening.",
    alt: "International leadership ballroom setup",
  },
  {
    id: "gal-c5",
    title: "Award Night Crystal Banquet",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: corporate,
    location: "Hyderabad",
    date: "18 Jan 2024",
    caption: "Gleaming round banquet tables styled with gold accents and ambient downlights.",
    alt: "Award night crystal banquet tables",
  },
  {
    id: "gal-c6",
    title: "VIP Executive Round Tables",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: tableTwelve,
    location: "Mumbai",
    date: "25 Jan 2024",
    caption: "Intimate VIP dining tables with personalized stationery and warm votives.",
    alt: "VIP executive round table place setting",
  },
  {
    id: "gal-c7",
    title: "Global Partners Stage Setup",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: corporateStage,
    location: "Bengaluru",
    date: "12 Feb 2024",
    caption: "Wide perspective of plenary auditorium with professional stage architecture.",
    alt: "Global partners stage setup",
  },
  {
    id: "gal-c8",
    title: "Executive Dining Centerpiece",
    category: "Corporate Events",
    categoryLabel: "CORPORATE EVENT",
    src: tableCenterpiece,
    location: "Pune",
    date: "20 Feb 2024",
    caption: "Understated luxury floral centerpiece for boardroom executive dinners.",
    alt: "Executive dining floral centerpiece",
  },

  // (Birthdays: 5 more = 6 total)
  {
    id: "gal-b2",
    title: "Enchanted Garden Milestone Birthday",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    src: birthday,
    location: "Mumbai",
    date: "19 Oct 2023",
    caption: "Pastel balloon arches and floral backdrops styled for a memorable milestone.",
    alt: "Enchanted garden milestone birthday backdrop",
  },
  {
    id: "gal-b3",
    title: "Pastel Whispers First Birthday",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    src: babyshower,
    location: "Pune",
    date: "14 Nov 2023",
    caption: "Soft blush and sage green botanical setup with custom dessert stands.",
    alt: "Pastel whispers first birthday setup",
  },
  {
    id: "gal-b4",
    title: "Gilded Golden Jubilee Celebration",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    src: birthday,
    location: "Bengaluru",
    date: "02 Dec 2023",
    caption: "Golden accents, organic balloon installations, and custom cake pedestals.",
    alt: "Golden jubilee birthday celebration",
  },
  {
    id: "gal-b5",
    title: "Sweet Sixteen Floral Dining",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    src: tableCenterpiece,
    location: "Delhi",
    date: "18 Jan 2024",
    caption: "Chic floral tablescape with pastel roses and shimmering crystal glassware.",
    alt: "Sweet sixteen floral dinner table",
  },
  {
    id: "gal-b6",
    title: "Dreamy Cloud & Star Celebration",
    category: "Birthdays",
    categoryLabel: "BIRTHDAY",
    src: birthday,
    location: "Hyderabad",
    date: "10 Feb 2024",
    caption: "Whimsical pastel balloon installation with glowing custom neon sign.",
    alt: "Dreamy cloud birthday balloon setup",
  },

  // (Others: 4 more = 6 total)
  {
    id: "gal-o3",
    title: "Twilight Estate Garden Soirée",
    category: "Others",
    categoryLabel: "OTHERS",
    src: outdoorNight,
    location: "Goa",
    date: "12 Dec 2023",
    caption: "Private villa garden party under a canopy of starlight fairy bulbs.",
    alt: "Twilight estate garden party under fairy lights",
  },
  {
    id: "gal-o4",
    title: "Lakeside Lantern Ceremony",
    category: "Others",
    categoryLabel: "OTHERS",
    src: poolEvening,
    location: "Udaipur",
    date: "08 Jan 2024",
    caption: "Illuminated floating lanterns on lake waters with palace backdrop.",
    alt: "Lakeside lantern ceremony at night",
  },
  {
    id: "gal-o5",
    title: "Private Estate Illumination",
    category: "Others",
    categoryLabel: "OTHERS",
    src: entrance,
    location: "Alibaug",
    date: "29 Jan 2024",
    caption: "Architectural tree lighting and lantern pathway for an intimate evening.",
    alt: "Private estate tree lighting and lantern walkway",
  },
  {
    id: "gal-o6",
    title: "Moonlit Vineyard Celebration",
    category: "Others",
    categoryLabel: "OTHERS",
    src: anniversary,
    location: "Nashik",
    date: "17 Feb 2024",
    caption: "Vineyard long-table dinner with rustic wood tables and warm candlelight.",
    alt: "Moonlit vineyard long table dinner",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  text: string;
  featured?: boolean;
  tag?: string;
  highlights?: string[];
}

export const services: ServiceItem[] = [
  {
    id: "01",
    title: "Wedding Planning & Decoration",
    category: "Weddings",
    image: mandap,
    featured: true,
    tag: "Signature Expertise",
    text: "Complete end-to-end wedding design, majestic mandaps, royal reception stages, ethereal floral aisles, and bespoke ambient lighting orchestrated for unforgettable moments.",
    highlights: [
      "Custom Mandap Architecture & Stage Styling",
      "Fresh Exotic Floral Sculptures & Ceilings",
      "Atmospheric Lighting & Mood Coordination",
      "Full Hospitality & Day-of Ceremony Direction",
    ],
  },
  {
    id: "02",
    title: "Birthday Celebrations",
    category: "Birthdays",
    image: birthday,
    text: "Milestone birthdays, themed luxury celebrations, and intimate soirees — featuring bespoke backdrops, organic balloon art, and curated table scapes.",
    highlights: [
      "Custom Neon & Floral Backdrops",
      "Themed Dessert & Cake Tables",
      "Ambient Lighting",
    ],
  },
  {
    id: "03",
    title: "Engagements & Pre-Wedding",
    category: "Engagements & Pre-Wedding",
    image: haldi,
    text: "Radiant haldi, mehendi, and sangeet affairs infused with marigold drapery, authentic brass accents, and cheerful, photogenic family spaces.",
    highlights: [
      "Vibrant Floral Installations",
      "Low Seating & Traditional Lounges",
      "Sangeet Stage Styling",
    ],
  },
  {
    id: "04",
    title: "Anniversary Celebrations",
    category: "Anniversaries",
    image: anniversary,
    text: "Candlelit dinners, vow renewal gatherings, and milestone celebrations styled with cascading garden roses, warm luminance, and refined romance.",
    highlights: ["Romantic Canopy Styling", "Fine Dining Table Curation", "Personalized Keepsakes"],
  },
  {
    id: "05",
    title: "Baby Showers & Naming Ceremonies",
    category: "Baby Showers & Naming Ceremonies",
    image: babyshower,
    text: "Soft botanical palettes, airy drapery, neutral floral arrangements, and serene celebratory setups designed to welcome new beginnings.",
    highlights: ["Botanical Photo Backdrops", "Pastel Balloon Ensembles", "Naming Cradle Styling"],
  },
  {
    id: "06",
    title: "Traditional & Cultural Events",
    category: "Traditional & Cultural Events",
    image: entrance,
    text: "Housewarmings, heritage rituals, and religious ceremonies styled with cultural thoughtfulness, fresh jasmine hangings, and handcrafted brass details.",
    highlights: [
      "Traditional Toran & Rangoli Work",
      "Auspicious Floral Altars",
      "Heritage Brass Elements",
    ],
  },
  {
    id: "07",
    title: "Corporate & Private Events",
    category: "Corporate & Private Events",
    image: corporate,
    text: "Executive galas, milestone brand launches, and refined private gatherings executed with sophisticated aesthetics, seamless poise, and brand harmony.",
    highlights: [
      "VIP Banquet & Stage Staging",
      "Architectural Light Rigging",
      "Sophisticated Brand Tone",
    ],
  },
  {
    id: "08",
    title: "Bespoke Venue Decor & Styling",
    category: "Custom Decor",
    image: hero,
    text: "Site-specific grand entryways, dramatic tunnel lights, sculptural foliage installations, and bespoke furniture suites for venues of any scale.",
    highlights: [
      "Floral Archways & Walkways",
      "Custom Furniture Lounges",
      "Statement Centerpieces",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  date?: string;
  location?: string;
  description: string;
  theme: string;
  style: string;
  palette: string;
  services: string[];
  cover: string;
  gallery: string[];
  featured: boolean;
  order: number;
};

export const projects: Project[] = [
  {
    slug: "royal-palace-wedding",
    title: "The Regal Jasmine & Rose Wedding",
    category: "Weddings",
    type: "Multi-Day Wedding",
    location: "Udaipur Palace Courtyard",
    date: "Winter Celebration",
    description:
      "An opulent yet intimate celebration featuring fragrant mogra mandaps, candlelit reflection pools, and handcrafted velvet drapery under the stars.",
    theme: "Royal Indian Romance",
    style: "Architectural floral mandap with soft candle glow",
    palette: "Champagne gold, ivory, deep burgundy, and vintage brass",
    services: [
      "Complete Venue Styling",
      "Floral Architecture",
      "Bespoke Lighting Design",
      "Hospitality Flow",
    ],
    cover: hero,
    gallery: [hero, mandap, entrance],
    featured: true,
    order: 1,
  },
  {
    slug: "sunlit-marigold-haldi",
    title: "A Sunlit Marigold Haldi & Mehendi",
    category: "Engagements & Pre-Wedding",
    type: "Pre-Wedding Festival",
    location: "Heritage Villa Lawns",
    date: "Spring Morning",
    description:
      "A joyful courtyard celebration layered with suspended marigold tassels, authentic brass urlis filled with rose petals, and comfortable block-printed low seating.",
    theme: "Courtyard Festivity",
    style: "Organic marigolds and brass accents",
    palette: "Saffron yellow, terracotta, antique brass, and fresh jasmine",
    services: ["Ceremony Staging", "Floral Drapery", "Guest Seating Zones"],
    cover: haldi,
    gallery: [haldi, entrance],
    featured: true,
    order: 2,
  },
  {
    slug: "secret-garden-anniversary",
    title: "An Intimate Candlelit Anniversary Soiree",
    category: "Anniversaries",
    type: "Private Dinner",
    location: "Private Estate Conservatory",
    date: "Autumn Evening",
    description:
      "A private dinner table beneath an arch of fairy lights and English roses, styled with crystal stemware, custom linen, and a gentle acoustic ambiance.",
    theme: "Secret Garden Romance",
    style: "European botanical and warm candlelight",
    palette: "Deep ruby, champagne, warm amber, and sage",
    services: ["Table Scape Curation", "Ambient Light Installation", "Floral Runner Styling"],
    cover: anniversary,
    gallery: [anniversary, entrance],
    featured: true,
    order: 3,
  },
  {
    slug: "ethereal-botanical-shower",
    title: "Ethereal Botanical Baby Shower",
    category: "Baby Showers & Naming Ceremonies",
    type: "Intimate Gathering",
    location: "Glasshouse Pavilions",
    date: "Summer Afternoon",
    description:
      "A serene, modern gathering in muted sage and cream, featuring fluffy pampas clouds, subtle peach blooms, and an artisan patisserie display.",
    theme: "Modern Botanical Bloom",
    style: "Minimalist organic styling",
    palette: "Sage green, warm ivory, soft peach, and natural wood",
    services: ["Backdrop Artistry", "Organic Balloon Sculptures", "Patisserie Display"],
    cover: babyshower,
    gallery: [babyshower, birthday],
    featured: true,
    order: 4,
  },
];

export const galleryCategories = [
  "All Celebrations",
  "Weddings",
  "Birthdays",
  "Engagements & Pre-Wedding",
  "Anniversaries",
  "Baby Showers & Naming Ceremonies",
  "Traditional & Cultural Events",
  "Corporate & Private Events",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  id: string;
  src: string;
  w: number;
  h: number;
  caption: string;
  category: GalleryCategory;
  tags?: string[];
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: hero,
    w: 1920,
    h: 1088,
    caption: "Royal Wedding Grand Stage & Reflection Lights",
    category: "Weddings",
    tags: ["Stage", "Lighting", "Luxury"],
  },
  {
    id: "g2",
    src: mandap,
    w: 896,
    h: 1152,
    caption: "White Jasmine & Mogra Wedding Mandap",
    category: "Weddings",
    tags: ["Mandap", "Ceremony", "Floral"],
  },
  {
    id: "g3",
    src: entrance,
    w: 896,
    h: 1152,
    caption: "Candlelit Floral Wedding Entrance Walkway",
    category: "Weddings",
    tags: ["Entrance", "Walkway", "Candles"],
  },
  {
    id: "g4",
    src: birthday,
    w: 896,
    h: 1152,
    caption: "Pastel Luxury Birthday Arch & Custom Stage",
    category: "Birthdays",
    tags: ["Pastel", "Balloons", "Stage"],
  },
  {
    id: "g5",
    src: anniversary,
    w: 896,
    h: 1152,
    caption: "Intimate Milestone Birthday Dinner Table",
    category: "Birthdays",
    tags: ["Dinner", "Private", "Candles"],
  },
  {
    id: "g6",
    src: haldi,
    w: 1152,
    h: 896,
    caption: "Sunlit Marigold Haldi Courtyard Setup",
    category: "Engagements & Pre-Wedding",
    tags: ["Haldi", "Marigolds", "Courtyard"],
  },
  {
    id: "g7",
    src: entrance,
    w: 896,
    h: 1152,
    caption: "Sangeet Night Tunnel of Lights & Blooms",
    category: "Engagements & Pre-Wedding",
    tags: ["Sangeet", "Lights", "Tunnel"],
  },
  {
    id: "g8",
    src: anniversary,
    w: 896,
    h: 1152,
    caption: "Candlelit Garden Silver Anniversary Dinner",
    category: "Anniversaries",
    tags: ["Candles", "Romantic", "Florals"],
  },
  {
    id: "g9",
    src: hero,
    w: 1920,
    h: 1088,
    caption: "Golden Jubilee Anniversary Ballroom Stage",
    category: "Anniversaries",
    tags: ["Golden Jubilee", "Stage", "Ballroom"],
  },
  {
    id: "g10",
    src: babyshower,
    w: 1152,
    h: 896,
    caption: "Sage & Ivory Botanical Baby Shower Pavilion",
    category: "Baby Showers & Naming Ceremonies",
    tags: ["Baby Shower", "Botanical", "Pastel"],
  },
  {
    id: "g11",
    src: birthday,
    w: 896,
    h: 1152,
    caption: "Floral Cradle & Blessing Ceremony Backdrop",
    category: "Baby Showers & Naming Ceremonies",
    tags: ["Naming Ceremony", "Cradle", "Floral"],
  },
  {
    id: "g12",
    src: mandap,
    w: 896,
    h: 1152,
    caption: "Traditional Puja & Griha Pravesh Floral Sanctuary",
    category: "Traditional & Cultural Events",
    tags: ["Puja", "Traditional", "Jasmine"],
  },
  {
    id: "g13",
    src: haldi,
    w: 1152,
    h: 896,
    caption: "Cultural Folk Celebration with Handcrafted Brass",
    category: "Traditional & Cultural Events",
    tags: ["Brass", "Heritage", "Ceremony"],
  },
  {
    id: "g14",
    src: corporate,
    w: 1152,
    h: 896,
    caption: "Annual Executive Gala Banquet & Stage Staging",
    category: "Corporate & Private Events",
    tags: ["Gala", "Executive", "Banquet"],
  },
  {
    id: "g15",
    src: entrance,
    w: 896,
    h: 1152,
    caption: "VIP Brand Launch Red Carpet Walkway",
    category: "Corporate & Private Events",
    tags: ["Brand Launch", "VIP", "Walkway"],
  },
];

// Preserved backwards compatibility
export const galleryFilters = galleryCategories;
export const gallery = galleryItems.map((g) => ({
  src: g.src,
  w: g.w,
  h: g.h,
  caption: g.caption,
  categories: [g.category, "All Events", "All Celebrations"],
}));

export const steps = [
  {
    n: "01",
    title: "Discovery & Vision",
    text: "We begin with a personal consultation to understand your unique story, aesthetic aspirations, venue parameters, and guest profile.",
  },
  {
    n: "02",
    title: "Curated Concept",
    text: "Our design team develops comprehensive spatial layout plans, color palettes, bespoke floral blueprints, and sensory lighting schemes.",
  },
  {
    n: "03",
    title: "Artisanal Execution",
    text: "We source premium botanical stems, fabricate bespoke stage elements, coordinate vendors, and craft the space with artisanal care.",
  },
  {
    n: "04",
    title: "Flawless Celebration",
    text: "On the day of your event, our production directors oversee every second so you and your guests can immerse in sheer joy.",
  },
];

export const reasons = [
  {
    title: "Bespoke Concept Design",
    text: "No cookie-cutter templates. Every celebration is an original piece of living art honoring your taste and traditions.",
  },
  {
    title: "Meticulous Attention to Detail",
    text: "From hand-tied napkin ribbons to architectural lighting angles, every millimeter is styled with deliberate elegance.",
  },
  {
    title: "Master Floral & Decor Artisans",
    text: "We collaborate with master florists and lighting designers who know how to transform raw halls into breathtaking environments.",
  },
  {
    title: "End-to-End Quiet Direction",
    text: "A single, dedicated concierge team orchestrating setup, timing, and transitions smoothly behind the scenes.",
  },
  {
    title: "Transparent & Flexible Curation",
    text: "We respect your investment, providing clear proposals and creative options designed to maximize visual and emotional impact.",
  },
  {
    title: "Unrivaled Guest Hospitality",
    text: "We craft environments where guests feel embraced, captivated, and thoroughly cared for from arrival to farewell.",
  },
];

export interface ClientTestimonial {
  name: string;
  event: string;
  location?: string;
  eventType?: string;
  quote: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export const clientTestimonials: ClientTestimonial[] = [
  {
    name: "Devina & Siddharth",
    event: "Palace Wedding, Udaipur",
    location: "Udaipur",
    eventType: "Luxury Wedding & Reception",
    quote:
      "Working with Aarav brought an ethereal dream to life. Walking into our mandap filled with fresh jasmine and soft candlelight took our breath away. Our families were completely spellbound by the warmth and care in every single detail.",
    image: heroStage,
    imageAlt: "Devina and Siddharth's palace wedding reception dais",
    featured: true,
  },
  {
    name: "Dr. Ananya Roy",
    event: "40th Milestone Birthday Gala",
    location: "Mumbai",
    eventType: "Private Milestone Gala",
    quote:
      "The sophistication, warmth, and attention to detail were unmatched. Aarav transformed our ballroom with such understated elegance. I was able to simply be present with my guests without worrying about a single coordination detail.",
    image: tableTwelve,
    imageAlt: "Dr. Ananya Roy's milestone gala dinner table setting",
    featured: false,
  },
  {
    name: "Rohan & Priyam Mehta",
    event: "Botanical Baby Shower",
    location: "Pune",
    eventType: "Botanical Garden Celebration",
    quote:
      "Every guest commented that it was the most elegant celebration they had ever witnessed. The delicate pastel florals, personalized touches, and seamless coordination made it an unforgettable afternoon.",
    image: babyshower,
    imageAlt: "Rohan and Priyam's botanical baby shower pavilion",
    featured: false,
  },
];

export const testimonials = clientTestimonials;

export const faqs = [
  {
    q: "What types of celebrations and events do you design?",
    a: "We specialize in luxury weddings (multi-day functions including Haldi, Mehendi, Sangeet, Mandap, and Receptions), milestone birthdays, romantic anniversaries, bespoke baby showers, traditional ceremonies, and high-end corporate galas.",
  },
  {
    q: "How early should we begin planning and booking our event?",
    a: "For weddings and peak festive dates, we recommend booking 4 to 9 months in advance to secure availability and allow ample time for bespoke production. For intimate celebrations, 3 to 6 weeks is ideal.",
  },
  {
    q: "Can we customize colors, themes, and design aesthetics?",
    a: "Completely. Every project begins with a blank canvas. We curate bespoke color palettes, 3D mood boards, custom stage fabrication, and specialized floral recipes tailored exclusively to your taste.",
  },
  {
    q: "Do you work with venues of our choice?",
    a: "Yes. We work at private estates, luxury hotels, heritage forts, farmhouses, convention ballrooms, and private residences, respecting each property's technical and acoustic guidelines.",
  },
  {
    q: "How does the direct WhatsApp consultation work?",
    a: "When you submit your preferences via our enquiry section, an organized summary is automatically generated into a direct WhatsApp message. Our principal designer will review your details and respond promptly.",
  },
  {
    q: "Do you handle complete event coordination or only decoration?",
    a: "We offer both. You can engage us strictly for decor styling & floral architecture, or for complete end-to-end event planning, guest experience curation, and timeline management.",
  },
  {
    q: "Can you accommodate multi-day destination wedding schedules?",
    a: "Yes. Our team frequently manages multi-day celebration itineraries with unique styling and distinct design personalities for every individual ceremony.",
  },
];

export const enquiryOptions = {
  eventTypes: [
    "Wedding & Reception",
    "Pre-Wedding (Haldi / Sangeet / Mehendi)",
    "Engagement Ceremony",
    "Milestone Birthday Celebration",
    "Anniversary Dinner or Gala",
    "Baby Shower & Naming Ceremony",
    "Traditional Ritual / Housewarming",
    "Corporate Gala & Brand Launch",
    "Bespoke Private Soiree",
  ],
  guests: [
    "Intimate (Under 50)",
    "50 – 150 guests",
    "150 – 350 guests",
    "350 – 600 guests",
    "Grand (600+ guests)",
    "Still finalising",
  ],
  budgets: [
    "Bespoke Intimate (₹1,00,000 – ₹3,00,000)",
    "Signature Celebration (₹3,00,000 – ₹7,50,000)",
    "Grand Luxury (₹7,50,000 – ₹20,00,000)",
    "Ultra Luxury Destination (₹20,00,000+)",
    "Open to Custom Discussion",
  ],
  services: [
    "Complete Event Planning",
    "Mandap & Ceremony Architecture",
    "Stage & Backdrop Curation",
    "Fresh Floral Design & Installations",
    "Ambient & Architectural Lighting",
    "Themed Table Scapes & Linen",
    "Entrance Arches & Floral Walkways",
    "Day-of Coordination & Production",
  ],
  sources: [
    "Instagram",
    "Personal Recommendation / Friend",
    "Venue Recommendation",
    "Google Search",
    "Attended an Aura Event",
    "Other",
  ],
};
