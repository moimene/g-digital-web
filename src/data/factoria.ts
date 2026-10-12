// Fuente única de La Factoría (EAD Factory) — MOI-691.
// La leen La Factoría, la home y el Trust Explorer; después, W-5 (MOI-682) y la pila (MOI-684).
// Sin imports: los tests la cargan con `node --test`.

export type Gestor = 'Evidence' | 'Signature' | 'Notification' | 'Chat';

export interface Ficha { sub: string; body: string; law?: string }

export interface GestorInfo {
  id: Gestor;
  nombre: string;      // nombre en la guía de EAD-Factory-MCP
  icon: string;        // Phosphor regular (subset)
  queHace: string;     // texto nuevo
  publicado?: Ficha;   // texto ya publicado en La Factoría, literal (registro)
  custodia?: Ficha;    // solo Evidence: lo publicado como «Custody Manager» (decisión 5)
}

export const GESTORES: readonly GestorInfo[] = [
  {
    id: 'Evidence',
    nombre: 'Evidence (Digital Trust)',
    icon: 'ph-fingerprint',
    queHace: 'Registra las evidencias de cada operación en el expediente, las sella con sello de tiempo y genera el informe del expediente con su paquete de verificación. La custodia de evidencias, interna o externa, es una capacidad suya.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #11 #15 #17 #18
    publicado: {
      sub: 'Inmutabilidad como servicio',
      body: 'Hashing SHA-256 + Qualified Timestamping (TSA). Perfiles XAdES-T/LTA con re-sellado. Verificabilidad offline.',
      law: 'Presunción de fecha (Art. 41.2 eIDAS) · Presunción reforzada (Art. 326.4 LEC)',
    },
    // VALIDAR plan:gdw:w-factoria-arquitectura #11 #15 #19
    custodia: {
      sub: 'Custodia de evidencias',
      body: 'Integridad a largo plazo (LTV). Perfiles PAdES-LTV/XAdES-LTA, re-sellado periódico. Nube soberana europea.',
      law: 'Integridad a largo plazo (LTV) · eIDAS',
    },
  },
  {
    id: 'Signature',
    nombre: 'Signature',
    icon: 'ph-pen-nib',
    queHace: 'Prepara solicitudes de firma electrónica avanzada y simple sobre los documentos del expediente, con firmantes, validadores y observadores, y entrega el documento firmado.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #8 #9 #10 #11 #12
    publicado: {
      sub: 'Firma como servicio',
      body: 'Niveles AES y QES. Perfiles PAdES, XAdES, CAdES. QSCD cloud (Cloud HSM). SDK mobile.',
      law: 'Equivalencia a firma manuscrita (Art. 25.2 eIDAS)',
    },
  },
  {
    id: 'Notification',
    nombre: 'Notification',
    icon: 'ph-envelope-simple',
    queHace: 'Envía notificaciones con sus documentos a uno o varios destinatarios, por los canales de cada uno, y registra el estado de cada envío en el expediente.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #13
    publicado: {
      sub: 'Entrega electrónica certificada',
      body: 'ERDS con prueba de envío, entrega y contenido con sellos cualificados. Comunicaciones laborales, regulatorias y contractuales.',
      law: 'ERDS (Arts. 43-44 Reglamento 910/2014)',
    },
  },
  {
    id: 'Chat',
    nombre: 'Chat',
    icon: 'ph-chats-circle',
    queHace: 'El gestor existe en la Trust API, sin flujo publicado: se activa como proyecto enterprise.',
  },
];

export const ACCESOS = [
  { nombre: 'Trust API', detalle: 'La API REST de La Factoría. La llaman tus sistemas: ERP, CRM, ECM o apps.' },
  { nombre: 'MCP', detalle: 'Servidores MCP publicados. Los invocan tus agentes de IA desde clientes MCP compatibles.' },
] as const;

export const PLATAFORMAS = [
  { nombre: 'Enterprise Suite', href: '/soluciones/enterprise-suite' },
  { nombre: 'GoCertius', href: 'https://gocertius.io' },
  { nombre: 'Proyectos enterprise', href: '/soluciones/la-factoria#proyectos' },
] as const;

