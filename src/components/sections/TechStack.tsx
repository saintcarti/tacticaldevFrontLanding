import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/constants";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b1224] py-20 text-white"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#1e3a8a]/20 via-[#0b1224] to-[#0b1224]" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <Reveal className="mobile-reveal mobile-delay-4 w-full">
        <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-0">
          <SectionTitle
            eyebrow="Tech stack"
            title="Herramientas elegidas para escala y seguridad"
            description="Seleccionamos tecnologia probada para operaciones de mision critica."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {techStack.map((group, index) => (
              <Reveal
                key={group.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-white/10 hover:shadow-xl hover:shadow-brand/5">
                  <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-2">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors group-hover:bg-brand/20 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
