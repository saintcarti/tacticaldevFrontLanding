import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { methodologySteps } from "@/lib/constants";

export default function Methodology() {
  return (
    <section id="methodology" className="bg-sand">
      <Reveal className="mobile-reveal mobile-delay-2">
        <div className="mx-auto max-w-6xl space-y-12 px-6 py-16 md:py-20">
          <SectionTitle
            eyebrow="Nuestro enfoque"
            title="La hoja de ruta táctica"
            description="Un flujo probado que mantiene proyectos empresariales alineados, seguros y a tiempo."
            align="center"
          />
          <ol className="relative grid gap-6 md:grid-cols-5 md:gap-8">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block md:z-0" />
            {methodologySteps.map((step, index) => (
              <li
                key={step.step}
                className="group relative z-10 flex gap-4 transition duration-300 ease-out hover:-translate-y-1 md:flex-col md:items-center md:text-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-brand/5 opacity-0 blur-xl transition-opacity duration-300 ease-out group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white text-sm font-semibold text-ink transition-all duration-300 ease-out group-hover:border-brand group-hover:bg-brand group-hover:text-white group-focus-within:border-brand group-focus-within:bg-brand group-focus-within:text-white group-hover:[animation:pulse-soft_900ms_ease-out]">
                  {step.step}
                </div>
                <div className="relative space-y-2 transition-colors duration-300 ease-out">
                  <h3 className="text-base font-semibold text-ink transition-colors duration-300 ease-out group-hover:text-brand group-focus-within:text-brand">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-3 transition-colors duration-300 ease-out group-hover:text-ink-2 group-focus-within:text-ink-2">
                    {step.description}
                  </p>
                </div>
                {index < methodologySteps.length - 1 ? (
                  <span className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-line md:hidden" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
