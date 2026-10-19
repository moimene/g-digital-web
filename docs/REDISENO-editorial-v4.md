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
- Contenido F3/F4 del plan v4: catálogo 298 escenarios, hub EUDI, i18n EN.

## Revisión legal — ronda 1 aplicada (2026-08-02)

Respuesta del asesor legal (prompt en `docs/REVISION-LEGAL-prompt.md`) aplicada:

- **LEC: la cita correcta para servicios cualificados es 326.4** (añadido por Ley 6/2020; el 326.3 quedó para no cualificados). El copy legacy era el correcto; los artículos nuevos usan 326.4 + peritaje 326.2-326.3. **No tocar sin nueva consulta.**
- **"Inversión de la carga de la prueba"** → sustituida por "presunción legal de autenticidad, integridad y fecha" / "desplaza la carga de desvirtuar la prueba al impugnante" en consts, Factoría, escenarios y artículos.
- **ERDS** siempre como "servicio **cualificado** de entrega electrónica certificada".
- **Archivo cualificado (45i-45j):** los estándares YA existen (Reg. Ejecución (UE) 2025/2532) — prohibido decir "estándares pendientes"; fórmula aprobada: "diseñado conforme a los requisitos del servicio cualificado…".
- **EUDI:** fechas con "conforme al calendario previsto en el Reglamento" / "estimada para finales de 2027"; WE BUILD con atribución "según el propio consorcio"; "Business Wallet" marcado como denominación de mercado (no categoría regulatoria).
- **OpenBrick:** fórmula aprobada "plataforma de activos financieros tokenizados autorizada bajo el Régimen Piloto DLT (Reglamento (UE) 2022/858), supervisada por la CNMV" (sin "una de las primeras").
- **Métricas:** con fuente y fecha ("Datos internos de g-digital, acumulados a 2026").
- **Disclaimer uniforme** en todas las fichas de contenido (ArticleLayout): "Contenido divulgativo con fines comerciales; no constituye asesoramiento jurídico".
- **Pendiente de la ronda 1** (la respuesta no los cubrió): E soberanía/CLOUD Act/PQC, F AI Act, G citas de casos de uso, H.1 sentencia AP Lleida (sin citar hasta tener identificadores verificados).

## Revisión legal — ronda 2 aplicada (2026-10-10, Harvey)

Sección I del prompt (`docs/REVISION-LEGAL-prompt.md`) revisada con **Harvey** (fuentes UE + España + web; análisis en profundidad). Es un segundo criterio con fuentes primarias, **no** la aprobación del asesor humano. Registro local (no versionado): `.trabajo-local/harvey/2026-10-10/H001/`.

- **Numeración eIDAS en español oficial:** se cita primero la numeración de la versión española y la inglesa entre paréntesis — archivo **45 decies-45 undecies** (45i-45j), libros mayores **45 duodecies-45 terdecies** (45k-45l), declaración de atributos **45 ter-45 nonies** (45b-45h), cartera transfronteriza **5 septies** (5f). Verificado en EUR-Lex (consolidado 18-10-2024).
- **QEL:** nombre comercial "registro electrónico cualificado (QEL)", glosado una vez como «libro mayor electrónico cualificado» (término oficial ES). La presunción exige que servicio y prestador figuren en las listas de confianza **en el momento relevante**; nada sugiere que EADTrust ya preste un QEL cualificado. Reg. Ejec. (UE) 2025/2531: "en vigor desde el 6-ene-2026, fija las normas y especificaciones de referencia". Fuera: "compras el derecho", "el registro prueba el orden".
- **Digitalización certificada:** fuera "original electrónico único" y "valor probatorio pleno" → "copia electrónica fiel y trazable" / "reforzar el valor probatorio". Destrucción del papel solo si el régimen legal, contractual y probatorio lo permite. Plazo: art. 30 CCom (seis años) "sin perjuicio de plazos sectoriales". CTEAJE → NTI de Digitalización / Orden EHA/962/2007 como referencias por ámbito.
- **Seguros (limitativas, art. 3 LCS):** OK; el riesgo "sin" pasa a "puede dificultar la prueba… y comprometer su oponibilidad".
- **MCP:** "clientes MCP compatibles" + "su publicación no implica SLA, soporte de integración ni compromiso de disponibilidad en producción". Evidencia de los 3 repos públicos (MIT, README) guardada en `evidencias/github-mcp.json`.
- **Coherencia con ronda 1 (barrido del sitio):** retiradas las fórmulas residuales "inversión de la carga", "garantiza", "plena validez", "queda probado", "presunción de validez" y el H2 de la home "Validez legal." → "Valor probatorio."; archivo propio siempre "diseñado conforme a los requisitos del servicio cualificado".
- **Pendiente:** contraste humano de las citas que solo aporta Harvey (CCom art. 30, LSSI arts. 23-24, LCD art. 5, NTI, Orden EHA/962/2007); H.1 sigue igual (sin jurisprudencia).

### Tanda 1: tonos sobre tinta
Azure #5B9CF6 / ink #05060A: 7,3:1; aqua #2BD4B0 / ink: 10,8:1; lima #CCF943 / ink: 16,6:1 (auditoría). Tonos locales en superficies oscuras; papel conserva teal y CTA principal verde. Cálculo WCAG independiente: #5B9CF6 7.26:1, #2BD4B0 10.75:1, #CCF943 16.59:1. Confirmación en render pendiente: el sandbox impide iniciar preview y Chromium.
