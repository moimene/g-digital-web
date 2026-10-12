---
title: 'La firma electrónica en el internet agéntico: cuando tu agente de IA ejecuta operaciones'
description: 'Los agentes de IA ya preparan contratos, confirman entregas y responden reclamaciones. Si sus actos no producen evidencia cualificada, la deuda legal crece a velocidad de máquina.'
linea: confianza
tags: ['mcp', 'agentes-ia', 'eidas', 'evidencia']
nivel: experto
readingTime: 8
featured: true
draft: false
related: ['mcp-agentes', 'compliance-injection', 'ai-act-gobernanza']
glossary: ['mcp', 'qtsp', 'qes']
author: 'Equipo g-digital'
tipo: articulo
# VALIDAR plan:gdw:w-factoria-arquitectura #4 #5 #21
---

Durante treinta años, el software ejecutó operaciones y las personas firmaban. Ese orden se ha invertido: los agentes de IA ya preparan documentos, negocian borradores, confirman recepciones y cursan comunicaciones. La pregunta jurídica que abre esta década no es si tus agentes actuarán —ya lo hacen— sino **si sus actos serán defendibles**.

## El nuevo eslabón débil

Un agente que confirma una operación sin dejar evidencia cualificada produce el mismo pasivo que un proceso sin certificar, pero a escala industrial: miles de actos por día, sin firma, sin sello, sin constancia. La [deuda legal](/recursos/conceptos/deuda-legal) deja de acumularse a velocidad humana y pasa a acumularse a velocidad de máquina.

Y hay una segunda capa de problema: la **atribución**. Cuando un acto lo ejecuta un agente, ¿quién autorizó qué, con qué límites y en qué momento? Un log interno editable no responde a esa pregunta ante un tercero. La respuesta exige evidencia con presunciones legales.

## De la API al agente: la confianza como herramienta nativa

La primera ola de integración llevó los servicios de confianza a los sistemas: una llamada REST y la operación volvía sellada. La segunda ola hace lo mismo con los agentes: el **Model Context Protocol (MCP)** estandariza cómo un agente descubre e invoca herramientas, y g-digital publica EAD-Factory-MCP, el servidor MCP de La Factoría (EAD Factory), con sus gestores de evidencias, firma y notificación.

El patrón resultante: cuando el agente llega al paso crítico, invoca `evidence_create_sealed` o `signature_request_full` como una herramienta más. La operación vuelve con hash, sello de tiempo cualificado y custodia. El acto del agente produce evidencia cualificada, no solo un log.

## Los guardrails no viven en el prompt

La tentación es gobernar al agente con instrucciones: "no firmes esto sin aprobación". Es insuficiente — el prompt es una sugerencia, no un control. En la arquitectura correcta, **los límites viven en la capa de confianza**:

- Qué operaciones puede sellar directamente el agente.
- Qué operaciones exigen firma humana cualificada y se le ofrecen al responsable.
- Qué comunicaciones salen certificadas y cuáles quedan bloqueadas.
- Toda invocación trazada con identidad del agente, del proceso y del responsable.

Así, la política de delegación es ejecutable y auditable — el mismo principio que un poder notarial bien redactado, llevado a infraestructura.

## El encaje con el AI Act

El AI Act pide exactamente esto para los sistemas de riesgo: registros automáticos, trazabilidad, supervisión humana efectiva. Un agente cuyas acciones críticas quedan selladas y cuyos límites viven fuera del prompt tiene gran parte del camino de gobierno recorrido: la evidencia de cada acto existe, es íntegra y está fechada. Lo desarrollamos en [AI Act: gobernanza de IA en entornos regulados](/recursos/articulos/ai-act-gobernanza).

## Por dónde empezar

El punto de entrada pragmático es el proceso donde tus agentes ya actúan hoy: identificar sus dos o tres actos críticos y exponer la confianza cualificada como herramienta MCP. Sin cambiar de plataforma, sin reescribir al agente: una herramienta más en su catálogo, con los guardrails del QTSP.

- Concepto: [Confianza cualificada para agentes de IA (MCP)](/recursos/conceptos/mcp-agentes)
- Producto: [La Factoría · Trust API + MCP](/soluciones/la-factoria)
- Relacionado: [Compliance Injection](/recursos/conceptos/compliance-injection)
