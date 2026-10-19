---
title: 'Notice de curtailment en un PPA con presunción legal'
description: 'En un PPA solar/eólico con precio negativo y curtailment, el productor cursa el notice al offtaker acreditando timing y datos de mercado sellados.'
linea: confianza
tags: ['evidencia', 'erds']
nivel: experto
featured: false
draft: false
sector: 'Energía · PPA'
servicio: 'Notification + Evidence (custodia)'
# VALIDAR plan:gdw:w-factoria-arquitectura #13
norma: 'eIDAS Art. 43'
related: ['evidencia-cualificada']
glossary: ['erds', 'qtsp']
---

## El evento

Activación de cláusula de ajuste: aparecen horas de precio negativo y eventos de curtailment (14:00–17:00, OMIE a −12 €/MWh). El productor debe acreditar que el aviso al offtaker fue válido, completo y a tiempo.

## Sin capa de confianza

**Notice impugnable.** Un email ordinario no presume envío, recepción ni momento exacto. La disputa sobre si el aviso fue válido y puntual puede costar la liquidación de millones de euros en un PPA.

## Con la Trust API

**Notice con presunción legal.** Entrega electrónica certificada cualificada que acredita envío, recepción, integridad y momento; los datasets OMIE/REE que justifican el ajuste se sellan y custodian.

```
POST /v1/qedelivery/notices
{
  "contract_id": "PPA-IBE-2026-014",
  "notice_type": "curtailment_price_adjustment",
  "recipient": { "legal_name": "Offtaker S.A.", "edelivery_id": "ES-EDEL-998877" },
  "market_data": { "source": "OMIE", "dataset_hash": "sha256:9af2...c1b4",
                   "interval": "2026-04-28T14:00Z/17:00Z" },
  "qtimestamp": true,
  "qedelivery": true
}
```

## Análisis jurídico

El art. 43 eIDAS confiere a la entrega electrónica certificada cualificada presunción de integridad, envío, recepción y exactitud de fecha y hora: esa presunción desplaza al offtaker que impugne el aviso la carga de desvirtuarla.

**Simulación interactiva:** [Trust Explorer → Notice de curtailment en PPA](/escenarios)
