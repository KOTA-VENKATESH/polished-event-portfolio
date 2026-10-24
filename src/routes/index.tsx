import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { PersonalHero } from "@/components/site/PersonalHero";
import { AboutMeSection } from "@/components/site/AboutMeSection";
import { FeaturedWorkSection } from "@/components/site/FeaturedWorkSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${manager.name} — ${manager.eyebrow} | Personal Portfolio` },
      {
        name: "description",
        content: manager.shortIntro,
      },
      { property: "og:title", content: `${manager.name} — ${manager.eyebrow}` },
      {
        property: "og:description",
        content: manager.supportingStatement,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // Support direct URL hash scroll after initial rendering (e.g. /#work, /#gallery, /#contact)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        }
      }
    };

    // Execute after DOM painted
    const timer = setTimeout(scrollToHash, 100);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header />
      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <PersonalHero />

        {/* Section 2: About Me */}
        <AboutMeSection id="about" showValuesStrip={false} />

        {/* Section 3: Featured Work */}
        <FeaturedWorkSection id="work" />

        {/* Section 4: My Process */}
        <ProcessSection id="process" showCta={true} />

        {/* Section 5: Testimonials */}
        <TestimonialsSection id="testimonials" />

        {/* Section 6: Contact / Enquire */}
        <ContactSection id="contact" />
      </main>
      {/* Section 8: Footer */}
      <Footer />
    </div>
  );
}
