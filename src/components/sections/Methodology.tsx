"use client";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { methodologySteps } from "@/lib/constants";

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface py-24 text-ink"
    >
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--ink-rgb),0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--ink-rgb),0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* 2. Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,var(--surface))]" />

      {/* 3. Ambient Light */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-brand-2/5 blur-[100px]" />

      {/* --- CONTENT --- */}
      
      <Reveal className="mobile-reveal mobile-delay-3 relative w-full z-10">
        <div className="mx-auto w-full max-w-7xl px-6">
          
          <div className="mb-24">
            <SectionTitle
              eyebrow="Nuestro enfoque"
              title="Ingeniería de procesos"
              description="Transformamos la complejidad en un sistema predecible y escalable."
              align="center"
            />
          </div>

          <div className="relative isolate">
            {/* Connecting Line (Ahora MÁS OSCURA y VISIBLE) */}
            <div className="absolute left-0 top-10 -z-10 hidden w-full md:block">
               {/* CAMBIO 1: Línea base más oscura (bg-ink/20 en vez de bg-line) */}
               <div className="h-px w-full bg-ink/20" />
               
               {/* CAMBIO 2: Gradiente más intenso y sin blur para que se defina mejor */}
               <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-100" />
            </div>

            <ol className="grid gap-6 md:grid-cols-5 md:gap-4">
              {methodologySteps.map((step, index) => {
                const isActive = activeIndex === index;
                return (
                <li
                  key={step.step}
                  className="group relative"
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  {/* Card Container */}
                  <div className={`flex h-full flex-col items-center rounded-2xl border border-ink/10 bg-surface/50 p-6 text-center backdrop-blur-sm transition-all duration-300 cursor-pointer ${isActive ? "border-brand/40 bg-surface shadow-xl shadow-brand/5 -translate-y-2" : "hover:border-brand/40 hover:bg-surface hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-2"}`}>
                    
                    {/* Number Node */}
                    <div className="relative mb-6">
                      {/* CAMBIO 3: Borde del círculo un poco más oscuro (border-ink/10) */}
                      <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl border border-ink/10 bg-surface shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] transition-transform duration-500 ${isActive ? "scale-110 border-brand/30" : "group-hover:scale-110 group-hover:border-brand/30"}`}>
                        {/* Background color accent */}
                        <div className={`absolute inset-2 rounded-xl bg-ink/3 transition-colors ${isActive ? "bg-brand/5" : "group-hover:bg-brand/5"}`} />
                        
                        <span className={`font-mono text-2xl font-bold text-ink transition-colors ${isActive ? "text-brand" : "group-hover:text-brand"}`}>
                          {step.step}
                        </span>
                      </div>
                      
                      {/* Connector dot for the horizontal line - Mobile fallback */}
                      <div className="absolute top-1/2 -z-10 h-1 w-[200%] -translate-x-1/2 -translate-y-1/2 bg-surface md:hidden" /> 
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center gap-3">
                      <h3 className={`text-lg font-bold text-ink transition-colors ${isActive ? "text-brand" : "group-hover:text-brand"}`}>
                        {step.title}
                      </h3>
                      
                      {/* CAMBIO 4: Separador interno más oscuro */}
                      <div className={`h-px w-8 bg-ink/20 transition-all duration-500 ${isActive ? "w-full bg-brand/50" : "group-hover:w-full group-hover:bg-brand/50"}`} />
                      
                      <p className="text-sm leading-relaxed text-ink/70">
                        {step.description}
                      </p>
                    </div>

                    {/* Corner accents */}
                    <div className={`absolute top-0 right-0 p-3 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                      <div className="h-2 w-2 rounded-full bg-brand/20" />
                    </div>
                  </div>
                </li>
              );
              })}
            </ol>
          </div>
        </div>
      </Reveal>
      
      {/* Code Backgrounds */}
       <div className="pointer-events-none absolute left-4 bottom-10 -z-10 hidden select-none font-mono text-[10px] text-ink/10 lg:block">
        <pre>{`01001001 01001110 
01001001 01010100`}</pre>
      </div>
      <div className="pointer-events-none absolute right-4 top-20 -z-10 hidden select-none font-mono text-[10px] text-ink/10 lg:block text-right">
        <pre>{`system.init({
  mode: 'scale'
});`}</pre>
      </div>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
    </section>
  );
}