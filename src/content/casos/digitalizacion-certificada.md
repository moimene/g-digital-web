---
title: 'Digitalización certificada: del papel al original electrónico único'
description: 'Contratos y expedientes nacidos en papel pasan a copias electrónicas con presunciones de fecha, integridad, origen y entrega — y custodia cualificada que cubre la conservación obligatoria.'
linea: confianza
tags: ['evidencia', 'eidas', 'worm']
nivel: intermedio
featured: true
draft: false
sector: 'Transversal'
servicio: 'Evidence (custodia) + Notification'
# VALIDAR plan:gdw:w-factoria-arquitectura #13 #15
norma: 'Art. 326.4 LEC · eIDAS 2 arts. 45i-45j'
related: ['evidencia-cualificada', 'contratacion-reforzada', 'que-es-deuda-legal']
glossary: ['qea', 'erds', 'qtsp', 'pades', 'worm']
---

## El evento

Toda organización con historia tiene un stock de papel: contratos, pólizas, expedientes de cliente, actas. Ese archivo físico es caro de custodiar, lento de consultar y frágil como prueba — y en sectores regulados arrastra obligaciones de conservación de años (en seguros, un mínimo de seis). El objetivo: que cada documento nacido en papel pase a ser un **"original electrónico único"**, con presunciones de fecha, integridad, origen y entrega, y el papel pueda gestionarse — incluso destruirse — de forma segura y pactada.

## Sin capa de confianza

**Copia simple impugnable.** Un escaneo ordinario es una imagen sin garantías: no prueba cuándo se digitalizó, ni que sea imagen fiel del original, ni que no se haya alterado después. Si el original en papel se pierde o se destruye, la posición probatoria queda comprometida; si se conserva, el coste del doble archivo se perpetúa.

## Con la Trust API

**Cadena de digitalización certificada**, orquestada en cinco eslabones: pacto de digitalización en las condiciones (regula el uso probatorio de la copia y la gestión segura del papel) → escaneo conforme a las guías técnicas de digitalización certificada (PDF/A, imagen fiel, huella y metadatos; referencia: guías CTEAJE) → sello de tiempo cualificado + sello electrónico de la organización → entrega certificada del original electrónico a las partes → archivo electrónico cualificado con re-sellado periódico.

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

El art. 326.4 LEC (Ley 6/2020) otorga a los documentos electrónicos respaldados por servicios de confianza cualificados una presunción de autenticidad e integridad que desplaza a quien impugna la carga de desvirtuarla. eIDAS 2 añade el marco del archivo electrónico cualificado (arts. 45i-45j): presunción de integridad y origen durante todo el período de conservación. La cadena completa está diseñada para que la copia electrónica despliegue valor probatorio pleno y la conservación obligatoria se cumpla en custodia cualificada — sin archivadores.

**Simulación interactiva:** [Trust Explorer → Digitalización certificada](/escenarios)
