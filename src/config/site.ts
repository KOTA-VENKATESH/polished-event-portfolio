/**
 * Single place to edit business details and portfolio content.
 * Replace every value marked "PLACEHOLDER" with the real information.
 * Theme colours live at the top of src/styles.css.
 */
import hero from "@/assets/hero.jpg";
import mandap from "@/assets/mandap.jpg";
import haldi from "@/assets/haldi.jpg";
import birthday from "@/assets/birthday.jpg";
import babyshower from "@/assets/babyshower.jpg";
import anniversary from "@/assets/anniversary.jpg";
import entrance from "@/assets/entrance.jpg";
import corporate from "@/assets/corporate.jpg";

export const images = { hero, mandap, haldi, birthday, babyshower, anniversary, entrance, corporate };

export const business = {
  name: "Your Brand Name", // PLACEHOLDER
  tagline: "Event Planning & Bespoke Decor",
  description:
    "Thoughtfully planned celebrations and bespoke decor for weddings, family occasions and private events.",
  serviceArea: "Serving your city & nearby regions", // PLACEHOLDER
  phone: "", // PLACEHOLDER e.g. "+91 90000 00000"
  whatsapp: "", // PLACEHOLDER digits only with country code, e.g. "919000000000"
  email: "", // PLACEHOLDER
  address: "", // PLACEHOLDER
  hours: "", // PLACEHOLDER
  serviceLocations: ["Add your service locations"], // PLACEHOLDER
  social: {
    instagram: "",
    facebook: "",
    pinterest: "",
    youtube: "",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { title: "Wedding Planning & Decoration", image: mandap, category: "Weddings",
    text: "Wedding stage design, ceremony and mandap decoration, reception styling, floral arrangements, entrance decor and complete venue styling." },
  { title: "Birthday Celebrations", image: birthday, category: "Birthdays",
    text: "Kids' birthdays, milestone celebrations and themed parties — balloon decor, backdrops, cake table styling and party setups." },
  { title: "Engagements & Pre-Wedding", image: haldi, category: "Haldi & Mehendi",
    text: "Engagement ceremonies, haldi, mehendi, sangeet and bridal showers, styled to feel joyful and personal." },
  { title: "Anniversary Celebrations", image: anniversary, category: "Anniversaries",
    text: "Romantic decor, intimate dinners, milestone anniversaries, personalised backdrops and floral styling." },
  { title: "Baby Showers & Naming Ceremonies", image: babyshower, category: "Baby Showers",
    text: "Elegant baby showers, traditional naming ceremonies and welcome-baby celebrations with customised themes." },
  { title: "Traditional & Cultural Events", image: mandap, category: "Traditional Events",
    text: "Housewarming ceremonies, family functions and religious celebrations with culturally thoughtful decoration." },
  { title: "Corporate & Private Events", image: corporate, category: "Corporate Events",
    text: "Corporate gatherings, launches and private parties with refined, professional event styling." },
  { title: "Custom Decoration", image: entrance, category: "Venue Decoration",
    text: "Personalised themes, floral installations, entrance arches, stage backdrops, table styling and lighting coordination." },
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

// Sample projects — illustrative only, replace with real completed events.
export const projects: Project[] = [
  { slug: "elegant-floral-wedding", title: "An Elegant Floral Wedding", category: "Wedding", type: "Reception",
    description: "A romantic celebration featuring delicate floral arrangements, a thoughtfully styled ceremony backdrop, and warm ambient lighting.",
    theme: "Timeless romance", style: "Classic floral with soft drapery", palette: "Ivory, blush, warm gold",
    services: ["Stage design", "Floral decoration", "Lighting & styling"], cover: hero, gallery: [hero, mandap, entrance], featured: true, order: 1 },
  { slug: "sunlit-haldi-morning", title: "A Sunlit Haldi Morning", category: "Haldi & Mehendi", type: "Pre-wedding",
    description: "A bright courtyard setting layered with marigold strings, brass accents and comfortable low seating for family.",
    theme: "Traditional courtyard", style: "Marigold & brass", palette: "Saffron, yellow, brass",
    services: ["Venue decoration", "Floral decoration", "Seating styling"], cover: haldi, gallery: [haldi, entrance], featured: true, order: 2 },
  { slug: "garden-anniversary-dinner", title: "An Intimate Garden Anniversary", category: "Anniversary", type: "Private dinner",
    description: "A candlelit table under a canopy of lights, styled with deep roses for a quiet evening celebration.",
    theme: "Candlelit garden", style: "Intimate & romantic", palette: "Deep red, blush, candlelight",
    services: ["Table styling", "Floral decoration", "Lighting"], cover: anniversary, gallery: [anniversary], featured: true, order: 3 },
  { slug: "baby-in-bloom", title: "Baby in Bloom", category: "Baby Shower", type: "Baby shower",
    description: "A soft, airy setup in sage and ivory with fresh blooms, pampas and a gentle balloon arch.",
    theme: "Garden fresh", style: "Neutral & botanical", palette: "Sage, ivory, sand",
    services: ["Backdrop design", "Table styling", "Balloon decor"], cover: babyshower, gallery: [babyshower], featured: true, order: 4 },
];

export const galleryFilters = [
  "All Events", "Weddings", "Birthdays", "Engagements", "Haldi & Mehendi", "Anniversaries",
  "Baby Showers", "Traditional Events", "Corporate Events", "Venue Decoration",
];

// Placeholder gallery — replace with real event photographs.
export const gallery = [
  { src: hero, w: 1920, h: 1088, caption: "Floral reception stage", categories: ["Weddings", "Venue Decoration"] },
  { src: mandap, w: 896, h: 1152, caption: "White jasmine mandap", categories: ["Weddings", "Traditional Events"] },
  { src: haldi, w: 1152, h: 896, caption: "Marigold haldi courtyard", categories: ["Haldi & Mehendi", "Engagements"] },
  { src: birthday, w: 896, h: 1152, caption: "Pastel birthday backdrop", categories: ["Birthdays"] },
  { src: anniversary, w: 896, h: 1152, caption: "Candlelit anniversary dinner", categories: ["Anniversaries"] },
  { src: babyshower, w: 1152, h: 896, caption: "Sage & ivory baby shower", categories: ["Baby Showers"] },
  { src: entrance, w: 896, h: 1152, caption: "Floral entrance walkway", categories: ["Venue Decoration", "Weddings", "Engagements"] },
  { src: corporate, w: 1152, h: 896, caption: "Banquet gala setup", categories: ["Corporate Events"] },
];

export const steps = [
  { n: "01", title: "Discover", text: "We understand your occasion, preferences, guest requirements, and vision." },
  { n: "02", title: "Plan", text: "We develop the event concept, decoration direction, schedule, and proposed arrangements." },
  { n: "03", title: "Create", text: "We coordinate the agreed details and bring the celebration to life." },
  { n: "04", title: "Celebrate", text: "We work to ensure the final setup feels thoughtful, welcoming, and ready for your special day." },
];

export const reasons = [
  { title: "Personalised concepts", text: "Every theme begins with your story, traditions and taste." },
  { title: "Attention to detail", text: "From the entrance to the last centrepiece, nothing is an afterthought." },
  { title: "Thoughtful styling", text: "Decor that feels considered and beautiful, never overdone." },
  { title: "Planning to execution", text: "One team coordinating the details from first call to final setup." },
  { title: "Flexible options", text: "Arrangements shaped around your occasion and your budget." },
  { title: "Guest experience", text: "Spaces designed for the people who will celebrate in them." },
];

// PLACEHOLDER testimonials — shown as sample content until real reviews are added.
export const testimonials = [
  { name: "Client name", event: "Wedding", quote: "Replace this with genuine feedback from a client. A short, specific quote about how their celebration felt works best." },
  { name: "Client name", event: "Birthday", quote: "Sample testimonial — add a real customer review here." },
  { name: "Client name", event: "Baby Shower", quote: "Sample testimonial — add a real customer review here." },
];

export const faqs = [
  { q: "What types of events do you organize?", a: "We plan and decorate weddings, engagements, pre-wedding functions, birthdays, anniversaries, baby showers, naming ceremonies, traditional events, and corporate or private gatherings." },
  { q: "How early should we book our event?", a: "We recommend reaching out as early as possible, especially for weddings and peak-season dates. Share your date and we'll let you know our availability." },
  { q: "Do you offer customized decoration themes?", a: "Yes. Each concept is developed around your preferences, the venue and the occasion." },
  { q: "Can we choose our own colors and decoration style?", a: "Absolutely. Your colour palette and style preferences guide the design direction." },
  { q: "Do you work at venues selected by the customer?", a: "Yes, we can work at the venue you choose, subject to the venue's guidelines." },
  { q: "Do you provide decoration packages?", a: "Please get in touch with your requirements and we'll share options suited to your event." },
  { q: "Can services be customized to our budget?", a: "We'll discuss your budget openly and suggest arrangements that make the most of it." },
  { q: "Which locations do you serve?", a: "Please see our service areas in the contact section, or ask us about your location." },
  { q: "How can we discuss our event requirements?", a: "Fill in the enquiry form below and it will open a WhatsApp conversation with your details, or contact us directly." },
  { q: "Do you handle multiple events and ceremonies during a wedding?", a: "Yes, we can plan and style multiple functions across a wedding — talk to us about your schedule." },
];

export const enquiryOptions = {
  eventTypes: ["Wedding", "Reception", "Engagement", "Haldi / Mehendi", "Birthday", "Anniversary", "Baby Shower", "Naming Ceremony", "Housewarming", "Corporate Event", "Other"],
  guests: ["Under 50", "50–100", "100–250", "250–500", "500+", "Not decided"],
  budgets: ["Under ₹50,000", "₹50,000 – ₹1,50,000", "₹1,50,000 – ₹5,00,000", "Above ₹5,00,000", "Prefer to discuss"],
  services: ["Complete Event Planning", "Venue Decoration", "Wedding Stage / Mandap", "Floral Decoration", "Birthday Decoration", "Entrance Decoration", "Lighting & Styling", "Custom Theme", "Other"],
  sources: ["Instagram", "Facebook", "Google", "Friend / Family", "Venue referral", "Other"],
};
