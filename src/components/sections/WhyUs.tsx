"use client";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { whyUs } from "@/lib/constants";

export default function WhyUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="why-us"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface py-24 text-ink"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--td-spot-1)]/20 via-surface to-surface" />

      {/* Dynamic Ambient Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-brand-2/5 blur-[120px]" />

      {/* Decorative Tech Frames */}
      <div className="pointer-events-none absolute left-6 top-6 h-32 w-32 border-l border-t border-ink/30 rounded-tl-3xl opacity-50" />
      <div className="pointer-events-none absolute right-6 bottom-6 h-32 w-32 border-r border-b border-ink/30 rounded-br-3xl opacity-50" />

      {/* Decorative Code Background */}
      <div className="pointer-events-none absolute left-10 top-32 -z-10 hidden select-none font-mono text-[10px] leading-relaxed text-brand/20 opacity-40 lg:block">
        <pre>{`const standards = {
  uptime: "99.99%",
  security: "strict",
  scale: "auto"
};`}</pre>
      </div>

      <Reveal className="mobile-reveal mobile-delay-4 w-full relative z-10">
        <div className="mx-auto w-full max-w-7xl space-y-12 px-6">
          <SectionTitle
            eyebrow="Por qué TacticalDev"
            title="Hecho para entregas de alto riesgo"
            description="Nos integramos con equipos de liderazgo para entregar software que escala bajo presión."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {whyUs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
              <Reveal
                key={item.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <div
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="cursor-pointer"
                >
                <Card 
                  className={`group space-y-3 border border-line bg-surface-2/50 transition-transform duration-300 ease-out ${isActive ? "-translate-y-1 border-brand/30 shadow-lg" : "hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"}`}
                >
                  <h3 className={`text-lg font-semibold text-ink transition-colors duration-300 ease-out ${isActive ? "text-brand" : "group-hover:text-brand"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-justify text-sm text-ink/70 transition-colors duration-300 ease-out ${isActive ? "text-ink" : "group-hover:text-ink"}`}>
                    {item.description}
                  </p>
                </Card>
                </div>
              </Reveal>
            );
            })}
          </div>
        </div>
      </Reveal>

      {/* Technical Footer Lines */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-6 opacity-20">
        <div className="h-4 w-px bg-ink" />
        <div className="h-4 w-px bg-ink" />
        <div className="h-4 w-px bg-ink" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
    </section>
  );
}
