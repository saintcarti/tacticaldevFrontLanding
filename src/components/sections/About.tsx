import SectionTitle from "@/components/ui/SectionTitle";
import { trustSignals } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Construido para la precisión"
            title="La confiabilidad es innegociable."
            description="No solo escribimos código; arquitectamos estabilidad de negocio. Cada línea es estratégica, cada decisión se respalda con datos."
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
              Panorama de arquitectura
            </p>
            <p className="mt-6 text-xl font-semibold text-white">
              98.9% de disponibilidad en cargas empresariales.
            </p>
          </div>
          <div className="h-48 rounded-[var(--radius-card)] bg-white p-6 text-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Flujos de clientes
            </p>
            <p className="mt-6 text-xl font-semibold">
              Equipos multifuncionales alineados con hojas de ruta compartidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
