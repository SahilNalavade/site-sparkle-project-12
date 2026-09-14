import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export const bookingUrl = "https://calendly.com/kaliper_expert/discovery-call";

const navItems = [
  { to: "/data-engineering-services" as const, label: "Data Engineering" },
  { to: "/ai-ml-consulting-for-marketing" as const, label: "AI for Marketing" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
          <span className="size-2.5 rounded-full bg-amber" aria-hidden="true" />
          <span>Kaliper</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "text-ink" }} inactiveProps={{ className: "text-ink/60" }} className="underline-offset-4 transition-colors hover:text-ink hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden h-auto rounded-full bg-ink px-5 py-2.5 text-paper shadow-none hover:bg-teal sm:inline-flex">
            <a href={bookingUrl} target="_blank" rel="noreferrer">Talk to an Expert</a>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-ink/15 bg-paper shadow-none md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-t border-ink/10 bg-paper px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            {navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
            <Button asChild className="mt-1 h-auto w-fit rounded-full bg-ink px-5 py-2.5 text-paper shadow-none"><a href={bookingUrl} target="_blank" rel="noreferrer">Talk to an Expert</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-5 px-5 py-8 text-sm text-ink/50 sm:flex-row sm:items-center md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-ink"><span className="size-2 rounded-full bg-amber" />Kaliper</Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => <Link key={item.to} to={item.to} className="hover:text-ink">{item.label}</Link>)}
        </div>
        <a href="https://www.linkedin.com/company/kaliper/" target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-ink hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink selection:bg-amber/30"><SiteHeader />{children}<SiteFooter /></div>;
}

export function ConsultationBand({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <div className="rounded-3xl border border-ink/10 bg-paper/60 px-6 py-14 text-center shadow-instrument backdrop-blur-2xl md:px-16 md:py-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Next step</span>
          <h2 className="mx-auto mt-5 max-w-[22ch] text-balance font-display text-4xl font-bold leading-tight tracking-normal md:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-[55ch] leading-relaxed text-ink/70">{copy}</p>
          <Button asChild className="mt-8 h-auto rounded-full bg-ink px-7 py-4 text-base text-paper shadow-none hover:bg-teal"><a href={bookingUrl} target="_blank" rel="noreferrer">Talk to an Expert</a></Button>
        </div>
      </div>
    </section>
  );
}