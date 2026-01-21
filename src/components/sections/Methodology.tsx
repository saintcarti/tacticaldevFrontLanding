import SectionTitle from "@/components/ui/SectionTitle";
import { methodologySteps } from "@/lib/constants";

export default function Methodology() {
  return (
    <section id="methodology" className="bg-sand">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-16 md:py-20">
        <SectionTitle
          eyebrow="Our Approach"
          title="The Tactical Roadmap"
          description="A battle-tested delivery flow that keeps enterprise projects aligned, secure, and on schedule."
          align="center"
        />
        <div className="relative grid gap-8 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
          {methodologySteps.map((step) => (
            <div key={step.step} className="space-y-3 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-sm font-semibold text-ink">
                {step.step}
              </div>
              <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              <p className="text-sm text-ink-3">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
