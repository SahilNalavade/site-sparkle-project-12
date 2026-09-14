import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Database, GitMerge, Layers3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConsultationBand, PageShell, bookingUrl } from "@/components/kaliper-site";

const services = [
  ["Data integration", "Unify CRM, advertising, product, and email data through dependable ETL and ELT pipelines."],
  ["CDP implementation", "Create a clean customer view, resolve identities, and make Segment or your chosen CDP usable across teams."],
  ["Migration & transformation", "Move platforms and reshape data with controlled cutovers, validation, and minimal disruption."],
  ["AI/ML enablement", "Prepare governed, timely datasets that predictive systems can consume without fragile manual work."],
  ["Pipeline consulting", "Design and tune ingestion, orchestration, metadata, and lineage around performance and ownership."],
  ["Data architecture", "Choose a vendor-neutral structure that fits your volume, team, security, and reporting needs."],
];

export const Route = createFileRoute("/data-engineering-services")({
  head: () => ({
    meta: [
      { title: "Data Engineering Services & Consulting | Kaliper" },
      { name: "description", content: "Build reliable data pipelines, CDPs, migrations, warehouses, and analytics-ready architecture with Kaliper." },
      { property: "og:title", content: "Data Engineering Services & Consulting | Kaliper" },
      { property: "og:description", content: "Reliable data foundations for modern marketing, analytics, and AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/data-engineering-services/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/data-engineering-services/" }],
  }),
  component: DataEngineeringPage,
});

function DataEngineeringPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <div>
              <span className="kal-anim font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Data engineering services</span>
              <h1 className="kal-anim mt-6 max-w-[13ch] text-balance font-display text-[clamp(2.7rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-normal [animation-delay:80ms]">A data foundation built to carry the business.</h1>
              <p className="kal-anim mt-7 max-w-[58ch] text-lg leading-relaxed text-ink/70 [animation-delay:160ms]">We design pipelines, CDPs, warehouses, and data models that keep marketing measurement reliable as your channels, volume, and team grow.</p>
              <Button asChild className="kal-anim mt-8 h-auto rounded-full bg-amber px-6 py-3.5 font-bold text-ink shadow-none hover:bg-teal hover:text-paper [animation-delay:240ms]"><a href={bookingUrl} target="_blank" rel="noreferrer">Plan your data foundation <ArrowRight /></a></Button>
            </div>
            <div className="kal-anim rounded-2xl border border-ink/10 bg-paper/65 p-6 shadow-instrument backdrop-blur-xl [animation-delay:200ms]">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45"><span>Pipeline status</span><span className="text-teal">Healthy</span></div>
              <div className="mt-9 space-y-5">
                {[{ icon: GitMerge, label: "Sources", value: "12 connected", width: "w-2/3" }, { icon: Layers3, label: "Transformation", value: "Validated", width: "w-5/6" }, { icon: Database, label: "Warehouse", value: "Current", width: "w-full" }].map(({ icon: Icon, label, value, width }) => <div key={label} className="flex items-center gap-4"><span className="grid size-10 place-items-center rounded-full bg-ink text-paper"><Icon className="size-4" /></span><div className="min-w-0 flex-1"><div className="flex justify-between text-xs"><span className="font-semibold">{label}</span><span className="text-ink/45">{value}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10"><div className={`h-full rounded-full bg-teal ${width}`} /></div></div></div>)}
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5 text-sm text-ink/60"><Check className="size-4 text-teal" />All quality checks passed</div>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Capabilities</span><h2 className="mt-5 max-w-[20ch] text-balance font-display text-3xl font-bold md:text-4xl">The systems between raw data and confident decisions.</h2></div><p className="max-w-[42ch] text-sm leading-relaxed text-ink/60">Vendor-neutral architecture, implemented around how your teams work and what they need to measure.</p></div>
            <div className="mt-12 columns-1 gap-10 border-t border-ink/15 md:columns-2">
              {services.map(([title, copy], index) => <article key={title} className="break-inside-avoid border-b border-ink/15 py-7"><div className="flex gap-5"><span className="font-mono text-xs text-amber">0{index + 1}</span><div><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/65">{copy}</p></div></div></article>)}
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">The Kaliper advantage</span><h2 className="mt-5 max-w-[16ch] text-balance font-display text-3xl font-bold md:text-4xl">Architecture measured by what it unlocks.</h2></div><p className="max-w-[62ch] text-lg leading-relaxed text-paper/65">We don’t impose a fashionable stack. We map the flow from source to decision, then choose the simplest dependable architecture that improves campaign tracking, reporting speed, and model readiness.</p></div>
            <div className="mt-14 flex flex-col border-y border-paper/20 md:flex-row">
              {["Business context first", "Observable pipelines", "Ownership transferred", "Tools chosen to fit"].map((item, index) => <div key={item} className="flex flex-1 items-center gap-3 border-b border-paper/20 py-5 md:border-b-0 md:border-r md:px-5 first:md:pl-0 last:md:border-r-0"><span className="font-mono text-xs text-amber">0{index + 1}</span><span className="text-sm font-semibold">{item}</span></div>)}
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
            <div><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Delivery sequence</span><h2 className="mt-5 max-w-[18ch] text-balance font-display text-3xl font-bold md:text-4xl">Make the flow visible before making it faster.</h2></div>
            <ol className="space-y-7">{[["01", "Map", "Sources, owners, dependencies, and business-critical outputs."], ["02", "Design", "Contracts, transformations, storage, orchestration, and observability."], ["03", "Build", "Incremental releases with reconciliation and quality checks."], ["04", "Operate", "Documentation, monitoring, and a clear support path after handover."]].map(([number, title, copy]) => <li key={title} className="flex gap-5"><span className="font-mono text-xs text-amber">{number}</span><div><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-ink/65">{copy}</p></div></li>)}</ol>
          </div>
        </section>
        <ConsultationBand title="Build the layer every decision depends on." copy="Tell us where your data breaks down today. We’ll map the architecture, priorities, and clearest path to a reliable system." />
      </main>
    </PageShell>
  );
}