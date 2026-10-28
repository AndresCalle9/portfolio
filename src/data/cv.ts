// Contenido del portafolio. Cada texto visible lleva sus dos idiomas: { es, en }.
// Para actualizar el CV, edita este archivo; las páginas se generan a partir de él.

export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];
export type T = Record<Lang, string>;

export const person = {
  name: 'Andrés Calle Uribe',
  role: { es: 'Tech Lead · Senior Backend Engineer', en: 'Tech Lead · Senior Backend Engineer' },
  stack: 'Node.js / TypeScript',
  location: { es: 'Madrid, España · remoto', en: 'Madrid, Spain · remote' },
  email: 'andrescalleuribe@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andres-calle-uribe',
  github: 'https://github.com/AndresCalle9',
  thesis: {
    es: 'Construyo backends para software médico. Hoy, el de un dispositivo con IA para la detección de anomalías en tejido mamario.',
    en: 'I build backends for medical software. Right now, for an AI-powered device that detects anomalies in breast tissue.',
  },
  profile: {
    es: 'Más de 6 años construyendo productos en Node.js y TypeScript, sobre todo arquitecturas de microservicios en Azure y AWS. Soy Ingeniero Biomédico con maestría, así que traduzco requisitos clínicos y regulatorios en decisiones de arquitectura. Lidero equipos, defino el roadmap técnico y formo desarrolladores.',
    en: 'Over 6 years building products with Node.js and TypeScript, mostly microservice architectures on Azure and AWS. I am a Biomedical Engineer with a master’s degree, so I turn clinical and regulatory requirements into architecture decisions. I lead teams, set the technical roadmap and mentor developers.',
  },
};

// Cuatro lecturas del trazo de la portada, en orden de izquierda a derecha.
export const readouts: { value: string; label: T }[] = [
  { value: '11', label: { es: 'microservicios en producción sobre Azure AKS', en: 'microservices in production on Azure AKS' } },
  { value: '+13.000', label: { es: 'pruebas con un dispositivo médico con IA', en: 'tests run on an AI medical device' } },
  { value: '−70%', label: { es: 'tiempo de despliegue: de 12 a 3–4 min', en: 'deploy time: from 12 to 3–4 min' } },
  { value: '+20', label: { es: 'pilotos con hospitales y empresas', en: 'pilots with hospitals and companies' } },
];

export type Case = {
  slug: string;
  diagram: string;
  /** Proporción ancho/alto del marco del diagrama */
  ratio: string;
  title: T;
  org: string;
  years: string;
  summary: T;
  problem: T;
  work: T[];
  results: T[];
  stack: string[];
  note: T;
};

