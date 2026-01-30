"use client";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";;
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { servicePillars } from "@/lib/constants";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface py-20 text-ink"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--td-spot-1)] via-surface to-surface" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      {/* Decorative Code Background */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 hidden select-none font-mono text-sm leading-relaxed text-ink/20 opacity-30 lg:block">
        <pre>{`
class DigitalTransformation {
  constructor(vision) {
    this.vision = vision;
    this.stack = new TechStack();
  }

  async execute() {
    await this.stack.optimize();
    return "Success";
  }
}
        `}</pre>
      </div>

      <div
        className="bg-orb pointer-events-none absolute -right-12 top-12 h-44 w-44 opacity-50 md:h-60 md:w-60"
        aria-hidden="true"
      />
      <Reveal className="mobile-reveal mobile-delay-1 w-full md:translate-y-6 md:opacity-0 md:[&.is-visible]:translate-y-0 md:[&.is-visible]:opacity-100 md:transition md:duration-700 md:ease-out">
        <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-0">
          <SectionTitle
            eyebrow="Nuestros Servicios"
            title="Soluciones técnicas integrales"
            description="Desde la concepción hasta el despliegue, cubrimos todo el ciclo de vida del desarrollo de software moderno con un enfoque en calidad y escalabilidad."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {servicePillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              return (
              <Reveal
                key={pillar.title}
                className={`mobile-stagger mobile-stagger-${index + 1}`}
              >
                <div
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="h-full cursor-pointer"
                >
                <Card 
                  className={`group relative h-full space-y-4 overflow-hidden border border-line bg-ink/5 transition-all duration-300 ${isActive ? "-translate-y-2 shadow-xl shadow-brand/10 bg-ink/10" : "hover:-translate-y-2 hover:shadow-xl hover:shadow-brand/10 hover:bg-ink/10"}`}
                >
                  {/* Hover decoration */}
                  <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/10 transition-transform duration-500 ${isActive ? "scale-150" : "group-hover:scale-150"}`} />

                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-ink/10 text-brand transition-colors duration-300 ${isActive ? "bg-brand text-white" : "group-hover:bg-brand group-hover:text-white"}`}>
                    {getIconForService(pillar.title)}
                  </div>

                  <div className="relative space-y-2">
                    <h3 className={`text-lg font-bold text-ink transition-colors ${isActive ? "text-brand" : "group-hover:text-brand"}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-justify text-sm leading-relaxed text-ink/60">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="relative pt-2">
                    <span className={`inline-block rounded-md bg-ink/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink/70 transition-colors ${isActive ? "bg-brand/20 text-brand" : "group-hover:bg-brand/20 group-hover:text-brand"}`}>
                      {pillar.tag}
                    </span>
                  </div>
                </Card>
                </div>
              </Reveal>
            );
            })}
          </div>
        </div>
      </Reveal>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
    </section>
  );
}

function getIconForService(title: string) {
  switch (title) {
    case "Software a medida":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 18" />
        </svg>
      );
    case "Arquitectura":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
    case "Sistemas backend":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      );
    case "Estrategia cloud":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5" />
        </svg>
      );
  }
}
