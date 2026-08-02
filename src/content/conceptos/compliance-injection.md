---
title: 'Compliance Injection'
description: 'Inyectar servicios eIDAS cualificados en cualquier proceso por API o MCP, sin migrar plataformas: el cumplimiento deja de ser una fase y pasa a ser una llamada.'
linea: confianza
tags: ['compliance-injection', 'eidas', 'mcp']
nivel: intermedio
featured: true
draft: true
aka: ['confianza como infraestructura']
related: ['deuda-legal']
glossary: ['qtsp', 'mcp']
---

> **Borrador editorial.** Concepto acuñado por g-digital; ficha en expansión.

La **Compliance Injection** es el patrón contrario al proyecto de cumplimiento tradicional: en lugar de migrar a una plataforma nueva, tu ERP, CRM, ECM o app invoca los microservicios eIDAS de la Factoría (Evidence, Signature, Notification, Custody) y cada operación vuelve convertida en evidencia cualificada.

La misma capacidad se expone por **API REST** para equipos de desarrollo y como **servidor MCP** para agentes de IA, que invocan firma o sello como herramienta nativa con los guardrails del QTSP.

**Dónde se aplica:** [La Factoría · Trust API + MCP](/soluciones/la-factoria)
