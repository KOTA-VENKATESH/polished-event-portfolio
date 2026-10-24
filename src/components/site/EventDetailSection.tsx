import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { featuredProjects, type WorkProject, type EventGalleryPhoto, images } from "@/config/site";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* Ring icon for wedding/ceremony metadata directly matching reference image */
function RingIcon({ className = "h-3.5 w-3.5 text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="14" r="6.5" />
      <path d="M12 7.5L9.5 4H14.5L12 7.5Z" strokeLinejoin="round" />
      <circle cx="12" cy="2.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/* Subtle botanical leaf branch watermark in bottom right corner (from reference image) */
function BotanicalWatermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-10 -right-10 z-0 opacity-15 overflow-hidden select-none"
    >
      <svg
        width="340"
        height="340"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-champagne"
      >
        <path
          d="M170 190C160 140 130 90 70 50M170 190C140 160 100 135 40 120"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M70 50C75 40 90 42 95 50C92 60 78 58 70 50ZM95 68C103 58 118 62 122 72C117 80 102 78 95 68ZM118 96C128 88 142 94 144 105C138 112 124 107 118 96ZM40 120C45 110 60 112 65 120C62 130 48 128 40 120ZM72 136C80 126 95 130 99 140C94 148 79 146 72 136ZM102 158C112 150 126 156 128 167C122 174 108 169 102 158Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.08"
        />
      </svg>
    </div>
  );
}

