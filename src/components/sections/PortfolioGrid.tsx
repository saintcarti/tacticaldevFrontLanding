"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 1. Interfaz para los proyectos
interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  techStack: string[];
  imageSrc: string;
}

// 6. Datos de Ejemplo (Mock Data)
const projects: Project[] = [
  {
    id: "toblame-01",
    title: "ToBlame (En Proceso)",
    industry: "Creator Economy",
    description: "Plataforma de suscripción premium que permite a los creadores monetizar contenido exclusivo. Desarrollada bajo principios estrictos de Clean Architecture, aislando los dominios de negocio para garantizar escalabilidad.",
    techStack: ["Next.js", "Clean Architecture", "Alta Concurrencia"],
    imageSrc: "/Soluciones_tecnicas_integrales/Softwareamedida.webp",
  },
  {
    id: "fintech-02",
    title: "NeoBank Connect",
    industry: "Fintech",
    description: "Infraestructura bancaria moderna para la gestión de activos digitales. Implementamos seguridad de grado militar y flujos de transacciones en tiempo real con latencia mínima.",
    techStack: ["React 19", "Node.js", "WebSockets", "Redis"],
    imageSrc: "/Soluciones_tecnicas_integrales/Machine-Learning.webp",
  },
  {
    id: "edtech-03",
    title: "Global Learning OS",
    industry: "E-Learning",
    description: "Sistema de gestión de aprendizaje (LMS) adaptativo que utiliza IA para personalizar rutas de estudio. Escalado para soportar más de 100k usuarios simultáneos.",
    techStack: ["PostgreSQL", "OpenAI API", "AWS Lambda"],
    imageSrc: "/Soluciones_tecnicas_integrales/Desarrollo-Web.webp",
  },
  {
    id: "logistics-04",
    title: "SwiftPath AI",
    industry: "Logística",
    description: "Optimización de rutas de última milla mediante algoritmos genéticos, reduciendo costos operativos en un 25% para empresas de delivery regionales.",
    techStack: ["Python", "Docker", "Google Cloud"],
    imageSrc: "/Soluciones_tecnicas_integrales/Servicios-Nube.webp",
  },
];

const PortfolioGrid: React.FC = () => {
  // 1. Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState("Todos");

  // 1. Categorías únicas extrayéndolas de la propiedad industry
  const categories = useMemo(() => {
    const industries = projects.map((p) => p.industry);
    return ["Todos", ...Array.from(new Set(industries))];
  }, []);

  // Filtrado de proyectos basado en la categoría seleccionada
  const filteredProjects = useMemo(() => {
    return activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.industry === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      {/* 2. Layout Principal / Header */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Casos de Éxito
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl"
          >
            Transformamos complejidad en ventaja competitiva a través de ingeniería de software de precisión.
          </motion.p>
        </div>

        {/* 3. Sistema de Filtrado (Tabs) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === category
                    ? "bg-white text-black scale-105"
                    : "bg-transparent border border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 4. Cuadrícula de Proyectos (Grid) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// 5. Diseño de la Tarjeta (Project Card)
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative"
    >
      <Link href={`/portfolio/${project.id}`} className="block">
        <div className="
          bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden 
          transition-colors duration-500 hover:border-blue-500/50 h-full flex flex-col
        ">
          {/* Área de Imagen (Top) */}
          <div className="relative aspect-video overflow-hidden bg-zinc-900">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            />
          </div>

          {/* Área de Contenido (Bottom) */}
          <div className="p-8 flex flex-col flex-grow">
            {/* Etiqueta de industria */}
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">
              {project.industry}
            </span>

            {/* Título */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Descripción */}
            <p className="text-zinc-400 mb-8 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack (Píldoras) */}
            <div className="mt-auto flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 text-white/70 text-[10px] md:text-xs font-medium px-3 py-1 rounded-md border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioGrid;
