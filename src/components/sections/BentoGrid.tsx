"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background dark:bg-black border border-border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-foreground mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-xs">
          {description}
        </div>
      </div>
    </div>
  );
}

const TechIcons = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-secondary/50 to-secondary dark:from-neutral-900 dark:to-neutral-800 items-center justify-center space-x-4 overflow-hidden relative">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      >
        <span className="text-blue-500 dark:text-blue-400 font-bold text-xs">React</span>
      </motion.div>
      <motion.div
         animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-12 w-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center"
      >
        <span className="text-foreground font-bold text-[10px]">Next.js</span>
      </motion.div>
      <motion.div
         animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-12 w-12 rounded-full bg-blue-400/10 border border-blue-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.3)]"
      >
        <span className="text-blue-400 dark:text-blue-300 font-bold text-xs">TS</span>
      </motion.div>
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
    </div>
  );
};

const ProjectMockup = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-secondary/50 to-secondary dark:from-neutral-900 dark:to-neutral-800 p-4 overflow-hidden relative group">
      <div className="w-full h-full rounded-lg border border-border bg-background/50 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="h-6 w-full bg-muted border-b border-border flex items-center px-3 space-x-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500/50" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
          <div className="h-2 w-2 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 p-3 space-y-2">
           <div className="h-2 w-2/3 bg-muted rounded" />
           <div className="h-2 w-full bg-muted rounded" />
           <div className="h-2 w-full bg-muted rounded" />
           <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="h-12 bg-blue-500/10 rounded border border-blue-500/20" />
              <div className="h-12 bg-purple-500/10 rounded border border-purple-500/20" />
           </div>
        </div>
      </div>
    </div>
  );
}

export default function BentoSection() {
  return (
    <section className="py-24 bg-background px-6 relative overflow-hidden transition-colors duration-300">
      {/* Light leaks */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Diseñado para la <span className="text-blue-500">Excelencia</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Combinamos tecnología de vanguardia con una artesanía meticulosa para construir 
          experiencias digitales que destacan.
        </p>
      </div>

      <BentoGrid>
        <BentoGridItem
          title="Stack Tecnológico Moderno"
          description="Utilizamos las tecnologías más confiables y escalables para construir tus productos."
          header={<TechIcons />}
          className="md:col-span-2"
        />
        <BentoGridItem
          title="Diseño de Clase Mundial"
          description="Atención al detalle pixel-perfect en cada interfaz."
          header={<ProjectMockup />}
          className="md:col-span-1"
        />
        <BentoGridItem
          title="Nativo de la Nube"
          description="Infraestructura escalable construida para la web moderna."
          className="md:col-span-1"
        />
        <BentoGridItem
          title="Misión Crítica"
          description="Sistemas robustos que nunca fallan cuando más importa."
          className="md:col-span-2"
        />
      </BentoGrid>
    </section>
  );
}
