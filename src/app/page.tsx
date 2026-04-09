import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import ServicesInteractive from "@/components/sections/ServicesInteractive";
import Projects from "@/components/sections/Projects";
import Methodology from "@/components/sections/Methodology";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="relative bg-background text-foreground transition-colors duration-300 min-h-screen">
      {/* Global Seamless Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-[180px] animate-pulse mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[180px] animate-pulse mix-blend-screen" style={{ animationDelay: '4s' }} />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-[180px] animate-pulse mix-blend-screen" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <CaseStudies />
          <About />
          <ServicesInteractive />
          <Projects />
          <Methodology />
          <TechStack />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
