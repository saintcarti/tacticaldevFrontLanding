import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/constants";

export default function TechStack() {
  return (
    <section id="stack" className="bg-sand min-h-screen flex items-center">
      <Reveal className="mobile-reveal mobile-delay-4">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-0">
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
                <div className="rounded-[var(--radius-card)] border border-line bg-mist p-6 shadow-soft">
                  <p className="text-sm font-semibold text-ink">{group.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-ink-2"
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
