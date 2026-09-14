import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ConsultationBand, PageShell, bookingUrl } from "@/components/kaliper-site";

const sections = [
  { id: "beyond-the-label", label: "Beyond the AI label" },
  { id: "what-actually-works", label: "What actually works" },
  { id: "readiness", label: "The readiness question" },
  { id: "operating-model", label: "Operating a model" },
  { id: "takeaways", label: "Takeaways" },
];

const useCases = [
  ["Predictive scoring", "Forecast churn, lifetime value, and conversion propensity from behavioral and transactional signals — then push the scores into the tools where campaigns are actually built."],
  ["Marketing mix modeling", "Measure saturation and cross-channel effects with models fitted to your own spend patterns, not an agency's generic benchmark curve."],
  ["Audience modeling", "Replace static demographic groups with behavior-led segments that update as customers change."],
  ["Data-driven attribution", "Estimate the marginal value of a touchpoint instead of trusting a fixed last-click or linear rule."],
  ["Applied generative AI", "Narrow, valuable tools: creative variant testing, research synthesis, and plain-language access to internal data."],
];

const readiness = [
  "Reliable event history going back far enough to train on",
  "Customer identities that resolve across channels",
  "A clear activation destination for the model output",
  "A named owner who acts on what the model says",
];

const takeaways = [
  "Start from the decision you want to improve, not the model you want to build.",
  "Data quality is the first AI capability — everything downstream inherits its flaws.",
  "A model that nobody has wired into a workflow produces no value, however accurate it is.",
  "Monitoring is part of the build, not a phase-two item.",
];

export const Route = createFileRoute("/ai-ml-consulting-for-marketing")({
  head: () => ({
    meta: [
      { title: "Why Most Marketing AI Never Ships | Kaliper Blog" },
      { name: "description", content: "A field guide to marketing AI that reaches production: predictive scoring, mix modeling, attribution, data readiness, and the operating habits behind each." },
      { property: "og:title", content: "Why Most Marketing AI Never Ships" },
      { property: "og:description", content: "Predictive scoring, mix modeling, attribution — and the data readiness that decides whether any of it survives contact with the business." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/ai-ml-consulting-for-marketing/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-ml-consulting-for-marketing/" }],
  }),
  component: AiMarketingArticle,
});

function AiMarketingArticle() {
  return (
    <PageShell>
      <main>
        <article>
          <header className="border-b border-ink/10">
            <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 lg:py-24">
              <div className="max-w-[46rem]">
                <span className="kal-anim font-mono text-[11px] uppercase tracking-[0.18em] text-teal">Blog · AI &amp; machine learning</span>
                <h1 className="kal-anim mt-6 text-balance font-display text-[clamp(2.3rem,5vw,4rem)] font-bold leading-[1.02] [animation-delay:80ms]">Why most marketing AI never ships</h1>
                <p className="kal-anim mt-7 text-lg leading-relaxed text-ink/70 [animation-delay:160ms]">
                  Marketing teams rarely fail at AI because they picked the wrong algorithm. They fail because the data underneath was never ready, and because nothing downstream was built to receive the model&rsquo;s answer.
                </p>
                <div className="kal-anim mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 [animation-delay:220ms]">
                  <span className="text-ink/70">Kaliper Data Team</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime="2026-09-02">2 September 2026</time>
                  <span aria-hidden="true">·</span>
                  <span>9 min read</span>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,46rem)_1fr]">
            <div className="space-y-16">
              <section id="beyond-the-label" className="scroll-mt-28">
                <h2 className="font-display text-3xl font-bold">Beyond the AI label</h2>
                <p className="mt-5 leading-relaxed text-ink/75">
                  Most tools sold as marketing AI are reporting layers with a prediction bolted on. They surface a number, place it on a dashboard, and leave the hardest part &mdash; deciding what to do differently &mdash; entirely with the team.
                </p>
                <p className="mt-4 leading-relaxed text-ink/75">
                  The useful question is not &ldquo;what can a model predict?&rdquo; but &ldquo;which recurring decision is currently made on instinct, and would a better estimate change it?&rdquo; That framing eliminates a surprising share of proposed AI projects before a line of code is written, which is exactly what it is for.
                </p>
                <figure className="mt-8 border-l-4 border-amber pl-6">
                  <blockquote className="font-display text-xl font-semibold leading-snug">
                    A prediction that arrives after the budget is allocated is a report, not a model.
                  </blockquote>
                </figure>
              </section>

              <section id="what-actually-works" className="scroll-mt-28">
                <h2 className="font-display text-3xl font-bold">What actually works</h2>
                <p className="mt-5 leading-relaxed text-ink/75">
                  Five categories cover nearly every marketing AI engagement that makes it to production and stays there.
                </p>
                <div className="mt-8 border-t border-ink/15">
                  {useCases.map(([title, copy], index) => (
                    <div key={title} className="grid gap-3 border-b border-ink/15 py-6 md:grid-cols-[70px_1fr]">
                      <span className="font-mono text-xs text-amber">0{index + 1}</span>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink/65">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="readiness" className="scroll-mt-28">
                <h2 className="font-display text-3xl font-bold">The readiness question</h2>
                <p className="mt-5 leading-relaxed text-ink/75">
                  Duplicate events, unstable identity resolution, and historical data locked inside a platform export stop more AI initiatives than model selection ever has. Before promising an outcome, it is worth confirming four things.
                </p>
                <ul className="mt-7 space-y-4 text-ink/75">
                  {readiness.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 leading-relaxed text-ink/75">
                  If two or more are missing, the honest recommendation is data engineering first. That work is less exciting and far more likely to produce a result.
                </p>
              </section>

              <section id="operating-model" className="scroll-mt-28">
                <h2 className="font-display text-3xl font-bold">Operating a model</h2>
                <p className="mt-5 leading-relaxed text-ink/75">
                  Launch is the cheap part. Inputs drift, channels change, and a model trained on last year&rsquo;s buying behaviour quietly degrades. Treat monitoring, retraining triggers, and a named human owner as part of the original scope, and the model keeps earning its place. Skip them, and it becomes another number nobody trusts within two quarters.
                </p>
              </section>

              <section id="takeaways" className="scroll-mt-28">
                <h2 className="font-display text-3xl font-bold">Takeaways</h2>
                <ol className="mt-7 space-y-5">
                  {takeaways.map((item, index) => (
                    <li key={item} className="flex gap-5 border-b border-ink/10 pb-5 last:border-0">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 font-mono text-xs text-amber">{index + 1}</span>
                      <p className="leading-relaxed text-ink/75">{item}</p>
                    </li>
                  ))}
                </ol>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <nav aria-label="Article contents" className="rounded-2xl border border-ink/10 bg-paper/65 p-6 shadow-instrument backdrop-blur-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">In this article</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-ink/65 underline-offset-4 transition-colors hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal">
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7 h-auto w-full rounded-full bg-amber px-5 py-3 font-bold text-ink shadow-none hover:bg-teal hover:text-paper">
                  <a href={bookingUrl} target="_blank" rel="noreferrer">Talk to an expert <ArrowDownRight /></a>
                </Button>
              </nav>
            </aside>
          </div>

          <ConsultationBand title="Make AI answer a real marketing question." copy="Bring us the decision you want to improve. We’ll help determine whether the data, model, and operational path can support it." />
        </article>
      </main>
    </PageShell>
  );
}
