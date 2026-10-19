import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery, galleryFilters } from "@/config/site";
import { SectionHead } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState("All Events");
  const [idx, setIdx] = useState<number | null>(null);
  const items = filter === "All Events" ? gallery : gallery.filter((g) => g.categories.includes(filter));

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, step]);

  const current = idx !== null ? items[idx] : null;

  return (
    <section id="gallery" className="border-t bg-card py-24 md:py-36">
      <div className="container-x">
        <SectionHead eyebrow="Gallery" title="Explore our work" intro="Placeholder photographs are shown for preview — they will be replaced with real event images." />
        <div role="group" aria-label="Filter gallery" className="-mx-1 mb-12 flex gap-2 overflow-x-auto pb-2 md:flex-wrap">
          {galleryFilters.map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}
              className={cn("shrink-0 border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors",
                filter === f ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground")}>
              {f}
            </button>
          ))}
        </div>
        {items.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">Photographs for this category are coming soon.</p>
        ) : (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((g, i) => (
              <button key={g.caption} type="button" onClick={() => setIdx(i)} className="group mb-5 block w-full break-inside-avoid text-left" aria-label={`Open image: ${g.caption}`}>
                <img src={g.src} alt={g.caption} width={g.w} height={g.h} loading="lazy" className="w-full bg-muted transition-opacity group-hover:opacity-90" />
                <span className="mt-2 block text-xs tracking-wide text-muted-foreground">{g.caption}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {current && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/95 text-ink-foreground" onClick={close}>
          <button autoFocus onClick={close} aria-label="Close" className="absolute right-4 top-4 p-2"><X className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous image" className="absolute left-2 p-3 md:left-6"><ChevronLeft className="h-8 w-8" /></button>
          <figure className="max-w-[85vw]" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.caption} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-4 text-center text-sm opacity-80">{current.caption} · {idx! + 1} / {items.length}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next image" className="absolute right-2 p-3 md:right-6"><ChevronRight className="h-8 w-8" /></button>
        </div>
      )}
    </section>
  );
}
