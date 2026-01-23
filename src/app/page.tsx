import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Methodology from "@/components/sections/Methodology";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="bg-sand">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Methodology />
        <Testimonials />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
