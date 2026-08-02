# Revisión del borrador — Web g-digital v4

> Borrador en estado avanzado para revisión del equipo.
> Fecha: 19-jun-2026 · Stack: Astro 4 + Tailwind 3 (estático, Vercel).

---

## 1. Cómo verlo en local (2 min)

```
cd g-digital-astro
npm install
npm run dev
```

Abre `http://localhost:4321`. No hace falta nada más (sitio estático, sin base de datos ni claves).

Para revisar el build de producción exacto:

```
npm run build
npm run preview
```

---

## 2. Qué mirar, página a página

| Ruta | Qué revisar |
|---|---|
| `/` (home) | El **roller del hero** (8 frases rotando, con términos ingleses en cursiva: *in-house*, *EUDI Wallet ready*). El bloque **"Cuatro negocios. Una casa."** — comprobar que cada línea se lee **independiente** (color y motivo propios), no todo como "confianza digital". Banner de **Desarrollador/Tecnología** al final del bloque "Por perfil". |
| `/soluciones/confianza-digital` | Tras el hero: barra **"Para: CLO · CISO · CTO"** + **"Según tu rol, esto te interesa"** (3 tarjetas: jurista / IT-dev / negocio). Infografía "La línea de un vistazo" al final. |
| `/soluciones/contract-tech` | Mismo patrón de roles (color lima). |
| `/soluciones/activos-digitales` | Mismo patrón (color aqua). OpenBrick como ecosistema inicial. |
| `/soluciones/grc-ia` | Mismo patrón (color azure). AIMS Console / AI Act. |
| `/escenarios` ⭐ NUEVO | **Demo viva "Sella una evidencia"** (escribe algo → genera hash SHA-256 con timestamp, todo en el navegador). Debajo, **directorio de 24 escenarios** filtrable por línea y por sector. |
| `/recursos` | Sección **"Pruébalo tú mismo"** con accesos a productos + **GitHub** (`#desarrolladores`). Nuevas secciones **"Conceptos"** (4 deep-dives) y **"Whitepapers"** con descarga real del PDF *eIDAS 2 y EUDI Wallet: base sectorial*. |

---

## 3. Lo nuevo en esta iteración (los 5 pilares pedidos)

1. **Perfil por línea de negocio** — cada línea declara su buyer persona (`Para: …`).
2. **Mensajes por rol** — en cada línea, 3 ángulos (jurista / IT-dev / negocio). Esto resuelve el problema de que "lo de MCP es para developers, no para un abogado": ahora cada perfil ve su mensaje.
3. **Infografías como recurso** — las 4 infografías de línea están integradas ("La línea de un vistazo") y reutilizables.
4. **Directorio de escenarios** (`/escenarios`) — 24 casos clasificados por línea + sector, filtrables, **con mock-up vivo** (sellado de evidencia real en cliente).
5. **Recursos como librería** — Conceptos (deep-dives) + Whitepapers descargables, además del blog, glosario, observatorio y centro de desarrolladores.

---

## 4. Decisiones abiertas para el equipo

- **URLs de producto**: confirmar `gocertius.io` y `eadtrust.eu` (usadas en Recursos). Ajustar si cambian.
- **GitHub**: enlace a `github.com/g-digital-by-Garrigues` — confirmar que la org es pública / existe.
- **Logo y tipografías**: hoy se usa un logo SVG provisional y las fuentes de marca por CDN. Sustituir por el vector oficial del manual y, si procede, fuentes self-hosted.
- **Fotografía**: faltan fotos "humanas" (brief en `docs/FOTOGRAFIA-brief.md`). Hoy el sitio es tipográfico/wireframe a propósito, pero conviene 2-3 fotos reales para reforzar el "no parece hecho con IA".
- **Escenarios**: son 24 MVP. Revisar redacción de dolor/servicio/norma y ampliar a los sectores que falten.
- **Whitepapers**: 2 están marcados "Próximamente" (Deuda Legal, OpenBrick). Decidir si se redactan.

---

## 5. Cómo desplegar a producción

Desde tu terminal (no desde aquí), en la carpeta del proyecto:

```
cd g-digital-astro
npx vercel --prod
```

> Nota: este borrador tiene cambios **sin commitear**. Antes de desplegar conviene:
> ```
> cd g-digital-astro
> git add -A
> git commit -m "v4: roles por línea, directorio de escenarios + demo, recursos como librería"
> ```

---

## 6. Guardarraíles de marca (recordatorio)

- **g-digital diseña** con criterio jurídico de Garrigues; **EADTrust opera y factura**. No mezclar.
- Nada de "garantizamos / inmunidad / blindar / SLA no publicado".
- Lenguaje eIDAS / Deuda Legal **solo** en Confianza Digital. Las otras 3 líneas hablan su propio idioma.
- Paraguas ligero: g-digital = brazo tecnológico de Garrigues para la complejidad legal.
