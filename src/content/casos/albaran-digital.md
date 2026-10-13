---
title: 'Firma de albarán digital con prueba de entrega'
description: 'El repartidor solicita firma en tablet para confirmar la recepción. La API sella firma + geolocalización + timestamp cualificado.'
linea: confianza
tags: ['evidencia', 'qes']
nivel: basico
featured: true
draft: false
sector: 'Logística'
servicio: 'Signature + Evidence'
norma: 'eIDAS Art. 25'
related: ['evidencia-cualificada', 'deuda-legal']
glossary: ['qtsp', 'qes']
---

## El evento

Entrega de mercancía: el repartidor solicita la firma del cliente en una tablet para confirmar la recepción del pedido (3 bultos). Es una operación física, cotidiana y crítica: de ella depende el cobro.

## Sin capa de confianza

**Prueba débil.** Una firma capturada en tablet sin certificar es fácilmente repudiable en juicio: no hay garantía de quién firmó, ni de cuándo, ni de que el documento no se alteró después.

## Con la Trust API

**Evidencia certificada.** Firma biométrica + geolocalización + sello de tiempo cualificado (TSA) = prueba legal oponible. La llamada es una sola:

```
POST /api/v1/signatures/biometric
{
  "document_id": "ALB-2024-45892",
  "signer": { "name": "María García", "id_type": "DNI" },
  "biometric_data": { "type": "handwritten", "device": "tablet" },
  "geolocation": { "lat": 40.4168, "lng": -3.7038 },
  "timestamp": "2024-01-15T14:32:00Z"
}
```

## Análisis jurídico

El sellado de tiempo cualificado (TSA) y la vinculación de datos biométricos convierten una simple firma digital en evidencia admisible según eIDAS Art. 25. La presunción legal desplaza la carga a quien impugna: es quien debe desvirtuar la evidencia.

**Simulación interactiva:** [Trust Explorer → Firma de albarán digital](/escenarios)
