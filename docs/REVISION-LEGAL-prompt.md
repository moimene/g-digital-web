# Prompt para revisión legal — web g-digital v4 (rediseño editorial)

> Uso: pegar este prompt completo en el modelo asesor legal. Fecha del contenido revisado: 2026-08-02. Sitio: g-digital-web-sage.vercel.app (producción).

---

## PROMPT

Actúa como **asesor legal senior del Grupo Garrigues** especializado en derecho digital, servicios de confianza eIDAS y comunicación comercial. Vas a revisar las **afirmaciones jurídicas publicadas en la web corporativa de g-digital** (la división de negocios digitales de Garrigues; EADTrust es el QTSP del grupo, participado al 51%).

**Contexto y objetivo — léelo antes de evaluar:** el sitio es una **propiedad comercial y de marketing** (captación B2B, educación de mercado), no un dictamen ni asesoramiento jurídico a clientes. El objetivo es **comercial en todo caso**: la revisión debe hacer el contenido *publicable y defendible en público* (exacto, prudente y compatible con las reglas de publicidad), no convertirlo en un documento académico. Agradezco el riesgo real, no el riesgo teórico: márcame lo que de verdad puede traer un problema (engaño publicitario, claim de eficacia jurídica excesivo, precepto mal citado, dato no demostrable) y no lo que solo sería "más correcto decirlo de otra forma".

**Lo que te pido, para CADA extremo listado abajo:** una de estas tres resoluciones con justificación de 1-2 líneas —
- **OK** (publicable tal cual),
- **MATIZAR** (con la redacción exacta que propones), o
- **RETIRAR** (con el motivo).

**Guardrails que ya aplicamos** (para que no los repitas): no nombramos competidores; no usamos "garantizamos/aseguramos/inmunidad/blindar/<24h" — usamos "diseñado para / orientado a"; ninguna cifra de mercado sin fuente; ninguna SLA pública; los whitepapers llevan la coletilla "divulgativo, no constituye asesoramiento jurídico"; la presunción siempre como *iuris tantum*; y la regla de atribución "g-digital diseña; EADTrust opera y factura como QTSP".

---

### A. Citas legales estructurales (las más sensibles)

**A1 — LEC 326.3 vs 326.4.** El copy *legacy* ya publicado dice: *"Inversión de la carga de la prueba (art. 41.2 eIDAS, 326.4 LEC)"* (páginas de líneas y La Factoría). Las piezas **nuevas** dicen: *"con servicio de confianza cualificado, el art. 326.3 LEC presume la autenticidad e integridad del documento y corresponde a quien lo impugna probar su falsedad; sin él, el art. 326.4 exige acreditar la autenticidad por peritaje sobre el procedimiento empleado"*.
Preguntas: (1) ¿es correcta la formulación del par 326.3/326.4? (2) ¿debo alinear el copy legacy cambiando 326.4 → 326.3 (o al par)? (3) ¿es publicitable la frase resumen *"quien presenta evidencia cualificada empieza el litigio ganando el plano probatorio"*?

**A2 — Presunciones eIDAS tal como las publicamos:**
- Art. 25.2: la firma cualificada (QES) *"equivale por ley a la firma manuscrita en toda la UE"*.
- Art. 41.2: el sello de tiempo cualificado goza de *"presunción de exactitud de la fecha y de integridad del dato"*.
- Arts. 43-44: la entrega electrónica certificada cualificada presume *"integridad, envío, recepción y exactitud de fecha y hora"*.
- Arts. 45i-45j (eIDAS 2): el archivo electrónico cualificado presume *"integridad y origen durante todo el período de conservación"* — publicado siempre como **"preparado para"** (nunca como capacidad ya cualificada), porque los estándares de ejecución están pendientes. ¿Es suficiente esa coletilla?

**A3 — Regla de la firma no cualificada.** Publicamos: *"la firma no cualificada sigue siendo válida y admisible; lo que pierde es la presunción y traslada la carga probatoria"*. ¿Correcto y suficiente?

### B. eIDAS 2 / EUDI Wallet (artículos "Business Wallet" y concepto "EUDI Wallet")

