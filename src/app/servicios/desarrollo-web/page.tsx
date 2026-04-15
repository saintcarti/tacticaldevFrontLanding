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

export default function DesarrolloWebPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Soluciones_tecnicas_integrales/Desarrollo-Web.webp"
            alt="Desarrollo Web"
            fill
            className="object-cover opacity-[0.3] scale-110 blur-[1px]"
            priority
          />
          {/* Radial mask to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_hsl(var(--background))_80%)]" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Cyan Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Subtle Scanline/Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-10 text-balance"
          >
            Tu web no debería ser <br />
            un folleto digital. <br />
            <AuroraText className="text-cyan-400">Debe ser tu mejor vendedor.</AuroraText>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-16 text-balance"
          >
            Construimos plataformas web ultrarrápidas utilizando las tecnologías más eficientes del mercado actual. 
            Abandonamos las plantillas pesadas para crear ecosistemas a medida que dominan el SEO, retienen a los usuarios y maximizan tus conversiones.
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
              <span className="relative z-10">Agendar Auditoría de Rendimiento</span>
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
              Ingeniería Web vs. Desarrollo Convencional
            </h2>
            <div className="h-1.5 w-24 bg-cyan-600 mx-auto rounded-full" />
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
                El costo de la lentitud
              </h3>
              <ul className="space-y-6">
                {[
                  "Plataformas anticuadas que tardan segundos en cargar y espantan a tus clientes.",
                  "Sistemas rígidos imposibles de escalar cuando el tráfico aumenta.",
                  "Arquitecturas vulnerables y dependientes de plugins de terceros."
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
              className="bg-cyan-500/5 border border-cyan-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(6,182,212,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <CheckCircle2 size={80} className="text-cyan-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-cyan-600 dark:text-cyan-400 text-balance">
                Rendimiento sin compromisos
              </h3>
              <ul className="space-y-6">
                {[
                  "Tiempos de carga medidos en milisegundos gracias a arquitecturas modernas (Next.js/React).",
                  "Estructuras modulares (Headless) listas para integrarse con cualquier CRM o base de datos.",
                  "Seguridad de grado empresarial nativa."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 size={20} className="text-cyan-500 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Glow effect subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO BOX (Lo que construimos) --- */}
      <section className="py-40 bg-background px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <p className="text-cyan-600 dark:text-cyan-500 font-black tracking-[0.4em] text-xs mb-6 uppercase">SOLUCIONES DE ALTO IMPACTO</p>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.95] text-balance">
              Infraestructura para <br />
              <span className="opacity-10">la era digital.</span>
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
              className="md:col-span-2 bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-cyan-500/30 transition-all group relative overflow-hidden"
            >
               <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-500/60 mb-6 block">ENTERPRISE WEB APPS</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Aplicaciones Web B2B (Web Apps)</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    Sistemas complejos accesibles desde el navegador. Construimos paneles de administración, intranets 
                    y portales de clientes que funcionan con la misma fluidez que una aplicación de escritorio.
                  </p>
               </div>
               {/* Accent */}
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Card B */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500/60 mb-6 block">HIGH-CONVERSION COMMERCE</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">E-commerce de Alto Rendimiento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tiendas en línea construidas sobre arquitecturas Headless (desacopladas) para soportar miles de transacciones 
                simultáneas sin pestañear.
              </p>
            </motion.div>

            {/* Card C */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 hover:bg-card/80 dark:hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-500/60 mb-6 block">PREMIUM CORPORATE SITES</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Sitios Corporativos Premium</h3>
              <p className="text-muted-foreground leading-relaxed">
                La carta de presentación definitiva. Combinamos animaciones fluidas, diseño inmersivo y SEO técnico 
                impecable para posicionar tu marca en la cima de tu industria.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-48 relative overflow-hidden px-6">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.95] text-balance">
              ¿Listo para jubilar <br />
              <span className="text-cyan-600 dark:text-cyan-500">tu vieja página web?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-16 max-w-2xl mx-auto text-balance">
              El usuario moderno no perdona un sitio lento. Agenda una auditoría técnica y descubre cuánto dinero estás 
              perdiendo por culpa de una mala infraestructura web.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="/#contact"
                className="relative flex items-center gap-6 px-12 py-6 bg-cyan-600 rounded-full transition-all hover:bg-cyan-500 hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] shadow-lg group"
              >
                <span className="text-white font-black uppercase tracking-[0.2em] text-sm">Agendar Auditoría de Rendimiento</span>
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
