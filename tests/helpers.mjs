import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath: la ruta del proyecto lleva un espacio («nueva web»).
export const ROOT = fileURLToPath(new URL('..', import.meta.url));
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
