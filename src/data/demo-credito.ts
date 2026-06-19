// Demostrador sectorial de BANCA · crédito al consumo.
// 5 escenarios A–E rescatados del proyecto Lovable "Trust Layer Demo" (trustbankservices).
// Mismo motor que el demostrador de seguros; aquí en su contexto bancario.

export interface EscenarioFases {
  id: string;
  letter: string;
  title: string;
  objective: string;
  description: string;
  agenticVariant: string;
  whiteLabelVariant: string;
  managers: string[];
  evidences: string[];
  phases: string[];
}

export const escenariosCredito: EscenarioFases[] = [
  {
    id: 'a',
    letter: 'A',
    title: 'Oferta preconcedida vía notificación out-of-band',
    objective: 'Evidencia de notificación certificada, acceso, lectura, aceptación, firma y entrega de una oferta preconcedida.',
    description: 'La entidad genera una oferta de crédito al consumo preconcedida para un cliente existente y la comunica por un canal out-of-band (email o SMS certificado). Cada interacción —apertura, lectura, visualización de condiciones precontractuales (TAE, TIN, FEIN/FiAE), aceptación expresa y firma cualificada— queda sellada con timestamp cualificado eIDAS (Art. 41.2) con efectos del 326.4 LEC, generando un expediente íntegro que invierte la carga de la prueba a favor de la entidad.',
    agenticVariant: 'Un agente conversacional IA sustituye la notificación out-of-band: el cliente recibe la oferta dentro de una conversación certificada que explica condiciones, resuelve dudas sobre TAE/TIN y guía la aceptación. La conversación completa se certifica como Anexo B del expediente.',
    whiteLabelVariant: 'Toda la experiencia se presenta bajo la marca de la entidad, sin referencias visibles al prestador cualificado; los certificados mantienen la identidad corporativa del banco mientras la infraestructura opera en backend.',
    managers: ['Evidence Manager', 'Notification Manager', 'Signature Manager', 'Custody Manager'],
    evidences: ['TST', 'Acta Notificación', 'Evidencia Firma', 'Custodia', 'Certificado Final'],
    phases: [
      'Generación de oferta preconcedida',
      'Envío de notificación certificada',
      'Registro de acceso del destinatario',
      'Evidencia de lectura del contenido',
      'Presentación de información precontractual',
      'Sellado de snapshot precontractual',
      'Aceptación de condiciones',
      'Firma del contrato',
      'Sellado y validación de versión',
      'Entrega del contrato firmado',
      'Ingesta en custodia cualificada',
      'Generación de certificado final',
    ],
  },
  {
    id: 'b',
    letter: 'B',
    title: 'Incremento de límite / modificación contractual',
    objective: 'Evidencia de notificación de cambio, pantalla de impacto, opt-in, adenda firmada y entrega certificada.',
    description: 'Cuando la entidad ofrece un incremento de límite o modifica condiciones vigentes, se notifica de forma certificada, se presenta una pantalla de impacto (nueva TAE, cuotas, comisiones), se registra el opt-in explícito, se genera y firma la adenda y se entrega copia certificada. Cada hito queda sellado con efectos del 326.4 LEC, protegiendo a la entidad ante reclamaciones por falta de transparencia o consentimiento.',
    agenticVariant: 'El agente IA notifica proactivamente la modificación, presenta el impacto económico, responde preguntas y guía el opt-in y la firma de la adenda. La conversación certificada documenta que el cliente fue debidamente informado antes de consentir.',
    whiteLabelVariant: 'Notificaciones, pantallas de impacto, opt-in y adendas se presentan bajo la marca de la entidad; los sellos y actas se generan en la infraestructura subyacente sin exposición de marca de terceros.',
    managers: ['Evidence Manager', 'Notification Manager', 'Signature Manager', 'Custody Manager'],
    evidences: ['TST', 'Acta Notificación', 'Evidencia Firma', 'Custodia', 'Certificado Final'],
    phases: [
      'Notificación de modificación disponible',
      'Acceso y lectura de notificación',
      'Presentación de pantalla de impacto',
      'Sellado de snapshot de impacto',
      'Registro de opt-in del cliente',
      'Generación de adenda contractual',
      'Firma de la adenda',
      'Sellado y validación de versión',
      'Entrega de adenda firmada',
      'Ingesta en custodia cualificada',
      'Generación de certificado final',
    ],
  },
  {
    id: 'c',
    letter: 'C',
    title: 'Línea preconcedida disponible in-app',
    objective: 'Evidencia de presentación in-app, exploración, evaluación de solvencia, aceptación, firma y entrega.',
    description: 'La entidad pone a disposición una línea preconcedida directamente en su app (canal in-app). El cliente descubre la oferta al navegar: se certifica la presentación en pantalla, la exploración de condiciones, la evaluación de solvencia (simulación INE), la información precontractual (FEIN/FiAE), la aceptación, la firma cualificada y la entrega. Cada snapshot queda sellado, demostrando acceso voluntario, información y consentimiento cualificado.',
    agenticVariant: 'Un asistente IA integrado en la app acompaña la exploración: presenta condiciones de forma conversacional, ejecuta simulaciones de cuotas/plazos en tiempo real y facilita la transición al flujo formal. La conversación se certifica como parte del expediente.',
    whiteLabelVariant: 'La experiencia in-app es completamente nativa: asistente, pantallas precontractuales, flujos de firma y certificados se integran con el diseño de la app bancaria, sin referencia visible a la infraestructura subyacente.',
    managers: ['Evidence Manager', 'Signature Manager', 'Custody Manager'],
    evidences: ['TST', 'Paquete Solvencia', 'Evidencia Firma', 'Custodia', 'Certificado Final'],
    phases: [
      'Presentación de línea preconcedida in-app',
      'Sellado de snapshot de presentación',
      'Exploración de condiciones por el cliente',
      'Evaluación de solvencia (INE simulado)',
      'Sellado de paquete de solvencia',
      'Presentación de información precontractual',
      'Aceptación de condiciones',
      'Firma del contrato',
      'Sellado y validación de versión',
      'Entrega del contrato firmado',
      'Ingesta en custodia cualificada',
      'Generación de certificado final',
    ],
  },
  {
    id: 'd',
    letter: 'D',
    title: 'Crédito estándar no preconcedido',
    objective: 'Evidencia completa de solicitud, consentimientos, solvencia, oferta, aceptación, firma y entrega.',
    description: 'El escenario más completo: un cliente solicita un crédito no preconcedido. Solicitud formal → consentimientos explícitos (tratamiento de datos, consulta a bureaus) → evaluación de solvencia con consulta simulada al INE → oferta personalizada (TAE, TIN, plazo, cuotas, FEIN/FiAE) → aceptación → firma cualificada → entrega certificada → custodia. Cada consentimiento, evaluación y decisión se sella individualmente: el expediente más robusto para demostrar cumplimiento íntegro de la normativa de crédito al consumo.',
    agenticVariant: 'El agente IA guía desde la solicitud: recoge información de forma conversacional, explica los consentimientos y su finalidad, presenta la solvencia de forma comprensible, genera simulaciones comparativas y acompaña hasta la firma. La certificación de la conversación añade evidencia sobre la calidad de la información y la voluntariedad.',
    whiteLabelVariant: 'Todo el journey —del formulario inicial al certificado final— opera bajo la marca exclusiva de la entidad, sin revelar la infraestructura de servicios de confianza subyacente.',
    managers: ['Evidence Manager', 'Signature Manager', 'Notification Manager', 'Custody Manager'],
    evidences: ['TST', 'Paquete Solvencia', 'Acta Notificación', 'Evidencia Firma', 'Custodia', 'Certificado Final'],
    phases: [
      'Solicitud de crédito por el cliente',
      'Registro de consentimientos (datos, consulta)',
      'Sellado de consentimientos',
      'Evaluación de solvencia (INE simulado)',
      'Sellado de paquete de solvencia',
      'Generación y presentación de oferta',
      'Sellado de snapshot de oferta',
      'Aceptación de condiciones',
      'Firma del contrato',
      'Sellado y validación de versión',
      'Entrega del contrato firmado',
      'Ingesta en custodia cualificada',
      'Generación de certificado final',
    ],
  },
  {
    id: 'e',
    letter: 'E',
    title: 'Variante agéntica (IA)',
    objective: 'Certificación íntegra de la conversación con agente IA, incluyendo simulaciones, e inclusión como Anexo B del certificado final.',
    description: 'Demuestra de forma nativa la certificación de interacciones completas con un agente conversacional de IA en originación de crédito. El agente inicia la conversación, presenta productos, ejecuta simulaciones de cuotas/plazos, resuelve dudas (TAE/TIN/comisiones), presenta la oferta y ejecuta el handoff al flujo formal. La conversación íntegra se certifica con sello cualificado eIDAS y se incluye como Anexo B del certificado final. Clave para entidades que despliegan agentes IA y necesitan demostrar interacción transparente, informada y conforme a normativa.',
    agenticVariant: 'Este escenario ES la variante agéntica por definición: agente IA como canal de originación con certificación integral de la interacción, incluyendo la gobernanza del agente (identificación, capacidades, limitaciones), las simulaciones y el handoff al flujo contractual formal.',
    whiteLabelVariant: 'El agente se presenta como asistente propio de la entidad (nombre, avatar, tono). Los certificados de conversación y anexos se generan bajo la marca del banco; el cliente no conoce la infraestructura subyacente.',
    managers: ['Evidence Manager', 'Signature Manager', 'Custody Manager'],
    evidences: ['TST', 'Certificado Conversación', 'Evidencia Firma', 'Custodia', 'Certificado Final'],
    phases: [
      'Inicio de conversación con agente IA',
      'Exploración de productos (respuestas del agente)',
      'Simulación de cuotas/plazos (ejemplo IA)',
      'Resolución de dudas del cliente',
      'Presentación de oferta por el agente',
      'Handoff a flujo formal (simulado)',
      'Aceptación de condiciones',
      'Firma del contrato',
      'Certificación de conversación completa',
      'Sellado y validación de versión',
      'Ingesta en custodia cualificada',
      'Generación de certificado final (con Anexo B)',
    ],
  },
];
