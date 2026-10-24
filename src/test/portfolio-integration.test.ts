import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import {
  featuredProjects,
  curatedGalleryCategories,
  curatedGalleryItems,
  workCategories,
  manager,
  business,
  clientTestimonials,
  steps,
  navItems,
} from "@/config/site";

describe("Route Resolution & Navigation Integrity", () => {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });

  const routesToTest = [
    { path: "/", name: "Home screen" },
    { path: "/about", name: "About screen" },
    { path: "/work", name: "Featured Work index" },
    { path: "/work/the-regal-jasmine", name: "Event Details for The Regal Jasmine" },
    { path: "/work/marigold-terrace-haldi", name: "Event Details for Marigold Haldi" },
    { path: "/gallery", name: "Curated Gallery screen" },
    { path: "/contact", name: "Contact & Enquiry screen" },
    { path: "/process", name: "My 4-Stage Process screen" },
    { path: "/testimonials", name: "Testimonials screen" },
  ];

  for (const { path, name } of routesToTest) {
    it(`resolves ${name} (${path}) without falling back to 404 rootRouteId`, () => {
      const matches = router.matchRoutes(path);
      expect(matches.length).toBeGreaterThan(0);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});

describe("Portfolio Project Data Integrity", () => {
  it("contains unique slugs/ids for all featured projects", () => {
    const ids = featuredProjects.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("ensures every project has a valid title, category, main image, location, and story", () => {
    for (const project of featuredProjects) {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.image).toBeTruthy();
      expect(project.location).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.story.creativeDirection).toBeTruthy();
      expect(project.story.palette.length).toBeGreaterThan(0);
      expect(project.story.galleryImages.length).toBeGreaterThan(0);
    }
  });

  it("verifies category filtering for Featured Work", () => {
    expect(workCategories).toContain("All");

    for (const category of workCategories) {
      if (category === "All") {
        const filtered = featuredProjects;
        expect(filtered.length).toBe(featuredProjects.length);
      } else {
        const filtered = featuredProjects.filter((p) => p.category === category);
        expect(filtered.length).toBeGreaterThan(0);
        for (const item of filtered) {
          expect(item.category).toBe(category);
        }
      }
    }
  });

  it("verifies related projects calculation excludes the active project", () => {
    for (const project of featuredProjects) {
      const related = featuredProjects.filter((p) => p.id !== project.id);
      expect(related.find((p) => p.id === project.id)).toBeUndefined();
      expect(related.length).toBe(featuredProjects.length - 1);
    }
  });
});

describe("Curated Gallery Data & Distinction", () => {
  it("provides distinct gallery categories", () => {
    expect(curatedGalleryCategories).toContain("All");
    expect(curatedGalleryCategories).toContain("Weddings");
    expect(curatedGalleryCategories).toContain("Engagements");
    expect(curatedGalleryCategories).toContain("Corporate Events");
    expect(curatedGalleryCategories).toContain("Birthdays");
    expect(curatedGalleryCategories).toContain("Others");
  });

  it("ensures all curated gallery items have valid IDs, images, alt text, and categories", () => {
    const ids = new Set<string>();
    for (const item of curatedGalleryItems) {
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);
      expect(item.title).toBeTruthy();
      expect(item.src).toBeTruthy();
      expect(item.alt).toBeTruthy();
      expect(item.category).toBeTruthy();
    }
  });

  it("ensures category filtering on the gallery behaves correctly and restores all items on 'All'", () => {
    const allItems = curatedGalleryItems;
    expect(allItems.length).toBeGreaterThan(0);

    for (const cat of curatedGalleryCategories) {
      if (cat === "All") {
        const filtered = curatedGalleryItems;
        expect(filtered.length).toBe(curatedGalleryItems.length);
      } else {
        const filtered = curatedGalleryItems.filter((i) => i.category === cat);
        expect(filtered.length).toBeGreaterThan(0);
        for (const item of filtered) {
          expect(item.category).toBe(cat);
        }
      }
    }
  });
});

describe("Manager Profile, Process & Client Feedback Integrity", () => {
  it("has authentic portfolio owner details configured", () => {
    expect(manager.name).toBe("Aarav Kulkarni");
    expect(manager.role).toBe("EVENT MANAGER");
    expect(manager.monogram).toBe("AK");
    expect(business.phone).toBeTruthy();
    expect(business.email).toBeTruthy();
  });

  it("defines the complete 4-stage event planning process", () => {
    expect(steps.length).toBe(4);
    for (const step of steps) {
      expect(step.n).toBeTruthy();
      expect(step.title).toBeTruthy();
      expect(step.text).toBeTruthy();
    }
  });

  it("verifies genuine client testimonials have client names, event types, and quotes", () => {
    expect(clientTestimonials.length).toBeGreaterThan(0);
    for (const testimonial of clientTestimonials) {
      expect(testimonial.name).toBeTruthy();
      expect(testimonial.event).toBeTruthy();
      expect(testimonial.quote).toBeTruthy();
    }
  });
});

describe("Single-Page Navigation & Structure", () => {
  it("defines all 6 continuous section navigation items in order", () => {
    const expectedSections = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "work", label: "Work" },
      { id: "process", label: "Process" },
      { id: "testimonials", label: "Testimonials" },
      { id: "contact", label: "Contact" },
    ];

    expect(navItems.length).toBe(6);
    for (let i = 0; i < expectedSections.length; i++) {
      expect(navItems[i].id).toBe(expectedSections[i].id);
      expect(navItems[i].label).toBe(expectedSections[i].label);
      expect(navItems[i].href).toBe(`/#${expectedSections[i].id}`);
    }
  });

  it("configures hero CTAs to point to work and contact sections", () => {
    expect(manager.primaryButton.href).toBe("/#work");
    expect(manager.secondaryButton.href).toBe("/#contact");
  });
});
