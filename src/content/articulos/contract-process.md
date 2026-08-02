---
title: 'Del contrato-documento al contrato-proceso'
description: 'El CLM tradicional trata el contrato como un PDF estático. El contrato computable es una máquina de estados: reglas declarativas, evidencia cualificada en cada fase y una posición contractual visible.'
pubDate: 2026-08-02
linea: contract
tags: ['clm', 'evidencia', 'contrato-computable']
nivel: intermedio
readingTime: 10
featured: true
draft: false
related: ['clm-a-consola-posicion', 'contrato-computable', 'evidencia-cualificada']
glossary: ['contrato-computable', 'clm', 'blueprint-pack', 'worm']
author: 'Equipo g-digital'
tipo: articulo
---

Un contrato no es un documento que se firma y se archiva. Es un sistema vivo que toma decisiones, gestiona obligaciones, produce evidencias y tiene consecuencias legales y económicas. Sin embargo, la mayoría de las organizaciones lo gestiona como un artefacto estático: se redacta en Word, se firma en una plataforma externa, se archiva en un gestor documental y se olvida hasta que surge un problema.

El resultado es conocido: reglas de negocio enterradas en código, cambios normativos que cuestan meses de desarrollo, evidencia débil de lo ocurrido durante la vida del contrato y una posición contractual invisible — nadie sabe con exactitud cuántos contratos activos hay, en qué estado están ni qué obligaciones vencen mañana.

## La tesis: la lógica contractual es un activo, no código

La comparación que ordena todo el enfoque:

| Dimensión | Código estándar | Motor de reglas |
|---|---|---|
| ¿Dónde vive la norma? | Mezclada con lógica técnica, dispersa | Separada, como activo versionable |
| ¿Quién la cambia? | Solo ingeniería, con deploy | Analistas de negocio o legales, sin redespliegue |
| ¿Cómo se audita una decisión? | Logs ad-hoc, reconstrucción manual | Trazabilidad estructural: regla, datos de entrada, resultado |
| ¿Cómo se justifica un resultado? | Leyendo código a posteriori | La regla contiene su propia justificación |

Cuando la regla contractual vive como activo versionado, gobernado por el dominio correcto, el contrato deja de depender de la memoria de quien lo programó.

## El contrato computable: una máquina de estados

Un **contrato computable** mantiene una representación estructurada de sus datos, su estado y sus eventos; ejecuta componentes computables deterministas; y produce evidencia robusta de todo lo ocurrido — no solo de la firma final.

En la práctica: cada contrato define sus estados válidos (`BORRADOR → NEGOCIACIÓN → FIRMADO → EN_VIGOR → INCUMPLIMIENTO → RESOLUCIÓN → CERRADO`), las transiciones permitidas, las condiciones que las habilitan (*guards*) y las acciones que se disparan al entrar o salir de cada estado. Reacciona a eventos del mundo real — un pago recibido, un documento entregado, un plazo vencido — y ejecuta las consecuencias programadas. Y es determinista: dado un estado y una secuencia de eventos, el resultado es siempre el mismo. Eso es lo que lo hace auditable y defendible.

## Las cuatro fases, cada una con su evidencia

| Fase | Qué se gestiona | Evidencia que produce |
|---|---|---|
| **Preparación** | Expediente, captura de datos, negociación, KYC, versionado | Hash + sello de documentos sensibles |
| **Formalización** | Aceptación de términos esenciales, circuito de firma | Firma cualificada (QES), formato AdES, sello cualificado |
| **Ejecución** | Obligaciones, pagos, entregas, incumplimientos, addendas | Sello de cada evento crítico, hash-chain continuo |
| **Terminación** | Vencimientos, resoluciones, liquidaciones | Bundle probatorio con certificado final verificable |

El punto diferencial: la evidencia no se añade después — está **embebida en la arquitectura**. Cada evento se serializa, se hashea y se encadena; en los hitos definidos por el blueprint, el hash se sella con un timestamp cualificado RFC 3161 del QTSP. El contrato produce su propia prueba mientras vive.

## Un kernel + blueprints, no un CLM por contrato

La arquitectura separa lo estable de lo variable:

- **El Kernel CLM** es el runtime: event sourcing, persistencia, auditoría y evidencia. "Tonto pero impecable": no cambia por tipología contractual.
- **Los Blueprint Packs** definen cada tipología (arras, arrendamiento, servicios…): modelo de datos, plantillas, reglas operacionales, módulo normativo y política de evidencia. Siete artefactos versionados que convierten un tipo de contrato en un proceso gobernado.

Si cambia la ley o la política interna, se actualiza el blueprint — no el software. Los estándares son abiertos (Accord Project, Catala, DMN, ETSI/eIDAS): sin lock-in, auditable por reguladores.

## Lo que esto significa para una organización

Las reglas de negocio se configuran en una consola, no se programan. Cada decisión contractual queda trazada a la regla que la produjo. Los documentos son reconstruibles desde los datos del expediente. Y la cartera entera se vuelve visible: es el paso de la gestión transaccional a la estratégica, que desarrollamos en [De CLM a consola de posición contractual](/recursos/articulos/clm-a-consola-posicion).

**Para seguir:** [Contract Tech · la línea](/soluciones/contract-tech) · concepto: [Contrato computable](/recursos/glosario#contrato-computable) · la evidencia que lo sostiene: [Evidencia electrónica cualificada](/recursos/articulos/evidencia-cualificada)
