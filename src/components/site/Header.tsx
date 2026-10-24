import { useEffect, useState, useCallback } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { manager, navItems } from "@/config/site";
import { cn } from "@/lib/utils";

/* Calligraphic signature mark for "AK" directly from reference design */
export function SignatureMark({ className = "h-9 w-auto text-champagne" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 74 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Flowing A with ascender loop and descending stem */}
      <path
        d="M6 35C11 27 19 11 24 5C26 2.5 28 3.5 27 7C25 15 19 31 17 38C16 41 18 40 21 37C27 30 33 21 38 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Graceful crossbar flowing towards K */}
      <path
        d="M13 23C19 23 26 22 34 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* K upright stem */}
      <path
        d="M34 6C33 14 31 27 30 36"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* K upper loop / arm */}
      <path
        d="M45 11C41 15 37 19 32 23"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      {/* K lower kick flourish */}
      <path
        d="M33 22C38 25 45 32 52 38C55 40 58 39 57 36"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ activeRoute: explicitActiveRoute }: { activeRoute?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const navigate = useNavigate();

  // Read current pathname dynamically from router
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isHome = pathname === "/" || pathname === "";

  // Smooth scroll handler with reduced-motion support
  const scrollToSection = useCallback(
    (sectionId: string) => {
      setOpen(false);

      if (isHome) {
        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const behavior = prefersReducedMotion ? "auto" : "smooth";

        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior });
          window.history.pushState(null, "", window.location.pathname);
          setActiveSection("home");
          return;
        }

        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior });
          window.history.pushState(null, "", `#${sectionId}`);
          setActiveSection(sectionId);
        }
      } else {
        // Navigate to single-page homepage with corresponding section hash
        navigate({ to: "/", hash: sectionId });
      }
    },
    [isHome, navigate],
  );

  // Active section scroll spy across all sections
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["home", "about", "work", "process", "testimonials", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // At top of page
      if (window.scrollY < 140) {
        setActiveSection("home");
        return;
      }

      // At bottom of document
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Handle escape key for mobile menu
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const computedActive =
    explicitActiveRoute ??
    (isHome
      ? activeSection
      : pathname.startsWith("/work")
        ? "work"
        : pathname.startsWith("/gallery")
          ? "gallery"
          : pathname.startsWith("/about")
            ? "about"
            : pathname.startsWith("/contact")
              ? "contact"
              : "home");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-[#3A141A] bg-[#2B0B10]/95 backdrop-blur-md py-4 shadow-xl shadow-black/30"
          : "border-b border-[#3A141A]/50 bg-gradient-to-b from-[#1C060A]/85 to-transparent py-5 backdrop-blur-[2px]",
      )}
    >
      <div className="container-x flex items-center justify-between">
        {/* LEFT SIDE: Minimal signature monogram logo + Aarav Kulkarni + EVENT MANAGER */}
        <a
          href={isHome ? "#home" : "/#home"}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              scrollToSection("home");
            }
          }}
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
          aria-label={`${manager.name} — Event Manager Home`}
        >
          {/* Signature Mark in Champagne Gold */}
          <SignatureMark className="h-9 w-auto text-champagne transition-transform duration-300 group-hover:scale-105" />

          <div className="flex flex-col">
            <span className="font-serif text-[1.4rem] tracking-normal text-ivory transition-colors group-hover:text-champagne leading-tight">
              {manager.name}
            </span>
            <span className="text-[9.5px] font-medium uppercase tracking-[0.26em] text-champagne/90 mt-0.5">
              {manager.role}
            </span>
          </div>
        </a>

        {/* RIGHT SIDE: Navigation Items with smooth scrolling */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-7 lg:gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = item.id === computedActive;

            return (
              <a
                key={item.label}
                href={isHome ? `#${item.id}` : `/#${item.id}`}
                onClick={(e) => {
                  if (isHome) {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }
                }}
                className={cn(
                  "group relative py-1 text-xs uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne",
                  isActive ? "font-semibold text-ivory" : "text-[#D3C2C2]/80 hover:text-ivory",
                )}
              >
                <span>{item.label}</span>
                {/* Active indicator bar */}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-champagne" />
                )}
              </a>
            );
          })}
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 text-rose/90 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne lg:hidden cursor-pointer"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6 text-champagne" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="container-x mt-3 border-t border-[#3A141A] bg-[#2B0B10]/98 pb-8 pt-6 backdrop-blur-xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <ul className="divide-y divide-[#3A141A]">
            {navItems.map((item) => {
              const isActive = item.id === computedActive;

              return (
                <li key={item.label}>
                  <a
                    href={isHome ? `#${item.id}` : `/#${item.id}`}
                    onClick={(e) => {
                      if (isHome) {
                        e.preventDefault();
                      }
                      scrollToSection(item.id);
                    }}
                    className={cn(
                      "flex items-center justify-between py-3.5 text-xs uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne",
                      isActive ? "font-semibold text-champagne" : "text-rose/90 hover:text-ivory",
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-champagne" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
