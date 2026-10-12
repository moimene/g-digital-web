import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  GESTORES, ACCESOS, PLATAFORMAS, TRANSVERSALES, CANALES, EADTRUST,
  SERVIDORES_MCP, FORMATOS_MATRIZ, CAPACIDADES, MATRIZ_FUENTE,
} from '../src/data/factoria.ts';
import { marksIn, nombresProhibidos } from './helpers.mjs';

const nuevos = () => JSON.stringify([
  GESTORES.map((g) => [g.nombre, g.queHace]), ACCESOS, PLATAFORMAS, TRANSVERSALES,
  CANALES, SERVIDORES_MCP, FORMATOS_MATRIZ, CAPACIDADES, MATRIZ_FUENTE,
]);

test('gestores del modelo real, sin Custody', () => {
  assert.deepEqual(GESTORES.map((g) => g.id), ['Evidence', 'Signature', 'Notification', 'Chat']);
  assert.equal(GESTORES[0].nombre, 'Evidence (Digital Trust)');
  assert.ok(!JSON.stringify(GESTORES).includes('Custody'));
  assert.equal(GESTORES[0].custodia.sub, 'Custodia de evidencias');
});

test('lo publicado pasa literal a las fichas (registro)', () => {
  const [ev, sig, not] = GESTORES;
  assert.equal(ev.publicado.law, 'Presunción de fecha (Art. 41.2 eIDAS) · Presunción reforzada (Art. 326.4 LEC)');
  assert.equal(ev.publicado.body, 'Hashing SHA-256 + Qualified Timestamping (TSA). Perfiles XAdES-T/LTA con re-sellado. Verificabilidad offline.');
  assert.equal(ev.custodia.body, 'Integridad a largo plazo (LTV). Perfiles PAdES-LTV/XAdES-LTA, re-sellado periódico. Nube soberana europea.');
  assert.equal(sig.publicado.body, 'Niveles AES y QES. Perfiles PAdES, XAdES, CAdES. QSCD cloud (Cloud HSM). SDK mobile.');
  assert.equal(sig.publicado.law, 'Equivalencia a firma manuscrita (Art. 25.2 eIDAS)');
  assert.equal(not.publicado.law, 'ERDS (Arts. 43-44 Reglamento 910/2014)');
});

test('textos nuevos sin calificaciones ni promesas vetadas', () => {
  const t = nuevos();
  for (const re of [/cualificad/i, /garantiz/i, /asegur/i, /blind/i, /inmunidad/i,
    /infraestructura de confianza/i, /cuatro/i, /en producción/i]) {
    assert.doesNotMatch(t, re, `texto nuevo con ${re}`);
  }
  const sig = GESTORES.find((g) => g.id === 'Signature');
  assert.match(sig.queHace, /avanzada y simple/);
  assert.doesNotMatch(sig.queHace, /solo|25\.2/i);
  assert.doesNotMatch(GESTORES.find((g) => g.id === 'Notification').queHace, /4[34]|certificad/i);
});

test('textos nuevos sin nombres de la lista local', (t) => {
  const lista = nombresProhibidos();
  if (!lista) return t.skip('falta .trabajo-local/nombres-prohibidos.txt');
  const texto = nuevos().toLowerCase();
  for (const n of lista) assert.ok(!new RegExp(`\\b${n.toLowerCase()}\\b`).test(texto), `nombre prohibido: ${n}`);
});

test('EADTrust: solo lo que inscribe la TSL', () => {
  assert.equal(EADTRUST.inscritos.length, 4);
  assert.ok(EADTRUST.inscritos.every((s) => /cualificad/.test(s)));
  assert.match(EADTRUST.fuente, /nº 189/);
});

test('servidores MCP publicados, con su repositorio', () => {
  assert.deepEqual(SERVIDORES_MCP.map((s) => s.nombre), ['EAD-Factory-MCP', 'EAD_Enterprise_Suite_MCP', 'GoCertius_MCP']);
  for (const s of SERVIDORES_MCP) assert.equal(s.repo, `https://github.com/g-digital-by-Garrigues/${s.nombre}`);
  assert.match(SERVIDORES_MCP[0].cubre, /Sin chat/);
  assert.match(SERVIDORES_MCP[2].cubre, /Sin firma/);
});

test('matriz: cinco formatos y valores del vocabulario', () => {
  assert.equal(FORMATOS_MATRIZ.length, 5);
  for (const c of CAPACIDADES) {
    assert.equal(c.celdas.length, 5, c.nombre);
    for (const v of c.celdas) assert.match(v, /^(Sí|No|Parcial|Se estudia|Solo)(?![\wáéíóúñ])/, `${c.nombre}: ${v}`);
  }
});

test('transversales: la testificación y las cuatro piezas marcadas', () => {
  assert.equal(TRANSVERSALES[0].nombre, 'Testificación con sellado de tiempo');
  assert.equal(TRANSVERSALES.length, 5);
});

test('marcas del registro en factoria.ts', () => {
  const m = marksIn('src/data/factoria.ts');
  for (const n of [7, 8, 9, 10, 11, 12, 13, 15, 17, 18, 19, 31, 32, 33, 34]) assert.ok(m.has(n), `falta #${n}`);
});

test('Chat dice qué hace, sin prometer un flujo publicado', () => {
  const chat = GESTORES.find((g) => g.id === 'Chat');
  assert.match(chat.queHace, /conversaciones/);
  assert.match(chat.queHace, /proyecto enterprise/);
});

test('el acceso MCP no usa «clientes MCP compatibles» sin su aviso', () => {
  assert.doesNotMatch(ACCESOS[1].detalle, /clientes MCP compatibles/);
});
