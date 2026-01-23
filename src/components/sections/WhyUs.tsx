﻿import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { whyUs } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-sand min-h-screen flex items-center">
      <Reveal className="mobile-reveal mobile-delay-4">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6 py-0">
          <SectionTitle
            eyebrow="Por qué TacticalDev"
            title="Hecho para entregas de alto riesgo"
            description="Nos integramos con equipos de liderazgo para entregar software que escala bajo presión."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {whyUs.map((item, index) => (
              <Reveal
                key={item.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <Card className="group space-y-3 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-card">
                  <h3 className="text-lg font-semibold text-ink transition-colors duration-300 ease-out group-hover:text-ink-2">
                    {item.title}
                  </h3>
                  <p className="text-justify text-sm text-ink-3 transition-colors duration-300 ease-out group-hover:text-ink">
                    {item.description}
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