Publicamos:
- *"Los Estados miembros ponen la wallet a disposición del ciudadano antes de finales de 2026, con la obligación de aceptación del sector público en esa misma ventana."*
- *"La obligación de aceptación del sector privado llega hacia finales de 2027, para organizaciones con autenticación reforzada exigida por ley o por contrato (banca, seguros, telco, energía, salud, educación, grandes plataformas…)"*.
- *"El piloto europeo WE BUILD (~200 socios, 13 registros mercantiles europeos) está probando ya la Business Wallet (KYB, mandatos digitales, operativa transfronteriza)."*
- El patrón de **contratación reforzada en 6 pasos** (identificación → exposición → comprobación de comprensión → aceptación separada de cláusulas sensibles → firma rQES → entrega certificada + archivo), citando el **art. 3 LCS** para la aceptación separada de exclusiones en seguros.
Preguntas: ¿son correctas las fechas y el alcance del art. 5f tal como los formulamos? ¿Es defendible llamar "contratación reforzada" a ese patrón en pieza comercial? ¿Algo que falte o sobre para no inducir a error?

### C. Activos Digitales / OpenBrick / Régimen Piloto DLT

Publicamos (registro ya aprobado en la web anterior, reutilizado en un artículo y un whitepaper):
- *"OpenBrick fracciona activos inmobiliarios en tokens regulados… g-digital participa, junto con compañías clave del sector como BME, en una de las primeras plataformas de activos financieros tokenizados bajo el Régimen Piloto (Reglamento (UE) 2022/858), con supervisión de la CNMV."*
- No afirmamos en ningún sitio que OpenBrick "tenga permiso", "esté autorizada" ni que opere hoy; tampoco mezclamos MiCA con el Régimen Piloto.
Preguntas: ¿sigue siendo exacto ese registro a fecha de hoy? ¿"una de las primeras plataformas… bajo el Régimen Piloto" es sostenible públicamente? ¿Conviene añadir/quitar algo sobre el estado del proyecto?

### D. Métricas y claims de producto (home, Enterprise Suite, Nosotros)

De fuentes internas (auditoría de contenidos, fichas de producto), publicamos:
- **Cliente 0 Garrigues:** 1.500+ profesionales activos · 3.000+ procesos de firma · 20+ TB custodiados · 500+ data rooms · 280 certificados gestionados · 250+ operaciones M&A sin USB · +40.000 evidencias GoCertius.
- **Reconocimientos:** Top 10 FT Innovative Lawyers Europa · Law.com 2025 (Tecnología Disruptiva) · The Lawyer 2023 (Best firm-wide use of technology).
- **Producto:** rol de *Validador* en Signature Manager (revisión letrada previa a la firma), verificación de versión SHA-256, firma vía WhatsApp con OTP, *"QTSP propio (EADTrust, 51% Garrigues)"*.
Preguntas: ¿son publicables tal cual? ¿Alguna necesita fecha, fuente o reformulación?

### E. Soberanía y seguridad (página Enterprise Suite)

Publicamos:
- *"Datos y operación en la UE (Oracle EU Sovereign Cloud); sin transferencias internacionales problemáticas."*
- *"Infraestructura soberana europea, fuera del alcance de órdenes extraterritoriales"* (en el bloque "Riesgo CLOUD Act").
- *"RSA 4096/8192 y hoja de ruta hacia algoritmos PQC: las firmas de hoy deben verificarse dentro de décadas."*
Preguntas: la segunda frase es mi candidata a suavizar ("diseñada para minimizar la exposición a marcos extraterritoriales"). ¿La reformulo así o la ves defendible? ¿OK el resto?

### F. AI Act (artículo "gobernanza de IA en entornos regulados")

Publicamos el marco por niveles (inaceptable / alto / limitado / mínimo) y que las obligaciones de alto riesgo son en esencia **obligaciones de evidencia** (documentación técnica, registros automáticos, supervisión humana, gobernanza de datos), sin fechas ni importes de sanción. Frase fuerza: *"el regulador no pedirá tu palabra: pedirá tus registros"*. ¿Todo correcto y publicable?

### G. Referencias normativas en los 8 casos de uso del Trust Explorer

Cada caso cita su norma: eIDAS art. 25 (albarán logístico) · LEC/cadena de custodia (foto de siniestro) · LSSI-CE + Ley 16/2011 (crédito por SMS) · Ley 41/2002 (consentimiento informado) · Reg. (CE) 852/2004 + RD 640/2006 (APPCC) · eIDAS art. 43 (notice de curtailment PPA) · Ley 10/2010 PBC + RD 304/2014 + Circular 1/2023 SEPBLAC (KYC) · IDD + art. 3 LCS (ciclo de póliza). Pregunta: ¿alguna cita incorrecta, desactualizada o mal emparejada con su caso?

### H. Decisiones que ya tomé por prudencia (confírmame el criterio)

