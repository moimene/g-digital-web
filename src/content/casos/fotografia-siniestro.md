---
title: 'Fotografía de siniestro con cadena de custodia'
description: 'El asegurado fotografía los daños desde la app. Se sella el hash del contenido + metadatos EXIF + timestamp cualificado.'
linea: confianza
tags: ['evidencia']
nivel: basico
featured: false
draft: false
sector: 'InsurTech'
servicio: 'Evidence'
norma: 'LEC · cadena de custodia'
related: ['evidencia-cualificada']
glossary: ['qtsp', 'worm']
---

## El evento

Documentación de daños: el asegurado fotografía los daños del vehículo desde la app móvil, en el momento del siniestro.

## Sin capa de confianza

**Imagen manipulable.** Una foto sin metadatos verificables puede ser editada o tener la fecha alterada; la aseguradora no puede confiar en ella y el peritaje se encarece.

## Con la Trust API

**Imagen sellada.** Hash SHA-256 del contenido + metadatos EXIF + timestamp cualificado = inmutabilidad demostrable desde el momento de la captura.

```
POST /api/v1/evidence/seal
{
  "evidence_type": "image",
  "content_hash": "sha256:a7f3b2c1...",
  "exif_data": { "device": "iPhone 14", "gps": true },
  "metadata": { "policy_id": "AUTO-2024-8821", "claim_type": "collision" }
}
```

## Análisis jurídico

El sellado criptográfico del hash y los metadatos EXIF crean una cadena de custodia digital diseñada para reforzar el valor probatorio de la fotografía conforme a la LEC: la imagen se presume íntegra y fechada con precisión cualificada.

**Simulación interactiva:** [Trust Explorer → Fotografía de siniestro](/escenarios) · **Sectorial:** [Seguros · ciclo de póliza](/escenarios/seguros)
