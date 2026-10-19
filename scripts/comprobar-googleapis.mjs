import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
function scan(dir) { for (const e of readdirSync(dir,{withFileTypes:true})) { const p=join(dir,e.name); if(e.isDirectory()) scan(p); else if(/googleapis/i.test(readFileSync(p,'utf8'))) { console.error(`googleapis en ${p}`);process.exitCode=1; } } }
scan('dist');
