# PLAN MAESTRO DE CONFIRMACION Y REFACTORIZACION
## Analisis de 5 PRDs vs Estado Actual del Sitio
### 28 Feb 2026

---

## RESUMEN: Lo que tenemos es MUCHO, pero los PRDs revelan gaps criticos

El sitio actual (27 paginas) ya supera con creces la web corporativa g-digital.garrigues.com
en profundidad de contenido. Pero los 5 PRDs definen un nivel de EXCELENCIA que requiere
cerrar gaps estructurales antes de que el contenido brille.

---

## I. LO QUE ESTA BIEN Y SE CONFIRMA (no tocar, iterar)

| Elemento | Estado | PRD Ref | Nota |
|----------|--------|---------|------|
| Homepage "Infraestructura Digital de Gestion del Riesgo Legal" | OK | PRD Tecnico | Titular alineado con vision |
| La Factoria / Trust API (pagina completa) | OK | PRD Refundido §2.2 | Producto estrella bien descrito |
| 4 microservicios (Evidence, Signature, Notification, Custody) | OK | PRD Refundido §2.3 | Stack claro |
| Concepto Deuda Legal | OK | PRD Refundido §2.2 | Hook narrativo principal |
| Tabla "Sin Trust API vs Con Trust API" | OK | PRD Tecnico | Comparativa visual clave |
| Inversion carga de prueba (Art. 326.4 LEC) | OK | Deep Research | Base normativa correcta |
| 8 paginas sectoriales con escenarios | OK | PRD Refundido §7 P2-B | Adelantado respecto al roadmap |
| 8 articulos SEO (Derecho Computable, Deuda Legal, QDLT, etc.) | OK | PRD Refundido §8.1 P0-A | Explicabilidad excelente |
| Mapa de Conocimiento D3.js | OK | PRD Tecnico §Mapa | Elemento "wow" confirmado |
| Nosotros con equipo real + logos SVG | OK | PRD Tecnico §Nosotros | Human-in-the-loop UX |
| PDFs one-pager descargables | OK | PRD Refundido §9.1 proof_kit | Proof kits implementados |
| Contract Tech con 3 lineas | OK | PRD Refundido §2.3 L2 | Piezas LEGO/Mono/Posicion |
| LegalTech & IA como Agencia IA Legal | OK | Cierre 1 | 3 capas (Garrigues/g-digital/Trust API) |
| Valores actualizados (Confianza/Innovacion/Adaptabilidad/Rigor) | OK | Interno | Alineados con cultura |
| Tipografia Poppins+Rubik | OK | Branding PDF | Corporativa |
| Nav oscura | OK | Branding PDF | "Black backgrounds preferred" |
| Formulario cualificado con Cargo | OK | UX SKILL | Filtra, no maximiza leads |

---

## II. GAPS CRITICOS IDENTIFICADOS EN LOS PRDs

### GAP 1 — ENTERPRISE SUITE NO EXISTE (P0)
**PRD Refundido §2.4 + Cierre 1:**
Enterprise Suite es una suite corporativa que AGREGA Signature Manager + Noticeman + eArchiving +
Credential Manager. Es la "sustituta de DocuSign" para grandes corporaciones.
Actualmente NO tiene pagina propia. La pagina de Confianza Digital menciona los productos individuales
pero no la suite como plataforma.

**Accion:** Crear /soluciones/enterprise-suite.html como producto g-digital designed.
Concepto en g-digital web + enlace a EADTrust para detalle comercial.

### GAP 2 — CATALOGO DE ESCENARIOS /escenarios NO EXISTE (P0-P1)
**PRD Refundido §9 + Cierre 2 + Deep Research:**
Es EL feature mas importante segun los PRDs. Un catalogo navegable con filtros por sector, operacion,
canal, microservicio, nivel eIDAS, normativa. Cada escenario con: titulo, resumen, pasos, endpoint,
normativa, proof kit descargable, CTA contextual.

