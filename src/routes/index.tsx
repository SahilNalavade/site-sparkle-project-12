import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

const bookingUrl = "https://calendly.com/kalipr_expert/discovery-call";

const tools = ["Segment", "Mixpanel", "Power BI", "Looker", "Fivetran", "Amplitude", "Google Analytics 4", "Statsig", "Heap"];

const metrics = [
  ["8+", "Years in business"],
  ["100+", "Clients served"],
  ["25+", "Experts & consultants"],
  ["3", "Core disciplines"],
];

const services = [
  {
    number: "01",
    title: "Data Engineering",
    copy: "Robust pipelines, governed warehouses, and clean models that make every event countable, replayable, and trustworthy.",
    bars: [45, 70, 100],
    colors: ["bg-ink/15", "bg-ink/25", "bg-amber"],
  },
  {
    number: "02",
    title: "Data Analytics",
    copy: "Marketing and product analytics, attribution, and BI dashboards that surface the decisions leadership actually makes.",
    bars: [90, 70, 55],
    colors: ["bg-teal/40", "bg-teal/55", "bg-teal/70"],
  },
  {
    number: "03",
    title: "AI Transformations",
    copy: "Practical forecasting, customer segmentation, recommendation systems, and LLM solutions embedded in your existing stack.",
    bars: [40, 65, 95],
    colors: ["bg-amber/55", "bg-amber/75", "bg-ink"],
  },
];

