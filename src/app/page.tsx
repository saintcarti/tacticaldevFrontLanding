import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="bg-sand">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Methodology />
        <About />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