1. **No citamos la sentencia AP Lleida (abril 2021)** sobre firma simple sin autenticación, por no tener los identificadores oficiales verificados. Si me los confirmas (y el sentido exacto del fallo), la incorporaría como ancla narrativa del artículo de evidencia.
2. **No publicamos** precios internos (1–5 €/notificación), SLOs de la Factoría (99,9–99,95 %, latencias), ni nombres de partners de OpenBrick que solo aparecen en documentos confidenciales (usamos solo BME, ya público).
3. **No publicamos** el argumentario comparativo anti-DocuSign (Schrems II / CLOUD Act / QES-vs-AES) nombrando al competidor: lo tratamos en clave estructural de soberanía. Si queréis una pieza comparativa nombrando competidores, entiendo que exige revisión de publicidad comparativa aparte.
4. Los cuatro artículos de opinión largos y los dos whitepapers llevan disclaimer de divulgación; los artículos de concepto, no. ¿Queréis disclaimer uniforme en todo el blog?

### I. Ronda 2 — contenidos nuevos (agosto 2026)

**I1 — QEL (registro electrónico cualificado).** Publicamos (concepto propio, sección en Activos Digitales, tarjeta eIDAS 2.0 y glosario): la presunción como *"de integridad de los datos y de orden cronológico secuencial único y exacto de las anotaciones"* (arts. 45k-45l eIDAS 2); el Reglamento de Ejecución **(UE) 2025/2531 en vigor desde el 6-ene-2026**; y tres aclaraciones de prudencia — la presunción no cubre la veracidad del contenido ni el cumplimiento sectorial (explícitamente: un QEL no hace nada "conforme a MiCA"), la presunción la aporta el servicio cualificado del QTSP y no la red subyacente, y el efecto cualificado nace con la inclusión del servicio concreto en las listas de confianza. Sobre servicios propios decimos solo que EADTrust *"trabaja en servicios de registro diseñados conforme al marco de control del Reglamento de Ejecución (UE) 2025/2531"*. Preguntas: (1) ¿citas y formulación de la presunción correctas? (2) ¿es publicitable la frase *"no compras una blockchain: compras el derecho a partir de una presunción, en lugar de probar integridad y orden desde cero"*? (3) ¿y la frase *"el registro prueba el orden; quién responde de cada actividad lo determina su licencia"*?

**I2 — Digitalización certificada del papel.** Nuevo caso con la cadena: pacto de digitalización en condiciones (uso probatorio de la copia y gestión segura del papel) → escaneo conforme *"a las guías técnicas de digitalización certificada (PDF/A, imagen fiel, huella y metadatos; referencia: guías CTEAJE)"* → sello de tiempo cualificado + sello de empresa → entrega certificada → archivo cualificado con re-sellado; el resultado como **"original electrónico único"** (entre comillas), con art. 326.4 LEC y arts. 45i-45j; conservación de 6 años citada para seguros. Preguntas: ¿es correcto invocar las guías CTEAJE (ámbito Justicia) como referencia técnica en una pieza comercial transversal? ¿"original electrónico único" necesita matiz adicional? ¿La mención a la "destrucción segura y pactada" del papel es prudente tal cual?

**I3 — Aceptación separada de cláusulas limitativas (caso Seguros).** Publicamos el patrón (pantalla dedicada, lectura completa por scroll, casilla sin premarcar, segundo factor independiente, sellado inmediato) anclado en el **art. 3 LCS**, y como riesgo del escenario "sin": *"la aceptación específica de las exclusiones no queda acreditada y su oponibilidad puede quedar comprometida"*. **No citamos jurisprudencia** (mismo criterio que H.1). Pregunta: ¿formulación correcta y suficientemente prudente para pieza comercial?

**I4 — "Tres servidores MCP publicados".** Nombramos EAD-Factory-MCP, EAD_Enterprise_Suite_MCP y GoCertius_MCP como repositorios públicos del GitHub corporativo, siempre con el verbo "publicados" (nunca "en producción" ni SLAs). ¿OK?

---

**Formato de respuesta que necesito:** una tabla o lista por secciones (A–I) con **OK / MATIZAR / RETIRAR** por punto, la redacción sustitutiva cuando aplique, y al final un bloque "cambios bloqueantes para mantener publicado" vs "mejoras opcionales". Recuerda: el objetivo es **comercial**; busco el mayor impacto defendible, no el máximo blindaje teórico.

---

*Fin del prompt. Nota interna: las respuestas se trasladan al repo (commit de ajuste de copy) y se registran en `docs/REDISENO-editorial-v4.md`.*
