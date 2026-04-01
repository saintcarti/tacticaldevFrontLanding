"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "@/components/ui/Button";
import { AuroraText } from "@/registry/magicui/aurora-text";
import { Globe } from "@/components/ui/globe";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const whatsappHref = "https://wa.me/+56991338717";

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative z-10 flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-purple-600/10 dark:bg-purple-600/20 blur-[140px]" />
      </div>

      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05]" />
      
      <motion.div 
        style={{ opacity, scale }}
        className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 pt-32 md:grid-cols-[1.2fr_1fr] items-center"
      >
        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Creamos <AuroraText>Productos</AuroraText> <br />
              Digitales Premium
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed"
          >
            TacticalDev es una agencia de desarrollo de software de élite especializada en 
            soluciones digitales de alto rendimiento con ingeniería de precisión y 
            diseño de clase mundial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              href={whatsappHref}
              className="group relative overflow-hidden bg-blue-600 px-8 py-4 text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border-none"
            >
              <span className="relative z-10 font-semibold text-lg">Iniciar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <button className="group relative flex items-center justify-center rounded-full border border-border bg-foreground/5 px-8 py-4 text-lg font-medium text-foreground transition-all hover:bg-foreground/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Ver Trabajo
            </button>
          </motion.div>
        </div>

        <div className="relative h-[400px] w-full md:h-[600px] lg:h-[800px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full w-full"
          >
            <Globe className="top-0" />
          </motion.div>
          
          {/* Subtle light leaks around globe */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        </div>
      </motion.div>
    </section>
  );
}
