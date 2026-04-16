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
      "Plataforma de misión crítica que centraliza la respuesta ante emergencias y catástrofes. Diseñamos una arquitectura monolítica de alta cohesión y cero latencia para unificar datos, documentación y protocolos en tiempo real, garantizando fiabilidad absoluta cuando cada segundo cuenta.",
    result:
      "Entregamos un centro de comando digital. El sistema cuenta con un Dashboard integral que actúa como única fuente de verdad para gestionar recursos y emitir alertas tempranas, respaldando cada decisión táctica en terreno con datos precisos.",
    href: "https://ceecna.cl",
    imageSrc: "/Casos_de_Estudio/Presentacion_CEECNA.png",
    technologies: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "React", icon: "SiReact" },
      { name: "HeroUI", icon: "HeroUI" },
      { name: "C#", icon: "TbBrandCSharp" },
      { name: "SQL Server", icon: "DiMsqlServer" },
    ],
  },
  {
    title: "ToBlame (En Proceso)",
    industry: "Creator Economy",
    description:
      "Plataforma transaccional de suscripciones premium para creadores de contenido. Desarrollada bajo principios de Clean Architecture y diseño Feature-Driven para soportar alta concurrencia, procesar pagos recurrentes de forma segura y entregar contenido sin latencia.",
    result:
      "Una infraestructura elástica de alto rendimiento que incluye dashboards financieros interactivos de grado empresarial. Permite a los creadores analizar métricas y gestionar flujos de ingresos en tiempo real sobre una base inquebrantable, lista para escalar masivamente.",
    href: "#",
    imageSrc: "/Casos_de_Estudio/Presentacion_ToBlame.png",
    technologies: [
      { name: "Angular", icon: "SiAngular" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "PrimeNG", icon: "PrimeNG" },
    ],
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
      { label: "Desarrollo de Software a Medida", href: "/servicios/software-a-medida" },
      { label: "IA y Machine Learning", href: "/servicios/inteligencia-artificial" },
      { label: "Desarrollo de Aplicaciones Móviles", href: "/servicios/desarrollo-movil" },
      { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
      { label: "Diseño de Producto", href: "/servicios/diseno-de-producto" },
      { label: "Aseguramiento de Calidad (QA)", href: "/servicios/aseguramiento-de-calidad" },
      { label: "Servicios Nube", href: "/servicios/cloud" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "info@tacticaldev.cl", href: "mailto:info@tacticaldev.cl" },
      { label: "+56 9 8465 6126", href: "tel:+56984656126" },
    ],
  },
  {
    title: "Dirección",
    links: ["Santiago de Chile", "8300000"],
  },
];

