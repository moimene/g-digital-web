# Plan de Refactorización de Contenidos — g-digital

## Fecha: 26 Feb 2026
## Autor: Análisis basado en 5 SKILL.md (context, factoria, intelligence, playbook, content)

---

## DIAGNÓSTICO: Qué dice la web vs Qué sois realmente

### La brecha es crítica

La web actual describe a g-digital como una consultora genérica de "innovación digital con garantía legal". 
Los SKILL revelan una empresa con una **propuesta de valor radicalmente diferenciada** que NO está reflejada en la web.

---

## BRECHAS IDENTIFICADAS (ordenadas por impacto comercial)

### BRECHA 1 — LA FACTORÍA NO EXISTE EN LA WEB (CRÍTICA)
**Lo que sois**: Trust API es vuestra PRIORIDAD COMERCIAL #1. Una API REST de 4 microservicios eIDAS cualificados (Evidence, Signature, Notification, Custody) que inyecta cumplimiento legal en cualquier proceso digital. 298 escenarios de integración en 18 sectores. Categoría de mercado que estáis CREANDO (Océano Azul).
**Lo que dice la web**: NADA. La Factoría, Trust API, Compliance Injection, los 4 microservicios... nada de esto aparece.
**Impacto**: Vuestra propuesta más diferenciada e imposible de comparar con la competencia es invisible.

### BRECHA 2 — EL CONCEPTO "DEUDA LEGAL" ES INVISIBLE
**Lo que sois**: Habéis creado una metáfora de venta extraordinaria — "Deuda Legal" como equivalente a "Deuda Técnica" — que todo directivo entiende y que genera urgencia sin agresividad.
**Lo que dice la web**: No se menciona.
**Impacto**: Perdéis el hook narrativo más potente que tenéis para abrir conversaciones.

### BRECHA 3 — LA ARQUITECTURA DE 3 CAPAS DE CONFIANZA DIGITAL ESTÁ APLANADA
**Lo que sois**: Factoría (API infraestructura) → Soluciones LegalTech EADTrust (productos: Signature Manager, Noticeman, eArchiving, Credential Manager) → GoCertius (SuperApp, +40K evidencias).
**Lo que dice la web**: "Servicios de confianza eIDAS" genéricos. Los nombres de producto (Noticeman, Signature Manager) aparecen enterrados. La arquitectura de 3 capas es invisible.
**Impacto**: No se entiende que tenéis infraestructura (para enterprise), productos (para departamentos) Y experiencia de usuario (para profesionales). Tres puntos de entrada según cliente.

### BRECHA 4 — CONTRACT TECH TIENE 3 LÍNEAS, LA WEB MUESTRA 1 GENÉRICA
**Lo que sois**: 
  - Piezas LEGO (building blocks vía API para reforzar contratos existentes)
  - CLM Mono-contrato (optimizado por tipología: préstamos, arrendamientos, arras, seguros)
  - CLM General / Posición Contractual (gestión de portafolio contractual como activo estratégico)
  - Contract Guardian (agente IA)
  - Visión "Contrato Computable" (autómata de estados)
**Lo que dice la web**: "CLM con motores de reglas" genérico. Las 3 líneas no se distinguen. Sylot, Piezas LEGO, CLM Mono-contrato, Contract Guardian — nada de esto está.
**Impacto**: Un CIO que busca integrar evidencia en sus contratos existentes (Piezas LEGO) ve lo mismo que un CLO que necesita gestión de posición contractual. Son propuestas totalmente distintas.

