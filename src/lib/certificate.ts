// Generador de datos del Certificado de Evidencia Electrónica Cualificada (QTSP EADTrust).
// Portado del qtsp-certificate-kit (g-digital / EAD Trust) para el Trust Explorer nativo.
// Trabaja sobre un CasoUso del simulador.
import type { CasoUso } from '../data/casos-uso';

export interface CertificateData {
  metadata: { certificate_id: string; issued_at: string; version: string };
  qtsp: { name: string; legal_name: string; vat_id: string; tsl_url: string; qualified_services: string[] };
  evidence: {
    evidence_id: string; evidence_type: string; category: string;
    operation: { name: string; description: string };
    payload: Record<string, unknown>; hash: string; timestamp: string; precision: string;
  };
  legal_declaration: { header: string; statements: string[]; disclaimer: string };
  verification: { url: string; code: string; qr_data: string };
  qtsp_seal: { seal_name: string; algorithm: string; serial: string; validity: { from: string; to: string } };
}

const EVIDENCE_TYPE_MAP: Record<string, { code: string; label: string }> = {
  signatures: { code: 'SIG', label: 'Firma electrónica' },
  biometric: { code: 'BIO', label: 'Firma biométrica' },
  evidence: { code: 'EVID', label: 'Grupo de evidencia' },
  'evidence-groups': { code: 'EVID', label: 'Grupo de evidencia' },
  notifications: { code: 'NOT', label: 'Notificación certificada' },
  qedelivery: { code: 'NOT', label: 'Entrega electrónica certificada' },
  contracts: { code: 'CON', label: 'Certificación de contrato' },
  documents: { code: 'DOC', label: 'Certificación documental' },
  compliance: { code: 'COMP', label: 'Registro de cumplimiento' },
  healthcare: { code: 'HLT', label: 'Consentimiento sanitario' },
  timestamp: { code: 'TS', label: 'Sello de tiempo cualificado' },
  default: { code: 'EVID', label: 'Grupo de evidencia' },
};

function getEvidenceType(endpoint: string) {
  const parts = endpoint.split('/');
  const service = parts[3] || parts[2] || 'default';
  return EVIDENCE_TYPE_MAP[service] || EVIDENCE_TYPE_MAP.default;
}

// Hash determinista de respaldo (la UI calcula además el SHA-256 real con crypto.subtle).
export function calculatePayloadHash(payload: Record<string, unknown>): string {
  const str = JSON.stringify(payload, null, 0);
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const hash1 = (h1 >>> 0).toString(16).padStart(8, '0');
  const hash2 = (h2 >>> 0).toString(16).padStart(8, '0');
  return (hash1 + hash2).repeat(4);
}

export function generateCertificateId(caso: CasoUso): string {
  const year = new Date().getFullYear();
  const t = getEvidenceType(caso.api.endpoint);
  let hash = 0;
  for (let i = 0; i < caso.id.length; i++) {
    hash = ((hash << 5) - hash) + caso.id.charCodeAt(i);
    hash = hash & hash;
  }
  const sequence = Math.abs(hash % 99999).toString().padStart(5, '0');
  const suffix = Math.abs((hash * 7) % 99999).toString().padStart(5, '0');
  return `EADT-${year}-${sequence}-${t.code}-${suffix}`;
}

function maskDNI(v: string) { return v.length < 5 ? v : v.slice(0, 2) + '***' + v.slice(-2); }
function maskPhone(v: string) { return v.length < 6 ? v : v.slice(0, 4) + '****' + v.slice(-2); }
function maskEmail(v: string) { const [l, d] = v.split('@'); return d ? l.slice(0, 2) + '***@' + d : v; }

export function processPayloadForDisplay(payload: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, val] of Object.entries(payload)) {
    if (k.includes('dni') || k.includes('id_number')) out[k] = maskDNI(String(val));
    else if (k.includes('phone') || k.includes('recipient')) out[k] = typeof val === 'object' ? val : maskPhone(String(val));
    else if (k.includes('email')) out[k] = maskEmail(String(val));
    else if (typeof val === 'object' && val !== null) out[k] = processPayloadForDisplay(val as Record<string, unknown>);
    else out[k] = val;
  }
  return out;
}

