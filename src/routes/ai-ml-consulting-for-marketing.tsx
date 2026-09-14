import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConsultationBand, PageShell, bookingUrl } from "@/components/kaliper-site";

const capabilities = [
  ["Predictive scoring", "Forecast churn, lifetime value, and conversion propensity from behavioral and transactional signals."],
  ["Marketing mix modeling", "Measure saturation and cross-channel effects with models built for your spend patterns."],
  ["Audience modeling", "Replace static demographic groups with behavior-led segments that evolve with customers."],
  ["Data-driven attribution", "Estimate the marginal value of touchpoints instead of relying on fixed attribution rules."],
  ["Applied generative AI", "Deploy narrow, valuable tools for creative testing, research, and internal data access."],
];

const process = ["Audit", "Feature engineering", "Validation", "Integration", "Monitoring"];

export const Route = createFileRoute("/ai-ml-consulting-for-marketing")({
  head: () => ({
    meta: [
      { title: "AI/ML Consulting for Marketing | Kaliper" },
      { name: "description", content: "Build production-ready marketing AI for predictive scoring, MMM, audience modeling, attribution, and practical generative AI." },
      { property: "og:title", content: "AI/ML Consulting for Marketing | Kaliper" },
      { property: "og:description", content: "Move from AI dashboards to marketing models your team can operate, measure, and trust." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/ai-ml-consulting-for-marketing/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-ml-consulting-for-marketing/" }],
  }),
  component: AiMarketingPage,
});

function AiMarketingPage() {
  return (
    <PageShell>
      <main>
        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.25fr_.75fr] lg:py-24">
            <div>
              <span className="kal-anim font-mono text-[11px] uppercase tracking-[0.18em] text-teal">AI / ML consulting · Marketing</span>
              <h1 className="kal-anim mt-6 max-w-[14ch] text-balance font-display text-[clamp(2.7rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-normal [animation-delay:80ms]">Models that change the next marketing decision.</h1>
              <p className="kal-anim mt-7 max-w-[58ch] text-lg leading-relaxed text-ink/70 [animation-delay:160ms]">Move beyond AI-labelled dashboards. We design, validate, and integrate predictive systems around the real decisions your marketing team makes.</p>
              <Button asChild className="kal-anim mt-8 h-auto rounded-full bg-amber px-6 py-3.5 font-bold text-ink shadow-none hover:bg-teal hover:text-paper [animation-delay:240ms]"><a href={bookingUrl} target="_blank" rel="noreferrer">Discuss your use case <ArrowDownRight /></a></Button>
            </div>
            <div className="kal-anim rounded-2xl border border-ink/10 bg-paper/65 p-6 shadow-instrument backdrop-blur-xl [animation-delay:200ms]">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45"><span>Propensity model</span><span className="text-teal">Live signal</span></div>
              <div className="relative mt-9 h-52 border-b border-l border-ink/15">
                <div className="absolute inset-x-0 top-1/3 border-t border-dashed border-ink/10" />
                <div className="absolute inset-x-0 top-2/3 border-t border-dashed border-ink/10" />
                <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none" aria-label="Predictive signal rising over time">
                  <path d="M0 176 C58 168 54 130 108 137 S166 152 210 99 S283 91 318 48 S372 25 400 14" fill="none" stroke="currentColor" strokeWidth="4" className="text-teal" />
                  <path d="M0 186 C70 181 80 170 132 169 S205 151 259 150 S345 115 400 108" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 7" className="text-amber" />
                </svg>
                <span className="absolute right-0 top-0 size-3 rounded-full border-2 border-paper bg-teal shadow" />
              </div>
              <div className="mt-5 flex justify-between font-mono text-[10px] text-ink/40"><span>Observed</span><span>Predicted</span><span>Activated</span></div>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-2xl"><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">What we build</span><h2 className="mt-5 text-balance font-display text-3xl font-bold md:text-4xl">AI that enters the workflow—not another dashboard beside it.</h2></div>
            <div className="mt-12 border-t border-ink/15">
              {capabilities.map(([title, copy], index) => <article key={title} className="grid gap-4 border-b border-ink/15 py-7 md:grid-cols-[90px_1fr_1.35fr] md:items-start"><span className="font-mono text-xs text-amber">0{index + 1}</span><h3 className="font-display text-xl font-semibold">{title}</h3><p className="max-w-[60ch] text-sm leading-relaxed text-ink/65">{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[.8fr_1.2fr]">
            <div><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">From hypothesis to operation</span><h2 className="mt-5 max-w-[15ch] text-balance font-display text-3xl font-bold md:text-4xl">A model is only useful when it survives contact with the business.</h2><p className="mt-5 max-w-[46ch] leading-relaxed text-paper/65">Every engagement accounts for the data feeding the model, the system receiving its output, and the monitoring needed after launch.</p></div>
            <ol className="border-t border-paper/20">
              {process.map((step, index) => <li key={step} className="flex items-center gap-5 border-b border-paper/20 py-5"><span className="grid size-9 shrink-0 place-items-center rounded-full border border-paper/25 font-mono text-xs text-amber">{index + 1}</span><span className="font-display text-lg font-semibold">{step}</span>{index < process.length - 1 ? <ArrowDownRight className="ml-auto text-paper/35" /> : <Check className="ml-auto text-teal" />}</li>)}
            </ol>
          </div>
        </section>

        <section className="border-b border-ink/10">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-3">
            <div className="lg:col-span-2"><span className="font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Before the model</span><h2 className="mt-5 max-w-[18ch] text-balance font-display text-3xl font-bold md:text-4xl">Data quality is the first AI capability.</h2><p className="mt-5 max-w-[65ch] leading-relaxed text-ink/70">Duplicate events, unstable identity resolution, and inaccessible historical data stop more AI initiatives than model choice. We verify the foundation before promising the outcome.</p></div>
            <aside className="border-l-4 border-amber pl-6"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Readiness check</p><ul className="mt-5 space-y-4 text-sm text-ink/70">{["Reliable event history", "Resolvable customer identities", "Clear activation destination", "Named model owner"].map((item) => <li key={item} className="flex gap-3"><Check className="size-4 shrink-0 text-teal" />{item}</li>)}</ul></aside>
          </div>
        </section>
        <ConsultationBand title="Make AI answer a real marketing question." copy="Bring us the decision you want to improve. We’ll help determine whether the data, model, and operational path can support it." />
      </main>
    </PageShell>
  );
}