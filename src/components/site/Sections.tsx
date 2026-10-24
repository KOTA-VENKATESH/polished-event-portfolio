import { useState } from "react";
import { ArrowRight, Minus, Plus, X, Sparkles, Check } from "lucide-react";
import {
  business,
  faqs,
  images,
  projects,
  reasons,
  services,
  steps,
  testimonials,
  type Project,
} from "@/config/site";
import { Reveal, SectionHead } from "./Reveal";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-burgundy text-rose"
    >
      <img
        src={images.hero}
        alt="Floral luxury wedding reception stage with ambient candlelight"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-65"
        fetchPriority="high"
      />
      <div className="hero-scrim absolute inset-0" />

      {/* Decorative subtle gold glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40" />

      <div className="container-x relative z-10 pb-16 pt-36 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-gold/30 bg-burgundy/60 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <p className="eyebrow tracking-[0.28em] text-gold">{business.tagline}</p>
          </div>

          <h1 className="mt-6 text-5xl leading-[1.08] text-ivory md:text-7xl lg:text-8xl">
            Beautifully Planned.
            <br />
            <em className="font-light italic text-gold/90">Unforgettable Moments.</em>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-rose md:text-lg">
            From monumental palace weddings to intimate candlelit celebrations, we curate immersive
            environments with thoughtful planning, bespoke floral artistry, and serene execution.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="border border-gold bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-burgundy shadow-lg transition-all duration-300 hover:bg-gold/90 hover:shadow-gold/20"
            >
              Explore Our Work
            </a>
            <a
              href="#contact"
              className="border border-gold/60 bg-burgundy/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-ivory backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold hover:text-burgundy"
            >
              Plan Your Event
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gold/20 pt-6 text-xs uppercase tracking-[0.24em] text-rose/70 md:flex-row md:items-center">
          <p>{business.serviceArea}</p>
          <div className="flex items-center gap-6">
            <span>Bespoke Decor</span>
            <span className="text-gold">•</span>
            <span>Floral Architecture</span>
            <span className="text-gold">•</span>
            <span>Day-Of Direction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="group relative">
            {/* Fine decorative champagne gold frame behind image */}
            <div className="absolute -inset-3 border border-gold/25 transition-transform duration-700 group-hover:scale-95" />
            <div className="relative overflow-hidden bg-wine">
              <img
                src={images.mandap}
                alt="Jasmine draped royal wedding mandap"
                width={896}
                height={1152}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-4 right-4 border border-gold/30 bg-burgundy/90 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-gold">
                Handcrafted Artistry
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow text-gold">About Aura Events &amp; Co.</p>
          <h2 className="mt-4 text-4xl leading-tight text-ivory md:text-5xl">
            Every Celebration Has an Unwritten Story
          </h2>
          <p className="mt-6 font-serif text-2xl leading-snug text-gold/90">
            We believe an extraordinary celebration should feel effortless, personal, and profoundly
            moving.
          </p>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-rose/90">
            <p>
              From the initial creative brainstorm to the final candle placed upon the tables, we
              translate your aspirations into harmonious spaces. Our work reflects your family
              traditions, your individual style, and the sentiments that truly matter.
            </p>
            <p>
              By pairing refined architectural styling with quiet, meticulous production, we
              eliminate the stress of event coordination — allowing you to be wholly present with
              the people you cherish most.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-gold/20 pt-6">
            <div>
              <p className="font-serif text-3xl text-ivory">100%</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-rose/70">
                Bespoke Design Direction
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ivory">Quiet</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-rose/70">
                Flawless Day-of Execution
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold link-line"
          >
            Schedule a Private Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const featuredWedding = services.find((s) => s.featured) || services[0];
  const secondaryServices = services.filter((s) => !s.featured);

  return (
    <section id="services" className="border-y border-gold/20 bg-wine/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHead
          eyebrow="What We Do"
          title="Services for Every Celebration"
          intro="Art-directed event design, floral curation, and flawless planning shaped around your milestone — from regal multi-day weddings to intimate private dinners."
        />

        {/* 1. VISUALLY PROMINENT FEATURED WEDDING SECTION */}
        <Reveal className="mb-16 overflow-hidden border border-gold/30 bg-wine-card/90 shadow-2xl transition-all duration-500 hover:border-gold/50">
          <div className="grid gap-0 lg:grid-cols-12 lg:items-center">
            <div className="group relative aspect-[16/10] overflow-hidden bg-burgundy lg:col-span-7 lg:h-full">
              <img
                src={featuredWedding.image}
                alt={featuredWedding.title}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute left-6 top-6 border border-gold/40 bg-burgundy/85 px-3.5 py-1.5 backdrop-blur-md">
                <span className="eyebrow text-gold">
                  {featuredWedding.tag || "Signature Expertise"}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5 lg:p-12">
              <div>
                <p className="eyebrow text-gold/80">
                  {featuredWedding.id} · WEDDINGS &amp; RECEPTIONS
                </p>
                <h3 className="mt-3 text-3xl leading-snug text-ivory md:text-4xl">
                  {featuredWedding.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-rose/90">
                  {featuredWedding.text}
                </p>

                {featuredWedding.highlights && (
                  <div className="mt-6 space-y-2.5 border-t border-gold/20 pt-6">
                    <p className="eyebrow text-rose/70">Curated Inclusions</p>
                    <ul className="space-y-2 text-sm text-rose/90">
                      {featuredWedding.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5">
                          <Check className="h-3.5 w-3.5 shrink-0 text-gold" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-gold bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy transition-all duration-300 hover:bg-gold/90"
                >
                  Enquire About Weddings <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. BALANCED, UNIFORM GRID FOR REMAINING SERVICES */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {secondaryServices.map((s) => (
            <Reveal
              key={s.title}
              className="group flex flex-col justify-between border border-gold/20 bg-wine-card/75 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* UNIFORM ASPECT RATIO (16/10) FOR STRICT VISUAL ALIGNMENT */}
                <div className="relative aspect-[16/10] overflow-hidden bg-burgundy">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 border border-gold/30 bg-burgundy/80 px-2.5 py-1 backdrop-blur-sm">
                    <span className="eyebrow text-[0.65rem] text-gold">{s.id}</span>
                  </div>
                </div>

                {/* CONTENT AREA WITH COMMON BASELINE ALIGNMENT */}
                <div className="p-6 sm:p-7">
                  <span className="eyebrow text-[0.68rem] text-gold/80">{s.category}</span>
                  <h3 className="mt-2 font-serif text-2xl text-ivory transition-colors group-hover:text-gold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-rose/85">{s.text}</p>
                </div>
              </div>

              <div className="border-t border-gold/15 p-6 pt-4">
                <a
                  href="/gallery"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold link-line"
                >
                  View Events{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const list = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHead
          eyebrow="Featured Portfolios"
          title="Celebrations We've Brought to Life"
          intro="A preview of bespoke set designs, floral architectural moments, and atmospheric evenings created for our clients."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {list.map((p) => (
            <Reveal key={p.slug} className="group flex flex-col">
              <button
                type="button"
                onClick={() => setActive(p)}
                className="block flex-1 text-left"
                aria-label={`View project: ${p.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-gold/25 bg-wine">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="eyebrow bg-burgundy/80 px-3 py-1 text-gold backdrop-blur-sm">
                      {p.category}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-ivory/80 opacity-0 transition-opacity group-hover:opacity-100">
                      View Details →
                    </span>
                  </div>
                </div>

                <div className="mt-5 border-b border-gold/20 pb-4">
                  <h3 className="font-serif text-2xl text-ivory transition-colors group-hover:text-gold md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-rose/80">
                    {p.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const details = [
    ["Event Type", p.type],
    ["Theme Concept", p.theme],
    ["Decoration Style", p.style],
    ["Color Palette", p.palette],
    ["Location", p.location],
    ["Occasion Season", p.date],
  ].filter(([, v]) => v);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-overlay/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
    >
      <div
        className="relative my-8 max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-gold/30 bg-burgundy text-rose shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gold/20 bg-burgundy/95 px-6 py-4 backdrop-blur-md">
          <span className="eyebrow text-gold">{p.category}</span>
          <button
            autoFocus
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1 text-rose transition-colors hover:text-gold"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <img src={p.cover} alt={p.title} className="aspect-[16/9] w-full object-cover" />

        <div className="grid gap-10 p-6 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <h3 className="text-3xl text-ivory md:text-4xl">{p.title}</h3>
            <p className="mt-4 leading-relaxed text-rose/90">{p.description}</p>

            <p className="eyebrow mt-8 text-gold">Services Delivered</p>
            <ul className="mt-3 space-y-1.5 text-sm text-rose/85">
              {p.services.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="text-gold">•</span> {s}
                </li>
              ))}
            </ul>
          </div>

          <dl className="space-y-4 border-t border-gold/20 pt-6 text-sm md:col-span-2 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {details.map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-rose/60">{k}</dt>
                <dd className="mt-1 font-medium text-ivory">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {p.gallery.length > 1 && (
          <div className="grid grid-cols-2 gap-4 border-t border-gold/20 px-6 py-8 md:px-10">
            {p.gallery.slice(1).map((g, i) => (
              <div key={i} className="overflow-hidden border border-gold/20">
                <img
                  src={g}
                  alt={`${p.title} detail ${i + 1}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="border-y border-gold/20 bg-wine/50 py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          eyebrow="Our Methodology"
          title="A Calm, Considered Process"
          intro="From our first conversational sketch to the final teardown, our process ensures peace of mind, artistic precision, and absolute transparency."
        />

        <ol className="grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <Reveal
              key={s.n}
              className="border-l border-gold/30 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-8"
            >
              <li className="list-none">
                <span className="font-serif text-2xl text-gold">{s.n}</span>
                <h3 className="mt-3 text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-rose/80">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-gold">Why Choose Us</p>
          <h2 className="mt-4 text-4xl leading-tight text-ivory md:text-5xl">
            Care in Every Detail
          </h2>
          <p className="mt-5 text-base leading-relaxed text-rose/85">
            We operate as a boutique studio taking on a limited number of celebrations each season
            to maintain uncompromising standards of beauty and service.
          </p>
          <div className="mt-8 hidden overflow-hidden border border-gold/25 lg:block">
            <img
              src={images.entrance}
              alt="Floral entrance walkway with candle lanterns"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform hover:scale-105 duration-700"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-gold/15 py-7 first:pt-0"
            >
              <span className="font-serif text-xl text-gold/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-ivory">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-rose/80">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [main, ...others] = testimonials;
  return (
    <section className="border-y border-gold/20 bg-wine/70 py-24 text-rose md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold">Kind Words &amp; Gratitude</p>
          <blockquote className="mt-8 font-serif text-3xl leading-snug text-ivory md:text-4xl">
            “{main.quote}”
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">
            {main.name} <span className="opacity-50">—</span> {main.event}
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 border-t border-gold/20 pt-10 md:grid-cols-2">
          {others.map((t, i) => (
            <figure key={i} className="border border-gold/20 bg-burgundy/60 p-6 backdrop-blur-sm">
              <blockquote className="font-serif text-xl leading-snug text-ivory/95">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-gold">
                {t.name} <span className="opacity-50">—</span> {t.event}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-36">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow text-gold">FAQ</p>
          <h2 className="mt-4 text-4xl leading-tight text-ivory md:text-5xl">
            Questions, Answered
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-rose/80">
            Have a custom requirement or question regarding your venue? Reach out directly via our
            consultation form.
          </p>
        </div>

        <div className="border-t border-gold/20 lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-gold/20">
                <h3 className="font-sans">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base text-ivory transition-colors hover:text-gold md:text-lg"
                  >
                    <span>{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-gold" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-gold" />
                    )}
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  hidden={!isOpen}
                  className="pb-6 pr-10 text-sm leading-relaxed text-rose/85"
                >
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
