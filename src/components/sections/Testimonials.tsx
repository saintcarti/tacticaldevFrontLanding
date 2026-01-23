import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist min-h-screen flex items-center">
      <Reveal className="mobile-reveal mobile-delay-3">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-0">
          <SectionTitle
            eyebrow="Testimonios"
            title="Confianza construida en operaciones reales"
            description="Lideres de producto y tecnologia que eligieron TacticalDev."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <div className="group h-full rounded-[var(--radius-card)] border border-line bg-mist p-6 shadow-soft transition duration-300 ease-out hover:-translate-y-1 hover:shadow-card">
                  <p className="text-sm text-ink-3 transition-colors duration-300 ease-out group-hover:text-ink">
                    "{item.quote}"
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
                      {item.role}
                    </p>
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
