"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { methodologySteps } from "@/lib/constants";
import { 
  Search, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Rocket,
  ArrowRight
} from "lucide-react";

const stepIcons = [
  <Search key="01" className="w-6 h-6" />,
  <Layers key="02" className="w-6 h-6" />,
  <Cpu key="03" className="w-6 h-6" />,
  <ShieldCheck key="04" className="w-6 h-6" />,
  <Rocket key="05" className="w-6 h-6" />,
];

export default function Methodology() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative flex min-h-screen items-center overflow-hidden py-32 text-foreground"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="mb-24 text-center">
          <SectionTitle
            eyebrow="NUESTRO ENFOQUE"
            title="Ingeniería de Procesos"
            description="Transformamos la complejidad en un sistema predecible y escalable."
            align="center"
          />
        </div>

        {/* Bento Grid Asimétrico (Restaurado) */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[14rem]">
          {methodologySteps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            
            // Lógica de layout para estilo Bento asimétrico
            const gridClasses = [
              "md:col-span-3 lg:col-span-4 lg:row-span-2", // 01 tall
              "md:col-span-3 lg:col-span-4 lg:row-span-1", // 02 square
              "md:col-span-3 lg:col-span-4 lg:row-span-2", // 03 tall
              "md:col-span-3 lg:col-span-4 lg:row-span-1", // 04 square
              "md:col-span-6 lg:col-span-8 lg:row-span-1", // 05 wide
            ][index];

            return (
              <motion.div
                key={step.step}
                className={`${gridClasses} relative group`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Neon Micro-light Outer Glow */}
                <div className={`absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] z-0`} />
                
                {/* Main Bento Box (Glassmorphism con variables actualizadas) */}
                <div className={`relative h-full w-full overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/40 backdrop-blur-3xl p-8 flex flex-col justify-between transition-all duration-500 z-10 
                  shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
                  ${isHovered ? '-translate-y-2 border-cyan-500/30 shadow-[0_20px_40px_rgba(6,182,212,0.15)] dark:shadow-[inset_0_1px_1px_rgba(6,182,212,0.4),0_20px_40px_rgba(6,182,212,0.1)]' : ''}`}>
                  
                  {/* Subtle Grain Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                  {/* Header: Backlit Number & Icon */}
                  <div className="flex items-start justify-between relative">
                    <div className="relative">
                      <span className={`text-7xl font-black font-mono tracking-tighter transition-all duration-700 ${isHovered ? 'text-cyan-500/30 dark:text-cyan-400/40 scale-110 blur-[1px]' : 'text-ink-3/10'}`}>
                        {step.step}
                      </span>
                      {/* Backlight effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 blur-2xl transition-opacity duration-700 ${isHovered ? 'opacity-20' : ''}`} />
                    </div>
                    
                    <div className={`p-4 rounded-2xl bg-surface-2 border border-line-soft transition-all duration-500 ${isHovered ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] scale-110' : 'text-ink-3'}`}>
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 relative">
                    <h3 className="text-xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-3 line-clamp-3">
                      {step.description}
                    </p>
                    
                    {/* Interaction Hint */}
                    <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      Explorar proceso <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-soft to-transparent" />
    </section>
  );
}
