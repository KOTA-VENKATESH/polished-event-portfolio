import { Link } from "@tanstack/react-router";
import { images } from "@/config/site";
import { ArrowRight, MessageSquare, Palette, ClipboardCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  stepLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  icon: typeof MessageSquare;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    stepLabel: "STEP 01",
    title: "Discover",
    description:
      "We begin with a conversation about your occasion, preferences, priorities, and the experience you want to create.",
    image: images.tableTwelve,
    imageAlt: "Intimate conversation and initial event concept setting",
    highlights: ["Personal Consultation", "Creative Vision", "Priority Mapping"],
    icon: MessageSquare,
  },
  {
    number: "02",
    stepLabel: "STEP 02",
    title: "Design",
    description:
      "Together, we shape the creative direction, colour palette, décor, atmosphere, and details that make the celebration feel personal.",
    image: images.tableCenterpiece,
    imageAlt: "Curated floral arrangements, colour palette, and styling samples",
    highlights: ["Floral Architecture", "Colour Palette", "Mood Boards"],
    icon: Palette,
  },
  {
    number: "03",
    stepLabel: "STEP 03",
    title: "Plan",
    description:
      "We organise the practical details, coordinate requirements, and prepare a clear plan for bringing the event together.",
    image: images.entrance,
    imageAlt: "Venue preparation, logistics mapping, and architectural walkway setup",
    highlights: ["Timeline Coordination", "Venue Logistics", "Precision Schedules"],
    icon: ClipboardCheck,
  },
  {
    number: "04",
    stepLabel: "STEP 04",
    title: "Celebrate",
    description:
      "On the day, I coordinate the agreed arrangements so everything comes together as smoothly as possible and you can focus on the people and moments that matter.",
    image: images.outdoorNight,
    imageAlt: "Illuminated evening celebration with guests enjoying the venue",
    highlights: ["On-Ground Direction", "Seamless Ambiance", "Pure Enjoyment"],
    icon: Sparkles,
  },
];

