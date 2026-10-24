import { useState, type FormEvent } from "react";
import { business, manager } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  vision: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function ContactSection({ id = "contact" }: { id?: string }) {
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    guestCount: "",
    vision: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const eventTypes = [
    "Wedding",
    "Engagement",
    "Pre-Wedding",
    "Birthday",
    "Anniversary",
    "Corporate Event",
    "Other",
  ];

  const guestCounts = ["Under 50", "50–100", "100–250", "250–500", "500+"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const err: FormErrors = {};

    if (!values.fullName.trim()) {
      err.fullName = "Please enter your full name.";
    }

    if (!values.email.trim()) {
      err.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      err.email = "Please enter a valid email address.";
    }

    if (!values.eventType) {
      err.eventType = "Please select an event type.";
    }

    if (!values.vision.trim()) {
      err.vision = "Please share a few details about your vision.";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...values });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setValues({
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      guestCount: "",
      vision: "",
    });
    setErrors({});
  };

  const openWhatsAppFallback = () => {
    if (!submittedData) return;
    const msg = [
      `Hello ${manager.name}, I would like to enquire about event management:`,
      `• Name: ${submittedData.fullName}`,
      `• Email: ${submittedData.email}`,
      submittedData.phone ? `• Phone: ${submittedData.phone}` : null,
      `• Event Type: ${submittedData.eventType}`,
      submittedData.eventDate ? `• Preferred Date: ${submittedData.eventDate}` : null,
      submittedData.location ? `• Location: ${submittedData.location}` : null,
      submittedData.guestCount ? `• Guests: ${submittedData.guestCount}` : null,
      `• Vision: ${submittedData.vision}`,
    ]
      .filter(Boolean)
      .join("\n");

    const phoneNum = business.whatsapp || "919876543210";
    window.open(
      `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id={id}
      className="relative min-h-screen bg-[#2B0B10] pt-28 pb-24 sm:pt-32 sm:pb-32 text-rose selection:bg-champagne selection:text-burgundy scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Decorative botanical art in background */}
      <div className="pointer-events-none absolute right-0 bottom-12 hidden opacity-10 text-champagne lg:block">
        <svg
          viewBox="0 0 240 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[480px] w-auto"
          aria-hidden="true"
        >
          <path
            d="M210 20C170 80 120 180 150 280C160 320 190 360 210 380"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />
          <circle cx="150" cy="140" r="35" stroke="currentColor" strokeWidth="0.9" />
          <circle cx="150" cy="140" r="16" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="190" cy="240" r="45" stroke="currentColor" strokeWidth="0.9" />
        </svg>
      </div>

      <div className="container-x relative z-10 max-w-[1240px]">
        {/* TWO-COLUMN EDITORIAL STRUCTURE (Desktop: ~45% Left / ~55% Right, Gap ~64px) */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: INTRODUCTION & CONTACT INFORMATION (~45%) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Editorial Heading Section */}
            <div>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-champagne">
                LET'S CONNECT
              </p>
              <h1 className="mt-3 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.25rem] leading-[1.15]">
                Let's Plan Something Beautiful Together
              </h1>
              <p className="mt-5 font-sans text-base sm:text-[1.05rem] leading-[1.7] text-[#D3C2C2]/90">
                Have an upcoming celebration or an idea you'd love to bring to life? Tell me a
                little about your plans. I'd love to hear your story and explore how we can make it
                memorable.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="border-t border-[#3A141A] pt-8 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-champagne/40 bg-[#2D0D14] p-2.5 text-champagne mt-0.5 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne/90 block">
                    Direct Line
                  </span>
                  <a
                    href={`tel:${business.phone.replace(/\s+/g, "")}`}
                    className="mt-0.5 inline-block font-sans text-sm sm:text-base font-medium text-ivory transition-colors hover:text-champagne"
                  >
                    {business.phone}
                  </a>
                  <p className="text-xs text-[#D3C2C2]/60 mt-0.5">
                    Available Mon–Sat for consultations
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-champagne/40 bg-[#2D0D14] p-2.5 text-champagne mt-0.5 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne/90 block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${business.email}`}
                    className="mt-0.5 inline-block font-sans text-sm sm:text-base font-medium text-ivory transition-colors hover:text-champagne"
                  >
                    {business.email}
                  </a>
                  <p className="text-xs text-[#D3C2C2]/60 mt-0.5">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-champagne/40 bg-[#2D0D14] p-2.5 text-champagne mt-0.5 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne/90 block">
                    Primary Service Locations
                  </span>
                  <p className="mt-0.5 font-sans text-sm text-ivory">
                    Hyderabad, Mumbai, Bengaluru, Goa, Udaipur & Global Destinations
                  </p>
                  <p className="text-xs text-[#D3C2C2]/60 mt-0.5">
                    Available for destination weddings & bespoke events
                  </p>
                </div>
              </div>

              {/* Instagram & Social */}
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-champagne/40 bg-[#2D0D14] p-2.5 text-champagne mt-0.5 shrink-0">
                  <Instagram className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne/90 block">
                    Follow Along
                  </span>
                  <a
                    href={business.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1.5 font-sans text-sm text-ivory transition-colors hover:text-champagne"
                  >
                    <span>@aaravkulkarni.events</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <p className="text-xs text-[#D3C2C2]/60 mt-0.5">
                    Behind-the-scenes & recent celebrations
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Note & Calligraphic Signature */}
            <div className="border-t border-[#3A141A] pt-8">
              <p className="font-serif italic text-lg text-ivory/90 leading-snug">
                &ldquo;Every event begins with a conversation. Let's make yours
                extraordinary.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-serif text-xl tracking-wider text-champagne">
                  Aarav Kulkarni
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D3C2C2]/60">
                  — Event Manager
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ENQUIRY FORM PANEL (~55%) */}
          <div className="lg:col-span-7">
            <div className="border border-[#3A141A] bg-[#22070D]/95 p-7 sm:p-10 shadow-2xl backdrop-blur-md">
              {!submittedData ? (
                <>
                  {/* Form Header */}
                  <div className="border-b border-[#3A141A] pb-6 mb-7">
                    <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-tight">
                      Tell Me About Your Event
                    </h2>
                    <p className="mt-1.5 font-sans text-xs sm:text-sm text-[#D3C2C2]/75">
                      Share a few details to help me understand your vision.
                    </p>
                  </div>

                  {/* Form Content */}
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                        >
                          Full Name <span className="text-champagne">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          autoComplete="name"
                          value={values.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Priya Sharma"
                          className={cn(
                            "w-full rounded-[2px] border bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory placeholder:text-[#D3C2C2]/35 outline-none transition-colors",
                            errors.fullName
                              ? "border-red-400/80 focus:border-red-400"
                              : "border-[#3A141A] focus:border-champagne focus:ring-1 focus:ring-champagne/40",
                          )}
                          aria-invalid={!!errors.fullName}
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        />
                        {errors.fullName && (
                          <p id="fullName-error" className="mt-1 text-[11px] text-red-300">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                        >
                          Email Address <span className="text-champagne">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="priya@example.com"
                          className={cn(
                            "w-full rounded-[2px] border bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory placeholder:text-[#D3C2C2]/35 outline-none transition-colors",
                            errors.email
                              ? "border-red-400/80 focus:border-red-400"
                              : "border-[#3A141A] focus:border-champagne focus:ring-1 focus:ring-champagne/40",
                          )}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-[11px] text-red-300">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Event Type */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                        >
                          Phone Number{" "}
                          <span className="text-xs text-[#D3C2C2]/40 lowercase">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-[2px] border border-[#3A141A] bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory placeholder:text-[#D3C2C2]/35 outline-none transition-colors focus:border-champagne focus:ring-1 focus:ring-champagne/40"
                        />
                      </div>

                      {/* Event Type */}
                      <div>
                        <label
                          htmlFor="eventType"
                          className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                        >
                          Event Type <span className="text-champagne">*</span>
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={values.eventType}
                          onChange={handleChange}
                          className={cn(
                            "w-full rounded-[2px] border bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory outline-none transition-colors",
                            errors.eventType
                              ? "border-red-400/80 focus:border-red-400"
                              : "border-[#3A141A] focus:border-champagne focus:ring-1 focus:ring-champagne/40",
                          )}
                          aria-invalid={!!errors.eventType}
                          aria-describedby={errors.eventType ? "eventType-error" : undefined}
                        >
                          <option value="" disabled className="bg-[#180407] text-[#D3C2C2]/50">
                            Select an event type...
                          </option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type} className="bg-[#2B0B10] text-ivory">
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.eventType && (
                          <p id="eventType-error" className="mt-1 text-[11px] text-red-300">
                            {errors.eventType}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Preferred Event Date & Location */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Preferred Event Date */}
                      <div>
                        <label
                          htmlFor="eventDate"
                          className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                        >
                          Preferred Date{" "}
                          <span className="text-xs text-[#D3C2C2]/40 lowercase">(optional)</span>
                        </label>
                        <input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={values.eventDate}
                          onChange={handleChange}
                          className="w-full rounded-[2px] border border-[#3A141A] bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory placeholder:text-[#D3C2C2]/35 outline-none transition-colors focus:border-champagne focus:ring-1 focus:ring-champagne/40 [color-scheme:dark]"
                        />
                      </div>

                      {/* Event Location */}
                      <div>
                        <label
                          htmlFor="location"
                          className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                        >
                          Event Location{" "}
                          <span className="text-xs text-[#D3C2C2]/40 lowercase">(optional)</span>
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          value={values.location}
                          onChange={handleChange}
                          placeholder="e.g. Hyderabad, Goa, etc."
                          className="w-full rounded-[2px] border border-[#3A141A] bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory placeholder:text-[#D3C2C2]/35 outline-none transition-colors focus:border-champagne focus:ring-1 focus:ring-champagne/40"
                        />
                      </div>
                    </div>

                    {/* Row 4: Estimated Guest Count */}
                    <div>
                      <label
                        htmlFor="guestCount"
                        className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                      >
                        Estimated Guest Count{" "}
                        <span className="text-xs text-[#D3C2C2]/40 lowercase">(optional)</span>
                      </label>
                      <select
                        id="guestCount"
                        name="guestCount"
                        value={values.guestCount}
                        onChange={handleChange}
                        className="w-full rounded-[2px] border border-[#3A141A] bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory outline-none transition-colors focus:border-champagne focus:ring-1 focus:ring-champagne/40"
                      >
                        <option value="" className="bg-[#180407] text-[#D3C2C2]/50">
                          Select estimated guests...
                        </option>
                        {guestCounts.map((count) => (
                          <option key={count} value={count} className="bg-[#2B0B10] text-ivory">
                            {count}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Row 5: Tell Me About Your Vision */}
                    <div>
                      <label
                        htmlFor="vision"
                        className="block font-sans text-xs font-medium uppercase tracking-wider text-[#D3C2C2]/85 mb-1.5"
                      >
                        Tell Me About Your Vision <span className="text-champagne">*</span>
                      </label>
                      <textarea
                        id="vision"
                        name="vision"
                        rows={4}
                        value={values.vision}
                        onChange={handleChange}
                        placeholder="Describe the atmosphere, styling, colour palette, venue, or special elements you have in mind..."
                        className={cn(
                          "w-full rounded-[2px] border bg-[#180407]/90 px-3.5 py-2.5 text-sm text-ivory placeholder:text-[#D3C2C2]/35 outline-none transition-colors resize-y min-h-[100px]",
                          errors.vision
                            ? "border-red-400/80 focus:border-red-400"
                            : "border-[#3A141A] focus:border-champagne focus:ring-1 focus:ring-champagne/40",
                        )}
                        aria-invalid={!!errors.vision}
                        aria-describedby={errors.vision ? "vision-error" : undefined}
                      />
                      {errors.vision && (
                        <p id="vision-error" className="mt-1 text-[11px] text-red-300">
                          {errors.vision}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-[2px] bg-[#F3E0C5] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#2B0B10] shadow-lg transition-all duration-300 hover:bg-champagne hover:shadow-champagne/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne disabled:opacity-60 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-[#2B0B10]" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Enquiry</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* SUCCESS & CONFIRMATION VIEW */
                <div className="py-6 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-champagne/40 bg-[#2D0D14] text-champagne shadow-md">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>

                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-champagne font-semibold block">
                      ENQUIRY VALIDATED & STAGED
                    </span>
                    <h2 className="mt-2 font-serif text-3xl text-ivory tracking-tight">
                      Thank You, {submittedData.fullName}!
                    </h2>
                    <p className="mt-3 font-sans text-sm text-[#D3C2C2]/85 max-w-md mx-auto leading-relaxed">
                      Your details for a{" "}
                      <span className="text-ivory font-medium">{submittedData.eventType}</span>{" "}
                      celebration have been validated. Please note: automated email transmission
                      backend is pending integration. For immediate response, please forward your
                      enquiry via WhatsApp below or reach Aarav directly.
                    </p>
                    <div className="mt-4 rounded border border-champagne/30 bg-[#2B0B10]/80 p-2.5 text-xs text-champagne/90 max-w-md mx-auto">
                      <span className="font-semibold uppercase tracking-wider text-[10px] block text-champagne">
                        System Status Note
                      </span>
                      Backend email provider connection pending. Form state is securely retained for
                      instant transfer.
                    </div>
                  </div>

                  {/* Direct WhatsApp Forwarding Option */}
                  <div className="border border-[#3A141A] bg-[#180407]/90 p-5 rounded-[2px] max-w-md mx-auto text-left space-y-3">
                    <div className="flex items-center gap-2 text-champagne text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Instant Coordination</span>
                    </div>
                    <p className="text-xs text-[#D3C2C2]/75 leading-relaxed">
                      Prefer immediate response? You can forward these exact event details straight
                      to Aarav&apos;s WhatsApp concierge now.
                    </p>
                    <button
                      type="button"
                      onClick={openWhatsAppFallback}
                      className="inline-flex w-full items-center justify-center gap-2 bg-[#2D0D14] border border-champagne/50 px-4 py-2.5 text-xs uppercase tracking-wider text-ivory font-medium rounded-[2px] hover:bg-champagne hover:text-burgundy transition-all"
                    >
                      <MessageCircle className="h-4 w-4 text-champagne" />
                      <span>Forward to WhatsApp →</span>
                    </button>
                  </div>

                  {/* Reset to send another */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-[#D3C2C2]/60 hover:text-ivory transition-colors underline underline-offset-4"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
