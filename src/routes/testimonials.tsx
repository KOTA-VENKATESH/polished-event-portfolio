import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/testimonials")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "testimonials" });
  },
  head: () => ({
    meta: [
      { title: `Testimonials & Client Words — ${manager.name} | Event Manager Portfolio` },
      {
        name: "description",
        content:
          "Read genuine client words and celebration reflections for Aarav Kulkarni, bespoke event planner and manager.",
      },
      { property: "og:title", content: `Kind Words — ${manager.name}` },
      {
        property: "og:description",
        content:
          "The moments that matter most. Authentic feedback from luxury weddings, milestone birthdays, and private celebrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="about" />
      <main className="flex-1">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
