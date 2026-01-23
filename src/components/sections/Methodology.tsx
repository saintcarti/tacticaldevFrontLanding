import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { methodologySteps } from "@/lib/constants";

export default function Methodology() {
  return (
    <section
      id="process"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b1224] py-20 text-white"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/10 via-[#0b1224] to-[#0b1224]" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <Reveal className="mobile-reveal mobile-delay-3 w-full">
        <div className="mx-auto w-full max-w-6xl space-y-16 px-6 py-0">
          <SectionTitle
            eyebrow="Nuestro enfoque"
            title="Proceso de trabajo, paso a paso"
            description="Un flujo probado que mantiene proyectos empresariales alineados, seguros y a tiempo."
            align="center"
          />
          <ol className="relative grid gap-6 md:grid-cols-5 md:gap-8">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block md:z-0" />
            {methodologySteps.map((step, index) => (
              <li
                key={step.step}
                className="group relative z-10 flex gap-4 transition duration-300 ease-out hover:-translate-y-1 md:flex-col md:items-center md:text-center"
              >
                <div className="absolute inset-0 -z-10 scale-75 rounded-2xl bg-brand/10 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#0b1224] text-sm font-bold text-white transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  {step.step}
                </div>
                <div className="relative space-y-2 transition-colors duration-300 ease-out">
                  <h3 className="text-base font-bold text-white transition-colors group-hover:text-brand-2">
                    {step.title}
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-white/60 group-hover:text-white/80">
                    {step.description}
                  </p>
                </div>
                {index < methodologySteps.length - 1 ? (
                  <span className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-white/10 md:hidden" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
