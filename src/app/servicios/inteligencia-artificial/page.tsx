"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { XCircle, CheckCircle2 } from "lucide-react";
import { AuroraText } from "@/registry/magicui/aurora-text";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } }
};

export default function InteligenciaArtificialPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Soluciones_tecnicas_integrales/Machine-Learning.webp"
            alt="Inteligencia Artificial"
            fill
            className="object-cover opacity-[0.3] scale-110 blur-[1px]"
            priority
          />
          {/* Radial mask to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_hsl(var(--background))_80%)]" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} 
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-10 text-balance"
          >
            Tus datos ya saben <br />
            <AuroraText className="text-cyan-400">lo que va a pasar.</AuroraText> <br />
            Nosotros hacemos que te lo digan.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-16 text-balance"
          >
            Implementamos modelos de Aprendizaje Automático y Redes Neuronales adaptadas a tu negocio. 
            Convertimos terabytes de información estancada en decisiones automatizadas en tiempo real.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Link 
              href="/#contact"
              className="group relative px-10 py-5 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <span className="relative z-10">Agendar Auditoría de Datos</span>
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce pointer-events-none">
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
        </div>
      </section>

      {/* --- GRID COMPARATIVO --- */}
      <section className="py-32 relative px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-balance">
              La evolución de la estrategia corporativa
            </h2>
            <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* El Problema */}
            <motion.div 
              {...fadeInUp}
              className="bg-foreground/[0.02] border border-border/5 p-10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle size={80} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-foreground/70 text-balance">
                El costo de la intuición
              </h3>
              <ul className="space-y-6">
                {[
                  "Análisis manuales que tardan días y nacen obsoletos.",
                  "Errores humanos en la toma de decisiones críticas.",
                  "Datos históricos acumulados que no generan ningún retorno de inversión."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground italic">
                    <XCircle size={20} className="text-red-500/50 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* La Ventaja TacticalDev */}
            <motion.div 
              {...fadeInUp}
              className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(16,185,129,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <CheckCircle2 size={80} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-emerald-500 dark:text-emerald-400 text-balance">
                Decisiones a escala de máquina
              </h3>
              <ul className="space-y-6">
                {[
                  "Predicciones precisas basadas en patrones invisibles para el ojo humano.",
                  "Automatización de tareas cognitivas complejas 24/7.",
                  "Modelos privados: tus datos nunca alimentan a tu competencia."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Glow effect subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO BOX (Capacidades) --- */}
      <section className="py-40 bg-background px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24 text-center md:text-left">
            <p className="text-emerald-500 font-black tracking-[0.4em] text-xs mb-6 uppercase">CAPACIDADES DE IMPLEMENTACIÓN</p>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.95] text-balance">
              Infraestructura Cognitiva <br />
              <span className="opacity-10">de alto impacto.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Card A (Ancha) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
            >
               <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-500/60 mb-6 block">PREDICTIVE ANALYTICS</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Modelos Predictivos y Forecasting</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                    Anticipa la demanda, detecta fraudes antes de que ocurran y optimiza tu cadena de suministro con algoritmos que aprenden de tu histórico.
                  </p>
               </div>
               {/* Accent */}
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Card B */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-500/60 mb-6 block">DECISION ENGINES</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Motores de Decisión Automatizada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistemas que evalúan miles de variables en milisegundos para aprobar créditos, asignar recursos o ajustar precios en tiempo real.
              </p>
            </motion.div>

            {/* Card C */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-500/60 mb-6 block">GENERATIVE AI</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">LLMs Corporativos Privados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integramos el poder del Procesamiento de Lenguaje Natural con tu base documental privada, garantizando cero fugas de información.
              </p>
            </motion.div>

            {/* Card D (Ancha en mobile, normal en desktop) */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-500/60 mb-6 block">COMPUTER VISION</span>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Visión Computacional</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Redes neuronales que analizan imágenes y video para control de calidad, seguridad industrial o biometría.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-48 relative overflow-hidden px-6">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.95] text-balance">
              ¿Listo para activar el <br />
              <span className="text-emerald-600 dark:text-emerald-500">potencial de tus datos?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-16 max-w-2xl mx-auto text-balance">
              El mejor momento para implementar IA fue hace un año. El segundo mejor momento es hoy. 
              Agenda una auditoría técnica y evaluemos la viabilidad de tu proyecto.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="/#contact"
                className="relative flex items-center gap-6 px-12 py-6 bg-emerald-600 rounded-full transition-all hover:bg-emerald-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] shadow-lg group"
              >
                <span className="text-white font-black uppercase tracking-[0.2em] text-sm">Agendar Auditoría de Datos</span>
                {/* Micro-glow border */}
                <div className="absolute inset-0 rounded-full border border-white/20 scale-105 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </motion.div>

            <div className="mt-16 flex flex-col items-center gap-4">
               <div className="w-12 h-[1px] bg-border" />
               
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
