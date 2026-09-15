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
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 border-b border-ink/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink"><span className="size-2.5 rounded-full bg-amber" />KALIPER</Link>
            <div className="mt-6 space-y-2 text-sm leading-relaxed text-ink/55">
              <p>IIIT Innovation Centre, Bengaluru, India</p>
              <p>Pickering, Ontario, Canada</p>
            </div>
          </div>
          <FooterGroup title="Services" items={["Data planning", "Data engineering", "Marketing analytics", "Product analytics", "BI & visualization", "AI & ML"]} />
          <FooterGroup title="Technology" items={["Analytics technologies", "CDP & data pipelines", "A/B testing", "Integrations", "Data navigation", "GTM Auditor"]} />
          <FooterGroup title="Company" items={["About us", "Blog", "Case studies", "Contact", "Privacy"]} />
        </div>
        <div className="flex flex-col items-start justify-between gap-4 pt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45 sm:flex-row sm:items-center">
          <p>© 2026 KALIPER · analytics made simple</p>
          <div className="flex gap-5">
            <a href="https://x.com/kaliper_io" target="_blank" rel="noreferrer" className="hover:text-ink">X @kaliper_io</a>
            <a href="https://www.linkedin.com/company/kaliper/" target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-display text-sm font-semibold text-ink">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm text-ink/50">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
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