---
title: 'AI Act: gobernanza de IA en entornos regulados — de obligación a evidencia'
description: 'El AI Act establece obligaciones escalonadas por riesgo. Clasificación, documentación técnica y registros: cómo hacer el cumplimiento demostrable, no solo declarado.'
pubDate: 2026-08-02
linea: grc
tags: ['ai-act', 'iso-42001', 'agentes-ia', 'worm']
nivel: intermedio
readingTime: 11
featured: false
draft: false
related: ['ia-gris', 'firma-internet-agentico']
glossary: ['ai-act', 'worm', 'iso-42001']
author: 'Equipo g-digital'
tipo: articulo
---

La mayoría de las organizaciones no tiene un problema de IA: tiene un problema de **inventario**. No saben cuántos sistemas de IA usan, dónde están, con qué datos deciden ni quién responde por ellos. El AI Act convierte ese desorden en obligación legal — y la pregunta que hará el regulador no es "¿cumples?" sino "¿puedes demostrarlo?".

## Lo que el AI Act exige, en escalones

El Reglamento europeo de IA gradúa sus obligaciones por nivel de riesgo del sistema:

- **Riesgo inaceptable**: prácticas prohibidas (manipulación, scoring social…). No hay gestión posible: no se despliegan.
- **Alto riesgo**: el corazón del régimen. Sistemas en empleo, crédito, educación, servicios esenciales, justicia… Exigen gestión de riesgos continua, gobernanza y calidad de datos, **documentación técnica**, **registro automático de eventos (logs)**, transparencia de uso, **supervisión humana efectiva** y robustez. Sistemas como el filtrado de CV o el scoring crediticio viven aquí.
- **Riesgo limitado**: obligaciones de transparencia (el usuario debe saber que interactúa con una IA, el contenido sintético debe marcarse).
- **Riesgo mínimo**: sin obligaciones nuevas.

Las obligaciones de alto riesgo tienen un rasgo común que suele pasarse por alto: casi todas son **obligaciones de evidencia**. Documentar, registrar, conservar, demostrar. El regulador no pedirá tu palabra: pedirá tus registros.

## La trampa de la gobernanza declarativa

La respuesta cómoda es el PDF de políticas: "principios de IA responsable" aprobados por el comité. La respuesta que aguanta una inspección es distinta: un inventario vivo, una clasificación por riesgo trazada, controles asignados a obligaciones concretas, y evidencia sellada de datasets, versiones y decisiones.

La distancia entre ambas es la distancia entre *declarar* cumplimiento y *demostrarlo*. El artículo hermano sobre [la «IA gris»](https://g-digital.garrigues.com/es_ES/recursos/blog/ia-gris-espacio-promover-ia-blanca-ia-negra) completa el cuadro de gobierno: entre la IA corporativa aprobada y la prohibida, la que usan tus equipos cada día necesita política explícita (BYOAI), registro y criterios de riesgo — no la ignorancia voluntaria.

## El flujo que hace el cumplimiento operativo

**Obligaciones → Riesgos → Controles → Evidencias → Incidencias.** Ese es el modelo con el que operan nuestras plataformas GRC:

1. **Registro**: cada sistema de IA de la organización en un inventario único — qué hace, con qué datos, para quién.
2. **Clasificación**: nivel de riesgo según AI Act, con la justificación de la clase asignada (trazable, revisable).
3. **Monitorización**: controles asignados, rendimiento y conformidad seguidos en el tiempo — no una foto inicial.
4. **Evidencia**: documentación técnica, decisiones y datasets sellados con lógica **WORM** (write once, read many): lo registrado no se altera después. Eso es lo que hace la conformidad *oponible*.

Es el papel de **AIMS Console**: la consola que hace operativo el gobierno de la IA conforme al AI Act e ISO/IEC 42001, mientras GRC Compass cubre el resto de dominios (RGPD, DORA, NIS2, ESG…).

## La pieza que completa el círculo: tecnología + derecho

La gobernanza de IA no es solo software: alguien tiene que decidir qué controles exige cada obligación, cuándo un sistema cambia de clase de riesgo, qué guardarraíles son suficientes. Por eso el servicio es híbrido: Garrigues define el marco (asesoramiento legal, diseño de gobernanza, análisis de sistemas) y g-digital construye la tecnología que lo hace demostrable. La IA acelera el trabajo; las decisiones las firma gente que responde por ellas.

**Para seguir:** [GRC & IA · la línea](/soluciones/grc-ia) · artículo relacionado: [La firma electrónica en el internet agéntico](/recursos/articulos/firma-internet-agentico) · glosario: [AI Act](/recursos/glosario#ai-act) · [WORM](/recursos/glosario#worm)
