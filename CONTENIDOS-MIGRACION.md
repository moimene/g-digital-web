# Mapa de migración de contenidos — proyecto anterior → Astro v4

> **Objetivo: no perder nada de lo ya trabajado.** Todo el copy del proyecto anterior está
> rescatado **verbatim** en `src/content/_rescatado/*.md` (fuente de verdad para la migración),
> y aquí se mapea cada página/sección al nuevo sitio Astro con su estado.

## Fuentes rescatadas (verbatim, no editar)
Volcadas desde `nueva web g_digital/` el 17-jun-2026:

| Archivo rescatado | Origen | Uso |
|---|---|---|
| `migrada-confianza-digital.md` | soluciones/confianza-digital.html | ✅ migrado a `confianza-digital.astro` |
| `migrada-factoria.md` | soluciones/factoria.html | ✅ migrado a `la-factoria.astro` |
| `migrada-enterprise-suite.md` | soluciones/enterprise-suite.html | ✅ migrado a `enterprise-suite.astro` |
| `migrada-contract-tech.md` | soluciones/contract-tech.html | ✅ migrado a `contract-tech.astro` |
| `migrada-activos-digitales.md` | soluciones/activos-digitales.html | ✅ migrado a `activos-digitales.astro` |
| `migrada-legaltech-ia.md` | soluciones/legaltech-ia.html | ✅ migrado a `grc-ia.astro` |
| `desplegado-index.md` | sitio desplegado / index | ✅ refundido en `index.astro` (home nueva) |
| `desplegado-nosotros.md` | sitio desplegado / nosotros | ⏳ pendiente Fase 2 (`nosotros.astro` es stub) |
| `desplegado-contacto.md` | sitio desplegado / contacto | ✅ base de `contacto.astro` (+ bloque RGPD) |

## Mapa página → página (IA nueva)

| Antes | Ahora (ruta Astro) | Estado | Notas |
|---|---|---|---|
| index.html | `/` (`index.astro`) | ✅ Completo | Home reordenada: Revelar→Educar→Evaluar→Convertir |
| soluciones/confianza-digital.html | `/soluciones/confianza-digital` | ✅ Completo (F1) | 5 capas, modelo, eIDAS 2.0 |
| soluciones/factoria.html | `/soluciones/la-factoria` | ✅ Completo | The Stack (4 µservicios) + **MCP** nuevo |
| soluciones/enterprise-suite.html | `/soluciones/enterprise-suite` | ✅ Migrado | Módulos + soberanía digital |
| soluciones/contract-tech.html | `/soluciones/contract-tech` | ✅ Migrado | 3 dimensiones + contrato computable |
| soluciones/activos-digitales.html | `/soluciones/activos-digitales` | ✅ Migrado | OpenBrick + otras áreas + propuesta |
| soluciones/legaltech-ia.html | `/soluciones/grc-ia` | ✅ Migrado | **Renombrado** a "GRC & IA" (Línea 04) |
| nosotros.html | `/nosotros` | ⏳ Stub | Pendiente F2 (contenido rescatado disponible) |
| recursos.html | `/recursos` | ⏳ Stub | Pendiente F3 (Content Collections / CMS) |
| contacto.html | `/contacto` | ✅ Migrado | Form + **bloque RGPD** (P0-C del PRD) |
| escenarios.html (catálogo 298) | `/escenarios` | 🔜 Fase 3 | Modelo de datos + buscador (Fuse/Pagefind) |

## Cambios de naming aplicados
- **LegalTech & IA → GRC & IA** (coherente con la "nueva línea" descrita por el usuario).
- **La Factoría** sale del grupo Soluciones y gana entrada propia en nav (producto estrella / puerta del perfil técnico).
- Posicionamiento global: **"infraestructura legal"** (no "de confianza"); "Confianza Digital" se mantiene como nombre de la Línea 01.

## Sancionado por capas (Confianza Digital)
Infra (Factoría/Trust API + **MCP**) · Plataforma (Enterprise Suite) · Producto (Signature/Notice/eArchiving/Credential) · Experiencia (GoCertius) · Base QTSP (EADTrust).

## Pendiente de rescatar/decidir (no bloquea F1)
- Catálogo de **298 escenarios** (estaba en el dev; reconstruir como datos + buscador en F3).
- Página **escenarios.html** y **recursos** con blog real (Content Collections).
- Docs maestros adicionales en `nueva web g_digital/`: `g-digital_Contenidos_Maestros_Web.docx`, `auditoria-contenidos-4-lineas-negocio.docx`, `g-digital-PRD.md` — revisar para enriquecer F2/F3.
- Logos/recursos gráficos oficiales (PDF de marca): incorporar SVGs reales del logo y wireframes propios.
