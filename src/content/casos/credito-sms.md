---
title: 'Aceptación de crédito al consumo por SMS certificado'
description: 'El cliente acepta un préstamo respondiendo «SÍ» a un SMS certificado, generando evidencia del consentimiento informado.'
linea: confianza
tags: ['evidencia', 'erds']
nivel: intermedio
featured: false
draft: false
sector: 'FinTech / Banca'
servicio: 'Notification + Evidence'
norma: 'LSSI-CE · Ley 16/2011'
related: ['deuda-legal']
glossary: ['erds', 'qtsp']
---

## El evento

Confirmación de préstamo: el cliente acepta una oferta de microcrédito (3.000 €, TAE 8,5%, 12 meses) respondiendo «SÍ» a un SMS.

## Sin capa de confianza

**Consentimiento débil.** Un SMS ordinario no prueba ni la entrega ni el contenido: el consentimiento es impugnable y la operación queda expuesta ante el regulador de crédito al consumo.

## Con la Trust API

**Consentimiento certificado.** SMS certificado con acuse de recibo y contenido inmutable: prueba de envío, de entrega y del texto exacto aceptado.

```
POST /api/v1/notifications/certified-sms
{
  "recipient": "+34612345678",
  "message": "Responda SÍ para aceptar préstamo de 3.000€...",
  "require_response": true,
  "legal_binding": true
}
```

## Análisis jurídico

El SMS certificado genera evidencia del consentimiento informado cumpliendo la LSSI-CE y la normativa de crédito al consumo (Ley 16/2011): contenido íntegro, entrega acreditada y respuesta vinculada al destinatario.

**Simulación interactiva:** [Trust Explorer → Aceptación de crédito por SMS](/escenarios) · **Sectorial:** [Banca · crédito al consumo](/escenarios/banca)
