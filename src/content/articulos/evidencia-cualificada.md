---
title: 'Evidencia electrónica cualificada: de la captura al valor probatorio'
description: 'Cómo los sellos de tiempo cualificados y la custodia conforme a eIDAS transforman capturas en pruebas con presunción de integridad ante tribunales.'
pubDate: 2026-08-02
linea: confianza
tags: ['evidencia', 'eidas', 'qtsp', 'qes']
nivel: experto
readingTime: 11
featured: true
draft: false
related: ['que-es-deuda-legal', 'deuda-legal-pasivo', 'servicios-confianza-regulada']
glossary: ['qtsp', 'qes', 'tsa', 'ltv', 'worm', 'erds']
author: 'Equipo g-digital'
tipo: articulo
---

No toda prueba digital es igual. Una captura de pantalla es una afirmación; una evidencia cualificada es una prueba con presunciones legales. La diferencia no es retórica: es una cadena técnica y jurídica con eslabones concretos. Este artículo la recorre completa — de la captura al valor probatorio — y explica qué aporta cada eslabón.

## 1. La captura: el contenido nunca sale de tu perímetro

Todo empieza con una huella. Cuando tu sistema invoca la capa de evidencia, **no transmite el documento: transmite su hash** (SHA-256). La huella criptográfica tiene dos propiedades decisivas: cualquier alteración posterior del contenido la invalida, y su tamaño es independiente del objeto — vale para un XML, un log, una foto o un dataset de telemetría IoT.

La privacidad queda resuelta por diseño: el prestador de confianza sella huellas, no contenidos. El dato sensible nunca sale de tu perímetro.

## 2. El sello de tiempo cualificado: la fecha cierta

La huella se envía a una **TSA** (Time-Stamp Authority) cualificada, que devuelve un token RFC 3161: la prueba de que *esa huella exacta existía en ese instante exacto*. El art. 41.2 eIDAS le otorga **presunción de exactitud de la fecha y de integridad del dato** en toda la UE.

Es el eslabón más infravalorado y el más barato: por céntimos, cualquier evento de tus sistemas — una lectura IoT, un consentimiento, una transacción — pasa a tener fecha cierta con valor probatorio.

## 3. La firma: identidad y voluntad

Cuando la operación requiere voluntad de una persona, entra la firma. Los niveles importan:

- **Avanzada (AES)**: vinculada de forma exclusiva al firmante, con identificación verificable e integridad del documento (art. 26 eIDAS). Los perfiles ETSI — PAdES para PDF, XAdES para XML, CAdES para binarios — la hacen interoperable.
- **Cualificada (QES)**: la avanzada creada sobre un dispositivo cualificado (hoy, QSCD en la nube con HSM) y certificado cualificado. El art. 25.2 eIDAS le da **equivalencia legal a la firma manuscrita** en toda la UE.

La regla práctica: el nivel de firma debe ser proporcional al riesgo de la operación. Un albarán no necesita lo mismo que un crédito sindicado.

## 4. La entrega: probar el envío, la entrega y el contenido

Para comunicaciones formales — reclamaciones de pago, comunicaciones laborales, avisos contractuales — la pregunta crítica no es "¿lo envié?" sino "¿puedo probar que llegó y qué decía?". La **entrega electrónica certificada (ERDS, arts. 43-44 eIDAS)** produce constancia fehaciente de contenido, envío y recepción. Es el burofax convertido en API: misma eficacia probatoria, inmediatez digital y coste marginal.

## 5. La custodia: que la prueba sobreviva al tiempo

Una evidencia que no se puede verificar dentro de diez años es una evidencia a medias. La custodia cualificada aporta:

- **Perfiles de largo plazo (LTV/LTA)** con re-sellado periódico: la verificabilidad sobrevive a la caducidad de algoritmos y certificados.
- **Lógica WORM** (Write Once, Read Many): lo archivado no se altera; las purgas siguen políticas verificables.
- **eIDAS 2 (arts. 45i-45j)**: el archivo electrónico cualificado añade presunción de integridad y origen **durante todo el período de conservación**.

En producción real: la custodia de g-digital/EADTrust gestiona hoy más de 20 TB de documentación sensible y 500+ data rooms, y sustituyó los USB en más de 250 operaciones de M&A de Garrigues.

## 6. El efecto procesal: la carga de la prueba cambia de lado

La cadena completa — hash + sello cualificado + firma del nivel adecuado + entrega certificada + custodia — compone un bloque probatorio que el ordenamiento español premia dos veces: las presunciones eIDAS (integridad, fecha, envío) y el par de la LEC que decide quién trabaja en el juicio: con servicio de confianza cualificado, el art. 326.3 presume la autenticidad e integridad del documento y corresponde a quien lo impugna probar su falsedad; sin él, el art. 326.4 exige acreditar la autenticidad por peritaje sobre el procedimiento empleado.

Traducción práctica: **cualificado → presunción; no cualificado → periciales, costes e incertidumbre**. Quien presenta evidencia cualificada empieza el litigio ganando el plano probatorio: las disputas se juegan sobre el fondo, las auditorías cierran antes y las inspecciones dejan de ser una reconstrucción arqueológica de expedientes.

*El alcance de cada presunción depende del mecanismo y del caso concreto: la estrategia probatoria es territorio de tu asesor legal. La arquitectura que la hace posible es territorio nuestro.*

## Para seguir

- Concepto: [Deuda Legal](/recursos/conceptos/deuda-legal) — el pasivo que esta cadena elimina
- Whitepaper: [Deuda Legal: cuantificar el pasivo](/recursos/articulos/deuda-legal-pasivo)
- Casos con la cadena completa: [albarán digital](/recursos/casos/albaran-digital) · [siniestro](/recursos/casos/fotografia-siniestro) · [KYC](/recursos/casos/kyc-videoidentificacion)
- Producto: [La Factoría · Trust API + MCP](/soluciones/la-factoria)
