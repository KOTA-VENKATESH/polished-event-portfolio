import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { About, Faq, Hero, Process, Services, Testimonials, WhyUs, Work } from "@/components/site/Sections";
import { Gallery } from "@/components/site/Gallery";
import { Enquiry } from "@/components/site/Enquiry";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Event Planning & Bespoke Decor — Weddings & Celebrations" },
      { name: "description", content: "Thoughtfully planned weddings, birthdays, engagements, baby showers and private celebrations with bespoke decoration." },
      { property: "og:title", content: "Event Planning & Bespoke Decor" },
      { property: "og:description", content: "Beautifully planned celebrations and bespoke decor for weddings and special occasions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Gallery />
        <Process />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