const reasons = [
  ["01", "Deep business understanding", "We begin with your business environment and data landscape, not a predetermined stack."],
  ["02", "Effective architecture", "Every solution is designed around the specific problem, with long-term usability built in."],
  ["03", "On-time delivery", "Agile, testable milestones keep teams aligned and make progress visible from the start."],
  ["04", "Enduring support", "Clear documentation and post-project support make every solution easier to own and evolve."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marketing Analytics & Data Engineering | Kaliper" },
      { name: "description", content: "Kaliper builds marketing analytics, data engineering, BI, and AI systems that turn complex data into clear business decisions." },
      { property: "og:title", content: "Marketing Analytics & Data Engineering | Kaliper" },
      { property: "og:description", content: "Turn marketing spend into signal with Kaliper's analytics, data engineering, BI, and AI expertise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper font-sans text-ink selection:bg-amber/30">
      <div className="measurement-grid pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
          <nav aria-label="Main navigation" className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
              <span className="size-2.5 rounded-full bg-amber" aria-hidden="true" />
              <span>Kaliper</span>
            </a>
            <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
              <a href="#services" className="text-ink/65 underline-offset-4 transition-colors hover:text-ink hover:underline">Services</a>
              <a href="#proof" className="text-ink/65 underline-offset-4 transition-colors hover:text-ink hover:underline">Results</a>
              <a href="#approach" className="text-ink/65 underline-offset-4 transition-colors hover:text-ink hover:underline">Why Kaliper</a>
            </div>
            <div className="flex items-center gap-3">
              <a href={bookingUrl} target="_blank" rel="noreferrer" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-teal sm:inline-flex">Talk to an Expert</a>
              <button type="button" className="grid size-10 place-items-center rounded-full border border-ink/15 bg-paper text-ink md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                <span className="font-mono text-lg leading-none">{menuOpen ? "×" : "≡"}</span>
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div className="border-t border-ink/10 bg-paper px-5 py-5 md:hidden">
              <div className="flex flex-col gap-4 text-sm font-semibold">
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#proof" onClick={() => setMenuOpen(false)}>Results</a>
                <a href="#approach" onClick={() => setMenuOpen(false)}>Why Kaliper</a>
                <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-1 inline-flex w-fit rounded-full bg-ink px-5 py-2.5 text-paper">Talk to an Expert</a>
              </div>
            </div>
          )}
        </header>

        <main id="top">
          <section className="border-b border-ink/10">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-24">
              <div className="lg:col-span-7">
                <div className="kal-anim inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-teal backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-amber" /> Marketing analytics consultancy
                </div>
                <h1 className="kal-anim mt-6 max-w-[13ch] text-balance font-display text-[clamp(2.65rem,6vw,4.6rem)] font-bold leading-[0.98] tracking-normal [animation-delay:80ms]">
                  Precision analytics for marketing that actually moves.
                </h1>
                <p className="kal-anim mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70 [animation-delay:160ms]">
                  Kaliper measures what matters across your marketing stack. We build the data engineering, analytics, BI, and AI systems that turn spend into signal.
                </p>
                <div className="kal-anim mt-8 flex flex-wrap items-center gap-5 [animation-delay:240ms]">
                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-teal hover:text-paper">Talk to an Expert</a>
                  <a href="#services" className="text-sm font-bold underline decoration-amber decoration-2 underline-offset-4">Explore services</a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="kal-anim rounded-2xl border border-ink/10 bg-paper/55 p-6 shadow-instrument backdrop-blur-xl [animation-delay:200ms]">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-ink/50"><span>Marketing signal index</span><span className="text-teal">Calibrated</span></div>
                  <div className="mt-8 flex h-44 items-end gap-2" aria-label="Rising marketing signal chart">
                    {[40, 55, 62, 74, 88, 96].map((height, index) => <div key={height} className={`flex-1 rounded-t-sm ${index < 2 ? "bg-ink/15" : index < 4 ? "bg-teal/55" : "bg-amber"}`} style={{ height: `${height}%` }} />)}
                  </div>
                  <div className="mt-4 flex justify-between font-mono text-[10px] text-ink/40"><span>Discover</span><span>Model</span><span>Measure</span><span>Grow</span></div>
                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-ink/10 pt-5">
                    {["Pipeline", "Analytics", "AI"].map((label, index) => <div key={label}><div className="font-display text-xl font-bold text-ink">0{index + 1}</div><div className="mt-1 text-[11px] text-ink/50">{label}</div></div>)}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-ink/10 py-8" aria-label="Technology platforms">
            <div className="mx-auto max-w-[1400px] px-5 md:px-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40">Integrated with the tools you already run</p>
              <div className="ticker-mask mt-5 overflow-hidden">
                <div className="kal-ticker flex w-max items-center gap-10 whitespace-nowrap font-display text-base font-semibold text-ink/50">
                  {[...tools, ...tools].map((tool, index) => <span className="flex items-center gap-10" key={`${tool}-${index}`}><span>{tool}</span><span className={index % 2 === 0 ? "text-amber" : "text-teal"}>●</span></span>)}
                </div>
              </div>
            </div>
          </section>

          <section id="proof" className="scroll-mt-20 border-b border-ink/10">
            <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-16">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-4">
                {metrics.map(([value, label], index) => <div className="bg-paper/65 p-5 backdrop-blur-xl md:p-7" key={label}><div className={`font-display text-4xl font-bold ${index === 3 ? "text-teal" : "text-ink"}`}>{value}</div><div className="mt-2 text-sm text-ink/60">{label}</div></div>)}
              </div>
            </div>
          </section>

          <section id="services" className="scroll-mt-20 border-b border-ink/10">
            <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
              <div className="mb-10 flex items-end justify-between gap-8">
                <h2 className="max-w-[22ch] text-balance font-display text-3xl font-bold tracking-normal md:text-4xl">Three disciplines, one measurement standard.</h2>
                <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink/40 md:block">Services</span>
              </div>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
                {services.map((service) => <article className="bg-paper/60 p-7 backdrop-blur-xl" key={service.title}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">({service.number})</span>
                  <div className="mt-5 flex h-16 items-end gap-1.5" aria-hidden="true">{service.bars.map((height, index) => <div key={height} className={`flex-1 rounded-t-sm ${service.colors[index]}`} style={{ height: `${height}%` }} />)}</div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.copy}</p>
                </article>)}
              </div>
            </div>
          </section>

          <section id="approach" className="scroll-mt-20 border-b border-ink/10">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Why Kaliper</span>
                <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-normal md:text-4xl">Calibrated, collaborative, and accountable.</h2>
                <p className="mt-5 max-w-[44ch] leading-relaxed text-ink/70">We go beyond solution delivery. Every engagement starts with business context and ends with dependable systems your team can continue using.</p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
                  {reasons.map(([number, title, copy]) => <article className="bg-paper/60 p-6 backdrop-blur-xl" key={title}><div className="font-mono text-[11px] text-amber">{number}</div><h3 className="mt-3 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-ink/65">{copy}</p></article>)}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-mt-20">
            <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
              <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-paper/60 px-6 py-14 text-center shadow-instrument backdrop-blur-2xl md:px-16 md:py-20">
                <div className="relative">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Next step</span>
                  <h2 className="mx-auto mt-5 max-w-[22ch] text-balance font-display text-4xl font-bold leading-tight tracking-normal md:text-5xl">Put your marketing data on the right scale.</h2>
                  <p className="mx-auto mt-5 max-w-[50ch] leading-relaxed text-ink/70">Start with a discovery call and a clear conversation about your goals, data landscape, and most valuable next move.</p>
                  <a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 text-base font-semibold text-paper transition-colors hover:bg-teal">Talk to an Expert</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-ink/10">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-ink/50 sm:flex-row sm:items-center md:px-8">
            <div className="flex items-center gap-2 font-display font-bold text-ink"><span className="size-2 rounded-full bg-amber" />Kaliper</div>
            <p>Marketing Analytics · Data Engineering · BI · AI</p>
            <a href="https://www.linkedin.com/company/kaliper/" target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-ink hover:underline">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
}