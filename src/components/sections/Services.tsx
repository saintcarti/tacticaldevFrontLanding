import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { servicePillars } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-sand">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-16 md:py-20">
        <SectionTitle
          eyebrow="Especialidades"
          title="Pilares clave del servicio"
          description="Ejecución precisa en las capas más críticas de tu plataforma."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicePillars.map((pillar) => (
            <Card key={pillar.title} className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-brand">
                <span className="text-sm font-semibold">TD</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-ink">{pillar.title}</h3>
                <p className="text-sm text-ink-3">{pillar.description}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                {pillar.tag}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
