import { useState, type FormEvent } from "react";
import { business, enquiryOptions as o } from "@/config/site";
import { Reveal } from "./Reveal";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

type Errors = Record<string, string>;
const field =
  "mt-2 w-full border-0 border-b border-gold/30 bg-transparent px-0 py-2.5 text-base text-ivory placeholder:text-rose/35 outline-none transition-colors focus:border-gold";
const label = "eyebrow text-gold/80";

export function buildWhatsappMessage(data: Record<string, string | string[]>) {
  const lines = Object.entries(data)
    .filter(([, v]) => (Array.isArray(v) ? v.length : v))
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`);
  return `Hello ${business.name}, I'd like to enquire about an event.\n\n${lines.join("\n")}`;
}

export function Enquiry() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState("");
  const [undecided, setUndecided] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const g = (k: string) => String(fd.get(k) ?? "").trim();
    const err: Errors = {};
    if (!g("name")) err.name = "Please enter your full name.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(g("phone"))) err.phone = "Please enter a valid phone number.";
    if (g("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g("email")))
      err.email = "Please enter a valid email address.";
    if (!g("eventType")) err.eventType = "Please choose an event type.";
    if (!undecided && !g("date")) err.date = "Choose a date or mark it as not decided.";
    if (!g("city")) err.city = "Please enter the event city or location.";
    setErrors(err);
    setNotice("");
    if (Object.keys(err).length) return;

    if (!business.whatsapp) {
      setNotice(
        "The enquiry is complete. Please configure the WhatsApp contact number in the site settings.",
      );
      return;
    }
    const msg = buildWhatsappMessage({
      Name: g("name"),
      Phone: g("phone"),
      Email: g("email"),
      "Event type": g("eventType"),
      Date: undecided ? "Not decided yet" : g("date"),
      Location: g("city"),
      Venue: g("venue"),
      Guests: g("guests"),
      Budget: g("budget"),
      Services: fd.getAll("services").map(String),
      Theme: g("theme"),
      Colours: g("colours"),
      Message: g("message"),
      "Heard via": g("source"),
    });
    window.open(
      `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener",
    );
  };

  const Err = ({ k }: { k: string }) =>
    errors[k] ? (
      <p id={`${k}-err`} className="mt-1.5 text-xs text-red-300">
        {errors[k]}
      </p>
    ) : null;
  const a = (k: string) => ({
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
  });

  return (
    <section id="contact" className="border-t border-gold/20 bg-wine/60 py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-gold">Commission An Event</p>
          <h2 className="mt-4 text-4xl leading-tight text-ivory md:text-5xl">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="mt-6 leading-relaxed text-rose/85">
            Tell us a little about your envisioned celebration. We would be delighted to discuss
            possibilities, share spatial mood boards, and curate a bespoke proposal.
          </p>

          <dl className="mt-10 space-y-6 border-t border-gold/20 pt-8 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold mt-1" />
              <div>
                <dt className={label}>Direct Concierge</dt>
                <dd className="mt-1 text-ivory font-medium">
                  {business.phone || "Available on request"}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold mt-1" />
              <div>
                <dt className={label}>Electronic Inquiries</dt>
                <dd className="mt-1 text-ivory font-medium">
                  {business.email || "Available on request"}
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold mt-1" />
              <div>
                <dt className={label}>Key Service Destinations</dt>
                <dd className="mt-1 text-rose/90">{business.serviceLocations.join(" · ")}</dd>
              </div>
            </div>
          </dl>
        </Reveal>

        <form
          noValidate
          onSubmit={onSubmit}
          className="grid gap-x-8 gap-y-7 border border-gold/25 bg-wine-card/90 p-6 shadow-2xl backdrop-blur-md sm:grid-cols-2 md:p-10 lg:col-span-8"
        >
          <div>
            <label htmlFor="name" className={label}>
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="e.g. Priyam Roy"
              className={field}
              {...a("name")}
            />
            <Err k="name" />
          </div>

          <div>
            <label htmlFor="phone" className={label}>
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              className={field}
              {...a("phone")}
            />
            <Err k="phone" />
          </div>

          <div>
            <label htmlFor="email" className={label}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={field}
              {...a("email")}
            />
            <Err k="email" />
          </div>

          <div>
            <label htmlFor="eventType" className={label}>
              Event Type *
            </label>
            <select
              id="eventType"
              name="eventType"
              defaultValue=""
              className={field}
              {...a("eventType")}
            >
              <option value="" disabled className="bg-burgundy text-rose">
                Select occasion
              </option>
              {o.eventTypes.map((x) => (
                <option key={x} value={x} className="bg-burgundy text-ivory">
                  {x}
                </option>
              ))}
            </select>
            <Err k="eventType" />
          </div>

          <div>
            <label htmlFor="date" className={label}>
              Preferred Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              disabled={undecided}
              className={field}
              {...a("date")}
            />
            <label className="mt-2 flex items-center gap-2 text-xs text-rose/75 cursor-pointer">
              <input
                type="checkbox"
                checked={undecided}
                onChange={(e) => setUndecided(e.target.checked)}
                className="accent-[#C5A572]"
              />
              Date not decided yet
            </label>
            <Err k="date" />
          </div>

          <div>
            <label htmlFor="city" className={label}>
              Location / City *
            </label>
            <input
              id="city"
              name="city"
              placeholder="e.g. Udaipur, Mumbai, Goa"
              className={field}
              {...a("city")}
            />
            <Err k="city" />
          </div>

          <div>
            <label htmlFor="venue" className={label}>
              Venue Name (If Decided)
            </label>
            <input id="venue" name="venue" placeholder="e.g. The Leela Palace" className={field} />
          </div>

          <div>
            <label htmlFor="guests" className={label}>
              Approximate Guest Count
            </label>
            <select id="guests" name="guests" defaultValue="" className={field}>
              <option value="" className="bg-burgundy text-rose">
                Select guest range
              </option>
              {o.guests.map((x) => (
                <option key={x} value={x} className="bg-burgundy text-ivory">
                  {x}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className={label}>
              Estimated Investment Range
            </label>
            <select id="budget" name="budget" defaultValue="" className={field}>
              <option value="" className="bg-burgundy text-rose">
                Select budget range
              </option>
              {o.budgets.map((x) => (
                <option key={x} value={x} className="bg-burgundy text-ivory">
                  {x}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="source" className={label}>
              How Did You Discover Us?
            </label>
            <select id="source" name="source" defaultValue="" className={field}>
              <option value="" className="bg-burgundy text-rose">
                Select referral source
              </option>
              {o.sources.map((x) => (
                <option key={x} value={x} className="bg-burgundy text-ivory">
                  {x}
                </option>
              ))}
            </select>
          </div>

          <fieldset className="sm:col-span-2">
            <legend className={label}>Services Required</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {o.services.map((x) => (
                <label
                  key={x}
                  className="cursor-pointer border border-gold/30 bg-burgundy/50 px-3.5 py-2 text-xs uppercase tracking-wider text-rose/90 transition-all hover:border-gold/60 has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-burgundy has-[:checked]:font-semibold"
                >
                  <input type="checkbox" name="services" value={x} className="sr-only" />
                  {x}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="theme" className={label}>
              Aesthetic Style / Mood
            </label>
            <input
              id="theme"
              name="theme"
              placeholder="e.g. Royal Heritage, Parisian Garden, Minimalist"
              className={field}
            />
          </div>

          <div>
            <label htmlFor="colours" className={label}>
              Preferred Color Palette
            </label>
            <input
              id="colours"
              name="colours"
              placeholder="e.g. Burgundy, Champagne Gold, Ivory"
              className={field}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className={label}>
              Celebration Details &amp; Specific Ideas
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Tell us about your celebration, ceremonial timeline, or specific dreams..."
              className={field}
            />
          </div>

          <div className="sm:col-span-2 pt-2">
            <p className="text-xs leading-relaxed text-rose/60">
              Submitting opens a structured WhatsApp consultation message where you can review your
              details with our creative directors before sending.
            </p>
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 border border-gold bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-burgundy shadow-lg transition-all hover:bg-gold/90 hover:shadow-gold/20 sm:w-auto"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Send Enquiry via WhatsApp</span>
            </button>
            {notice && (
              <p role="status" className="mt-4 border-l-2 border-gold pl-4 text-sm text-gold">
                {notice}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
