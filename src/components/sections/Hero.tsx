import Image from "next/image";
import Button from "@/components/ui/Button";
import networkBg from "@/assets/images/network-bg.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Ahora aceptamos socios empresariales
          </div>
          <h1 className="text-4xl font-semibold text-ink md:text-5xl">
            Software estratégico
            <span className="block text-brand">Desarrollo</span> y arquitectura
          </h1>
          <p className="text-base text-ink-3 md:text-lg">
            Creamos soluciones empresariales con precisión táctica y excelencia
            arquitectónica. Conectamos lógica de negocio compleja con ejecución
            técnica confiable.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#contact">Iniciar proyecto</Button>
            <Button href="#services" variant="secondary">
              Ver casos de estudio
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-ink-3">
            <span>Entrega con enfoque en seguridad</span>
            <span>Sprints ágiles</span>
            <span>Arquitectura primero</span>
          </div>
        </div>
        <div className="relative">
          <div className="relative h-[360px] overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink shadow-card md:h-[420px]">
            <Image
              src={networkBg}
              alt="Visualización de red"
              fill
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/80 to-transparent" />
            <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/80">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Consola táctica
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Estado: Optimizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
