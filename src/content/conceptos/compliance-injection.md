---
title: 'Compliance Injection'
description: 'Inyectar servicios eIDAS cualificados en cualquier proceso por API o MCP, sin migrar plataformas: el cumplimiento deja de ser una fase y pasa a ser una llamada.'
linea: confianza
tags: ['compliance-injection', 'eidas', 'mcp']
nivel: intermedio
readingTime: 4
featured: true
draft: false
aka: ['confianza como infraestructura']
related: ['deuda-legal', 'mcp-agentes', 'que-es-deuda-legal']
glossary: ['qtsp', 'mcp', 'rpas']
---

## La definición

**Compliance Injection** es el patrón contrario al proyecto de cumplimiento tradicional. En lugar de migrar a una plataforma nueva o añadir una fase de revisión al final del proceso, inyectas servicios de confianza cualificados eIDAS — evidencia, firma, notificación certificada, custodia — **dentro** del proceso que ya tienes. Tu ERP, tu CRM, tu ECM o tu app invocan la Trust API y cada operación vuelve convertida en evidencia cualificada.

## Por qué cambia la conversación

El cumplimiento tradicional es *bolt-on*: se añade después, cuesta proyectos y envejece mal. La inyección lo convierte en *by design*: el cumplimiento ocurre en el mismo instante que la operación, sin fricción para el usuario y sin redespliegues cuando cambia la norma — la regla vive en la capa de confianza, no en tu código.

## Las dos vías

- **API REST** — cuatro microservicios (Evidence, Signature, Notification, Custody) como primitivas JSON-native, con webhooks y SDKs. Una llamada por operación.
- **Servidor MCP** — la misma confianza cualificada expuesta como herramienta nativa para agentes de IA, con los guardrails del QTSP y trazabilidad de cada invocación.

Para despliegues a escala corporativa, la Factoría opera como **rPaaS** (Regulated Platform as a Service): el QTSP del grupo entregado como plataforma, con coste fijo predecible.

## Para profundizar

- [La Factoría · Trust API + MCP](/soluciones/la-factoria) — la arquitectura completa
- [Trust Explorer](/escenarios) — ocho operaciones reales simuladas con y sin la capa de confianza
- Concepto relacionado: [Deuda Legal](/recursos/conceptos/deuda-legal)
