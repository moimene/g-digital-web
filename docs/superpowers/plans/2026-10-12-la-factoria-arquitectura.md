# La Factoría como arquitectura (MOI-691) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Presentar La Factoría (EAD Factory) en la web con el modelo real (gestores Evidence, Signature, Notification y Chat; la custodia, capacidad de Evidence), sus capacidades por formato y sus tres formatos de uso, desde una fuente única de datos, conservando y marcando todo lo publicado sin respaldo.

**Architecture:** Una fuente única `src/data/factoria.ts` sin imports (la cargan las páginas y los tests de Node). La página `/soluciones/la-factoria` se rehace con dos componentes nuevos que leen esa fuente (`FactoriaRecorrido`, `MatrizCapacidades`); el Trust Explorer, los demostradores, la home, `consts.ts`, Recursos y cuatro textos de la biblioteca pasan al modelo real. Las afirmaciones del registro de validación que siguen publicadas llevan su marca `VALIDAR`, que nunca llega a `dist/`.

**Tech Stack:** Astro 4 (salida estática) + Tailwind 3; pruebas con `node:test` (Node ≥ 22.18, que importa `.ts` sin dependencias); ninguna dependencia nueva.

**Spec:** `docs/superpowers/specs/2026-10-11-la-factoria-arquitectura-design.md`. Constancias de Moisés en MOI-691 (Linear); la de arranque, `#comment-900cd5bb`: «Implementemos ya», «La Factoría completa (MOI-691)», «consideramos todo validado, por favor ya corregimos despues». Los textos nuevos de este plan se dan por validados; si el asesor dice otra cosa, se corrigen después.

## Global Constraints

