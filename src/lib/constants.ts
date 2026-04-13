export const navLinks = [
  { label: "Casos de Estudio", href: "#case-studies" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Proceso", href: "#process" },
  { label: "Tech stack", href: "#stack" },
  { label: "Contacto", href: "#contact" },
];

export const servicePillars = [
  {
    title: "Software a medida",
    description:
      "Software empresarial diseñado para resolver cuellos de botella operativos.",
    tag: "Construcción de producto",
  },
  {
    title: "Arquitectura",
    description:
      "Planificación a nivel blueprint para ecosistemas complejos y estabilidad a largo plazo.",
    tag: "Diseño de sistemas",
  },
  {
    title: "Sistemas backend",
    description:
      "Servicios de alto rendimiento con seguridad y escalabilidad integradas.",
    tag: "Ingeniería",
  },
  {
    title: "Estrategia cloud",
    description:
      "Migración y modernización sin fricciones en cualquier entorno de nube.",
    tag: "Infraestructura",
  },
];

export const methodologySteps = [
  {
    step: "01",
    title: "Descubrimiento y Alineación",
    description: "Análisis profundo de tus procesos actuales, cuellos de botella y objetivos de negocio. Entregamos un diagnóstico claro y una hoja de ruta técnica alineada con tus metas estratégicas.",
  },
  {
    step: "02",
    title: "Arquitectura de Sistemas",
    description: "Diseño del blueprint técnico. Seleccionamos la infraestructura cloud y los patrones de diseño exactos para garantizar seguridad y escalabilidad a tu proyecto.",
  },
  {
    step: "03",
    title: "Ingeniería y Ejecución",
    description: "Construcción en ciclos ágiles con hitos demostrables semanales. Tendrás visibilidad total del progreso en tiempo real mientras nuestro equipo materializa la solución con código limpio.",
  },
  {
    step: "04",
    title: "Aseguramiento de Calidad (QA)",
    description: "Ingeniería sin defectos. Ejecutamos pruebas de rendimiento, auditorías de seguridad y controles de calidad rigurosos en entornos controlados antes de tocar producción.",
  },
  {
    step: "05",
    title: "Despliegue y Adopción",
    description: "Lanzamiento sin fricciones (Zero-Downtime). Implementamos monitoreo en tiempo real y entregamos la capacitación necesaria para que tu equipo adopte la nueva herramienta con éxito.",
  },
];

type CaseStudy = {
  title: string;
  industry: string;
  description: string;
  result: string;
  href: string;
  imageSrc?: string;
  technologies?: { name: string; icon: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "CEECNA",
    industry: "Gestión de Crisis",
    description:
      "Centro Estratégico de Emergencias y Catástrofes Nacionales. Plataforma de coordinación y respuesta unificada.",
    result: "Centralización de inteligencia para la toma de decisiones estratégicas.",
    href: "https://ceecna.cl",
    imageSrc: "/Casos_de_Estudio/Presentacion_CEECNA.png",
    technologies: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "React", icon: "SiReact" },
      { name: "HeroUI", icon: "HeroUI" },
    ],
  },
  {
    title: "ToBlame (En Proceso)",
    industry: "Creator Economy",
    description:
      "Plataforma de suscripción premium que permite a los creadores monetizar contenido exclusivo. Desarrollada bajo principios estrictos de Clean Architecture, aislando los dominios de negocio del núcleo para garantizar una escalabilidad absoluta a medida que la plataforma crece.",
    result: "Desarrollo de dashboards interactivos de alto rendimiento y una infraestructura de alta concurrencia optimizada para streaming y pagos seguros.",
    href: "#",
    imageSrc: "/Casos_de_Estudio/Presentacion_ToBlame.png",
    technologies: [
      { name: "Angular", icon: "SiAngular" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "PrimeNG", icon: "PrimeNG" },
    ],
  },
];

export const trustSignals = [
  {
    title: "Seguridad primero",
    description: "Procesos con cumplimiento SOC2 y arquitecturas reforzadas.",
  },
  {
    title: "Ejecución precisa",
    description: "Ingeniería sin defectos con responsabilidad clara.",
  },
  {
    title: "Escalabilidad",
    description: "Listo para crecer y soportar picos de demanda.",
  },
  {
    title: "Enfoque empresarial",
    description: "Alineado con objetivos de ROI y reportes ejecutivos.",
  },
];

export const whyUs = [
  {
    title: "Equipos senior",
    description: "Cada proyecto es liderado por ingenieros principales.",
  },
  {
    title: "Entrega crítica",
    description: "Especialistas en sistemas donde la caída no es opción.",
  },
  {
    title: "Hojas de ruta claras",
    description: "Tableros semanales y documentación compartida.",
  },
];


export const techStack = [
  {
    title: "Backend & Infra",
    items: ["Go", "Node.js", "Kubernetes", "Terraform", "AWS", "Azure", "y más..."],
  },
  {
    title: "Data & Observabilidad",
    items: ["PostgreSQL", "Kafka", "Snowflake", "Datadog", "Prometheus", "Grafana", "y más..."],
  },
  {
    title: "Frontend & Producto",
    items: ["React", "Next.js", "TypeScript", "Figma", "Storybook", "Cypress", "y más..."],
  },
];

export const footerColumns = [
  {
    title: "Servicios",
    links: [
      "Desarrollo de Software a Medida",
      "Desarrollo de IA y Machine Learning",
      "Desarrollo de Aplicaciones Móviles",
      "Desarrollo Web",
      "Diseño de Producto",
      "Aseguramiento de Calidad (QA)",
      "Servicios de la Nube",
    ],
  },
  {
    title: "Email",
    links: ["info@tacticaldev.cl"],
  },
  {
    title: "Dirección",
    links: ["Santiago de Chile", "8300000"],
  },
];export const socialLinks = [
  //{ label: "LinkedIn", href: "https://www.linkedin.com" },
  //{ label: "Instagram", href: "https://www.instagram.com" },
  { label: "Twitter", href: "https://x.com/tacticaldevspa?s=20" },
  //{ label: "TikTok", href: "https://www.tiktok.com" },
];
