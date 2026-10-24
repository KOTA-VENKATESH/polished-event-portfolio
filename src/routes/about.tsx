import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { AboutMeSection } from "@/components/site/AboutMeSection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "about" });
  },
  head: () => ({
    meta: [
      { title: `About ${manager.name} — ${manager.role} | Event Planning & Styling` },
      {
        name: "description",
        content: manager.about.paragraph1,
      },
      { property: "og:title", content: `About ${manager.name} — ${manager.role}` },
      {
        property: "og:description",
        content: manager.about.heading,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="about" />
      <main className="flex-1">
        <AboutMeSection />
      </main>
      <Footer />
    </div>
  );
}
