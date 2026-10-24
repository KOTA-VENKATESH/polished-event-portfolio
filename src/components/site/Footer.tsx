import { useRouterState, useNavigate } from "@tanstack/react-router";
import { business, manager, navItems } from "@/config/site";
import { Phone, Mail, Instagram } from "lucide-react";

export function Footer() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const navigate = useNavigate();
  const isHome = pathname === "/" || pathname === "";

  const handleScrollTo = (sectionId: string, e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior = prefersReducedMotion ? "auto" : "smooth";

      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior });
        window.history.pushState(null, "", window.location.pathname);
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    } else {
      navigate({ to: "/", hash: sectionId });
    }
  };

  return (
    <footer className="border-t border-[#3A141A] bg-[#1E070B] py-14 text-rose">
      <div className="container-x max-w-[1380px] space-y-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Monogram, Name, and Role */}
          <a
            href={isHome ? "#home" : "/#home"}
            onClick={(e) => handleScrollTo("home", e)}
            className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne cursor-pointer"
            aria-label={`${manager.name} Home`}
          >
            <div className="flex h-9 w-9 items-center justify-center border border-champagne/50 bg-[#2B0B10] font-serif text-xs font-semibold text-ivory transition-colors group-hover:border-champagne">
              {manager.monogram}
            </div>
            <div>
              <span className="font-serif text-xl tracking-tight text-ivory transition-colors group-hover:text-champagne block">
                {manager.name}
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.24em] text-champagne block mt-0.5">
                {manager.role}
              </span>
            </div>
          </a>

          {/* Configured Contact Info & Social */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#D3C2C2]/85">
            {business.phone && (
              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                aria-label={`Call ${business.phone}`}
              >
                <Phone className="h-3.5 w-3.5 text-champagne" />
                <span>{business.phone}</span>
              </a>
            )}

            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                aria-label={`Email ${business.email}`}
              >
                <Mail className="h-3.5 w-3.5 text-champagne" />
                <span>{business.email}</span>
              </a>
            )}

            {business.social.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-champagne transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="h-3.5 w-3.5 text-champagne" />
                <span>Instagram</span>
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[#3A141A]" aria-hidden="true" />

        {/* Bottom Bar: Navigation and Copyright */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row text-xs">
          {/* Navigation */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 uppercase tracking-[0.2em]"
          >
            {navItems.map((n) => (
              <a
                key={n.label}
                href={isHome ? `#${n.id}` : `/#${n.id}`}
                onClick={(e) => handleScrollTo(n.id, e)}
                className="text-[#D3C2C2]/70 transition-colors hover:text-ivory cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-[#D3C2C2]/50 text-[11px] tracking-wider">
            © {new Date().getFullYear()} {manager.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
