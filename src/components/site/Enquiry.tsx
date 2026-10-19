import { useState, type FormEvent } from "react";
import { business, enquiryOptions as o } from "@/config/site";
import { Reveal } from "./Reveal";

type Errors = Record<string, string>;
const field = "mt-2 w-full border-0 border-b bg-transparent px-0 py-2.5 text-base outline-none transition-colors focus:border-primary";
const label = "eyebrow text-muted-foreground";

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
    if (g("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g("email"))) err.email = "Please enter a valid email address.";
    if (!g("eventType")) err.eventType = "Please choose an event type.";
    if (!undecided && !g("date")) err.date = "Choose a date or mark it as not decided.";
    if (!g("city")) err.city = "Please enter the event city or location.";
    setErrors(err);
    setNotice("");
    if (Object.keys(err).length) return;

    if (!business.whatsapp) {
      setNotice("Thank you — the enquiry looks complete, but the WhatsApp contact number has not been configured yet. Please add it in the site settings.");
      return;
    }
    const msg = buildWhatsappMessage({
      Name: g("name"), Phone: g("phone"), Email: g("email"), "Event type": g("eventType"),
      Date: undecided ? "Not decided yet" : g("date"), Location: g("city"), Venue: g("venue"),
      Guests: g("guests"), Budget: g("budget"), Services: fd.getAll("services").map(String),
      Theme: g("theme"), Colours: g("colours"), Message: g("message"), "Heard via": g("source"),
    });
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  const Err = ({ k }: { k: string }) => (errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-xs text-destructive">{errors[k]}</p> : null);
  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <section id="contact" className="border-t bg-secondary py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-accent">Enquire</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Let's Create Something Beautiful</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">Tell us a little about your celebration. We'd love to hear your ideas and help you explore the possibilities.</p>
          <dl className="mt-10 space-y-5 border-t pt-8 text-sm">
            <div><dt className={label}>Phone</dt><dd className="mt-1">{business.phone || "To be added"}</dd></div>
            <div><dt className={label}>Email</dt><dd className="mt-1">{business.email || "To be added"}</dd></div>
            <div><dt className={label}>Service areas</dt><dd className="mt-1">{business.serviceLocations.join(", ")}</dd></div>
          </dl>
        </Reveal>

        <form noValidate onSubmit={onSubmit} className="grid gap-x-8 gap-y-8 bg-background p-6 sm:grid-cols-2 md:p-10 lg:col-span-8">
          <div><label htmlFor="name" className={label}>Full name *</label><input id="name" name="name" autoComplete="name" placeholder="Your name" className={field} {...a("name")} /><Err k="name" /></div>
          <div><label htmlFor="phone" className={label}>Phone number *</label><input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" className={field} {...a("phone")} /><Err k="phone" /></div>
          <div><label htmlFor="email" className={label}>Email</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} {...a("email")} /><Err k="email" /></div>
          <div><label htmlFor="eventType" className={label}>Event type *</label>
            <select id="eventType" name="eventType" defaultValue="" className={field} {...a("eventType")}><option value="" disabled>Select</option>{o.eventTypes.map((x) => <option key={x}>{x}</option>)}</select><Err k="eventType" /></div>
          <div><label htmlFor="date" className={label}>Preferred date *</label>
            <input id="date" name="date" type="date" disabled={undecided} className={field} {...a("date")} />
            <label className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={undecided} onChange={(e) => setUndecided(e.target.checked)} className="accent-primary" /> Date not decided yet</label><Err k="date" /></div>
          <div><label htmlFor="city" className={label}>Event location / city *</label><input id="city" name="city" placeholder="City" className={field} {...a("city")} /><Err k="city" /></div>
          <div><label htmlFor="venue" className={label}>Venue name</label><input id="venue" name="venue" placeholder="If known" className={field} /></div>
          <div><label htmlFor="guests" className={label}>Approx. guests</label>
            <select id="guests" name="guests" defaultValue="" className={field}><option value="">Select</option>{o.guests.map((x) => <option key={x}>{x}</option>)}</select></div>
          <div><label htmlFor="budget" className={label}>Estimated budget</label>
            <select id="budget" name="budget" defaultValue="" className={field}><option value="">Select</option>{o.budgets.map((x) => <option key={x}>{x}</option>)}</select></div>
          <div><label htmlFor="source" className={label}>How did you hear about us?</label>
            <select id="source" name="source" defaultValue="" className={field}><option value="">Select</option>{o.sources.map((x) => <option key={x}>{x}</option>)}</select></div>
          <fieldset className="sm:col-span-2"><legend className={label}>Services required</legend>
            <div className="mt-4 flex flex-wrap gap-2">{o.services.map((x) => (
              <label key={x} className="cursor-pointer border px-3 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground">
                <input type="checkbox" name="services" value={x} className="sr-only" />{x}</label>))}</div></fieldset>
          <div><label htmlFor="theme" className={label}>Decoration style / theme</label><input id="theme" name="theme" placeholder="e.g. Floral, traditional, minimal" className={field} /></div>
          <div><label htmlFor="colours" className={label}>Preferred colours</label><input id="colours" name="colours" placeholder="e.g. Ivory & gold" className={field} /></div>
          <div className="sm:col-span-2"><label htmlFor="message" className={label}>Additional requirements</label><textarea id="message" name="message" rows={3} placeholder="Tell us about your ideas" className={field} /></div>
          <div className="sm:col-span-2">
            <p className="text-xs leading-relaxed text-muted-foreground">Your details are used only to respond to your enquiry. Nothing is stored on this website — submitting opens a WhatsApp message you can review before sending.</p>
            <button type="submit" className="mt-6 w-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto">Send Enquiry via WhatsApp</button>
            {notice && <p role="status" className="mt-4 border-l-2 border-accent pl-4 text-sm">{notice}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
