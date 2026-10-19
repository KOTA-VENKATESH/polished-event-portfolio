import { useState } from "react";
import { ArrowRight, Minus, Plus, X } from "lucide-react";
import { business, faqs, images, projects, reasons, services, steps, testimonials, type Project } from "@/config/site";
import { Reveal, SectionHead } from "./Reveal";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden text-ink-foreground">
      <img src={images.hero} alt="Floral wedding reception stage with warm lighting" width={1920} height={1088}
        className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="hero-scrim absolute inset-0" />
      <div className="container-x relative pb-16 pt-32 md:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow opacity-90">Event Planning &amp; Bespoke Decor</p>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">
            Beautifully Planned.<br /><em className="font-light">Unforgettable Moments.</em>
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed opacity-90 md:text-lg">
            From intimate celebrations to grand weddings, we bring your vision to life with thoughtful planning, beautiful details, and seamless execution.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="bg-ink-foreground px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-90">Explore Our Work</a>
            <a href="#contact" className="border border-ink-foreground/70 px-7 py-3.5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink-foreground hover:text-ink">Plan Your Event</a>
          </div>
        </div>
        <p className="mt-14 border-t border-ink-foreground/30 pt-5 text-xs uppercase tracking-[0.2em] opacity-80">{business.serviceArea}</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-x grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <img src={images.mandap} alt="Jasmine-draped wedding mandap" width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7">
          <p className="eyebrow text-accent">About Us</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Every Celebration Has a Story</h2>
          <p className="mt-7 font-serif text-2xl leading-snug text-primary">
            We believe every celebration deserves to feel personal.
          </p>
          <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
            <p>From the first idea to the final detail, we work closely with you to create thoughtful experiences that reflect your style, your traditions, and the moments that matter most.</p>
            <p>Our approach pairs considered design with calm, careful execution — so you can be present with your guests while we take care of the rest.</p>
          </div>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-primary link-line">
            Our Story <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const [lead, ...rest] = services;
  return (
    <section id="services" className="border-t bg-card py-24 md:py-36">
      <div className="container-x">
        <SectionHead eyebrow="What We Do" title="Services for every occasion" intro="Planning and decoration shaped around your celebration — from a single ceremony to a multi-day wedding." />
        <Reveal className="grid gap-10 border-b pb-16 md:grid-cols-2 md:items-center md:gap-16">
          <img src={lead.image} alt={lead.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div>
            <p className="eyebrow text-muted-foreground">01</p>
            <h3 className="mt-3 text-3xl md:text-4xl">{lead.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{lead.text}</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary link-line">Enquire about this service <ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
        <div className="grid gap-x-10 gap-y-16 pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((s, i) => (
            <Reveal key={s.title} className={cn(i % 3 === 1 && "lg:mt-16")}>
              <img src={s.image} alt={s.title} loading="lazy" className={cn("w-full object-cover", i % 2 ? "aspect-[4/5]" : "aspect-[4/3]")} />
              <p className="eyebrow mt-6 text-muted-foreground">{String(i + 2).padStart(2, "0")}</p>
              <h3 className="mt-2 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <a href="#gallery" className="mt-4 inline-flex items-center gap-2 text-sm text-primary link-line">View events <ArrowRight className="h-4 w-4" /></a>
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
  const layout = ["md:col-span-12 aspect-[16/9]", "md:col-span-5 aspect-[4/5]", "md:col-span-7 aspect-[4/5] md:aspect-auto md:h-full", "md:col-span-12 aspect-[16/9]"];
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHead eyebrow="Featured Work" title="Celebrations We've Brought to Life" intro="A selection of setups and styling. Sample projects are shown — replace them with your own completed events." />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-12">
          {list.map((p, i) => (
            <Reveal key={p.slug} className={cn("flex flex-col", layout[i % layout.length].split(" ")[0])}>
              <button type="button" onClick={() => setActive(p)} className="group block flex-1 text-left" aria-label={`View project: ${p.title}`}>
                <div className={cn("overflow-hidden bg-muted", layout[i % layout.length].split(" ").slice(1).join(" "))}>
                  <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b pb-4">
                  <h3 className="text-2xl md:text-3xl">{p.title}</h3>
                  <span className="eyebrow shrink-0 text-muted-foreground">{p.category}</span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
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
  const details = [["Event type", p.type], ["Theme", p.theme], ["Decoration style", p.style], ["Colour palette", p.palette], ["Location", p.location], ["Date", p.date]].filter(([, v]) => v);
  return (
    <div role="dialog" aria-modal="true" aria-label={p.title} className="fixed inset-0 z-50 overflow-y-auto bg-overlay/80" onClick={onClose}
      onKeyDown={(e) => e.key === "Escape" && onClose()}>
      <div className="mx-auto my-8 max-w-4xl bg-background md:my-16" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b px-6 py-4">
          <span className="eyebrow text-accent">{p.category}</span>
          <button autoFocus onClick={onClose} aria-label="Close project" className="p-1"><X className="h-5 w-5" /></button>
        </div>
        <img src={p.cover} alt={p.title} className="aspect-[16/9] w-full object-cover" />
        <div className="grid gap-10 p-6 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <h3 className="text-4xl">{p.title}</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
            <p className="eyebrow mt-8 text-muted-foreground">Services delivered</p>
            <ul className="mt-3 space-y-1 text-sm">{p.services.map((s) => <li key={s}>— {s}</li>)}</ul>
          </div>
          <dl className="space-y-4 border-t pt-6 text-sm md:col-span-2 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {details.map(([k, v]) => (<div key={k}><dt className="eyebrow text-muted-foreground">{k}</dt><dd className="mt-1">{v}</dd></div>))}
          </dl>
        </div>
        {p.gallery.length > 1 && (
          <div className="grid grid-cols-2 gap-3 px-6 pb-10 md:px-10">
            {p.gallery.slice(1).map((g, i) => <img key={i} src={g} alt={`${p.title} detail ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />)}
          </div>
        )}
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="border-y bg-secondary py-24 md:py-32">
      <div className="container-x">
        <SectionHead eyebrow="How We Work" title="A calm, considered process" />
        <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((s) => (
            <Reveal key={s.n} className="border-l pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-8">
              <li className="list-none">
                <span className="font-serif text-xl text-accent">{s.n}</span>
                <h3 className="mt-2 text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
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
      <div className="container-x grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-accent">Why Choose Us</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Care in every detail</h2>
          <img src={images.entrance} alt="Floral entrance walkway with lanterns" loading="lazy" className="mt-10 hidden aspect-[3/4] w-full object-cover md:block" />
        </Reveal>
        <div className="md:col-span-7 md:col-start-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b py-7 first:pt-0">
              <span className="font-serif text-lg text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-2xl">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
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
    <section className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-accent">Kind Words · Sample content</p>
          <blockquote className="mt-8 font-serif text-3xl leading-snug md:text-4xl">“{main.quote}”</blockquote>
          <p className="mt-6 text-sm tracking-wide opacity-80">{main.name} — {main.event}</p>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-4xl gap-10 border-t border-primary-foreground/20 pt-10 md:grid-cols-2">
          {others.map((t, i) => (
            <figure key={i}>
              <blockquote className="font-serif text-xl leading-snug opacity-90">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] opacity-70">{t.name} — {t.event}</figcaption>
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
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow text-accent">FAQ</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-5xl">Questions, answered</h2>
        </div>
        <div className="border-t md:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b">
                <h3 className="font-sans">
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base md:text-lg">
                    {f.q}
                    {isOpen ? <Minus className="h-4 w-4 shrink-0 text-accent" /> : <Plus className="h-4 w-4 shrink-0 text-accent" />}
                  </button>
                </h3>
                <div id={`faq-${i}`} hidden={!isOpen} className="pb-6 pr-10 leading-relaxed text-muted-foreground">{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
