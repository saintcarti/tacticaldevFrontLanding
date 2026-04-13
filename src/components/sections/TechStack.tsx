"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  "Todos",
  "Web Frontend",
  "Mobile",
  "Backend",
  "Cloud & Infra",
  "Data & Observabilidad",
  "QA & Testing",
];

const techStack = [
  { name: "React", category: "Web Frontend" },
  { name: "Next.js", category: "Web Frontend" },
  { name: "TypeScript", category: "Web Frontend" },
  { name: "Tailwind CSS", category: "Web Frontend" },
  { name: "Angular", category: "Web Frontend" },
  { name: "JavaScript", category: "Web Frontend" },
  { name: "Vue.js", category: "Web Frontend" },
  { name: "Android Nativo (Java)", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Ionic", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Go", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "AWS", category: "Cloud & Infra" },
  { name: "Azure", category: "Cloud & Infra" },
  { name: "Google Cloud", category: "Cloud & Infra" },
  { name: "Kubernetes", category: "Cloud & Infra" },
  { name: "Docker", category: "Cloud & Infra" },
  { name: "Terraform", category: "Cloud & Infra" },
  { name: "PostgreSQL", category: "Data & Observabilidad" },
  { name: "SQL Server", category: "Data & Observabilidad" },
  { name: "MySQL", category: "Data & Observabilidad" },
  { name: "MongoDB", category: "Data & Observabilidad" },
  { name: "Redis", category: "Data & Observabilidad" },
  { name: "Kafka", category: "Data & Observabilidad" },
  { name: "Snowflake", category: "Data & Observabilidad" },
  { name: "Cypress", category: "QA & Testing" },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredTech = activeCategory === "Todos"
    ? techStack
    : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section id="stack" className="relative flex min-h-screen items-center overflow-hidden py-32 text-foreground">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        <div className="mb-20">
          <SectionTitle
            eyebrow="ARQUITECTURA"
            title="Explorador de Stack"
            description="Nuestra caja de herramientas técnica seleccionada para maximizar la escalabilidad, el rendimiento y la mantenibilidad de cada proyecto."
            align="left"
          />
        </div>

        {/* Categories Filter (Tabs) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-ink text-surface border-ink shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white dark:text-black dark:border-white dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-transparent text-ink-3 border-line-soft hover:border-brand/50 hover:text-brand dark:text-zinc-400 dark:border-white/10 dark:hover:border-white/30 dark:hover:text-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative"
              >
                {/* Tech Card */}
                <div className="h-full bg-surface-2/40 dark:bg-white/5 backdrop-blur-md border border-line-soft dark:border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:bg-surface-3 dark:hover:bg-white/10 hover:border-brand/50 dark:hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
                  {/* Decorative background element on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <span className="relative z-10 font-semibold text-lg text-ink-2 dark:text-zinc-300 group-hover:text-brand dark:group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.3)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300 text-center uppercase tracking-tight">
                    {tech.name}
                  </span>
                  
                  <span className="mt-2 text-[10px] font-mono text-ink-3 dark:text-zinc-500 group-hover:text-brand/80 dark:group-hover:text-blue-400 uppercase tracking-widest transition-colors duration-300">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
