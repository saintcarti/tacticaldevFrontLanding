import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { trustSignals } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-sand text-white min-h-screen flex items-center">
      <Reveal className="mobile-reveal mobile-delay-3">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionTitle
              eyebrow="Construido para la precisión"
              title="La confiabilidad es innegociable."
              description="No solo escribimos código; arquitectamos estabilidad de negocio. Cada línea es estratégica, cada decisión se respalda con datos."
              tone="light"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {trustSignals.map((signal, index) => (
                <Reveal
                  key={signal.title}
                  className={`mobile-stagger mobile-stagger-${index + 1}`}
                >
                  <div className="group space-y-2 rounded-2xl bg-white/5 p-4 transition duration-300 ease-out hover:-translate-y-1 hover:bg-white/10 hover:shadow-soft">
                    <p className="text-sm font-semibold text-white">{signal.title}</p>
                    <p className="text-sm text-white/70">{signal.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="group relative h-48 overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-ink-2 p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/15 opacity-0 blur-2xl transition duration-300 ease-out group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Panorama de arquitectura
              </p>
              <p className="mt-6 text-xl font-semibold text-white">
                98.9% de disponibilidad en cargas empresariales.
              </p>
            </div>
            <div className="group relative h-48 overflow-hidden rounded-[var(--radius-card)] bg-mist p-6 text-white shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card">
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-brand/10 opacity-0 blur-2xl transition duration-300 ease-out group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                Flujos de clientes
              </p>
              <p className="mt-6 text-xl font-semibold">
                Equipos multifuncionales alineados con hojas de ruta compartidas.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
