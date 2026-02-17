# BACKLOG OPERATIVO  
## g-digital – Reforma Integral Web  
Versión: 1.0  
Estado: Ready for implementation  

---

# EPIC 1 — Arquitectura de Información & Navegación Global

## Feature 1.1 — Navegación principal

### User Story 1.1.1
Como usuario, quiero una navegación clara para acceder a las áreas clave del sitio.

**Menú principal:**
- Nosotros
- Soluciones
- Recursos
- Contacto
- Selector idioma ES / EN

#### Acceptance Criteria
- [ ] Menú visible en desktop y mobile.
- [ ] Sticky header funcional.
- [ ] Selector idioma persistente.
- [ ] Accesibilidad WCAG 2.1 AA (focus visible, navegación teclado).

#### Dependencias
- Diseño UI aprobado
- Sistema i18n definido

---

# EPIC 2 — Home & Claim Estratégico

## Feature 2.1 — Hero con claim Derecho Computable

### User Story 2.1.1
Como visitante corporativo, quiero entender inmediatamente la propuesta de valor diferencial.

**Claim obligatorio:**
> Derecho computable para procesos críticos.

#### Acceptance Criteria
- [ ] Claim visible above the fold.
- [ ] Subclaim explicativo.
- [ ] CTA primario: Explorar soluciones.
- [ ] CTA secundario: Hablar con un experto.
- [ ] Track event `cta_click`.

---

## Feature 2.2 — Integración transversal del claim

#### Acceptance Criteria
- [ ] Presente en Home.
- [ ] Presente en Nosotros.
- [ ] Presente en página Factoría.
- [ ] Presente en Footer (versión reducida).

---

# EPIC 3 — Confianza Digital

## Feature 3.1 — Landing Confianza Digital

Ruta: `/soluciones/confianza-digital`

### User Story 3.1.1
Como responsable de cumplimiento, quiero conocer las capacidades eIDAS.

#### Secciones obligatorias:
- Evidencia digital (GoCertius)
- Firma electrónica (Signature Manager)
- Custodia digital (E-Archiving)
- Integración API

#### Acceptance Criteria
- [ ] CTA “Ver capacidades”
- [ ] CTA “Contactar para integración”
- [ ] Enlace a https://www.gocertius.io/
- [ ] Enlace a https://api.gocertius.gocertius.io/apidoc
- [ ] Enlace a Enterprise Suite
- [ ] Eventos analítica activos.

---

## Feature 3.2 — Mención QTSP EAD Trust

### User Story 3.2.1
Como usuario institucional, quiero confirmar el estatus regulatorio.

#### Texto obligatorio:
EAD Trust es Prestador Cualificado conforme Reglamento (UE) 910/2014.  
La cualificación aplica por servicio y según Trusted List oficial.

#### Acceptance Criteria
- [ ] Texto en sección “Notas legales”.
- [ ] Enlace a Trusted List España.
- [ ] Enlace a EU Trusted List Browser.
- [ ] No afirmaciones generalistas.

#### Compliance
- Reglamento eIDAS
- Validación legal previa publicación

---

# EPIC 4 — Tecnología de Contratos

## Feature 4.1 — Landing Tecnología de Contratos

Ruta: `/soluciones/tecnologia-de-contratos`

#### Secciones:
- Diagnóstico
- Diseño
- Digitalización
- Firma
- Auditoría

#### Acceptance Criteria
- [ ] CTA “Ver enfoque por fases”
- [ ] CTA “Solicitar workshop”
- [ ] Enlace Signature Manager
- [ ] Evento `workshop_request`

---

# EPIC 5 — Activos Digitales

## Feature 5.1 — Landing Activos Digitales

Ruta: `/soluciones/activos-digitales`

#### Secciones:
- Tokenización
- Smart Contracts
- Infraestructura regulada
- Cumplimiento eIDAS 2.0

#### Acceptance Criteria
- [ ] CTA “Explorar iniciativas”
- [ ] CTA “Hablar con el equipo”
- [ ] Track `cta_click_activos`

---

# EPIC 6 — Servicios GRC / IA

## Feature 6.1 — Landing GRC / IA