export function EventDetailSection({ project }: { project: WorkProject }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Fallback 6 images for the asymmetric moments & details gallery
  const galleryImages: EventGalleryPhoto[] =
    project.story?.galleryImages && project.story.galleryImages.length >= 6
      ? project.story.galleryImages
      : [
          ...(project.story?.galleryImages || []),
          {
            src: project.image,
            caption: project.title,
            alt: project.title,
          },
          {
            src: images.tableTwelve,
            caption: "Candlelit Guest Dining & Framed Table 12 Marker",
            alt: "Intimate wedding dining table with framed gold marker and candlelight",
          },
          {
            src: images.tableCenterpiece,
            caption: "Artisanal Blush Rose & Eucalyptus Centerpiece",
            alt: "Close-up of white and blush garden rose centerpiece on dinner table",
          },
          {
            src: images.anniversary,
            caption: "Artisanal Table Setting & Menu Details",
            alt: "Place setting with gold cutlery, menu card and warm candle",
          },
          {
            src: images.heroStage,
            caption: "The Grand Floral Archway & Reception Dais",
            alt: "Grand wedding reception stage with white floral arch and crystal chandelier",
          },
          {
            src: images.outdoorNight,
            caption: "Illuminated Garden Pathway & Lanterns",
            alt: "Nighttime garden tree walkway with fairy lights and lanterns",
          },
        ].slice(0, 6);

  // Pagination across all featured projects
  const currentIndex = featuredProjects.findIndex((p) => p.id === project.id);
  const totalProjects = featuredProjects.length;
  const prevProject = featuredProjects[(currentIndex - 1 + totalProjects) % totalProjects];
  const nextProject = featuredProjects[(currentIndex + 1) % totalProjects];

  // Carousel for Explore More Projects (excluding current project)
  const otherProjects = featuredProjects.filter((p) => p.id !== project.id);
  const [carouselOffset, setCarouselOffset] = useState(0);

  const handlePrevCarousel = () => {
    setCarouselOffset((prev) => (prev - 1 + otherProjects.length) % otherProjects.length);
  };

  const handleNextCarousel = () => {
    setCarouselOffset((prev) => (prev + 1) % otherProjects.length);
  };

  const visibleProjects = [
    otherProjects[carouselOffset % otherProjects.length],
    otherProjects[(carouselOffset + 1) % otherProjects.length],
    otherProjects[(carouselOffset + 2) % otherProjects.length],
  ].filter(Boolean);

  // Design highlights
  const defaultHighlights = [
    "Floral mandap with fresh jasmine & roses",
    "Warm ambient lighting",
    "Elegant seating and dining arrangements",
    "Classic ivory and gold palette",
  ];
  const highlights =
    project.highlights && project.highlights.length > 0 ? project.highlights : defaultHighlights;

  // Story paragraphs
  const storyParagraphs = [
    project.story?.creativeDirection ||
      "The Regal Jasmine was a beautifully curated wedding that blended classic traditions with modern luxury. The vision was to create a warm, inviting atmosphere with elegant décor, soft lighting and meaningful details that reflected the couple's unique story.",
    project.story?.floralAndLighting ||
      "From the floral arrangements to the seating layout, every element was thoughtfully planned to create a seamless and memorable experience for the couple and their guests.",
  ];

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const stepLightbox = useCallback(
    (direction: number) => {
      setLightboxIndex((curr) => {
        if (curr === null) return curr;
        return (curr + direction + galleryImages.length) % galleryImages.length;
      });
    },
    [galleryImages.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, closeLightbox, stepLightbox]);

  const activePhoto = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <div className="relative bg-[#2B0B10] pt-24 pb-20 sm:pt-28 sm:pb-28 text-rose selection:bg-champagne selection:text-burgundy overflow-hidden">
      <div className="container-x max-w-[1320px] mx-auto space-y-12 sm:space-y-14">
        {/* =================================================================== */}
        {/* 1. TOP INTRO: Back link, Category, Title, Subtitle, Metadata & Nav */}
        {/* =================================================================== */}
        <div>
          {/* Back to Work Link with Left Arrow */}
          <Link
            to="/"
            hash="work"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D3C2C2]/80 hover:text-champagne transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1 text-champagne" />
            <span>Back to Work</span>
          </Link>

          {/* Title row with previous / next project counter */}
          <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              {/* Category Eyebrow */}
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.32em] text-champagne block">
                {project.categoryLabel}
              </span>

              {/* Large Serif Title */}
              <h1 className="mt-2 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.4rem] leading-[1.08]">
                {project.title}
              </h1>

              {/* Editorial Italic Subtitle */}
              <p className="mt-3 font-serif text-lg sm:text-xl italic font-light text-ivory/85 max-w-3xl leading-relaxed">
                {project.subtitle ||
                  "A celebration of timeless elegance, delicate florals and unforgettable moments."}
              </p>

              {/* Compact Metadata Row */}
              <div className="mt-5 flex flex-wrap items-center gap-6 text-xs text-[#D3C2C2]/85">
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-champagne" />
                  <span>{project.location}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-champagne" />
                  <span>{project.season || "Winter"}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <RingIcon className="h-3.5 w-3.5 text-champagne" />
                  <span>{project.category === "Weddings" ? "Wedding" : project.category}</span>
                </div>
              </div>
            </div>

            {/* Pagination Counter: "— 01 / 08  <  >" directly matching reference */}
            <div className="flex items-center gap-4 text-xs shrink-0 self-start md:self-end">
              <span className="font-sans text-xs tracking-widest text-[#D3C2C2]/70">
                — {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(totalProjects).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <Link
                  to="/work/$projectId"
                  params={{ projectId: prevProject.id }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-all hover:bg-champagne hover:text-burgundy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  aria-label={`Previous project: ${prevProject.title}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Link>
                <Link
                  to="/work/$projectId"
                  params={{ projectId: nextProject.id }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-all hover:bg-champagne hover:text-burgundy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  aria-label={`Next project: ${nextProject.title}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. HERO IMAGE: Wide cinematic aspect ratio (~2.6:1) with thin gold border */}
        {/* =================================================================== */}
        <div className="relative overflow-hidden rounded-[2px] border border-[#C9A66B]/30 bg-[#180407] shadow-2xl">
          <div className="relative aspect-[16/9] sm:aspect-[2.2/1] lg:aspect-[2.65/1] w-full overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} - ${project.categoryLabel}`}
              className="h-full w-full object-cover object-center"
            />
            {/* Subtle bottom gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B0B10]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. TWO-COLUMN LAYOUT: The Story (~60%) & Event at a Glance (~40%) */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start pt-2">
          {/* Left Column: The Story */}
          <div className="space-y-6 lg:col-span-7">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne block">
                THE STORY
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-ivory tracking-tight">
                {project.story?.headline || "A Celebration of Timeless Elegance"}
              </h2>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-[0.95rem] leading-relaxed text-[#D3C2C2]/90">
              {storyParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Signature Flourish: Thin line + Elegant · Personal · Unforgettable */}
            <div className="pt-4 flex items-center gap-4">
              <div className="h-[1px] w-14 bg-[#C9A66B]/50 shrink-0" />
              <span className="font-script text-2xl sm:text-3xl text-champagne tracking-wider">
                Elegant · Personal · Unforgettable
              </span>
            </div>
          </div>

          {/* Right Column: Event at a Glance card */}
          <div className="lg:col-span-5">
            <div className="rounded-[2px] border border-[#C9A66B]/35 bg-[#1C0509]/65 p-7 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="font-serif text-2xl font-normal tracking-wide text-ivory">
                Event at a Glance
              </h3>

              {/* Rows */}
              <div className="mt-6 space-y-4 text-xs">
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3 text-[#D3C2C2]/80">
                    <RingIcon className="h-4 w-4 text-champagne" />
                    <span>Event Type</span>
                  </div>
                  <span className="font-medium text-ivory">
                    {project.eventType || project.category}
                  </span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3 text-[#D3C2C2]/80">
                    <MapPin className="h-4 w-4 text-champagne" />
                    <span>Location</span>
                  </div>
                  <span className="font-medium text-ivory">{project.location}</span>
                </div>

                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3 text-[#D3C2C2]/80">
                    <Sparkles className="h-4 w-4 text-champagne" />
                    <span>Season</span>
                  </div>
                  <span className="font-medium text-ivory">{project.season || "Winter"}</span>
                </div>
              </div>

              {/* Thin champagne divider */}
              <div className="my-6 h-[1px] w-full bg-[#C9A66B]/20" />

              {/* Design Highlights */}
              <h4 className="font-serif text-base tracking-wide text-champagne font-medium">
                Design Highlights
              </h4>

              <ul className="mt-3.5 space-y-2.5 text-xs text-[#D3C2C2]/90">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. MOMENTS & DETAILS: Asymmetric 2-Row Gallery Layout */}
        {/* =================================================================== */}
        <section className="border-t border-[#3A141A] pt-14 sm:pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne block">
                MOMENTS & DETAILS
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-ivory tracking-tight">
                The Beauty in Every Detail
              </h2>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne hover:text-ivory transition-colors cursor-pointer"
            >
              <span>View All Photos</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Asymmetric Gallery Grid matching reference image */}
          <div className="space-y-4">
            {/* ROW 1: Left wide photo (7 cols) + Right 2 stacked photos (5 cols) */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* Row 1 Left: ~60% width */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(0)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(0);
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-[2px] border border-[#C9A66B]/30 bg-[#180407] transition-all duration-500 hover:border-champagne hover:shadow-xl lg:col-span-7"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/10.2] lg:aspect-[16/10.4] w-full overflow-hidden">
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-serif truncate">{galleryImages[0].caption}</span>
                    <Maximize2 className="h-3.5 w-3.5 text-champagne" />
                  </div>
                </div>
              </div>

              {/* Row 1 Right: 2 Stacked photos */}
              <div className="flex flex-col gap-4 lg:col-span-5">
                {[1, 2].map((idx) => {
                  const photo = galleryImages[idx] || galleryImages[0];
                  return (
                    <div
                      key={idx}
                      role="button"
                      tabIndex={0}
                      onClick={() => openLightbox(idx)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openLightbox(idx);
                        }
                      }}
                      className="group relative flex-1 cursor-pointer overflow-hidden rounded-[2px] border border-[#C9A66B]/30 bg-[#180407] transition-all duration-500 hover:border-champagne hover:shadow-xl"
                    >
                      <div className="relative aspect-[16/9.5] lg:aspect-[16/9.6] w-full overflow-hidden h-full">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="font-serif truncate">{photo.caption}</span>
                          <Maximize2 className="h-3 w-3 text-champagne" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ROW 2: 3 aligned images side-by-side */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[3, 4, 5].map((idx) => {
                const photo = galleryImages[idx] || galleryImages[idx % galleryImages.length];
                return (
                  <div
                    key={idx}
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(idx % galleryImages.length)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(idx % galleryImages.length);
                      }
                    }}
                    className="group relative cursor-pointer overflow-hidden rounded-[2px] border border-[#C9A66B]/30 bg-[#180407] transition-all duration-500 hover:border-champagne hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/2.95] w-full overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="font-serif truncate">{photo.caption}</span>
                        <Maximize2 className="h-3 w-3 text-champagne" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================================== */}
        {/* 5. MORE CELEBRATIONS: Explore More Projects (3 Cards with Carousel) */}
        {/* =================================================================== */}
        <section className="border-t border-[#3A141A] pt-14 sm:pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
            <div>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne block">
                MORE CELEBRATIONS
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-ivory tracking-tight">
                Explore More Projects
              </h2>
            </div>

            {/* Carousel Previous & Next circular controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevCarousel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-all hover:bg-champagne hover:text-burgundy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label="Previous celebrations"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNextCarousel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-champagne/40 text-champagne transition-all hover:bg-champagne hover:text-burgundy cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label="Next celebrations"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* 3 Related Project Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p) => (
              <Link
                key={p.id}
                to="/work/$projectId"
                params={{ projectId: p.id }}
                className="group block overflow-hidden rounded-[2px] border border-[#C9A66B]/30 bg-[#1A0408] transition-all duration-500 hover:border-champagne hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0408]/85 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-champagne block">
                      {p.categoryLabel}
                    </span>
                    <h3 className="mt-1 font-serif text-lg text-ivory transition-colors group-hover:text-champagne">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-champagne transition-transform duration-300 group-hover:translate-x-1 shrink-0 ml-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Decorative botanical watermark in bottom right corner */}
      <BotanicalWatermark />

      {/* =================================================================== */}
      {/* 6. WORKING LIGHTBOX MODAL */}
      {/* =================================================================== */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph: ${activePhoto.caption}`}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Top Bar */}
          <div
            className="flex w-full max-w-5xl items-center justify-between py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne bg-[#2D0D14] px-3 py-1 border border-champagne/40 rounded-[2px]">
                {project.categoryLabel}
              </span>
              <span className="font-sans text-xs text-[#D3C2C2]/70">
                {lightboxIndex! + 1} of {galleryImages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="rounded-full border border-champagne/40 bg-[#2B0B10]/90 p-2 text-champagne transition-all duration-300 hover:bg-champagne hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer"
              aria-label="Close photo viewer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Image & Navigation */}
          <div
            className="relative flex flex-1 items-center justify-center w-full max-w-5xl my-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => stepLightbox(-1)}
              className="absolute left-2 sm:-left-4 z-10 rounded-full border border-champagne/40 bg-[#2B0B10]/90 p-3 text-champagne shadow-lg transition-all duration-300 hover:scale-110 hover:bg-champagne hover:text-burgundy cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative max-h-[72vh] max-w-full overflow-hidden rounded-[2px] border border-champagne/30 bg-[#120306] shadow-2xl">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => stepLightbox(1)}
              className="absolute right-2 sm:-right-4 z-10 rounded-full border border-champagne/40 bg-[#2B0B10]/90 p-3 text-champagne shadow-lg transition-all duration-300 hover:scale-110 hover:bg-champagne hover:text-burgundy cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="w-full max-w-3xl border-t border-[#3A141A] pt-4 pb-2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-lg sm:text-xl text-ivory">{activePhoto.caption}</h3>
            <p className="mt-1 font-sans text-xs text-[#D3C2C2]/70">
              {project.title} • {project.location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
