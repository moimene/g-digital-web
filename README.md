# g-digital — web v4 (Astro)

Refactorización de la web de **g-digital** (Grupo Garrigues). Astro + Tailwind, branding oficial
(negro + verde eléctrico, Poppins/Rubik), posicionamiento **"infraestructura legal"**.
Prototipo de Fase 1 (home + Confianza Digital) con el resto de líneas ya migradas como borrador.

## Requisitos
- Node.js ≥ 18.14

## Arranque
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (estático)
npm run preview  # sirve /dist
```

## Estructura
```
src/
  consts.ts              # nav, soluciones, SEO (fuente única)
  styles/global.css      # tokens, grano, animaciones, reduced-motion
  layouts/
    Base.astro           # head, Nav, Footer, scripts (reveal/contadores/menú)
    Linea.astro          # layout reutilizable de páginas de solución
  components/
    Nav.astro  Footer.astro  Wordmark.astro  Wireframe.astro  SectionLabel.astro
  pages/
    index.astro          # HOME (guion Revelar→Educar→Evaluar→Convertir)
    contacto.astro  nosotros.astro  recursos.astro
    soluciones/
      confianza-digital.astro   (F1, completa)
      la-factoria.astro  enterprise-suite.astro
      contract-tech.astro  activos-digitales.astro  grc-ia.astro
  content/_rescatado/    # COPY VERBATIM del proyecto anterior (no perder nada)
public/favicon.svg
```

## Marca (tokens en `tailwind.config.mjs`)
- Color: `green #0CF25D` (acento) · `lime #CCF943` (escaso) · `teal #007362` · `navy #143259` · `gris #FAFAFA` · lienzo `ink #05060A`.
- Tipo: **Poppins** (`.head`, titulares) · **Rubik** (cuerpo) · JetBrains Mono (código/labels). Fallbacks: Century Gothic / Calibri.
- Logo: "g" en verde + "-digital" blanco; fondos negros; recurso gráfico propio = wireframes de línea fina.

## Despliegue (Vercel)
Vercel detecta Astro automáticamente (build `astro build`, output `dist`). Conectar el repo
`moimene/g-digital-web` o importar este proyecto. Recomendado usar *preview deployments* por rama
para revisar sin tocar producción. Para sitemap, `astro.config.mjs` ya incluye `@astrojs/sitemap`
(ajustar `site` al dominio final).

## Estado y siguientes pasos
Ver `CONTENIDOS-MIGRACION.md` (mapa old→new) y, en el directorio padre,
`Web_Refactor_v4/PLAN_Refactor_Web_g-digital_v4.md` (plan) y `MEMORIA_Web_Refactor.md` (continuidad).
- **F1**: pulir home + Confianza Digital, logos reales, foto/wireframes definitivos.
- **F2**: completar Nosotros, Contacto backend, las 4 líneas a nivel final.
- **F3**: catálogo de 298 escenarios (datos + buscador) y Recursos con Content Collections.
- **F4**: hub EUDI Wallet, demo MCP, i18n EN.