Los escenarios NO son 298 fichas pre-escritas sino combinaciones de la API QTSPinhouse.
Fase 1: 20-30 escenarios MVP. Fase 2: 100+. Fase 3: 298.

Actualmente tenemos escenarios DENTRO de las paginas sectoriales pero NO un catalogo unificado
filtrable. El CTA "Ver escenarios" redirige a contacto (hallazgo critico del Deep Research).

**Accion:** Crear /escenarios/ como hub + JSON index + busqueda cliente-side (Fuse.js).
Empezar con 30 escenarios MVP (3-4 por sector).

### GAP 3 — PAGINAS LEGALES NO EXISTEN (P0-C BLOCKER)
**PRD Refundido §8.3 + Deep Research:**
NO hay Aviso Legal, Politica de Privacidad, Politica de Cookies en el footer.
Para una empresa que vende CONFIANZA DIGITAL, esto es una contradiccion fatal.
El formulario de contacto NO tiene micro-copy RGPD (finalidad, base legal, derechos, responsable).

**Accion:** Crear /legal/aviso-legal.html, /legal/privacidad.html, /legal/cookies.html.
Anadir bloque RGPD al formulario de contacto.
Anadir links legales en footer de TODAS las paginas.

### GAP 4 — CLAIMS SIN VERIFICAR / CONTADORES EN 0 (P0-B)
**PRD Refundido §4 + §6 + Cierre 3:**
Los contadores JS pueden mostrar 0 si el script falla. El PRD exige fallback estatico.
Claims como "99.99% uptime" y "~45ms" necesitan lenguaje de objetivo, no garantia.
"Respuesta en <24h" no tiene SLA formal → reescribir.

**Accion:** Hardcodear valores de fallback (+298, +40.000, +18) en HTML.
Implementar Claim Registry. Reescribir claims segun tabla del Cierre 3.

### GAP 5 — NAV SIN SECTORES NI ESCENARIOS (P1-E)
**PRD Refundido §10.1:**
La navegacion actual omite Sectores y Escenarios. Si el objetivo son journeys sectoriales
y el catalogo es el pilar de evaluacion, no pueden estar escondidos.

**Accion:** Anadir "Sectores" y "Escenarios" (cuando exista) en nav principal.

### GAP 6 — GLOSARIO TECNICO-LEGAL NO EXISTE (P0-A)
**PRD Refundido §8.1 + PRD Tecnico §Glosario:**
Un glosario minimo accesible desde Recursos: "Deuda Legal", "Compliance Injection", "QTSP",
"QES", "ERDS", "WORM", "LTV", "AES", "QDLT". Fundamental para explicabilidad.

**Accion:** Crear /recursos/glosario.html con definiciones interlinked.

### GAP 7 — ANALYTICS/CMP NO IMPLEMENTADO (Cierre 4)
**Cierre 4:**
Plausible (cookieless, siempre activo) + GA4 (solo con opt-in).
Banner de cookies minimalista. Eventos definidos.
NO hay analytics implementados actualmente.

**Accion:** Implementar Plausible script (1 linea). Crear banner cookies ligero.
Configurar eventos: view_solution, view_sector, submit_contact_form, download_spec.

### GAP 8 — NAMING INCONSISTENTE (P0)
**PRD Refundido §3 + Cierre 1:**
Mezcla de canon tecnico y comercial en algunas paginas.
"Notification Manager" aparece en contexto comercial (deberia ser "Noticeman").
"Custody Manager" aparece donde deberia ser "eArchiving".

**Accion:** Auditar todas las paginas. En contexto DX/API: canon tecnico.
En contexto producto: canon comercial. NUNCA mezclar sin tooltip.

### GAP 9 — CASO MAPFRE COMO CASE STUDY
**Informe MAPFRE:**
Documento real de proyecto con MAPFRE que demuestra EXACTAMENTE como funciona
el framework Trust API en una gran aseguradora. Procedimiento hibrido:
Contrato + CTEAJE + eIDAS + QArchiving. Clausula de pacto de digitalizacion.
RACI + KPIs. Recomendaciones de conservacion de papel.

