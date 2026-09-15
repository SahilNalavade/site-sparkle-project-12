import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GtmAudit } from "@/components/gtm-audit";
import { PageShell, bookingUrl } from "@/components/kaliper-site";

const scores = [
  { value: 16, code: "DE", label: "Data engineering", color: "bg-teal" },
  { value: 49, code: "AN", label: "Analytics & BI", color: "bg-amber" },
  { value: 82, code: "ML", label: "AI & machine learning", color: "bg-ink" },
];

const metrics = [
  ["8yrs", "in practice"],
  ["100+", "client engagements"],
  ["25+", "senior consultants"],
  ["12+", "platforms in the stack"],
];

const platforms = ["Google Analytics 4", "Google Tag Manager", "Segment, certified partner", "Mixpanel", "Amplitude", "Looker", "Power BI", "Fivetran", "and the rest of your stack"];

const practices = [
  {
    code: "DE / 16.0",
    title: "Data engineering",
    copy: "Collection you can trust. We write the tracking plan, wire the CDP, and build the pipelines that move data where it earns its keep.",
    items: ["Tracking plans", "Segment & CDP setup", "ETL & reverse ETL", "Warehouse pipelines", "Data governance", "Platform migrations"],
    to: "/data-engineering-services" as const,
  },
  {
    code: "AN / 49.0",
    title: "Analytics & BI",
    copy: "From raw events to answers. Attribution, web and product analytics, and dashboards your team actually opens on Monday.",
    items: ["Marketing attribution", "Web analytics, GA4", "Product analytics", "Looker & Power BI dashboards", "A/B test measurement"],
  },
  {
    code: "ML / 82.0",
    title: "AI & machine learning",
    copy: "Models on top of clean data, in that order. Forecasting, segmentation, and LLM assistants built on the stack we just fixed.",
    items: ["Demand forecasting", "Customer segmentation", "Recommendation systems", "LLM setups & chatbots"],
    to: "/ai-ml-consulting-for-marketing" as const,
  },
];

const steps = [
  ["Step 1 · weeks 1 to 2", "Audit", "We read your GTM containers, event schemas, and dashboards, then list what is broken and what it costs you."],
  ["Step 2 · weeks 2 to 4", "Tracking plan", "Every event, property, and destination written down and signed off before anything ships."],
  ["Step 3 · weeks 4 to 10", "Build", "Pipelines, CDP wiring, dashboards. Your team reviews progress weekly."],
  ["Step 4 · handover", "You own the stack", "Documentation and training included. We leave you able to run it without us."],
];

