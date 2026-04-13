"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { trustSignals } from "@/lib/constants";
import Image from "next/image";
import { 
  Rocket,
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";

const bentoIcons = [
  <ShieldCheck key="shield" className="w-5 h-5" />,
  <Zap key="zap" className="w-5 h-5" />,
  <TrendingUp key="trend" className="w-5 h-5" />,
  <Briefcase key="case" className="w-5 h-5" />,
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden py-32 text-foreground"
    >
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/Sobre_Nosotros/Developers.png" 
          alt="Background Team" 
          fill
          className="object-cover opacity-[0.35] dark:opacity-[0.45] transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Narrative */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-2">
              <SectionTitle
                eyebrow="SOBRE NOSOTROS"
                title=""
                align="left"
              />
              <div className="flex flex-col -mt-4">
                <h2 className="text-3xl font-black md:text-5xl tracking-tighter uppercase text-ink">
                  Talento joven,
                </h2>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.1]">
                  <span className="bg-gradient-to-br from-ink via-ink-2 to-ink-3 bg-clip-text text-transparent drop-shadow-sm">
                    Ejecución Profesional
                  </span>
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-lg font-medium leading-relaxed text-ink-3 max-w-xl">
              <p>
                TacticalDev es un colectivo de ingenieros apasionados por profesionalizar la innovación. 
                Combinamos la energía disruptiva del talento joven con una rigurosidad técnica de nivel empresarial.
              </p>
              <p>
                Nuestra misión es transformar conceptos abstractos en realidades digitales sólidas, 
                aplicando arquitecturas escalables y un enfoque inquebrantable en la calidad del producto final.
              </p>
            </div>
          </div>

          {/* Right Column: Asymmetric Bento Grid */}
          <div className="grid grid-cols-2 gap-4 auto-rows-fr">
            
            {/* Top Wide Cell */}
            <motion.div
              whileHover={{ y: -5 }}
              className="col-span-2 relative overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/40 backdrop-blur-3xl p-10 group transition-all duration-500
                shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
                hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] dark:hover:shadow-[inset_0_1px_1px_rgba(6,182,212,0.4),0_20px_40_rgba(6,182,212,0.1)]"
            >
              <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              <div className="relative z-10 flex items-start gap-8">
                <div className="p-5 rounded-3xl bg-surface-2 border border-line-soft text-brand shadow-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                  <Rocket className="w-10 h-10 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black tracking-tight text-ink uppercase">Pasión por crear</h3>
                  <p className="text-ink-3 font-medium leading-relaxed">
                    Ponemos nuestro conocimiento al servicio de tus proyectos, brindando apoyo técnico integral para materializar ideas con calidad profesional y visión estratégica.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom 2x2 Grid */}
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/40 backdrop-blur-3xl p-8 group transition-all duration-500
                  shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
                  hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] dark:hover:shadow-[inset_0_1px_1px_rgba(6,182,212,0.4),0_20px_40px_rgba(6,182,212,0.1)]"
              >
                <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-surface-2 border border-line-soft text-brand group-hover:text-cyan-400 transition-colors duration-300 shadow-lg">
                    {bentoIcons[index]}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-black tracking-tight text-ink uppercase leading-tight">{signal.title}</h4>
                    <p className="text-sm font-medium leading-relaxed text-ink-3">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-soft to-transparent" />
    </section>
  );
}
