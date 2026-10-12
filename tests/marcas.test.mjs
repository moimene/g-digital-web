import { test } from 'node:test';
import assert from 'node:assert/strict';
import { marksIn } from './helpers.mjs';

// Entradas abiertas del registro que viven en cada fichero que toca la PR de MOI-691.
// Cada task añade aquí sus ficheros antes de tocarlos.
export const MARCAS = {
  'src/data/casos-uso.ts': [13, 15, 16],
  'src/data/demo-credito.ts': [8, 15],
  'src/content/casos/digitalizacion-certificada.md': [13, 15],
  'src/content/casos/ppa-curtailment.md': [13],
  'src/pages/soluciones/la-factoria.astro': [4, 5, 21, 22, 28],
  'src/pages/index.astro': [4, 5, 21, 23],
  'src/consts.ts': [23],
  'src/pages/recursos.astro': [5],
  'src/pages/escenarios.astro': [4, 17],
  'src/content/conceptos/mcp-agentes.md': [5, 21, 22],
  'src/content/articulos/firma-internet-agentico.md': [4, 5, 21],
  'src/content/conceptos/compliance-injection.md': [4, 5, 6, 21, 22, 23, 25],
  'src/content/conceptos/contratacion-reforzada.md': [13, 15],
};

for (const [file, nums] of Object.entries(MARCAS)) {
  test(`marcas en ${file}`, () => {
    const m = marksIn(file);
    for (const n of nums) assert.ok(m.has(n), `falta #${n} en ${file}`);
  });
}
