import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/constants";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface py-20 text-ink"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[color:var(--td-spot-1)] via-surface to-surface" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <Reveal className="mobile-reveal mobile-delay-2 w-full">
        <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-0">
          <div className="space-y-6">
            <SectionTitle
              eyebrow="Portafolio y Visión"
              title="Construyendo el presente, diseñando el futuro"
              align="left"
            />
            <p className="max-w-3xl text-justify text-ink/70">
              Más que entregar código, entregamos valor. Desde la modernización de sistemas legados hasta la exploración de nuevas fronteras tecnológicas, nuestro trabajo se define por la precisión técnica y la adaptabilidad. Así es como transformamos desafíos en activos digitales duraderos.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Reveal
                key={study.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <Card className="group relative flex h-full flex-col justify-between overflow-hidden border border-line/60 bg-ink/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand/50 hover:bg-ink/10 hover:shadow-2xl hover:shadow-brand/10">
                  {/* Decorative gradient blob on hover */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/20 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                  {study.imageSrc && (
                    <div className="relative z-10 h-48 w-full overflow-hidden">
                      <img
                        src={study.imageSrc}
                        alt={study.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-2 ring-1 ring-inset ring-brand/20">
                        {study.industry}
                      </span>
                      {study.href && study.href !== "#" && (
                        <a
                          href={study.href}
                          target={study.href.startsWith("http") ? "_blank" : undefined}
                          rel={study.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-ink/40 transition-colors hover:bg-brand hover:text-white group-hover:bg-brand group-hover:text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-brand-2">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-justify text-sm leading-relaxed text-ink/60">
                        {study.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 border-t border-line/60 pt-4">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-green-400">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink/40">Impacto</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-ink/90">
                      {study.result}
                    </p>
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

