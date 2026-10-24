import { useState, useEffect, useCallback, useRef } from "react";
import {
  curatedGalleryItems,
  curatedGalleryCategories,
  type CuratedGalleryCategory,
  type CuratedGalleryItem,
} from "@/config/site";
import {
  Heart,
  Briefcase,
  Cake,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Calendar,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Category Filter Icons matching reference image */
function CategoryIcon({
  category,
  className = "h-4 w-4",
}: {
  category: CuratedGalleryCategory;
  className?: string;
}) {
  switch (category) {
    case "All":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={className}
          aria-hidden="true"
        >
          {/* 4 small rounded squares in a 2x2 grid */}
          <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
        </svg>
      );
    case "Weddings":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          className={className}
          aria-hidden="true"
        >
          {/* Interlocking wedding rings */}
          <circle cx="8.5" cy="12" r="5.5" />
          <circle cx="15.5" cy="12" r="5.5" />
        </svg>
      );
    case "Engagements":
      return <Heart className={className} strokeWidth={1.7} />;
    case "Corporate Events":
      return <Briefcase className={className} strokeWidth={1.7} />;
    case "Birthdays":
      return <Cake className={className} strokeWidth={1.7} />;
    case "Others":
      return <Star className={className} strokeWidth={1.7} />;
    default:
      return null;
  }
}

/* Background botanical line art for the upper-right edge */
function SubtleFoliageArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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
      <path
        d="M150 105C165 115 165 130 150 140C135 130 135 115 150 105Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="190" cy="240" r="45" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="190" cy="240" r="22" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

