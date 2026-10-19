import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
function run(args) {
 const r = spawnSync('npm', args, {stdio:'inherit'});
 if (r.status !== 0) process.exit(r.status ?? 1);
}
// Sin excepciones: incluye comentarios, frontmatter y contenido no publicado.
const src = spawnSync(process.execPath, ['scripts/comprobar-src.mjs'], {stdio:'inherit'});
if (src.status !== 0) process.exit(src.status ?? 1);
run(['run','astro','--','check']);
run(['run','build']);
let errores = 0;
const prohibidas = [/googleapis/i, /infraestructura de confianza/i, /garantiz/i, /inversión de la carga/i, /validez legal/i, /VALIDAR/i];
// No hay búsquedas desactivadas ni excepciones D-3 para estas frases.
// Solo a-l: no confundir 45 decies con una cita inglesa ni 45 con cifras/hex.
// Se exige la numeración española correspondiente ANTES de cada referencia inglesa,
// en el mismo bloque de texto (hasta 300 caracteres). Los rangos comprueban ambos extremos.
const esp = {a:'bis',b:'ter',c:'quater',d:'quinquies',e:'sexies',f:'septies',g:'octies',h:'nonies',i:'decies',j:'undecies',k:'duodecies',l:'terdecies'};
function scan(dir) {
 for(const e of readdirSync(dir,{withFileTypes:true})) {
  const p=join(dir,e.name); if(e.isDirectory()){scan(p);continue;}
  // Recursos binarios no contienen copy publicable; HTML, JS, CSS, SVG, JSON y texto sí.
  if(!/\.(html|js|css|svg|json|txt|xml)$/i.test(p)) continue;
  const raw=readFileSync(p,'utf8');
  // Vite puede escapar los acentos de los literales JS.
  const s=raw.replace(/\\u([a-f\d]{4})/gi,(_,h)=>String.fromCharCode(parseInt(h,16)));
  for(const r of prohibidas) if(r.test(s)){console.error(`${p}: patrón vetado ${r}`);errores++;}
  const text=s.replace(/<[^>]*>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/\s+/g,' ');
  for(const m of text.matchAll(/(?<![\w])45([a-l])(?![\w])/gi)) {
   const before=text.slice(Math.max(0,m.index-300),m.index);
   // Segundo extremo del rango comparte el preámbulo español del primero.
   if(!new RegExp(`\\b45\\s+(?:${esp[m[1].toLowerCase()]})\\b`,'i').test(before)) {
    console.error(`${p}: cita inglesa sin numeración española previa: ${m[0]} (${before.slice(-110)})`); errores++;
   }
  }
 }
}
scan('dist');
if(errores) {console.error(`Verificación fallida: ${errores} hallazgos.`);process.exit(1);}
console.log('Verificación local correcta: astro check, build y búsquedas en dist/.');