Ruta: `/soluciones/grc-ia`

#### Secciones:
- Gobierno de IA
- AI Act readiness
- Compliance automatizado
- Evidencia trazable

#### Acceptance Criteria
- [ ] CTA “Ver demo”
- [ ] CTA “Solicitar piloto”
- [ ] Evento `demo_request`

---

# EPIC 7 — Factoría de Confianza Digital (EAD Factory)

## Feature 7.1 — Página Factoría

Ruta: `/factoria`

#### Secciones:
- Modelo Factory
- Infraestructura QTSP
- Integración API
- Arquitectura modular
- Casos corporativos

#### Enlaces obligatorios:
- https://www.eadtrust.eu/en/integration-ead-factory/

#### Acceptance Criteria
- [ ] Arquitectura explicada visualmente.
- [ ] Enlace API visible.
- [ ] Claim Derecho Computable integrado.
- [ ] Evento `api_click`.

---

# EPIC 8 — Recursos / Blog

## Feature 8.1 — Estructura Blog

Ruta: `/recursos/blog`

#### Taxonomía obligatoria:
- eIDAS
- IA
- Web3
- GRC
- Confianza Digital
- Derecho Computable

#### Acceptance Criteria
- [ ] Filtros funcionales.
- [ ] URLs SEO friendly.
- [ ] Schema Article.
- [ ] Sitemap actualizado.
- [ ] Canonical configurado.

---

## Feature 8.2 — Migración SEO

#### Acceptance Criteria
- [ ] 301 uno a uno.
- [ ] Mantener fechas y autores.
- [ ] Meta title < 60 chars.
- [ ] Meta description < 155 chars.

---

# EPIC 9 — Formulario Contacto

## Feature 9.1 — Implementación formulario

Campos obligatorios:
- Nombre
- Email
- Empresa
- Cargo
- País
- Línea de interés
- Mensaje
- Preferencia contacto

#### Acceptance Criteria
- [ ] Validación frontend y backend.
- [ ] Mensaje éxito.
- [ ] Mensaje error.
- [ ] Accesibilidad WCAG.

---

## Feature 9.2 — RGPD

#### Acceptance Criteria
- [ ] Checkbox obligatorio aceptación política.
- [ ] Link a política privacidad.
- [ ] Cumplimiento art. 13 RGPD.

---

# EPIC 10 — CRM & Analítica

## Feature 10.1 — CRM Integration

Campos ocultos:
- linea_interes
- intencion
- idioma
- fuente_utm
- pagina_origen

#### Acceptance Criteria
- [ ] Prefill correcto desde CTAs.
- [ ] Registro correcto en CRM.
- [ ] Test QA aprobado.

---

## Feature 10.2 — Eventos analíticos

Eventos obligatorios:
- cta_click
- card_click
- form_submit
- form_success
- form_error
- blog_filter
- api_click

#### Acceptance Criteria
- [ ] Eventos visibles en Tag Manager.
- [ ] Validación en entorno staging.

---

# EPIC 11 — Compliance

## Feature 11.1 — Cookies

#### Acceptance Criteria
- [ ] Cumplimiento Guía AEPD 2023.
- [ ] Igual visibilidad aceptar/rechazar.
- [ ] Consent Mode configurado.

---

## Feature 11.2 — Accesibilidad

#### Acceptance Criteria
- [ ] WCAG 2.1 AA validado.
- [ ] Test Lighthouse > 90.
- [ ] Navegación teclado completa.

---

# DEFINICIÓN DE DONE (GLOBAL)

- Todas las 4 líneas publicadas.
- QTSP correctamente documentado.
- Blog funcional con taxonomía.
- Eventos analíticos activos.
- CRM integrado.
- Accesibilidad validada.
- Cumplimiento RGPD y cookies.
- QA técnico aprobado.
- Validación legal final completada.

---

# PRIORIDAD SUGERIDA

P0:
- Home
- Confianza Digital
- QTSP compliance
- Contacto + CRM

P1:
- Factoría
- Tecnología de Contratos
- GRC/IA

P2:
- Blog SEO refinado
- Mejoras UX avanzadas

---

