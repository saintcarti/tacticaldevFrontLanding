import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section id="contact" className="bg-brand text-white min-h-screen flex items-center">
      <Reveal className="mobile-reveal mobile-delay-5">
        <div className="mx-auto w-full max-w-6xl px-6 py-0">
        <div className="rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-brand-2 px-6 py-12 text-center shadow-card">
          <div className="mx-auto mb-4 h-1 w-20 overflow-hidden rounded-full">
            <span className="block h-full w-full bg-accent" />
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Listo para escalar tu infraestructura técnica?
          </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 md:text-base">
              Súmate a equipos empresariales que confían en TacticalDev para
              arquitectura e ingeniería de misión crítica.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="#contact" variant="secondary">
                Inicia tu consultoría
              </Button>
              <Button href="#contact" className="bg-ink text-white hover:bg-ink-2">
                Habla con un experto
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