export const TRANSVERSALES = [
  { nombre: 'Testificación con sellado de tiempo', detalle: 'Cada evidencia queda fechada y vinculada a su contenido.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #31
  { nombre: 'Motor de ejecución de contratos', detalle: 'Diseñado para que los eventos del expediente disparen acciones hacia terceros.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #32
  { nombre: 'Caja de herramientas documental', detalle: 'Diseñada para preparar y transformar los documentos de cada operación.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #33
  { nombre: 'Anclaje en registro distribuido', detalle: 'Diseñado para anclar además la testificación en un registro distribuido.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #34
  { nombre: 'Pasarela API B2B con observabilidad', detalle: 'Diseñada como entrada para integraciones entre empresas, con trazas de cada llamada.' },
] as const;

export const CANALES = ['Email', 'SMS', 'WhatsApp', 'Mensajería', 'Noticeman'] as const;

// VALIDAR plan:gdw:w-factoria-arquitectura #7
export const EADTRUST = {
  rotulo: 'Servicios cualificados · eIDAS UE 910/2014',
  fuente: 'Lista de confianza de España nº 189 (24-09-2026)',
  inscritos: [
    'Certificados cualificados de firma electrónica',
    'Certificados cualificados de sello electrónico',
    'Certificados cualificados de autenticación de sitios web',
    'Sello de tiempo cualificado',
  ],
} as const;

export const SERVIDORES_MCP = [
  {
    nombre: 'EAD-Factory-MCP',
    repo: 'https://github.com/g-digital-by-Garrigues/EAD-Factory-MCP',
    de: 'La Factoría (EAD Factory)',
    cubre: 'Expedientes, evidencias selladas, informes, firma y notificación. Sin chat.',
    herramientas: ['evidence_case_file_create', 'evidence_create_sealed', 'signature_request_full', 'notification_request_create'],
    nota: 'Enviar una notificación con notification_request_send exige un cliente con MCP Tasks; desde otros clientes se crea con envío automático y se consulta su estado.',
  },
  {
    nombre: 'EAD_Enterprise_Suite_MCP',
    repo: 'https://github.com/g-digital-by-Garrigues/EAD_Enterprise_Suite_MCP',
    de: 'Enterprise Suite',
    cubre: 'Expedientes, evidencias, dossier certificado, firma y notificación.',
    herramientas: ['case_file_create', 'evidence_seal', 'dossier_certify', 'signature_request_create'],
  },
  {
    nombre: 'GoCertius_MCP',
    repo: 'https://github.com/g-digital-by-Garrigues/GoCertius_MCP',
    de: 'GoCertius',
    cubre: 'Expedientes, evidencias, dossier, notificación y chat. Sin firma.',
    herramientas: ['case_file_create', 'evidence_seal', 'dossier_certify', 'chat_create'],
  },
] as const;

export const FORMATOS_MATRIZ = ['Trust API', 'MCP de La Factoría', 'Enterprise Suite', 'GoCertius', 'Proyecto enterprise'] as const;

export interface Capacidad {
  grupo: 'Núcleo' | 'En plataformas';
  nombre: string;
  celdas: readonly [string, string, string, string, string];
}

export const CAPACIDADES: readonly Capacidad[] = [
  { grupo: 'Núcleo', nombre: 'Expedientes', celdas: ['Sí', 'Sí', 'Sí', 'Sí', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Evidencias selladas con sello de tiempo', celdas: ['Sí', 'Sí', 'Sí, de ficheros', 'Sí, de ficheros', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Informe del expediente con paquete probatorio', celdas: ['Sí: informe firmado y paquete de verificación', 'Sí', 'Sí, dossier certificado', 'Sí, dossier con plantilla estándar', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Notificación', celdas: ['Sí', 'Sí; enviar exige MCP Tasks; si no, envío automático y consulta', 'Sí', 'Sí', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Firma electrónica avanzada y simple', celdas: ['Sí', 'Sí', 'Sí', 'No', 'Sí'] },
  { grupo: 'En plataformas', nombre: 'Certificados de custodia y dossier con plantillas', celdas: ['No: equivale el informe del expediente', 'No', 'Sí', 'Sí, plantilla estándar', 'Se estudia'] },
  { grupo: 'En plataformas', nombre: 'Usuarios y accesos', celdas: ['No: cuenta de servicio', 'No', 'Parcial: sesión y claves, sin administrar usuarios por API', 'Parcial: sesión y claves, sin administrar usuarios por API', 'Se estudia'] },
  { grupo: 'En plataformas', nombre: 'Chat', celdas: ['Parcial: el gestor existe, sin flujo publicado', 'No', 'No', 'Sí: «Chat Certificado», con Telegram', 'Se estudia'] },
  { grupo: 'En plataformas', nombre: 'Captura atestada de foto, vídeo y web', celdas: ['No', 'No', 'No', 'Solo desde la app', 'Se estudia'] },
];

export const MATRIZ_FUENTE = 'Fuente: documentación publicada de cada API y conector en github.com/g-digital-by-Garrigues, consultada el 11-10-2026. Cada columna de plataforma agrupa la plataforma, su API y su MCP.';
