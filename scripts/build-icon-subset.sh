#!/usr/bin/env bash
# Regenera el subset de Phosphor (regular) con los iconos realmente usados en src/.
# Requiere: python3.12 con fonttools+brotli (`python3.12 -m pip install --break-system-packages fonttools brotli`).
# Uso: scripts/build-icon-subset.sh
set -euo pipefail
cd "$(dirname "$0")/.."

WORK=/tmp/phosphor-subset-build
mkdir -p "$WORK"

# 1. Inventario de iconos usados (astro + ts + tsx + js)
grep -rhoE 'ph-[a-z0-9-]+' src/ --include="*.astro" --include="*.ts" --include="*.tsx" --include="*.js" \
  | sort -u > "$WORK/icons-used.txt"
echo "iconos detectados: $(wc -l < "$WORK/icons-used.txt" | tr -d ' ')"

# 2. Fuentes oficiales (regular)
curl -sL -o "$WORK/phosphor-regular.css" "https://unpkg.com/@phosphor-icons/web@2.1.2/src/regular/style.css"
curl -sL -o "$WORK/Phosphor.woff2" "https://unpkg.com/@phosphor-icons/web@2.1.2/src/regular/Phosphor.woff2"

# 3. Codepoints + subset + CSS
python3.12 - "$WORK" << 'EOF'
import re, json, subprocess, sys
work = sys.argv[1]
css = open(f'{work}/phosphor-regular.css').read()
used = [l.strip() for l in open(f'{work}/icons-used.txt') if l.strip()]
mapping = dict(re.findall(r'\.(ph-[a-z0-9-]+):before\s*{\s*content:\s*"\\([0-9a-f]+)"', css))
missing = [i for i in used if i not in mapping]
if missing:
    sys.exit(f"Iconos no encontrados en Phosphor regular: {missing}")
found = {i: mapping[i] for i in used}
open(f'{work}/unicodes.txt','w').write(",".join(f"U+{cp.upper()}" for cp in found.values()))
subprocess.run(["python3.12","-m","fontTools.subset",f"{work}/Phosphor.woff2",
  f"--unicodes-file={work}/unicodes.txt","--flavor=woff2",
  f"--output-file=public/fonts/Phosphor-subset.woff2",
  "--layout-features=*","--no-hinting","--desubroutinize"], check=True)
base = re.search(r'\.ph\s*\{[^}]+\}', css).group(0)
lines = [
 "/* Phosphor regular — subset de marca g-digital. GENERADO por scripts/build-icon-subset.sh.",
 "   Fuente: @phosphor-icons/web@2.1.2 (MIT). No editar a mano. */",
 "@font-face {",
 "  font-family: 'Phosphor';",
 "  src: url('/fonts/Phosphor-subset.woff2') format('woff2');",
 "  font-weight: normal; font-style: normal; font-display: block;",
 "}", "", base, "",
]
lines += [f'.{cls}:before {{ content: "\\{cp}"; }}' for cls, cp in sorted(found.items())]
open('src/styles/phosphor-subset.css','w').write("\n".join(lines) + "\n")
print(f"Subset: {len(found)} iconos → public/fonts/Phosphor-subset.woff2 + src/styles/phosphor-subset.css")
EOF
ls -la public/fonts/Phosphor-subset.woff2 src/styles/phosphor-subset.css
