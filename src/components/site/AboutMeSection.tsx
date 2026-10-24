import { images, manager } from "@/config/site";

/* Signature SVG for "Aarav K" directly from reference design */
export function AaravSignature({
  className = "h-12 w-auto text-champagne",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 170 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Aarav K signature"
    >
      {/* Calligraphic A */}
      <path
        d="M6 44C13 33 22 14 28 6C30 3.5 32 4.5 31 8C27 20 20 40 17 48C16 51 19 49 23 44C31 35 39 23 47 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Loop & crossbar */}
      <path
        d="M15 28C22 28 30 26 38 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Lowercase a */}
      <path
        d="M50 33C45 31 43 36 45 41C47 45 53 44 55 39C56 36 56 32 56 43"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lowercase r */}
      <path
        d="M61 33C61 37 60 43 60 43M60 35C62 32 66 32 69 33"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Lowercase a */}
      <path
        d="M77 33C72 31 70 36 72 41C74 45 80 44 82 39C83 36 83 32 83 43"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lowercase v flourish */}
      <path
        d="M89 33C90 37 92 42 95 42C98 42 102 35 106 31"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Capital K flourish */}
      <path
        d="M117 7C116 17 113 36 111 48"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M133 14C128 20 122 26 114 31"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M116 30C123 34 133 42 144 48C148 50 155 49 153 45"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Floral botanical line art decoration in background */
function BotanicalLineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="170"
        cy="170"
        r="140"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 3"
      />
      {/* Petals */}
      <path
        d="M170 30C190 90 250 150 310 170C250 190 190 250 170 310C150 250 90 190 30 170C90 150 150 90 170 30Z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path
        d="M71 71C125 100 170 170 200 225C170 200 100 125 71 71Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M269 71C215 100 170 170 140 225C170 200 240 125 269 71Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      {/* Central rings */}
      <circle cx="170" cy="170" r="30" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="170" cy="170" r="10" stroke="currentColor" strokeWidth="0.7" />
    </svg>
  );
}

