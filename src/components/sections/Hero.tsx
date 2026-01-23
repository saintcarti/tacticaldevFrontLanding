"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "@/components/ui/Button";

const heroImages = ["/imagen2.png", "/imagen6.png"].filter(Boolean);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const easing = cubicBezier(0.5, 0, 0.2, 1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const curtainY = useTransform(scrollYProgress, (value) => -150 * easing(value));
  const curtainScale = useTransform(scrollYProgress, (value) => 1 - easing(value));
  const curtainOpacity = useTransform(scrollYProgress, (value) => 1 - easing(value));

  useEffect(() => {
    if (heroImages.length === 0) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative z-10 flex min-h-screen items-center overflow-hidden bg-[#020617]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 origin-top bg-[#020617]"
        style={{ y: curtainY, scaleY: curtainScale, opacity: curtainOpacity }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1224] via-[#020617] to-[#0f172a]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div
        className="bg-orb pointer-events-none absolute right-0 top-1/2 h-56 w-56 opacity-60 md:h-72 md:w-72 lg:h-96 lg:w-96"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-15 px-1 py-16 md:grid-cols-[1.6fr_1fr] md:py-20 lg:py-20">
        <div className="space-y-4 md:space-y-20 lg:space-y-2">
          
          <h1 className="hero-reveal hero-reveal--2 text-balance text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Software estrategico
            <span className="block text-[#60A5FA]">Desarrollo</span> y arquitectura
          </h1>
          <p className="hero-reveal hero-reveal--3 max-w-xl text-base text-[#9CA3AF] md:text-lg">
            Creamos soluciones empresariales con precision tactica y excelencia
            arquitectonica. Conectamos logica de negocio compleja con ejecucion
            tecnica confiable.
          </p>
          <div className="hero-reveal hero-reveal--4 flex flex-wrap gap-3">
            <Button href="#contact">Contactanos</Button>
            
          </div>
          <div className="hero-reveal hero-reveal--5 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#9CA3AF]">
           
          </div>
        </div>
        <div className="relative flex items-center justify-center md:justify-end">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -right-10 h-48 w-48 rounded-full bg-brand-2/25 blur-3xl" />
            <AnimatePresence mode="wait">
              {heroImages[activeIndex] ? (
                <motion.div
                  key={heroImages[activeIndex]}
                  initial={{ opacity: 0, y: -24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex w-full items-center justify-center"
                >
                  <Image
                    src={heroImages[activeIndex]}
                    alt="Vista de producto TacticalDev"
                    width={520}
                    height={520}
                    className="h-[20rem] w-[20rem] max-w-none object-contain md:h-[30rem] md:w-[30rem] lg:h-[40rem] lg:w-[40rem]"
                    priority
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      
    </section>
  );
}
