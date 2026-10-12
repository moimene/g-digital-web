// Casos de uso del Trust Explorer — La Factoría.
// Datos reales rescatados del proyecto Lovable "Legal App Factory" (Trust Builder API).
// Cada caso compara la operación SIN regulación (deuda legal) vs CON Trust API (evidencia cualificada).

import type { Gestor } from './factoria';

export interface CasoUso {
  id: string;
  sector: string;          // etiqueta de industria
  icon: string;            // phosphor (ph ph-…)
  tone: string;            // hex acento del sector
  title: string;
  resumen: string;         // descripción corta para la tarjeta
  features: string[];      // 2-3 capacidades
  managers: Gestor[];      // gestores de La Factoría que intervienen
  norma: string;           // referencia normativa corta
  event: { title: string; description: string; details: string };
  api: { endpoint: string; method: string; payload: Record<string, unknown> };
  sin: { status: string; description: string; riesgo: 'high' | 'critical' };
  con: { status: string; description: string };
  analysis: string;
}

export const casos: CasoUso[] = [
  {
    id: 'logistica-albaran',
    sector: 'Logística',
    icon: 'ph-truck',
    tone: '#0CF25D',
    title: 'Firma de albarán digital',
    resumen: 'El repartidor solicita firma en tablet para confirmar la recepción. La API sella firma + geolocalización + timestamp.',
    features: ['Firma biométrica + TSA', 'Geolocalización con hash'],
    managers: ['Signature', 'Evidence'],
    norma: 'eIDAS Art. 25',
    event: {
      title: 'Entrega de mercancía',
      description: 'El repartidor solicita firma del cliente en tablet para confirmar la recepción del paquete.',
      details: 'Cliente: María García · Pedido #45892 · 3 bultos',
    },
    api: {
      endpoint: '/api/v1/signatures/biometric',
      method: 'POST',
      payload: {
        document_id: 'ALB-2024-45892',
        signer: { name: 'María García', id_type: 'DNI' },
        biometric_data: { type: 'handwritten', device: 'tablet' },
        geolocation: { lat: 40.4168, lng: -3.7038 },
        timestamp: '2024-01-15T14:32:00Z',
      },
    },
    sin: { status: 'Sin validez legal', description: 'Firma en tablet sin certificar. Fácilmente repudiable en juicio.', riesgo: 'high' },
    con: { status: 'Evidencia certificada', description: 'Firma biométrica + geolocalización + TSA = prueba con presunción legal a su favor.' },
    analysis: 'El sellado de tiempo cualificado (TSA) y la vinculación de datos biométricos convierten una simple firma digital en evidencia admisible según eIDAS Art. 25.',
  },
  {
    id: 'insurtech-siniestro',
    sector: 'InsurTech',
    icon: 'ph-camera',
    tone: '#5B9CF6',
    title: 'Fotografía de siniestro',
    resumen: 'El asegurado fotografía los daños desde la app. Se sella el hash del contenido + EXIF + timestamp.',
    features: ['Hash SHA-256 + EXIF', 'Timestamp cualificado'],
    managers: ['Evidence'],
    norma: 'LEC · cadena de custodia',
    event: {
      title: 'Documentación de daños',
      description: 'El asegurado fotografía los daños del vehículo desde la app móvil.',
      details: 'Póliza: AUTO-2024-8821 · Fecha siniestro: hoy',
    },
    api: {
      endpoint: '/api/v1/evidence/seal',
      method: 'POST',
      payload: {
        evidence_type: 'image',
        content_hash: 'sha256:a7f3b2c1...',
        exif_data: { device: 'iPhone 14', gps: true },
        metadata: { policy_id: 'AUTO-2024-8821', claim_type: 'collision' },
      },
    },
    sin: { status: 'Imagen manipulable', description: 'Foto sin metadatos verificables. Puede ser editada o tener fecha alterada.', riesgo: 'high' },
    con: { status: 'Imagen sellada', description: 'Hash del contenido + EXIF + timestamp certificado = inmutabilidad garantizada.' },
    analysis: 'El sellado criptográfico del hash y los metadatos EXIF crean una cadena de custodia digital que cumple los requisitos probatorios de la LEC.',
  },
  {
    id: 'proptech-alquiler',
    sector: 'PropTech',
    icon: 'ph-house-line',
    tone: '#A855F7',
    title: 'Contrato de alquiler remoto',
    resumen: 'Inquilino y propietario firman a distancia. Certificado digital + OTP = firma electrónica avanzada.',
    features: ['Firma avanzada OTP', 'Verificación de identidad'],
    managers: ['Signature'],
    norma: 'eIDAS Art. 26',
    event: {
      title: 'Firma remota de contrato',
      description: 'Inquilino y propietario firman el contrato de arrendamiento a distancia.',
      details: 'Inmueble: Calle Mayor 15, 2ºA · Renta: 950 €/mes',
    },
    api: {
      endpoint: '/api/v1/contracts/sign',
      method: 'POST',
      payload: {
        contract_id: 'RENT-2024-1892',
        signers: [
          { role: 'landlord', auth: 'certificate' },
          { role: 'tenant', auth: 'otp_sms' },
        ],
        document_hash: 'sha256:f8e2a1b3...',
      },
    },
    sin: { status: 'Contrato cuestionable', description: 'Firma escaneada o email sin verificación de identidad. Impugnable.', riesgo: 'high' },
    con: { status: 'Contrato vinculante', description: 'Firma electrónica avanzada con verificación de identidad multifactor.' },
    analysis: 'La combinación de certificado digital y OTP cumple los requisitos de firma electrónica avanzada (eIDAS Art. 26), otorgando plena validez jurídica.',
  },
  {
    id: 'fintech-credito-sms',
    sector: 'FinTech',
    icon: 'ph-coins',
    tone: '#EAB308',
    title: 'Aceptación de crédito por SMS',
    resumen: 'El cliente acepta un préstamo respondiendo "SÍ" a un SMS certificado, generando evidencia del consentimiento.',
    features: ['SMS certificado', 'Acuse de recibo'],
    managers: ['Notification', 'Evidence'],
    norma: 'LSSI-CE · Ley 16/2011',
    event: {
      title: 'Confirmación de préstamo',
      description: 'Cliente acepta oferta de microcrédito respondiendo "SÍ" a un SMS.',
      details: 'Importe: 3.000 € · TAE: 8,5% · Plazo: 12 meses',
    },
    api: {
      endpoint: '/api/v1/notifications/certified-sms',
      method: 'POST',
      payload: {
        recipient: '+34612345678',
        message: 'Responda SÍ para aceptar préstamo de 3.000€...',
        require_response: true,
        legal_binding: true,
      },
    },
    sin: { status: 'Consentimiento débil', description: 'SMS ordinario sin prueba de entrega ni contenido verificable.', riesgo: 'high' },
    con: { status: 'Consentimiento certificado', description: 'SMS certificado con acuse de recibo y contenido inmutable.' },
    analysis: 'El SMS certificado genera evidencia del consentimiento informado cumpliendo la LSSI-CE y la normativa de crédito al consumo (Ley 16/2011).',
  },
  {
    id: 'salud-consentimiento',
    sector: 'Salud',
    icon: 'ph-heartbeat',
    tone: '#EF4444',
    title: 'Consentimiento informado',
    resumen: 'El paciente firma el consentimiento para una intervención. Firma biométrica + audit trail.',
    features: ['Firma biométrica', 'Trazabilidad RGPD'],
    managers: ['Signature', 'Evidence'],
    norma: 'Ley 41/2002',
    event: {
      title: 'Autorización de procedimiento',
      description: 'Paciente firma consentimiento informado para intervención quirúrgica.',
      details: 'Paciente: Juan Pérez · Procedimiento: Artroscopia de rodilla',
    },
    api: {
      endpoint: '/api/v1/healthcare/consent',
      method: 'POST',
      payload: {
        patient_id: 'PAC-2024-7823',
        procedure_code: 'ICD-10:0SQC0ZZ',
        physician: { license: 'COL-28-45678' },
        biometric_signature: true,
        witness_required: false,
      },
    },
    sin: { status: 'Consentimiento vulnerable', description: 'Papel firmado sin trazabilidad. Difícil demostrar la información recibida.', riesgo: 'high' },
    con: { status: 'Consentimiento trazable', description: 'Firma biométrica vinculada al documento informativo con audit trail.' },
    analysis: 'El sistema garantiza el cumplimiento de la Ley 41/2002 de autonomía del paciente con evidencia de la información efectivamente proporcionada.',
  },
  {
    id: 'food-appcc',
    sector: 'Food & Distribución',
    icon: 'ph-fork-knife',
    tone: '#F97316',
    title: 'Control APPCC y trazabilidad',
    resumen: 'Cada lectura de punto crítico (cadena de frío, pasteurización) se certifica con timestamp cualificado.',
    features: ['Cadena de frío IoT', 'Trazabilidad RASFF'],
    managers: ['Evidence'],
    norma: 'Reg. (CE) 852/2004 · RD 640/2006',
    event: {
      title: 'Control en punto crítico (PCC)',
      description: 'Operario registra la lectura de temperatura en pasteurización con verificación del supervisor.',
      details: 'Control: APPCC_88210 · PCC: Pasteurización · Objetivo 72°C · Lectura 72.3°C · DENTRO DE LÍMITES',
    },
    api: {
      endpoint: '/api/v1/evidence-groups/haccp-checkpoint',
      method: 'POST',
      payload: {
        control_id: 'APPCC_2024_88210',
        checkpoint: 'PCC_03_PASTEURIZACION',
        product_line: 'LECHE_UHT',
        batch: 'LOT_2024_0228',
        parameter: 'TEMPERATURE',
        target_value: '72_C',
        actual_reading: '72.3_C',
        status: 'WITHIN_LIMITS',
        supervisor_verification: 'supervisor_hash',
      },
    },
    sin: { status: 'Registros APPCC vulnerables', description: 'Registros en hojas de control o sistemas internos. Ante inspección o brote, la documentación interna puede cuestionarse.', riesgo: 'critical' },
    con: { status: 'APPCC certificado', description: 'Cada lectura de PCC sellada con timestamp cualificado: prueba con presunción legal del control realizado.' },
    analysis: 'Cumplimiento del Reglamento (CE) 852/2004 Art. 5, el Codex Alimentarius y el RD 640/2006, demostrable ante AESAN y el sistema RASFF.',
  },
  {
    id: 'energy-ppa',
    sector: 'Energy · PPA',
    icon: 'ph-lightning',
    tone: '#FACC15',
    title: 'Notice de curtailment en PPA',
    resumen: 'En un PPA solar/eólico con precio negativo y curtailment, el productor cursa notice al offtaker acreditando timing y datos de mercado.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #13 #16
    features: ['QeDelivery + QTimestamp', 'Datasets OMIE/REE sellados', 'QArchive WORM'],
    managers: ['Notification', 'Evidence'],
    norma: 'eIDAS Art. 43',
    event: {
      title: 'Activación de cláusula de ajuste',
      description: 'Aparecen horas de precio negativo y eventos de curtailment; el productor debe acreditar el aviso y los datos de mercado.',
      details: 'PPA: IBE-OFFTAKER-2026-014 · Curtailment 14:00–17:00 · Precio OMIE: -12 €/MWh',
    },
    api: {
      // VALIDAR plan:gdw:w-factoria-arquitectura #13
      endpoint: '/v1/qedelivery/notices',
      method: 'POST',
      payload: {
        contract_id: 'PPA-IBE-2026-014',
        notice_type: 'curtailment_price_adjustment',
        recipient: { legal_name: 'Offtaker S.A.', edelivery_id: 'ES-EDEL-998877' },
        market_data: { source: 'OMIE', dataset_hash: 'sha256:9af2...c1b4', interval: '2026-04-28T14:00Z/17:00Z' },
        qtimestamp: true,
        qedelivery: true,
      },
    },
    sin: { status: 'Notice impugnable', description: 'Email ordinario sin presunción de envío/recepción/momento. Disputa sobre si el aviso fue válido y a tiempo.', riesgo: 'high' },
    // VALIDAR plan:gdw:w-factoria-arquitectura #13
    con: { status: 'Notice con presunción legal', description: 'QeDelivery acredita envío, recepción, integridad y momento. Datasets OMIE/REE sellados con QTimestamp.' },
    analysis: 'eIDAS Art. 43 confiere al envío electrónico certificado cualificado presunción de integridad, envío, recepción y exactitud de fecha y hora. Desplaza la carga de la prueba al offtaker.',
  },
  {
    id: 'banca-kyc',
    sector: 'Banca · Operaciones',
    icon: 'ph-bank',
    tone: '#22D3EE',
    title: 'Videoidentificación KYC',
    resumen: 'Alta de cliente con verificación biométrica, liveness check y screening PEP/sanciones, en un expediente sellado.',
    features: ['Liveness + biometría', 'Screening PEP/sanciones', 'Expediente sellado'],
    managers: ['Evidence'],
    norma: 'Ley 10/2010 PBC · SEPBLAC',
    event: {
      title: 'Onboarding digital con videoidentificación',
      description: 'Alta de cliente con verificación biométrica, liveness check y screening PEP/sanciones.',
      details: 'Onboarding ONB_88210 · Liveness PASSED · Biometría 97% · PEP CLEAR · AML LOW',
    },
    api: {
      endpoint: '/api/v1/evidence-groups/video-kyc',
      method: 'POST',
      payload: {
        onboarding_id: 'ONB_2024_88210',
        video_session_hash: 'sha256_video',
        id_document_hash: 'sha256_dni',
        liveness_check: 'PASSED',
        biometric_match: 0.97,
        pep_screening: 'CLEAR',
        sanctions_check: 'CLEAR',
        aml_risk_score: 'LOW',
      },
    },
    sin: { status: 'Expediente fragmentado', description: 'Proceso disperso entre el proveedor de vídeo y el core bancario. Ante inspección SEPBLAC, reconstruir el expediente es costoso.', riesgo: 'critical' },
    con: { status: 'KYC certificado', description: 'Paquete completo sellado: vídeo, documento, checks biométricos, PEP/sanciones y decisión del operador.' },
    analysis: 'Expediente de diligencia debida conforme a la Ley 10/2010 PBC, el RD 304/2014 y la Circular 1/2023 de SEPBLAC.',
  },
  {
    id: 'transversal-digitalizacion',
    sector: 'Archivo · Transversal',
    icon: 'ph-scroll',
    tone: '#0CF25D',
    title: 'Digitalización certificada del papel',
    // VALIDAR plan:gdw:w-factoria-arquitectura #13 #15
    resumen: 'El archivo histórico en papel pasa a "original electrónico único": escaneo fiel + sello de tiempo + sello de empresa + entrega certificada + archivo cualificado.',
    features: ['PDF/A + huella (imagen fiel)', 'QTS + QSeal + QERDS', 'Archivo cualificado con re-sellado'],
    managers: ['Evidence', 'Notification'],
    norma: 'Art. 326.4 LEC · eIDAS 2 (45i-45j)',
    event: {
      title: 'Digitalización del archivo contractual en papel',
      description: 'La organización convierte su stock de contratos y expedientes en papel en copias electrónicas con valor probatorio, bajo un pacto de digitalización.',
      details: 'Lote: DIG_00412 · 1.240 expedientes · PDF/A imagen fiel · Retención: 6 años',
    },
    api: {
      endpoint: '/api/v1/evidence-groups/certified-digitization',
      method: 'POST',
      payload: {
        batch_id: 'DIG_2026_00412',
        source: 'archivo_papel',
        document: { type: 'contrato', pages: 24, format: 'PDF/A-2b' },
        scan_profile: 'imagen_fiel',
        document_hash: 'sha256_pdfa',
        org_seal: 'qseal_aplicado',
        qualified_timestamp: 'rfc3161_tst',
        // VALIDAR plan:gdw:w-factoria-arquitectura #13 #15
        delivery: { channel: 'qerds', recipients: ['parte_a', 'parte_b'] },
        retention_policy: { years: 6, resealing: 'periodic' },
      },
    },
    sin: { status: 'Copia simple impugnable', description: 'Un escaneo ordinario no prueba cuándo se digitalizó ni que sea imagen fiel. Si el papel se pierde, la posición probatoria queda comprometida; si se conserva, el doble archivo se perpetúa.', riesgo: 'high' },
    // VALIDAR plan:gdw:w-factoria-arquitectura #15
    con: { status: 'Original electrónico único', description: 'Copia fiel con fecha cierta, origen sellado, entrega certificada y custodia cualificada con re-sellado: presunciones de fecha, integridad, origen y entrega.' },
    analysis: 'El art. 326.4 LEC otorga presunción de autenticidad e integridad a los documentos con servicios de confianza cualificados; eIDAS 2 (arts. 45i-45j) añade el archivo cualificado con presunción durante todo el período de conservación.',
  },
];
