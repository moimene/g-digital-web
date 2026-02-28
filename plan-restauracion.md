# PLAN DE RESTAURACIÓN — 27 Feb 2026

## DIAGNÓSTICO

### Causa raíz
El batch sed de propagación UX (Fase 2) falló parcialmente:
- ✅ Google Fonts link actualizado a Poppins+Rubik en TODAS las páginas
- ✅ Clases CSS font-serif → font-heading en TODAS las páginas
- ✅ rounded-3xl → rounded-xl en TODAS las páginas
- ❌ Tailwind config NO actualizado en 26 de 27 páginas (solo index.html correcto)
  - Las páginas siguen teniendo: `fontFamily:{serif:['Playfair Display'],sans:['Manrope']}`
  - Pero las clases ahora dicen `font-heading` y `font-body` que NO existen en ese config
  - Resultado: fonts caen a browser defaults, aspecto roto

### Páginas a restaurar (según usuario)
1. **Contract Tech** (/soluciones/contract-tech.html)
2. **Recursos** (/recursos.html) 
3. **Nosotros** (/nosotros.html)

### Páginas que están bien (NO tocar)
- Confianza Digital
- Activos Digitales
- LegalTech & IA

### Fix necesario
Actualizar el Tailwind config en TODAS las 26 páginas restantes para que defina:
```
fontFamily:{heading:['Poppins','Century Gothic','sans-serif'],body:['Rubik','Calibri','sans-serif'],mono:['JetBrains Mono','monospace']}
```

Y verificar que `font-body` está en el body tag.
