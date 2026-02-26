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

### Fase 6 — Biblioteca de Conocimiento / Recursos (26 Feb 2026)
- [x] **Rediseno completo** de la pagina de Recursos como "Biblioteca de Conocimiento: Derecho + Tecnologia"
- [x] **6 infografias clickables** con lightbox (zoom): eIDAS completo, Inversion Carga de Prueba, Ley 6/2020, CLM Corazon Tecnologico, Canal de Arrendamiento 15 fases, Estandar K-TECH Arras
- [x] **12 pildoras de conocimiento** organizadas por categoria: Marco Legal (2), Tecnologia de Confianza (3), Contract Tech (3), Aplicaciones Practicas (3), IA (1)
- [x] **Filtros por categoria** con sticky bar: Todos, Marco Legal, Tecnologia, Contract Tech, Aplicaciones, IA & Cumplimiento
- [x] **CTA a demos interactivas**: links a trust-seal-demo.lovable.app/conceptos y legalappfactory.lovable.app
- [x] Noticias mantenidas en seccion separada
- [x] Lightbox con cierre por click y Escape

### Fase 7 — Articulos SEO + Derecho Computable (26 Feb 2026)
- [x] **Articulo estrella: Derecho Computable y Contrato Computable** (~2.500 palabras, 15 min lectura)
  - Seciones: El problema del derecho como texto, Que es el Derecho Computable, El Contrato Computable como automata de estados, Los 3 componentes (maquina de estados, orquestador por eventos, logica determinista), Problema de motores de reglas enterrados, Capa de evidencia Trust API, 3 niveles de madurez g-digital
  - Herramientas referenciadas: Catala, DMN, Accord Project, BPMN+CMMN
  - Infografia: Derecho Computable (Traditional Law -> Digital Law -> Computable Law)
  - Tabla: Fases del contrato con evidencia generada por Trust API
  - Links a Contract Tech y Trust API
