"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiNextdotjs, SiReact, SiAngular, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

const HeroUIIcon = () => (
  <svg viewBox="0 0 128 128" fill="currentColor" className="w-6 h-6">
    <path d="M64 0C28.656 0 0 28.656 0 64s28.656 64 64 64 64-28.656 64-64S99.344 0 64 0zm39.125 93.313c-1.875 1.875-4.938 1.875-6.813 0L64 61.063l-32.313 32.25c-1.875 1.875-4.938 1.875-6.813 0-1.875-1.875-1.875-4.938 0-6.813L57.188 54.25l-32.313-32.25c-1.875-1.875-1.875-4.938 0-6.813 1.875-1.875 4.938-1.875 6.813 0L64 47.438l32.313-32.25c1.875-1.875 4.938-1.875 6.813 0 1.875 1.875 1.875 4.938 0 6.813L70.813 54.25l32.313 32.25c1.875 1.875 1.875 4.938 0 6.813z" />
  </svg>
);

const PrimeNGIcon = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="w-6 h-6">
    <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fillOpacity="0.2" />
    <circle cx="50" cy="50" r="20" />
    <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "SiNextdotjs":
      return <SiNextdotjs className="w-6 h-6" />;
    case "SiReact":
      return <SiReact className="w-6 h-6" />;
    case "SiAngular":
      return <SiAngular className="w-6 h-6 text-[#DD0031]" />;
    case "SiTailwindcss":
      return <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" />;
    case "TbBrandCSharp":
      return <TbBrandCSharp className="w-6 h-6 text-[#239120]" />;
    case "DiMsqlServer":
      return <DiMsqlServer className="w-6 h-6 text-[#CC2927]" />;
    case "HeroUI":
      return <HeroUIIcon />;
    case "PrimeNG":
      return <PrimeNGIcon />;
    default:
      return null;
  }
};

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Asegurar que el índice no quede fuera de rango tras cambios en los datos (Fast Refresh)
  const safeIndex = currentIndex >= caseStudies.length ? 0 : currentIndex;

  useEffect(() => {
    if (caseStudies.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [caseStudies.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[safeIndex];

  if (!currentStudy) return null;

  return (
    <section id="case-studies" className="py-24 px-6 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <SectionTitle
            eyebrow="PORTFOLIO"
            title="Casos de Estudio"
            align="left"
          />
          <p className="text-muted-foreground max-w-2xl mt-4">
            Explora cómo ayudamos a las empresas a superar retos técnicos complejos con soluciones de ingeniería de alto rendimiento.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-10"
            >
              {/* Fila superior: imagen + título/descripción */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
                {/* Columna Izquierda: Imagen */}
                <div className="absolute inset-0 z-0 lg:relative lg:inset-auto lg:z-auto lg:aspect-video rounded-[2rem] overflow-hidden border border-border group shadow-xl dark:shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)] bg-muted dark:bg-card flex items-center justify-center lg:block">
                  <Image
                    src={currentStudy.imageSrc || "/Imagenes/imagen2.png"}
                    alt={currentStudy.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    priority
                  />
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none hidden lg:block" />
                </div>

                {/* Columna Derecha: título + descripción */}
                <div className="relative z-10 flex flex-col justify-center py-2 lg:px-0 px-6">
                  <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {currentStudy.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed italic">
                    {currentStudy.description}
                  </p>
                </div>
              </div>

              {/* Fila inferior: Resultado Clave + Stack — full width */}
              <div className="relative z-10 border-t border-black/5 dark:border-white/10 pt-8 space-y-6 px-6 lg:px-0">
                <div>
                  <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-4">
                    Resultado Clave
                  </h4>
                  <p className="text-2xl lg:text-3xl text-foreground font-medium leading-snug max-w-5xl">
                    {currentStudy.result}
                  </p>
                </div>

                {currentStudy.technologies && (
                  <div>
                    <h4 className="text-xs font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-4">
                      Stack Tecnológico
                    </h4>
                    <div className="flex flex-wrap gap-6 items-center">
                      {currentStudy.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-300"
                          title={tech.name}
                        >
                          <span className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                            {getIcon(tech.icon)}
                          </span>
                          <span className="text-sm font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de Navegación */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-16 pt-8 border-t border-black/5 dark:border-white/5">
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="p-4 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 group"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex gap-3">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    currentIndex === index ? "w-12 bg-blue-600 dark:bg-blue-500" : "w-3 bg-black/10 dark:bg-white/20 hover:bg-black/20 dark:hover:bg-white/40"
                  }`}
                  aria-label={`Ir al caso ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
