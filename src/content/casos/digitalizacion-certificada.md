---
title: 'Digitalización certificada: del papel a la copia electrónica fiel y trazable'
description: 'Contratos y expedientes nacidos en papel pasan a copias electrónicas con evidencias de fecha, integridad, origen y entrega — y custodia orientada a la conservación obligatoria.'
linea: confianza
tags: ['evidencia', 'eidas', 'worm']
nivel: intermedio
featured: true
draft: false
sector: 'Transversal'
# PENDIENTE-RONDA3 MOI-659
servicio: 'Evidence (custodia) + Notification'
# VALIDAR plan:gdw:w-factoria-arquitectura #13 #15
norma: 'Art. 326.4 LEC · eIDAS 45 decies y ss.'
related: ['evidencia-cualificada', 'contratacion-reforzada', 'que-es-deuda-legal']
glossary: ['qea', 'erds', 'qtsp', 'pades', 'worm']
---

## El evento

Toda organización con historia tiene un stock de papel: contratos, pólizas, expedientes de cliente, actas. Ese archivo físico es caro de custodiar, lento de consultar y frágil como prueba — y arrastra obligaciones de conservación de años (como referencia mercantil general, seis años conforme al art. 30 del Código de Comercio, sin perjuicio de plazos sectoriales o especiales más largos). El objetivo: convertir cada documento de papel en una **copia electrónica fiel y trazable** que sirva de soporte probatorio, con evidencias de fecha, integridad, origen y entrega. Cuando el régimen legal, contractual y probatorio del documento lo permita, esa copia puede sustituir al papel en la operativa — y el original, destruirse de forma segura y documentada.

## Sin capa de confianza

**Copia simple impugnable.** Un escaneo ordinario es una imagen sin garantías: no prueba cuándo se digitalizó, ni que sea imagen fiel del original, ni que no se haya alterado después. Si el original en papel se pierde o se destruye, la posición probatoria queda comprometida; si se conserva, el coste del doble archivo se perpetúa.

## Con la Trust API

**Cadena de digitalización certificada**, orquestada en cinco eslabones: pacto de digitalización en las condiciones (regula el uso probatorio de la copia y la gestión segura del papel) → escaneo conforme al estándar técnico aplicable (PDF/A, imagen fiel, huella, metadatos y controles de calidad; p. ej., la NTI de Digitalización de Documentos en el ámbito público o la Orden EHA/962/2007 para facturas) → sello de tiempo cualificado + sello electrónico de la organización → entrega certificada de la copia electrónica a las partes → archivo diseñado conforme a los requisitos del servicio cualificado de archivo electrónico, con re-sellado periódico.

```
POST /api/v1/evidence-groups/certified-digitization
{
  "batch_id": "DIG_2026_00412",
  "source": "archivo_papel",
  "document": { "type": "contrato", "pages": 24, "format": "PDF/A-2b" },
  "scan_profile": "imagen_fiel",
  "document_hash": "sha256_pdfa",
  "org_seal": "qseal_aplicado",
  "qualified_timestamp": "rfc3161_tst",
  "delivery": { "channel": "qerds", "recipients": ["parte_a", "parte_b"] },
  "retention_policy": { "years": 6, "resealing": "periodic" }
}
```

## Análisis jurídico

El art. 326.4 LEC (Ley 6/2020) otorga a los documentos electrónicos respaldados por servicios de confianza cualificados una presunción de autenticidad e integridad que desplaza a quien impugna la carga de desvirtuarla. eIDAS 2 añade el marco del archivo electrónico cualificado (arts. 45 decies y 45 undecies; 45i-45j en la versión inglesa): presunción de integridad y origen durante todo el período de conservación, cuando el servicio figura en las listas de confianza. La cadena completa está diseñada para reforzar el valor probatorio de la copia electrónica — con evidencias de fecha, integridad, origen y entrega, y custodia a largo plazo — y para facilitar el cumplimiento de las obligaciones de conservación cuando el régimen aplicable admita la custodia electrónica.

**Simulación interactiva:** [Trust Explorer → Digitalización certificada](/escenarios)