export const cases: Case[] = [
  {
    slug: 'salva-health-platform',
    diagram: 'salva-platform',
    ratio: '4 / 3',
    title: { es: 'Plataforma clínica en Kubernetes', en: 'Clinical platform on Kubernetes' },
    org: 'Salva Health',
    years: '2024 –',
    summary: {
      es: '11 microservicios en Azure AKS que procesan unas 4.000 pruebas al mes con disponibilidad superior al 99%.',
      en: '11 microservices on Azure AKS processing around 4,000 tests a month at over 99% availability.',
    },
    problem: {
      es: 'Comunicar la plataforma con un dispositivo médico por Bluetooth y hacer que funcione sin conexión, porque muchas pruebas se hacen en zonas rurales. Los datos viven repartidos entre bases locales y la nube, así que había que sincronizarlos de forma fiable, protegerlos como datos clínicos e integrarlos con otros sistemas.',
      en: 'Connecting the platform to a medical device over Bluetooth and making it work offline, because many tests happen in rural areas. Data lives across local databases and the cloud, so it had to sync reliably, be protected as clinical data and integrate with other systems.',
    },
    work: [
      { es: 'Diseñé la arquitectura de 11 microservicios en Node.js y TypeScript, en contenedores Docker sobre Azure Kubernetes Service y con bases de datos SQL.', en: 'Designed the architecture: 11 Node.js and TypeScript microservices in Docker containers on Azure Kubernetes Service, backed by SQL databases.' },
      { es: 'Diseñé la interfaz de comunicación Bluetooth entre la plataforma y el dispositivo Julieta.', en: 'Designed the Bluetooth interface between the platform and the Julieta device.' },
      { es: 'Construí el funcionamiento sin conexión: las pruebas se guardan en local y se sincronizan al reconectar.', en: 'Built offline operation: tests are stored locally and synced once the connection is back.' },
      { es: 'Rediseñé los pipelines de CI/CD y reduje a la mitad el tamaño de las imágenes Docker.', en: 'Redesigned the CI/CD pipelines and halved the size of the Docker images.' },
      { es: 'Defino el roadmap técnico y los estándares de seguridad de datos, y lidero un equipo de 4 ingenieros.', en: 'Set the technical roadmap and data security standards, and lead a team of 4 engineers.' },
      { es: 'Participo en los procesos regulatorios INVIMA y en la evaluación inicial de ISO 13485 e HIPAA.', en: 'Take part in INVIMA regulatory processes and the initial ISO 13485 and HIPAA assessment.' },
    ],
    results: [
      { es: '~4.000 pruebas al mes con disponibilidad superior al 99%', en: '~4,000 tests a month at over 99% availability' },
      { es: 'Despliegues de 12 a 3–4 minutos', en: 'Deploys down from 12 to 3–4 minutes' },
      { es: 'Imágenes Docker de 400–500 MB a 200–250 MB', en: 'Docker images down from 400–500 MB to 200–250 MB' },
    ],
    stack: ['Node.js', 'TypeScript', 'Docker', 'Azure AKS', 'SQL', 'CI/CD'],
    note: {
      es: 'Proyecto privado. El diagrama es una versión simplificada: agrupa servicios y omite detalles internos.',
      en: 'Private project. The diagram is simplified: it groups services and leaves out internal details.',
    },
  },
  {
    slug: 'julieta-ai-device',
    diagram: 'julieta-signal',
    ratio: '16 / 9',
    title: { es: 'Julieta: software de un dispositivo médico con IA', en: 'Julieta: software for an AI medical device' },
    org: 'Salva Health',
    years: '2024 –',
    summary: {
      es: 'Adquisición de señales de bioimpedancia y modelos de IA propios para detectar anomalías en tiempo real. En ensayos clínicos.',
      en: 'Bioimpedance signal acquisition and in-house AI models that detect anomalies in real time. Now in clinical trials.',
    },
    problem: {
      es: 'Llevar una señal física de bioimpedancia hasta modelos de IA en tiempo real, acondicionarla antes de evaluarla y registrar cada resultado de forma trazable para los ensayos clínicos.',
      en: 'Getting a physical bioimpedance signal to AI models in real time, conditioning it before it is evaluated, and recording every result with full traceability for clinical trials.',
    },
    work: [
      { es: 'Desarrollé el software del dispositivo: adquisición y acondicionamiento de la señal.', en: 'Built the device software: signal acquisition and conditioning.' },
      { es: 'Integré modelos de IA propios para detectar anomalías en tiempo real dentro del flujo de la prueba.', en: 'Integrated in-house AI models to detect anomalies in real time within the test flow.' },
      { es: 'Conecté el dispositivo con la plataforma para registrar cada resultado y entregar el informe.', en: 'Connected the device to the platform so every result is recorded and the report delivered.' },
    ],
    results: [
      { es: '+13.000 pruebas realizadas', en: '13,000+ tests performed' },
      { es: '+20 pilotos con hospitales y empresas en Colombia', en: '20+ pilots with hospitals and companies in Colombia' },
      { es: 'En ensayos clínicos', en: 'In clinical trials' },
    ],
    stack: ['Node.js', 'TypeScript', 'IA / ML', 'SQL'],
    note: {
      es: 'Proyecto privado. El diagrama muestra el recorrido de los datos, no la implementación interna.',
      en: 'Private project. The diagram shows how data moves, not the internal implementation.',
    },
  },
  {
    slug: 'kutai-whatsapp-assistant',
    diagram: 'kutai-whatsapp',
    ratio: '5 / 4',
    title: { es: 'App de nutrición y asistente por WhatsApp', en: 'Nutrition app and WhatsApp assistant' },
    org: 'KutAI',
    years: '2021 – 2024',
    summary: {
      es: 'Microservicios en AWS para una app iOS/Android con reconocimiento de alimentos y un asistente que procesa ~100.000 mensajes al mes.',
      en: 'Microservices on AWS for an iOS/Android app with food recognition and an assistant handling ~100,000 messages a month.',
    },
    problem: {
      es: 'Dos canales, una app iOS/Android y un asistente en WhatsApp, escribían sobre los mismos datos. El webhook de WhatsApp tenía que responder rápido a un volumen alto de mensajes, y el equipo crecía, así que necesitaba estándares para no frenarse.',
      en: 'Two channels, an iOS/Android app and a WhatsApp assistant, wrote to the same data. The WhatsApp webhook had to respond quickly to a high volume of messages, and the team was growing, so it needed standards to keep moving.',
    },
    work: [
      { es: 'Diseñé e implementé la arquitectura de microservicios en Node.js, TypeScript y Docker desplegada en AWS.', en: 'Designed and built the microservice architecture in Node.js, TypeScript and Docker, deployed on AWS.' },
      { es: 'Construí la integración con el webhook de WhatsApp.', en: 'Built the WhatsApp webhook integration.' },
      { es: 'Modelé los datos en MongoDB y Firebase y diseñé las APIs GraphQL y REST de los clientes iOS y Android.', en: 'Modelled the data in MongoDB and Firebase and designed the GraphQL and REST APIs for the iOS and Android clients.' },
      { es: 'Establecí documentación OpenAPI/Swagger, pruebas automatizadas y code review. Lideré a 3 desarrolladores en un equipo de 12.', en: 'Introduced OpenAPI/Swagger docs, automated tests and code review. Led 3 developers in a team of 12.' },
    ],
    results: [
      { es: '900 usuarios en la app', en: '900 app users' },
      { es: '~100.000 mensajes de WhatsApp al mes', en: '~100,000 WhatsApp messages a month' },
    ],
    stack: ['Node.js', 'TypeScript', 'Express', 'Docker', 'AWS', 'MongoDB', 'Firebase', 'GraphQL', 'REST'],
    note: {
      es: 'Proyecto privado. El diagrama es una versión simplificada de la arquitectura.',
      en: 'Private project. The diagram is a simplified view of the architecture.',
    },
  },
];

