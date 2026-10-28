import type { Lang } from '../data/cv';

export const ui = {
  es: {
    'meta.description': 'Andrés Calle Uribe: Tech Lead y Senior Backend Engineer (Node.js / TypeScript). Microservicios en Azure y AWS para software médico.',
    'nav.cases': 'Casos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.skip': 'Saltar al contenido',
    'theme.toggle': 'Cambiar tema claro u oscuro',
    'lang.switch': 'English',
    'lang.switchLabel': 'Read in English',
    'hero.trace': 'Trazo de señal con cuatro lecturas destacadas de mi trayectoria',
    'section.cases': 'Casos',
    'section.casesIntro': 'Mis últimos años son proyectos privados para empresas, así que los cuento como casos: el problema, qué construí y un diagrama de la arquitectura.',
    'section.experience': 'Experiencia',
    'section.profile': 'Perfil',
    'section.openSource': 'Código abierto y proyectos propios',
    'section.skills': 'Competencias',
    'section.education': 'Formación',
    'section.languages': 'Idiomas',
    'section.contact': 'Hablemos',
    'contact.text': 'Busco roles de Tech Lead o Senior Backend en remoto o en Madrid. Escríbeme.',
    'contact.cv': 'Descargar CV (PDF)',
    'case.open': 'Ver el caso',
    'case.context': 'Reto técnico',
    'case.work': 'Qué hice',
    'case.results': 'Resultados',
    'case.diagram': 'Arquitectura',
    'case.diagramHint': 'Diagrama interactivo: pasa el cursor o toca un nodo para seguir sus conexiones.',
    'case.diagramOpen': 'Abrir el diagrama a pantalla completa',
    'case.back': 'Volver a todos los casos',
    'case.next': 'Siguiente caso',
    'repo.code': 'Código',
    'repo.live': 'Ver en vivo',
    'footer.built': 'Hecho con Astro. Diagramas con Archify.',
  },
  en: {
    'meta.description': 'Andrés Calle Uribe: Tech Lead and Senior Backend Engineer (Node.js / TypeScript). Microservices on Azure and AWS for medical software.',
    'nav.cases': 'Work',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Switch between light and dark theme',
    'lang.switch': 'Español',
    'lang.switchLabel': 'Leer en español',
    'hero.trace': 'Signal trace with four highlighted readings from my career',
    'section.cases': 'Work',
    'section.casesIntro': 'My recent years are private projects for companies, so I present them as case studies: the problem, what I built and an architecture diagram.',
    'section.experience': 'Experience',
    'section.profile': 'Profile',
    'section.openSource': 'Open source and side projects',
    'section.skills': 'Skills',
    'section.education': 'Education',
    'section.languages': 'Languages',
    'section.contact': 'Get in touch',
    'contact.text': 'I’m looking for Tech Lead or Senior Backend roles, remote or in Madrid. Drop me a line.',
    'contact.cv': 'Download CV (PDF)',
    'case.open': 'Read the case',
    'case.context': 'Technical challenge',
    'case.work': 'What I did',
    'case.results': 'Results',
    'case.diagram': 'Architecture',
    'case.diagramHint': 'Interactive diagram: hover or tap a node to follow its connections.',
    'case.diagramOpen': 'Open the diagram full screen',
    'case.back': 'Back to all work',
    'case.next': 'Next case',
    'repo.code': 'Code',
    'repo.live': 'Live',
    'footer.built': 'Built with Astro. Diagrams by Archify.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export const useT = (lang: Lang) => (key: UIKey) => ui[lang][key];

// Segmento de URL de los casos en cada idioma: /es/casos/… y /en/work/…
export const caseSegment: Record<Lang, string> = { es: 'casos', en: 'work' };

// Ruta con el base de GitHub Pages (/portfolio/) y barra final.
export const href = (...parts: string[]) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${parts.filter(Boolean).join('/')}${parts.length ? '/' : ''}`;

export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;

export const other = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
