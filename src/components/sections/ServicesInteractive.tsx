"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Code2, 
  Layers, 
  Cloud, 
  Brain, 
  Smartphone, 
  Globe, 
  Palette, 
  ShieldCheck, 
  Cpu,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Desarrollo de Software a Medida",
    tag: "SOFTWARE ENGINEERING",
    description: "Soluciones robustas y escalables diseñadas específicamente para resolver los retos operativos de su empresa.",
    icon: Code2,
    image: "/Soluciones_tecnicas_integrales/Softwareamedida.webp",
  },
  {
    title: "Desarrollo de IA a Medida y Aprendizaje Automático",
    tag: "INTELIGENCIA ARTIFICIAL",
    description: "Implementación de modelos inteligentes y redes neuronales adaptadas para automatizar la toma de decisiones críticas.",
    icon: Brain,
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    tag: "MOBILE SOLUTIONS",
    description: "Experiencias móviles de alto rendimiento para iOS y Android con arquitecturas fluidas y centradas en el usuario.",
    icon: Smartphone,
  },
  {
    title: "Desarrollo Web",
    tag: "WEB PLATFORMS",
    description: "Ecosistemas web modernos y ultrarrápidos construidos con las tecnologías más eficientes del mercado actual.",
    icon: Globe,
  },
  {
    title: "Diseño de Producto",
    tag: "PRODUCT DESIGN",
    description: "Estrategia visual y de experiencia de usuario (UX/UI) orientada a la conversión y al deleite del cliente final.",
    icon: Palette,
  },
  {
    title: "Seguridad de Calidad",
    tag: "QA & CYBERSECURITY",
    description: "Ciclos de prueba rigurosos y estándares de seguridad industrial para garantizar la integridad absoluta de sus datos.",
    icon: ShieldCheck,
  },
  {
    title: "Servicios de Aprendizaje Automático",
    tag: "MACHINE LEARNING",
    description: "Entrenamiento de algoritmos predictivos y análisis de datos avanzado para anticipar tendencias de mercado.",
    icon: Cpu,
  },
  {
    title: "Servicios de la Nube",
    tag: "CLOUD INFRASTRUCTURE",
    description: "Gestión, migración y optimización de infraestructuras en la nube para una escalabilidad global sin fricciones.",
    icon: Cloud,
  },
];

export default function ServicesInteractive() {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];

  return (
    <section id="services" className="w-full bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-brand font-black tracking-[0.4em] text-xs mb-4 uppercase">
            NUESTROS SERVICIOS
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tighter uppercase leading-[1.1]">
            Nos encanta encontrar soluciones sencillas a desafíos complejos.
          </h2>
        </div>

        {/* Main Layout: Stacked Vertical */}
        <div className="flex flex-col gap-10">
          {/* Top: Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`group relative flex flex-col items-start p-5 text-left transition-all duration-300 rounded-xl border-b-2 ${
                    isActive
                      ? "bg-surface-2 border-brand shadow-soft"
                      : "bg-transparent border-line-soft hover:bg-surface-2 hover:border-line"
                  }`}
                >
                  <span className={`text-[9px] font-bold tracking-[0.2em] mb-1.5 transition-colors duration-300 ${
                    isActive ? "text-brand" : "text-ink-3 group-hover:text-ink-2"
                  }`}>
                    {service.tag}
                  </span>
                  <span className={`text-sm md:text-base font-bold transition-colors duration-300 leading-tight ${
                    isActive ? "text-ink" : "text-ink-3 group-hover:text-ink"
                  }`}>
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom: Showcase Visual */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/40 backdrop-blur-3xl p-8 lg:p-16 min-h-[450px] flex flex-col justify-center shadow-card transition-colors duration-500">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="relative z-10"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
                    {/* Visual Container (Icon or Image) */}
                    <div className="relative flex-shrink-0 w-full lg:w-1/3 aspect-video lg:aspect-square group/visual">
                      {currentService.image ? (
                        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-line-soft shadow-2xl transition-transform duration-500 group-hover/visual:scale-[1.02]">
                          <Image 
                            src={currentService.image}
                            alt={currentService.title}
                            fill
                            className="object-cover"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
                        </div>
                      ) : (
                        <div className="h-full w-full rounded-3xl bg-surface-2 border border-line-soft flex items-center justify-center text-brand shadow-inner">
                          {React.createElement(currentService.icon, { size: 64, strokeWidth: 1.2 })}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-6 flex-grow">
                      <div className="space-y-3">
                        <h3 className="text-3xl md:text-5xl font-bold text-ink tracking-tight leading-tight uppercase">
                          {currentService.title}
                        </h3>
                        <div className="h-1 w-24 bg-gradient-to-r from-brand to-transparent rounded-full" />
                      </div>
                      <p className="text-ink-3 text-lg md:text-xl/relaxed max-w-2xl font-medium">
                        {currentService.description}
                      </p>
                      
                      <motion.button 
                        whileHover={{ x: 10 }}
                        className="group/btn flex items-center gap-3 text-brand font-bold uppercase tracking-[0.2em] text-xs pt-4 hover:text-brand-2 transition-colors"
                      >
                        Explorar solución 
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