export const experience: {
  role: T;
  org: string;
  place: T;
  from: string;
  to: T;
  context: T;
  points: T[];
}[] = [
  {
    role: { es: 'Software Head', en: 'Software Head' },
    org: 'Salva Health',
    place: { es: 'Medellín', en: 'Medellín' },
    from: '2024',
    to: { es: 'hoy', en: 'now' },
    context: { es: 'Healthtech de detección de anomalías en tejido mamario. Arquitectura de software y equipo de 4 ingenieros.', en: 'Healthtech for detecting anomalies in breast tissue. Software architecture and a team of 4 engineers.' },
    points: [
      { es: '11 microservicios Node.js/TypeScript en Azure AKS, ~4.000 pruebas al mes, disponibilidad >99%.', en: '11 Node.js/TypeScript microservices on Azure AKS, ~4,000 tests a month, >99% availability.' },
      { es: 'Software del dispositivo Julieta con IA propia, en ensayos clínicos.', en: 'Software for the Julieta device with in-house AI, now in clinical trials.' },
      { es: 'CI/CD rediseñado: despliegues de 12 a 3–4 min.', en: 'Redesigned CI/CD: deploys from 12 to 3–4 min.' },
      { es: 'Roadmap técnico, seguridad de datos, INVIMA, ISO 13485 e HIPAA.', en: 'Technical roadmap, data security, INVIMA, ISO 13485 and HIPAA.' },
    ],
  },
  {
    role: { es: 'Backend Lead Developer', en: 'Backend Lead Developer' },
    org: 'KutAI',
    place: { es: 'Medellín', en: 'Medellín' },
    from: '2021',
    to: { es: '2024', en: '2024' },
    context: { es: 'App de hábitos nutricionales con reconocimiento de alimentos y asistente por WhatsApp. Equipo de 12, 3 a mi cargo.', en: 'Nutrition habits app with food recognition and a WhatsApp assistant. Team of 12, 3 reporting to me.' },
    points: [
      { es: 'Microservicios Node.js/TypeScript en AWS para 900 usuarios.', en: 'Node.js/TypeScript microservices on AWS serving 900 users.' },
      { es: 'Webhook de WhatsApp con ~100.000 mensajes al mes.', en: 'WhatsApp webhook handling ~100,000 messages a month.' },
      { es: 'MongoDB, Firebase y APIs GraphQL y REST para iOS y Android.', en: 'MongoDB, Firebase, and GraphQL and REST APIs for iOS and Android.' },
    ],
  },
  {
    role: { es: 'Full Stack Developer y profesor', en: 'Full Stack Developer and lecturer' },
    org: 'Universidad CES',
    place: { es: 'Medellín · medio tiempo', en: 'Medellín · part time' },
    from: '2021',
    to: { es: '2024', en: '2024' },
    context: { es: 'Herramientas internas para facultades, la Clínica CES y la biblioteca, y docencia en programación.', en: 'Internal tools for faculties, Clínica CES and the library, plus programming courses.' },
    points: [
      { es: 'Sistema de gestión de turnos para personal de enfermería.', en: 'Shift scheduling system for nursing staff.' },
      { es: 'Automatización con Power Automate y Microsoft 365.', en: 'Automation with Power Automate and Microsoft 365.' },
      { es: 'Clases de Python y Node.js para grupos de 18–25 estudiantes.', en: 'Python and Node.js courses for groups of 18–25 students.' },
    ],
  },
  {
    role: { es: 'Full Stack Developer', en: 'Full Stack Developer' },
    org: 'Conexión Incremental',
    place: { es: 'Envigado', en: 'Envigado' },
    from: '2020',
    to: { es: '2021', en: '2021' },
    context: { es: 'Consultora de proyectos tecnológicos y propiedad intelectual.', en: 'Technology and intellectual property consultancy.' },
    points: [
      { es: 'Aplicaciones web con Node.js, Express, MongoDB, React y SASS.', en: 'Web apps with Node.js, Express, MongoDB, React and SASS.' },
      { es: 'Apps móviles multiplataforma con Ionic y Capacitor.', en: 'Cross-platform mobile apps with Ionic and Capacitor.' },
    ],
  },
];

