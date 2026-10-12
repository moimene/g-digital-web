import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { distFiles, distRead } from './helpers.mjs';

const VIEJO = ['Custody Manager', 'cuatro microservicios', '4 microservicios', 'FACTORÍA · MICROSERVICIOS', 'microservicios eIDAS', 'cuatro managers'];
const EXCLUIDO = /dist\/soluciones\/confianza-digital\//; // MOI-684
// «Custody» suelto no se busca: lo lleva TrustLayerDiagram en La Factoría hasta W-5 (MOI-682).

test('ninguna marca VALIDAR llega a dist', () => {
  for (const f of distFiles()) assert.ok(!readFileSync(f, 'utf8').includes('VALIDAR'), f);
});

test('dist sin el modelo antiguo (salvo Confianza Digital, MOI-684)', () => {
  for (const f of distFiles()) {
    if (EXCLUIDO.test(f)) continue;
    const t = readFileSync(f, 'utf8');
    for (const s of VIEJO) assert.ok(!t.toLowerCase().includes(s.toLowerCase()), `${s} en ${f}`);
  }
});

test('Trust Explorer: gestores reales en el simulador', () => {
  for (const page of ['escenarios/index.html', 'escenarios/seguros/index.html']) {
    const h = distRead(page);
    assert.ok(h.includes('LA FACTORÍA · GESTORES'), page);
    const mgrs = [...h.matchAll(/data-mgr="([A-Za-z]+)"/g)].map((m) => m[1]);
    assert.deepEqual(mgrs, ['Evidence', 'Signature', 'Notification', 'Chat'], page);
  }
});

test('demostrador de banca y casos: custodia dentro de Evidence', () => {
  const banca = distRead('escenarios/banca/index.html');
  assert.ok(banca.includes('Evidence Manager (custodia)'));
  assert.ok(!banca.includes('Custody'));
  assert.ok(banca.includes('GESTORES INVOCADOS'));
  for (const slug of ['digitalizacion-certificada', 'ppa-curtailment', 'kyc-videoidentificacion', 'appcc-trazabilidad']) {
    const h = distRead(`recursos/casos/${slug}/index.html`);
    assert.ok(!h.includes('Custody'), slug);
    assert.ok(h.includes('Evidence (custodia)'), slug);
  }
});

test('La Factoría: cabecera y recorrido con el modelo real', () => {
  const h = distRead('soluciones/la-factoria/index.html');
  for (const s of [
    'La Factoría (EAD Factory)',
    'La arquitectura sobre la que construimos Enterprise Suite, GoCertius y proyectos enterprise.',
    'Regulated Platform as a Service',
    'Evidence (Digital Trust)', 'Custodia de evidencias', 'Nube soberana europea',
    'Presunción de fecha (Art. 41.2 eIDAS) · Presunción reforzada (Art. 326.4 LEC)',
    'Testificación con sellado de tiempo', 'Motor de ejecución de contratos',
    'Sello de tiempo cualificado', 'Plantear un proyecto sobre La Factoría',
  ]) assert.ok(h.includes(s), `falta «${s}»`);
  for (const s of ['QTSP interno', 'The Stack', 'Custodia como servicio']) assert.ok(!h.includes(s), `sobra «${s}»`);
  assert.equal((h.match(/<summary/g) || []).length, 3, 'Evidence, Signature y Notification se despliegan; Chat no tiene ficha');
});
