// Artículos del blog/Recursos: fuente única usada por la home y por /recursos.
// Rescatados del borrador anterior (recursos.html). LegalTech & IA → GRC & IA.
export type LineaCat = 'confianza' | 'contract' | 'activos' | 'grc';

export interface Articulo {
  cat: LineaCat;
  catLabel: string;
  fecha: string;
  min: string;
  titulo: string;
  extracto: string;
  slug: string;
}

export const articulos: Articulo[] = [
  {
    cat: 'confianza', catLabel: 'Confianza Digital', fecha: 'Feb 2026', min: '8 min',
    titulo: 'eIDAS 2.0 y el nuevo marco de identidad digital europea',
    extracto: 'La EUDI Wallet transforma cómo empresas y ciudadanos interactúan con la administración. Analizamos la transición de los servicios de confianza a la cartera europea.',
    slug: 'eidas-2',
  },
  {
    cat: 'contract', catLabel: 'Contract Tech', fecha: 'Feb 2026', min: '10 min',
    titulo: 'Del contrato-documento al contrato-proceso',
    extracto: 'El CLM tradicional trata el contrato como un PDF estático. Cómo los motores de reglas declarativos externalizan la lógica de negocio y la hacen auditable.',
    slug: 'contract-process',
  },
  {
    cat: 'activos', catLabel: 'Activos Digitales', fecha: 'Ene 2026', min: '12 min',
    titulo: 'MiCA en vigor: tokenización de activos reales en Europa',
    extracto: 'Europa dispone por primera vez de un marco armonizado para criptoactivos. Examinamos las categorías ART y EMT y cómo encaja la tokenización inmobiliaria.',
    slug: 'mica-tokenizacion',
  },
  {
    cat: 'grc', catLabel: 'GRC & IA', fecha: 'Ene 2026', min: '11 min',
    titulo: 'AI Act: gobernanza de IA en entornos regulados',
    extracto: 'El AI Act establece obligaciones diferenciadas según el riesgo. Clasificación, transparencia y documentación técnica obligatoria para IA jurídica.',
    slug: 'ai-act-gobernanza',
  },
  {
    cat: 'confianza', catLabel: 'Confianza Digital', fecha: 'Dic 2025', min: '9 min',
    titulo: 'Evidencia electrónica cualificada: de la captura al valor probatorio',
    extracto: 'Cómo los sellos de tiempo cualificados y la custodia conforme a eIDAS transforman capturas en pruebas con presunción de integridad ante tribunales.',
    slug: 'evidencia-cualificada',
  },
  {
    cat: 'grc', catLabel: 'GRC & IA', fecha: 'Dic 2025', min: '13 min',
    titulo: 'Arquitectura GRC: del cumplimiento reactivo al modelo O-R-C',
    extracto: 'Marco Obligaciones-Riesgos-Controles con audit logs inmutables y aislamiento por Row-Level Security para plataformas GRC a escala.',
    slug: 'grc-arquitectura',
  },
];