**Accion:** Crear un case study /recursos/caso-mapfre.html (anonimizado o con permiso)
como prueba social del maximo nivel.

### GAP 10 — ACCESIBILIDAD WCAG 2.2 AA (P1-C)
**Deep Research + PRD Refundido §11.4:**
Mapa D3 no cumple AA (falta listado HTML alternativo, navegacion por teclado).
Formularios sin errores accesibles. Contraste no verificado en todas las paginas.

**Accion:** El mapa D3 ya tiene listado alternativo (#node-list). Falta:
verificar contraste, anadir aria-labels, focus management en formularios.

---

## III. PLAN DE EJECUCION PRIORIZADO

### SPRINT 1: P0 — Credibilidad y Cumplimiento (1-2 semanas)
1. Paginas legales (Aviso Legal, Privacidad, Cookies) + links en footer
2. RGPD en formulario de contacto
3. Hardcodear fallbacks en contadores (nunca 0)
4. Reescribir claims segun Cierre 3
5. Auditar naming (canon tecnico vs comercial)
6. Sectores en nav principal

### SPRINT 2: P0-P1 — Enterprise Suite + Glosario (1-2 semanas)
7. Crear /soluciones/enterprise-suite.html
8. Crear /recursos/glosario.html
9. Implementar Plausible analytics (1 linea)
10. Banner cookies minimalista

### SPRINT 3: P1 — Catalogo de Escenarios MVP (2-4 semanas)
11. Crear modelo de datos JSON para 30 escenarios
12. Crear /escenarios/ hub con filtros (Fuse.js)
13. Crear paginas de detalle /escenarios/:slug
14. Proof kits descargables por escenario
15. CTA contextual con parametros precargados

### SPRINT 4: P1 — Calidad y Accesibilidad (1-2 semanas)
16. WCAG 2.2 AA en rutas criticas
17. Sitemap.xml + JSON-LD schema en todas las paginas
18. Caso MAPFRE como case study
19. Performance: WebP, lazy loading, Lighthouse >90

### SPRINT 5: P2 — Expansion (ongoing)
20. Ampliar catalogo a 100+ escenarios
21. Demos first-party (pre-render sin lovable.app)
22. Area clientes (dashboards consumo API)
23. Calculadora interactiva de Deuda Legal

---

## IV. DECISION SOBRE TIPOGRAFIA

Los PRDs tienen discrepancias en tipografia:
- PRD Refundido §13.2: "Playfair Display + Manrope + JetBrains Mono"
- PRD Tecnico §10: "Sans-serif moderna (Inter, Roboto)"
- Branding PDF: "Poppins (titulares) + Rubik (cuerpo)"
- UX SKILL: "Montserrat, Inter, o equivalente"

**RECOMENDACION:** Mantener Poppins + Rubik (branding PDF oficial).
Es la fuente del branding real del negocio. Los PRDs fueron escritos antes
del branding update.

---

## V. CONCLUSION

El sitio actual es EXCELENTE en contenido (27 paginas, 10 infografias, 8 sectores,
8 articulos, grafo D3, PDFs, fotos reales, logos SVG). Pero los PRDs revelan que
para ser RADICAL necesita:

1. **CATALOGO DE ESCENARIOS** — el game-changer que transforma la web de "informativa" a "plataforma de evaluacion tecnica autonoma"
2. **CUMPLIMIENTO LEGAL** — sin legales, una web que vende confianza no tiene credibilidad
3. **ENTERPRISE SUITE** — el producto que compite con DocuSign no puede ser invisible
4. **CLAIMS VERIFICADOS** — cada numero con owner, fuente y fallback

Los 4 primeros sprints (6-10 semanas) cierran todos los gaps P0 y P1.
El sitio resultante seria la referencia del sector LawTech en Europa.