export const openSource: { name: string; url: string; live?: string; text: T; stack: string }[] = [
  {
    name: 'trastero-hub',
    url: 'https://github.com/AndresCalle9/trastero-hub',
    live: 'https://trastero-hub.vercel.app',
    text: { es: 'Hub de apps web pequeñas para el día a día, con navegación cruzada entre ellas.', en: 'A hub of small everyday web apps that link to each other.' },
    stack: 'Next.js · TypeScript · Tailwind',
  },
  {
    name: 'trastero-ui',
    url: 'https://github.com/AndresCalle9/trastero-ui',
    text: { es: 'Paquete de UI compartido por las apps del hub: tokens de diseño, componentes base y metadatos.', en: 'Shared UI package for the hub apps: design tokens, base components and metadata helpers.' },
    stack: 'React · TypeScript',
  },
  {
    name: 'home-tasks',
    url: 'https://github.com/AndresCalle9/home-tasks',
    live: 'https://home-tasks-phi.vercel.app',
    text: { es: 'App para repartir y seguir las tareas de casa.', en: 'An app to share and track household chores.' },
    stack: 'Next.js · TypeScript',
  },
  {
    name: 'programming-class · iot-class',
    url: 'https://github.com/AndresCalle9/programming-class',
    text: { es: 'Material de las clases de programación e IoT que di en la Universidad CES.', en: 'Material from the programming and IoT courses I taught at Universidad CES.' },
    stack: 'Python · JavaScript',
  },
];

export const skills: { area: T; items: T }[] = [
  { area: { es: 'Backend', en: 'Backend' }, items: { es: 'Node.js, TypeScript, JavaScript, Express, Python, REST, GraphQL, OpenAPI/Swagger', en: 'Node.js, TypeScript, JavaScript, Express, Python, REST, GraphQL, OpenAPI/Swagger' } },
  { area: { es: 'Arquitectura', en: 'Architecture' }, items: { es: 'Microservicios, diseño de APIs, integración de modelos de IA, webhooks', en: 'Microservices, API design, AI model integration, webhooks' } },
  { area: { es: 'Cloud y DevOps', en: 'Cloud & DevOps' }, items: { es: 'Azure (AKS), AWS, Docker, Kubernetes, CI/CD, Git', en: 'Azure (AKS), AWS, Docker, Kubernetes, CI/CD, Git' } },
  { area: { es: 'Datos', en: 'Data' }, items: { es: 'SQL, MongoDB, Firebase', en: 'SQL, MongoDB, Firebase' } },
  { area: { es: 'Calidad', en: 'Quality' }, items: { es: 'Pruebas unitarias y de integración (Jest, Mocha), code review', en: 'Unit and integration testing (Jest, Mocha), code review' } },
  { area: { es: 'Frontend y móvil', en: 'Frontend & mobile' }, items: { es: 'React, Next.js, SASS, Ionic, Capacitor', en: 'React, Next.js, SASS, Ionic, Capacitor' } },
  { area: { es: 'Liderazgo', en: 'Leadership' }, items: { es: 'Gestión de equipos, roadmap técnico, mentoría, agile, entornos regulados (INVIMA)', en: 'Team management, technical roadmap, mentoring, agile, regulated settings (INVIMA)' } },
];

export const education: { title: T; school: string; years: string }[] = [
  { title: { es: 'Maestría en Ingeniería Biomédica', en: 'MSc in Biomedical Engineering' }, school: 'Universidad EIA / Universidad CES', years: '2017 – 2019' },
  { title: { es: 'Ingeniería Biomédica', en: 'Biomedical Engineering' }, school: 'Universidad de Antioquia', years: '2010 – 2016' },
  { title: { es: 'Curso: Computer Software and Media Applications (Android)', en: 'Course: Computer Software and Media Applications (Android)' }, school: 'Universidad de Antioquia', years: '2017' },
];

export const spoken: { lang: T; level: T }[] = [
  { lang: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { lang: { es: 'Inglés', en: 'English' }, level: { es: 'Profesional (B2)', en: 'Professional (B2)' } },
];
