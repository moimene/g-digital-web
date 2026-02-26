# g-digital — PRD (Product Requirements Document)

## Problema Original
Refactorizacion completa de la pagina web corporativa de g-digital (division de negocios digitales de Garrigues). Primera fase: rediseno UI/UX completo. Segunda fase: refactorizacion de contenidos basada en 5 documentos SKILL.md que definen las capacidades comerciales reales.

## Arquitectura
- **Tipo**: Sitio web estatico (HTML/CSS/JS)
- **Servidor**: `serve` npm package sirviendo archivos estaticos en puerto 3000
- **Backend**: FastAPI minimal en puerto 8001 (health check + fallback static serving)
- **Hosting**: Kubernetes con ingress routing (/ -> port 3000, /api -> port 8001)

## Paginas (9 total)
1. **index.html** — Homepage con hero, La Factoria card, soluciones bento grid, DEUDA LEGAL, propuesta de valor, triangulo, partners, CTA
2. **nosotros.html** — Que somos, reconocimientos, alianzas, valores
3. **recursos.html** — Blog con filtros, noticias, observatorio
4. **contacto.html** — Formulario de contacto, sidebar, beneficios
5. **soluciones/factoria.html** — **NUEVA** Trust API, 4 microservicios, Deuda Legal table, argumento legal, specs tecnicas, integraciones, 3 horizontes, modelos de entrada
6. **soluciones/confianza-digital.html** — Servicios eIDAS, GoCertius, EAD Factory
7. **soluciones/contract-tech.html** — CLM, ciclo de vida contractual
8. **soluciones/activos-digitales.html** — Tokenizacion, DLT, blockchain
9. **soluciones/legaltech-ia.html** — AI Act, AIMS Console, GRC

## Implementado

### Fase 1 — Rediseno UI/UX (26 Feb 2026)
- [x] Nuevo sistema de diseno: Playfair Display + Manrope + JetBrains Mono
- [x] Tailwind CSS via CDN, Phosphor Icons
- [x] Glass morphism, bento grid, micro-animaciones
- [x] Menu mobile, filtros recursos, formulario contacto
- [x] 100% tests pasados

### Fase 2 — Refactorizacion de Contenidos P0 (26 Feb 2026)
- [x] **NUEVA pagina: La Factoria / Trust API** — Compliance Injection, 4 microservicios eIDAS (Evidence, Signature, Notification, Custody), tabla de Deuda Legal con 8 operaciones, argumento legal (blockchain vs sello cualificado), inversión de carga de prueba (Art. 41.2 eIDAS, Art. 326.4 LEC, Art. 25.2 eIDAS), specs tecnicas (99.99%, 45ms, SOC 2, JSON), integraciones (SAP, Workday, Dynamics, SharePoint, n8n, Power Automate), 3 horizontes de valor, modelos de entrada (POC/Departamental/Enterprise)
- [x] **Seccion Deuda Legal en homepage** — Argumento legal decisivo (Sin Trust API vs Con Trust API), lista de riesgos por operacion, CTA a Trust API
- [x] **Card La Factoria en homepage** — Full-width destacada con stats (298 escenarios, ~45ms)
- [x] **Navegacion actualizada** — La Factoria como item destacado en dropdown y mobile menu
- [x] 95% tests pasados (100% en contenido nuevo, 95% por timing de test mobile)

## Fuentes de Verdad
- g-digital-context.md — Identidad, catalogo, ICP, messaging
- g-digital-factoria.md — Trust API, 298 escenarios, 18 sectores
- g-digital-intelligence.md — Inteligencia comercial, cualificacion
- g-digital-playbook.md — Comportamiento comercial, objeciones
- g-digital-content.md — Motor de contenido B2B

### Fase 3 — Infografias Conceptuales (26 Feb 2026)
- [x] 10 infografias generadas e integradas:
  - Compliance Injection (hero Factoria)
  - Iceberg de Deuda Legal (Factoria)
  - Trust API Stack 4 microservicios (Factoria)
  - Inversion de Carga de Prueba (Factoria)
  - Triangulo de Legitimidad (Homepage)
  - Arquitectura 3 Capas (Confianza Digital)
  - 3 Niveles Madurez Contractual (Contract Tech)
  - Contrato Automata de Estados (Contract Tech)
  - GRC Compass Model O-R-C-E-I (LegalTech & IA)
  - De Activo Real a Token Regulado (Activos Digitales)

### Fase 4 — Restructuracion P1 de Contenidos (26 Feb 2026)
- [x] **Confianza Digital** restructurada con arquitectura de 3 capas: Capa 1 Factoria (dark card con link), Capa 2 Soluciones LegalTech EADTrust (Signature Manager, Noticeman, eArchiving, Credential Manager), Capa 3 GoCertius SuperApp (+40K evidencias, Law.com 2025)
- [x] **Contract Tech** restructurada con 3 lineas: Linea 1 Piezas LEGO (building blocks API, flujo pre-contratacion a terminacion), Linea 2 CLM Mono-contrato (prestamos, arrendamientos, arras, modelos embebido y propio), Linea 3 CLM Posicion Contractual (portafolio estrategico, Contract Guardian IA, dashboard ejecutivo)
- [x] **LegalTech & IA** ampliada: GRC Compass Core con stats (16 modulos, 31 roles RBAC, WORM, RLS) + 7 dominios normativos + infografia
- [x] **Activos Digitales** ampliada con infografia de tokenizacion
- [x] Vision "Contrato Computable" con diagrama de automata de estados
- [x] 95% tests pasados

### Fase 5 — Integracion Prototipo Factoria (26 Feb 2026)
- [x] **Certificaciones regulatorias** integradas: eIDAS QTSP, ISO 27001, ISO 20000, ISO 9001, ENS Alto, INCIBE, Ministerio
- [x] **6 Demos Live** con links a aplicaciones funcionales en produccion: Seguro, Proptech, Consentimiento Web, Rent-a-Car, Automotive, Contratacion Telefonica
- [x] **Developer Experience** completa: JSON-Native, Webhooks (events), Sandboxing (3 entornos), SDK TypeScript code example
- [x] **CTAs al prototipo interactivo**: link a legalappfactory.lovable.app + specs documentation
- [x] Contenido del prototipo integrado en la web corporativa manteniendo coherencia visual

## Backlog (P2-P3)

### P1 — Restructuracion de paginas existentes
- [ ] Restructurar Confianza Digital como 3 capas (Factoria -> Soluciones LegalTech -> GoCertius)
- [ ] Restructurar Contract Tech con 3 lineas (Piezas LEGO, CLM Mono-contrato, CLM Posicion Contractual)
- [ ] Ampliar LegalTech & IA (AIMS Console detallado, GRC Compass Core 16 modulos)
- [ ] Ampliar Activos Digitales (OpenBrick, Sylot, Adhara+ con contexto)

### P2 — Contenido nuevo
- [ ] Crear pagina de Sectores (Banca, Seguros, Salud, Logistica, RRHH, Alimentacion, Telecom, Farma)
- [ ] Crear seccion Demos / Casos de uso (12 demos documentadas)
- [ ] Segmentar formulario contacto por buyer persona

### P3 — Contenido editorial
- [ ] Articulos: "Que es la Deuda Legal", "Trust API: como funciona", "Blockchain vs sellos eIDAS"
- [ ] Paginas individuales por producto (GoCertius, Signature Manager, Noticeman, AIMS Console, GRC Compass Core)
- [ ] SEO schema markup (JSON-LD)
