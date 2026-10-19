import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { business, nav } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid ? "border-b bg-background/95 text-foreground backdrop-blur" : "text-ink-foreground",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="font-serif text-2xl tracking-wide">
          {business.name}
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="link-line text-sm tracking-wide">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={cn(
            "hidden border px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors lg:inline-block",
            solid
              ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
              : "border-ink-foreground/70 hover:bg-ink-foreground hover:text-ink",
          )}
        >
          Plan Your Event
        </a>
        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="container-x border-t bg-background pb-8 lg:hidden">
          <ul className="divide-y">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-primary py-3.5 text-center text-xs uppercase tracking-[0.18em] text-primary-foreground"
          >
            Plan Your Event
          </a>
        </nav>
      )}
    </header>
  );
}
