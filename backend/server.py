from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
import os

app = FastAPI(title="g-digital Static Server")

# Serve static assets
STATIC_ROOT = "/app"

@app.get("/api/health")
async def health():
    return {"status": "ok"}

# Serve solution pages
@app.get("/soluciones/{page}")
async def serve_solution(page: str):
    filepath = os.path.join(STATIC_ROOT, "soluciones", page)
    if os.path.exists(filepath):
        return FileResponse(filepath, media_type="text/html")
    return HTMLResponse("<h1>404</h1>", status_code=404)

# Serve CSS
@app.get("/css/{filename}")
async def serve_css(filename: str):
    filepath = os.path.join(STATIC_ROOT, "css", filename)
    if os.path.exists(filepath):
        return FileResponse(filepath, media_type="text/css")
    return HTMLResponse("Not found", status_code=404)

# Serve JS
@app.get("/js/{filename}")
async def serve_js(filename: str):
    filepath = os.path.join(STATIC_ROOT, "js", filename)
    if os.path.exists(filepath):
        return FileResponse(filepath, media_type="application/javascript")
    return HTMLResponse("Not found", status_code=404)

# Serve HTML pages
@app.get("/nosotros.html")
async def nosotros():
    return FileResponse(os.path.join(STATIC_ROOT, "nosotros.html"), media_type="text/html")

@app.get("/recursos.html")
async def recursos():
    return FileResponse(os.path.join(STATIC_ROOT, "recursos.html"), media_type="text/html")

@app.get("/contacto.html")
async def contacto():
    return FileResponse(os.path.join(STATIC_ROOT, "contacto.html"), media_type="text/html")

@app.get("/design_guidelines.json")
async def design_guidelines():
    return FileResponse(os.path.join(STATIC_ROOT, "design_guidelines.json"), media_type="application/json")

# Index / catch-all
@app.get("/")
async def index():
    return FileResponse(os.path.join(STATIC_ROOT, "index.html"), media_type="text/html")

@app.get("/{path:path}")
async def catch_all(path: str):
    filepath = os.path.join(STATIC_ROOT, path)
    if os.path.exists(filepath) and os.path.isfile(filepath):
        return FileResponse(filepath)
    return FileResponse(os.path.join(STATIC_ROOT, "index.html"), media_type="text/html")
