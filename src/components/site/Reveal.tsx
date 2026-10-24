import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl md:mb-20", center && "mx-auto text-center")}>
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}
