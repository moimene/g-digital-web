# Rediseño editorial v4 — memoria de decisiones (rama `codex/redesign-editorial-gdigital`)

> Fecha: 2026-08-02 · Estado: R0–R4 completados, preview desplegado (protegido por SSO de Vercel).
> Este documento es la memoria del rediseño "Tinta y Papel": qué se decidió, dónde vive cada cosa y cómo se regenera.

## La decisión central: sistema dual Tinta/Papel

El sitio ya no es 100% oscuro. Dos superficies con roles:

| Superficie | Uso | Texto | Acento texto |
|---|---|---|---|
| `surface-ink` / `surface-coal` | heroes, producto (API, simuladores, código), CTA final, footer | cloud | green `#0CF25D` |
| `surface-paper` / `surface-paper-2` | lectura editorial: problema, Recursos, Nosotros, Contacto | navy `#143259` | teal `#007362` |
| `surface-navy` / `surface-teal` | bandas de transición (máx. 1-2 por página) | cloud | green / lime |

Regla de oro mantenida: **el verde es acción/señal, no decoración** (botón primario, dato clave, enlace activo). Sobre papel, el acento de texto es teal (el verde no cumple AA sobre claro).

Cada superficie define vars locales: `--t1/--t2/--t3` (texto), `--line/--line-strong`, `--accent/--accent-rgb`, `--card-bg/--card-line`, `--focus`. Clases semánticas: `.t1/.t2/.t3`, `.accent`, `.rule`, `.card-s`, `.btn-primary`, `.btn-outline`. Las páginas de línea fijan el tono con `style="--accent-rgb:…"` en el hero (`LineaPage.astro` lo hace por prop `tone`).

## Tipografía

Self-hosted vía `@fontsource/*` (imports al inicio de `src/styles/global.css`). Sin Google Fonts CDN. Escala editorial: `.display-1` (hero), `.display-2` (sección), `.lead`, `.measure` (68ch). El cursor de terminal del hero se eliminó (`.cursor-blink` ya no existe): el roller es slide-up seco, `aria-hidden`, con `sr-only` en la página.

## Iconos: subset Phosphor (73 iconos, 9.8 KB)

`public/fonts/Phosphor-subset.woff2` + `src/styles/phosphor-subset.css` (solo regular, solo iconos usados). **Regenerar al añadir iconos nuevos:** `scripts/build-icon-subset.sh` (requiere python3.12 + fonttools + brotli). No volver a unpkg: cargaba las 6 familias (~1.8 MB).

## Vídeo

- **Loops de fondo generados de marca** (wireframes animados, bucles seamless de 8 s): `public/video/hero-home.{webm,mp4}` (esfera) y `hero-factoria.{webm,mp4}` (tunnel). Se generaron frame a frame con una escena SVG determinista (`window.__setT(t)`) + captura Playwright + ffmpeg (VP9 crf42 / H.264 crf27). Escenas fuente: no versionadas (están en el historial de esta conversación); para nuevos loops, repetir el patrón y pedir escena nueva.
- **Vídeos reales de producto** (self-hosted, click-to-play, 720p): `g-digital-presentacion.mp4` (Nosotros) y `gocertius-launch.mp4` (Confianza Digital). Fuentes: Drupal legacy y canal oficial Garrigues en YouTube.
- **`VideoBackground.astro`**: poster como capa base (LCP), vídeo diferido (`preload=none`, fuentes por `data-src`), play/pausa por IntersectionObserver, sin vídeo en móvil (<768px) salvo `mobileVideo`, respeta `prefers-reduced-motion` y `Save-Data`, overlay `.video-overlay-aa` para contraste AA.

## Recursos (biblioteca)

Content Collections en `src/content/`: `articulos`, `conceptos`, `casos`, `glosario` (schemas Zod + taxonomías en `src/content/config.ts`). Regla: **contenido sin cuerpo aprobado → `draft: true`** (badge "EN PREPARACIÓN" / banner de borrador). Los 2 artículos reales publicados enlazan al original (`externalUrl`).

- Hub `/recursos`: búsqueda (atajo `/`), filtros combinables tipo×línea×tema, orden, destacada, contador. Todo client-side sin dependencias sobre el HTML renderizado.
- `ArticleLayout.astro`: progreso de lectura, TOC sticky con scrollspy, glosario contextual (`glossary:` slugs), relacionados (`related:` slugs cross-colección), chips sector/servicio/norma en casos.
- `/recursos/{articulos,conceptos,casos}` son redirecciones suaves al hub (no hay índices por tipo).

## SEO / performance

- `Base.astro`: canonical, og:url/image/locale/site_name, Twitter Cards, theme-color, JSON-LD Organization, skip-link. OG por defecto: `public/og/default.png`.
- `public/sitemap.xml` manual (27 URLs). **No re-añadir `@astrojs/sitemap`** (rompe build Vercel).
- Home: ~220 KB críticos (fuentes 152 KB incl. iconos) + vídeo bajo demanda.
- `astro check` verde (devDeps `@astrojs/check` + `typescript`).

## Accesibilidad (auditoría 2026-08-02)

23 pares de color verificados: 22 AA, 0 FAIL (t3 papel ajustado a .70 → 5.0:1). Teclado: skip-link → `<main tabindex="-1">`, dropdowns nav por focus-within, Escape en menú móvil. Reduced-motion: sin vídeo, roller estático, reveals visibles.

## Pendiente / próximos pasos

- **Despliegue:** solo preview (SSO Vercel). `--prod` requiere orden expresa del usuario.
- Escenarios/Trust Explorer siguen en el sistema anterior (tinta, coherente con producto); restyle fino pendiente si se decide.
- Cuerpos completos de los 4 artículos draft y 2 whitepapers: pendientes de redacción/aprobación (estructura lista).
- Contenido F3/F4 del plan v4: catálogo 298 escenarios, hub EUDI, i18n EN.
