// Genera los candidatos de Archify (ES/EN) a partir de una sola fuente.
// Uso: node diagrams/build.mjs  → escribe diagrams/candidates/<id>.<lang>.json
// Luego: diagrams/finalize.sh  → valida con Archify y copia el HTML a public/diagrams/
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const ES_CATALOG = JSON.parse(
  readFileSync(join(homedir(), '.claude/skills/archify/examples/locales/es.json'), 'utf8'),
);

// t('es', 'en') → el texto según el idioma activo
const pick = (lang) => (es, en) => (lang === 'es' ? es : en);

const diagrams = {
  'salva-platform': (t) => ({
    schema_version: 1,
    diagram_type: 'architecture',
    meta: {
      title: t('Plataforma Salva Health (simplificada)', 'Salva Health platform (simplified)'),
      animation: 'trace',
      quality_profile: 'showcase',
    },
    components: [
      { id: 'device', type: 'external', label: 'Julieta', sublabel: t('dispositivo de bioimpedancia', 'bioimpedance device'), pos: [40, 236], size: [150, 64] },
      { id: 'clinic', type: 'frontend', label: t('App clínica', 'Clinical app'), sublabel: t('hospitales y empresas', 'hospitals and companies'), pos: [40, 380], size: [150, 64] },
      { id: 'ingress', type: 'cloud', label: 'Ingress', sublabel: 'HTTPS', pos: [270, 300], size: [140, 64] },
      { id: 'auth', type: 'security', label: t('Autenticación', 'Authentication'), sublabel: t('tokens y roles', 'tokens and roles'), pos: [270, 130], size: [140, 64] },
      { id: 'ingest', type: 'backend', label: t('Ingesta de señal', 'Signal ingestion'), sublabel: 'Node.js · TypeScript', pos: [520, 300], size: [150, 64] },
      { id: 'inference', type: 'backend', label: t('Inferencia IA', 'AI inference'), sublabel: t('modelos propios', 'in-house models'), pos: [790, 300], size: [150, 64], tag: t('tiempo real', 'real time') },
      { id: 'results', type: 'backend', label: t('Resultados', 'Results'), sublabel: t('informe por prueba', 'report per test'), pos: [1050, 300], size: [150, 64] },
      { id: 'domain', type: 'backend', label: t('Servicios de dominio', 'Domain services'), sublabel: 'Node.js · TypeScript', pos: [270, 500], size: [140, 64] },
      { id: 'sql', type: 'database', label: 'SQL', sublabel: t('datos clínicos', 'clinical data'), pos: [1050, 500], size: [150, 64] },
    ],
    boundaries: [
      { kind: 'region', label: 'Azure · Kubernetes (AKS)', wraps: ['ingress', 'auth', 'ingest', 'inference', 'results', 'domain', 'sql'] },
    ],
    connections: [
      { id: 'device-ingress', from: 'device', to: 'ingress', label: 'HTTPS', variant: 'emphasis' },
      { id: 'clinic-ingress', from: 'clinic', to: 'ingress', label: 'HTTPS' },
      { id: 'ingress-auth', from: 'ingress', to: 'auth', label: t('valida token', 'verify token'), variant: 'security', fromSide: 'top', toSide: 'bottom' },
      { id: 'ingress-ingest', from: 'ingress', to: 'ingest', label: t('señal cruda', 'raw signal'), variant: 'emphasis' },
      { id: 'ingest-inference', from: 'ingest', to: 'inference', label: t('señal limpia', 'clean signal'), variant: 'emphasis' },
      { id: 'inference-results', from: 'inference', to: 'results', label: t('anomalías', 'anomalies'), variant: 'emphasis' },
      { id: 'ingress-domain', from: 'ingress', to: 'domain', label: 'REST', fromSide: 'bottom', toSide: 'top' },
      { id: 'results-sql', from: 'results', to: 'sql', label: t('persiste', 'persist'), fromSide: 'bottom', toSide: 'top' },
      { id: 'domain-sql', from: 'domain', to: 'sql', label: 'SQL' },
    ],
    cards: [
      { dot: 'emerald', title: t('Plataforma', 'Platform'), items: [
        t('11 microservicios Node.js/TypeScript en Docker sobre AKS', '11 Node.js/TypeScript microservices in Docker on AKS'),
        t('~4.000 pruebas al mes con disponibilidad superior al 99%', '~4,000 tests a month at over 99% availability'),
      ] },
      { dot: 'cyan', title: t('Entrega', 'Delivery'), items: [
        t('Despliegues de 12 a 3–4 min tras rediseñar CI/CD', 'Deploys cut from 12 to 3–4 min after a CI/CD redesign'),
        t('Imágenes Docker de 400–500 MB a 200–250 MB', 'Docker images down from 400–500 MB to 200–250 MB'),
      ] },
      { dot: 'rose', title: t('Entorno regulado', 'Regulated setting'), items: [
        t('Procesos regulatorios INVIMA', 'INVIMA regulatory processes'),
        t('Evaluación inicial de ISO 13485 e HIPAA', 'Initial ISO 13485 and HIPAA assessment'),
      ] },
    ],
  }),

  'julieta-signal': (t) => ({
    schema_version: 1,
    diagram_type: 'dataflow',
    meta: {
      title: t('Julieta: de la señal al informe', 'Julieta: from signal to report'),
      viewBox: [1080, 540],
      animation: 'trace',
      quality_profile: 'showcase',
    },
    stages: [
      { label: t('Captura', 'Capture') },
      { label: t('Señal', 'Signal') },
      { label: t('Análisis', 'Analysis') },
      { label: t('Resultado', 'Result') },
      { label: t('Consulta', 'Review') },
    ],
    nodes: [
      { id: 'probe', type: 'external', label: 'Julieta', sublabel: t('bioimpedancia', 'bioimpedance'), stage: 0, row: 1 },
      { id: 'acquire', type: 'backend', label: t('Adquisición', 'Acquisition'), sublabel: t('acondiciona la señal', 'conditions the signal'), stage: 1, row: 1 },
      { id: 'model', type: 'backend', label: t('Modelo IA', 'AI model'), sublabel: t('detección de anomalías', 'anomaly detection'), stage: 2, row: 1, tag: t('propio', 'in-house') },
      { id: 'report', type: 'backend', label: t('Informe', 'Report'), sublabel: t('resultado de la prueba', 'test result'), stage: 3, row: 1 },
      { id: 'store', type: 'database', label: 'SQL', sublabel: t('historial clínico', 'clinical record'), stage: 3, row: 2 },
      { id: 'clinician', type: 'frontend', label: t('Profesional', 'Clinician'), sublabel: t('revisa el informe', 'reviews the report'), stage: 4, row: 1 },
    ],
    flows: [
      { id: 'raw', from: 'probe', to: 'acquire', label: t('señal cruda', 'raw signal'), variant: 'emphasis' },
      { id: 'conditioned', from: 'acquire', to: 'model', label: t('señal limpia', 'clean signal'), variant: 'emphasis' },
      { id: 'findings', from: 'model', to: 'report', label: t('hallazgos', 'findings'), variant: 'emphasis' },
      { id: 'persist', from: 'report', to: 'store', label: t('registro', 'record'), variant: 'dashed', classification: t('datos clínicos', 'clinical data'), labelDy: 25 },
      { id: 'deliver', from: 'report', to: 'clinician', label: t('informe', 'report'), variant: 'security', classification: t('acceso por rol', 'role-based access') },
    ],
    cards: [
      { dot: 'emerald', title: t('En ensayos clínicos', 'In clinical trials'), items: [
        t('+13.000 pruebas realizadas', '13,000+ tests performed'),
        t('+20 pilotos con hospitales y empresas', '20+ pilots with hospitals and companies'),
      ] },
      { dot: 'violet', title: t('IA en tiempo real', 'Real-time AI'), items: [
        t('Modelos propios integrados en el flujo de la prueba', 'In-house models built into the test flow'),
      ] },
    ],
  }),

  'kutai-whatsapp': (t) => ({
    schema_version: 1,
    diagram_type: 'architecture',
    meta: {
      title: t('KutAI: app y asistente por WhatsApp (simplificado)', 'KutAI: app and WhatsApp assistant (simplified)'),
      animation: 'trace',
      quality_profile: 'showcase',
    },
    components: [
      { id: 'user', type: 'external', label: t('Usuario', 'User'), sublabel: t('hábitos nutricionales', 'nutrition habits'), pos: [40, 100], size: [150, 64] },
      { id: 'whatsapp', type: 'cloud', label: 'WhatsApp', sublabel: 'Business API', pos: [290, 100], size: [140, 64] },
      { id: 'webhook', type: 'backend', label: 'Webhook', sublabel: 'Node.js · Express', pos: [540, 100], size: [140, 64], tag: t('~100k msg/mes', '~100k msg/mo') },
      { id: 'assistant', type: 'backend', label: t('Asistente', 'Assistant'), sublabel: t('lógica de conversación', 'conversation logic'), pos: [800, 100], size: [150, 64] },
      { id: 'mongo', type: 'database', label: 'MongoDB', sublabel: t('datos nutricionales', 'nutrition data'), pos: [800, 290], size: [150, 64] },
      { id: 'mobile', type: 'frontend', label: 'App iOS / Android', sublabel: t('900 usuarios', '900 users'), pos: [290, 470], size: [140, 64] },
      { id: 'api', type: 'backend', label: 'API', sublabel: 'GraphQL · REST', pos: [540, 470], size: [140, 64] },
      { id: 'vision', type: 'backend', label: t('Reconocimiento', 'Food recognition'), sublabel: t('alimentos por imagen', 'from a photo'), pos: [800, 470], size: [150, 64] },
      { id: 'firebase', type: 'cloud', label: 'Firebase', sublabel: t('datos de la app', 'app data'), pos: [290, 640], size: [140, 64] },
    ],
    boundaries: [
      { kind: 'region', label: 'AWS · Docker', wraps: ['webhook', 'assistant', 'mongo', 'api', 'vision'] },
    ],
    connections: [
      { id: 'user-wa', from: 'user', to: 'whatsapp', label: t('mensaje', 'message'), variant: 'emphasis' },
      { id: 'wa-webhook', from: 'whatsapp', to: 'webhook', label: 'webhook', variant: 'emphasis' },
      { id: 'webhook-assistant', from: 'webhook', to: 'assistant', label: t('evento', 'event'), variant: 'emphasis' },
      { id: 'assistant-mongo', from: 'assistant', to: 'mongo', label: t('lee / escribe', 'read / write'), fromSide: 'bottom', toSide: 'top' },
      { id: 'user-mobile', from: 'user', to: 'mobile', label: t('usa la app', 'uses the app'), fromSide: 'bottom', toSide: 'left' },
      { id: 'mobile-api', from: 'mobile', to: 'api', label: 'GraphQL', variant: 'emphasis' },
      { id: 'api-vision', from: 'api', to: 'vision', label: t('foto', 'photo'), variant: 'emphasis' },
      { id: 'api-mongo', from: 'api', to: 'mongo', label: t('consulta', 'query'), fromSide: 'top', toSide: 'left' },
      { id: 'mobile-firebase', from: 'mobile', to: 'firebase', label: t('sincroniza', 'sync'), variant: 'dashed', fromSide: 'bottom', toSide: 'top' },
    ],
    cards: [
      { dot: 'emerald', title: t('Producto', 'Product'), items: [
        t('App móvil con reconocimiento de alimentos por imagen', 'Mobile app with photo-based food recognition'),
        t('Asistente por WhatsApp: ~100.000 mensajes al mes', 'WhatsApp assistant: ~100,000 messages a month'),
      ] },
      { dot: 'amber', title: t('Ingeniería', 'Engineering'), items: [
        t('OpenAPI/Swagger, pruebas automatizadas y code review', 'OpenAPI/Swagger, automated tests and code review'),
        t('Equipo de 12 personas, 3 a mi cargo', 'Team of 12, 3 reporting to me'),
      ] },
    ],
  }),
};

mkdirSync(new URL('./candidates/', import.meta.url), { recursive: true });
for (const [id, build] of Object.entries(diagrams)) {
  for (const lang of ['es', 'en']) {
    const doc = build(pick(lang));
    doc.meta.output = `diagrams/out/${id}.${lang}.html`;
    doc.meta.locale = lang;
    if (lang === 'es') doc.meta.translations = ES_CATALOG;
    // meta: título, locale y traducciones primero para que el JSON se lea bien
    doc.meta = { title: doc.meta.title, locale: doc.meta.locale, ...doc.meta };
    const file = new URL(`./candidates/${id}.${lang}.json`, import.meta.url);
    writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
    console.log(`${doc.diagram_type}\tdiagrams/candidates/${id}.${lang}.json\t${doc.meta.output}`);
  }
}
