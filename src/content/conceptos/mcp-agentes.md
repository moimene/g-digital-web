---
title: 'Confianza cualificada para agentes de IA (MCP)'
description: 'Exponer servicios eIDAS a agentes de IA como herramienta nativa vía Model Context Protocol, con los guardrails del QTSP y trazabilidad de cada invocación.'
linea: confianza
tags: ['mcp', 'agentes-ia', 'eidas']
nivel: experto
featured: false
draft: true
aka: ['MCP', 'trust MCP server']
related: ['compliance-injection']
glossary: ['mcp', 'qtsp']
---

> **Borrador editorial.** Ficha en expansión.

El **Model Context Protocol (MCP)** estandariza cómo los agentes de IA descubren e invocan herramientas. g-digital expone los cuatro microservicios eIDAS de la Factoría como servidor MCP: un agente corporativo puede sellar una evidencia, solicitar una firma o cursar una notificación certificada como herramienta nativa de su flujo.

La diferencia frente a un plugin genérico: cada invocación queda trazada y operada por el QTSP del grupo (EADTrust), de modo que la acción del agente produce evidencia cualificada, no solo un log.

**Dónde se aplica:** [La Factoría · Trust API + MCP](/soluciones/la-factoria) · [GRC & IA](/soluciones/grc-ia)
