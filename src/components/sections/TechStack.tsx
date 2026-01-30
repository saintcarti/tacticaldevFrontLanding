"use client";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { techStack } from "@/lib/constants";

export default function TechStack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="stack"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface py-24 text-ink"
    >
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--ink-rgb),0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--ink-rgb),0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_100%,transparent,var(--surface))]" />

      {/* 2. Cyberpunk/Tech Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-brand/3 blur-[120px]" />

      {/* --- DECORATIVE ELEMENTS --- */}
      
      {/* Right Decoration: JSON Config */}
      <div className="pointer-events-none absolute right-10 bottom-20 -z-10 hidden select-none font-mono text-[10px] leading-relaxed text-brand/20 opacity-50 lg:block text-right">
         <pre>{`{
  "environment": "production",
  "scaling": "auto",
  "security": "strict",
  "modules": [
    "core",
    "analytics",
    "payment"
  ]
}`}</pre>
      </div>

      {/* --- MAIN CONTENT --- */}

      <Reveal className="mobile-reveal mobile-delay-4 w-full relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6">
          
          <div className="mb-20">
            <SectionTitle
              eyebrow="Arquitectura"
              title="Stack tecnológico"
              description="Selección estratégica de herramientas para garantizar rendimiento, escalabilidad y seguridad a largo plazo."
              align="center"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {techStack.map((group, index) => {
              const isActive = activeIndex === index;
              return (
              <Reveal
                key={group.title}
                className={`mobile-stagger mobile-stagger-${index + 1} h-full`}
              >
                {/* Tech Card */}
                <div
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`group relative h-full overflow-hidden rounded-xl border border-line/60 bg-surface/40 p-1 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                    isActive ? "-translate-y-1 border-brand/40 bg-surface/80 shadow-2xl shadow-brand/5" : "hover:-translate-y-1 hover:border-brand/40 hover:bg-surface/80 hover:shadow-2xl hover:shadow-brand/5"
                  }`}
                >
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 h-8 w-8 bg-gradient-to-bl from-line/30 to-transparent transition-all ${isActive ? "from-brand/20" : "group-hover:from-brand/20"}`} />

                  <div className="flex h-full flex-col rounded-lg bg-surface/30 p-6">
                    
                    {/* Header: Terminal Style */}
                    <div className="mb-6 flex items-center justify-between border-b border-line/40 pb-4">
                      <div className="flex items-center gap-3">
                        {/* Glowing Dot */}
                        <div className="relative flex h-3 w-3 items-center justify-center">
                          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40 opacity-0 ${isActive ? "opacity-100" : "group-hover:opacity-100"}`} />
                          <span className={`relative inline-flex h-2 w-2 rounded-full bg-line transition-colors duration-300 ${isActive ? "bg-brand" : "group-hover:bg-brand"}`} />
                        </div>
                        <h3 className={`font-mono text-sm font-bold tracking-wider text-ink uppercase transition-colors ${isActive ? "text-brand" : "group-hover:text-brand"}`}>
                          {group.title}
                        </h3>
                      </div>
                      {/* Decorative ID */}
                      <span className="font-mono text-[10px] text-ink/30">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content: Chips Grid */}
                    <div className="flex flex-wrap content-start gap-2">
                      {group.items.map((item) => (
                        <div
                          key={item}
                          className={`relative overflow-hidden rounded border border-line/40 bg-surface px-3 py-2 transition-all duration-300 ${isActive ? "border-brand/20 bg-brand/5" : "group-hover:border-brand/20 group-hover:bg-brand/5"}`}
                        >
                          <div className="flex items-center gap-2">
                            {/* Tiny tech indicator */}
                            <div className={`h-1 w-1 rounded-full bg-ink/20 ${isActive ? "bg-brand/40" : "group-hover:bg-brand/40"}`} />
                            <span className={`font-mono text-xs font-medium text-ink/70 transition-colors ${isActive ? "text-ink" : "group-hover:text-ink"}`}>
                              {item}
                            </span>
                          </div>
                          
                          {/* Subtle shine effect on hover */}
                          <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ${isActive ? "translate-x-full" : "group-hover:translate-x-full"}`} />
                        </div>
                      ))}
                    </div>

                    {/* Footer decoration: Terminal Cursor */}
                    {/* CORREGIDO: Usamos inline-block o div para que el cursor tenga tamaño */}
                    <div className={`mt-auto pt-6 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                        <div className="flex items-center font-mono text-[10px]">
                            {/* Prompt symbol */}
                            <span className="mr-2 text-brand font-bold">{`>`}</span>
                            
                            {/* Static text */}
                            <span className="text-ink/50 mr-1">por agregar</span>
                            
                            {/* Blinking Cursor (CORREGIDO) */}
                            {/* 'inline-block' es clave para que el width/height funcionen en un span */}
                            <span className="inline-block h-3 w-1.5 bg-brand animate-pulse align-middle" />
                        </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            );
            })}
          </div>
        </div>
      </Reveal>

      {/* Technical Footer Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
    </section>
  );
}