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

test('La Factoría: matriz, formatos y Trust Explorer', () => {
  const h = distRead('soluciones/la-factoria/index.html');
  for (const s of [
    'MCP de La Factoría', 'Firma electrónica avanzada y simple', 'Fuente: documentación publicada',
    'Una llamada REST. Evidencia legal cualificada.',
    'cada operación vuelve convertida en evidencia cualificada eIDAS',
    'Agent-ready: confianza cualificada por MCP',
    'con los guardrails del QTSP y trazabilidad de cada invocación',
    'clientes MCP compatibles (su publicación no implica SLA, soporte de integración ni compromiso de disponibilidad en producción)',
    'https://github.com/g-digital-by-Garrigues/EAD-Factory-MCP',
    'https://github.com/g-digital-by-Garrigues/EAD_Enterprise_Suite_MCP',
    'https://github.com/g-digital-by-Garrigues/GoCertius_MCP',
    'id="proyectos"', 'adoptar lo que ya existe',
    'con los gestores de La Factoría que intervienen', '+298 escenarios en 18 sectores.',
  ]) assert.ok(h.includes(s), `falta «${s}»`);
  assert.match(h, /class="[^"]*hidden sm:table/, 'tabla oculta bajo 640 px');
  assert.match(h, /class="[^"]*sm:hidden/, 'bloques bajo 640 px');
  assert.equal((h.match(/btn-primary/g) || []).length, 1, 'un solo CTA verde relleno (el final)');
});

test('home 04, navegación y Recursos con el modelo real', () => {
  const home = distRead('index.html');
  assert.ok(home.includes('04 · Confianza Digital · La Factoría'));
  assert.ok(home.includes('es la arquitectura sobre la que construimos Enterprise Suite, GoCertius y proyectos enterprise'));
  assert.ok(home.includes('sin migrar plataformas'));
  assert.ok(home.includes('Arquitectura base · Trust API · MCP'));
  for (const k of ['PLATAFORMAS', 'ARQUITECTURA', 'BASE']) assert.ok(home.includes(`>${k}<`), k);
  assert.ok(distRead('recursos/index.html').includes('La Factoría (EAD Factory): Trust API y MCP.'));
  assert.ok(distRead('escenarios/index.html').includes('invoca los gestores de La Factoría'));
});

test('fichas: el giro del icono se detiene con movimiento reducido', () => {
  const h = distRead('soluciones/la-factoria/index.html');
  // Los de las fichas (group-open); el menú tiene sus propios caret-down.
  const carets = [...h.matchAll(/<i class="([^"]*ph-caret-down[^"]*group-open[^"]*)"/g)].map((m) => m[1]);
  assert.equal(carets.length, 3);
  for (const c of carets) assert.match(c, /motion-reduce:transition-none/, c);
});

// Pase de correcciones de la revisión final (MOI-691).
const body = (h) => h.slice(h.indexOf('<body'));

test('«clientes MCP compatibles» siempre lleva su aviso (ronda 2)', () => {
  for (const f of distFiles()) {
    const t = readFileSync(f, 'utf8');
    for (const m of t.matchAll(/clientes MCP compatibles/g)) {
      assert.ok(t.startsWith(' (su publicación no implica SLA', m.index + m[0].length), `sin aviso en ${f}`);
    }
  }
});

test('La Factoría: nombres y entradillas sin sobreafirmar', () => {
  const h = distRead('soluciones/la-factoria/index.html');
  assert.ok(!h.includes('EAD Factory la presenta'), 'EAD Factory como otro actor');
  assert.equal((body(h).match(/\(EAD Factory\)/g) || []).length, 1, '«(EAD Factory)» solo en la primera mención');
  assert.ok(!h.includes('en todos los formatos'), 'el núcleo no está en todos los formatos (GoCertius no firma)');
  assert.ok(!h.includes('Cierre · Proyectos enterprise'));
  assert.ok(h.includes('Formato a medida · Proyectos enterprise'));
  assert.match(h, /<title>La Factoría \(EAD Factory\)[^<]*<\/title>/);
  assert.match(h, /<meta name="description" content="La Factoría \(EAD Factory\) es la arquitectura/);
});

test('La Factoría: los enlaces a plataformas del recorrido se ven como enlaces', () => {
  const h = distRead('soluciones/la-factoria/index.html');
  const ol = h.slice(h.indexOf('<ol'), h.indexOf('</ol>'));
  assert.ok(ol.includes('01 · Origen'));
  const clases = [...ol.matchAll(/<a href="[^"]*" class="([^"]*)"/g)].map((m) => m[1]);
  assert.equal(clases.length, 3);
  for (const c of clases) assert.match(c, /(^|\s)underline(\s|$)/, c);
});

test('home y Trust Explorer: el chat no se sobreafirma y los gestores se llaman igual', () => {
  const home = distRead('index.html');
  assert.ok(!home.includes('firma, notificación y chat'));
  assert.ok(home.includes('el de chat se activa como proyecto enterprise'));
  const esc = distRead('escenarios/index.html');
  assert.ok(!esc.includes('managers que intervienen'));
  assert.ok(esc.includes('gestores que intervienen'));
});

test('artículo: las herramientas citadas son de EAD-Factory-MCP', () => {
  const h = distRead('recursos/articulos/firma-internet-agentico/index.html');
  assert.ok(!h.includes('trust.seal_evidence') && !h.includes('trust.request_signature'));
  assert.ok(h.includes('evidence_create_sealed') && h.includes('signature_request_full'));
});
