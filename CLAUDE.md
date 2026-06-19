# CLAUDE.md — g-digital web v4 (Astro)

Guía para sesiones de Claude/Claude Code sobre **este repo**. Léela antes de tocar nada.

## Qué es
Web de **g-digital** (división digital de Garrigues + **EADTrust**, QTSP del grupo). Refactorización v4: **de catálogo a categoría**. Posicionamiento: **"La infraestructura legal para cada operación de tu organización"** (NO "infraestructura de confianza"). Reemplaza al sitio anterior (HTML estático pobre, dos design systems).
- **LIVE:** https://g-digital-web-sage.vercel.app · Vercel, proyecto `g-digital-web` (org `team_W5FPu7F9THwPNfGfTAyIwhYX`).
- Producción legacy (a sustituir): `g-digital.garrigues.com` (Drupal).

## Stack y comandos
- **Astro 4** + `@astrojs/tailwind` (Tailwind 3). Salida **estática**. Node ≥ 18.
- `npm install` · `npm run dev` (http://localhost:4321) · `npm run build` · `npm run preview`.

## Marca — NO desviarse (manual oficial; PDF en `../*branding marcas colores.pdf`)
Tokens en `tailwind.config.mjs`:
- **green `#0CF25D`** (acento principal: CTAs, enlaces, iconos, la "g" del logo) · **lima `#CCF943`** (muy escaso, máx. 1/pantalla) · **teal `#007362`** (Garrigues) · **navy `#143259`** (texto sobre claro) · **gris `#FAFAFA`** · lienzo **ink `#05060A`** · coal `#0C0E12` · cloud `#F4F6F5` (texto sobre oscuro).
- Fuentes: **Poppins** (`.head`, titulares) · **Rubik** (cuerpo) · **JetBrains Mono** (código/labels). Fallbacks: Century Gothic / Calibri.
- Logo: "g" verde + "-digital" blanco + microtag "GRUPO GARRIGUES" (componente `Wordmark.astro`). **Fondos negros predominantes.**
- Recurso gráfico propio = **wireframes geométricos de línea fina** (`Wireframe.astro`); efectos "eléctricos" verdes.
- Iconos: **Phosphor regular** `ph ph-…`. **NO usar `ph-duotone`** sin cargar su hoja CSS (no renderiza).
- **Regla del verde:** si todo brilla, nada brilla — el verde marca *la acción que importa*, no decora.

## Anti-IA (requisito de producto, no estética)
Evitar: degradados violeta/índigo, glassmorphism por defecto, 3D abstracto/blobs, copys simétricos vacíos, tarjetas clónicas, retícula perfecta sin jerarquía, ausencia de personas/fechas/nombres.

## Estructura
- `src/consts.ts` — nav, soluciones, SEO (fuente única de navegación).
- `src/data/articulos.ts` — **los 6 artículos del blog; fuente única** que usan la home y `/recursos` (no duplicar).
- `src/styles/global.css` — tokens CSS, grano, animaciones, `prefers-reduced-motion`.
- `src/layouts/Base.astro` — `<head>`, Nav, Footer, y el `<script>` de reveal/contadores/menú móvil.
- `src/layouts/Linea.astro` — layout reutilizable de páginas de solución (hero + slot + CTA).
- `src/components/` — Nav, Footer, Wordmark, Wireframe, SectionLabel.
- `src/pages/` — `index.astro` (home), `soluciones/{confianza-digital, la-factoria, enterprise-suite, contract-tech, activos-digitales, grc-ia}.astro`, `contacto.astro` (form + bloque RGPD), `nosotros.astro` (stub F2), `recursos.astro` (blog filtrable + Observatorio + glosario).
- `src/content/_rescatado/*.md` — **copy VERBATIM del proyecto anterior** (no perder nada); mapa en `CONTENIDOS-MIGRACION.md`.

## Narrativa de la home (guion)
**Revelar** (Deuda Legal) → **Educar** (categoría + eIDAS 2/EUDI Wallet) → **Evaluar** (API/MCP, escenarios) → **Convertir** (por rol). Estrategia Océano Rojo (firma commodity) → Océano Azul (La Factoría / Compliance Injection). Innovación a la vista: API → **MCP** (confianza cualificada "agent-ready") → EUDI.

## Las 4 líneas
1. **Confianza Digital** — arquitectura por capas: La Factoría (Trust API **+ MCP**) · Enterprise Suite · productos eIDAS · GoCertius.
2. **Contract Tech** — CLM en 3 dimensiones (Building Blocks · mono-contrato · posición/Contract Guardian); motores de reglas.
3. **Activos Digitales** — tokenización regulada, foco **OpenBrick** (Régimen Piloto DLT/CNMV); partner ioBuilders.
4. **GRC & IA** (nueva; antes "LegalTech & IA") — GRC Compass + AIMS Console (AI Act, ISO 42001).

> **Independencia de líneas (CLAVE):** eIDAS / Deuda Legal / evidencia es lenguaje SOLO de Confianza Digital (L1), NO el paraguas de las 4. Paraguas ligero: *g-digital = la tecnología de Garrigues para la complejidad jurídica*. Cada línea lidera con su promesa, color y motivo propios — CD verde·esfera / CT lima·cadena de proceso / AD teal·bloques / GRC&IA azul·anillo (teal `#2BD4B0` y azul `#5B9CF6` = tintes luminosos de `#007362`/`#143259` para legibilidad sobre negro). Fuente: `../Web_Refactor_v4/arquitectura-mensajes-lineas.md`.

## Guardrails de contenido
- Posicionamiento **"infraestructura legal"**. "Confianza Digital" solo como nombre de la Línea 01.
- **Sin** "garantizamos/aseguramos/inmunidad/blindar/<24h"/SLA no publicado → usar "diseñado para / orientado a".
- **Contadores nunca a 0**: fallback no-cero en el HTML; el JS anima en viewport.
- **g-digital diseña; EADTrust opera, comercializa y factura (QTSP).**
- Naming canon: Noticeman; Enterprise Suite y GoCertius = plataformas, no productos sueltos.
- Datos verificables (Claim Registry): Top 10 FT Innovative Lawyers, Law.com 2025, +40.000 evidencias GoCertius, 298 escenarios, EADTrust 51% Garrigues.

## Despliegue (Vercel) y GOTCHAS
- Pre-enlazado al proyecto `g-digital-web` vía `.vercel/project.json`. Deploy: `npx vercel` (preview) / `npx vercel --prod`.
- **(1)** macOS usa **zsh**: NO pongas comentarios `#` en la línea del comando (los toma como rutas → "Can't deploy more than one path").
- **(2)** Ejecuta **desde la carpeta del proyecto**, no desde `~`.
- **(3)** **NO re-añadir `@astrojs/sitemap`**: rompía `astro:build:done` en Vercel ("Cannot read properties of undefined (reading 'reduce')").
- **(4)** El alias y el `web_fetch` **cachean**: verifica con `?nocache=` o hard-refresh (Cmd+Shift+R).
- El `EPERM` al limpiar `dist/`/`.astro/` solo ocurre en el sandbox de Claude (mount), no en Vercel/local.

## Estado (17-jun-2026)
- **LIVE** (F0+F1). Build OK: 10 páginas.
- **Cambios en working tree SIN desplegar todavía:** Recursos con los 6 artículos + home enlazando esos 6 (`src/data/articulos.ts`) + contadores con fallback no-cero. Re-desplegar con `npx vercel --prod` cuando se quiera.
- Los 6 artículos son **fichas/resúmenes**; los cuerpos completos NO están escritos (usuario: "todavía no"). Si se piden, crear páginas `/recursos/<slug>`.
- Repo git local tiene un *lock* heredado del sandbox (commits pueden fallar ahí); el deploy por `vercel` usa los archivos en disco, no git.

## Próximo
F1 polish: logos SVG reales del manual + fotografía. F2: Nosotros y Contacto con backend. F3: catálogo de 298 escenarios + página Plataforma (API y MCP) + Recursos con Content Collections. F4: hub EUDI Wallet, demo MCP, i18n EN. Transversal: cargar Claim Registry y pasar por Legal/Compliance.

## Documentos de referencia (en `../Web_Refactor_v4/`)
- `PLAN_Refactor_Web_g-digital_v4.md` — plan estratégico (14 secciones).
- `MEMORIA_Web_Refactor.md` — memoria de continuidad.
- Voz/argumentario: `../nueva web g_digital/g-digital-skills/g-digital-playbook/SKILL.md`.
