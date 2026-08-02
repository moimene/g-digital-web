// Content Collections — Recursos v2 (biblioteca de conocimiento g-digital).
// Regla de contenido: nada entra sin `draft` si no tiene cuerpo aprobado por el equipo.
// Los drafts se listan como "En preparación" y su página muestra aviso de borrador.
import { defineCollection, z } from 'astro:content';

// Taxonomías canónicas (fuente única para filtros y chips)
export const LINEAS_RECURSOS = {
  confianza: 'Confianza Digital',
  contract: 'Contract Tech',
  activos: 'Activos Digitales',
  grc: 'GRC & IA',
  transversal: 'Transversal',
} as const;
export type LineaRecurso = keyof typeof LINEAS_RECURSOS;

export const NIVELES = {
  basico: 'Básico',
  intermedio: 'Intermedio',
  experto: 'Experto',
} as const;
export type Nivel = keyof typeof NIVELES;

// Etiquetas de tema (ampliar aquí, no inline en los MD)
export const TAG_LABELS: Record<string, string> = {
  'eidas': 'eIDAS',
  'eudi-wallet': 'EUDI Wallet',
  'mcp': 'MCP',
  'agentes-ia': 'Agentes IA',
  'tokenizacion': 'Tokenización',
  'rwa': 'RWA',
  'clm': 'CLM',
  'qtsp': 'QTSP',
  'qes': 'QES',
  'evidencia': 'Evidencia',
  'erds': 'ERDS',
  'worm': 'WORM',
  'dora': 'DORA',
  'ai-act': 'AI Act',
  'iso-42001': 'ISO/IEC 42001',
  'smart-contracts': 'Smart contracts',
  'kyc': 'KYC/AML',
  'deuda-legal': 'Deuda Legal',
  'compliance-injection': 'Compliance Injection',
  'contrato-computable': 'Contrato computable',
  'derecho-computable': 'Derecho computable',
  'regulacion': 'Regulación',
};

const baseFields = {
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  linea: z.enum(['confianza', 'contract', 'activos', 'grc', 'transversal']),
  tags: z.array(z.string()).default([]),
  nivel: z.enum(['basico', 'intermedio', 'experto']).default('intermedio'),
  readingTime: z.number().int().positive().optional(),   // minutos (si falta, se estima del cuerpo)
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  related: z.array(z.string()).default([]),              // slugs de cualquier colección
  glossary: z.array(z.string()).default([]),             // slugs del glosario contextual
  author: z.string().default('Equipo g-digital'),
};

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFields,
    tipo: z.enum(['articulo', 'guia', 'whitepaper', 'noticia']).default('articulo'),
    externalUrl: z.string().url().optional(),            // publicado en el sitio legacy → canonical fuera
    downloadUrl: z.string().optional(),                  // PDF descargable (whitepapers)
  }),
});

const conceptos = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFields,
    aka: z.array(z.string()).default([]),                // alias del concepto
  }),
});

const casos = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFields,
    sector: z.string(),
    servicio: z.string(),                                // qué se usa (p.ej. "Evidence + Signature")
    norma: z.string(),                                   // referencia normativa corta
  }),
});

const glosario = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    short: z.string(),                                   // definición de una línea (para tooltips/callouts)
    linea: z.enum(['confianza', 'contract', 'activos', 'grc', 'transversal']).default('transversal'),
    letter: z.string().length(1).optional(),             // se deriva del término si falta
  }),
});

export const collections = { articulos, conceptos, casos, glosario };