- [x] **Bloque destacado** en Biblioteca de Conocimiento (recursos.html) con link al articulo + infografia
- [x] **Estructura de /recursos/** como directorio de articulos individuales con URLs limpias
- [x] Template de articulo SEO reutilizable: hero con tags, back-link, infografia, cuerpo, highlights, related, CTA

### Fase 8 — Articulos SEO individuales (26 Feb 2026)
- [x] **Articulo "Deuda Legal"** (~1.800 palabras, 10 min): Analogia con deuda tecnica, 8 operaciones criticas detalladas con Hoy/Riesgo/Con Trust API, argumento legal, tabla blockchain vs eIDAS, como cuantificar, Compliance Injection
- [x] **Articulo "Inversion de la Carga de la Prueba"** (~1.500 palabras, 12 min): Principio procesal, base normativa detallada (Art. 41.2 eIDAS, Art. 25.2 eIDAS, Art. 326.4 LEC, Ley 6/2020), por que blockchain NO invierte la carga, 2 infografias integradas
- [x] **3 articulos operativos** en /recursos/ con URLs SEO limpias: derecho-computable, deuda-legal, inversion-carga-prueba
- [x] Links cruzados entre articulos (related cards al final de cada uno)
- [x] Links desde pildoras en Biblioteca de Conocimiento a articulos individuales
- [x] **12 paginas totales** verificadas: 200 OK en todas

## Paginas totales del sitio: 12
1. index.html (Homepage)
2. nosotros.html (Sobre nosotros)
3. recursos.html (Biblioteca de Conocimiento)
4. contacto.html (Contacto)
5. soluciones/factoria.html (La Factoria - Trust API)
6. soluciones/confianza-digital.html (Confianza Digital - 3 capas)
7. soluciones/contract-tech.html (Contract Tech - 3 lineas)
8. soluciones/activos-digitales.html (Activos Digitales)
9. soluciones/legaltech-ia.html (LegalTech & IA)
10. recursos/derecho-computable.html (Articulo SEO)
11. recursos/deuda-legal.html (Articulo SEO)
12. recursos/inversion-carga-prueba.html (Articulo SEO)

### Fase 9 — Paginas Sectoriales (26 Feb 2026)
- [x] **Banca & Fintech** (/sectores/banca): dolor (DORA, KYC, scoring IA), 6 escenarios detallados con endpoints API, marco regulatorio (DORA, NIS2, AI Act, eIDAS 2.0), 4 buyer personas con mensajes diferenciados (CISO, CIO, CLO, CFO)
- [x] **Seguros & Insurtech** (/sectores/seguros): dolor (IDD, contratacion telefonica, siniestros), 6 escenarios con 2 demos live (contratacion seguro, contratacion telefonica), regulacion IDD
- [x] **Salud & Digital Health** (/sectores/salud): dolor (Ley 41/2002, RGPD Art. 9, telemedicina), 6 escenarios (consentimiento, historia clinica, teleconsulta, receta, clinical trials, notificacion resultados), 25 escenarios total
- [x] JSON-LD schema anadido en paginas sectoriales
- [x] **15 paginas totales** verificadas: 200 OK en todas

### Fase 10 — Nosotros con contenido corporativo real + Sectoriales (26 Feb 2026)
- [x] **Nosotros reescrita** con contenido de g-digital.garrigues.com:
  - Mision con texto real del sitio corporativo
  - "Somos Garrigues" con 3 entidades (Garrigues: primer despacho UE, Garrigues Digital: TechLaw, g-digital: LawTech)
  - EADTrust con detalle real (51%, rPaaS, QTSP)
  - **6 profesionales reales**: Eduardo Abad (socio), Moises Menendez (director), Oscar del Barrio (producto), Hugo Alonso (desarrollo), Belen Aguayo (product owner), Albi Rodriguez (Latam)
  - **4 profesionales Garrigues gobierno**: Jose Ramon Morales, Cristina Mesa, Alejandro Padin, Alejandro Huertas
  - Partners reales con descripciones: ioBuilders (participacion), Microsoft Azure, Oracle Cloud
  - Observatorio con link a Comillas/ICADE
  - JSON-LD Organization schema
- [x] **5 paginas sectoriales nuevas**: Logistica, RRHH & Laboral (Workday/SAP), Alimentacion & APPCC, Telecomunicaciones, Farmaceutico
- [x] **20 paginas totales** verificadas

## Paginas totales del sitio: 20
1-4. Homepage, Nosotros, Recursos (Biblioteca), Contacto
5-9. Soluciones: Factoria, Confianza Digital, Contract Tech, Activos Digitales, LegalTech & IA
10-12. Articulos SEO: Derecho Computable, Deuda Legal, Inversion Carga de Prueba
13-15. Sectores: Banca & Fintech, Seguros & Insurtech, Salud & Digital Health

### Fase 11 — Fotos reales + Hub sectores + Articulo eIDAS + Logos SVG + Plan UX (26 Feb 2026)
- [x] **Fotos reales del equipo** descargadas e integradas: 6 profesionales con foto real de g-digital.garrigues.com
- [x] **Logos SVG oficiales** descargados (15): g-digital, Garrigues, Garrigues Digital, EADTrust, EAD Factory, GoCertius, ioBuilders, Microsoft, Oracle, OpenBrick, iconos de soluciones, Somos Garrigues
- [x] **Logos integrados** en Nosotros: seccion "Somos Garrigues" con logos reales (Garrigues, Garrigues Digital_, g-digital), partners con logos (ioBuilders, Microsoft, Oracle)
- [x] **Hub /sectores/** creado: grid de 8 sectores con escenarios, regulacion, badges, stats (298/18/1 REST)
- [x] **Articulo eIDAS 2.0** creado: EUDI Wallet, QEA/QEAA, MRQSCD, como prepararse, infografia integrada, JSON-LD
- [x] **Plan de adaptacion UX** documentado: 3 fases (critico/visual/adicional) con analisis comparativo de ambas webs
- [x] **22 paginas totales** + hub sectores = funcionando

## Backlog

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
