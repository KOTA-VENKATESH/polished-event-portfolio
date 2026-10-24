import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  featuredProjects,
  workCategories,
  type WorkCategory,
  type WorkProject,
} from "@/config/site";
import { Heart, Briefcase, Cake, Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* Category Filter Icons matching reference */
function CategoryIcon({
  category,
  className = "h-4 w-4",
}: {
  category: WorkCategory;
  className?: string;
}) {
  switch (category) {
    case "All":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className={className}
          aria-hidden="true"
        >
          <circle cx="7" cy="7" r="2.5" />
          <circle cx="17" cy="7" r="2.5" />
          <circle cx="7" cy="17" r="2.5" />
          <circle cx="17" cy="17" r="2.5" />
        </svg>
      );
    case "Weddings":
      return <Heart className={className} strokeWidth={1.6} />;
    case "Engagements":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className={className}
          aria-hidden="true"
        >
          <circle cx="9" cy="12" r="4.5" />
          <circle cx="15" cy="12" r="4.5" />
        </svg>
      );
    case "Corporate Events":
      return <Briefcase className={className} strokeWidth={1.6} />;
    case "Birthdays":
      return <Cake className={className} strokeWidth={1.6} />;
    case "Others":
      return <Star className={className} strokeWidth={1.6} />;
    default:
      return null;
  }
}

/* Background botanical line art for the right margin */
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
      {/* Flower petals */}
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