export function ProcessSection({
  id = "process",
  showCta = true,
}: {
  id?: string;
  showCta?: boolean;
}) {
  return (
    <section
      id={id}
      className="relative bg-[#2B0B10] pt-28 pb-24 sm:pt-32 sm:pb-32 text-rose selection:bg-champagne selection:text-burgundy scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background subtle botanical line art on the upper left margin */}
      <div className="pointer-events-none absolute left-0 top-36 hidden opacity-10 text-champagne lg:block">
        <svg
          viewBox="0 0 240 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[440px] w-auto"
          aria-hidden="true"
        >
          <path
            d="M30 20C70 80 120 180 90 280C80 320 50 360 30 380"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />
          <circle cx="90" cy="140" r="35" stroke="currentColor" strokeWidth="0.9" />
          <circle cx="90" cy="140" r="16" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="240" r="45" stroke="currentColor" strokeWidth="0.9" />
        </svg>
      </div>

      <div className="container-x relative z-10 max-w-[1240px]">
        {/* PAGE INTRODUCTION */}
        <div className="mb-16 border-b border-[#3A141A] pb-10 sm:mb-20">
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-champagne">
              THE APPROACH
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.25rem] leading-[1.18]">
              Thoughtfully Planned, Beautifully Delivered
            </h1>
            <p className="mt-4 max-w-[650px] font-sans text-base sm:text-[1.05rem] leading-[1.7] text-[#D3C2C2]/85">
              Every celebration begins with an idea. My process brings your vision to life through
              thoughtful conversations, creative planning, carefully considered details, and
              seamless execution.
            </p>
          </div>
        </div>

        {/* DESKTOP FOUR-STEP HORIZONTAL TIMELINE (lg screens) */}
        <div className="hidden lg:block relative mb-24">
          {/* Subtle horizontal champagne connector line behind markers */}
          <div
            className="absolute top-5 left-12 right-12 h-[1px] bg-gradient-to-r from-champagne/10 via-champagne/40 to-champagne/10"
            aria-hidden="true"
          />

          {/* 4 Evenly Spaced Columns */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col group">
                  {/* Numbered Marker Centered Over Connector */}
                  <div className="flex items-center justify-center">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-champagne/60 bg-[#2B0B10] shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-champagne">
                      <span className="font-mono text-xs font-semibold tracking-wider text-champagne">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Supporting Event Photograph */}
                  <div className="mt-8 overflow-hidden rounded-[2px] border border-[#3A141A] bg-[#180407] shadow-md transition-all duration-500 group-hover:border-champagne/60 group-hover:shadow-xl group-hover:shadow-black/50">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2B0B10]/40 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Step Title & Content */}
                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-champagne" />
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne">
                        {step.stepLabel}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl text-ivory tracking-tight transition-colors group-hover:text-champagne">
                      {step.title}
                    </h2>

                    <p className="font-sans text-sm leading-relaxed text-[#D3C2C2]/85">
                      {step.description}
                    </p>

                    {/* Subtle highlights */}
                    <div className="mt-3 pt-3 border-t border-[#3A141A]/60 flex flex-wrap gap-1.5">
                      {step.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-[2px] bg-[#2D0D14] px-2 py-0.5 text-[10.5px] font-sans text-[#D3C2C2]/75 border border-[#3A141A]/80"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TABLET LAYOUT (md to lg: 2 columns per row) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-10 mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-[2px] border border-[#3A141A] bg-[#22070D]/80 p-6 shadow-md"
              >
                <div className="flex items-center justify-between border-b border-[#3A141A] pb-4">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-champagne" />
                    <span className="font-sans text-xs uppercase tracking-widest text-champagne font-semibold">
                      {step.stepLabel}
                    </span>
                  </div>
                  <span className="font-mono text-sm text-champagne font-semibold">
                    {step.number}
                  </span>
                </div>

                <div className="mt-4 aspect-[16/10] overflow-hidden rounded-[2px] border border-[#3A141A]">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h2 className="mt-4 font-serif text-2xl text-ivory">{step.title}</h2>
                <p className="mt-2 text-sm text-[#D3C2C2]/85 leading-relaxed">{step.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[#3A141A]/50">
                  {step.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-[2px] bg-[#180407] px-2 py-0.5 text-xs text-[#D3C2C2]/70 border border-[#3A141A]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE VERTICAL TIMELINE (< md) */}
        <div className="md:hidden relative mb-16 pl-6">
          {/* Continuous vertical connector line */}
          <div
            className="absolute left-3 top-3 bottom-3 w-[1px] bg-gradient-to-b from-champagne/40 via-champagne/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative pl-6">
                  {/* Numbered circular node anchored on the vertical line */}
                  <div className="absolute -left-[1.375rem] top-0 flex h-7 w-7 items-center justify-center rounded-full border border-champagne/70 bg-[#2B0B10] shadow-md">
                    <span className="font-mono text-[10px] font-semibold text-champagne">
                      {step.number}
                    </span>
                  </div>

                  <div className="rounded-[2px] border border-[#3A141A] bg-[#22070D]/90 p-5 shadow-lg">
                    <div className="flex items-center gap-2 text-champagne mb-1.5">
                      <Icon className="h-3.5 w-3.5" />
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest">
                        {step.stepLabel}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl text-ivory">{step.title}</h2>

                    <div className="mt-3 aspect-[16/10] overflow-hidden rounded-[2px] border border-[#3A141A]">
                      <img
                        src={step.image}
                        alt={step.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <p className="mt-3 text-sm text-[#D3C2C2]/85 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-[#3A141A]/50">
                      {step.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-[2px] bg-[#180407] px-2 py-0.5 text-[10.5px] text-[#D3C2C2]/70 border border-[#3A141A]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. CLOSING CALL TO ACTION (OPTIONAL) */}
        {showCta && (
          <div className="border border-[#3A141A] bg-[#22070D]/90 p-8 sm:p-12 text-center rounded-[2px] shadow-2xl relative overflow-hidden">
            {/* Subtle gold glow behind CTA */}
            <div className="absolute inset-0 bg-radial from-champagne/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory tracking-tight">
                Let's Create Something Meaningful
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#D3C2C2]/85 leading-relaxed">
                Have an idea for your next celebration? I'd love to hear about it.
              </p>
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) {
                      const prefersReducedMotion =
                        typeof window !== "undefined" &&
                        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                      el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                      window.history.pushState(null, "", "#contact");
                    }
                  }}
                  className="group inline-flex items-center gap-2.5 rounded-[2px] bg-[#F3E0C5] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#2B0B10] shadow-lg transition-all duration-300 hover:bg-champagne hover:shadow-champagne/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer"
                >
                  <span>Let's Talk About Your Event</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
