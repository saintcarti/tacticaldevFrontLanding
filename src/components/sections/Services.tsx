import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { servicePillars } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-sand min-h-screen flex items-center"
    >
      <div
        className="bg-orb pointer-events-none absolute -right-12 top-12 h-44 w-44 opacity-50 md:h-60 md:w-60"
        aria-hidden="true"
      />
      <Reveal className="mobile-reveal mobile-delay-1 md:translate-y-6 md:opacity-0 md:[&.is-visible]:translate-y-0 md:[&.is-visible]:opacity-100 md:transition md:duration-700 md:ease-out">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-0">
          <SectionTitle
            eyebrow="Especialidades"
            title="Pilares clave del servicio"
            description="Ejecución precisa en las capas más críticas de tu plataforma."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {servicePillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <Card className="group h-full space-y-4 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-brand transition-colors duration-300 ease-out group-hover:bg-accent group-hover:text-white">
                    <span className="text-sm font-semibold">TD</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-ink transition-colors duration-300 ease-out group-hover:text-ink-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-ink-3 transition-colors duration-300 ease-out group-hover:text-ink">
                      {pillar.description}
                    </p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent transition-colors duration-300 ease-out group-hover:text-ink-2">
                    {pillar.tag}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
