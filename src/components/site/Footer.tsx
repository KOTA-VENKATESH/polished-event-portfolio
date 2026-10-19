import { business, nav, services } from "@/config/site";

export function Footer() {
  const socials = Object.entries(business.social).filter(([, url]) => url);
  return (
    <footer className="bg-ink py-16 text-ink-foreground">
      <div className="container-x grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-serif text-3xl">{business.name}</p>
          <p className="mt-4 text-sm leading-relaxed opacity-70">{business.description}</p>
        </div>
        <div>
          <p className="eyebrow text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">{nav.map((n) => <li key={n.href}><a href={n.href} className="link-line">{n.label}</a></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Services</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">{services.slice(0, 6).map((s) => <li key={s.title}>{s.title}</li>)}</ul>
        </div>
        <div>
          <p className="eyebrow text-accent">Contact</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>{business.phone || "Phone — to be added"}</li>
            <li>{business.email || "Email — to be added"}</li>
            {business.address && <li>{business.address}</li>}
            {socials.map(([k, url]) => <li key={k}><a href={url} target="_blank" rel="noreferrer" className="capitalize link-line">{k}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="container-x mt-14 flex flex-col justify-between gap-3 border-t border-ink-foreground/15 pt-6 text-xs opacity-60 sm:flex-row">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <a href="#home" className="link-line">Back to top ↑</a>
      </div>
    </footer>
  );
}
