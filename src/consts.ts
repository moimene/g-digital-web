// Constantes de sitio y navegación: fuente única para nav/footer/SEO.
export const SITE = {
  name: 'g-digital',
  group: 'Grupo Garrigues',
  email: 'info@g-digital.garrigues.com',
  city: 'Madrid, España',
  tagline: 'Tecnología real para situaciones de alta complejidad jurídica.',
  positioning: 'La infraestructura legal para cada operación de tu organización.',
  // Paraguas ligero (hilo común, no protagonista). eIDAS/Deuda Legal = solo Confianza Digital.
  umbrella: 'El brazo tecnológico de Garrigues para la alta complejidad jurídica.',
};

export const SOLUCIONES = [
  { href: '/soluciones/confianza-digital', icon: 'ph-shield-check', title: 'Confianza Digital', desc: 'Trust API + MCP · Suite · GoCertius' },
  { href: '/soluciones/contract-tech', icon: 'ph-file-text', title: 'Contract Tech', desc: 'CLM · el contrato como proceso' },
  { href: '/soluciones/activos-digitales', icon: 'ph-coins', title: 'Activos Digitales', desc: 'Tokenización regulada · OpenBrick' },
  { href: '/soluciones/grc-ia', icon: 'ph-brain', title: 'GRC & IA', desc: 'GRC Compass · AIMS Console' },
];

export const NAV = [
  { href: '/soluciones/la-factoria', label: 'La Factoría' },
  { href: '/#perfil', label: 'Por perfil' },
  { href: '/recursos', label: 'Recursos' },
];

// Fuente única de las 4 líneas (home, mapa, infografías). Cada una con SU promesa, color y motivo.
// eIDAS solo lidera en Confianza Digital; en el resto es, como mucho, motor de apoyo.
export interface Linea {
  slug: string; n: string; title: string; icon: string;
  tone: 'green' | 'lime' | 'aqua' | 'azure';
  toneText: string; toneRgba: string;
  motif: 'sphere' | 'tunnel' | 'spiral' | 'grid' | 'ribbon';
  kicker: string; promesa: string; desc: string;
  keys: [string, string][]; href: string;
}

export const LINEAS: Linea[] = [
  {
    slug: 'confianza-digital', n: '01', title: 'Confianza Digital', icon: 'ph-shield-check',
    tone: 'green', toneText: 'text-green', toneRgba: 'rgba(12,242,93,.5)', motif: 'sphere',
    kicker: 'Servicios de confianza eIDAS',
    promesa: 'Que cada operación tenga validez probatoria.',
    desc: 'Firma, sello, entrega y custodia eIDAS — por API, MCP, Suite o app. La capa de evidencia de tus operaciones.',
    keys: [['INFRA', 'La Factoría · Trust API + MCP'], ['PLATAFORMA', 'Enterprise Suite'], ['EXPERIENCIA', 'GoCertius'], ['BASE', 'QTSP EADTrust']],
    href: '/soluciones/confianza-digital',
  },
  {
    slug: 'contract-tech', n: '02', title: 'Contract Tech', icon: 'ph-file-text',
    tone: 'lime', toneText: 'text-lime', toneRgba: 'rgba(204,249,67,.5)', motif: 'ribbon',
    kicker: 'Ciclo de vida del contrato',
    promesa: 'El contrato como proceso gobernado y medible.',
    desc: 'Del contrato-documento al contrato-proceso: motores de reglas, trazabilidad y visión real de tu posición contractual.',
    keys: [['CLM', 'Tres dimensiones de madurez'], ['REGLAS', 'Lógica auditable, no hardcode'], ['CARTERA', 'Contract Guardian (posición)']],
    href: '/soluciones/contract-tech',
  },
  {
    slug: 'activos-digitales', n: '03', title: 'Activos Digitales', icon: 'ph-coins',
    tone: 'aqua', toneText: 'text-aqua', toneRgba: 'rgba(43,212,176,.5)', motif: 'grid',
    kicker: 'Tokenización regulada',
    promesa: 'Tokenizar activos reales con licencia para operar.',
    desc: 'Mercados digitales bajo marco regulado: OpenBrick (Régimen Piloto DLT), RWA y ESG. ioBuilders + regulación financiera de Garrigues.',
    keys: [['OPENBRICK', 'Inmobiliario · Régimen Piloto DLT'], ['PARTNER', 'ioBuilders · supervisión CNMV'], ['MODELO', 'Diseño legal y operativo']],
    href: '/soluciones/activos-digitales',
  },
  {
    slug: 'grc-ia', n: '04', title: 'GRC & IA', icon: 'ph-brain',
    tone: 'azure', toneText: 'text-azure', toneRgba: 'rgba(91,156,246,.5)', motif: 'spiral',
    kicker: 'Gobierno, riesgo y cumplimiento',
    promesa: 'Gobernar y demostrar el cumplimiento, incluida la IA.',
    desc: 'De obligaciones a evidencias: GRC Compass + AIMS Console. La tecnología que hace demostrable el cumplimiento, junto a Garrigues.',
    keys: [['GRC', 'Compass · O→R→C→E→I'], ['AIMS', 'AI Act · ISO/IEC 42001'], ['DOMINIOS', 'RGPD · DORA · NIS2 · ESG']],
    href: '/soluciones/grc-ia',
  },
];
