# g-digital — PRD (Product Requirements Document)

## Problema Original
Refactorizacion completa de la pagina web corporativa de g-digital (division de negocios digitales de Garrigues). Incluye rediseno UI/UX, reestructuracion de codigo, funcionalidad mejorada y optimizacion de rendimiento.

## Arquitectura
- **Tipo**: Sitio web estatico (HTML/CSS/JS)
- **Servidor**: `serve` npm package sirviendo archivos estaticos en puerto 3000
- **Backend**: FastAPI minimal en puerto 8001 (health check + fallback static serving)
- **Hosting**: Kubernetes con ingress routing (/ -> port 3000, /api -> port 8001)

## Paginas
1. **index.html** — Homepage con hero, soluciones (bento grid), propuesta de valor, triangulo de legitimidad, partners, CTA
2. **nosotros.html** — Que somos, reconocimientos, alianzas estrategicas, valores
3. **recursos.html** — Blog con filtros por categoria, noticias, observatorio LegalTech
4. **contacto.html** — Formulario de contacto, sidebar con cards informativos, beneficios
5. **soluciones/confianza-digital.html** — Servicios eIDAS, GoCertius, EAD Factory
6. **soluciones/contract-tech.html** — CLM, ciclo de vida contractual, contrato computable
7. **soluciones/activos-digitales.html** — Tokenizacion, DLT, blockchain
8. **soluciones/legaltech-ia.html** — AI Act, AIMS Console, GRC

## Stack Tecnologico
- Tailwind CSS (via CDN)
- Google Fonts: Playfair Display (headings), Manrope (body), JetBrains Mono (monospace)
- Phosphor Icons (via CDN)
- Vanilla JavaScript (animaciones, filtros, menu mobile)

## Implementado (26 Feb 2026)
- [x] Rediseno completo con nueva identidad visual (verde oscuro + teal + gold)
- [x] Tipografia distintiva: Playfair Display + Manrope + JetBrains Mono
- [x] Iconos Phosphor reemplazando emojis
- [x] Glass morphism en navegacion
- [x] Bento grid asimetrico en seccion de soluciones
- [x] Micro-animaciones (fade-in, slide, scale, float, counters)
- [x] Menu mobile con overlay y animacion hamburger->X
- [x] Filtrado de recursos por categoria con animaciones
- [x] Formulario de contacto con validacion y feedback visual
- [x] Navegacion responsive con dropdown de soluciones
- [x] data-testid en todos los elementos interactivos
- [x] Clean URLs (serve redirige .html automaticamente)
- [x] 100% tests pasados (8 paginas, navegacion, formulario, filtros, mobile, animaciones)

## Backlog / Proximas Mejoras
- P1: Formulario de contacto con envio real (backend email integration)
- P1: Blog con contenido real y paginas de articulos individuales
- P2: Animaciones de page transition entre paginas
- P2: Dark mode toggle
- P2: Lazy loading de imagenes
- P2: SEO schema markup (JSON-LD)
- P3: Chatbot integrado para soporte
- P3: Newsletter subscription
- P3: Analytics integration (Google Analytics / Plausible)
