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
import { services } from "@/lib/constants";
import Link from "next/link";

const iconMap: Record<string, any> = {
  Code2,
  Layers,
  Cloud,
  Brain,
  Smartphone,
  Globe,
  Palette,
  ShieldCheck,
  Cpu
};

export default function ServicesInteractive() {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];
  const IconComponent = iconMap[currentService.icon] || Code2;

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
            <div className="relative overflow-hidden rounded-[2.5rem] border border-line-soft bg-black min-h-[480px] flex flex-col justify-end shadow-card transition-colors duration-500 group/card">
              
              {/* Background Layer: High-Impact Centered Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                    className="relative h-full w-full"
                  >
                    {currentService.image ? (
                      <>
                        <Image 
                          src={currentService.image}
                          alt={currentService.title}
                          fill
                          className="object-cover object-center transition-transform duration-1000 group-hover/card:scale-110"
                          priority
                        />
                        {/* Radial Overlay to focus on center */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.5)_100%)] z-10" />
                        {/* Bottom gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                        {/* Side gradient for desktop */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10 hidden lg:block" />
                      </>
                    ) : (
                      <div className="h-full w-full bg-surface-2 flex items-center justify-center text-brand/20">
                        <IconComponent size={240} strokeWidth={0.5} />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10" />
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Accents */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-brand/30 blur-[100px] rounded-full pointer-events-none z-10" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay z-10" />

              {/* Content Layer */}
              <div className="relative z-20 p-8 lg:p-14 w-full lg:max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-5"
                  >
                    <div className="space-y-2">
                      <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] uppercase drop-shadow-md">
                        {currentService.title}
                      </h3>
                      <div className="h-1.5 w-24 bg-gradient-to-r from-brand to-transparent rounded-full" />
                    </div>
                    
                    <p className="text-white/90 text-base md:text-xl/relaxed font-medium drop-shadow-lg">
                      {currentService.description}
                    </p>
                    
                    <Link href={`/servicios/${currentService.slug}`}>
                      <motion.button 
                        whileHover={{ x: 10 }}
                        className="group/btn inline-flex items-center gap-3 bg-brand px-7 py-3.5 rounded-full text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:bg-brand-2 hover:shadow-[0_0_30px_rgba(var(--brand-rgb),0.5)]"
                      >
                        Explorar solución 
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
