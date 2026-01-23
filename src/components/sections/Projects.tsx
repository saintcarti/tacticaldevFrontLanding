import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="bg-sand min-h-screen flex items-center">
      <Reveal className="mobile-reveal mobile-delay-2">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-0">
          <SectionTitle
            eyebrow="Casos de estudio"
            title="Resultados medibles en proyectos críticos"
            description="Ejemplos recientes donde optimizamos rendimiento, resiliencia y gobernanza."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal
                key={study.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <Card className="group flex h-full flex-col gap-4 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    <span>{study.industry}</span>
                    <span className="text-ink-3">TD Case</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-ink transition-colors duration-300 ease-out group-hover:text-ink-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-ink-3 transition-colors duration-300 ease-out group-hover:text-ink">
                      {study.description}
                    </p>
                  </div>
                  <div className="mt-auto rounded-2xl bg-mist/60 px-4 py-3 text-sm font-semibold text-ink">
                    {study.result}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
