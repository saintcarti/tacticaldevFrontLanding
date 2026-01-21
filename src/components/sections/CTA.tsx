import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-brand-2 px-6 py-12 text-center shadow-card">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to scale your technical infrastructure?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            Join the ranks of enterprise teams who rely on TacticalDev for
            mission-critical architecture and engineering.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#contact" variant="secondary">
              Start Your Consultation
            </Button>
            <Button href="#contact" className="bg-ink text-white hover:bg-ink-2">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
