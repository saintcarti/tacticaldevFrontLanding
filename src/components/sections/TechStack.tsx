"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Server, 
  Activity, 
  Layout, 
  Cpu, 
  Database as DbIcon,
  Network,
  Plus
} from "lucide-react";

// Importación mixta para evitar errores de exportación en 'si'
import { 
  SiGo, 
  SiNodedotjs, 
  SiKubernetes, 
  SiTerraform, 
  SiPostgresql,
  SiApachekafka,
  SiSnowflake,
  SiDatadog,
  SiPrometheus,
  SiGrafana,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiStorybook,
  SiCypress
} from "react-icons/si";

import { FaAws } from "react-icons/fa"; // Usando FontAwesome para AWS como alternativa segura
import { VscAzure } from "react-icons/vsc"; // Usando VS Code icons para Azure como alternativa segura

// Componente para Logotipos Premium con Color Hover Glow
const TechLogo = ({ name, icon: Icon, color, isHovered }: { name: string, icon: any, color: string, isHovered: boolean }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -2 }}
    className={`group/logo relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-500 
      ${isHovered 
        ? 'border-line-soft bg-surface-3 shadow-lg' 
        : 'border-transparent bg-transparent'} 
      hover:!border-white/10 hover:!bg-white/5 hover:!shadow-2xl z-10 overflow-hidden`}
  >
    {/* Resplandor de color dinámico al hacer hover en el logo individual */}
    <div 
      className="absolute inset-0 blur-xl opacity-0 group-hover/logo:opacity-20 transition-opacity duration-500 pointer-events-none" 
      style={{ backgroundColor: color }} 
    />
    
    <div 
      className="w-10 h-10 flex items-center justify-center relative mb-3 transition-colors duration-500 text-ink-3 group-hover/logo:!text-current"
      style={{ color: isHovered ? color : undefined }}
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center text-3xl filter transition-all duration-500 group-hover/logo:drop-shadow-[0_0_8px_currentColor]">
        {Icon && <Icon />}
      </div>
    </div>
    <span className="text-[10px] font-mono font-bold text-ink-3/50 group-hover/logo:text-ink-3 transition-colors duration-300 uppercase tracking-widest text-center">{name}</span>
  </motion.div>
);

