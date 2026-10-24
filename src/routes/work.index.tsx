import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FeaturedWorkSection } from "@/components/site/FeaturedWorkSection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/work/")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "work" });
  },
  head: () => ({
    meta: [
      { title: `Featured Work — ${manager.name} | Event Manager Portfolio` },
      {
        name: "description",
        content:
          "A curated collection of memorable weddings, engagements, corporate galas, and bespoke celebrations planned and designed by Aarav Kulkarni.",
      },
      { property: "og:title", content: `Featured Work — ${manager.name}` },
      {
        property: "og:description",
        content:
          "Selected celebrations showcasing bespoke design, thoughtful planning, and seamless event management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="work" />
      <main className="flex-1">
        <FeaturedWorkSection />
      </main>
      <Footer />
    </div>
  );
}
