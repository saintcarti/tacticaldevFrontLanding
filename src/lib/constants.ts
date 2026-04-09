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
    title: "Descubrimiento",
    description: "Análisis de requisitos y alineación con stakeholders.",
  },
  {
    step: "02",
    title: "Arquitectura",
    description: "Diseño del sistema con riesgos y guardrails definidos.",
  },
  {
    step: "03",
    title: "Ingeniería",
    description: "Sprints ágiles con hitos semanales y controles de QA.",
  },
  {
    step: "04",
    title: "Pruebas QA",
    description: "Validación de rendimiento, seguridad y UAT.",
  },
  {
    step: "05",
    title: "Despliegue",
    description: "Entrega con monitoreo, escalado y handoff.",
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
    title: "GearScanNfc",
    industry: "IoT Industrial",
    description:
      "Sistema de monitoreo y diagnóstico de maquinaria mediante tecnología NFC para entornos operativos exigentes.",
    result: "Digitalización de activos y optimización del mantenimiento.",
    href: "",
    imageSrc: "/Imagenes/cellphone.png",
    technologies: [
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    title: "ToBlame (En Proceso)",
    industry: "Creator Economy",
    description:
      "Plataforma de suscripción premium que permite a los creadores monetizar contenido exclusivo. Desarrollada bajo principios estrictos de Clean Architecture, aislando los dominios de negocio del núcleo para garantizar una escalabilidad absoluta a medida que la plataforma crece.",
    result: "Desarrollo de dashboards interactivos de alto rendimiento y una infraestructura de alta concurrencia optimizada para streaming y pagos seguros.",
    href: "#",
    imageSrc: "/Soluciones_tecnicas_integrales/Softwareamedida.webp",
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
      "Software empresarial",
      "Arquitectura en la nube",
      "Ingeniería de datos",
      "Migración de legado",
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
