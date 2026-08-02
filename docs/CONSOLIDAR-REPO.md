# Consolidar repos — dejar el repo Git de GitHub = web Astro v4

**Meta:** que `moimene/g-digital-web` (de donde Vercel despliega por Git) contenga el proyecto **Astro**, para que Git y producción queden alineados y un futuro `push` ya no reviva el sitio antiguo.

**Estrategia segura:** rama → **preview de Vercel** → verificar → merge a `main` (producción). Con copia de seguridad del sitio viejo y rollback.

> Origen Astro: `/Users/moisesmenendez/Downloads/DESARROLLO/gdigital/g-digital-astro`
> Clon Git (a confirmar): `~/Dropbox/DESARROLLO/g_digital_nueva web`
> Proyecto Vercel: `g-digital-web` · dominio prod: `g-digital-web-sage.vercel.app`

---

## 0) Confirmar que estás en el clon correcto
```bash
cd "$HOME/Dropbox/DESARROLLO/g_digital_nueva web"
git remote -v          # debe apuntar a github.com/moimene/g-digital-web
git status             # árbol limpio antes de empezar
```
Si `origin` NO es `moimene/g-digital-web`, para y dímelo (clonaríamos el repo correcto en otra carpeta).

## 1) Copia de seguridad del sitio antiguo (rollback garantizado)
```bash
git checkout main && git pull
git branch  legacy-static-$(date +%Y%m%d)
git push -u origin legacy-static-$(date +%Y%m%d)
git tag -a v-legacy-static -m "Sitio HTML estático antes de migrar a Astro" && git push origin v-legacy-static
```

## 2) Rama de migración + volcar el proyecto Astro
```bash
git checkout -b astro-v4

# Sustituye el contenido del repo por el proyecto Astro (sin basura ni .git):
rsync -a --delete \
  --exclude '.git' --exclude 'node_modules' --exclude 'dist' \
  --exclude '.astro' --exclude '.vercel' \
  "/Users/moisesmenendez/Downloads/DESARROLLO/gdigital/g-digital-astro/" \
  "./"

git add -A
git status     # revisa: deben DESAPARECER los .html viejos y APARECER astro.config.mjs, src/, etc.
```
**Nota `vercel.json`:** el repo viejo tenía un `vercel.json` con rewrite `/api/*` a un backend. La web Astro no usa ese backend; si `git status` lo marca como borrado, déjalo borrado **salvo** que ese backend siga en uso (entonces consérvalo: `git checkout -- vercel.json`).

## 3) Commit + push de la rama → preview automático
```bash
git commit -m "feat: migrar web a Astro v4 (branding oficial, infraestructura legal)"
git push -u origin astro-v4
```
Vercel detectará la rama y creará un **Preview Deployment**. Búscalo en el dashboard del proyecto `g-digital-web` (o pásame la URL `…-git-astro-v4-….vercel.app` y lo verifico desde aquí con los logs).

## 4) Ajustes del proyecto en Vercel (una vez)
En *Project → Settings → Build & Deployment*:
- **Framework Preset: Astro** (ahora está en *auto*; fíjalo para que sea determinista).
- **Build Command:** `astro build` · **Output Directory:** `dist` (los pone Astro por defecto).
- **Node.js Version:** si el preview falla por Node, baja de `24.x` a **`22.x`**.

## 5) Verificar el preview y pasar a producción
Cuando el preview esté correcto (las 10 páginas, marca, sin enlaces rotos):
```bash
git checkout main
git merge astro-v4
git push          # esto dispara el deploy de PRODUCCIÓN desde Git
```
Verifica `https://g-digital-web-sage.vercel.app/?nocache=1` (el alias cachea).

## 6) Rollback (si algo sale mal)
- Antes del merge: simplemente no mergees; producción sigue intacta.
- Después del merge: en Vercel, *Deployments → (deploy viejo READY) → Promote to Production*; o en Git `git revert` del merge y `git push`.

## 7) Después: evita la confusión de las dos carpetas
A partir de aquí, **el clon Git es la única fuente de verdad** del proyecto Astro. Trabaja ahí y haz `push` (Vercel desplegará solo). La carpeta `…/Downloads/DESARROLLO/gdigital/g-digital-astro` queda como copia; archívala o renómbrala (p. ej. `_archive-g-digital-astro`) para no volver a editar la versión equivocada.

---

### Resumen del flujo
backup (rama+tag) → rama `astro-v4` → rsync del proyecto Astro → commit/push → **preview** → fijar Framework=Astro → merge a `main` → **producción desde Git** → archivar la carpeta duplicada.
