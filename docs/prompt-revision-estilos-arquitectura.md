# Prompt — Revisión de estilos y arquitectura (Claude Code)

> Abre Claude Code **en la carpeta del proyecto Astro**:
> `/Users/moisesmenendez/Downloads/DESARROLLO/gdigital/g-digital-astro`
> ⚠️ NO en `~/Dropbox/DESARROLLO/g_digital_nueva web` (ese es el sitio HTML **antiguo**). Luego pega esto como primer mensaje.

---

Actúa como un revisor senior de front-end y diseño de producto. Vas a auditar **estilos y arquitectura** de esta web (Astro 4 estático + Tailwind 3, marca g-digital / Grupo Garrigues).

**PASO 0 — verifica el directorio antes de nada:** ejecuta `pwd` y confirma que existen `astro.config.mjs`, `tailwind.config.mjs` y `src/pages/index.astro`. Si en su lugar ves `index.html`, `css/style.css`, `js/main.js` o un `CLAUDE.md` que dice "HTML/CSS/JS vanilla", **DETENTE**: estás en el repo equivocado (el sitio antiguo). Reporta tu `pwd` y pide reabrir la sesión en `/Users/moisesmenendez/Downloads/DESARROLLO/gdigital/g-digital-astro`.

**Antes de nada, lee y respeta el contexto del repo:**
1. `CLAUDE.md` (marca oficial, tokens, guardrails, estructura, gotchas de deploy).
2. `CONTENIDOS-MIGRACION.md` y `../Web_Refactor_v4/PLAN_Refactor_Web_g-digital_v4.md` (plan y origen del contenido).
3. `tailwind.config.mjs`, `src/styles/global.css`, `src/consts.ts`, `src/data/articulos.ts`, `src/layouts/*`, `src/components/*`, `src/pages/**`.

**Modo de trabajo:** primero **solo lectura** — NO edites código todavía. Entrega el informe y un plan; espera mi OK antes de tocar nada. Cuando lo apruebe, implementa en una rama, no en `main`.

## 1. Estilos / Design system
- **Fidelidad a la marca oficial:** confirma que solo se usan los tokens (`green #0CF25D`, `lima #CCF943` escaso, `teal #007362`, `navy #143259`, `gris #FAFAFA`, `ink/coal/cloud`) y las fuentes **Poppins/Rubik/JetBrains Mono**. Marca cualquier color/hex inline fuera de token, fuentes ajenas, o restos del branding antiguo (dorado, cream, Playfair, Manrope, `#004438`, `#003030`, `#009A77`…).
- **Regla "verde escaso":** señala pantallas con más de un acento verde/lima fuerte; el verde debe marcar la acción que importa, no decorar.
- **Consistencia:** escala de espaciado, radios, estilos de tarjeta, ritmo de secciones, patrones repetidos que deberían ser componentes. Detecta divergencias entre páginas.
- **Responsive:** móvil/tablet/desktop; nav y menú móvil; overflow; el bloque de código de La Factoría y los wireframes SVG en pantallas pequeñas.
- **Accesibilidad (WCAG AA):** contraste de `cloud`/`green`/`lima` sobre negro (¡el verde sobre negro y texto verde pequeño son sospechosos!), estados de foco visibles, orden de encabezados (h1→h2→h3), `alt`/aria, tamaño de áreas táctiles, cobertura de `prefers-reduced-motion`, tarjetas-enlace (`<a>` envolviendo bloques) bien semánticas.
- **Anti-IA / humano:** según CLAUDE.md, marca cualquier cosa que se lea genérica o "de plantilla IA".

## 2. Arquitectura
- **Estructura Astro y reutilización:** valora `pages`/`layouts`/`components`/`data`/`consts`. Detecta **duplicación de markup** (heros, secciones, tarjetas, el patrón "label + h2 + grid") que debería extraerse a componentes (p. ej. `Section`, `Card`, `StatGrid`, `CTA`). ¿`Linea.astro` se aprovecha bien?
- **Modelado de contenido:** ¿conviene migrar artículos y/o páginas de solución a **Astro Content Collections** (con `schema` y tipos) de cara a escalar Recursos y el catálogo de escenarios (F3)? Recomienda enfoque y estructura de carpetas.
- **JS de cliente** (`Base.astro`: reveal, contadores, menú; `recursos.astro`: filtros): corrección, rendimiento, duplicación, TS en `<script>`, y si algo debería ser una *island* o quedarse vanilla.
- **Rendimiento / Core Web Vitals:** carga de fuentes (preconnect/`display=swap`), **Phosphor por unpkg** (¿pesa de más?, alternativas: subset/local/SVG), estrategia de imágenes (`astro:assets`), tamaño de CSS, CLS por animaciones de reveal/contadores.
- **SEO:** títulos/descripciones/canonical/OG por página; **sitemap** (se quitó `@astrojs/sitemap` porque rompía el build — propón un re-add compatible o un sitemap manual); `robots.txt`.
- **Salud de build y CI:** confirma `astro build` limpio; propón `astro check`/typecheck, ESLint/Prettier (+ plugin Astro), y checks automáticos de "enlaces rotos" y "contador nunca a 0".
- **Enlaces muertos / placeholders:** `href="#"`, stubs (`nosotros`, cuerpos de artículo en `recursos`), CTAs que no llevan a contenido.
- **Escalabilidad F2/F3:** catálogo de 298 escenarios (datos + buscador cliente tipo Fuse/Pagefind), **i18n ES/EN**, y portabilidad de tokens (posible futuro Drupal de Garrigues).
- **Deploy:** revisa `.vercel`, `.vercelignore`, y respeta los gotchas del CLAUDE.md (zsh `#`, ejecutar desde la carpeta, NO re-añadir sitemap incompatible, caché de alias).

## 3. Entregable (en este orden)
1. **Resumen ejecutivo** (5-8 líneas): salud de estilos y de arquitectura.
2. **Hallazgos priorizados** P0 / P1 / P2. Cada uno con: `archivo:línea`, qué falla, por qué importa, y **fix concreto** (con el snippet si aplica).
   - P0 = rompe marca, accesibilidad o build.
   - P1 = consistencia, rendimiento, escala.
   - P2 = mejoras opcionales.
3. **Mapa de arquitectura**: actual vs. recomendado (qué componentes/colecciones crear).
4. **Plan de remediación por fases** con esfuerzo estimado (S/M/L).

**Restricciones:** mantén el sitio **estático en Astro**; respeta marca y guardrails de `CLAUDE.md`; nada de estética genérica (violeta/glassmorphism/blobs); no re-añadas `@astrojs/sitemap` sin verificar compatibilidad. No edites hasta que apruebe el plan.
