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

export default function DisenoDeProductoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Soluciones_tecnicas_integrales/Diseño-Producto.webp"
            alt="Diseño de Producto"
            fill
            className="object-cover opacity-[0.3] scale-110 blur-[1px]"
            priority
          />
          {/* Radial mask to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_hsl(var(--background))_80%)]" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Purple/Pink Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Subtle Background Texture */}
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
            El código perfecto <br />
            no importa si tus <br />
            <AuroraText className="text-cyan-400">usuarios odian usarlo.</AuroraText>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-16 text-balance"
          >
            Diseñamos interfaces de usuario (UI) y estrategias de experiencia (UX) que no solo se ven premium, 
            sino que están matemáticamente orientadas a reducir la fricción, aumentar la retención y disparar tus conversiones.
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
              <span className="relative z-10">Agendar Auditoría Visual</span>
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
              Diseño Estratégico vs. Estética Superficial
            </h2>
            <div className="h-1.5 w-24 bg-purple-600 mx-auto rounded-full" />
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
                El costo invisible de una mala UX
              </h3>
              <ul className="space-y-6">
                {[
                  "Usuarios que abandonan tu plataforma porque no entienden cómo usarla.",
                  "Altos costos en soporte técnico explicando procesos que deberían ser intuitivos.",
                  "Pérdida de autoridad de marca por una interfaz que parece de hace 10 años."
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
              className="bg-purple-500/5 border border-purple-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(168,85,247,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <CheckCircle2 size={80} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-purple-600 dark:text-purple-400 text-balance">
                Diseño que factura
              </h3>
              <ul className="space-y-6">
                {[
                  "Flujos de trabajo optimizados que permiten a tus empleados hacer más en menos tiempo.",
                  "Interfaces intuitivas que reducen a cero la curva de aprendizaje de tus clientes.",
                  "Sistemas de diseño escalables que aceleran el desarrollo futuro."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 size={20} className="text-purple-600 dark:text-purple-400 mt-3 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Glow effect subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO BOX (Nuestras Capacidades) --- */}
      <section className="py-40 bg-background px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="mb-24">
            <p className="text-purple-600 dark:text-purple-500 font-black tracking-[0.4em] text-xs mb-6 uppercase">CAPACIDADES UX/UI</p>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.95] text-balance">
              Ingeniería Visual <br />
              <span className="opacity-10">de precisión.</span>
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
              className="md:col-span-2 bg-card backdrop-blur-md border border-border rounded-2xl p-10 lg:p-14 hover:bg-card/80 dark:hover:bg-white/10 hover:border-purple-500/30 transition-all group relative overflow-hidden"
            >
               <div className="relative z-10">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-purple-500/60 mb-6 block">SCALABILITY & COHERENCE</span>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-balance">Sistemas de Diseño (Design Systems)</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl text-balance">
                    No creamos pantallas sueltas. Construimos bibliotecas de componentes reutilizables y guías de estilo estrictas 
                    para que tu producto mantenga una coherencia visual absoluta, sin importar cuánto crezca.
                  </p>
               </div>
               {/* Accent */}
               <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Card B */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 lg:p-14 hover:bg-card/80 dark:hover:bg-white/10 hover:border-purple-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-pink-500/60 mb-6 block">USER BEHAVIOR ANALYSIS</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Auditoría UX y Optimización (CRO)</h3>
              <p className="text-muted-foreground leading-relaxed text-balance">
                Analizamos tu software actual con mapas de calor y grabaciones de sesiones para identificar exactamente dónde se están 
                frustrando tus usuarios y rediseñar ese cuello de botella.
              </p>
            </motion.div>

            {/* Card C */}
            <motion.div 
              variants={fadeInUp}
              className="bg-card backdrop-blur-md border border-border rounded-2xl p-10 lg:p-14 hover:bg-card/80 dark:hover:bg-white/10 hover:border-purple-500/30 transition-all group"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-500/60 mb-6 block">RAPID VALIDATION</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Prototipado Interactivo</h3>
              <p className="text-muted-foreground leading-relaxed text-balance">
                Antes de escribir una sola línea de código, te entregamos un prototipo navegable de alta fidelidad. 
                Valida tu idea de negocio viendo y tocando el producto final desde el día uno.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-48 relative overflow-hidden px-6">
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.95] text-balance">
              ¿Tus usuarios se pierden <br />
              <span className="text-purple-600 dark:text-purple-500">en tu plataforma?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-16 max-w-2xl mx-auto text-balance">
              Un pequeño cambio en la interfaz puede duplicar tus ventas. 
              Hablemos sobre cómo una estrategia UX puede transformar tu negocio.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="/#contact"
                className="relative flex items-center gap-6 px-12 py-6 bg-purple-600 rounded-full transition-all hover:bg-purple-500 hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)] shadow-lg group"
              >
                <span className="text-white font-black uppercase tracking-[0.2em] text-sm">Agendar Auditoría Visual</span>
                <div className="absolute inset-0 rounded-full border border-white/20 scale-105 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </motion.div>

            <div className="mt-24 flex flex-col items-center gap-4">
               <div className="w-12 h-[1px] bg-border" />
               <p className="text-muted-foreground/20 text-[10px] font-bold uppercase tracking-[0.4em]">
                 Tactica Defense • Design Engineering
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
