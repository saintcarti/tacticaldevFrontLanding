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
          <div className="overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/40 backdrop-blur-3xl 
                shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Carousel */}
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={caseStudies[currentIndex].imageSrc || "/Imagenes/imagen2.png"}
                      alt={caseStudies[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-20 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-bold tracking-wider uppercase">
                      {caseStudies[currentIndex].industry}
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-ink uppercase leading-tight">
                      {caseStudies[currentIndex].title}
                    </h3>
                    <p className="text-xl text-ink-3 font-medium leading-relaxed">
                      {caseStudies[currentIndex].description}
                    </p>
                    <div className="pt-6 border-t border-line-soft">
                      <h4 className="text-sm font-bold text-brand uppercase tracking-widest mb-2">Resultado</h4>
                      <p className="text-lg text-ink-2 italic mb-6">
                        "{caseStudies[currentIndex].result}"
                      </p>
                      
                      {caseStudies[currentIndex].technologies && (
                        <div className="flex flex-col gap-3">
                          <h4 className="text-[10px] font-bold text-ink-3 uppercase tracking-[0.2em]">Tecnologías</h4>
                          <div className="flex gap-4 items-center text-ink-3/70">
                            {caseStudies[currentIndex].technologies.map((tech, idx) => (
                              <div key={idx} className="hover:text-brand transition-colors duration-300" title={tech.name}>
                                {getIcon(tech.icon)}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex gap-4 mt-12">
                  <button
                    onClick={prevSlide}
                    className="p-4 rounded-full border border-line-soft bg-surface-2 hover:bg-brand hover:text-white transition-all duration-300"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-4 rounded-full border border-line-soft bg-surface-2 hover:bg-brand hover:text-white transition-all duration-300"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex gap-2 mt-8">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        currentIndex === index ? "w-8 bg-brand" : "w-2 bg-line-soft hover:bg-brand/50"
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
