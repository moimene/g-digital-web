// Constantes de sitio y navegación: fuente única para nav/footer/SEO.
export const SITE = {
  name: 'g-digital',
  group: 'Grupo Garrigues',
  email: 'info@g-digital.garrigues.com',
  city: 'Madrid, España',
  tagline: 'Tecnología real para situaciones de alta complejidad jurídica.',
  positioning: 'La infraestructura legal para cada operación de tu organización.',
  umbrella: 'El brazo tecnológico de Garrigues para la alta complejidad jurídica.',
};

export const SOLUCIONES = [
  { href: '/soluciones/confianza-digital', icon: 'ph-shield-check', title: 'Confianza Digital', desc: 'Trust API + MCP · Suite · GoCertius' },
  { href: '/soluciones/contract-tech', icon: 'ph-file-text', title: 'Contract Tech', desc: 'CLM · el contrato como proceso' },
  { href: '/soluciones/activos-digitales', icon: 'ph-coins', title: 'Activos Digitales', desc: 'Tokenización regulada · OpenBrick' },
  { href: '/soluciones/grc-ia', icon: 'ph-brain', title: 'GRC & IA', desc: 'GRC Compass · AIMS Console' },
];

// Submenú de La Factoría (incluye el Trust Explorer / Escenarios y los sectoriales)
export const FACTORIA = [
  { href: '/soluciones/la-factoria', icon: 'ph-lightning', title: 'La Factoría', desc: 'Arquitectura base · Trust API · MCP' },
  { href: '/escenarios', icon: 'ph-flow-arrow', title: 'Trust Explorer', desc: 'Casos de uso · simulador en vivo' },
  { href: '/escenarios/banca', icon: 'ph-bank', title: 'Banca', desc: 'Crédito al consumo · fase a fase' },
  { href: '/escenarios/seguros', icon: 'ph-shield-check', title: 'Seguros', desc: 'Ciclo de póliza · IDD/LCS' },
];

export const NAV = [
  { href: '/recursos', label: 'Recursos' },
  { href: '/nosotros', label: 'Nosotros' },
];

// Fuente única de las 4 líneas (home, mapa, infografías, mensajes por rol).
export type Rol = { rol: string; icon: string; txt: string };
export interface Linea {
  slug: string; n: string; title: string; icon: string;
  tone: 'green' | 'lime' | 'aqua' | 'azure';
  toneText: string; toneRgba: string;
  motif: 'sphere' | 'tunnel' | 'spiral' | 'grid' | 'ribbon';
  kicker: string; promesa: string; desc: string;
  para: string;          // persona/rol objetivo
  roles: Rol[];          // 3 ángulos por tipología (jurista / IT-Dev / negocio)
  keys: [string, string][]; href: string;
}

