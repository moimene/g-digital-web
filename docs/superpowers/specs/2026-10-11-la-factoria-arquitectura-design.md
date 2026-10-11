# La Factoría como arquitectura: relato, formatos y capacidades

**Spec** · 11-10-2026 · MOI-691 · clave de plan `plan:gdw:w-factoria-arquitectura` · hito M3 · Firma «Renglón vivo» publicada.

Documento público (va al repositorio); el registro de validación, con motivos, está en [Registro de validación · La Factoría](https://linear.app/moimene/document/registro-de-validacion-la-factoria-plangdww-factoria-arquitectura-9fb73ecc8577) y lo legal, en MOI-659. Rige el [protocolo de ejecución](https://linear.app/moimene/document/protocolo-de-ejecucion-contexto-comun-para-agentes-y-personas-dce97c8342be); ante discrepancia, prevalece Linear. Las líneas citadas son de `3c29ca4` (comprobadas el 11-10-2026); la ronda 2 no las mueve y las tandas sí: se relocalizan por su texto sobre `main` con MOI-677 publicada (regla 1).

## 1. Objetivo, decisiones y pregunta abierta

**Objetivo.** Transmitir en público la profundidad de La Factoría, base de los proyectos enterprise; hoy la web la reduce a «cuatro microservicios eIDAS» en varias páginas. Un solo modelo, capacidades por formato y lo publicado sin respaldo conservado y marcado.

**Decisiones de Moisés.** Constancia (regla 6): transcripción literal, con la pregunta (sesión de Claude Code, 2026-10-11 19:56 CEST): https://linear.app/moimene/issue/MOI-691/la-factoria-como-arquitectura-relato-publico-formatos-de-uso-y#comment-a7d1d794.

1. **Producto:** «La Factoría (EAD Factory)», con la Trust API como su API REST; transmitir en público la profundidad de la arquitectura, porque es la base de los proyectos enterprise.
2. **Encaje, opción A:** MOI-691, en M3, bloquea MOI-685; cubre relato, formatos, capacidades por formato, home 04 y modelo antiguo del Trust Explorer; reorienta W-5 (MOI-682) y MOI-684.
3. **Sin respaldo:** no se retira; se marca para validarlo después.
4. **Servicios cualificados:** EADTrust los tendrá en breve y todo está en proceso de regulación; no es crítico.

Moisés decidió esos cuatro puntos. El resto es propuesta de Claude Code, no aprobada por él.

**Interpretación de Claude Code** (si Moisés la corrige, rige su corrección): Enterprise Suite y GoCertius se presentan como plataformas construidas sobre La Factoría (redacción por MOI-659); la decisión 3 cubre lo publicado sobre La Factoría y las piezas de este diseño y **no decide MOI-660** (D-3 sigue pendiente de A, B o C); por la 4, lo publicado sobre cualificación se mantiene, marcado, para validarlo contra la TSL. Las decisiones 3 y 4 cubren lo publicado, no lo nuevo.

**Pregunta abierta.** Se hace una sola vez, en MOI-691:

> En la reescritura de M3, las afirmaciones del registro que dependen del modelo antiguo (Custody Manager como gestor, "cuatro microservicios", rPaaS) ¿se trasladan al texto nuevo, marcadas, o el texto nuevo las sustituye por el modelo real (gestores Evidence/Digital Trust, Signature, Notification y Chat; la custodia como capacidad de Evidence)? Recomendación de Claude Code: sustituir el nombre por el modelo real conservando la capacidad (custodia de evidencias) y marcar lo que siga sin respaldo; no es retirar por falta de respaldo, es la reescritura de la opción A.

Mientras no conteste: la Tanda 1 y la Tanda 2 no tocan esas afirmaciones; en M3, esa parte concreta del texto no se redacta hasta su respuesta; el resto de M3 sigue. Aquí, lo que depende de ella lleva **[R5]** y describe la recomendación; con el traslado, esas afirmaciones pasan literales y marcadas a la pieza nueva.

**No deciden:** MOI-660 (si retira algo, rige también frente al traslado), MOI-679 (mientras, vídeo y túnel como hoy), MOI-678 (mensaje de agentes en el bloque de MOI-683), MOI-690 (M5 y página Plataforma) ni los textos nuevos (MOI-659).

## 2. Modelo

La Factoría (EAD Factory) es la arquitectura base sobre la que g-digital construye Enterprise Suite, GoCertius y los proyectos enterprise. Formatos: **Trust API** (su API REST, principal: la llaman tus sistemas), **MCP** (secundario: la invocan tus agentes de IA) y **Proyectos enterprise** (cierre: lo que no viene de serie). Lenguaje de la Línea 01 (verde, esfera), no paraguas de las cuatro líneas.

- **Atribución.** g-digital diseña La Factoría y publica en GitHub tres servidores MCP (MIT) y sus guías. EADTrust, QTSP del Grupo Garrigues (51 % Garrigues), opera, comercializa y factura los servicios de confianza. Enterprise Suite y GoCertius: plataformas construidas sobre La Factoría, con API (sesión de usuario) y MCP propios; «construida sobre» no sugiere que usen la Trust API.
- **Nombres.** «La Factoría (EAD Factory)» en la primera mención de cada página; luego, «La Factoría»; nunca EAD Factory como otro producto. Gestores (guía de EAD-Factory-MCP): Evidence (Digital Trust), Signature, Notification y Chat, sobre un expediente común; la custodia es capacidad de Evidence (interna o externa); **[R5]** lo publicado como «Custody Manager». Notification es el gestor; Noticeman, su canal y nombre canónico; Notice Manager, módulo de la Suite. «rPaaS (Regulated Platform as a Service)»: así presenta EAD Factory el perfil de GitHub.

**Fuente única `src/data/factoria.ts`**, para La Factoría, W-5, la pila y el Trust Explorer: `PLATAFORMAS` (con enlace); `ACCESOS`; `GESTORES` (ficha `{ sub, body, law }`; el tipo `Gestor` sustituye a `Manager` de `casos-uso.ts`; **[R5]** con el traslado, también Custody Manager, marcado); `TRANSVERSALES` (sin fila en la matriz; las que no tienen respaldo público, marcadas); `CANALES`; `EADTRUST` (`inscritos`: lo que la TSL inscribe para EADTrust; `planoBase`: texto publicado de `confianza-digital.astro:13`, marcado); `CAPACIDADES`.

## 3. Página /soluciones/la-factoria

### 3.1 Cabecera (estructura: CO-02 de MOI-673; meta-fila: MOI-662; recibo: MOI-682)

- `motif="tunnel"` y vídeo `hero-factoria` (`:18`, `:24`) siguen hasta MOI-679; con su opción B, entrada del motivo esfera (MOI-681).
- `linea` «Confianza Digital · Arquitectura» · `kicker` «La Factoría (EAD Factory)».
- H1 de hechos: «La arquitectura sobre la que construimos Enterprise Suite, GoCertius y proyectos enterprise.» (CO-04 veta «Una arquitectura. Tres formas de usarla.»). El actual, «Una llamada REST. Evidencia legal cualificada.», pasa literal y marcado a título del bloque 6a. Propuesta a CO-02 (Tanda 2): adoptarlo ya, con ese traslado; va a MOI-659 y, si se objeta, MOI-691 lo cambia en M3.
- Entradilla sin cifras: «Tus sistemas la usan por la Trust API, su API REST, y tus agentes de IA por MCP. Lo que no viene de serie se construye sobre ella como proyecto.» La cifra de `:21` va a 3.7.
- Meta-fila: «Diseña g-digital · Opera EADTrust (QTSP)». Un solo CTA verde relleno: «Hablar con el equipo técnico» → `/contacto` (prop nueva de CO-02; `cta`/`ctaSub` de `LineaPage.astro:51-56` son del cierre).
- Slot `receipt` con altura reservada para W-4 («huella ilustrativa, sin sello cualificado»); si no se valida, solo la hora.

### 3.2 Barra y 3.3 Deuda Legal

Barra: MOI-662. Deuda Legal: el verde lo quita MOI-663; «Sin validez probatoria» (`:33`) no se toca aquí. Una sola «No es X: es Y», la que elija CO-04 entre `:65` y `:79` (ronda 2). Propuesta: `:79` literal en 6b y apertura de `:65` reescrita con hechos en 6a; si gana `:65`, `:79` se reescribe conservando «clientes MCP compatibles» y su aviso.

### 3.4 Qué hay dentro: recorrido de una operación

Sustituye a «The Stack» (`:37-57`) y «Cómo se integra» (`:59-71`): es W-5 redefinido, que MOI-682 construye desde `factoria.ts` (Confianza Digital enseña la pila; La Factoría, la profundidad).

**Entradilla:** describe la arquitectura. **[R5]** con la recomendación, lleva marcado «rPaaS (Regulated Platform as a Service)» de `:43`, referido a La Factoría, sin «QTSP interno»; con el traslado, `:43` literal y marcado.

**Recorrido:** (1) origen: tus sistemas (ERP, CRM, ECM, apps) o agentes de IA, junto a las plataformas construidas sobre La Factoría; (2) acceso: Trust API y MCP; (3) servicios jurídicos: Evidence (Digital Trust), Signature, Notification y Chat sobre un expediente común (**[R5]** Custody Manager); (4) transversales: testificación con sellado de tiempo y, marcados para validación (decisión 1), motor de ejecución de contratos (eventos y acciones hacia terceros), caja de herramientas documental, anclaje en registro distribuido y pasarela API B2B con observabilidad, como arquitectura («diseñada para»), no como servicio disponible, sin proveedores, redes ni acuerdos y sin pisar la promesa de Contract Tech; (5) canales: email, SMS, WhatsApp, mensajería, Noticeman; (6) EADTrust: solo `EADTRUST.inscritos`, con el rótulo «Servicios cualificados · eIDAS UE 910/2014» (`TrustLayerDiagram.astro:86`).

**Traza:** una, finita, al entrar en pantalla: tu ERP → Trust API → Evidence (expediente) → testificación (sellado de tiempo) → evidencia sellada en el expediente, que se enciende en verde al terminar. Llega a EADTrust solo con la condición previa 1. Las transversales no recorridas, banda lateral quieta.

**Fichas:** nodos `<button>` con `aria-describedby`, según las reglas de W-5 (MOI-682); se abren también con el teclado. Los gestores conservan literal el texto publicado de `stack` (`:8-13`), `law` incluido; lo del registro, marcado. El «qué hace» nuevo dice «firma avanzada y simple» (sin «solo») y la notificación sin categoría jurídica; nunca el art. 25.2 ni los arts. 43-44. **[R5]** con la recomendación, lo publicado de Custody Manager (custodia, LTV, re-sellado, «Nube soberana europea») pasa marcado a Evidence. Chat: qué hace, sin ancla legal. Fichas nuevas y `figcaption`, a MOI-659.

**Reglas de W-5:** `stroke-dasharray` sobre `pathLength=1`; `figcaption` que cuenta el recorrido; vertical por debajo de 640 px; fuera `animateMotion`, `pulse-glow`, degradado y sello girando. «SDK» y «Webhook» las quita RV-04 (MOI-661) por legibilidad; W-5 no las repone.

### 3.5 a 3.8

- **Capacidades:** filas (sección 7), núcleo arriba y plataformas debajo. TC-03 (MOI-671) pasa antes el Stack a filas con su contenido literal, incluido lo de R5; aquí se reutiliza. Ninguna ancla legal nueva sin MOI-659. Pie con fecha y fuente, a MOI-659.
- **Trust Explorer:** **[R5]** lead (`:91`) «con el flujo de los cuatro managers» → «con los gestores de La Factoría que intervienen». Cifra con la fórmula de MOI-676 (W-G3), con «18 sectores» literal y marcado. Chips (`:94`) a enlaces (MOI-674); certificado a espécimen (MOI-662 según MOI-660; W-G1 de MOI-676); «Abrir el Trust Explorer» (`:100`), siempre secundario.
- **CTA final:** «Plantear un proyecto sobre La Factoría» → `/contacto`; `ctaSub` «Cuéntanos qué operación quieres construir sobre La Factoría.». `CTAEditorial` a la izquierda, sin píldora ni escudo, con el glifo quieto de `renglon.ts` (MOI-680/681; si no están, sin glifo). Único verde relleno de su pantalla. A MOI-659.

## 4. Confianza Digital: la pila (MOI-684, W-G5)

Las cinco capas paralelas (`confianza-digital.astro:8-14`) pasan a tres planos, leídos de `factoria.ts`:

- **Plataformas:** Enterprise Suite y sus productos eIDAS, también sueltos (Signature Manager, Notice Manager, eArchiving, Credential Manager), GoCertius y proyectos enterprise → `/soluciones/enterprise-suite`, `gocertius.io` y `/soluciones/la-factoria#proyectos`.
- **Arquitectura:** La Factoría (EAD Factory): Trust API y MCP → `/soluciones/la-factoria`.
- **Base:** servicios de confianza de EADTrust (QTSP), marcado → `eadtrust.eu` (o lo que fije RV-09).

«Soluciones diseñadas por g-digital» (`:11`) pasa entero a plataformas; los demás textos se conservan. **[R5]** `:9` («4 microservicios… Custody»). «Cinco tipologías de producto» (`:47`) deja de contar (el H1 es de CO-02); nunca «5 capas». No cambian el calendario de eIDAS 2 ni la ronda 2 (`:29`, `:38`).

## 5. Home, sección 04

- **Rótulo** (`index.astro:183`): «04 · Confianza Digital · La Factoría», salvo que CO-04 lo cambie antes.
- **Párrafo** (`:185`), de MOI-691: «Dentro de Confianza Digital, La Factoría (EAD Factory) es la arquitectura sobre la que construimos Enterprise Suite, GoCertius y proyectos enterprise. Tus sistemas la usan por la Trust API, sin migrar plataformas, y tus agentes, por MCP.» Conserva «tus sistemas» y «sin migrar plataformas». **[R5]** «cuatro microservicios eIDAS (evidencia, firma, notificación y custodia)»: con la recomendación, la custodia de evidencias como capacidad, sin contar gestores. A MOI-659.
- **Recuadro MCP** (`:186-189`): «la misma confianza cualificada» y «con los guardrails del QTSP», marcados, también en el bloque de MOI-683.
- **Pestañas REST | MCP, `api-ejemplo.ts` y servidores:** MOI-683, sin depender de MOI-691 (usa el párrafo vigente; puede enlazar a `#proyectos`). El host de `:199` lo cambia CO-09.
- **Desarrolladores** (`:240`): «SDKs, sandboxes de producto», marcado.

## 6. Trust Explorer y resto del modelo antiguo

Decisión 1, no retirada. La opción A nombraba el Trust Explorer; el resto entra por coherencia, como propuesta de Claude Code (`grep -rniE "custody|microservicio" src`, sin `_rescatado`). Lo del registro sigue marcado.

- `consts.ts:21` («Trust API + MCP · el producto») → «Arquitectura base · Trust API · MCP».
- `consts.ts:58` (`INFRA`, `PLATAFORMA`, `EXPERIENCIA`, `BASE`; la home muestra tres, `index.astro:141`) → `[['PLATAFORMAS', 'Enterprise Suite · GoCertius'], ['ARQUITECTURA', 'La Factoría · Trust API · MCP'], ['BASE', 'QTSP EADTrust']]`, los tres visibles.

**[R5]** Solo tras la respuesta; lo que sigue es la recomendación:

- `TrustSimulator.astro:14` y `:69`: gestores de `factoria.ts`; «FACTORÍA · MICROSERVICIOS» → «LA FACTORÍA · GESTORES».
- `casos-uso.ts` (tipo, `MANAGER_META` y `managers`), `demo-credito.ts`, `SectorDemo.astro:102` y `servicio:` de cuatro casos `.md` (`:10`): tipo `Gestor` con Chat; Custody → `'Evidence'`, «Evidence Manager» o «Evidence (custodia)», sin duplicados; icono por gestor real.
- `recursos.astro:232` → «La Factoría (EAD Factory): Trust API y MCP.».
- `mcp-agentes.md:17` y `firma-internet-agentico.md:26` → los tres servidores y qué cubre cada uno («g-digital publica EAD-Factory-MCP, el servidor MCP de La Factoría (EAD Factory), con sus gestores»).
- `compliance-injection.md:25` → la Trust API con sus gestores, sin contarlos; `:28` → «La Factoría (EAD Factory)… rPaaS» con la atribución. «Con webhooks y SDKs» y «coste fijo predecible», marcados.
- `contratacion-reforzada.md:31` → «Evidence (con custodia), Signature y Notification, con los servicios de confianza de EADTrust».
- `escenarios.astro:39` → «invoca los gestores de La Factoría», si el bloque sigue tras MOI-674; «inmutable», marcado.
- `confianza-digital.astro:9`, `la-factoria.astro:42`, `:78`, `:91` y `TrustLayerDiagram.astro:17`: secciones 4, 3.5, 8, 3.7 y 3.4.

`CLAUDE.md`: MOI-658.

## 7. Matriz de capacidades × formato

Fuente: documentación publicada de cada API y conector (11-10-2026). Sin calificaciones jurídicas nuevas. Valores: Sí · No · Parcial · Se estudia.

| Capacidad | Trust API | MCP de La Factoría | Enterprise Suite | GoCertius | Proyecto enterprise |
| -- | -- | -- | -- | -- | -- |
| **Núcleo** | | | | | |
| Expedientes | Sí ¹ | Sí | Sí | Sí | Sí |
| Evidencias selladas con sello de tiempo ² | Sí ¹ | Sí | Sí, de ficheros | Sí, de ficheros | Sí |
| Informe del expediente con paquete probatorio | Sí: informe firmado y paquete de verificación | Sí | Sí, dossier certificado | Sí, dossier con plantilla estándar | Sí |
| Notificación ³ | Sí | Sí; enviar exige MCP Tasks; si no, envío automático y consulta | Sí | Sí | Sí |
| Firma electrónica avanzada y simple ⁴ | Sí | Sí | Sí | No | Sí |
| **En plataformas** | | | | | |
| Certificados de custodia y dossier con plantillas | No: equivale el informe del expediente | No | Sí | Sí, plantilla estándar | Se estudia |
| Usuarios y accesos | No: cuenta de servicio | No | Parcial: sesión y claves, sin administrar usuarios por API | Parcial: igual | Se estudia |
| Chat | Parcial: el gestor existe, sin flujo publicado | No | No | Sí: «Chat Certificado», con Telegram | Se estudia |
| Captura atestada de foto, vídeo y web | No | No | No | Solo desde la app | Se estudia |

¹ Condición previa 2; si falla, «Parcial». ² Sin «cualificado» hasta la condición previa 1. ³ Sin categoría jurídica; Noticeman es el canal. ⁴ Sin «solo» ni mecanismo; la ficha de Signature conserva su texto publicado, marcado.

Cada columna de plataforma agrupa plataforma, API y MCP; sus MCP cubren lo mismo salvo usuarios (ninguno) y firma (no en GoCertius_MCP), salvo confirmación escrita de g-digital. Bajo 640 px, un bloque por capacidad, sin scroll horizontal.

## 8. Formatos

Con jerarquía, no tres cajas iguales: 6a principal, 6b secundario, 6c cierre hacia el CTA.

**6a · Trust API.** *Se promete:* API REST de La Factoría (EAD Factory) con Evidence (Digital Trust), Signature, Notification y Chat sobre expediente común; OAuth 2.0 *client credentials*, un token para todos; entorno de integración antes de producción; acceso contractual (EADTrust da de alta a la organización); ejemplo de `src/data/api-ejemplo.ts` (CO-09), «ilustrativo» salvo copia de la documentación, en el bloque cURL / JSON / MCP de CO-02; CTA «Solicitar acceso» → `/contacto` (envío según MOI-675). *Se conserva, marcado:* el H1 actual como título y `:65` literal («Tu ERP, CRM, ECM… evidencia cualificada eIDAS»), con la apertura que decida CO-04. *No se promete:* autoservicio, sandbox público, SLA, precios, plazos, webhooks, SDK, flujo de chat (6c), hosts ni portales. Lo publicado sobre webhooks y SDK sigue marcado: el texto nuevo ni lo repite ni lo niega.

**6b · MCP.** *Se promete:* tres servidores **publicados** (MIT) para **clientes MCP compatibles**, con el aviso literal de la ronda 2 «(su publicación no implica SLA, soporte de integración ni compromiso de disponibilidad en producción)» y enlace directo a cada repositorio de [g-digital-by-Garrigues](https://github.com/g-digital-by-Garrigues): EAD-Factory-MCP (expedientes, evidencias selladas, informes, firma, notificación; sin chat; `notification_request_send` exige MCP Tasks); EAD_Enterprise_Suite_MCP (expedientes, evidencias, dossier certificado, firma, notificación); GoCertius_MCP (expedientes, evidencias, dossier, notificación, chat; sin firma). Herramientas de ejemplo copiadas de los README y contrastadas con la instantánea JSON fechada de MOI-683, leída en el build. *Se conserva, marcado:* «Agent-ready: confianza cualificada por MCP» (`:77`); «con los guardrails del QTSP y trazabilidad de cada invocación» (`:78`); `:79` literal si CO-04 lo elige; **[R5]** «los mismos cuatro microservicios» (`:78`). *No se promete:* «en producción», «cualquier cliente MCP», que un servidor lo cubra todo. Sin repositorio de distribución, informes de release, hosts ni portales; sin «qualified» ni «immutable» de los README (su revisión, fuera del plan, la decide Moisés).

**6c · Proyectos enterprise.** *Se promete:* si Moisés lo confirma, el método en una frase, no en tres tarjetas (adoptar lo que existe, adaptarlo a la operación o construir una pieza nueva sobre la misma arquitectura); la prueba pública: así se construyeron Enterprise Suite y GoCertius; el destino de lo que no viene de serie (chat, captura atestada, orquestación de varios gestores); el reparto g-digital / EADTrust; ancla `id="proyectos"` y CTA final. *Se conserva:* nada («rPaaS» va a 3.4 [R5]; «coste fijo predecible» se queda donde está). *No se promete:* plazos, SLA, cifras, presupuestos, porcentajes, clientes, casos ni «garantizamos». Redacción a MOI-659.

## 9. Registro de validación y marcas

**Criterio.**

- **Nada se retira por falta de respaldo.** Solo sale por validación negativa con decisión de Moisés o por decisión expresa suya en otro issue (p. ej. MOI-660).
- **Traslado:** si una pieza cambia por diseño, la afirmación pasa con el mismo texto y su marca a la que trata lo mismo, sin ampliarse ni servir de base a nada nuevo. Vale en M3 y en las PR de las tandas 1 y 2, salvo retirada por MOI-660.
- **Modelo antiguo:** sigue la pregunta abierta; mientras, nadie lo toca.
- **Única excepción:** «SDK» y «Webhook» del diagrama, quitadas por legibilidad en RV-04; su entrada sigue abierta donde sigan publicadas.

**Dónde vive.** [Registro de validación · La Factoría](https://linear.app/moimene/document/registro-de-validacion-la-factoria-plangdww-factoria-arquitectura-9fb73ecc8577): documento de Linear «Registro de validación · La Factoría (plan:gdw:w-factoria-arquitectura)», numeración única #1…#N. Cada entrada: `fichero:línea` (base `3c29ca4`; la ronda 2 no mueve líneas, las tandas sí), texto, por qué no tiene respaldo (fuente) y qué lo validaría. MOI-691 lo resume (número y tema) y lo enlaza. Nunca se copia al repositorio.

**Condiciones previas a publicar** (no son entradas; sin ellas, la alternativa):

1. **TSA:** g-digital y EADTrust confirman por escrito que el sello de las evidencias lo emite la TSA cualificada de EADTrust (lo pide Moisés). Si no, la traza acaba en «evidencia sellada (expediente)» y la matriz no dice «cualificado».
2. **Escritura:** prueba de extremo a extremo, en integración, de crear expedientes y evidencias por la Trust API, con credenciales de Moisés o de quien designe por escrito (regla 4). Si no, esas celdas, «Parcial».
3. **Transversales:** se muestran por su función por la decisión 1 de Moisés, marcadas; sus entradas del registro se cierran cuando g-digital o EADTrust confirman por escrito que el motor de contratos, la caja documental, el anclaje en registro distribuido y la pasarela B2B forman parte de la arquitectura. Sus textos pasan por MOI-659.
4. **MOI-659 (regla 10):** lo no validado no se publica.

**Marcas:** solo clave y número, sin motivo; una entrada, en uno o varios ficheros; nunca dentro de un texto visible ni de una cadena. Plantilla `.astro`: `{/* VALIDAR plan:gdw:w-factoria-arquitectura #N */}` justo antes del elemento, nunca `<!-- -->`. SVG insertado con `set:html`: en la plantilla Astro que lo inserta, nunca dentro del SVG. Frontmatter `.astro` y `.ts`: la misma marca tras `//`, en la línea anterior. `.md`: la misma tras `#`, en el frontmatter YAML (la línea del cuerpo consta en el registro). Entran en la PR de MOI-691, con el texto en su sitio (una PR de tanda que toque antes la línea puede añadirla); la PR que aplica una validación las quita y lo anota. `grep -r "VALIDAR" dist/` da 0 resultados.

## 10. Reglas de redacción

- **Textos nuevos, solo lo acreditado hoy:** sello de tiempo y certificados cualificados de EADTrust (firma, sello, autenticación web) y EADTrust como QTSP (TSL nº 189, 24-09-2026); firma avanzada y simple; notificación sin categoría jurídica («notificación», «Noticeman») mientras MOI-659 no fije otra. «Sello de tiempo cualificado de EADTrust» en la traza exige la condición previa 1. Custodia, archivo, expediente, informe, dossier y chat nunca son «cualificados»; los nombres publicados («Chat Certificado») se mantienen.
- **Rondas, literales** (una línea de la ronda 2 se reescribe solo si las conserva; lista completa en el diff de MOI-655). Ronda 1: art. 326.4 LEC para lo cualificado; «presunción legal de autenticidad, integridad y fecha»; «desplaza la carga de desvirtuar la prueba al impugnante»; «servicio cualificado de entrega electrónica certificada». Ronda 2: «Valor probatorio.»; «tus sistemas» y «sin migrar plataformas», nunca «cualquier sistema»; «clientes MCP compatibles» con su aviso; «custodia a largo plazo»; «la carga de desvirtuarla»; numeración eIDAS española con la inglesa entre paréntesis.
- **Presunción:** solo del sello de tiempo cualificado (fecha e integridad, art. 41.2 eIDAS) y de firmas y sellos cualificados, con las fórmulas de las rondas; nunca «inversión de la carga». Lo calculado en el navegador (W-4, W-G2) nunca dice «validez» ni «presunción».
- **Registro distribuido:** la presunción del QEL es de integridad y orden secuencial, nunca de «validez legal»; la da el servicio del prestador, no la red; no da cumplimiento sectorial. De lo propio, solo «diseñados conforme al marco de control» del Reglamento de Ejecución (UE) 2025/2531. Ninguna red, socio ni acuerdo.
- **Verbos:** «diseñado para», «orientado a»; nunca «garantizamos», «aseguramos», «blindar», «inmunidad», plazos ni SLA no publicados. MCP «publicados», nunca «en producción».
- **Cifras:** solo del Claim Registry, con fuente y fecha; contadores nunca a 0 en el HTML.
- **Infraestructura por deducción:** con la Suite construida sobre La Factoría, el proveedor que se nombre para ella o como socio se atribuye a La Factoría (`enterprise-suite.astro:20`, `nosotros.astro:24-25`, logos de `index.astro:270`; «Nube soberana europea» [R5]). Lo tratan MOI-662 (HG-02) y MOI-671 (TC-04) según MOI-660.
- **Nunca:** clientes ni competidores; proveedores de nube por nombre en textos nuevos; hosts de API, portales de credenciales ni secretos; porcentajes de cobertura.
- **Posicionamiento:** «infraestructura legal», nunca «de confianza»; eIDAS, Deuda Legal y prueba electrónica, solo Línea 01.
- **Anti-IA:** sin fórmulas simétricas; máximo una «No es X: es Y» por página; filas, no tarjetas clónicas; sin degradados violeta o índigo, cristal, 3D ni manchas; sin librerías de animación nuevas.
- **Verde:** un CTA verde relleno por pantalla; Deuda Legal sin verde; «Sí» de la matriz en texto; lima, máximo una vez por pantalla.
- **Ejemplos:** «ilustrativo» si no se copian de la documentación; nada que parezca persona, fecha o dato real.

## 11. Dependencias y secuencia

**Base:** `main` con MOI-677 publicada (regla 1); la rama de MOI-655 solo aporta textos de la ronda 2; ninguna rama sobre `3c29ca4`.

**Relaciones de MOI-691:** bloqueado por MOI-659 y MOI-677; bloquea MOI-682, MOI-684 y MOI-685 (con MOI-682 y MOI-684, decisión técnica ordinaria de orden: W-5 y la pila leen el modelo que define MOI-691; los dos dicen «Bloqueado por MOI-691»); relacionado con MOI-683, MOI-673, MOI-671, MOI-664, MOI-661, MOI-662, MOI-660, MOI-676, MOI-674, MOI-679, MOI-690 y MOI-658.

**Secuencia:**

1. **M0:** MOI-655 → MOI-656; MOI-658 pone al día `CLAUDE.md`. Comentario informativo en MOI-659 con los textos nuevos con efecto jurídico o publicitario (los que este documento envía a MOI-659). Moisés los envía al asesor, pide las confirmaciones 1 y 3 y da de alta las credenciales de la 2.
2. **M1 · Tanda 1** (MOI-667): MOI-661 (RV-04, RV-09), MOI-662, MOI-663, MOI-664 (CO-09, CO-10). No tocan lo de la pregunta abierta; el resto del registro se conserva salvo retirada por MOI-660, aún pendiente.
3. **M2 · Tanda 2** (MOI-677): MOI-673 (CO-02, CO-04), MOI-671 (TC-03), MOI-674, MOI-676 (W-G3, W-G1; también tras MOI-659). Mismas reglas.
4. **M3** (MOI-685): primero MOI-691 (`factoria.ts`, textos, matriz, formatos, home 04, modelo antiguo y marcas; lo [R5], tras la respuesta); después MOI-682 (W-4, W-5, W-G2) y MOI-684. MOI-683 va aparte; MOI-680 y MOI-681 dan el glifo. MOI-682 y MOI-684 parten de la rama de la PR de MOI-691 y abren la suya contra ella.
5. **M5:** tras MOI-690. Endpoints, catálogo de herramientas y demo MCP, a la página Plataforma si se elige, con enlaces en los dos sentidos.

**Comentarios de agente** (informan o proponen; no cambian alcance): MOI-685, bloqueado también por MOI-691 · MOI-677, bloquea MOI-691 · MOI-664, rótulo neutro para CO-10 en vez de «Los cuatro microservicios»; lo decide Moisés · MOI-671, TC-03 con N filas; lo decide Moisés · MOI-683, el párrafo de la sección 04 lo reescribe MOI-691; las pestañas siguen en MOI-683 · MOI-659, solo informa · MOI-673, H1 y fórmula de CO-04 · MOI-660, el elemento 7 no se suma a D-3 (sigue pendiente de A, B o C).

**Puerta humana:** Moisés contesta la pregunta abierta; autoriza por escrito la publicación en MOI-685; envía los textos al asesor; pide las confirmaciones (condición previa 1 y entradas del registro); da de alta las credenciales o designa por escrito a quien lo haga (regla 4). Ningún agente cierra entradas sin confirmación.

## 12. Pruebas y criterios de hecho

Nivel: **probado**; se publica en MOI-685.

1. **Build:** PR con vista previa; `npm run build` y `astro check`, 0 errores y 0 avisos.
2. **390 px:** sin scroll horizontal en La Factoría, Confianza Digital, home y `/escenarios`; recorrido vertical y matriz en bloques bajo 640 px; capturas antes y después a 1440 y 390 px.
3. **Teclado:** Tab llega a cada nodo, su ficha se abre también con el teclado y el foco es visible (patrón de W-5, MOI-682).
4. **Movimiento reducido:** traza ya dibujada y nada se mueve.
5. **Sin fetch:** ninguna petición de red desde las páginas tocadas (red o Playwright); `grep -rn "fetch(" src` vacío en sus componentes.
6. **Contraste AA:** 4,5:1 y 3:1 (texto grande y componentes), en las dos superficies, con matriz y fichas.
7. **Lighthouse:** LCP y CLS de La Factoría, Confianza Digital y home, antes (producción o MOI-682) y después, en MOI-691.
8. **Marcas:** `grep -r "VALIDAR" dist/` da 0 resultados; en `src`, al menos una marca por entrada abierta de los ficheros que toca la PR, solo con clave y número.
9. **Registro:** cada afirmación sigue en `dist/`, o su traslado (o lo que resulte de la pregunta abierta) consta en [Registro de validación · La Factoría](https://linear.app/moimene/document/registro-de-validacion-la-factoria-plangdww-factoria-arquitectura-9fb73ecc8577); solo sale por MOI-660 o por validación negativa decidida por Moisés.
10. **Modelo antiguo [R5]:** con la recomendación, `grep -rniE "custody|microservicio" dist` y `grep -rn "cuatro managers" dist` vacíos (salvo texto copiado de los README), y la custodia en Evidence, marcada; con el traslado, siguen en `dist/` y marcadas. Antes de cerrar la sección 6, se repite el grep en `src`.
11. **Fuente única:** recorrido, pila y gestores del Trust Explorer importan `src/data/factoria.ts`.
12. **Rondas legales:** el diff contra `main` no altera las formulaciones de la sección 10.
13. **Condiciones previas:** MOI-691 recoge confirmaciones y prueba de escritura; si falta alguna, alternativa; textos nuevos idénticos a los validados en MOI-659.
14. **Nombres prohibidos:** `dist` contra una lista local en `.trabajo-local/`, no versionada.

## Referencias

- [Auditoría de diseño (10-10-2026)](https://linear.app/moimene/document/auditoria-de-diseno-anti-ia-y-propuesta-renglon-vivo-10-10-2026-ea61fea03f53), §4 (W-4, W-5, W-G1 a W-G5, «Riesgos»).
- Constancia: https://linear.app/moimene/issue/MOI-691/la-factoria-como-arquitectura-relato-publico-formatos-de-uso-y#comment-a7d1d794 · registro: [Registro de validación · La Factoría](https://linear.app/moimene/document/registro-de-validacion-la-factoria-plangdww-factoria-arquitectura-9fb73ecc8577) · TSL española nº 189 (24-09-2026): https://tsl.digital.gob.es/TSL.xml