export const services = [
  {
    slug: "software-a-medida",
    title: "Desarrollo de Software a Medida",
    tag: "SOFTWARE ENGINEERING",
    description: "Soluciones robustas y escalables diseñadas específicamente para resolver los retos operativos de su empresa.",
    fullDescription: "En TacticalDev, no solo escribimos código; construimos activos digitales que impulsan el crecimiento de su negocio. Nuestro enfoque en el desarrollo de software a medida se centra en entender profundamente sus procesos de negocio para crear herramientas que eliminen ineficiencias y potencien la productividad.",
    icon: "Code2",
    image: "/Soluciones_tecnicas_integrales/Softwareamedida.webp",
    features: [
      "Arquitecturas escalables y mantenibles",
      "Integración con sistemas existentes (Legacy)",
      "Desarrollo basado en microservicios",
      "Automatización de procesos de negocio"
    ],
    benefits: [
      "Reducción de costos operativos",
      "Mayor agilidad en la toma de decisiones",
      "Independencia tecnológica",
      "Seguridad de datos garantizada"
    ]
  },
  {
    slug: "inteligencia-artificial",
    title: "Desarrollo de IA a Medida y Aprendizaje Automático",
    tag: "INTELIGENCIA ARTIFICIAL",
    description: "Implementación de modelos inteligentes y redes neuronales adaptadas para automatizar la toma de decisiones críticas.",
    fullDescription: "Transformamos sus datos en inteligencia accionable. Implementamos soluciones de IA y Machine Learning que permiten a las empresas predecir tendencias, automatizar tareas complejas y ofrecer experiencias personalizadas a sus clientes.",
    icon: "Brain",
    image: "/Soluciones_tecnicas_integrales/Machine-Learning.webp",
    features: [
      "Modelos de procesamiento de lenguaje natural (NLP)",
      "Sistemas de recomendación personalizados",
      "Análisis predictivo de datos",
      "Visión por computadora"
    ],
    benefits: [
      "Optimización de la cadena de suministro",
      "Detección temprana de fraudes",
      "Personalización a escala",
      "Automatización de atención al cliente"
    ]
  },
  {
    slug: "desarrollo-movil",
    title: "Desarrollo de Aplicaciones Móviles",
    tag: "MOBILE SOLUTIONS",
    description: "Experiencias móviles de alto rendimiento para iOS y Android con arquitecturas fluidas y centradas en el usuario.",
    fullDescription: "Creamos aplicaciones móviles que los usuarios aman. Desde apps nativas hasta soluciones multiplataforma, nos aseguramos de que su presencia móvil sea rápida, intuitiva y capaz de funcionar en las condiciones más exigentes.",
    icon: "Smartphone",
    image: "/Soluciones_tecnicas_integrales/Desarrollo Mobile.webp",
    features: [
      "Desarrollo nativo (iOS & Android)",
      "Multiplataforma (Flutter / React Native)",
      "Diseño UX/UI optimizado para móviles",
      "Sincronización offline y tiempo real"
    ],
    benefits: [
      "Mayor engagement de los usuarios",
      "Presencia en los principales marketplaces",
      "Rendimiento optimizado",
      "Notificaciones push inteligentes"
    ]
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    tag: "WEB PLATFORMS",
    description: "Ecosistemas web modernos y ultrarrápidos construidos con las tecnologías más eficientes del mercado actual.",
    fullDescription: "Desarrollamos plataformas web de alto impacto que combinan un diseño excepcional con un rendimiento técnico superior. Utilizamos las últimas tecnologías para garantizar que su sitio web sea rápido, seguro y escalable.",
    icon: "Globe",
    image: "/Soluciones_tecnicas_integrales/Desarrollo-Web.webp",
    features: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Optimización de Core Web Vitals",
      "Sistemas de gestión de contenido (CMS) a medida"
    ],
    benefits: [
      "Mejor posicionamiento en buscadores (SEO)",
      "Altas tasas de conversión",
      "Accesibilidad universal",
      "Carga ultrarrápida"
    ]
  },
  {
    slug: "diseno-de-producto",
    title: "Diseño de Producto",
    tag: "PRODUCT DESIGN",
    description: "Estrategia visual y de experiencia de usuario (UX/UI) orientada a la conversión y al deleite del cliente final.",
    fullDescription: "El diseño es mucho más que estética; es funcionalidad y emoción. Nuestro equipo de diseño de producto trabaja codo a codo con ingeniería para crear interfaces que no solo se ven bien, sino que son fáciles de usar y resuelven problemas reales.",
    icon: "Palette",
    image: "/Soluciones_tecnicas_integrales/Diseño-Producto.webp",
    features: [
      "User Research y Testing",
      "Prototipado de alta fidelidad",
      "Sistemas de diseño (Design Systems)",
      "Auditorías de UX/UI"
    ],
    benefits: [
      "Reducción de la curva de aprendizaje",
      "Consistencia de marca",
      "Validación rápida de ideas",
      "Satisfacción del usuario final"
    ]
  },
  {
    slug: "aseguramiento-de-calidad",
    title: "Seguridad de Calidad",
    tag: "QA & CYBERSECURITY",
    description: "Ciclos de prueba rigurosos y estándares de seguridad industrial para garantizar la integridad absoluta de sus datos.",
    fullDescription: "La calidad no es un accidente; es el resultado de un esfuerzo inteligente. Implementamos procesos de QA rigurosos y auditorías de seguridad para asegurar que cada línea de código sea segura, eficiente y libre de errores antes de llegar a producción.",
    icon: "ShieldCheck",
    image: "/Soluciones_tecnicas_integrales/Seguridad-de-Calidad.webp",
    features: [
      "Pruebas de penetración (Pentesting)",
      "Automatización de pruebas (E2E, Unitarias)",
      "Auditorías de código y seguridad",
      "Cumplimiento de estándares internacionales"
    ],
    benefits: [
      "Prevención de fallos en producción",
      "Protección contra vulnerabilidades",
      "Confianza total del cliente",
      "Menores costos de mantenimiento"
    ]
  },
  {
    slug: "aprendizaje-automatico",
    title: "Servicios de Aprendizaje Automático",
    tag: "MACHINE LEARNING",
    description: "Entrenamiento de algoritmos predictivos y análisis de datos avanzado para anticipar tendencias de mercado.",
    fullDescription: "El Machine Learning es el motor de la innovación moderna. Ayudamos a las empresas a extraer valor de sus datos históricos para predecir comportamientos futuros, optimizar procesos y automatizar la toma de decisiones complejas.",
    icon: "Cpu",
    image: "/Soluciones_tecnicas_integrales/Aprendizaje Automatico.webp",
    features: [
      "Deep Learning y Redes Neuronales",
      "Procesamiento de Big Data",
      "Modelos de clasificación y regresión",
      "Mantenimiento predictivo"
    ],
    benefits: [
      "Predicción de demanda precisa",
      "Segmentación de clientes avanzada",
      "Detección de anomalías en tiempo real",
      "Eficiencia operativa mejorada"
    ]
  },
  {
    slug: "cloud",
    title: "Servicios de la Nube",
    tag: "CLOUD INFRASTRUCTURE",
    description: "Gestión, migración y optimización de infraestructuras en la nube para una escalabilidad global sin fricciones.",
    fullDescription: "Llevamos su infraestructura al siguiente nivel. Ya sea que necesite migrar a la nube, optimizar sus costos actuales o implementar una arquitectura multi-cloud, tenemos la experiencia técnica para hacerlo realidad con seguridad y eficiencia.",
    icon: "Cloud",
    image: "/Soluciones_tecnicas_integrales/Servicios-Nube.webp",
    features: [
      "Migración a AWS / Azure / GCP",
      "Infraestructura como Código (Terraform)",
      "Orquestación de contenedores (Kubernetes)",
      "Serverless Computing"
    ],
    benefits: [
      "Escalabilidad bajo demanda",
      "Alta disponibilidad garantizada",
      "Optimización de costos de IT",
      "Seguridad y cumplimiento en la nube"
    ]
  },
];

export const socialLinks = [
  //{ label: "LinkedIn", href: "https://www.linkedin.com" },
  //{ label: "Instagram", href: "https://www.instagram.com" },
  { label: "Twitter", href: "https://x.com/tacticaldevspa?s=20" },
  //{ label: "TikTok", href: "https://www.tiktok.com" },
];
