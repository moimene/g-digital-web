# Plan de Adaptacion UX — Alineamiento con g-digital.garrigues.com

## Fecha: 26 Feb 2026
## Analisis basado en crawl de g-digital.garrigues.com (homepage, nosotros, soluciones)

---

## DIFERENCIAS UX IDENTIFICADAS

### Lo que tiene la web corporativa y deberiamos adoptar:

| Elemento | Web corporativa | Nuestra refactorizacion | Accion |
|----------|----------------|------------------------|--------|
| **Fondo general** | Negro (`bg-black`) como base | Gris claro (`bg-light #F8FAFC`) | Evaluar: el negro da mas presencia corporativa |
| **Color texto titulares** | Azul oscuro (`text-gd-blue-secondary`) | Verde primario (`text-primary #004438`) | Mantener: nuestro verde es coherente con g-digital |
| **Verde primario** | Verde (#00A67E tipo `gd-green-primary`) | Accent (#009A77) | Muy similar, OK |
| **Verde quaternary** | Para headers grandes (#A7D8C8 aprox) | No usado | Considerar: aporta contraste en headers oscuros |
| **Tipografia** | System font (sans-serif Bootstrap) | Playfair Display + Manrope | **DECISION CLAVE**: Playfair da mas personalidad, pero la corporativa es mas austera |
| **Nav** | Fondo negro, logo blanco, menu offcanvas lateral | Fondo blanco glassmorphism, menu slide derecha | Evaluar: negro alinea con corporativa |
| **Hero homepage** | Fondo negro total con video autoplay | Gradiente verde oscuro con shapes | Evaluar: video da mas impacto |
| **Botones** | Pill verdes con borde, texto oscuro | Pill verdes con sombra glow, texto blanco | Adaptar: el texto oscuro sobre boton verde es mas corporativo |
| **Cards** | Fondo gris suave, bordes redondeados simples | Fondo blanco, rounded-3xl, hover con sombra | Mantener nuestra version (mas moderna) |
| **Footer** | Negro minimalista | Negro con grid de links | Mantener nuestro (mas completo) |
| **Logo** | SVG oficial con fuente especifica | Font-based con serif | **ACCION**: Usar el logo SVG real de g-digital |
| **Seccion productos** | Cards con icono SVG custom en caja blanca | Cards con Phosphor icons | Evaluar: SVGs custom son mas on-brand |
| **Layout** | Bootstrap 5, container-fluid | Tailwind max-w-7xl | OK, equivalente |
| **Imagenes** | Fotos reales de oficina + equipo | Infografias generadas | **AMBOS**: las infografias son nuestro diferencial, pero fotos reales humanizan |

### Lo que nuestra refactorizacion tiene MEJOR:

| Elemento | Nosotros | Web corporativa |
|----------|---------|----------------|
| **Contenido** | 22 paginas con profundidad (La Factoria, 298 escenarios, Deuda Legal, Derecho Computable) | 4 paginas con contenido generico |
| **Sectores** | 8 paginas sectoriales con escenarios especificos y regulacion | Cero contenido sectorial |
| **Articulos SEO** | 4 articulos con infografias y profundidad tecnico-juridica | Blog basico sin profundidad |
| **Trust API** | Pagina completa con specs, demos, DX, escenarios | Mencion generica de EAD Factory |
| **Interactividad** | Filtros, lightbox, counters, animaciones, links a demos live | Basicamente estatica |
| **Buyer personas** | Mensajes diferenciados por interlocutor en paginas sectoriales | Mensaje unico para todos |
| **Navegacion** | Dropdown con La Factoria destacada, Sectores hub | Menu simple con 3 opciones |

---

## PLAN DE ADAPTACION UX (Priorizado)

### FASE 1 — Alineamiento critico (alto impacto, bajo esfuerzo)

**1.1 Logo oficial**
- Descargar el SVG de g-digital de la web corporativa
- Reemplazar el logo font-based por el SVG oficial en toda las paginas
- Archivo: `https://g-digital.garrigues.com/themes/custom/gdigitaltheme/img/gdigital/logo_gdigital.svg`

**1.2 Iconos SVG custom de productos**
- Descargar los SVGs custom de soluciones: icon_confianza.svg, icon_contratos.svg, icon_archivos.svg
- Usarlos en la homepage para las 3 lineas de negocio (mantener Phosphor para el resto)
- Fuente: `https://g-digital.garrigues.com/themes/custom/gdigitaltheme/img/gdigital/`

**1.3 Botones — texto oscuro sobre verde**
- Cambiar CTAs principales de `text-white` a `text-primary` sobre fondo `bg-accent`
- Ejemplo: `bg-accent text-primary` en vez de `bg-accent text-white`
- Esto alinea con el patron de la web corporativa

**1.4 Logo de Garrigues en footer y nosotros**
- Descargar `logo_garrigues.svg` de la web corporativa
- Usarlo en la seccion "Somos Garrigues" de nosotros.html
- Usarlo en el footer junto al logo de g-digital

### FASE 2 — Adaptacion visual (medio impacto, medio esfuerzo)

**2.1 Nav oscuro (opcional)**
- La web corporativa usa nav negro. Nuestra glassmorphism blanca es mas moderna.
- RECOMENDACION: mantener nuestra version pero ofrecer como opcion A/B:
  - Opcion A (actual): Nav blanca glassmorphism — mas moderna y tecnologica
  - Opcion B (corporativa): Nav negra con logo blanco — mas alineada con marca Garrigues

**2.2 Hero con video (homepage)**
- La web corporativa tiene un video autoplay en el hero
- RECOMENDACION: Evaluar incorporar el video de presentacion de g-digital
- El video esta en: `https://g-digital.garrigues.com/themes/custom/gdigitaltheme/videos/Video_Home.mp4`

**2.3 Color scheme refinement**
- Nuestro esquema (primary #004438, accent #009A77) es coherente con la corporativa
- Anadir un tono azul oscuro (`gd-blue-secondary`) para titulares como alternativa
- La web corporativa usa azul oscuro para titulares, no verde

**2.4 Seccion "Somos Garrigues" con logos SVG reales**
- Descargar: logo_garrigues.svg, logo_garrigues_digital.svg, logo_gdigital.svg
- Reemplazar iconos Phosphor por logos reales en la seccion de 3 entidades
- Mucho mas credibilidad con los logos oficiales

### FASE 3 — Elementos adicionales (bajo impacto, variable esfuerzo)

**3.1 Partners con logos reales**
- Descargar: logo_iobuilders.svg, logo_microsoft.svg, logo_oracle.svg, logo_ead_trust.svg
- Reemplazar texto por logos SVG en partners y footer

**3.2 Logos de productos**
- Descargar: logo_ead_factory.svg, logo_go_certius.svg, logo_ead_eartchiving.svg, logo_ead_signature.svg, logo_openbrick.svg
- Usarlos en las paginas de soluciones correspondientes

**3.3 Selector de idioma**
- La web corporativa tiene ES/EN
- RECOMENDACION: Anadir cuando haya version en ingles

**3.4 Cookie banner**
- La web corporativa tiene banner de cookies (eu-cookie-compliance)
- RECOMENDACION: Implementar cuando el sitio vaya a produccion con dominio propio

---

## RECOMENDACION ESTRATEGICA

**NO copiar la web corporativa. Superarla.**

La web corporativa (g-digital.garrigues.com) tiene un diseno correcto pero generico: Bootstrap, contenido superficial, sin interactividad. Nuestra refactorizacion ya la supera en:
- Profundidad de contenido (22 paginas vs 4)
- Diferenciacion visual (Playfair + infografias vs Bootstrap generico)
- Conversion (paginas sectoriales + buyer personas vs pagina unica)
- SEO (articulos + schema JSON-LD vs contenido plano)

Lo que SI debemos alinear:
1. **Logo SVG oficial** — credibilidad inmediata
2. **Logos de partners y productos** — coherencia de marca
3. **Fotos del equipo** — ya hecho
4. **Links a perfiles Garrigues y LinkedIn** — ya hecho
5. **Terminologia** — rPaaS, nombres de producto reales — ya hecho

Lo que NO debemos copiar:
- El diseno Bootstrap generico
- La falta de contenido profundo
- La ausencia de paginas sectoriales
- El menu simple sin la Factoria destacada
- La falta de infografias y articulos
