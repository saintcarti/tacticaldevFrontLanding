"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  Calendar
} from "lucide-react";

import Image from "next/image";

// Variantes de animación para consistencia
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

export default function SoftwareAMedidaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Soluciones_tecnicas_integrales/Softwareamedida.webp"
            alt="Desarrollo de Software a Medida"
            fill
            className="object-cover opacity-[0.3] scale-110 blur-[1px]"
            priority
          />
          {/* Radial mask to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_hsl(var(--background))_80%)]" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-balance"
          >
            Tu negocio tiene <br />
            <AuroraText className="text-cyan-400">reglas únicas.</AuroraText> <br />
            Tu software también.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 font-medium leading-relaxed mb-12"
          >
            Diseñamos y construimos plataformas empresariales a medida que eliminan cuellos de botella, 
            automatizan operaciones y escalan sin límites. Sin ataduras a licencias de terceros.
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
              Saber más <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* --- PROBLEMA VS SOLUCIÓN --- */}
      <section id="problem-solution" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-balance">
              ¿Por qué elegir el camino a medida?
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
                El límite del software empaquetado
              </h3>
              <ul className="space-y-6">
                {[
                  "Flujos de trabajo forzados por la herramienta",
                  "Silos de datos desconectados entre sí",
                  "Costos de licencias que escalan con tu equipo",
                  "Dependencia total de proveedores externos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground italic">
                    <XCircle size={20} className="text-red-500/50 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* La Solución */}
            <motion.div 
              {...fadeInUp}
              className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[2.5rem] relative overflow-hidden group shadow-[0_0_50px_rgba(37,99,235,0.05)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <CheckCircle2 size={80} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-blue-400 text-balance">
                El poder del software a medida
              </h3>
              <ul className="space-y-6">
                {[
                  "Se adapta a tus procesos exactos de negocio",
                  "Propiedad total (IP) y cero vendor lock-in",
                  "Integración nativa con tu infraestructura actual",
                  "Escalabilidad horizontal según demanda real"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Highlight Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-32 bg-background border-y border-border/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <p className="text-blue-500 font-black tracking-[0.4em] text-xs mb-4 uppercase">CAPACIDADES TÉCNICAS</p>
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-tight text-balance">
              Ingeniería de clase mundial <br />
              <span className="text-foreground/20">para desafíos críticos.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1: Arquitecturas (Ancha) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20">
                  <Cpu size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-balance">Arquitecturas de Alta Concurrencia</h3>
                  <p className="text-foreground/50 text-lg leading-relaxed max-w-2xl">
                    Construimos backends robustos preparados para manejar picos de tráfico intensivos sin degradación de rendimiento. 
                    Especialistas en Go, Node.js y arquitecturas distribuidas sobre Kubernetes.
                  </p>
                </div>
              </div>
              {/* Background Accent */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Card 2: Interfaces */}
            <motion.div 
              variants={fadeInUp}
              className="bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 border border-purple-500/20">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Interfaces de Alto Rendimiento</h3>
              <p className="text-foreground/50 leading-relaxed">
                Dashboards y paneles de control web/móvil con tiempos de carga milisegundos y UX premium centrada en la eficiencia operativa.
              </p>
            </motion.div>

            {/* Card 3: Seguridad */}
            <motion.div 
              variants={fadeInUp}
              className="bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-8 border border-cyan-500/20">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-balance">Seguridad y Cumplimiento</h3>
              <p className="text-foreground/50 leading-relaxed">
                Encriptación de extremo a extremo y arquitecturas diseñadas bajo estándares empresariales para proteger el activo más valioso: tu data.
              </p>
            </motion.div>

            {/* Card 4: Automatización */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-foreground/5 backdrop-blur-md border border-border/10 rounded-[2.5rem] p-10 hover:border-brand/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <Zap size={28} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-foreground/5 border border-border/10 text-[10px] font-black tracking-widest uppercase">Escalabilidad Garantizada</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-balance">Optimización Operativa</h3>
                  <p className="text-foreground/50 text-lg leading-relaxed">
                    Convertimos procesos manuales y repetitivos en flujos automatizados de alta precisión. 
                    Nuestro software no solo reemplaza tareas, redefine cómo tu equipo entrega valor.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section id="contact" className="py-40 relative overflow-hidden">
        {/* Animated Background Gradient */}
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
              No dejes que tu tecnología sea un obstáculo. Hablemos sobre cómo construir 
              la infraestructura que tu empresa necesita para dominar su industria.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link 
                href="/#contact"
                className="group relative flex items-center gap-4 px-10 py-5 bg-primary rounded-2xl transition-all hover:bg-primary/90 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] shadow-lg"
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
