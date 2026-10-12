---
title: 'Control APPCC con sellado de cada punto crítico'
description: 'Cada lectura de punto crítico (cadena de frío, pasteurización) se certifica con timestamp cualificado y verificación del supervisor.'
linea: confianza
tags: ['evidencia']
nivel: experto
featured: false
draft: false
sector: 'Food & Distribución'
servicio: 'Evidence (custodia)'
norma: 'Reg. (CE) 852/2004 · RD 640/2006'
related: ['evidencia-cualificada']
glossary: ['worm', 'qtsp']
---

## El evento

Control en punto crítico (PCC): el operario registra la lectura de temperatura en pasteurización (objetivo 72 °C, lectura 72,3 °C, dentro de límites) con verificación del supervisor.

## Sin capa de confianza

**Registros APPCC vulnerables.** Hojas de control o sistemas internos sin sellar: ante una inspección de AESAN o un brote alimentario, la documentación interna puede cuestionarse. Riesgo crítico de seguridad alimentaria y de responsabilidad.

## Con la Trust API

**APPCC certificado.** Cada lectura de PCC queda sellada con timestamp cualificado: prueba con presunción legal del control realizado, con custodia a largo plazo para auditorías.

```
POST /api/v1/evidence-groups/haccp-checkpoint
{
  "control_id": "APPCC_2024_88210",
  "checkpoint": "PCC_03_PASTEURIZACION",
  "batch": "LOT_2024_0228",
  "parameter": "TEMPERATURE",
  "target_value": "72_C",
  "actual_reading": "72.3_C",
  "status": "WITHIN_LIMITS",
  "supervisor_verification": "supervisor_hash"
}
```

## Análisis jurídico

Cumplimiento del Reglamento (CE) 852/2004 (Art. 5), del Codex Alimentarius y del RD 640/2006, demostrable ante AESAN y el sistema RASFF: cada registro es evidencia con fecha cierta e integridad garantizada.

**Simulación interactiva:** [Trust Explorer → Control APPCC](/escenarios)
