import { images, manager } from "@/config/site";

export function PersonalHero() {
  return (
    <div className="relative flex flex-col bg-[#2B0B10]">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[90svh] items-center overflow-hidden lg:min-h-[92svh]"
      >
        {/* RIGHT SIDE PHOTOGRAPHY WITH SEAMLESS GRADIENT FADE */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[60%]">
          <img
            src={images.hero}
            alt="Opulent floral wedding canopy stage with chandeliers and candlelit reflection floor"
            className="h-full w-full object-cover object-center lg:object-right"
            fetchPriority="high"
          />

          {/* Smooth horizontal gradient blending into deep burgundy #2B0B10 */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#2B0B10] via-[#2B0B10]/85 via-25% to-transparent lg:block" />

          {/* Mobile overlay and edge dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B0B10] via-transparent to-[#2B0B10]/60 opacity-80" />
          <div className="absolute inset-0 bg-[#2B0B10]/70 lg:hidden" />
        </div>

        {/* HERO CONTENT CONTAINER */}
        <div className="container-x relative z-10 w-full pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-20 lg:pt-32">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-champagne/90">
              {manager.eyebrow}
            </p>

            {/* Main Headline */}
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.1]">
              {manager.headline}
            </h1>

            {/* Supporting Statement with Italic Second Line */}
            <p className="mt-5 font-serif text-2xl font-normal leading-snug text-ivory/95 sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
              Turning your special moments into <br />
              <em className="font-serif italic font-light text-ivory/90">
                unforgettable experiences.
              </em>
            </p>

            {/* Short Introduction Paragraph */}
            <p className="mt-6 max-w-lg font-sans text-sm leading-relaxed text-[#D3C2C2]/90 sm:text-[0.95rem] sm:leading-relaxed">
              {manager.shortIntro}
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary: Explore My Work → */}
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
                className="group inline-flex items-center gap-2 rounded-[2px] bg-[#F3E0C5] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2B0B10] shadow-lg transition-all duration-300 hover:bg-champagne hover:shadow-champagne/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer"
              >
                <span>{manager.primaryButton.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary: Let's Plan Your Event → */}
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
                className="group inline-flex items-center gap-2 rounded-[2px] border border-champagne/60 bg-transparent px-7 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer"
              >
                <span>{manager.secondaryButton.label}</span>
                <span className="text-champagne transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ivory">
                  →
                </span>
              </a>
            </div>

            {/* SCROLL INDICATOR ON BOTTOM LEFT */}
            <div className="mt-12 flex flex-col items-start gap-3 lg:mt-16">
              <span className="[writing-mode:vertical-rl] text-[9.5px] font-medium uppercase tracking-[0.35em] text-champagne/70">
                SCROLL
              </span>
              <div className="h-8 w-[1.5px] bg-champagne/60" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
