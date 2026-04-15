"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/2">
            <SectionTitle
              eyebrow="SOBRE NOSOTROS"
              title="Talento joven, Ejecución Profesional"
              align="left"
            />
          </div>

          <div className="lg:w-1/2 space-y-6 text-lg font-medium leading-relaxed text-ink-3 lg:pt-12">
          <p>
  <strong>En TacticalDev somos, ante todo, un equipo de personas apasionadas por hacer que la tecnología trabaje a tu favor, no en tu contra.</strong> Nacimos al ver cómo muchas empresas se frustraban con sistemas que prometían mucho y entregaban poco. Por eso, decidimos combinar la energía fresca del talento joven con una regla inquebrantable: hacer las cosas bien, con responsabilidad y desde el primer día.
</p>

<p>
  Entendemos que lidiar con el desarrollo de software puede ser estresante. Detrás de cada empresa hay líderes y equipos que simplemente quieren que sus herramientas funcionen, que no fallen en el peor momento y que realmente les ahorren tiempo. Nuestro objetivo principal es quitarte ese peso de encima. 
</p>

<p>
  <strong>No nos escondemos detrás de palabras técnicas complicadas.</strong> Nos sentamos contigo, escuchamos cómo funciona tu día a día y traducimos tus problemas cotidianos en soluciones digitales claras y fáciles de usar. Construimos exactamente lo que tu negocio necesita para dar el siguiente paso, cuidando cada detalle para que el resultado final sea sólido y confiable.
</p>

<p>
  Al final del día, no queremos ser solo un proveedor externo que te entrega un proyecto y desaparece. Queremos ser tus socios de confianza a largo plazo. Nosotros nos encargamos de los dolores de cabeza tecnológicos, para que tú y tu equipo puedan dedicarse a lo que mejor saben hacer: hacer crecer su empresa con total tranquilidad.
</p>
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line-soft to-transparent" />
    </section>
  );
}