export function buildCertificate(caso: CasoUso): CertificateData {
  const now = new Date();
  const certificateId = generateCertificateId(caso);
  const t = getEvidenceType(caso.api.endpoint);
  let eh = 0;
  const es = caso.id + certificateId;
  for (let i = 0; i < es.length; i++) { eh = ((eh << 5) - eh) + es.charCodeAt(i); eh = eh & eh; }
  return {
    metadata: { certificate_id: certificateId, issued_at: now.toISOString(), version: '2.0' },
    qtsp: {
      name: 'EADTrust',
      legal_name: 'European Agency of Digital Trust, S.L.',
      // VALIDAR plan:gdw:w-factoria-arquitectura #35
      vat_id: 'ESB87654321',
      tsl_url: 'https://eidas.ec.europa.eu/efda/trust-services/browse/eidas/tls/tl/ES/tsp/40',
      qualified_services: [
        'Qualified Electronic Time Stamps (QTS)',
        // VALIDAR plan:gdw:w-factoria-arquitectura #13
        'Qualified Electronic Delivery (QERDS)',
        'Qualified Electronic Seals (QeSeal)',
        // VALIDAR plan:gdw:w-factoria-arquitectura #15
        'Preservación de firmas/sellos cualificados',
      ],
    },
    evidence: {
      evidence_id: 'ev_' + Math.abs(eh).toString(36).slice(0, 12),
      evidence_type: t.label,
      category: caso.sector,
      operation: { name: caso.title, description: caso.event.description },
      payload: processPayloadForDisplay(caso.api.payload),
      hash: calculatePayloadHash(caso.api.payload),
      timestamp: now.toISOString(),
      precision: '± 1 segundo (NTP Stratum 1)',
    },
    legal_declaration: {
      header: 'EADTrust, como Prestador Cualificado de Servicios de Confianza inscrito en la Lista de Confianza de España conforme al Reglamento (UE) 910/2014 (eIDAS), CERTIFICA:',
      statements: [
        'Que el documento electrónico cuyo hash SHA-256 se indica existía en la fecha y hora señaladas.',
        'Que conforme al Art. 41.2 del Reglamento eIDAS, los datos sellados disfrutan de la presunción de exactitud de la fecha y hora indicadas y de integridad.',
        'Que el presente certificado, según el Art. 326.4 de la Ley de Enjuiciamiento Civil, goza de presunción de autenticidad como documento privado electrónico emitido por PSTC cualificado.',
        'Que la presunción desplaza a quien impugne este certificado la carga de desvirtuarla.',
      ],
      disclaimer: 'Este certificado representa una simulación con fines demostrativos. En producción, cada transacción genera un certificado real firmado electrónicamente por EADTrust.',
    },
    verification: {
      // VALIDAR plan:gdw:w-factoria-arquitectura #35
      url: `https://verify.eadtrust.eu/${certificateId}`,
      code: certificateId,
      // VALIDAR plan:gdw:w-factoria-arquitectura #35
      qr_data: `https://verify.eadtrust.eu/${certificateId}`,
    },
    qtsp_seal: {
      seal_name: 'EADTrust Qualified Seal for Evidence Certificates',
      algorithm: 'RSA-SHA256 (4096 bits)',
      // VALIDAR plan:gdw:w-factoria-arquitectura #35
      serial: '7F:A3:2B:E1:C8:99:D4:5F',
      validity: { from: '2024-01-01T00:00:00Z', to: '2027-12-31T23:59:59Z' },
    },
  };
}

export function formatCertificateDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short',
  });
}

export function truncateHash(hash: string, length = 20): string {
  return hash.length <= length * 2 + 3 ? hash : `${hash.slice(0, length)}…${hash.slice(-length)}`;
}
