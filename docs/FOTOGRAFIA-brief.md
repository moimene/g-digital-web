# Fotografía — brief (Fase 1)

> El manual pide **foto real** y tonalidades frías; **nada de stock ni 3D genérico**. Por eso NO se han insertado fotos: aquí va el encargo para producirlas. Mientras tanto, el sitio usa los **wireframes de marca** como imagen.

## Dónde van (slots)
- **Nosotros** — hero del equipo + retratos individuales (cabecera de bios).
- **Home / Tres palancas** — opción: foto sobria del equipo o de Madrid.
- **Observatorio (Recursos)** — foto de un evento/sesión Garrigues-ICADE.
- **Casos de éxito (F2/F3)** — foto o mockup real de producto por caso.

## Estilo (coherente con la marca)
- Real, humano, tonalidades frías; negros profundos; un punto de luz "eléctrica" verde si aplica.
- Personas reales del equipo / Madrid / sede; nunca clip-art ni stock corporativo.
- Encuadres con aire, alineados a la retícula editorial.

## Formato técnico
- Exportar **WebP/AVIF** + fallback; usar `astro:assets` (`<Image />`) para `width/height` y lazy-load (salvo la imagen LCP).
- Variantes 16:9 (heros) y 1:1 / 4:5 (retratos). Originales ≥ 2400 px de lado mayor.

## Mientras llegan las fotos
- Mantener los wireframes (`Wireframe.astro`) como imagen de sección.
- Para retratos en `Nosotros`, usar placeholders neutros (silueta + iniciales) hasta tener las fotos.

## Logo
- Wordmark vectorial en `public/logo.svg` (la "g" en verde #0CF25D; "-digital" y el microtag heredan `currentColor`). Es una recreación fiel en la tipografía del manual (Poppins); **sustituir por el vector oficial** cuando el equipo de marca lo facilite. Favicon en `public/favicon.svg`.
