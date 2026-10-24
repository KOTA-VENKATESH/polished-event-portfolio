import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, Sparkles, Eye } from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/config/site";
import { SectionHead, Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All Celebrations");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filter items based on active category
  const filteredItems =
    selectedCategory === "All Celebrations"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (category: GalleryCategory) => {
    if (category === selectedCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsTransitioning(false);
    }, 180);
  };

  const closeLightbox = useCallback(() => setActiveItemIndex(null), []);
  const stepLightbox = useCallback(
    (direction: number) => {
      setActiveItemIndex((current) => {
        if (current === null) return current;
        return (current + direction + filteredItems.length) % filteredItems.length;
      });
    },
    [filteredItems.length],
  );

  useEffect(() => {
    if (activeItemIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItemIndex, closeLightbox, stepLightbox]);

  const activePhoto = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <section id="gallery" className="relative border-b border-gold/20 bg-burgundy py-24 md:py-36">
      <div className="container-x">
        <SectionHead
          eyebrow="Portfolio Archive"
          title="Curated Event Gallery"
          intro="Explore our signature floral architecture, stage stylings, and intimate celebration aesthetics categorized by occasion."
        />

        {/* MOBILE & TABLET HORIZONTAL CATEGORY SCROLLER (< lg) */}
        <div className="mb-10 lg:hidden">
          <div
            role="tablist"
            aria-label="Event Categories"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2"
          >
            {galleryCategories.map((cat) => {
              const count =
                cat === "All Celebrations"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "relative shrink-0 border px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-all duration-300",
                    isActive
                      ? "border-gold bg-wine text-ivory shadow-md"
                      : "border-gold/20 bg-burgundy/60 text-rose/75 hover:border-gold/40 hover:text-ivory",
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {cat}
                    <span className="text-[0.65rem] text-gold/80 font-mono">({count})</span>
                  </span>
                  {isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gold" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT ON DESKTOP: LEFT SIDE TABS + RIGHT SIDE DYNAMIC GALLERY */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT SIDE: VERTICAL SIDE TABS */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28 border border-gold/25 bg-wine-card/80 p-6 backdrop-blur-sm shadow-xl">
              <div className="mb-6 flex items-center justify-between border-b border-gold/20 pb-4">
                <span className="eyebrow text-gold">Occasion Categories</span>
                <Sparkles className="h-4 w-4 text-gold/70" />
              </div>

              <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Event Categories"
                className="space-y-1.5"
              >
                {galleryCategories.map((category) => {
                  const count =
                    category === "All Celebrations"
                      ? galleryItems.length
                      : galleryItems.filter((i) => i.category === category).length;
                  const isActive = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleCategoryChange(category)}
                      className={cn(
                        "group relative flex w-full items-center justify-between py-3.5 pl-4 pr-3 text-left transition-all duration-300",
                        isActive
                          ? "bg-wine text-ivory font-medium shadow-sm"
                          : "text-rose/80 hover:bg-wine/40 hover:text-ivory",
                      )}
                    >
                      {/* Champagne gold active indicator bar on the left */}
                      <span
                        className={cn(
                          "absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300",
                          isActive
                            ? "bg-gold opacity-100"
                            : "bg-transparent opacity-0 group-hover:bg-gold/40 group-hover:opacity-100",
                        )}
                      />

                      <span className="font-serif text-lg tracking-wide transition-colors group-hover:text-gold">
                        {category}
                      </span>

                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-xs font-mono transition-colors",
                          isActive
                            ? "bg-burgundy text-gold border border-gold/40"
                            : "bg-burgundy/40 text-rose/60 group-hover:text-rose",
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-gold/20 pt-6">
                <p className="text-xs leading-relaxed text-rose/70">
                  Every celebration displayed is styled according to the client&apos;s personal
                  aesthetic vision.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold link-line"
                >
                  Commission a Bespoke Theme →
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE: DYNAMIC IMAGE GALLERY */}
          <main className="lg:col-span-8">
            <div className="mb-6 flex items-baseline justify-between border-b border-gold/20 pb-3">
              <h3 className="font-serif text-2xl text-ivory">{selectedCategory}</h3>
              <span className="text-xs uppercase tracking-widest text-rose/60">
                Showing {filteredItems.length}{" "}
                {filteredItems.length === 1 ? "Photograph" : "Photographs"}
              </span>
            </div>

            {/* DYNAMIC IMAGE GRID WITH SMOOTH FADE TRANSITION */}
            <div
              className={cn(
                "grid grid-cols-1 gap-6 sm:grid-cols-2 transition-opacity duration-300 ease-out",
                isTransitioning ? "opacity-20 scale-[0.99]" : "opacity-100 scale-100",
              )}
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative aspect-[4/3] overflow-hidden border border-gold/20 bg-wine shadow-md transition-all duration-500 hover:border-gold/60 hover:shadow-xl hover:shadow-black/40"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/95 via-burgundy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Caption & category overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex justify-between items-start">
                      <span className="eyebrow bg-burgundy/80 px-2.5 py-1 text-[0.65rem] text-gold backdrop-blur-sm border border-gold/30">
                        {item.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveItemIndex(index)}
                        aria-label={`Enlarge photo: ${item.caption}`}
                        className="rounded-full border border-gold/40 bg-burgundy/80 p-2 text-gold backdrop-blur-sm transition-transform hover:scale-110"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>

                    <div>
                      <p className="font-serif text-xl text-ivory leading-snug">{item.caption}</p>
                      <button
                        type="button"
                        onClick={() => setActiveItemIndex(index)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold link-line"
                      >
                        View Full Screen →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="border border-gold/20 bg-wine-card p-12 text-center text-rose/70">
                <p>No photographs found for this category.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* LIGHTBOX / FULLSCREEN MODAL VIEWER */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/95 p-4 backdrop-blur-md text-ivory"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            autoFocus
            onClick={closeLightbox}
            aria-label="Close lightbox"
            className="absolute right-6 top-6 z-10 rounded-full border border-gold/40 bg-burgundy/80 p-2.5 text-gold transition-colors hover:bg-gold hover:text-burgundy"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(-1);
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-gold/40 bg-burgundy/80 p-3 text-gold transition-all hover:bg-gold hover:text-burgundy md:left-8"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Active Image figure */}
          <figure
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden border border-gold/30 bg-burgundy shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="max-h-[75vh] w-auto object-contain"
            />
            <figcaption className="flex items-center justify-between border-t border-gold/20 bg-wine-card px-6 py-4">
              <div>
                <p className="font-serif text-lg text-ivory">{activePhoto.caption}</p>
                <p className="text-xs uppercase tracking-widest text-gold/80">
                  {activePhoto.category}
                </p>
              </div>
              <span className="font-mono text-xs text-rose/70">
                {activeItemIndex! + 1} / {filteredItems.length}
              </span>
            </figcaption>
          </figure>

          {/* Next image */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              stepLightbox(1);
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full border border-gold/40 bg-burgundy/80 p-3 text-gold transition-all hover:bg-gold hover:text-burgundy md:right-8"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
