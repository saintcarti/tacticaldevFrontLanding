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

export default function DesarrolloMovilPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Soluciones_tecnicas_integrales/Desarrollo Mobile.webp"
            alt="Desarrollo Móvil"
            fill
            className="object-cover opacity-[0.3] scale-110 blur-[1px]"
            priority
          />
          {/* Radial mask to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_hsl(var(--background))_80%)]" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Deep Blue/Purple Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-10 text-balance"
          >
            Si tu negocio solo vive <br />
            en un escritorio, <br />
            <AuroraText className="text-cyan-400">estás perdiendo terreno.</AuroraText>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-16 text-balance"
          >
            Construimos experiencias móviles de alto rendimiento para iOS y Android. 
            Ya sea para empoderar de tu equipo en la calle o para crear un canal de ventas directo con tus clientes, 
            desarrollamos apps que la gente realmente quiere usar.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              href="/#contact"
              className="group relative px-12 py-6 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <span className="relative z-10">Agendar Sesión de Descubrimiento</span>
            </Link>
          </motion.div>
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
              Estrategia Móvil vs. Adaptación Web
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
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
                La trampa del &quot;Mobile Friendly&quot;
              </h3>
              <ul className="space-y-6">
                {[
                  "Las páginas web adaptadas son lentas y frustrantes en el celular.",
                  "Tus trabajadores en terreno no pueden operar si pierden la conexión a internet.",
                  "Dependes de que el cliente busque tu web en lugar de estar a un toque de distancia."
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
              className="bg-blue-500/5 border border-blue-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(37,99,235,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <CheckCircle2 size={80} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-blue-600 dark:text-blue-400 text-balance">
                Presencia móvil absoluta
              </h3>
              <ul className="space-y-6">
                {[
                  "Navegación ultra fluida y tiempos de carga instantáneos.",
                  "Capacidad de trabajar offline y sincronizar datos automáticamente.",
                  "Notificaciones push que abren un canal de comunicación directo y sin filtros."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-400 mt-3 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Glow effect subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO BOX (Casos de Uso) --- */}
      <section className="py-40 bg-background px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <p className="text-blue-600 dark:text-blue-500 font-black tracking-[0.4em] text-xs mb-6 uppercase">CASOS DE USO EMPRESARIAL</p>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.95] text-balance">
              Soluciones para el <br />
              <span className="opacity-10">mundo real.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Card A (Ancha) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden"
            >
               <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500/60 mb-6 block">LOGISTICS & FIELD OPERATIONS</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Operaciones y Logística en Terreno</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    Apps diseñadas para el trabajo duro. Control de inventario, ruteo, captura de firmas y reportes fotográficos 
                    directamente desde el dispositivo del trabajador, integrados en tiempo real a tu sistema central.
                  </p>
               </div>
               {/* Accent */}
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Card B */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-blue-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-purple-500/60 mb-6 block">CUSTOMER EXPERIENCE</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Portales de Cliente Premium (B2C/B2B)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fideliza a tus clientes con una app donde puedan realizar pedidos, rastrear envíos o gestionar sus suscripciones 
                con una experiencia de usuario de clase mundial.
              </p>
            </motion.div>

            {/* Card C */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-blue-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-500/60 mb-6 block">ENGINEERING EXCELLENCE</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Ingeniería Nativa e Híbrida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dominamos arquitecturas nativas (Android Java) y multiplataforma (React Native) para garantizar que tu aplicación 
                aproveche al máximo el hardware del teléfono sin agotar presupuestos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-48 relative overflow-hidden px-6">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.95] text-balance">
              ¿Listo para llevar tu empresa <br />
              <span className="text-blue-600 dark:text-blue-500">en el bolsillo de tus clientes?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-16 max-w-2xl mx-auto text-balance">
              Cuéntanos sobre tu operación y diseñaremos la architecture móvil exacta para resolver tus cuellos de botella.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="/#contact"
                className="relative flex items-center gap-6 px-12 py-6 bg-blue-600 rounded-full transition-all hover:bg-blue-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] shadow-lg group"
              >
                <span className="text-white font-black uppercase tracking-[0.2em] text-sm">Agendar Sesión de Descubrimiento</span>
                {/* Micro-glow border */}
                <div className="absolute inset-0 rounded-full border border-white/20 scale-105 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </motion.div>

            <div className="mt-24 flex flex-col items-center gap-4">
               <div className="w-12 h-[1px] bg-border" />
               
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