### BRECHA 5 — LOS ARGUMENTOS LEGALES DECISIVOS SON INVISIBLES
**Lo que sois**: Inversión de carga de prueba (Art. 326.4 LEC), presunción legal de sellos cualificados (Art. 41.2 eIDAS), equivalencia de firma cualificada con manuscrita (Art. 25.2 eIDAS). La tabla "blockchain vs sello no cualificado vs sello CUALIFICADO" es un arma comercial.
**Lo que dice la web**: Menciones vagas a "valor probatorio" sin citar artículos ni explicar el mecanismo legal.
**Impacto**: El Jurista Digital (vuestro buyer persona #1) no tiene razones jurídicas concretas para elegiros.

### BRECHA 6 — LOS BUYER PERSONAS NO TIENEN CONTENIDO DIFERENCIADO
**Lo que sois**: 4 buyer personas con mensajes completamente distintos:
  - Jurista Digital → efectos legales, carga de prueba, jurisprudencia
  - Tecnólogo Corporativo → API REST, 45ms latencia, SOC 2, webhooks
  - Gestor de Riesgo → DORA, NIS2, audit trail, trazabilidad
  - Financiero Innovador → ROI, coste por transacción, ventaja competitiva
**Lo que dice la web**: Un solo mensaje para todos.
**Impacto**: Cada interlocutor se siente como "uno más" en lugar de sentir que le habláis directamente.

### BRECHA 7 — ESPECIFICACIONES TÉCNICAS DE TRUST API AUSENTES
**Lo que sois**: 99.99% uptime, ~45ms latencia, SOC 2 Type II, ISO 27001, JSON-native, snake_case, UUIDs v4, webhooks, 3 entornos (int/pre/pro), SDK TypeScript.
**Lo que dice la web**: Nada técnico.
**Impacto**: El CTO que está evaluando descarta por falta de información técnica.

### BRECHA 8 — CERO CONTENIDO SECTORIAL
**Lo que sois**: 298 escenarios en 18 sectores (Banca 20, Seguros 20, Salud 25, IoT 22, Farma 20, Food 20, Telecom 20, RRHH 18...). Integraciones con SAP, Workday, Dynamics, SharePoint, n8n, Zapier.
**Lo que dice la web**: Genérico. Ningún sector tiene su propio contenido.
**Impacto**: Un director de operaciones de una aseguradora no se ve reflejado en nada.

### BRECHA 9 — EL POSICIONAMIENTO OCÉANO AZUL vs OCÉANO ROJO NO EXISTE
**Lo que sois**: Tenéis una estrategia clara: los servicios legacy de firma/sellos son Océano Rojo (comoditizado, DocuSign compite). La Factoría es Océano Azul (categoría nueva, sin competidor directo).
**Lo que dice la web**: Todo parece Océano Rojo. Trust services genéricos.
**Impacto**: Os auto-posicionáis como commodity cuando vuestra propuesta diferenciada es de infraestructura.

### BRECHA 10 — ACTIVOS DIGITALES: PRODUCTOS SIN CONTEXTO
**Lo que sois**: OpenBrick (inmobiliario regulado), Sylot (préstamos sindicados en blockchain, es TAMBIÉN CLM Mono-contrato), Adhara+. Conexión con Régimen Piloto DLT, supervisión CNMV.
**Lo que dice la web**: Nombres de producto sin profundidad. La conexión Sylot ↔ Contract Tech no existe.
**Impacto**: Perdéis la narrativa de ecosistema integrado.

### BRECHA 11 — GRC COMPASS CORE INFRADESCRITO
**Lo que sois**: 16 módulos especializados, 31 roles RBAC, arquitectura Multi-Tenant con RLS, audit WORM inmutable, multi-dominio (RGPD, Prevención, Canal Denuncias, AI Act, NIS2, DORA, ESG).
**Lo que dice la web**: "16 módulos" y poco más.
**Impacto**: El CISO o DPO no tiene información suficiente para evaluar.

### BRECHA 12 — AIMS CONSOLE APENAS MENCIONADA
**Lo que sois**: Sistema de gestión de IA para registrar, clasificar, monitorizar y evidenciar conformidad de sistemas de IA (ISO 42001, EU AI Act). Mercado urgente con deadlines AI Act.
**Lo que dice la web**: 4 bullet points genéricos.
**Impacto**: Con los deadlines del AI Act, esto debería ser contenido de alta urgencia.

---

## PLAN DE REFACTORIZACIÓN DE CONTENIDOS

### FASE 1 — CAMBIOS ESTRUCTURALES (Prioridad Máxima)

#### 1.1 Nueva página: LA FACTORÍA / TRUST API
- Página dedicada completa como pilar central del sitio
- Secciones:
  * Hero: "Compliance Injection — Una llamada REST, evidencia legal cualificada"
  * El concepto de Deuda Legal con tabla de ejemplos (albaranes, IBAN, APPCC, despidos...)
  * The Stack: 4 Microservicios (Evidence, Signature, Notification, Custody) con specs técnicas
  * El argumento legal: tabla comparativa Blockchain vs Sello no cualificado vs Sello CUALIFICADO
  * Inversión de carga de prueba (Art. 41.2 eIDAS, Art. 326.4 LEC)
  * Integraciones: SAP, Workday, Dynamics, SharePoint, n8n, Zapier, Make, Power Automate
  * Especificaciones técnicas (99.99%, 45ms, SOC 2, JSON-native, webhooks, 3 entornos)
  * Los 3 horizontes de venta como narrativa (prevención litigios → cumplimiento → infraestructura EU 2030)
  * Modelos de entrada: POC → Departamental → Enterprise
  * CTA a demo

#### 1.2 Restructurar CONFIANZA DIGITAL como las 3 capas
- Capa 1: La Factoría (link a página dedicada)
- Capa 2: Soluciones LegalTech EADTrust (Signature Manager, Noticeman, eArchiving, Credential Manager)
- Capa 3: GoCertius SuperApp (+40K evidencias, premios)
- Servicios QTSP Legacy EADTrust

#### 1.3 Restructurar CONTRACT TECH con las 3 líneas
- Línea 1: Piezas LEGO — componentes modulares vía API
  * Flujo integrado: Pre-contratación → Formalización → Ejecución → Terminación
  * Concepto de evidencia cualificada en cada fase
- Línea 2: CLM Mono-contrato — por tipología
  * Préstamos (incl. Sylot), Arrendamientos, Arras
  * Modelos: embebido en plataforma de terceros o como plataforma propia
- Línea 3: CLM General / Posición Contractual
  * Dashboard ejecutivo, Contract Guardian (IA), gestión de portafolio
  * Diferencia clara vs CLM convencional (Izertis, Ironclad, Agiloft)
- Visión "Contrato Computable" (autómata de estados, reglas declarativas)

#### 1.4 Ampliar LEGALTECH & IA
- AIMS Console con detalle: registro, clasificación, monitoreo, evidencia (ISO 42001, EU AI Act)
- GRC Compass Core: 16 módulos, 31 roles RBAC, WORM, multi-dominio con lista completa
- Legal AI Products: asistentes jurídicos, NLP jurídico, co-desarrollo con Garrigues
- AI Compliance Services: cumplimiento AI Act, guardarriles, análisis de sistemas IA

#### 1.5 Ampliar ACTIVOS DIGITALES con productos
- OpenBrick: detalle de tokenización inmobiliaria bajo Régimen Piloto DLT
- Sylot / Adhara+: conexión con Contract Tech (CLM Mono-contrato de préstamos sindicados)
- CBDC y Bonos Digitales: marco regulatorio (CNMV, BdE, ESMA)
- ESG y Carbono: trazabilidad blockchain

### FASE 2 — CONTENIDO NUEVO (Alta Prioridad)

#### 2.1 Página de SECTORES (nueva)
Página hub con tarjetas por sector, cada una con:
- Dolor específico del sector
- Escenarios de integración Trust API relevantes
- Regulación aplicable
- Demo o caso de uso disponible

Sectores prioritarios:
- Banca & Fintech (DORA, NIS2, KYC, scoring IA)
- Seguros & Insurtech (IDD, contratación telefónica, siniestros)
- Salud & Digital Health (consentimiento informado, Ley 41/2002)
- Logística & Supply Chain (albaranes, cadena frío)
- RRHH & Laboral (registro jornada RD 8/2019, despidos)
- Alimentación & APPCC (registros APPCC, cadena frío IoT)
- PropTech & Inmobiliario (arras, arrendamientos, tokenización)
- Telecomunicaciones (contratación, portabilidad)
- Farmacéutico (GMP, clinical trials, farmacovigilancia)

#### 2.2 Sección "DEUDA LEGAL" en homepage
- Bloque visual potente justo después del hero o de soluciones
- Tabla interactiva: "Operación → Sin Trust API → Con Trust API → Riesgo"
- Albaranes, aprobaciones de pago, cambios IBAN, consentimientos RGPD, APPCC, decisiones IA, despidos, versiones contrato
- CTA: "Calcula tu Deuda Legal" o "Descubre cuántas operaciones de tu organización son Deuda Legal"

#### 2.3 Demos / Casos de uso (nueva sección o página)
12 demos live documentadas:
- Contratación de seguro (timestamps pre-firma)
- Plataforma inmobiliaria
- Consentimiento web (LSSI-CE + RGPD)
- Alquiler de vehículos
- Gestión concesionarios
- Contratación telefónica
- Albarán digital
- Fotografía de siniestro
- Contrato de alquiler
- Aceptación crédito SMS
- Consentimiento informado
- Control APPCC

### FASE 3 — MEJORA DE CONTENIDO EXISTENTE (Media Prioridad)

#### 3.1 Homepage — Restructuración
- Hero: mantener, pero añadir concepto de Deuda Legal
- Soluciones: añadir La Factoría como 5ª card prominente (o como la principal)
- Nueva sección "Deuda Legal" visual
- Triángulo de legitimidad: OK como está
- Stats: añadir "298 escenarios de integración" y "18 sectores"
- Partners: OK

#### 3.2 Nosotros — Ampliar con modelo operativo
- Explicar claramente: "g-digital diseña → EADTrust opera"
- Arquitectura de 3 capas como diferenciador
- El concepto de Océano Azul (sin mencionar "océano azul" literalmente, pero posicionar que CREAMOS una categoría nueva)

#### 3.3 Recursos — Contenido alineado con Content Skill
- Blog actual es correcto pero los artículos necesitan más profundidad
- Añadir categorización por buyer persona además de por línea
- Keywords SEO de cada línea (del skill content §4)
- Whitepapers como gated content

#### 3.4 Contacto — Segmentación
- Añadir opción "La Factoría / Trust API" en selector de área de interés
- Considerar formulario adaptativo por buyer persona

### FASE 4 — CONTENIDO EDITORIAL (Prioridad Continua)

#### 4.1 Nuevos artículos de blog alineados con skills
- "¿Qué es la Deuda Legal y por qué debería preocuparte?"
- "Trust API: cómo una llamada REST convierte operaciones en evidencia legal"
- "Blockchain vs sellos cualificados eIDAS: ¿cuál tiene valor probatorio?"
- "Compliance Injection: la nueva categoría de infraestructura digital"
- "Los 3 niveles de madurez en gestión contractual"
- "AI Act: countdown para el cumplimiento — tu checklist con AIMS Console"
- "Registro de jornada (RD 8/2019): por qué tus logs no valen ante un juez"
- "eIDAS 2.0 y la PKI pública del futuro: ¿está tu organización preparada?"

#### 4.2 Páginas de producto individuales
Cada producto nombrado en los skills debería tener al menos una sección o card con:
- GoCertius (con métricas y premio)
- Signature Manager
- Noticeman
- eArchiving / Credential Manager
- AIMS Console
- GRC Compass Core
- Contract Guardian
- OpenBrick
- Sylot

---

## PRIORIZACIÓN RECOMENDADA

| Prioridad | Acción | Impacto | Esfuerzo |
|-----------|--------|---------|----------|
| P0 | Crear página de La Factoría / Trust API | MÁXIMO — vuestra prioridad #1 no existe | Alto |
| P0 | Añadir sección "Deuda Legal" en homepage | ALTO — hook narrativo más potente | Medio |
| P1 | Restructurar Confianza Digital (3 capas) | ALTO — producto mal representado | Medio |
| P1 | Restructurar Contract Tech (3 líneas) | ALTO — 3 propuestas de valor como 1 | Medio |
| P1 | Ampliar LegalTech & IA (AIMS + GRC) | ALTO — mercado urgente por AI Act | Medio |
| P2 | Crear página de Sectores | ALTO — 298 escenarios invisibles | Alto |
| P2 | Crear sección de Demos/Casos de uso | MEDIO — prueba social y tangibilidad | Medio |
| P2 | Ampliar Activos Digitales | MEDIO — productos sin contexto | Bajo |
| P3 | Nuevos artículos de blog | MEDIO — SEO y nurturing | Continuo |
| P3 | Segmentar contacto por buyer persona | BAJO — optimización de conversión | Bajo |

---

## NOTA IMPORTANTE SOBRE TONO

Los skills definen claramente:
- **SÍ**: Autoridad técnica sin arrogancia, rigor sin rigidez, datos concretos, regulaciones específicas
- **NO**: Superlativos vacíos, jerga de startup, urgencia artificial, genéricos
- **SIEMPRE**: Conectar capacidad técnica con valor de negocio
- **TRIPLE CAPA**: Todo contenido debe tener profundidad técnica + conexión de negocio + perspectiva estratégica

El contenido actual de la web es correcto en tono pero insuficiente en profundidad y especificidad. 
La refactorización debe mantener el tono pero multiplicar x5 la densidad de información relevante.
