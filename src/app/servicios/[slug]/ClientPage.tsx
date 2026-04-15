"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/constants";
import { AuroraText } from "@/registry/magicui/aurora-text";

import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Calendar,
  Brain,
  Smartphone,
  Globe,
  Palette,
  Cloud,
  Code2
} from "lucide-react";

// Mapeo de iconos para uso dinámico
const iconMap: Record<string, any> = {
  Code2,
  Layers,
  Cloud,
  Brain,
  Smartphone,
  Globe,
  Palette,
  ShieldCheck,
  Cpu,
  Zap
};

// Variantes de animación
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function DynamicServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />

      {/* --- HERO SECTION INMERSIVO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image con tratamiento premium */}
        <div className="absolute inset-0 z-0">
          {service.image && (
            <Image 
              src={service.image}
              alt={service.title}
              fill
              className="object-cover opacity-[0.3] scale-110 blur-[1px]"
              priority
            />
          )}
          {/* Mascaras de profundidad */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_hsl(var(--background))_80%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Glow Effects dinámicos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-balance"
          >
            {service.title.split(' ').map((word, i) => (
               i === service.title.split(' ').length - 1 ? 
               <AuroraText key={i} className="text-cyan-400 block md:inline"> {word}</AuroraText> : 
               <span key={i}> {word}</span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-12"
          >
            {service.fullDescription}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/#contact" 
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10">Agendar Llamada de Arquitectura</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <Link 
              href="#problem-solution" 
              className="text-muted-foreground hover:text-foreground font-bold uppercase tracking-widest text-[10px] transition-colors flex items-center gap-2"
            >
              Explorar solución <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* --- SECCIÓN COMPARATIVA (PROBLEMA VS SOLUCIÓN) --- */}
      <section id="problem-solution" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-balance">
              Desbloqueando el siguiente nivel
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Tarjeta Problema */}
            <motion.div 
              {...fadeInUp}
              className="bg-foreground/[0.02] border border-border/5 p-10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle size={80} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-foreground/70 text-balance">
                {(service as any).problem?.title || "El desafío actual"}
              </h3>
              <ul className="space-y-6">
                {((service as any).problem?.items || [
                  "Sistemas obsoletos que frenan el crecimiento.",
                  "Falta de talento técnico especializado in-house.",
                  "Procesos manuales propensos a errores.",
                  "Experiencias de usuario fragmentadas."
                ]).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground italic">
                    <XCircle size={20} className="text-red-500/50 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tarjeta Solución TacticalDev */}
            <motion.div 
              {...fadeInUp}
              className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(37,99,235,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <CheckCircle2 size={80} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-blue-400 text-balance">
                {(service as any).solution?.title || "La Propuesta TacticalDev"}
              </h3>
              <ul className="space-y-6">
                {((service as any).solution?.items || [
                  "Arquitectura resiliente y escalable.",
                  "Talento top-tier integrado a tu visión.",
                  "Automatización de procesos clave.",
                  "Interfaces que convierten y enamoran."
                ]).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID DE CARACTERÍSTICAS CORE --- */}
      <section className="py-32 bg-background border-y border-border/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-blue-500 font-black tracking-[0.4em] text-xs mb-4 uppercase">CAPACIDADES CORE</p>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-tight text-balance">
              Ingeniería aplicada <br />
              <span className="text-foreground/20">a resultados medibles.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1: Diferenciador Técnico (Ancha) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20">
                  <IconComponent size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-balance">{service.features[0]}</h3>
                  <p className="text-foreground/50 text-lg leading-relaxed max-w-2xl">
                    Implementamos soluciones bajo los estándares de ingeniería más estrictos de la industria. 
                    Nuestro enfoque no solo resuelve el problema inmediato, sino que prepara su infraestructura para la escala global.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Card 2: Segunda característica */}
            <motion.div 
              variants={fadeInUp}
              className="bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 border border-purple-500/20">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">{service.features[1]}</h3>
              <p className="text-foreground/50 leading-relaxed">
                Optimización de recursos y flujos de trabajo diseñados para maximizar el ROI de su inversión tecnológica.
              </p>
            </motion.div>

            {/* Card 3: Tercera característica */}
            <motion.div 
              variants={fadeInUp}
              className="bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-8 border border-cyan-500/20">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">{service.features[2]}</h3>
              <p className="text-foreground/50 leading-relaxed">
                Seguridad integral y cumplimiento normativo en cada etapa del desarrollo, garantizando la integridad de su activo más valioso.
              </p>
            </motion.div>

            {/* Card 4: Impacto (Ancha) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-brand/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <Zap size={28} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-foreground/5 border border-border/10 text-[10px] font-black tracking-widest uppercase">Resultados de Misión Crítica</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-balance">Escalabilidad Sin Compromisos</h3>
                  <p className="text-foreground/50 text-lg leading-relaxed">
                    Nuestras soluciones están diseñadas para crecer orgánicamente con su negocio. 
                    Utilizamos patrones de diseño modulares que permiten adaptaciones rápidas a los cambios del mercado.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- CTA DE CIERRE --- */}
      <section id="contact" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight text-balance">
              ¿Listo para materializar <br />
              <span className="text-blue-500">tu visión técnica?</span>
            </h2>
            <p className="text-xl text-foreground/50 font-medium mb-12 max-w-2xl mx-auto">
              Hablemos sobre cómo {service.title.toLowerCase()} puede transformar su empresa hoy mismo.
            </p>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link 
                href="/#contact"
                className="group relative flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-2xl transition-all hover:bg-primary/90 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] shadow-lg"
              >
                <Calendar className="text-primary-foreground group-hover:rotate-12 transition-transform" />
                <span className="text-primary-foreground font-black uppercase tracking-[0.2em] text-sm">Agendar Llamada de Arquitectura</span>
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-foreground/20 scale-105 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