/* 1. Lightbulb outline icon for Creative Planning (Screen 2 reference) */
function LightbulbIcon({ className = "h-7 w-7 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 5C11.6 5 8 8.6 8 13C8 16 9.6 18.6 12 20.1V23C12 23.6 12.4 24 13 24H19C19.6 24 20 23.6 20 23V20.1C22.4 18.6 24 16 24 13C24 8.6 20.4 5 16 5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 27H19" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M14 14L16 11L18 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* 2. Lotus flower icon for Detail Oriented */
function LotusIcon({ className = "h-7 w-7 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 6C16 11 13 18 16 23C19 18 16 11 16 6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M14 12C9 14 7 19 13 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 16C6 19 6 24 15 24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M18 12C23 14 25 19 19 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 16C26 19 26 24 17 24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 25C14.5 26.5 17.5 26.5 20 25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* 3. 4-pointed sparkle starburst icon for Seamless Execution */
function SparkleStarIcon({ className = "h-7 w-7 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4C16 11 18.5 13.5 26 16C18.5 18.5 16 21 16 28C16 21 13.5 18.5 6 16C13.5 13.5 16 11 16 4Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* 4. Fine heart outline icon for Personal Touch */
function FineHeartIcon({ className = "h-7 w-7 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 26.5L14.4 25.1C8.6 20.1 5 16.7 5 12.5C5 9.1 7.6 6.5 11 6.5C13 6.5 14.8 7.5 16 9C17.2 7.5 19 6.5 21 6.5C24.4 6.5 27 9.1 27 12.5C27 16.7 23.4 20.1 17.6 25.1L16 26.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutMeSection({
  id = "about",
  showValuesStrip = false,
}: {
  id?: string;
  showValuesStrip?: boolean;
}) {
  return (
    <div className="relative flex flex-col bg-[#2B0B10]">
      {/* MAIN ABOUT ME SECTION */}
      <section
        id={id}
        className="relative flex min-h-[90svh] items-center overflow-hidden py-24 sm:py-28 lg:py-32 scroll-mt-20 sm:scroll-mt-24"
      >
        {/* Subtle Background Botanical Line Art Decoration (Lower-Right Edge) */}
        <div className="pointer-events-none absolute -bottom-16 -right-16 z-0 hidden opacity-15 text-champagne lg:block">
          <BotanicalLineArt className="h-[440px] w-[440px]" />
        </div>

        {/* CONTAINER WITH ~1200px MAX-WIDTH */}
        <div className="container-x relative z-10 w-full max-w-[1240px]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* LEFT COLUMN: EDITORIAL TEXT & SIGNATURE (~52% width) */}
            <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-6">
              {/* Eyebrow Label */}
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-champagne/90">
                {manager.about.eyebrow}
              </p>

              {/* Main Heading */}
              <h1 className="mt-4 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                {manager.about.heading}
              </h1>

              {/* Paragraph 1 */}
              <p className="mt-7 max-w-[520px] font-sans text-sm leading-[1.75] text-[#D3C2C2]/90 sm:text-[0.98rem]">
                {manager.about.paragraph1}
              </p>

              {/* Paragraph 2 */}
              <p className="mt-5 max-w-[520px] font-sans text-sm leading-[1.75] text-[#D3C2C2]/90 sm:text-[0.98rem]">
                {manager.about.paragraph2}
              </p>

              {/* Refined Signature "Aarav K" */}
              <div className="mt-8 flex items-center">
                <AaravSignature className="h-12 w-auto text-champagne opacity-95 transition-transform duration-300 hover:scale-105" />
              </div>

              {/* SCROLL INDICATOR ON FAR LEFT */}
              <div className="mt-12 flex flex-col items-start gap-3 lg:mt-14">
                <span className="[writing-mode:vertical-rl] text-[9.5px] font-medium uppercase tracking-[0.35em] text-champagne/70">
                  SCROLL
                </span>
                <div className="h-8 w-[1.5px] bg-champagne/60" />
              </div>
            </div>

            {/* RIGHT COLUMN: PORTRAIT PHOTOGRAPHY (~48% width) */}
            <div className="relative flex justify-center lg:col-span-6 xl:col-span-6 lg:justify-end">
              <div className="relative w-full max-w-[490px] border border-champagne/30 bg-[#250910] p-1 shadow-2xl">
                {/* 4:5 Aspect Ratio Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-burgundy">
                  <img
                    src={images.portrait}
                    alt="Aarav Kulkarni, Event Manager at a luxury wedding reception venue with candlelit flowers"
                    width={960}
                    height={1200}
                    loading="eager"
                    className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-103"
                  />

                  {/* Subtle edge illumination */}
                  <div className="pointer-events-none absolute inset-0 border border-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-COLUMN VALUES STRIP (Optional on continuous single-page to avoid back-to-back duplicate of Hero values) */}
      {showValuesStrip && (
        <section className="relative z-20 border-t border-[#3A141A] bg-[#180407]/90 backdrop-blur-md">
          <div className="container-x max-w-[1240px]">
            <div className="grid grid-cols-1 divide-y divide-[#3A141A] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
              {/* Column 1: Creative Planning (Lightbulb icon matching Screen 2 reference) */}
              <div className="flex flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-10">
                <LightbulbIcon className="h-7 w-7 text-champagne" />
                <h3 className="mt-3.5 font-serif text-lg tracking-wide text-ivory">
                  Creative Planning
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#D3C2C2]/70 max-w-[200px]">
                  Unique concepts tailored to your vision.
                </p>
              </div>

              {/* Column 2: Detail Oriented */}
              <div className="flex flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-10">
                <LotusIcon className="h-7 w-7 text-champagne" />
                <h3 className="mt-3.5 font-serif text-lg tracking-wide text-ivory">
                  Detail Oriented
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#D3C2C2]/70 max-w-[200px]">
                  Because little things make a big difference.
                </p>
              </div>

              {/* Column 3: Seamless Execution */}
              <div className="flex flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-10">
                <SparkleStarIcon className="h-7 w-7 text-champagne" />
                <h3 className="mt-3.5 font-serif text-lg tracking-wide text-ivory">
                  Seamless Execution
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#D3C2C2]/70 max-w-[200px]">
                  From planning to on-ground support.
                </p>
              </div>

              {/* Column 4: Personal Touch */}
              <div className="flex flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-10">
                <FineHeartIcon className="h-7 w-7 text-champagne" />
                <h3 className="mt-3.5 font-serif text-lg tracking-wide text-ivory">
                  Personal Touch
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#D3C2C2]/70 max-w-[200px]">
                  Your story, my priority.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
