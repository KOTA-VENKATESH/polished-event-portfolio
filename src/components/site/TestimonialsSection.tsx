import { Link } from "@tanstack/react-router";
import { clientTestimonials, type ClientTestimonial } from "@/config/site";
import { ArrowRight, Quote } from "lucide-react";

export function TestimonialsSection({ id = "testimonials" }: { id?: string }) {
  const featured = clientTestimonials.find((t) => t.featured) || clientTestimonials[0];
  const supporting = clientTestimonials.filter((t) => t !== featured);

  return (
    <section
      id={id}
      aria-label="Testimonials and Final Call to Action"
      className="relative bg-[#2B0B10] pt-24 pb-24 sm:pt-32 sm:pb-32 text-rose selection:bg-champagne selection:text-burgundy scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Subtle botanical background watermark on right margin */}
      <div
        className="pointer-events-none absolute right-0 top-24 hidden opacity-10 text-champagne lg:block"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 240 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[460px] w-auto"
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
        {/* SECTION INTRODUCTION */}
        <div className="mb-14 border-b border-[#3A141A] pb-10 sm:mb-18">
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-champagne">
              KIND WORDS
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.25rem] leading-[1.18]">
              The Moments That Matter Most
            </h2>
            <p className="mt-4 max-w-[650px] font-sans text-base sm:text-[1.05rem] leading-[1.7] text-[#D3C2C2]/85">
              Every celebration is a collaboration. The most meaningful part of my work is knowing
              that the experience created together becomes a cherished memory.
            </p>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL BLOCK */}
        {featured && (
          <div className="relative mb-12 sm:mb-16 overflow-hidden rounded-[2px] border border-[#3A141A] bg-[#22070D]/85 p-8 sm:p-12 lg:p-16 shadow-xl transition-all duration-300 hover:border-champagne/40">
            {/* Subtle quotation glyph decoration */}
            <Quote
              className="absolute right-8 top-8 h-20 w-20 text-champagne/5 pointer-events-none sm:h-28 sm:w-28"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                FEATURED CELEBRATION
              </span>

              <blockquote className="mt-4 font-serif text-2xl sm:text-3xl lg:text-[2.1rem] leading-[1.45] text-ivory tracking-tight italic">
                “{featured.quote}”
              </blockquote>

              {/* Subtle Champagne Divider */}
              <div className="my-6 h-[1px] w-14 bg-champagne/60" aria-hidden="true" />

              {/* Attribution with Verified Photo */}
              <div className="flex items-center gap-4">
                {featured.image && (
                  <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-[2px] border border-champagne/40 shadow-sm">
                    <img
                      src={featured.image}
                      alt={featured.imageAlt || featured.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <cite className="not-italic font-serif text-lg text-ivory sm:text-xl font-medium block">
                    {featured.name}
                  </cite>
                  <p className="text-xs uppercase tracking-widest text-[#D3C2C2]/75 font-sans mt-0.5">
                    {featured.event}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BALANCED SUPPORTING TESTIMONIALS GRID */}
        {supporting.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {supporting.map((item) => (
              <div
                key={item.name}
                className="group relative flex flex-col justify-between rounded-[2px] border border-[#3A141A] bg-[#22070D]/70 p-7 sm:p-9 shadow-md transition-all duration-300 hover:border-champagne/50 hover:bg-[#250910]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#3A141A]/60">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne">
                      {item.eventType || "PRIVATE CELEBRATION"}
                    </span>
                    <span className="text-[11px] font-sans text-rose/60">{item.location}</span>
                  </div>

                  <blockquote className="mt-5 font-sans text-sm sm:text-[0.98rem] leading-[1.75] text-[#D3C2C2]/90 italic">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="mt-8 pt-5 border-t border-[#3A141A]/60 flex items-center gap-3.5">
                  {item.image && (
                    <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-[2px] border border-[#3A141A] group-hover:border-champagne/50 transition-colors">
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div>
                    <cite className="not-italic font-serif text-base text-ivory font-medium block">
                      {item.name}
                    </cite>
                    <p className="text-[11px] uppercase tracking-wider text-[#D3C2C2]/70 font-sans mt-0.5">
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* THIN CHAMPAGNE DIVIDER SEPARATING TESTIMONIALS AND FINAL CTA */}
        <div
          className="my-20 sm:my-28 h-[1px] w-full max-w-[1240px] mx-auto bg-gradient-to-r from-transparent via-champagne/40 to-transparent"
          aria-hidden="true"
        />

        {/* 5. FINAL CALL TO ACTION */}
        <div className="relative text-center max-w-2xl mx-auto px-4">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-champagne">
            YOUR NEXT CHAPTER
          </p>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.2] text-ivory tracking-tight">
            Let's Create Something Unforgettable
          </h2>

          <p className="mt-4 font-sans text-sm sm:text-base text-[#D3C2C2]/85 leading-relaxed max-w-xl mx-auto">
            Whether you're planning an intimate gathering or a grand celebration, I'd love to hear
            your ideas and explore how we can bring them to life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            {/* Primary Button */}
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
              <span>Plan Your Event</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Text Link */}
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("work");
                if (el) {
                  const prefersReducedMotion =
                    typeof window !== "undefined" &&
                    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                  el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
                  window.history.pushState(null, "", "#work");
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-champagne/90 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne underline underline-offset-8 decoration-champagne/50 hover:decoration-champagne cursor-pointer"
            >
              <span>Explore My Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
