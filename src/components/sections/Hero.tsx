"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { AuroraText } from "@/registry/magicui/aurora-text";
import Image from "next/image";
import { useTheme } from "@/hooks/use-theme";
import { usePathname } from "next/navigation";

// Simple SVG Icons for Navigation
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" height="24" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg 
    width="24" height="24" viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const slides = [
  {
    id: 1,
    title: "Bienvenido a",
    highlight: "Estrategias de software adaptadas a tus objetivos",
    description: "",
    image: "/Soluciones_tecnicas_integrales/Desarrollo-Web.webp",
    alt: "Desarrollo Web",
    buttonText: "Contáctanos",
    buttonHref: "#contact",
    buttonVariant: "primary" as const,
  },
  {
    id: 2,
    title: "Somos expertos en el",
    highlight: "Marketing digital y diseño web",
    description: "",
    image: "/Soluciones_tecnicas_integrales/Diseño-Producto.webp",
    alt: "Diseño de Producto",
    buttonText: "Servicios",
    buttonHref: "#services",
    buttonVariant: "primary" as const,
  },
  {
    id: 3,
    title: "Grupo moderno que aporta",
    highlight: "Creatividad y Soluciones",
    description: "",
    image: "/Soluciones_tecnicas_integrales/Softwareamedida.webp",
    alt: "Software a Medida",
    buttonText: "Sobre Nosotros",
    buttonHref: "#about",
    buttonVariant: "primary" as const,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;
    
    if (pathname !== "/") return;

    event.preventDefault();
    
    const target = document.getElementById(href.slice(1));

    if (!target) return;

    const header = document.querySelector("header");
    let headerOffset = 0;
    if (header) {
      const navBar = header.firstElementChild;
      headerOffset = navBar ? navBar.getBoundingClientRect().height : header.getBoundingClientRect().height;
    }
    
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 50;

    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  // Parallax scroll effect for the content
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacityScroll = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleScroll = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const auroraColors = ["#22d3ee", "#9333ea", "#3b82f6", "#22d3ee"];

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Ambient Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_80%)]" />
        <div className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-cyan-500/5 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[60%] w-[60%] rounded-full bg-purple-600/5 blur-[140px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content Carousel */}
      <motion.div 
        style={{ opacity: opacityScroll, scale: scaleScroll }}
        className="relative z-10 h-full w-full"
      >
        <div className="relative h-full w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 grid w-full grid-cols-1 md:grid-cols-2"
            >
              {/* Left Column: Text Content */}
              <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center md:items-start md:px-16 md:text-left lg:px-24">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                >
                  <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    {slides[currentSlide].title}
                    {slides[currentSlide].id === 1 && " TacticalDev"}
                    <br />
                    <AuroraText colors={auroraColors} className="py-2">
                      {slides[currentSlide].highlight}
                    </AuroraText>
                  </h1>
                </motion.div>

                {slides[currentSlide].description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                    className="mb-10 max-w-lg text-lg text-muted-foreground md:text-xl leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                >
                  <Button 
                    href={slides[currentSlide].buttonHref}
                    onClick={(e) => handleAnchorClick(e, slides[currentSlide].buttonHref)}
                    className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] border-none"
                  >
                    <span className="relative z-10 font-bold text-lg">{slides[currentSlide].buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </motion.div>
              </div>

              {/* Right Column: Image Content (Background on Mobile, Side-by-Side on Desktop) */}
              <div className="absolute inset-0 z-0 h-full w-full overflow-hidden md:relative md:inset-auto md:z-auto md:block">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  fill
                  className="object-cover object-center"
                  priority
                />
                
                {/* Mobile Overlay for Readability */}
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] md:hidden" />
                
                {/* Brand Accent Glow */}
                <div className="absolute -right-[10%] top-1/2 h-[60%] w-[60%] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Paginator (Dots) */}
        <div className="absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 space-x-4 rounded-full bg-background/40 backdrop-blur-xl px-6 py-3 border border-border/50 shadow-2xl md:left-auto md:right-12 md:translate-x-0">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                currentSlide === index 
                  ? "w-12 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
                  : "bg-foreground/20 hover:bg-foreground/40 w-2.5"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-12 z-50 hidden gap-4 md:flex">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-background/40 backdrop-blur-xl text-foreground transition-all hover:bg-foreground/10 hover:text-cyan-500 hover:border-cyan-500/50 hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-background/40 backdrop-blur-xl text-foreground transition-all hover:bg-foreground/10 hover:text-cyan-500 hover:border-cyan-500/50 hover:scale-110 active:scale-95 shadow-xl"
            aria-label="Siguiente"
          >
            <ChevronRightIcon className="h-7 w-7" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
