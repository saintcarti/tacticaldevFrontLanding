"use client";
import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/constants";
import BlurFade from "@/registry/magicui/blur-fade";
import AnimatedGridPattern from "@/registry/magicui/animated-grid-pattern";
import MagicCard from "@/registry/magicui/magic-card";
import AnimatedShinyText from "@/registry/magicui/shiny-text";
import BorderBeam from "@/registry/magicui/border-beam";
import { cn } from "@/lib/utils";


export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden bg-background py-20 text-foreground transition-colors duration-300"
    >
      {/* Background Effects: Animated Grid Pattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.03}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-background to-background dark:from-blue-500/10" />

      {/* Decorative Code Background */}
      <div className="pointer-events-none absolute right-0 top-20 -z-10 hidden select-none font-mono text-xs leading-relaxed text-foreground/5 opacity-20 lg:block text-right">
        <pre>{`
async function deploy(project) {
  await build(project);
  await test(project);
  return launch(project);
}
        `}</pre>
      </div>

      <div className="mx-auto w-full max-w-6xl space-y-12 px-6 py-0 relative z-10">
        <div className="space-y-6 text-center flex flex-col items-center">
          <div className="inline-block">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-1 text-brand dark:text-accent font-black">
              PORTFOLIO Y VISIÓN
            </p>
            <div className="h-0.5 w-full bg-gradient-to-r from-brand to-transparent opacity-30 dark:opacity-50" />
          </div>

          <BlurFade delay={0.25} inView blur="12px" yOffset={0}>
            <h2 className="text-3xl font-black md:text-5xl tracking-tighter uppercase text-center text-ink max-w-4xl mx-auto">
              CONSTRUYENDO EL PRESENTE, DISEÑANDO EL FUTURO
            </h2>
          </BlurFade>
          
          <div className="flex h-1.5 w-32 overflow-hidden rounded-full mx-auto">
            <span className="h-full w-2/3 bg-brand shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            <span className="h-full w-1/3 bg-accent" />
          </div>

          <p className="max-w-3xl text-center text-ink-3/80 text-base md:text-lg font-medium leading-relaxed mx-auto">
            Más que entregar código, entregamos valor. Desde la modernización de sistemas legados hasta la exploración de nuevas fronteras tecnológicas, nuestro trabajo se define por la precisión técnica y la adaptabilidad. Así es como transformamos desafíos en activos digitales duraderos.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => {
            const isActive = activeIndex === index;
            // Card 3 index is 2
            const isEnProceso = index === 2;

            return (
              <BlurFade key={study.title} delay={0.1 * index} inView>
                <div
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="h-full cursor-pointer relative"
                >
                  <MagicCard 
                    className={cn(
                      "group relative flex h-full flex-col justify-between overflow-hidden border border-line-soft p-6 transition-all duration-500",
                      "bg-surface/50 dark:bg-surface-2/50 backdrop-blur-sm",
                      isActive ? "-translate-y-2 shadow-2xl shadow-brand/10 border-brand/30" : "hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10 hover:border-brand/30"
                    )}
                    gradientColor="rgba(59, 130, 246, 0.15)"
                    gradientSize={300}
                    gradientOpacity={0.6}
                  >
                    {isEnProceso && (
                      <BorderBeam 
                        size={250} 
                        duration={12} 
                        delay={9} 
                        borderWidth={2}
                        colorFrom="var(--td-brand)"
                        colorTo="var(--td-accent)"
                      />
                    )}

                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-brand/20">
                          <AnimatedShinyText className="text-brand dark:text-brand-2">
                            {study.industry}
                          </AnimatedShinyText>
                        </div>
                        {study.href && study.href !== "#" && (
                          <a
                            href={study.href}
                            target={study.href.startsWith("http") ? "_blank" : undefined}
                            rel={study.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-full bg-line-soft text-ink-3 transition-colors hover:bg-brand hover:text-white",
                              isActive && "bg-brand text-white"
                            )}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </a>
                        )}
                      </div>

                      <div>
                        <h3 className={cn(
                          "text-xl font-bold text-ink transition-colors",
                          (isActive || isEnProceso) && "text-brand-2"
                        )}>
                          {study.title}
                        </h3>
                        <p className="mt-2 text-justify text-sm leading-relaxed text-ink-3">
                          {study.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 border-t border-line-soft pt-4">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-green-400">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] font-black uppercase tracking-wider text-ink-3/50">Impacto</span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-ink/90">
                        {study.result}
                      </p>
                      
                      {/* Logo N in bottom-left */}
                      <div className="mt-4 flex items-center">
                        <div className="h-6 w-6 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center">
                          <span className="text-[10px] font-black text-brand">N</span>
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-soft to-transparent" />
    </section>
  );
}
