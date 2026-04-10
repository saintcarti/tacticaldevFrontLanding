"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiNextdotjs, SiReact, SiAngular, SiTailwindcss } from "react-icons/si";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section
      id="case-studies"
      className="relative flex min-h-screen items-center overflow-hidden py-32 text-foreground"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow="CASOS DE ESTUDIO"
            title="Nuestros Casos de Éxito"
            align="center"
          />
        </div>

        <div className="relative group">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line-soft bg-black min-h-[600px] lg:min-h-[650px] flex flex-col justify-end shadow-card
                dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]">
            
            {/* Background Image Layer: Full Bleed & Immersive */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={caseStudies[currentIndex].imageSrc || "/Imagenes/imagen2.png"}
                    alt={caseStudies[currentIndex].title}
                    fill
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  {/* Comprehensive Overlays for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10 hidden lg:block" />
                  <div className="absolute inset-0 bg-black/20 z-10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Content Layer: Floating over the image */}
            <div className="relative z-20 w-full lg:max-w-4xl p-8 lg:p-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-brand/20 border border-brand/30 backdrop-blur-md text-brand-light text-sm font-black tracking-wider uppercase">
                      {caseStudies[currentIndex].industry}
                    </span>
                  </div>

                  <h3 className="text-4xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.95] drop-shadow-2xl">
                    {caseStudies[currentIndex].title}
                  </h3>

                  <p className="text-xl lg:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl drop-shadow-md">
                    {caseStudies[currentIndex].description}
                  </p>

                  <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                    <div className="flex-1">
                      <h4 className="text-xs font-black text-brand uppercase tracking-[0.3em] mb-3">Resultado Clave</h4>
                      <p className="text-xl text-white italic font-medium">
                        "{caseStudies[currentIndex].result}"
                      </p>
                    </div>
                    
                    {caseStudies[currentIndex].technologies && (
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Stack Tecnológico</h4>
                        <div className="flex gap-5 items-center text-white/70">
                          {caseStudies[currentIndex].technologies.map((tech, idx) => (
                            <div key={idx} className="hover:text-brand transition-colors duration-300 drop-shadow-lg" title={tech.name}>
                              {getIcon(tech.icon)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls & Navigation */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12 pt-8 border-t border-white/5">
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-brand hover:border-brand transition-all duration-300 group/btn"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-brand hover:border-brand transition-all duration-300 group/btn"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex gap-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        currentIndex === index ? "w-12 bg-brand" : "w-3 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Ir a diapositiva ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-soft to-transparent" />
    </section>
  );
}