const SystemMetrics = () => (
  <div className="absolute top-6 right-8 flex flex-col gap-1 text-[8px] font-mono text-cyan-500/40">
    <div className="flex items-center gap-2">
      <div className="w-8 h-1 bg-line-soft rounded-full overflow-hidden">
        <motion.div animate={{ width: ["20%", "60%", "45%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-cyan-500/50" />
      </div>
      <span>SYS.LOAD 42%</span>
    </div>
  </div>
);

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      id: "01",
      title: "BACKEND & INFRA",
      items: [
        { name: "Go", icon: SiGo, color: "#00ADD8" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "K8s", icon: SiKubernetes, color: "#326CE5" },
        { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
        { name: "AWS", icon: FaAws, color: "#FF9900" },
        { name: "Azure", icon: VscAzure, color: "#0078D4" }
      ],
      code: "kubectl apply -f cluster.yaml",
      icon: <Server size={22} />
    },
    {
      id: "02",
      title: "DATA & OBSERVABILIDAD",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Kafka", icon: SiApachekafka, color: "#FFFFFF" },
        { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
        { name: "Datadog", icon: SiDatadog, color: "#632CA6" },
        { name: "Prom", icon: SiPrometheus, color: "#E6522C" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" }
      ],
      code: "SELECT * FROM insights",
      icon: <DbIcon size={22} />,
      extra: true
    },
    {
      id: "03",
      title: "FRONTEND & PRODUCTO",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "TS", icon: SiTypescript, color: "#3178C6" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
        { name: "Cypress", icon: SiCypress, color: "#17202C" }
      ],
      code: "<Component />",
      icon: <Layout size={22} />
    }
  ];

  return (
    <section id="stack" className="relative flex min-h-screen items-center overflow-hidden py-32 text-foreground">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="mb-24 text-center">
          <SectionTitle
            eyebrow="ARQUITECTURA"
            title="Stack tecnológico"
            description="Herramientas empresariales organizadas en clústeres especializados para rendimiento y seguridad."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          {categories.map((cat, index) => {
            const isHovered = hoveredIndex === index;
            const gridClasses = [
              "md:col-span-3 lg:col-span-5 lg:row-span-2",
              "md:col-span-3 lg:col-span-7 lg:row-span-1",
              "md:col-span-6 lg:col-span-7 lg:row-span-1",
            ][index];

            return (
              <motion.div
                key={cat.title}
                className={`${gridClasses} relative group`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Floating Data Streams Background effect (visible on hover) */}
                <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none transition-opacity duration-1000 ${isHovered ? 'opacity-[0.04]' : ''}`} />
                
                {/* Gradient Outer Border Glow */}
                <div className={`absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/40 via-transparent to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px] z-0`} />
                
                {/* Main Bento Container with Beveled Edges & Micro-Internal Glow */}
                <div className={`relative h-full w-full overflow-hidden rounded-[2.5rem] border border-line-soft bg-surface/50 backdrop-blur-3xl p-10 flex flex-col justify-between transition-all duration-500 z-10
                  shadow-[0_8px_32px_rgba(0,0,0,0.1)] 
                  dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.4)]
                  ${isHovered ? '-translate-y-2 border-cyan-500/30 shadow-[0_20px_40px_rgba(6,182,212,0.15)] dark:shadow-[inset_0_1px_1px_rgba(6,182,212,0.4),0_20px_40px_rgba(6,182,212,0.1)]' : ''}`}
                >
                  <SystemMetrics />
                  
                  {/* Header */}
                  <div className="flex items-center gap-5 relative z-20 mb-8">
                    <div className={`p-4 rounded-3xl bg-surface-2 border border-line-soft transition-all duration-500 ${isHovered ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105' : 'text-ink-3'}`}>
                      {cat.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono tracking-[0.4em] text-ink-3 uppercase font-bold transition-colors duration-300 group-hover:text-cyan-500/80">Clúster {cat.id}</span>
                      <h3 className="text-2xl font-black tracking-tighter text-ink uppercase">{cat.title}</h3>
                    </div>
                  </div>
                  
                  {/* Pristine Grid of Logos */}
                  <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-3 relative z-20 bg-surface-2/30 p-4 rounded-[1.5rem] border border-line-soft/50">
                    {cat.items.map((tech) => (
                      <TechLogo key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} isHovered={isHovered} />
                    ))}
                  </div>

                  {/* Footer / Streams */}
                  <div className="mt-8 flex items-center justify-between border-t border-line-soft pt-6 relative z-20">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-cyan-500/70 uppercase tracking-widest">{cat.code}</span>
                      {cat.extra ? (
                        <div className="flex items-center gap-2 text-[9px] font-mono text-ink-3">
                          <Plus size={8} /> <span>STREAMING DATA...</span>
                          <span className="text-cyan-500 animate-pulse font-bold">{`> conectando`}</span>
                        </div>
                      ) : index !== 2 && (
                        <div className="flex items-center gap-2 text-[9px] font-mono text-ink-3">
                          <Plus size={8} /> <span>MÓDULOS ACTIVOS</span>
                        </div>
                      )}
                    </div>
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-[10px] font-black text-cyan-400 tracking-tighter uppercase">
                          ONLINE <Activity size={12} className="animate-pulse" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Ambient Glow */}
                  <div className={`absolute -right-10 bottom-10 opacity-[0.02] dark:opacity-[0.05] transition-opacity duration-700 pointer-events-none transform rotate-12 ${isHovered ? 'opacity-10 dark:opacity-20' : ''}`}>
                    {index === 0 && <Cpu size={280} strokeWidth={0.5} className="text-cyan-500" />}
                    {index === 1 && <Network size={280} strokeWidth={0.5} className="text-purple-500" />}
                    {index === 2 && <Layout size={280} strokeWidth={0.5} className="text-blue-500" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
