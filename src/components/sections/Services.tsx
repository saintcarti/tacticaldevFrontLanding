"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { servicePillars } from "@/lib/constants";
import { 
  Code2, 
  Box, 
  Database, 
  Cloud,
  ChevronRight
} from "lucide-react";

const serviceIcons = [
  <Code2 key="code" className="w-8 h-8" />,
  <Box key="box" className="w-8 h-8" />,
  <Database key="db" className="w-8 h-8" />,
  <Cloud key="cloud" className="w-8 h-8" />,
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative flex min-h-screen items-center overflow-hidden py-32 text-foreground"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="mb-24 text-center">
          <SectionTitle
            eyebrow="NUESTROS SERVICIOS"
            title="Soluciones técnicas integrales"
            description="Desde la concepción hasta el despliegue, cubrimos todo el ciclo de vida del desarrollo de software moderno con un enfoque en calidad y escalabilidad."
            align="center"
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[16rem]">
          {servicePillars.map((pillar, index) => {
            const isHovered = hoveredIndex === index;
            const isSoftwareAMedida = pillar.title === "Software a medida";
            
            // Asymmetric Bento Layout
            const gridClasses = [
              "md:col-span-3 lg:col-span-7 lg:row-span-2", // Software a medida (Tall/Wide)
              "md:col-span-3 lg:col-span-5 lg:row-span-1", // Arquitectura (Small)
              "md:col-span-3 lg:col-span-5 lg:row-span-2", // Sistemas backend (Tall)
              "md:col-span-3 lg:col-span-7 lg:row-span-1", // Estrategia cloud (Wide)
            ][index];

            return (
              <motion.div
                key={pillar.title}
                className={`${gridClasses} relative group cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Neon Micro-light Outer Glow */}
                <div className={`absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] z-0`} />
                
                {/* Bento Card (Frosty Glass with Beveled Edges & Micro-Internal Glow) */}
                <div className={`relative h-full w-full overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/40 backdrop-blur-3xl p-10 flex flex-col justify-between transition-all duration-500 z-10 
                  shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
                  ${isHovered ? '-translate-y-2 border-cyan-500/30 shadow-[0_20px_40px_rgba(6,182,212,0.15)] dark:shadow-[inset_0_1px_1px_rgba(6,182,212,0.4),0_20px_40px_rgba(6,182,212,0.1)]' : ''}`}
                >
                  
                  {/* Imagen de fondo específica para Software a medida */}
                  {isSoftwareAMedida && (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image 
                        src="/Soluciones_tecnicas_integrales/Softwareamedida.webp" 
                        alt="Software a medida mockup"
                        fill
                        className={`object-cover object-center transition-all duration-700 opacity-20 group-hover:opacity-40 group-hover:scale-105 ${isHovered ? 'scale-110' : ''}`}
                        priority
                      />
                      {/* Máscara de degradado para legibilidad */}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent dark:from-black dark:via-black/60 dark:to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent dark:from-black/40 dark:to-transparent" />
                    </div>
                  )}

                  {/* Subtle Grain Texture */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  <div className="flex items-start justify-between relative z-10">
                    <div className={`p-5 rounded-3xl bg-surface-2 border border-line-soft transition-all duration-500 shadow-2xl ${isHovered ? 'scale-110 -translate-y-1 text-brand border-brand/30 shadow-brand/10' : 'text-ink-3'}`}>
                      {serviceIcons[index]}
                    </div>
                    
                    {/* Frosty Label Tag */}
                    <div className="px-4 py-1.5 rounded-full bg-surface-2 border border-line-soft backdrop-blur-md">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-ink-3">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4 relative z-10">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                        {pillar.title}
                      </h3>
                      <p className="text-base leading-relaxed text-ink-3 max-w-[90%] font-medium">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Interactive Footer */}
                    <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      Saber más <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Interior Ambient Glow */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Particle Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}
