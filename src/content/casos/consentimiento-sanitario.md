---
title: 'Consentimiento informado sanitario con trazabilidad completa'
description: 'El paciente firma el consentimiento para una intervención. Firma biométrica + audit trail vinculado al documento informativo.'
linea: confianza
tags: ['evidencia', 'qes']
nivel: intermedio
featured: false
draft: false
sector: 'Salud'
servicio: 'Signature + Evidence'
norma: 'Ley 41/2002'
related: ['evidencia-cualificada']
glossary: ['qes', 'worm']
---

## El evento

Autorización de procedimiento: el paciente firma el consentimiento informado para una intervención quirúrgica (artroscopia de rodilla) desde una tablet en la propia consulta.

## Sin capa de confianza

**Consentimiento vulnerable.** Un papel firmado sin trazabilidad no demuestra qué información recibió efectivamente el paciente ni cuándo la firmó. En una reclamación por mala praxis, la carga probatoria pesa sobre el centro sanitario.

## Con la Trust API

**Consentimiento trazable.** Firma biométrica vinculada al documento informativo exacto que se mostró, con audit trail completo y sello de tiempo cualificado.

```
POST /api/v1/healthcare/consent
{
  "patient_id": "PAC-2024-7823",
  "procedure_code": "ICD-10:0SQC0ZZ",
  "physician": { "license": "COL-28-45678" },
  "biometric_signature": true,
  "witness_required": false
}
```

## Análisis jurídico

El sistema garantiza el cumplimiento de la Ley 41/2002 de autonomía del paciente con evidencia de la información efectivamente proporcionada: no solo la firma, sino el documento, el momento y la identidad quedan probados.

**Simulación interactiva:** [Trust Explorer → Consentimiento informado](/escenarios)
