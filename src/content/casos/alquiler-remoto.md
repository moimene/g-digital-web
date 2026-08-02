---
title: 'Contrato de alquiler firmado a distancia con firma avanzada'
description: 'Inquilino y propietario firman el arrendamiento a distancia. Certificado digital + OTP = firma electrónica avanzada con verificación de identidad.'
linea: confianza
tags: ['evidencia', 'qes']
nivel: basico
featured: false
draft: false
sector: 'PropTech'
servicio: 'Signature'
norma: 'eIDAS Art. 26'
related: ['evidencia-cualificada']
glossary: ['qes', 'qtsp']
---

## El evento

Firma remota de contrato: inquilino y propietario firman el arrendamiento de una vivienda (renta 950 €/mes) a distancia, cada uno desde su dispositivo.

## Sin capa de confianza

**Contrato cuestionable.** Una firma escaneada o un simple email de aceptación no verifican la identidad del firmante: el contrato es impugnable y el cobro de rentas queda expuesto.

## Con la Trust API

**Contrato vinculante.** Firma electrónica avanzada con verificación de identidad multifactor: certificado digital para el propietario, OTP por SMS para el inquilino, y hash del documento final.

```
POST /api/v1/contracts/sign
{
  "contract_id": "RENT-2024-1892",
  "signers": [
    { "role": "landlord", "auth": "certificate" },
    { "role": "tenant", "auth": "otp_sms" }
  ],
  "document_hash": "sha256:f8e2a1b3..."
}
```

## Análisis jurídico

La combinación de certificado digital y OTP cumple los requisitos de la firma electrónica avanzada (eIDAS Art. 26): vinculación exclusiva con el firmante, identificación verificable e integridad del documento. Plena validez jurídica sin desplazamientos.

**Simulación interactiva:** [Trust Explorer → Contrato de alquiler remoto](/escenarios)