/* Exported Project Card Component */
export function ProjectCard({
  project,
  className = "",
  aspectClass = "aspect-[16/10]",
}: {
  project: WorkProject;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <Link
      to={`/work/${project.id}`}
      className={cn(
        "group relative block overflow-hidden border border-[#3A141A] bg-[#22070D] shadow-md transition-all duration-500 hover:border-champagne/60 hover:shadow-2xl hover:shadow-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne",
        className,
      )}
    >
      <div className={cn("relative h-full w-full overflow-hidden bg-burgundy", aspectClass)}>
        <img
          src={project.image}
          alt={`${project.title} - ${project.categoryLabel} event by Aarav Kulkarni`}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
        />

        {/* Gradient vignette for crystal clear text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#150306]/95 via-[#150306]/40 via-40% to-transparent" />

        {/* Text Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne">
            {project.categoryLabel}
          </span>
          <h3 className="mt-1.5 font-serif text-xl tracking-tight text-ivory transition-colors group-hover:text-champagne sm:text-2xl">
            {project.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[#D3C2C2]/75">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-champagne/80" />
              <span>{project.location}</span>
            </span>
            {project.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-champagne/80" />
                <span>{project.date}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedWorkSection({ id = "work" }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  const isAllView = activeCategory === "All";

  // Pre-mapped cards for the editorial asymmetric composition
  const mainWedding = featuredProjects[0]; // The Regal Jasmine
  const wideEngagement = featuredProjects[1]; // A Sunlit Celebration
  const corporateCard = featuredProjects[2]; // Elegant & Professional
  const birthdayCard = featuredProjects[3]; // Little Moments, Big Smiles
  const lowerRowCards = featuredProjects.slice(4, 8); // Cards 5, 6, 7, 8

  return (
    <section
      id={id}
      className="relative min-h-screen bg-[#2B0B10] pt-28 pb-24 sm:pt-32 sm:pb-32 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Floral Line Art on Right Margin */}
      <div className="pointer-events-none absolute right-0 top-36 hidden opacity-15 text-champagne lg:block">
        <SubtleFoliageArt className="h-[440px] w-auto" />
      </div>

      <div className="container-x relative z-10 max-w-[1380px]">
        {/* PAGE INTRODUCTION */}
        <div className="mb-14 flex flex-col justify-between gap-6 border-b border-[#3A141A] pb-10 md:flex-row md:items-end lg:mb-16">
          <div className="max-w-2xl">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-champagne">
              FEATURED WORK
            </p>
            <h1 className="mt-3 font-serif text-4xl tracking-tight text-ivory sm:text-5xl lg:text-[3.25rem]">
              Selected Celebrations
            </h1>
            <p className="mt-4 max-w-[580px] font-sans text-sm leading-relaxed text-[#D3C2C2]/85 sm:text-[0.95rem]">
              A curated collection of some of my most memorable events. Each project reflects a
              unique vision, thoughtful planning and a seamless execution.
            </p>
          </div>
        </div>

        {/* TWO-PART STRUCTURE: SIDEBAR + PROJECT GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT SIDEBAR: CATEGORY FILTERS (~230px on desktop) */}
          <aside className="lg:col-span-3 xl:col-span-2">
            {/* Desktop Vertical Sidebar */}
            <div className="sticky top-28 hidden space-y-1.5 border-r border-[#3A141A] pr-6 lg:block">
              {workCategories.map((category) => {
                const isSelected = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "group flex w-full items-center gap-3.5 px-4 py-3.5 text-left text-sm tracking-wide transition-all duration-300 rounded-[3px]",
                      isSelected
                        ? "border border-champagne/40 bg-[#2D0D14] font-medium text-ivory shadow-sm"
                        : "border border-transparent text-[#D3C2C2]/75 hover:bg-[#2D0D14]/50 hover:text-ivory",
                    )}
                  >
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
                  </button>
                );
              })}
            </div>

            {/* Mobile / Tablet Horizontal Category Scroller (< lg) */}
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden">
              {workCategories.map((category) => {
                const isSelected = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "flex shrink-0 items-center gap-2 border px-4 py-2.5 text-xs tracking-wider transition-all rounded-[3px]",
                      isSelected
                        ? "border-champagne bg-[#2D0D14] text-ivory font-medium"
                        : "border-[#3A141A] bg-[#180407] text-[#D3C2C2]/70",
                    )}
                  >
                    <CategoryIcon category={category} className="h-3.5 w-3.5 text-champagne" />
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT AREA: MAIN PORTFOLIO GRID */}
          <main className="lg:col-span-9 xl:col-span-10">
            {/* ASYMMETRIC EDITORIAL GRID (Active when "All" is selected) */}
            {isAllView ? (
              <div className="space-y-6 sm:space-y-8">
                {/* TOP COMPOSITION: Large Featured Card on Left + Multi-card layout on Right */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
                  {/* Left: Large Featured Wedding Card spanning 2 visual rows */}
                  <div className="lg:col-span-6 xl:col-span-6">
                    <ProjectCard
                      project={mainWedding}
                      className="h-full"
                      aspectClass="aspect-[4/3.5] lg:aspect-[4/4.4] xl:aspect-[4/4.2]"
                    />
                  </div>

                  {/* Right side container: Wide Engagement card on top + 2 compact cards below */}
                  <div className="flex flex-col justify-between gap-6 sm:gap-8 lg:col-span-6 xl:col-span-6">
                    {/* Upper Right: Wide Engagement Card */}
                    <div>
                      <ProjectCard
                        project={wideEngagement}
                        aspectClass="aspect-[16/8.2] sm:aspect-[16/8.5]"
                      />
                    </div>

                    {/* Lower Right: Two smaller cards side by side */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
                      <ProjectCard project={corporateCard} aspectClass="aspect-[4/3.2]" />
                      <ProjectCard project={birthdayCard} aspectClass="aspect-[4/3.2]" />
                    </div>
                  </div>
                </div>

                {/* BOTTOM ROW: 4 Compact Cards Spanning Full Width */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                  {lowerRowCards.map((p) => (
                    <ProjectCard key={p.id} project={p} aspectClass="aspect-[4/3.2]" />
                  ))}
                </div>
              </div>
            ) : (
              /* BALANCED CLEAN REFLOW GRID (When filtered by category) */
              <div>
                <div className="mb-6 flex items-baseline justify-between border-b border-[#3A141A] pb-3">
                  <h2 className="font-serif text-2xl text-ivory">{activeCategory}</h2>
                  <span className="text-xs uppercase tracking-widest text-[#D3C2C2]/60">
                    Showing {filteredProjects.length}{" "}
                    {filteredProjects.length === 1 ? "Celebration" : "Celebrations"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((p) => (
                    <ProjectCard key={p.id} project={p} aspectClass="aspect-[4/3.2]" />
                  ))}
                </div>

                {filteredProjects.length === 0 && (
                  <div className="border border-[#3A141A] bg-[#180407] p-12 text-center text-[#D3C2C2]/70">
                    <p>No celebrations found in this category.</p>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