- Rama `claude/jovial-colden-e1dd62`, base `origin/main` (`3c29ca4`). Se sube y se abre PR con vista previa; **nunca** se incorpora a `main` (regla 2 del protocolo).
- Ninguna dependencia nueva; `package.json` solo gana el script `test`.
- Iconos: solo los que ya están en `src/styles/phosphor-subset.css` (por ejemplo `ph-fingerprint`, `ph-pen-nib`, `ph-envelope-simple`, `ph-chats-circle`, `ph-caret-down`, `ph-robot`, `ph-arrow-right`, `ph-arrow-up-right`). Nada de `ph-duotone`.
- Marcas: `{/* VALIDAR plan:gdw:w-factoria-arquitectura #N */}` en plantillas `.astro`, justo antes del elemento; `// VALIDAR plan:gdw:w-factoria-arquitectura #N` en `.ts` y en el frontmatter `.astro`, en la línea anterior; `# VALIDAR plan:gdw:w-factoria-arquitectura #N` dentro del frontmatter YAML de los `.md`. Varias entradas en una marca: `#21 #22`. Nunca `<!-- -->`, nunca dentro de una cadena ni de un texto visible. `grep -r "VALIDAR" dist/` da 0.
- No se marcan aquí las entradas de D-3 (#35 a #42): son de MOI-662. No se toca `TrustLayerDiagram.astro` (MOI-682), `confianza-digital.astro` ni su infografía (MOI-684), `CertificationsBar.astro` (MOI-662).
- Nombres: «La Factoría (EAD Factory)» en la primera mención de cada página; luego «La Factoría». Gestores: Evidence (Digital Trust), Signature, Notification y Chat. Nunca contar los gestores («cuatro»).
- Textos nuevos: solo lo acreditado hoy; nada de «cualificado» fuera de los textos ya publicados (marcados) y de lo que la TSL nº 189 inscribe para EADTrust; firma «avanzada y simple», sin «solo»; notificación sin categoría jurídica; MCP «publicados», nunca «en producción»; «tus sistemas» y «sin migrar plataformas», nunca «cualquier sistema»; «clientes MCP compatibles» con su aviso literal.
- Prohibido en textos nuevos: «garantiz», «asegur», «blind», «inmunidad», «infraestructura de confianza», plazos, SLA, precios, clientes, competidores, proveedores de nube por nombre, hosts de API.
- Fórmulas de las rondas legales, literales: «Presunción de fecha (Art. 41.2 eIDAS) · Presunción reforzada (Art. 326.4 LEC)» (ronda 1, `law` de Evidence); «clientes MCP compatibles (su publicación no implica SLA, soporte de integración ni compromiso de disponibilidad en producción)» (ronda 2).
- Verde: un solo CTA verde relleno por pantalla (el final, de `LineaPage`); el botón del Trust Explorer pasa a `btn-outline`.
- Nombres prohibidos (clientes, proveedores de nube, redes): en `.trabajo-local/nombres-prohibidos.txt`, uno por línea, excluido por `.git/info/exclude`. Ya existe en el worktree; si falta, el controlador la crea antes de la Task 1. **Nunca** se copian esos nombres a un fichero versionado (plan, spec, tests, PR).
- Commits con `git add <ficheros concretos>` (nunca `-A`) y la línea `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. **Móvil (390 px):** la matriz de capacidades no puede desbordar; bajo 640 px se ve en bloques, sin scroll horizontal. Test en Task 5 (`hidden sm:table` / `sm:hidden`) y captura en Task 8.
2. **Teclado:** cada ficha de gestor se abre con el teclado y el foco se ve. Test en Task 4 (tres `<details>` con `<summary>`: Chat no tiene ficha y va como bloque fijo) y prueba manual en Task 8.
3. **El modelo antiguo reaparece en otra página** (biblioteca, demostradores, JS del simulador): el test de `dist/` recorre todos los `.html` y `.js` salvo Confianza Digital (Task 2 en adelante).
4. **Una marca llega a la web** por usar la sintaxis equivocada: test `dist sin VALIDAR` desde Task 2.
5. **El simulador se rompe en el navegador** al quitar `MANAGER_META` o `Custody`: test de `data-mgr` en Task 2 y consola sin errores en `/escenarios` y `/escenarios/seguros` en Task 8.

---

### Task 1: Harness de pruebas y fuente única `src/data/factoria.ts`

**Files:**
- Create: `src/data/factoria.ts`
- Create: `tests/factoria.test.mjs`
- Create: `tests/helpers.mjs`
- Modify: `package.json` (script `test`)

**Interfaces:**
- Produces: `type Gestor = 'Evidence' | 'Signature' | 'Notification' | 'Chat'`; `interface Ficha { sub: string; body: string; law?: string }`; `GESTORES: readonly GestorInfo[]` con `{ id: Gestor; nombre: string; icon: string; queHace: string; publicado?: Ficha; custodia?: Ficha }`; `ACCESOS`, `PLATAFORMAS`, `TRANSVERSALES`, `CANALES`, `EADTRUST`, `SERVIDORES_MCP`, `FORMATOS_MATRIZ`, `CAPACIDADES`, `MATRIZ_FUENTE`; `tests/helpers.mjs` exporta `read(rel)`, `marksIn(rel)`, `distFiles()`, `distRead(rel)`.

- [ ] **Step 1: Write the failing test**

`tests/helpers.mjs`:

```js
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export const ROOT = new URL('..', import.meta.url).pathname;
export const read = (rel) => readFileSync(join(ROOT, rel), 'utf8');

// Números de entrada del registro marcados en un fichero de src.
export function marksIn(rel) {
  const set = new Set();
  for (const m of read(rel).matchAll(/VALIDAR plan:gdw:w-factoria-arquitectura((?: #\d+)+)/g)) {
    for (const n of m[1].trim().split(/\s+/)) set.add(Number(n.slice(1)));
  }
  return set;
}

export function distFiles(dir = join(ROOT, 'dist')) {
  if (!existsSync(dir)) throw new Error('Falta dist/: ejecuta `npm run build` antes de `npm test`.');
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...distFiles(p));
    else if (/\.(html|js|json|xml)$/.test(name)) out.push(p);
  }
  return out;
}

export const distRead = (rel) => readFileSync(join(ROOT, 'dist', rel), 'utf8');

// Nombres que no pueden aparecer en textos nuevos (clientes, proveedores, redes).
// La lista es local y no se versiona: el repositorio es público.
export function nombresProhibidos() {
  const p = join(ROOT, '.trabajo-local/nombres-prohibidos.txt');
  return existsSync(p) ? read('.trabajo-local/nombres-prohibidos.txt').split('\n').map((l) => l.trim()).filter(Boolean) : null;
}
```

`tests/factoria.test.mjs`:

```js
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
```

`package.json`: añadir en `scripts`:

```json
    "test": "node --test tests/"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module '.../src/data/factoria.ts'`.

- [ ] **Step 3: Write minimal implementation**

`src/data/factoria.ts`:

```ts
// Fuente única de La Factoría (EAD Factory) — MOI-691.
// La leen La Factoría, la home y el Trust Explorer; después, W-5 (MOI-682) y la pila (MOI-684).
// Sin imports: los tests la cargan con `node --test`.

export type Gestor = 'Evidence' | 'Signature' | 'Notification' | 'Chat';

export interface Ficha { sub: string; body: string; law?: string }

export interface GestorInfo {
  id: Gestor;
  nombre: string;      // nombre en la guía de EAD-Factory-MCP
  icon: string;        // Phosphor regular (subset)
  queHace: string;     // texto nuevo
  publicado?: Ficha;   // texto ya publicado en La Factoría, literal (registro)
  custodia?: Ficha;    // solo Evidence: lo publicado como «Custody Manager» (decisión 5)
}

export const GESTORES: readonly GestorInfo[] = [
  {
    id: 'Evidence',
    nombre: 'Evidence (Digital Trust)',
    icon: 'ph-fingerprint',
    queHace: 'Registra las evidencias de cada operación en el expediente, las sella con sello de tiempo y genera el informe del expediente con su paquete de verificación. La custodia de evidencias, interna o externa, es una capacidad suya.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #11 #15 #17 #18
    publicado: {
      sub: 'Inmutabilidad como servicio',
      body: 'Hashing SHA-256 + Qualified Timestamping (TSA). Perfiles XAdES-T/LTA con re-sellado. Verificabilidad offline.',
      law: 'Presunción de fecha (Art. 41.2 eIDAS) · Presunción reforzada (Art. 326.4 LEC)',
    },
    // VALIDAR plan:gdw:w-factoria-arquitectura #11 #15 #19
    custodia: {
      sub: 'Custodia de evidencias',
      body: 'Integridad a largo plazo (LTV). Perfiles PAdES-LTV/XAdES-LTA, re-sellado periódico. Nube soberana europea.',
      law: 'Integridad a largo plazo (LTV) · eIDAS',
    },
  },
  {
    id: 'Signature',
    nombre: 'Signature',
    icon: 'ph-pen-nib',
    queHace: 'Prepara solicitudes de firma electrónica avanzada y simple sobre los documentos del expediente, con firmantes, validadores y observadores, y entrega el documento firmado.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #8 #9 #10 #11 #12
    publicado: {
      sub: 'Firma como servicio',
      body: 'Niveles AES y QES. Perfiles PAdES, XAdES, CAdES. QSCD cloud (Cloud HSM). SDK mobile.',
      law: 'Equivalencia a firma manuscrita (Art. 25.2 eIDAS)',
    },
  },
  {
    id: 'Notification',
    nombre: 'Notification',
    icon: 'ph-envelope-simple',
    queHace: 'Envía notificaciones con sus documentos a uno o varios destinatarios, por los canales de cada uno, y registra el estado de cada envío en el expediente.',
    // VALIDAR plan:gdw:w-factoria-arquitectura #13
    publicado: {
      sub: 'Entrega electrónica certificada',
      body: 'ERDS con prueba de envío, entrega y contenido con sellos cualificados. Comunicaciones laborales, regulatorias y contractuales.',
      law: 'ERDS (Arts. 43-44 Reglamento 910/2014)',
    },
  },
  {
    id: 'Chat',
    nombre: 'Chat',
    icon: 'ph-chats-circle',
    queHace: 'El gestor existe en la Trust API, sin flujo publicado: se activa como proyecto enterprise.',
  },
];

export const ACCESOS = [
  { nombre: 'Trust API', detalle: 'La API REST de La Factoría. La llaman tus sistemas: ERP, CRM, ECM o apps.' },
  { nombre: 'MCP', detalle: 'Servidores MCP publicados. Los invocan tus agentes de IA desde clientes MCP compatibles.' },
] as const;

export const PLATAFORMAS = [
  { nombre: 'Enterprise Suite', href: '/soluciones/enterprise-suite' },
  { nombre: 'GoCertius', href: 'https://gocertius.io' },
  { nombre: 'Proyectos enterprise', href: '/soluciones/la-factoria#proyectos' },
] as const;

export const TRANSVERSALES = [
  { nombre: 'Testificación con sellado de tiempo', detalle: 'Cada evidencia queda fechada y vinculada a su contenido.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #31
  { nombre: 'Motor de ejecución de contratos', detalle: 'Diseñado para que los eventos del expediente disparen acciones hacia terceros.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #32
  { nombre: 'Caja de herramientas documental', detalle: 'Diseñada para preparar y transformar los documentos de cada operación.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #33
  { nombre: 'Anclaje en registro distribuido', detalle: 'Diseñado para anclar además la testificación en un registro distribuido.' },
  // VALIDAR plan:gdw:w-factoria-arquitectura #34
  { nombre: 'Pasarela API B2B con observabilidad', detalle: 'Diseñada como entrada para integraciones entre empresas, con trazas de cada llamada.' },
] as const;

export const CANALES = ['Email', 'SMS', 'WhatsApp', 'Mensajería', 'Noticeman'] as const;

// VALIDAR plan:gdw:w-factoria-arquitectura #7
export const EADTRUST = {
  rotulo: 'Servicios cualificados · eIDAS UE 910/2014',
  fuente: 'Lista de confianza de España nº 189 (24-09-2026)',
  inscritos: [
    'Certificados cualificados de firma electrónica',
    'Certificados cualificados de sello electrónico',
    'Certificados cualificados de autenticación de sitios web',
    'Sello de tiempo cualificado',
  ],
} as const;

export const SERVIDORES_MCP = [
  {
    nombre: 'EAD-Factory-MCP',
    repo: 'https://github.com/g-digital-by-Garrigues/EAD-Factory-MCP',
    de: 'La Factoría (EAD Factory)',
    cubre: 'Expedientes, evidencias selladas, informes, firma y notificación. Sin chat.',
    herramientas: ['evidence_case_file_create', 'evidence_create_sealed', 'signature_request_full', 'notification_request_create'],
    nota: 'Enviar una notificación con notification_request_send exige un cliente con MCP Tasks; desde otros clientes se crea con envío automático y se consulta su estado.',
  },
  {
    nombre: 'EAD_Enterprise_Suite_MCP',
    repo: 'https://github.com/g-digital-by-Garrigues/EAD_Enterprise_Suite_MCP',
    de: 'Enterprise Suite',
    cubre: 'Expedientes, evidencias, dossier certificado, firma y notificación.',
    herramientas: ['case_file_create', 'evidence_seal', 'dossier_certify', 'signature_request_create'],
  },
  {
    nombre: 'GoCertius_MCP',
    repo: 'https://github.com/g-digital-by-Garrigues/GoCertius_MCP',
    de: 'GoCertius',
    cubre: 'Expedientes, evidencias, dossier, notificación y chat. Sin firma.',
    herramientas: ['case_file_create', 'evidence_seal', 'dossier_certify', 'chat_create'],
  },
] as const;

export const FORMATOS_MATRIZ = ['Trust API', 'MCP de La Factoría', 'Enterprise Suite', 'GoCertius', 'Proyecto enterprise'] as const;

export interface Capacidad {
  grupo: 'Núcleo' | 'En plataformas';
  nombre: string;
  celdas: readonly [string, string, string, string, string];
}

export const CAPACIDADES: readonly Capacidad[] = [
  { grupo: 'Núcleo', nombre: 'Expedientes', celdas: ['Sí', 'Sí', 'Sí', 'Sí', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Evidencias selladas con sello de tiempo', celdas: ['Sí', 'Sí', 'Sí, de ficheros', 'Sí, de ficheros', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Informe del expediente con paquete probatorio', celdas: ['Sí: informe firmado y paquete de verificación', 'Sí', 'Sí, dossier certificado', 'Sí, dossier con plantilla estándar', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Notificación', celdas: ['Sí', 'Sí; enviar exige MCP Tasks; si no, envío automático y consulta', 'Sí', 'Sí', 'Sí'] },
  { grupo: 'Núcleo', nombre: 'Firma electrónica avanzada y simple', celdas: ['Sí', 'Sí', 'Sí', 'No', 'Sí'] },
  { grupo: 'En plataformas', nombre: 'Certificados de custodia y dossier con plantillas', celdas: ['No: equivale el informe del expediente', 'No', 'Sí', 'Sí, plantilla estándar', 'Se estudia'] },
  { grupo: 'En plataformas', nombre: 'Usuarios y accesos', celdas: ['No: cuenta de servicio', 'No', 'Parcial: sesión y claves, sin administrar usuarios por API', 'Parcial: sesión y claves, sin administrar usuarios por API', 'Se estudia'] },
  { grupo: 'En plataformas', nombre: 'Chat', celdas: ['Parcial: el gestor existe, sin flujo publicado', 'No', 'No', 'Sí: «Chat Certificado», con Telegram', 'Se estudia'] },
  { grupo: 'En plataformas', nombre: 'Captura atestada de foto, vídeo y web', celdas: ['No', 'No', 'No', 'Solo desde la app', 'Se estudia'] },
];

export const MATRIZ_FUENTE = 'Fuente: documentación publicada de cada API y conector en github.com/g-digital-by-Garrigues, consultada el 11-10-2026. Cada columna de plataforma agrupa la plataforma, su API y su MCP.';
```

Nota: el test `textos nuevos` excluye a propósito `publicado`, `custodia` y `EADTRUST` (texto publicado y marcado, o inscrito en la TSL).

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS (9 tests). Si falta la lista local, el test de nombres sale como `skip`: créala antes (ver Global Constraints).

- [ ] **Step 5: Commit**

```bash
git add src/data/factoria.ts tests/helpers.mjs tests/factoria.test.mjs package.json
git commit -m "feat(factoria): fuente única del modelo real de La Factoría (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: El Trust Explorer usa los gestores reales

**Files:**
- Modify: `src/data/casos-uso.ts` (tipo `Manager` → `Gestor`; `managers` con Custody; `MANAGER_META` sale; marcas)
- Modify: `src/components/TrustSimulator.astro:4`, `:14`, `:69-77`
- Create: `tests/marcas.test.mjs`
- Create: `tests/dist.test.mjs`

**Interfaces:**
- Consumes: `GESTORES`, `type Gestor` de `src/data/factoria.ts`.
- Produces: `CasoUso.managers: Gestor[]`. `MANAGER_META` deja de existir (solo lo usaba `TrustSimulator`).

- [ ] **Step 1: Write the failing test**

`tests/marcas.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { marksIn } from './helpers.mjs';

// Entradas abiertas del registro que viven en cada fichero que toca la PR de MOI-691.
// Cada task añade aquí sus ficheros antes de tocarlos.
export const MARCAS = {
  'src/data/casos-uso.ts': [13, 15, 16],
};

for (const [file, nums] of Object.entries(MARCAS)) {
  test(`marcas en ${file}`, () => {
    const m = marksIn(file);
    for (const n of nums) assert.ok(m.has(n), `falta #${n} en ${file}`);
  });
}
```

`tests/dist.test.mjs`:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL — `falta #13 en src/data/casos-uso.ts`; `Custody Manager en .../dist/soluciones/la-factoria/index.html` (y otros); `LA FACTORÍA · GESTORES` ausente. (El test del modelo antiguo seguirá fallando hasta la Task 7: es el criterio global; cada task reduce la lista.)

- [ ] **Step 3: Write minimal implementation**

`src/data/casos-uso.ts`:
1. Sustituir la línea 5 (`export type Manager = ...`) por:

```ts
import type { Gestor } from './factoria';
```

2. En la interfaz, `managers: Manager[];     // microservicios invocados` → `managers: Gestor[];      // gestores de La Factoría que intervienen`.
3. Los cuatro arrays con Custody pasan a Evidence, sin duplicados: `['Evidence', 'Custody']` (dos veces) → `['Evidence']`; `['Notification', 'Evidence', 'Custody']` → `['Notification', 'Evidence']`; `['Evidence', 'Notification', 'Custody']` → `['Evidence', 'Notification']`.
4. Borrar el bloque final `export const MANAGER_META ... };` (líneas 308-313).
5. Marcas (`//` en la línea anterior a la que contiene el texto):
   - antes de la línea con `features: ['QeDelivery + QTimestamp'` (caso PPA): `// VALIDAR plan:gdw:w-factoria-arquitectura #13 #16`
   - antes de la línea con `endpoint: '/v1/qedelivery/notices'`: `// VALIDAR plan:gdw:w-factoria-arquitectura #13`
   - antes de la línea con `con: { status: 'Notice con presunción legal'`: `// VALIDAR plan:gdw:w-factoria-arquitectura #13`
   - antes de la línea `resumen:` del caso «Digitalización certificada del papel»: `// VALIDAR plan:gdw:w-factoria-arquitectura #13 #15`
   - antes de la línea con `channel: 'qerds'`: `// VALIDAR plan:gdw:w-factoria-arquitectura #13 #15`
   - antes de la línea `con:` del caso «Digitalización certificada del papel»: `// VALIDAR plan:gdw:w-factoria-arquitectura #15`

   (Si una línea citada no existe en la base, se marca la línea que contiene ese texto; la búsqueda manda, no el número.)

`src/components/TrustSimulator.astro`:

```astro
import { type CasoUso } from '../data/casos-uso';
import { GESTORES } from '../data/factoria';
```
(sustituye la línea 4), borrar la línea 14 (`const managersOrder = ...`), y el bloque de `:69-77` queda:

```astro
          <p class="mono text-[10px] text-cloud/45 mb-3 text-center">LA FACTORÍA · GESTORES</p>
          <div class="grid grid-cols-2 gap-2.5">
            {GESTORES.map((g) => (
              <div class="dg-mgr rounded-lg border border-cloud/10 px-3 py-2.5 flex items-center gap-2 opacity-35 transition-all" data-mgr={g.id}>
                <i class={`ph ${g.icon} text-base`}></i>
                <span class="text-[11px] text-cloud/80 leading-tight">{g.id}</span>
              </div>
            ))}
          </div>
```

El script de cliente (`paintManagers`) no cambia: compara `c.managers` con `data-mgr`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build && npm test`
Expected: PASS `marcas en src/data/casos-uso.ts`, `ninguna marca VALIDAR`, `Trust Explorer: gestores reales`; `dist sin el modelo antiguo` sigue en FAIL solo por páginas de las Tasks 3 a 7.

- [ ] **Step 5: Commit**

```bash
git add src/data/casos-uso.ts src/components/TrustSimulator.astro tests/marcas.test.mjs tests/dist.test.mjs
git commit -m "feat(trust-explorer): gestores reales de La Factoría en el simulador (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Demostradores y casos de la biblioteca

**Files:**
- Modify: `src/data/demo-credito.ts` (cinco `managers` y marcas)
- Modify: `src/components/SectorDemo.astro:50`, `:83`, `:102`
- Modify: `src/content/casos/{digitalizacion-certificada,ppa-curtailment,kyc-videoidentificacion,appcc-trazabilidad}.md:10`
- Modify: `tests/marcas.test.mjs`, `tests/dist.test.mjs`

**Interfaces:**
- Consumes: nada nuevo; `EscenarioFases.managers` sigue siendo `string[]`.

- [ ] **Step 1: Write the failing test**

En `tests/marcas.test.mjs`, ampliar `MARCAS`:

```js
  'src/data/demo-credito.ts': [8, 15],
  'src/content/casos/digitalizacion-certificada.md': [13],
  'src/content/casos/ppa-curtailment.md': [13],
```

En `tests/dist.test.mjs`, añadir:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL — `falta #8 en src/data/demo-credito.ts`; `Evidence Manager (custodia)` ausente.

- [ ] **Step 3: Write minimal implementation**

`src/data/demo-credito.ts`, en los cinco escenarios: `'Evidence Manager'` → `'Evidence Manager (custodia)'` y se borra `'Custody Manager'`. Resultado de cada `managers`, por orden de aparición:

```ts
    managers: ['Evidence Manager (custodia)', 'Notification Manager', 'Signature Manager'],
    managers: ['Evidence Manager (custodia)', 'Notification Manager', 'Signature Manager'],
    managers: ['Evidence Manager (custodia)', 'Signature Manager'],
    managers: ['Evidence Manager (custodia)', 'Signature Manager', 'Notification Manager'],
    managers: ['Evidence Manager (custodia)', 'Signature Manager'],
```

Marcas: `// VALIDAR plan:gdw:w-factoria-arquitectura #8` en la línea anterior a cada `description:` que contiene «firma cualificada» (escenarios A, C y D; `grep -n "firma cualificada" src/data/demo-credito.ts`), y `// VALIDAR plan:gdw:w-factoria-arquitectura #15` en la línea anterior a cada `'Ingesta en custodia cualificada',` (cinco).

`src/components/SectorDemo.astro`:
- `:50`: «Cada fase invoca los managers de la Factoría y produce…» → «Cada fase invoca los gestores de La Factoría y produce…» (el resto, igual).
- `:83`: `MANAGERS INVOCADOS` → `GESTORES INVOCADOS`.
- `:102`: borrar la línea `m.includes('Custody') ? 'ph-archive' :` (el chip «Evidence (custodia)» cae en `ph-fingerprint`).

Casos `.md`, línea 10 (`servicio:`) y marca en el frontmatter:
- `digitalizacion-certificada.md`: `servicio: 'Evidence (custodia) + Notification'` y, en la línea siguiente, `# VALIDAR plan:gdw:w-factoria-arquitectura #13`.
- `ppa-curtailment.md`: `servicio: 'Notification + Evidence (custodia)'` y `# VALIDAR plan:gdw:w-factoria-arquitectura #13`.
- `kyc-videoidentificacion.md`: `servicio: 'Evidence (custodia)'`.
- `appcc-trazabilidad.md`: `servicio: 'Evidence (custodia)'`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build && npm test`
Expected: PASS de las marcas nuevas y del test de demostradores; `dist sin el modelo antiguo` sigue en FAIL por La Factoría, home, Recursos y biblioteca (Tasks 4 a 7).

- [ ] **Step 5: Commit**

```bash
git add src/data/demo-credito.ts src/components/SectorDemo.astro src/content/casos/digitalizacion-certificada.md src/content/casos/ppa-curtailment.md src/content/casos/kyc-videoidentificacion.md src/content/casos/appcc-trazabilidad.md tests/marcas.test.mjs tests/dist.test.mjs
git commit -m "feat(demostradores): la custodia pasa a Evidence en banca y casos (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: La Factoría — cabecera y «Qué hay dentro»

**Files:**
- Create: `src/components/FactoriaRecorrido.astro`
- Modify: `src/pages/soluciones/la-factoria.astro` (frontmatter, props de `LineaPage`, secciones «The Stack» y «Cómo se integra»)
- Modify: `tests/dist.test.mjs`

**Interfaces:**
- Consumes: `GESTORES`, `ACCESOS`, `PLATAFORMAS`, `TRANSVERSALES`, `CANALES`, `EADTRUST` de `src/data/factoria.ts`.
- Produces: `<FactoriaRecorrido />` sin props. Un gestor con `publicado` o `custodia` se pinta como `<details>`; sin ellos (Chat), como bloque fijo.

- [ ] **Step 1: Write the failing test**

En `tests/dist.test.mjs`:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL — `falta «La Factoría (EAD Factory)»`.

- [ ] **Step 3: Write minimal implementation**

`src/components/FactoriaRecorrido.astro`:

```astro
---
// Recorrido de una operación por La Factoría (MOI-691), leído de la fuente única.
// W-5 (MOI-682) lo convierte después en diagrama inspeccionable con los mismos datos.
import { ACCESOS, CANALES, EADTRUST, GESTORES, PLATAFORMAS, TRANSVERSALES, type Ficha } from '../data/factoria';
// Solo se despliega el gestor que tiene texto publicado detrás (Chat no lo tiene).
const gestores = GESTORES.map((g) => ({ ...g, fichas: [g.publicado, g.custodia].filter((f): f is Ficha => !!f) }));
const row = 'grid lg:grid-cols-12 gap-x-8 gap-y-3 py-7 border-b';
const tag = 'lg:col-span-3 mono text-[11px] t3 uppercase tracking-wider pt-1';
---
<ol class="border-t" style="border-color:var(--line)">
  <li class={row} style="border-color:var(--line)">
    <p class={tag}>01 · Origen</p>
    <p class="lg:col-span-9 t2 leading-relaxed">
      Tus sistemas (ERP, CRM, ECM o apps) o tus agentes de IA. Junto a ellos, las plataformas construidas sobre La Factoría:
      {PLATAFORMAS.map((p, i) => (<>{i > 0 && ' · '}<a href={p.href} class="link-underline t1">{p.nombre}</a></>))}.
    </p>
  </li>
  <li class={row} style="border-color:var(--line)">
    <p class={tag}>02 · Acceso</p>
    <div class="lg:col-span-9 space-y-2 t2 leading-relaxed">
      {ACCESOS.map((a) => <p><span class="t1 font-medium">{a.nombre}.</span> {a.detalle}</p>)}
    </div>
  </li>
  <li class={row} style="border-color:var(--line)">
    <p class={tag}>03 · Gestores, sobre un expediente común</p>
    <div class="lg:col-span-9 space-y-3">
      {gestores.map((g) => {
        const cabecera = (
          <>
            <i class={`ph ${g.icon} accent text-xl mt-0.5`} aria-hidden="true"></i>
            <span class="flex-1">
              <span class="t1 font-semibold">{g.nombre}</span>
              <span class="block t2 text-sm mt-1 leading-relaxed">{g.queHace}</span>
            </span>
          </>
        );
        return g.fichas.length === 0 ? (
          <div class="rounded-xl border px-5 py-4 flex items-start gap-3" style="border-color:var(--line)">{cabecera}</div>
        ) : (
          <details class="group rounded-xl border px-5 py-4" style="border-color:var(--line)">
            <summary class="cursor-pointer list-none flex items-start gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" style="outline-color:var(--accent)">
              {cabecera}
              <i class="ph ph-caret-down t3 mt-1 transition-transform group-open:rotate-180" aria-hidden="true"></i>
            </summary>
            {g.fichas.map((f) => (
              <div class="mt-4 border-t pt-4" style="border-color:var(--line)">
                <p class="accent text-sm">{f.sub}</p>
                <p class="t2 text-sm mt-2 leading-relaxed">{f.body}</p>
                {f.law && <p class="mono text-[11px] t3 mt-3">{f.law}</p>}
              </div>
            ))}
          </details>
        );
      })}
    </div>
  </li>
  <li class={row} style="border-color:var(--line)">
    <p class={tag}>04 · Capacidades transversales</p>
    <ul class="lg:col-span-9 space-y-2 t2 leading-relaxed">
      {TRANSVERSALES.map((t) => <li><span class="t1 font-medium">{t.nombre}.</span> {t.detalle}</li>)}
    </ul>
  </li>
  <li class={row} style="border-color:var(--line)">
    <p class={tag}>05 · Canales</p>
    <p class="lg:col-span-9 t2">{CANALES.join(' · ')}</p>
  </li>
  <li class={row} style="border-color:var(--line)">
    <p class={tag}>06 · Servicios de confianza de EADTrust</p>
    <div class="lg:col-span-9 t2">
      <p class="t1 font-medium">{EADTRUST.rotulo}</p>
      <ul class="mt-2 space-y-1 text-sm">{EADTRUST.inscritos.map((s) => <li>{s}</li>)}</ul>
      <p class="mono text-[11px] t3 mt-3">{EADTRUST.fuente}</p>
    </div>
  </li>
</ol>
```

En la regla `summary`, añadir a `src/styles/global.css` (una sola vez, junto a las demás utilidades):

```css
summary::-webkit-details-marker{display:none}
```

`src/pages/soluciones/la-factoria.astro`:
- Frontmatter: borrar el array `stack` (líneas 8-13; su texto vive ya en `GESTORES`) y añadir `import FactoriaRecorrido from '../../components/FactoriaRecorrido.astro';`.
- Props de `LineaPage`:

```astro
<LineaPage
  linea="Confianza Digital · Arquitectura"
  tone="green"
  motif="tunnel"
  kicker="La Factoría (EAD Factory)"
  title="La arquitectura sobre la que construimos Enterprise Suite, GoCertius y proyectos enterprise."
  intro="Tus sistemas la usan por la Trust API, su API REST, y tus agentes de IA por MCP. Lo que no viene de serie se construye sobre ella como proyecto."
  cta="Plantear un proyecto sobre La Factoría"
  ctaSub="Cuéntanos qué operación quieres construir sobre La Factoría."
>
```

- Sustituir las secciones «The Stack» (`:37-57`) y «Cómo se integra» (`:59-71`) por una sola:

```astro
  <section class="surface-coal py-20 lg:py-28 border-y border-cloud/10">
    <div class="max-w-7xl mx-auto px-6">
      <SectionIntro
        label="Qué hay dentro"
        title="El recorrido de una operación por La Factoría."
        lead={`La diseña g-digital y EAD Factory la presenta como <span class="mono t1">rPaaS</span> (Regulated Platform as a Service). Tus sistemas y tus agentes entran por la Trust API o por MCP; los gestores trabajan sobre un expediente común, y EADTrust, QTSP del Grupo Garrigues, opera los servicios de confianza.`}
      />
      <div class="mt-12"><FactoriaRecorrido /></div>
      <div class="mt-16"><TrustLayerDiagram /></div>
    </div>
  </section>
```

(El diagrama se queda tal cual: lo rehace W-5 en MOI-682. La cifra «+298 escenarios en 18 sectores.» sale de la entradilla y la recoge la Task 5 en el bloque del Trust Explorer; hasta entonces, el test de la Task 5 la exige.)

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build && npm test`
Expected: PASS `La Factoría: cabecera y recorrido`.

- [ ] **Step 5: Commit**

```bash
git add src/components/FactoriaRecorrido.astro src/pages/soluciones/la-factoria.astro src/styles/global.css tests/dist.test.mjs
git commit -m "feat(la-factoria): cabecera y recorrido de una operación con el modelo real (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: La Factoría — capacidades, formatos y Trust Explorer

**Files:**
- Create: `src/components/MatrizCapacidades.astro`
- Modify: `src/pages/soluciones/la-factoria.astro` (sección MCP `:73-82` y Trust Explorer `:84-103`)
- Modify: `tests/marcas.test.mjs`, `tests/dist.test.mjs`

**Interfaces:**
- Consumes: `CAPACIDADES`, `FORMATOS_MATRIZ`, `MATRIZ_FUENTE`, `SERVIDORES_MCP`.
- Produces: `<MatrizCapacidades />` sin props; ancla `#proyectos`.

- [ ] **Step 1: Write the failing test**

`tests/marcas.test.mjs`, ampliar `MARCAS`:

```js
  'src/pages/soluciones/la-factoria.astro': [4, 5, 21, 22, 28],
```

`tests/dist.test.mjs`:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL — `falta #4 en src/pages/soluciones/la-factoria.astro`; `falta «MCP de La Factoría»`.

- [ ] **Step 3: Write minimal implementation**

`src/components/MatrizCapacidades.astro`:

```astro
---
// Matriz de capacidades × formato de La Factoría (MOI-691), leída de la fuente única.
// Tabla desde 640 px; por debajo, un bloque por capacidad, sin scroll horizontal.
import { CAPACIDADES, FORMATOS_MATRIZ, MATRIZ_FUENTE } from '../data/factoria';
const grupos = ['Núcleo', 'En plataformas'] as const;
---
<div>
  <table class="hidden sm:table w-full text-sm border-collapse">
    <caption class="sr-only">Capacidades de La Factoría en cada formato</caption>
    <thead>
      <tr class="border-b" style="border-color:var(--line)">
        <th scope="col" class="text-left py-3 pr-4 t3 font-normal mono text-[11px] uppercase">Capacidad</th>
        {FORMATOS_MATRIZ.map((f) => <th scope="col" class="text-left py-3 px-3 t1 font-semibold">{f}</th>)}
      </tr>
    </thead>
    {grupos.map((gr) => (
      <tbody>
        <tr><th scope="rowgroup" colspan={6} class="text-left pt-6 pb-2 mono text-[11px] accent uppercase">{gr}</th></tr>
        {CAPACIDADES.filter((c) => c.grupo === gr).map((c) => (
          <tr class="border-b align-top" style="border-color:var(--line)">
            <th scope="row" class="text-left py-3 pr-4 t1 font-medium">{c.nombre}</th>
            {c.celdas.map((v) => <td class="py-3 px-3 t2">{v}</td>)}
          </tr>
        ))}
      </tbody>
    ))}
  </table>
  <div class="sm:hidden space-y-6">
    {CAPACIDADES.map((c) => (
      <section class="border-t pt-4" style="border-color:var(--line)">
        <p class="mono text-[10px] accent uppercase">{c.grupo}</p>
        <h3 class="t1 font-semibold mt-1">{c.nombre}</h3>
        <dl class="mt-3 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
          {c.celdas.map((v, i) => (<><dt class="t3">{FORMATOS_MATRIZ[i]}</dt><dd class="t2">{v}</dd></>))}
        </dl>
      </section>
    ))}
  </div>
  <p class="mono text-[11px] t3 mt-6">{MATRIZ_FUENTE}</p>
</div>
```

`src/pages/soluciones/la-factoria.astro`:
- Frontmatter: `import MatrizCapacidades from '../../components/MatrizCapacidades.astro';` e `import { SERVIDORES_MCP } from '../../data/factoria';`.
- Sustituir la sección «MCP» (`:73-82`) por capacidades y formatos:

```astro
  <section id="capacidades" class="surface-ink py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6">
      <SectionIntro
        label="Capacidades"
        title="Qué puedes hacer en cada formato."
        lead="El núcleo de La Factoría está en todos los formatos; algunas capacidades viven en las plataformas construidas sobre ella o se construyen como proyecto."
      />
      <div class="mt-12"><MatrizCapacidades /></div>
    </div>
  </section>

  <section id="formatos" class="surface-coal py-20 lg:py-28 border-y border-cloud/10">
    <div class="max-w-7xl mx-auto px-6">
      <SectionIntro label="Formatos" title="Cómo se usa La Factoría." />
      <div class="mt-12 grid lg:grid-cols-12 gap-10 items-start">
        <article class="lg:col-span-7">
          <p class="label accent mb-4">Formato principal · Trust API</p>
          {/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}
          <h3 class="display-2 t1 font-semibold">Una llamada REST. Evidencia legal cualificada.</h3>
          {/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}
          <p class="mt-6 t2 leading-relaxed">La Trust API se integra en tus sistemas, sin migrar plataformas. Tu ERP, CRM, ECM, tus apps o tu low-code invocan la Trust API, y cada operación vuelve convertida en evidencia cualificada eIDAS.</p>
          <ul class="mt-6 space-y-3 t2 text-sm leading-relaxed list-disc pl-5">
            <li>API REST de La Factoría (EAD Factory), con los gestores Evidence (Digital Trust), Signature, Notification y Chat sobre un expediente común.</li>
            <li>Autenticación OAuth 2.0 con credenciales de cliente: un token para todos los gestores.</li>
            <li>Entorno de integración antes de producción.</li>
            <li>Acceso por contrato: EADTrust da de alta a tu organización.</li>
          </ul>
          <a href="/contacto" class="link-underline inline-flex items-center gap-2 accent text-sm font-medium mt-7">Solicitar acceso <i class="ph ph-arrow-right" aria-hidden="true"></i></a>
        </article>
        <article class="lg:col-span-5 rounded-2xl border p-8" style="border-color:rgba(var(--accent-rgb),.35);background:rgba(var(--accent-rgb),.08)">
          <p class="label t3 mb-4">Formato secundario · MCP</p>
          {/* VALIDAR plan:gdw:w-factoria-arquitectura #5 */}
          <p class="accent font-semibold flex items-center gap-2 text-lg"><i class="ph ph-robot" aria-hidden="true"></i> Agent-ready: confianza cualificada por MCP</p>
          {/* VALIDAR plan:gdw:w-factoria-arquitectura #21 #22 */}
          <p class="t2 mt-3 leading-relaxed">Expón los gestores de La Factoría como servidor <span class="mono t1">MCP</span>. Tus agentes de IA invocan firma, sello o entrega como herramienta nativa, con los guardrails del QTSP y trazabilidad de cada invocación. La acumulación de innovación que diferencia a g-digital: de la API al agente.</p>
          <p class="t2 mt-3 leading-relaxed">Y no es un roadmap: hay <span class="t1 font-medium">tres servidores MCP publicados</span> en nuestro GitHub — <span class="mono t1">EAD-Factory-MCP</span>, <span class="mono t1">EAD_Enterprise_Suite_MCP</span> y <span class="mono t1">GoCertius_MCP</span> — conectables desde clientes MCP compatibles (su publicación no implica SLA, soporte de integración ni compromiso de disponibilidad en producción). <a href="https://github.com/g-digital-by-Garrigues" target="_blank" rel="noopener" class="link-underline accent">Ver los repositorios <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a></p>
          <ul class="mt-6 space-y-5">
            {SERVIDORES_MCP.map((s) => (
              <li class="border-t pt-4" style="border-color:var(--line)">
                <a href={s.repo} target="_blank" rel="noopener" class="mono t1 link-underline">{s.nombre} <i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
                <p class="t3 text-xs mt-1">Para {s.de}</p>
                <p class="t2 text-sm mt-2">{s.cubre}</p>
                <p class="t3 text-xs mt-2">Herramientas de ejemplo: <span class="mono">{s.herramientas.join(', ')}</span></p>
                {'nota' in s && <p class="t3 text-xs mt-2">{s.nota}</p>}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div id="proyectos" class="mt-16 pt-12 border-t scroll-mt-24" style="border-color:var(--line)">
        <div class="max-w-3xl">
          <p class="label accent mb-4">Cierre · Proyectos enterprise</p>
          <h3 class="display-2 t1 font-semibold">Lo que no viene de serie se construye sobre La Factoría.</h3>
          <p class="mt-6 t2 leading-relaxed">Así construimos Enterprise Suite y GoCertius. Cada proyecto sigue el mismo método: adoptar lo que ya existe, adaptarlo a tu operación o construir una pieza nueva sobre la misma arquitectura. Es el camino para el chat, la captura atestada de foto, vídeo y web, o la orquestación de varios gestores en un mismo proceso.</p>
          <p class="mt-4 t2 leading-relaxed">g-digital diseña el proyecto; EADTrust opera, comercializa y factura los servicios de confianza que intervienen.</p>
        </div>
      </div>
    </div>
  </section>
```

- Bloque del Trust Explorer (`:84-103`): el `lead` pasa a

```astro
          lead={`Elige un caso de uso y compara, paso a paso, la misma operación <span class="t1 font-medium">sin regulación</span> (deuda legal) frente a <span class="accent font-medium">con Trust API</span>: evento del cliente → llamada a la API → resultado legal, con los gestores de La Factoría que intervienen.`}
```

  y, justo después de `</SectionIntro>` (antes del `div` de chips), la cifra trasladada:

```astro
        {/* VALIDAR plan:gdw:w-factoria-arquitectura #28 */}
        <p class="mono text-[11px] t3 mt-5">+298 escenarios en 18 sectores.</p>
```

  El enlace «Abrir el Trust Explorer» pasa de `btn-primary` a `btn-outline`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build && npm test`
Expected: PASS de `marcas en src/pages/soluciones/la-factoria.astro` y `La Factoría: matriz, formatos y Trust Explorer`. (El único `btn-primary` que queda es el de `CTAEditorial`; la cabecera de `LineaPage` no lleva ninguno y `Nav` tampoco.)

- [ ] **Step 5: Commit**

```bash
git add src/components/MatrizCapacidades.astro src/pages/soluciones/la-factoria.astro tests/marcas.test.mjs tests/dist.test.mjs
git commit -m "feat(la-factoria): capacidades por formato, formatos y proyectos enterprise (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Home (sección 04), navegación, Recursos y Trust Explorer

**Files:**
- Modify: `src/pages/index.astro` (`:183`, `:185`, marcas en `:33`, `:46`, `:188`, `:195-207`, `:240`)
- Modify: `src/consts.ts` (`:21`, `:58`, marca en `:55`)
- Modify: `src/pages/recursos.astro` (`:232`, marca en `:256`)
- Modify: `src/pages/escenarios.astro` (`:39`, marcas en `:10`, `:18`, `:38`, `:111`)
- Modify: `tests/marcas.test.mjs`, `tests/dist.test.mjs`

- [ ] **Step 1: Write the failing test**

`tests/marcas.test.mjs`, ampliar `MARCAS`:

```js
  'src/pages/index.astro': [4, 5, 21, 23],
  'src/consts.ts': [23],
  'src/pages/recursos.astro': [5],
  'src/pages/escenarios.astro': [4, 17],
```

`tests/dist.test.mjs`:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL — `falta #4 en src/pages/index.astro`.

- [ ] **Step 3: Write minimal implementation**

`src/pages/index.astro`:
- `:183`: `04 · Confianza Digital · producto estrella` → `04 · Confianza Digital · La Factoría`.
- `:185` (el párrafo; el `h2` de `:184` no se toca: lo cambia la ronda legal 2):

```astro
        <p class="mt-7 t2 leading-relaxed">Dentro de Confianza Digital, <span class="t1 font-semibold">La Factoría (EAD Factory)</span> es la arquitectura sobre la que construimos Enterprise Suite, GoCertius y proyectos enterprise. Tus sistemas la usan por la Trust API, sin migrar plataformas, y tus agentes, por MCP. Sus gestores cubren evidencias con su custodia, firma, notificación y chat.</p>
```

- Marcas: `// VALIDAR plan:gdw:w-factoria-arquitectura #5` en la línea anterior a `'para dar confianza cualificada a tus agentes de IA',` (`heroPhrases`); `// VALIDAR plan:gdw:w-factoria-arquitectura #4` en la línea anterior a la de `dolores` con «Evidencia cualificada eIDAS en cada operación»; `{/* VALIDAR plan:gdw:w-factoria-arquitectura #5 #21 */}` justo antes del `<p class="text-sm t2 mt-2">Expón la misma confianza cualificada…`; `{/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}` justo antes del `<pre` del ejemplo de llamada; `{/* VALIDAR plan:gdw:w-factoria-arquitectura #23 */}` justo antes del `<p` de «Trust API + MCP, SDKs, sandboxes de producto…».

`src/consts.ts`:
- `:21`: `desc: 'Trust API + MCP · el producto'` → `desc: 'Arquitectura base · Trust API · MCP'`.
- `:58`: `keys: [['INFRA', …], …]` →

```ts
    keys: [['PLATAFORMAS', 'Enterprise Suite · GoCertius'], ['ARQUITECTURA', 'La Factoría · Trust API · MCP'], ['BASE', 'QTSP EADTrust']],
```

- `// VALIDAR plan:gdw:w-factoria-arquitectura #23` en la línea anterior al rol «Para IT / Dev» de Confianza Digital (el que dice «JSON-native, webhooks»).

`src/pages/recursos.astro`:
- `:232`: «La Factoría: 4 microservicios eIDAS por API REST o por MCP.» → «La Factoría (EAD Factory): Trust API y MCP.»
- `{/* VALIDAR plan:gdw:w-factoria-arquitectura #5 */}` justo antes del `<div` del término «MCP» del glosario («Confianza cualificada como herramienta nativa…»).

`src/pages/escenarios.astro`:
- `:39`: «La misma operación invoca los microservicios eIDAS de la Factoría y produce…» → «La misma operación invoca los gestores de La Factoría y produce…» (el resto, literal, con «inmutable»).
- `{/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}` justo antes de `<Base` (descripción de `:10`); `{/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}` antes del `<p` de `:18`; `{/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}` antes del `<h3` de `:38`; `{/* VALIDAR plan:gdw:w-factoria-arquitectura #17 */}` antes del `<p` de `:39`; `{/* VALIDAR plan:gdw:w-factoria-arquitectura #4 */}` antes del `<p` de `:111`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build && npm test`
Expected: PASS de las marcas nuevas y de `home 04, navegación y Recursos`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro src/consts.ts src/pages/recursos.astro src/pages/escenarios.astro tests/marcas.test.mjs tests/dist.test.mjs
git commit -m "feat(home): sección 04, navegación y Recursos con La Factoría como arquitectura (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Biblioteca — conceptos y artículo

**Files:**
- Modify: `src/content/conceptos/mcp-agentes.md` (`:17`, marcas)
- Modify: `src/content/articulos/firma-internet-agentico.md` (`:26`, marcas)
- Modify: `src/content/conceptos/compliance-injection.md` (`:25`, `:28`, marcas)
- Modify: `src/content/conceptos/contratacion-reforzada.md` (`:31`, marca)
- Modify: `tests/marcas.test.mjs`

- [ ] **Step 1: Write the failing test**

`tests/marcas.test.mjs`, ampliar `MARCAS`:

```js
  'src/content/conceptos/mcp-agentes.md': [5, 21, 22],
  'src/content/articulos/firma-internet-agentico.md': [4, 5, 21],
  'src/content/conceptos/compliance-injection.md': [4, 5, 6, 21, 22, 23, 25],
  'src/content/conceptos/contratacion-reforzada.md': [13],
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm run build && npm test`
Expected: FAIL — `falta #5 en src/content/conceptos/mcp-agentes.md`; y `dist sin el modelo antiguo` todavía en FAIL por estos cuatro textos.

- [ ] **Step 3: Write minimal implementation**

`mcp-agentes.md:17`:

```md
El **Model Context Protocol (MCP)** es el estándar que permite a un agente de IA descubrir e invocar herramientas externas de forma nativa. g-digital publica tres servidores MCP con licencia MIT: **EAD-Factory-MCP**, el de La Factoría (EAD Factory), con sus gestores de evidencias, firma y notificación; **EAD_Enterprise_Suite_MCP**, para Enterprise Suite, y **GoCertius_MCP**, para GoCertius. Con ellos, un agente corporativo puede sellar una evidencia, solicitar una firma o cursar una notificación como una herramienta más de su flujo.
```

Frontmatter (antes del `---` de cierre): `# VALIDAR plan:gdw:w-factoria-arquitectura #5 #21 #22`.

`firma-internet-agentico.md:26`: sustituir «y la Factoría expone sus cuatro microservicios eIDAS — evidencia, firma, notificación, custodia — como servidor MCP.» por «y g-digital publica EAD-Factory-MCP, el servidor MCP de La Factoría (EAD Factory), con sus gestores de evidencias, firma y notificación.» Frontmatter: `# VALIDAR plan:gdw:w-factoria-arquitectura #4 #5 #21`.

`compliance-injection.md`:
- `:25`: `- **API REST** — la Trust API de La Factoría (EAD Factory), con sus gestores (Evidence, Signature, Notification y Chat) sobre un expediente común, como primitivas JSON-native, con webhooks y SDKs. Una llamada por operación.`
- `:28`: `Para despliegues a escala corporativa, La Factoría se presenta como **rPaaS** (Regulated Platform as a Service): g-digital la diseña y EADTrust, QTSP del Grupo Garrigues, opera sus servicios de confianza, con coste fijo predecible.`
- Frontmatter: `# VALIDAR plan:gdw:w-factoria-arquitectura #4 #5 #6 #21 #22 #23 #25`.

`contratacion-reforzada.md:31`: «— Evidence, Signature, Notification y Custody — operada por el QTSP del grupo, de modo que…» → «— Evidence (con custodia), Signature y Notification, con los servicios de confianza de EADTrust —, de modo que…». Frontmatter: `# VALIDAR plan:gdw:w-factoria-arquitectura #13`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm run build && npm test`
Expected: PASS de **todos** los tests, incluido `dist sin el modelo antiguo`. Repetir en `src` (spec §12.10): `grep -rniE "custody|microservicio" src | grep -v _rescatado` solo debe dar `TrustLayerDiagram.astro` (MOI-682), `confianza-digital.astro` y su infografía (MOI-684) y `glosario/rpas.md` si cita el término.

- [ ] **Step 5: Commit**

```bash
git add src/content/conceptos/mcp-agentes.md src/content/articulos/firma-internet-agentico.md src/content/conceptos/compliance-injection.md src/content/conceptos/contratacion-reforzada.md tests/marcas.test.mjs
git commit -m "feat(recursos): biblioteca con La Factoría y sus servidores MCP (MOI-691)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Verificación, PR y Linear

**Files:**
- Ninguno de código. Registro y comentarios en Linear.

- [ ] **Step 1: Comprobaciones de construcción**

Run: `npm run build && npx astro check && npm test`
Expected: build OK, `astro check` 0 errores y 0 avisos, todos los tests en PASS. `grep -r "VALIDAR" dist/` vacío. `grep -rn "fetch(" src/components/FactoriaRecorrido.astro src/components/MatrizCapacidades.astro` vacío.

- [ ] **Step 2: Comprobaciones en navegador** (`npm run preview`, `http://localhost:4321`)

Con el navegador integrado (o Playwright):
- `/soluciones/la-factoria`, `/soluciones/confianza-digital`, `/` y `/escenarios` a 1440 y 390 px: sin scroll horizontal (`document.documentElement.scrollWidth <= window.innerWidth`); capturas antes (producción) y después.
- Teclado en La Factoría: Tab llega a cada `summary`, Enter abre la ficha y el foco se ve.
- `prefers-reduced-motion: reduce`: nada nuevo se mueve.
- Consola sin errores en `/escenarios`, `/escenarios/seguros` y `/escenarios/banca` al cambiar de caso.
- Contraste AA de la matriz y las fichas en las dos superficies (`t2`/`t3` sobre `surface-coal` y `surface-ink`): ≥ 4,5:1 en texto normal.

- [ ] **Step 3: Lighthouse**

Antes: `https://g-digital-web-sage.vercel.app/soluciones/la-factoria`, `/` y `/soluciones/confianza-digital` (producción = `3c29ca4`). Después: las mismas rutas en `npm run preview`. Con `npx -y lighthouse@12.6.0 <url> --only-categories=performance --output=json --quiet --chrome-flags="--headless"`; anotar LCP y CLS de cada una. Si no hay Chrome, medir LCP y CLS con `PerformanceObserver` desde el navegador integrado y decirlo en la PR.

- [ ] **Step 4: Revisión de contenido antes de subir**

`grep -rniwf .trabajo-local/nombres-prohibidos.txt docs/superpowers src/data/factoria.ts src/components/FactoriaRecorrido.astro src/components/MatrizCapacidades.astro src/pages/soluciones/la-factoria.astro dist/soluciones/la-factoria` vacío (repositorio público, regla 7). Otras páginas ya nombran proveedores (Nosotros, Enterprise Suite, artículos de tokenización): son de D-3 (#41, #42, MOI-662) y no se tocan aquí. Revisar el diff completo contra `origin/main` (`git diff origin/main --stat` y `git diff origin/main -- src`) y confirmar que no altera las fórmulas de las rondas legales (spec §10).

- [ ] **Step 5: Subir la rama y abrir la PR**

```bash
git push -u origin claude/jovial-colden-e1dd62
gh pr create --base main --title "La Factoría como arquitectura (MOI-691)" --body-file <cuerpo>
```

Cuerpo de la PR: qué cambia (por task), que **no se incorpora a `main`** sin autorización en MOI-685, lista de marcas por fichero (tabla `MARCAS` + `factoria.ts`), capturas, Lighthouse antes y después, y la línea final `🤖 Generated with [Claude Code](https://claude.com/claude-code)`. Tras abrirla: `get_status` / `bind_pr` de la app y comprobar la vista previa de Vercel.

- [ ] **Step 6: Linear**

- Registro de validación: anotar traslados y sustituciones con la PR: #1 y #2 sustituidas en sus ubicaciones de esta PR (vía 2; siguen #1 en el diagrama, MOI-682, y #1 y #2 en Confianza Digital, MOI-684); #3 sustituida (vía 2; se cierra al incorporarse la PR); #4, #5, #21, #22 y #28 trasladadas en La Factoría; #7 a #13, #15, #17 a #19 trasladadas a `src/data/factoria.ts`; #31 a #34 con su primera ubicación (`factoria.ts`, pintada en «Qué hay dentro»); líneas nuevas de las marcas en los demás ficheros.
- MOI-691: comentario de agente con el enlace a la PR, el nivel alcanzado («probado» pendiente de las comprobaciones en la vista previa; no «publicado»), lo que queda fuera (W-4/W-5 en MOI-682, la pila en MOI-684, la cabecera de CO-02 en MOI-673) y que publicar exige la autorización de Moisés en MOI-685.

---

## Fuera de este plan

- W-4 (recibo), W-5 (diagrama inspeccionable y traza) y W-G2: MOI-682, sobre la rama de esta PR.
- La pila de Confianza Digital y `EADTRUST.planoBase`: MOI-684 (se añade a `factoria.ts` cuando la use).
- La cabecera de CO-02 (meta-fila, CTA del hero, bloque cURL/JSON/MCP), el ejemplo de `api-ejemplo.ts` (CO-09) y el rótulo de CO-10: Tandas 1 y 2.
- Título de `CertificationsBar`, certificado de ejemplo y marcas de D-3: MOI-662.
- **Criterio 10 de la spec completo** (`grep -rniE "custody|microservicio" dist` vacío): llega con MOI-682 (el nodo «Custody» de `TrustLayerDiagram`, que esta PR conserva bajo el recorrido) y MOI-684 (`confianza-digital.astro:9`). Las tres PR se publican juntas en MOI-685; la vista previa de esta enseña el diagrama antiguo debajo del recorrido nuevo.
- `CTAEditorial` a la izquierda, sin píldora ni escudo y con el glifo de `renglon.ts`: componente compartido, va con MOI-680/681 y las tandas.
- **Condiciones previas a publicar** (spec §9), en MOI-685: 1 (TSA de EADTrust confirmada por escrito) y 2 (prueba de escritura en integración; si falla, «Expedientes» y «Evidencias selladas» de la Trust API pasan a «Parcial» en `CAPACIDADES`).
- Criterio 14 sobre todo `dist`: hoy fallaría por páginas que ya nombran proveedores (D-3, MOI-662); esta PR lo aplica a sus ficheros nuevos y a La Factoría.