const cases = [
  { code: "CASE / DE", title: "Unifying online and offline sales for accurate revenue attribution", copy: "Revenue attributed across both channels. Credit repair services company." },
  { code: "CASE / AN", title: "An analytics strategy reset for a digital therapeutics platform", copy: "66% cut in CDP platform cost by trimming tracked events. Health-tech company, digital therapeutics." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marketing Analytics & Data Engineering | Kaliper" },
      { name: "description", content: "Best-in-class consulting for marketing analytics, data engineering, BI, and AI. Kaliper has supported 100+ companies with tracking, pipelines, and dashboards." },
      { property: "og:title", content: "Marketing Analytics & Data Engineering | Kaliper" },
      { property: "og:description", content: "Tracking plans, pipelines, dashboards, and models behind decisions at 100+ companies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://site-sparkle-project-12.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://site-sparkle-project-12.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:py-24">
            <div>
              <p className="kal-anim font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Marketing analytics and data engineering consulting.</p>
              <h1 className="kal-anim mt-6 max-w-[15ch] text-balance font-display text-[clamp(2.7rem,6vw,4.9rem)] font-bold leading-[0.98] tracking-normal [animation-delay:80ms]">Best in class team for Marketing Analytics, Data Engineering, BI and AI Services.</h1>
            </div>
            <div className="pb-1">
              <p className="kal-anim max-w-[57ch] text-lg leading-relaxed text-ink/70 [animation-delay:160ms]">Kaliper designs the tracking plans, pipelines, and dashboards behind decisions at 100+ companies. Senior consultants with Master&apos;s degrees in marketing analytics, 8 years running.</p>
              <div className="kal-anim mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
                <Button asChild className="h-auto rounded-full bg-amber px-6 py-3.5 font-bold text-ink shadow-none hover:bg-teal hover:text-paper"><a href={bookingUrl} target="_blank" rel="noreferrer">Book a 30-minute discovery call <ArrowRight /></a></Button>
                <Button asChild variant="outline" className="h-auto rounded-full border-ink/20 bg-transparent px-6 py-3.5 font-bold shadow-none hover:bg-ink hover:text-paper"><a href="#gtm-audit">Run the free GTM audit</a></Button>
              </div>
              <p className="mt-4 text-xs text-ink/45">The call is on Calendly. The audit takes about 4 minutes.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10" aria-label="Practice calibration">
          <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[90px_1fr]">
              <div className="hidden flex-col justify-between font-mono text-[10px] text-ink/35 lg:flex" aria-hidden="true">{[100, 80, 60, 40, 20, 0].map((tick) => <span key={tick}>{tick}</span>)}</div>
              <div>
                <div className="relative flex h-[330px] items-end gap-5 border-b border-ink/20 md:gap-10">
                  {[20, 40, 60, 80].map((tick) => <span key={tick} className="absolute inset-x-0 border-t border-ink/8" style={{ bottom: `${tick}%` }} />)}
                  {scores.map((score) => (
                    <div key={score.code} className="relative z-10 flex h-full flex-1 items-end">
                      <div className="w-full">
                        <div className="mb-3 font-mono text-xs text-ink/55">{score.value.toFixed(1)} · {score.code.toLowerCase()}</div>
                        <div className={`${score.color} w-full max-w-[12rem] transition-[height] duration-700`} style={{ height: `${score.value * 2.45}px` }} />
                        <div className="mt-3 font-display text-sm font-semibold md:text-base">{score.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 grid grid-cols-2 gap-7 border-t border-ink/10 pt-8 md:grid-cols-4">
                  {metrics.map(([value, label]) => <div key={label}><p className="font-display text-3xl font-bold">{value}</p><p className="mt-1 text-sm text-ink/50">{label}</p></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10 py-8" aria-label="Technology platforms">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-ink/40">Calibrated against</p>
            <div className="ticker-mask mt-5 overflow-hidden">
              <div className="kal-ticker flex w-max items-center gap-8 whitespace-nowrap font-display text-sm font-semibold text-ink/55">
                {[...platforms, ...platforms].map((platform, index) => <span className="flex items-center gap-8" key={`${platform}-${index}`}><span>{platform}</span><span className={index % 2 ? "text-amber" : "text-teal"}>●</span></span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-6 md:grid-cols-2 md:items-end">
              <h2 className="max-w-[15ch] text-balance font-display text-4xl font-bold">What we build, precisely.</h2>
              <p className="max-w-[58ch] leading-relaxed text-ink/65">Three practices, one order of operations: collection first, then analysis, then models. Each engagement is scoped as a spec, not a retainer.</p>
            </div>
            <div className="mt-14 divide-y divide-ink/15 border-y border-ink/15">
              {practices.map((practice) => (
                <article key={practice.code} className="grid gap-8 py-10 lg:grid-cols-[180px_1fr_1fr] lg:py-12">
                  <div><span className="font-mono text-xs text-amber">{practice.code}</span><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">practice</p></div>
                  <div><h3 className="font-display text-2xl font-semibold">{practice.title}</h3><p className="mt-4 max-w-[47ch] leading-relaxed text-ink/65">{practice.copy}</p>{practice.to ? <Link to={practice.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-amber decoration-2 underline-offset-4">Know more <ArrowDownRight className="size-4" /></Link> : <span className="mt-6 inline-flex text-sm font-bold text-ink/40">Analytics consulting</span>}</div>
                  <div className="lg:pl-8"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">Capabilities</p><ul className="mt-4 grid grid-cols-1 gap-x-5 gap-y-3 text-sm text-ink/70 sm:grid-cols-2">{practice.items.map((item) => <li key={item} className="border-b border-ink/10 pb-3">{item}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-end"><h2 className="font-display text-4xl font-bold">How an engagement runs.</h2><p className="text-sm text-ink/50 md:text-right">Typical timeline. Scope moves the dates, not the order.</p></div>
            <ol className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
              {steps.map(([period, title, copy], index) => <li key={title} className="grid gap-4 py-8 md:grid-cols-[60px_220px_1fr] md:items-start"><span className="font-mono text-xs text-amber">0{index + 1}</span><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">{period}</p><h3 className="mt-2 font-display text-xl font-semibold">{title}</h3></div><p className="max-w-[58ch] text-sm leading-relaxed text-ink/65">{copy}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
            <h2 className="font-display text-4xl font-bold">Case studies</h2>
            <div className="mt-12 divide-y divide-paper/20 border-y border-paper/20">
              {cases.map((study) => <article key={study.code} className="grid gap-5 py-9 md:grid-cols-[150px_1fr_.7fr]"><span className="font-mono text-xs text-amber">{study.code}</span><h3 className="max-w-[28ch] font-display text-2xl font-semibold leading-snug">{study.title}</h3><div><p className="text-sm leading-relaxed text-paper/60">{study.copy}</p><span className="mt-5 inline-flex text-sm font-bold text-paper/40">Read the case study</span></div></article>)}
            </div>
            <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">Browse the case studies index</p>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[.7fr_1.3fr]">
            <div><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Field notes</span><h2 className="mt-5 font-display text-3xl font-bold">Short, practical write-ups from client work.</h2></div>
            <div className="divide-y divide-ink/15 border-y border-ink/15">
              <article className="grid grid-cols-[90px_1fr] py-6"><time className="font-mono text-xs text-ink/45">Jul 2026</time><h3 className="font-display text-lg font-semibold">test</h3></article>
              <article className="grid grid-cols-[90px_1fr] py-6"><time className="font-mono text-xs text-ink/45">Jul 2026</time><h3 className="font-display text-lg font-semibold">data-engineering</h3></article>
              <article className="grid grid-cols-[90px_1fr] py-6"><time className="font-mono text-xs text-ink/45">Jun 2026</time><h3 className="max-w-[38ch] font-display text-lg font-semibold">Data Pipeline Architecture: What It Is, How It Works, and When You Need a Consultant</h3></article>
            </div>
          </div>
        </section>

        <GtmAudit />

        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Bring one dashboard you don&apos;t trust.</p><h2 className="mt-5 max-w-[18ch] text-balance font-display text-4xl font-bold">Book a 30-minute discovery call.</h2><p className="mt-5 max-w-[56ch] leading-relaxed text-ink/65">You&apos;ll leave knowing why the number is wrong, whether or not we work together.</p></div>
            <div className="flex flex-wrap gap-3"><Button asChild className="h-auto rounded-full bg-ink px-6 py-3.5 font-bold text-paper shadow-none hover:bg-teal"><a href={bookingUrl} target="_blank" rel="noreferrer">Pick a time on Calendly <ArrowRight /></a></Button><Button asChild variant="outline" className="h-auto rounded-full border-ink/20 bg-transparent px-6 py-3.5 font-bold shadow-none"><a href="#gtm-audit">Run the free GTM audit first</a></Button></div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
