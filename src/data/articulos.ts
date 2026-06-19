// Artículos del blog/Recursos: fuente única usada por la home y por /recursos.
// Los dos primeros son REALES (publicados en g-digital.garrigues.com) y enlazan al original.
// El resto son fichas editoriales en preparación (publicado: false).
export type LineaCat = 'confianza' | 'contract' | 'activos' | 'grc';

export interface Articulo {
  cat: LineaCat;
  catLabel: string;
  fecha: string;
  min: string;
  titulo: string;
  extracto: string;
  slug: string;
  url?: string;        // si está publicado, enlace al artículo real
  publicado?: boolean;
}

export const articulos: Articulo[] = [
  {
    cat: 'confianza', catLabel: 'Confianza Digital', fecha: 'Publicado', min: '7 min',
    titulo: 'Los servicios de confianza regulada: la capa de seguridad jurídica de internet (en Europa)',
    extracto: 'Los servicios de confianza digital, regulados por eIDAS 2, constituyen la infraestructura legal esencial que da seguridad jurídica a las operaciones en la red.',
    slug: 'servicios-confianza-regulada',
    url: 'https://g-digital.garrigues.com/es_ES/recursos/blog/servicios-confianza-regulada-capa-seguridad-juridica-internet-europa',
    publicado: true,
  },
  {
    cat: 'grc', catLabel: 'GRC & IA', fecha: 'Publicado', min: '6 min',
    titulo: 'La «IA gris»: el espacio a promover entre la «IA blanca» y la «IA negra»',
    extracto: '¿Es momento de plantearse una política eficaz «Bring Your Own AI» en tu organización? Un análisis del espacio intermedio entre la IA permitida y la prohibida.',
    slug: 'ia-gris',
    url: 'https://g-digital.garrigues.com/es_ES/recursos/blog/ia-gris-espacio-promover-ia-blanca-ia-negra',
    publicado: true,
  },
  {
    cat: 'contract', catLabel: 'Contract Tech', fecha: 'En preparación', min: '10 min',
    titulo: 'Del contrato-documento al contrato-proceso',
    extracto: 'El CLM tradicional trata el contrato como un PDF estático. Cómo los motores de reglas declarativos externalizan la lógica de negocio y la hacen auditable.',
    slug: 'contract-process',
    publicado: false,
  },
  {
    cat: 'activos', catLabel: 'Activos Digitales', fecha: 'En preparación', min: '12 min',
    titulo: 'Tokenización de activos reales en Europa bajo el Régimen Piloto DLT',
    extracto: 'Cómo encaja la tokenización inmobiliaria (OpenBrick) en el marco europeo y qué papel juega la evidencia cualificada en cada operación.',
    slug: 'tokenizacion-dlt',
    publicado: false,
  },
  {
    cat: 'grc', catLabel: 'GRC & IA', fecha: 'En preparación', min: '11 min',
    titulo: 'AI Act: gobernanza de IA en entornos regulados',
    extracto: 'El AI Act establece obligaciones diferenciadas según el riesgo. Clasificación, transparencia y documentación técnica obligatoria para la IA jurídica.',
    slug: 'ai-act-gobernanza',
    publicado: false,
  },
  {
    cat: 'confianza', catLabel: 'Confianza Digital', fecha: 'En preparación', min: '9 min',
    titulo: 'Evidencia electrónica cualificada: de la captura al valor probatorio',
    extracto: 'Cómo los sellos de tiempo cualificados y la custodia conforme a eIDAS transforman capturas en pruebas con presunción de integridad ante tribunales.',
    slug: 'evidencia-cualificada',
    publicado: false,
  },
];
