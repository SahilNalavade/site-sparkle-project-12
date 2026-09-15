import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/components/kaliper-site";

const questions = [
  {
    prompt: "Is every key conversion defined in a written tracking plan?",
    detail: "Include the event name, properties, owner, and destination.",
  },
  {
    prompt: "Do revenue figures reconcile across analytics and finance?",
    detail: "Small timing differences are fine; unexplained gaps are not.",
  },
  {
    prompt: "Can your team trace a dashboard number back to its source?",
    detail: "A clear lineage should exist from report to model to raw event.",
  },
  {
    prompt: "Are tracking changes tested before they reach production?",
    detail: "Validation should cover payloads, consent, and downstream tools.",
  },
];

const answers = [
  { label: "Yes", score: 2 },
  { label: "Partly", score: 1 },
  { label: "No", score: 0 },
];

export function GtmAudit() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const isComplete = step === questions.length;
  const total = scores.reduce((sum, score) => sum + score, 0);

  const chooseAnswer = (score: number) => {
    setScores((current) => [...current.slice(0, step), score]);
    setStep((current) => current + 1);
  };

  const restart = () => {
    setScores([]);
    setStep(0);
  };

  const result = total >= 7
    ? { label: "Well calibrated", copy: "Your measurement foundation looks strong. The next opportunity is likely sharper analysis or modeling." }
    : total >= 4
      ? { label: "Some signal loss", copy: "Your stack has a usable base, but a few gaps may be weakening attribution and reporting confidence." }
      : { label: "Foundation first", copy: "Your highest-return move is likely fixing collection, definitions, and quality checks before adding more tools." };

  return (
    <section id="gtm-audit" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">Free GTM audit · about 4 minutes</span>
          <h2 className="mt-5 max-w-[15ch] text-balance font-display text-3xl font-bold md:text-4xl">Find where your measurement stack loses signal.</h2>
          <p className="mt-5 max-w-[46ch] leading-relaxed text-paper/65">Four practical checks. No sign-up, no score sent anywhere, and no generic maturity model.</p>
        </div>

        <div className="border-t border-paper/20 pt-7">
          {!isComplete ? (
            <>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper/45">
                <span>Check {step + 1} of {questions.length}</span>
                <span>{Math.round((step / questions.length) * 100)}%</span>
              </div>
              <div className="mt-3 h-1 bg-paper/15" aria-hidden="true">
                <div className="h-full bg-amber transition-[width] duration-300" style={{ width: `${(step / questions.length) * 100}%` }} />
              </div>
              <h3 className="mt-8 max-w-[26ch] font-display text-2xl font-semibold leading-snug">{questions[step]?.prompt}</h3>
              <p className="mt-3 max-w-[54ch] text-sm leading-relaxed text-paper/55">{questions[step]?.detail}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {answers.map((answer) => (
                  <Button key={answer.label} variant="outline" onClick={() => chooseAnswer(answer.score)} className="h-auto rounded-full border-paper/25 bg-transparent px-6 py-3 text-paper shadow-none hover:border-amber hover:bg-amber hover:text-ink">
                    {answer.label}
                  </Button>
                ))}
              </div>
              {step > 0 && (
                <Button variant="ghost" onClick={() => setStep((current) => current - 1)} className="mt-5 h-auto px-0 text-paper/50 hover:bg-transparent hover:text-paper">
                  <ArrowLeft /> Previous check
                </Button>
              )}
            </>
          ) : (
            <div aria-live="polite">
              <div className="flex size-10 items-center justify-center rounded-full bg-teal text-paper"><Check className="size-5" /></div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-amber">Audit result · {total}/8</p>
              <h3 className="mt-3 font-display text-3xl font-bold">{result.label}</h3>
              <p className="mt-4 max-w-[56ch] leading-relaxed text-paper/65">{result.copy}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild className="h-auto rounded-full bg-amber px-6 py-3 font-bold text-ink shadow-none hover:bg-teal hover:text-paper">
                  <a href={bookingUrl} target="_blank" rel="noreferrer">Discuss the result <ArrowRight /></a>
                </Button>
                <Button variant="ghost" onClick={restart} className="text-paper/60 hover:bg-paper/10 hover:text-paper">Run again</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}