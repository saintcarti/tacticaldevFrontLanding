﻿"use client";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";;
import Reveal from "@/components/ui/Reveal";
import { trustSignals } from "@/lib/constants";

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface py-20 text-ink"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[color:var(--td-spot-1)] via-surface to-surface" />
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      {/* Decorative Code Background */}
      <div className="pointer-events-none absolute left-4 bottom-10 -z-10 hidden select-none font-mono text-xs leading-relaxed text-ink/20 opacity-30 lg:block">
         <pre>{`
interface Team {
  mission: "Innovation";
  passion: number;
}

const tacticalDev: Team = {
  mission: "Innovation",
  passion: 100
};
        `}</pre>
      </div>

      <Reveal className="mobile-reveal mobile-delay-3 w-full">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Narrative */}
          <div className="flex flex-col justify-center space-y-8">
            <SectionTitle
              eyebrow="Sobre Nosotros"
              title="Talento joven, ejecución profesional"
              description="Somos un equipo de desarrolladores apasionados por materializar ideas. Combinamos energía y conocimiento para brindar servicios de alto nivel."
              align="left"
            />

            <div className="space-y-6 text-justify text-ink/70">
              <p>
                TacticalDev es un colectivo de jóvenes desarrolladores de diversas edades
                unidos por un objetivo común: profesionalizar la innovación. Queremos
                impulsar tus ideas, aplicando nuestros conocimientos técnicos para crear
                soluciones que realmente aporten valor.
              </p>
              <p>
                Nuestra diversidad es nuestra fuerza. Ofrecemos servicios de desarrollo
                con un enfoque fresco y colaborativo, ayudando a empresas y emprendedores
                a transformar conceptos abstractos en realidades digitales sólidas y funcionales.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Impact */}
          <div className="relative flex flex-col gap-6 lg:justify-center">
            {/* Abstract decorative elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-2/10 blur-[100px]" />

            {/* Card 2: Philosophy */}
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface-2/80 p-8 shadow-xl transition-transform duration-500 hover:-translate-y-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-ink">
                Pasión por crear
              </h4>
              <p className="mt-2 text-justify text-sm text-ink/60">
                Ponemos nuestro conocimiento al servicio de tus proyectos, brindando
                apoyo técnico integral para materializar diversas ideas con calidad profesional.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustSignals.map((signal, index) => {
                const isActive = activeIndex === index;
                return (
                <Reveal
                  key={signal.title}
                  className={`mobile-stagger mobile-stagger-${index + 1}`}
                >
                  <div 
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className={`group h-full rounded-xl border border-line bg-ink/5 p-4 transition-all duration-300 cursor-pointer ${isActive ? "border-brand/50 bg-ink/10 shadow-lg shadow-brand/5" : "hover:border-brand/50 hover:bg-ink/10 hover:shadow-lg hover:shadow-brand/5"}`}
                  >
                    <h3 className={`mb-2 text-sm font-semibold text-ink ${isActive ? "text-brand-2" : "group-hover:text-brand-2"}`}>
                      {signal.title}
                    </h3>
                    <p className={`text-justify text-xs leading-relaxed text-ink/60 ${isActive ? "text-ink/80" : "group-hover:text-ink/80"}`}>
                      {signal.description}
                    </p>
                  </div>
                </Reveal>
              );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
    </section>
  );
}