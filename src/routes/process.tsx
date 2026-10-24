import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { ProcessSection } from "@/components/site/ProcessSection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/process")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "process" });
  },
  head: () => ({
    meta: [
      { title: `My Process — ${manager.name} | Event Manager Portfolio` },
      {
        name: "description",
        content:
          "Discover how Aarav Kulkarni plans and delivers meaningful celebrations through four clear stages: Discover, Design, Plan, and Celebrate.",
      },
      { property: "og:title", content: `My Process — ${manager.name}` },
      {
        property: "og:description",
        content:
          "Thoughtfully planned, beautifully delivered. A visual journey through our bespoke event planning approach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="about" />
      <main className="flex-1">
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
