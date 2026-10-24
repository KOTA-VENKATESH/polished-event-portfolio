import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { InteractiveGallerySection } from "@/components/site/InteractiveGallerySection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/gallery")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "work" });
  },
  head: () => ({
    meta: [
      { title: `Gallery — ${manager.name} | Event Manager Portfolio` },
      {
        name: "description",
        content:
          "A visual journey through Aarav Kulkarni's curated event portfolio — from grand wedding stages to intimate celebrations, corporate galas, and exquisite floral architecture.",
      },
      { property: "og:title", content: `Event Gallery — ${manager.name}` },
      {
        property: "og:description",
        content:
          "Explore curated event photography categorized by weddings, engagements, corporate events, and bespoke private celebrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="gallery" />
      <main className="flex-1">
        <InteractiveGallerySection />
      </main>
      <Footer />
    </div>
  );
}
