import { createFileRoute, redirect } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { manager } from "@/config/site";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "contact" });
  },
  head: () => ({
    meta: [
      { title: `Contact & Enquire — ${manager.name} | Event Manager Portfolio` },
      {
        name: "description",
        content:
          "Connect with Aarav Kulkarni for bespoke weddings, luxury receptions, and curated private celebrations. Share your event requirements and start a conversation.",
      },
      { property: "og:title", content: `Contact & Enquire — ${manager.name}` },
      {
        property: "og:description",
        content:
          "Let's plan something beautiful together. Reach out for custom event planning, bespoke floral decor, and complete ceremony management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="contact" />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
