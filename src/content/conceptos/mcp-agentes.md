---
title: 'Confianza cualificada para agentes de IA (MCP)'
description: 'Exponer servicios eIDAS a agentes de IA como herramienta nativa vía Model Context Protocol, con los guardrails del QTSP y trazabilidad de cada invocación.'
linea: confianza
tags: ['mcp', 'agentes-ia', 'eidas']
nivel: experto
readingTime: 5
featured: false
draft: false
aka: ['MCP', 'trust MCP server']
related: ['compliance-injection', 'firma-internet-agentico']
glossary: ['mcp', 'qtsp']
---

## La definición

El **Model Context Protocol (MCP)** es el estándar que permite a un agente de IA descubrir e invocar herramientas externas de forma nativa. g-digital expone los cuatro microservicios eIDAS de la Factoría — Evidence, Signature, Notification, Custody — como **servidor MCP**: un agente corporativo puede sellar una evidencia, solicitar una firma o cursar una notificación certificada como una herramienta más de su flujo.

## Por qué importa

Los agentes de IA empiezan a ejecutar operaciones reales: preparar un contrato, confirmar una entrega, responder una reclamación. Si esas acciones no dejan evidencia cualificada, la organización acumula [deuda legal](/recursos/conceptos/deuda-legal) a velocidad de máquina. La pregunta correcta no es si tus agentes actuarán, sino si sus actos serán defendibles.

## La diferencia frente a un plugin genérico

Cada invocación del servidor MCP de confianza queda **trazada y operada por el QTSP del grupo** (EADTrust): la acción del agente produce evidencia con efectos legales — hash, sello de tiempo cualificado, custodia — no solo un log técnico. Y los guardrails del prestador cualificado (qué puede firmar, qué debe escalarse a un humano) viven en la capa de confianza, no en el prompt.

## Para profundizar

- Artículo: [La firma electrónica en el internet agéntico](/recursos/articulos/firma-internet-agentico)
- [La Factoría · Trust API + MCP](/soluciones/la-factoria)
- [GRC & IA](/soluciones/grc-ia) — el gobierno de esos agentes
