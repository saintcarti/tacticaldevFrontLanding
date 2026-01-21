import SectionTitle from "@/components/ui/SectionTitle";
import { trustSignals } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Built for precision"
            title="Reliability is non-negotiable."
            description="We do not just write code; we architect business stability. Every line is strategic, every decision is data-backed."
            tone="light"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="space-y-2 rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{signal.title}</p>
                <p className="text-sm text-white/70">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <div className="h-48 rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-ink-2 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Architecture Snapshot
            </p>
            <p className="mt-6 text-xl font-semibold text-white">
              98.9% uptime across enterprise workloads.
            </p>
          </div>
          <div className="h-48 rounded-[var(--radius-card)] bg-white p-6 text-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Client Workflows
            </p>
            <p className="mt-6 text-xl font-semibold">
              Cross-functional teams aligned with shared roadmaps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