/* Individual Pure Photograph Tile Component */
function PhotoTile({
  item,
  index,
  onClick,
  aspectClass = "aspect-[4/3]",
  className = "",
}: {
  item: CuratedGalleryItem;
  index: number;
  onClick: (index: number) => void;
  aspectClass?: string;
  className?: string;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={() => onClick(index)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(index);
        }
      }}
      aria-label={`View photograph: ${item.title}`}
      className={cn(
        "group relative block w-full cursor-pointer overflow-hidden border border-[#3A141A] bg-[#180407] transition-all duration-500 hover:border-champagne/60 hover:shadow-2xl hover:shadow-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne",
        className,
      )}
    >
      <div className={cn("relative h-full w-full overflow-hidden bg-[#180407]", aspectClass)}>
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
        />

        {/* Subtle hover overlay with expand icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute bottom-3 right-3 rounded-full border border-champagne/40 bg-[#2B0B10]/80 p-2 text-champagne opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
          <Maximize2 className="h-3.5 w-3.5" />
        </div>
      </div>
    </div>
  );
}

export function InteractiveGallerySection({ id = "gallery" }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState<CuratedGalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewAllArchive, setViewAllArchive] = useState(false);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  // Filtered collection based on active category
  const filteredItems =
    activeCategory === "All"
      ? curatedGalleryItems
      : curatedGalleryItems.filter((item) => item.category === activeCategory);

  const isAllView = activeCategory === "All" && !viewAllArchive;

  // The 8 Primary Editorial Items for the Asymmetric Layout
  const mainWedding = curatedGalleryItems[0]; // The Regal Jasmine Wedding Stage (heroStage)
  const wideOutdoor = curatedGalleryItems[1]; // Al Fresco Under Fairy Lights (outdoorNight)
  const centerpiece = curatedGalleryItems[2]; // Blush Garden Rose Centerpiece (tableCenterpiece)
  const birthdaySetup = curatedGalleryItems[3]; // Little Moments, Big Smiles (birthday)
  const corporateGala = curatedGalleryItems[4]; // Better Together Leadership Summit (corporateStage)
  const tableTwelve = curatedGalleryItems[5]; // Intimate Candlelit Table 12 (tableTwelve)
  const neonLoveArch = curatedGalleryItems[6]; // Better Together Neon Floral Arch (neonBetterTogether)
  const poolPavilion = curatedGalleryItems[7]; // Starlight Pool Reflection & Draped Pavilion (poolEvening)

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
        return (curr + direction + filteredItems.length) % filteredItems.length;
      });
    },
    [filteredItems.length],
  );

  // Keyboard navigation & body scroll lock for Lightbox
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

  const activePhoto = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section
      id={id}
      className="relative min-h-screen bg-[#2B0B10] pt-28 pb-24 sm:pt-32 sm:pb-32 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Floral Line Art on Right Margin */}
      <div className="pointer-events-none absolute right-0 top-36 hidden opacity-15 text-champagne lg:block">
        <SubtleFoliageArt className="h-[440px] w-auto" />
      </div>

      <div className="container-x relative z-10 max-w-[1380px]" ref={triggerRef}>
        {/* PAGE INTRODUCTION */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#3A141A] pb-10 md:flex-row md:items-end lg:mb-14">
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-champagne">
              GALLERY
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.25rem]">
              Explore by Category
            </h1>
            <p className="mt-4 max-w-[560px] font-sans text-sm leading-relaxed text-[#D3C2C2]/85 sm:text-[0.95rem]">
              A visual journey through my work — from intimate gatherings to grand celebrations.
              Each image tells a story of creativity, attention to detail and unforgettable moments.
            </p>
          </div>

          <div className="shrink-0 pb-1">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setViewAllArchive(true);
              }}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne transition-colors hover:text-ivory"
            >
              <span>View All Gallery</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* TWO-PART STRUCTURE: SIDEBAR + GALLERY */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* LEFT SCROLL INDICATOR ON DESKTOP */}
          <div className="pointer-events-none absolute -left-12 top-40 hidden xl:flex flex-col items-center gap-3">
            <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-[#D3C2C2]/40 -rotate-90">
              SCROLL
            </span>
            <span className="h-10 w-[1px] bg-gradient-to-b from-[#D3C2C2]/40 to-transparent" />
          </div>

          {/* LEFT SIDEBAR: CATEGORY FILTERS (~240-260px on desktop) */}
          <aside className="lg:col-span-3 xl:col-span-3">
            {/* Desktop Vertical Sidebar */}
            <div className="sticky top-28 hidden space-y-1.5 border-r border-[#3A141A] pr-6 lg:block">
              {curatedGalleryCategories.map((category) => {
                const isSelected =
                  activeCategory === category && (!viewAllArchive || category !== "All");
                const count =
                  category === "All"
                    ? curatedGalleryItems.length
                    : curatedGalleryItems.filter((i) => i.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setViewAllArchive(false);
                    }}
                    className={cn(
                      "group flex w-full items-center justify-between px-4 py-3.5 text-left text-sm tracking-wide transition-all duration-300 rounded-[3px]",
                      isSelected
                        ? "border border-champagne/40 bg-[#2D0D14] font-medium text-ivory shadow-sm"
                        : "border border-transparent text-[#D3C2C2]/75 hover:bg-[#2D0D14]/50 hover:text-ivory",
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={cn(
                          "transition-colors",
                          isSelected
                            ? "text-champagne"
                            : "text-[#D3C2C2]/60 group-hover:text-champagne",
                        )}
                      >
                        <CategoryIcon category={category} />
                      </span>
                      <span>{category}</span>
                    </div>

                    {/* Numeric Count Badge Matching Reference */}
                    <span
                      className={cn(
                        "text-xs transition-colors",
                        isSelected
                          ? "text-champagne font-medium"
                          : "text-[#D3C2C2]/50 group-hover:text-[#D3C2C2]/80",
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile / Tablet Horizontal Category Scroller (< lg) */}
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden">
              {curatedGalleryCategories.map((category) => {
                const isSelected = activeCategory === category;
                const count =
                  category === "All"
                    ? curatedGalleryItems.length
                    : curatedGalleryItems.filter((i) => i.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setViewAllArchive(false);
                    }}
                    className={cn(
                      "flex shrink-0 items-center gap-2 border px-3.5 py-2 text-xs tracking-wider transition-all rounded-[3px]",
                      isSelected
                        ? "border-champagne bg-[#2D0D14] text-ivory font-medium"
                        : "border-[#3A141A] bg-[#180407] text-[#D3C2C2]/70",
                    )}
                  >
                    <CategoryIcon category={category} className="h-3.5 w-3.5 text-champagne" />
                    <span>{category}</span>
                    <span className="text-[10px] text-champagne/80 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT AREA: MAIN GALLERY GRID */}
          <main className="lg:col-span-9 xl:col-span-9">
            {/* ASYMMETRIC EDITORIAL GALLERY (Active when "All" is selected and not viewing full archive) */}
            {isAllView ? (
              <div className="space-y-3.5 sm:space-y-4">
                {/* TOP COMPOSITION: Large Featured Landscape Card on Left + Multi-photo on Right */}
                <div className="grid grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-12">
                  {/* Left: Large Featured Wedding Photograph spanning 2 visual rows */}
                  <div className="lg:col-span-7 xl:col-span-7">
                    <PhotoTile
                      item={mainWedding}
                      index={0}
                      onClick={openLightbox}
                      className="h-full"
                      aspectClass="aspect-[4/3.5] lg:aspect-[4/4.3] xl:aspect-[4/4.1]"
                    />
                  </div>

                  {/* Right side container: Wide Outdoor Night photo on top + 2 compact photos below */}
                  <div className="flex flex-col justify-between gap-3.5 sm:gap-4 lg:col-span-5 xl:col-span-5">
                    {/* Upper Right: Wide Landscape Photo */}
                    <div>
                      <PhotoTile
                        item={wideOutdoor}
                        index={1}
                        onClick={openLightbox}
                        aspectClass="aspect-[16/8.4] sm:aspect-[16/8.6]"
                      />
                    </div>

                    {/* Lower Right: Two smaller photographs side by side */}
                    <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                      <PhotoTile
                        item={centerpiece}
                        index={2}
                        onClick={openLightbox}
                        aspectClass="aspect-[4/3.2]"
                      />
                      <PhotoTile
                        item={birthdaySetup}
                        index={3}
                        onClick={openLightbox}
                        aspectClass="aspect-[4/3.2]"
                      />
                    </div>
                  </div>
                </div>

                {/* BOTTOM ROW: 4 Evenly Aligned Photographs Spanning Full Width */}
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
                  <PhotoTile
                    item={corporateGala}
                    index={4}
                    onClick={openLightbox}
                    aspectClass="aspect-[4/3.2]"
                  />
                  <PhotoTile
                    item={tableTwelve}
                    index={5}
                    onClick={openLightbox}
                    aspectClass="aspect-[4/3.2]"
                  />
                  <PhotoTile
                    item={neonLoveArch}
                    index={6}
                    onClick={openLightbox}
                    aspectClass="aspect-[4/3.2]"
                  />
                  <PhotoTile
                    item={poolPavilion}
                    index={7}
                    onClick={openLightbox}
                    aspectClass="aspect-[4/3.2]"
                  />
                </div>
              </div>
            ) : (
              /* BALANCED CLEAN REFLOW GRID (When filtered by category or viewing all 48 images) */
              <div>
                <div className="mb-6 flex items-baseline justify-between border-b border-[#3A141A] pb-3">
                  <h2 className="font-serif text-2xl text-ivory">
                    {viewAllArchive ? "Complete Gallery Archive" : activeCategory}
                  </h2>
                  <span className="text-xs uppercase tracking-widest text-[#D3C2C2]/60">
                    Showing {filteredItems.length}{" "}
                    {filteredItems.length === 1 ? "Photograph" : "Photographs"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item, index) => (
                    <PhotoTile
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={openLightbox}
                      aspectClass="aspect-[4/3.2]"
                    />
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="border border-[#3A141A] bg-[#180407] p-12 text-center text-[#D3C2C2]/70">
                    <p>No photographs found in this category.</p>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* INTERACTIVE LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photograph: ${activePhoto.title}`}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/94 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Top Bar: Category badge, photo counter, and close button */}
          <div
            className="flex w-full max-w-6xl items-center justify-between py-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne bg-[#2D0D14] px-3 py-1 border border-champagne/40 rounded-[2px]">
                {activePhoto.categoryLabel}
              </span>
              <span className="font-sans text-xs text-[#D3C2C2]/70">
                {lightboxIndex! + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="rounded-full border border-champagne/40 bg-[#2B0B10]/90 p-2 text-champagne transition-all duration-300 hover:bg-champagne hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Close photo viewer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Central Image Container with Navigation Arrows */}
          <div
            className="relative flex flex-1 items-center justify-center w-full max-w-6xl my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={() => stepLightbox(-1)}
              className="absolute left-2 sm:-left-4 z-10 rounded-full border border-champagne/40 bg-[#2B0B10]/90 p-3 text-champagne shadow-lg transition-all duration-300 hover:scale-110 hover:bg-champagne hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Main Lightbox Image */}
            <div className="relative max-h-[72vh] max-w-full overflow-hidden border border-champagne/30 bg-[#120306] shadow-2xl">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => stepLightbox(1)}
              className="absolute right-2 sm:-right-4 z-10 rounded-full border border-champagne/40 bg-[#2B0B10]/90 p-3 text-champagne shadow-lg transition-all duration-300 hover:scale-110 hover:bg-champagne hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Next photograph"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Bar: Title, caption, metadata */}
          <div
            className="w-full max-w-4xl border-t border-[#3A141A] pt-4 pb-2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl sm:text-2xl text-ivory">{activePhoto.title}</h3>
            <p className="mt-1 font-sans text-xs sm:text-sm text-[#D3C2C2]/85 max-w-xl mx-auto">
              {activePhoto.caption}
            </p>
            <div className="mt-2 flex items-center justify-center gap-4 text-xs text-[#D3C2C2]/60">
              {activePhoto.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-champagne" />
                  <span>{activePhoto.location}</span>
                </span>
              )}
              {activePhoto.date && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-champagne" />
                  <span>{activePhoto.date}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
