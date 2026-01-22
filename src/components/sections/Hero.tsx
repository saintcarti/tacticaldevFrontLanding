import Image from "next/image";
import Button from "@/components/ui/Button";
import networkBg from "@/assets/images/network-bg.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-full w-screen -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute right-0 top-0 h-full w-[68%] hero-diagonal">
          <div className="absolute inset-0 hero-sheen hero-flow" />
          <div className="absolute -left-10 top-10 h-[60%] w-[70%] hero-sheen--soft hero-drift" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[70%] w-[70%] hero-sheen hero-pulse" />
        </div>
        <div className="hero-blob absolute -left-24 top-16 h-64 w-64 opacity-80 md:h-80 md:w-80" />
        <div className="hero-blob absolute right-10 top-1/3 h-72 w-72 opacity-60 md:h-96 md:w-96" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div className="space-y-6">
          <div className="hero-reveal hero-reveal--1 inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Ahora aceptamos socios empresariales
          </div>
          <h1 className="hero-reveal hero-reveal--2 text-balance text-5xl font-extrabold leading-tight tracking-tight text-ink md:text-6xl lg:text-7xl">
            Software estratégico
            <span className="block text-brand-2">Desarrollo</span> y arquitectura
          </h1>
          <p className="hero-reveal hero-reveal--3 max-w-xl text-base text-ink-3 md:text-lg">
            Creamos soluciones empresariales con precisión táctica y excelencia
            arquitectónica. Conectamos lógica de negocio compleja con ejecución
            técnica confiable.
          </p>
          <div className="hero-reveal hero-reveal--4 flex flex-wrap gap-3">
            <Button href="#contact">Iniciar proyecto</Button>
            <Button href="#services" variant="secondary">
              Ver casos de estudio
            </Button>
          </div>
          <div className="hero-reveal hero-reveal--5 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-ink-3">
            <span>Entrega con enfoque en seguridad</span>
            <span>Sprints ágiles</span>
            <span>Arquitectura primero</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
