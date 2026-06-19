// Directorio de escenarios (MVP 24, clasificados por línea y sector). Escalable a 298.
export type EscLinea = 'confianza' | 'contract' | 'activos' | 'grc';

export interface Escenario {
  id: string;
  linea: EscLinea;
  sector: string;
  titulo: string;
  dolor: string;
  servicio: string;
  norma: string;
}

export const LINEA_META: Record<EscLinea, { label: string; toneText: string }> = {
  confianza: { label: 'Confianza Digital', toneText: 'text-green' },
  contract: { label: 'Contract Tech', toneText: 'text-lime' },
  activos: { label: 'Activos Digitales', toneText: 'text-aqua' },
  grc: { label: 'GRC & IA', toneText: 'text-azure' },
};

export const SECTORES = ['Banca', 'Seguros', 'Salud', 'Logística', 'RRHH', 'Inmobiliario', 'Mercados', 'Energía/ESG', 'Sector público', 'Transversal'];

export const escenarios: Escenario[] = [
  // Confianza Digital
  { id: 'cd-01', linea: 'confianza', sector: 'Banca', titulo: 'Onboarding KYC certificado', dolor: 'Decisiones de alta de cliente sin prueba sólida de qué se mostró y aceptó.', servicio: 'Evidence + Signature', norma: 'eIDAS · DORA' },
  { id: 'cd-02', linea: 'confianza', sector: 'Seguros', titulo: 'Contratación telefónica con consentimiento previo', dolor: 'Demostrar que el tomador conocía las exclusiones antes de contratar.', servicio: 'Timestamp + Signature', norma: 'IDD · art. 3 LCS' },
  { id: 'cd-03', linea: 'confianza', sector: 'RRHH', titulo: 'Notificación certificada de despido', dolor: 'La entrega de la comunicación no es demostrable ante el juzgado.', servicio: 'Notification (ERDS)', norma: 'arts. 43-44 eIDAS' },
  { id: 'cd-04', linea: 'confianza', sector: 'Logística', titulo: 'Albarán de entrega con firma y geolocalización', dolor: 'Cobros perdidos por falta de prueba de la recepción.', servicio: 'Signature + Evidence', norma: 'art. 41.2 eIDAS' },
  { id: 'cd-05', linea: 'confianza', sector: 'Salud', titulo: 'Consentimiento informado cualificado', dolor: 'Un consentimiento sin firma cualificada es impugnable.', servicio: 'Signature (QES)', norma: 'Ley 41/2002' },
  { id: 'cd-06', linea: 'confianza', sector: 'Transversal', titulo: 'Registro de jornada sellado', dolor: 'Registros de jornada sin sello: impugnables en inspección.', servicio: 'Evidence (Timestamp)', norma: 'RD 8/2019' },
  // Contract Tech
  { id: 'ct-01', linea: 'contract', sector: 'Inmobiliario', titulo: 'Ciclo de vida de arrendamientos', dolor: 'Renovaciones, rentas y vencimientos invisibles y dispersos.', servicio: 'CLM mono-contrato', norma: 'Trazabilidad eIDAS' },
  { id: 'ct-02', linea: 'contract', sector: 'Banca', titulo: 'Cartera de préstamos sindicados', dolor: 'Posición contractual dispersa, sin visión consolidada de obligaciones.', servicio: 'CLM posición', norma: 'Evidencia por hito' },
  { id: 'ct-03', linea: 'contract', sector: 'Seguros', titulo: 'Pólizas y endosos como proceso', dolor: 'Lógica contractual enterrada en sistemas legados.', servicio: 'Building Blocks', norma: 'Motores de reglas' },
  { id: 'ct-04', linea: 'contract', sector: 'Transversal', titulo: 'Contratos comerciales (P2P)', dolor: 'Hitos, pagos y cambios sin trazabilidad auditable.', servicio: 'CLM + sellado', norma: 'eIDAS por transición' },
  { id: 'ct-05', linea: 'contract', sector: 'Transversal', titulo: 'Contract Guardian: vencimientos y riesgos', dolor: 'Incumplimientos y oportunidades que se detectan tarde.', servicio: 'Agente IA', norma: 'Audit trail' },
  { id: 'ct-06', linea: 'contract', sector: 'Sector público', titulo: 'Expediente contractual certificado', dolor: 'Transiciones del expediente sin prueba criptográfica.', servicio: 'Blocks + eIDAS', norma: 'eIDAS' },
  // Activos Digitales
  { id: 'ad-01', linea: 'activos', sector: 'Inmobiliario', titulo: 'Tokenización inmobiliaria (OpenBrick)', dolor: 'Activos ilíquidos y de acceso restringido a grandes importes.', servicio: 'DLT + SPV', norma: 'Reg. (UE) 2022/858' },
  { id: 'ad-02', linea: 'activos', sector: 'Banca', titulo: 'Emisión de bono digital', dolor: 'Emisión y liquidación costosas y poco trazables.', servicio: 'DLT (renta fija)', norma: 'MiFID II · CSDR' },
  { id: 'ad-03', linea: 'activos', sector: 'Energía/ESG', titulo: 'Créditos de carbono tokenizados', dolor: 'Riesgo de doble contabilidad y falta de trazabilidad.', servicio: 'DLT ESG', norma: 'Estándar verificable' },
  { id: 'ad-04', linea: 'activos', sector: 'Mercados', titulo: 'Deuda sindicada tokenizada', dolor: 'Waterfall y distribución gestionados a mano.', servicio: 'Smart contracts', norma: 'KYC/AML on-chain' },
  { id: 'ad-05', linea: 'activos', sector: 'Mercados', titulo: 'Mercado secundario regulado', dolor: 'Liquidez sin supervisión ni marco aplicable.', servicio: 'Régimen Piloto DLT', norma: 'Supervisión CNMV' },
  { id: 'ad-06', linea: 'activos', sector: 'Mercados', titulo: 'Participaciones fraccionadas (RWA)', dolor: 'Acceso a inversión limitado por el ticket mínimo.', servicio: 'RWA + gobernanza', norma: 'MiFID II' },
  // GRC & IA
  { id: 'grc-01', linea: 'grc', sector: 'Banca', titulo: 'Cumplimiento DORA demostrable', dolor: 'Evidencia de controles dispersa y reactiva.', servicio: 'GRC Compass', norma: 'DORA' },
  { id: 'grc-02', linea: 'grc', sector: 'Transversal', titulo: 'Inventario y clasificación de sistemas de IA', dolor: 'Sistemas de IA sin inventariar ni clasificar por riesgo.', servicio: 'AIMS Console', norma: 'AI Act · ISO 42001' },
  { id: 'grc-03', linea: 'grc', sector: 'Transversal', titulo: 'RAT y evidencias RGPD', dolor: 'Registro de actividades y prueba de cumplimiento manual.', servicio: 'GRC (RGPD)', norma: 'RGPD' },
  { id: 'grc-04', linea: 'grc', sector: 'Sector público', titulo: 'Canal de denuncias trazable', dolor: 'Whistleblowing sin trazabilidad inmutable.', servicio: 'GRC + WORM', norma: 'Ley 2/2023' },
  { id: 'grc-05', linea: 'grc', sector: 'Banca', titulo: 'Explicabilidad de decisiones de scoring', dolor: 'Decisiones automáticas no auditables ni explicables.', servicio: 'AIMS + Evidence', norma: 'AI Act' },
  { id: 'grc-06', linea: 'grc', sector: 'Energía/ESG', titulo: 'Reporte ESG verificable', dolor: 'Datos ESG sin trazabilidad para auditoría.', servicio: 'GRC ESG', norma: 'CSRD' },
];