export const LINEAS: Linea[] = [
  {
    slug: 'confianza-digital', n: '01', title: 'Confianza Digital', icon: 'ph-shield-check',
    tone: 'green', toneText: 'text-green', toneRgba: 'rgba(12,242,93,.5)', motif: 'sphere',
    kicker: 'Servicios de confianza eIDAS',
    promesa: 'Que cada operación tenga validez probatoria.',
    desc: 'Firma, sello, entrega y custodia eIDAS — por API, MCP, Suite o app. La capa de evidencia de tus operaciones.',
    para: 'CLO · CISO · CTO',
    roles: [
      { rol: 'Para el jurista', icon: 'ph-gavel', txt: 'Presunción legal de autenticidad, integridad y fecha (art. 41.2 eIDAS, 326.4 LEC): cada operación es evidencia oponible ante juez o regulador.' },
      // VALIDAR plan:gdw:w-factoria-arquitectura #23
      { rol: 'Para IT / Dev', icon: 'ph-code', txt: 'Una llamada REST — o un servidor MCP para tus agentes de IA. JSON-native, webhooks, sin migrar plataformas.' },
      { rol: 'Para negocio', icon: 'ph-chart-line-up', txt: 'Menos litigios y sanciones. El coste de certificar es céntimos por operación frente al de no tener prueba.' },
    ],
    keys: [['PLATAFORMAS', 'Enterprise Suite · GoCertius'], ['ARQUITECTURA', 'La Factoría · Trust API · MCP'], ['BASE', 'QTSP EADTrust']],
    href: '/soluciones/confianza-digital',
  },
  {
    slug: 'contract-tech', n: '02', title: 'Contract Tech', icon: 'ph-file-text',
    tone: 'lime', toneText: 'text-lime', toneRgba: 'rgba(204,249,67,.5)', motif: 'ribbon',
    kicker: 'Ciclo de vida del contrato',
    promesa: 'El contrato como proceso gobernado y medible.',
    desc: 'Del contrato-documento al contrato-proceso: motores de reglas, trazabilidad y visión real de tu posición contractual.',
    para: 'General Counsel · Legal Ops',
    roles: [
      { rol: 'Para el jurista', icon: 'ph-gavel', txt: 'Cada hito del contrato queda documentado con evidencia sellada; reduces dificultad probatoria y litigiosidad en toda la cartera.' },
      { rol: 'Para IT / Dev', icon: 'ph-code', txt: 'Motores de reglas y estándares abiertos (Accord, DMN, Catalá): la lógica de negocio, fuera del código rígido.' },
      { rol: 'Para negocio', icon: 'ph-chart-line-up', txt: 'Visibilidad de tu posición contractual: menos fuga de valor, mejor control de obligaciones y vencimientos.' },
    ],
    keys: [['CLM', 'Tres dimensiones de madurez'], ['REGLAS', 'Lógica auditable, no hardcode'], ['CARTERA', 'Contract Guardian (posición)']],
    href: '/soluciones/contract-tech',
  },
  {
    slug: 'activos-digitales', n: '03', title: 'Activos Digitales', icon: 'ph-coins',
    tone: 'aqua', toneText: 'text-aqua', toneRgba: 'rgba(43,212,176,.5)', motif: 'grid',
    kicker: 'Tokenización regulada',
    promesa: 'Tokenizar activos reales con licencia para operar.',
    desc: 'Mercados digitales bajo marco regulado: OpenBrick (Régimen Piloto DLT), RWA y ESG. ioBuilders + regulación financiera de Garrigues.',
    para: 'Dirección financiera · Mercados',
    roles: [
      { rol: 'Para el jurista', icon: 'ph-gavel', txt: 'Estructura del vehículo (SPV), régimen de colocación y dictamen regulatorio del equipo de Regulación Financiera.' },
      { rol: 'Para IT / Dev', icon: 'ph-code', txt: 'DLT permisionada con smart contracts auditados, registro de titularidad on-chain y KYC/AML integrado (ioBuilders).' },
      { rol: 'Para negocio', icon: 'ph-chart-line-up', txt: 'Liquidez y nuevos mercados de capital bajo el Régimen Piloto DLT de la UE, con supervisión CNMV.' },
    ],
    keys: [['OPENBRICK', 'Inmobiliario · Régimen Piloto DLT'], ['PARTNER', 'ioBuilders · supervisión CNMV'], ['MODELO', 'Diseño legal y operativo']],
    href: '/soluciones/activos-digitales',
  },
  {
    slug: 'grc-ia', n: '04', title: 'GRC & IA', icon: 'ph-brain',
    tone: 'azure', toneText: 'text-azure', toneRgba: 'rgba(91,156,246,.5)', motif: 'spiral',
    kicker: 'Gobierno, riesgo y cumplimiento',
    promesa: 'Gobernar y demostrar el cumplimiento, incluida la IA.',
    desc: 'De obligaciones a evidencias: GRC Compass + AIMS Console. La tecnología que hace demostrable el cumplimiento, junto a Garrigues.',
    para: 'Compliance · DPO · Consejo',
    roles: [
      { rol: 'Para el jurista', icon: 'ph-gavel', txt: 'Del deber a la evidencia: obligaciones, riesgos, controles y prueba ante el regulador, con audit logs inmutables.' },
      { rol: 'Para IT / Dev', icon: 'ph-code', txt: 'AIMS Console: inventario y clasificación de riesgo de sistemas de IA; sellado WORM de datasets y decisiones.' },
      { rol: 'Para negocio', icon: 'ph-chart-line-up', txt: 'Gobierno de IA demostrable (AI Act, DORA, NIS2, ESG): no solo cumples, lo pruebas — y reduces exposición.' },
    ],
    keys: [['GRC', 'Compass · O→R→C→E→I'], ['AIMS', 'AI Act · ISO/IEC 42001'], ['DOMINIOS', 'RGPD · DORA · NIS2 · ESG']],
    href: '/soluciones/grc-ia',
  },
];

export const lineaBySlug = (slug: string) => LINEAS.find((l) => l.slug === slug);
