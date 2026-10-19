---
title: 'Videoidentificación KYC con expediente sellado'
description: 'Alta de cliente con verificación biométrica, liveness check y screening PEP/sanciones, consolidado en un expediente sellado y custodiado.'
linea: confianza
tags: ['evidencia', 'kyc']
nivel: experto
featured: false
draft: false
sector: 'Banca · Operaciones'
# PENDIENTE-RONDA3 MOI-659
servicio: 'Evidence (custodia)'
norma: 'Ley 10/2010 PBC · SEPBLAC'
related: ['evidencia-cualificada', 'deuda-legal']
glossary: ['worm', 'kyc']
---

## El evento

Onboarding digital con videoidentificación: alta de un cliente con verificación biométrica (97 % de coincidencia), liveness check superado y screening PEP/sanciones limpio.

## Sin capa de confianza

**Expediente fragmentado.** El proceso queda disperso entre el proveedor de vídeo y el core bancario. Ante una inspección de SEPBLAC, reconstruir el expediente de diligencia debida es costoso y arriesgado.

## Con la Trust API

**KYC certificado.** El paquete completo queda sellado: vídeo, documento de identidad, checks biométricos, screening PEP/sanciones y decisión del operador — un solo expediente verificable y custodiado.

```
POST /api/v1/evidence-groups/video-kyc
{
  "onboarding_id": "ONB_2024_88210",
  "video_session_hash": "sha256_video",
  "id_document_hash": "sha256_dni",
  "liveness_check": "PASSED",
  "biometric_match": 0.97,
  "pep_screening": "CLEAR",
  "sanctions_check": "CLEAR",
  "aml_risk_score": "LOW"
}
```

## Análisis jurídico

Expediente de diligencia debida conforme a la Ley 10/2010 de prevención del blanqueo, el RD 304/2014 y la Circular 1/2023 de SEPBLAC: cada componente del onboarding queda sellado, íntegro y con fecha cierta.

**Simulación interactiva:** [Trust Explorer → Videoidentificación KYC](/escenarios) · **Sectorial:** [Banca · crédito al consumo](/escenarios/banca)
