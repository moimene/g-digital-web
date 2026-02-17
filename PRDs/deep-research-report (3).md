# PRD reformada para la revisión del sitio web de g-digital

## Resumen ejecutivo
Reforma orientada a implementación: (i) legalidad/certeza en servicios de confianza (eIDAS) con verificación trazable; (ii) aterrizar 4 líneas de negocio en páginas/destinos reales (incl. GoCertius, Enterprise Suite y API); (iii) convertir Recursos en hub priorizado (migración + SEO); (iv) instrumentación CRM/analítica y criterios de aceptación por componente. citeturn2search2turn2search0turn27search4

## Texto legal eIDAS y verificación en Trusted Lists
**Texto legal a añadir (en “Notas legales > Servicios de confianza (eIDAS)”):** “entity["company","EADTrust","qtsp spain"] es un Prestador Cualificado de Servicios de Confianza. La cualificación aplica por *servicio* y únicamente cuando proveedor/servicio figuran como ‘qualified’ en las Trusted Lists oficiales (TSL nacional y navegador de la entity["organization","Comisión Europea","eu executive body"]).” citeturn27search4turn19search2turn29search11turn24search8  
**Cómo comprobar (pasos operativos):** 1) abrir el eIDAS Dashboard/Trusted List Browser; 2) seleccionar España; 3) buscar “EADTrust”; 4) validar “status=qualified” y el *tipo de servicio* concreto. Alternativa: descargar TSL España (PDF/XML) desde el supervisor español y buscar el prestador y el servicio. citeturn29search11turn27search4turn19search2

## Líneas de negocio y mapping de páginas
```text
MAPA (línea → páginas actuales → CTA P/S → destino)
Confianza Digital → g-digital Soluciones; GoCertius; Enterprise Suite (EADTrust); GoCertius API → “Ver capacidades” / “Contactar para integración” → Soluciones / Contacto (prefill: linea=Confianza Digital; intención=integración)
Tecnología de Contratos → Signature Manager (Enterprise Suite) → “Ver enfoque por fases” / “Solicitar workshop” → [COMPLETAR: URL landing Contratos] / Contacto (prefill: linea=Tecnología de Contratos; intención=workshop)
Activos Digitales → g-digital Soluciones (bloque blockchain/partners) → “Explorar iniciativas” / “Hablar con el equipo” → Soluciones (ancla blockchain) / Contacto (prefill: linea=Activos Digitales; intención=conversación)
Servicios legales productivizados (GRC/IA) → [COMPLETAR: URL] → “Ver demo” / “Solicitar piloto” → [COMPLETAR: URL] / Contacto (prefill: linea=Servicios GRC/IA; intención=piloto)

URLs detectadas:
- https://g-digital.garrigues.com/es_ES/soluciones
- https://g-digital.garrigues.com/es_ES
- https://www.gocertius.io/
- https://www.eadtrust.eu/en/legaltech-solutions/
- https://www.eadtrust.eu/en/legaltech-solutions/enterprise-suite/signature-manager/
- https://api.gocertius.gocertius.io/apidoc
```
citeturn2search0turn2search2turn3search1turn4view0turn7view0turn10view0

## Recursos y migración
```text
Artículos prioritarios (título → línea/tag → resumen → URL)
“La IA gris…” → Servicios GRC/IA (Riesgos/Seguridad/Políticas) → Gobierno de IA “permitida” (BYOAI) para equilibrar innovación y control → https://g-digital.garrigues.com/es_ES/recursos/blog/ia-gris-espacio-promover-ia-blanca-ia-negra
“Servicios de confianza regulada…” → Confianza Digital + Activos Digitales (eIDAS/Web3/Tokenización) → Infraestructura legal de Internet y confianza regulada → https://g-digital.garrigues.com/es_ES/recursos/blog/servicios-confianza-regulada-capa-seguridad-juridica-internet-europa
Plan migración (mínimo): P0 mantener URLs; si cambian, 301 1:1; conservar fecha/autor/tags; metatítulos+descripciones; canonicals; sitemap; revisión enlaces internos; schema Article; QA de indexación.
```
citeturn12view0turn12view1turn2search9

## Microcopy final y requisitos de implementación
**Microcopy base:** usar *exactamente* el microcopy aportado (nav, CTAs, hero, cards, “Notas legales”, formulario). **Añadidos:** (i) texto QTSP anterior; (ii) claim “Derecho computable”.  
**Claim corporativo (visión):** “Derecho computable: convertimos garantías legales en tecnología integrable (API/modular) para procesos críticos.” (Evitar promesas absolutas; sustentar con verificación en TL; revisión previa de Legal). citeturn24search8turn27search4turn13search1  
**Variantes microcopy:** Hero: “Derecho computable para procesos críticos.” Cards: “Cumplimiento y evidencia, por diseño.” Footer: “Tecnología sólida con enfoque legal.”  
**Implementación (mínimo):** componentes header/hero/cards/acordeón “Notas legales”/form contacto; CRM hidden fields: `linea_interes`, `intencion`, `idioma`, `fuente_utm`; analítica: `cta_click`, `card_click`, `form_submit`, `form_success`, `form_error`.  
**Criterios de aceptación (resumen):** CTAs navegan a destino correcto; prefill CRM siempre; validaciones y RGPD obligatorios conforme entity["organization","Agencia Española de Protección de Datos","dp authority spain"] y RGPD; cookies/CMP según guía; accesibilidad conformidad WCAG 2.1 AA. citeturn13search0turn13search2turn13search3turn13search6