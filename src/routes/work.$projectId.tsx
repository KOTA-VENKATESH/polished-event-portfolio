import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { EventDetailSection } from "@/components/site/EventDetailSection";
import { featuredProjects, manager } from "@/config/site";

export const Route = createFileRoute("/work/$projectId")({
  head: ({ params }) => {
    const project = featuredProjects.find((p) => p.id === params.projectId) || featuredProjects[0];
    return {
      meta: [
        { title: `${project.title} — ${manager.name} | Event Details` },
        {
          name: "description",
          content: project.description,
        },
        { property: "og:title", content: `${project.title} — ${manager.name}` },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: EventDetailsRoute,
});

function EventDetailsRoute() {
  const { projectId } = Route.useParams();
  const project = featuredProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
        <Header activeRoute="work" />
        <main className="flex-1 container-x max-w-[1320px] pt-40 pb-32 text-center">
          <h1 className="font-serif text-4xl text-ivory">Event Celebration Not Found</h1>
          <p className="mt-4 text-sm text-[#D3C2C2]/80">
            The celebration you are looking for is not in our featured work archive.
          </p>
          <Link
            to="/"
            hash="work"
            className="mt-8 inline-flex items-center gap-2 border border-champagne bg-[#2D0D14] px-6 py-3 text-xs uppercase tracking-widest text-ivory hover:bg-champagne hover:text-burgundy transition-all"
          >
            ← Return to Featured Work
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#2B0B10] text-rose selection:bg-champagne selection:text-burgundy">
      <Header activeRoute="work" />
      <main className="flex-1">
        <EventDetailSection project={project} />
      </main>
      <Footer />
    </div>
  );
}
